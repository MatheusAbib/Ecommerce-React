import React from 'react';
import './Footer.scss';

const Footer = () => {
  const footerLinks = {
    institutional: [
      { id: 1, label: 'Sobre Nós', url: '#' },
      { id: 2, label: 'Movimento', url: '#' },
      { id: 3, label: 'Trabalhe conosco', url: '#' },
    ],
    help: [
      { id: 4, label: 'Suporte', url: '#' },
      { id: 5, label: 'Fale Conosco', url: '#' },
      { id: 6, label: 'Perguntas Frequentes', url: '#' },
    ],
    terms: [
      { id: 7, label: 'Termos e Condições', url: '#' },
      { id: 8, label: 'Política de Privacidade', url: '#' },
      { id: 9, label: 'Troca e Devolução', url: '#' },
    ]
  };

const socialLinks = [
  { id: 1, icon: '/images/instagram.svg', label: 'Instagram' },
  { id: 2, icon: '/images/facebook.svg', label: 'Facebook' },
  { id: 3, icon: '/images/linkedin.svg', label: 'Linkedin' },
];


  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <img 
                  src="/images/Logo.svg" 
                  alt="Econverse" 
                  className="logo-image" 
                />

              </div>
              <p className="brand-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              
                <div className="social-links">
                  {socialLinks.map(link => (
                    <a 
                      key={link.id} 
                      href="#" 
                      className="social-link"
                      aria-label={link.label}
                    >
                      <img 
                        src={link.icon}
                        alt={link.label}
                        className="social-icon"
                      />
                    </a>
                  ))}
                </div>
            </div>
            
            <div className="footer-links-grid">
              <div className="footer-column">
                <h3 className="column-title">Institucional</h3>
                <ul className="links-list">
                  {footerLinks.institutional.map(link => (
                    <li key={link.id}>
                      <a href={link.url} className="footer-link">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="footer-column">
                <h3 className="column-title">Ajuda</h3>
                <ul className="links-list">
                  {footerLinks.help.map(link => (
                    <li key={link.id}>
                      <a href={link.url} className="footer-link">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="footer-column">
                <h3 className="column-title">Termos</h3>
                <ul className="links-list">
                  {footerLinks.terms.map(link => (
                    <li key={link.id}>
                      <a href={link.url} className="footer-link">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container-footer">
          <p className="copyright">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
