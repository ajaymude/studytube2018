import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-blue-600">MySite</a>
          </div>

          {/* Hamburger menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

          {/* Links for desktop */}
          <div className="hidden sm:flex sm:items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>

      {/* Links for mobile */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4">
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Services</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
