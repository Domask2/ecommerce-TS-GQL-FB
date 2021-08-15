export enum userTypes {

  EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR = 'SIGN_UP_ERROR',
  RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR',
  RESEY_AUTH_FORMS = 'RESEY_AUTH_FORMS',
  RESET_USER_STATE = 'RESET_USER_STATE',
}

interface FetchUserAction {
  type:
    | userTypes.SET_CURRENT_USER
    | userTypes.SIGN_IN_SUCCESS
    | userTypes.SIGN_UP_ERROR
    | userTypes.SIGN_UP_SUCCESS
    | userTypes.RESET_PASSWORD_SUCCESS
    | userTypes.RESET_PASSWORD_ERROR
    | userTypes.RESET_USER_STATE
    | userTypes.RESEY_AUTH_FORMS
    | userTypes.EMAIL_SIGN_IN_START
  payload: any;
}

export type UserAction = FetchUserAction;
