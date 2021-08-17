import { userTypes } from './user.types';

export const emailSignInStart = (useCredentials: any) => ({
  type: 'EMAIL_SIGN_IN_START',
  payload: useCredentials,
});

export const signInSuccess = (user: any) => {
  return { type: userTypes.SIGN_IN_SUCCESS, payload: user };
};

export const checkUserSession = () => {
  return { type: userTypes.CHECK_USER_SESSION };
};

export const signOutUserStart = () => {
  return { type: userTypes.SIGN_OUT_USER_START };
};

export const signOutUserSuccess = () => {
  return { type: userTypes.SIGN_OUT_USER_SUCCESS };
};