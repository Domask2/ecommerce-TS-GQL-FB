import { IProduct } from './../Products/products.types';
import { createSelector } from 'reselect';

export const selectCartData = (state: any) => state.cartData;

export const selectCartItems = createSelector(
  [selectCartData],
  cartData => cartData.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
  cartItems.reduce(
    (quantity: number, cartItem: IProduct) => 
      quantity + cartItem.quantity, 0)
);

export const selectCartTotal  = createSelector(
  [selectCartItems],
  cartItems => 
  cartItems.reduce(
    (total: number, cartItem: any) => 
      total + cartItem.quantity * cartItem.productPrice, 0)
);