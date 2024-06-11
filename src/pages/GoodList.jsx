import React from "react";
import { ServiceContext } from "../contexts/ServiceContext";
import ProductGrid from "../components/ProductGrid";
import "../css/GoodList.css";
import { Button } from "antd";
import {
  AppstoreOutlined,
  BarsOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";

function GoodList() {
  const { good: goodService } = React.useContext(ServiceContext);

  const param = useParams();
  const navigate = useNavigate();

  const [showDetail, setShowDetail] = React.useState(false);

  const goods = goodService.getGoodList();

  const filterGoods = () => {
    if (param === undefined || param.category === undefined) {
      return goods;
    }
    // 将string转为number
    const category = parseInt(param.category);
    return goods.filter((good) => good.categoryId === category);
  };

  const showGoods = filterGoods();

  return (
    <div className="goods-page">
      <div className="goods-header header">
        <Button
          ghost="true"
          icon={<LeftOutlined />}
          onClick={() => navigate(-1)}
        ></Button>
        <h1>商品列表</h1>
        <Button
          ghost="true"
          icon={showDetail ? <AppstoreOutlined /> : <BarsOutlined />}
          onClick={() => setShowDetail(!showDetail)}
        ></Button>
      </div>
      <div className="main">
        <ProductGrid products={showGoods} showDetail={showDetail} />
      </div>
    </div>
  );
}

export default GoodList;
