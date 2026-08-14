import React from 'react';

const MaritimeBanner = () => {
  return (
    <section className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] flex items-center justify-start bg-[#050A15] overflow-hidden font-sans">
      {/* Offshore Supply Vessel Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(5, 10, 21, 0.75), rgba(5, 10, 21, 0.25)), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2000')` 
        }}
      />

      {/* Overlaid Headline */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight drop-shadow-md">
          Powering Maritime Operations Across the Globe
        </h2>
      </div>
    </section>
  );
};

export default MaritimeBanner;
