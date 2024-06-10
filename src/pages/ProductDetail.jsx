import React, { useContext } from "react";
import { Carousel, Button, Divider, Card } from "antd";
import {
    LeftOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    HeartTwoTone,
    RightOutlined,
    CheckOutlined,
    SafetyCertificateOutlined,
} from "@ant-design/icons";
import "../css/detail.css";
import { useNavigate, useParams } from "react-router-dom";
import { ServiceContext } from "../contexts/ServiceContext";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#F5F5F5",
  borderRadius: "10px 10px 0 0",
};

const ProductDetail = () => {
  // 用来写方法和定义变量的地方
  const { id } = useParams();
  const { good: goodService } = useContext(ServiceContext);
  const good = goodService.getGoodById(parseInt(id));

  const likeHandler = () => {
    console.log("like");
  };

  const addCart = () => {
    console.log("addCart");
  };

  const purchase = () => {
    const selectedProduct = [
      {
        id: good.id,
        quantity: 1,
        discount: good.discountPrice,
      },
    ];

    const total = good.price;
    const totalDiscount = good.discountPrice;
    const shippingCost = 20;

    const checkoutData = {
      selectedProducts: selectedProduct,
      total,
      totalDiscount,
      shippingCost,
    };

    // 将订单数据保存到 localStorage
    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
    navigate(`/CreateOrder`);
  };

  // 页面
  const navigate = useNavigate();

  const params = useParams();

  console.log(params);

  return (
    <div
      className="page"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color: "#000",
      }}
    >
      {/* 顶部栏 */}
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
          width: "100%",
          
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
          <img src={good.img} alt="img" style={contentStyle} />
        </Carousel>
      </div>

          {/* 产品名 */}
          <div style={{marginLeft: "8px"}}>
          <span style={{color: "red"}}>
              ￥
          </span>
              <span style={{color: "red", fontSize: "3em",}}
              >
              {good.price}
      </span>
          </div>

          <h2 style={{width: "90%", margin: "0 auto"}}>{good.name}</h2>
          <div style={{width: "90%", margin: "0 auto"}}>{good.description}</div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #e0e0e0',
                padding: '5px 1px',
                borderRadius: '3px',
                width: '100px',
                marginLeft: "18px"
            }}>
                <span style={{color: '#FA8072', fontSize: '12px'}}>多人评价良好</span>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #e0e0e0',
                padding: '5px 1px',
                borderRadius: '3px',
                width: '100px',
                marginLeft: "18px"
            }}>
                <SafetyCertificateOutlined style={{color: '#4caf50', marginRight: '5px'}}/>
                <span style={{color: '#4caf50', fontSize: '12px'}}>退货运费险</span>
            </div>

        </div>

        <Divider style={{borderTop: "1px solid #f0f0f0", marginTop: "10px"}}/>

      {/* 关于销售量和浏览量的卡片 */}
      <Card  style={{ width: "90%", margin: "0 auto",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)"  }} >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            销量：{good.sales}
          </div>
          <div style={{ color: "rgba(0, 0, 0, 0.5)" }}>库存：{good.store}</div>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginRight: "10px" }}>
            浏览量：22356
          </div>
        </div>
      </Card>

      {/* 产品信息参数选择 */}
      <Card  style={{ width: "90%", margin: "20px auto 0 auto",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            商店名称
          </div>
          <div>{good.merchant}</div>
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
          <div>查看</div>
          <RightOutlined
            // onClick={}}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            商品优惠
          </div>
          <div>{good.discountPrice}</div>
          <RightOutlined
            // onClick={}
            style={{ cursor: "pointer" }}
          />
        </div>
      </Card>

      {/* 底边栏 */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          margin: "0 auto",
          width: "90%",
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
          onClick={() => {
            navigate("/home");
          }}
        >
          <HomeOutlined />
          <div>首页</div>
        </div>
        <div
          className="right_box_item"
          onClick={() => {
            navigate("/Cart");
          }}
        >
          <ShoppingCartOutlined />
          <div>购物车</div>
        </div>
        <div className="right_box_item" onClick={likeHandler}>
          <HeartTwoTone />
          <div>收藏</div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={addCart}
            style={{
              background:
                "linear-gradient(90deg, rgb(255, 203, 0), rgb(255, 148, 2))",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "20px 0px 0px 20px",
            }}
          >
            加入购物车
          </Button>
          <Button
            onClick={purchase}
            style={{
              background:
                "linear-gradient(90deg, rgb(255, 119, 0), rgb(255, 73, 0))",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "0px 20px 20px 0px",
            }}
          >
            立即购买
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
