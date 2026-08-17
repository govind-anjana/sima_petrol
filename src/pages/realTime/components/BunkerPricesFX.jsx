import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import useInView from '../../../hooks/useInView';

const BunkerPricesFX = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const bunkerPrices = [
    { port: 'Singapore', vlsfo: '540', hsfo: '816', mgo: '274', chg: '+1.53%', isUp: true },
    { port: 'Fujairah', vlsfo: '740', hsfo: '274', mgo: '447', chg: '+1.53%', isUp: true },
    { port: 'Rotterdam', vlsfo: '994', hsfo: '453', mgo: '423', chg: '-2.05%', isUp: false },
    { port: 'Houston', vlsfo: '877', hsfo: '600', mgo: '196', chg: '+1.53%', isUp: true },
    { port: 'Gibraltar', vlsfo: '185', hsfo: '492', mgo: '561', chg: '+1.53%', isUp: true },
    { port: 'Panama', vlsfo: '428', hsfo: '130', mgo: '492', chg: '-2.05%', isUp: false },
  ];

  const fxRates = [
    { pair: 'EUR / USD', rate: '1.0845', change: '+1.53%', isUp: true },
    { pair: 'USD / JPY', rate: '1.0845', change: '+1.53%', isUp: true },
    { pair: 'GBP / USD', rate: '1.0845', change: '+1.53%', isUp: true },
    { pair: 'USD / SGD', rate: '1.0845', change: '-2.05%', isUp: false },
    { pair: 'USD / AED', rate: '1.0845', change: '+1.53%', isUp: true },
    { pair: 'USD / CNY', rate: '1.0845', change: '-2.05%', isUp: false },
    { pair: 'USD / SGD', rate: '1.0845', change: '-2.05%', isUp: false },
  ];

  return (
    <section ref={ref} className="bg-[#070D1B] pb-16 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Bunker Prices Key Ports Table */}
          <div className={`lg:col-span-7 bg-[#0F172A]/80 border border-white/10 rounded-2xl p-6 shadow-2xl transition-all duration-700 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-xl font-bold text-white mb-1">Bunker prices — key ports</h3>
            <p className="text-gray-400 text-xs mb-6">Marine Fuel Prices</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-semibold">
                <thead>
                  <tr className="text-gray-400 border-b border-white/10 pb-3 uppercase text-[10px] tracking-wider">
                    <th className="py-2.5">Port</th>
                    <th className="py-2.5">VLSFO</th>
                    <th className="py-2.5">HSFO</th>
                    <th className="py-2.5">MGO</th>
                    <th className="py-2.5 text-right">24h</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {bunkerPrices.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3.5 text-white font-bold">{row.port}</td>
                      <td className="py-3.5 text-gray-200">{row.vlsfo}</td>
                      <td className="py-3.5 text-gray-200">{row.hsfo}</td>
                      <td className="py-3.5 text-gray-200">{row.mgo}</td>
                      <td className={`py-3.5 text-right font-extrabold ${row.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {row.isUp ? '▲' : '▼'} {row.chg}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: FX Rates List */}
          <div className={`lg:col-span-5 bg-[#0F172A]/80 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col justify-between transition-all duration-700 ease-out delay-250 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">FX Rates</h3>
              <p className="text-gray-400 text-xs mb-6">Currency rate</p>
            </div>

            <div className="space-y-3 mt-4">
              {fxRates.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 last:pb-0">
                  <span className="text-gray-300 font-bold text-xs">{item.pair}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-extrabold text-sm">{item.rate}</span>
                    <span className={`flex items-center gap-0.5 text-[10px] font-bold px-2 py-0.5 rounded ${
                      item.isUp ? 'text-emerald-400 bg-emerald-500/10' : 'text-rose-400 bg-rose-500/10'
                    }`}>
                      {item.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BunkerPricesFX;
