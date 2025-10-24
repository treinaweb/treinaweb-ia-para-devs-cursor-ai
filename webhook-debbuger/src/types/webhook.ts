/**
 * Represents a webhook endpoint.
 */
export interface Webhook {
  id: string;
  createdAt: number;
  expiresAt: number;
  url: string;
}

/**
 * Represents an incoming webhook request.
 */
export interface WebhookRequest {
  id: string;
  webhookId: string;
  method: string;
  headers: Record<string, string>;
  body: string;
  query: Record<string, string>;
  ip: string;
  timestamp: number;
}

