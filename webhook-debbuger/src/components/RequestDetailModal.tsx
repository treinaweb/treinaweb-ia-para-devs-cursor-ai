'use client';

import { X } from 'lucide-react';
import type { WebhookRequest } from '@/types/webhook';

interface RequestDetailModalProps {
  request: WebhookRequest;
  onClose: () => void;
}

/**
 * Modal component that displays detailed information about a webhook request.
 *
 * @component
 * @param props - The component props
 * @param props.request - The webhook request to display
 * @param props.onClose - Callback function to close the modal
 */
export function RequestDetailModal({ request, onClose }: RequestDetailModalProps) {
  /**
   * Formats JSON content for display.
   *
   * @param content - The content to format
   * @returns Formatted JSON string or original content
   */
  const formatJSON = (content: string): string => {
    try {
      const parsed = JSON.parse(content);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return content;
    }
  };

  /**
   * Formats timestamp to readable date.
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

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Detalhes da Requisição
          </h2>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            <X size={20} aria-hidden="true" className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Informações Básicas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Método</p>
                <p className="font-mono text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {request.method}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Timestamp</p>
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100">
                  {formatTimestamp(request.timestamp)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">IP de Origem</p>
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100">
                  {request.ip}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">ID da Requisição</p>
                <p className="font-mono text-sm text-gray-900 dark:text-gray-100 truncate">
                  {request.id}
                </p>
              </div>
            </div>
          </div>

          {/* Headers */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Headers
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-md p-4 overflow-x-auto">
              <pre className="font-mono text-sm text-gray-900 dark:text-gray-100">
                {JSON.stringify(request.headers, null, 2)}
              </pre>
            </div>
          </div>

          {/* Query Parameters */}
          {Object.keys(request.query).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Query Parameters
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-md p-4 overflow-x-auto">
                <pre className="font-mono text-sm text-gray-900 dark:text-gray-100">
                  {JSON.stringify(request.query, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* Body */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Body
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-md p-4 overflow-x-auto">
              {request.body ? (
                <pre className="font-mono text-sm text-gray-900 dark:text-gray-100">
                  {formatJSON(request.body)}
                </pre>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  Nenhum conteúdo no body
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

