// import Lottie from "lottie-react";
// // import React, { useContext } from 'react';
// import registerLottieData from "../../assets/lottie/register.json";
// // import AuthContext from '../../context/AuthContext/AuthContext';
// // import SocialLogin from '../shared/SocialLogin';
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Register = () => {
//   // const { createUser } = useContext(AuthContext);


//   const [success, setSuccess] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleRegister = e => {
//       e.preventDefault();
//       const form = e.target;
//       const email = form.email.value;
//       const password = form.password.value;
//       console.log(email, password);

//       // reset error message 

//       setErrorMessage("");
//       setSuccess(false);
  


//         // Password validation
//         if (password.length < 6) {
//           setErrorMessage("Password should be at least 6 characters long");
//           return;
//         }
    
//         const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  
    
//         if (!passwordRegex.test(password)) {
//           setErrorMessage(
//             "Password must have at least one uppercase letter, one lowercase letter and must be at least 6 characters long"
//           );


//       // password validation:
//       // show password validation error
//       // createUser(email, password)
//       //     .then(result => {
//       //         console.log(result.user)
//       //     })
//       //     .catch(error => {
//       //         console.log(error.message)
//       //     })

//   }

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left w-96">
//           <Lottie animationData={registerLottieData}></Lottie>
//         </div>
//         <div className="card bg-orange-200 w-full max-w-sm shrink-0 shadow-2xl">
//           <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
//           <form onSubmit={handleRegister} className="card-body">
//           {/* <form className="card-body"> */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="namel"
//                 placeholder="name"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Photo URL</span>
//               </label>
//               <input
//                 type="text"
//                 name="photo"
//                 placeholder="photo URL"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="password"
//                 className="input input-bordered"
//                 required
//               />

//             {/* password show/hide  */}

//             <button
//             onClick={() => setShowPassword(!showPassword)}
//             className="btn btn-xs absolute right-2 top-12"
//           >
//             {showPassword ? (
//               <FaEyeSlash className="text-2xl" />
//             ) : (
//               <FaEye className="text-2xl" />
//             )}
//           </button>
        

//             </div>
//             <div className="form-control mt-6">
//               <button className="btn btn-primary">Register</button>
//             </div>
//           </form>

//           {errorMessage && <p className="text-red-600">{errorMessage}</p>

// }

// {success && 
//   <p className="text-green-600 font- bold">
//     Registration successful. 
//   </p>
// }


//           <p className="ml-4 mb-4 font-bold">
//             Already have an account ? Please<Link  className="m-2 text-blue-500 font-bold"  to="/signin">Signin </Link>
//           </p>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import registerLottieData from "../../assets/lottie/register1.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthContext from "../../context/AuthContext/AuthContext";

const Register = () => {

  const {createUser} = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Reset messages
    setErrorMessage("");
    setSuccess(false);

    // Password validation
    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters long");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must have at least one uppercase letter, one lowercase letter and must be at least 6 characters long"
      );
      return;
    }

    // Placeholder createUser logic
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-orange-200 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
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
          {errorMessage && (
            <p className="text-red-600 mt-2">{errorMessage}</p>
          )}
          {success && (
            <p className="text-green-600 font-bold mt-2">
              Registration successful.
            </p>
          )}
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

