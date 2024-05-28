import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Contacts from './Components/Contacts';
import Shop from './Components/Shop';
import Basket from './Components/Basket'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   
      <div className="App">
   
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/basket" element={<Basket/>}/>
        </Routes>
        <Footer />
      
       
        
       
      </div>
  
  );
}

export default App;
