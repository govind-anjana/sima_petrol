import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  Globe,
  Settings,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

const WhyUsCard = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
      className={`bg-gradient-to-b from-[#141B2D] to-[#0D1322] border border-white/10 hover:border-[#D4AF37]/50 rounded-xl p-6 sm:p-5 flex flex-col justify-between hover:bg-[#111A30] shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-500 ease-out group cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } hover:-translate-y-2`}
    >
      <div className="space-y-4 sm:space-y-5">
        {/* Icon Container */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-all duration-300">
          {item.icon}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {item.description}
        </p>
      </div>

      {/* Bottom Action Icon Badge */}
      <div className="pt-6 sm:pt-8 flex justify-start">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-gray-950 flex items-center justify-center text-white transition-all duration-300 group-hover:rotate-45">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

const WhyUsSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />,
      title: "Trusted Expertise",
      description:
        "With over two decades of experience in bunker fuel and lubricant trading, we understand the industry's challenges and deliver dependable solutions tailored to your operational needs.",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />,
      title: "Global Presence",
      description:
        "Our extensive supplier network across major ports worldwide ensures efficient fuel procurement, timely delivery, and seamless service wherever your vessels operate.",
    },
    {
      icon: <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />,
      title: "Competitive Advantage",
      description:
        "Leveraging strong market relationships, we provide competitive pricing, transparent transactions, and value-driven procurement solutions.",
    },
    {
      icon: <Headphones className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />,
      title: "Reliable Support",
      description:
        "Available 24/7, our dedicated team provides fast response, operational assistance, and continuous support to keep your maritime operations running smoothly.",
    },
  ];

  return (
    <section className="bg-[#050914] text-white py-10 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center space-y-3 transition-all duration-700 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-semibold tracking-wider text-[#C2903A]">
            <span>-Why us</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Why SIMA PETROL?
          </h2>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <WhyUsCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
