export interface ICart {}

export enum cartTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_TO_CART_TEST = 'ADD_TO_CART_TEST',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
}

export interface CartAction {
  type: cartTypes.ADD_TO_CART | cartTypes.REMOVE_CART_ITEM;
  payload: any;
}
