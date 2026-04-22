import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

export const toolkitStore = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export type ToolkitRootState = ReturnType<typeof toolkitStore.getState>;
export type ToolkitAppDispatch = typeof toolkitStore.dispatch;
