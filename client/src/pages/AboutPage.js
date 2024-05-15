// src/pages/AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <div className="profile max-w-3xl mx-auto text-left flex flex-col md:flex-row items-center">
        <img src="path/to/profile.jpg" alt="Profile" className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-4" />
        <div>
          <p className="text-lg mb-4">
            Hello! I am a passionate photographer with a love for capturing beautiful moments. I specialize in equine photography, portraits, family photos, headshots, and weddings.
          </p>
          <p className="text-lg mb-4">
            My journey began with a simple camera and a desire to document the world around me. Over the years, I have honed my skills and developed a unique style that blends creativity with technical expertise.
          </p>
          <p className="text-lg mb-4">
            Whether you are looking for a professional photoshoot or just want to capture some memories, I am here to help. Let's create something beautiful together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
