import { IProduct } from './../Products/products.types';

export interface IOrder {
  orderTotal: string;
  orderItems: IProduct;
}

export enum ordersTypes {
  SAVE_ORDER_HISTORY_START = 'SAVE_ORDER_HISTORY_START',
  GET_USER_ORDER_HISTORY_START = 'GET_USER_ORDER_HISTORY_START',
  SET_USER_ORDER_HISTORY = 'SET_USER_ORDER_HISTORY',
  GET_ORDER_DETAILS_START = 'GET_ORDER_DETAILS_START',
  SET_ORDER_DETAILS = 'SET_ORDER_DETAILS',
}

export interface FetchOrdersAction {
  type: ordersTypes.SET_ORDER_DETAILS | ordersTypes.SET_USER_ORDER_HISTORY;
  payload: any;
}
