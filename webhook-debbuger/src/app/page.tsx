'use client';

import { Webhook, ArrowRight, Zap, Eye, Clock } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Home page component - Landing page for the Webhook Debugger.
 *
 * @component
 */
export default function Home() {
  const [isCreating, setIsCreating] = useState(false);
  const router = useRouter();

  /**
   * Creates a new webhook and redirects to its dashboard.
   */
  const handleCreateWebhook = async () => {
    setIsCreating(true);

    try {
      const response = await fetch('/api/webhooks', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to create webhook');
      }

      const data = await response.json();
      router.push(`/webhook/${data.webhook.id}`);
    } catch (error) {
      console.error('Error creating webhook:', error);
      alert('Erro ao criar webhook. Por favor, tente novamente.');
      setIsCreating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Webhook size={48} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Webhook Debugger
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Teste e depure seus webhooks em tempo real. Visualize requisições, inspecione headers,
            body e muito mais.
          </p>
        </header>

        {/* CTA Section */}
        <div className="max-w-md mx-auto mb-16">
          <button
            onClick={handleCreateWebhook}
            disabled={isCreating}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-lg py-4 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
          >
            {isCreating ? (
              <>
                <Zap className="animate-pulse" size={24} aria-hidden="true" />
                <span>Criando webhook...</span>
              </>
            ) : (
              <>
                <span>Criar Novo Webhook</span>
                <ArrowRight size={24} aria-hidden="true" />
              </>
            )}
          </button>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
            Gratuito • Sem cadastro • Expira em 24 horas
          </p>
        </div>

        {/* Features */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Eye size={24} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Inspeção Completa
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Visualize todos os detalhes das requisições: método HTTP, headers, query parameters,
              body e IP de origem.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Zap size={24} className="text-green-600 dark:text-green-400" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Tempo Real
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              As requisições aparecem instantaneamente na sua tela assim que são recebidas, sem
              necessidade de atualizar a página.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Clock size={24} className="text-purple-600 dark:text-purple-400" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Histórico
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Mantenha um histórico das últimas 100 requisições recebidas por até 24 horas (configurável).
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="max-w-3xl mx-auto mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Como Funciona
          </h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Crie um Webhook
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Clique no botão acima para gerar uma URL única de webhook.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Configure sua Aplicação
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use a URL gerada na configuração de webhooks da sua aplicação ou serviço.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Monitore em Tempo Real
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Veja todas as requisições chegando em tempo real e inspecione seus detalhes.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
