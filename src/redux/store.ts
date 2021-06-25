import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { userReducer } from './User/user.rudecer';

export const rootReducer = combineReducers({
  user: userReducer,
});

const devTools =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunkMiddleware)
    : composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, devTools);
export default store;

export type RootState = ReturnType<typeof rootReducer>;
