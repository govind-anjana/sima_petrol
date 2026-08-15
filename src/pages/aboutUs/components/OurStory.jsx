import React from 'react';

const OurStory = () => {
  const storyStats = [
    { value: '2002', label: 'Founded' },
    { value: '22+', label: 'Years experience' },
    { value: '50+', label: 'Countries served' },
  ];

  return (
    <section className="bg-[#070D1B] py-16 md:py-24 text-white font-sans border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Title, Glowing Globe Graphic & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
                -Our story-
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Our existence explained
              </h2>
            </div>

            {/* Glowing 3D Globe Graphic matching Figma */}
            <div className="relative w-full h-56 flex items-center justify-center py-4">
              <svg className="w-64 h-64 opacity-80 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]" viewBox="0 0 200 200" fill="none">
                {/* Outer sphere grid lines */}
                <circle cx="100" cy="100" r="80" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
                <ellipse cx="100" cy="100" rx="80" ry="30" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" />
                <ellipse cx="100" cy="100" rx="80" ry="60" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
                <ellipse cx="100" cy="100" rx="30" ry="80" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" />
                <ellipse cx="100" cy="100" rx="60" ry="80" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
                
                {/* Glowing Nodes & Connection Arcs */}
                <path d="M50,80 Q100,40 150,80" stroke="#38BDF8" strokeWidth="2" className="animate-pulse" />
                <path d="M40,120 Q100,160 160,120" stroke="#F59E0B" strokeWidth="1.5" />

                <circle cx="50" cy="80" r="4" fill="#38BDF8" />
                <circle cx="150" cy="80" r="4" fill="#F59E0B" />
                <circle cx="100" cy="100" r="5" fill="#38BDF8" />
              </svg>
            </div>

            {/* 3 Metrics Row matching Figma */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
              {storyStats.map((st, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-extrabold text-white">
                    {st.value}
                  </div>
                  <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Paragraph Text matching Figma */}
          <div className="lg:col-span-7 space-y-5 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed pt-2">
            <p>
              Founded in 2002, SIMA PETROL began with a clear vision to provide reliable bunker fuel and lubricant solutions to the maritime industry. Through dedication, expertise, and strong supplier relationships, we established a foundation built on trust and operational excellence.
            </p>
            <p>
              Over the years, we have expanded our presence across key maritime hubs, serving shipowners, operators, and charterers with dependable fuel procurement and technical support solutions tailored to their needs.
            </p>
            <p>
              Our commitment to transparency, competitive pricing, and customer-focused service has enabled us to build long-term partnerships and maintain a strong reputation within the global shipping industry.
            </p>
            <p>
              Today, SIMA PETROL continues to support maritime operations worldwide through an extensive supplier network, industry expertise, and a relentless focus on delivering value to every client.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;
