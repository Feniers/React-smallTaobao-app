import React from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined,HomeOutlined,ShoppingCartOutlined,HeartTwoTone } from "@ant-design/icons";
import "../css/detail.css";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#ffffff",
  borderRadius: "10px 10px 0 0",
};

function ProductDetail() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <LeftOutlined
          onClick={() => window.history.back()}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div>
        <Carousel
          autoplay
          arrows={true}
          dots={false}
          style={{
            width: "100%",
            height: "200px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg"
            alt="img"
            style={contentStyle}
          />
          <img
            src="https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg"
            alt="img"
            style={contentStyle}
          />
          <img
            src="https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg"
            alt="img"
            style={contentStyle}
          />
        </Carousel>
      </div>
      <h2>产品名</h2>
      <h3>价格：</h3>
      <h3>库存：</h3>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#fff",
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #ccc",
        }}
      >

        <div className="right_box_item">
          < HomeOutlined/>
          <div>首页</div>
        </div>
        <div className="right_box_item">
          < ShoppingCartOutlined/>
          <div>购物车</div>
        </div>
        <div className="right_box_item">
          < HeartTwoTone/>
          <div>收藏</div>
        </div>
        
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>加入购物车</Button>
          <Button onClick={() => { window.location.href = '/CreateOrder'; }}>购买</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
