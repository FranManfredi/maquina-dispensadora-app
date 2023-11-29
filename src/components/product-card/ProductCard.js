import React from 'react';
import './ProductCard.css';
import {useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const {_id, drink_name, price, image, qty } = product;

  const navigate = useNavigate();

  return (
    <div className="product-card">
            <img className='product-image' src={image} alt={drink_name}/>
      <div className="product-details">
        <p className="product-name">{drink_name} {`(${qty} left)`}</p>
        <p className="product-price">${price}</p>
        <button className={qty === 0 ? "out-of-stock" : "product-button"} 
                onClick={ () => {navigate( `/${_id}` )} }
                disabled={qty === 0}>
                                        {qty === 0 ? "out of stock" : "buy"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;