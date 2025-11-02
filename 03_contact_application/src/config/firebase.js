// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrKqZJegI5SiSQgPm78l2ysWblee71-mo",
  authDomain: "vite-contact-f3f20.firebaseapp.com",
  projectId: "vite-contact-f3f20",
  storageBucket: "vite-contact-f3f20.firebasestorage.app",
  messagingSenderId: "198570226115",
  appId: "1:198570226115:web:3ebafea54cdd0cb9c9cd76",
  measurementId: "G-EB5N072CJB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);