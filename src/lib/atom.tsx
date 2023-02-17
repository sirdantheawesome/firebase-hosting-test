import { atom } from 'recoil';

export const currentUserState = atom({
  key: 'currentUserState',
  default: {},
})

//const [currentUser, setCurrentUser] = useRecoilState(currentUserState)