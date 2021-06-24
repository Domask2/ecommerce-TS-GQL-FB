import { userTypes, TodoState, UserAction } from "./user.types";

const INITAIL_STATE: TodoState = {
  currentUser: null
}

export const userReducer = (state=INITAIL_STATE, action: UserAction): TodoState => {
  switch(action.type) {
    case userTypes.SET_CURRENT_USER:
      return {...state, currentUser: action.payload}
    default:
      return state
  }
}

