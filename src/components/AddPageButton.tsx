"use client"

import { db } from "@/firebase/firebase";
import { Page } from "@/lib/interfaces";
import { addDoc, collection } from "firebase/firestore";

const AddPageButton = () => {

  async function addPage(pageData: Page) {
    try {
      const docRef = await addDoc(collection(db, 'Structure/page-layout/pages'),
        pageData
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <button
      className='web-button'
      onClick={() => {
        addPage({
          name: "Tommy",
          pageStructure: [],
          slug: "/tommy",
        })
      }}
    >
      Add website
    </button>
  );
};

export default AddPageButton;
