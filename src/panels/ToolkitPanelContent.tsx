import React from 'react';
import { Card, Badge } from 'antd';
import {
  CounterDisplay,
  TodoListDisplay,
  UserListDisplay,
  ShoppingCartDisplay,
} from '@/shared/components';
import {
  useToolkitCounter,
  useToolkitTodo,
  useToolkitUser,
  useToolkitCart,
} from '@/stores/toolkit';

const ToolkitPanelContent: React.FC = () => {
  const [counterState, counterActions] = useToolkitCounter();
  const [todoState, todoActions] = useToolkitTodo();
  const [userState, userActions] = useToolkitUser();
  const [cartState, cartActions] = useToolkitCart();

  return (
    <Card
      className="panel-card"
      title={
        <span>
          Redux Toolkit{' '}
          <Badge count="推荐" style={{ backgroundColor: '#52c41a' }} />
        </span>
      }
      extra={<span style={{ fontSize: 12, color: '#999' }}>~280 行代码</span>}
    >
      <CounterDisplay state={counterState} actions={counterActions} />
      <TodoListDisplay state={todoState} actions={todoActions} />
      <UserListDisplay state={userState} actions={userActions} />
      <ShoppingCartDisplay state={cartState} actions={cartActions} />
    </Card>
  );
};

export default ToolkitPanelContent;
