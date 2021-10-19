export interface ICart {}

export enum cartTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_TO_CART_TEST = 'ADD_TO_CART_TEST',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  REDUCE_CART_ITEM = 'REDUCE_CART_ITEM',
  CLEAR_CART = 'CLEAR_CART',
}

export interface CartAction {
  type:
    | cartTypes.ADD_TO_CART
    | cartTypes.REMOVE_CART_ITEM
    | cartTypes.REDUCE_CART_ITEM
    | cartTypes.CLEAR_CART;
  payload?: any;
}
