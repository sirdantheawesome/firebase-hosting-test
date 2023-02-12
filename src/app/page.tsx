import { Inter } from '@next/font/google'
import './page.scss'
import { db } from '@/firebase/firebase'
import { addDoc, collection, documentId, getDoc, getDocs } from 'firebase/firestore'
import { Page } from '@/lib/interfaces'
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