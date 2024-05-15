// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Photography Website. All rights reserved.</p>
        <p>
          Follow me on 
          <a href="https://www.instagram.com" className="text-blue-500 hover:underline mx-1">Instagram</a>,
          <a href="https://www.facebook.com" className="text-blue-500 hover:underline mx-1">Facebook</a>,
          and
          <a href="https://www.twitter.com" className="text-blue-500 hover:underline mx-1">Twitter</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
