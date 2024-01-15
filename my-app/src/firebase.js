// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "@firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const firestore = getFirestore(app);