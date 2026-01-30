import React, { useEffect, useState } from 'react';
import './ProductModal.scss';
import { Product } from '../../types/Product';

import { 
  FiX, 
  FiShoppingCart, 
  FiCheckCircle, 
  FiPlus, 
  FiMinus, 
  FiCreditCard, 
  FiTag 
} from 'react-icons/fi';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const formatPrice = (price: number): string => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const totalPrice = product.price * quantity;
  const installmentPrice = totalPrice / 10;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="product-modal-overlay" onClick={handleOverlayClick}>
      <div className="product-modal-container">
        
        {/* BOTÃO FECHAR */}
        <button className="product-modal-close" onClick={onClose}>
          <FiX size={20} />
        </button>
        
        <div className="product-modal-content">
          <div className="modal-image-column">
            <div className="image-main">
              <img 
                src={product.photo} 
                alt={product.productName}
                className="product-main-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/Phone.png";
                }}
              />
            </div>
            
            <div className="image-thumbnails">
              <button className="thumbnail active">
                <img src={product.photo} alt="Principal" />
              </button>
            </div>
          </div>

          <div className="modal-info-column">
            <h2 className="product-title">{product.productName}</h2>

            <div className="product-sku">
              <FiTag /> SKU: {product.productName.replace(/\s+/g, '-').toUpperCase()}
            </div>

            <div className="product-pricing">
              <div className="price-section">
                <div className="price-current">
                  {formatPrice(product.price)}
                </div>

                <div className="price-installments">
                  <FiCreditCard /> ou 10x de {formatPrice(installmentPrice)} sem juros
                </div>

                <div className="price-savings">
                  <FiTag /> Economize {formatPrice(product.price * 0.2)} (20% OFF)
                </div>
              </div>

              <div className="quantity-section">
                <div>Quantidade:</div>

                <div className="quantity-controls">
                  <button 
                    className="quantity-btn" 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  >
                    <FiMinus />
                  </button>

                  <input 
                    type="number" 
                    min="1" 
                    max="99"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="quantity-input"
                  />

                  <button 
                    className="quantity-btn" 
                    onClick={() => setQuantity(q => Math.min(99, q + 1))}
                  >
                    <FiPlus />
                  </button>
                </div>

                <div className="stock-info">
                  <span className="in-stock">
                    <FiCheckCircle /> Em estoque
                  </span>
                </div>
              </div>

              <div className="total-section">
                <div>Total:</div>
                <div className="total-price">{formatPrice(totalPrice)}</div>
              </div>
            </div>

            <div className="product-actions">
              <button className="btn-add-to-cart">
                <FiShoppingCart /> Adicionar ao Carrinho
              </button>

              <button className="btn-buy-now">
                <FiCreditCard /> Comprar
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
