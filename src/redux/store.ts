import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import createSagaMiddleware from '@redux-saga/core';
import { all, call } from '@redux-saga/core/effects';

import userSaga from './User/user.sagas';
import productsSagas from './Products/products.sagas';
import cartSagas from './Cart/cart.sagas';

import { userReducer } from './User/user.rudecer';
import { productReducer } from './Products/products.reducer';
import { cartReducer } from './Cart/card.reducer';


function* rootSaga() {
  yield all([
    call(userSaga), 
    call(productsSagas),
    call(cartSagas),
  ]);
}

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cartData: cartReducer,
});

const sagaMiddleware = createSagaMiddleware();

const devTools =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunkMiddleware)
    : composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware, logger));

const store = createStore(rootReducer, devTools);

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
