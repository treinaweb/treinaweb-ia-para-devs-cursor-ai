#!/bin/bash

# Simple webhook test script
#
# Usage: ./test-webhook-simple.sh <webhook-id> [interval-in-seconds]
# Example: ./test-webhook-simple.sh abc-123 1

if [ -z "$1" ]; then
    echo "Erro: Forneça o ID do webhook"
    echo "Uso: $0 <webhook-id> [intervalo]"
    echo "Exemplo: $0 abc-123 1"
    exit 1
fi

WEBHOOK_ID=$1
INTERVAL=${2:-1}  # Default: 1 second
BASE_URL=${BASE_URL:-"http://localhost:3000"}
WEBHOOK_URL="${BASE_URL}/api/webhook/${WEBHOOK_ID}"

echo "======================================"
echo "Testando webhook: ${WEBHOOK_ID}"
echo "Intervalo: ${INTERVAL} segundo(s)"
echo "URL: ${WEBHOOK_URL}"
echo "Pressione Ctrl+C para parar"
echo "======================================"
echo ""

counter=1

while true; do
    timestamp=$(date +%s)
    
    echo "[$(date '+%H:%M:%S')] Enviando requisição #${counter}..."
    
    curl -X POST "${WEBHOOK_URL}?source=test&request=${counter}&ts=${timestamp}" \
        -H "Content-Type: application/json" \
        -H "X-Request-Number: ${counter}" \
        -H "X-Timestamp: ${timestamp}" \
        -d "{\"message\":\"Test request ${counter}\",\"timestamp\":${timestamp},\"data\":{\"counter\":${counter},\"random\":${RANDOM}}}" \
        -s -o /dev/null -w "Status: %{http_code}\n"
    
    echo ""
    ((counter++))
    sleep "$INTERVAL"
done

