import './page.scss'
import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { db } from '@/firebase/firebase';
import ContainerTypes from '@/components/ContainerTypes';
import ContentTypes from '@/components/ContentTypes';

const Page = async (params: { params: { page: string }, searchParams: any }) => {

  const slugData = params.params.page
  const slug = "/" + slugData.toString().replaceAll(",", "/")

  const q = query(
    collection(db, "/Structure/page-layout/pages"),
    where("slug", "==", slug)
  );
  const page = await getDocs(q);

  return (
    <div className='main-content dev-mode'>
      <h1>From local:</h1>
      <h2>slug: {slug}</h2>
      <h1>From database:</h1>
      {page.size ?
        <>
          <h2>slug:
            {
              page.docs[0].data().slug
                ? page.docs[0].data().slug
                : 'no data'
            }
          </h2>
          <h2>name:
            {
              page.docs[0].data().name
                ? page.docs[0].data().name
                : 'no data'
            }
          </h2>
          <h2>undefined:
            {
              page.docs[0].data().undefined
                ? page.docs[0].data().undefined
                : 'no data'
            }
          </h2>
          <p>--------------</p>
          {
            page.docs[0].data().pageStructure[0]
              &&
              page.docs[0].data().pageStructure[0].containedArray[0]
              ?
              page.docs[0].data().pageStructure[0].containedArray.map((component: any, i: number) => {
                return (
                  component.structure == "container" ?
                    <ContainerTypes type={component.type} container={component} key={i} /> :
                    component.structure == "content" ?
                      <ContentTypes type={component.type} text={component.content} key={i} /> :
                      'Structure not recognised'
                )
              })
              :
              ''
          }

        </>
        : <h2>Error 404: Page not found</h2>}

    </div>
  );
};

export default Page;