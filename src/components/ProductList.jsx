import React from "react";
import "../css/ProductList.css";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
