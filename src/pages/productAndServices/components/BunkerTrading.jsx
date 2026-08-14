import React from 'react';
import { Fuel, Shield, Award, Compass, Layers } from 'lucide-react';

const BunkerTrading = () => {
  const stats = [
    { value: '120+', label: 'Ports Across Major Hubs' },
    { value: '22+', label: 'Proven Industry Expertise' },
    { value: '24/7', label: 'Round The Clock Service' },
    { value: '50+', label: 'Worldwide Operational Reach' },
  ];

  const fuelCards = [
    { 
      code: 'ULSFO', 
      label: 'Ultra Low Sulphur Fuel Oil', 
      specLabel: 'SULPHUR', 
      specValue: '0.10%', 
      icon: Fuel 
    },
    { 
      code: 'VLSFO', 
      label: 'Very Low Sulphur Fuel Oil', 
      specLabel: 'SULPHUR', 
      specValue: '0.50%', 
      icon: Layers 
    },
    { 
      code: 'HSFO', 
      label: 'High Sulphur Fuel Oil', 
      specLabel: 'SULPHUR', 
      specValue: '3.50%', 
      icon: Shield 
    },
    { 
      code: 'MGO', 
      label: 'Marine Gas Oil', 
      specLabel: 'ISO 8217', 
      specValue: 'DMA GRADE', 
      icon: Compass 
    },
    { 
      code: 'MDO', 
      label: 'Marine Diesel Oil', 
      specLabel: 'ISO 8217', 
      specValue: 'DMB GRADE', 
      icon: Award 
    },
  ];

  return (
    <section className="bg-[#0A0F1D] py-16 md:py-24 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Top Grid: Left content, Right 2x2 Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
              BUNKER TRADING
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              Reliable Fuel Solutions for Every Voyage
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
              Delivering quality marine fuels through trusted suppliers and strategic partnerships across major bunkering hubs.
            </p>

            <div className="pt-2">
              <button className="px-6 py-2.5 text-xs sm:text-sm font-medium text-white bg-transparent hover:bg-white/10 border border-white/20 hover:border-white/40 rounded transition-all cursor-pointer">
                Request a quote
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Stats Grid matching Figma */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-[#0F172A]/90 border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col justify-center items-center text-center hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium max-w-[160px] leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Cards: White cards matching Figma specs bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
          {fuelCards.map((card, index) => {
            const IconComp = card.icon;
            return (
              <div 
                key={index} 
                className="bg-white text-gray-900 rounded-lg p-4 shadow-lg flex flex-col justify-between h-52 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 group border border-gray-100"
              >
                <div>
                  {/* Icon box at top left */}
                  <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-3">
                    <IconComp className="w-4 h-4 text-amber-600" />
                  </div>

                  {/* Title Code & Subtitle */}
                  <div className="text-xl font-extrabold text-gray-900 tracking-wider">
                    {card.code}
                  </div>
                  <div className="text-[11px] text-gray-500 font-normal leading-tight mt-1">
                    {card.label}
                  </div>
                </div>

                {/* Bottom spec bar matching Figma design */}
                <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] font-bold text-gray-500">
                  <span className="uppercase tracking-wider text-gray-400">{card.specLabel}</span>
                  <span className="text-amber-600 font-extrabold">{card.specValue}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BunkerTrading;
