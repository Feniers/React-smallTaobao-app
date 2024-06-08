import React ,{ useState }  from "react";
import {MessageOutlined, ScanOutlined} from "@ant-design/icons";
import {Button, Card, Checkbox, Col, InputNumber, Row} from "antd";
import "../css/Cart.css";
function Cart() {
  // 假设这是从某处获取的商品数据
  const [products, setProducts] = useState([
      { id: 1, title: '商品1', description: '商品1描述', price:100,checked: false, quantity: 1 },
      { id: 2, title: '商品2', description: '商品2描述', price:190,checked: false, quantity: 1 },
      { id: 3, title: '商品3', description: '商品3描述', price:329,checked: false, quantity: 1 }
  ]);
    const [selectAll, setSelectAll] = useState(false);

    const calculateTotalPrice = () => {
        return products.reduce((acc, product) => {
            if (product.checked) {
                return acc + (product.price * product.quantity);
            }
            return acc;
        }, 0);
    };

    // 勾选或取消勾选商品
    const toggleCheck = (id) => {
        const newProducts = products.map(product =>
            product.id === id ? { ...product, checked: !product.checked } : product
        );
        setProducts(newProducts);
        checkSelectAll(newProducts);
    };

    // 更新商品数量
    const updateQuantity = (id, value) => {
        const newProducts = products.map(product =>
            product.id === id ? { ...product, quantity: value } : product
        );
        setProducts(newProducts);
    };

    // 全选或取消全选
    const handleSelectAll = (checked) => {
        const newProducts = products.map(product => ({ ...product, checked }));
        setProducts(newProducts);
        setSelectAll(checked);
    };

    // 检查是否应该更新全选状态
    const checkSelectAll = (products) => {
        const allChecked = products.every(product => product.checked);
        setSelectAll(allChecked);
    };
    // 计算选中商品的总数
    const selectedCount = products.filter(product => product.checked).length;

    return <div className="flex">
    <div className="Header">
      <ScanOutlined />
      <div className="SearchBox">
        <input type="text" placeholder=" 请输入商品 如：手机" />
      </div>
      <MessageOutlined />
    </div>
    <div>

    </div>
    <div className="cartContent">
        {products.map(product => (
            <Card key={product.id} title={product.title} extra={<a href="#">查看详情</a>} className="cartItem">
                <Row style={{height:'100%'}}>
                    <Col span={4}>
                        <Checkbox checked={product.checked} onChange={() => toggleCheck(product.id)}>选择</Checkbox>
                    </Col>
                    <Col span={20}>

                        <p>{product.description}</p>
                        <div style={{ position: 'absolute', right: 10, bottom: 0 }}>
                            <InputNumber min={1} style={{opacity: 0}} value={product.quantity} onChange={(value) => updateQuantity(product.id, value)} />
                            <InputNumber min={1}  value={product.quantity} onChange={(value) => updateQuantity(product.id, value)}  />
                        </div>
                    </Col>
                </Row>
                </Card>
        ))}
    </div>


        <div className="footer">
            <Checkbox checked={selectAll} onChange={e => handleSelectAll(e.target.checked)}>全选</Checkbox>
            <div>
                <Row>
                    <Col span={12}>
                        <div className="vertical-center">
                            合计：¥{calculateTotalPrice()} 元
                        </div>
                    </Col>
                    <Col span={12}>
                        <Button className="vertical-center" type="primary" disabled={selectedCount === 0} onClick={() => console.log('结算')}>
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
  </div>;
}

export default Cart;
