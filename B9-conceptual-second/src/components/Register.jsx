import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  const { createUser, updateUSer } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password != data.confirmPassword) {
      setError("password did not match");
      return;
    }
    createUser(data.email, data.password, data.name)
      .then((result) => {
        updateUSer(data.name);
        console.log(result.user);
        sendEmailVerification(result.user).then(() => {
          alert("pleace check your email");
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
                <span className="text-red-500">{error.split(":")[1]}</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  {...register("password", { required: true })}
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm-password"
                  name="confirmPassword"
                  {...register("confirmPassword", { required: true })}
                  className="input input-bordered"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">This field is required</span>
                )}
                <span className="text-red-500">{error}</span>
              </div>
              <p>
                Have an account? <Link to="/login">Login</Link>
              </p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
