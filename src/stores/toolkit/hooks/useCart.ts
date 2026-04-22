import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToolkitRootState, ToolkitAppDispatch } from '../store';
import { CartState, CartActions } from '@/shared/types';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  setProducts,
} from '../cartSlice';
import { mockProducts } from '@/shared/utils';

export const useToolkitCart = (): [CartState, CartActions] => {
  const state = useSelector((state: ToolkitRootState) => state.cart);
  const dispatch = useDispatch<ToolkitAppDispatch>();

  useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  const getTotalPrice = useCallback(() => {
    return state.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }, [state.items]);

  const getTotalItems = useCallback(() => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  }, [state.items]);

  const actions: CartActions = {
    addToCart: useCallback(
      (product, quantity = 1) => dispatch(addToCart({ product, quantity })),
      [dispatch]
    ),
    removeFromCart: useCallback(
      (productId) => dispatch(removeFromCart(productId)),
      [dispatch]
    ),
    updateQuantity: useCallback(
      (productId, quantity) => dispatch(updateQuantity({ productId, quantity })),
      [dispatch]
    ),
    clearCart: useCallback(() => dispatch(clearCart()), [dispatch]),
    getTotalPrice,
    getTotalItems,
  };

  return [state, actions];
};
