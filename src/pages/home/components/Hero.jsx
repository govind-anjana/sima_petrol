import React from 'react';
import { Star, ArrowRight, TrendingUp, TrendingDown, Ship } from 'lucide-react';

const Hero = () => {
  const marketRates = [
    { name: 'Brent oil', value: '73.10', change: '+1.53%', isUp: true },
    { name: 'Gasoline RBOB', value: '2.0413', change: '-2.05%', isUp: false },
    { name: 'Crude Oil WTI', value: '69.69', change: '+1.14%', isUp: true },
    { name: 'Ice brent', value: '134.24', change: '-3.04%', isUp: false },
  ];

  return (
    <section className="relative bg-[#070D1B] text-white py-10 md:py-16 lg:py-20 overflow-hidden font-sans">
      {/* Glow Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-5 md:space-y-6 text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-[#D4AF37]">
              <span className="w-4 h-[2px] bg-[#D4AF37]"></span>
              <span>Global Bunker &amp; Lubricant Trading</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Back to back trading, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-amber-200">
                trusted since 2002.
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
              Sima Petrol is an independent marine fuel and lubricant trading company delivering reliable, competitive and efficient solutions to the shipping industry worldwide.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <button className="w-full sm:w-auto px-7 py-3 text-xs md:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2">
                <span>Get a quote</span>
              </button>
              <button className="w-full sm:w-auto px-7 py-3 text-xs md:text-sm font-semibold text-white bg-transparent hover:bg-white/10 border border-white/30 hover:border-white rounded-md transition-all text-center">
                Our coverage
              </button>
            </div>

            {/* Bottom Left Floating Card: Worldwide Fuel Solutions */}
            <div className="mt-6 w-full max-w-md bg-gradient-to-r from-[#0F172A]/95 to-[#1E293B]/85 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 shadow-2xl relative overflow-hidden group hover:border-amber-500/40 transition-all">
              {/* Background Graphic Illustration Overlay */}
              <div className="absolute right-0 bottom-0 opacity-15 group-hover:opacity-25 transition-opacity">
                <Ship className="w-24 h-24 sm:w-32 sm:h-32 text-blue-400 -mr-4 -mb-4 sm:-mr-6 sm:-mb-6" />
              </div>

              <div className="relative z-10 flex flex-col space-y-1.5 sm:space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                  Worldwide
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  Reliable Fuel Solutions Across Global Ports
                </h3>
                <div className="pt-1.5 sm:pt-2">
                  <button className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                    <span>Request a quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: World Map Visual + Floating Cards */}
          <div className="lg:col-span-6 relative min-h-[420px] sm:min-h-[480px] flex flex-col justify-between items-center w-full">
            
            {/* Top Right Floating Review Card */}
            <div className="self-center lg:self-end z-20 bg-white/95 text-gray-900 rounded-xl p-3.5 sm:p-4 shadow-xl border border-white/20 w-full max-w-xs backdrop-blur-md hover:scale-105 transition-transform">
              <div className="flex items-center justify-between gap-3">
                {/* Overlapping Avatars */}
                <div className="flex -space-x-2">
                  <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Client" />
                  <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Client" />
                  <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Client" />
                </div>
                {/* Rating */}
                <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2 py-1 rounded-md">
                  <span className="font-bold text-xs sm:text-sm">4.8</span>
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <a href="#reviews" className="text-[10px] sm:text-[11px] font-semibold text-blue-600 hover:underline">
                  Leave a review
                </a>
              </div>
              <p className="text-[10px] sm:text-[11px] text-gray-600 mt-1 leading-snug">
                Trusted by business of all sizes. See why business trust our trading services.
              </p>
            </div>

            {/* Glowing World Map Graphic */}
            <div className="w-full my-auto py-6 relative flex justify-center items-center">
              <svg className="w-full h-auto max-w-lg opacity-75 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]" viewBox="0 0 1000 500" fill="none">
                {/* World map contour lines */}
                <path d="M150,120 Q200,80 300,100 T450,150 T350,300 T200,350 Z" fill="rgba(30, 58, 138, 0.2)" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
                <path d="M500,100 Q650,60 800,110 T880,250 T750,380 T550,280 Z" fill="rgba(30, 58, 138, 0.2)" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
                <path d="M220,360 Q280,380 300,450 T240,480 T180,420 Z" fill="rgba(30, 58, 138, 0.15)" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
                <path d="M800,340 Q880,360 900,420 T840,460 Z" fill="rgba(30, 58, 138, 0.15)" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />

                {/* Connection Lines */}
                <path d="M280,180 Q450,120 620,180" stroke="url(#cyan-gradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                <path d="M620,180 Q720,240 780,220" stroke="url(#cyan-gradient)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M280,180 Q400,280 620,180" stroke="url(#cyan-gradient)" strokeWidth="1.5" strokeDasharray="3 3" />
                
                {/* Glowing Hub Nodes */}
                <g>
                  <circle cx="280" cy="180" r="6" fill="#38BDF8" className="animate-ping opacity-75" />
                  <circle cx="280" cy="180" r="4" fill="#0284C7" />
                  <text x="260" y="165" fill="#E0F2FE" fontSize="11" fontWeight="bold">Houston</text>
                </g>

                <g>
                  <circle cx="620" cy="180" r="8" fill="#F59E0B" className="animate-ping opacity-75" />
                  <circle cx="620" cy="180" r="5" fill="#D97706" />
                  <text x="600" y="160" fill="#FEF3C7" fontSize="13" fontWeight="bold">Rotterdam / Dubai</text>
                </g>

                <g>
                  <circle cx="780" cy="220" r="6" fill="#38BDF8" className="animate-ping opacity-75" />
                  <circle cx="780" cy="220" r="4" fill="#0284C7" />
                  <text x="770" y="240" fill="#E0F2FE" fontSize="11" fontWeight="bold">Singapore</text>
                </g>

                <defs>
                  <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#38BDF8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Bottom Right Floating Market Rate Card */}
            <div id="market-data" className="self-center lg:self-end z-20 w-full max-w-xs bg-[#0C152B]/95 border border-white/10 backdrop-blur-md rounded-xl p-3.5 sm:p-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <span className="text-[11px] sm:text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Real Time Market Data
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-2.5">
                {marketRates.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="text-gray-300 font-medium">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{item.value}</span>
                      <span className={`flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        item.isUp ? 'text-emerald-400 bg-emerald-500/10' : 'text-rose-400 bg-rose-500/10'
                      }`}>
                        {item.isUp ? (
                          <TrendingUp className="w-3 h-3 mr-0.5" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-0.5" />
                        )}
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
