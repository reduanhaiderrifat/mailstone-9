import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setuser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggInuser = result.user;
        setuser(loggInuser);
        console.log("User signed in:", loggInuser);
      })
      .catch((error) => {
        console.log("Error signing in:", error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setuser(null);
        console.log(result);
      })
      .catch((error) => {
        console.log("Error signing out:", error);
      });
  };
  const handlegithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loogInuser = result.user;
        setuser(loogInuser);
        console.log(loogInuser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Google LogOut</button>
      ) : (
        <div>
          <button onClick={handleSignIn}>Google Login</button>
          <button onClick={handlegithub}>github Login</button>
        </div>
      )}
      {user && (
        <div>
          <h2>user: {user?.displayName}</h2>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
