import React from "react";
import { Button, Space, Typography, Spin } from "antd";
import { PlusOutlined, MinusOutlined, ReloadOutlined } from "@ant-design/icons";
import { CounterState, CounterActions } from "../types";

const { Title } = Typography;

interface CounterDisplayProps {
  state: CounterState;
  actions: CounterActions;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ state, actions }) => {
  return (
    <div className="scenario-section">
      <div className="scenario-title">场景 1: 计数器</div>
      <Space direction="vertical" style={{ width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <Title level={2} style={{ margin: 0 }}>
            {state.loading ? <Spin /> : state.count}
          </Title>
        </div>
        <Space wrap>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={actions.increment}
            disabled={state.loading}
          >
            增加
          </Button>
          <Button
            icon={<MinusOutlined />}
            onClick={actions.decrement}
            disabled={state.loading}
          >
            减少
          </Button>
          <Button
            icon={<ReloadOutlined />}
            onClick={actions.reset}
            disabled={state.loading}
          >
            重置
          </Button>
          <Button
            type="dashed"
            onClick={actions.incrementAsync}
            loading={state.loading}
          >
            异步增加 (+1s)
          </Button>
        </Space>
      </Space>
    </div>
  );
};

export default CounterDisplay;
