import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy5yq9NJqTaH7njAvVMBmFbhEjnrClIt0",
  authDomain: "projetomeuslinksdev.firebaseapp.com",
  projectId: "projetomeuslinksdev",
  storageBucket: "projetomeuslinksdev.firebasestorage.app",
  messagingSenderId: "781697904647",
  appId: "1:781697904647:web:a263b9a301b74c9808baa2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };