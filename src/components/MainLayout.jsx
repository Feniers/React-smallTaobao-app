import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import FooterMenu from "./FooterMenu";

const { Content, Footer } = Layout;

function MainLayout() {
  return (
    <div className="MainPage">
      <Layout
        style={{
          height: "100%",
          padding: "0",
          margin: "0",
        }}
      >
        <Content
          style={{
            margin: "0",
            padding: "0",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            padding: "0",
            margin: "0",
            position: "fixed",
            bottom: "0",
            width: "100%",
            height: "50px",
          }}
        >
          <FooterMenu />
        </Footer>
      </Layout>
    </div>
  );
}

export default MainLayout;
