import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (

        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">

        <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>

          
          {/* <Lottie animationData={registerLottieData }></Lottie> */}

        
        <div className="card bg-cyan-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-3xl ml-4 font-bold text-cyan-800 text-center">Register</h2>
        {/* <form onSubmit={handleRegister} className="card-body"> */}
        <form  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
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
              <span className="label-text font-bold">Photo URL</span>
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
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-bold ">Password</span>
            </label>
            <input
            //   type={showPassword ? "text" : "password"}
              type= "text" 
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {/* <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-2 top-12"
            >
              {showPassword ? (
                <FaEyeSlash className="text-2xl" />
              ) : (
                <FaEye className="text-2xl" />
              )}
            </button> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-xl font-bold">Sign Up</button>
          </div>
        </form>
        {/* {errorMessage && <p className="text-red-600">{errorMessage}</p>
  
        }
  
        {success && 
          <p className="text-green-600 font- bold">
            Registration successful. 
          </p>
        }
   */}
  <p className="ml-4 mb-4 font-bold">
              Already have an account ? Please<Link  className="m-2 text-blue-500 font-bold"  to="/signin">Sign In </Link>
            </p>
                  </div>
            </div>
      </div>
 </div>

    );
};

export default Register;