import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googlePrivider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUSer = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googlePrivider);
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unscribe();
  }, []);
  const authInfo = {
    createUser,
    singInUser,
    logOut,
    googleLogin,
    user,
    updateUSer,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
