import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo">Genesis<span>Web3</span></a>
      <div className="nav-links">
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="features" smooth={true} duration={500}>Features</Link>
        <Link to="team" smooth={true} duration={500}>Team</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
      <a href="#" className="cta-button">Join Community</a>
    </nav>
  );
};

export default Navbar;