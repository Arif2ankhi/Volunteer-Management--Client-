import React from 'react';
import { Link } from 'react-router-dom';
// import Lottie from "lottie-react";

const Signin = () => {

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  }



    return (
        <div className="card bg-cyan-200 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl ml-4 font-bold text-cyan-800 text-center">
            Signin
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
          {/* <form className="card-body"> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
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
                <span className="label-text font-bold">Password</span>
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
              <button className="btn btn-primary text-2xl font-bold mb-4">
                Signin
              </button>
              {/* <button
                onClick={handleGoogleSignIn}
                className="btn btn-primary  text-2xl font-bold mt-4"
              >
                 <FcGoogle /> Signin With Google
              </button> */}
              {/* </div> */}
            </div>
          </form>

          {/* {success && <p className="text-green-600">Logged in successfully!</p>}
          {logInError && <p className="text-red-600">{logInError}</p>} */}

          <p className="ml-4 mb-4 font-bold">
            New to this website ? please
            <Link className="m-2 text-red-500 font-bold" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
        
    );
};

export default Signin;
