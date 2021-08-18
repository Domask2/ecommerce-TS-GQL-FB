export enum userTypes {
  EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  CHECK_USER_SESSION = 'CHECK_USER_SESSION',
  SIGN_OUT_USER_START = 'SIGN_OUT_USER_START',
  SIGN_OUT_USER_SUCCESS = 'SIGN_OUT_USER_SUCCESS',
  SIGN_UP_USER_START = 'SIGN_UP_USER_START',
  USER_ERROR = 'USER_ERROR',
}

interface FetchUserAction {
  type: 
     userTypes.SIGN_IN_SUCCESS
    | userTypes.SIGN_OUT_USER_SUCCESS
    | userTypes.USER_ERROR
  payload: any;
}

export type UserAction = FetchUserAction;
