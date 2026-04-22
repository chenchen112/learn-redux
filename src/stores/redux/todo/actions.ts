import { TodoFilter } from '@/shared/types';
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SET_FILTER,
  CLEAR_COMPLETED,
} from './types';

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO,
  payload: id,
});

export const setFilter = (filter: TodoFilter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});
