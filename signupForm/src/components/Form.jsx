import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../api/api";

const Form = () => {
  const [inputValue, setInputvalue] = useState({});
  const navigate = useNavigate();
  const handleInput = (e) => {
    setInputvalue({ ...inputValue, [e.target.name]: e.target.value });
    // console.log(inputValue);
  };
  const addUserDetails = async (e) => {
    e.preventDefault();
    await addUser(inputValue);
    setTimeout(() => {
      navigate("/login");
    }, 6000);
  };
  return (
    <>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <h3 className="text-4xl font-bold text-sky-400">Sign up</h3>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-700"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  onChange={(e) => handleInput(e)}
                  className="block w-full mt-1 border-sky-500 rounded-md"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  onChange={(e) => handleInput(e)}
                  className="block w-full mt-1 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-700"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  onChange={(e) => handleInput(e)}
                  className="block w-full mt-1 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-zinc-700 "
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  required
                  onChange={(e) => handleInput(e)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
            {/* <a href="#" className="text-xs text-red-500 hover:underline">
              Forget Password?
            </a> */}
            <div className="flex items-center mt-4">
              <button
                onClick={(e) => addUserDetails(e)}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-400 rounded-md hover:bg-sky-500 focus:outline-none focus:bg-sky-600"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link to="/login" className="text-sky-600 hover:underline">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
