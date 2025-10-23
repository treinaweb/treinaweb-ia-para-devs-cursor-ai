const WhyUse = () => {
  const reasons = [
    {
      title: "Baseado no VS Code",
      description: "Cursor é construído sobre a base do VS Code, o que significa que você já conhece a interface e todas as suas extensões favoritas funcionam perfeitamente.",
      icon: "📦"
    },
    {
      title: "IA de Última Geração",
      description: "Utilizamos os modelos de IA mais avançados, incluindo GPT-4, Claude 3.5 Sonnet, e modelos personalizados treinados especificamente para código.",
      icon: "🧠"
    },
    {
      title: "Privacidade em Primeiro Lugar",
      description: "Seu código permanece privado. Temos SOC 2 Type II e oferecemos opções de privacidade que garantem que seu código nunca seja usado para treinamento.",
      icon: "🔒"
    },
    {
      title: "Integração Perfeita",
      description: "Funciona com seu workflow existente. Git, terminal, debugger - tudo que você usa está aqui, agora com superpoderes de IA.",
      icon: "⚡"
    },
    {
      title: "Comunidade Ativa",
      description: "Junte-se a mais de 1 milhão de desenvolvedores que já estão usando Cursor. Compartilhe dicas, tricks e aprenda com os melhores.",
      icon: "👥"
    },
    {
      title: "Atualizações Constantes",
      description: "Novos recursos e melhorias toda semana. Estamos sempre inovando para tornar sua experiência de desenvolvimento melhor.",
      icon: "🚀"
    }
  ];

  return (
    <section id="why-use" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Por Que Escolher Cursor AI?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Não é apenas mais um editor de código. É o futuro do desenvolvimento de software.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para revolucionar seu desenvolvimento?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de desenvolvedores que já estão codificando em outro nível
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
            Começar Gratuitamente
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUse;

