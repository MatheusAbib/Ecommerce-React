import React, { useState, useEffect } from 'react';
import './ProductSection.scss';
import { fetchProducts } from '../../services/api';
import { Product } from '../../types/Product';
import ProductModal from '../ProductModal/ProductModal';

interface ProductSectionProps {
  title: string;
  categories: string[];
  sectionId: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, categories, sectionId }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const response = await fetchProducts();
        
        if (response.success && response.products.length > 0) {
          setProducts(response.products.slice(0, 4));
        } else {
          setError('Nenhum produto encontrado');
        }
      } catch (err) {
        setError('Erro ao carregar produtos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [sectionId]);

  const formatPrice = (price: number): string => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const calculateInstallments = (price: number): string => {
    const installmentPrice = price / 2;
    return `ou 2x de ${formatPrice(installmentPrice)} sem juros`;
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="product-section" id={sectionId}>
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

          {loading ? (
            <div className="loading-state">
              <p>Carregando produtos...</p>
            </div>
          ) : error ? (
            <div className="error-state">
              <p>{error}</p>
            </div>
          ) : (
            <div className="products-wrapper">
              <button className="nav-button prev">
                <div className="nav-arrow left"></div>
              </button>

              <div className="products-grid">
                {products.map((product, index) => (
                  <div 
                    key={`${product.productName}-${index}`} 
                    className="product-card"
                    onClick={() => handleProductClick(product)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="product-image-container">
                      <img
                        src={product.photo}
                        alt={product.productName}
                        className="product-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "/images/Phone.png";
                        }}
                      />
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.productName}</h3>
                      <div className="product-prices">
                        <span className="old-price">
                          {formatPrice(product.price * 1.1)}
                        </span>
                        <span className="current-price">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      <p className="installments">
                        {calculateInstallments(product.price)}
                      </p>
                      <span className="free-shipping">Frete grátis</span>
                      <button 
                        className="buy-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick(product);
                        }}
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="nav-button next">
                <div className="nav-arrow right"></div>
              </button>
            </div>
          )}
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ProductSection;
