import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-overlay"></div>
      <div className="container-banner">
        <div className="hero-content">
          <h1 className="hero-title">Venha conhecer nossas promoções</h1>
          <p className="hero-subtitle"><a>50% Off</a> nos produtos</p>
          <button className="hero-button btn-secondary">
            Ver produto
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;