import {
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const facebookProvider = new FacebookAuthProvider();
  const [user, setUser] = useState(null);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  const AuthInfo = {
    register,
    login,
    setUser,
    logout,
    user,
  };
  useEffect(() => {
    const unsescribe = onAuthStateChanged(auth, (cuurentuser) => {
      if (cuurentuser) {
        setUser(cuurentuser);
      }
    });
    return () => unsescribe();
  }, []);
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
