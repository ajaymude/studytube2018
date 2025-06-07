import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">YourAppName</div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2">
          <Link to="/" className="block text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/about" className="block text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/services" className="block text-gray-600 hover:text-gray-900">Services</Link>
          <Link to="/contact" className="block text-gray-600 hover:text-gray-900">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
