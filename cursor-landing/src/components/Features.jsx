const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "Autocompletar com IA",
      description: "Previsões de código inteligentes que entendem o contexto do seu projeto e sugerem código completo, não apenas linhas."
    },
    {
      icon: "💬",
      title: "Chat Integrado",
      description: "Converse com sua base de código. Faça perguntas, peça refatorações ou gere código novo diretamente no editor."
    },
    {
      icon: "✏️",
      title: "Edição em Múltiplos Arquivos",
      description: "Faça alterações em vários arquivos simultaneamente. A IA entende seu projeto como um todo."
    },
    {
      icon: "🔍",
      title: "Busca Semântica",
      description: "Encontre código pelo que ele faz, não apenas pelo que está escrito. Busque por funcionalidades e conceitos."
    },
    {
      icon: "🐛",
      title: "Detecção de Bugs",
      description: "Identifique problemas antes que eles aconteçam. A IA analisa seu código e sugere correções."
    },
    {
      icon: "📚",
      title: "Documentação Automática",
      description: "Gere documentação clara e completa automaticamente. Mantenha seu código sempre bem documentado."
    },
    {
      icon: "🔄",
      title: "Refatoração Inteligente",
      description: "Melhore seu código com sugestões de refatoração que mantêm a funcionalidade e melhoram a qualidade."
    },
    {
      icon: "🌐",
      title: "Suporte Multi-linguagem",
      description: "Funciona com todas as linguagens de programação populares: JavaScript, Python, Go, Rust, e muito mais."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Funcionalidades Poderosas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para desenvolver software de forma mais rápida e eficiente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

