import React from "react";
import { ServiceContext } from "../contexts/ServiceContext";
import { Button } from "antd";

function Profile() {
  const { user: userService } = React.useContext(ServiceContext);

  const Login = () => {
    const user = userService.logging("dyh", "123456");
    console.log(user);
  };

  return (
    <div>
      <Button onClick={Login}>登录</Button>
      {/* <Button onClick={userService.logout()}>登出</Button> */}
    </div>
  );
}

export default Profile;
