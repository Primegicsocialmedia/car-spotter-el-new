// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbWUSYfQ5hzGFALnJA_1R0VNZnIf-KB9s",
  authDomain: "localautoconnect-daf74.firebaseapp.com",
  projectId: "localautoconnect-daf74",
  storageBucket: "localautoconnect-daf74.firebasestorage.app",
  messagingSenderId: "586578678664",
  appId: "1:586578678664:web:5068ab199e09395679e03d",
  measurementId: "G-NBHT04QKB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);