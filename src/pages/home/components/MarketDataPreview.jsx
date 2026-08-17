import React from "react";
import useInView from "../../../hooks/useInView";
import { Link } from "react-router-dom";

const MarketDataPreview = () => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });
  
  const bars = [
    {
      white: "35%",
      blue: "65%",
    },
    {
      white: "70%",
      blue: "30%",
    },
    {
      white: "25%",
      blue: "75%",
    },
    {
      white: "55%",
      blue: "45%",
    },
    {
      white: "80%",
      blue: "20%",
    },
    {
      white: "45%",
      blue: "55%",
    },
  ];

  const marketTickers = [
    {
      name: "Brent Crude (USD/bbl)",
      price: "73.10",
      change: "▲ 1.53%",
      isUp: true,
    },
    {
      name: "ICE Gasoil (USD/t)",
      price: "764.30",
      change: "▼ 0.3%",
      isUp: false,
    },
    {
      name: "VLSFO — Singapore",
      price: "589.00",
      change: "▲ 1.1%",
      isUp: true,
    },
    {
      name: "MGO — Fujairah",
      price: "712.50",
      change: "▲ 0.4%",
      isUp: true,
    },
  ];

  return (
    <section
      id="market-data"
      className="w-full bg-[#F8FAFC] text-gray-900 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans border-t border-gray-200/80"
    >
      <div ref={ref} className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8">

        {/* =========================
            MAIN COMBINED CARD
        ========================== */}
        <div className={`w-full bg-white overflow-hidden shadow-lg border border-gray-200/90 grid grid-cols-1 lg:grid-cols-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* =========================
              LEFT PANEL
          ========================== */}
          <div className="lg:col-span-6 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between gap-8">

            <div className="space-y-4">

              {/* Small Heading */}
              <div className="text-sm sm:text-base md:text-lg font-semibold tracking-wide text-[#C2903A]">
                -Market Data Preview
              </div>

              {/* Main Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ">
                Trade on today's numbers.
              </h2>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
                Leveraging deep industry knowledge and real-time market
                intelligence, SIMA PETROL helps clients navigate market
                fluctuations, optimize fuel procurement, and make informed
                trading decisions.
              </p>
            </div>

            {/* Button */}
            <div className="pt-2">
              <Link to="/real-time-market-data"><button className="px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0A1124] hover:bg-[#16223D] rounded-sm cursor-pointer shadow-md transition-all">
                View full data
              </button></Link>
            </div>
          </div>

          {/* =========================
              RIGHT CHART PANEL
          ========================== */}
          <div className="lg:col-span-6 bg-black text-white p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[320px] sm:min-h-[360px]">

            {/* =========================
                CHART AREA
            ========================== */}
            <div className="flex items-stretch gap-2 sm:gap-4 h-52 sm:h-60 w-full pt-4">

              {/* Y AXIS */}
              <div className="flex flex-col justify-between h-full text-[9px] sm:text-[10px] text-gray-400 font-mono pr-2 sm:pr-3 border-r border-white/10 select-none shrink-0">
                <span>$1000</span>
                <span>$500</span>
                <span>$200</span>
                <span>$0</span>
              </div>

              {/* =========================
                  BARS
              ========================== */}
              <div className="flex-1 flex items-end justify-between h-full px-1 sm:px-3 gap-2 sm:gap-4 min-w-0">

                {bars.map((bar, idx) => (
                  <div
                    key={idx}
                    className="h-full flex-1 flex items-end justify-center min-w-0"
                  >

                    {/* SINGLE BAR */}
                    <div className="h-full w-5 sm:w-7 md:w-8 flex flex-col justify-end">

                      {/* WHITE TOP */}
                      <div
                        style={{
                          height: bar.white,
                        }}
                        className="w-full bg-[#F8FAFC] transition-all duration-500"
                      />

                      {/* BLUE BOTTOM */}
                      <div
                        style={{
                          height: bar.blue,
                        }}
                        className="w-full bg-[#1E3A8A] transition-all duration-500"
                      />

                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* =========================
                CHART LABEL
            ========================== */}
            <div className="pt-4 border-t border-white/10 mt-4 text-left">
              <span className="text-[10px] sm:text-xs font-medium text-gray-400">
                Brent crude - 7 day trend
              </span>
            </div>
          </div>
        </div>

        {/* =========================
            MARKET TICKER CARDS
        ========================== */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">

          {marketTickers.map((ticker, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${200 + idx * 100}ms` }}
              className={`w-full bg-white border border-gray-200/90 p-4 sm:p-5 shadow-sm flex items-center justify-between gap-4 hover:shadow-md transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >

              {/* =========================
                  NAME + PRICE
              ========================== */}
              <div className="space-y-1 text-left min-w-0">

                <span className="text-[11px] sm:text-sm font-bold text-gray-700 tracking-tight block truncate">
                  {ticker.name}
                </span>

                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                  {ticker.price}
                </div>

              </div>

              {/* =========================
                  CHANGE
              ========================== */}
              <div className="text-right shrink-0">

                <span
                  className={`text-[11px] sm:text-xs font-bold ${ticker.isUp
                      ? "text-emerald-500"
                      : "text-rose-500"
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