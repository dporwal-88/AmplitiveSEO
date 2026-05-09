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
            <div className="inline-flex items-center justify-center px-2 py-1.5 md:py-1.5 border border-white/10 rounded-full bg-transparent md:bg-white/[0.03] mb-5 text-[11px] md:text-[13.5px] font-medium text-white/80 tracking-wide w-max backdrop-blur-md">
              Workflow Automation
            </div>
            <h1 className="text-[23px] sm:text-[28px] md:text-[52px] lg:text-[50px] font-medium leading-[1.35] md:leading-[1.15] text-white mb-4 md:mb-6">
              Run your business on <br />
              reliable{" "}
              <span className={`${montserratAlt.className} font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#0E78E9]`}>
                AI workflows.
              </span>
            </h1>
            <p className="text-[12.2px] md:text-[16px] font-light text-white md:text-white/100 leading-[1.25] md:leading-[1.7] max-w-[300px] md:max-w-[480px] mx-auto md:mx-0 mb-3 md:mb-8">
              AI automates tasks, handoffs, and workflows—so your operations run
              consistently as you scale.
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-3 md:gap-4">
              <button className="px-6.5 md:px-6 py-1.5 md:py-2 rounded-[6px] md:rounded-lg text-[10px] md:text-[13px] font-medium text-white/90 bg-[#1e2e46] hover:bg-[#2a4060] cursor-pointer transition-all border border-white/5 shadow-sm scale-[1.1] md:scale-100">
                Book Demo
              </button>
              <button className="flex items-center cursor-pointer gap-2 px-6 md:px-8 py-2 md:py-2 rounded-[7px] md:rounded-lg text-[12px] md:text-[13px] font-semibold text-[#020a16] bg-white hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] scale-[0.86] md:scale-100">
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
                  <g filter="blur(4px)" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round">
                    {/* Add Step -> Code */}
                    <path d="M 150 115 C 220 115, 220 100, 420 100" stroke="#5BEC71" />
                    {/* Start -> Knowledge & Content Batch 2 */}
                    <path d="M 240 265 C 260 265, 260 215, 300 215" stroke="#5BEC71" />
                    <path d="M 240 265 C 340 265, 340 315, 550 315" stroke="#5BEC71" />
                    {/* Search Workflow -> AI Prompt */}
                    <path d="M 230 405 L 290 405" stroke="#5BEC71" />
                    {/* Code -> Content Batch 1 */}
                    <path d="M 525 135 C 525 170, 520 215, 550 215" stroke="#0E78E9" />
                    {/* AI Prompt -> Run Workflow */}
                    <path d="M 450 405 L 560 405" stroke="#5BEC71" />
                  </g>
                  
                  {/* Solid core layer */}
                  <g strokeWidth="1.5" fill="none" strokeLinecap="round">
                    <path d="M 150 115 C 220 115, 220 100, 420 100" stroke="rgba(91, 236, 113, 0.7)" />
                    <path d="M 240 265 C 260 265, 260 215, 300 215" stroke="rgba(91, 236, 113, 0.7)" />
                    <path d="M 240 265 C 340 265, 340 315, 550 315" stroke="rgba(91, 236, 113, 0.7)" />
                    <path d="M 230 405 L 290 405" stroke="rgba(91, 236, 113, 0.7)" />
                    <path d="M 525 135 C 525 170, 520 215, 550 215" stroke="rgba(14, 120, 233, 0.7)" />
                    <path d="M 450 405 L 560 405" stroke="rgba(91, 236, 113, 0.7)" />
                  </g>

                  {/* Glowing energy dots */}
                  <circle cx="280" cy="107" r="3" fill="#5BEC71" filter="drop-shadow(0 0 5px #5BEC71)" />
                  <circle cx="270" cy="240" r="3" fill="#5BEC71" filter="drop-shadow(0 0 5px #5BEC71)" />
                  <circle cx="410" cy="290" r="3" fill="#5BEC71" filter="drop-shadow(0 0 5px #5BEC71)" />
                  <circle cx="260" cy="405" r="3" fill="#5BEC71" filter="drop-shadow(0 0 5px #5BEC71)" />
                  <circle cx="538" cy="175" r="3" fill="#0E78E9" filter="drop-shadow(0 0 5px #0E78E9)" />
                  <circle cx="510" cy="405" r="3" fill="#5BEC71" filter="drop-shadow(0 0 5px #5BEC71)" />
                </svg>

                {/* ── Workflow Nodes ── */}

                {/* Main Add Step Node (Top Left) */}
                <div 
                  className="absolute top-[70px] left-[60px] w-[90px] h-[90px] bg-white/[0.08] rounded-[14px] flex flex-col items-center justify-center z-20 cursor-pointer hover:bg-white/[0.12] transition-colors shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='14' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-dasharray='10, 16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
                  }}
                >
                  <span className="text-white text-[28px] font-light mb-0.5 leading-none">+</span>
                  <span className="text-white/80 text-[11px] font-medium tracking-wide">Add Step</span>
                </div>

                {/* Start Node */}
                <div className="absolute top-[230px] left-[60px] w-[186.19px] h-[70px] bg-[#0A1325]/80 border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] z-20 transition-transform hover:-translate-y-1">
                  <div className="flex items-center justify-center shrink-0">
                    <svg width="26" height="26" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75391 5.75443L15.9249 30.2108L19.5358 19.5795L30.2103 15.9254L5.75391 5.75443Z" stroke="white" strokeWidth="2.87722" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-[1.5px] h-[34px] bg-white/20 mx-[14px]"></div>
                  <div className="flex flex-col">
                    <span className="text-white text-[13.5px] font-medium leading-tight mb-0.5">Start</span>
                    <span className="text-white/50 text-[10px] leading-tight">"When clicking"</span>
                  </div>
                </div>

                {/* Knowledge Node */}
                <div className="absolute top-[180px] left-[300px] w-[186.19px] h-[70px] bg-[#0A1325]/80 border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] z-20 transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#FFEAF3] to-[#DC486D] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,107,139,0.4)]">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.80469 2.70767H7.22005C8.17754 2.70767 9.09582 3.08804 9.77287 3.76509C10.4499 4.44214 10.8303 5.36042 10.8303 6.31791V18.9537C10.8303 18.2356 10.545 17.5469 10.0372 17.0391C9.52944 16.5313 8.84073 16.2461 8.12261 16.2461H1.80469V2.70767Z" stroke="white" stroke-width="1.80512" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.8576 2.70767H14.4423C13.4848 2.70767 12.5665 3.08804 11.8894 3.76509C11.2124 4.44214 10.832 5.36042 10.832 6.31791V18.9537C10.832 18.2356 11.1173 17.5469 11.6251 17.0391C12.1329 16.5313 12.8216 16.2461 13.5397 16.2461H19.8576V2.70767Z" stroke="white" stroke-width="1.80512" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                  </div>
                  <div className="w-[1.5px] h-[34px] bg-white/20 mx-[12px]"></div>
                  <div className="flex flex-col">
                    <span className="text-white text-[13.5px] font-medium leading-tight mb-0.5">Knowledge</span>
                    <span className="text-white/50 text-[10px] leading-tight truncate max-w-[90px]">Read Brand Co...</span>
                  </div>
                </div>

                {/* Code Node */}
                <div className="absolute top-[65px] left-[420px] w-[186.19px] h-[70px] bg-[#0A1325]/80 border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] z-20 transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#FFCC9C] to-[#FF8853] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,159,67,0.4)]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4336 13.7189L18.8633 10.2892L15.4336 6.85945" stroke="white" stroke-width="1.71486" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.14457 6.85945L1.71484 10.2892L5.14457 13.7189" stroke="white" stroke-width="1.71486" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.4317 3.42973L8.14453 17.1486" stroke="white" stroke-width="1.71486" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-[1.5px] h-[34px] bg-white/20 mx-[12px]"></div>
                  <div className="flex flex-col">
                    <span className="text-white text-[13.5px] font-medium leading-tight mb-0.5">Code</span>
                    <span className="text-white/50 text-[10px] leading-tight truncate max-w-[90px]">Compute Batch</span>
                  </div>
                </div>

                {/* Content Batch 1 */}
                <div className="absolute top-[180px] left-[550px] w-[186.19px] h-[70px] bg-[#0A1325]/50 border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] z-20 transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#B6DAFF] to-[#63A2FF] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(84,160,255,0.4)]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.28906 7.71689V13.7189" stroke="white" stroke-width="1.60054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.5015 7.28818C6.04052 7.28818 7.28815 6.04055 7.28815 4.50153C7.28815 2.9625 6.04052 1.71487 4.5015 1.71487C2.96247 1.71487 1.71484 2.9625 1.71484 4.50153C1.71484 6.04055 2.96247 7.28818 4.5015 7.28818Z" stroke="white" stroke-width="1.60054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.28714 18.8635C5.70778 18.8635 6.85943 17.7118 6.85943 16.2912C6.85943 14.8706 5.70778 13.7189 4.28714 13.7189C2.8665 13.7189 1.71484 14.8706 1.71484 16.2912C1.71484 17.7118 2.8665 18.8635 4.28714 18.8635Z" stroke="white" stroke-width="1.60054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.291 18.8635C17.7117 18.8635 18.8633 17.7118 18.8633 16.2912C18.8633 14.8706 17.7117 13.7189 16.291 13.7189C14.8704 13.7189 13.7188 14.8706 13.7188 16.2912C13.7188 17.7118 14.8704 18.8635 16.291 18.8635Z" stroke="white" stroke-width="1.60054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.39844 7.71689C4.78428 9.21739 6.15617 10.3321 7.77672 10.3235L10.7177 10.3149C12.9642 10.3063 14.8763 11.7468 15.5793 13.7532" stroke="white" stroke-width="1.60054" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-[1.5px] h-[34px] bg-white/20 mx-[12px]"></div>
                  <div className="flex flex-col">
                    <span className="text-white text-[13.5px] font-medium leading-tight mb-0.5">Content Batch</span>
                    <span className="text-white/50 text-[10px] leading-tight truncate max-w-[90px]">Create Content B...</span>
                  </div>
                </div>

                {/* Content Batch 2 */}
                <div className="absolute top-[280px] left-[550px] w-[186.19px] h-[70px] bg-[#0A1325]/50 border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] z-20 transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#B6DAFF] to-[#63A2FF] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(84,160,255,0.4)]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.28906 7.71689V13.7189" stroke="white" stroke-width="1.60054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.5015 7.28818C6.04052 7.28818 7.28815 6.04055 7.28815 4.50153C7.28815 2.9625 6.04052 1.71487 4.5015 1.71487C2.96247 1.71487 1.71484 2.9625 1.71484 4.50153C1.71484 6.04055 2.96247 7.28818 4.5015 7.28818Z" stroke="white" stroke-width="1.60054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.28714 18.8635C5.70778 18.8635 6.85943 17.7118 6.85943 16.2912C6.85943 14.8706 5.70778 13.7189 4.28714 13.7189C2.8665 13.7189 1.71484 14.8706 1.71484 16.2912C1.71484 17.7118 2.8665 18.8635 4.28714 18.8635Z" stroke="white" stroke-width="1.60054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.291 18.8635C17.7117 18.8635 18.8633 17.7118 18.8633 16.2912C18.8633 14.8706 17.7117 13.7189 16.291 13.7189C14.8704 13.7189 13.7188 14.8706 13.7188 16.2912C13.7188 17.7118 14.8704 18.8635 16.291 18.8635Z" stroke="white" stroke-width="1.60054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.39844 7.71689C4.78428 9.21739 6.15617 10.3321 7.77672 10.3235L10.7177 10.3149C12.9642 10.3063 14.8763 11.7468 15.5793 13.7532" stroke="white" stroke-width="1.60054" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-[1.5px] h-[34px] bg-white/80 mx-[12px]"></div>
                  <div className="flex flex-col">
                    <span className="text-white text-[13.5px] font-medium leading-tight mb-0.5">Content Batch</span>
                    <span className="text-white/50 text-[10px] leading-tight truncate max-w-[90px]">Create Content B...</span>
                  </div>
                </div>

                {/* AI Prompt Node */}
                <div className="absolute top-[370px] left-[290px] w-[186.19px] h-[70px] bg-[#0A1325]/80 border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] z-20 transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#5BEC71] to-[#0F72D7] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(91,236,113,0.4)] text-[#020A16]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5011 1.90912L12.445 8.55613L19.092 10.5L12.445 12.4439L10.5011 19.0909L8.55716 12.4439L1.91016 10.5L8.55716 8.55613L10.5011 1.90912Z" stroke="white" stroke-width="1.68" stroke-linejoin="round"/>
                    <path d="M16.5938 2.78589C16.6527 2.58448 16.938 2.58448 16.9969 2.78589L17.2382 3.61116C17.2583 3.67991 17.3121 3.73367 17.3808 3.75377L18.2061 3.99512C18.4075 4.05402 18.4075 4.33934 18.2061 4.39824L17.3808 4.63959C17.3121 4.65969 17.2583 4.71345 17.2382 4.7822L16.9969 5.60747C16.938 5.80888 16.6527 5.80888 16.5938 5.60747L16.3524 4.7822C16.3323 4.71345 16.2785 4.65969 16.2098 4.63959L15.3845 4.39824C15.1831 4.33934 15.1831 4.05402 15.3845 3.99512L16.2098 3.75377C16.2785 3.73367 16.3323 3.67991 16.3524 3.61116L16.5938 2.78589Z" fill="white"/>
                    <path d="M4.00001 14.3386C4.05891 14.1372 4.34422 14.1372 4.40312 14.3386L4.64447 15.1639C4.66457 15.2326 4.71833 15.2864 4.78708 15.3065L5.61235 15.5479C5.81376 15.6068 5.81376 15.8921 5.61235 15.951L4.78708 16.1923C4.71833 16.2124 4.66457 16.2662 4.64447 16.3349L4.40312 17.1602C4.34422 17.3616 4.05891 17.3616 4.00001 17.1602L3.75866 16.3349C3.73855 16.2662 3.68479 16.2124 3.61604 16.1923L2.79077 15.951C2.58937 15.8921 2.58937 15.6068 2.79077 15.5479L3.61604 15.3065C3.68479 15.2864 3.73855 15.2326 3.75866 15.1639L4.00001 14.3386Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="w-[1.5px] h-[34px] bg-white/20 mx-[12px]"></div>
                  <div className="flex flex-col">
                    <span className="text-white text-[13.5px] font-medium leading-tight mb-0.5">AI Prompt</span>
                    <span className="text-white/50 text-[10px] leading-tight truncate max-w-[90px]">Generate Co...</span>
                  </div>
                </div>

                {/* Search Workflow Node */}
                <div className="absolute top-[382px] left-[60px] w-[170px] h-[45px] bg-[#0A1325] border border-[#FFFFFF1A] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center px-4 z-20 hover:border-white/30 transition-colors backdrop-blur-md">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 opacity-70">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <span className="text-white/90 text-[13px] font-medium tracking-wide">Search Workflow</span>
                </div>

                {/* Small Add Step Node */}
                <div 
                  className="absolute top-[80px] left-[650px] w-[45px] h-[45px] bg-[#FFFFFF03] rounded-[10px] flex flex-col items-center justify-center z-20 cursor-pointer hover:bg-white/[0.08] transition-colors"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' stroke='rgba(255,255,255,0.25)' stroke-width='1.5' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
                  }}
                >
                  <span className="text-white/60 text-[16px] font-light mb-0.5 leading-none">+</span>
                  <span className="text-white/60 text-[6.5px] font-medium text-center leading-[1]">Add Step</span>
                </div>

                {/* Run Workflow Button */}
                <button className="absolute top-[382px] left-[560px] w-[160px] h-[45px] bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] rounded-[10px] shadow-[0_0_25px_rgba(34,197,94,0.4)] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform z-20 border border-[#FFFFFF1A] group">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16797 2.5L15.8346 10L4.16797 17.5V2.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  <span className="text-white text-[13.5px] font-semibold tracking-wide">Run Workflow</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}