import React from 'react';
import { Star, ArrowRight, TrendingUp, TrendingDown, Package } from 'lucide-react';
import useInView from '../../../hooks/useInView';
import hero from '../../../assets/images/hero.png';
const Hero = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const marketRates = [
    { name: 'Brent oil', value: '73.10', change: '+1.52%', isUp: true },
    { name: 'Gasoline RBOB', value: '2.9413', change: '-2.05%', isUp: false },
    { name: 'Crude Oil WTI', value: '69.69', change: '+1.74%', isUp: true },
  ];

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] bg-[#070D1B] text-white overflow-hidden flex items-center font-sans">
      {/* Background Image: Cargo Container Ship on Ocean */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        {/* Dark Linear Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D1B] via-[#070D1B]/80 to-transparent lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D1B] via-transparent to-[#070D1B]/50" />
      </div>

      {/* Main Content & Overlays Container */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className={`lg:col-span-7 flex flex-col items-start space-y-6 text-left transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Back to back trading, <br className="hidden sm:inline" />
              <span>trusted since 2002.</span>
            </h1>

            {/* Paragraph Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Sima Petrol is an independent marine fuel and lubricant trading company delivering reliable, competitive and efficient solutions to the shipping industry worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-7 py-3 text-xs md:text-sm font-semibold text-white bg-black hover:bg-gray-900 border border-white/20 rounded shadow-lg transition-all">
                Get a quote
              </button>
              <button className="px-7 py-3 text-xs md:text-sm font-semibold text-white bg-transparent hover:bg-white/10 border border-white/50 rounded transition-all">
                Our coverage
              </button>
            </div>

            {/* Bottom-Left Card: Worldwide Fuel Solutions */}
            <div className="mt-8 w-full max-w-md bg-[#0C152B]/90 border border-white/15 backdrop-blur-md rounded-xl p-5 shadow-2xl flex items-center justify-between group hover:border-[#C2903A]/50 transition-all">
              <div className="space-y-1.5 pr-4">
                <span className="text-[11px] font-semibold text-gray-400 block">
                  World wide
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">
                  Reliable Fuel Solutions Across Global Ports
                </h3>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 pt-1 transition-colors"
                >
                  <span>Request a quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 3D Shipping Container Illustration Graphic */}
              <div className="relative shrink-0 w-20 h-16 sm:w-24 sm:h-20 bg-gradient-to-br from-blue-600 to-indigo-900 rounded-lg border border-blue-400/30 flex items-center justify-center shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 grid grid-cols-4 gap-1 p-1">
                  <div className="border-r border-blue-400/20"></div>
                  <div className="border-r border-blue-400/20"></div>
                  <div className="border-r border-blue-400/20"></div>
                </div>
                <Package className="w-9 h-9 text-cyan-300 drop-shadow-md relative z-10" />
              </div>
            </div>
          </div>

          {/* Right Column: Floating Cards over Ship Visual */}
          <div className={`lg:col-span-5 relative flex flex-col justify-between items-end gap-6 w-full min-h-[380px] lg:min-h-[460px] transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Top/Middle Floating Customer Review Card */}
            <div className="w-full max-w-xs bg-[#0C152B]/90 border border-white/15 backdrop-blur-md rounded-xl p-4 shadow-2xl hover:scale-105 transition-transform duration-300 self-center lg:self-start">
              <div className="flex items-center justify-between gap-3">
                {/* Overlapping Avatars */}
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-[#0C152B] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Client" />
                  <img className="w-8 h-8 rounded-full border-2 border-[#0C152B] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Client" />
                  <img className="w-8 h-8 rounded-full border-2 border-[#0C152B] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Client" />
                </div>
                {/* Rating Badge */}
                <div className="flex items-center gap-1 text-white font-bold text-xs">
                  <span>4.8</span>
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
              </div>
              <div className="mt-2.5">
                <a href="#reviews" className="text-[11px] font-semibold text-gray-300 hover:text-white underline">
                  Leave a review
                </a>
                <p className="text-[11px] text-gray-400 mt-1 leading-snug">
                  Trusted by business of all sizes. See why business trust our trading services.
                </p>
              </div>
            </div>

            {/* Bottom Floating Real Time Market Data Ticker Card */}
            <div className="w-full max-w-xs bg-[#0C152B]/95 border border-white/15 backdrop-blur-md rounded-xl p-4 shadow-2xl self-center lg:self-end">
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
