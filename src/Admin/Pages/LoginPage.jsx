import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import backgroundImage from '../pics/bg.png';

function LoginPage({ setIsConnected }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add the logic for validating the admin credentials.
    // For simplicity, we'll assume the login is successful.
    if (email === "admin@gmail.com" && password === "admin123") {
      // Set isConnected to true and save to localStorage
      setIsConnected(true);
      localStorage.setItem("isConnected", "true");
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-customBlue">
          Admin Login
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"} // Toggle input type based on state
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              style={{ top: '70%', transform: 'translateY(-50%)' }} // Center vertically
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              style={{
                backgroundColor: '#93C2E5',
                borderColor: '#93C2E5',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#7AB0E0'} // Lighter shade for hover
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#93C2E5'} // Original color
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;