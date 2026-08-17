import React from 'react';
import useInView from '../../../hooks/useInView';

const LatestUpdates = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const newsItems = [
    {
      category: 'Bunker',
      title: 'Bunker Prices Show Upward Momentum',
      desc: 'Global bunker fuel prices continue to fluctuate amid changing crude oil trends and evolving market conditions.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400',
    },
    {
      category: 'Bunker',
      title: 'Bunker Prices Show Upward Momentum',
      desc: 'Global bunker fuel prices continue to fluctuate amid changing crude oil trends and evolving market conditions.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400',
    },
    {
      category: 'Bunker',
      title: 'Bunker Prices Show Upward Momentum',
      desc: 'Global bunker fuel prices continue to fluctuate amid changing crude oil trends and evolving market conditions.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400',
    },
    {
      category: 'Bunker',
      title: 'Bunker Prices Show Upward Momentum',
      desc: 'Global bunker fuel prices continue to fluctuate amid changing crude oil trends and evolving market conditions.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <section ref={ref} className="bg-white py-16 text-gray-900 font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header with inline button */}
        <div className={`flex items-end justify-between mb-12 transition-all duration-700 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div>
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase block mb-2">
              Market news
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Latest Updates
            </h2>
          </div>
          
          <button className="px-5 py-2 text-xs font-semibold text-gray-900 bg-transparent hover:bg-gray-100 border border-gray-300 hover:border-gray-900 rounded transition-all cursor-pointer">
            View all
          </button>
        </div>

        {/* 2x2 News Cards Grid matching Figma horizontal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsItems.map((item, idx) => (
            <div 
              key={idx}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`bg-slate-50 border border-gray-200 rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-700 ease-out flex flex-col sm:flex-row shadow-sm hover:shadow-md group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Thumbnail Image on Left */}
              <div className="w-full sm:w-44 h-48 sm:h-auto overflow-hidden relative shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content on Right */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider block">
                    {item.category}
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-2">
                  <button className="text-xs font-bold text-gray-900 underline hover:text-[#D4AF37] transition-colors cursor-pointer">
                    Read more
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestUpdates;
