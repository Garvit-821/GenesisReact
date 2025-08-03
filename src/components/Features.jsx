import React from 'react';

const Features = () => {
  return (
    <section id="features">
      <h2 className="section-title">Why Join <span>Genesis</span></h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h3>Education</h3>
          <p>Access to comprehensive learning resources, workshops, and mentorship programs to accelerate your
            Web3 journey.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-users"></i>
          </div>
          <h3>Networking</h3>
          <p>Connect with like-minded individuals, industry experts, and potential collaborators in our vibrant
            community.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3>Innovation</h3>
          <p>Opportunities to contribute to cutting-edge projects and shape the future of decentralized
            technologies.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h3>Opportunities</h3>
          <p>Access to job postings, hackathons, and funding opportunities for promising Web3 initiatives.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-code"></i>
          </div>
          <h3>Development</h3>
          <p>Resources and support for building your own dApps, smart contracts, and blockchain solutions.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-handshake"></i>
          </div>
          <h3>Partnerships</h3>
          <p>Collaboration opportunities with leading projects and organizations in the Web3 ecosystem.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;