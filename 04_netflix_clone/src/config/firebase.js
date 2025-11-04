import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA0-aMyBkLN1ab7KJh7cgGcnAHZTdFEmmw",
  authDomain: "netflix-clone-f6248.firebaseapp.com",
  projectId: "netflix-clone-f6248",
  storageBucket: "netflix-clone-f6248.firebasestorage.app",
  messagingSenderId: "354708065819",
  appId: "1:354708065819:web:36afef1a224b8786bef2be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log("Error signing up:", error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Error logging in:", error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signup, login, logout };