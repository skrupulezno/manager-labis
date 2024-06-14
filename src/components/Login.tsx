import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Form, Input, Button, Card, Typography, Row, Col } from "antd";

const { Title } = Typography;

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (values: { email: string; password: string }) => {
    const { email, password } = values;
    if (email === "ediseev_mi@gmail.com" && password === "123456") {
      authContext?.login();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Row justify="center" align="middle">
      <Col xs={24} sm={16} md={12} lg={8} xl={6}>
        <Card>
          <Title level={2} style={{ textAlign: "center" }}>
            Login
          </Title>
          <Form onFinish={handleSubmit}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: "center" }}>
            <Link to="/register">Don't have an account? Register</Link>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
