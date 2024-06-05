import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Card, Divider } from "antd";

const CreateOrder = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          position: "fixed",
          top: 0,
          borderBottom: "1px solid #ccc",
        }}
      >
        <div style={{ width: "170px" }}>
          <LeftOutlined
            onClick={() => window.history.back()}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>创建订单</div>
        <div style={{ width: "100px" }}></div>
      </div>

      <Card style={{ marginTop: "35px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>收货地址</div>
          <RightOutlined />
        </div>
      </Card>
      <Card>
        <div>商品信息</div>
      </Card>
      <Card>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            商品合计
          </div>
          <div>填入</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            运费
          </div>
          <div>填入</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            活动优惠
          </div>
          <div>填入</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            优惠卷
          </div>
          <div>填入</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            备注
          </div>
          <div>填入</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
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
        <div>合计：¥ 0.00</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => {
              window.location.href = "/pay";
            }}
          >
            提交订单
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
