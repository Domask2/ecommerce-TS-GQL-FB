import { UserAction, SignInUser, userTypes } from "./user.types";

export const setCurrentUserAction = (user: any):UserAction  => {
  return {type: userTypes.SET_CURRENT_USER, payload: user}
}

export async function signInUser(email:any, password:any) {
    try {
      await auth.signInWithEmailAndPassword(email, password);

    } catch (error) {
      console.log(error);
    }
}