import React, { useEffect, useState } from "react";
import "./ProductList.css";
import ProductCard from "../product-card/ProductCard";

import sprite from "../../assets/sprite-3-logo-png-transparent.png";
import cocacola from "../../assets/coca-cola-transparent-coca-cola-free-free-png.webp";
import pepsi from "../../assets/pepsi-logo-png-transparent.png";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stock")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const getImage = (name) => {
    switch (name) {
      case "sprite":
        return sprite;
      case "coca-cola":
        return cocacola;
      case "pepsi":
        return pepsi;
      default:
        return sprite;
    }
  };

  // Dummy product data (replace with your actual data)
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={{ ...product, image: getImage(product.drink_name) }}
        />
      ))}
    </div>
  );
}

export default ProductList;
