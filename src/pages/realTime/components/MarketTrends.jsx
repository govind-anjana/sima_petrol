import React from 'react';
import useInView from '../../../hooks/useInView';

const MarketTrends = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const futuresData = [
    { contract: 'Aug 26', last: '82.47', chg: '+1.53%', isUp: true, vol: '184,220' },
    { contract: 'Sep 26', last: '82.10', chg: '+1.53%', isUp: true, vol: '142,880' },
    { contract: 'Oct 26', last: '80.74', chg: '+1.53%', isUp: true, vol: '88,410' },
    { contract: 'Nov 26', last: '81.20', chg: '+1.53%', isUp: true, vol: '74,205' },
    { contract: 'Dec 26', last: '82.10', chg: '-2.05%', isUp: false, vol: '61,160' },
    { contract: 'Jan 27', last: '80.31', chg: '-2.05%', isUp: false, vol: '48,912' },
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const yAxisValues = ['150K', '120K', '100K', '80K', '60K', '20K'];

  return (
    <section ref={ref} className="bg-[#070D1B] py-12 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Brent Oil Price Chart */}
          <div className={`lg:col-span-7 bg-[#0F172A]/80 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col justify-between transition-all duration-700 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Brent Oil Price</h3>
                <p className="text-gray-400 text-xs">Price Trend</p>
              </div>
              {/* Year Select dropdown */}
              <div className="bg-[#070D1B] border border-white/20 rounded px-3 py-1.5 text-xs text-gray-300 font-semibold cursor-pointer hover:border-white/40">
                Year
              </div>
            </div>

            {/* Price Trend Chart Area */}
            <div className="flex gap-4 items-stretch h-56 relative mt-4">
              {/* Y Axis */}
              <div className="flex flex-col justify-between text-[10px] text-gray-500 font-bold w-10">
                {yAxisValues.map((val, idx) => (
                  <span key={idx}>{val}</span>
                ))}
              </div>

              {/* Sparkline Canvas Area */}
              <div className="flex-1 relative flex items-end">
                <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <line x1="0" y1="33" x2="500" y2="33" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="66" x2="500" y2="66" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="133" x2="500" y2="133" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="166" x2="500" y2="166" stroke="rgba(255,255,255,0.05)" />

                  {/* Filled Area */}
                  <path 
                    d="M0,150 Q50,160 100,100 T200,130 T300,50 T400,120 L500,80 L500,200 L0,200 Z" 
                    fill="url(#areaGrad)" 
                  />

                  {/* Line */}
                  <path 
                    d="M0,150 Q50,160 100,100 T200,130 T300,50 T400,120 L500,80" 
                    fill="none" 
                    stroke="#0EA5E9" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />

                  {/* Highlight Point */}
                  <circle cx="200" cy="130" r="4" fill="#0EA5E9" stroke="#fff" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* X Axis Months */}
            <div className="flex justify-between items-center text-[10px] text-gray-500 font-bold pl-12 pt-4 border-t border-white/5 mt-4">
              {months.map((m, idx) => (
                <span key={idx}>{m}</span>
              ))}
            </div>
          </div>

          {/* Right Column: Brent Futures Curve Table */}
          <div className={`lg:col-span-5 bg-[#0F172A]/80 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col justify-between transition-all duration-700 ease-out delay-250 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Brent Futures Curve</h3>
              <p className="text-gray-400 text-xs mb-6">Ice market data</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-semibold">
                <thead>
                  <tr className="text-gray-400 border-b border-white/10 pb-3 uppercase text-[10px] tracking-wider">
                    <th className="py-2.5">Contract</th>
                    <th className="py-2.5">Last</th>
                    <th className="py-2.5">Chg</th>
                    <th className="py-2.5 text-right">Vol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {futuresData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 text-white font-bold">{row.contract}</td>
                      <td className="py-3 text-gray-200">{row.last}</td>
                      <td className={`py-3 ${row.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {row.isUp ? '▲' : '▼'} {row.chg}
                      </td>
                      <td className="py-3 text-right text-gray-400">{row.vol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketTrends;
