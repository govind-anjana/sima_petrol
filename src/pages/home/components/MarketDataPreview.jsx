import React from 'react';

const MarketDataPreview = () => {
  const bars = [
    { height1: '50%', height2: '85%', color1: '#1E3A8A', color2: '#F8FAFC' },
    { height1: '95%', height2: '60%', color1: '#F8FAFC', color2: '#1E3A8A' },
    { height1: '40%', height2: '70%', color1: '#1E3A8A', color2: '#1E40AF' },
    { height1: '65%', height2: '45%', color1: '#F8FAFC', color2: '#1E3A8A' },
    { height1: '90%', height2: '80%', color1: '#1E3A8A', color2: '#F8FAFC' },
    { height1: '55%', height2: '98%', color1: '#F8FAFC', color2: '#1E3A8A' },
  ];

  const marketTickers = [
    {
      name: 'Brent Crude (USD/bbl)',
      price: '73.10',
      change: '▲ 1.53%',
      isUp: true,
    },
    {
      name: 'ICE Gasoil (USD/t)',
      price: '764.30',
      change: '▼ 0.3%',
      isUp: false,
    },
    {
      name: 'VLSFO — Singapore',
      price: '589.00',
      change: '▲ 1.1%',
      isUp: true,
    },
    {
      name: 'MGO — Fujairah',
      price: '712.50',
      change: '▲ 0.4%',
      isUp: true,
    },
  ];

  return (
    <section id="market-data" className="bg-[#F8FAFC] text-gray-900 py-16 md:py-24 px-4 md:px-8 font-sans border-t border-gray-200/80">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Main Combined Card Container */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200/90 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Panel: Text & CTA */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs md:text-sm font-semibold tracking-wide text-[#C69A42]">
                -Market Data Preview-
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Trade on today's numbers.
              </h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-md">
                Leveraging deep industry knowledge and real-time market intelligence, SIMA PETROL helps clients navigate market fluctuations, optimize fuel procurement, and make informed trading decisions.
              </p>
            </div>

            <div className="pt-2">
              <button className="px-6 py-3 text-xs font-semibold text-white bg-[#0A1124] hover:bg-[#16223D] rounded-md shadow-md transition-all">
                View full data
              </button>
            </div>
          </div>

          {/* Right Panel: Black Chart Box */}
          <div className="lg:col-span-6 bg-black text-white p-8 flex flex-col justify-between min-h-[360px] relative">
            
            {/* Chart Area with Y-Axis scale */}
            <div className="flex items-stretch gap-4 h-60 w-full pt-4">
              
              {/* Y-Axis Labels */}
              <div className="flex flex-col justify-between h-full text-[10px] text-gray-400 font-mono pr-3 border-r border-white/10 select-none">
                <span>$1000</span>
                <span>$500</span>
                <span>$200</span>
                <span>$0</span>
              </div>

              {/* Bar Columns Canvas */}
              <div className="flex-1 flex items-end justify-between h-full px-4 gap-3">
                {bars.map((bar, idx) => (
                  <div key={idx} className="flex items-end gap-2 h-full flex-1 justify-center">
                    <div
                      style={{ height: bar.height1, backgroundColor: bar.color1 }}
                      className="w-3.5 sm:w-4 rounded-t-sm transition-all duration-500"
                    />
                    <div
                      style={{ height: bar.height2, backgroundColor: bar.color2 }}
                      className="w-3.5 sm:w-4 rounded-t-sm transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Chart Label */}
            <div className="pt-4 border-t border-white/10 mt-4 text-left">
              <span className="text-xs font-medium text-gray-400">
                Brent crude - 7 day trend
              </span>
            </div>

          </div>

        </div>

        {/* 4 Market Ticker Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {marketTickers.map((ticker, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/90 rounded-xl p-6 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-1 text-left">
                <span className="text-xs font-bold text-gray-700 tracking-tight block">
                  {ticker.name}
                </span>
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {ticker.price}
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`text-xs font-bold ${
                    ticker.isUp ? 'text-emerald-500' : 'text-rose-500'
                  }`}
                >
                  {ticker.change}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MarketDataPreview;
