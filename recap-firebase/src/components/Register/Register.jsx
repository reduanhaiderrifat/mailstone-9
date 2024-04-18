import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";

const Register = () => {
  const { register, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const Cpassword = e.target.Cpassword.value;
    // console.log(name, email, password, Cpassword, photo);

    if (password.length < 6) {
      setError("please enter minimum 6 character password");
      return;
    }
    if (password !== Cpassword) {
      setError("Password did not match");
      return;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      setError(
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character (@$!%*?&), and be at least 6 characters long."
      );
    }
    setError("");

    register(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message.split("/")[1]);
      });
  };
  return (
    <div className="w-1/2 mx-auto border border-red-600 rounded-lg p-4 ">
      <form onSubmit={handleRegister} className=" space-y-3">
        <div className="">
          <p>Name</p>
          <input
            type="text"
            placeholder="your name"
            className="input input-bordered w-full"
            name="name"
            id=""
          />
        </div>
        <div className="">
          <p>Photo</p>
          <input
            type="photo"
            placeholder="your photo"
            className="input input-bordered w-full"
            name="photo"
            id=""
          />
        </div>
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
        <div className="">
          <p>Confirm Password</p>
          <input
            type="password"
            placeholder="comform password"
            className="input input-bordered w-full"
            name="Cpassword"
            id=""
          />
          {error && <small className="text-red-500">{error}</small>}
        </div>
        <button className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
