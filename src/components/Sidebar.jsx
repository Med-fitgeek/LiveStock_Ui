import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdHealthAndSafety, MdNotifications, MdSupport, MdOutlinePets } from "react-icons/md";
import { GiSheep } from "react-icons/gi";

const Sidebar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed inset-y-0 left-0 bg-gray-800 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
        </Link>
        <button onClick={toggleMenu} className="text-white focus:outline-none md:hidden">
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
      <nav className="px-4 py-6">
        <button onClick={() => setActiveSection('dashboard')} className="flex items-center text-white py-2 hover:text-gray-300 w-full text-left">
          <AiFillHome className="mr-3" /> Dashboard
        </button>
        <button onClick={() => setActiveSection('animalManagement')} className="flex items-center text-white py-2 hover:text-gray-300 w-full text-left">
          <GiSheep className="mr-3" /> Gestion des Animaux
        </button>
        <button onClick={() => setActiveSection('healthManagement')} className="flex items-center text-white py-2 hover:text-gray-300 w-full text-left">
          <MdHealthAndSafety className="mr-3" /> Santé Animale
        </button>
        <button onClick={() => setActiveSection('reproductionManagement')} className="flex items-center text-white py-2 hover:text-gray-300 w-full text-left">
          <MdOutlinePets className="mr-3" /> Reproduction
        </button>
        <button onClick={() => setActiveSection('notifications')} className="flex items-center text-white py-2 hover:text-gray-300 w-full text-left">
          <MdNotifications className="mr-3" /> Notifications
        </button>
        <button onClick={() => setActiveSection('support')} className="flex items-center text-white py-2 hover:text-gray-300 w-full text-left">
          <MdSupport className="mr-3" /> Support
        </button>
        <Link to="/login" className="flex items-center bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 mt-4">
          <FaUserAlt className="mr-3" /> Deconnexion
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
