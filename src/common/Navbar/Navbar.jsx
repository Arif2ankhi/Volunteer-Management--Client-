

import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import Swal from "sweetalert2"; // Import SweetAlert2
import "../Navbar.css";
import AuthContext from "../../context/AuthContext/AuthContext";


const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  // State to handle dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function to change theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Side-effect to persist theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Apply dark mode class to the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Sign out function with SweetAlert
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Signed Out Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to sign out. Please try again!",
        });
        console.error("Failed to sign out", error);
      });
  };

 
  const links = (
    <>
      <li>
        <NavLink className="text-xl text-black font-bold" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className="text-xl text-black font-bold" to="/volunteerNeedPost">
          All Volunteers Need 
        </NavLink>
      </li>
      {/* <li>
        <NavLink className="text-xl text-black font-bold" to="/myVolunteerNeed">
          My Volunteer Need Post
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div className="navbar bg-cyan-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}

            <li>
              <NavLink className="text-xl text-black font-bold" to="/">
                My Profile
              </NavLink>
              <ul className="p-2">
                <li>
                  <NavLink className="text-xl text-blue-800 font-bold" to="/addVolunteer">
                    Add Volunteer Need Post
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-xl text-blue-800 font-bold" to="/manageMyPost">
                    Manage My Post
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-green-950 animate__animated animate__flip animate__slow animate__repeat 3 3">HelpNest</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}

          <li>
            <details>
              <summary>
                <NavLink className="text-xl text-black font-bold" to="/myProfile">
                  My Profile
                </NavLink>
              </summary>
              <ul className="p-2">
                <li>
                  <NavLink className="text-xl text-green-600 font-bold" to="/addVolunteer">
                    Add Volunteer Need Post
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-xl text-green-600 font-bold" to="/manageMyPost">
                    Manage My Post
                  </NavLink>
                </li>
                
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn">
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/signin">
              <button className="btn">Signin</button>
            </Link>
          </>
        )}

        {/* Theme Switch Button */}
        <button className="ml-4 p-2 rounded-full" onClick={toggleTheme}>
          {isDarkMode ? <FaSun size={20} className="text-yellow-500" /> : <FaMoon size={20} className="text-gray-800" />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;


