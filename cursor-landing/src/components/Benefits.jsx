const Benefits = () => {
  const benefits = [
    {
      title: "Aumente sua Produtividade",
      description: "Escreva código 2-3x mais rápido com sugestões inteligentes que se adaptam ao seu estilo de programação.",
      stats: "+200% de velocidade",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Menos Bugs, Mais Qualidade",
      description: "Detecte problemas antes que eles cheguem à produção com análise de código em tempo real.",
      stats: "-70% de bugs",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Aprenda Enquanto Desenvolve",
      description: "Entenda padrões de código, melhores práticas e soluções através de sugestões contextuais.",
      stats: "10x mais aprendizado",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Economize Tempo",
      description: "Reduza o tempo gasto em tarefas repetitivas e foque no que realmente importa: resolver problemas.",
      stats: "5+ horas/semana economizadas",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Vantagens Incomparáveis
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra como Cursor AI transforma a maneira como você desenvolve software
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-8"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-10 rounded-full -mr-16 -mt-16`}></div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
              
              <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${benefit.gradient} text-white font-semibold text-sm`}>
                {benefit.stats}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

