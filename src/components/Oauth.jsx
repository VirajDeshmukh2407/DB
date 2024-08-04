import React from "react";
import { signInWithGoogle } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const ContinueWithGoogle = () => {
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("success");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error signing in with Google", error);
      toast.error("failed");
    }
  };

  return (
    <div>
      <button
        onClick={handleSignIn}
        className="mt-3 w-full flex items-center justify-center px-4 py-4 bg-red-700 text-gray-100 rounded-full hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
      >
        <svg
          className="w-6 h-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.7 0 6.8 1.3 9.4 3.4l7-6.8C35.8 2 30.2 0 24 0 14.6 0 6.6 5.3 2.5 13l7.9 6.2C12.2 13.3 17.6 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M46.3 24.5c0-1.6-.2-3.1-.5-4.5H24v9h12.7c-.6 3-2.4 5.5-5 7.2l7.8 6c4.6-4.2 7.3-10.3 7.3-17.7z"
          />
          <path
            fill="#FBBC05"
            d="M11.4 28.3c-1.1-3.3-1.1-6.8 0-10.1L3.5 12C-.5 18 0 25.8 3.5 31.9l7.9-6.2z"
          />
          <path
            fill="#4285F4"
            d="M24 48c6.5 0 12-2.1 16.1-5.6l-7.8-6c-2.2 1.5-4.9 2.4-8.3 2.4-6.4 0-11.8-4.3-13.7-10.2l-7.9 6.2C6.6 42.7 14.6 48 24 48z"
          />
        </svg>
        Continue with Google
      </button>
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
  );
};

export default ContinueWithGoogle;
