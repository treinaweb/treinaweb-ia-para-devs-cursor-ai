/**
 * Company statistics component for the About page
 * 
 * @returns {JSX.Element} Stats component
 */
const Stats = () => {
  const statistics = [
    { value: "1M+", label: "Desenvolvedores Ativos" },
    { value: "5B+", label: "Linhas de Código Geradas" },
    { value: "50+", label: "Linguagens Suportadas" },
    { value: "99.9%", label: "Uptime" }
  ];

  return (
    <section className="px-6 mb-20 bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Cursor em Números
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
          {statistics.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

