import { takeLatest, put, all, call } from 'redux-saga/effects';
import { IOrder, ordersTypes } from './orders.type';
import { saveOrderHistory, getUserOrderHistory, setUserOrderHistory } from './orders.action';

export function* saveOrder({ payload }: { payload: any }) {
  try {
  } catch (err) {
    // console.log(err)
  }
}

export function* onSaveOrderHistoryStart() {
  yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder);
}

export default function* ordersSagas() {
  yield all([call(onSaveOrderHistoryStart)]);
}
