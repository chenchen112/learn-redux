import React from 'react';
import { Card, Table, Typography, Space, Tag } from 'antd';

const { Title, Text } = Typography;

interface ComparisonData {
  key: string;
  metric: string;
  redux: string | number;
  toolkit: string | number;
  zustand: string | number;
}

const comparisonData: ComparisonData[] = [
  {
    key: '1',
    metric: '代码行数',
    redux: '~450 行',
    toolkit: '~280 行',
    zustand: '~200 行',
  },
  {
    key: '2',
    metric: '学习曲线',
    redux: '陡峭',
    toolkit: '中等',
    zustand: '平缓',
  },
  {
    key: '3',
    metric: '样板代码',
    redux: '最多',
    toolkit: '较少',
    zustand: '最少',
  },
  {
    key: '4',
    metric: 'TypeScript 支持',
    redux: '需配置',
    toolkit: '内置',
    zustand: '内置',
  },
  {
    key: '5',
    metric: '异步处理',
    redux: '需中间件',
    toolkit: '内置',
    zustand: '内置',
  },
  {
    key: '6',
    metric: '调试工具',
    redux: 'DevTools',
    toolkit: 'DevTools',
    zustand: 'DevTools',
  },
  {
    key: '7',
    metric: '适用场景',
    redux: '大型应用',
    toolkit: '大型应用',
    zustand: '中小型应用',
  },
];

const columns = [
  {
    title: '对比维度',
    dataIndex: 'metric',
    key: 'metric',
    render: (text: string) => <Text strong>{text}</Text>,
  },
  {
    title: 'Redux',
    dataIndex: 'redux',
    key: 'redux',
    render: (text: string | number) => <Tag color="blue">{text}</Tag>,
  },
  {
    title: 'Redux Toolkit',
    dataIndex: 'toolkit',
    key: 'toolkit',
    render: (text: string | number) => <Tag color="green">{text}</Tag>,
  },
  {
    title: 'Zustand',
    dataIndex: 'zustand',
    key: 'zustand',
    render: (text: string | number) => <Tag color="purple">{text}</Tag>,
  },
];

const ComparisonTable: React.FC = () => {
  return (
    <Card style={{ marginTop: 20 }}>
      <Title level={4}>状态管理库对比</Title>
      <Table
        dataSource={comparisonData}
        columns={columns}
        pagination={false}
        size="small"
      />
      <Space direction="vertical" style={{ marginTop: 16, width: '100%' }}>
        <Text type="secondary">
          💡 提示：每个面板都实现了相同的四个场景（计数器、Todo List、用户管理、购物车），可以交互体验不同状态管理库的使用方式。
        </Text>
        <Text type="secondary">
          📊 性能对比：Zustand 以其极简的 API 和最小的 bundle 大小著称，Redux Toolkit 提供最佳的开发体验和性能平衡。
        </Text>
      </Space>
    </Card>
  );
};

export default ComparisonTable;
