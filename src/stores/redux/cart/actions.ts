import { Product } from "@/shared/types";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CLEAR_CART,
  SET_PRODUCTS,
} from "./types";

export const addToCart = (product: Product, quantity: number = 1) => ({
  type: ADD_TO_CART,
  payload: { product, quantity },
});

export const removeFromCart = (productId: string) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const updateQuantity = (productId: string, quantity: number) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity },
});

export const clearCart = () => ({ type: CLEAR_CART });

export const setProducts = (products: Product[]) => ({
  type: SET_PRODUCTS,
  payload: products,
});
