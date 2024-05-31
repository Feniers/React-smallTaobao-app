import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <Menu
      mode="horizontal"
      theme="light"
      defaultSelectedKeys={["home"]}
      style={{
        height: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/home">首页</Link>
      </Menu.Item>
      <Menu.Item key="categories" icon={<AppstoreOutlined />}>
        <Link to="/categories">分类</Link>
      </Menu.Item>
      <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">购物车</Link>
      </Menu.Item>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/profile">我的</Link>
      </Menu.Item>
    </Menu>
  );
};

export default FooterMenu;
