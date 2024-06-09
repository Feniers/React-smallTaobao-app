import React from "react";

function Price({ price }) {
  return (
    <div className="product-price">
      <span style={{ color: "red" }}>￥</span>
      <span
        style={{
          color: "red",
          fontSize: "1.5em",
          fontWeight: "bold",
        }}
      >
        {price.toString().split(".")[0]}
      </span>
      <span style={{ color: "red", fontWeight: "bold" }}>
        {price.toString().split(".").length > 1
          ? "." + price.toString().split(".")[1]
          : " "}
      </span>
    </div>
  );
}

export default Price;
