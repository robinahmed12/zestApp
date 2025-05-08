import React, { useContext, useState } from "react";
import logo from "../../assets/log2-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser().then(() => {
      toast("sign out successful");
    });
    setIsOpen(false);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white  shadow-md dark:text-gray-800">
      <div className="max-w-7xl mx-auto px-4 pb-5   sm:px-6 lg:px-8 flex  items-center justify-between h-16">
        <Link to="/">
          <img className="w-[190px]" src={logo} alt="Logo" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden text-lg md:flex space-x-6 items-center">
          {["/", "/apps", "/profile", "/developer"].map((path, i) => {
            const names = ["Home", "Apps", "My Profile", "Developers"];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `px-4 hover:text-violet-600 transition-colors duration-200 ${
                      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`
                  }
                >
                  {names[i]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {user && (
            <div className="relative group">
              <img
                src={user.photoURL || ""}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover border-2 border-purple-500"
              />
              <div className="absolute inset-0 bg-white bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-full transition-opacity">
                <span className="text-red-400 text-sm font-semibold text-center">
                  {user.displayName}
                </span>
              </div>
            </div>
          )}

          {user ? (
            <button
              onClick={handleSignOut}
              className="px-6 py-2 text-white text-lg rounded transition bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500"
            >
              Log out
            </button>
          ) : (
            <Link
              to="/login"
              className="px-6 py-2 text-white rounded transition bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden text-lg px-4 pb-4 space-y-2">
          {["/", "/apps", "/profile", "/developer"].map((path, i) => {
            const names = ["Home", "Apps", "My Profile", "Developers"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={handleNavClick}
                className="block px-4 py-2 rounded hover:bg-gray-100 transition"
              >
                {names[i]}
              </NavLink>
            );
          })}
          {user ? (
            <button
              onClick={handleSignOut}
              className="w-full text-left px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded hover:from-blue-500 hover:to-purple-500"
            >
              Sign out
            </button>
          ) : (
            <Link
              to="/login"
              onClick={handleNavClick}
              className="block px-4 text-lg py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded text-center hover:from-blue-500 hover:to-purple-500"
            >
              Login
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
