/**
 * Call to action component for the About page
 * 
 * @returns {JSX.Element} CallToAction component
 */
const CallToAction = () => {
  return (
    <section className="px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Junte-se à Revolução
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Faça parte da comunidade de desenvolvedores que estão construindo o futuro 
          com as ferramentas mais avançadas de IA.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
          Começar Gratuitamente
        </button>
      </div>
    </section>
  );
};

export default CallToAction;

