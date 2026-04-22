import {
  INCREMENT,
  DECREMENT,
  RESET,
  INCREMENT_ASYNC_REQUEST,
  INCREMENT_ASYNC_SUCCESS,
} from './types';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
export const incrementAsyncRequest = () => ({ type: INCREMENT_ASYNC_REQUEST });
export const incrementAsyncSuccess = () => ({ type: INCREMENT_ASYNC_SUCCESS });

export const incrementAsync = () => {
  return async (dispatch: any) => {
    dispatch(incrementAsyncRequest());
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch(incrementAsyncSuccess());
    dispatch(increment());
  };
};
