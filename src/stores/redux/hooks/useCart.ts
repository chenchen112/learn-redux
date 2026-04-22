import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReduxRootState } from "../store";
import { CartState, CartActions } from "@/shared/types";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  setProducts,
} from "../cart";
import { mockProducts } from "@/shared/utils";

export const useReduxCart = (): [CartState, CartActions] => {
  const state = useSelector((state: ReduxRootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  const getTotalPrice = useCallback(() => {
    return state.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  }, [state.items]);

  const getTotalItems = useCallback(() => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  }, [state.items]);

  const actions: CartActions = {
    addToCart: useCallback(
      (product, quantity = 1) => dispatch(addToCart(product, quantity)),
      [dispatch],
    ),
    removeFromCart: useCallback(
      (productId) => dispatch(removeFromCart(productId)),
      [dispatch],
    ),
    updateQuantity: useCallback(
      (productId, quantity) => dispatch(updateQuantity(productId, quantity)),
      [dispatch],
    ),
    clearCart: useCallback(() => dispatch(clearCart()), [dispatch]),
    getTotalPrice,
    getTotalItems,
  };

  return [state, actions];
};
