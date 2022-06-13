import React, { useContext } from 'react';
// import firebase from 'firebase/compat/app';

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';

import { Context } from '../../index';

const Login:React.FC = () => {
  const { auth } = useContext(Context);

  const login = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const googleProvider = new GoogleAuthProvider();

    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;

    console.log(user);
  };

  return (
    <>
      <button type="button" onClick={login}>login button</button>
      Login
    </>
  );
};

export default Login;
