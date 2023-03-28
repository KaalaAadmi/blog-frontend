// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEZB0vS01WuRLSB1z9cG8VX1-zXmZefkk",
  authDomain: "blog-aaa0e.firebaseapp.com",
  projectId: "blog-aaa0e",
  storageBucket: "blog-aaa0e.appspot.com",
  messagingSenderId: "889767688627",
  appId: "1:889767688627:web:dbb438d07c0da1021af3c6",
  measurementId: "G-NS19WS258B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;