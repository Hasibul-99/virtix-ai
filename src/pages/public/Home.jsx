import AIGrowth from '../../components/AIGrowth';
import CTA from '../../components/CTA';
import CustomerInteractions from '../../components/pages/home/CustomerInteractions';
import ExploreAgents from '../../components/pages/home/ExploreAgents';
import Hero from '../../components/pages/home/Hero';
import Pricing from '../../components/Pricing';

function Home() {
  return (
    <div>
      <Hero />
      <ExploreAgents />
      <CustomerInteractions />
      <AIGrowth />
      <Pricing />
      <CTA />
    </div>
  );
}

export default Home;