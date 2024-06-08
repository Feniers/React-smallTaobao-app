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
          }}
        >
          <img
            src={product.img}
            alt={product.name}
            style={{
              width: "100%",
              height: "80%",
            }}
          />
          <div className="product-info">
            <h3>{product.name}</h3>
            <div className="product-info-bottom">
              <div className="product-price">
                <span style={{ color: "red" }}>￥</span>
                <span
                  style={{ color: "red", fontSize: "2em", fontWeight: "bold" }}
                >
                  {product.price.toString().split(".")[0]}
                </span>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {product.price.toString().split(".").length > 1
                    ? "." + product.price.toString().split(".")[1]
                    : " "}
                </span>
              </div>
              <span> 销量：{product.sales}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
