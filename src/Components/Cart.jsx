import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} USD x {item.quantity}
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>Total Items: {totalItems}</div>
      <div>Total Price: {cartTotal} USD</div>
      <button onClick={emptyCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
