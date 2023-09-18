// src/components/Checkout.js
import React, { useState } from "react";
import "./Checkout.css"; // Import your CSS for styling

const Checkout = ({ cartItems, cartTotal, checkoutComplete }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    // You can implement payment processing logic here
    // For example, send shippingInfo, paymentInfo, and cartItems to a server for processing

    // After successful payment, you can clear the cart and mark checkout as complete
    checkoutComplete();
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="shipping-info">
        <h3>Shipping Information</h3>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={shippingInfo.name}
              onChange={handleShippingInfoChange}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={shippingInfo.name}
              onChange={handleShippingInfoChange}
            />
          </div>
          <div className="form-group">
            <label>PIN Code:</label>
            <input
              type="text"
              name="zip"
              value={shippingInfo.name}
              onChange={handleShippingInfoChange}
            />
          </div>
          {/* Add more shipping fields (address, city, state, zip) */}
        </form>
      </div>
      <div className="payment-info">
        <h3>Payment Information</h3>
        <form>
          <div className="form-group">
            <label>Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentInfoChange}
            />
          </div>
          <div className="form-group">
            <label>ExpirationDate:</label>
            <input
              type="text"
              name="expirationDate"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentInfoChange}
            />
          </div>
          <div className="form-group">
            <label>CVV:</label>
            <input
              type="text"
              name="cvv"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentInfoChange}
            />
          </div>
          {/* Add more payment fields (expirationDate, cvv) */}
        </form>
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
        <p>Total: ${cartTotal}</p>
      </div>
      <button onClick={handleCheckout}>Complete Purchase</button>
    </div>
  );
};

export default Checkout;
