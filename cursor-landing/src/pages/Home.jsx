import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Benefits from '../components/home/Benefits'
import WhyUse from '../components/home/WhyUse'
import Pricing from '../components/home/Pricing'

/**
 * Home page component that displays the main landing page sections
 * 
 * @returns {JSX.Element} Home page component
 */
const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <WhyUse />
      <Pricing />
    </>
  );
};

export default Home;

