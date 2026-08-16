import React from 'react';
import aboutSunsetCranes from '../../../assets/images/about-hero-sunset.jpg';

const AboutHero = () => {
  const stats = [
    { value: '120+', label: 'Ports Across Major Hubs' },
    { value: '22+', label: 'Proven Industry Expertise' },
    { value: '24/7', label: 'Round The Clock Service' },
    { value: '50+', label: 'Worldwide Operational Reach' },
  ];

  return (
    <section className="bg-[#050A15] py-16 md:py-24 text-white font-sans relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#C2903A] text-sm md:text-lg font-semibold tracking-wider uppercase block">
            About us
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Powering Maritime Operations Since 2002
          </h1>
        </div>

        {/* Port Cranes Sunset Banner Image matching Figma */}
        <div className="rounded-sm overflow-hidden border border-white/10 shadow-2xl h-72 sm:h-96 md:h-[440px] w-full mb-12 relative">
          <img 
            src={aboutSunsetCranes} 
            alt="SIMA PETROL Port Operations" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 4 Stats Minimalist Grid Bar matching Figma */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center pt-2">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
