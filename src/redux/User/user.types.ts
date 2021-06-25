export enum userTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

interface FetchUserAction {
  type: userTypes.SET_CURRENT_USER;
  payload: any;
}

export type UserAction = FetchUserAction;
