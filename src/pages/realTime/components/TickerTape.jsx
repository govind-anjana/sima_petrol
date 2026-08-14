import React from 'react';

const TickerTape = () => {
  const tickerItems = [
    { label: 'Brent Crude', value: '73.10', change: '+1.53%', isUp: true },
    { label: 'Natural Gas', value: '2.685', change: '+1.55%', isUp: true },
    { label: 'EUR / USD', value: '1.085', change: '+0.12%', isUp: true },
    { label: 'ICE Gasoil', value: '742.25', change: '-1.22%', isUp: false },
    { label: 'GBP / USD', value: '1.271', change: '+0.08%', isUp: true },
    { label: 'WTI Crude', value: '69.69', change: '+1.14%', isUp: true },
  ];

  // Duplicate items to ensure smooth infinite loop scroll
  const items = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-[#080D1A] py-3.5 border-y border-[#D4AF37] overflow-hidden font-sans relative">
      <div className="flex gap-16 whitespace-nowrap animate-[marquee_25s_linear_infinite]">
        {items.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-wider">
            <span className="text-gray-400">{item.label}</span>
            <span className="text-white">{item.value}</span>
            <span className={item.isUp ? 'text-emerald-400 font-extrabold' : 'text-rose-400 font-extrabold'}>
              {item.isUp ? '▲' : '▼'} {item.change}
            </span>
          </div>
        ))}
      </div>

      {/* Tailwind animation keyframe injection inside style tag for instant compatibility */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export default TickerTape;
