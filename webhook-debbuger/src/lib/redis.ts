import Redis from 'ioredis';
import { v4 as uuidv4 } from 'uuid';
import type { Webhook, WebhookRequest } from '@/types/webhook';

/**
 * Redis client singleton instance.
 */
const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  retryStrategy: (times: number) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

/**
 * Gets the webhook TTL from environment variables.
 *
 * @returns The TTL in seconds (default: 86400 = 24 hours)
 */
function getWebhookTTL(): number {
  return parseInt(process.env.WEBHOOK_TTL_SECONDS || '86400');
}

/**
 * Creates a new webhook endpoint.
 *
 * @param baseUrl - The base URL of the application
 * @returns A promise that resolves to the created webhook
 */
export async function createWebhook(baseUrl: string): Promise<Webhook> {
  const id = uuidv4();
  const now = Date.now();
  const ttl = getWebhookTTL();
  const expiresAt = now + ttl * 1000;

  const webhook: Webhook = {
    id,
    createdAt: now,
    expiresAt,
    url: `${baseUrl}/api/webhook/${id}`,
  };

  const key = `webhook:${id}`;
  await redis.setex(key, ttl, JSON.stringify(webhook));

  return webhook;
}

/**
 * Gets a webhook by its ID.
 *
 * @param webhookId - The webhook identifier
 * @returns A promise that resolves to the webhook or null if not found
 */
export async function getWebhook(webhookId: string): Promise<Webhook | null> {
  const key = `webhook:${webhookId}`;
  const data = await redis.get(key);

  if (!data) {
    return null;
  }

  return JSON.parse(data) as Webhook;
}

/**
 * Stores a webhook request in Redis.
 *
 * @param webhookId - The webhook identifier
 * @param request - The request data
 * @returns A promise that resolves to the request ID
 */
export async function storeWebhookRequest(
  webhookId: string,
  request: Omit<WebhookRequest, 'id'>
): Promise<string> {
  const requestId = uuidv4();
  const webhookRequest: WebhookRequest = {
    ...request,
    id: requestId,
  };

  const key = `webhook:${webhookId}:request:${requestId}`;
  const ttl = getWebhookTTL();

  // Store request data with TTL
  await redis.setex(key, ttl, JSON.stringify(webhookRequest));

  // Add to requests list
  await redis.lpush(`webhook:${webhookId}:requests`, requestId);
  await redis.expire(`webhook:${webhookId}:requests`, ttl);
  
  // Keep last 100 requests
  await redis.ltrim(`webhook:${webhookId}:requests`, 0, 99);

  // Publish to channel for real-time updates
  await redis.publish(`webhook:${webhookId}:new-request`, JSON.stringify(webhookRequest));

  return requestId;
}

/**
 * Gets all requests for a webhook.
 *
 * @param webhookId - The webhook identifier
 * @returns A promise that resolves to an array of webhook requests
 */
export async function getWebhookRequests(webhookId: string): Promise<WebhookRequest[]> {
  const requestIds = await redis.lrange(`webhook:${webhookId}:requests`, 0, -1);

  if (requestIds.length === 0) {
    return [];
  }

  const requests: WebhookRequest[] = [];

  for (const requestId of requestIds) {
    const key = `webhook:${webhookId}:request:${requestId}`;
    const data = await redis.get(key);

    if (data) {
      requests.push(JSON.parse(data) as WebhookRequest);
    }
  }

  return requests;
}

/**
 * Gets a specific webhook request.
 *
 * @param webhookId - The webhook identifier
 * @param requestId - The request identifier
 * @returns A promise that resolves to the webhook request or null if not found
 */
export async function getWebhookRequest(
  webhookId: string,
  requestId: string
): Promise<WebhookRequest | null> {
  const key = `webhook:${webhookId}:request:${requestId}`;
  const data = await redis.get(key);

  if (!data) {
    return null;
  }

  return JSON.parse(data) as WebhookRequest;
}

/**
 * Subscribes to new webhook requests for real-time updates.
 *
 * @param webhookId - The webhook identifier
 * @param callback - Callback function to handle new requests
 * @returns A Redis instance configured as subscriber
 */
export function subscribeToWebhookRequests(
  webhookId: string,
  callback: (request: WebhookRequest) => void
): Redis {
  const subscriber = redis.duplicate();

  subscriber.subscribe(`webhook:${webhookId}:new-request`, (err) => {
    if (err) {
      console.error('Failed to subscribe:', err);
    }
  });

  subscriber.on('message', (channel, message) => {
    if (channel === `webhook:${webhookId}:new-request`) {
      const request = JSON.parse(message) as WebhookRequest;
      callback(request);
    }
  });

  return subscriber;
}

export { redis };

