import React from 'react';
import { CartProvider, useCart } from 'react-use-cart';

const ProductCard = ({ id, name, price }) => {
  const { addItem } = useCart();

  return (
    <div>
      <h3>{name}</h3>
      <p>{price} USD</p>
      <button onClick={() => addItem({ id, name, price })}>Add to Cart</button>
    </div>
  );
};

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

const TestApp = () => (
  <CartProvider>
    <div>
      <h1>My Shop</h1>
      <ProductCard id="1" name="Perfume A" price={50} />
      <ProductCard id="2" name="Perfume B" price={75} />
      <Cart />
    </div>
  </CartProvider>
);

export default TestApp;
