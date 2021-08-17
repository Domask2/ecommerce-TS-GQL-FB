import { userTypes } from './user.types';
// import { auth, handleUserProfile, GoogleProvider } from './../../firebase/utils';

export const emailSignInStart = (useCredentials: any) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: useCredentials,
});

export const signInSuccess = (user: any) => {
  return { type: userTypes.SIGN_IN_SUCCESS, payload: user };
};

export const checkUserSession = () => {
  return { type: userTypes.CHECK_USER_SESSION };
};