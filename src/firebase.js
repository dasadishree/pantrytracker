// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCj8U8avClxIMU3MGAaoqlEWi7l07Ichw",
  authDomain: "pantrytracker-8658f.firebaseapp.com",
  projectId: "pantrytracker-8658f",
  storageBucket: "pantrytracker-8658f.appspot.com",
  messagingSenderId: "786109843070",
  appId: "1:786109843070:web:dd733778cc7330edf2fa2f",
  measurementId: "G-PXNMB2EK2X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};