import { create } from 'zustand';
import { TodoState, TodoActions, Todo, TodoFilter } from '@/shared/types';
import { generateId } from '@/shared/utils';

interface TodoStore extends TodoState, TodoActions {}

export const useZustandTodo = create<TodoStore>(set => ({
  todos: [],
  filter: 'all',
  loading: false,
  
  addTodo: (text: string) => {
    const newTodo: Todo = {
      id: generateId(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    set(state => ({ todos: [...state.todos, newTodo] }));
  },
  
  toggleTodo: (id: string) => {
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  
  deleteTodo: (id: string) => {
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== id),
    }));
  },
  
  setFilter: (filter: TodoFilter) => {
    set({ filter });
  },
  
  clearCompleted: () => {
    set(state => ({
      todos: state.todos.filter(todo => !todo.completed),
    }));
  },
}));
