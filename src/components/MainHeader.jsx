import { MessageOutlined, ScanOutlined } from "@ant-design/icons";
import React from "react";

function MainHeader() {
  return (
    <div className="main-header header">
      <ScanOutlined />
      <div className="search-box">
        <input type="text" placeholder=" 请输入商品 如：手机" />
      </div>
      <MessageOutlined />
    </div>
  );
}

export default MainHeader;
