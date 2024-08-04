import React, { useState } from "react";
import main_img from "../assests/main_image.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Oauth from "../components/Oauth.jsx";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    const user = { username, email, password };

    try {
      if (user) {
        toast.error("user already exists");
      }
      const res = await axios.post("http://localhost:5000/api/users", user);
      toast.success("User registered successfully");
      setTimeout(2000);
      navigate("/sign_in");
    } catch (err) {
      // toast.error("Failed to register user");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-slate-950 ">
      <div className="bg-transparent dark:bg-gray-800 p-8 rounded-xl shadow-md shadow-gray-500 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2 text-teal-200">Sign Up</h1>
          <p className="text-teal-100 dark:text-gray-300">Join us today!</p>
        </div>

        <div className="flex justify-center mb-6">
          <img className="w-1/2 md:w-1/3" src={main_img} alt="Main" />
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            className="text-gray-100 hover:border-teal-100 hover:cursor-pointer bg-transparent w-full p-4 border border-teal-200 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 dark:bg-gray-700 dark:border-gray-600"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="text-gray-100 hover:border-teal-100 hover:cursor-pointer bg-transparent w-full p-4 border border-teal-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="text-gray-100 hover:border-teal-100 hover:cursor-pointer bg-transparent w-full p-4 border border-teal-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-blue-400 "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400 dark:text-gray-300">
              Already a user?{" "}
              <Link to="/sign_in" className="text-teal-500 hover:text-teal-700">
                Login
              </Link>
            </span>
            <Link
              to="/forgot_pass"
              className="text-teal-500 hover:text-teal-700"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-teal-700 text-gray-100 rounded-full hover:bg-teal-800 transition-colors "
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-center space-x-2 mt-4">
          <span className="text-center text-gray-400 dark:text-gray-300">
            OR
          </span>
        </div>
        <Oauth />

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

export default Signup;
