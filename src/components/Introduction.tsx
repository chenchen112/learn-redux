import React from 'react';
import { Card, Typography, Space, Alert } from 'antd';
import {
  CodeOutlined,
  ThunderboltOutlined,
  ToolOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const features = [
  {
    icon: <CodeOutlined style={{ fontSize: 24, color: '#1890ff' }} />,
    title: 'Redux (传统方式)',
    description: '最经典的状态管理方案，需要编写大量样板代码，适合大型团队和复杂应用。',
    pros: ['生态系统成熟', '可预测性强', '中间件丰富'],
    cons: ['样板代码多', '学习曲线陡峭', '需要额外配置'],
  },
  {
    icon: <ThunderboltOutlined style={{ fontSize: 24, color: '#52c41a' }} />,
    title: 'Redux Toolkit',
    description: 'Redux 官方推荐的最佳实践，大幅简化了 Redux 的使用，是现代 Redux 开发的首选。',
    pros: ['简化配置', '内置最佳实践', '优秀的 TS 支持'],
    cons: ['仍需理解 Redux 概念', 'Bundle 稍大'],
  },
  {
    icon: <ToolOutlined style={{ fontSize: 24, color: '#722ed1' }} />,
    title: 'Zustand',
    description: '极简的轻量级状态管理库，API 简洁优雅，无需 Provider，适合中小型应用。',
    pros: ['极简 API', '无需 Provider', '体积超小', 'TypeScript 友好'],
    cons: ['生态相对较小', '缺少时间旅行调试'],
  },
];

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  pros: string[];
  cons: string[];
}> = ({ icon, title, description, pros, cons }) => (
  <Card style={{ height: '100%' }}>
    <Space direction="vertical" style={{ width: '100%' }}>
      {icon}
      <Title level={5} style={{ margin: 0 }}>
        {title}
      </Title>
      <Text type="secondary">{description}</Text>
      <div>
        <Text strong>优点：</Text>
        {pros.map((pro, i) => (
          <Text key={i} type="success" style={{ display: 'block', fontSize: 12 }}>
            ✓ {pro}
          </Text>
        ))}
      </div>
      <div>
        <Text strong>缺点：</Text>
        {cons.map((con, i) => (
          <Text key={i} type="danger" style={{ display: 'block', fontSize: 12 }}>
            ✗ {con}
          </Text>
        ))}
      </div>
    </Space>
  </Card>
);

const Introduction: React.FC = () => {
  return (
    <Card style={{ marginBottom: 20 }}>
      <Title level={3}>状态管理库对比演示</Title>
      <Paragraph>
        本项目对比了 React 生态中最流行的三种状态管理方案：Redux（传统方式）、Redux
        Toolkit 和 Zustand。每个方案都实现了相同的四个场景，方便你直观对比它们的使用方式和开发体验。
      </Paragraph>
      <Alert
        message="技术栈"
        description="React 19 + TypeScript + Vite + Ant Design"
        type="info"
        showIcon
        style={{ marginBottom: 16 }}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 16,
        }}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </Card>
  );
};

export default Introduction;
