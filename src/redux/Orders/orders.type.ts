import { IProduct } from './../Products/products.types';

export interface IOrder {
  orderTotal: string;
  orderItems: IProduct;
}

export enum ordersTypes {
  SAVE_ORDER_HISTORY_START = 'SAVE_ORDER_HISTORY_START',
  GET_USER_ORDER_HISTORY_START = 'GET_USER_ORDER_HISTORY_START',
  SET_USER_ORDER_HISTORY = 'SET_USER_ORDER_HISTORY',
}

export interface FetchOrdersAction {
  type:
    | ordersTypes.SAVE_ORDER_HISTORY_START
    | ordersTypes.GET_USER_ORDER_HISTORY_START
    | ordersTypes.SET_USER_ORDER_HISTORY;
  payload: any;
}
