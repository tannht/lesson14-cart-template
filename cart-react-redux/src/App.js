import React, { Component } from 'react';
import ProductsContainer from "./containers/ProductsContainer"
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message';
import CartContainer from './containers/CartContainer';
function App() {
  return (
   
    <div>
        {/* Header */}
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <ProductsContainer />
            {/* Message */}
            <Message />
            {/* Cart */}
            <CartContainer/>
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
   
  );
}

export default App;
