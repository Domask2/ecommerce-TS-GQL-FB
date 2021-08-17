import { userTypes, UserAction } from './user.types';

// interface Iuser {
//   id: string;
//   createData: any;
//   displayName: string;
//   email: string;
// }
type TInitialState = typeof initialState;

const initialState = {
  currentUser: null
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

    default:
      return state;
  }
};
