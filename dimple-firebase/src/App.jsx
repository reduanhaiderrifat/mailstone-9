import "./App.css";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState(null);
  const handleGooglesingin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggeduser = result.user;
        console.log(loggeduser);
        setUser(loggeduser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>firebase + React</h1>
      <button onClick={handleGooglesingin}>Google singin</button>
      {user && (
        <div className="card">
          <h4>User: {user.displayName}</h4>
        </div>
      )}
    </>
  );
}

export default App;
