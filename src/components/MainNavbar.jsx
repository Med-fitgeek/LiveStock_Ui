import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';

const MainNavbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-green-600 text-white px-4 py-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="focus:outline-none"
          >
            <FaCog className="text-white h-6 w-6" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
              <ul className="py-1">
                <li>
                  <Link
                    to="/change-password"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Changer de mot de passe
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Paramètres
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Se déconnecter
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
