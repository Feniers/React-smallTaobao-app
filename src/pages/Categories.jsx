import React, { useState } from "react";
import { Layout, Menu, Row, Col, Button } from "antd";
import "../css/Category.css";
import Icon from "antd/es/icon";
import MainHeader from "../components/MainHeader";
const { Content, Sider } = Layout;

const Categories = () => {
  const categories = [
    { key: "1", title: "服装" },
    { key: "2", title: "手机数码" },
    { key: "3", title: "家用电器" },
    { key: "4", title: "家具家装" },
    { key: "5", title: "汽车用品" },
    { key: "6", title: "电脑办公" },
  ];
  const subCategories = {
    1: [
      { key: "1", title: "男装", img: "url-to-image" },
      { key: "2", title: "女装", img: "url-to-image" },
      { key: "3", title: "童装", img: "url-to-image" },
    ],
    2: [
      { key: "1", title: "手机", img: "url-to-image" },
      { key: "2", title: "平板", img: "url-to-image" },
    ],
    3: [
      { key: "1", title: "冰箱", img: "url-to-image" },
      { key: "2", title: "洗衣机", img: "url-to-image" },
    ],
    4: [
      { key: "1", title: "厨房卫浴", img: "url-to-image" },
      { key: "2", title: "灯饰照明", img: "url-to-image" },
      { key: "3", title: "五金工具", img: "url-to-image" },
      { key: "4", title: "卧室家具", img: "url-to-image" },
      { key: "5", title: "客厅家具", img: "url-to-image" },
    ],
    5: [
      { key: "1", title: "车载电器", img: "url-to-image" },
      { key: "2", title: "维修工具", img: "url-to-image" },
    ],
    6: [
      { key: "1", title: "台式机", img: "url-to-image" },
      { key: "2", title: "笔记本", img: "url-to-image" },
      { key: "3", title: "外设产品", img: "url-to-image" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0].key);

  const handleCategoryClick = (key) => {
    setSelectedCategory(key);
  };

  const handleAllProductsClick = () => {
    // 记录当前类别并跳转到新的页面（假设路径为 /all-products）
    console.log(`当前类别: ${selectedCategory}`);
    // history.push("/all-products");
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <MainHeader />
      <Layout style={{ flex: 1 }}>
        <Sider
          width={200}
          style={{
            overflow: "auto",
            height: "100%",
            position: "fixed",
            left: 0,
            top: 50, // Adjust top position to accommodate header
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[selectedCategory]}
            style={{ height: "100%", borderRight: 0 }}
            onClick={({ key }) => handleCategoryClick(key)}
          >
            {categories.map((category) => (
              <Menu.Item key={category.key}>{category.title}</Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout
          style={{
            height: "100%",
            marginLeft: 200,
            marginTop: 50,
            padding: "24px",
            background: "rgba(255,255,255,0.26)",
          }}
        >
          {" "}
          {/* Adjusted marginTop to accommodate header */}
          <Content style={{ height: "100%", overflow: "auto" }}>
            <div className="allGoods">
              <Button type="Link" onClick={handleAllProductsClick}>
                所有商品 <span style={{ marginLeft: "5px" }}>></span>
                <Icon type="right" style={{ color: "black" }} />
              </Button>
            </div>
            <Row gutter={[16, 16]}>
              {(subCategories[selectedCategory] || []).map((subCategory) => (
                <Col xs={8} sm={8} md={6} lg={6} key={subCategory.key}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src="https://picsum.photos/400/200?random=1"
                      alt={subCategory.title}
                      style={{ width: "90px", height: "90px" }}
                    />
                    <div>{subCategory.title}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Categories;
