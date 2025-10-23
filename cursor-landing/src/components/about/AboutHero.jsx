/**
 * Hero section component for the About page
 * 
 * @returns {JSX.Element} AboutHero component
 */
const AboutHero = () => {
  return (
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
  );
};

export default AboutHero;

