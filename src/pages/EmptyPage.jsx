import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

function EmptyPage() {
  return (
    <div className="empty-page" style={{ height: "100%" }}>
      <div className="order-header header">
        <Button ghost="true" href="/profile" icon={<LeftOutlined />} />
        <div></div>
        <div></div>
      </div>
      <div
        className="empty-content"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          src="https://s3.bmp.ovh/imgs/2024/06/11/987edacaf1b1191c.png"
          alt="empty"
        />
      </div>
    </div>
  );
}

export default EmptyPage;
