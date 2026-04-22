import { CounterState } from '@/shared/types';
import {
  INCREMENT,
  DECREMENT,
  RESET,
  INCREMENT_ASYNC_REQUEST,
  INCREMENT_ASYNC_SUCCESS,
} from './types';

const initialState: CounterState = {
  count: 0,
  loading: false,
};

export default function counterReducer(
  state = initialState,
  action: any
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    case INCREMENT_ASYNC_REQUEST:
      return { ...state, loading: true };
    case INCREMENT_ASYNC_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}
