import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/api";
const Login = () => {
  const [inputValue, setInputvalue] = useState({});
  const handleInput = (e) => {
    setInputvalue({ ...inputValue, [e.target.name]: e.target.value });
    // console.log(inputValue);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(inputValue);
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-sky-400 ">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => handleInput(e)}
              className="block w-full px-4 py-2 mt-2 text-zinc-800 bg-white border rounded-md"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => handleInput(e)}
              className="block w-full px-4 py-2 mt-2 text-zinc-800 bg-white border rounded-md"
            />
          </div>
          {/* <a href="#" className="text-xs text-sky-400 hover:underline">
            Forget Password?
          </a> */}
          <div className="mt-6">
            <button
              onClick={(e) => handleLogin(e)}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-400 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link to="/" className="font-medium text-sky-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
