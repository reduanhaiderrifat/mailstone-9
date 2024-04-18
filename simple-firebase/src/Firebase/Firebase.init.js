import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCzgynVEljU8NUkDPirJVAefi4RUiF1kqw",
  authDomain: "simple-firebase-ca313.firebaseapp.com",
  projectId: "simple-firebase-ca313",
  storageBucket: "simple-firebase-ca313.appspot.com",
  messagingSenderId: "657742539073",
  appId: "1:657742539073:web:698d7292d6f58ce8b099c0",
  measurementId: "G-EPWMSJ8XH3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

export default app;
