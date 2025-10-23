/**
 * Company values component for the About page
 * 
 * @returns {JSX.Element} Values component
 */
const Values = () => {
  const values = [
    {
      icon: "🔒",
      title: "Privacidade Primeiro",
      description: "Seu código é seu. Garantimos segurança SOC 2 Type II e nunca usamos seu código para treinamento sem permissão."
    },
    {
      icon: "⚡",
      title: "Velocidade",
      description: "Construímos ferramentas rápidas que não atrapalham seu fluxo. Performance é uma feature, não um extra."
    },
    {
      icon: "🌍",
      title: "Acessibilidade",
      description: "Acreditamos que grandes ferramentas devem ser acessíveis a todos, desde estudantes até grandes empresas."
    },
    {
      icon: "🤝",
      title: "Colaboração",
      description: "Construímos com a comunidade, para a comunidade. Seu feedback molda nosso produto."
    },
    {
      icon: "🎨",
      title: "Design",
      description: "Ferramentas bonitas são mais prazerosas de usar. Investimos em UX excepcional."
    },
    {
      icon: "🔬",
      title: "Inovação",
      description: "Sempre explorando novas tecnologias e abordagens para melhorar a experiência de desenvolvimento."
    }
  ];

  return (
    <section className="px-6 mb-20 bg-gray-50 py-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Nossos Valores</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

