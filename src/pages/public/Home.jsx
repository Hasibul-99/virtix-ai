import AIGrowth from '../../components/pages/home/AIGrowth';
import CTA from '../../components/pages/home/CTA';
import CustomerInteractions from '../../components/pages/home/CustomerInteractions';
import ExploreAgents from '../../components/pages/home/ExploreAgents';
import Hero from '../../components/pages/home/Hero';
import Pricing from '../../components/pages/home/Pricing';

function Home() {
  return (
    <>
      <Hero />
      <ExploreAgents />
      <CustomerInteractions />
      <AIGrowth />
      <Pricing />
      <CTA />
    </>
  );
}

export default Home;