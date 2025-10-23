import { useState } from 'react';

/**
 * Custom hook for FAQ page business logic
 * Manages the expanded/collapsed state of FAQ items
 * 
 * @returns {Object} FAQ hook return object
 * @returns {number|null} returns.openIndex - Index of the currently open FAQ item
 * @returns {Function} returns.handleToggle - Function to toggle FAQ item state
 * @returns {Array} returns.faqData - Array of FAQ categories and questions
 */
const useFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  /**
   * Toggles the expanded state of a FAQ item
   * If the item is already open, it closes it. Otherwise, it opens the item.
   * 
   * @param {number} index - Index of the FAQ item to toggle
   */
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "Geral",
      questions: [
        {
          question: "O que é o Cursor AI?",
          answer: "Cursor AI é um editor de código inteligente que utiliza inteligência artificial avançada para ajudar desenvolvedores a escrever código mais rápido e com mais qualidade. Ele combina as melhores funcionalidades de editores modernos com IA de última geração para autocompletar, sugerir e até mesmo gerar blocos inteiros de código."
        },
        {
          question: "Como o Cursor AI é diferente de outros editores de código?",
          answer: "Diferentemente de outros editores, o Cursor AI foi construído do zero com IA em seu núcleo, não como um plugin. Isso permite uma integração muito mais profunda, respostas mais rápidas e recursos exclusivos como edição em múltiplos arquivos, busca semântica e compreensão contextual de toda a sua base de código."
        },
        {
          question: "Quais linguagens de programação são suportadas?",
          answer: "O Cursor AI suporta mais de 50 linguagens de programação, incluindo JavaScript, TypeScript, Python, Java, C++, Go, Rust, PHP, Ruby e muitas outras. A IA é treinada para entender idiomas, frameworks e bibliotecas populares em cada linguagem."
        },
        {
          question: "O Cursor AI funciona offline?",
          answer: "O editor funciona offline para edição básica, mas os recursos de IA requerem conexão com internet, pois utilizam modelos de linguagem avançados hospedados em nuvem. Estamos trabalhando em recursos offline limitados para o futuro."
        }
      ]
    },
    {
      category: "Planos e Preços",
      questions: [
        {
          question: "Existe um plano gratuito?",
          answer: "Sim! Oferecemos um plano gratuito generoso que inclui autocompletar básico com IA e um número limitado de consultas mensais ao chat de IA. É perfeito para estudantes e desenvolvedores que querem experimentar o Cursor AI."
        },
        {
          question: "Qual a diferença entre os planos Pro e Business?",
          answer: "O plano Pro é ideal para desenvolvedores individuais e oferece uso ilimitado de recursos de IA, prioridade no suporte e acesso antecipado a novos recursos. O plano Business adiciona recursos empresariais como gerenciamento de equipe, SSO, compliance avançado, suporte prioritário e contratos personalizados."
        },
        {
          question: "Posso cancelar minha assinatura a qualquer momento?",
          answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem multas ou taxas. Ao cancelar, você continuará tendo acesso aos recursos pagos até o final do período já pago, e então será automaticamente movido para o plano gratuito."
        },
        {
          question: "Vocês oferecem desconto para estudantes?",
          answer: "Sim! Oferecemos 50% de desconto no plano Pro para estudantes com email .edu válido. Além disso, mantemos o plano gratuito com recursos generosos especialmente pensando em estudantes e aprendizes."
        }
      ]
    },
    {
      category: "Privacidade e Segurança",
      questions: [
        {
          question: "Meu código é usado para treinar os modelos de IA?",
          answer: "Não, nunca. Seu código permanece privado e não é usado para treinar modelos de IA sem sua permissão explícita. Temos certificação SOC 2 Type II e seguimos as melhores práticas de segurança da indústria. A privacidade do seu código é nossa prioridade máxima."
        },
        {
          question: "Como meus dados são armazenados?",
          answer: "Seus dados são criptografados em trânsito e em repouso. Usamos criptografia de nível empresarial (AES-256) e seguimos rigorosos protocolos de segurança. Para clientes Business, oferecemos opções de hospedagem dedicada e conformidade com GDPR, LGPD e outras regulamentações."
        },
        {
          question: "O Cursor AI é seguro para uso em projetos comerciais?",
          answer: "Absolutamente. Milhares de empresas, incluindo startups unicórnio e empresas da Fortune 500, usam o Cursor AI em produção. Temos certificações de segurança SOC 2 Type II, seguimos práticas de segurança rigorosas e oferecemos contratos empresariais com SLAs robustos."
        },
        {
          question: "Vocês compartilham dados com terceiros?",
          answer: "Não compartilhamos seu código ou dados sensíveis com terceiros. Usamos serviços de infraestrutura confiáveis (como AWS) que são certificados e auditados regularmente. Todos os nossos parceiros de infraestrutura assinam acordos de confidencialidade rigorosos."
        }
      ]
    },
    {
      category: "Recursos e Funcionalidades",
      questions: [
        {
          question: "Como funciona o autocompletar com IA?",
          answer: "O autocompletar analisa seu código em tempo real, entende o contexto do que você está escrevendo e sugere completações inteligentes que vão desde uma única palavra até funções inteiras. Ele aprende com o estilo do seu código e se adapta aos padrões do seu projeto."
        },
        {
          question: "O que é a edição em múltiplos arquivos?",
          answer: "É um recurso exclusivo que permite que você converse com a IA e ela faça alterações em vários arquivos simultaneamente. Por exemplo, você pode pedir 'adicione autenticação a este projeto' e a IA criará e modificará todos os arquivos necessários, mantendo consistência em toda a base de código."
        },
        {
          question: "Posso personalizar o comportamento da IA?",
          answer: "Sim! Você pode configurar preferências de estilo de código, escolher entre diferentes modelos de IA (GPT-4, Claude, etc.), ajustar o nível de agressividade das sugestões e até mesmo treinar a IA com exemplos específicos do seu projeto."
        },
        {
          question: "O Cursor AI tem integração com Git?",
          answer: "Sim, temos integração completa com Git. Você pode fazer commits, pull requests, resolver conflitos e visualizar diffs diretamente no editor. A IA também pode ajudar a escrever mensagens de commit descritivas e revisar mudanças antes de você fazer commit."
        }
      ]
    },
    {
      category: "Suporte e Ajuda",
      questions: [
        {
          question: "Como posso obter suporte?",
          answer: "Oferecemos suporte por email, chat ao vivo (para planos pagos) e uma comunidade ativa no Discord. Clientes Business têm acesso a suporte prioritário com SLAs garantidos. Também mantemos uma documentação extensa e tutoriais em vídeo."
        },
        {
          question: "Vocês oferecem treinamento para equipes?",
          answer: "Sim! Para clientes Business, oferecemos sessões de onboarding personalizadas, treinamento para equipes e workshops sobre melhores práticas. Isso ajuda sua equipe a aproveitar ao máximo o Cursor AI desde o primeiro dia."
        },
        {
          question: "Existe uma comunidade de usuários?",
          answer: "Sim! Temos uma comunidade vibrante no Discord com mais de 100.000 membros, onde desenvolvedores compartilham dicas, truques e ajudam uns aos outros. Também temos fóruns, um blog com tutoriais e hospedamos eventos online regulares."
        },
        {
          question: "Como posso sugerir novos recursos?",
          answer: "Adoramos feedback! Você pode sugerir novos recursos através do nosso portal de feedback, Discord ou diretamente pelo editor. Revisamos todas as sugestões e muitos dos nossos melhores recursos vieram de ideias da comunidade."
        }
      ]
    }
  ];

  return {
    openIndex,
    handleToggle,
    faqData
  };
};

export default useFAQ;

