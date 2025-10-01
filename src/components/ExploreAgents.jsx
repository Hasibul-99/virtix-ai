import React from 'react';
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
    <section className="explore-agents">
      <div className="container">
        <h2 className="section-title">Explore Public AI Agents</h2>
        <div className="agents-grid">
          {agents.map((agent, index) => (
            <div key={index} className="agent-card">
              <div className="agent-icon">{agent.icon}</div>
              <h3 className="agent-title">{agent.title}</h3>
              <p className="agent-description">{agent.description}</p>
              <button className="agent-button">
                Try Agent <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreAgents;