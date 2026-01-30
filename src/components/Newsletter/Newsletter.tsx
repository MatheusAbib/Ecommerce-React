import React, { useState } from 'react';
import './Newsletter.scss';

interface FormData {
  name: string;
  email: string;
  acceptTerms: boolean;
}

const Newsletter = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Aqui você implementaria a lógica de envio para a API
    alert('Inscrição realizada com sucesso!');
    setFormData({ name: '', email: '', acceptTerms: false });
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2 className="newsletter-title">Inscreva-se na nossa newsletter</h2>
            <p className="newsletter-description">
              Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>

              <button type="submit" className="newsletter-button btn-secondary">
                INSCREVER
              </button>
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="checkbox-input"
                required
              />
              <label htmlFor="acceptTerms" className="checkbox-label">
                Aceito os termos e condições
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
