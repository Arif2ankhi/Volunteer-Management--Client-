import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import registerLottieData from "../../assets/lottie/register1.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthContext from "../../context/AuthContext/AuthContext";
// import SocialHandle from "../../common/SocialHandle/SocialHandle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialHandle from "../../common/SocialHandle/SocialHandle";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least one uppercase letter, one lowercase letter and must be at least 6 characters long"
      );
      return;
    }

    // Placeholder createUser logic
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Registration successful!");
        setTimeout(() => navigate("/"), 3000); // Redirect after 3 seconds
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message.includes("auth/email-already-in-use")) {
          toast.error("Account with this email already exists.");
        } else {
          toast.error(error.message);
        }
      });
  };

  return (
    <div className="hero bg-base-100 min-h-screen">
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="light" 
      />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-orange-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold text-green-800">Register</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-2 top-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {/* Google log in  */}

          <div className="m-4 "> 
            <SocialHandle></SocialHandle>

            </div>
          <p className="ml-4 mb-4 font-bold">
            Already have an account? Please
            <Link className="m-2 text-blue-500 font-bold" to="/signin">
              Signin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;


