// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDglDXIP-DiHsH02Ta7ByCG-9_b7VNWBQA",
    authDomain: "ext-04-199af.firebaseapp.com",
    projectId: "ext-04-199af",
    storageBucket: "ext-04-199af.firebasestorage.app",
    messagingSenderId: "756471434174",
    appId: "1:756471434174:web:04a7f6bf3fdbfb584787ef",
    measurementId: "G-M042WH3NSB"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth =getAuth(app);

export { db, storage, auth };