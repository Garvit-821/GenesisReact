import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About <span>Genesis</span></h2>
      <div className="about-content">
        <div className="about-text">
          <h3>Our Mission in the Web3 Space</h3>
          <p>Genesis Web3 Community was founded with a vision to democratize access to blockchain technology and
            empower individuals to participate in the decentralized revolution.</p>
          <p>We believe in an open, transparent internet where users have control over their data, identity, and
            assets. Our community serves as a hub for education, collaboration, and innovation in the Web3
            ecosystem.</p>
          <p>From beginners to seasoned developers, we provide resources, networking opportunities, and support to
            help our members navigate and contribute to the rapidly evolving blockchain landscape.</p>
          <a href="#" className="secondary-button" style={{display: 'inline-block', marginTop: '1rem'}}>Read Our Story</a>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop"
            alt="Web3 Community" />
        </div>
      </div>
    </section>
  );
};

export default About;