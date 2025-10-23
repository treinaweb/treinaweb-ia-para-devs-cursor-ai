/**
 * Team members component for the About page
 * 
 * @returns {JSX.Element} Team component
 */
const Team = () => {
  const teamMembers = [
    { name: "Ana Silva", role: "CEO & Co-Founder", emoji: "👩‍💼" },
    { name: "Carlos Santos", role: "CTO & Co-Founder", emoji: "👨‍💻" },
    { name: "Marina Costa", role: "Head of AI", emoji: "🧠" },
    { name: "Pedro Oliveira", role: "Head of Product", emoji: "🎯" },
    { name: "Julia Ferreira", role: "Head of Design", emoji: "🎨" },
    { name: "Lucas Almeida", role: "Head of Engineering", emoji: "⚙️" },
    { name: "Beatriz Rocha", role: "Head of Marketing", emoji: "📱" },
    { name: "Rafael Lima", role: "Head of Customer Success", emoji: "🤝" }
  ];

  return (
    <section className="px-6 mb-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Nossa Equipe</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

