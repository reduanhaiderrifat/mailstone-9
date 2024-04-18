import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const { singinUser, singInwiTHGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    singinUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogle = () => {
    singInwiTHGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.eeror(error);
      });
  };
  return (
    <div>
      <div className="hero h-[calc(100vh-68px)] bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>
              New this website? Please{" "}
              <Link className="btn btn-link" to="/register">
                Register
              </Link>
            </p>
            <p>
              <button onClick={handleGoogle} className="btn btn-ghost">
                Google
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
