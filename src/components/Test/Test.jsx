


import { Link } from "react-router-dom";

const Register = () => {
  
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Ut sunt non quam, culpa praesentium, 
            esse sapiente obcaecati ullam molestias excepturi
             quod magnam magni doloremque, neque unde sint fugit nobis tempora.</p>
        </div>
        <div className="card bg-orange-200 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
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
