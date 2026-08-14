import React from 'react';
import { Award, Monitor, Globe, Clock } from 'lucide-react';

const MarketExpertise = () => {
  const stats = [
    {
      icon: <Award className="w-5 h-5 text-blue-400" />,
      value: '20+ Years',
      label: 'Industry Experience',
    },
    {
      icon: <Monitor className="w-5 h-5 text-blue-400" />,
      value: '24/7',
      label: 'Market Monitoring',
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      value: '120+ Ports',
      label: 'Global Coverage',
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-400" />,
      value: 'Real-Time',
      label: 'Market Insights',
    },
  ];

  return (
    <section className="bg-[#070D1B] text-white py-16 md:py-24 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header Split Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs md:text-sm font-semibold tracking-wide text-[#D4AF37]">
              -Market Expertise-
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Insights That Drive Smarter Decisions
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-6">
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-xl">
              Leveraging deep industry knowledge and real-time market intelligence, SIMA PETROL helps clients navigate market fluctuations, optimize fuel procurement, and make informed trading decisions.
            </p>
          </div>
        </div>

        {/* 4 Stat Cards Row Bar Container */}
        <div className="bg-[#0C152B] border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center space-y-2 ${
                  idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-1">
                  {item.icon}
                </div>

                {/* Value */}
                <div className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {item.value}
                </div>

                {/* Label */}
                <div className="text-xs text-gray-400 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MarketExpertise;
