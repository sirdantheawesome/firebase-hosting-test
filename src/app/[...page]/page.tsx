import './page.scss'
import { collection, query, where } from "firebase/firestore";
import { db } from '@/firebase/firebase';

const Page = async (params: { params: { page: string }, searchParams: any }) => {

  const slugData = params.params.page
  const slug = slugData.toString().replaceAll(",", "/")

  const pagesRef = await collection(db, "pages");
  const q = await query(pagesRef, where("slug", "==", slug));

  console.log(q)

  return (
    <div className='main-content dev-mode'>
      <h1>slug: {slug}</h1>
    </div>
  );
};

export default Page;
