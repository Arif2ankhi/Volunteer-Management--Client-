import Lottie from "lottie-react";
import logInLottieData from "../../assets/Lottie/signin2.json";
import SocialHandle from "../../common/SocialHandle/SocialHandle";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toast styles
import axios from "axios";

const SignIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 
  const location = useLocation();
  console.log('in sign in page', location);
  const from = location.state || '/';

  // Sign-in handler (email/password)
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);

    signInUser(email, password)
      .then((result) => {
        console.log("sign in", result.user.email);
        const user = {email: email}
        // axios functionality starts from here
        axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
        .then(res=>{
          console.log(res.data);
        })

        navigate(from);
        // SweetAlert for successful sign-in
        Swal.fire({
          icon: "success",
          title: "Sign In Successful!",
          text: "Welcome back!",
          showConfirmButton: false,
          timer: 1500,
        });

        // Redirect to home page after successful sign-in
        navigate("/"); 

        // clear form after successful login

        form.reset(); 
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Sign In Failed",
          text: "Invalid email or password. Please try again.",
        });
        setLoading(false);
      });
  };

  // Handle Google sign-in
  const handleGoogleSignIn = () => {
    setLoading(true);

    signInWithGoogle()
      .then((result) => {
        console.log("Google sign-in successful", result.user);
        Swal.fire({
          icon: "success",
          title: "Sign In Successful!",
          text: "Welcome back with Google!",
          showConfirmButton: false,
          timer: 1500,
        });

        // Redirect to home page after successful Google sign-in
        navigate("/"); // Redirect to home page
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Sign In Failed",
          text: error.message,
        });
        setLoading(false);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={logInLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Sign In!</h1>
          <form onSubmit={handleSignIn} className="card-body">
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
              <button className="btn btn-primary" disabled={loading}>
                Sign In
              </button>
            </div>
          </form>
          <p className="ml-4 mb-4 font-bold">
            New to this website? Please
            <Link className="m-2 text-red-500 font-bold" to="/register">
              Register
            </Link>
          </p>

          
          {/* Social Handle (Google) */}
          <SocialHandle />
        </div>
      </div>

      {/* ToastContainer for toasts */}
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
    </div>
  );
};

export default SignIn;











// import Lottie from "lottie-react";
// import logInLottieData from "../../assets/Lottie/signin2.json";
// import SocialHandle from "../../common/SocialHandle/SocialHandle";
// import { useContext, useState } from "react";
// import AuthContext from "../../context/AuthContext/AuthContext";
// import Swal from "sweetalert2";
// import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
// import { ToastContainer } from "react-toastify"; // Import ToastContainer
// import "react-toastify/dist/ReactToastify.css"; // Import Toast styles

// const SignIn = () => {
//   const { signInUser, signInWithGoogle } = useContext(AuthContext);
//   const [loading, setLoading] = useState(false); 
//   const navigate = useNavigate(); 
//   const location = useLocation();
//   console.log('in sign in page', location);
//   const from = location.state || '/';

//   // Sign-in handler (email/password)
//   const handleSignIn = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     setLoading(true);

//     signInUser(email, password)
//       .then((result) => {
//         console.log("sign in", result.user);
//         navigate(from);
//         // SweetAlert for successful sign-in
//         Swal.fire({
//           icon: "success",
//           title: "Sign In Successful!",
//           text: "Welcome back!",
//           showConfirmButton: false,
//           timer: 1500,
//         });

//         // Redirect to home page after successful sign-in
//         navigate("/"); // Redirect to home page

//         form.reset(); // Clear the form after successful sign-in
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         Swal.fire({
//           icon: "error",
//           title: "Sign In Failed",
//           text: "Invalid email or password. Please try again.",
//         });
//         setLoading(false);
//       });
//   };

//   // Handle Google sign-in
//   const handleGoogleSignIn = () => {
//     setLoading(true);

//     signInWithGoogle()
//       .then((result) => {
//         console.log("Google sign-in successful", result.user);
//         Swal.fire({
//           icon: "success",
//           title: "Sign In Successful!",
//           text: "Welcome back with Google!",
//           showConfirmButton: false,
//           timer: 1500,
//         });

//         // Redirect to home page after successful Google sign-in
//         navigate("/"); // Redirect to home page
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         Swal.fire({
//           icon: "error",
//           title: "Sign In Failed",
//           text: error.message,
//         });
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left">
//           <Lottie animationData={logInLottieData}></Lottie>
//         </div>
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <h1 className="ml-8 mt-4 text-5xl font-bold">Sign In!</h1>
//           <form onSubmit={handleSignIn} className="card-body">
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
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control mt-6">
//               <button className="btn btn-primary" disabled={loading}>
//                 Sign In
//               </button>
//             </div>
//           </form>
//           <p className="ml-4 mb-4 font-bold">
//             New to this website? Please
//             <Link className="m-2 text-red-500 font-bold" to="/register">
//               Register
//             </Link>
//           </p>

          
//           {/* Social Handle (Google) */}
//           <SocialHandle />
//         </div>
//       </div>

//       {/* ToastContainer for toasts */}
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </div>
//   );
// };

// export default SignIn;


