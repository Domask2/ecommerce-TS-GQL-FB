export enum userTypes  {
  SET_CURRENT_USER = 'SET_CURRENT_USER'
}

export interface TodoState {
  currentUser: null
}

interface FetchUserAction {
  type: userTypes.SET_CURRENT_USER;
  payload: any;
}

export type UserAction = FetchUserAction;