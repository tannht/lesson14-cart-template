import React, { Component } from 'react';
import Products from "./components/Products"
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message';
import Cart from './components/Cart';
function App() {
  return (
   
    <div>
        {/* Header */}
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <Products></Products>
            {/* Message */}
            <Message />
            {/* Cart */}
            <Cart/>
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
   
  );
}

export default App;
