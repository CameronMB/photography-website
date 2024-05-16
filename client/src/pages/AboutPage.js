// src/pages/AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">About Cassidy Sullivan</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img src="/images/Cass.jpg" alt="Cassidy Sullivan" className="about-image mb-4 md:mb-0 md:mr-6 shadow-md" />
        <p className="text-lg">
          Hello!<br /><br />
          I'm Cassidy Sullivan, an equine photographer based in the town of Huntington, WV. My journey into photography began with a deep-rooted passion for the arts, which I honed while earning a BFA in Visual Arts from Marshall University. Since 2017, I've been capturing the world through my lens as a freelance photographer, but it wasn't until 2020 that my lifelong love for horses galloped back into my life, seamlessly merging my two greatest passions into one.<br /><br />
          Growing up, horses were a constant source of joy for me. Their beauty simply left a mark on my heart I couldn't shake. After rekindling my love for these incredible animals, I found a way to combine my artistic skills with my horse girl heart. Today, I specialize in equine photography, but do not hesitate to reach out for a non-equine related session consultation! I also have experience with weddings, couples sessions, graduation and senior sessions, as well as various other portrait sessions.<br /><br />
          As a fellow equestrian, I understand the amazing connection between horse and rider. This perspective allows me to capture not just images, but moments that speak to the heart of what it means to be an equestrian. Whether it’s the bond between horse and owner, the exhilarating rush of a big win, or the calmness of a grazing horse, my goal is to tell a story with each photograph.<br /><br />
          Based in the Eastern Ky area, I’m lucky to be surrounded by the lush landscapes that make for stunning backdrops in my work. When I'm not behind the camera, you’ll often find me riding, showing, or simply enjoying the company of our equine.<br /><br />
          Thank you for joining me on this journey where art and equestrian life come together. I look forward to capturing the stories and special moments that define our shared love for horses.<br /><br /><br /><br />
          Warm regards,<br />
          Cass
          <br /><br />
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
