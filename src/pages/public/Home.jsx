import AIGrowth from '../../components/AIGrowth';
import CTA from '../../components/CTA';
import CustomerInteractions from '../../components/CustomerInteractions';
import ExploreAgents from '../../components/ExploreAgents';
import Hero from '../../components/Hero';
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