import React from 'react';
import trading from '../../../assets/images/trading.png';

const LubricantTrading = () => {
  const points = [
    {
      num: '01',
      title: 'Global Procurement',
      subtext: 'Efficient sourcing through an extensive supplier network, ensuring reliable availability worldwide.',
    },
    {
      num: '02',
      title: 'International Brands',
      subtext: 'Access to globally recognized lubricant manufacturers trusted across the maritime industry.',
    },
    {
      num: '03',
      title: 'Competitive Pricing',
      subtext: 'Cost-effective solutions without compromising quality, performance, or operational reliability.',
    },
    {
      num: '04',
      title: 'Technical Support',
      subtext: 'Expert guidance to optimize equipment performance and enhance maintenance efficiency.',
    },
  ];

  return (
    <section className="bg-[#050A15] py-16 md:py-24 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, intro & image */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-[#C2903A] text-sm md:text-lg font-semibold tracking-wider uppercase">
                LUBRICANT TRADING
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Premium Lubricant Solutions for Vessel Performance
              </h2>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                Sourcing and supply of international lubricant brands, matched to engine specification and vessel class with technical support behind every order.
              </p>
            </div>

            {/* Industrial Machinery / Engine Room Image matching Figma */}
            <div className="rounded-sm overflow-hidden border border-white/10 shadow-2xl h-64 sm:h-72 w-full mt-4">
              <img 
                src={trading} 
                alt="Lubricant Trading"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Numbered List 01 - 04 matching Figma */}
          <div className="lg:col-span-6 space-y-6">
            {points.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 pb-6 border-b border-white/10 last:border-0 last:pb-0 group"
              >
                {/* Number */}
                <span className="text-3xl sm:text-4xl font-extrabold text-gray-400 group-hover:text-white transition-colors shrink-0 leading-none">
                  {item.num}
                </span>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#C2903A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default LubricantTrading;
