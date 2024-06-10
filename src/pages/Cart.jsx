import React, { useContext, useEffect, useState } from "react";
import { ShopFilled } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Row } from "antd";
import "../css/Cart.css";
import { ServiceContext } from "../contexts/ServiceContext";
import { Typography } from "antd";
import MainHeader from "../components/MainHeader";
// import Icon from "antd/es/icon";
import { Stepper } from "antd-mobile";
import { useNavigate } from "react-router-dom";
// import { DemoBlock } from 'demos'

const { Text } = Typography;

function Cart() {
  const navigate = useNavigate();
  //结构函数
  const { good: goodService } = useContext(ServiceContext);
  const { user: userService } = useContext(ServiceContext);
  const { order: orderService } = useContext(ServiceContext);
  const user = userService.getUser();
  console.log("user", user);
  const cart = userService.getCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 假设你已经有了一个包含购物车商品 ID 和数量的数组
    // const cart = [
    //     { id: 1, amount: 2 },
    //     { id: 2, amount: 1 },
    //     { id: 3, amount: 1 }
    // ];

    // 获取详细商品信息并初始化状态
    const loadProducts = cart
      .map((item) => {
        const product = goodService.getGoodById(item.id);
        if (product) {
          return {
            ...product,
            quantity: item.amount, // 购物车中的数量
            checked: false, // 初始未选中状态
          };
        }
        return null;
      })
      .filter((product) => product !== null); // 过滤掉任何未找到的商品

    setProducts(loadProducts); // 设置到状态中
  }, []); // 依赖数组为空，仅在组件加载时执行

  //   // 假设这是从某处获取的商品数据
  // const [products, setProducts] = useState([
  //     { id: 1, title: '商品1', description: '商品1描述', price:100,checked: false, quantity: 1 },
  //     { id: 2, title: '商品2', description: '商品2描述', price:190,checked: false, quantity: 1 },
  //     { id: 3, title: '商品3', description: '商品3描述', price:329,checked: false, quantity: 1 }
  // ]);
  const [selectAll, setSelectAll] = useState(false);
  const [totalAccount, setTotalAccount] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  // 更新总金额和优惠金额
  useEffect(() => {
    const { totalAccount, couponsUsed } = calculateTotalAccount();
    setTotalAccount(totalAccount);
    setTotalDiscount(couponsUsed);
    console.log("这是优惠数量");
    console.log(couponsUsed);
  }, [products]); // 在products或user.coupon变化时更新
  const calculateTotalPrice = () => {
    // 首先计算选中商品的总价
    let total = products.reduce((acc, product) => {
      if (product.checked) {
        return acc + (product.price - product.discountPrice) * product.quantity;
      }
      return acc;
    }, 0);

    // 计算可使用的优惠券数量，每张优惠券满300可用
    const maxCoupons = Math.floor(total / 300);
    const coupons = user.coupon ? Math.min(user.coupon, maxCoupons) : 0;
    const couponsUsed = Math.min(coupons, maxCoupons); // 确保不使用超过持有的优惠券数量
    const discount = couponsUsed * 40; // 每张优惠券满300减40
    // setDiscountTotal(discount); // 更新优惠总额
    // 应用优惠
    total -= discount;

    return total;
  };
  const calculateTotalAccount = () => {
    // 首先计算选中商品的总价
    let total = products.reduce((acc, product) => {
      if (product.checked) {
        return acc + (product.price - product.discountPrice) * product.quantity;
      }
      return acc;
    }, 0);
    let discountPrice = products.reduce((acc, product) => {
      if (product.checked) {
        return acc + product.discountPrice * product.quantity;
      }
      return acc;
    }, 0);

    // 计算可使用的优惠券数量，每张优惠券满300可用
    const maxCoupons = Math.floor(total / 300);
    const coupons = user.coupon ? Math.min(user.coupon, maxCoupons) : 0;
    const couponsUsed = Math.min(coupons, maxCoupons); // 确保不使用超过持有的优惠券数量
    const discount = couponsUsed * 40; // 每张优惠券满300减40
    // 应用优惠
    let totalDiscount = discount + discountPrice;

    console.log("这是优惠数量");
    console.log(couponsUsed);
    return {
      totalDiscount, // 总优惠金额
      couponsUsed, // 使用的优惠券数量
    };
  };

  // 勾选或取消勾选商品
  const toggleCheck = (id) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setProducts(newProducts);
    checkSelectAll(newProducts);
  };

  // 更新商品数量
  const updateQuantity = (id, value) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, quantity: value } : product
    );
    setProducts(newProducts);
  };

  // 全选或取消全选
  const handleSelectAll = (checked) => {
    const newProducts = products.map((product) => ({ ...product, checked }));
    setProducts(newProducts);
    setSelectAll(checked);
  };

  // 检查是否应该更新全选状态
  const checkSelectAll = (products) => {
    const allChecked = products.every((product) => product.checked);
    setSelectAll(allChecked);
  };
  // 计算选中商品的总数
  const selectedCount = products.filter((product) => product.checked).length;

  const handleCheckout = () => {
    const selectedProducts = products
      .filter((product) => product.checked)
      .map((product) => ({
        id: product.id,
        quantity: product.quantity,
        discount:product.discountPrice//注意这是一个商品的价格
      }));


    const total = calculateTotalPrice(); // 计算总价格
    const { totalAccount, couponsUsed } = calculateTotalAccount();//总优惠金额和满减券使用数量

    const checkoutData = {
      selectedProducts,
      total,
      shippingCost:20,
      totalAccount,
      couponsUsed
    };

    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
    let orderID = orderService.createOrder(checkoutData);
    // navigate(`/orderdetail/${orderID}`);
    console.log("结算", checkoutData);
  };

  return (
    <div className="flex">
      <MainHeader />
      {/*<div className="Header">*/}
      {/*  <ScanOutlined />*/}
      {/*  <div className="SearchBox">*/}
      {/*    <input type="text" placeholder=" 请输入商品 如：手机" />*/}
      {/*  </div>*/}
      {/*  <MessageOutlined />*/}
      {/*</div>*/}
      <div className="cartContent">
        {products.map((product) => (
          <Card
            key={product.id}
            title={
              <>
                <ShopFilled style={{ marginRight: 8, color: "#CB573C" }} />

                {product.merchant}
              </>
            }
            extra={
              <a href={`/product/${product.id}`} style={{ color: "#CB573C" }}>
                查看详情
              </a>
            }
            className="cartItem"
          >
            <Row style={{ height: "100%", width: "100%" }}>
              <Col span={2}>
                <Checkbox
                  checked={product.checked}
                  onChange={() => toggleCheck(product.id)}
                ></Checkbox>
              </Col>
              <Col span={9}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="img-resize"
                />
              </Col>
              <Col span={13}>
                <div className="flex">
                  <Text strong style={{ fontSize: "20px" }}>
                    {product.name}
                  </Text>
                  <Text>{product.description}</Text>
                  <div>

                    {/*<p>{product.name}</p>*/}
                    <Text mark style={{ display: "inline-block" }}>
                      七天无理由退货
                    </Text>
                    <Text
                      keyboard
                      style={{ display: "inline-block", color: "#CB573C" }}
                    >
                      {" "}
                      官方立减{product.discountPrice}元
                    </Text>
                  </div>
                  <div>
                    <span style={{ color: "red" }}>￥</span>
                    <span
                      style={{
                        color: "red",
                        fontSize: "1em",
                        fontWeight: "bold",
                        textDecoration: product.checked
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {" "}
                      {product.price.toString().split(".")[0]}
                    </span>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {product.price.toString().split(".").length > 1
                        ? "." + product.price.toString().split(".")[1]
                        : " "}
                    </span>
                    <br />
                    {product.checked && (
                      <Text
                        style={{
                          marginLeft: 12,
                          color: "red",
                          fontSize: "1.3em",
                          fontWeight: "bold",
                        }}
                      >
                        ￥{(product.price - product.discountPrice).toFixed(2)}
                      </Text>
                    )}
                  </div>
                </div>

                <div style={{ position: "absolute", right: 0, bottom: 0 }}>
                  {/*<InputNumber*/}
                  {/*  min={1}*/}
                  {/*  style={{ opacity: 0 }}*/}
                  {/*  value={product.quantity}*/}
                  {/*  onChange={(value) => updateQuantity(product.id, value)}*/}
                  {/*/>*/}
                  <Stepper
                    value={product.quantity}
                    min={1}
                    onChange={(value) => updateQuantity(product.id, value)}
                    style={{ bottom: 0 }}
                  />

                </div>
              </Col>
            </Row>
          </Card>
        ))}
      </div>

      <div className="footer">
        <div>
          <Row>
            <Col span={2}>
              <Checkbox
                checked={selectAll}
                onChange={(e) => handleSelectAll(e.target.checked)}
              >
                全选
              </Checkbox>
            </Col>
            <Col span={16}>
              <div className="vertical-center">

                {/*<div>已优惠：¥{calculateTotalAccount()} 元</div>*/}
                {/*<div>已优惠：¥{discountTotal} 元</div> /!* 显示已优惠金额 *!/*/}
                <div className="flex">
                  <span style={{ color: "red" }}>已优惠 ¥{totalAccount}</span>
                  {/*<span*/}
                  {/*  style={{*/}
                  {/*    color: "red",*/}
                  {/*    fontSize: "1em",*/}
                  {/*    fontWeight: "bold",*/}
                  {/*  }}*/}
                  {/*>*/}
                  {/*  {" "}*/}
                  {/*  ¥{totalAccount}*/}
                  {/*</span>*/}
                  <div>满减券：{totalDiscount} 张</div>
                </div>
                <div>
                  <span style={{ color: "red" }}>券后合计：</span>
                  <span
                    style={{
                      color: "red",
                      fontSize: "2em",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    ¥{calculateTotalPrice()}
                  </span>{" "}
                </div>
              </div>
            </Col>
            <Col span={6}>
              <Button
                className="vertical-center2"
                type="primary"
                disabled={selectedCount === 0}
                onClick={handleCheckout}
              >
                结算 ({selectedCount} 项)
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      {/*<div className="cartContent">*/}
      {/*/!*<Card title="Default size card" extra={<a href="#">More</a>} style={{ width: '100%' }}>*!/*/}
      {/*/!*  <p>Card content</p>*!/*/}
      {/*/!*  <p>Card content</p>*!/*/}
      {/*/!*  <p>Card content</p>*!/*/}
      {/*/!*</Card>*!/*/}
      {/*/!*<Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: '100%' }}>*!/*/}
      {/*/!*  <p>Card content</p>*!/*/}
      {/*/!*  <p>Card content</p>*!/*/}
      {/*/!*  <p>Card content</p>*!/*/}
      {/*/!*</Card>*!/*/}
      {/*</div>*/}
    </div>
  );
}

export default Cart;
