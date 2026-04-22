import { createSlice } from '@reduxjs/toolkit';
import { TodoState, Todo, TodoFilter } from '@/shared/types';
import { generateId } from '@/shared/utils';

const initialState: TodoState = {
  todos: [],
  filter: 'all',
  loading: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: generateId(),
        text: action.payload,
        completed: false,
        createdAt: Date.now(),
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload as TodoFilter;
    },
    clearCompleted: state => {
      state.todos = state.todos.filter(t => !t.completed);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
