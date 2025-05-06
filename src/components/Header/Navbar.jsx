import React, { use, useState } from "react";
import logo from "../../assets/Screenshot 2025-05-04 223150.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser().then(() => {
      console.log("sign out successful");
    });
  };
  return (
    <header className="p-4 bg-white   shadow-md dark:text-gray-800">
      <div className="container  max-w-7xl mx-auto  flex items-center justify-between h-16">
        <div>
          <img className="w-[150px]" src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        {/* <ul className="hidden lg:flex space-x-6 items-center">
          <li>
            <NavLink
             to="/" className="px-4 hover:text-violet-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/apps"} className="px-4 hover:text-violet-600">
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="px-4 hover:text-violet-600">
              My Profile
            </NavLink>
          </li>
        </ul> */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 hover:text-violet-600 transition-colors duration-200 ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `px-4 hover:text-violet-600 transition-colors duration-200 ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `px-4 hover:text-violet-600 transition-colors duration-200 ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/*  */}
          {user ? (
            <div className="relative group">
              <img
                src={`${user ? user.photoURL : ""}`}
                alt="Profile"
                className="w-[60px] object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-white bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-full transition-opacity">
                <span className="text-red-400 text-lg font-semibold">
                  {`${user ? user.displayName : ""}`}
                </span>
              </div>
            </div>
          ) : (
            ""
          )}

          {/*  */}

          <div className="hidden lg:flex">
            {user ? (
              <div className="flex items-center gap-1">
                <Link
                  onClick={handleSignOut}
                  className="px-6 py-2 text-white rounded transition bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500"
                >
                  Log out
                </Link>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-8 py-2 text-white rounded transition bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 px-4 space-y-2">
            <NavLink
              to="/"
              className="block px-4 py-2 hover:bg-gray-100 rounded"
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className="block px-4 py-2 hover:bg-gray-100 rounded"
            >
              Apps
            </NavLink>
            <NavLink
              to="/profile"
              className="block px-4 py-2 hover:bg-gray-100 rounded"
            >
              My Profile
            </NavLink>
            {user ? (
              <Link
                onClick={handleSignOut}
                className="px-40 py-2 w-full bg-purple-200 text-white rounded hover:bg-violet-700 transition"
              >
                Sign out
              </Link>
            ) : (
              <Link
                to={"/login"}
                className="px-40 py-2 w-full bg-purple-200 text-white rounded hover:bg-violet-700 transition"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
