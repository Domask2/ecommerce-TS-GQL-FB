import { cartTypes } from './cart.types';
import { ICart } from './cart.types';
import { IProduct } from './../Products/products.types';

export const addProduct = (nextCartItem: ICart) => ({
  type: cartTypes.ADD_TO_CART,
  payload: nextCartItem,
});

export const removeCartItem = (cartItem: any) => ({
  type: cartTypes.REMOVE_CART_ITEM,
  payload: cartItem,
});
