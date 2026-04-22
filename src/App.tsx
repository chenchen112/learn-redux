import React from "react";
import { Row, Col, Typography } from "antd";
import { ReduxPanel, ToolkitPanel, ZustandPanel } from "@/panels";
import { ComparisonTable, Introduction } from "@/components";

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", maxWidth: 1600, margin: "0 auto" }}>
      <Introduction />

      <Title level={3} style={{ marginTop: 30, marginBottom: 20 }}>
        三种状态管理方案对比
      </Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <ReduxPanel />
        </Col>
        <Col xs={24} lg={8}>
          <ToolkitPanel />
        </Col>
        <Col xs={24} lg={8}>
          <ZustandPanel />
        </Col>
      </Row>

      <ComparisonTable />

      <div style={{ marginTop: 20, textAlign: "center", color: "#999" }}>
        <p>Made with ❤️ using React 19 + TypeScript + Vite + Ant Design</p>
      </div>
    </div>
  );
};

export default App;
