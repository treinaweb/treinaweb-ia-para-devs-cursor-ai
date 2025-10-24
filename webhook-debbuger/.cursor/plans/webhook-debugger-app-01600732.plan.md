<!-- 01600732-6954-4f01-bbd5-3005aba9b63d 92b7bf0f-33f5-4f1e-8298-67b8978f3cb6 -->
# Webhook Debugger Implementation Plan

## 1. Configuração Inicial

### Dependências

- Instalar: `lucide-react`, `redis`, `uuid`
- Criar `docker-compose.yml` com Redis
- Criar `.env.local` com configurações (Redis URL, TTL do webhook)

## 2. Infraestrutura Backend

### Redis Service (`src/lib/redis.ts`)

- Cliente Redis singleton com configuração via env vars
- Funções para gerenciar webhooks e requisições

### Tipos TypeScript (`src/types/webhook.ts`)

- `Webhook`: id, createdAt, expiresAt, url
- `WebhookRequest`: id, webhookId, method, headers, body, query, ip, timestamp

### API Routes

- `POST /api/webhooks` - Cria webhook com UUID v4, salva no Redis com TTL
- `POST /api/webhook/[id]` - Captura requisição do webhook (aceita ANY method)
- `GET /api/webhook/[id]/requests` - Lista todas as requisições
- `GET /api/webhook/[id]/stream` - SSE endpoint para tempo real

## 3. Páginas

### Home (`src/app/page.tsx`)

- Landing page com informações do projeto
- Botão "Create New Webhook" que chama API e redireciona para dashboard
- Design moderno com TailwindCSS

### Dashboard (`src/app/webhook/[id]/page.tsx`)

- Header com URL do webhook (copiável)
- Tabela/lista de requisições (método, timestamp, status básico)
- Cliente SSE para receber atualizações em tempo real
- Modal de detalhes ao clicar em requisição

## 4. Componentes

### RequestList (`src/components/RequestList.tsx`)

- Lista de requisições com informações básicas
- Click handler para abrir modal

### RequestDetailModal (`src/components/RequestDetailModal.tsx`)

- Modal usando lucide-react para ícones (X para fechar)
- Exibe todos os detalhes: headers, body (formatado), query params, IP

### WebhookUrlCard (`src/components/WebhookUrlCard.tsx`)

- Mostra URL do webhook com botão de copiar (lucide-react Copy icon)

## 5. Configuração Docker

### docker-compose.yml

- Serviço Redis na porta 6379
- Volumes para persistência opcional

## Arquivos Principais a Criar/Modificar

- `docker-compose.yml`
- `.env.local`
- `src/lib/redis.ts`
- `src/types/webhook.ts`
- `src/app/api/webhooks/route.ts`
- `src/app/api/webhook/[id]/route.ts`
- `src/app/api/webhook/[id]/requests/route.ts`
- `src/app/api/webhook/[id]/stream/route.ts`
- `src/app/page.tsx` (modificar)
- `src/app/webhook/[id]/page.tsx`
- `src/components/RequestList.tsx`
- `src/components/RequestDetailModal.tsx`
- `src/components/WebhookUrlCard.tsx`

### To-dos

- [ ] Instalar dependências (lucide-react, redis, uuid) e criar docker-compose.yml
- [ ] Criar arquivo .env.local com variáveis de ambiente
- [ ] Criar biblioteca Redis com cliente e funções utilitárias
- [ ] Definir tipos TypeScript para Webhook e WebhookRequest
- [ ] Implementar API POST /api/webhooks para criar webhooks
- [ ] Implementar API POST /api/webhook/[id] para receber requisições
- [ ] Implementar API GET /api/webhook/[id]/requests para listar requisições
- [ ] Implementar API GET /api/webhook/[id]/stream para SSE
- [ ] Criar componentes (RequestList, RequestDetailModal, WebhookUrlCard)
- [ ] Implementar landing page com botão de criar webhook
- [ ] Implementar página de dashboard com SSE e listagem