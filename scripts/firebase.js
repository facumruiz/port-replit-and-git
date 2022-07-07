// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQCL2N7SmEltWLqyF4vY9ah8svngqbx64",
  authDomain: "portfolio-38c55.firebaseapp.com",
  projectId: "portfolio-38c55",
  storageBucket: "portfolio-38c55.appspot.com",
  messagingSenderId: "57254045557",
  appId: "1:57254045557:web:8e90288dc336004a10953c",
  measurementId: "G-T0T5WNMPSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);