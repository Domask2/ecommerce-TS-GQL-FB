import { userTypes } from './user.types';
import { TUser } from './user.rudecer';

interface IUserCreden {
  email: string,
  password?: string,
  displayName?: string,
  confirmPassword?:string
}
export type UserCreden = IUserCreden 

export const emailSignInStart = (useCredentials: UserCreden) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: useCredentials,
});

export const signInSuccess = (user: TUser) => {
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

export const signUpUserStart = (useCredentials:UserCreden) => {
  return { type:userTypes.SIGN_UP_USER_START, payload: useCredentials }
};

export const userError = (err:any) => {
  return { type: userTypes.USER_ERROR, payload: err }
};

export const resetPasswordStart = (useCredentials: UserCreden) => {
  return { type:userTypes.RESET_PASSWORD_START, payload:useCredentials}
}

export const resetPasswordSuccess = () => {
  return { type:userTypes.RESET_PASSWORD_SUCCESS, payload: true}
}

export const resetUserState = () => ({
  type: userTypes.RESET_USER_STATE
});

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START
});