import React from 'react';

const Sponsors = () => {
  return (
    <section id="sponsors">
      <h2 className="section-title">Our <span>Sponsors</span></h2>
      <div className="sponsors-container">
        <div className="sponsor-tier">
          <h3>Platinum Partners</h3>
          <div className="sponsor-logos">
            <img src="https://via.placeholder.com/200x100/09f/fff?text=Polygon" alt="Polygon" />
            <img src="https://via.placeholder.com/200x100/09f/fff?text=Chainlink" alt="Chainlink" />
          </div>
        </div>
        <div className="sponsor-tier">
          <h3>Gold Sponsors</h3>
          <div className="sponsor-logos">
            <img src="https://via.placeholder.com/150x75/09f/fff?text=TheGraph" alt="The Graph" />
            <img src="https://via.placeholder.com/150x75/09f/fff?text=Filecoin" alt="Filecoin" />
            <img src="https://via.placeholder.com/150x75/09f/fff?text=IPFS" alt="IPFS" />
          </div>
        </div>
        <div className="sponsor-tier">
          <h3>Community Partners</h3>
          <div className="sponsor-logos">
            <img src="https://via.placeholder.com/120x60/09f/fff?text=Gitcoin" alt="Gitcoin" />
            <img src="https://via.placeholder.com/120x60/09f/fff?text=ENS" alt="ENS" />
            <img src="https://via.placeholder.com/120x60/09f/fff?text=Uniswap" alt="Uniswap" />
            <img src="https://via.placeholder.com/120x60/09f/fff?text=Aave" alt="Aave" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;