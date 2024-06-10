import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div
      className="error-page"
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        backgroundImage:
          "url(https://s3.bmp.ovh/imgs/2024/06/10/8773ffbaa2419195.jpg)",
        backgroundSize: "cover",

        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          marginTop: "100px",
        }}
      >
        <h1>404 Not Found</h1>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          返回首页
        </Button>
      </div>
    </div>
  );
}

export default ErrorPage;
