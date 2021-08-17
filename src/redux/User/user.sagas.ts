import { userTypes } from './user.types';
import { takeLatest, call, all, put } from '@redux-saga/core/effects';
import { auth, handleUserProfile, GoogleProvider } from './../../firebase/utils';
import { AnyAction } from 'redux';
import { signInSuccess } from './user.actions';

export function* getSnapshotFromUserAuth(user: any, additionalData = {}): any {
  try {
    const userRef: any = yield call(handleUserProfile, { userAuth: user, additionalData });
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      }),
    );
  } catch (error) {
    console.log(error);
  }
}

export function* emailSignIn({ payload: { email, password } }: AnyAction) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    console.log(error);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSaga() {
  yield all([call(onEmailSignInStart)]);
}
