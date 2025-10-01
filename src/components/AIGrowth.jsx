import React from 'react';
import { TrendingUp, Zap } from 'lucide-react';

const AIGrowth = () => {
  return (
    <section className="ai-growth">
      <div className="container">
        <div className="growth-content">
          <h2 className="section-title">
            AI assistant designed to fuel your growth
          </h2>
          <p className="section-description">
            Leverage advanced AI capabilities to accelerate your business growth and improve customer satisfaction.
          </p>
          <div className="growth-features">
            <div className="growth-feature">
              <div className="feature-header">
                <TrendingUp size={24} className="feature-icon" />
                <h3>Communicate confidently</h3>
              </div>
              <p>
                Our AI agents are trained to handle complex conversations with confidence, ensuring your customers receive accurate and helpful responses every time.
              </p>
            </div>
            <div className="growth-feature">
              <div className="feature-header">
                <Zap size={24} className="feature-icon" />
                <h3>Simplify your workflow</h3>
              </div>
              <p>
                Streamline your customer service operations with intelligent automation that reduces manual work and increases efficiency across your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGrowth;