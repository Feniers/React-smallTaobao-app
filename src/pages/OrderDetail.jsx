import React, { useContext } from "react";
import { Card, Divider } from "antd";
import { LeftOutlined, DropboxOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { ServiceContext } from "../contexts/ServiceContext";

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { order: orderService, good: goodService } = useContext(ServiceContext);
  const order = orderService.getOrderById(parseInt(id));

  const goodList = order.goods.map((good) => goodService.getGoodById(good.id));

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
          fontSize: "2.5em"
        }}
      >
        <DropboxOutlined style={{ marginLeft: "10px",}} />
        等待发货
      </div>
      <Card style={{
          width: "95%",
          margin: "10px auto 0 auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}>
        <div>收货信息</div>
        <div>姓名：{order.address.name}</div>
        <div>地址：{order.address.address}</div>
      </Card>
      <Card style={{
          width: "95%",
          margin: "10px auto 0 auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}>
        <div>商品信息</div>
        {goodList.map((good, index) => (
          <div key={index}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={good.img}
                  alt=""
                  style={{ width: "50px", height: "50px", marginRight: "15px",marginLeft: "2px" }}
                />
                <span style={{ fontSize: "20px" }}>{good.name}</span>
              </div>
              <div>{good.price}</div>
            </div>
            {index !== goodList.length - 1 && (
              <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
            )}
          </div>
        ))}
      </Card>
      <Card style={{
          width: "95%",
          margin: "10px auto 0 auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}>
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
          <div>{order.shippingCost}</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            活动优惠
          </div>
          <div>{order.discount}</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            备注
          </div>
          <div>这是一个备注</div>
        </div>
      </Card>

      <Card style={{
          width: "95%",
          margin: "10px auto 0 auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            订单编号
          </div>
          <div>{order.orderNo}</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            提交时间
          </div>
          <div>{order.payTime}</div>
        </div>
        <Divider style={{ borderTop: "1px solid #f0f0f0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>
            支付方式
          </div>
          <div>{order.payMethod === 1 ? "微信支付" : "支付宝支付"}</div>
        </div>
      </Card>
    </div>
  );
};

export default OrderDetail;
