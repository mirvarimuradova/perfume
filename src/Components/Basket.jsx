import React from 'react';
import { useCart } from 'react-use-cart';
import './Style.css';
const Basket = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p>Your basket is empty</p>;

  return (
    <div className="basket">
      <h2>Your Basket</h2>
      <p>Unique Items: {totalUniqueItems}</p>
      <p>Total Items: {totalItems}</p>
      <ul>
        {items.map((item) => (
          <li key={item.productId}>
            <h4>{item.name}</h4>
            <p>Price: {item.price} USD</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => updateItemQuantity(item.productId, item.quantity - 1)}>-</button>
            <button onClick={() => updateItemQuantity(item.productId, item.quantity + 1)}>+</button>
            <button onClick={() => removeItem(item.productId)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: {cartTotal} USD</h3>
      <button onClick={() => emptyCart()}>Empty Cart</button>
    </div>
  );
};

export default Basket;
