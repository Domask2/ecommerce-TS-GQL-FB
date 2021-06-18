import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);


export const handleUserProfile = async (userAuth:firebase.User | null) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, email} = userAuth;
    const timetamp = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timetamp,
      })
    } catch (error) {
      console.log(error)
    }
  }
  console.log(userRef)
  return userRef;
}
