import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Guett Gui</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/animals" className="hover:underline">Animals</Link>
          <Link to="/notifications" className="hover:underline">Notifications</Link>
          <Link to="/support" className="hover:underline">Support</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center bg-green-600 py-4">
            <Link to="/dashboard" className="text-white py-2 hover:text-gray-300">Dashboard</Link>
            <Link to="/animals" className="text-white py-2 hover:text-gray-300">Animals</Link>
            <Link to="/notifications" className="text-white py-2 hover:text-gray-300">Notifications</Link>
            <Link to="/support" className="text-white py-2 hover:text-gray-300">Support</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;
