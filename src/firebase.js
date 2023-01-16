import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "murra-f7a86.firebaseapp.com",
  projectId: "murra-f7a86",
  storageBucket: "murra-f7a86.appspot.com",
  messagingSenderId: "672411266910",
  appId: "1:672411266910:web:c4d2397f7de88121db29cf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
