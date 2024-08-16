// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Define the Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDZvTtxKgnEjnaPKGmfnqGGITNmQSXXtFA",
  authDomain: "chatter-app-f9255.firebaseapp.com",
  projectId: "chatter-app-f9255",
  storageBucket: "chatter-app-f9255.appspot.com",
  messagingSenderId: "251277526930",
  appId: "1:251277526930:web:25276eaa8cf7afe19aa34b",
  measurementId: "G-NN393VRKZ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);
