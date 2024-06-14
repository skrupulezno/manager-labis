import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button, Card, Typography, Row, Col } from "antd";

const { Title } = Typography;

const Dashboard: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={8}>
        <Card>
          <Title level={2}>Dashboard</Title>
          <Button type="primary" onClick={authContext?.logout}>
            Logout
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;
