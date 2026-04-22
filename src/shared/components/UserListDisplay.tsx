import React from 'react';
import { Table, Input, Avatar, Tag, Space, Spin } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { UserState, UserActions } from '../types';

interface UserListDisplayProps {
  state: UserState;
  actions: UserActions;
}

const UserListDisplay: React.FC<UserListDisplayProps> = ({ state, actions }) => {
  const columns = [
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 60,
      render: (avatar: string) => <Avatar src={avatar} icon={<UserOutlined />} />,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      ellipsis: true,
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => {
        const color = role === 'admin' ? 'red' : role === 'user' ? 'blue' : 'default';
        return <Tag color={color}>{role}</Tag>;
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'active' ? 'success' : 'default'}>
          {status === 'active' ? '活跃' : '未活跃'}
        </Tag>
      ),
    },
  ];

  return (
    <div className="scenario-section">
      <div className="scenario-title">场景 3: 用户管理</div>
      <Space direction="vertical" style={{ width: '100%' }} size="small">
        <Input
          placeholder="搜索用户"
          prefix={<SearchOutlined />}
          value={state.searchQuery}
          onChange={e => actions.setSearchQuery(e.target.value)}
          allowClear
        />

        <Spin spinning={state.loading}>
          <Table
            columns={columns}
            dataSource={state.users}
            rowKey="id"
            size="small"
            pagination={{
              current: state.currentPage,
              pageSize: state.pageSize,
              total: state.total,
              size: 'small',
              showSizeChanger: false,
              onChange: actions.setPage,
            }}
            scroll={{ y: 200 }}
          />
        </Spin>
      </Space>
    </div>
  );
};

export default UserListDisplay;
