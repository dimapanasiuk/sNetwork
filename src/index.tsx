import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

import firebase from 'firebase/compat/app';
// import firebase from 'firebase/app';

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';

// import 'firebase/firestore';
import App from './App';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyA5surusYGKk6NezH3npuGicYq0PU9E6Z8',
  authDomain: 'mybabyboard.firebaseapp.com',
  projectId: 'mybabyboard',
  storageBucket: 'mybabyboard.appspot.com',
  messagingSenderId: '446327518254',
  appId: '1:446327518254:web:7c98ac17e2d6687a2c9bbf',
  measurementId: 'G-RFZ75HQHHN',
});

interface ContextState {
  auth: any;
}

export const Context = createContext<ContextState>({ auth: null });
const auth = getAuth(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Context.Provider value={{ auth }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
);
