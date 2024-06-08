import React from "react";
import { Layout, Menu, Row, Col } from "antd";
import {
    HomeOutlined,
    AppstoreOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from "@ant-design/icons";

const { Content, Sider } = Layout;

const Categories = () => {
    const categories = [
        { key: '1', title: '服装' },
        { key: '2', title: '手机数码' },
        { key: '3', title: '家用电器' },
        { key: '4', title: '家具家装' },
        { key: '5', title: '汽车用品' },
        { key: '6', title: '电脑办公' },
    ];

    const subCategories = [
        { key: '1', title: '厨房卫浴', img: 'url-to-image' },
        { key: '2', title: '灯饰照明', img: 'url-to-image' },
        { key: '3', title: '五金工具', img: 'url-to-image' },
        { key: '4', title: '卧室家具', img: 'url-to-image' },
        { key: '5', title: '客厅家具', img: 'url-to-image' },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                width={200}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {categories.map(category => (
                        <Menu.Item key={category.key}>
                            {category.title}
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
                <Content
                    style={{
                        padding: '24px',
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Row gutter={[16, 16]}>
                        {subCategories.map(subCategory => (
                            <Col xs={24} sm={12} md={8} lg={6} key={subCategory.key}>
                                <div style={{ textAlign: 'center' }}>
                                    <img src={subCategory.img} alt={subCategory.title} style={{ width: '100px', height: '100px' }} />
                                    <div>{subCategory.title}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Categories;
