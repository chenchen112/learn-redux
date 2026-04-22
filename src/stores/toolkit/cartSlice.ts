import { createSlice } from '@reduxjs/toolkit';
import { CartState } from '@/shared/types';

const initialState: CartState = {
  items: [],
  products: [],
  loading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      const existingItem = state.items.find(
        item => item.product.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.product.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(i => i.product.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const {
  setProducts,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
