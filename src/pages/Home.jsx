import {
  GiftFilled,
  HeartTwoTone,
  MessageOutlined,
  RocketTwoTone,
  ScanOutlined,
  ShoppingTwoTone,
} from "@ant-design/icons";
import React from "react";
import "../css/Home.css";
import { Carousel, Menu } from "antd";
import ProductList from "../components/ProductList";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#ffffff",
  borderRadius: "10px 10px 0 0",
};

const products = [
  {
    id: 1,
    name: "摩托罗拉 razr 40 Mo",
    price: "¥159.20",
    description: "到手价",
    image: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 2,
    name: "美的壁挂洗",
    price: "¥1598.00",
    description: "到手价",
    image: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 3,
    name: "Apple Watch",
    price: "¥8.01",
    description: "到手价",
    image: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 4,
    name: "摩托罗拉 razr 40 Mo",
    price: "¥159.20",
    description: "到手价",
    image: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 5,
    name: "美的壁挂洗",
    price: "¥1598.00",
    description: "到手价",
    image: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 6,
    name: "Apple Watch",
    price: "¥8.01",
    description: "到手价",
    image: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
];

const HomePage = () => {
  console.log("HomePage");

  return (
    <div className="HomePage">
      <div className="top">
        <div className="Header">
          <ScanOutlined />
          <div className="SearchBox">
            <input type="text" placeholder=" 请输入商品 如：手机" />
          </div>
          <MessageOutlined />
        </div>
        <div className="Carousel_box">
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
      </div>

      <div className="mid">
        <div className="mid_box_item">
          <GiftFilled />
          <div>专题</div>
        </div>
        <div className="mid_box_item">
          <RocketTwoTone />
          <div>话题</div>
        </div>
        <div className="mid_box_item">
          <HeartTwoTone />
          <div>优选</div>
        </div>
        <div className="mid_box_item">
          <ShoppingTwoTone />
          <div>特惠</div>
        </div>
      </div>

      <div className="bottom">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default HomePage;
