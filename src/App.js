// src/App.js
import React, { useState } from "react";
import "./App.css"; // Import your global CSS
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";


const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Electronics",
    price: 50,
    rating: 4.5,
    image: "https://via.placeholder.com/150", // Replace with actual image link
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  // const [cartTotal, setcartTotal] = useState(0);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track the selected product

  const addToCart = (product) => {
    const updatedCart = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(updatedCart);
    // setcartTotal(updatedCart);
  };
  const handleProductClick = (product) => {
    setSelectedProduct(product); // select when product is clicked
  };

  const handleCheckoutComplete = () => {
    setCartItems([]); // Clear the cart after checkout
    setCheckoutComplete(true);
  };

  return (
    <div className="App">
      <h1>Product Listing</h1>
      <ProductList
        products={products}
        addToCart={addToCart}
        onProductClick={handleProductClick}
      />
      {selectedProduct && <ProductDetail product={selectedProduct} />}
      <Cart cartItems={cartItems} updateCart={setCartItems} />
      {cartItems.length > 0 && !checkoutComplete && (
        <Checkout
          cartItems={cartItems}
          cartTotal={Cart.cartTotal}
          checkoutComplete={handleCheckoutComplete}
        />
      )}
      {checkoutComplete && <p>Thank you for your purchase!</p>}
    </div>
  );
}

export default App;
