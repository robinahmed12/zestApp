import React, { useState } from "react";
import logo from "../../assets/Screenshot 2025-05-04 223150.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 bg-white  shadow-md dark:text-gray-800">
      <div className="container mx-auto  flex items-center justify-between h-16">
        <div>
          <img className="w-[150px]" src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li>
            <NavLink to="/" className="px-4 hover:text-violet-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className="px-4 hover:text-violet-600">
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="px-4 hover:text-violet-600">
              My Profile
            </NavLink>
          </li>
        </ul>

        <div className="hidden lg:flex">
          <button className="px-6 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition">
            Login
          </button>
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 px-4 space-y-2">
          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 rounded">
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
          <button className="w-full text-left px-4 py-2 bg-red-200 text-white rounded hover:bg-violet-700">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
