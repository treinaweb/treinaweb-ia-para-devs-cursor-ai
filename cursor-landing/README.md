# Cursor AI Landing Page

Uma landing page moderna e responsiva para o Cursor AI, construída com React, Vite e TailwindCSS.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápido e moderno
- **TailwindCSS v4** - Framework CSS utilitário
- **React Router DOM** - Navegação entre páginas

## 📋 Funcionalidades

A aplicação inclui múltiplas páginas com navegação:

### Página Home (/)
- **Header** - Navegação fixa com links para todas as seções
- **Hero** - Seção principal com título impactante e estatísticas
- **Features** - 8 funcionalidades principais do Cursor AI
- **Benefits** - Vantagens e benefícios de usar o Cursor AI
- **Why Use** - Razões para escolher o Cursor AI
- **Pricing** - 3 planos de preços (Hobby, Pro, Business)
- **Footer** - Links e informações adicionais

### Página Sobre (/sobre)
- **História** - Linha do tempo da empresa
- **Missão & Visão** - Propósito e objetivos
- **Valores** - 6 valores fundamentais da empresa
- **Equipe** - 8 membros da equipe
- **Estatísticas** - Números impressionantes
- **CTA** - Chamada para ação

## 🎨 Design

- Design moderno e responsivo
- Gradientes coloridos (azul, roxo, rosa)
- Animações e transições suaves
- Hover effects em todos os elementos interativos
- Totalmente responsivo para mobile, tablet e desktop

## 🗺️ Rotas

A aplicação possui as seguintes rotas:

- **`/`** - Página inicial (Home) com todas as seções da landing page
- **`/sobre`** - Página sobre a empresa, missão, valores e equipe

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Entrar na pasta do projeto
cd cursor-landing

# Instalar dependências (caso não tenha feito)
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Visualizar build localmente
npm run preview
```

## 📁 Estrutura do Projeto

```
cursor-landing/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Cabeçalho com navegação
│   │   ├── Hero.jsx         # Seção principal
│   │   ├── Features.jsx     # Funcionalidades
│   │   ├── Benefits.jsx     # Vantagens
│   │   ├── WhyUse.jsx       # Por que usar
│   │   ├── Pricing.jsx      # Planos e preços
│   │   └── Footer.jsx       # Rodapé
│   ├── pages/
│   │   ├── Home.jsx         # Página inicial
│   │   └── About.jsx        # Página sobre
│   ├── App.jsx              # Componente principal com rotas
│   ├── main.jsx             # Entry point
│   └── index.css            # Estilos globais (TailwindCSS)
├── vite.config.js           # Configuração do Vite
├── package.json
└── README.md
```

## 🎯 Características do Código

- **Código limpo** - Componentes bem organizados e reutilizáveis
- **Inglês** - Todo o código está em inglês
- **Português** - Todo o conteúdo da página está em português
- **Boas práticas** - Seguindo padrões React e ES6+
- **Performance** - Otimizado com Vite e TailwindCSS v4

## 📝 Customização

Para customizar o conteúdo, edite os arquivos em `src/components/`:

- **Texto e conteúdo**: Edite diretamente nos componentes JSX
- **Cores**: Modifique as classes do TailwindCSS (ex: `from-blue-600`, `to-purple-600`)
- **Layout**: Ajuste as classes de grid e espaçamento do Tailwind

## 🌐 Deploy

Esta aplicação pode ser facilmente deployada em:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Basta conectar seu repositório e o deploy será automático!

## 📄 Licença

Este projeto é livre para uso educacional e comercial.

---

Desenvolvido com ❤️ usando React, Vite e TailwindCSS
