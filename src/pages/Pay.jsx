import { useState } from "react";
import { LeftOutlined} from "@ant-design/icons";
import { Button, Card, Radio } from "antd";
import { useNavigate } from "react-router-dom";

const Pay = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          borderBottom: "1px solid #ccc",
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
        <div>12345</div>
        <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
          <Card style={{ backgroundColor: "你的颜色", width: "350px" }}>
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://s3.bmp.ovh/imgs/2024/06/05/8f7ba0d885578c55.jpg" alt="" style={{ width: '30px', height: '30px',marginRight:'15px' }} />
                <span style={{ fontSize: '20px' }}>微信支付</span>
              </div>
              <Radio value={1} shape="circle"></Radio>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://s3.bmp.ovh/imgs/2024/06/05/233d0efa60fa3fcf.jpg" alt="" style={{ width: '30px', height: '30px',marginRight:'15px' }}/>
                <span style={{ fontSize: '20px' }}>支付宝支付</span>
              </div>
              <Radio value={2} shape="circle" />
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
            }}
            onClick={() => {
              navigate("/PaySuccess");
            }}
          >
            确认支付
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Pay;
