import { firebase } from '@/firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './profile.scss'

const profile = () => {
  const auth = getAuth(firebase)
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
    }
  });
  if (user) {
    console.log(user)
  } else {
    // console.log("no currently signed in user")
  }
  return (
    <div className='profile-page'>
      <h1>Profile Page</h1>
      <h2>Current user:</h2>
    </div>
  );
};

export default profile;
