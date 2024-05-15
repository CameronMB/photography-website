// src/pages/PortfolioPage.js
import React from 'react';

const PortfolioPage = () => {
  const portfolioItems = [
    {
      title: 'Portfolio Item 1',
      description: 'Description for Portfolio Item 1',
      imgSrc: 'path/to/image1.jpg'
    },
    {
      title: 'Portfolio Item 2',
      description: 'Description for Portfolio Item 2',
      imgSrc: 'path/to/image2.jpg'
    },
    {
      title: 'Portfolio Item 3',
      description: 'Description for Portfolio Item 3',
      imgSrc: 'path/to/image3.jpg'
    },
    {
      title: 'Portfolio Item 4',
      description: 'Description for Portfolio Item 4',
      imgSrc: 'path/to/image4.jpg'
    },
    {
      title: 'Portfolio Item 5',
      description: 'Description for Portfolio Item 5',
      imgSrc: 'path/to/image5.jpg'
    },
    {
      title: 'Portfolio Item 6',
      description: 'Description for Portfolio Item 6',
      imgSrc: 'path/to/image6.jpg'
    }
  ];

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
      <p className="text-lg mb-6">Here are some of my favorite works:</p>
      <div className="portfolio-preview grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="portfolio-item bg-white p-4 rounded shadow relative group overflow-hidden"
          >
            <img src={item.imgSrc} alt={item.title} className="mb-4 rounded transition-transform transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
