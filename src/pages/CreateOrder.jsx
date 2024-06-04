import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

function CreateOrder() {
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
          onClick={() => window.history.back()}
          style={{ cursor: "pointer" }}
        />
        <div>创建订单</div>
        <div></div>
      </div>

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
          <Button onClick={() => { window.location.href = '/pay'; }}>提交订单</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
