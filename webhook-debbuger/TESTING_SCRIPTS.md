# 🧪 Scripts de Teste do Webhook

Este projeto inclui dois scripts para testar o funcionamento dos webhooks enviando requisições automáticas.

## 📜 Scripts Disponíveis

### 1. test-webhook.sh (Completo)

Script avançado que envia requisições variadas simulando eventos reais.

**Funcionalidades:**
- ✅ Envia requisições a cada 1 segundo
- ✅ Alterna entre diferentes métodos HTTP (GET, POST, PUT, PATCH, DELETE)
- ✅ Simula 5 tipos de eventos diferentes
- ✅ Inclui headers customizados
- ✅ Inclui query strings dinâmicos
- ✅ Inclui body em JSON com dados variados
- ✅ Output colorido e informativo
- ✅ Contador de requisições

**Uso:**
```bash
./test-webhook.sh <webhook-id>
```

**Exemplo:**
```bash
./test-webhook.sh abc-123-def-456
```

**Output esperado:**
```
===========================================
  Webhook Debugger - Script de Teste
===========================================
Webhook ID: abc-123-def-456
URL: http://localhost:3000/api/webhook/abc-123-def-456
Intervalo: 1 segundo entre requisições
===========================================
Pressione Ctrl+C para parar

[14:30:15] Requisição #1
  Método: POST
  Event: user.created
  ✓ Sucesso (200)

[14:30:16] Requisição #2
  Método: GET
  Event: user.updated
  ✓ Sucesso (200)
```

### 2. test-webhook-simple.sh (Simples)

Script básico que envia requisições simples.

**Funcionalidades:**
- ✅ Envia requisições POST
- ✅ Intervalo configurável
- ✅ Headers e query strings básicos
- ✅ Body JSON simples
- ✅ Contador de requisições

**Uso:**
```bash
./test-webhook-simple.sh <webhook-id> [intervalo-em-segundos]
```

**Exemplos:**
```bash
# Envia a cada 1 segundo (padrão)
./test-webhook-simple.sh abc-123

# Envia a cada 2 segundos
./test-webhook-simple.sh abc-123 2

# Envia a cada 0.5 segundos
./test-webhook-simple.sh abc-123 0.5
```

## 🚀 Como Usar

### Passo 1: Criar um Webhook

1. Inicie a aplicação: `npm run dev`
2. Acesse http://localhost:3000
3. Clique em "Criar Novo Webhook"
4. Copie o ID do webhook da URL (última parte da URL)

Exemplo de URL: `http://localhost:3000/webhook/abc-123-def-456`  
**ID do webhook**: `abc-123-def-456`

### Passo 2: Executar o Script

```bash
# Usando o script completo
./test-webhook.sh abc-123-def-456

# OU usando o script simples
./test-webhook-simple.sh abc-123-def-456
```

### Passo 3: Observar as Requisições

- As requisições aparecerão **instantaneamente** no dashboard
- Clique em qualquer requisição para ver os detalhes
- Observe os diferentes métodos HTTP e dados

### Passo 4: Parar o Script

Pressione `Ctrl+C` para parar o envio de requisições.

## 🎯 O que o Script Completo Testa

### Métodos HTTP
O script alterna entre os seguintes métodos:
- **POST** - Criar recursos
- **GET** - Buscar recursos
- **PUT** - Atualizar recursos completos
- **PATCH** - Atualizar recursos parcialmente
- **DELETE** - Deletar recursos

### Tipos de Eventos Simulados

1. **user.created** - Criação de usuário
```json
{
  "event": "user.created",
  "timestamp": 1234567890,
  "user": {
    "id": 5432,
    "name": "User 5432",
    "email": "user5432@example.com",
    "status": "active"
  }
}
```

2. **user.updated** - Atualização de usuário
```json
{
  "event": "user.updated",
  "timestamp": 1234567890,
  "user": {
    "id": 5432,
    "changes": ["email", "name"],
    "updated_at": "2025-10-24T14:30:15-03:00"
  }
}
```

3. **payment.success** - Pagamento bem-sucedido
```json
{
  "event": "payment.success",
  "timestamp": 1234567890,
  "payment": {
    "id": "pay_5432",
    "amount": 9876,
    "currency": "BRL",
    "status": "completed"
  }
}
```

4. **order.completed** - Pedido completo
```json
{
  "event": "order.completed",
  "timestamp": 1234567890,
  "order": {
    "id": "ord_5432",
    "total": 45678,
    "items": 5,
    "customer_id": 5432
  }
}
```

5. **notification.sent** - Notificação enviada
```json
{
  "event": "notification.sent",
  "timestamp": 1234567890,
  "notification": {
    "id": "notif_5432",
    "type": "email",
    "recipient": "user5432@example.com",
    "status": "delivered"
  }
}
```

### Headers Enviados

```
Content-Type: application/json
X-Event-Type: user.created
X-Request-ID: req-1-1234567890
X-Source: test-script
X-Test-Counter: 1
User-Agent: WebhookTester/1.0
```

### Query Parameters

```
source=test-script
request_num=1
timestamp=1234567890
```

## 🔧 Personalização

### Mudar a URL Base

```bash
# Produção
BASE_URL=https://seu-dominio.com ./test-webhook.sh abc-123

# Porta diferente
BASE_URL=http://localhost:3001 ./test-webhook.sh abc-123
```

### Mudar Intervalo (apenas script simples)

```bash
# A cada 2 segundos
./test-webhook-simple.sh abc-123 2

# A cada 0.5 segundos
./test-webhook-simple.sh abc-123 0.5
```

### Modificar os Scripts

Você pode editar os scripts para:
- Adicionar mais tipos de eventos
- Mudar os dados enviados
- Adicionar mais headers
- Modificar query parameters
- Alterar o intervalo entre requisições

## 📊 Verificando no Dashboard

Após executar o script, você verá no dashboard:

1. **Lista de Requisições**
   - Métodos com cores diferentes (POST verde, GET azul, etc)
   - Timestamp de cada requisição
   - IP de origem

2. **Detalhes da Requisição** (ao clicar)
   - Método HTTP
   - Timestamp formatado
   - IP de origem
   - Headers completos
   - Query parameters
   - Body formatado em JSON

## ⚠️ Notas Importantes

1. **Redis deve estar rodando**
   ```bash
   docker-compose up -d
   ```

2. **Aplicação deve estar rodando**
   ```bash
   npm run dev
   ```

3. **Webhook deve existir e não estar expirado**
   - Webhooks duram 24 horas por padrão
   - Crie um novo se necessário

4. **Limite de 100 requisições**
   - Apenas as últimas 100 são mantidas
   - Requisições mais antigas são removidas

## 🐛 Troubleshooting

### "Erro: ID do webhook não fornecido"
Você esqueceu de passar o ID do webhook. Use:
```bash
./test-webhook.sh SEU-WEBHOOK-ID
```

### "Falha (404)"
O webhook não existe ou expirou. Crie um novo webhook.

### "Falha (500)"
Erro no servidor. Verifique:
- Redis está rodando: `docker ps`
- Aplicação está rodando: logs do terminal
- `.env.local` está configurado corretamente

### Script não executa
Torne-o executável:
```bash
chmod +x test-webhook.sh
chmod +x test-webhook-simple.sh
```

## 💡 Dicas

1. **Mantenha o dashboard aberto** enquanto executa o script para ver as requisições em tempo real

2. **Use o script simples** para testes rápidos e o completo para simular cenários reais

3. **Abra o DevTools** do navegador (F12) e vá em Network para ver o SSE funcionando

4. **Execute múltiplos scripts** simultaneamente com diferentes intervalos para testar carga

5. **Experimente diferentes métodos** HTTP editando o script

## 🎓 Exemplos de Uso

### Teste básico (10 requisições)
```bash
./test-webhook.sh abc-123 &
PID=$!
sleep 10
kill $PID
```

### Teste de carga leve
```bash
# Terminal 1
./test-webhook-simple.sh abc-123 0.5

# Terminal 2
./test-webhook-simple.sh abc-123 0.5

# Terminal 3
./test-webhook-simple.sh abc-123 0.5
```

### Teste com cURL manual
```bash
# Uma requisição POST
curl -X POST http://localhost:3000/api/webhook/abc-123?test=true \
  -H "Content-Type: application/json" \
  -H "X-Custom: my-value" \
  -d '{"test": "manual", "timestamp": 1234567890}'
```

## 📚 Próximos Passos

Depois de testar com os scripts:
1. Explore os detalhes de cada requisição
2. Teste integrar com serviços reais (GitHub, Stripe, etc)
3. Configure webhooks personalizados
4. Experimente diferentes cenários de uso

---

**🎉 Divirta-se testando seus webhooks!**

