/**
 * Pricing section component displaying subscription plans
 * 
 * @returns {JSX.Element} Pricing component
 */
const Pricing = () => {
  const plans = [
    {
      name: "Hobby",
      price: "Grátis",
      period: "para sempre",
      description: "Perfeito para começar e experimentar",
      features: [
        "2.000 completions/mês",
        "50 usos lentos premium/mês",
        "Suporte básico",
        "Todas as linguagens",
        "Extensões do VS Code"
      ],
      cta: "Começar Grátis",
      popular: false,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Pro",
      price: "R$ 80",
      period: "/mês",
      description: "Para desenvolvedores profissionais",
      features: [
        "Completions ilimitados",
        "500 requests premium rápidos/mês",
        "Uso ilimitado de modelos lentos",
        "Suporte prioritário",
        "Modo privado de IA",
        "Múltiplos projetos",
        "Todas as features do Hobby"
      ],
      cta: "Assinar Pro",
      popular: true,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      name: "Business",
      price: "R$ 160",
      period: "/mês por usuário",
      description: "Para equipes e empresas",
      features: [
        "Tudo do Pro",
        "Gerenciamento de equipe",
        "SSO e SAML",
        "Admin dashboard",
        "Faturamento centralizado",
        "SLA garantido",
        "Suporte dedicado",
        "Modelos personalizados"
      ],
      cta: "Falar com Vendas",
      popular: false,
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Planos e Preços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano perfeito para suas necessidades. Comece grátis, faça upgrade quando quiser.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden ${
                plan.popular ? 'border-2 border-blue-600 scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className={`absolute top-0 right-0 bg-gradient-to-r ${plan.gradient} text-white px-4 py-1 text-sm font-semibold rounded-bl-lg`}>
                  Mais Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
                    plan.popular 
                      ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-xl`
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Todos os planos incluem 14 dias de teste grátis. Cancele quando quiser.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Sem cartão de crédito necessário
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cancele a qualquer momento
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Suporte em português
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

