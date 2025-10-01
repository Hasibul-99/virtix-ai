import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "Forever",
      description: "Perfect for getting started",
      features: [
        "Up to 100 conversations/month",
        "Basic AI responses",
        "Email support",
        "Standard integrations",
        "Basic analytics",
        "Community access"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$9.76 USD",
      period: "per month",
      description: "Best for growing businesses",
      features: [
        "Up to 1,000 conversations/month",
        "Advanced AI capabilities",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Team collaboration",
        "Custom branding",
        "API access"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99.76 USD",
      period: "per month",
      description: "For large-scale operations",
      features: [
        "Unlimited conversations",
        "Custom AI training",
        "Dedicated support",
        "Enterprise integrations",
        "Advanced reporting",
        "Multi-team management",
        "White-label solution",
        "SLA guarantee",
        "Custom deployment"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">Predictable pricing scalable plans</h2>
          <p className="section-description">
            Choose the perfect plan for your business needs. Start free and scale as you grow.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              <div className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature">
                    <Check size={16} className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`plan-button ${plan.popular ? 'primary' : 'secondary'}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;