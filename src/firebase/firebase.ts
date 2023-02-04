// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeP_AqAFZh6GYX6axY11qqqGHxSjEtE1M",
  authDomain: "fir-next-test-39f23.firebaseapp.com",
  projectId: "fir-next-test-39f23",
  storageBucket: "fir-next-test-39f23.appspot.com",
  messagingSenderId: "1037117468391",
  appId: "1:1037117468391:web:1d87a257ec94e24d3e7c42",
  measurementId: "G-KC9FGM3WJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
  app,
  analytics
}