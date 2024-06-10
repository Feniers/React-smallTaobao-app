import React, { useContext,useEffect,useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Card, Divider } from "antd";
import {useNavigate, useParams} from "react-router-dom";
import {ServiceContext} from "../contexts/ServiceContext";

const CreateOrder = () => {
  const { id } = useParams();
  const { good: goodService,user:userService,order:orderService } = useContext(ServiceContext);
  const good = goodService.getGoodById(parseInt(id));
  const user = userService.getUser();
  const navigate = useNavigate();
  const newOrder ={
      userId: user.id,
      price: good.price,
      goodId: [good.id],//以后加多个
      payTime: "2018-01-01 00:00:00"
  }
    const [order, setOrder] = useState({});

    useEffect(() => {
        setOrder(orderService.createOrder(newOrder))
        console.log(order);
    }, []);

  //if (!product) {
      //return <div>商品未找到</div>;
  //}

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          position: "fixed",
          top: 0,
          borderBottom: "1px solid #ccc",
          zIndex: 100,
          backgroundColor: "#fff",
        }}
      >
        <div style={{ width: "170px" }}>
          <LeftOutlined
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>创建订单</div>
        <div style={{ width: "100px" }}></div>
      </div>

      <Card style={{ marginTop: "35px" }}>
          <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>收货地址</div>
              {/*<div>{user.addr.address}</div>*/}
              <RightOutlined/>
          </div>
      </Card>
        <Card>
            <div>商品信息</div>
            {/*<div>{good.description}</div>*/}
        </Card>
        <Card>
            <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            商品合计
          </div>
            <div>
                {order.price}
            </div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            运费
          </div>
          <div>1919</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            活动优惠
          </div>
          <div>-{good.discountPrice}</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            优惠卷
          </div>
          <div>会有优惠卷的</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            备注
          </div>
          <div>这是一个备注</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
      </Card>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#fff",
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #ccc",
        }}
      >
        <div>合计：￥{order.price}</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => {
                navigate(`/pay/${order.id}`);
                //orderService.payOrder(order.id);
            }}
          >
            提交订单
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;