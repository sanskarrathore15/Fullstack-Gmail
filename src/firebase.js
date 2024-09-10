// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCpqo0Frz6bPgUDyrBX6fXuOj31x902B08",
  authDomain: "fullstack-g-mail-15.firebaseapp.com",
  projectId: "fullstack-g-mail-15",
  storageBucket: "fullstack-g-mail-15.appspot.com",
  messagingSenderId: "997723899957",
  appId: "1:997723899957:web:c98cd2442a6dbde876497c",
  measurementId: "G-FPN3BCEGNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();





