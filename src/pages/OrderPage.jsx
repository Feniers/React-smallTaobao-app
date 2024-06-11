import React from "react";
import { useContext } from "react";
import { ServiceContext } from "../contexts/ServiceContext";
import { useParams } from "react-router-dom";
import { Button, Image, List } from "antd";
import "../css/OrderPage.css";
import { LeftOutlined } from "@ant-design/icons";
import Price from "../components/Price";

function OrderPage() {
  const { order: orderService, good: goodService } = useContext(ServiceContext);
  const param = useParams();

  const orderList = orderService.getOrderList();

  const filterOrder = () => {
    if (param === undefined || param.state === undefined) {
      return orderList;
    }
    const orderState = parseInt(param.state);
    return orderList.filter((order) => order.status === orderState);
  };

  const showOrder = filterOrder();

  return (
    <div className="order-page">
      <div className="order-header header">
        <Button ghost="true" href="/profile" icon={<LeftOutlined />} />
        <h1>订单</h1>
        <div></div>
      </div>
      <div className="order-list">
        <List
          itemLayout="vertical"
          bordered={true}
          dataSource={showOrder}
          renderItem={(item) => {
            let finalPrice = 0;
            return (
              <List.Item classNames="order-item">
                <List.Item.Meta title={`订单号：${item.id}`} />
                {item.goods.map((good) => {
                  const product = goodService.getGoodById(good.id);
                  finalPrice += product.price * good.quantity;
                  return (
                    <div className="order-good">
                      <Image
                        src={product.img}
                        className="order-good-img"
                        width={350}
                      />
                      <div className="order-good-info">
                        <div>{product.name}</div>
                        <div className="order-price">
                          单价：
                          <Price price={product.price} />
                        </div>
                        <div>数量: {good.quantity}</div>
                      </div>
                    </div>
                  );
                })}
                <div className="order-info">
                  <div>创建时间：{item.createTime}</div>
                  <div>折扣：{item.discount}</div>
                  <div className="order-price">
                    总价：
                    <Price price={finalPrice - item.discount} />{" "}
                  </div>
                </div>
              </List.Item>
            );
          }}
        />
      </div>
    </div>
  );
}

export default OrderPage;
