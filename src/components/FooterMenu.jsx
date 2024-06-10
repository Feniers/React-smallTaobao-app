import React, { useContext } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { ServiceContext } from "../contexts/ServiceContext";

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
  const navigate = useNavigate();
  const { user: userService } = useContext(ServiceContext);

  const handleMenuClick = (e) => {
    // if (e.key === "cart" || e.key === "profile") {
    //   if (userService.getUser() === null) {
    //     navigate("/login");
    //     return;
    //   }
    // }
    if (e.key === "cart" && userService.getUser() === null) {
      navigate("/login");
      return;
    }
    navigate(`/${e.key}`);
  };
  return (
    <Menu
      mode="horizontal"
      theme="light"
      defaultSelectedKeys={["home"]}
      items={items}
      onClick={handleMenuClick}
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
