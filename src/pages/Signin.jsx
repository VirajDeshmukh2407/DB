import React, { useState } from "react";
import main_img from "../assests/main_image.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Oauth from "../components/Oauth.jsx";
function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email | !password) {
      toast.error("all fields are required");
    }

    const user = { email, password };

    try {
      const res = await axios.post("http://localhost:5000/api/loginAuth", user);
      toast.success("Login successfull");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("invalid credentails");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-slate-950 ">
      <div className="bg-transparent p-8 rounded-lg shadow-md shadow-gray-500 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2 text-teal-200">Sign In</h1>
          <p className="text-teal-200 text-sm">Welcome back!</p>
        </div>

        <div className="flex justify-center mb-6">
          <img
            className="w-1/2 md:w-1/3 rounded-lg shadow-md"
            src={main_img}
            alt="Main"
          />
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            className="text-gray-100 hover:border-teal-100 hover:cursor-pointer bg-transparent w-full p-4 border border-teal-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="text-gray-100 hover:border-teal-100 hover:cursor-pointer bg-transparent w-full p-4 border border-teal-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <div className="flex justify-between items-center text-sm px-1 ">
            <span className="text-gray-400 mx-2">
              Don't have an account?{" "}
              <Link
                to="/sign_up"
                className="text-teal-500 hover:text-teal-600 "
              >
                Sign up
              </Link>
            </span>
            <Link
              to="/forgot_pass"
              className="text-teal-500 hover:text-teal-600"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-teal-700 text-gray-100 rounded-full hover:bg-teal-800 transition-colors"
          >
            Login
          </button>

          <div className="flex items-center justify-center space-x-2 ">
            <span className="text-center text-gray-500">OR</span>
          </div>
          <Oauth />
        </form>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
}

export default Signin;
