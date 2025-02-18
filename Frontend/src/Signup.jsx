import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
function Signup() {
  const [username, setname] = useState("");
  const [passwords, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handle = async (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    try {
      const response = await fetch(`${BASE_URL}/api/flashcard/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username,email, passwords }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Data inserted");
        navigate("/login"); // Navigate to the login page
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong during signup!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>
        <form onSubmit={handle} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-2">Enter Userid</label>
            <input
              value={username}
              type="text"
              onChange={(e) => setname(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Enter Email</label>
            <input
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Enter Password</label>
            <input
              value={passwords}
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your password"/>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => navigate("/first")}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
