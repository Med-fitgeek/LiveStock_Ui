import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute w-full z-10 top-0 bg-transparent">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-white font-bold text-2xl">
          <Link to="/"><img src="/images/logo.png" alt="Logo" className="w-12 h-12" /></Link>
        </div>
        <div className="hidden md:flex space-x-6 flex-1 justify-center">
          <Link to="/" className="text-white hover:text-gray-300">Accueil</Link>
          <Link to="/about" className="text-white hover:text-gray-300">À Propos</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          <Link to="/Faq" className="text-white hover:text-gray-300">Faq</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500">Connexion</Link>
          <Link to="/register" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500">Inscription</Link>
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
          <div className="flex flex-col items-center bg-gray-800 py-4">
            <Link to="/" className="text-white py-2 hover:text-gray-300">Accueil</Link>
            <Link to="/about" className="text-white py-2 hover:text-gray-300">À Propos</Link>
            <Link to="/contact" className="text-white py-2 hover:text-gray-300">Contact</Link>
            <Link to="/Faq" className="text-white py-2 hover:text-gray-300">Faq</Link>
            <Link to="/login" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 mt-2">Connexion</Link>
            <Link to="/register" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 mt-2">Inscription</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;