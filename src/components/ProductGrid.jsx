import React from "react";
import Masonry from "react-masonry-css";
import "../css/ProductGrid.css"; // 创建这个CSS文件来给你的网格和卡片添加样式
import { useNavigate } from "react-router-dom";
import Price from "./Price";

const ProductGrid = ({ products, showDetail = false }) => {
  const navigate = useNavigate();

  const breakpointCols = {
    default: showDetail ? 1 : 2,
  };

  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {products.map((product) => {
        if (!showDetail) {
          // console.log("grid: ", showDetail);
          return (
            <div
              className="product-card"
              key={product.id}
              onClick={() => {
                console.log("click product: ", product.id);
                navigate(`/product/${product.id}`);
              }}
            >
              <img src={product.img} alt={product.name} />
              <div className="product-info-grid">
                <h3>{product.name}</h3>
                <div className="product-info-bottom">
                  <Price price={product.price} />
                  <span> 销量：{product.sales}</span>
                </div>
              </div>
            </div>
          );
        } else {
          // console.log("list: ", showDetail);
          return (
            <div
              className="product-card-list"
              key={product.id}
              onClick={() => {
                console.log("click product: ", product.id);
                navigate(`/product/${product.id}`);
              }}
            >
              <img src={product.img} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <Price price={product.price} />
                <span> {product.sales}人累计付款</span>
                <div className="merchant">
                  {product.merchant === "" ? "十年老店" : product.merchant}{" "}
                </div>
              </div>
            </div>
          );
        }
      })}
    </Masonry>
  );
};

export default ProductGrid;
