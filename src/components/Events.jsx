import React from 'react';

const Events = () => {
  return (
    <section id="events">
      <h2 className="section-title">Upcoming <span>Events</span></h2>
      <div className="events-container">
        <div className="event-card">
          <div className="event-date">
            <span className="date-day">15</span>
            <span className="date-month">OCT</span>
          </div>
          <div className="event-details">
            <h3>Web3 Hackathon 2023</h3>
            <p className="event-time"><i className="fas fa-clock"></i> 10:00 AM - 6:00 PM (GMT)</p>
            <p className="event-location"><i className="fas fa-map-marker-alt"></i> Virtual & On-site (London)</p>
            <p className="event-desc">24-hour hackathon to build innovative Web3 solutions with $50K in prizes.</p>
            <a href="#" className="event-button">Register Now</a>
          </div>
        </div>
        <div className="event-card">
          <div className="event-date">
            <span className="date-day">28</span>
            <span className="date-month">NOV</span>
          </div>
          <div className="event-details">
            <h3>DeFi Masterclass</h3>
            <p className="event-time"><i className="fas fa-clock"></i> 2:00 PM - 5:00 PM (GMT)</p>
            <p className="event-location"><i className="fas fa-map-marker-alt"></i> Online Workshop</p>
            <p className="event-desc">Deep dive into decentralized finance protocols and yield strategies.</p>
            <a href="#" className="event-button">Learn More</a>
          </div>
        </div>
        <div className="event-card">
          <div className="event-date">
            <span className="date-day">05</span>
            <span className="date-month">DEC</span>
          </div>
          <div className="event-details">
            <h3>Genesis Annual Meetup</h3>
            <p className="event-time"><i className="fas fa-clock"></i> 6:00 PM - 11:00 PM (GMT)</p>
            <p className="event-location"><i className="fas fa-map-marker-alt"></i> Berlin, Germany</p>
            <p className="event-desc">Our biggest community gathering with keynote speakers and networking.</p>
            <a href="#" className="event-button">Join Waitlist</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;