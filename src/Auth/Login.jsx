import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";

import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { loginUser, singInWithGoogle, setUser, passwordReset } =
    use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    //
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast("Logged in successfully");
        navigate(`${location?.state ?? "/"}`);
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    singInWithGoogle(provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast("Logged in successfully");
        navigate(`${location?.state ?? "/"}`);
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const emailRef = useRef();
  const handleReset = () => {
    const email = emailRef.current.value;

    passwordReset(email)
      .then(() => {
        toast("password reset email has sent");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-center text-purple-700">
            Welcome Back
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={`${showPassword ? "password" : "text"}`}
                  name="password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="••••••••"
                />

                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <FaEye className="absolute text-gray-700 right-2 bottom-3" />
                  ) : (
                    <FaEyeSlash className="absolute text-gray-700 right-2 bottom-3" />
                  )}
                </div>
              </div>
            </div>

            <div className="border-b border-neutral-400  border-double  ">
              <button
                onClick={handleReset}
                className="text-neutral-700 mb-1    text-sm"
              >
                Forget Password
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Log in
            </button>
          </form>

          <div className="flex items-center justify-center">
            <span className="text-gray-400">or</span>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 rounded-lg flex items-center justify-center space-x-2 transition duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="h-5 w-5"
            />
            <span>Login with Google</span>
          </button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to={"/login/register"}
              className="text-purple-600 hover:underline font-medium"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
