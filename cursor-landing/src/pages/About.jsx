const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sobre o Cursor AI
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Estamos construindo o futuro do desenvolvimento de software, 
            onde a inteligência artificial e os desenvolvedores trabalham juntos em perfeita harmonia.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
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

      {/* Story */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Nossa História</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">2023 - O Início</h3>
              <p className="text-gray-600 leading-relaxed">
                Fundado por uma equipe de engenheiros apaixonados por IA e desenvolvimento de software, 
                o Cursor AI nasceu da frustração com editores de código que não aproveitavam o 
                potencial real da inteligência artificial.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">2024 - Crescimento Exponencial</h3>
              <p className="text-gray-600 leading-relaxed">
                Alcançamos mais de 1 milhão de desenvolvedores ativos. Grandes empresas como 
                startups unicórnio e empresas da Fortune 500 começaram a adotar o Cursor AI 
                em seus times de desenvolvimento.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-pink-600">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">2025 - Inovação Contínua</h3>
              <p className="text-gray-600 leading-relaxed">
                Lançamos recursos revolucionários como edição em múltiplos arquivos com IA, 
                busca semântica avançada e integração com os modelos de linguagem mais avançados 
                do mercado. Nosso compromisso com a inovação nunca para.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 mb-20 bg-gray-50 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Nossos Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Privacidade Primeiro</h3>
              <p className="text-gray-600">
                Seu código é seu. Garantimos segurança SOC 2 Type II e nunca usamos 
                seu código para treinamento sem permissão.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Velocidade</h3>
              <p className="text-gray-600">
                Construímos ferramentas rápidas que não atrapalham seu fluxo. 
                Performance é uma feature, não um extra.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Acessibilidade</h3>
              <p className="text-gray-600">
                Acreditamos que grandes ferramentas devem ser acessíveis a todos, 
                desde estudantes até grandes empresas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Colaboração</h3>
              <p className="text-gray-600">
                Construímos com a comunidade, para a comunidade. 
                Seu feedback molda nosso produto.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Design</h3>
              <p className="text-gray-600">
                Ferramentas bonitas são mais prazerosas de usar. 
                Investimos em UX excepcional.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Inovação</h3>
              <p className="text-gray-600">
                Sempre explorando novas tecnologias e abordagens para 
                melhorar a experiência de desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Nossa Equipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Ana Silva", role: "CEO & Co-Founder", emoji: "👩‍💼" },
              { name: "Carlos Santos", role: "CTO & Co-Founder", emoji: "👨‍💻" },
              { name: "Marina Costa", role: "Head of AI", emoji: "🧠" },
              { name: "Pedro Oliveira", role: "Head of Product", emoji: "🎯" },
              { name: "Julia Ferreira", role: "Head of Design", emoji: "🎨" },
              { name: "Lucas Almeida", role: "Head of Engineering", emoji: "⚙️" },
              { name: "Beatriz Rocha", role: "Head of Marketing", emoji: "📱" },
              { name: "Rafael Lima", role: "Head of Customer Success", emoji: "🤝" }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition transform hover:-translate-y-2">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 mb-20 bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Cursor em Números
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">1M+</div>
              <div className="text-xl opacity-90">Desenvolvedores Ativos</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5B+</div>
              <div className="text-xl opacity-90">Linhas de Código Geradas</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Linguagens Suportadas</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-xl opacity-90">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
    </div>
  );
};

export default About;

