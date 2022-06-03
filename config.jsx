// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCshIg0jd19I_pNGlRc0qd9CIwZJExQUEg",
  authDomain: "job-coach-fab96.firebaseapp.com",
  projectId: "job-coach-fab96",
  storageBucket: "job-coach-fab96.appspot.com",
  messagingSenderId: "23091368720",
  appId: "1:23091368720:web:42f6a904c963d51e198b95",
  measurementId: "G-J8ZJBNGMLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const provider = new GoogleAuthProvider();