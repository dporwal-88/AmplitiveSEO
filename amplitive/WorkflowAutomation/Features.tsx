"use client";

import { Montserrat_Alternates } from 'next/font/google';

// Configure the font
const montserratAlt = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['600', '700'], // 600 is semi-bold
});

export default function Features() {
  return (
    <div
      className="relative w-full bg-[#01091E] text-white pb-10 overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* ── Background Glows ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:flex justify-center overflow-hidden">
        <svg width="1446" height="530" viewBox="0 0 1728 1168" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6" filter="url(#filter0_f_123_48913)" style={{ mixBlendMode: "plus-lighter" }}>
            <path d="M1371.61 -553.896C1644.95 -273.424 1639.17 175.53 1358.7 448.872C1078.22 722.213 629.269 716.432 355.928 435.96C82.5869 155.488 88.3677 -293.467 368.84 -566.808C649.313 -840.15 1098.27 -834.369 1371.61 -553.896Z" fill="url(#paint0_radial_123_48913)" />
          </g>
          <defs>
            <filter id="filter0_f_123_48913" x="-450.186" y="-1372.92" width="2627.91" height="2627.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="302.415" result="effect1_foregroundBlur_123_48913" />
            </filter>
            <radialGradient id="paint0_radial_123_48913" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(845.511 -78.6694) rotate(45.7377) scale(757.944 704.321)">
              <stop offset="0.303662" stopColor="#5BEC71" />
              <stop offset="0.870122" stopColor="#0F72D7" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-full h-[1076px] pointer-events-none z-0 flex md:hidden justify-center overflow-hidden">
        <svg width="430" height="626" className="w-full h-full" viewBox="0 0 430 1800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6" filter="url(#filter0_f_123_75770)" style={{ mixBlendMode: "plus-lighter" }}>
            <path d="M722.608 -553.896C995.95 -273.424 990.169 175.53 709.697 448.872C429.224 722.213 -19.7305 716.432 -293.072 435.96C-566.413 155.488 -560.632 -293.467 -280.16 -566.808C0.312524 -840.15 449.267 -834.369 722.608 -553.896Z" fill="url(#paint0_radial_123_75770)" />
          </g>
          <defs>
            <filter id="filter0_f_123_75770" x="-1099.19" y="-1372.92" width="2627.91" height="2627.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="302.415" result="effect1_foregroundBlur_123_75770" />
            </filter>
            <radialGradient id="paint0_radial_123_75770" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(196.511 -78.6694) rotate(45.7377) scale(757.944 704.321)">
              <stop offset="0.303662" stopColor="#5BEC71" />
              <stop offset="0.870122" stopColor="#0F72D7" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* ── Shared Grids ── */}
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

      {/* ══════════════════════════════════════════════
          UNIFIED HERO CONTENT
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-5 md:px-0 pt-14 md:pt-0 mx-auto md:mx-0 max-w-[480px] md:max-w-none md:h-[650px] lg:h-screen mt-0 md:mt-10 lg:mt-0">
        <div className="relative flex flex-col md:flex-row items-center w-full md:w-auto md:min-w-[1485px] md:min-h-[600px] md:justify-between md:scale-[0.5] lg:scale-[0.65] xl:scale-[0.8] 2xl:scale-100 origin-center z-10">
          
          {/* ── Left Text Content ── */}
          <div className="flex flex-col flex-shrink-0 w-[92%] md:w-[650px] md:h-[411px] items-center md:items-start text-center md:text-left justify-center mb-22 md:mb-0 md:pl-4 md:-translate-y-[20px]">
            <div className="inline-flex items-center justify-center px-5 py-1.5 md:py-2 border border-white/10 rounded-full bg-transparent md:bg-white/[0.03] mb-5 text-[11px] md:text-[13.5px] font-medium text-white/70 tracking-wide w-max backdrop-blur-md">
              Workflow Automation
            </div>
            <h1 className="text-[23px] sm:text-[28px] md:text-[52px] lg:text-[55px] font-medium leading-[1.35] md:leading-[1.15] text-white mb-4 md:mb-6">
              Run your business on <br />
              reliable{" "}
              <span className={`${montserratAlt.className} font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#0E78E9]`}>
                AI workflows.
              </span>
            </h1>
            <p className="text-[12.2px] md:text-[14px] font-light text-white md:text-white/70 leading-[1.25] md:leading-[1.7] max-w-[300px] md:max-w-[480px] mx-auto md:mx-0 mb-3 md:mb-8">
              AI automates tasks, handoffs, and workflows—so your operations run
              consistently as you scale.
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-3 md:gap-4">
              <button className="px-6.5 md:px-6 py-1.5 md:py-3 rounded-[6px] md:rounded-lg text-[10px] md:text-[13px] font-medium text-white/90 bg-[#1e2e46] hover:bg-[#2a4060] cursor-pointer transition-all border border-white/5 shadow-sm scale-[1.1] md:scale-100">
                Book Demo
              </button>
              <button className="flex items-center cursor-pointer gap-2 px-6 md:px-8 py-2 md:py-3 rounded-[7px] md:rounded-lg text-[12px] md:text-[13px] font-semibold text-[#020a16] bg-white hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] scale-[0.86] md:scale-100">
                View Pricing
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Right Floating Elements (Workflow UI) ── */}
          <div className="flex w-full md:w-auto flex-shrink-0 justify-center items-center overflow-hidden py-4 md:py-0 h-[280px] sm:h-[450px] md:h-[497px]">
            <div className="origin-center scale-[0.38] sm:scale-[0.5] md:scale-[1]">
              <div className="relative flex-shrink-0 w-[780px] h-[480px] z-20">
                
                {/* ── Connecting Lines (SVG Overlay) ── */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 780 480">
                  {/* Glowing layer */}
                  <g filter="blur(4px)" stroke="#5BEC71" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round">
                    <path d="M 140 100 C 190 100, 190 245, 240 245" />
                    <path d="M 240 245 C 190 245, 190 355, 230 355" />
                    <path d="M 400 180 L 400 145 C 400 120, 480 120, 500 120" />
                    <path d="M 400 180 L 400 245" stroke="#0E78E9" />
                    <path d="M 400 245 C 450 245, 450 185, 500 185" stroke="#0E78E9" />
                    <path d="M 400 245 C 450 245, 450 295, 500 295" stroke="#0E78E9" />
                    <path d="M 400 355 L 430 355 C 440 355, 450 375, 470 375" />
                  </g>
                  {/* Solid core layer */}
                  <g stroke="rgba(91, 236, 113, 0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round">
                    <path d="M 140 100 C 190 100, 190 245, 240 245" />
                    <path d="M 240 245 C 190 245, 190 355, 230 355" />
                    <path d="M 400 180 L 400 145 C 400 120, 480 120, 500 120" stroke="rgba(91, 236, 113, 0.4)" />
                    <path d="M 400 180 L 400 245" stroke="rgba(14, 120, 233, 0.5)" />
                    <path d="M 400 245 C 450 245, 450 185, 500 185" stroke="rgba(14, 120, 233, 0.5)" />
                    <path d="M 400 245 C 450 245, 450 295, 500 295" stroke="rgba(14, 120, 233, 0.5)" />
                    <path d="M 400 355 L 430 355 C 440 355, 450 375, 470 375" />
                  </g>
                  {/* Glowing energy dots */}
                  <circle cx="180" cy="175" r="3" fill="#5BEC71" filter="drop-shadow(0 0 5px #5BEC71)" />
                  <circle cx="190" cy="305" r="3" fill="#5BEC71" filter="drop-shadow(0 0 5px #5BEC71)" />
                  <circle cx="440" cy="120" r="3" fill="#5BEC71" filter="drop-shadow(0 0 5px #5BEC71)" />
                  <circle cx="400" cy="220" r="3" fill="#5BEC71" filter="drop-shadow(0 0 5px #5BEC71)" />
                  <circle cx="440" cy="355" r="3" fill="#5BEC71" filter="drop-shadow(0 0 5px #5BEC71)" />
                  <circle cx="460" cy="185" r="3" fill="#0E78E9" filter="drop-shadow(0 0 5px #0E78E9)" />
                  <circle cx="460" cy="295" r="3" fill="#0E78E9" filter="drop-shadow(0 0 5px #0E78E9)" />
                </svg>

                {/* ── Workflow Nodes ── */}

                {/* Main Add Step Node (Top Left) */}
                <div 
                  className="absolute top-[60px] left-[50px] w-[90px] h-[90px] bg-[#FFFFFF03] rounded-[14px] flex flex-col items-center justify-center z-20 cursor-pointer hover:bg-white/[0.05] transition-colors"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='14' stroke='rgba(255,255,255,0.25)' stroke-width='2' stroke-dasharray='8, 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
                  }}
                >
                  <span className="text-white/60 text-[24px] font-light mb-1">+</span>
                  <span className="text-white/60 text-[11px] font-medium tracking-wide">Add Step</span>
                </div>

                {/* Start Node */}
                <div className="absolute top-[215px] left-[70px] w-[140px] h-[55px] bg-[#0A1325] border border-white/10 rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center p-2.5 z-20 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-white/5 border border-white/5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[12.5px] font-medium leading-tight mb-0.5">Start</span>
                    <span className="text-white/50 text-[10px] leading-tight">"When clicking"</span>
                  </div>
                </div>

                {/* Search Workflow Node */}
                <div className="absolute top-[335px] left-[35px] w-[170px] h-[45px] bg-[#0A1325] border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center px-4 z-20 hover:border-white/20 transition-colors backdrop-blur-md">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 opacity-60">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <span className="text-white/90 text-[12px] font-medium tracking-wide">Search Workflow</span>
                </div>

                {/* Knowledge Node */}
                <div className="absolute top-[150px] left-[250px] w-[165px] h-[55px] bg-[#0A1325] border border-white/10 rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center p-2.5 z-20 hover:border-white/20 transition-colors backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF8A9B] to-[#FF6B8B] flex items-center justify-center mr-3 shadow-[0_0_15px_rgba(255,107,139,0.3)]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[12.5px] font-medium leading-tight mb-0.5">Knowledge</span>
                    <span className="text-white/50 text-[10px] leading-tight truncate">Read Brand Co...</span>
                  </div>
                </div>

                {/* Code Node */}
                <div className="absolute top-[60px] left-[420px] w-[160px] h-[55px] bg-[#0A1325] border border-white/10 rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center p-2.5 z-20 hover:border-white/20 transition-colors backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFAF65] to-[#FF8C38] flex items-center justify-center mr-3 shadow-[0_0_15px_rgba(255,159,67,0.3)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[12.5px] font-medium leading-tight mb-0.5">Code</span>
                    <span className="text-white/50 text-[10px] leading-tight truncate">Compute Batch</span>
                  </div>
                </div>

                {/* Small Add Step Node */}
                <div 
                  className="absolute top-[65px] left-[610px] w-[45px] h-[45px] bg-[#FFFFFF03] rounded-[10px] flex flex-col items-center justify-center z-20 cursor-pointer hover:bg-white/[0.05] transition-colors"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' stroke='rgba(255,255,255,0.25)' stroke-width='1.5' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
                  }}
                >
                  <span className="text-white/60 text-[15px] font-light mb-0.5">+</span>
                  <span className="text-white/60 text-[6.5px] font-medium text-center leading-[1]">Add Step</span>
                </div>

                {/* Content Batch 1 */}
                <div className="absolute top-[160px] left-[510px] w-[165px] h-[55px] bg-[#0A1325] border border-white/10 rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center p-2.5 z-20 hover:border-white/20 transition-colors backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#73B4FF] to-[#3B82F6] flex items-center justify-center mr-3 shadow-[0_0_15px_rgba(84,160,255,0.3)]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[12.5px] font-medium leading-tight mb-0.5">Content Batch</span>
                    <span className="text-white/50 text-[10px] leading-tight truncate">Create Content B...</span>
                  </div>
                </div>

                {/* Content Batch 2 */}
                <div className="absolute top-[265px] left-[510px] w-[165px] h-[55px] bg-[#0A1325] border border-white/10 rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center p-2.5 z-20 hover:border-white/20 transition-colors backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#73B4FF] to-[#3B82F6] flex items-center justify-center mr-3 shadow-[0_0_15px_rgba(84,160,255,0.3)]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[12.5px] font-medium leading-tight mb-0.5">Content Batch</span>
                    <span className="text-white/50 text-[10px] leading-tight truncate">Create Content B...</span>
                  </div>
                </div>

                {/* AI Prompt Node */}
                <div className="absolute top-[350px] left-[280px] w-[165px] h-[55px] bg-[#0A1325] border border-white/10 rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center p-2.5 z-20 hover:border-white/20 transition-colors backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7BF58E] to-[#4ADE80] flex items-center justify-center mr-3 shadow-[0_0_15px_rgba(91,236,113,0.3)] text-[#020A16]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.6 7.6 2.4-7.6 2.4-2.4 7.6-2.4-7.6-7.6-2.4 7.6-2.4z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[12.5px] font-medium leading-tight mb-0.5">AI Prompt</span>
                    <span className="text-white/50 text-[10px] leading-tight truncate">Generate Co...</span>
                  </div>
                </div>

                {/* Run Workflow Button */}
                <button className="absolute top-[355px] left-[500px] w-[160px] h-[45px] bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-[10px] shadow-[0_0_25px_rgba(34,197,94,0.4)] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform z-20 border border-white/10 group">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:translate-x-0.5 transition-transform">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  <span className="text-white text-[13px] font-semibold tracking-wide">Run Workflow</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}