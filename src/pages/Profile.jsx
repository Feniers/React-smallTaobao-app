import React from "react";
import { ServiceContext } from "../contexts/ServiceContext";
import { Button } from "antd";

function Profile() {
  const { user: userService } = React.useContext(ServiceContext);
  console.log(userService);

  const Login = () => {
    const user = userService.logging("dyh", "123456");
    console.log(user);
    console.log(userService.getUser());
  };

  return (
    <div>
      <Button onClick={Login}>登录</Button>
    </div>
  );
}

export default Profile;
