import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const { name, price, image, quantity } = product;

  return (
    <div className="product-card">
            <img className='product-image' src={image} alt={name}/>
      <div className="product-details">
        <p className="product-name">{name}</p>
        <p className="product-price">${price.toFixed(2)}</p>
        <button className={quantity === 0 ? "out-of-stock" : "product-button"} 
                onClick={ () => {} }
                disabled={quantity === 0}>
                                        {quantity === 0 ? "out of stock" : "buy"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;