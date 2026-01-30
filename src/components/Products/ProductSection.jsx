import React from 'react';
import './ProductSection.css';

const ProductSection = ({ title, categories }) => {
  const products = [
    {
      id: 1,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '28,90',
      oldPrice: '30,90',
      installments: 'ou 2x de R$ 49,95 sem juros',
      freeShipping: true,
      image: '/images/Phone.png' 
    },
    {
      id: 2,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '28,90',
      oldPrice: '30,90',
      installments: 'ou 2x de R$ 49,95 sem juros',
      freeShipping: true,
      image: '/images/Phone.png'     
    },
    {
      id: 3,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '28,90',
      oldPrice: '30,90',
      installments: 'ou 2x de R$ 49,95 sem juros',
      freeShipping: true,
      image: '/images/Phone.png'
    },
    {
      id: 4,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '28,90',
      oldPrice: '30,90',
      installments: 'ou 2x de R$ 49,95 sem juros',
      freeShipping: true,
      image: '/images/Phone.png'
    },
  ];

  return (
    <section className="product-section">
      <div className="product-container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
        </div>
        
        <div className="category-filters">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`category-filter ${index === 0 ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
          <button className="category-filter">
            Ver todos
          </button>
        </div>
        
<div className="products-wrapper">
  <button className="nav-button prev">
<div className="nav-arrow left"></div>
  </button>

  <div className="products-grid">
    {products.map(product => (
      <div key={product.id} className="product-card">
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/270x240?text=Produto";
            }}
          />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-prices">
            <span className="old-price">R$ {product.oldPrice}</span>
            <span className="current-price">R$ {product.price}</span>
          </div>
          <p className="installments">{product.installments}</p>
          {product.freeShipping && (
            <span className="free-shipping">Frete grátis</span>
          )}
          <button className="buy-button">Comprar</button>
        </div>
      </div>
    ))}
  </div>

  <button className="nav-button next">
<div className="nav-arrow right"></div>
  </button>
</div>

      </div>
    </section>
  );
};

export default ProductSection;