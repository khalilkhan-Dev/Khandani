import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIdhKF1eIeurnremt1ebflIJhc7e7xNQ4",
  authDomain: "khandaniiii.firebaseapp.com",
  projectId: "khandaniiii",
  storageBucket: "khandaniiii.appspot.com",
  messagingSenderId: "88408836798",
  appId: "1:88408836798:web:726f6e41634f147643acef",
  measurementId: "G-JFLNTQ7F7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
