import React from 'react';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Building the Future of Web3 Together</h1>
        <p>Genesis Web3 Community is a collective of innovators, developers, and enthusiasts dedicated to shaping
          the decentralized future through education, collaboration, and cutting-edge projects.</p>
        <div className="hero-buttons">
          <a href="#" className="cta-button">Get Started</a>
          <a href="#" className="secondary-button">Learn More</a>
        </div>
        <div className="stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Partners</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;