// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Header = () => {
  return (
    <header className="bg-dark-teal text-champagne py-6 flex justify-center items-center">
      <Link to="/" className="flex items-center mr-8">
        <img src={logo} alt="Cassidy Sullivan Photography Logo" className="w-16 h-16 mr-4" />
        <h1 className="text-2xl font-bold">Cassidy Sullivan Photography</h1>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-lg bg-teal text-champagne py-2 px-4 rounded hover:bg-dark-teal hover:text-champagne transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg bg-teal text-champagne py-2 px-4 rounded hover:bg-dark-teal hover:text-champagne transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg bg-teal text-champagne py-2 px-4 rounded hover:bg-dark-teal hover:text-champagne transition duration-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-lg bg-teal text-champagne py-2 px-4 rounded hover:bg-dark-teal hover:text-champagne transition duration-300">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/booking" className="text-lg bg-teal text-champagne py-2 px-4 rounded hover:bg-dark-teal hover:text-champagne transition duration-300">
              Book Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
