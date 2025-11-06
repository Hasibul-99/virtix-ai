import { Button } from 'antd';
import { Check } from 'lucide-react';

const CustomerInteractions = () => {
  const features = [
    "24/7 Instant replies and actions with zero wait.",
    "Accurate answers powered by your indexed data.",
    "Seamless escalation with full chat transcripts.",
    "Scales instantly to handle traffic spikes and launches."
  ];

  return (
    <section className="customer-interactions py-20">
      <div className="container">
        <div className="flex md:flex-row flex-col items-center justify-center gap-8">
          <div className="flex-2 space-y-4">
            <h2 className="text-6xl leading-[120%] text-[#0C0900] font-bold">
              AI-powered customer interactions 24/7 — free to start
            </h2>
            <p className="font-normal text-base leading-[140%] text-[#0C0900]">
              Instantly boost agent productivity, ensure accurate and consistent answers, automate routine daily tasks, and empower your team to focus on what matters most.
            </p>
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check size={20} className="check-icon" />
                  <span className='text-[#0C0900] font-semibold'>{feature}</span>
                </div>
              ))}
            </div>
            <Button type="primary">Build your agent now</Button>
          </div>
          <div className="flex-1">
            <img src="/assets/images/Home/image-4.png" alt="Customer Interactions" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerInteractions;