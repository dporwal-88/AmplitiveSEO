"use client";

import { useState } from "react";

export default function Features() {
  return (
    <div
      className="relative w-full min-h-screen bg-[#01091E] text-white overflow-x-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* ── Shared Background Glow ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 flex justify-center overflow-hidden">
        <svg
          width="1446"
          height="720"
          viewBox="0 0 1728 1168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            opacity="0.6"
            filter="url(#filter0_f_123_48913)"
            style={{ mixBlendMode: "plus-lighter" }}
          >
            <path
              d="M1371.61 -553.896C1644.95 -273.424 1639.17 175.53 1358.7 448.872C1078.22 722.213 629.269 716.432 355.928 435.96C82.5869 155.488 88.3677 -293.467 368.84 -566.808C649.313 -840.15 1098.27 -834.369 1371.61 -553.896Z"
              fill="url(#paint0_radial_123_48913)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_123_48913"
              x="-450.186"
              y="-1372.92"
              width="2627.91"
              height="2627.91"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="302.415"
                result="effect1_foregroundBlur_123_48913"
              />
            </filter>
            <radialGradient
              id="paint0_radial_123_48913"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(845.511 -78.6694) rotate(45.7377) scale(757.944 704.321)"
            >
              <stop offset="0.303662" stopColor="#5BEC71" />
              <stop offset="0.870122" stopColor="#0F72D7" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* ── Shared Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1 ) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          backgroundPosition: "center -30px",
          /* Added mask to fade out the grid at the bottom */
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />

      {/* ══════════════════════════════════════════════
          HERO — DESKTOP ONLY (lg+)
      ══════════════════════════════════════════════ */}
      <div className="relative w-full h-screen items-center justify-center hidden lg:flex">
        <div className="relative w-[1485px] h-[600px] flex items-center justify-between scale-[0.65] xl:scale-[0.8] min-[1440px]:scale-[0.9] 2xl:scale-100 origin-center z-10">
          {/* Left Text Content */}
          <div className="flex-shrink-0 flex flex-col justify-center w-[650px] h-[411px] pl-4 -translate-y-[20px]">
            <div className="inline-flex items-center justify-center px-3.5 py-2 border border-white/20 rounded-full bg-transparent mb-4 text-[13.5px] font-medium text-white/70 tracking-wide w-max">
              SEO Workspace
            </div>
            <h1 className="text-[55px] md:text-[52px] font-medium leading-[1.15] text-white mb-6">
              Run SEO with AI across <br />
              your
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#0E78E9]">
                {" "}
                entire system
              </span>
            </h1>
            <p className="text-[13.5px] font-light text-white/70 leading-[1.7] max-w-[480px] mb-8">
              AI connects SEO to content, planning, and execution—so your
              workflows drive growth automatically.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 rounded-lg text-[13px] font-medium text-white/90 bg-[#1e2e46] hover:bg-[#2a4060] cursor-pointer transition-all border border-white/5 shadow-sm">
                Book Demo
              </button>
              <button className="flex items-center cursor-pointer gap-2 px-8 py-3 rounded-lg text-[13px] font-semibold text-[#020a16] bg-white hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                View Pricing
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Floating Elements (SEO Workspace UI) */}
          <div className="relative flex-shrink-0 w-[796px] h-[497px]">
            {/* 1. Track Search Visibility Pill */}
            <div
              className="absolute flex items-center gap-2 px-4 pr-20 md:pr-27 py-2.5 rounded-full border border-white/10 bg-[#0c182e]/10 backdrop-blur-md text-[15px] text-white/80 z-20 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              style={{ top: "-12px", left: "260px" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Track search visibility
            </div>

            {/* 2. Business Box (Dashed) */}
            <div
              className="absolute flex flex-col items-center justify-center gap-1.5 rounded-[12px] text-[11px] text-white/80 cursor-pointer hover:bg-[#0c182e]/15 transition-all z-20"
              style={{
                width: "80px",
                height: "80px",
                top: "50px",
                left: "85px",
                backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='white' stroke-width='1.5' stroke-dasharray='6%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Business
            </div>

            {/* 3. Main SEO Overview Card */}
            <div
              className="absolute rounded-[20px] p-7 z-10 overflow-hidden"
              style={{
                width: "504.4px",
                height: "356px",
                top: "60px",
                left: "190px",
                background: "#01091E",
                boxShadow: "0 0 30px rgba(135, 206, 250, 0.4), 0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <div className="absolute top-0 left-0 pointer-events-none opacity-100 ">
                <svg
                  width="420"
                  height="350"
                  viewBox="0 0 316 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.6" filter="url(#filter0_f_123_55689)">
                    <path
                      d="M221.551 -35.7261C221.551 53.4702 149.243 125.778 60.0471 125.778C-29.1492 125.778 -101.457 53.4702 -101.457 -35.7261C-101.457 -124.922 -29.1492 -197.23 60.0471 -197.23C149.243 -197.23 221.551 -124.922 221.551 -35.7261Z"
                      fill="url(#paint0_radial_123_55689)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_123_55689"
                      x="-194.959"
                      y="-290.733"
                      width="510.013"
                      height="510.013"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="46.7512"
                        result="effect1_foregroundBlur_123_55689"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial_123_55689"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(60.2009 -41.8416) rotate(90) scale(172.623 160.411)"
                    >
                      <stop stopColor="#5BEC71" />
                      <stop offset="1" stopColor="#0F72D7" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-[23px] text-white pt-2 font-medium mb-6 px-5">
                  SEO Overview
                </h3>

                <div className="pt-5 space-y-8 px-5">
                  {/* Bar 1 */}
                  <div className="w-full">
                    <div className="text-[13px] text-white/70 mb-2">
                      Total Keywords
                    </div>
                    <div className="flex items-center w-full gap-4">
                      <div className="flex-1 bg-white/10 rounded-full h-[10px]">
                        <div
                          className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[10px] rounded-full"
                          style={{ width: "33%" }}
                        ></div>
                      </div>
                      <span className="text-[15px] font-semibold text-white/70 text-right w-5 shrink-0">
                        33
                      </span>
                    </div>
                  </div>

                  {/* Bar 2 */}
                  <div className="w-full">
                    <div className="text-[13px] text-white/70 mb-2">
                      Total Backlinks
                    </div>
                    <div className="flex items-center w-full gap-4">
                      <div className="flex-1 bg-white/10 rounded-full h-[10px]">
                        <div
                          className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[10px] rounded-full"
                          style={{ width: "56%" }}
                        ></div>
                      </div>
                      <span className="text-[15px] font-semibold text-white/70 text-right w-5 shrink-0">
                        56
                      </span>
                    </div>
                  </div>

                  {/* Bar 3 */}
                  <div className="w-full">
                    <div className="text-[13px] text-white/70 mb-2">
                      Organic Traffic
                    </div>
                    <div className="flex items-center w-full gap-4">
                      <div className="flex-1 bg-white/10 rounded-full h-[10px]">
                        <div
                          className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[10px] rounded-full"
                          style={{ width: "44%" }}
                        ></div>
                      </div>
                      <span className="text-[15px] font-semibold text-white/70 text-right w-5 shrink-0">
                        44
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Company Health Score */}
            <div
              className="absolute rounded-[8px] bg-[#FFF5EE] p-2 pl-4 shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-30"
              style={{ width: "180px", top: "45px", left: "560px" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded bg-orange-400 flex items-center justify-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="21.1445"
                      height="21.1445"
                      rx="3.00475"
                      fill="url(#paint0_linear_123_48980)"
                    />
                    <path
                      d="M15.2095 10.5722H13.3547L11.9636 14.7455L9.18142 6.39899L7.79033 10.5722H5.93555"
                      stroke="white"
                      stroke-width="0.927391"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_123_48980"
                        x1="17.1799"
                        y1="-9.15695e-07"
                        x2="2.64306"
                        y2="21.1445"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFCC9C" />
                        <stop offset="1" stop-color="#FF8853" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="text-[10px] text-black/60 font-medium">
                Company Health Score
              </div>
              <div className="text-[24px] font-semibold text-black">88%</div>
            </div>

            {/* 5. 86% Search Click Circle */}
            <div
              className="absolute rounded-[8px] bg-[#FFF5EE] flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-30"
              style={{
                width: "106px",
                height: "120px",
                top: "340px",
                left: "100px",
              }}
            >
              <div className="relative flex items-center justify-center w-[88px] h-[88px]">
                <svg className="w-full h-full transform" viewBox="0 0 36 36">
                  <defs>
                    <linearGradient
                      id="pinkGradient"
                      x1="60%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="40%" stopColor="#FFA9CF" />
                      <stop offset="100%" stopColor="#C62943" />
                    </linearGradient>
                  </defs>
                  <path
                    className="text-gray-200"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    strokeDasharray="60, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#pinkGradient)"
                    strokeWidth="3.5"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-[16px] font-bold text-black leading-none">
                    86%
                  </span>
                  <span className="text-[6px] text-black/50 mt-1">
                    Search Clicks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          HERO — MOBILE ONLY (< lg)
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 lg:hidden flex flex-col items-center text-center px-5 pt-14 pb-8">
        <div className="inline-flex items-center justify-center px-3.5 py-1.5 border border-white/20 rounded-full mb-4 text-[11px] font-medium text-white/70 tracking-wide">
          SEO Workspace
        </div>
        <h1 className="text-[28px] sm:text-[32px] font-medium leading-[1.2] text-white mb-4">
          Run SEO with AI across <br />
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#00A3FF]">
            your entire system
          </span>
        </h1>
        <p className="text-[13px] font-light text-white/60 leading-[1.7] mb-7 max-w-[300px]">
          AI connects SEO to content, planning, and execution—so your workflows
          drive growth automatically.
        </p>
        <div className="flex items-center gap-3 mb-10 flex-wrap justify-center">
          <button className="px-5 py-2.5 rounded-lg text-[12px] font-medium text-white/90 bg-[#1e2e46] border border-white/5">
            Book Demo
          </button>
          <button className="flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-[12px] font-semibold text-[#020a16] bg-white">
            View Pricing
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Mobile Preview Cards */}
        <div className="w-full max-w-[340px] relative">
          <div
            className="rounded-[18px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-left backdrop-blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(91, 236, 113, 0.1), rgba(15, 114, 215, 0.1)), rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.16), radial-gradient(circle at 0% 0%, rgba(91, 236, 113, 0.15) 0%, transparent 70%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3 className="text-[15px] text-white font-medium mb-4">
              SEO Overview
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] text-white/70 mb-1.5">
                  <span>Total Keywords</span>
                  <span>33</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-[5px]">
                  <div
                    className="bg-gradient-to-r from-[#0F72D7] to-[#3ab4aa] h-[5px] rounded-full"
                    style={{ width: "33%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-white/70 mb-1.5">
                  <span>Total Backlinks</span>
                  <span>56</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-[5px]">
                  <div
                    className="bg-gradient-to-r from-[#0F72D7] to-[#0F72D7] h-[5px] rounded-full"
                    style={{ width: "56%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-white/70 mb-1.5">
                  <span>Organic Traffic</span>
                  <span>44</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-[5px]">
                  <div
                    className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[5px] rounded-full"
                    style={{ width: "44%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* Floating Mobile Items */}
          <div className="absolute -bottom-6 -left-2 rounded-[12px] bg-[#FFF5EE] flex flex-col items-center justify-center shadow-2xl w-[80px] h-[80px]">
            <div className="relative flex items-center justify-center w-[50px] h-[50px]">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  className="text-gray-200"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="text-pink-500"
                  strokeDasharray="86, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-[12px] font-bold text-black">86%</span>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-2 rounded-[10px] bg-[#FFF5EE] p-3 shadow-2xl w-[120px]">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-4 h-4 rounded bg-orange-400 flex items-center justify-center">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-[8px] text-black/60 font-medium">
                Health Score
              </span>
            </div>
            <div className="text-[18px] font-semibold text-black">88%</div>
          </div>
        </div>
      </div>

      {/* ── Bottom Transition Overlay ── */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#01091E] to-transparent pointer-events-none z-10" />
    </div>
  );
}

/* ── Small reusable sub-components ── */
