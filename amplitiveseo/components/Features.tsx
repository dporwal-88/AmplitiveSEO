
"use client";

import DesktopBackground from "./DesktopHome/DesktopBackground";
import Grid from "./DesktopHome/Grid";
import SeoOverview from "./DesktopHome/SeoOverview";
import HealthScore from "./DesktopHome/HealthScore";
import SearchClick from "./DesktopHome/SearchClick";
import MobileSearchPill from "./MobileHome/MobileSearchPill";
import MobileBusinessBox from "./MobileHome/MobileBusinessBox";
import MobileSeoOverview from "./MobileHome/MobileSeoOverview";
import MobileSearchClick from "./MobileHome/MobileSearchClick";
import MobileHealthScore from "./MobileHome/MobileHealthScore";
import MobileBackground from "./MobileHome/MobileBackground";

export default function Features() {
  return (
    <div
      className="relative w-full min-h-[100dvh] bg-[#01091E] text-white pb-10"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* ── Desktop Background Glow (Hidden on Mobile) ── */}
      <DesktopBackground/>

      {/* ── Mobile Background Glow (Hidden on Desktop) ── */}
      <MobileBackground/>

      {/* ── Shared Grid ── */}
      <Grid/>

      {/* ══════════════════════════════════════════════
          HERO — DESKTOP ONLY (lg+) 
      ══════════════════════════════════════════════ */}
      <div className="relative w-full h-screen items-center justify-center hidden lg:flex">
        <div className="relative min-w-[1485px] min-h-[600px] flex items-center justify-between scale-[0.65] xl:scale-[0.8] min-[930px]:scale-[0.9] 2xl:scale-100 origin-center z-10">
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
          <div className="relative flex-shrink-0 w-[796px] h-[497px] ">
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
            <SeoOverview/>
            {/* 4. Company Health Score */}
            <HealthScore/>
            {/* 5. 86% Search Click Circle */}
            <SearchClick/>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          HERO — MOBILE ONLY (< lg)
      ══════════════════════════════════════════════ */}

      <div className="relative z-10 lg:hidden flex flex-col items-center text-center px-5 pt-14">
        <div className="w-[80%]">
          <div className="inline-flex items-center justify-center px-3.5 py-1.5 border border-white/20 rounded-full mb-4 text-[11px] font-medium text-white/70 tracking-wide">
            SEO Workspace
          </div>
          <h1 className="text-[22px] sm:text-[24px] font-medium leading-[1.2] text-white mb-4">
            Run SEO with AI across your <br />
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#00A3FF]">
              entire system
            </span>
          </h1>
        </div>
        <p className="text-[13px] font-light text-white/60 leading-[1.7] mb-7 max-w-[300px]">
          AI connects SEO to content, planning, and execution—so your workflows
          drive growth automatically.
        </p>
        <div className="flex items-center flex-col gap-3 mb-10 flex-wrap justify-center">
          <button className="flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-[12px] font-semibold text-[#020a16] bg-white shadow-lg">
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
          <button className="px-8.5 py-2 rounded-lg text-[12px] font-medium text-white/90 bg-[#1e2e46] border border-white/5">
            Book Demo
          </button>
        </div>

        {/* Mobile Preview Cards Container */}
        <div className="w-full max-w-[340px] relative mt-36 mb-16">
          
          {/* Track Search Visibility Pill (Added for Mobile) */}
          <MobileSearchPill/>

          {/* Business Box (Added for Mobile) */}
          <MobileBusinessBox/>

          {/* SEO Overview Card (Converted to #01091E with Inner SVG Glow for Mobile) */}
          <MobileSeoOverview/>

          {/* Floating Mobile Items */}
          <MobileSearchClick/>
          <MobileHealthScore/>
        </div>
      </div>

      {/* ── Bottom Transition Overlay ── */}
      {/* <div className="hidden lg:block absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#01091E] to-transparent pointer-events-none z-10" /> */}
    </div>
  );
}