import React from 'react';
import { Card, Badge } from 'antd';
import {
  CounterDisplay,
  TodoListDisplay,
  UserListDisplay,
  ShoppingCartDisplay,
} from '@/shared/components';
import {
  useZustandCounter,
  useZustandTodo,
  useZustandUser,
  useZustandCart,
} from '@/stores/zustand';

const ZustandPanel: React.FC = () => {
  const counterState = useZustandCounter();
  const todoState = useZustandTodo();
  const userState = useZustandUser();
  const cartState = useZustandCart();

  const counterActions = {
    increment: counterState.increment,
    decrement: counterState.decrement,
    reset: counterState.reset,
    incrementAsync: counterState.incrementAsync,
  };

  const todoActions = {
    addTodo: todoState.addTodo,
    toggleTodo: todoState.toggleTodo,
    deleteTodo: todoState.deleteTodo,
    setFilter: todoState.setFilter,
    clearCompleted: todoState.clearCompleted,
  };

  const userActions = {
    fetchUsers: userState.fetchUsers,
    selectUser: userState.selectUser,
    setSearchQuery: userState.setSearchQuery,
    setPage: userState.setPage,
    setPageSize: userState.setPageSize,
  };

  const cartActions = {
    addToCart: cartState.addToCart,
    removeFromCart: cartState.removeFromCart,
    updateQuantity: cartState.updateQuantity,
    clearCart: cartState.clearCart,
    getTotalPrice: cartState.getTotalPrice,
    getTotalItems: cartState.getTotalItems,
  };

  return (
    <Card
      className="panel-card"
      title={
        <span>
          Zustand <Badge count="轻量级" style={{ backgroundColor: '#722ed1' }} />
        </span>
      }
      extra={<span style={{ fontSize: 12, color: '#999' }}>~200 行代码</span>}
    >
      <CounterDisplay state={counterState} actions={counterActions} />
      <TodoListDisplay state={todoState} actions={todoActions} />
      <UserListDisplay state={userState} actions={userActions} />
      <ShoppingCartDisplay state={cartState} actions={cartActions} />
    </Card>
  );
};

export default ZustandPanel;
