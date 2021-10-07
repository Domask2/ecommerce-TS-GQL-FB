import { userTypes, UserAction } from './user.types';
import { TUser } from './user.types';

type TInitialState = typeof initialState;

const initialState = {
  currentUser: null as TUser,
  userErr: [],
  resetPasswordSuccess: false as boolean,
};

export const userReducer = (state = initialState , action: UserAction): TInitialState => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErr: [],
      };
    case userTypes.SIGN_OUT_USER_SUCCESS:
    case userTypes.RESET_USER_STATE:
      return {
        ...state,
        ...initialState,
      };
    case userTypes.USER_ERROR:
      return {
        ...state,
        userErr: action.payload,
      };
    default:
      return state;
  }
};
