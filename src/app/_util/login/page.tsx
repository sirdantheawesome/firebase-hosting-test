"use client"
import './login.scss'
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { auth } from '@/firebase/firebase';

const page = () => {

  function openSignIn() {
    const ui = new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      // Other config options...
    });
  }
  return (
    <div className='login-page'>
      <h1>login</h1>
      <button onClick={openSignIn}>Sign in</button>
      <div id='firebaseui-auth-container'></div>
    </div>
  );
};

export default page;
