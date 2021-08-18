import { userTypes, UserAction } from './user.types';

interface Iuser {
  id: string;
  createData: any;
  displayName: string;
  email: string;
}

type TInitialState = typeof initialState;
export type TUser = [] | null

const initialState = {
  currentUser: null as TUser,
  userErr: []
};

export const userReducer = (state = initialState, action: UserAction): TInitialState => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...initialState,
      };
    case userTypes.USER_ERROR:
      return {
        ...state,
        userErr: action.payload
      }

    default:
      return state;
  }
};
