import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Make customer experience your competitive edge
          </h2>
          <p className="cta-description">
            Join thousands of businesses that trust our AI agents to deliver exceptional customer service.
          </p>
          <button className="btn-primary large">
            Get Started Today <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;