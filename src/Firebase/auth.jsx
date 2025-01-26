import { auth } from "./firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword as firebaseUpdatePassword,
  sendEmailVerification as firebaseSendEmailVerification,
} from "firebase/auth";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const signOut = async () => {
  await auth.signOut();
};

export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};

export const updatePassword = async (password) => {
  await firebaseUpdatePassword(auth.currentUser, password);
};

export const sendEmailVerification = async () => {
  await firebaseSendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
