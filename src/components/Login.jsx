import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Please log in to continue.
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 mt-2 text-sm border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 mt-2 text-sm border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Log In
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-black rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-400">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Icon"
            className="w-5 h-5 mr-3"
          />
          Login with Google
        </button>
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-black hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
