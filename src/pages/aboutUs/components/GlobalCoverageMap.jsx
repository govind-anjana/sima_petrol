import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import useInView from '../../../hooks/useInView';

const GlobalCoverageMap = () => {
  const [activeTab, setActiveTab] = useState('VLSFO');
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const [mapRef, mapInView] = useInView({ threshold: 0.1 });
  const [partnerRef, partnerInView] = useInView({ threshold: 0.1 });

  const tabs = ['VLSFO', 'MGO', 'IFO380'];

  const portsData = {
    VLSFO: [
      { name: 'LA', price: '657.50', chg: '3.00', status: 'up', top: '48%', left: '16%' },
      { name: 'Newyork', price: '593.50', chg: '1.00', status: 'up', top: '35%', left: '32%' },
      { name: 'Houston', price: '566.00', chg: '1.00', status: 'up', top: '55%', left: '30%' },
      { name: 'Santos', price: '621.00', chg: '0.00', status: 'neutral', top: '75%', left: '36%' },
      { name: 'Rotterdam', price: '575.50', chg: '4.00', status: 'down', top: '30%', left: '50%' },
      { name: 'Fujairah', price: '643.00', chg: '34.00', status: 'down', top: '52%', left: '58%' },
      { name: 'Hongkong', price: '673.50', chg: '14.00', status: 'down', top: '42%', left: '76%' },
      { name: 'Singapore', price: '638.50', chg: '25.00', status: 'down', top: '64%', left: '74%' },
    ],
    MGO: [
      { name: 'LA', price: '820.00', chg: '5.00', status: 'up', top: '48%', left: '16%' },
      { name: 'Newyork', price: '790.00', chg: '2.50', status: 'up', top: '35%', left: '32%' },
      { name: 'Houston', price: '780.00', chg: '1.80', status: 'up', top: '55%', left: '30%' },
      { name: 'Santos', price: '810.00', chg: '0.00', status: 'neutral', top: '75%', left: '36%' },
      { name: 'Rotterdam', price: '800.50', chg: '6.00', status: 'down', top: '30%', left: '50%' },
      { name: 'Fujairah', price: '835.00', chg: '12.00', status: 'down', top: '52%', left: '58%' },
      { name: 'Hongkong', price: '860.00', chg: '8.00', status: 'down', top: '42%', left: '76%' },
      { name: 'Singapore', price: '840.00', chg: '10.00', status: 'down', top: '64%', left: '74%' },
    ],
    IFO380: [
      { name: 'LA', price: '480.00', chg: '2.00', status: 'up', top: '48%', left: '16%' },
      { name: 'Newyork', price: '460.00', chg: '1.20', status: 'up', top: '35%', left: '32%' },
      { name: 'Houston', price: '450.00', chg: '0.90', status: 'up', top: '55%', left: '30%' },
      { name: 'Santos', price: '470.00', chg: '0.00', status: 'neutral', top: '75%', left: '36%' },
      { name: 'Rotterdam', price: '445.00', chg: '3.00', status: 'down', top: '30%', left: '50%' },
      { name: 'Fujairah', price: '485.00', chg: '15.00', status: 'down', top: '52%', left: '58%' },
      { name: 'Hongkong', price: '510.00', chg: '5.00', status: 'down', top: '42%', left: '76%' },
      { name: 'Singapore', price: '495.00', chg: '8.00', status: 'down', top: '64%', left: '74%' },
    ],
  };

  const partners = [
    { name: 'Layers', icon: '✦' },
    { name: 'Sisyphus', icon: '❖' },
    { name: 'Circooles', icon: '●' },
    { name: 'Catalog', icon: '⬡' },
    { name: 'Quotient', icon: '◈' },
  ];

  return (
    <section className="bg-white py-16 md:py-24 text-gray-900 font-sans border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-10 space-y-3 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[#C2903A] text-sm md:text-lg font-semibold tracking-[0.2em] uppercase block">
            Global coverage
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Delivering Reliable Marine Solutions Across the Globe
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed pt-1">
            Through our extensive supplier network and strategic partnerships, SIMA PETROL provides bunker fuel, lubricants, engineering, project, and maintenance services across key maritime hubs and international trade routes.
          </p>
        </div>

        {/* Tabs Bar matching Figma */}
        <div className="flex border-b border-gray-200 mb-12 max-w-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-center font-extrabold text-sm sm:text-base transition-colors cursor-pointer border-b-2 -mb-[2px] ${
                activeTab === tab 
                  ? 'border-gray-900 text-gray-900' 
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dotted World Map Container with Port Tooltips matching Figma */}
        <div
          ref={mapRef}
          className={`relative w-full h-[380px] sm:h-[450px] md:h-[500px] bg-gradient-to-b from-blue-50/40 to-white rounded-3xl border border-gray-100 p-4 overflow-hidden mb-20 transition-all duration-700 ease-out ${
            mapInView ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'
          }`}
        >
          
          {/* Dotted SVG Map Graphic */}
          <div className="absolute inset-0 flex items-center justify-center p-6 opacity-60">
            <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none">
              {/* World Map Dotted Pattern Representation */}
              <pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#60A5FA" />
              </pattern>

              {/* Continents shapes filled with dotted pattern */}
              <path d="M100,80 Q250,50 350,120 T250,320 T150,220 Z" fill="url(#dotPattern)" />
              <path d="M450,60 Q650,40 850,100 T750,300 T550,240 Z" fill="url(#dotPattern)" />
              <path d="M300,320 Q350,340 380,440 T280,460 Z" fill="url(#dotPattern)" />
              <path d="M780,320 Q880,340 920,440 T820,460 Z" fill="url(#dotPattern)" />
            </svg>
          </div>

          {/* Port Tooltips matching Figma floating position cards */}
          {portsData[activeTab].map((port, idx) => (
            <div
              key={idx}
              style={{ top: port.top, left: port.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-lg p-2.5 sm:p-3 shadow-xl border border-gray-200 backdrop-blur-md hover:scale-105 transition-transform cursor-pointer z-20 min-w-[110px] sm:min-w-[130px]"
            >
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                {port.name}
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-extrabold text-gray-900">
                  {port.price}
                </span>
                <span className={`flex items-center text-[10px] font-extrabold ${
                  port.status === 'up' ? 'text-emerald-600' : port.status === 'down' ? 'text-rose-600' : 'text-gray-400'
                }`}>
                  {port.status === 'up' ? (
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                  ) : port.status === 'down' ? (
                    <TrendingDown className="w-3 h-3 mr-0.5" />
                  ) : (
                    <Minus className="w-3 h-3 mr-0.5" />
                  )}
                  {port.chg}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* Section Below: Built on Trust and Collaboration (Partner Logos Bar) */}
        <div
          ref={partnerRef}
          className={`pt-8 border-t border-gray-200 transition-all duration-700 ease-out ${
            partnerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Built on Trust and Collaboration
          </h3>

          <div className="flex flex-wrap items-center justify-between gap-6 opacity-70 grayscale hover:grayscale-0 transition-all">
            {partners.map((p, pIdx) => (
              <div key={pIdx} className="flex items-center gap-2 text-xl font-extrabold text-gray-800 tracking-wider">
                <span className="text-amber-500 text-2xl">{p.icon}</span>
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalCoverageMap;
