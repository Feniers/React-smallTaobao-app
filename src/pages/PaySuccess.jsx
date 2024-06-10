import React, {useContext} from "react";
import { LeftOutlined, CheckCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import {useNavigate, useParams} from "react-router-dom";
import {ServiceContext} from "../contexts/ServiceContext";

const PaySuccess = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { order: orderService} = useContext(ServiceContext);
  const order = orderService.getOrderById(parseInt(id));
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
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
        <div>支付成功</div>
        <div></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CheckCircleFilled
          style={{ fontSize: "80px", color: "#F94167", marginTop: "50px" }}
        />
        <h2>支付成功</h2>
        <div style={{ marginTop: "50px" }}>
          <Button
            style={{
              width: "350px",
              height: "50px",
              fontSize: "20px",
              backgroundColor: "#F94167",
              color: "#fff",
            }}
            onClick={() => {
                navigate(`/OrderDetail/${order.id}`);
            }}
          >
            查看订单
          </Button>
        </div>
        <div style={{ marginTop: "15px" }}>
          <Button
            style={{
              width: "350px",
              height: "50px",
              fontSize: "20px",
              backgroundColor: "#fff",
              color: "#000",
            }}
            onClick={() => {
              navigate("/home");
            }}
          >
            返回首页
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PaySuccess;
