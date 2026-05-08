"use client";
import React from "react";

export default function Cards() {
  return (
    <div className="bg-[#01091E] overflow-hidden">
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
        {/* Changed lg:grid-cols-2 to md:grid-cols-2 to ensure 2x2 grid on tablets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          
          {/* ── CARD 1: Pipeline Stages ── */}
          <FeatureCard className="h-[220px] sm:h-[380px] md:h-[380px] lg:h-[430px]">
            {/* Background SVG Glow */}
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

            {/* Background Grid */}
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
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="38" rx="5.4" fill="url(#paint0_linear_303_14677)" />
                    <path d="M17.332 14H26.4987" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.332 19H26.4987" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.332 24H26.4987" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.5 14L12.3333 14.8333L14 13.1666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.5 19L12.3333 19.8333L14 18.1666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.5 24L12.3333 24.8333L14 23.1666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_303_14677" x1="38" y1="-2.34991e-06" x2="-1.425" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA9CF" />
                        <stop offset="1" stopColor="#C62943" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                color="bg-transparent"
                title="Pipeline Stages"
              />
              <p className="text-[12.5px] md:text-[14px] text-white/80 leading-[1.2] md:leading-[1.6] md:mb-6 mt-1">
                Track opportunities through visible stages that support cleaner follow-up and ownership.
              </p>

              {/* Added intermediate md:scale-[0.65] and lg:scale-[0.8] to fit 2 columns */}
              <div className="relative flex-1 w-full mt-4 md:mt-6 mb-2 flex items-start justify-center bottom-[10%] left-[28%] md:bottom-0 md:left-0">
                <div className="relative w-full min-w-[300px] h-[160px] md:h-full md:min-w-0 origin-top scale-[0.65] sm:scale-[0.85] md:scale-[0.65] lg:scale-[0.8] xl:scale-100">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <line x1="5" y1="8" x2="15.2" y2="92" stroke="#16856f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    <line x1="5" y1="8" x2="15" y2="8" stroke="#16856f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    <line x1="7.6" y1="29" x2="20" y2="29" stroke="#16856f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    <line x1="10" y1="50" x2="35" y2="50" stroke="#16856f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    <line x1="12.8" y1="71" x2="45" y2="71" stroke="#16856f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    <line x1="15.2" y1="92" x2="55" y2="92" stroke="#16856f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                  </svg>
                  {[{ left: "15%", top: "8%" }, { left: "20%", top: "29%" }, { left: "25%", top: "50%" }, { left: "30%", top: "71%" }, { left: "35%", top: "92%" }].map((pos, index) => (
                    <div key={index} className="absolute w-[3px] h-[3px] rounded-full bg-[#A5FFD6] shadow-[0_0_8px_2px_#5BEC71] z-10" style={{ left: pos.left, top: pos.top, transform: "translate(-50%, -50%)" }} />
                  ))}
                  {[{ left: "10%", top: "8%" }, { left: "14%", top: "29%" }, { left: "19%", top: "50%" }, { left: "24%", top: "71%" }, { left: "31%", top: "92%" }].map((pos, index) => (
                    <div key={index} className="absolute w-[9px] h-[4px] rounded-full bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] shadow-[0_0_6px_1.2px_#5BEC71] z-10" style={{ left: pos.left, top: pos.top, transform: "translate(-50%, -50%)" }} />
                  ))}
                  
                  {/* Stages */}
                  <div className="absolute top-[0%] w-[65%] right-[20%] h-[18%] flex items-center gap-3 p-2.5 rounded-[6px] md:rounded-[10px] bg-white/[0.04] border border-white/5 shadow-[inset_4.87px_4.87px_43.86px_0px_rgba(117,186,255,0.12),inset_4.87px_4.87px_43.86px_0px_rgba(91,236,113,0.05)] backdrop-blur-md z-20 transition-transform hover:scale-[1.02]">
                    <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="27.9899" height="27.9899" rx="3.5987" fill="url(#paint0_linear_303_14714)"/>
                        <path d="M18.66 19.9927V18.6598C18.66 17.9529 18.3792 17.2748 17.8793 16.7749C17.3794 16.275 16.7013 15.9941 15.9943 15.9941H11.9958C11.2888 15.9941 10.6108 16.275 10.1108 16.7749C9.61093 17.2748 9.33008 17.9529 9.33008 18.6598V19.9927" stroke="white" strokeWidth="1.33285" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.9958 13.3285C15.468 13.3285 16.6615 12.135 16.6615 10.6628C16.6615 9.19055 15.468 7.99707 13.9958 7.99707C12.5236 7.99707 11.3301 9.19055 11.3301 10.6628C11.3301 12.135 12.5236 13.3285 13.9958 13.3285Z" stroke="white" strokeWidth="1.33285" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs><linearGradient id="paint0_linear_303_14714" x1="22.7418" y1="-1.21214e-06" x2="3.49873" y2="27.9899" gradientUnits="userSpaceOnUse"><stop stopColor="#B6DAFF"/><stop offset="1" stopColor="#63A2FF"/></linearGradient></defs>
                      </svg>
                    </div>
                    <div className="flex flex-col"><span className="text-[8px] md:text-[10px] text-white/70 leading-tight mb-0.5">Stage 1:</span><span className="text-[10px] md:text-[13px] text-white font-medium leading-[1] md:leading-tight tracking-wide">Capture</span></div>
                  </div>
                  <div className="absolute top-[21%] w-[55%] right-[25%] h-[18%] flex items-center gap-3 p-2.5 rounded-[6px] md:rounded-[10px] bg-white/[0.04] border border-white/5 shadow-[inset_4.87px_4.87px_43.86px_0px_rgba(117,186,255,0.12),inset_4.87px_4.87px_43.86px_0px_rgba(91,236,113,0.05)] backdrop-blur-md z-20 transition-transform hover:scale-[1.02]">
                    <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="27.9957" height="27.9957" rx="3.5987" fill="url(#paint0_linear_303_14720)"/>
                        <path d="M13.3314 18.6645C16.2769 18.6645 18.6647 16.2767 18.6647 13.3311C18.6647 10.3856 16.2769 7.9978 13.3314 7.9978C10.3859 7.9978 7.99805 10.3856 7.99805 13.3311C7.99805 16.2767 10.3859 18.6645 13.3314 18.6645Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.9996 19.9978L17.0996 17.0978" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs><linearGradient id="paint0_linear_303_14720" x1="27.9957" y1="-1.73125e-06" x2="-1.04984" y2="27.9957" gradientUnits="userSpaceOnUse"><stop stopColor="#FFEAF3"/><stop offset="1" stopColor="#DC486D"/></linearGradient></defs>
                      </svg>
                    </div>
                    <div className="flex flex-col"><span className="text-[8px] md:text-[10px] text-white/70 leading-tight mb-0.5">Stage 2:</span><span className="text-[10px] md:text-[13px] text-white font-medium leading-[1] md:leading-tight tracking-wide">Qualify</span></div>
                  </div>
                  <div className="absolute top-[42%] w-[45%] right-[30%] h-[18%] flex items-center gap-3 p-2.5 rounded-[6px] md:rounded-[10px] bg-white/[0.04] border border-white/5 shadow-[inset_4.87px_4.87px_43.86px_0px_rgba(117,186,255,0.12),inset_4.87px_4.87px_43.86px_0px_rgba(91,236,113,0.05)] backdrop-blur-md z-20 transition-transform hover:scale-[1.02]">
                    <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="27.9957" height="27.9957" rx="3.5987" fill="url(#paint0_linear_303_14728)"/>
                        <g clipPath="url(#clip0_303_14728)"><path d="M19.3314 8.66443H11.3314C10.595 8.66443 9.99805 9.26138 9.99805 9.99776V15.9978C9.99805 16.7341 10.595 17.3311 11.3314 17.3311H19.3314C20.0678 17.3311 20.6647 16.7341 20.6647 15.9978V9.99776C20.6647 9.26138 20.0678 8.66443 19.3314 8.66443Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.6647 10.6644L15.9314 13.1844C15.5514 13.3844 15.1114 13.3844 14.7314 13.1844L9.99805 10.6644" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.33398 11.3312V18.6645C7.33398 19.3978 7.93398 19.9978 8.66732 19.9978H18.0007" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/></g>
                        <defs><linearGradient id="paint0_linear_303_14728" x1="22.7465" y1="-1.21239e-06" x2="3.49946" y2="27.9957" gradientUnits="userSpaceOnUse"><stop stopColor="#FFCC9C"/><stop offset="1" stopColor="#FF8853"/></linearGradient><clipPath id="clip0_303_14728"><rect width="16" height="16" fill="white" transform="translate(5.99805 5.9978)"/></clipPath></defs>
                      </svg>
                    </div>
                    <div className="flex flex-col"><span className="text-[8px] md:text-[10px] text-white/70 leading-tight mb-0.5">Stage 3:</span><span className="text-[10px] md:text-[13px] text-white font-medium leading-[1] md:leading-tight tracking-wide">Nurture</span></div>
                  </div>
                  <div className="absolute top-[63%] w-[35%] right-[35%] h-[18%] flex items-center gap-3 p-2.5 rounded-[6px] md:rounded-[10px] bg-white/[0.04] border border-white/5 shadow-[inset_4.87px_4.87px_43.86px_0px_rgba(117,186,255,0.12),inset_4.87px_4.87px_43.86px_0px_rgba(91,236,113,0.05)] backdrop-blur-md z-20 transition-transform hover:scale-[1.02]">
                    <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="27.9957" height="27.9957" rx="3.5987" fill="url(#paint0_linear_303_14737)"/>
                        <path d="M17.334 7.33118L20.0007 9.99784L17.334 12.6645" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.99805 13.3311V12.6645C7.99805 11.9572 8.279 11.2789 8.7791 10.7789C9.27919 10.2788 9.95747 9.9978 10.6647 9.9978H19.998" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.6647 20.6645L7.99805 17.9978L10.6647 15.3312" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.998 14.6644V15.3311C19.998 16.0383 19.7171 16.7166 19.217 17.2167C18.7169 17.7168 18.0386 17.9978 17.3314 17.9978H7.99805" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs><linearGradient id="paint0_linear_303_14737" x1="22.7465" y1="-1.21239e-06" x2="3.49946" y2="27.9957" gradientUnits="userSpaceOnUse"><stop stopColor="#CCFFD4"/><stop offset="1" stopColor="#2EB0D7"/></linearGradient></defs>
                      </svg>
                    </div>
                    <div className="flex flex-col"><span className="text-[8px] md:text-[10px]text-white/70 leading-tight mb-0.5">Stage 4:</span><span className="text-[10px] md:text-[13px] text-white font-medium leading-[1] md:leading-tight tracking-wide">Convert</span></div>
                  </div>
                  <div className="absolute top-[84%] w-[25%] right-[40%] h-[18%] flex items-center gap-3  md:p-2.5 rounded-[6px] md:rounded-[10px] bg-white/[0.04] border border-white/5 shadow-[inset_4.87px_4.87px_43.86px_0px_rgba(117,186,255,0.12),inset_4.87px_4.87px_43.86px_0px_rgba(91,236,113,0.05)] backdrop-blur-md z-20 transition-transform hover:scale-[1.02]">
                    <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="27.9957" height="27.9957" rx="3.5987" fill="url(#paint0_linear_303_14747)"/>
                        <g clipPath="url(#clip0_303_14747)"><path d="M10.0007 11.9978H9.00065C8.55862 11.9978 8.1347 11.8222 7.82214 11.5096C7.50958 11.197 7.33398 10.7731 7.33398 10.3311C7.33398 9.88907 7.50958 9.46514 7.82214 9.15258C8.1347 8.84002 8.55862 8.66443 9.00065 8.66443H10.0007" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.998 11.9978H18.998C19.4401 11.9978 19.864 11.8222 20.1766 11.5096C20.4891 11.197 20.6647 10.7731 20.6647 10.3311C20.6647 9.88907 20.4891 9.46514 20.1766 9.15258C19.864 8.84002 19.4401 8.66443 18.998 8.66443H17.998" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.66211 20.6644H19.3288" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.6621 15.7711V17.3311C12.6621 17.6978 12.3488 17.9845 12.0154 18.1378C11.2288 18.4978 10.6621 19.4911 10.6621 20.6645" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.334 15.7711V17.3311C15.334 17.6978 15.6473 17.9845 15.9807 18.1378C16.7673 18.4978 17.334 19.4911 17.334 20.6645" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.998 7.33118H9.99805V11.9978C9.99805 13.0587 10.4195 14.0761 11.1696 14.8263C11.9198 15.5764 12.9372 15.9978 13.998 15.9978C15.0589 15.9978 16.0763 15.5764 16.8265 14.8263C17.5766 14.0761 17.998 13.0587 17.998 11.9978V7.33118Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/></g>
                        <defs><linearGradient id="paint0_linear_303_14747" x1="27.9957" y1="-1.73125e-06" x2="-1.04984" y2="27.9957" gradientUnits="userSpaceOnUse"><stop stopColor="#B8A4FF"/><stop offset="1" stopColor="#6B31B6"/></linearGradient><clipPath id="clip0_303_14747"><rect width="16" height="16" fill="white" transform="translate(5.99805 5.9978)"/></clipPath></defs>
                      </svg>
                    </div>
                    <div className="flex flex-col"><span className="text-[8px] md:text-[10px] text-white/70 leading-tight mb-0.5">Stage 5:</span><span className="text-[10px] md:text-[13px] text-white font-medium leading-[1] md:leading-tight tracking-wide">Close</span></div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 2: Lead Tracking ── */}
          <FeatureCard className="h-[220px] md:h-[350px] lg:h-[430px]">
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
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="38" rx="8" fill="url(#paint0_linear_lead)" />
                    <path d="M17 19C19.2091 19 21 17.2091 21 15C21 12.7909 19.2091 11 17 11C14.7909 11 13 12.7909 13 15C13 17.2091 14.7909 19 17 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 27V25C24 22.7909 22.2091 21 20 21H14C11.7909 21 10 22.7909 10 25V27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 12C25.6569 12 27 13.3431 27 15C27 16.6569 25.6569 18 24 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29 27V25C29 23.3431 27.6569 22 26 22H23.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_lead" x1="19" y1="0" x2="19" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A5FFD6" />
                        <stop offset="1" stopColor="#48DBFB" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                color="bg-transparent"
                title="Lead Tracking"
              />
              <p className="text-[11.5px] md:text-[14px] text-white/80 leading-[1.2] md:leading-[1.6] md:mb-6 mt-1">
                Keep lead records connected to the activities and campaigns generating them.
              </p>

              {/* Added intermediate md:scale-[0.55] and lg:scale-[0.75] to fit 2 columns */}
              <div className="relative flex-1 w-full mt-2 md:mt-4">
                <div className="relative w-full min-w-[600px] h-[300px] md:min-w-0 md:h-full origin-top-left md:origin-center scale-[0.45] sm:scale-[0.65] md:scale-[0.55] lg:scale-[0.75] xl:scale-[0.9] 2xl:scale-100 md:bottom-0 bottom-[2%] md:right-0 right-[20%]">
                  <div className="absolute top-[15%] md:top-[30%] -left-[10%] md:-left-[23%] w-[130px] h-[95px] bg-[#141C2F]/80 border border-white/5 rounded-[12px] shadow-lg backdrop-blur-sm z-10 transition-all" />
                  <div className="absolute top-[12%] md:top-[28%] left-[11%] md:left-[4%] w-[240px] bg-white rounded-[12px] p-3.5 shadow-xl z-30 scale-[0.8] transition-all cursor-default" style={{ boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-2.5 items-center">
                        <div className="w-9 h-9 rounded-full bg-[#1D64D8] text-white flex items-center justify-center text-[12px] font-bold shadow-sm">SB</div>
                        <div className="leading-tight"><div className="text-[13px] font-semibold text-[#01091E] mb-0.5">Steve Bennett</div><div className="text-[10px] text-gray-500">Talent X Factor</div></div>
                      </div>
                      <div className="bg-[#D4F7D9] text-[#128B2B] text-[9px] font-bold px-2.5 py-1 rounded-full">Active</div>
                    </div>
                    <div className="flex justify-between text-left">
                      <div><div className="text-[9px] text-gray-400 mb-1">Position</div><div className="text-[10px] text-[#01091E] font-medium">Manager</div></div>
                      <div><div className="text-[9px] text-gray-400 mb-1">Source</div><div className="text-[10px] text-[#01091E] font-medium">Apollo_search</div></div>
                      <div><div className="text-[9px] text-gray-400 mb-1">Last Active</div><div className="text-[10px] text-[#01091E] font-medium">08/11/2025</div></div>
                    </div>
                  </div>
                  <div className="absolute top-[15%] md:top-[30%] left-[50%] md:left-[53.5%] w-[185px] h-[97px] bg-[#141C2F]/80 border border-white/5 rounded-[12px] shadow-lg backdrop-blur-sm z-10 transition-all" />
                  <div className="absolute top-[12%] md:top-[27%] left-[80%] md:left-[93%] w-[240px] bg-white rounded-[14px] p-3.5 shadow-xl z-20 scale-[0.8] transition-all " style={{ boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-2.5 items-center">
                        <div className="w-9 h-9 rounded-full bg-[#F97316] text-white flex items-center justify-center text-[12px] font-bold shadow-sm">J</div>
                        <div className="leading-tight"><div className="text-[13px] font-semibold text-[#01091E] mb-0.5">Jason Smith</div><div className="text-[10px] text-gray-500">Acme Corp</div></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-left">
                      <div><div className="text-[9px] text-gray-400 mb-1">Position</div><div className="text-[10px] text-[#01091E] font-medium">CEO</div></div>
                    </div>
                  </div>
                  <div className="absolute top-[49%] md:top-[75%] -left-[15%] md:-left-[33%] w-[240px] bg-white rounded-[12px] p-3.5 shadow-xl z-30 transition-all cursor-default scale-[0.8]" style={{ boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-2.5 items-center">
                        <div className="w-9 h-9 rounded-full bg-[#1D64D8] text-white flex items-center justify-center text-[12px] font-bold shadow-sm">SB</div>
                        <div className="leading-tight"><div className="text-[13px] font-semibold text-[#01091E] mb-0.5">Steve Bennett</div><div className="text-[10px] text-gray-500">Talent X Factor</div></div>
                      </div>
                      <div className="bg-[#D4F7D9] text-[#128B2B] text-[9px] font-bold px-2.5 py-1 rounded-full">Active</div>
                    </div>
                    <div className="flex justify-between text-left">
                      <div><div className="text-[9px] text-gray-400 mb-1">Position</div><div className="text-[10px] text-[#01091E] font-medium">Manager</div></div>
                      <div><div className="text-[9px] text-gray-400 mb-1">Source</div><div className="text-[10px] text-[#01091E] font-medium">Apollo_search</div></div>
                      <div><div className="text-[9px]  text-[#01091E] mb-1">Last Active</div><div className="text-[10px] text-gray-400 font-medium">08/11/2025</div></div>
                    </div>
                  </div>
                  <div className="absolute top-[155px] md:top-[211px] left-[26%] md:left-[19%] w-[180px] h-[95px] bg-[#141C2F]/80 border border-white/5 rounded-[12px] scale-[1.1] shadow-lg backdrop-blur-sm z-10 transition-all" />
                  <div className="absolute top-[145px] md:top-[200px] left-[58%] md:left-[58%] w-[240px] bg-white rounded-[8px] p-3.5 shadow-xl z-20 transition-all scale-[0.8] cursor-default" style={{ boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-2.5 items-center">
                        <div className="w-9 h-9 rounded-full bg-[#6B46C1] text-white flex items-center justify-center text-[12px] font-bold shadow-sm">FM</div>
                        <div className="leading-tight"><div className="text-[13px] font-semibold text-[#01091E] mb-0.5">Frank Martin</div><div className="text-[10px] text-gray-500">Qubic</div></div>
                      </div>
                      <div className="bg-[#D4F7D9] text-[#128B2B] text-[9px] font-bold px-2.5 py-1 rounded-full">Active</div>
                    </div>
                    <div className="flex justify-between text-left">
                      <div><div className="text-[9px] text-gray-400 mb-1">Position</div><div className="text-[10px] text-[#01091E] font-medium">Ceo</div></div>
                      <div><div className="text-[9px] text-gray-400 mb-1">Source</div><div className="text-[10px] text-[#01091E] font-medium">Apollo_search</div></div>
                      <div><div className="text-[9px] text-gray-400 mb-1">Last Active</div><div className="text-[10px] text-[#01091E] font-medium">03/27/2026</div></div>
                    </div>
                  </div>
                  <div className="absolute top-[155px] md:top-[211px] left-[100%] w-[180px] h-[95px] bg-[#141C2F]/80 border border-white/5 rounded-[12px] scale-[1.1] shadow-lg backdrop-blur-sm z-10 transition-all md:hidden" />
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 3: Client Visibility ── */}
          <FeatureCard className="h-[220px] md:h-[350px] lg:h-[430px]">
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
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="38" rx="8" fill="url(#paint0_linear_eye)" />
                    <path d="M19 12C14.0294 12 10.5 19 10.5 19C10.5 19 14.0294 26 19 26C23.9706 26 27.5 19 27.5 19C27.5 19 23.9706 12 19 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="19" cy="19" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_eye" x1="19" y1="0" x2="19" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#63A2FF" />
                        <stop offset="1" stopColor="#0E4595" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                color="bg-transparent"
                title="Client Visibility"
              />
              <p className="text-[11.5px] md:text-[14px] text-white/80 leading-[1.2] md:leading-[1.6] md:mb-6 mt-1">
                Give teams a shared view of conversations, status, and next steps.
              </p>

              {/* Added intermediate md:scale-[0.55] and lg:scale-[0.75] to fit 2 columns */}
              <div className="relative flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[600px] h-[226px] scale-[0.50] sm:scale-[0.65] md:scale-[0.55] lg:scale-[0.75] xl:scale-[0.95] mt-12 origin-center">
                  <svg className="absolute inset-0 w-full h-full top-[30%]" width="600" height="226" viewBox="0 0 600 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="300.5" cy="365" r="364.383" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="12 12" />
                  </svg>

                  <div className="absolute flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_1.86px_1.86px_16.73px_0px_rgba(117,186,255,0.12),inset_1.86px_1.86px_16.73px_0px_rgba(91,236,113,0.05)] z-20 scale-[0.65] md:scale-[0.95] -translate-x-8 translate-y-6 md:-translate-x-0 md:translate-y-0"
                       style={{ left: "115px", top: "5px", transform: "translate(-50%, -50%)" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_303_14986)">
                        <path d="M5 18.3333V3.33329C5 3.10829 5 2.87496 5.05833 2.64996C5.10934 2.42548 5.22228 2.21981 5.38431 2.0563C5.54635 1.89279 5.75099 1.77799 5.975 1.72496C6.21667 1.66663 7.275 1.66663 7.5 1.66663H13.3333C13.5583 1.66663 13.7917 1.66663 14.0167 1.72496C14.2411 1.77597 14.4468 1.8889 14.6103 2.05094C14.7738 2.21298 14.8886 2.41762 14.9417 2.64163C15 2.87496 15 3.10829 15 3.33329V18.3333H5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.66592 11.6667V16.6667C1.66592 17.5833 2.41592 18.3333 3.33258 18.3333H4.99925V10H3.33258C3.10758 10 2.87425 10 2.64925 10.0583C2.42425 10.1167 2.21592 10.225 2.04925 10.3917C1.89092 10.55 1.78258 10.7583 1.72425 10.9833C1.67721 11.2079 1.65762 11.4374 1.66592 11.6667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.35 7.55835C17.1254 7.51131 16.896 7.49173 16.6667 7.50002H15V18.3334H16.6667C17.1087 18.3334 17.5326 18.1578 17.8452 17.8452C18.1577 17.5326 18.3333 17.1087 18.3333 16.6667V9.16669C18.3333 8.93336 18.3333 8.70836 18.275 8.48336C18.2167 8.25836 18.1083 8.05002 17.9417 7.88336C17.7833 7.72502 17.575 7.61669 17.35 7.55835Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.33594 5H11.6693" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.33594 8.33337H11.6693" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.33594 11.6666H11.6693" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.33594 15H11.6693" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs><clipPath id="clip0_303_14986"><rect width="20" height="20" fill="white"/></clipPath></defs>
                    </svg>
                    <span className="font-medium text-white/90 tracking-wide">Companys: 12</span>
                  </div>

                  <div className="absolute flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_1.86px_1.86px_16.73px_0px_rgba(117,186,255,0.12),inset_1.86px_1.86px_16.73px_0px_rgba(91,236,113,0.05)] z-20 scale-[0.75] md:scale-[0.95] -translate-y-9 md:translate-x-0 md:translate-y-0"
                       style={{ left: "280px", top: "190px", transform: "translate(-50%, -50%)" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.8307 17.5V15.8333C15.8307 14.9493 15.4795 14.1014 14.8544 13.4763C14.2293 12.8512 13.3815 12.5 12.4974 12.5H7.4974C6.61334 12.5 5.76549 12.8512 5.14037 13.4763C4.51525 14.1014 4.16406 14.9493 4.16406 15.8333V17.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.9974 9.16667C11.8383 9.16667 13.3307 7.67428 13.3307 5.83333C13.3307 3.99238 11.8383 2.5 9.9974 2.5C8.15645 2.5 6.66406 3.99238 6.66406 5.83333C6.66406 7.67428 8.15645 9.16667 9.9974 9.16667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium text-white/90 tracking-wide">New Lead Added</span>
                  </div>

                  <div className="absolute flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_1.86px_1.86px_16.73px_0px_rgba(117,186,255,0.12),inset_1.86px_1.86px_16.73px_0px_rgba(91,236,113,0.05)] z-20 scale-[0.85] md:scale-[0.95]"
                       style={{ left: "450px", top: "-10px", transform: "translate(-50%, -50%)" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <g clipPath="url(#clip0_303_14976)">
                        <path d="M15.0013 5L5.83464 14.1667L1.66797 10" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.332 8.33325L12.082 14.5833L10.832 13.3333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs><clipPath id="clip0_303_14976"><rect width="20" height="20" fill="white"/></clipPath></defs>
                    </svg>
                    <span className="font-light text-[13px] text-white tracking-wide whitespace-nowrap">Content Scheduled</span>
                  </div>

                  {/* Nodes */}
                  <div className="absolute w-[75px] h-[75px] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)] z-30" style={{ left: "90px", top: "130px", transform: "translate(-50%, -50%)", boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FFF0F4] to-[#FFE0EA] flex items-center justify-center shadow-[inset_0_-4px_10px_rgba(255,255,255,0.7)]">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.6673 10.4167V18.9167C36.6673 21.0333 35.9673 22.8167 34.7173 24.05C33.484 25.3 31.7007 26 29.584 26V29.0167C29.584 30.15 28.3173 30.8334 27.384 30.2L25.7673 29.1333C25.9173 28.6167 25.984 28.05 25.984 27.45V20.6667C25.984 17.2667 23.7173 15 20.3173 15H9.00064C8.76731 15 8.55065 15.0167 8.33398 15.0334V10.4167C8.33398 6.16671 11.1673 3.33337 15.4173 3.33337H29.584C33.834 3.33337 36.6673 6.16671 36.6673 10.4167Z" stroke="url(#paint0_linear_303_14948)" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M25.984 20.6667V27.45C25.984 28.05 25.9173 28.6166 25.7673 29.1333C25.1507 31.5833 23.1173 33.1167 20.3173 33.1167H15.784L10.7506 36.4667C10.0006 36.9833 9.00064 36.4333 9.00064 35.5333V33.1167C7.30064 33.1167 5.88399 32.55 4.90066 31.5667C3.90066 30.5667 3.33398 29.15 3.33398 27.45V20.6667C3.33398 17.5 5.30065 15.3167 8.33398 15.0334C8.55065 15.0167 8.76731 15 9.00064 15H20.3173C23.7173 15 25.984 17.2667 25.984 20.6667Z" stroke="url(#paint1_linear_303_14948)" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs><linearGradient id="paint0_linear_303_14948" x1="36.6673" y1="3.33337" x2="8.52353" y2="31.6851" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA9CF"/><stop offset="1" stopColor="#C62943"/></linearGradient><linearGradient id="paint1_linear_303_14948" x1="25.984" y1="15" x2="3.49087" y2="37.6647" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA9CF"/><stop offset="1" stopColor="#C62943"/></linearGradient></defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute w-[75px] h-[75px] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)] z-30" style={{ left: "220px", top: "75px", transform: "translate(-50%, -50%)", boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#E8FAF4] to-[#D1F2E6] flex items-center justify-center shadow-[inset_0_-4px_10px_rgba(255,255,255,0.7)]">
                      <svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.1165 32.498C18.5783 31.702 19.5977 31.4311 20.3939 31.8926C21.19 32.3544 21.4611 33.3737 20.9993 34.1699C20.5598 34.9275 19.9292 35.557 19.1702 35.9941C18.4114 36.4312 17.5508 36.6611 16.6751 36.6611C15.7993 36.6611 14.938 36.4313 14.179 35.9941C13.4201 35.5569 12.7894 34.9275 12.3499 34.1699C11.8884 33.3738 12.1595 32.3545 12.9554 31.8926C13.7515 31.4309 14.7709 31.702 15.2327 32.498C15.3792 32.7505 15.5903 32.9598 15.8431 33.1055C16.096 33.2511 16.3833 33.3281 16.6751 33.3281C16.9668 33.328 17.2534 33.251 17.5062 33.1055C17.7591 32.9598 17.97 32.7505 18.1165 32.498ZM16.6663 0C19.7604 0 22.7284 1.22929 24.9163 3.41699C27.1042 5.60483 28.3332 8.57293 28.3333 11.667C28.3333 17.2544 29.5279 20.7249 30.6292 22.7441C31.182 23.7575 31.721 24.4225 32.0951 24.8174C32.2822 25.015 32.4301 25.1467 32.5189 25.2207C32.5626 25.2572 32.5928 25.2803 32.6058 25.29C32.6085 25.2921 32.6106 25.294 32.6117 25.2949L32.7015 25.3604C33.2342 25.782 33.4605 26.4914 33.2611 27.1504C33.0481 27.853 32.4006 28.334 31.6663 28.334H1.66634C0.932219 28.3338 0.284569 27.8529 0.0716142 27.1504C-0.127691 26.4915 0.0985881 25.7819 0.631184 25.3604L0.721028 25.2949C0.72194 25.2941 0.723805 25.2923 0.726888 25.29C0.739689 25.2805 0.769609 25.2575 0.813802 25.2207C0.902495 25.1468 1.05017 25.0153 1.23763 24.8174C1.61166 24.4226 2.15053 23.7578 2.70345 22.7441C3.80481 20.7249 4.99935 17.2546 4.99935 11.667C4.99945 8.57293 6.2285 5.60483 8.41634 3.41699C10.6042 1.22915 13.5723 9.44456e-05 16.6663 0ZM0.733724 25.2852C0.731445 25.2867 0.729574 25.2889 0.727864 25.29L0.73763 25.2832C0.736385 25.284 0.734821 25.2844 0.733724 25.2852ZM32.6048 25.29C32.6032 25.2888 32.6011 25.2866 32.599 25.2852C32.5979 25.2846 32.5962 25.2839 32.5951 25.2832L32.5931 25.2812H32.5921L32.6048 25.29ZM16.6663 3.33398C14.4563 3.33408 12.3365 4.2117 10.7738 5.77441C9.21105 7.33713 8.33343 9.45699 8.33333 11.667C8.33333 17.7457 7.02781 21.7757 5.62923 24.3398C5.50228 24.5726 5.37335 24.792 5.24642 25H28.0863C27.9594 24.7921 27.8303 24.5725 27.7034 24.3398C26.3049 21.7757 24.9993 17.7455 24.9993 11.667C24.9993 9.45699 24.1216 7.33713 22.5589 5.77441C20.9961 4.21184 18.8763 3.33398 16.6663 3.33398Z" fill="url(#paint0_linear_303_14957)"/>
                        <defs><linearGradient id="paint0_linear_303_14957" x1="2.49996" y1="41.702" x2="38.1876" y2="3.35484" gradientUnits="userSpaceOnUse"><stop stopColor="#5BEC71"/><stop offset="0.902778" stopColor="#0F72D7"/></linearGradient></defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute w-[75px] h-[75px] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)] z-30" style={{ left: "380px", top: "75px", transform: "translate(-50%, -50%)", boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FFF5EC] to-[#FFE6D1] flex items-center justify-center shadow-[inset_0_-4px_10px_rgba(255,255,255,0.7)]">
                      <svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3311 0C24.2514 0 24.9978 0.746686 24.998 1.66699V3.33398H28.334C31.0951 3.33416 33.3338 5.57282 33.334 8.33398V31.668C33.3336 34.429 31.095 36.6678 28.334 36.668H5C2.23896 36.6678 0.000374151 34.429 0 31.668V8.33398C0.000175857 5.57282 2.23883 3.33416 5 3.33398H8.33594V1.66699C8.33614 0.746686 9.08258 0 10.0029 0C10.9233 0 11.6697 0.746686 11.6699 1.66699V3.33398H21.6641V1.66699C21.6643 0.746686 22.4107 0 23.3311 0ZM3.33398 31.668C3.33436 32.588 4.07991 33.3338 5 33.334H28.334C29.2541 33.3338 29.9996 32.588 30 31.668V16.668H3.33398V31.668ZM10.0195 26.667C10.94 26.667 11.6865 27.4135 11.6865 28.334C11.6865 29.2545 10.94 30.001 10.0195 30.001H10.0029C9.08245 30.001 8.33594 29.2545 8.33594 28.334C8.33594 27.4135 9.08245 26.667 10.0029 26.667H10.0195ZM16.6836 26.667C17.6041 26.667 18.3506 27.4135 18.3506 28.334C18.3506 29.2545 17.6041 30.001 16.6836 30.001H16.667C15.7465 30.001 15 29.2545 15 28.334C15 27.4135 15.7465 26.667 16.667 26.667H16.6836ZM23.3477 26.667C24.2681 26.667 25.0146 27.4135 25.0146 28.334C25.0146 29.2545 24.2681 30.001 23.3477 30.001H23.3311C22.4106 30.001 21.6641 29.2545 21.6641 28.334C21.6641 27.4135 22.4106 26.667 23.3311 26.667H23.3477ZM10.0195 20C10.9399 20 11.6863 20.7467 11.6865 21.667C11.6865 22.5875 10.94 23.334 10.0195 23.334H10.0029C9.08245 23.334 8.33594 22.5875 8.33594 21.667C8.33614 20.7467 9.08258 20 10.0029 20H10.0195ZM16.6836 20C17.6039 20 18.3504 20.7467 18.3506 21.667C18.3506 22.5875 17.6041 23.334 16.6836 23.334H16.667C15.7465 23.334 15 22.5875 15 21.667C15.0002 20.7467 15.7466 20 16.667 20H16.6836ZM23.3477 20C24.268 20 25.0145 20.7467 25.0146 21.667C25.0146 22.5875 24.2681 23.334 23.3477 23.334H23.3311C22.4106 23.334 21.6641 22.5875 21.6641 21.667C21.6643 20.7467 22.4107 20 23.3311 20H23.3477ZM5 6.66797C4.07978 6.66814 3.33416 7.41377 3.33398 8.33398V13.334H30V8.33398C29.9998 7.41377 29.2542 6.66815 28.334 6.66797H24.998V8.33398C24.9979 9.25431 24.2514 10 23.3311 10C22.4107 10 21.6642 9.25431 21.6641 8.33398V6.66797H11.6699V8.33398C11.6697 9.25431 10.9233 10 10.0029 10C9.08256 10 8.33611 9.25431 8.33594 8.33398V6.66797H5Z" fill="url(#paint0_linear_303_14963)"/>
                        <defs><linearGradient id="paint0_linear_303_14963" x1="33.334" y1="-1.16109e-06" x2="0.80188" y2="35.9115" gradientUnits="userSpaceOnUse"><stop stopColor="#FFCC9C"/><stop offset="1" stopColor="#FF755F"/></linearGradient></defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute w-[75px] h-[75px] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)] z-30" style={{ left: "520px", top: "130px", transform: "translate(-50%, -50%)", boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#F0F7FF] to-[#DDEBFF] flex items-center justify-center shadow-[inset_0_-4px_10px_rgba(255,255,255,0.7)]">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.0026 10L11.6693 28.3333L3.33594 20" stroke="url(#paint0_linear_303_14951)" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M36.6641 16.6666L24.1641 29.1666L21.6641 26.6666" stroke="url(#paint1_linear_303_14951)" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs><linearGradient id="paint0_linear_303_14951" x1="30.0026" y1="10" x2="15.9871" y2="34.7547" gradientUnits="userSpaceOnUse"><stop stopColor="#ACD5FF"/><stop offset="1" stopColor="#003F9D"/></linearGradient><linearGradient id="paint1_linear_303_14951" x1="36.6641" y1="16.6666" x2="26.2654" y2="31.8189" gradientUnits="userSpaceOnUse"><stop stopColor="#ACD5FF"/><stop offset="1" stopColor="#003F9D"/></linearGradient></defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 4: Follow-Up Control ── */}
          <FeatureCard className="h-[220px] sm:h-[320px] md:h-[380px] lg:h-[430px]">
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
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="38" rx="5.4" fill="url(#paint0_linear_303_15015)" />
                    <path d="M21.4993 10.6666H16.4993C16.0391 10.6666 15.666 11.0397 15.666 11.5V13.1666C15.666 13.6269 16.0391 14 16.4993 14H21.4993C21.9596 14 22.3327 13.6269 22.3327 13.1666V11.5C22.3327 11.0397 21.9596 10.6666 21.4993 10.6666Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.334 12.3334H24.0007C24.4427 12.3334 24.8666 12.509 25.1792 12.8215C25.4917 13.1341 25.6673 13.558 25.6673 14V25.6667C25.6673 26.1087 25.4917 26.5327 25.1792 26.8452C24.8666 27.1578 24.4427 27.3334 24.0007 27.3334H14.0007C13.5586 27.3334 13.1347 27.1578 12.8221 26.8452C12.5096 26.5327 12.334 26.1087 12.334 25.6667V14C12.334 13.558 12.5096 13.1341 12.8221 12.8215C13.1347 12.509 13.5586 12.3334 14.0007 12.3334H15.6673" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 20.6667L18.1667 22.3333L21.5 19" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_303_15015" x1="30.875" y1="-1.64565e-06" x2="4.75" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFCC9C" />
                        <stop offset="1" stopColor="#FF8853" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                color="bg-transparent"
                title="Follow-Up Control"
              />
              <p className="text-[11.5px] md:text-[14px] text-white/80 leading-[1.2] md:leading-[1.6] md:mb-6 mt-1">
                Reduce missed handoffs by making pipeline activity easier to manage across contributors.
              </p>

              {/* Added intermediate md:scale-[0.6] and lg:scale-[0.8] to fit 2 columns */}
              <div className="relative flex-1 w-full mt-4 md:mt-2">
                <div className="relative w-full min-w-[380px] h-[280px] md:min-w-0 md:h-full origin-top-left scale-[0.38] sm:scale-[0.8] md:scale-[0.6] lg:scale-[0.8] xl:scale-100 flex flex-col justify-between max-w-[400px] translate-x-5 md:translate-x-0 -translate-y-1 ">
                  <div className="absolute left-[62px] top-[28px] bottom-[24px] border-l-[2px] border-dashed border-[#FFFFFF]/25 z-0"></div>

                  <div className="relative z-10 flex items-center gap-8 w-full mb-5 left-[10%]">
                    <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#CCFFD4] to-[#2EB0D7] flex items-center justify-center shrink-0 shadow-lg border-2 border-[#01091E]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.333 0.833984C13.793 0.834248 14.166 1.20692 14.166 1.66699V2.5H15.834C17.2144 2.50026 18.3338 3.61959 18.334 5V16.666C18.334 18.0466 17.2145 19.1658 15.834 19.166H4.16797C2.78726 19.166 1.66797 18.0467 1.66797 16.666V5C1.66813 3.61943 2.78736 2.5 4.16797 2.5H5.83594V1.66699C5.83594 1.20675 6.20871 0.833984 6.66895 0.833984C7.12896 0.834248 7.50195 1.20692 7.50195 1.66699V2.5H12.5V1.66699C12.5 1.20675 12.8728 0.833984 13.333 0.833984ZM3.33398 16.666C3.33398 17.1263 3.70773 17.5 4.16797 17.5H15.834C16.294 17.4997 16.668 17.1261 16.668 16.666V9.16602H3.33398V16.666ZM6.67773 14.167C7.13754 14.1675 7.51074 14.5401 7.51074 15C7.51074 15.4599 7.13754 15.8325 6.67773 15.833H6.66895C6.20871 15.833 5.83594 15.4602 5.83594 15C5.83594 14.5398 6.20871 14.167 6.66895 14.167H6.67773ZM10.0098 14.167C10.4696 14.1675 10.8428 14.5401 10.8428 15C10.8428 15.4599 10.4696 15.8325 10.0098 15.833H10.001C9.54074 15.833 9.16797 15.4602 9.16797 15C9.16797 14.5398 9.54074 14.167 10.001 14.167H10.0098ZM13.3418 14.167C13.8016 14.1675 14.1748 14.5401 14.1748 15C14.1748 15.4599 13.8016 15.8325 13.3418 15.833H13.333C12.8728 15.833 12.5 15.4602 12.5 15C12.5 14.5398 12.8728 14.167 13.333 14.167H13.3418ZM6.67773 10.834C7.13754 10.8345 7.51074 11.2071 7.51074 11.667C7.51058 12.1268 7.13744 12.4995 6.67773 12.5H6.66895C6.20881 12.5 5.8361 12.1271 5.83594 11.667C5.83594 11.2068 6.20871 10.834 6.66895 10.834H6.67773ZM10.0098 10.834C10.4696 10.8345 10.8428 11.2071 10.8428 11.667C10.8426 12.1268 10.4695 12.4995 10.0098 12.5H10.001C9.54084 12.5 9.16813 12.1271 9.16797 11.667C9.16797 11.2068 9.54074 10.834 10.001 10.834H10.0098ZM13.3418 10.834C13.8016 10.8345 14.1748 11.2071 14.1748 11.667C14.1746 12.1268 13.8015 12.4995 13.3418 12.5H13.333C12.8729 12.5 12.5002 12.1271 12.5 11.667C12.5 11.2068 12.8728 10.834 13.333 10.834H13.3418ZM4.16797 4.16602C3.70783 4.16602 3.33415 4.5399 3.33398 5V7.5H16.668V5C16.6678 4.54007 16.2939 4.16628 15.834 4.16602H14.166V5C14.1659 5.45993 13.7929 5.83372 13.333 5.83398C12.8729 5.83398 12.5002 5.4601 12.5 5V4.16602H7.50195V5C7.50179 5.45993 7.12886 5.83372 6.66895 5.83398C6.20881 5.83398 5.8361 5.4601 5.83594 5V4.16602H4.16797Z" fill="white" />
                      </svg>
                    </div>
                    <div className="flex-1 bg-white rounded-[14px] px-5 py-3 shadow-xl transition-transform top-[5%] scale-[0.90]" style={{ boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col"><span className="text-[13.5px] text-[#01091E] leading-tight">Email sent</span><span className="text-[12.5px] text-gray-500">Proposal follow-up</span></div>
                        <span className="bg-[#D4F7D9] text-[#128B2B] text-[9px] font-bold px-2.5 py-0.5 rounded-full">Completed</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-2.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        <span className="text-[10.5px] text-gray-400 font-medium">James Carter</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-8 w-full mb-5 left-[10%] top-[4%]">
                    <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#B8A4FF] to-[#6B31B6] flex items-center justify-center shrink-0 shadow-lg">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_303_15040)">
                          <path d="M18.3312 14.1V16.6C18.3322 16.8321 18.2846 17.0618 18.1917 17.2745C18.0987 17.4871 17.9623 17.678 17.7913 17.8349C17.6203 17.9918 17.4184 18.1113 17.1985 18.1856C16.9787 18.26 16.7457 18.2876 16.5146 18.2667C13.9503 17.9881 11.4871 17.1118 9.32291 15.7084C7.30943 14.4289 5.60236 12.7219 4.32291 10.7084C2.91456 8.53438 2.03811 6.0592 1.76458 3.48337C1.74375 3.25293 1.77114 3.02067 1.84499 2.80139C1.91885 2.58211 2.03755 2.38061 2.19355 2.20972C2.34954 2.03883 2.53941 1.9023 2.75107 1.80881C2.96272 1.71532 3.19153 1.66692 3.42291 1.66671H5.92291C6.32733 1.66273 6.7194 1.80594 7.02604 2.06965C7.33269 2.33336 7.53297 2.69958 7.58958 3.10004C7.6951 3.9001 7.89078 4.68565 8.17291 5.44171C8.28503 5.73998 8.30929 6.06414 8.24283 6.37577C8.17637 6.68741 8.02196 6.97347 7.79791 7.20004L6.73958 8.25837C7.92587 10.3447 9.65329 12.0721 11.7396 13.2584L12.7979 12.2C13.0245 11.976 13.3105 11.8216 13.6222 11.7551C13.9338 11.6887 14.258 11.7129 14.5562 11.825C15.3123 12.1072 16.0979 12.3029 16.8979 12.4084C17.3027 12.4655 17.6724 12.6694 17.9367 12.9813C18.201 13.2932 18.3414 13.6914 18.3312 14.1Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs><clipPath id="clip0_303_15040"><rect width="20" height="20" fill="white" /></clipPath></defs>
                      </svg>
                    </div>
                    <div className="flex-1 bg-white rounded-[14px] px-5 py-3 shadow-xl transition-transform scale-[0.90]" style={{ boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col"><span className="text-[13.5px] text-[#01091E] leading-tight">Call logged</span><span className="text-[12.5px] text-gray-500 mt-0.5">Discussed next steps</span></div>
                        <span className="bg-[#D4F7D9] text-[#128B2B] text-[9px] font-bold px-2.5 py-0.5 rounded-full">Completed</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-2.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
                        <span className="text-[10.5px] text-gray-400 font-medium">Interested in implementation</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-8 w-full left-[10%] top-[6%]">
                    <div className="w-[48px] h-[48px] rounded-full items-center justify-center shrink-0 translate-y-1.5">
                      <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="url(#paint0_linear_303_15053)" />
                        <path d="M27.334 20.6666C28.6601 20.6666 29.9318 21.1934 30.8695 22.1311C31.8072 23.0688 32.334 24.3405 32.334 25.6666V31.5H29.0007V25.6666C29.0007 25.2246 28.8251 24.8007 28.5125 24.4881C28.1999 24.1756 27.776 24 27.334 24C26.892 24 26.468 24.1756 26.1555 24.4881C25.8429 24.8007 25.6673 25.2246 25.6673 25.6666V31.5H22.334V25.6666C22.334 24.3405 22.8608 23.0688 23.7985 22.1311C24.7361 21.1934 26.0079 20.6666 27.334 20.6666Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.9993 21.5H15.666V31.5H18.9993V21.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.3327 19C18.2532 19 18.9993 18.2538 18.9993 17.3333C18.9993 16.4128 18.2532 15.6666 17.3327 15.6666C16.4122 15.6666 15.666 16.4128 15.666 17.3333C15.666 18.2538 16.4122 19 17.3327 19Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <defs><linearGradient id="paint0_linear_303_15053" x1="48" y1="-1.51992e-06" x2="6" y2="51" gradientUnits="userSpaceOnUse"><stop stopColor="#ACD5FF" /><stop offset="1" stopColor="#003F9D" /></linearGradient></defs>
                      </svg>
                    </div>
                    <div className="flex-1 bg-white rounded-[14px] p-3.5 shadow-xl transition-transform scale-[0.90]" style={{ boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col"><span className="text-[13.5px] text-[#01091E] leading-tight">LinkedIn connection</span><span className="text-[12.5px] text-gray-500 mt-0.5">Connect with James Carter</span></div>
                        <span className="bg-[#D4F7D9] text-[#128B2B] text-[9px] font-bold px-2.5 py-0.5 rounded-full">Completed</span>
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

// Reusable Helper Components to eliminate thousands of characters of redundancy
export function FeatureCard({ children, className }) {
  return (
    <div className={`relative rounded-[20px] border border-white/10 bg-[#01091E] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_4px_4px_36px_rgba(117,186,255,0.12),inset_4px_4px_36px_rgba(91,236,113,0.05)] backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-300 ease-in-out p-6 lg:p-7 flex flex-col ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ icon, color, title }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
        {icon}
      </div>
      <h3 className="text-[18px] text-white">{title}</h3>
    </div>
  );
}