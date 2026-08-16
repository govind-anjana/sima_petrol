import React from 'react';
import productHeroShip from '../../../assets/images/product-hero-ship.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-[550px] md:h-[600px] lg:h-[680px] flex items-center justify-center bg-[#050A15] overflow-hidden text-white font-sans">
      {/* Aerial Ship Background Image matching Figma */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-500 opacity-90"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(5, 10, 21, 0.45) 0%, rgba(5, 10, 21, 0.3) 50%, rgba(5, 10, 21, 0.8) 100%), url(${productHeroShip})` 
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center py-5 mt-5  md:-mt-80">
        
        {/* Category Tag */}
        <span className="text-[#C2903A] text-sm md:text-lg font-semibold tracking-wider uppercase mb-2">
          PRODUCTS &amp; SERVICES
        </span>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl mb-8">
          Comprehensive Marine Fuel &amp; Lubricant <br className="hidden sm:block" />
          Solutions
        </h1>

        {/* CTA Button */}
        <button className="px-7 py-2 text-xs md:text-sm font-semibold text-white bg-[#0A1224]/80 hover:bg-[#0A1224] border border-white/20 hover:border-white/50 rounded transition-all duration-200 cursor-pointer shadow-sm backdrop-blur-sm">
          Get a quote
        </button>

      </div>
    </section>
  );
};

export default Hero;
