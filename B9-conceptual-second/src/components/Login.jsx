import { useContext, useRef } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const { singInUser, googleLogin } = useContext(AuthContext);
  const emailRef = useRef(null);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    singInUser(data.email, data.password).then((result) => {
      if (result.user.emailVerified) {
        alert("success");
      } else {
        alert("plese verify");
      }
      console.log(result.user);
    });
  };
  const handleForgotPassword = () => {
    console.log("aklad", emailRef.current.value);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  ref={emailRef}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <a onClick={handleForgotPassword}>Firget Password ?</a>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="">
              <button onClick={googleLogin}>Google login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
