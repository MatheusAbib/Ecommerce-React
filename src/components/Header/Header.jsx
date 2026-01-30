import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container-header">
          <div className="header-info">
            <div className="info-item">
                <img src="/images/ShieldCheck.svg" alt="Shield" className="shield-icon" />
              <span>Compra <a>100% segura</a></span>
            </div>
            <div className="info-item">
                <img src="/images/Truck.svg" alt="Entrega" className="truck-icon" />
              <span><a>Frete grátis</a> acima de R$ 200</span>
            </div>
            <div className="info-item">
                <img src="/images/CreditCard.svg" alt="Cartão" className="card-icon" />
              <span><a>Parcele</a> suas compras</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container-header">
          <div className="header-content">
            <div className="logo">
        <img 
          src="/images/Logo.svg" 
          alt="Econverse" 
          className="logo-image" 
        />
            </div>
            
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="O que você está buscando?" 
                className="search-input"
              />
              <button className="search-button">
                <img src="/images/Lupa.svg" alt="Lupa" className="Lupa-icon" />
              </button>
            </div>
            
            <div className="header-actions">
              <button className="action-button">
                <img src="/images/Group.svg" alt="Caixa" className="box-icon" />
              </button>
              <button className="action-button">
                <img src="/images/UserCircle.svg" alt="User" className="user-icon" />
              </button>
              <button className="action-button">
                <img src="/images/Heart.svg" alt="Favorito" className="heart-icon" />
              </button>
              <button className="action-button cart-button">
                <img src="/images/ShoppingCart.svg" alt="Carrinho" className="cart-icon" />
                <span className="cart-count">2</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="header-nav">
        <div className="container-header">
          <ul className="nav-menu">
            <li><a href="#" className="nav-link active">TODAS AS CATEGORIAS</a></li>
            <li><a href="#" className="nav-link">SUPERMERCADO</a></li>
            <li><a href="#" className="nav-link">LIVROS</a></li>
            <li><a href="#" className="nav-link">MODA</a></li>
            <li><a href="#" className="nav-link">LANÇAMENTOS</a></li>
            <li><a href="#" className="nav-link highlight">OFERTAS DO DIA</a></li>
            <li><a href="#" className="nav-link with-icon">
                <img src="/images/Crown.svg" alt="Coroa" className="crown-icon" />
              ASSINATURA
            </a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;