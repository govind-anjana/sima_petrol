import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[550px] md:h-[620px] lg:h-[680px] flex items-center justify-center bg-[#050A15] overflow-hidden text-white font-sans">
      {/* Aerial Ship Background Image matching Figma */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(5, 10, 21, 0.4), rgba(5, 10, 21, 0.75)), url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=2000')` 
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center py-16">
        
        {/* Category Tag */}
        <span className="text-[#D4AF37] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4">
          PRODUCTS &amp; SERVICES
        </span>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl mb-8">
          Comprehensive Marine Fuel &amp; Lubricant <br className="hidden sm:block" />
          Solutions
        </h1>

        {/* CTA Button */}
        <button className="px-7 py-3 text-xs md:text-sm font-semibold text-white bg-[#0A1224]/80 hover:bg-[#0A1224] border border-white/20 hover:border-white/50 rounded transition-all duration-200 cursor-pointer shadow-lg backdrop-blur-sm">
          Get a quote
        </button>

      </div>
    </section>
  );
};

export default Hero;
