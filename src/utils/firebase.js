// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsgFfGEwhOfZMR8YHDG8JUvyvSjY8xyQM",
  authDomain: "netflix-2e3b8.firebaseapp.com",
  projectId: "netflix-2e3b8",
  storageBucket: "netflix-2e3b8.appspot.com",
  messagingSenderId: "918265407195",
  appId: "1:918265407195:web:e818cb141fedd2630a4efe",
  measurementId: "G-KEFP7PRHLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);