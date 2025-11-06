import AIGrowth from '../../components/pages/home/AIGrowth';
import BuildAgent from '../../components/pages/home/BuildAgent';
import CTA from '../../components/pages/home/CTA';
import CustomerInteractions from '../../components/pages/home/CustomerInteractions';
import ExploreAgents from '../../components/pages/home/ExploreAgents';
import ExplorePublic from '../../components/pages/home/ExplorePublic';
import Hero from '../../components/pages/home/Hero';
import Pricing from '../../components/pages/home/Pricing';

function Home() {
  return (
    <>
      <Hero />
      <ExploreAgents />
      <ExplorePublic />
      <BuildAgent />
      <CustomerInteractions />
      <AIGrowth />
      <Pricing />
      <CTA />
    </>
  );
}

export default Home;