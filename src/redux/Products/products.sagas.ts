import { auth } from './../../firebase/utils';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { productTypes } from './products.types';
import { TProduct } from './products.types';
import { AnyAction } from 'redux';

import { handleAddProduct, handleFetchProducts } from './products.helpers';

export function* addProduct({
  payload: { productCategory, productName, productThumbnail, productPrice },
}: any) {
  try {
    const timestamp = new Date();
    yield handleAddProduct({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      productAdminUserUID: auth.currentUser?.uid,
      createDate: timestamp,
    });
  } catch (error) {
    // console.log(error);
  }
}

export function* onAddProductStart() {
  yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts({ payload }: AnyAction) {
  try {
    // const products = yield handleFetchProducts(payload);
    // yield put(setProducts(products));
  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export default function* productsSagas() {
  yield all([call(onAddProductStart), call(onFetchProductsStart)]);
}
