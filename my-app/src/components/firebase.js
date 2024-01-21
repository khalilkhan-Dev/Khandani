import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyByO2rVSRkqgq5xK_qFDjkMpUhg8qg1vao",
  authDomain: "khandaani-2acab.firebaseapp.com",
  projectId: "khandaani-2acab",
  storageBucket: "khandaani-2acab.appspot.com",
  messagingSenderId: "380551121510",
  appId: "1:380551121510:web:3fb19f2a22d50a8aeabba7",
  measurementId: "G-L6PNMGFEB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

