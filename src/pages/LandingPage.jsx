import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="relative flex-grow h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
          <div className="bg-black bg-opacity-50 w-full h-full"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Guett Gui</h1>
            <p className="text-lg">Gérez efficacement votre élevage avec notre solution innovante</p>
          </div>
        </div>
      </div>
      <Services />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingPage;
