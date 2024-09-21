import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MainNavbar = ({ sections, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-600 text-white px-4 py-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Menu hamburger */}
        <div className="relative md:hidden">
          <button
            className="block text-white p-4 focus:outline-none"
            onClick={toggleMenu}
          >
            Menu
          </button>

          {/* Menu complet en version mobile */}
          <div className={`absolute top-0 right-0 mt-16 w-48 bg-green-600 text-white whitespace-nowrap ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="container mx-auto flex flex-col">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`px-4 py-2 ${section.id === setActiveSection ? 'bg-green-500' : 'bg-green-700'} hover:bg-green-500 focus:outline-none`}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMenuOpen(false); // Fermer le menu après avoir cliqué sur une section
                  }}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu complet en version desktop */}
        <div className="hidden md:flex">
          <div className="container mx-auto flex">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`px-4 py-2 ${section.id === setActiveSection ? 'bg-green-500' : 'bg-green-700'} hover:bg-green-500 focus:outline-none`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
