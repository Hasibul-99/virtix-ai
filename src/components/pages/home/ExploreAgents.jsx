import { Button } from 'antd';
import { ArrowRight } from 'lucide-react';

const ExploreAgents = () => {
  const agents = [
    {
      title: "Sales Agent",
      description: "Boost your sales with AI-powered lead qualification and customer engagement.",
      icon: "💼"
    },
    {
      title: "Support Agent",
      description: "Provide 24/7 customer support with intelligent ticket routing and resolution.",
      icon: "🎧"
    },
    {
      title: "Marketing Agent",
      description: "Automate your marketing campaigns with personalized content and targeting.",
      icon: "📈"
    },
    {
      title: "Analytics Agent",
      description: "Get deep insights into your business performance with AI-driven analytics.",
      icon: "📊"
    }
  ];

  return (
    <section className="explore-agents py-20">
      <div className="container flex flex-col items-center justify-center gap-8">
        <h2 className="text-6xl leading-[120%] text-[#0C0900] font-bold">Explore Public AI Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {agents.map((agent, index) => (
            <div key={index} className="border border-[#D9D9D9] rounded-2xl p-6 flex flex-col items-center justify-center gap-4">
              <div className="agent-icon">
                <img src="/assets/images/whiteCard.png" alt={agent.title} />
              </div>
              <h3 className="text-lg leading-[140%] text-center text-[#0C0900] font-bold">{agent.title}</h3>
              <p className="agent-description font-normal text-base leading-[140%] text-center text-[#0C0900]">{agent.description}</p>
              <Button type="primary" className="w-full">
                Try Agent <ArrowRight size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreAgents;