import React from 'react';
import './Partners.scss';

const Partners = () => {
  const partners = [
    {
      id: 1,
      title: 'Parceiros',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      buttonText: 'Confira',
      image: '/images/Parceiros.png'
    },
    {
      id: 2,
      title: 'Parceiros',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      buttonText: 'Confira',
      image: '/images/Parceiros.png'
    }
  ];

  return (
    <section className="partners-section">
      <div className="container-partiners">
        <div className="partners-grid">
          {partners.map(partner => (
            <div key={partner.id} className="partner-card">
              <div className="partner-image-container">
                <img 
                  src={partner.image} 
                  alt={partner.title} 
                  className="partner-image"
                />
                <div className="partner-gradient"></div>
              </div>
              <div className="partner-content">
                <h3 className="partner-title">{partner.title}</h3>
                <p className="partner-description">{partner.description}</p>
                <button className="partner-button btn-secondary">
                  {partner.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
