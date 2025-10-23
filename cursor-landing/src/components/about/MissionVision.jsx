/**
 * Mission and Vision section component for the About page
 * 
 * @returns {JSX.Element} MissionVision component
 */
const MissionVision = () => {
  return (
    <section className="px-6 mb-20 bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Nossa Missão</h2>
            <p className="text-gray-600 leading-relaxed">
              Capacitar desenvolvedores ao redor do mundo com ferramentas de IA que 
              aumentam a produtividade, reduzem erros e tornam a programação mais 
              acessível e prazerosa. Acreditamos que a tecnologia deve trabalhar para você, 
              não o contrário.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Nossa Visão</h2>
            <p className="text-gray-600 leading-relaxed">
              Criar um mundo onde qualquer pessoa com uma ideia possa transformá-la 
              em software funcional, independentemente de seu nível de experiência. 
              Queremos democratizar o desenvolvimento de software através da inteligência artificial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

