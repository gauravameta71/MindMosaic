// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChS3XLK4mnliiBviUNbRzJmF3lnPjnd7Y",
  authDomain: "mm-auth-f8436.firebaseapp.com",
  projectId: "mm-auth-f8436",
  storageBucket: "mm-auth-f8436.appspot.com",
  messagingSenderId: "297131710506",
  appId: "1:297131710506:web:638f2996d6a32c101b4b53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};