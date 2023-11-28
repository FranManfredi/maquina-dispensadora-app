// App.js
import React from 'react';
import './Home.css';
import Header from '../../components/header/Header';
import ProductList from '../../components/product-list/ProductList';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default Home;