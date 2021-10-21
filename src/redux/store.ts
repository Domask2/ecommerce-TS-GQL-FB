/* eslint-disable import/no-anonymous-default-export */
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from '@redux-saga/core';
import { all, call } from '@redux-saga/core/effects';

import userSaga from './User/user.sagas';
import productsSagas from './Products/products.sagas';
import cartSagas from './Cart/cart.sagas';
import ordersSagas from './Orders/orders.sagas';

import { userReducer } from './User/user.rudecer';
import { productReducer } from './Products/products.reducer';
import { cartReducer } from './Cart/cart.reducer';
import { ordersReducer } from './Orders/orders.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartData'],
};

function* rootSaga() {
  yield all([call(userSaga), call(productsSagas), call(cartSagas), call(ordersSagas)]);
}

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cartData: cartReducer,
  ordersData: ordersReducer,
});

const sagaMiddleware = createSagaMiddleware();

const devTools =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunkMiddleware)
    : composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware, logger));

const presistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(presistedReducer, devTools);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof rootReducer>;
