// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkL5QlYzbf_49qbgmTzTqGF9hyG50hZ2Q",
  authDomain: "oauth-cc382.firebaseapp.com",
  projectId: "oauth-cc382",
  storageBucket: "oauth-cc382.appspot.com",
  messagingSenderId: "175295182628",
  appId: "1:175295182628:web:2d23330cd8757e0b89a5b1",
  measurementId: "G-ZE446L6KBG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { auth, signInWithGoogle };
