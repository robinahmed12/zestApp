import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, singInWithGoogle } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const RegExpLower = /[a-z]/;
    const RegExpUpper = /[A-Z]/;
    const RegExpLength = /^.{6,}$/;

    if (!RegExpLower.test(password)) {
      toast("Must have a lowercase letter in the password");
    } else if (!RegExpUpper.test(password)) {
      toast("Must have an uppercase letter in the password");
    } else if (!RegExpLength.test(password)) {
      toast("Password must be at least 6 characters long");
    }

    //
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();

    singInWithGoogle(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="bg-white bg-opacity-90 shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Create an Account
          </h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
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
            <button
              onClick={handleGoogle}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <img
                className="
              h-5 w-5
              "
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt=""
              />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
