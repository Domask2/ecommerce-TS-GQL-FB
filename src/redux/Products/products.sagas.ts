import { auth } from './../../firebase/utils';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { productTypes } from './products.types';

export function* addProduct({ payload }: any) {}

export function* onAddProductStart() {
  yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export default function* productsSagas() {
  yield all([call(onAddProductStart)]);
}
