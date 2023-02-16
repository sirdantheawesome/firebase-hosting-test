'use client'
import { auth } from '@/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import './header.scss'

const Header = () => {
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

  return (
    <div className='header'>
      <div className='header-first'>
      </div>
      <div className='header-middle'></div>
      <div className='header-last'>
        <a className='profile-link' href='/_util/user-profile'>


          {/* <h4>Email: {auth.currentUser ? auth.currentUser.email : ''}</h4> */}
          <h4>{auth.currentUser ? auth.currentUser.displayName : ''}</h4>
          {auth.currentUser?.photoURL ? <div className='profile-img-wrapper'><img src={auth.currentUser.photoURL} alt='user profile picture' /></div> : ''}
        </a>
      </div>
    </div>
  );
};

export default Header;