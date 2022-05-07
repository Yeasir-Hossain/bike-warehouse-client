// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApoKQ7QWlSeWaO44GVKwYjzWCQa2vvjm8",
  authDomain: "bike-hub-b9899.firebaseapp.com",
  projectId: "bike-hub-b9899",
  storageBucket: "bike-hub-b9899.appspot.com",
  messagingSenderId: "405791405384",
  appId: "1:405791405384:web:4cc97dfd3022e16870af7d"
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
