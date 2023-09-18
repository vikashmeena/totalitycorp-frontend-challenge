// src/components/ProductDetail.js
import React from "react";
import "./ProductDetail.css"; // Import your CSS for styling

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        {/* Add more product details here */}
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
