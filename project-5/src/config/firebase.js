// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN7HCI__Z8CYZgoOBZ7ywpoCgehSCCG5E",
  authDomain: "vite-contact-59d8e.firebaseapp.com",
  projectId: "vite-contact-59d8e",
  storageBucket: "vite-contact-59d8e.firebasestorage.app",
  messagingSenderId: "375431928770",
  appId: "1:375431928770:web:e6751bf47ab9bb2e1b545b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);