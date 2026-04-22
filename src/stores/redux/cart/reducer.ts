import { CartState } from '@/shared/types';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CLEAR_CART,
  SET_PRODUCTS,
} from './types';

const initialState: CartState = {
  items: [],
  products: [],
  loading: false,
};

export default function cartReducer(
  state = initialState,
  action: any
): CartState {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_TO_CART: {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find(
        item => item.product.id === product.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { product, quantity }],
      };
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(
          item => item.product.id !== action.payload
        ),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case CLEAR_CART:
      return { ...state, items: [] };
    default:
      return state;
  }
}
