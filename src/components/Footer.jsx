import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <a href="#" className="footer-logo">Genesis<span>Web3</span></a>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
        <div className="social-links-footer">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-discord"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-telegram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
        <p className="copyright">© 2023 Genesis Web3 Community. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;