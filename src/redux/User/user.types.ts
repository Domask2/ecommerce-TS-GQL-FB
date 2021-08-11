export enum userTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR = 'SIGN_UP_ERROR',
}

interface FetchUserAction {
  type:
    | userTypes.SET_CURRENT_USER
    | userTypes.SIGN_IN_SUCCESS
    | userTypes.SIGN_UP_ERROR
    | userTypes.SIGN_UP_SUCCESS;
  payload: any;
}

export type UserAction = FetchUserAction;
