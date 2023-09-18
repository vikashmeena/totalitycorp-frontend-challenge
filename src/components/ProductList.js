// src/components/ProductList.js
import React, { useState } from "react";
import "./ProductList.css"; // Import your CSS for styling

const ProductList = ({ products, addToCart }) => {
  // State for filters
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter === "all" || product.category === categoryFilter) &&
      (priceFilter === "all" ||
        (priceFilter === "under50"
          ? product.price < 50
          : product.price >= 50)) &&
      (ratingFilter === "all" || product.rating >= parseInt(ratingFilter))
    );
  });

  return (
    <div className="product-list-container">
      <div className="filters">
        <label>
          Category:
          <select onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            {/* Add options for different categories */}
          </select>
        </label>
        <label>
          Price:
          <select onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="under50">Under $50</option>
            <option value="50andabove">$50 and Above</option>
          </select>
        </label>
        <label>
          Rating:
          <select onChange={(e) => setRatingFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
            <option value="1">1+ Stars</option>
          </select>
        </label>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src="https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
