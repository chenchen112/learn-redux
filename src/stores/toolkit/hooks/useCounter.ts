import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToolkitRootState, ToolkitAppDispatch } from '../store';
import { CounterState, CounterActions } from '@/shared/types';
import {
  increment,
  decrement,
  reset,
  incrementAsync,
} from '../counterSlice';

export const useToolkitCounter = (): [CounterState, CounterActions] => {
  const state = useSelector((state: ToolkitRootState) => state.counter);
  const dispatch = useDispatch<ToolkitAppDispatch>();

  const actions: CounterActions = {
    increment: useCallback(() => dispatch(increment()), [dispatch]),
    decrement: useCallback(() => dispatch(decrement()), [dispatch]),
    reset: useCallback(() => dispatch(reset()), [dispatch]),
    incrementAsync: useCallback(
      () => dispatch(incrementAsync()),
      [dispatch]
    ),
  };

  return [state, actions];
};
