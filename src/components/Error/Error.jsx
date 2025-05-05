import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center  text-white p-4">
        <div className="text-center max-w-md
         bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 
          bg-opacity-10 backdrop-blur-sm rounded-2xl p-10 shadow-2xl">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>
          <button
            onClick={handleGoHome}
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-indigo-100 transition-all"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
