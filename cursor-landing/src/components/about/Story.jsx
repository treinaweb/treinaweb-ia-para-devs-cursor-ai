/**
 * Company story timeline component for the About page
 * 
 * @returns {JSX.Element} Story component
 */
const Story = () => {
  const milestones = [
    {
      year: "2023",
      title: "O Início",
      description: "Fundado por uma equipe de engenheiros apaixonados por IA e desenvolvimento de software, o Cursor AI nasceu da frustração com editores de código que não aproveitavam o potencial real da inteligência artificial.",
      borderColor: "border-blue-600"
    },
    {
      year: "2024",
      title: "Crescimento Exponencial",
      description: "Alcançamos mais de 1 milhão de desenvolvedores ativos. Grandes empresas como startups unicórnio e empresas da Fortune 500 começaram a adotar o Cursor AI em seus times de desenvolvimento.",
      borderColor: "border-purple-600"
    },
    {
      year: "2025",
      title: "Inovação Contínua",
      description: "Lançamos recursos revolucionários como edição em múltiplos arquivos com IA, busca semântica avançada e integração com os modelos de linguagem mais avançados do mercado. Nosso compromisso com a inovação nunca para.",
      borderColor: "border-pink-600"
    }
  ];

  return (
    <section className="px-6 mb-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Nossa História</h2>
        
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-xl shadow-md border-l-4 ${milestone.borderColor}`}
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {milestone.year} - {milestone.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;

