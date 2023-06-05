
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGmr4pCsfslhobkOZrDq2GusaTKhdSe8U",
  authDomain: "algorithmic-trading-bot-82237.firebaseapp.com",
  projectId: "algorithmic-trading-bot-82237",
  storageBucket: "algorithmic-trading-bot-82237.appspot.com",
  messagingSenderId: "953190836543",
  appId: "1:953190836543:web:3614169726cf329f2b0b8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
