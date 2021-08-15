import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { userReducer } from './User/user.rudecer';
import { all, call } from '@redux-saga/core/effects';
import userSaga from './User/user.sagas';

function* rootSaga() {
  yield all([userSaga])
}

export const rootReducer = combineReducers({
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const devTools =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunkMiddleware)
    : composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware));

const store = createStore(rootReducer, devTools);
sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
