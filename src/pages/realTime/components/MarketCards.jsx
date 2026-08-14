import React from 'react';
import { ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react';

const MarketCards = () => {
  const cardsData = [
    {
      title: 'Brent Crude',
      value: '82.47',
      unit: 'USD / bbl',
      change: '1.05%',
      isUp: true,
      sparkline: 'M0,45 Q20,35 40,30 T80,15 T120,25 T160,10',
    },
    {
      title: 'WTI Crude',
      value: '78.12',
      unit: 'USD / bbl',
      change: '0.92%',
      isUp: true,
      sparkline: 'M0,45 Q20,40 40,25 T80,20 T120,30 T160,15',
    },
    {
      title: 'Gasoil',
      value: '742.25',
      unit: 'USD / mt',
      change: '1.22%',
      isUp: false,
      sparkline: 'M0,15 Q20,25 40,20 T80,35 T120,30 T160,45',
    },
    {
      title: 'Natural Gas',
      value: '2.685',
      unit: 'USD / bbl',
      change: '1.55%',
      isUp: true,
      sparkline: 'M0,45 Q20,30 40,35 T80,20 T120,15 T160,10',
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24 text-gray-900 font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Real-Time Market Data
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Brent crude, ICE futures, and marine fuel pricing across major ports
          </p>
        </div>

        {/* 4 Cards Grid matching Figma white card styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 relative group"
            >
              {/* Top right icon button */}
              <div className="absolute top-5 right-5 w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 border border-amber-200 opacity-60 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              <div>
                {/* Title */}
                <h3 className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                  {item.title}
                </h3>

                {/* Big Value Display */}
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    {item.unit}
                  </span>
                </div>
              </div>

              {/* Bottom Info: Status indicator & Sparkline Graph */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
                <div className="flex items-center gap-1.5">
                  <span className={`flex items-center gap-0.5 text-xs font-extrabold px-2 py-0.5 rounded ${
                    item.isUp ? 'text-emerald-600 bg-emerald-500/10' : 'text-rose-600 bg-rose-500/10'
                  }`}>
                    {item.isUp ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                    {item.isUp ? '▲' : '▼'} {item.change}
                  </span>
                  <span className="text-[10px] text-gray-400 font-semibold">vs last month</span>
                </div>

                {/* Sparkline Visual */}
                <div className="w-20 h-10 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 160 50">
                    <path
                      d={item.sparkline}
                      fill="none"
                      stroke={item.isUp ? '#10B981' : '#EF4444'}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MarketCards;
