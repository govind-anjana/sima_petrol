import React from 'react';
import useInView from '../../../hooks/useInView';
import useCountUp from '../../../hooks/useCountUp';
import { Award, Monitor, Globe, Clock } from 'lucide-react';

const StatItem = ({ item, isVisible, idx }) => {
  const count = useCountUp(item.num || 0, 1800, isVisible);

  return (
    <div
      className={`flex flex-col space-y-3 ${
        idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''
      }`}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#112240] flex items-center justify-center mb-2">
        {item.icon}
      </div>

      {/* Value */}
      <div className="text-xl md:text-2xl font-bold text-white tracking-tight">
        {item.num !== null ? `${count}${item.suffix}` : item.suffix}
      </div>

      {/* Label */}
      <div className="text-xs md:text-sm text-gray-400 font-semibold">
        {item.label}
      </div>
    </div>
  );
};

const MarketExpertise = () => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });
  const stats = [
    {
      icon: <Award className="w-6 h-6 text-[#C2903A]" />,
      num: 20,
      suffix: '+ Years',
      label: 'Industry Experience',
    },
    {
      icon: <Monitor className="w-6 h-6 text-[#C2903A]" />,
      num: null,
      suffix: '24/7',
      label: 'Market Monitoring',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#C2903A]" />,
      num: 120,
      suffix: '+ Ports',
      label: 'Global Coverage',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#C2903A]" />,
      num: null,
      suffix: 'Real-Time',
      label: 'Market Insights',
    },
  ];

  return (
    <section className="bg-[#070D1B] text-white py-16 md:py-24 px-4 md:px-8 font-sans">
      <div ref={ref} className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header Split Row */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="lg:col-span-6 space-y-4">
            <div className="text-sm md:text-lg font-semibold tracking-wide text-[#C2903A]">
              -Market Expertise
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Insights That Drive Smarter Decisions
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
              Leveraging deep industry knowledge and real-time market intelligence, SIMA PETROL helps clients navigate market fluctuations, optimize fuel procurement, and make informed trading decisions.
            </p>
          </div>
        </div>

        {/* 4 Stat Cards Row Bar Container */}
        <div className={`bg-[#00162F] border border-white/5 rounded-sm p-6 md:p-8 shadow-2xl transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white">
            {stats.map((item, idx) => (
              <StatItem key={idx} item={item} isVisible={isVisible} idx={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MarketExpertise;
