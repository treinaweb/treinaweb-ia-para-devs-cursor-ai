import { NextRequest, NextResponse } from 'next/server';
import { getWebhook, storeWebhookRequest } from '@/lib/redis';

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

/**
 * Handles all HTTP methods to receive webhook requests.
 *
 * @param request - The incoming webhook request
 * @param context - Route context with webhook ID
 * @returns A success response
 */
async function handleWebhookRequest(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    const { id: webhookId } = await params;

    // Check if webhook exists
    const webhook = await getWebhook(webhookId);

    if (!webhook) {
      return NextResponse.json(
        { error: 'Webhook not found' },
        { status: 404 }
      );
    }

    // Parse query parameters
    const url = new URL(request.url);
    const query: Record<string, string> = {};
    url.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    // Get request body
    let body = '';
    try {
      body = await request.text();
    } catch (e) {
      // Body might be empty
      body = '';
    }

    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Store request data
    const requestData = {
      webhookId,
      method: request.method,
      headers: Object.fromEntries(request.headers),
      body,
      query,
      ip,
      timestamp: Date.now(),
    };

    await storeWebhookRequest(webhookId, requestData);

    return NextResponse.json(
      { message: 'Webhook received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing webhook:', error);

    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}

// Export all HTTP methods
export const GET = handleWebhookRequest;
export const POST = handleWebhookRequest;
export const PUT = handleWebhookRequest;
export const PATCH = handleWebhookRequest;
export const DELETE = handleWebhookRequest;
export const HEAD = handleWebhookRequest;
export const OPTIONS = handleWebhookRequest;

