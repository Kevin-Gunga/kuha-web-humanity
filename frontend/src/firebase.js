// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB17r9E4xhBOe5x_mX5hpH1XDCz5qKaCBU",
  authDomain: "kisii-heart-association.firebaseapp.com",
  projectId: "kisii-heart-association",
  storageBucket: "kisii-heart-association.firebasestorage.app",
  messagingSenderId: "312296901735",
  appId: "1:312296901735:web:33cbe4154e5312cb9558c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc };