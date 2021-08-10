import { UserAction, userTypes } from "./user.types";
import { auth } from './../../firebase/utils';


export const setCurrentUserAction = (user: any):UserAction  => {
  return {type: userTypes.SET_CURRENT_USER, payload: user}
}

export const signInSuccess = (boll: boolean)  => {
  return {type: userTypes.SIGN_IN_SUCCESS, payload: boll}
}

export async function signInUser(email:string, password:string) {
    try {
      await auth.signInWithEmailAndPassword(email, password);

    } catch (error) {
      console.log(error);
    }
}