import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Group312.png"; // ✅ Ensure the path is correct

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white px-6 py-3 shadow-none">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => handleNavigate("/")} className="cursor-pointer">
            <img src={logo} className="w-28 object-contain" alt="Logo" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6">
            <button
              onClick={() => handleNavigate("/choice")}
              className="text-sm font-medium text-gray-800 hover:text-blue-600"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate("/About")}
              className="text-sm font-medium text-gray-800 hover:text-blue-600"
            >
              About
            </button>
            <button
              onClick={() => handleNavigate("/Support")}
              className="text-sm font-medium text-gray-800 hover:text-blue-600"
            >
              Support
            </button>
            <button
              onClick={handleSignOut}
              className="text-sm font-medium text-red-600 hover:text-red-800"
            >
              Sign Out
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-black focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden mt-3 bg-white rounded-lg shadow p-4 space-y-3">
            <button
              onClick={() => handleNavigate("/choice")}
              className="block text-sm font-medium text-gray-800 hover:text-blue-600 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate("/About")}
              className="block text-sm font-medium text-gray-800 hover:text-blue-600 w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => handleNavigate("/Support")}
              className="block text-sm font-medium text-gray-800 hover:text-blue-600 w-full text-left"
            >
              Support
            </button>
            <button
              onClick={handleSignOut}
              className="block text-sm font-medium text-red-600 hover:text-red-800 w-full text-left"
            >
              Sign Out
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
