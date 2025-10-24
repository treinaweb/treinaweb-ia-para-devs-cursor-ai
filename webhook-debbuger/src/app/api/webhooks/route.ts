import { NextRequest, NextResponse } from 'next/server';
import { createWebhook } from '@/lib/redis';

/**
 * Handles POST requests to create a new webhook.
 *
 * @param request - The incoming request object
 * @returns A JSON response with the created webhook
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const webhook = await createWebhook(baseUrl);

    return NextResponse.json(
      { webhook },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating webhook:', error);

    return NextResponse.json(
      { error: 'Failed to create webhook' },
      { status: 500 }
    );
  }
}

