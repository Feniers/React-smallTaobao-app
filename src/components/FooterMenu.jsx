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
    icon: <HomeOutlined style={{ color: "white" }}/>,
    label: <Link to="/home" style={{ color: "white" }}>首页</Link>,
  },
  {
    key: "categories",
    icon: <AppstoreOutlined style={{ color: "white" }}/>,
    label: <Link to="/categories" style={{ color: "white" }}>分类</Link>,
  },
  {
    key: "cart",
    icon: <ShoppingCartOutlined style={{ color: "white" }}/>,
    label: <Link to="/cart" style={{ color: "white" }}>购物车</Link>,
  },
  {
    key: "profile",
    icon: <UserOutlined style={{ color: "white" }}/>,
    label: <Link to="/profile" style={{ color: "white" }}>我的</Link>,
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
        backgroundColor:"#CB573C"
      }}
    ></Menu>
  );
};

export default FooterMenu;
