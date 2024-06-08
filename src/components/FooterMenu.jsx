import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const items = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: <Link to="/home">首页</Link>,
  },
  {
    key: "categories",
    icon: <AppstoreOutlined />,
    label: <Link to="/categories">分类</Link>,
  },
  {
    key: "cart",
    icon: <ShoppingCartOutlined />,
    label: <Link to="/cart">购物车</Link>,
  },
  {
    key: "profile",
    icon: <UserOutlined />,
    label: <Link to="/profile">我的</Link>,
  },
];

const FooterMenu = () => {
  return (
    <Menu
      mode="horizontal"
      theme="light"
      defaultSelectedKeys={["home"]}
      items={items}
      style={{
        height: "50px",
        width: "430px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    ></Menu>
  );
};

export default FooterMenu;
