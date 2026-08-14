import React from 'react';
import { ShieldCheck, Globe, Settings, Headphones, ArrowUpRight } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Trusted Expertise',
      description:
        "With over two decades of experience in bunker fuel and lubricant trading, we understand the industry's challenges and deliver dependable solutions tailored to your operational needs.",
    },
    {
      icon: <Globe className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Global presence',
      description:
        'Our extensive supplier network across major ports worldwide ensures efficient fuel procurement, timely delivery, and seamless service wherever your vessels operate.',
    },
    {
      icon: <Settings className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Competitive Advantage',
      description:
        'Leveraging strong market relationships, we provide competitive pricing, transparent transactions, and value-driven procurement solutions.',
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Reliable Support',
      description:
        'Available 24/7, our dedicated team provides fast response, operational assistance, and continuous support to keep your maritime operations running smoothly.',
    },
  ];

  return (
    <section className="bg-[#050914] text-white py-20 px-4 md:px-8 border-t border-white/5 font-sans relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#D4AF37] uppercase">
            <span>-Why us-</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Why SIMA PETROL?
          </h2>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0A101D] border border-white/10 hover:border-amber-500/40 rounded-xl p-6 flex flex-col justify-between hover:bg-[#0D1527] transition-all group duration-300 shadow-lg"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action Icon Badge */}
              <div className="pt-6 flex justify-start">
                <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-gray-900 flex items-center justify-center text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
