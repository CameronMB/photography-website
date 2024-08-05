import React from 'react';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="portfolio-preview grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="portfolio-item bg-white p-4 rounded shadow relative group overflow-hidden">
          <div className="relative">
            <img src="images/equine/photo1.jpg" alt="Equine Portrait 1" className="w-full h-auto rounded transition-transform transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-2xl font-bold mb-2">Equine Portrait 1</h2>
                <p className="text-lg font-semibold text-white">A stunning portrait capturing the grace and beauty of a single horse.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-item bg-white p-4 rounded shadow relative group overflow-hidden">
          <div className="relative">
            <img src="images/equine/photo2.jpg" alt="Equine Group Portrait" className="w-full h-auto rounded transition-transform transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-2xl font-bold mb-2">Equine Group Portrait</h2>
                <p className="text-lg font-semibold text-white">A group portrait showcasing the diversity and camaraderie among horses.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-item bg-white p-4 rounded shadow relative group overflow-hidden">
          <div className="relative">
            <img src="images/equine/photo3.jpeg" alt="Equine Portrait 2" className="w-full h-auto rounded transition-transform transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-2xl font-bold mb-2">Equine Portrait 2</h2>
                <p className="text-lg font-semibold text-white">A powerful portrait highlighting the strength and elegance of a horse.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;