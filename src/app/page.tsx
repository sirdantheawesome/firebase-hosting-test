import { Inter } from '@next/font/google'
import './page.scss'
import { db } from '@/firebase/firebase'
import { collection, documentId, getDoc, getDocs } from 'firebase/firestore'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  let loading = true
  let data = await getDocs(collection(db, 'Structure/page-layout/pages'))

  console.log("data is: " + data.docs[0].data().pageStructure[0].containedArray[0].type)

  return (
    <main className="main">
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <h1>DANI</h1>
          </a>
        </div>
      </div>

      <div className="center">
        <div className="thirteen">
          <p>{data.docs[0].data().name}</p>
        </div>
      </div>

      <div className="grid">
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="className">
            Docs <span>-&gt;</span>
          </h2>
          <p className="className">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="className">
            Templates <span>-&gt;</span>
          </h2>
          <p className="className">Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="className">
            Deploy <span>-&gt;</span>
          </h2>
          <p className="className">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
