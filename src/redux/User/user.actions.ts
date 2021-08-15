import { UserAction, userTypes } from "./user.types";
import { auth, handleUserProfile, GoogleProvider } from "./../../firebase/utils";


export const emailSignInStart = (useCredentials:any) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: useCredentials
});


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

export const resetPasswordSuccess = (success: boolean) => {
  return { type: userTypes.RESET_PASSWORD_SUCCESS, payload: success };
};

export const resetPasswordError = (error: string) => {
  return { type: userTypes.RESET_PASSWORD_ERROR, payload: error };
};

export const resetUserState = () => {
  return {type: userTypes.RESET_USER_STATE}
}

export const resetAllAuthForms = () => {
  return {type: userTypes.RESEY_AUTH_FORMS}
}

export const signInUser =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch(signInSuccess(true));
    } catch (error) {
      console.log(error);
    }
  };

export const signUpUser =
  (
    displayName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) =>
  async (dispatch: any) => {
    if (password !== confirmPassword) {
      dispatch(signUpError("error confirm password"));
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await handleUserProfile(user, displayName);

      dispatch(signUpSuccess(true));
    } catch (err) {
      console.log(err);
    }
  };

export const resetPassword = (email: string) => async (dispatch: any) => {
  const config = {
    url: "http://localhost:3000/login",
  };

  try {
    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        dispatch(resetPasswordSuccess(true));
      })
      .catch(() => {
        dispatch(resetPasswordError("Email not found. Please try again"));
      });
  } catch (error) {
    console.log(error);
  }
};

export const signInWithGoogle = () => async (dispatch:any) => {
  try {
    await auth.signInWithPopup(GoogleProvider)
      .then (() => {
        dispatch(signInSuccess(true));
      })
  }catch (error){
    console.log(error)
  }
  
};

