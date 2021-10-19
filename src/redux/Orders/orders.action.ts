import { IOrder, ordersTypes } from './orders.type';

export const saveOrderHistory = (order: IOrder) => ({
  type: ordersTypes.SAVE_ORDER_HISTORY_START,
  payload: order,
});

export const getUserOrderHistory = (uid: string) => ({
  type: ordersTypes.GET_USER_ORDER_HISTORY_START,
  payload: uid,
});

export const setUserOrderHistory = (history: any) => ({
  type: ordersTypes.SET_USER_ORDER_HISTORY,
  payload: history,
});
