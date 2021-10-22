import { ordersTypes } from './orders.type';
import { FetchOrdersAction } from './orders.type';

const INITIAL_STATE = {
  orderHistory: [],
  orderDetails: {},
};

export const ordersReducer = (state = INITIAL_STATE, action: FetchOrdersAction) => {
  switch (action.type) {
    case ordersTypes.SET_USER_ORDER_HISTORY:
      return {
        ...state,
        orderHistory: action.payload,
      };
    case ordersTypes.SET_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.payload,
      };

    default:
      return state;
  }
};
