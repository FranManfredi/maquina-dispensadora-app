import React from 'react';
import './ProductCard.css';
import {useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const {id, name, price, image, quantity } = product;

  const navigate = useNavigate();

  return (
    <div className="product-card">
            <img className='product-image' src={image} alt={name}/>
      <div className="product-details">
        <p className="product-name">{name}</p>
        <p className="product-price">${price.toFixed(2)}</p>
        <button className={quantity === 0 ? "out-of-stock" : "product-button"} 
                onClick={ () => {navigate( `/${id}` )} }
                disabled={quantity === 0}>
                                        {quantity === 0 ? "out of stock" : "buy"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;