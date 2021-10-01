export interface ICart {

}

export enum cartTypes {
  ADD_TO_CART = 'ADD_TO_CART',
}

export interface CartAction {
  type: cartTypes.ADD_TO_CART;
  payload: any;
}
