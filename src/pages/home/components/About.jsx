import React from 'react';

const About = () => {
  const stats = [
    { value: '22+', label: 'Years of Industry Experience' },
    { value: '120+', label: 'Global Ports Covered' },
    { value: '24/7', label: 'Customer support' },
  ];

  return (
    <section id="about" className="bg-[#060A15] text-white py-16 px-4 md:px-8 border-t border-white/5 font-sans relative">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        
        {/* Main Statement Paragraph */}
        <h2 className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-200 leading-relaxed max-w-4xl mx-auto">
          At <span className="text-white font-bold">SIMA PETROL</span>, we deliver reliable bunker fuel and lubricant trading solutions to the global maritime industry. Through strong supplier relationships, market expertise, and worldwide coverage, we help shipowners and operators optimize procurement while ensuring efficiency and transparency.
        </h2>

        {/* Learn More Button */}
        <div>
          <button className="px-6 py-2.5 text-xs font-semibold text-gray-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 rounded-md transition-all">
            Learn more
          </button>
        </div>

        {/* 3 Stat Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#0E172A] to-[#0A101D] border border-white/10 hover:border-amber-500/30 rounded-xl p-8 text-center shadow-xl transition-all group"
            >
              <div className="text-4xl md:text-5xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
