"use client";
import React from "react";
import gmail from "../public/gmail.svg";
import analytics from "../public/analytics.svg";
import Image from "next/image";

export default function Cards() {
  return (
    <div className="bg-[#01091E] overflow-hidden pb-20">
      {/* ══════════════════════════════════════════════
         SECTION 2 — TEXT BLOCK
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 py-12 md:py-16 lg:py-24 px-5 lg:px-6 max-w-[1440px] mx-auto text-center">
        <h2 className="text-[25px] sm:text-[30px] lg:text-[37px] font-medium leading-[1.3] text-white mb-6">
          Growth creates <br className="block md:hidden" /> complexity, and <br className="block md:hidden" /> complexity creates <br className="block md:hidden" /> manual{" "}
          <br className="hidden md:block" />
          work unless the
          <span className="md:font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] via-[#0F72D7] to-[#003F9D]">
            {" "}
            operation is standardized.
          </span>
        </h2>
        <p className="text-[14.6px] lg:text-[15px] text-white/80 leading-[1.2] max-w-[1100px] mx-auto">
          Workflow Automation helps teams reduce repetitive tasks, support
          recurring processes, and create a more stable operating model as
          execution grows. Instead of relying on manual coordination to keep
          everything moving, teams can build workflows that preserve consistency
          at scale.
        </p>
      </div>

      {/* ══════════════════════════════════════════════
         SECTION 3 — FEATURE CARDS
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto py-4 lg:py-12 px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          
          {/* ── CARD 1: Pre-Built Automation Modules ── */}
          <FeatureCard className="h-[235px] sm:h-[380px] md:h-[420px] lg:h-[380px]">
            <GlowRight />
            <BackgroundGrid
              containerClass="-right-2 w-[80%] h-[80%] opacity-60 block md:hidden"
              spacing="2px"
              bgSize="35px 35px"
              maskPosition="100% 100%"
              colorAlpha="0.08"
            />
            <BackgroundGrid
              containerClass="-right-2 w-[80%] h-[80%] opacity-60 hidden md:block"
              spacing="2px"
              bgSize="60px 60px"
              maskPosition="100% 100%"
              colorAlpha="0.08"
            />

            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="38" rx="5.4" fill="url(#paint0_linear_425_1591)" />
                    <g clipPath="url(#clip0_425_1591)">
                      <path d="M21.5 10.6666H16.5V15.6666H21.5V10.6666Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M27.332 22.3334H22.332V27.3334H27.332V22.3334Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.668 22.3334H10.668V27.3334H15.668V22.3334Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.168 22.3333V19H24.8346V22.3333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19 19V15.6666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_425_1591" x1="38" y1="-2.34991e-06" x2="-1.425" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA9CF" />
                        <stop offset="1" stopColor="#C62943" />
                      </linearGradient>
                      <clipPath id="clip0_425_1591">
                        <rect width="20" height="20" fill="white" transform="translate(9 9)" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title="Pre-Built Automation Modules"
              />
              <p className="text-[13px] text-white/80 leading-[1.4] mb-6 md:mt-1">
                Start with ready-to-use workflows for recurring marketing and
                operational tasks.
              </p>

              {/* Floating Content Elements */}
              <div className="relative top-4 flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[600px] h-[300px] scale-[0.54] sm:scale-[0.65] md:scale-[0.55] lg:scale-[0.75] xl:scale-[0.85] origin-center translate-y-1 md:-translate-y-4">
                  
                  {/* Top Center Card */}
                  <div className="absolute scale-[0.5] top-0 left-1/2 -translate-x-1/2 w-[340px] bg-white rounded-[12px] p-4 shadow-[0_0_0_10px_rgba(255,255,255,0.08),0_10px_20px_rgba(0,0,0,0.2),0_8px_32px_8px_#75BAFF5E] z-30 transition-transform hover:-translate-y-1">
                    <div className="flex gap-3 items-start">
                      <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="15.1053" height="15.1053" rx="2.13158" fill="white" />
                        <rect width="15.1053" height="15.1053" rx="2.13158" fill="url(#paint0_linear_425_1600)" fillOpacity="0.92" />
                        <g clipPath="url(#clip0_425_1600)">
                          <path d="M8.38281 4.21924H5.54948C5.37267 4.21924 5.2031 4.28948 5.07807 4.4145C4.95305 4.53952 4.88281 4.70909 4.88281 4.8859V10.2192C4.88281 10.396 4.95305 10.5656 5.07807 10.6906C5.2031 10.8157 5.37267 10.8859 5.54948 10.8859H9.54948C9.72629 10.8859 9.89586 10.8157 10.0209 10.6906C10.1459 10.5656 10.2161 10.396 10.2161 10.2192V6.05257L8.38281 4.21924Z" stroke="#0F72D7" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8.21875 4.21924V6.21924H10.2188" stroke="#0F72D7" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8.88542 7.88599H6.21875" stroke="#0F72D7" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8.88542 9.21924H6.21875" stroke="#0F72D7" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M6.88542 6.55261H6.21875" stroke="#0F72D7" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_425_1600" x1="11.3289" y1="0" x2="3.14943" y2="20.2601" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#EFF7FF" />
                            <stop offset="1" stopColor="#A5C9FF" />
                          </linearGradient>
                          <clipPath id="clip0_425_1600">
                            <rect width="8" height="8" fill="white" transform="translate(3.55078 3.55261)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <h4 className="text-[14px] text-[#01091E] mb-1">Two Week Content Batch</h4>
                      <button className="bg-[#0A1325] relative left-15 top-[45px] text-white text-[11px] font-medium px-2 py-1.5 rounded-[6px] hover:bg-gray-800 transition-colors">
                        Install
                      </button>
                    </div>
                    <div className="flex flex-col items-start w-[70%]">
                      <p className="text-[12px] text-gray-500 leading-[1.3] mb-3">
                        Generate a 14-day brand content calendar with AI-powered
                        text generation, human approval, platform-specific
                        tweaks, image generation, and automated HubSpot creation.
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded flex items-center gap-1">
                          <span className="w-1.5 h-1.5">
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_425_1606)">
                                <path d="M3.4987 0.583374L4.39995 2.40921L6.41536 2.70379L4.95703 4.12421L5.3012 6.13087L3.4987 5.18296L1.6962 6.13087L2.04036 4.12421L0.582031 2.70379L2.59745 2.40921L3.4987 0.583374Z" stroke="#0F72D7" strokeWidth="0.583333" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_425_1606">
                                  <rect width="7" height="7" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          Popular
                        </span>
                        <span className="text-[9px] text-gray-400">12 steps</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Left Card */}
                  <div className="absolute bottom-1 scale-[0.5] left-[20px] w-[340px] bg-white rounded-[12px] p-4 shadow-[0_0_0_10px_rgba(255,255,255,0.08),0_10px_20px_rgba(0,0,0,0.2),0_8px_32px_8px_#75BAFF5E] z-20 transition-transform hover:-translate-y-1">
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                        <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="15.1053" height="15.1053" rx="2.13158" fill="white" />
                          <rect width="15.1053" height="15.1053" rx="2.13158" fill="url(#paint0_linear_425_1617)" fillOpacity="0.5" />
                          <g clipPath="url(#clip0_425_1617)">
                            <path d="M8.88542 10.5526V9.88595C8.88542 9.53232 8.74494 9.19319 8.49489 8.94314C8.24484 8.69309 7.90571 8.55261 7.55208 8.55261H5.55208C5.19846 8.55261 4.85932 8.69309 4.60927 8.94314C4.35923 9.19319 4.21875 9.53232 4.21875 9.88595V10.5526" stroke="#FF8853" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.55208 7.21928C7.28846 7.21928 7.88542 6.62233 7.88542 5.88595C7.88542 5.14957 7.28846 4.55261 6.55208 4.55261C5.8157 4.55261 5.21875 5.14957 5.21875 5.88595C5.21875 6.62233 5.8157 7.21928 6.55208 7.21928Z" stroke="#FF8853" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.8828 10.5526V9.88595C10.8826 9.59052 10.7843 9.30354 10.6033 9.07005C10.4223 8.83657 10.1689 8.6698 9.88281 8.59595" stroke="#FF8853" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.88281 4.59595C9.16962 4.66938 9.42382 4.83618 9.60536 5.07005C9.78689 5.30392 9.88543 5.59156 9.88543 5.88761C9.88543 6.18367 9.78689 6.47131 9.60536 6.70518C9.42382 6.93905 9.16962 7.10585 8.88281 7.17928" stroke="#FF8853" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_425_1617" x1="11.3289" y1="0" x2="3.14943" y2="20.2601" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFDDBC" stopOpacity="0.43" />
                              <stop offset="1" stopColor="#FFA076" />
                            </linearGradient>
                            <clipPath id="clip0_425_1617">
                              <rect width="8" height="8" fill="white" transform="translate(3.55078 3.55261)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4 className="text-[14px] text-[#01091E] mb-1">AI Lead Generation</h4>
                    </div>
                    <div className="flex-1 w-[80%]">
                      <p className="text-[12px] text-gray-500 leading-[1.3] mb-3">
                        End-to-end automated list generation sequence to
                        define ICPs, build email sequences with AI, launch
                        campaigns, and handle replies with AI SDR.
                      </p>
                      <span className="text-[9px] font-semibold text-[#7D7D7D] bg-white px-2 py-0.5 rounded">8 Nodes</span>
                    </div>
                    <button className="absolute top-[45%] right-4 bg-[#0A1325] text-white text-[11px] font-medium px-2 py-1 rounded-[6px] hover:bg-gray-800 transition-colors">
                      Install
                    </button>
                  </div>

                  {/* Bottom Right Card */}
                  <div className="absolute scale-[0.57] bottom-2 right-[20px] w-[340px] bg-white rounded-[12px] p-4 shadow-[0_0_0_10px_rgba(255,255,255,0.08),0_10px_20px_rgba(0,0,0,0.2),0_8px_32px_8px_#75BAFF5E] z-20 transition-transform hover:-translate-y-1">
                    <div className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-lg bg-pink-100 flex items-center justify-center shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <h4 className="text-[14px] text-[#01091E] mb-1">Cold Outbound Setup</h4>
                    </div>
                    <div className="flex-1 w-[80%]">
                      <p className="text-[12px] text-gray-500 leading-[1.3] mb-3">
                        Set up a complete cold email outbound system. Verify
                        domain health, configure senders, create AI-powered
                        sequences, and prepare for launch.
                      </p>
                      <span className="text-[9px] font-semibold text-[#7D7D7D] bg-[#F5F5F5] px-2 py-0.5 rounded">7 Nodes</span>
                    </div>
                    <button className="absolute top-[45%] right-4 bg-[#0A1325] text-white text-[11px] font-medium px-2 py-1 rounded-[6px] hover:bg-gray-800 transition-colors">
                      Install
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 2: Custom Workflow Builder ── */}
          <FeatureCard className="h-[235px] md:h-[420px] lg:h-[380px]">
            <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
              <svg width="800" height="430" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6" filter="url(#filter0_f_lead_glow_card2)">
                  <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_lead_glow_card2)" />
                </g>
                <defs>
                  <filter id="filter0_f_lead_glow_card2" x="-100" y="-100" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_lead_glow_card2" />
                  </filter>
                  <radialGradient id="paint0_radial_lead_glow_card2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                    <stop stopColor="#5BEC71" />
                    <stop offset="1" stopColor="#0F72D7" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            
            <BackgroundGrid
              containerClass="-left-8 w-[80%] h-[70%] block md:hidden"
              spacing="2px"
              bgSize="40px 40px"
              maskPosition="0% 100%"
              colorAlpha="0.1"
            />
            <BackgroundGrid
              containerClass="-left-8 w-[50%] h-[70%] hidden md:block"
              spacing="3.5px"
              bgSize="60px 60px"
              maskPosition="0% 100%"
              colorAlpha="0.1"
            />

            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="38" rx="5.4" fill="url(#paint0_linear_425_1659)" />
                    <path d="M25.2021 15.5417C25.1613 15.81 25.2513 16.0817 25.443 16.2734L26.7496 17.58C27.1413 17.9717 27.338 18.4859 27.338 19C27.338 19.5142 27.1421 20.0275 26.7496 20.42L25.4071 21.7625C25.3169 21.8527 25.2068 21.9204 25.0857 21.9604C24.9646 22.0003 24.8358 22.0113 24.7096 21.9925C24.318 21.9342 24.0413 21.5925 23.903 21.2217C23.7816 20.894 23.5798 20.6021 23.3161 20.3728C23.0524 20.1436 22.7353 19.9843 22.3939 19.9096C22.0525 19.8349 21.6979 19.8473 21.3625 19.9456C21.0272 20.0438 20.7219 20.2248 20.4748 20.4719C20.2278 20.719 20.0468 21.0243 19.9485 21.3596C19.8502 21.6949 19.8379 22.0496 19.9125 22.391C19.9872 22.7323 20.1465 23.0494 20.3758 23.3131C20.6051 23.5768 20.897 23.7787 21.2246 23.9C21.5963 24.0384 21.9371 24.3142 21.9955 24.7067C22.0143 24.8329 22.0033 24.9617 21.9634 25.0828C21.9235 25.2039 21.8557 25.314 21.7655 25.4042L20.4238 26.7459C20.2375 26.9328 20.016 27.0811 19.7722 27.1823C19.5283 27.2834 19.2669 27.3353 19.003 27.335C18.7392 27.3354 18.4779 27.2836 18.2342 27.1826C17.9906 27.0816 17.7692 26.9335 17.583 26.7467L16.2763 25.44C16.1819 25.3454 16.0665 25.2743 15.9396 25.2323C15.8127 25.1903 15.6777 25.1787 15.5455 25.1984C15.1346 25.26 14.8455 25.6184 14.6955 26.005C14.5697 26.3278 14.3655 26.614 14.1013 26.838C13.8371 27.0619 13.5213 27.2165 13.1823 27.2876C12.8434 27.3588 12.492 27.3443 12.1601 27.2456C11.8281 27.1468 11.526 26.9668 11.2811 26.7219C11.0362 26.477 10.8562 26.1749 10.7575 25.8429C10.6587 25.511 10.6442 25.1596 10.7154 24.8207C10.7865 24.4817 10.9411 24.1659 11.165 23.9017C11.389 23.6375 11.6753 23.4333 11.998 23.3075C12.3846 23.1575 12.743 22.8684 12.8038 22.4575C12.8236 22.3254 12.8121 22.1904 12.7703 22.0635C12.7284 21.9366 12.6574 21.8212 12.563 21.7267L11.2563 20.42C11.0695 20.2338 10.9214 20.0125 10.8204 19.7688C10.7194 19.5251 10.6676 19.2638 10.668 19C10.668 18.4859 10.8646 17.9717 11.2563 17.58L12.528 16.3084C12.728 16.1084 13.0121 16.0142 13.2921 16.0559C13.7213 16.12 14.023 16.4959 14.1863 16.8975C14.3161 17.2157 14.5225 17.4968 14.7871 17.7158C15.0518 17.9348 15.3666 18.085 15.7034 18.153C16.0401 18.2209 16.3885 18.2045 16.7174 18.1052C17.0463 18.0059 17.3456 17.8268 17.5885 17.5839C17.8314 17.341 18.0105 17.0417 18.1098 16.7128C18.2091 16.3839 18.2255 16.0356 18.1576 15.6988C18.0896 15.362 17.9394 15.0472 17.7204 14.7826C17.5014 14.5179 17.2203 14.3115 16.9021 14.1817C16.5005 14.0184 16.1246 13.7167 16.0605 13.2875C16.0188 13.0075 16.1121 12.7242 16.313 12.5234L17.5838 11.2525C17.77 11.066 17.9913 10.9181 18.2348 10.8173C18.4783 10.7164 18.7394 10.6647 19.003 10.665C19.5171 10.665 20.0313 10.8617 20.423 11.2534L21.7296 12.56C21.9213 12.7517 22.193 12.8417 22.4605 12.8017C22.8713 12.74 23.1605 12.3817 23.3105 11.995C23.4362 11.6723 23.6404 11.386 23.9046 11.1621C24.1688 10.9382 24.4847 10.7836 24.8236 10.7124C25.1626 10.6413 25.5139 10.6557 25.8459 10.7545C26.1778 10.8533 26.4799 11.0333 26.7248 11.2782C26.9697 11.5231 27.1497 11.8252 27.2485 12.1571C27.3473 12.4891 27.3617 12.8404 27.2906 13.1794C27.2194 13.5183 27.0649 13.8342 26.8409 14.0984C26.617 14.3626 26.3307 14.5668 26.008 14.6925C25.6213 14.8425 25.263 15.1309 25.2021 15.5417Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_425_1659" x1="30.875" y1="-1.64565e-06" x2="4.75" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#CCFFD4" />
                        <stop offset="1" stopColor="#2EB0D7" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                title="Custom Workflow Builder"
              />
              <p className="text-[13.3px] md:text-[13px] text-white/80 leading-[1.4] mb-6 md:mt-1">
                Expand into more flexible logic and tailored <br className="inline md:hidden" /> workflow design in <br className="inline md:hidden" />
                higher tiers.
              </p>

              {/* Workflow Nodes */}
              <div className="relative flex-1 w-full flex items-center justify-center">
                <div className="absolute md:bottom-[-25px] w-[500px] h-[320px] scale-[0.56] sm:scale-[0.65] md:scale-[0.6] lg:scale-[0.75] xl:scale-[0.85] origin-center translate-x-8 md:translate-x-0 translate-y-4">
                  
                  {/* ── Connection Lines (SVG Overlay) ── */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <svg className="absolute top-[47px] left-[87px]" width="97" height="114" viewBox="0 0 97 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 113H2C24.0914 113 42 95.0914 42 73V40.5C42 18.4086 59.9086 0.5 82 0.5H96.5" stroke="url(#paint0_linear_425_1689)" strokeDasharray="6 6" />
                      <defs>
                        <linearGradient id="paint0_linear_425_1689" x1="7.2375" y1="128.469" x2="117.023" y2="17.1751" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5BEC71" />
                          <stop offset="0.902778" stopColor="#0F72D7" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <svg className="absolute top-[160px] left-[87px]" width="156" height="1" viewBox="0 0 156 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M156 0.5L4.29153e-06 0.5" stroke="url(#paint0_linear_425_1691)" strokeDasharray="6 6" />
                      <defs>
                        <linearGradient id="paint0_linear_425_1691" x1="-21.45" y1="0.575" x2="-21.4325" y2="2.88169" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5BEC71" />
                          <stop offset="0.902778" stopColor="#0F72D7" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <svg className="absolute top-[160px] left-[87px]" width="97" height="114" viewBox="0 0 97 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0.5H2C24.0914 0.5 42 18.4086 42 40.5V73C42 95.0914 59.9086 113 82 113H96.5" stroke="url(#paint0_linear_425_1690)" strokeDasharray="6 6" />
                      <defs>
                        <linearGradient id="paint0_linear_425_1690" x1="7.2375" y1="-14.9687" x2="117.023" y2="96.3249" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5BEC71" />
                          <stop offset="0.902778" stopColor="#0F72D7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Add Step Box */}
                  <div className="absolute top-[115px] left-0 w-[90px] h-[90px] bg-[#FFFFFF1A] border-[2px] border-dashed border-[#FFFFFFCC] rounded-[12px] flex flex-col items-center justify-center z-20 cursor-pointer shadow-[0_0_20px_rgba(91,236,113,0.1)] backdrop-blur-sm">
                    <span className="text-[#FFFFFF] text-[24px] font-light mb-1 leading-none">+</span>
                    <span className="text-[#FFFFFF] text-[14px] font-medium tracking-wide">Add Step</span>
                  </div>

                  <WorkflowNode
                    className="top-[25px] left-[170px]"
                    title="Trigger Manually"
                    subtitle='"When clicking"'
                    iconNode={
                      <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(91,236,113,0.4),0px_5.02px_22.59px_0px_#75BAFF1F]">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="39.8216" height="39.8216" rx="7.51397" fill="url(#paint0_linear_425_1673)" />
                          <path d="M13.0742 13.0774L19.1132 27.5982L21.2571 21.2859L27.5951 19.1164L13.0742 13.0774Z" stroke="white" strokeWidth="1.70833" strokeLinecap="round" strokeLinejoin="round" />
                          <defs>
                            <linearGradient id="paint0_linear_425_1673" x1="32.3551" y1="-1.72454e-06" x2="4.9777" y2="39.8216" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#CCFFD4" />
                              <stop offset="1" stopColor="#2EB0D7" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    }
                  />

                  <WorkflowNode
                    className="top-[125px] left-[220px]"
                    title="On a Schedule"
                    subtitle="On custom interval"
                    iconNode={
                      <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#B8A4FF] to-[#6B31B6] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(107,49,182,0.4),0px_5.02px_22.59px_0px_#75BAFF1F]">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="39.8216" height="39.8216" rx="7.51397" fill="url(#paint0_linear_425_1680)" />
                          <path d="M19.9089 28.4525C24.6263 28.4525 28.4505 24.6282 28.4505 19.9108C28.4505 15.1934 24.6263 11.3691 19.9089 11.3691C15.1914 11.3691 11.3672 15.1934 11.3672 19.9108C11.3672 24.6282 15.1914 28.4525 19.9089 28.4525Z" stroke="white" strokeWidth="1.70833" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M19.9102 14.7858V19.9108L23.3268 21.6191" stroke="white" strokeWidth="1.70833" strokeLinecap="round" strokeLinejoin="round" />
                          <defs>
                            <linearGradient id="paint0_linear_425_1680" x1="39.8216" y1="-2.46256e-06" x2="-1.49331" y2="39.8216" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#CFC1FF" />
                              <stop offset="1" stopColor="#A05CFA" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    }
                  />

                  <WorkflowNode
                    className="top-[225px] left-[170px]"
                    title="Flow"
                    subtitle="Branch, merge or loop"
                    iconNode={
                      <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#73B4FF] to-[#3B82F6] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.4),0px_5.02px_22.59px_0px_#75BAFF1F]">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="39.9" height="39.9" rx="7.51397" fill="url(#paint0_linear_425_1666)" />
                          <path d="M13.9492 17.3776V23.3796" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M14.1617 16.9488C15.7007 16.9488 16.9483 15.7012 16.9483 14.1621C16.9483 12.6231 15.7007 11.3755 14.1617 11.3755C12.6226 11.3755 11.375 12.6231 11.375 14.1621C11.375 15.7012 12.6226 16.9488 14.1617 16.9488Z" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13.9473 28.5241C15.3679 28.5241 16.5196 27.3725 16.5196 25.9518C16.5196 24.5312 15.3679 23.3795 13.9473 23.3795C12.5267 23.3795 11.375 24.5312 11.375 25.9518C11.375 27.3725 12.5267 28.5241 13.9473 28.5241Z" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M25.9512 28.5241C27.3718 28.5241 28.5235 27.3725 28.5235 25.9518C28.5235 24.5312 27.3718 23.3795 25.9512 23.3795C24.5306 23.3795 23.3789 24.5312 23.3789 25.9518C23.3789 27.3725 24.5306 28.5241 25.9512 28.5241Z" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M14.0586 17.3776C14.4444 18.8781 15.8163 19.9927 17.4369 19.9842L20.3779 19.9756C22.6243 19.967 24.5364 21.4075 25.2395 23.4139" stroke="white" strokeWidth="1.60054" strokeLinecap="round" strokeLinejoin="round" />
                          <defs>
                            <linearGradient id="paint0_linear_425_1666" x1="32.4187" y1="-1.72793e-06" x2="4.9875" y2="39.9" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#B6DAFF" />
                              <stop offset="1" stopColor="#63A2FF" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    }
                  />

                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 3: Advanced Integrations ── */}
          <FeatureCard className="h-[235px] md:h-[420px] lg:h-[380px]">
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
            
            <BackgroundGrid
              containerClass="-left-10 w-[80%] h-[74%] block md:hidden"
              spacing="2px"
              bgSize="40px 40px"
              maskPosition="0% 100%"
              colorAlpha="0.1"
            />
            <BackgroundGrid
              containerClass="-left-10 w-[50%] h-[84%] hidden md:block"
              spacing="3.5px"
              bgSize="60px 60px"
              maskPosition="0% 100%"
              colorAlpha="0.1"
            />

            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="38" rx="5.4" fill="url(#paint0_linear_425_1713)" />
                    <g clipPath="url(#clip0_425_1713)">
                      <path d="M17.332 19.8333C17.6899 20.3118 18.1465 20.7077 18.6708 20.9941C19.1952 21.2806 19.775 21.4509 20.3709 21.4936C20.9669 21.5363 21.565 21.4503 22.1248 21.2415C22.6846 21.0327 23.193 20.7059 23.6154 20.2833L26.1154 17.7833C26.8744 16.9975 27.2943 15.945 27.2848 14.8525C27.2753 13.76 26.8371 12.715 26.0646 11.9424C25.2921 11.1699 24.247 10.7317 23.1545 10.7222C22.062 10.7127 21.0095 11.1327 20.2237 11.8917L18.7904 13.3167" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.6639 18.1667C20.306 17.6882 19.8494 17.2923 19.3251 17.0059C18.8008 16.7194 18.221 16.5491 17.625 16.5064C17.0291 16.4637 16.4309 16.5497 15.8711 16.7585C15.3113 16.9673 14.803 17.2941 14.3806 17.7167L11.8806 20.2167C11.1216 21.0025 10.7016 22.055 10.7111 23.1475C10.7206 24.24 11.1588 25.285 11.9313 26.0576C12.7039 26.8301 13.7489 27.2683 14.8414 27.2778C15.9339 27.2873 16.9864 26.8673 17.7722 26.1083L19.1972 24.6833" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_425_1713" x1="38" y1="-1.20327e-06" x2="4.75" y2="40.375" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ACD5FF" />
                        <stop offset="1" stopColor="#003F9D" />
                      </linearGradient>
                      <clipPath id="clip0_425_1713">
                        <rect width="20" height="20" fill="white" transform="translate(9 9)" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title="Advanced Integrations"
              />
              <p className="text-[12px] md:text-[11.95px] text-white/80 leading-[1.2] md:leading-[1.4] mb-6 mt-1">
                Connect automation to broader systems and operational
                requirements as the setup matures.
              </p>

              {/* Integration Nodes */}
              <div className="relative flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[500px] h-[300px] scale-[0.43] sm:scale-[0.65] md:scale-[0.6] lg:scale-[0.75] xl:scale-[0.9] origin-center -translate-y-2">
                  
                  {/* ── Connection Lines (SVG Overlay) ── */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <svg className="absolute top-[101px] left-[112px]" width="138" height="49" viewBox="0 0 138 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M137.988 48.5997H38.4746C17.3853 48.5997 0.289062 31.5035 0.289062 10.4142V0" stroke="url(#paint0_linear_425_1745)" strokeWidth="0.578568" strokeDasharray="4.63 4.63"/>
                      <defs>
                        <linearGradient id="paint0_linear_425_1745" x1="10.6165" y1="55.2822" x2="36.6268" y2="-31.813" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5BEC71"/>
                          <stop offset="0.902778" stopColor="#0F72D7"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg className="absolute top-[150px] left-[250px]" width="112" height="82" viewBox="0 0 112 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0.289307H72.8996C93.9889 0.289307 111.085 17.3855 111.085 38.4748V81.2889" stroke="url(#paint0_linear_425_1744)" strokeWidth="0.578568" strokeDasharray="4.63 4.63"/>
                      <defs>
                        <linearGradient id="paint0_linear_425_1744" x1="8.33138" y1="92.4263" x2="78.9844" y2="-22.0866" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5BEC71"/>
                          <stop offset="0.902778" stopColor="#0F72D7"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Top Left Card (Gmail) */}
                  <div className="absolute top-[35px] shadow-[0_0_0_5px_rgba(255,255,255,0.08),0_5px_10px_rgba(0,0,0,0.2)] scale-[0.7] left-[-10px] w-[230px] bg-white rounded-[8px] px-4 py-[14px] z-20">
                    <span className="text-[#8E95A3] text-[12.5px] font-medium block mb-2.5">Email</span>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                          <Image src={gmail} alt="gmail" width={24} height={24} />
                        </div>
                        <span className="text-[12px]  text-[#01091E]">Gmail</span>
                      </div>
                      <div className="flex scale-[0.9] items-center gap-1.5 bg-[#D2FFD9] text-[#23BB3A] text-[10px] font-semibold px-2 py-1 rounded-full border border-[#BFF0D1]">
                        Connected
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9 12l2 2 4-4"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Center Node (Integration Hub) */}
                  <div className="absolute top-[110px] left-[210px] w-[80px] h-[80px] z-20 flex items-center justify-center">
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="124" height="124" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.2" cx="66.5353" cy="66.5353" r="66.2461" stroke="white" strokeWidth="0.578568"/>
                    </svg>
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="96" height="96" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.35" cx="52.6497" cy="52.6497" r="52.3604" stroke="white" strokeWidth="0.578568"/>
                    </svg>
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="68" height="68" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="38.7641" cy="38.7641" r="38.4748" stroke="url(#paint0_linear_425_1741)" strokeWidth="0.578568"/>
                      <defs>
                        <linearGradient id="paint0_linear_425_1741" x1="5.81461" y1="88.1883" x2="80.4354" y2="-3.55567e-06" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5BEC71"/>
                          <stop offset="0.902778" stopColor="#0F72D7"/>
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="relative w-14 h-14 rounded-full flex items-center justify-center z-30">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center">
                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="50.914" height="50.914" rx="25.457" fill="url(#paint0_linear_425_1739)"/>
                          <path d="M28.3482 15.8152H22.5625V21.6009H28.3482V15.8152Z" stroke="white" strokeWidth="1.92856" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M35.0982 29.3152H29.3125V35.1009H35.0982V29.3152Z" stroke="white" strokeWidth="1.92856" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M21.5982 29.3152H15.8125V35.1009H21.5982V29.3152Z" stroke="white" strokeWidth="1.92856" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.7031 29.3151V25.458H32.2031V29.3151" stroke="white" strokeWidth="1.92856" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M25.4531 25.4582V21.6011" stroke="white" strokeWidth="1.92856" strokeLinecap="round" strokeLinejoin="round"/>
                          <defs>
                            <linearGradient id="paint0_linear_425_1739" x1="3.81855" y1="57.9147" x2="52.8233" y2="-2.33507e-06" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#5BEC71"/>
                              <stop offset="0.902778" stopColor="#0F72D7"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Right Card (Analytics) */}
                  <div className="absolute scale-[0.75] shadow-[0_0_0_5px_rgba(255,255,255,0.08),0_5px_10px_rgba(0,0,0,0.2)] top-[215px] left-[245px] w-[255px] bg-white rounded-[12px] px-4 py-[14px] z-20">
                    <span className="text-[#8E95A3] text-[12.5px] font-medium block mb-2.5">Analytics</span>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                          <Image src={analytics} alt="analytics" width={24} height={24} />
                        </div>
                        <span className="text-[12px] f text-[#01091E]">Google Analytics</span>
                      </div>
                      <div className="flex scale-[0.9] items-center gap-1.5 bg-[#E2F8E8] text-[#22C55E] text-[10px] font-semibold px-2 py-1 rounded-full border border-[#BFF0D1]">
                        Connected
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9 12l2 2 4-4"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 4: Recurring Process Logic ── */}
          <FeatureCard className="h-[235px] md:h-[420px] lg:h-[380px]">
            <GlowRight />
            <BackgroundGrid
              containerClass="-right-2 w-[80%] h-[80%] opacity-60 block md:hidden"
              spacing="2px"
              bgSize="40px 40px"
              maskPosition="100% 100%"
              colorAlpha="0.08"
            />
            <BackgroundGrid
              containerClass="-right-2 w-[80%] h-[80%] opacity-60 hidden md:block"
              spacing="2px"
              bgSize="60px 60px"
              maskPosition="100% 100%"
              colorAlpha="0.08"
            />

            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="38" rx="5.4" fill="url(#paint0_linear_425_1766)" />
                    <path d="M23.168 10.6666L26.5013 14L23.168 17.3333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.5 18.1667V17.3333C11.5 16.4493 11.8512 15.6014 12.4763 14.9763C13.1014 14.3512 13.9493 14 14.8333 14H26.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.8333 27.3333L11.5 24L14.8333 20.6666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.5 19.8334V20.6667C26.5 21.5508 26.1488 22.3986 25.5237 23.0237C24.8986 23.6489 24.0507 24 23.1667 24H11.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_425_1766" x1="30.875" y1="-1.64565e-06" x2="4.75" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFCC9C" />
                        <stop offset="1" stopColor="#FF8853" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                title="Recurring Process Logic"
              />
              <p className="text-[12px] md:text-[12px] text-white/80 leading-[1.4] mb-6 mt-1">
                Standardize nurture, onboarding, reporting, and internal
                handoffs with less manual effort.
              </p>

              {/* 4 Process Cards */}
              <div className="relative top-[30px] flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[500px] h-[260px] scale-[0.5] sm:scale-[0.65] md:scale-[0.6] lg:scale-[0.75] xl:scale-[0.9] origin-center -translate-y-4 flex flex-col gap-10">
                  
                  {/* Top Row */}
                  <div className="flex justify-center w-full px-6">
                    <ProcessCard
                      title="Save Time"
                      titleClass="text-[#3E3E3E]"
                      subtitle="Automate repetitive processes"
                      wrapperClass="w-[210px] scale-[0.78] gap-1.5"
                      bgStyle="linear-gradient(60.63deg, rgba(185, 205, 255, 0.35) -8.01%, rgba(238, 233, 255, 0.35) 90.19%), #FFFFFF"
                      icon={
                        <svg width="32" height="32" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="28.4748" height="28.4748" rx="4.07765" fill="url(#paint0_linear_425_1774)"/>
                          <g clipPath="url(#clip0_425_1774)">
                            <path d="M14.2363 20.4385C17.661 20.4385 20.4374 17.6621 20.4374 14.2374C20.4374 10.8126 17.661 8.03625 14.2363 8.03625C10.8115 8.03625 8.03516 10.8126 8.03516 14.2374C8.03516 17.6621 10.8115 20.4385 14.2363 20.4385Z" stroke="white" strokeWidth="1.24022" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.2383 10.5167V14.2374L16.7187 15.4776" stroke="white" strokeWidth="1.24022" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_425_1774" x1="28.4748" y1="-1.76088e-06" x2="-1.06781" y2="28.4748" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#B8A4FF"/>
                              <stop offset="1" stopColor="#6B31B6"/>
                            </linearGradient>
                            <clipPath id="clip0_425_1774">
                              <rect width="14.8827" height="14.8827" fill="white" transform="translate(6.79688 6.79602)"/>
                            </clipPath>
                          </defs>
                        </svg>
                      }
                    />
                    <ProcessCard
                      title="Reduce Errors"
                      titleClass="text-[#01091E]"
                      subtitle="Consistent Execution every time"
                      wrapperClass="w-[210px] scale-[0.78] gap-3"
                      bgStyle="linear-gradient(201.99deg, rgba(255, 221, 188, 0.1505) 7.19%, rgba(255, 160, 118, 0.35) 118.31%), #FFFFFF"
                      icon={
                        <svg width="32" height="32" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="28.4748" height="28.4748" rx="4.07765" fill="url(#paint0_linear_425_1783)"/>
                          <g clipPath="url(#clip0_425_1783)">
                            <path d="M14.2382 20.4385C14.2382 20.4385 19.1991 17.958 19.1991 14.2374V9.89659L14.2382 8.03625L9.27734 9.89659V14.2374C9.27734 17.958 14.2382 20.4385 14.2382 20.4385Z" stroke="white" strokeWidth="1.24022" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.3789 14.2374L13.6191 15.4776L16.0996 12.9972" stroke="white" strokeWidth="1.24022" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_425_1783" x1="23.1358" y1="-1.23314e-06" x2="3.55935" y2="28.4748" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFCC9C"/>
                              <stop offset="1" stopColor="#FF8853"/>
                            </linearGradient>
                            <clipPath id="clip0_425_1783">
                              <rect width="14.8827" height="14.8827" fill="white" transform="translate(6.79688 6.79602)"/>
                            </clipPath>
                          </defs>
                        </svg>
                      }
                    />
                  </div>

                  {/* Bottom Row */}
                  <div className="flex justify-between w-full px-2 md:px-4">
                    <ProcessCard
                      title="Improve Handoffs"
                      titleClass="text-[#01091E]"
                      subtitle="Ensure nothing falls through the cracks"
                      wrapperClass="w-[210px] scale-[0.8] gap-3"
                      bgStyle="linear-gradient(201.99deg, rgba(239, 247, 255, 0.4) 7.19%, rgba(165, 201, 255, 0.4) 118.31%), #FFFFFF"
                      icon={
                        <svg width="32" height="32" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="28.4748" height="28.4748" rx="4.07765" fill="url(#paint0_linear_425_1791)"/>
                          <g clipPath="url(#clip0_425_1791)">
                            <path d="M16.7167 19.8188V18.5786C16.7167 17.9207 16.4554 17.2898 15.9902 16.8247C15.525 16.3595 14.8941 16.0981 14.2363 16.0981H10.5156C9.85775 16.0981 9.22684 16.3595 8.76166 16.8247C8.29649 17.2898 8.03516 17.9207 8.03516 18.5786V19.8188" stroke="white" strokeWidth="1.24022" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.3789 13.6176C13.7488 13.6176 14.8593 12.5071 14.8593 11.1372C14.8593 9.76727 13.7488 8.65674 12.3789 8.65674C11.009 8.65674 9.89844 9.76727 9.89844 11.1372C9.89844 12.5071 11.009 13.6176 12.3789 13.6176Z" stroke="white" strokeWidth="1.24022" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20.4385 19.8188V18.5785C20.438 18.029 20.2551 17.4951 19.9184 17.0607C19.5817 16.6263 19.1103 16.3161 18.5781 16.1787" stroke="white" strokeWidth="1.24022" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.7188 8.7373C17.2523 8.87392 17.7252 9.18422 18.0629 9.6193C18.4006 10.0544 18.5839 10.5895 18.5839 11.1402C18.5839 11.691 18.4006 12.2261 18.0629 12.6612C17.7252 13.0963 17.2523 13.4066 16.7188 13.5432" stroke="white" strokeWidth="1.24022" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_425_1791" x1="23.1358" y1="-1.23314e-06" x2="3.55935" y2="28.4748" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#B6DAFF"/>
                              <stop offset="1" stopColor="#63A2FF"/>
                            </linearGradient>
                            <clipPath id="clip0_425_1791">
                              <rect width="14.8827" height="14.8827" fill="white" transform="translate(6.79688 6.79639)"/>
                            </clipPath>
                          </defs>
                        </svg>
                      }
                    />
                    <ProcessCard
                      title="Scale"
                      titleClass="text-[#01091E]"
                      subtitle="Standardized processes that grow with you"
                      wrapperClass="w-[210px] scale-[0.8] gap-3"
                      bgStyle="linear-gradient(60.63deg, rgba(255, 183, 183, 0.35) -8.01%, rgba(255, 234, 243, 0.35) 90.19%), #FFFFFF"
                      icon={
                        <svg width="32" height="32" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="28.4748" height="28.4748" rx="4.07765" fill="url(#paint0_linear_425_1799)"/>
                          <g clipPath="url(#clip0_425_1799)">
                            <path d="M16.7167 19.8186V18.5783C16.7167 17.9205 16.4554 17.2896 15.9902 16.8244C15.525 16.3592 14.8941 16.0979 14.2363 16.0979H10.5156C9.85775 16.0979 9.22684 16.3592 8.76166 16.8244C8.29649 17.2896 8.03516 17.9205 8.03516 18.5783V19.8186" stroke="white" strokeWidth="1.24022" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.3789 13.6174C13.7488 13.6174 14.8593 12.5069 14.8593 11.1369C14.8593 9.76703 13.7488 8.65649 12.3789 8.65649C11.009 8.65649 9.89844 9.76703 9.89844 11.1369C9.89844 12.5069 11.009 13.6174 12.3789 13.6174Z" stroke="white" strokeWidth="1.24022" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20.4385 19.8185V18.5783C20.438 18.0287 20.2551 17.4948 19.9184 17.0605C19.5817 16.6261 19.1103 16.3159 18.5781 16.1785" stroke="white" strokeWidth="1.24022" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.7188 8.73706C17.2523 8.87367 17.7252 9.18398 18.0629 9.61905C18.4006 10.0541 18.5839 10.5892 18.5839 11.14C18.5839 11.6908 18.4006 12.2259 18.0629 12.6609C17.7252 13.096 17.2523 13.4063 16.7188 13.5429" stroke="white" strokeWidth="1.24022" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_425_1799" x1="28.4748" y1="-1.76088e-06" x2="-1.06781" y2="28.4748" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFEAF3"/>
                              <stop offset="1" stopColor="#DC486D"/>
                            </linearGradient>
                            <clipPath id="clip0_425_1799">
                              <rect width="14.8827" height="14.8827" fill="white" transform="translate(6.79688 6.79614)"/>
                            </clipPath>
                          </defs>
                        </svg>
                      }
                    />
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

// ══════════════════════════════════════════════
// REUSABLE HELPER COMPONENTS (To Reduce Redundancy)
// ══════════════════════════════════════════════

export function FeatureCard({ children, className }) {
  return (
    <div
      className={`relative rounded-[20px] border border-white/10 bg-[#01091E] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_4px_4px_36px_rgba(117,186,255,0.12),inset_4px_4px_36px_rgba(91,236,113,0.05)] backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-300 ease-in-out p-6 lg:p-7 flex flex-col ${className}`}
    >
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

function BackgroundGrid({ containerClass, spacing, bgSize, maskPosition, colorAlpha }) {
  return (
    <div
      className={`absolute bottom-0 pointer-events-none ${containerClass}`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, ${colorAlpha}) ${spacing}, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, ${colorAlpha}) ${spacing}, transparent 1px)`,
        backgroundSize: bgSize,
        backgroundPosition: "left bottom",
        maskImage: `radial-gradient(circle at ${maskPosition}, black, transparent 80%)`,
        WebkitMaskImage: `radial-gradient(circle at ${maskPosition}, black, transparent 80%)`,
      }}
    />
  );
}

function WorkflowNode({ className, iconNode, title, subtitle }) {
  return (
    <div className={`absolute scale-[0.95] w-[210px] h-[62px] bg-[#0A1325]/80 border border-[#FFFFFF1A] rounded-[12.55px] shadow-[inset_5.02px_5.02px_45.17px_0px_#75BAFF1F,inset_5.02px_5.02px_45.17px_0px_#5BEC710D,0px_5.02px_22.59px_0px_#75BAFF1F] backdrop-blur-[12.55px] flex items-center px-[16px] py-[12px] z-20 ${className}`}>
      {iconNode}
      <div className="w-[1.5px] h-[34px] bg-[#D9DADB] mx-[14px]"></div>
      <div className="flex flex-col">
        <span className="text-[#FFFFFF] text-[14.36px] font-medium leading-tight mb-0.5">{title}</span>
        <span className="text-[#FFFFFFCC] text-[11.5px] leading-tight">{subtitle}</span>
      </div>
    </div>
  );
}

function ProcessCard({ title, titleClass, subtitle, bgStyle, icon, wrapperClass }) {
  return (
    <div
      className={`rounded-[12px] p-4 flex items-center shadow-[0_0_0_7px_rgba(255,255,255,0.08),0_5px_10px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1 ${wrapperClass}`}
      style={{ background: bgStyle }}
    >
      <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className={`text-[14.5px] sm:text-[15px] leading-tight ${titleClass}`}>
          {title}
        </span>
        <span className="text-[11.5px] text-gray-500 mt-1 leading-tight">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

function GlowRight() {
  return (
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
  );
}