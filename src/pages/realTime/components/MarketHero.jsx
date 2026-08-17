import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import useInView from '../../../hooks/useInView';

const MarketHero = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const indexPrices = [
    { code: 'VLSFO', price: '$598.40' },
    { code: 'MGO', price: '$811.20' },
    { code: 'HSFO', price: '$472.80' },
    { code: 'ULSFO', price: '$645.10' },
    { code: 'MDO', price: '$789.60' },
  ];

  const floatingRates = [
    { name: 'Brent oil', value: '73.10', change: '+1.53%', isUp: true },
    { name: 'Gasoline RBOB', value: '2.0413', change: '-2.05%', isUp: false },
    { name: 'Crude Oil WTI', value: '69.69', change: '+1.14%', isUp: true },
  ];

  return (
    <section ref={ref} className="relative bg-[#070D1B] text-white py-16 md:py-24 overflow-hidden font-sans border-b border-white/5">
      {/* Subtle Radial Blue Glowing Light in background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Centered Heading Content */}
        <div className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-700 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
            Market Intelligence
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Real-Time Market Data &amp; Fuel Insights
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Monitor live fuel prices, market movements, and industry updates to support informed bunker procurement decisions.
          </p>

          <div className="pt-2">
            <button className="px-8 py-3.5 text-xs sm:text-sm font-semibold text-white bg-transparent hover:bg-white/10 border border-white/20 hover:border-white/55 rounded transition-all cursor-pointer">
              Get a quote
            </button>
          </div>
        </div>

        {/* Two-Column Grid: Left table, Right area trend chart matching Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Fuel Price Index */}
          <div className={`lg:col-span-5 bg-[#0F172A]/85 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-lg font-bold text-gray-200 border-b border-white/10 pb-4 mb-4 uppercase tracking-wider text-sm">
              Fuel Price Index
            </h3>

            <div className="space-y-4">
              {indexPrices.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm font-medium py-1">
                  <span className="text-gray-400 tracking-wider font-semibold">{item.code}</span>
                  <span className="text-white font-extrabold text-base">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Area Trend Chart & Rates Tooltip */}
          <div className={`lg:col-span-7 relative bg-[#0B1224]/85 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl min-h-[360px] flex flex-col justify-between transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Rates Tooltip Widget Card at Top Right */}
            <div className="absolute top-6 right-6 z-20 bg-[#070D1B]/95 border border-white/15 rounded-xl p-4 shadow-xl max-w-xs space-y-3 w-56">
              {floatingRates.map((rate, rIdx) => (
                <div key={rIdx} className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-medium">{rate.name}</span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <span className="text-white">{rate.value}</span>
                    <span className={`flex items-center text-[10px] px-1 py-0.5 rounded ${
                      rate.isUp ? 'text-emerald-400 bg-emerald-500/10' : 'text-rose-400 bg-rose-500/10'
                    }`}>
                      {rate.isUp ? (
                        <TrendingUp className="w-2.5 h-2.5 mr-0.5" />
                      ) : (
                        <TrendingDown className="w-2.5 h-2.5 mr-0.5" />
                      )}
                      {rate.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* SVG Area Trend Chart Graphic matching Figma */}
            <div className="relative w-full h-56 mt-16 sm:mt-12 flex items-end">
              <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid guidelines */}
                <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

                {/* Filled Area */}
                <path 
                  d="M0,200 L0,150 Q120,80 250,110 T400,60 L500,80 L500,200 Z" 
                  fill="url(#chartGradient)" 
                />

                {/* Line Path */}
                <path 
                  d="M0,150 Q120,80 250,110 T400,60 L500,80" 
                  fill="none" 
                  stroke="#0EA5E9" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />

                {/* Highlight Point */}
                <circle cx="340" cy="80" r="5" fill="#38BDF8" />
                <circle cx="340" cy="80" r="10" fill="#38BDF8" className="animate-ping opacity-75" />
              </svg>

              {/* Floating highlighted value bubble ($520) matching Figma */}
              <div className="absolute top-[28%] left-[64%] transform -translate-x-1/2 bg-[#0EA5E9] text-gray-950 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-lg flex items-center justify-center">
                <span>$520</span>
                {/* Pointer tip */}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 border-width-[4px] border-solid border-t-[#0EA5E9] border-r-transparent border-b-transparent border-l-transparent border-t-4 border-x-4" />
              </div>
            </div>

            {/* Year Labels under the chart */}
            <div className="flex justify-between items-center text-xs text-gray-500 font-bold px-4 pt-4 border-t border-white/5 mt-4">
              <span>2018</span>
              <span>2019</span>
              <span>2020</span>
              <span>2021</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MarketHero;
