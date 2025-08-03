import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Team from './components/Team.jsx';
import Events from './components/Events.jsx';
import Sponsors from './components/Sponsers.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import './styles/team.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Team />
        <Events />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;