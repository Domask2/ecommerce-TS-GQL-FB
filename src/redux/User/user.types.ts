export enum userTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
}

interface FetchUserAction {
  type: userTypes.SET_CURRENT_USER | userTypes.SIGN_IN_SUCCESS;
  payload: any;
}

export type UserAction = FetchUserAction;


