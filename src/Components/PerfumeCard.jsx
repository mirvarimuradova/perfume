import React from 'react';
import './Style.css';
import {CartProvider, useCart } from 'react-use-cart';

const PerfumeCard = ({ image, name, description, price }) => {
  const { addItem } = useCart();

  
  const priceNumber = parseFloat(price);

  const handleAddToCart = () => {
    addItem({
      id: name,
      price: priceNumber,
      image,
      name,
      description
    });
  };

  return (
    <div className="perfume-card">
      <img src={image} alt={name} className="perfume-image" />
      <h3 className="perfume-name">{name}</h3>
      <p className="perfume-description">{description}</p>
      <div className="pricing">
        <span className="perfume-price original-price">{priceNumber.toFixed(2)} USD</span>
        {!isNaN(priceNumber) && (
          <span className="perfume-price sale-price">{(priceNumber / 2).toFixed(2)} USD</span>
        )}
      </div>
      <button className='add' onClick={handleAddToCart}>Add to basket</button>
    </div>
  );
};

export default PerfumeCard;
