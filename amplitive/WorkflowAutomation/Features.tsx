"use client";

import React from "react";
import { Montserrat_Alternates, Montserrat } from 'next/font/google';

// Configure the fonts
const montserratAlt = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['600', '700'], 
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function Features() {
  return (
    <div
      className={`relative w-full min-h-[100dvh] bg-[#01091E] text-white overflow-hidden ${montserrat.className}`}
    >
      <BackgroundGlows />
      <GridBackground />

      {/* ══════════════════════════════════════════════
          UNIFIED RESPONSIVE LAYOUT (Same as Calendar)
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-14 md:flex-row md:justify-center md:h-screen md:px-0 md:pt-0">
        
        {/* Scaling Wrapper */}
        <div className="w-full flex flex-col items-center md:relative md:w-[1495px] md:min-h-[600px] md:flex-row md:items-center md:justify-between md:scale-[0.5] lg:scale-[0.65] xl:scale-[0.8] 2xl:scale-100 md:origin-center md:z-10 md:transition-transform md:duration-300">
          
          {/* ── 1. Text & CTA Section ── */}
          <div className="w-[100%] md:w-[650px] md:h-[411px] md:flex-shrink-0 md:flex md:flex-col md:justify-center md:pl-4 md:-translate-y-[20px] md:translate-x-[50px] md:text-left">
            <div className="inline-flex items-center justify-center mx-auto md:mx-0 px-4 py-1.5 md:py-2 border border-white/20 rounded-full mb:3 md:mb-5 text-[13px] md:text-[13.5px] md:font-medium text-white/80 tracking-wide md:bg-[#FFFFFF08] md:w-max scale-[0.8] md:scale-[1]">
              Workflow Automation
            </div>
            <h1 className="text-[24.5px] sm:text-[32px] md:text-[45px] lg:text-[46px] font-medium leading-[1.35] md:leading-[1.15] text-[#FFFFFF] mb-4 md:mb-6">
              Run your business <br/>
               on reliable{" "}<br/>
              <span className={`${montserratAlt.className} md:font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#0E78E9]`}>
                AI workflows.
              </span>
            </h1>
            <div className="text-[13.5px] md:text-[16px] font-light text-[#FFFFFF] leading-[1.25] md:leading-[1.7] w-[310px] md:w-[480px] mx-auto md:mx-0 mb-7 md:mb-8">
              <div className="hidden md:block">
              AI automates tasks, handoffs, and workflows—so your operations run
              consistently as you scale.
              </div>
              <div className="block md:hidden">
              Amplitive helps teams automate routine tasks, handoffs, and operational steps so execution scales with less manual effort.
              </div>
            </div>
            
            <div className="flex flex-col-reverse md:flex-row items-center gap-3 md:gap-4 justify-center md:justify-start">
              <button className="px-8.5 md:px-6 py-2 md:py-2.5 rounded-[6px] md:rounded-lg text-[10.1px] md:text-[13px] font-medium text-white/90 bg-[#FFFFFF1F] md:bg-[#1e2e46] backdrop-blur-[32px] md:backdrop-blur-none hover:bg-[#2a4060] transition-all shadow-sm scale-[1.1] md:scale-100 cursor-pointer">
                Book Demo
              </button>
              <button className="flex items-center gap-2 px-8 md:px-8 py-2.5 rounded-[7px] md:rounded-lg text-[12px] md:text-[13px] md:font-semibold text-[#000000] bg-[#FFFFFF] hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] scale-[0.86] md:scale-100 cursor-pointer">
                View Pricing
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>

          {/* ── 2. Floating Widgets Container ── */}
          <div className="w-full relative md:left-[30px] md:mt-0 md:flex-shrink-0 md:w-[796px] md:h-[497px] flex justify-center items-center md:block md:-translate-x-[50px]">
            {/* Mobile Scaling Wrapper for Workflow Nodes */}
            <div className="relative origin-center scale-[0.48] sm:scale-[0.55] md:scale-[1] md:w-full md:h-full flex items-center justify-center">
              
              <div className="relative flex-shrink-0 w-[780px] h-[480px] z-20">
                {/* ── Connecting Lines (SVG Overlay) ── */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  
                  {/* Line joining start and code node */}
                  <svg className="absolute top-[65px] left-[173px]" width="266" height="217" viewBox="0 0 266 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 216.5V60.5C0.5 27.3629 27.3629 0.5 60.5 0.5H265.5" stroke="url(#paint0_linear_425_1483)"/>
                    <defs>
                      <linearGradient id="paint0_linear_425_1483" x1="-4.03774" y1="108.5" x2="240.525" y2="108.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5BEC71"/>
                        <stop offset="1" stopColor="#0F72D7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Line joining code and knowledge nodes */}
                  <svg className="absolute top-[92px] left-[341px]" width="132" height="70" viewBox="0 0 159 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M158.5 0C158.5 14.3594 146.859 30 132.5 28H34.5C15.7223 30 0.5 41.2223 0.5 80" stroke="url(#paint0_linear_425_1485)"/>
                    <defs>
                      <linearGradient id="paint0_linear_425_1485" x1="161.206" y1="30" x2="15.3908" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5BEC71"/>
                        <stop offset="1" stopColor="#0F72D7"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Line joining code and content batch 1 */}
                  <svg className="absolute top-[96px] left-[473px]" width="153" height="60" viewBox="0 0 159 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0C0.5 14.3594 12.1406 26 26.5 26H124.5C143.278 26 158.5 41.2223 158.5 80" stroke="url(#paint0_linear_425_1484)"/>
                    <defs>
                      <linearGradient id="paint0_linear_425_1484" x1="-2.20552" y1="30" x2="143.609" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5BEC71"/>
                        <stop offset="1" stopColor="#0F72D7"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Line joining content batch 1 and content batch 2 */}
                  <svg className="absolute top-[226px] left-[626px]" width="1" height="95" viewBox="0 0 1 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 95L0.500004 -7.15256e-07" stroke="url(#paint0_linear_425_1486)"/>
                    <defs>
                      <linearGradient id="paint0_linear_425_1486" x1="1" y1="96.6267" x2="1" y2="8.95333" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5BEC71"/>
                        <stop offset="1" stopColor="#0F72D7"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Line joining content batch 2 to left nodes (Search/AI) */}
                  <svg className="absolute top-[326px] left-[258px]" width="272" height="113" viewBox="0 0 322 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M321.5 0.5H56.5C25.572 0.5 0.5 25.5721 0.5 56.5V64C0.5 90.7858 22.2142 112.5 49 112.5" stroke="url(#paint0_linear_425_1488)"/>
                    <defs>
                      <linearGradient id="paint0_linear_425_1488" x1="-4.99666" y1="56.5" x2="291.247" y2="56.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5BEC71"/>
                        <stop offset="1" stopColor="#0F72D7"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Missing vertical line joining Knowledge node down to the horizontal line above */}
                  <svg className="absolute top-[226px] left-[343px]" width="2" height="110" viewBox="0 0 2 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0V110" stroke="url(#paint_knowledge_line)" strokeWidth="1.5" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="paint_knowledge_line" x1="1" y1="0" x2="1" y2="110" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0F72D7"/>
                        <stop offset="1" stopColor="#0F72D7"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* ── Spot Colors (Glowing Ovals) ── */}
                  {[
                    { top: '157.5px', left: '167px', rotate: '' }, // Start -> Code
                    { top: '107.5px', left: '370px', rotate: 'rotate-90' }, // Code -> Knowledge
                    { top: '109.5px', left: '565.5px', rotate: 'rotate-90' }, // Code -> CB1
                    { top: '258.5px', left: '337.5px', rotate: '' }, // Knowledge -> bottom
                    { top: '255.5px', left: '619.5px', rotate: '' },//cb1 to cb2
                    { top: '411px', left: '272px', rotate: 'rotate-125' }, // Search -> AI Prompt curve
                    { top: '322px', left: '403.5px', rotate: 'rotate-90' }, // Search -> CB2
                  ].map((spot, i) => (
                    <svg key={`spot-${i}`} className={`absolute ${spot.rotate}`} style={{ top: spot.top, left: spot.left }} width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter={`url(#filter-spot-${i})`} style={{ mixBlendMode: 'soft-light' }}>
                        <ellipse cx="6.50321" cy="12.497" rx="8.49815" ry="2.5" transform="rotate(-90.9768 6.50321 12.497)" fill={`url(#paint-spot-${i})`}/>
                      </g>
                      <defs>
                        <filter id={`filter-spot-${i}`} x="0" y="0" width="13.0078" height="24.994" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"/>
                        </filter>
                        <linearGradient id={`paint-spot-${i}`} x1="0.129592" y1="19.1637" x2="18.8493" y2="13.9935" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5BEC71"/>
                          <stop offset="1" stopColor="#0F72D7"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  ))}

                  {/* ── White Dots (Line Junctions) ── */}
                  {[
                    { top: '266.5px', left: '170.5px' }, // Start
                    { top: '62.5px', left: '378.5px' }, // Code left
                    { top: '226px', left: '341.5px' }, // Knowledge bottom branch 
                    { top: '158px', left: '339.5px' }, // Knowledge top
                    { top: '331px', left: '341.5px' }, // Knowledge vertical intersect
                    { top: '157.5px', left: '622.5px' }, // CB1 top
                    { top: '226px', left: '624px' }, // CB1 bottom
                    { top: '293px', left: '624px' }, // CB2 top
                    { top: '332.5px', left: '524.5px' }, // CB2 left
                    { top: '427px', left: '294px' }, // AI prompt left
                  ].map((pos, i) => (
                    <svg key={`dot-${i}`} className="absolute" style={{ top: pos.top, left: pos.left }} width="5" height="5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5" cy="5" r="5" fill="white" fillOpacity="0.8"/>
                    </svg>
                  ))}

                </div>

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
                <div className="absolute top-[269px] scale-[0.9] left-[80px] w-[186.19px] h-[70px] bg-[#0000001F] border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] gap-[12.33px] z-20 transition-transform hover:-translate-y-1">
                  
                  {/* Icon */}
                  <div className="flex items-center justify-center shrink-0">
                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75391 5.75443L15.9249 30.2108L19.5358 19.5795L30.2103 15.9254L5.75391 5.75443Z" stroke="white" strokeWidth="2.87722" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Divider Line */}
                  <div className="w-[0.99px] h-[42px] bg-[#D9DADB] shrink-0"></div>

                  {/* Text Content */}
                  <div className="flex flex-col items-start gap-[8px] font-urbanist w-[97px]">
                    <span className="text-[#FFFFFF] text-[15.1px] font-medium leading-none">
                      Start
                    </span>
                    <span className="text-white/60 text-[11.5px] font-normal leading-none truncate">
                      "When clicking"
                    </span>
                  </div>
                  
                </div>

                {/* Knowledge Node */}
                <div className="absolute top-[160px] left-[250px] scale-[0.9] w-[186.19px] h-[70px] bg-[#0000001F] border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] gap-[12.33px] z-20 transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#FFEAF3] to-[#DC486D] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,107,139,0.4)]">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.80469 2.70767H7.22005C8.17754 2.70767 9.09582 3.08804 9.77287 3.76509C10.4499 4.44214 10.8303 5.36042 10.8303 6.31791V18.9537C10.8303 18.2356 10.545 17.5469 10.0372 17.0391C9.52944 16.5313 8.84073 16.2461 8.12261 16.2461H1.80469V2.70767Z" stroke="white" strokeWidth="1.80512" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.8576 2.70767H14.4423C13.4848 2.70767 12.5665 3.08804 11.8894 3.76509C11.2124 4.44214 10.832 5.36042 10.832 6.31791V18.9537C10.832 18.2356 11.1173 17.5469 11.6251 17.0391C12.1329 16.5313 12.8216 16.2461 13.5397 16.2461H19.8576V2.70767Z" stroke="white" strokeWidth="1.80512" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {/* Divider Line */}
                  <div className="w-[0.99px] h-[42px] bg-[#D9DADB] shrink-0"></div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col items-start gap-[8px] font-urbanist w-[97px]">
                    <span className="text-[#FFFFFF] text-[15.1px] font-medium leading-none">
                      Knowledge
                    </span>
                    <span className="text-white/60 text-[11.5px] font-normal leading-none truncate">
                      Read Brand Co...
                    </span>
                  </div>
                </div>

                {/* Code Node */}
                <div className="absolute top-[30px] left-[380px] scale-[0.95] w-[186.19px] h-[70px] bg-[#0000001F] border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] gap-[12.33px] z-20 transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#FFCC9C] to-[#FF8853] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,159,67,0.4)]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.4336 13.7189L18.8633 10.2892L15.4336 6.85945" stroke="white" strokeWidth="1.71486" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.14457 6.85945L1.71484 10.2892L5.14457 13.7189" stroke="white" strokeWidth="1.71486" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.4317 3.42973L8.14453 17.1486" stroke="white" strokeWidth="1.71486" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {/* Divider Line */}
                  <div className="w-[0.99px] h-[42px] bg-[#D9DADB] shrink-0"></div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col items-start gap-[8px] font-urbanist w-[97px]">
                    <span className="text-[#FFFFFF] text-[15.1px] font-medium leading-none">
                      Code
                    </span>
                    <span className="text-white/60 text-[11.5px] font-normal leading-none truncate">
                      Compute Batch
                    </span>
                  </div>
                </div>

                {/* Content Batch 1 */}
                <div className="absolute top-[160px] left-[520px] scale-[0.9] w-[212.19px] h-[70px] bg-[#0000001F] border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] gap-[12.33px] z-20 transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#B6DAFF] to-[#63A2FF] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(84,160,255,0.4)]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.28906 7.71689V13.7189" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.5015 7.28818C6.04052 7.28818 7.28815 6.04055 7.28815 4.50153C7.28815 2.9625 6.04052 1.71487 4.5015 1.71487C2.96247 1.71487 1.71484 2.9625 1.71484 4.50153C1.71484 6.04055 2.96247 7.28818 4.5015 7.28818Z" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.28714 18.8635C5.70778 18.8635 6.85943 17.7118 6.85943 16.2912C6.85943 14.8706 5.70778 13.7189 4.28714 13.7189C2.8665 13.7189 1.71484 14.8706 1.71484 16.2912C1.71484 17.7118 2.8665 18.8635 4.28714 18.8635Z" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.291 18.8635C17.7117 18.8635 18.8633 17.7118 18.8633 16.2912C18.8633 14.8706 17.7117 13.7189 16.291 13.7189C14.8704 13.7189 13.7188 14.8706 13.7188 16.2912C13.7188 17.7118 14.8704 18.8635 16.291 18.8635Z" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.39844 7.71689C4.78428 9.21739 6.15617 10.3321 7.77672 10.3235L10.7177 10.3149C12.9642 10.3063 14.8763 11.7468 15.5793 13.7532" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {/* Divider Line */}
                  <div className="w-[0.99px] h-[42px] bg-[#D9DADB] shrink-0"></div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col items-start gap-[8.5px] font-urbanist w-[115px]">
                    <span className="text-[#FFFFFF] text-[14.1px] font-medium leading-none">
                      Content Batch
                    </span>
                    <span className="text-white/60 text-[11.5px] font-normal leading-none truncate">
                      Create Content B...
                    </span>
                  </div>
                </div>

                {/* Content Batch 2 */}
                <div className="absolute top-[295px] left-[520px] scale-[0.9] w-[212.19px] h-[70px] bg-[#0000001F] border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] gap-[12.33px] z-20 transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#B6DAFF] to-[#63A2FF] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(84,160,255,0.4)]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.28906 7.71689V13.7189" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.5015 7.28818C6.04052 7.28818 7.28815 6.04055 7.28815 4.50153C7.28815 2.9625 6.04052 1.71487 4.5015 1.71487C2.96247 1.71487 1.71484 2.9625 1.71484 4.50153C1.71484 6.04055 2.96247 7.28818 4.5015 7.28818Z" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.28714 18.8635C5.70778 18.8635 6.85943 17.7118 6.85943 16.2912C6.85943 14.8706 5.70778 13.7189 4.28714 13.7189C2.8665 13.7189 1.71484 14.8706 1.71484 16.2912C1.71484 17.7118 2.8665 18.8635 4.28714 18.8635Z" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.291 18.8635C17.7117 18.8635 18.8633 17.7118 18.8633 16.2912C18.8633 14.8706 17.7117 13.7189 16.291 13.7189C14.8704 13.7189 13.7188 14.8706 13.7188 16.2912C13.7188 17.7118 14.8704 18.8635 16.291 18.8635Z" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.39844 7.71689C4.78428 9.21739 6.15617 10.3321 7.77672 10.3235L10.7177 10.3149C12.9642 10.3063 14.8763 11.7468 15.5793 13.7532" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {/* Divider Line */}
                  <div className="w-[0.99px] h-[42px] bg-[#D9DADB] shrink-0"></div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col items-start gap-[8.5px] font-urbanist w-[115px]">
                    <span className="text-[#FFFFFF] text-[14.1px] font-medium leading-none">
                      Content Batch
                    </span>
                    <span className="text-white/60 text-[11.5px] font-normal leading-none truncate">
                      Create Content B...
                    </span>
                  </div>
                </div>

                {/* AI Prompt Node */}
                <div className="absolute top-[390px] left-[290px] scale-[0.9] w-[186.19px] h-[70px] bg-[#0000001F] border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] gap-[12.33px] z-20 transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-tr from-[#5BEC71] to-[#0F72D7] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(91,236,113,0.4)] text-[#020A16]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5011 1.90912L12.445 8.55613L19.092 10.5L12.445 12.4439L10.5011 19.0909L8.55716 12.4439L1.91016 10.5L8.55716 8.55613L10.5011 1.90912Z" stroke="white" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.5938 2.78589C16.6527 2.58448 16.938 2.58448 16.9969 2.78589L17.2382 3.61116C17.2583 3.67991 17.3121 3.73367 17.3808 3.75377L18.2061 3.99512C18.4075 4.05402 18.4075 4.33934 18.2061 4.39824L17.3808 4.63959C17.3121 4.65969 17.2583 4.71345 17.2382 4.7822L16.9969 5.60747C16.938 5.80888 16.6527 5.80888 16.5938 5.60747L16.3524 4.7822C16.3323 4.71345 16.2785 4.65969 16.2098 4.63959L15.3845 4.39824C15.1831 4.33934 15.1831 4.05402 15.3845 3.99512L16.2098 3.75377C16.2785 3.73367 16.3323 3.67991 16.3524 3.61116L16.5938 2.78589Z" fill="white"/>
                      <path d="M4.00001 14.3386C4.05891 14.1372 4.34422 14.1372 4.40312 14.3386L4.64447 15.1639C4.66457 15.2326 4.71833 15.2864 4.78708 15.3065L5.61235 15.5479C5.81376 15.6068 5.81376 15.8921 5.61235 15.951L4.78708 16.1923C4.71833 16.2124 4.66457 16.2662 4.64447 16.3349L4.40312 17.1602C4.34422 17.3616 4.05891 17.3616 4.00001 17.1602L3.75866 16.3349C3.73855 16.2662 3.68479 16.2124 3.61604 16.1923L2.79077 15.951C2.58937 15.8921 2.58937 15.6068 2.79077 15.5479L3.61604 15.3065C3.68479 15.2864 3.73855 15.2326 3.75866 15.1639L4.00001 14.3386Z" fill="white"/>
                    </svg>
                  </div>
                  
                  {/* Divider Line */}
                  <div className="w-[0.99px] h-[42px] bg-[#D9DADB] shrink-0"></div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col gap-[8px] font-urbanist w-[87px]">
                    <span className="text-[#FFFFFF] text-[15.1px] font-medium leading-none">
                      AI Prompt
                    </span>
                    <span className="text-white/60 text-[11.5px] font-normal leading-none truncate">
                      Generate Co...
                    </span>
                  </div>
                </div>

                {/* Search Workflow Node */}
                <div className="absolute top-[370px] scale-[0.9] left-[45px] w-[241px] h-[51.88px] bg-[#00000024] border-[1.16px] border-[#FFFFFF1A] rounded-[92.94px] shadow-[inset_4.65px_4.65px_41.82px_0px_#75BAFF1F,inset_4.65px_4.65px_41.82px_0px_#5BEC710D] backdrop-blur-[12px] flex items-center justify-center px-[12px] py-[4.65px] gap-[10.46px] z-20 hover:border-white/30 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <span className="font-['Urbanist'] font-normal text-[17.26px] leading-[100%] text-[#FFFFFF] text-center">
                    Search Workflow
                  </span>
                </div>

                {/* Small Add Step Node */}
                <div 
                  className="absolute top-[35px] left-[650px] w-[52px] h-[55px] bg-white/[0.15] rounded-[10px] flex flex-col items-center justify-center z-20 cursor-pointer hover:bg-white/[0.08] transition-colors"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' stroke='rgba(255,255,255,0.25)' stroke-width='1.5' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
                  }}
                >
                  <span className="text-white/60 text-[16px] font-light mb-0.5 leading-none">+</span>
                  <span className="text-white/60 text-[6.5px] font-medium text-center leading-[1]">Add Step</span>
                </div>

                {/* Run Workflow Button */}
                <button className="absolute top-[399px] left-[525px] scale-[0.95] w-[182px] h-[45px] bg-gradient-to-t from-[#5BEC71] to-[#0F72D7] rounded-[10px] shadow-[0_0_25px_rgba(34,197,94,0.4)] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform z-20 border border-[#FFFFFF1A] group">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16797 2.5L15.8346 10L4.16797 17.5V2.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-white text-[13.5px] font-semibold tracking-wide ml-2">Run Workflow</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
    BACKGROUND COMPONENTS (Identical to Calendar)
   ══════════════════════════════════════════════ */

const BackgroundGlows = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:flex justify-center overflow-hidden">
      <svg width="1946" height="620" viewBox="0 0 1728 1168" fill="none" xmlns="http://www.w3.org/2000/svg">
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