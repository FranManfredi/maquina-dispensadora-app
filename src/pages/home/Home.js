// App.js
import React from 'react';
import './Home.css';
import ProductList from '../../components/product-list/ProductList';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function Home() {
  return (
    <div className="app">
      <Header notHome={false}/>
      <main className="main-content">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default Home;