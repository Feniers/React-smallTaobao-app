import React, { useContext, useEffect, useState } from "react";
import { MessageOutlined, ScanOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, InputNumber, Row } from "antd";
import "../css/Cart.css";
import { ServiceContext } from "../contexts/ServiceContext";
import { Typography } from "antd";

const { Text, Title } = Typography;

function Cart() {
  //结构函数
  const { good: goodService } = useContext(ServiceContext);
  const { user: userService } = useContext(ServiceContext);
  const user = userService.getUser();
  console.log(user);
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
  }, [products, user.coupon]); // 在products或user.coupon变化时更新
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
    let totalAccount = discount + discountPrice;

    console.log("这是优惠数量");
    console.log(couponsUsed);
    return {
      totalAccount, // 总优惠金额
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
      }));

    const total = calculateTotalPrice(); // 计算总价格

    const checkoutData = {
      selectedProducts,
      total,
    };

    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

    console.log("结算", checkoutData);
  };

  return (
    <div className="flex">
      <div className="Header">
        <ScanOutlined />
        <div className="SearchBox">
          <input type="text" placeholder=" 请输入商品 如：手机" />
        </div>
        <MessageOutlined />
      </div>
      <div></div>
      <div className="cartContent">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            extra={<a href={`/product/${product.id}`}>查看详情</a>}
            className="cartItem"
          >
            <Row style={{ height: "100%", paddingTop: "3px" }}>
              <Col span={3}>
                <Checkbox
                  checked={product.checked}
                  onChange={() => toggleCheck(product.id)}
                >
                  选择
                </Checkbox>
              </Col>
              <Col span={8}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="img-resize"
                />
              </Col>
              <Col span={13}>
                <div className="flex">
                  <Title level={3}>{product.name}</Title>
                  <p>{product.description}</p>
                  <Text mark>官方立减{product.discountPrice}元</Text>
                  <div>
                    <span style={{ color: "red" }}>￥</span>
                    <span
                      style={{
                        color: "red",
                        fontSize: "2em",
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
                    {product.checked && (
                      <Text
                        style={{
                          marginLeft: 12,
                          color: "red",
                          fontSize: "2.3em",
                          fontWeight: "bold",
                        }}
                      >
                        ￥{(product.price - product.discountPrice).toFixed(2)}
                      </Text>
                    )}
                  </div>
                </div>

                <div style={{ position: "absolute", right: 10, bottom: 0 }}>
                  <InputNumber
                    min={1}
                    style={{ opacity: 0 }}
                    value={product.quantity}
                    onChange={(value) => updateQuantity(product.id, value)}
                  />
                  <InputNumber
                    min={1}
                    value={product.quantity}
                    onChange={(value) => updateQuantity(product.id, value)}
                  />
                </div>
              </Col>
            </Row>
          </Card>
        ))}
      </div>

      <div className="footer">
        <Checkbox
          checked={selectAll}
          onChange={(e) => handleSelectAll(e.target.checked)}
        >
          全选
        </Checkbox>
        <div>
          <Row>
            <Col span={12}>
              <div className="vertical-center">
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
                {/*<div>已优惠：¥{calculateTotalAccount()} 元</div>*/}
                {/*<div>已优惠：¥{discountTotal} 元</div> /!* 显示已优惠金额 *!/*/}
                <div>
                  <span style={{ color: "red" }}>已优惠</span>
                  <span
                    style={{
                      color: "red",
                      fontSize: "2em",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    ¥{totalAccount}
                  </span>
                </div>
                <div>使用满减券：{totalDiscount} 张</div>
              </div>
            </Col>
            <Col span={12}>
              <Button
                className="vertical-center2"
                type="primary"
                disabled={selectedCount === 0}
                onClick={handleCheckout}
              >
                去结算 ({selectedCount} 项)
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
