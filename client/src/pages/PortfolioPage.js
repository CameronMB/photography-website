// src/pages/PortfolioPage.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const genres = {
  equine: '/images/equine/photo1.jpg',
  wedding: '/images/wedding/photo1.jpg',
  family: '/images/family/photo1.jpg',
  couples: '/images/couples/photo1.jpg',
  pets: '/images/pets/photo1.jpg',
  prom: '/images/prom/photo1.jpg',
  senior: '/images/senior/photo1.jpg',
};

const genreImages = {
  equine: [
    '/images/equine/photo1.jpg',
    '/images/equine/photo2.jpg',
    '/images/equine/photo3.jpeg',
    '/images/equine/photo4.jpeg',
    '/images/equine/photo5.jpg',
    '/images/equine/photo6.jpg',
    '/images/equine/photo7.jpg',
    '/images/equine/photo8.jpg',
    '/images/equine/photo9.jpg',
  ],
  couples: [
    '/images/couples/photo1.jpg',
    '/images/couples/photo2.jpg',
    '/images/couples/photo3.jpg',
  ],
  family: [
    '/images/family/photo1.jpg',
    '/images/family/photo2.jpg',
    '/images/family/photo3.jpg',
  ],
  pets: [
    '/images/pets/photo1.jpg',
    '/images/pets/photo2.jpg',
    '/images/pets/photo3.jpg',
  ],
  prom: [
    '/images/prom/photo1.jpg',
    '/images/prom/photo2.jpg',
    '/images/prom/photo3.jpg',
  ],
  senior: [
    '/images/senior/photo1.jpg',
    '/images/senior/photo2.jpg',
    '/images/senior/photo3.jpg',
  ],
  wedding: [
    '/images/wedding/photo1.jpg',
    '/images/wedding/photo2.jpg',
    '/images/wedding/photo3.jpg',
  ],
};

Modal.setAppElement('#root');

const PortfolioPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentGenre, setCurrentGenre] = useState('');

  const openModal = (genre) => {
    setCurrentGenre(genre);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 text-center px-4">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <div className="portfolio-preview grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.keys(genres).map((genre) => (
          <div
            key={genre}
            className="portfolio-item bg-white p-4 rounded shadow relative group overflow-hidden cursor-pointer"
            onClick={() => openModal(genre)}
          >
            <img
              src={genres[genre]}
              alt={`${genre} showcase`}
              className="mb-4 rounded transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-xl font-bold mb-2 capitalize">{genre}</h2>
                <p className="text-sm">Click to view more</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded absolute top-4 right-4">Close</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentGenre && genreImages[currentGenre].map((image, index) => (
            <img key={index} src={image} alt={`${currentGenre} ${index + 1}`} className="rounded" />
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default PortfolioPage;
