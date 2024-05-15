// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-100">Cassidy Sullivan Photography</h1>
        <nav className="mt-2 md:mt-0 space-x-2 sm:space-x-4 flex flex-wrap justify-center">
          <Link to="/" className="bg-blue-500 text-white py-2 px-3 sm:px-4 rounded hover:bg-blue-700 transition duration-300">Home</Link>
          <Link to="/about" className="bg-blue-500 text-white py-2 px-3 sm:px-4 rounded hover:bg-blue-700 transition duration-300">About</Link>
          <Link to="/contact" className="bg-blue-500 text-white py-2 px-3 sm:px-4 rounded hover:bg-blue-700 transition duration-300">Contact</Link>
          <Link to="/portfolio" className="bg-blue-500 text-white py-2 px-3 sm:px-4 rounded hover:bg-blue-700 transition duration-300">Portfolio</Link>
          <Link to="/booking" className="bg-blue-500 text-white py-2 px-3 sm:px-4 rounded hover:bg-blue-700 transition duration-300">Book Now</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
