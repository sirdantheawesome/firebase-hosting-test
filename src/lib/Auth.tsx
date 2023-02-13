import '@/app/_util/login/login.scss'
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { auth } from '@/firebase/firebase';

const Auth = () => {
  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult: any, redirectUrl: string) {
        console.log("authResult: " + authResult);
        console.log("redirectUrl:" + redirectUrl)
        return true;
      },
    },
    signInFlow: 'popup',
    signInSuccessUrl: '/_util/user-profile',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // tosUrl: '<your-tos-url>',
    // privacyPolicyUrl: '<your-privacy-policy-url>'
  };

  function openSignIn() {
    const ui = new firebaseui.auth.AuthUI(auth);
    ui.start(
      '#firebaseui-auth-container',
      uiConfig,
    );
  }
  return (
    <div className='login-page'>
      <h1>login</h1>
      <button onClick={openSignIn}>Sign in</button>
      <div id='firebaseui-auth-container'></div>
    </div>
  );
};

export default Auth;
