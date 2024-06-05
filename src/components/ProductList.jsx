import React from "react";
import "../css/ProductList.css";
import { useNavigate } from "react-router-dom";

function ProductList({ products }) {
  const navigate = useNavigate();

  return (
    <div className="product-list">
      {products.map((product) => (
        <div
          className="product-card"
          key={product.id}
          onClick={() => {
            console.log("click product: ", product.id);
            navigate(`/product/${product.id}`);
            // navigate("/productdetail");
          }}
        >
          <img src={product.img} alt={product.name} />
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
