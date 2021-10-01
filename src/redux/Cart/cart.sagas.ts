import { takeLatest, put, all, call } from 'redux-saga/effects';
import { cartTypes, ICart } from './cart.types';

import { handleAddCart } from './cart.helpers';
import { addProduct } from './cart.actions';

export function* fetchCart({payload}: any) {
  try {
    const cart: ICart =  yield handleAddCart(payload)
    put(addProduct(cart))
  } catch (error) {
    // console.log(error)
  }
}

export function* onFetchCartStart() {
  yield takeLatest(cartTypes.ADD_TO_CART, fetchCart);
}

export default function* cartSagas() {
  yield all([
    call(onFetchCartStart),
  ]);
}