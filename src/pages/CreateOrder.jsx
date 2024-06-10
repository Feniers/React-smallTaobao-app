import React, { useContext, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Select, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { ServiceContext } from "../contexts/ServiceContext";

const { Option } = Select;

const CreateOrder = () => {
  const navigate = useNavigate();
  const {
    good: goodService,
    user: userService,
    order: orderService,
  } = useContext(ServiceContext);

  const user = userService.getUser();
  const checkoutDataString = localStorage.getItem("checkoutData");
  const checkoutData = JSON.parse(checkoutDataString);

  const goodList = checkoutData.selectedProducts.map((good) =>
    goodService.getGoodById(good.id)
  );

  const [addr, setAddr] = useState(user.addr[0]);

  const totalPrice = (
    checkoutData.total -
    checkoutData.totalDiscount -
    checkoutData.shippingCost
  ).toFixed(2);

  const newOrder = {
    userId: user.id,
    price: totalPrice,
    goods: checkoutData.selectedProducts, //以后加多个
    shippingCost: checkoutData.shippingCost,
    payTime: "2018-01-01 00:00:00",
    discount: checkoutData.totalDiscount,
  };

  const [selectedAddress, setSelectedAddress] = useState(user.addr[0].address);
  const handleChange = (value) => {
    setSelectedAddress(value);
    const selectedAddr = user.addr.find((item) => item.address === value);
    setAddr(selectedAddr);
  };

  const handleSubmitOrder = () => {
    const id = orderService.createOrder(newOrder);
    orderService.setOrderAddress(id, addr);
    navigate(`/pay/${id}`);
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      {/* 顶栏 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          position: "fixed",
          top: 0,
          borderBottom: "1px solid #ccc",
          zIndex: 100,
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <div >
          <LeftOutlined
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>创建订单</div>
        <div></div>
      </div>

      <Card
        style={{
          width: "95%",
          margin: "50px auto 0 auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Row gutter={16}>
          <Col span={24}>
            <div>收货地址</div>
          </Col>
          <Col span={24}>
            <Select
              style={{ width: "100%", marginTop: "10px" }}
              placeholder="选择地址"
              onChange={handleChange}
            >
              {user.addr.map((item, index) => (
                <Option key={index} value={item.address}>
                  {item.name} - {item.address}
                </Option>
              ))}
            </Select>
          </Col>
          {selectedAddress && (
            <Col span={24} style={{ marginTop: "10px" }}>
              地址: {selectedAddress}
            </Col>
          )}
        </Row>
      </Card>
      <Card
        style={{
          width: "95%",
          margin: "10px auto 0 auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div>商品信息</div>
        {goodList.map((good, index) => (
          <div key={index}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={good.img}
                  alt=""
                  style={{ width: "30px", height: "30px", marginRight: "15px" }}
                />
                <span style={{ fontSize: "20px" }}>{good.name}</span>
              </div>
              <div>{good.price}</div>
            </div>
            {index !== goodList.length - 1 && (
              <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
            )}
          </div>
        ))}
      </Card>
      <Card
        style={{
          width: "95%",
          margin: "10px auto 0 auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            商品合计
          </div>
          <div>{checkoutData.total}</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            运费
          </div>
          <div>{checkoutData.shippingCost}</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            总优惠
          </div>
          <div>{checkoutData.totalDiscount}</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            优惠卷
          </div>
          <div>{checkoutData.couponsUsed === 1 ? "已使用" : "无"}</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            备注
          </div>
          <div>这是一个备注</div>
        </div>
      </Card>

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
        <div>
          合计：￥
          {totalPrice}
        </div>
        {/* 需要依次读取每个商品的价格来写 */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={handleSubmitOrder}>提交订单</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
