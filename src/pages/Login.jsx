import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import "../css/Login.css";
import { ServiceContext } from "../contexts/ServiceContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { user: userService } = React.useContext(ServiceContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);

    const user = userService.logging(values.name, values.password);
    if (user) {
      console.log("登录成功");
      navigate(-1);
    } else {
      console.log("登录失败");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <div className="form-box">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          style={{
            maxWidth: 500,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="name"
            rules={[
              {
                required: true,
                message: "请输入用户名！",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码！",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
