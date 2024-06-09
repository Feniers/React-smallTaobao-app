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

function GoodList() {
  const { good: goodService } = React.useContext(ServiceContext);
  const goods = goodService.getGoodList();

  const [showDetail, setShowDetail] = React.useState(false);

  return (
    <div className="GoodList">
      <div className="header">
        <Button ghost="true" icon={<LeftOutlined />} href="/home"></Button>
        <h1>商品列表</h1>
        <Button
          ghost="true"
          icon={showDetail ? <AppstoreOutlined /> : <BarsOutlined />}
          onClick={() => setShowDetail(!showDetail)}
        ></Button>
      </div>
      <div className="main">
        <ProductGrid products={goods} showDetail={showDetail} />
      </div>
    </div>
  );
}

export default GoodList;
