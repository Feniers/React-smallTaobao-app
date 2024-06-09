import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import FooterMenu from "./FooterMenu";
import "../css/MainLayout.css";

const { Content, Footer } = Layout;

function MainLayout() {
  return (
    <div className="main-page">
      <Layout className="mainLayout">
        <Content>
          <Outlet />
        </Content>
        <Footer className="main-footer">
          <FooterMenu />
        </Footer>
      </Layout>
    </div>
  );
}

export default MainLayout;
