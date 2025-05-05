import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="bg-white bg-opacity-90 shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Create an Account
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Photo URL"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition"
            >
              Register
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center">
            <span className="text-gray-600">Already have an account?</span>
            <Link
              to="/login"
              className="text-purple-700 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>
          </div>

          <div className="mt-6">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
              <FaGoogle className="text-red-500" />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
