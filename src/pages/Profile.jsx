import React from "react";
import { ServiceContext } from "../contexts/ServiceContext";
import { Button, Image, Row } from "antd";
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

const items = [
  {
    key: 1,
    label: "地址管理",
    path: "",
    icon: <EnvironmentOutlined />,
  },
  {
    key: 2,
    label: "我的足迹",
    path: "",
    icon: <EyeOutlined />,
  },
  {
    key: 3,
    label: "我的关注",
    path: "",
    icon: <LikeOutlined />,
  },
  {
    key: 4,
    label: "我的收藏",
    path: "",
    icon: <HeartOutlined />,
  },
  {
    key: 5,
    label: "我的优惠券",
    path: "",
    icon: <AccountBookOutlined />,
  },
  {
    key: 6,
    label: "我的评价",
    path: "",
    icon: <CommentOutlined />,
  },
];

function Profile() {
  const { user: userService } = React.useContext(ServiceContext);

  const user = userService.getUser();
  const Login = () => {
    const user = userService.logging("dyh", "123456");
    console.log(user);
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
            user.avatar ||
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }
        />
        <div className="info">
          <p>{user.name}</p>
        </div>
        <div className="setting">
          <Button>
            <SettingOutlined />
          </Button>
        </div>
      </div>
      <div className="profile-order">
        <div className="profile-order-item">
          <AccountBookOutlined />
          <div>全部订单</div>
        </div>
        <div className="profile-order-item">
          <MoneyCollectOutlined />
          <div>待付款</div>
        </div>
        <div className="profile-order-item">
          <ShoppingOutlined />
          <div>待收货</div>
        </div>
        <div className="profile-order-item">
          <HistoryOutlined />
          <div>退款/售后</div>
        </div>
      </div>
      <div className="profile-items">
        {items.map((item) => (
          <Row key={item.key} className="profile-item">
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
