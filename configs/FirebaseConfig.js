// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp3tXtp3_BDfN9K1m42Z_e0ukSwqcMDrE",
  authDomain: "car-spotter-el.firebaseapp.com",
  projectId: "car-spotter-el",
  storageBucket: "car-spotter-el.firebasestorage.app",
  messagingSenderId: "22822151193",
  appId: "1:22822151193:web:46eb2718a2e4ab71303688",
  measurementId: "G-ZVWHRRBPHB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
