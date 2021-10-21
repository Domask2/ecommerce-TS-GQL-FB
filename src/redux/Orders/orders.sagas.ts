import { takeLatest, put, all, call } from 'redux-saga/effects';
import { IOrder, ordersTypes } from './orders.type';
import { saveOrderHistory, setUserOrderHistory } from './orders.action';
import { handleSaveOrder, handleGetUserOrderHistory } from './orders.helpers';
import { auth } from '../../firebase/utils';
import { clearCart } from '../Cart/cart.actions';

export function* getUserOrderHistory({ payload }: any): any {
  try {
    const history: any = yield handleGetUserOrderHistory(payload);
    yield put(setUserOrderHistory(history));
  } catch (err) {
    console.log(err);
  }
}

export function* onGetUserOrderHistoryStart() {
  yield takeLatest(ordersTypes.GET_USER_ORDER_HISTORY_START, getUserOrderHistory);
}

export function* saveOrder({ payload }: any) {
  try {
    const timestamps = new Date();
    yield handleSaveOrder({
      ...payload,
      orderUserID: auth.currentUser?.uid,
      orderCreatedDate: timestamps,
    });
    yield put(clearCart());
  } catch (err) {
    // console.log(err)
  }
}

export function* onSaveOrderHistoryStart() {
  yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder);
}

export default function* ordersSagas() {
  yield all([call(onSaveOrderHistoryStart), call(onGetUserOrderHistoryStart)]);
}
