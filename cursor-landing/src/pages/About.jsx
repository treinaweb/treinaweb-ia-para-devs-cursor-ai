import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import Story from '../components/about/Story';
import Values from '../components/about/Values';
import Team from '../components/about/Team';
import Stats from '../components/about/Stats';
import CallToAction from '../components/about/CallToAction';

/**
 * About page component that displays company information
 * 
 * @returns {JSX.Element} About page component
 */
const About = () => {
  return (
    <div className="pt-24 pb-20">
      <AboutHero />
      <MissionVision />
      <Story />
      <Values />
      <Team />
      <Stats />
      <CallToAction />
    </div>
  );
};

export default About;
