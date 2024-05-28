import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Contacts from './Components/Contacts';
import Shop from './Components/Shop';
import Cart from './Components/Cart'; 
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
