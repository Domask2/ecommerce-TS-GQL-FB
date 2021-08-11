import { userTypes, UserAction } from './user.types';

interface Iuser {
  id: string;
  createData: any;
  displayName: string;
  email: string;
}
type TInitialState = typeof initialState;

const initialState = {
  currentUser: [] as Array<Iuser>,
  signInSuccess: false as boolean,
  signUpError: '' as string,
  signUpSuccess: false as boolean,
  resetPasswordSuccess: false as boolean,
  resetPasswordError: '' as string,
};

export const userReducer = (state = initialState, action: UserAction): TInitialState => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: action.payload,
      };
    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.payload,
      };
    case userTypes.SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
      };
    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload,
      };
    case userTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordError: action.payload,
      };
    case userTypes.RESET_USER_STATE:
      return {
        ...state,
        ...initialState
      };
    

    default:
      return state;
  }
};
