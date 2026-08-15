import React from 'react';

const AboutHero = () => {
  const stats = [
    { value: '120+', label: 'Ports Across Major Hubs' },
    { value: '22+', label: 'Proven Industry Expertise' },
    { value: '24/7', label: 'Round The Clock Service' },
    { value: '50+', label: 'Worldwide Operational Reach' },
  ];

  return (
    <section className="bg-[#070D1B] py-16 md:py-20 text-white font-sans relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase block">
            About us
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Powering Maritime Operations Since 2002
          </h1>
        </div>

        {/* Port Cranes Sunset Banner Image matching Figma */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-72 sm:h-96 md:h-[420px] w-full mb-12 relative">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=1600" 
            alt="SIMA PETROL Port Operations" 
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D1B]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* 4 Stats Grid Bar matching Figma */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-[#0F172A]/80 border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center hover:border-[#D4AF37]/50 transition-colors shadow-lg"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1.5 tracking-tight">
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
