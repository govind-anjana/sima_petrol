import React from 'react';
import aboutSunsetCranes from '../../../assets/images/about-hero-sunset.jpg';
import useInView from '../../../hooks/useInView';
import useCountUp from '../../../hooks/useCountUp';

// Each stat: numeric end value + suffix to append after the count
const stats = [
  { end: 120, suffix: '+', label: 'Ports Across Major Hubs' },
  { end: 22,  suffix: '+', label: 'Proven Industry Expertise' },
  { end: 24,  suffix: '/7', label: 'Round The Clock Service' },
  { end: 50,  suffix: '+', label: 'Worldwide Operational Reach' },
];

// Individual stat card with its own count-up
const StatCard = ({ end, suffix, label, delay, inView }) => {
  const count = useCountUp(end, 1800, inView);
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col items-center justify-center transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-400 font-medium leading-snug">
        {label}
      </div>
    </div>
  );
};

const AboutHero = () => {
  const [headingRef, headingInView] = useInView({ threshold: 0.1 });
  const [bannerRef, bannerInView]   = useInView({ threshold: 0.1 });
  const [statsRef,  statsInView]    = useInView({ threshold: 0.1 });

  return (
    <section className="bg-[#050A15] py-16 md:py-24 text-white font-sans relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        {/* Centered Heading */}
        <div
          ref={headingRef}
          className={`text-center max-w-3xl mx-auto mb-12 space-y-3 transition-all duration-700 ease-out ${
            headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[#C2903A] text-sm md:text-lg font-semibold tracking-wider uppercase block">
            About us
          </span>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Powering Maritime Operations Since 2002
          </h1>
        </div>

        {/* Port Cranes Sunset Banner Image matching Figma */}
        <div
          ref={bannerRef}
          className={`rounded-sm overflow-hidden border border-white/10 shadow-2xl h-72 sm:h-96 md:h-[440px] w-full mb-12 relative transition-all duration-700 ease-out delay-150 ${
            bannerInView ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'
          }`}
        >
          <img
            src={aboutSunsetCranes}
            alt="SIMA PETROL Port Operations"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 4 Stats with Count-Up Animation */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center pt-2"
        >
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              delay={idx * 150}
              inView={statsInView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
