import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto mt-8 text-center px-4">
      <div className="hero bg-teal text-champagne py-16 px-8 mb-8">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Cassidy Sullivan Photography</h1>
        <p className="text-lg mb-6">
          Capturing moments from today, creating memories for a lifetime.
        </p>
        <div className="flex justify-center space-x-2 sm:space-x-4">
          <Link to="/portfolio" className="bg-dark-teal text-champagne py-2 px-3 sm:px-4 rounded hover:bg-teal hover:text-dark-teal transition duration-300">
            View Portfolio
          </Link>
          <Link to="/booking" className="bg-champagne text-dark-teal py-2 px-3 sm:px-4 rounded hover:bg-dark-teal hover:text-champagne transition duration-300">
            Book Now
          </Link>
        </div>
      </div>
      <div className="portfolio-preview grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="portfolio-item bg-white p-4 rounded shadow relative group overflow-hidden">
          <img src="images/equine/photo1.jpg" alt="Equine Portrait 1" className="mb-4 rounded transition-transform transform group-hover:scale-105" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-xl font-bold mb-2">Equine Portrait 1</h2>
              <p className="text-sm">Celebrating the beauty and majesty of equine companions.</p>
            </div>
          </div>
        </div>
        <div className="portfolio-item bg-white p-4 rounded shadow relative group overflow-hidden">
          <img src="images/equine/photo2.jpg" alt="Equine Group Portrait" className="mb-4 rounded transition-transform transform group-hover:scale-105" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-xl font-bold mb-2">Equine Group Portrait</h2>
              <p className="text-sm">Showcasing the bond between equine friends.</p>
            </div>
          </div>
        </div>
        <div className="portfolio-item bg-white p-4 rounded shadow relative group overflow-hidden">
          <img src="images/equine/photo3.jpeg" alt="Equine Portrait 2" className="mb-4 rounded transition-transform transform group-hover:scale-105" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-xl font-bold mb-2">Equine Portrait 2</h2>
              <p className="text-sm">Capturing the elegance and strength of equine companions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
