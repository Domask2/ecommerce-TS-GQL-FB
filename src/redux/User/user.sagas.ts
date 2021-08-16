import { userTypes } from './user.types';
import { takeLatest, call, all, put } from '@redux-saga/core/effects';
import { auth, handleUserProfile, GoogleProvider } from './../../firebase/utils';
import { AnyAction } from 'redux';

// import { signInSuccess } from './user.actions';

export function* emailSignIn({ payload }: AnyAction) {
  console.log(userTypes.EMAIL_SIGN_IN_START);
  try {
    yield auth.signInWithEmailAndPassword(payload.email, payload.password);
    // yield put (
    //   signInSuccess(true)
    // )
  } catch (error) {
    // console.log(error);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSaga() {
  yield all([call(onEmailSignInStart)]);
}
