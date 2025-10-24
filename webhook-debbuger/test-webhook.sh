#!/bin/bash

# Script to test webhook by sending requests every second
#
# Usage: ./test-webhook.sh <webhook-id>
# Example: ./test-webhook.sh abc-123-def-456

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if webhook ID was provided
if [ -z "$1" ]; then
    echo -e "${RED}Erro: ID do webhook não fornecido${NC}"
    echo -e "${YELLOW}Uso: $0 <webhook-id>${NC}"
    echo -e "${YELLOW}Exemplo: $0 abc-123-def-456${NC}"
    exit 1
fi

WEBHOOK_ID=$1
BASE_URL=${BASE_URL:-"http://localhost:3000"}
WEBHOOK_URL="${BASE_URL}/api/webhook/${WEBHOOK_ID}"

echo -e "${GREEN}===========================================${NC}"
echo -e "${GREEN}  Webhook Debugger - Script de Teste${NC}"
echo -e "${GREEN}===========================================${NC}"
echo -e "${BLUE}Webhook ID:${NC} ${WEBHOOK_ID}"
echo -e "${BLUE}URL:${NC} ${WEBHOOK_URL}"
echo -e "${BLUE}Intervalo:${NC} 1 segundo entre requisições"
echo -e "${GREEN}===========================================${NC}"
echo -e "${YELLOW}Pressione Ctrl+C para parar${NC}\n"

# Counter for requests
counter=1

# Array of HTTP methods
methods=("POST" "GET" "PUT" "PATCH" "DELETE")

# Array of event types
events=("user.created" "user.updated" "payment.success" "order.completed" "notification.sent")

# Function to generate random data
generate_data() {
    local event_type=$1
    local timestamp=$(date +%s)
    local random_id=$((RANDOM % 10000))
    
    case $event_type in
        "user.created")
            echo "{\"event\":\"${event_type}\",\"timestamp\":${timestamp},\"user\":{\"id\":${random_id},\"name\":\"User ${random_id}\",\"email\":\"user${random_id}@example.com\",\"status\":\"active\"}}"
            ;;
        "user.updated")
            echo "{\"event\":\"${event_type}\",\"timestamp\":${timestamp},\"user\":{\"id\":${random_id},\"changes\":[\"email\",\"name\"],\"updated_at\":\"$(date -Iseconds)\"}}"
            ;;
        "payment.success")
            echo "{\"event\":\"${event_type}\",\"timestamp\":${timestamp},\"payment\":{\"id\":\"pay_${random_id}\",\"amount\":$((RANDOM % 10000 + 100)),\"currency\":\"BRL\",\"status\":\"completed\"}}"
            ;;
        "order.completed")
            echo "{\"event\":\"${event_type}\",\"timestamp\":${timestamp},\"order\":{\"id\":\"ord_${random_id}\",\"total\":$((RANDOM % 50000 + 1000)),\"items\":$((RANDOM % 10 + 1)),\"customer_id\":${random_id}}}"
            ;;
        "notification.sent")
            echo "{\"event\":\"${event_type}\",\"timestamp\":${timestamp},\"notification\":{\"id\":\"notif_${random_id}\",\"type\":\"email\",\"recipient\":\"user${random_id}@example.com\",\"status\":\"delivered\"}}"
            ;;
    esac
}

# Infinite loop to send requests
while true; do
    # Select random method and event
    method=${methods[$((counter % ${#methods[@]}))]}
    event=${events[$((counter % ${#events[@]}))]}
    
    # Generate data
    data=$(generate_data "$event")
    
    # Generate query parameters
    query_source="test-script"
    query_request_num=$counter
    query_timestamp=$(date +%s)
    
    # Build query string
    query_string="source=${query_source}&request_num=${query_request_num}&timestamp=${query_timestamp}"
    
    # Full URL with query string
    full_url="${WEBHOOK_URL}?${query_string}"
    
    # Print request info
    echo -e "${BLUE}[$(date '+%H:%M:%S')]${NC} Requisição #${counter}"
    echo -e "  ${YELLOW}Método:${NC} ${method}"
    echo -e "  ${YELLOW}Event:${NC} ${event}"
    
    # Send request with curl
    response=$(curl -s -w "\n%{http_code}" -X "$method" "$full_url" \
        -H "Content-Type: application/json" \
        -H "X-Event-Type: ${event}" \
        -H "X-Request-ID: req-${counter}-$(date +%s)" \
        -H "X-Source: test-script" \
        -H "X-Test-Counter: ${counter}" \
        -H "User-Agent: WebhookTester/1.0" \
        -d "$data" 2>&1)
    
    # Extract status code (last line)
    http_code=$(echo "$response" | tail -n1)
    
    # Check response
    if [ "$http_code" == "200" ]; then
        echo -e "  ${GREEN}✓ Sucesso (200)${NC}"
    else
        echo -e "  ${RED}✗ Falha (${http_code})${NC}"
    fi
    
    echo ""
    
    # Increment counter
    ((counter++))
    
    # Wait 1 second before next request
    sleep 1
done

