import { UserAction, userTypes } from './user.types';
import { auth, handleUserProfile } from './../../firebase/utils';

export const setCurrentUserAction = (user: any): UserAction => {
  return { type: userTypes.SET_CURRENT_USER, payload: user };
};

export const signInSuccess = (success: boolean) => {
  return { type: userTypes.SIGN_IN_SUCCESS, payload: success };
};

export const signUpSuccess = (success: boolean) => {
  return { type: userTypes.SIGN_UP_ERROR, payload: success };
};

export const signUpError = (error: string) => {
  return { type: userTypes.SIGN_UP_ERROR, payload: error };
};

export const signInUser = (email: string, password: string) => async (dispatch: any) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    dispatch(signInSuccess(true));
  } catch (error) {
    console.log(error);
  }
};

export const signUpUser =
  (displayName: string, email: string, password: string, confirmPassword: string) =>
  async (dispatch: any) => {
    if (password !== confirmPassword) {
      dispatch(signUpError('error confirm password'));
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await handleUserProfile(user, displayName);

      dispatch(signUpSuccess(true));
    } catch (err) {
      console.log(err);
    }
  };
