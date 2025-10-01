import React from 'react';
import { Check, MessageCircle, Clock, Users } from 'lucide-react';

const CustomerInteractions = () => {
  const features = [
    "24/7 Availability",
    "Multi-language Support",
    "Smart Routing",
    "Real-time Analytics",
    "Custom Workflows",
    "Integration Ready"
  ];

  return (
    <section className="customer-interactions">
      <div className="container">
        <div className="interactions-content">
          <div className="interactions-text">
            <h2 className="section-title">
              AI-powered customer interactions 24/7 — free to start
            </h2>
            <p className="section-description">
              Deploy intelligent agents that handle customer inquiries around the clock. Start with our free tier and scale as your business grows.
            </p>
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <Check size={20} className="check-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary">
              Start Free Trial
            </button>
          </div>
          <div className="interactions-stats">
            <div className="stat-card">
              <MessageCircle size={32} className="stat-icon" />
              <div className="stat-content">
                <h3>10M+</h3>
                <p>Messages Processed</p>
              </div>
            </div>
            <div className="stat-card">
              <Clock size={32} className="stat-icon" />
              <div className="stat-content">
                <h3>24/7</h3>
                <p>Availability</p>
              </div>
            </div>
            <div className="stat-card">
              <Users size={32} className="stat-icon" />
              <div className="stat-content">
                <h3>50K+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerInteractions;