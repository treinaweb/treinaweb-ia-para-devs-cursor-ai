import { NextRequest, NextResponse } from 'next/server';
import { getWebhook, getWebhookRequests } from '@/lib/redis';

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

/**
 * Handles GET requests to fetch all requests for a webhook.
 *
 * @param request - The incoming request object
 * @param context - Route context containing params
 * @returns A JSON response with requests data
 */
export async function GET(
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

    // Get all requests
    const requests = await getWebhookRequests(webhookId);

    return NextResponse.json(
      { requests },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching webhook requests:', error);

    return NextResponse.json(
      { error: 'Failed to fetch webhook requests' },
      { status: 500 }
    );
  }
}

