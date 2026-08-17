import React, { useState, useEffect, useRef } from 'react';

const AnimatedStat = ({ number, suffix = '', label, rawValue }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || number === undefined) return;

    let start = 0;
    const duration = 2000; // ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic function for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOutCubic * number));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(number);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, number]);

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-b from-[#0E172A] to-[#0A101D] border border-white/10 hover:border-amber-500/30 rounded-sm p-8 text-center shadow-xl transition-all duration-300 group hover:-translate-y-1"
    >
      <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2 tracking-tight">
        {number !== undefined ? `${count}${suffix}` : rawValue}
      </div>
      <div className="text-xs md:text-sm text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
};

const About = () => {
  const stats = [
    { number: 22, suffix: '+', label: 'Years of Industry Experience' },
    { number: 120, suffix: '+', label: 'Global Ports Covered' },
    { number: 24, suffix: '/7', label: 'Customer support' },
  ];

  return (
    <section id="about" className="bg-[#060A15] text-white py-16 px-4 md:px-5 border-t border-white/5 font-sans relative">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-sm md:text-lg font-semibold tracking-wider text-[#C2903A]">
          <span>-About us</span>
        </div>
        {/* Main Statement Paragraph */}
        <h2 className="text-lg md:text-2xl lg:text-3xl font-medium text-[#E8E8ED] leading-relaxed max-w-5xl mx-auto">
          At <span className="text-white font-bold">SIMA PETROL</span>, we deliver reliable bunker fuel and lubricant trading solutions to the global maritime industry. Through strong supplier relationships, market expertise, and worldwide coverage, we help shipowners and operators optimize procurement while ensuring efficiency and transparency.
        </h2>

        {/* Learn More Button */}
        <div>
          <button className="px-6 py-2.5 text-xs font-semibold text-gray-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 rounded-sm transition-all cursor-pointer">
            Learn more
          </button>
        </div>

        {/* 3 Stat Cards Row with Animated Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {stats.map((stat, idx) => (
            <AnimatedStat
              key={idx}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              rawValue={stat.rawValue}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;

