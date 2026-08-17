import React from 'react';
import useInView from '../../../hooks/useInView';

const OurMission = () => {
  const [leftRef, leftInView] = useInView({ threshold: 0.1 });
  const [rightRef, rightInView] = useInView({ threshold: 0.1 });

  return (
    <section className="bg-slate-50 py-16 md:py-24 text-gray-900 font-sans border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Paragraphs matching Figma */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 space-y-4 transition-all duration-700 ease-out ${
              leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="text-[#C2903A] text-sm md:text-lg font-semibold tracking-[0.2em] uppercase block">
              -Our Mission
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Driving Maritime Success Through Reliable Solutions
            </h2>

            <div className="space-y-4 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed pt-2">
              <p>
                Our mission is to provide dependable bunker fuel, lubricant trading, and marine support services that help our clients operate efficiently and confidently across global markets.
              </p>
              <p>
                We are committed to delivering responsive service, competitive solutions, and seamless operational support at every stage of the journey. By building strong relationships and maintaining the highest standards of professionalism, we help our clients navigate an ever-evolving maritime industry with confidence.
              </p>
            </div>
          </div>

          {/* Right Column: World Trade Map Illustration matching Figma */}
          <div
            ref={rightRef}
            className={`lg:col-span-6 flex justify-center items-center transition-all duration-700 ease-out delay-150 ${
              rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative w-full max-w-md bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/60 rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden text-center">
              
              {/* Elliptical Globe Grid SVG */}
              <svg className="w-full h-56 mx-auto" viewBox="0 0 400 240" fill="none">
                <ellipse cx="200" cy="120" rx="170" ry="90" stroke="#93C5FD" strokeWidth="2" strokeDasharray="4 4" />
                <ellipse cx="200" cy="120" rx="170" ry="45" stroke="#BFDBFE" strokeWidth="1.5" />
                <ellipse cx="200" cy="120" rx="80" ry="90" stroke="#BFDBFE" strokeWidth="1.5" />
                
                {/* Cargo Ship Container SVG */}
                <g transform="translate(130, 110)">
                  <path d="M10,30 L130,30 L120,50 L20,50 Z" fill="#0EA5E9" />
                  <rect x="25" y="15" width="20" height="15" fill="#EF4444" rx="2" />
                  <rect x="48" y="15" width="20" height="15" fill="#F59E0B" rx="2" />
                  <rect x="71" y="15" width="20" height="15" fill="#10B981" rx="2" />
                  <rect x="94" y="15" width="20" height="15" fill="#6366F1" rx="2" />
                </g>

                {/* Pin markers */}
                <circle cx="90" cy="80" r="5" fill="#EF4444" />
                <circle cx="310" cy="80" r="5" fill="#EF4444" />
                <circle cx="280" cy="150" r="5" fill="#EF4444" />
                <circle cx="120" cy="160" r="5" fill="#EF4444" />
              </svg>

              {/* Trade Tariffs Badge */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-amber-400 text-gray-950 font-extrabold text-xs px-3 py-1 rounded shadow-md uppercase tracking-wider">
                TRADE TARIFFS
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurMission;
