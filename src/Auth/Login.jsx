import React, { use } from "react";
import { Link,  useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {

  const {loginUser , singInWithGoogle} = use(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    // 
    loginUser(email , password).then(result => {
      console.log(result);
      toast("Logged in successfully")
      navigate(`${location ? location.state : '/'}`)
      
      
    }).catch(error => {
      console.log(error);
      toast(error.message)
      
    })

  }

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    singInWithGoogle(provider).then(result => {
      console.log(result);
      toast("Logged in successfully")
      navigate('/')
      
    }).catch(error => {
      console.log(error);
      toast(error.message)
      
    })
  }
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
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Log In
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
            <Link to={'/login/register'}
        
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
