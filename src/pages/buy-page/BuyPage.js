import React from "react";
import { useParams } from "react-router-dom";
import './BuyPage.css';

import sprite from '../../assets/sprite-3-logo-png-transparent.png';
import cocacola from '../../assets/coca-cola-transparent-coca-cola-free-free-png.webp';
import pepsi from '../../assets/pepsi-logo-png-transparent.png';
import Header from "../../components/header/Header";
import CreditCardForm from "../../components/credit-card-form/CreditCardForm";

export default function BuyPage() {
    const { productId } = useParams();

    const products = [
        { id: 1, name: 'sprite', price: 19.99, image: sprite, quantity: 10 },
        { id: 2, name: 'coca-cola', price: 29.99, image: cocacola, quantity: 5 },
        { id: 3, name: 'pepsi', price: 39.99, image: pepsi, quantity: 0 },
    ];

    const product = products.find((product) => product.id === Number(productId));

    return (
        <div className="buy-page">

            <Header />

            <div className="product-description">
                <img src={product.image} alt={product.name} />
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                <h3>The machine has {product.quantity} in stock!</h3>
            </div>
            <CreditCardForm/>
        </div>
    );
}