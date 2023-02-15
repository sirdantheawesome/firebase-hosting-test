'use client'
import '@/app/_util/login/login.scss'
import 'firebaseui/dist/firebaseui.css'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { firebase } from '@/firebase/firebase';
import Image from 'next/image';
import { useEffect, useState } from 'react';


const Auth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebase);
  auth.languageCode = 'it';

  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
    })
  }, [])

  async function openSignIn() {
    console.log("logging in")
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = () => {
          if (credential) {
            return credential.accessToken;
          } else {
            return null
          }
        }
        // The signed-in user info.
        const user = result.user;
        console.log("user: " + user.email + ", token: " + token)
        return { user }
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error: any) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // return { errorCode, errorMessage, email, credential }
        // ...
      });
  }




  return (
    <div className='login-page'>
      <h1>login</h1>
      <div className='button-container'>

        <button onClick={() => {
          openSignIn();
        }}>Sign in with Google</button>
        <button onClick={() => {
          console.log(auth.currentUser)
        }}>Log current user data</button>
      </div>
      {

        <div className='user-info'>
          <h1>Email: {auth.currentUser ? auth.currentUser.email : ''}</h1>
          <h2>Name: {auth.currentUser ? auth.currentUser.displayName : ''}</h2>
          {auth.currentUser?.photoURL ? <img src={auth.currentUser.photoURL} alt='user profile picture' /> : ''}
          <h3>Feel like something is missing here? Like the users data? Check these out:</h3>
          <p><a href='https://stackoverflow.com/questions/64721014/why-is-my-firebase-authentication-display-name-not-getting-updated-properly-with#:~:text=1-,Answer,-Sorted%20by%3A' target='_blank' rel='noreferrer'>https://stackoverflow.com/questions/64721014/why-is-my-firebase-authentication-display-name-not-getting-updated-properly-with#:~:text=1-,Answer,-Sorted%20by%3A</a></p>
          <p><a href='https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data' target='_blank' rel='noreferrer'>https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data</a></p>
        </div>
      }
    </div>
  )
}

export default Auth;
