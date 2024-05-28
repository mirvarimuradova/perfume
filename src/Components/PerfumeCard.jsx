import React from 'react';
import { useCart } from 'react-use-cart';

const PerfumeCard = ({ productId, name, price, image, description }) => {
  const { addItem } = useCart();

  const item = { id: productId, name, price, image, description };

  return (
    <div className="perfume-card">
      <img className='perfume-image' src={image} alt={name} />
      <h3 className='perfume-name'>{name}</h3>
      <p className='perfume-description'>{description}</p>
      <p className='perfume-price'>Price: {price} USD</p>
      <button className='add' onClick={() => addItem(item)}>Add to Cart</button>
    </div>
  );
};

export default PerfumeCard;
