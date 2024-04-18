// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQe2J-KMiK48lEANa0rs1uWXGX5x-aOU0",
  authDomain: "agun-pani-second-f26ec.firebaseapp.com",
  projectId: "agun-pani-second-f26ec",
  storageBucket: "agun-pani-second-f26ec.appspot.com",
  messagingSenderId: "256466601099",
  appId: "1:256466601099:web:5565875f055838c385c08e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
