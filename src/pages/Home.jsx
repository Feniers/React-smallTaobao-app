import {
  GiftFilled,
  HeartTwoTone,
  RocketTwoTone,
  ShoppingTwoTone,
} from "@ant-design/icons";
import React, { useContext } from "react";
import "../css/Home.css";
import ProductGrid from "../components/ProductGrid";
import { Carousel } from "antd";
import { ServiceContext } from "../contexts/ServiceContext";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const contentStyle = {
  height: "200px",
  width: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  borderRadius: "10px 10px 0 0",
};

const HomePage = () => {
  // console.log("HomePage");

  const { good: goodService } = useContext(ServiceContext);
  const navigate = useNavigate();

  const goods = goodService.getGoodList();

  //从goods中筛选出销量大于100的商品
  const hotGoods = goods.filter((good) => good.sales > 100);

  const handelClick = () => {
    navigate("/goods");
  };

  return (
    <div className="home-page">
      <div className="top">
        <MainHeader />
        <div className="carousel_box">
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
            {hotGoods.map((good) => (
              <div key={good.id}>
                <img
                  src={good.img}
                  alt={good.name}
                  style={contentStyle}
                  onError={(e) => {
                    e.target.src = "https://picsum.photos/400/200?random=1";
                  }}
                  // onClick={() => navigate(`/product/:id${good.id}`)}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="mid">
        <div className="mid_box_item" onClick={handelClick}>
          <GiftFilled />
          <div>专题</div>
        </div>
        <div className="mid_box_item" onClick={handelClick}>
          <RocketTwoTone />
          <div>话题</div>
        </div>
        <div className="mid_box_item" onClick={handelClick}>
          <HeartTwoTone />
          <div>优选</div>
        </div>
        <div className="mid_box_item" onClick={handelClick}>
          <ShoppingTwoTone />
          <div>特惠</div>
        </div>
      </div>

      <div className="bottom">
        <ProductGrid products={goods} />
      </div>
    </div>
  );
};

export default HomePage;
