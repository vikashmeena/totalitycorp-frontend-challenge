// src/components/Cart.js
import React, { useState } from "react";
import "./Cart.css"; // Import your CSS for styling

const Cart = ({ cartItems, updateCart }) => {
  const [cartTotal, setCartTotal] = useState(0);

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    updateCart(updatedCart);
    recalculateTotal(updatedCart);
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (productId, quantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    updateCart(updatedCart);
    recalculateTotal(updatedCart);
  };

  // Function to recalculate the cart total
  const recalculateTotal = (updatedCart) => {
    const total = updatedCart.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
    setCartTotal(total);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>${item.price} per item</p>
              </div>
              <div className="cart-item-controls">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Total: ${cartTotal}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
