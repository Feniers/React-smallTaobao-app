import React, { useState } from "react";
import { Layout, Menu, Row, Col, Button } from "antd";
import "../css/Category.css";
import MainHeader from "../components/MainHeader";
import { useNavigate } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
const { Content, Sider } = Layout;

const Categories = () => {
  const categories = [
    { key: "1", label: "服装鞋饰" },
    { key: "2", label: "手机数码" },
    { key: "3", label: "家用电器" },
    { key: "4", label: "家具家装" },
    { key: "5", label: "汽车用品" },
    { key: "6", label: "电脑办公" },
    { key: "7", label: "食品饮料" },
  ];
  const subCategories = {
    1: [
      { key: "1", title: "男装", img:" https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01SvVaFk1CEwXwKXZ0t_%21%212213217840050-0-cib.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1720617108&t=1aabf2accb30131757e77fe0dfdc933c" },
      { key: "2", title: "女装", img: "https://img2.baidu.com/it/u=4252158015,2053133888&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=576" },
      { key: "3", title: "童装", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01JhxNE91KogHMpbdvT_%21%216000000001211-0-cib.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1720617288&t=ac239524501f88c7e5a0f12911ea2540" },
    ],
    2: [
      { key: "1", title: "手机", img: "https://doc-fd.zol-img.com.cn/t_s640x2000/g7/M00/0C/03/ChMkLGQzgomILubGAACP3ILhOGwAAOv5wFmcokAAI_0092.jpg" },
      { key: "2", title: "平板", img: "https://img2017.manmanbuy.com/Thumb_2021070011310791173.png" },
    ],
    3: [
      { key: "1", title: "冰箱", img: "https://t11.baidu.com/it/u=3727556811,225531689&fm=30&app=106&f=JPEG?w=640&h=640&s=7AA8346273AE7B1B0D54F1CF0100A0A1" },
      { key: "2", title: "洗衣机", img: "https://img.pchouse.com.cn/images/upload/upc/tx/houselib/1609/18/c6/27161593_1474208272789.jpg" },
    ],
    4: [
      { key: "1", title: "厨房卫浴", img: "https://img2.baidu.com/it/u=2502132105,625339887&fm=253&fmt=auto&app=138&f=JPG?w=352&h=352" },
      { key: "2", title: "灯饰照明", img: "https://img0.baidu.com/it/u=4283262315,1139935282&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" },
      { key: "3", title: "五金工具", img: "https://img1.baidu.com/it/u=502598742,3702025093&fm=253&fmt=auto&app=120&f=JPEG?w=342&h=342" },
      { key: "4", title: "卧室家具", img: "https://imgservice.suning.cn/uimg1/b2c/image/AyWaMb73d6qbwkxJpCBkQQ.jpg_800w_800h_4e" },
      { key: "5", title: "客厅家具", img: "https://img2.baidu.com/it/u=91160641,606246963&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=342" },
    ],
    5: [
      { key: "1", title: "车载电器", img: "https://img2.baidu.com/it/u=272117073,3280944639&fm=253&fmt=auto&app=120&f=JPEG?w=607&h=428" },
      { key: "2", title: "维修工具", img: "http://t15.baidu.com/it/u=3897027153,2895903538&fm=224&app=112&f=JPEG?w=500&h=500" },
    ],
    6: [
      { key: "1", title: "台式机", img: "https://img0.baidu.com/it/u=2328298378,3735529703&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" },
      { key: "2", title: "笔记本", img: "https://imgservice.suning.cn/uimg1/b2c/image/8cpxy81VXOrxzJ_yUzcekg.jpg_800w_800h_4e" },
      { key: "3", title: "外设产品", img: "https://img0.baidu.com/it/u=3907288793,2512637213&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=462" },
    ],
    7: [
      { key: "1", title: "饮料零食", img: "https://gd-hbimg.huaban.com/e5522a9c1a2cc9ee4c3742596fb315219e402fa145f7-ZRLsmz_fw658" },
      { key: "2", title: "速冻食品", img: "https://img2.baidu.com/it/u=1695009767,15278368&fm=253&fmt=auto&app=138&f=JPEG?w=760&h=760" },
      { key: "3", title: "调味品", img: "https://img1.baidu.com/it/u=283455627,3350238978&fm=253&fmt=auto&app=138&f=PNG?w=500&h=666" },
    ],
  };

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].key);

  const handleCategoryClick = (key) => {
    setSelectedCategory(key);
  };

  const handleAllProductsClick = () => {
    // 记录当前类别并跳转到新的页面（假设路径为 /all-products）
    console.log(`当前类别: ${selectedCategory}`);
    // history.push("/all-products");`/orderdetail/${orderID}`
    navigate(`/goods/${selectedCategory}`);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <MainHeader />
      <Layout style={{ flex: 1 }}>
        <Sider
          width={120}
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
            items={categories}
          >
            {/* {categories.map((category) => (
              <Menu.Item key={category.key}>{category.title}</Menu.Item>
            ))} */}
          </Menu>
        </Sider>
        <Layout
          style={{
            height: "100%",
            marginLeft: 120,
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
                所有商品
                <RightOutlined />
              </Button>
            </div>
            <Row gutter={[16, 16]}>
              {(subCategories[selectedCategory] || []).map((subCategory) => (
                <Col xs={8} sm={8} md={6} lg={6} key={subCategory.key}>
                  <div className="subCategoryContainer">
                    <img
                      src={subCategory.img}
                      alt={subCategory.title}
                      style={{ width: "90px", height: "90px" ,transition: "transform 0.3s, box-shadow 0.3s",}}

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
