'use client';

import { Clock, Eye } from 'lucide-react';
import type { WebhookRequest } from '@/types/webhook';

interface RequestListProps {
  requests: WebhookRequest[];
  onRequestClick: (request: WebhookRequest) => void;
}

/**
 * Component that displays a list of webhook requests.
 *
 * @component
 * @param props - The component props
 * @param props.requests - Array of webhook requests to display
 * @param props.onRequestClick - Callback function when a request is clicked
 */
export function RequestList({ requests, onRequestClick }: RequestListProps) {
  /**
   * Formats timestamp to readable date and time.
   *
   * @param timestamp - Unix timestamp
   * @returns Formatted date string
   */
  const formatTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  /**
   * Gets the background color class for HTTP method.
   *
   * @param method - HTTP method name
   * @returns Tailwind CSS class for background color
   */
  const getMethodColor = (method: string): string => {
    const colors: Record<string, string> = {
      GET: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      POST: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      PUT: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      PATCH: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      DELETE: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    };

    return colors[method] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  if (requests.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          Nenhuma requisição recebida ainda. Envie uma requisição para o webhook para começar.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Método
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Timestamp
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                IP de Origem
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {requests.map((request) => (
              <tr
                key={request.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() => onRequestClick(request)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${getMethodColor(
                      request.method
                    )}`}
                  >
                    {request.method}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 text-sm text-gray-900 dark:text-gray-100">
                    <Clock size={14} className="text-gray-400" aria-hidden="true" />
                    <span>{formatTimestamp(request.timestamp)}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100 font-mono">
                  {request.ip}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRequestClick(request);
                    }}
                    aria-label="Ver detalhes da requisição"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <Eye size={16} aria-hidden="true" />
                    <span>Ver detalhes</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

