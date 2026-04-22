import React, { useState } from 'react';
import { Button, Space, Input, List, Tag, Radio, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { TodoState, TodoActions } from '../types';

const { Text } = Typography;

interface TodoListDisplayProps {
  state: TodoState;
  actions: TodoActions;
}

const TodoListDisplay: React.FC<TodoListDisplayProps> = ({ state, actions }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      actions.addTodo(inputValue.trim());
      setInputValue('');
    }
  };

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'completed') return todo.completed;
    if (state.filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="scenario-section">
      <div className="scenario-title">场景 2: Todo List</div>
      <Space direction="vertical" style={{ width: '100%' }} size="small">
        <Space.Compact style={{ width: '100%' }}>
          <Input
            placeholder="添加新任务"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onPressEnter={handleAdd}
          />
          <Button type="primary" onClick={handleAdd}>
            添加
          </Button>
        </Space.Compact>

        <Radio.Group
          value={state.filter}
          onChange={e => actions.setFilter(e.target.value)}
          size="small"
        >
          <Radio.Button value="all">全部 ({state.todos.length})</Radio.Button>
          <Radio.Button value="active">
            未完成 ({state.todos.filter(t => !t.completed).length})
          </Radio.Button>
          <Radio.Button value="completed">
            已完成 ({state.todos.filter(t => t.completed).length})
          </Radio.Button>
        </Radio.Group>

        <List
          size="small"
          dataSource={filteredTodos}
          style={{ maxHeight: 200, overflow: 'auto' }}
          renderItem={todo => (
            <List.Item
              actions={[
                <Button
                  key="delete"
                  type="text"
                  danger
                  size="small"
                  icon={<DeleteOutlined />}
                  onClick={() => actions.deleteTodo(todo.id)}
                />,
              ]}
            >
              <Text
                delete={todo.completed}
                onClick={() => actions.toggleTodo(todo.id)}
                style={{ cursor: 'pointer', flex: 1 }}
              >
                {todo.text}
              </Text>
              {todo.completed && <Tag color="success">完成</Tag>}
            </List.Item>
          )}
        />

        {state.todos.some(t => t.completed) && (
          <Button size="small" onClick={actions.clearCompleted}>
            清除已完成
          </Button>
        )}
      </Space>
    </div>
  );
};

export default TodoListDisplay;
