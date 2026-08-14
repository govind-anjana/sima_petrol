import React from 'react';
import { Zap, FileText, Globe } from 'lucide-react';

const SupplySolutions = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24 text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
            SUPPLY SOLUTIONS
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Flexible Procurement Options Worldwide
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Ensuring seamless fuel procurement and delivery across major maritime hubs and global trade routes.
          </p>
        </div>

        {/* 3 Cards Grid matching Figma exactly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Spot Supply (White Card) */}
          <div className="bg-white rounded-xl p-8 border border-gray-200/80 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 mb-6">
                <Zap className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Spot Supply
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Providing fast and flexible fuel procurement solutions for urgent vessel requirements. Ensuring timely delivery and dependable service across new maritime locations.
              </p>
            </div>

            <div className="pt-8">
              <button className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#0A1224] hover:bg-black rounded-lg transition-colors cursor-pointer shadow">
                Get a quote
              </button>
            </div>
          </div>

          {/* Card 2: Contract Supply (Featured Dark Navy Card) */}
          <div className="bg-[#0A1224] text-white rounded-xl p-8 border border-amber-500/30 shadow-2xl flex flex-col justify-between relative overflow-hidden transform md:-translate-y-2">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-6">
                <FileText className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Contract Supply
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Secure long-term fuel supply agreements tailored to your operational needs. Ensuring consistent availability, competitive pricing, and dependable support. Helping fleets operate with confidence through reliable fuel supply.
              </p>
            </div>

            <div className="pt-8">
              <button className="w-full py-3 px-4 text-xs font-bold text-gray-950 bg-[#D4AF37] hover:bg-amber-400 rounded-lg transition-colors cursor-pointer shadow-lg">
                Get a quote
              </button>
            </div>
          </div>

          {/* Card 3: Worldwide Coverage (White Card) */}
          <div className="bg-white rounded-xl p-8 border border-gray-200/80 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 mb-6">
                <Globe className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Worldwide Coverage
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                With a strong global network and presence across major maritime hubs, we ensure reliable fuel supply and seamless support wherever your vessels operate. Backed by trusted partnerships and operational excellence.
              </p>
            </div>

            <div className="pt-8">
              <button className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#0A1224] hover:bg-black rounded-lg transition-colors cursor-pointer shadow">
                Get a quote
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SupplySolutions;
