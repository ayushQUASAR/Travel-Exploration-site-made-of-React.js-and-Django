
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjZWLngZo-mge27mYRYZRKcKLsx2ZOieU",
  authDomain: "booking-172b3.firebaseapp.com",
  projectId: "booking-172b3",
  storageBucket: "booking-172b3.appspot.com",
  messagingSenderId: "502630974888",
  appId: "1:502630974888:web:0c4db004f93f6a5a80899d",
  measurementId: "G-NJ8MWZ3GBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export { app, auth };
