// src/components/NotFoundPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
    <h1 className="text-9xl font-bold text-gray-800">404</h1>
    <p className="text-2xl md:text-3xl font-light text-gray-600 mb-8">
      Oops! Page not found.
    </p>
    <Link
      to="/sing-in"
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Go Home
    </Link>
  </div>
);

export default NotFoundPage;
