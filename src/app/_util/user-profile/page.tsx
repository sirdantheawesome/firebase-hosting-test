'use client'
import { auth, firebase } from '@/firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import './profile.scss'

const Profile = () => {
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
    <div className='profile-page'>
      <div className='left-column'>
        {auth.currentUser?.photoURL ? <div className='profile-img-wrapper'><img src={auth.currentUser.photoURL} alt='user profile picture' /></div> : ''}
        <h1>{auth.currentUser ? auth.currentUser.displayName : ''}</h1>
        <h1>{auth.currentUser ? auth.currentUser.email : ''}</h1>
      </div>
      <div className='right-column'>
        <p>text description</p>
      </div>
    </div>
  );
};

export default Profile;
