import { NextRequest } from 'next/server';
import { getWebhook, subscribeToWebhookRequests } from '@/lib/redis';

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

/**
 * Handles GET requests to stream webhook requests via Server-Sent Events.
 *
 * @param request - The incoming request object
 * @param context - Route context containing params
 * @returns A streaming response with SSE
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
): Promise<Response> {
  const { id: webhookId } = await params;

  // Check if webhook exists
  const webhook = await getWebhook(webhookId);

  if (!webhook) {
    return new Response(
      JSON.stringify({ error: 'Webhook not found' }),
      {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // Create a readable stream for SSE
  const encoder = new TextEncoder();
  
  const stream = new ReadableStream({
    start(controller) {
      // Subscribe to new requests
      const subscriber = subscribeToWebhookRequests(webhookId, (webhookRequest) => {
        const data = `data: ${JSON.stringify(webhookRequest)}\n\n`;
        controller.enqueue(encoder.encode(data));
      });

      // Send initial connection message
      const initialMessage = `data: ${JSON.stringify({ type: 'connected' })}\n\n`;
      controller.enqueue(encoder.encode(initialMessage));

      // Keep alive ping every 30 seconds
      const keepAliveInterval = setInterval(() => {
        const ping = `: keepalive\n\n`;
        controller.enqueue(encoder.encode(ping));
      }, 30000);

      // Clean up on connection close
      request.signal.addEventListener('abort', () => {
        clearInterval(keepAliveInterval);
        subscriber.disconnect();
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}

