import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    { 
      name: 'Tecnologia', 
      active: true,
      image: '/images/Tecnologia.png'
    },
    { 
      name: 'Supermercado', 
      image: '/images/Supermercado.png'
    },
    { 
      name: 'Bebidas', 
      image: '/images/Bebidas.png'
    },
    { 
      name: 'Ferramentas', 
      image: '/images/Ferramentas.png'
    },
    { 
      name: 'Saúde', 
      image: '/images/Saude.png'
    },
    { 
      name: 'Esportes e Fitness', 
      image: '/images/Esporte.png'
    },
    { 
      name: 'Moda', 
      image: '/images/Moda.png'
    },
  ];

  const popularCategories = [
    { 
      name: 'Oriental', 
      image: '/images/v1_1333.png' 
    },
    { 
      name: 'Padarias', 
      image: '/images/v1_1337.png' 
    },
    { 
      name: 'Mercados', 
      image: '📊' 
    },
  ];

  return (
    <section className="categories-section">
      <div className="categories-container">
        
        <div className="main-categories">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`category-card ${category.active ? 'active' : ''}`}
            >
              <div className="category-icon">
                {category.image ? (
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="category-image"
                  />
                ) : (
                  category.icon
                )}
              </div>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Categories;