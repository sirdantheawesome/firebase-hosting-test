import { Inter } from '@next/font/google'
import './page.scss'
import { db } from '@/firebase/firebase'
import { addDoc, collection, documentId, getDoc, getDocs } from 'firebase/firestore'
import { Page } from '@/lib/interfaces'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  let loading = true
  let data = await getDocs(collection(db, 'Structure/page-layout/pages'))

  console.log("data is: " + data.docs[0].data().pageStructure[0].containedArray[0].type)

  async function addPage(pageData: Page) {
    try {
      const docRef = await addDoc(collection(db, 'Structure/page-layout/pages'), {
        pageData
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <main className="main">

      <div className="center">
        <div className="thirteen">
          <p>{data.docs[0].data().name}</p>
        </div>
      </div>

    </main>
  )
}
