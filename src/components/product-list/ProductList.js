import React from 'react';
import './ProductList.css';
import ProductCard from '../product-card/ProductCard';

import  sprite  from '../../assets/sprite-3-logo-png-transparent.png';
import  cocacola  from '../../assets/coca-cola-transparent-coca-cola-free-free-png.webp';
import  pepsi  from '../../assets/pepsi-logo-png-transparent.png';

function ProductList() {
  // Dummy product data (replace with your actual data)
  const products = [
    { id: 1, name: 'sprite', price: 19.99, image: sprite, quantity: 10 },
    { id: 2, name: 'coca-cola', price: 29.99, image: cocacola, quantity: 5 },
    { id: 3, name: 'pepsi', price: 39.99, image: pepsi, quantity: 0 },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;