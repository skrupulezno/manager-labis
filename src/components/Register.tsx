import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    // Реализуйте регистрацию здесь
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={8}>
        <Card>
          <Title level={2}>Register</Title>
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
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
          <Link to="/">Already have an account? Login</Link>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
