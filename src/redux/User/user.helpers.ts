import { auth } from './../../firebase/utils';

export const handleResetPasswordAPI = (email: string) => {
  const config = {
    url: 'http://localhost:3000/login',
  };

  return new Promise<void>((resolve, reject) => {
    auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        resolve();
      })
      .catch(() => {
        const err = ['Email not found. Please try again.'];
        reject(err);
      });
  });
};
