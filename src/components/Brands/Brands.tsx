import React from 'react';
import './Brands.scss';

const Brands = () => {
  const brands = [
    { logo: '/images/logo.svg' },
    { logo: '/images/logo.svg' },
    { logo: '/images/logo.svg' },
    { logo: '/images/logo.svg' },
    { logo: '/images/logo.svg' },
  ];

  return (
    <section className="brands-section">
      <div className="container-brands">
        <h2 className="brands-title">Navegue por marcas</h2>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <div className="brand-circle">
                <div className="brand-logo">
                  <img 
                    src={brand.logo} 
                    alt="Logo da marca"
                    className="brand-logo-image"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.onerror = null;
                        img.src = "https://via.placeholder.com/100x30?text=Logo";
                      }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;