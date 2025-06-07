import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">YourAppName</h3>
          <p className="text-sm">© {new Date().getFullYear()} YourAppName. All rights reserved.</p>
        </div>
        <nav>
          <ul className="flex flex-col sm:flex-row gap-4 text-sm">
            <li>
              <a href="/" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">Contact</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">Terms</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white">Privacy</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
