'use client';

import { Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface WebhookUrlCardProps {
  url: string;
  expiresAt: number;
}

/**
 * Component that displays the webhook URL with a copy button.
 *
 * @component
 * @param props - The component props
 * @param props.url - The webhook URL to display
 * @param props.expiresAt - The timestamp when the webhook expires
 */
export function WebhookUrlCard({ url, expiresAt }: WebhookUrlCardProps) {
  const [copied, setCopied] = useState(false);

  /**
   * Copies the webhook URL to clipboard.
   */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  /**
   * Formats the expiration date.
   *
   * @returns Formatted expiration date string
   */
  const formatExpiration = (): string => {
    const date = new Date(expiresAt);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        URL do Webhook
      </h2>
      <div className="flex items-center gap-2 mb-2">
        <input
          type="text"
          value={url}
          readOnly
          className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 font-mono text-sm"
        />
        <button
          onClick={handleCopy}
          aria-label="Copiar URL do webhook"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
        >
          {copied ? (
            <>
              <CheckCircle size={16} aria-hidden="true" />
              <span>Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={16} aria-hidden="true" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Expira em: {formatExpiration()}
      </p>
    </div>
  );
}

