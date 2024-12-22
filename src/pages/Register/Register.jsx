

import Lottie from "lottie-react";
// import React, { useContext } from 'react';
import registerLottieData from "../../assets/lottie/register.json";
// import AuthContext from '../../context/AuthContext/AuthContext';
// import SocialLogin from '../shared/SocialLogin';
import { Link } from "react-router-dom";

const Register = () => {
  // const { createUser } = useContext(AuthContext);

  // const handleRegister = e => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     console.log(email, password);

  //     // password validation:
  //     // show password validation error
  //     createUser(email, password)
  //         .then(result => {
  //             console.log(result.user)
  //         })
  //         .catch(error => {
  //             console.log(error.message)
  //         })

  // }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-orange-200 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
          {/* <form onSubmit={handleRegister} className="card-body"> */}
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="namel"
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
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="ml-4 mb-4 font-bold">
            Already have an account ? Please<Link  className="m-2 text-blue-500 font-bold"  to="/signin">Signin </Link>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Register;
