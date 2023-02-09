import { Inter } from '@next/font/google'
import './page.scss'
import { db } from '@/firebase/firebase'
import { addDoc, collection, documentId, getDoc, getDocs } from 'firebase/firestore'
import { Page } from '@/lib/interfaces'
import AddPageButton from '@/components/addPageButton'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  let loading = true
  let data = await getDocs(collection(db, 'Structure/page-layout/pages'))

  // console.log("data is: " + data.docs[0].data().pageStructure[0].containedArray[0].type)



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
