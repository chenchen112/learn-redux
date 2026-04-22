import { create } from 'zustand';
import { CartState, CartActions, Product } from '@/shared/types';
import { mockProducts } from '@/shared/utils';

interface CartStore extends CartState, CartActions {}

export const useZustandCart = create<CartStore>((set, get) => ({
  items: [],
  products: mockProducts,
  loading: false,
  
  addToCart: (product: Product, quantity: number = 1) => {
    set(state => {
      const existingItem = state.items.find(
        item => item.product.id === product.id
      );
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { product, quantity }],
      };
    });
  },
  
  removeFromCart: (productId: string) => {
    set(state => ({
      items: state.items.filter(item => item.product.id !== productId),
    }));
  },
  
  updateQuantity: (productId: string, quantity: number) => {
    set(state => ({
      items: state.items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    }));
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getTotalPrice: () => {
    const { items } = get();
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  },
  
  getTotalItems: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.quantity, 0);
  },
}));
