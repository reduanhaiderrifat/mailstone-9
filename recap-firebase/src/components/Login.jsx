import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password);
    e.target.reset();
    navigate("/");
  };
  return (
    <div className="w-1/2 mx-auto border border-red-600 rounded-lg p-4 ">
      <form onSubmit={handleLogin} className=" space-y-3">
        <div className="">
          <p>Email</p>
          <input
            type="email"
            placeholder="your email"
            className="input input-bordered w-full"
            name="email"
            id=""
          />
        </div>
        <div className="">
          <p>Password</p>
          <input
            type="password"
            placeholder="your password"
            className="input input-bordered w-full"
            name="password"
            id=""
          />
        </div>

        <button className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
};

export default Login;
