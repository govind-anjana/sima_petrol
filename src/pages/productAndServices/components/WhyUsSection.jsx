import React from 'react';
import { ShieldCheck, Globe, TrendingUp, Headphones, ArrowUpRight } from 'lucide-react';

const WhyUsSection = () => {
  const features = [
    {
      title: 'Trusted Expertise',
      description: "With over two decades of experience in bunker fuel and lubricant trading, we understand the industry's challenges and deliver dependable solutions tailored to your operational needs.",
      icon: ShieldCheck,
    },
    {
      title: 'Global presence',
      description: 'Our extensive supplier network across major ports worldwide ensures efficient fuel procurement, timely delivery, and seamless service wherever your vessels operate.',
      icon: Globe,
    },
    {
      title: 'Competitive Advantage',
      description: 'Leveraging strong market relationships, we provide competitive pricing, transparent transactions, and value-driven procurement solutions.',
      icon: TrendingUp,
    },
    {
      title: 'Reliable Support',
      description: 'Available 24/7, our dedicated team provides fast response, operational assistance, and continuous support to keep your maritime operations running smoothly.',
      icon: Headphones,
    },
  ];

  return (
    <section className="bg-[#0A0F1D] py-16 md:py-24 text-white font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
            -Why us-
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why SIMA PETROL?
          </h2>
        </div>

        {/* 4 Cards Grid - Fully Responsive (1 col on mobile, 2 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#111827]/90 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
              >
                <div>
                  {/* Top Icon Box */}
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Left Arrow Circle */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-gray-300 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;
