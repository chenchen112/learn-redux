import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxRootState } from '../store';
import { CounterState, CounterActions } from '@/shared/types';
import {
  increment,
  decrement,
  reset,
  incrementAsync,
} from '../counter';

export const useReduxCounter = (): [CounterState, CounterActions] => {
  const state = useSelector((state: ReduxRootState) => state.counter);
  const dispatch = useDispatch();

  const actions: CounterActions = {
    increment: useCallback(() => dispatch(increment()), [dispatch]),
    decrement: useCallback(() => dispatch(decrement()), [dispatch]),
    reset: useCallback(() => dispatch(reset()), [dispatch]),
    incrementAsync: useCallback(
      () => dispatch(incrementAsync() as any),
      [dispatch]
    ),
  };

  return [state, actions];
};
