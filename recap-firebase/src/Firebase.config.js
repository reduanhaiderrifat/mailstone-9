// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBCYolKgaMd2XRA9eXBmL8SlTXkQeZhT8",
  authDomain: "recap-firebase-ef89d.firebaseapp.com",
  projectId: "recap-firebase-ef89d",
  storageBucket: "recap-firebase-ef89d.appspot.com",
  messagingSenderId: "1045894442493",
  appId: "1:1045894442493:web:fcb74ecfd419bd0b8fbd94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
