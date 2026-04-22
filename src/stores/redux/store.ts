import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { counterReducer } from './counter';
import { todoReducer } from './todo';
import { userReducer } from './user';
import { cartReducer } from './cart';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  user: userReducer,
  cart: cartReducer,
});

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk));

export type ReduxRootState = ReturnType<typeof rootReducer>;
