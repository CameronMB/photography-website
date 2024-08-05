// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Header = () => {
  return (
    <header className="bg-white text-primary py-6">
      <div className="container mx-auto flex flex-col items-center">
        <Link to="/" className="flex items-center mb-6">
          <img src={logo} alt="Cassidy Sullivan Photography Logo" className="w-24 h-24 mr-3" />
          <h1 className="text-3xl font-serif font-bold text-primary">Cassidy Sullivan Photography</h1>
        </Link>
        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center space-x-4">
            {['Home', 'Investment', 'Portfolio', 'Client Galleries', 'FAQs', 'Calendar'].map((item) => (
              <li key={item} className="list-none">
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                  className="text-base font-sans text-primary py-2 px-3 hover:text-secondary transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          to="/booking"
          className="bg-secondary text-primary font-bold py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black"
        >
          Book a Session
        </Link>
      </div>
    </header>
  );
};

export default Header;