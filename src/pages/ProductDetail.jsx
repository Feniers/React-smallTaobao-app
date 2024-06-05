import React from "react";
import { Carousel, Button, Divider, Card } from "antd";
import {
  LeftOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  HeartTwoTone,
  RightOutlined,
} from "@ant-design/icons";
import "../css/detail.css";
import { useNavigate, useParams } from "react-router-dom";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#ffffff",
  borderRadius: "10px 10px 0 0",
};

const ProductDetail = () => {
  // 用来写方法和定义变量的地方

  const likeHandler = () => {
    console.log("like");
  };

  const addCart = () => {
    console.log("addCart");
  };

  const purchase = () => {
    navigate("/OrderDetail");
    console.log("purchase");
  };

  // 页面
  const navigate = useNavigate();

  const params = useParams();

  console.log(params);

  return (
    // 顶部栏
    <div
      className="page"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color: "#000",
      }}
    >
      <div
        className="head"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          top: 0,
          position: "fixed",
          borderBottom: "1px solid #ccc",
          color: "#000",
        }}
      >
        <LeftOutlined
          onClick={() => window.history.back()}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* 轮播图 走马灯 */}
      <div>
        <Carousel
          autoplay
          arrows={true}
          dots={true}
          style={{
            width: "100%",
            overflow: "hidden",
            marginTop: "30px",
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

      {/* 产品名 */}
      <h2>产品名</h2>
      <Divider style={{ borderTop: "1px solid #f0f0f0", marginTop: "10px" }} />

      {/* 关于销售量和浏览量的卡片 */}
      <Card style={{ width: "90%", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            销量：
          </div>
          <div style={{ color: "rgba(0, 0, 0, 0.5)" }}>已售：</div>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginRight: "10px" }}>
            浏览量：
          </div>
        </div>
      </Card>

      {/* 产品信息参数选择 */}
      <Card style={{ width: "90%", margin: "0 auto" }}>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            购买类型
          </div>
          <div>填入</div>
          <RightOutlined
            // onClick={}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            商品参数
          </div>
          <div>填入</div>
          <RightOutlined
            // onClick={}}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            优惠卷
          </div>
          <div>填入</div>
          <RightOutlined
            // onClick={}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
      </Card>

      {/* 底边栏 */}
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
          zIndex: 1000,
        }}
      >
        <div
          className="right_box_item"
          onClick={navigate("/home")}
        >
          <HomeOutlined />
          <div>首页</div>
        </div>
        <div
          className="right_box_item"
          onClick={navigate("/Cart")}
        >
          <ShoppingCartOutlined />
          <div>购物车</div>
        </div>
        <div className="right_box_item" onClick={likeHandler}>
          <HeartTwoTone />
          <div>收藏</div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={addCart}>加入购物车</Button>
          <Button onClick={purchase}>购买</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
