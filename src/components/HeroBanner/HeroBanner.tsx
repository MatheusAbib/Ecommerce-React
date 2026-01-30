import React from 'react';
import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <section 
      className="hero-banner" 
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("/images/black-friday.png")`,
        backgroundSize: '130%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
