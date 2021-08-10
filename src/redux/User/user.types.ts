export enum userTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  SIGN_IN_USER = 'SIGN_IN_USER'
}

interface FetchUserAction {
  type: userTypes.SET_CURRENT_USER;
  payload: any;
}

export type UserAction = FetchUserAction;

interface ISignInUser {
  type: userTypes.SIGN_IN_USER;
  payload: any;
  email: any;
  password: any;
}

export type SignInUser = ISignInUser;
