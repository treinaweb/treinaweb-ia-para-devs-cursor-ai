import FAQItem from '../components/faq/FAQItem';
import useFAQ from '../hooks/faq/useFAQ';

/**
 * FAQ page component that displays frequently asked questions
 * 
 * @returns {JSX.Element} FAQ page component
 */
const FAQ = () => {
  const { openIndex, handleToggle, faqData } = useFAQ();

  let questionIndex = 0;

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Encontre respostas para as dúvidas mais comuns sobre o Cursor AI. 
            Não encontrou o que procura? Entre em contato com nossa equipe de suporte.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqData.map((category, categoryIdx) => (
        <section key={categoryIdx} className="px-6 mb-16">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
            </div>
            
            <div className="space-y-4">
              {category.questions.map((item, idx) => {
                const currentIndex = questionIndex++;
                return (
                  <FAQItem
                    key={currentIndex}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === currentIndex}
                    onToggle={() => handleToggle(currentIndex)}
                  />
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="px-6 mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white shadow-xl">
            <h2 className="text-4xl font-bold mb-4">
              Ainda tem dúvidas?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nossa equipe de suporte está pronta para ajudar você. 
              Entre em contato e responderemos o mais rápido possível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
                Falar com Suporte
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105">
                Ver Documentação
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-6 mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Links Úteis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Documentação</h3>
              <p className="text-gray-600 mb-4">
                Guias completos e referências da API
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Acessar Docs →
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Tutoriais</h3>
              <p className="text-gray-600 mb-4">
                Aprenda com vídeos e guias passo a passo
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Ver Tutoriais →
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Comunidade</h3>
              <p className="text-gray-600 mb-4">
                Junte-se à nossa comunidade no Discord
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Entrar no Discord →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

