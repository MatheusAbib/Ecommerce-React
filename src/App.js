import React from 'react';
import './styles/main.css';
import './styles/components.css';

import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Categories from './components/Categories/Categories';
import ProductSection from './components/Products/ProductSection';
import Partners from './components/Partners/Partners';
import Brands from './components/Brands/Brands';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HeroBanner />
        <Categories />
        <ProductSection 
          title="Produtos relacionados"
          categories={["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS"]}
          sectionId="tecnologia"
        />
        <Partners />
        <ProductSection 
          title="Produtos relacionados"
          categories={["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS"]}
          sectionId="ofertas"
        />
        <Partners />
        <Brands />
        <ProductSection 
          title="Produtos relacionados"
          categories={["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS"]}
          sectionId="destaques"
        />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;