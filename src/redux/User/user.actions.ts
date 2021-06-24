import { UserAction, userTypes } from "./user.types";

export const setCurrentUserAction = (user: any):UserAction  => {
  return {type: userTypes.SET_CURRENT_USER, payload: user}
}