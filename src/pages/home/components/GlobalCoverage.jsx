import React, { useState } from 'react';
import useInView from '../../../hooks/useInView';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const GlobalCoverage = () => {
  const [activeTab, setActiveTab] = useState('VLSFO');
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  const fuelTabs = ['VLSFO', 'MGO', 'IFO380'];

  const portData = {
    VLSFO: [
      { name: 'LA', price: '657.50', change: '3.00', isUp: true, left: '18%', top: '56%' },
      { name: 'Newyork', price: '593.50', change: '1.00', isUp: true, left: '33%', top: '44%' },
      { name: 'Houston', price: '566.00', change: '1.00', isUp: true, left: '29%', top: '64%' },
      { name: 'Santos', price: '621.00', change: '0.00', isNeutral: true, left: '37%', top: '82%' },
      { name: 'Rotterdam', price: '575.50', change: '4.00', isUp: false, left: '49%', top: '32%' },
      { name: 'Fujairah', price: '643.00', change: '34.00', isUp: false, left: '60%', top: '58%' },
      { name: 'Hongkong', price: '673.50', change: '14.00', isUp: false, left: '76%', top: '48%' },
      { name: 'Singapore', price: '638.50', change: '25.00', isUp: false, left: '74%', top: '72%' },
    ],
    MGO: [
      { name: 'LA', price: '785.00', change: '5.50', isUp: true, left: '18%', top: '56%' },
      { name: 'Newyork', price: '742.00', change: '2.00', isUp: false, left: '33%', top: '44%' },
      { name: 'Houston', price: '710.50', change: '4.00', isUp: true, left: '29%', top: '64%' },
      { name: 'Santos', price: '795.00', change: '1.50', isUp: true, left: '37%', top: '82%' },
      { name: 'Rotterdam', price: '728.00', change: '6.00', isUp: false, left: '49%', top: '32%' },
      { name: 'Fujairah', price: '780.50', change: '12.00', isUp: false, left: '60%', top: '58%' },
      { name: 'Hongkong', price: '810.00', change: '8.00', isUp: false, left: '76%', top: '48%' },
      { name: 'Singapore', price: '775.00', change: '15.00', isUp: false, left: '74%', top: '72%' },
    ],
    IFO380: [
      { name: 'LA', price: '520.00', change: '2.00', isUp: true, left: '18%', top: '56%' },
      { name: 'Newyork', price: '485.00', change: '1.50', isUp: true, left: '33%', top: '44%' },
      { name: 'Houston', price: '460.50', change: '3.00', isUp: false, left: '29%', top: '64%' },
      { name: 'Santos', price: '510.00', change: '0.00', isNeutral: true, left: '37%', top: '82%' },
      { name: 'Rotterdam', price: '445.00', change: '5.00', isUp: false, left: '49%', top: '32%' },
      { name: 'Fujairah', price: '490.00', change: '18.00', isUp: false, left: '60%', top: '58%' },
      { name: 'Hongkong', price: '515.50', change: '9.00', isUp: false, left: '76%', top: '48%' },
      { name: 'Singapore', price: '480.00', change: '11.00', isUp: false, left: '74%', top: '72%' },
    ],
  };

  return (
    <section className="bg-white text-gray-900 py-16 md:py-24 px-4 md:px-8 font-sans border-t border-gray-100">
      <div ref={ref} className="max-w-7xl mx-auto space-y-8">
        
        {/* Left-Aligned Section Header (Matches Figma Zoomed view) */}
        <div className={`text-left space-y-3 max-w-4xl transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-sm md:text-lg font-semibold tracking-wide text-[#C2903A]">
            Global coverage
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ">
            Delivering Reliable Marine Solutions Across the Globe
          </h2>
          <p className="text-xs md:text-sm text-[334155] leading-relaxed pt-1">
            Through our extensive supplier network and strategic partnerships, SIMA PETROL provides bunker fuel, lubricants, engineering, project, and maintenance services across key maritime hubs and international trade routes.
          </p>
        </div>

        {/* Tab Navigation Container */}
        <div className={`w-full bg-[#F8FAFC] rounded-lg border border-gray-200/80 p-1 transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-3 text-center">
            {fuelTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3.5 text-sm md:text-base font-bold transition-all relative ${
                  activeTab === tab
                    ? 'text-gray-900 bg-white shadow-sm rounded-md border-b-2 border-slate-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive World Map & Port Badges Canvas */}
        <div className={`relative w-full min-h-[460px] md:min-h-[560px] bg-white rounded-2xl p-4 overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Cyan/Blue Dotted World Map Graphic */}
          <div className="absolute inset-0 flex items-center justify-center opacity-70 pointer-events-none p-4">
            <svg viewBox="0 0 1000 500" className="w-full h-full object-contain">
              <defs>
                <pattern id="world-dot-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="1.8" fill="#0284C7" opacity="0.75" />
                </pattern>
              </defs>

              {/* Dotted Continents */}
              <path d="M140,110 Q200,70 300,90 T460,140 T360,310 T190,360 Z" fill="url(#world-dot-pattern)" />
              <path d="M490,90 Q650,50 810,100 T890,240 T760,390 T540,290 Z" fill="url(#world-dot-pattern)" />
              <path d="M210,350 Q270,370 290,450 T230,480 T170,410 Z" fill="url(#world-dot-pattern)" />
              <path d="M790,330 Q870,350 890,410 T830,450 Z" fill="url(#world-dot-pattern)" />
            </svg>
          </div>

          {/* Desktop & Tablet Floating Port Badges */}
          <div className="hidden sm:block relative w-full h-[500px]">
            {portData[activeTab].map((port, idx) => (
              <div
                key={idx}
                style={{ left: port.left, top: port.top }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group z-10 hover:z-30 transition-all cursor-pointer"
              >
                {/* Port Location Dot Pin */}
                <div className="w-3 h-3 rounded-full bg-cyan-600 border-2 border-white shadow-md mx-auto mb-1 group-hover:scale-125 transition-transform" />

                {/* Port Badge Container */}
                <div className="bg-white border border-gray-200/90 rounded-lg px-3 py-2 shadow-md hover:shadow-xl transition-all flex flex-col items-start min-w-[125px]">
                  {/* City Name */}
                  <span className="text-[11px] font-bold text-gray-700 tracking-tight block mb-0.5">
                    {port.name}
                  </span>

                  {/* Price & Change Indicator Row */}
                  <div className="flex items-center gap-2 w-full justify-between">
                    <span className="text-sm font-extrabold text-gray-900 tracking-tight">
                      {port.price}
                    </span>

                    {/* Change Indicator */}
                    <div>
                      {port.isNeutral ? (
                        <span className="flex items-center text-[11px] font-bold text-gray-500">
                          <Minus className="w-3 h-3 mr-0.5" />
                          {port.change}
                        </span>
                      ) : port.isUp ? (
                        <span className="flex items-center text-[11px] font-bold text-emerald-600">
                          <TrendingUp className="w-3 h-3 mr-0.5" />
                          {port.change}
                        </span>
                      ) : (
                        <span className="flex items-center text-[11px] font-bold text-rose-600">
                          <TrendingDown className="w-3 h-3 mr-0.5" />
                          {port.change}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Port Rate Cards Grid */}
          <div className="sm:hidden grid grid-cols-2 gap-3 w-full relative z-10 py-4">
            {portData[activeTab].map((port, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm flex flex-col justify-between space-y-1">
                <span className="text-xs font-bold text-gray-700">{port.name}</span>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-gray-900">${port.price}</span>
                  {port.isNeutral ? (
                    <span className="flex items-center text-[10px] font-bold text-gray-500">
                      <Minus className="w-2.5 h-2.5 mr-0.5" />
                      {port.change}
                    </span>
                  ) : port.isUp ? (
                    <span className="flex items-center text-[10px] font-bold text-emerald-600">
                      <TrendingUp className="w-2.5 h-2.5 mr-0.5" />
                      {port.change}
                    </span>
                  ) : (
                    <span className="flex items-center text-[10px] font-bold text-rose-600">
                      <TrendingDown className="w-2.5 h-2.5 mr-0.5" />
                      {port.change}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default GlobalCoverage;
