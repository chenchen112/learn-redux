import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxRootState } from '../store';
import { TodoState, TodoActions } from '@/shared/types';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  setFilter,
  clearCompleted,
} from '../todo';

export const useReduxTodo = (): [TodoState, TodoActions] => {
  const state = useSelector((state: ReduxRootState) => state.todo);
  const dispatch = useDispatch();

  const actions: TodoActions = {
    addTodo: useCallback((text: string) => dispatch(addTodo(text)), [dispatch]),
    toggleTodo: useCallback((id: string) => dispatch(toggleTodo(id)), [dispatch]),
    deleteTodo: useCallback((id: string) => dispatch(deleteTodo(id)), [dispatch]),
    setFilter: useCallback((filter) => dispatch(setFilter(filter)), [dispatch]),
    clearCompleted: useCallback(() => dispatch(clearCompleted()), [dispatch]),
  };

  return [state, actions];
};
