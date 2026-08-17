import React, { useState, useEffect, useRef } from "react";
import { Fuel, Shield, Award, Compass, Layers } from "lucide-react";

const AnimatedStatCard = ({ number, suffix = "", label, rawValue, index }) => {
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

    const duration = 2000; // ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
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
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`bg-transparent border border-white/10 rounded-sm p-6 sm:p-8 flex flex-col justify-center items-center text-center hover:border-[#D4AF37]/60 hover:bg-white/[0.02] transition-all duration-500 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight group-hover:text-[#D4AF37] transition-colors">
        {number !== undefined ? `${count}${suffix}` : rawValue}
      </div>
      <div className="text-xs sm:text-sm text-gray-400 font-medium max-w-[160px] leading-snug">
        {label}
      </div>
    </div>
  );
};

const BunkerTrading = () => {
  const [contentVisible, setContentVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 120, suffix: "+", label: "Ports Across Major Hubs" },
    { number: 22, suffix: "+", label: "Proven Industry Expertise" },
    { rawValue: "24/7", label: "Round The Clock Service" },
    { number: 50, suffix: "+", label: "Worldwide Operational Reach" },
  ];

  const fuelCards = [
    {
      code: "ULSFO",
      label: "Ultra Low Sulphur Fuel Oil",
      specLabel: "SULPHUR",
      specValue: "0.10%",
      icon: Fuel,
    },
    {
      code: "VLSFO",
      label: "Very Low Sulphur Fuel Oil",
      specLabel: "SULPHUR",
      specValue: "0.50%",
      icon: Layers,
    },
    {
      code: "HSFO",
      label: "High Sulphur Fuel Oil",
      specLabel: "SULPHUR",
      specValue: "3.50%",
      icon: Shield,
    },
    {
      code: "MGO",
      label: "Marine Gas Oil",
      specLabel: "ISO 8217",
      specValue: "DMA GRADE",
      icon: Compass,
    },
    {
      code: "MDO",
      label: "Marine Diesel Oil",
      specLabel: "ISO 8217",
      specValue: "DMB GRADE",
      icon: Award,
    },
  ];

  return (
    <section className="bg-[#0A0F1D] py-16 md:py-24 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Top Grid: Left content, Right 2x2 Stats */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16"
        >
          {/* Left Column */}
          <div
            className={`lg:col-span-6 space-y-4 transition-all duration-700 ease-out ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#C2903A] text-sm md:text-lg font-semibold tracking-wider uppercase">
              BUNKER TRADING
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Reliable Fuel Solutions for Every Voyage
            </h2>

            <p className="text-white text-sm sm:text-base leading-relaxed max-w-lg">
              Delivering quality marine fuels through trusted suppliers and
              strategic partnerships across major bunkering hubs.
            </p>

            <div className="pt-2">
              <button className="px-6 py-2.5 text-xs sm:text-sm font-medium text-white bg-transparent hover:bg-white/10 border border-white hover:border-white/40 rounded transition-all cursor-pointer">
                Request a quote
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Stats Grid with Animated Countdown */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <AnimatedStatCard
                key={idx}
                index={idx}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                rawValue={stat.rawValue}
              />
            ))}
          </div>
        </div>

        {/* Bottom Cards: White cards matching Figma specs bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
          {fuelCards.map((card, index) => {
            const IconComp = card.icon;
            return (
              <div
                key={index}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`bg-white text-gray-900 rounded-sm p-4 shadow-lg flex flex-col justify-between h-44 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 group border border-gray-100 ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div>
                  {/* Icon box at top left */}
                  <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-3 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                    <IconComp className="w-4 h-4 text-amber-600" />
                  </div>

                  {/* Title Code & Subtitle */}
                  <div className="text-xl font-bold text-[#0F172A] group-hover:text-[#C2903A] transition-colors">
                    {card.code}
                  </div>
                  <div className="text-[12px] text-[#475569] font-normal mt-1">
                    {card.label}
                  </div>
                </div>

                {/* Bottom spec bar matching Figma design */}
                <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] font-bold text-gray-500">
                  <span className="uppercase text-gray-400">
                    {card.specLabel}
                  </span>
                  <span className="text-amber-600 font-extrabold">
                    {card.specValue}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BunkerTrading;

