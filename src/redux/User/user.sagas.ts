import { userTypes } from './user.types';
import { takeLatest, call, all, put } from '@redux-saga/core/effects';
import { auth, handleUserProfile, GoogleProvider } from "./../../firebase/utils";
import { AnyAction } from 'redux';

// import { signInSuccess } from './user.actions';

export function* emailSignIn({payload: {email, password}}:AnyAction) {
  try {
    yield auth.signInWithEmailAndPassword(email, password);
    // yield put (
    //   signInSuccess(true)
    // )

  } catch (error) {
    // console.log(error);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export default function* userSaga() {
  yield all([call(onEmailSignInStart)])
}