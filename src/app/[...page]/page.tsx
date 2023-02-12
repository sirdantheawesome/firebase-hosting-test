import './page.scss'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '@/firebase/firebase';

const Page = async (params: { params: { page: string }, searchParams: any }) => {

  const slugData = params.params.page
  const slug = "/" + slugData.toString().replaceAll(",", "/")

  const q = query(
    collection(db, "/Structure/page-layout/pages"),
    where("slug", "==", slug)
  );
  const page = await getDocs(q);

  console.log(page.size ? page.docs[0].data() : '')

  return (
    <div className='main-content dev-mode'>
      <h1>From local:</h1>
      <h2>slug: {slug}</h2>
      <h1>From database:</h1>
      {page.size ?
        <>
          <h2>slug: {page.docs[0].data().slug}</h2>
          <h2>name: {page.docs[0].data().name}</h2>
        </>
        : <h2>Error: No page data found</h2>}

    </div>
  );
};

export default Page;