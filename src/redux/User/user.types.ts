interface Iuser {
  id: string;
  createData: any;
  displayName: string;
  email: string;
  userRoles: [string, string];
}

export type TUser = Iuser | null;

export interface IUserCreden {
  email: string;
  password?: string;
  displayName?: string;
  confirmPassword?: string;
}

export type UserCreden = IUserCreden;

export enum userTypes {
  EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  CHECK_USER_SESSION = 'CHECK_USER_SESSION',
  SIGN_OUT_USER_START = 'SIGN_OUT_USER_START',
  SIGN_OUT_USER_SUCCESS = 'SIGN_OUT_USER_SUCCESS',
  SIGN_UP_USER_START = 'SIGN_UP_USER_START',
  RESET_PASSWORD_START = 'RESET_PASSWORD_START',
  RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS',
  USER_ERROR = 'USER_ERROR',
  GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START',
  RESET_USER_STATE = 'RESET_USER_STATE',
}

interface FetchUserAction {
  type:
    | userTypes.SIGN_IN_SUCCESS
    | userTypes.SIGN_OUT_USER_SUCCESS
    | userTypes.USER_ERROR
    | userTypes.RESET_USER_STATE;
  payload: any;
}

export type UserAction = FetchUserAction;
