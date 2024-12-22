// import React from 'react';
// import { Link } from 'react-router-dom';
// // import Lottie from "lottie-react";

// const Signin = () => {

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//   }



//     return (
//         <div className="card bg-cyan-200 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
//       <div className="hero-content flex-col">
//         <div className="text-center lg:text-left">
//           <h1 className="text-5xl ml-4 font-bold text-cyan-800 text-center">
//             Signin
//           </h1>
//         </div>
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <form onSubmit={handleSignIn} className="card-body">
//           {/* <form className="card-body"> */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-bold">Email</span>
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
//                 <span className="label-text font-bold">Password</span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 className="input input-bordered"
//                 required
//               />

             
//             </div>
//             <div className="form-control mt-6">
//               <button className="btn btn-primary text-2xl font-bold mb-4">
//                 Signin
//               </button>
//               {/* <button
//                 onClick={handleGoogleSignIn}
//                 className="btn btn-primary  text-2xl font-bold mt-4"
//               >
//                  <FcGoogle /> Signin With Google
//               </button> */}
//               {/* </div> */}
//             </div>
//           </form>

//           {/* {success && <p className="text-green-600">Logged in successfully!</p>}
//           {logInError && <p className="text-red-600">{logInError}</p>} */}

//           <p className="ml-4 mb-4 font-bold">
//             New to this website ? please
//             <Link className="m-2 text-red-500 font-bold" to="/register">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
        
//     );
// };

// export default Signin;

import Lottie from "lottie-react";
import logInLottieData from "../../assets/Lottie/signin2.json";
// import SocialLogin from '../shared/SocialLogin';
import SocialHandle from "../../common/SocialHandle/SocialHandle";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';



const SignIn = () => {

  const { signInUser} = useContext(AuthContext);
    // const {signInUser} = useContext(AuthContext);
    // const location = useLocation();
    // // const navigate = useNavigate();
    // console.log('in signIn page', location);
    // // const from = location.state || '/;'

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log('sign in', result.user);
        })
            
        .catch(error => {
            console.log( error);
        });


}
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          
          <Lottie animationData={logInLottieData }></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className=" ml-8 mt-4 text-5xl font-bold">Log In!</h1>
          <form  onSubmit = {handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name= "email"
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
              <button className="btn btn-primary">Signin</button>
            </div>
          </form>
          <SocialHandle></SocialHandle>
        </div>
      </div>
    </div>
    );
};

export default SignIn;
