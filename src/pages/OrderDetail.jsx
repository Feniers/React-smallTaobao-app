import React, {useContext} from "react";
import { Card, Divider } from "antd";
import {
  LeftOutlined,
  DropboxOutlined,
} from "@ant-design/icons";
import {useNavigate, useParams} from "react-router-dom";
import {ServiceContext} from "../contexts/ServiceContext";



const OrderDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { order:orderService } = useContext(ServiceContext);
    const order = orderService.getOrderById(parseInt(id));
    // const user = userService.getUser();
    const getPaymentMethodName = (payMethod) => {
        switch (payMethod) {
            case 1:
                return '微信支付';
            case 2:
                return '支付宝支付';
            default:
                return '未知支付方式';
        }
    };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          position: "fixed",
          top: 0,
          width: "100%",
          borderBottom: "1px solid #ccc",
          backgroundColor: "#fff",
        }}
      >
        <div style={{ width: "100px" }}>
          <LeftOutlined
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>订单详情</div>
        <div style={{ width: "100px" }}></div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "40px",
          height: "100px",
          alignItems: "center",
          backgroundColor: "#F94167",
        }}
      >
        <DropboxOutlined style={{ marginLeft: "10px" }} />
        等待发货
      </div>
      <Card>
        <div>地址信息</div>
      </Card>
      <Card>
        <div>商品信息</div>
      </Card>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            商品合计
          </div>
          <div>{order.price}</div>
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
          <div>填入</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            优惠卷
          </div>
          <div>填入</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            备注
          </div>
          <div>填入</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
      </Card>

      <Card>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            订单编号
          </div>
          <div>{order.id}</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            提交时间
          </div>
          <div>{order.createTime}</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            支付方式
          </div>
          <div>{getPaymentMethodName(order.payMethod)}</div>
        </div>
      </Card>
    </div>
  );
}

export default OrderDetail;
