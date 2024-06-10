import React, { useContext, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Button, Card, Radio } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ServiceContext } from "../contexts/ServiceContext";

const Pay = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const { order: orderService } = useContext(ServiceContext);
  const order = orderService.getOrderById(parseInt(id));

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          borderBottom: "1px solid #ccc",
          width: "100%",
        }}
      >
        <LeftOutlined
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
        <div>支付</div>
        <div></div>
      </div>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h2>支付金额</h2>
            <div>
                <span style={{color: "red"}}>￥</span>
                <span
                    style={{
                        color: "red",
                        fontSize: "2em",
                        fontWeight: "bold",
                    }}
                >
                {order.price}
                </span>
            </div>
            <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
                <Card style={{
                    marginTop: "10px",
                    backgroundColor: "你的颜色",
                    width: "350px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"
                }}>
                    <div
                        style={{
                            marginBottom: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{display: "flex", alignItems: "center"}}>
                            <img
                                src="https://s3.bmp.ovh/imgs/2024/06/05/8f7ba0d885578c55.jpg"
                                alt=""
                                style={{width: "30px", height: "30px", marginRight: "15px"}}
                            />
                            <span style={{fontSize: "20px"}}>微信支付</span>
                        </div>
                        <Radio value={1} shape="circle"></Radio>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <img
                                src="https://s3.bmp.ovh/imgs/2024/06/05/233d0efa60fa3fcf.jpg"
                                alt=""
                                style={{width: "30px", height: "30px", marginRight: "15px"}}
                            />
                            <span style={{fontSize: "20px"}}>支付宝支付</span>
                        </div>
                        <Radio value={2} shape="circle"/>
                    </div>
                </Card>
            </Radio.Group>
            <div>
                <Button
                    style={{
                        width: "350px",
                        height: "50px",
                        fontSize: "20px",
                        backgroundColor: "#F94167",
                        color: "#fff",
                        marginTop: "20px",
                    }}
                    onClick={() => {
                        orderService.payOrder(id, value);
                        console.log(value)
                        navigate(`/PaySuccess/${order.id}`);
                    }}
                >
                    确认支付
                </Button>
            </div>
        </div>
    </div>
  );
};

export default Pay;
