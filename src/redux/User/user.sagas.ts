import { userTypes } from './user.types';
import { takeLatest, call, all, put } from '@redux-saga/core/effects';
import { auth, handleUserProfile, GoogleProvider, getCurrentUser } from './../../firebase/utils';
import { AnyAction } from 'redux';
import { signInSuccess, signOutUserSuccess } from './user.actions';

export function* getSnapshotFromUserAuth(user: any, additionalData={}): any {
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
    // console.log(error);
  }
}

export function* emailSignIn({ payload: { email, password } }: AnyAction) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    console.log(user)
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    // console.log(error);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
  try {
    
    const userAuth = getCurrentUser();
    if(!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);

  } catch(error) {
    console.log(error);
  }
  
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOutUserStart() {
  try {
    yield auth.signOut();
    yield put(signOutUserSuccess())
  } catch (error) {
    // console.log(error)
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUserStart)
}

export default function* userSaga() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
  ]);
}
