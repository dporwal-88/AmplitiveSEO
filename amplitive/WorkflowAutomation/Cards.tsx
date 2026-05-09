"use client";
import React from "react";

export default function Cards() {
  return (
    <div className="bg-[#01091E] overflow-hidden pb-20">
      {/* ══════════════════════════════════════════════
          SECTION 2 — TEXT BLOCK
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 py-12 md:py-16 lg:py-24 px-5 lg:px-6 max-w-[1440px] mx-auto text-center">
        <h2 className="text-[22px] sm:text-[30px] lg:text-[42px] font-medium leading-[1.3] text-white mb-6">
          A CRM becomes more valuable when it is not isolated <br className="hidden md:block" />
          from the rest of 
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] via-[#0F72D7] to-[#003F9D]">
            {" "}business execution
          </span>
        </h2>
        <p className="text-[13.4px] lg:text-[15px] text-white/80 leading-[1.2] max-w-[1100px] mx-auto">
          Leads often disappear into separate systems after campaigns go live. Amplitive keeps CRM and pipeline 
          activity connected to outreach,<br className="hidden lg:block"/> email, paid campaigns, and project <br className="hidden lg:block"/> workflows so teams can manage 
          movement <br className="hidden lg:block"/> through the pipeline with more clarity and <br className="hidden lg:block"/> less manual chasing.
        </p>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 — FEATURE CARDS
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto py-4 lg:py-12 px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          
          {/* ── CARD 1: Pre-Built Automation Modules ── */}
          <FeatureCard className="h-[260px] sm:h-[380px] md:h-[420px] lg:h-[460px]">
            {/* Original Background SVG Glow */}
            <div className="absolute -bottom-20 -right-20 pointer-events-none z-0 opacity-40">
              <svg width="900" height="480" viewBox="0 0 332 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2" filter="url(#filter0_f_303_14675)">
                  <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_303_14675)" />
                </g>
                <defs>
                  <filter id="filter0_f_303_14675" x="-9.15527e-05" y="-35.9474" width="817.895" height="817.895" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="74.9737" result="effect1_foregroundBlur_303_14675" />
                  </filter>
                  <radialGradient id="paint0_radial_303_14675" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                    <stop stopColor="#5BEC71" />
                    <stop offset="1" stopColor="#0F72D7" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            {/* Original Background Grid */}
            <>
              <div className="absolute bottom-0 -right-2 pointer-events-none w-[80%] h-[80%] opacity-60 block md:hidden"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 2px, transparent 1px)`,
                  backgroundSize: "35px 35px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)",
                }} />
              <div className="absolute bottom-0 -right-2 pointer-events-none w-[80%] h-[80%] opacity-60 hidden md:block"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 4px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 4px, transparent 1px)`,
                  backgroundSize: "60px 60px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)",
                }} />
            </>

            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-gradient-to-br from-[#FF8A9B] to-[#FF6B8B] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,107,139,0.3)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><path d="M14 8h3M14 12h3M14 16h3"/>
                    </svg>
                  </div>
                }
                title="Pre-Built Automation Modules"
              />
              <p className="text-[12px] md:text-[14px] text-white/80 leading-[1.4] mb-6 mt-1">
                Start with ready-to-use workflows for recurring marketing and operational tasks.
              </p>

              {/* Floating Content Elements */}
              <div className="relative flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[600px] h-[300px] scale-[0.45] sm:scale-[0.65] md:scale-[0.55] lg:scale-[0.75] xl:scale-[0.85] origin-center -translate-y-4">
                  {/* Top Center Card */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] bg-white rounded-[12px] p-4 shadow-xl z-30 transition-transform hover:-translate-y-1" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)" }}>
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[14px] font-semibold text-[#01091E] mb-1">Two Week Content Batch</h4>
                        <p className="text-[10px] text-gray-500 leading-[1.3] mb-3">Generate a 14-day brand content calendar with AI-powered text generation, human approval, platform-specific tweaks, image generation, and automated HubSpot creation.</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Marketing</span>
                          <span className="text-[9px] text-gray-400">12 steps</span>
                        </div>
                      </div>
                      <button className="bg-[#0A1325] text-white text-[11px] font-medium px-4 py-1.5 rounded-[6px] hover:bg-gray-800 transition-colors">Install</button>
                    </div>
                  </div>

                  {/* Bottom Left Card */}
                  <div className="absolute bottom-4 left-[20px] w-[260px] bg-white rounded-[12px] p-4 shadow-xl z-20 transition-transform hover:-translate-y-1" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)" }}>
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[14px] font-semibold text-[#01091E] mb-1">AI Lead Generation</h4>
                        <p className="text-[10px] text-gray-500 leading-[1.3] mb-3">End-to-end automated list generation sequence to define ICPs, build email sequences with AI, launch campaigns, and handle replies with AI SDR.</p>
                        <span className="text-[9px] font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">Sales</span>
                      </div>
                    </div>
                    <button className="absolute top-4 right-4 bg-[#0A1325] text-white text-[11px] font-medium px-4 py-1.5 rounded-[6px] hover:bg-gray-800 transition-colors">Install</button>
                  </div>

                  {/* Bottom Right Card */}
                  <div className="absolute bottom-4 right-[20px] w-[260px] bg-white rounded-[12px] p-4 shadow-xl z-20 transition-transform hover:-translate-y-1" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)" }}>
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[14px] font-semibold text-[#01091E] mb-1">Cold Outbound Setup</h4>
                        <p className="text-[10px] text-gray-500 leading-[1.3] mb-3">Set up a complete cold email outbound system. Verify domain health, configure senders, create AI-powered sequences, and prepare for launch.</p>
                        <span className="text-[9px] font-semibold text-pink-600 bg-pink-50 px-2 py-0.5 rounded">Sales</span>
                      </div>
                    </div>
                    <button className="absolute top-4 right-4 bg-[#0A1325] text-white text-[11px] font-medium px-4 py-1.5 rounded-[6px] hover:bg-gray-800 transition-colors">Install</button>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 2: Custom Workflow Builder ── */}
          <FeatureCard className="h-[260px] md:h-[420px] lg:h-[460px]">
             {/* Original Background SVG Glow */}
             <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
              <svg width="800" height="430" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6" filter="url(#filter0_f_lead_glow)">
                  <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_lead_glow)" />
                </g>
                <defs>
                  <filter id="filter0_f_lead_glow" x="-100" y="-100" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_lead_glow" />
                  </filter>
                  <radialGradient id="paint0_radial_lead_glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                    <stop stopColor="#5BEC71" />
                    <stop offset="1" stopColor="#0F72D7" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            {/* Original Background Grid */}
            <>
              <div className="absolute bottom-0 -left-8 pointer-events-none w-[80%] h-[70%] block md:hidden"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)`,
                  backgroundSize: "40px 40px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
                }} />
              <div className="absolute bottom-0 -left-8 pointer-events-none w-[50%] h-[70%] hidden md:block"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 4px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 4px, transparent 1px)`,
                  backgroundSize: "60px 60px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
                }} />
            </>

            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-gradient-to-br from-[#A5FFD6] to-[#48DBFB] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(72,219,251,0.3)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#01091E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                }
                title="Custom Workflow Builder"
              />
              <p className="text-[12px] md:text-[14px] text-white/80 leading-[1.4] mb-6 mt-1">
                Expand into more flexible logic and tailored workflow design in higher tiers.
              </p>

              {/* Workflow Nodes */}
              <div className="relative flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[500px] h-[320px] scale-[0.5] sm:scale-[0.65] md:scale-[0.6] lg:scale-[0.75] xl:scale-[0.85] origin-center translate-y-4">
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 320">
                    <g fill="none" strokeWidth="2" strokeDasharray="4 4" opacity="0.7">
                      <path d="M 120 160 C 180 160, 180 60, 240 60" stroke="#5BEC71" />
                      <path d="M 120 160 L 240 160" stroke="#5BEC71" />
                      <path d="M 120 160 C 180 160, 180 260, 240 260" stroke="#5BEC71" />
                    </g>
                    {/* Glowing dots */}
                    <circle cx="170" cy="95" r="3" fill="#5BEC71" filter="drop-shadow(0 0 4px #5BEC71)" />
                    <circle cx="180" cy="160" r="3" fill="#5BEC71" filter="drop-shadow(0 0 4px #5BEC71)" />
                    <circle cx="170" cy="225" r="3" fill="#5BEC71" filter="drop-shadow(0 0 4px #5BEC71)" />
                  </svg>

                  {/* Add Step Box */}
                  <div className="absolute top-[115px] left-0 w-[100px] h-[90px] bg-white/[0.04] border-[2px] border-dashed border-[#5BEC71]/40 rounded-[12px] flex flex-col items-center justify-center z-20 cursor-pointer shadow-[0_0_20px_rgba(91,236,113,0.1)] backdrop-blur-sm">
                    <span className="text-white text-[24px] font-light mb-1 leading-none">+</span>
                    <span className="text-white/80 text-[11px] font-medium tracking-wide">Add Step</span>
                  </div>

                  {/* Top Node */}
                  <div className="absolute top-[25px] left-[240px] w-[210px] h-[70px] bg-[#0A1325]/80 border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] z-20">
                    <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#7BF58E] to-[#4ADE80] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(91,236,113,0.4)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#01091E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
                    </div>
                    <div className="w-[1.5px] h-[34px] bg-white/20 mx-[14px]"></div>
                    <div className="flex flex-col">
                      <span className="text-white text-[13.5px] font-medium leading-tight mb-0.5">Trigger Manually</span>
                      <span className="text-white/50 text-[10px] leading-tight">"When clicking"</span>
                    </div>
                  </div>

                  {/* Middle Node */}
                  <div className="absolute top-[125px] left-[240px] w-[210px] h-[70px] bg-[#0A1325]/80 border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] z-20">
                    <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#B8A4FF] to-[#6B31B6] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(107,49,182,0.4)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div className="w-[1.5px] h-[34px] bg-white/20 mx-[14px]"></div>
                    <div className="flex flex-col">
                      <span className="text-white text-[13.5px] font-medium leading-tight mb-0.5">On a Schedule</span>
                      <span className="text-white/50 text-[10px] leading-tight">On custom interval</span>
                    </div>
                  </div>

                  {/* Bottom Node */}
                  <div className="absolute top-[225px] left-[240px] w-[210px] h-[70px] bg-[#0A1325]/80 border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[20px] py-[14px] z-20">
                    <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#73B4FF] to-[#3B82F6] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                    </div>
                    <div className="w-[1.5px] h-[34px] bg-white/20 mx-[14px]"></div>
                    <div className="flex flex-col">
                      <span className="text-white text-[13.5px] font-medium leading-tight mb-0.5">Flow</span>
                      <span className="text-white/50 text-[10px] leading-tight">Branch, merge or loop</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 3: Advanced Integrations ── */}
          <FeatureCard className="h-[260px] md:h-[420px] lg:h-[460px]">
             {/* Original Background SVG Glow */}
             <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
              <svg width="800" height="800" viewBox="0 0 800 800" className="h-[520px] md:h-[800px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6" filter="url(#filter0_f_123_client)">
                  <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_123_client)" />
                </g>
                <defs>
                  <filter id="filter0_f_123_client" x="-100" y="-100" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_123_client" />
                  </filter>
                  <radialGradient id="paint0_radial_123_client" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                    <stop stopColor="#5BEC71" />
                    <stop offset="1" stopColor="#0F72D7" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            {/* Original Background Grid */}
            <>
              <div className="absolute bottom-0 -left-10 pointer-events-none w-[80%] h-[74%] block md:hidden"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)`,
                  backgroundSize: "40px 40px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
                }} />
              <div className="absolute bottom-0 -left-10 pointer-events-none w-[50%] h-[84%] hidden md:block"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 4px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 4px, transparent 1px)`,
                  backgroundSize: "60px 60px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
                }} />
            </>

            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-[#2563EB] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                  </div>
                }
                title="Advanced Integrations"
              />
              <p className="text-[12px] md:text-[14px] text-white/80 leading-[1.4] mb-6 mt-1">
                Connect automation to broader systems and operational requirements as the setup matures.
              </p>

              {/* Integration Nodes */}
              <div className="relative flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[500px] h-[300px] scale-[0.5] sm:scale-[0.65] md:scale-[0.6] lg:scale-[0.75] xl:scale-[0.9] origin-center -translate-y-2">
                  
                  {/* Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 300">
                    <g fill="none" strokeWidth="2" strokeDasharray="5 5" opacity="0.6">
                      <path d="M 180 80 C 230 80, 230 150, 250 150" stroke="#5BEC71" />
                      <path d="M 250 150 C 270 150, 270 230, 320 230" stroke="#0E78E9" />
                    </g>
                  </svg>

                  {/* Top Left Card (Gmail) */}
                  <div className="absolute top-[40px] left-[20px] w-[180px] bg-white rounded-[12px] p-4 shadow-xl z-20 flex items-center justify-between" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center shrink-0">
                        {/* Fake Gmail logo */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z" fill="#E5E7EB"/>
                          <path d="M2 6L12 13L22 6" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 20V6" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 20V6" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[14px] font-semibold text-[#01091E]">Email</span>
                    </div>
                    <span className="text-[9px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200">Connected ✓</span>
                  </div>

                  {/* Center Node (Integration Hub) */}
                  <div className="absolute top-[110px] left-[210px] w-[80px] h-[80px] z-20 flex items-center justify-center">
                    {/* Glowing Rings */}
                    <div className="absolute w-[140px] h-[140px] rounded-full border border-dashed border-[#5BEC71]/40 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-[100px] h-[100px] rounded-full border border-solid border-[#0E78E9]/30 shadow-[0_0_30px_rgba(14,120,233,0.3)]" />
                    
                    {/* Core Hub */}
                    <div className="relative w-14 h-14 rounded-full bg-[#0A1325] border border-white/20 shadow-[0_0_20px_rgba(91,236,113,0.4)] flex items-center justify-center z-30">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5BEC71] to-[#0E78E9] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Right Card (Analytics) */}
                  <div className="absolute top-[190px] left-[290px] w-[200px] bg-white rounded-[12px] p-4 shadow-xl z-20 flex items-center justify-between" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center shrink-0">
                        {/* Fake Analytics logo */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect x="4" y="14" width="4" height="6" fill="#FBBD04"/>
                          <rect x="10" y="10" width="4" height="10" fill="#EA4335"/>
                          <rect x="16" y="4" width="4" height="16" fill="#4285F4"/>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] text-gray-500 leading-tight">Analytics</span>
                        <span className="text-[13px] font-semibold text-[#01091E] leading-tight">Google Analytics</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200">Connected ✓</span>
                  </div>

                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 4: Recurring Process Logic ── */}
          <FeatureCard className="h-[260px] md:h-[420px] lg:h-[460px]">
            {/* Original Background SVG Glow */}
            <div className="absolute -bottom-20 -right-20 pointer-events-none z-0 opacity-40">
              <svg width="900" height="480" viewBox="0 0 332 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2" filter="url(#filter0_f_303_14675_4)">
                  <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_303_14675_4)" />
                </g>
                <defs>
                  <filter id="filter0_f_303_14675_4" x="-9.15527e-05" y="-35.9474" width="817.895" height="817.895" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="74.9737" result="effect1_foregroundBlur_303_14675_4" />
                  </filter>
                  <radialGradient id="paint0_radial_303_14675_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                    <stop stopColor="#5BEC71" />
                    <stop offset="1" stopColor="#0F72D7" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            {/* Original Background Grid */}
            <>
              <div className="absolute bottom-0 -right-2 pointer-events-none w-[80%] h-[80%] opacity-60 block md:hidden"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 2px, transparent 1px)`,
                  backgroundSize: "40px 40px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)",
                }} />
              <div className="absolute bottom-0 -right-2 pointer-events-none w-[80%] h-[80%] opacity-60 hidden md:block"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 4px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 4px, transparent 1px)`,
                  backgroundSize: "60px 60px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)",
                }} />
            </>

            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-gradient-to-br from-[#FFAF65] to-[#FF8C38] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,159,67,0.3)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                    </svg>
                  </div>
                }
                title="Recurring Process Logic"
              />
              <p className="text-[12px] md:text-[14px] text-white/80 leading-[1.4] mb-6 mt-1">
                Standardize nurture, onboarding, reporting, and internal handoffs with less manual effort.
              </p>

              {/* 4 Process Cards */}
              <div className="relative flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[500px] h-[260px] scale-[0.5] sm:scale-[0.65] md:scale-[0.6] lg:scale-[0.75] xl:scale-[0.9] origin-center -translate-y-4 flex flex-col gap-6">
                  
                  {/* Top Row */}
                  <div className="flex justify-between w-full px-6">
                    {/* Save Time */}
                    <div className="w-[200px] bg-white rounded-[12px] p-4 shadow-xl flex items-center gap-3 transition-transform hover:-translate-y-1" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)" }}>
                      <div className="w-10 h-10 rounded-[10px] bg-purple-100 flex items-center justify-center shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13.5px] font-semibold text-[#01091E] leading-tight">Save Time</span>
                        <span className="text-[10px] text-gray-500 mt-1 leading-tight">Automate repetitive processes</span>
                      </div>
                    </div>

                    {/* Reduce Errors */}
                    <div className="w-[200px] bg-white rounded-[12px] p-4 shadow-xl flex items-center gap-3 transition-transform hover:-translate-y-1" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)" }}>
                      <div className="w-10 h-10 rounded-[10px] bg-orange-100 flex items-center justify-center shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13.5px] font-semibold text-[#01091E] leading-tight">Reduce Errors</span>
                        <span className="text-[10px] text-gray-500 mt-1 leading-tight">Consistent Execution every time</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="flex justify-between w-full px-6">
                    {/* Improve Handoffs */}
                    <div className="w-[200px] bg-white rounded-[12px] p-4 shadow-xl flex items-center gap-3 transition-transform hover:-translate-y-1" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)" }}>
                      <div className="w-10 h-10 rounded-[10px] bg-blue-100 flex items-center justify-center shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13.5px] font-semibold text-[#01091E] leading-tight">Improve Handoffs</span>
                        <span className="text-[10px] text-gray-500 mt-1 leading-tight">Ensure nothing falls through the cracks</span>
                      </div>
                    </div>

                    {/* Scale */}
                    <div className="w-[200px] bg-white rounded-[12px] p-4 shadow-xl flex items-center gap-3 transition-transform hover:-translate-y-1" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)" }}>
                      <div className="w-10 h-10 rounded-[10px] bg-pink-100 flex items-center justify-center shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13.5px] font-semibold text-[#01091E] leading-tight">Scale</span>
                        <span className="text-[10px] text-gray-500 mt-1 leading-tight">Standardized processes that grow with you</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </FeatureCard>

        </div>
      </div>
    </div>
  );
}

// Reusable Helper Components
export function FeatureCard({ children, className }) {
  return (
    <div className={`relative rounded-[20px] border border-white/10 bg-[#01091E] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_4px_4px_36px_rgba(117,186,255,0.12),inset_4px_4px_36px_rgba(91,236,113,0.05)] backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-300 ease-in-out p-6 lg:p-7 flex flex-col ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-2 z-10">
      <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-[17px] font-medium text-white">{title}</h3>
    </div>
  );
}