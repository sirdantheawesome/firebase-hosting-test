import { Inter } from '@next/font/google'
import './page.scss'
import '@/standard-styles/main.scss'
import { db } from '@/firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'
import AddPageButton from '@/components/AddPageButton'

const inter = Inter({ subsets: ['latin'] })

const Home = async () => {

  let data = await getDocs(collection(db, 'Structure/page-layout/pages'))

  return (
    <main className="main">
      <div className="center">
        <div className="thirteen">
          <p>{data.docs[0].data().name}</p>
        </div>
        <AddPageButton />
      </div>
    </main>
  )
}

export default Home