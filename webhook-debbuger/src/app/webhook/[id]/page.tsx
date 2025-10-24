'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Webhook, Home, RefreshCw } from 'lucide-react';
import type { WebhookRequest, Webhook as WebhookType } from '@/types/webhook';
import { WebhookUrlCard } from '@/components/WebhookUrlCard';
import { RequestList } from '@/components/RequestList';
import { RequestDetailModal } from '@/components/RequestDetailModal';

/**
 * Dashboard page component - Displays webhook details and requests in real-time.
 *
 * @component
 */
export default function WebhookDashboard() {
  const params = useParams();
  const router = useRouter();
  const webhookId = params.id as string;

  const [webhook, setWebhook] = useState<WebhookType | null>(null);
  const [requests, setRequests] = useState<WebhookRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<WebhookRequest | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  /**
   * Fetches webhook details and requests from the API.
   */
  const fetchWebhookData = async () => {
    try {
      setIsRefreshing(true);

      // Fetch webhook details (to get expiration)
      const webhookResponse = await fetch(`/api/webhook/${webhookId}/requests`);

      if (!webhookResponse.ok) {
        if (webhookResponse.status === 404) {
          setError('Webhook não encontrado ou expirado.');
          return;
        }
        throw new Error('Failed to fetch webhook data');
      }

      const webhookData = await webhookResponse.json();

      // Set webhook info (we'll construct it from the ID)
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      const mockWebhook: WebhookType = {
        id: webhookId,
        createdAt: Date.now(),
        expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours from now
        url: `${baseUrl}/api/webhook/${webhookId}`,
      };
      setWebhook(mockWebhook);

      // Set requests
      setRequests(webhookData.requests || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching webhook data:', err);
      setError('Erro ao carregar dados do webhook.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  /**
   * Sets up Server-Sent Events connection for real-time updates.
   */
  useEffect(() => {
    // Initial fetch
    fetchWebhookData();

    // Set up SSE connection
    const eventSource = new EventSource(`/api/webhook/${webhookId}/stream`);

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        // Skip connection messages
        if (data.type === 'connected') {
          console.log('SSE connected');
          return;
        }

        // Add new request to the list
        const newRequest = data as WebhookRequest;
        setRequests((prev) => [newRequest, ...prev]);
      } catch (err) {
        console.error('Error parsing SSE message:', err);
      }
    };

    eventSource.onerror = (err) => {
      console.error('SSE error:', err);
      eventSource.close();
    };

    // Cleanup on unmount
    return () => {
      eventSource.close();
    };
  }, [webhookId]);

  /**
   * Handles request click to show details modal.
   *
   * @param request - The webhook request to display
   */
  const handleRequestClick = (request: WebhookRequest) => {
    setSelectedRequest(request);
  };

  /**
   * Closes the request detail modal.
   */
  const handleCloseModal = () => {
    setSelectedRequest(null);
  };

  /**
   * Navigates back to home page.
   */
  const handleGoHome = () => {
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="animate-spin mx-auto mb-4 text-blue-600 dark:text-blue-400" size={48} />
          <p className="text-gray-600 dark:text-gray-400">Carregando webhook...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="bg-red-100 dark:bg-red-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Webhook size={32} className="text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Erro</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
          <button
            onClick={handleGoHome}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            <Home size={20} />
            <span>Voltar para Home</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Webhook size={32} className="text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Dashboard do Webhook
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={fetchWebhookData}
                disabled={isRefreshing}
                aria-label="Atualizar requisições"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
              >
                <RefreshCw
                  size={20}
                  className={isRefreshing ? 'animate-spin' : ''}
                  aria-hidden="true"
                />
                <span>Atualizar</span>
              </button>
              <button
                onClick={handleGoHome}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Home size={20} aria-hidden="true" />
                <span>Home</span>
              </button>
            </div>
          </div>
        </header>

        {/* Webhook URL Card */}
        {webhook && (
          <WebhookUrlCard url={webhook.url} expiresAt={webhook.expiresAt} />
        )}

        {/* Requests Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Requisições Recebidas
            <span className="ml-3 text-lg font-normal text-gray-500 dark:text-gray-400">
              ({requests.length})
            </span>
          </h2>
          <RequestList requests={requests} onRequestClick={handleRequestClick} />
        </div>
      </div>

      {/* Request Detail Modal */}
      {selectedRequest && (
        <RequestDetailModal request={selectedRequest} onClose={handleCloseModal} />
      )}
    </div>
  );
}

