import React from 'react';

const TrustedPartnerCTA = () => {
  return (
    <section className="bg-[#0A0F1D] py-12 md:py-20 text-white font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Banner Box with World Map Background Graphic */}
        <div className="relative bg-gradient-to-r from-[#060D1E] via-[#09152E] to-[#060D1E] border border-blue-900/40 rounded-2xl p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-2xl">
          
          {/* Subtle World Map Dotted Overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg className="w-full h-full object-cover" viewBox="0 0 1000 500" fill="none">
              <path d="M150,120 Q200,80 300,100 T450,150 T350,300 T200,350 Z" fill="rgba(56, 189, 248, 0.3)" />
              <path d="M500,100 Q650,60 800,110 T880,250 T750,380 T550,280 Z" fill="rgba(56, 189, 248, 0.3)" />
              <path d="M220,360 Q280,380 300,450 Z" fill="rgba(56, 189, 248, 0.2)" />
              <path d="M800,340 Q880,360 900,420 Z" fill="rgba(56, 189, 248, 0.2)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            
            {/* Top Subtitle */}
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
              Get in touch with us
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Your Trusted Partner in Marine Fuel Solutions
            </h2>

            {/* Paragraph */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto pt-1">
              Connect with our experts for tailored fuel procurement and supply solutions worldwide.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="px-8 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#0A1224] hover:bg-[#101B36] border border-white/20 hover:border-white/50 rounded-md shadow-lg transition-all cursor-pointer">
                Contact our team
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustedPartnerCTA;
