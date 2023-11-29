import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import CreditCardForm from "../../components/credit-card-form/CreditCardForm";
import "./BuyPage.css";

import sprite from "../../assets/sprite-3-logo-png-transparent.png";
import cocacola from "../../assets/coca-cola-transparent-coca-cola-free-free-png.webp";
import pepsi from "../../assets/pepsi-logo-png-transparent.png";
import useSocket from "../../hooks/useSocket";

export default function BuyPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { sendCall, socket } = useSocket();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/stock")
      .then((res) => res.json())
      .then((data) => setProduct(data.find((prod) => prod._id === productId)));
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

  return (
    <div className="buy-page">
      <Header notHome={true} />
      <div className="product-description">
        <img src={getImage(product.drink_name)} alt={product.drink_name} />
        <h1>{product.drink_name}</h1>
        <h2>{product.price}</h2>
        <h3>The machine has {product.qty} in stock!</h3>
      </div>
      <CreditCardForm
        submitFunc={() => {
          sendCall(product._id, product.drink_name)
          navigate("/transaction");
        }}
      />
      <Footer />
    </div>
  );
}
