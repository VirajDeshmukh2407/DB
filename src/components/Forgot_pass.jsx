import React, { useState } from "react";
import main_img from "../assests/main_image.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Forgot_pass() {
  const [email, setMail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/resetPassword", {
        email,
      });
      toast.success("password reset email sent");
      setTimeout(() => {
        navigate("/sign_in");
      }, 2000);
    } catch (error) {
      console.log(error.message);
      toast.error("email does not exist");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-slate-950">
      <div className="bg-transparent  p-8 rounded-lg shadow-md shadow-gray-500 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2 text-teal-200">
            Forgot Password
          </h1>
          <p className="text-teal-100 dark:text-gray-300">
            We'll help you reset it
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <img
            className="w-1/2 md:w-1/3 rounded-lg shadow-md"
            src={main_img}
            alt="Main"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="text-gray-100 bg-transparent w-full p-4 border border-teal-300 rounded-md focus:ring-2 hover:border-teal-100 hover:cursor-pointer focus:ring-teal-400 focus:border-teal-400 "
            value={email}
            onChange={(e) => setMail(e.target.value)}
            required
          />

          <div className="flex justify-between items-center text-sm">
            <Link to="/sign_in" className="text-teal-500 hover:text-teal-700 ">
              Sign In Instead
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-teal-700 text-gray-100 rounded-full hover:bg-teal-800 transition-colors"
          >
            Send Password
          </button>
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

export default Forgot_pass;
