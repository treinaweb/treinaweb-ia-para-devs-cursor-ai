# Webhook Debugger

Uma aplicação moderna para testar e debugar webhooks em tempo real, construída com Next.js 16, React 19, TypeScript e Redis.

## 🚀 Funcionalidades

- **Criação Instantânea**: Gere URLs únicas de webhook com um clique
- **Tempo Real**: Visualize requisições instantaneamente via Server-Sent Events (SSE)
- **Inspeção Completa**: Veja método HTTP, headers, query parameters, body e IP de origem
- **Histórico**: Mantenha as últimas 100 requisições por até 24 horas (configurável)
- **Sem Autenticação**: Comece a usar imediatamente, sem cadastro
- **Interface Moderna**: UI responsiva com suporte a dark mode

## 🛠️ Tecnologias

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, TailwindCSS 4
- **Linguagem**: TypeScript 5
- **Banco de Dados**: Redis (via ioredis)
- **Ícones**: lucide-react
- **Tempo Real**: Server-Sent Events (SSE)

## 📋 Pré-requisitos

- Node.js 20+
- Docker e Docker Compose (para Redis)
- npm ou yarn

## 🔧 Configuração

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379

# Webhook Configuration
WEBHOOK_TTL_SECONDS=86400
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Iniciar Redis

```bash
docker-compose up -d
```

Isso iniciará o Redis na porta 6379 com persistência de dados.

### 4. Iniciar a Aplicação

```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

## 🎯 Como Usar

### 1. Criar um Webhook

- Acesse a página inicial
- Clique em "Criar Novo Webhook"
- Você será redirecionado para o dashboard do webhook

### 2. Configurar seu Serviço

- Copie a URL do webhook gerada
- Configure esta URL no serviço que enviará os webhooks (ex: GitHub, Stripe, etc.)

### 3. Monitorar Requisições

- As requisições aparecerão automaticamente no dashboard
- Clique em uma requisição para ver todos os detalhes
- Use o botão "Atualizar" se necessário

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/
│   │   ├── webhooks/          # POST: Criar webhook
│   │   └── webhook/
│   │       └── [id]/
│   │           ├── route.ts   # Receber requisições (todos os métodos)
│   │           ├── requests/  # GET: Listar requisições
│   │           └── stream/    # GET: SSE para tempo real
│   ├── webhook/
│   │   └── [id]/
│   │       └── page.tsx       # Dashboard do webhook
│   ├── layout.tsx             # Layout raiz
│   └── page.tsx               # Landing page
├── components/
│   ├── RequestDetailModal.tsx # Modal com detalhes da requisição
│   ├── RequestList.tsx        # Lista de requisições
│   └── WebhookUrlCard.tsx     # Card com URL do webhook
├── lib/
│   └── redis.ts               # Cliente Redis e funções utilitárias
└── types/
    └── webhook.ts             # Tipos TypeScript
```

## 🔑 Variáveis de Ambiente

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `REDIS_HOST` | Host do Redis | `localhost` |
| `REDIS_PORT` | Porta do Redis | `6379` |
| `WEBHOOK_TTL_SECONDS` | Tempo de vida dos webhooks em segundos | `86400` (24 horas) |
| `NEXT_PUBLIC_BASE_URL` | URL base da aplicação | `http://localhost:3000` |

## 🗄️ Estrutura de Dados no Redis

### Chaves Utilizadas

- `webhook:{id}` - Dados do webhook (JSON)
- `webhook:{id}:requests` - Lista de IDs de requisições
- `webhook:{id}:request:{requestId}` - Dados da requisição (JSON)
- `webhook:{id}:new-request` - Canal Pub/Sub para tempo real

### TTL (Time To Live)

Todas as chaves expiram automaticamente após o período configurado em `WEBHOOK_TTL_SECONDS`.

## 🚢 Deploy em Produção

### 1. Configurar Redis

Use um serviço gerenciado como:
- Redis Cloud
- AWS ElastiCache
- DigitalOcean Managed Redis

### 2. Configurar Variáveis de Ambiente

```env
REDIS_HOST=seu-redis-host.com
REDIS_PORT=6379
REDIS_PASSWORD=sua-senha-segura
WEBHOOK_TTL_SECONDS=86400
NEXT_PUBLIC_BASE_URL=https://seu-dominio.com
```

### 3. Deploy

A aplicação pode ser hospedada em:
- Vercel
- Netlify
- AWS
- DigitalOcean App Platform

## 🧪 Testando Webhooks

### Usando Scripts Automatizados (Recomendado)

O projeto inclui scripts para testar automaticamente:

```bash
# Script completo com eventos variados
./test-webhook.sh <webhook-id>

# Script simples
./test-webhook-simple.sh <webhook-id> [intervalo]
```

📖 **Veja a documentação completa**: [TESTING_SCRIPTS.md](./TESTING_SCRIPTS.md)

### Usando cURL

```bash
# POST com JSON
curl -X POST https://seu-dominio.com/api/webhook/abc-123 \
  -H "Content-Type: application/json" \
  -d '{"event": "test", "data": "hello world"}'

# GET com query params
curl "https://seu-dominio.com/api/webhook/abc-123?param1=value1&param2=value2"
```

### Usando Postman/Insomnia

1. Crie uma nova requisição
2. Use a URL do webhook gerado
3. Configure o método HTTP desejado
4. Adicione headers e body conforme necessário
5. Envie a requisição

## 📝 Notas Importantes

- Webhooks expiram após 24 horas por padrão (configurável)
- Apenas as últimas 100 requisições são mantidas por webhook
- Não há autenticação - qualquer pessoa com a URL pode enviar requisições
- Use apenas para testes e desenvolvimento, não para dados sensíveis

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.
