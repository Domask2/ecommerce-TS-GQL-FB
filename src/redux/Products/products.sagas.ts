import { auth } from './../../firebase/utils';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { productTypes } from './products.types';

import { handleAddProduct, handleFetchProducts, handleDeleteProduct } from './products.helpers';
import { setProducts, fetchProductsStart } from './products.actions';

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
    yield put(fetchProductsStart());
  } catch (error) {
    // console.log(error);
  }
}

export function* onAddProductStart() {
  yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts():any {
  try {
    const products = yield handleFetchProducts();
    yield put(setProducts(products));
  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* deleteProduct({ payload }:any) {
  try {
    yield handleDeleteProduct(payload);
    yield put(fetchProductsStart());
  } catch (error) {
    // console.log(error)
  }
}

export function* onDeleteProductStart() {
  yield takeLatest(productTypes.DELETE_PRODUCT_START, deleteProduct)
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart), 
    call(onFetchProductsStart),
    call(onDeleteProductStart),
  ]);
}
