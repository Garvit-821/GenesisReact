import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Connect With Our Community</h3>
          <p>Have questions or want to get involved? Reach out to us through any of the channels below or send us
            a message directly.</p>
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h4>Email</h4>
              <p>hello@genesisweb3.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-comment-dots"></i>
            </div>
            <div>
              <h4>Discord</h4>
              <p>discord.gg/genesisweb3</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h4>Location</h4>
              <p>Decentralized · Global Community</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" required></textarea>
            </div>
            <button type="submit" className="cta-button" style={{width: '100%', border: 'none', cursor: 'pointer'}}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;