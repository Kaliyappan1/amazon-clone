import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl2MZq68P9nkI0CUHAWhDQI2QzrkaA1kA",
  authDomain: "amzon-clone-1.firebaseapp.com",
  projectId: "amzon-clone-1",
  storageBucket: "amzon-clone-1.appspot.com",
  messagingSenderId: "779827790274",
  appId: "1:779827790274:web:8e81e59fd855a5ba6e565b",
  measurementId: "G-R8DN2WY4RJ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
