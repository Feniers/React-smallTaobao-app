import React, { useState } from "react";
import { ServiceContext } from "../contexts/ServiceContext";
import { Button, Dropdown, Image, Row } from "antd";
import "../css/Profile.css";
import {
  AccountBookOutlined,
  CommentOutlined,
  EnvironmentOutlined,
  EyeOutlined,
  HeartOutlined,
  HistoryOutlined,
  LikeOutlined,
  MoneyCollectOutlined,
  SettingOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const items = [
  {
    key: 1,
    label: "地址管理",
    path: "/empty",
    icon: <EnvironmentOutlined />,
  },
  {
    key: 2,
    label: "我的足迹",
    path: "/empty",
    icon: <EyeOutlined />,
  },
  {
    key: 3,
    label: "我的关注",
    path: "/empty",
    icon: <LikeOutlined />,
  },
  {
    key: 4,
    label: "我的收藏",
    path: "/empty",
    icon: <HeartOutlined />,
  },
  {
    key: 5,
    label: "我的优惠券",
    path: "/empty",
    icon: <AccountBookOutlined />,
  },
  {
    key: 6,
    label: "我的评价",
    path: "/404",
    icon: <CommentOutlined />,
  },
];

const orderItems = [
  {
    key: 1,
    label: "全部订单",
    path: "/order",
    icon: <AccountBookOutlined />,
  },
  {
    key: 2,
    label: "待付款",
    path: "/order/0",
    icon: <MoneyCollectOutlined />,
  },
  {
    key: 3,
    label: "待收货",
    path: "/order/2",
    icon: <ShoppingOutlined />,
  },
  {
    key: 4,
    label: "退款/售后",
    path: "/order/4",
    icon: <HistoryOutlined />,
  },
];

function Profile() {
  const { user: userService } = React.useContext(ServiceContext);
  const navigate = useNavigate();

  const [user, setUser] = useState(userService.getUser());

  const handleItemClick = (item) => {
    console.log(item);
    if (!user) {
      alert("请先登录");
      navigate("/login");
    } else {
      navigate(item.path);
    }
  };

  const loginOrLogout = () => {
    if (user) {
      userService.logout();
      setUser(null);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="profile-page">
      {/* <Button onClick={Login}>登录</Button> */}
      {/* <Button onClick={userService.logout()}>登出</Button> */}
      <div className="person-info">
        <Image
          className="avatar"
          width={150}
          alt="avatar"
          src={
            user
              ? user.avatar
              : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }
        />
        <div className="info">
          <p>{user ? user.name : "请先登录"}</p>
        </div>
        <div className="setting">
          <Dropdown
            menu={{
              items: [
                { key: 1, label: "个人信息", path: "/404" },
                { key: 2, label: "账号安全", path: "/404" },
                { key: 3, label: "消息通知", path: "/404" },
                { key: 4, label: "隐私设置", path: "/404" },
                {
                  key: 5,
                  label: (
                    <div onClick={loginOrLogout}>
                      {user ? "退出登录" : "登录"}
                    </div>
                  ),
                  path: "/404",
                  danger: user ? true : false,
                },
              ],
            }}
          >
            <Button>
              <SettingOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="profile-order">
        {orderItems.map((item) => (
          <div
            key={item.key}
            className="profile-order-item"
            onClick={() => handleItemClick(item)}
          >
            {item.icon}
            <div>{item.label}</div>
          </div>
        ))}
      </div>
      <div className="profile-items">
        {items.map((item) => (
          <Row
            key={item.key}
            className="profile-item"
            onClick={() => handleItemClick(item)}
          >
            <p>
              {item.icon} {item.label}
            </p>
          </Row>
        ))}
      </div>
    </div>
  );
}

export default Profile;
