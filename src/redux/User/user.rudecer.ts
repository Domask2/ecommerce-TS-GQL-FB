import { userTypes, UserAction } from './user.types';

interface Iuser {
  id: string;
  createData: any;
  displayName: string;
  email: string;
}
type TInitialState = typeof initialState;

const initialState = {
  setUser: [] as Array<Iuser>,
};

export const userReducer = (state = initialState, action: UserAction): TInitialState => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return { ...state, setUser: action.payload };
    default:
      return state;
  }
};
