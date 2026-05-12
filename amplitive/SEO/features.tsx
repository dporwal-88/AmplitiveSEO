"use client";

import React from "react";

export default function Features() {
  return (
    <div
      className="relative w-full min-h-[100dvh] bg-[#01091E] text-white pb-10"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <BackgroundGlows />
      <GridBackground />

      {/* ══════════════════════════════════════════════
          UNIFIED RESPONSIVE LAYOUT
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-14 md:flex-row md:justify-center md:h-screen md:px-0 md:pt-0">
        
        {/* Scaling Wrapper (Active only on Desktop/Tablet to fit the fixed UI safely) */}
        <div className="w-full flex flex-col items-center md:relative md:w-[1485px] md:min-h-[600px] md:flex-row md:items-center md:justify-between md:scale-[0.5] lg:scale-[0.65] xl:scale-[0.8] 2xl:scale-100 md:origin-center md:z-10 md:transition-transform md:duration-300">
          
          {/* ── 1. Text & CTA Section ── */}
          <div className="w-[80%] md:w-[650px] md:h-[411px] md:flex-shrink-0 md:flex md:flex-col md:justify-center md:pl-4 md:-translate-y-[20px] md:text-left">
            <div className="inline-flex items-center justify-center mx-auto md:mx-0 px-3.5 py-1.5 md:py-2 border border-white/20 rounded-full mb-4 text-[11px] md:text-[13.5px] font-medium text-white/70 tracking-wide md:bg-transparent md:w-max">
              SEO Workspace
            </div>
            <h1 className="text-[22px] sm:text-[24px] md:text-[52px] xl:text-[55px] font-medium leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-6">
              Run SEO with AI across <span className="md:hidden">your</span> <br className="hidden md:block" />
              <span className="hidden md:inline">your</span>
              <br className="md:hidden" />
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#00A3FF] md:to-[#0E78E9]">
                {" "}entire system
              </span>
            </h1>
            <p className="text-[13px] md:text-[13.5px] font-light text-white/60 md:text-white/70 leading-[1.7] mb-7 md:mb-8 max-w-[300px] md:max-w-[480px] mx-auto md:mx-0">
              AI connects SEO to content, planning, and execution—so your workflows drive growth automatically.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mb-10 md:mb-0 justify-center md:justify-start">
              {/* Order swapped on mobile vs desktop to match original code */}
              <button className="order-2 md:order-1 px-8.5 md:px-6 py-2 md:py-3 rounded-lg text-[12px] md:text-[13px] font-medium text-white/90 bg-[#1e2e46] hover:bg-[#2a4060] transition-all border border-white/5 md:shadow-sm">
                Book Demo
              </button>
              <button className="order-1 md:order-2 flex items-center gap-1.5 md:gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-lg text-[12px] md:text-[13px] font-semibold text-[#020a16] bg-white hover:bg-gray-100 transition-all shadow-lg md:shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                View Pricing
                <svg width="12" height="12" className="md:w-[14px] md:h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>

          {/* ── 2. Floating Widgets Container ── */}
          <div className="w-full max-w-[340px] md:max-w-none relative mt-36 mb-16 md:mt-0 md:mb-0 md:flex-shrink-0 md:w-[796px] md:h-[497px]">
            <TrackVisibilityPill />
            <BusinessIconBox />
            <MainOverviewCard />
            <HealthScoreWidget />
            <SearchClicksWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
    MERGED UI COMPONENTS (Using tailwind md: prefixes)
   ══════════════════════════════════════════════ */

const TrackVisibilityPill = () => (
  <div className="absolute -top-14 right-12 md:top-[-12px] md:left-[260px] md:right-auto flex items-center gap-2 px-4 md:pr-20 lg:pr-27 py-2 md:py-2.5 rounded-full border border-white/10 bg-[#01091E]/10 md:bg-[#0c182e]/10 backdrop-blur-md text-[11px] md:text-[15px] text-white/80 z-20 shadow-lg md:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
    <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
    Track search visibility
  </div>
);

const BusinessIconBox = () => (
  <div className="absolute flex flex-col items-center justify-center gap-1 md:gap-1.5 rounded-[10px] md:rounded-[12px] text-[9px] md:text-[11px] text-white/80 z-20 hover:bg-[#0c182e]/15 transition-all w-[55px] h-[55px] md:w-[80px] md:h-[80px] top-[-10px] md:top-[50px] left-[-15px] md:left-[85px] bg-[rgba(1,9,30,0.1)] md:bg-transparent backdrop-blur-[6px] md:backdrop-blur-none md:cursor-pointer">
    {/* SVG background swapped cleanly via classes rather than inline style hacks */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none md:hidden"><rect width="100%" height="100%" fill="none" rx="10" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" /></svg>
    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"><rect width="100%" height="100%" fill="none" rx="12" stroke="white" strokeWidth="1.5" strokeDasharray="6 6" /></svg>
    
    <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
    Business
  </div>
);

const MainOverviewCard = () => (
  <div className="rounded-[18px] md:rounded-[20px] p-5 md:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] md:shadow-[0_0_30px_rgba(135,206,250,0.4),0_10px_20px_rgba(0,0,0,0.2)] text-left relative overflow-hidden z-10 translate-x-4 md:translate-x-0 scale-70 md:scale-100 -translate-y-8 md:translate-y-0 bg-[#01091E] border border-white/10 md:border-0 md:absolute md:w-[504.4px] md:h-[356px] md:top-[60px] md:left-[190px]">
    
    <div className="absolute top-0 left-0 w-full h-full md:w-[420px] md:h-[360px] pointer-events-none opacity-80 md:opacity-100">
      <svg width="100%" height="100%" viewBox="0 0 316 220" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6" filter="url(#unified_card_glow)">
          <path d="M221.551 -35.7261C221.551 53.4702 149.243 125.778 60.0471 125.778C-29.1492 125.778 -101.457 53.4702 -101.457 -35.7261C-101.457 -124.922 -29.1492 -197.23 60.0471 -197.23C149.243 -197.23 221.551 -124.922 221.551 -35.7261Z" fill="url(#unified_card_paint)" />
        </g>
        <defs>
          <filter id="unified_card_glow" x="-194.959" y="-290.733" width="510.013" height="510.013" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="46.7512" />
          </filter>
          <radialGradient id="unified_card_paint" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.2009 -41.8416) rotate(90) scale(172.623 160.411)">
            <stop stopColor="#5BEC71" /><stop offset="1" stopColor="#0F72D7" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    
    <div className="relative z-10">
      <h3 className="text-white font-medium text-[15px] md:text-[23px] mb-4 md:mb-6 md:pt-2 md:px-5">
        SEO Overview
      </h3>
      <div className="space-y-4 md:space-y-8 md:pt-5 md:px-5">
        <StatBar label="Total Keywords" count="33" width="33%" />
        <StatBar label="Total Backlinks" count="56" width="56%" />
        <StatBar label="Organic Traffic" count="44" width="44%" />
      </div>
    </div>
  </div>
);

const StatBar = ({ label, count, width }) => {
  // Gracefully handles your color variations using responsive prefixes
  let gradients = "from-[#5BEC71] to-[#0F72D7]";
  if (label === "Total Keywords") gradients = "from-[#0F72D7] md:from-[#5BEC71] to-[#3ab4aa] md:to-[#0F72D7]";
  if (label === "Total Backlinks") gradients = "from-[#0F72D7] md:from-[#5BEC71] to-[#0F72D7]";

  return (
    <div className="md:w-full">
      <div className="flex justify-between text-white/70 text-[10px] md:text-[13px] mb-1.5 md:mb-2 md:block">
        <span>{label}</span>
        <span className="md:hidden">{count}</span>
      </div>
      <div className="flex items-center w-full md:gap-4">
        <div className="w-full bg-white/10 rounded-full h-[5px] md:h-[10px] md:flex-1">
          <div className={`bg-gradient-to-r ${gradients} rounded-full h-[5px] md:h-[10px]`} style={{ width }}></div>
        </div>
        <span className="hidden md:block text-[15px] font-semibold text-white/70 text-right w-5 shrink-0">{count}</span>
      </div>
    </div>
  );
};

const HealthScoreWidget = () => (
  <div className="absolute -top-6 -right-5 md:top-[45px] md:left-[560px] md:right-auto rounded-[10px] md:rounded-[8px] bg-[#FFF5EE] py-1 md:py-2 px-2 md:pl-4 shadow-[0_0_20px_rgba(135,206,250,0.3)] md:shadow-[0_0_0_10px_rgba(255,255,255,0.08),0_10px_20px_rgba(0,0,0,0.2)] w-[120px] md:w-[180px] h-[60px] md:h-auto z-30 scale-80 md:scale-100">
    <div className="flex flex-col md:flex-row gap-1.5 md:gap-2 items-start md:items-center md:mb-1">
      <div className="w-4 h-4 md:w-5 md:h-5 rounded bg-orange-400 flex md:items-center md:justify-center">
        <svg width="22" height="22" className="w-[22px] h-[22px]" viewBox="0 0 22 22" fill="none">
          <rect width="21.1445" height="21.1445" rx="3.00475" fill="url(#health_paint)" />
          <path d="M15.2095 10.5722H13.3547L11.9636 14.7455L9.18142 6.39899L7.79033 10.5722H5.93555" stroke="white" strokeWidth="0.927391" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="health_paint" x1="17.1799" y1="0" x2="2.64306" y2="21.1445" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFCC9C" /><stop offset="1" stopColor="#FF8853" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="text-[6px] md:text-[10px] text-black/60 font-medium">Company Health Score</div>
    </div>
    <div className="text-[18px] md:text-[24px] font-semibold text-black text-start">88%</div>
  </div>
);

const SearchClicksWidget = () => (
  <div className="absolute bottom-8 -left-1 md:bottom-auto md:top-[340px] md:left-[100px] rounded-[12px] md:rounded-2xl bg-[#FFF5EE] flex flex-col items-center justify-center z-30 w-[70px] h-[80px] md:w-[112px] md:h-[130px] shadow-[0_0_0_6px_rgba(255,255,255,0.08),0_4px_10px_rgba(0,0,0,0.15)] md:shadow-[0_0_0_10px_rgba(255,255,255,0.08),0_10px_20px_rgba(0,0,0,0.2)]">
    <div className="relative flex items-center justify-center w-[60px] h-[60px] md:w-[88px] md:h-[88px]">
      <svg className="w-full h-full transform" viewBox="0 0 36 36">
        <defs>
          <linearGradient id="pinkGradientMob" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA9CF" /><stop offset="100%" stopColor="#C62943" />
          </linearGradient>
          <linearGradient id="pinkGradientDesk" x1="60%" y1="0%" x2="100%" y2="100%">
            <stop offset="40%" stopColor="#FFA9CF" /><stop offset="100%" stopColor="#C62943" />
          </linearGradient>
        </defs>
        <path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
        
        {/* Seamlessly swaps the stroked circle based on breakpoint */}
        <path className="md:hidden" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="url(#pinkGradientMob)" strokeWidth="3" strokeLinecap="round" />
        <path className="hidden md:block" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="url(#pinkGradientDesk)" strokeWidth="3.5" />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-[12px] md:text-[22px] font-semibold text-black leading-none">86%</span>
        <span className="text-[5px] md:text-[6px] text-gray-400 md:text-black/50 mt-0.5 md:mt-1">Search Clicks</span>
      </div>
    </div>
  </div>
);

/* Unifies Background SVGs to clean up Main Component */
const BackgroundGlows = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:flex justify-center overflow-hidden">
      <svg width="1446" height="530" viewBox="0 0 1728 1168" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6" filter="url(#bg_f_desk)" style={{ mixBlendMode: "plus-lighter" }}>
          <path d="M1371.61 -553.896C1644.95 -273.424 1639.17 175.53 1358.7 448.872C1078.22 722.213 629.269 716.432 355.928 435.96C82.5869 155.488 88.3677 -293.467 368.84 -566.808C649.313 -840.15 1098.27 -834.369 1371.61 -553.896Z" fill="url(#bg_r_desk)" />
        </g>
        <defs>
          <filter id="bg_f_desk" x="-450.186" y="-1372.92" width="2627.91" height="2627.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="302.415" />
          </filter>
          <radialGradient id="bg_r_desk" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(845.511 -78.6694) rotate(45.7377) scale(757.944 704.321)">
            <stop offset="0.303662" stopColor="#5BEC71" /><stop offset="0.870122" stopColor="#0F72D7" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <div className="absolute top-0 left-0 w-full h-[1076px] pointer-events-none z-0 flex md:hidden justify-center overflow-hidden">
      <svg width="430" height="626" className="w-full h-full" viewBox="0 0 430 1800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6" filter="url(#bg_f_mob)" style={{ mixBlendMode: "plus-lighter" }}>
          <path d="M722.608 -553.896C995.95 -273.424 990.169 175.53 709.697 448.872C429.224 722.213 -19.7305 716.432 -293.072 435.96C-566.413 155.488 -560.632 -293.467 -280.16 -566.808C0.312524 -840.15 449.267 -834.369 722.608 -553.896Z" fill="url(#bg_r_mob)" />
        </g>
        <defs>
          <filter id="bg_f_mob" x="-1099.19" y="-1372.92" width="2627.91" height="2627.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="302.415" />
          </filter>
          <radialGradient id="bg_r_mob" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(196.511 -78.6694) rotate(45.7377) scale(757.944 704.321)">
            <stop offset="0.303662" stopColor="#5BEC71" /><stop offset="0.870122" stopColor="#0F72D7" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </>
);

const GridBackground = () => (
  <>
    <div
      className="absolute inset-0 pointer-events-none z-0 block sm:hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "100px 100px",
        backgroundPosition: "center -15px",
        WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
      }}
    />
    <div
      className="absolute inset-0 pointer-events-none z-0 hidden sm:block"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
        backgroundPosition: "center -30px",
        WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
      }}
    />
  </>
);