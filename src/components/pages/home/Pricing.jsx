import { Button } from 'antd';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/Month",
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
      period: "/Month",
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
      period: "/Month",
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
    <section className="pricing py-20">
      <div className="container growth-content flex flex-col items-center justify-center gap-8">
        <div className="md:w-3xl space-y-4">
          <h2 className="text-6xl leading-[120%] text-[#0C0900] font-bold text-center">Predictable pricing scalable plans</h2>
          <p className="font-normal text-base leading-[140%] text-[#0C0900] text-center">
            Designed for every stage of your journey.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div key={index} className={` rounded-[20px] p-6 ${plan.popular ? 'bg-[#F4EDFF] border-2 border-[#6200FF]' : 'bg-[linear-gradient(172.42deg,#FFFFFF_4.56%,#E7D7FF_50.03%,#FFFFFF_95.51%)] border border-[#ECECEC]'}`}>
              <div className="space-y-2">
                <h3 className="text-xl leading-[140%] text-[#0C0900] font-semibold">{plan.name}</h3>
                <div className="plan-price text-2xl leading-[140%] text-[#0C0900] font-semibold">
                  <span className="price">{plan.price}</span>
                </div>

                <div className="text-[18px] leading-[160%] text-[#0C0900] font-medium">{plan.period}</div>
                <Button type="primary" className='w-full'>Primary Button</Button>
              </div>
              <div className="plan-features mt-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex md:flex-row flex-col gap-2">
                    <Check size={16} className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;