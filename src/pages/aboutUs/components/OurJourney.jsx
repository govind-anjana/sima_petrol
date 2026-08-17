import React from 'react';
import useInView from '../../../hooks/useInView';

const OurJourney = () => {
  const [leftRef, leftInView] = useInView({ threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ threshold: 0.05 });

  const milestones = [
    {
      year: '2002',
      title: 'Company Founded',
      desc: 'Established with a vision to provide reliable bunker fuel and lubricant trading solutions to the maritime industry.',
    },
    {
      year: '2008',
      title: 'Expanding Regional Operations',
      desc: 'Strengthened supplier partnerships and expanded services across key maritime hubs and trade routes.',
    },
    {
      year: '2014',
      title: 'Global Network Growth',
      desc: 'Built a robust international supplier network, enabling reliable fuel procurement across major ports worldwide.',
    },
    {
      year: '2020',
      title: 'Enhanced Trading Capabilities',
      desc: 'Expanded market expertise and operational support to better serve the evolving needs of shipowners and operators.',
    },
    {
      year: 'Today',
      title: 'Trusted Global Maritime Partner',
      desc: 'Continuing to deliver dependable bunker fuel, lubricant solutions, and marine services backed by experience, transparency, and global reach.',
    },
  ];

  return (
    <section className="bg-[#0A0F1D] py-16 md:py-24 text-white font-sans border-t border-white/10 relative overflow-hidden">
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Paragraph */}
          <div
            ref={leftRef}
            className={`lg:col-span-5 space-y-4 lg:sticky lg:top-28 transition-all duration-700 ease-out ${
              leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-[#C2903A] text-sm md:text-lg font-semibold tracking-[0.2em] uppercase block">
              -Our Journey-
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Building Trust Across Global Waters Since 2002
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed pt-2">
              From our beginnings in marine fuel trading to becoming a trusted global maritime partner, our journey has been defined by reliability, strong relationships, and continuous growth.
            </p>
          </div>

          {/* Right Column: Timeline Roadmap matching Figma */}
          <div
            ref={timelineRef}
            className="lg:col-span-7 relative pl-6 border-l-2 border-amber-500/40 space-y-10 ml-2 sm:ml-0"
          >
            {milestones.map((item, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 120}ms` }}
                className={`relative group transition-all duration-700 ease-out ${
                  timelineInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                }`}
              >
                {/* Timeline Dot Node */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0A0F1D] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors" />

                {/* Content */}
                <div className="space-y-1.5">
                  <span className="text-[#D4AF37] text-xs sm:text-sm font-extrabold tracking-wider block">
                    {item.year}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg">
                    {item.desc}
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

export default OurJourney;
