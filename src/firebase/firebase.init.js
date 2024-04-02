// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0ojnBqzG80oEu8jayBLADFR8IPgdWftY",
  authDomain: "phm-49-simple-firebase.firebaseapp.com",
  projectId: "phm-49-simple-firebase",
  storageBucket: "phm-49-simple-firebase.appspot.com",
  messagingSenderId: "423043270633",
  appId: "1:423043270633:web:6706873c6ec335fcd12d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// exporting 
export default app;