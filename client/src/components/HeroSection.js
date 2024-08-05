import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/equine/photo7.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-white text-4xl font-serif font-bold">Welcome to Cassidy Sullivan Photography</h2>
      </div>
    </div>
  );
};

export default HeroSection;