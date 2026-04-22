import React from 'react';
import { Card, Badge } from 'antd';
import {
  CounterDisplay,
  TodoListDisplay,
  UserListDisplay,
  ShoppingCartDisplay,
} from '@/shared/components';
import { useReduxCounter, useReduxTodo, useReduxUser, useReduxCart } from '@/stores/redux';

const ReduxPanelContent: React.FC = () => {
  const [counterState, counterActions] = useReduxCounter();
  const [todoState, todoActions] = useReduxTodo();
  const [userState, userActions] = useReduxUser();
  const [cartState, cartActions] = useReduxCart();

  return (
    <Card
      className="panel-card"
      title={
        <span>
          Redux <Badge count="传统方式" style={{ backgroundColor: '#1890ff' }} />
        </span>
      }
      extra={<span style={{ fontSize: 12, color: '#999' }}>~450 行代码</span>}
    >
      <CounterDisplay state={counterState} actions={counterActions} />
      <TodoListDisplay state={todoState} actions={todoActions} />
      <UserListDisplay state={userState} actions={userActions} />
      <ShoppingCartDisplay state={cartState} actions={cartActions} />
    </Card>
  );
};

export default ReduxPanelContent;
