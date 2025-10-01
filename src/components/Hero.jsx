import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Supercharge customer service with AI Agent
            </h1>
            <p className="hero-description">
              Unlock the full potential of your customer service with our AI-powered agent. Streamline interactions, boost efficiency, and deliver exceptional customer experiences.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">
                <Play size={20} /> Watch Demo
              </button>
            </div>
            <div className="hero-partners">
              <p>Trusted by</p>
              <div className="partner-logos">
                <span>slack</span>
                <span>zoom</span>
                <span>asana</span>
                <span>outreach</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="chat-preview">
              <div className="chat-header">
                <div className="chat-avatar"></div>
                <span>AI Agent</span>
              </div>
              <div className="chat-messages">
                <div className="message">
                  <p>Hi there! How can I help you today?</p>
                </div>
                <div className="message user">
                  <p>I need help with my order</p>
                </div>
                <div className="message">
                  <p>I'd be happy to help you with your order. Could you please provide your order number?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;