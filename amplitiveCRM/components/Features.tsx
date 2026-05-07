"use client";

import AliceCard from "./DesktopHome/AliceCard";
import DesktopBackground from "./DesktopHome/DesktopBackground";
import Grid from "./DesktopHome/Grid";
import MobileAliceCard from "./MobileHome/MobileAliceCard";
import MobileBackground from "./MobileHome/MobileBackground";

export default function Features() {
  return (
    <div
      className="relative w-full min-h-[100dvh] bg-[#01091E] text-white pb-10 overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* ── Desktop Background Glow ── */}
      <DesktopBackground />

      {/* ── Mobile Background Glow ── */}
      <MobileBackground />

      {/* ── Shared Grid ── */}
      <Grid />

      {/* ══════════════════════════════════════════════
          HERO — DESKTOP & TABLET (md+) 
      ══════════════════════════════════════════════ */}
      <div className="relative w-full h-screen items-center justify-center hidden md:flex">
        <div className="relative min-w-[1485px] min-h-[600px] flex items-center justify-between scale-[0.5] lg:scale-[0.65] xl:scale-[0.8] 2xl:scale-100 origin-center z-10">
          
          {/* Left Text Content */}
          <div className="flex-shrink-0 flex flex-col justify-center w-[650px] h-[411px] pl-4 -translate-y-[20px]">
            <div className="inline-flex items-center justify-center px-4 py-2 border border-white/20 rounded-full bg-transparent mb-5 text-[13.5px] font-medium text-white/70 tracking-wide w-max">
              CRM & Pipelines
            </div>
            <h1 className="text-[55px] md:text-[52px] font-medium leading-[1.15] text-white mb-6">
              Your pipeline runs <br />
              inside your{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#0E78E9]">
                AI system
              </span>
            </h1>
            <p className="text-[14px] font-light text-white/70 leading-[1.7] max-w-[480px] mb-8">
              Leads, opportunities, and follow-ups stay connected—so execution
              and revenue move together.
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

          {/* Right Floating Elements (CRM Workspace UI) */}
          <AliceCard/>
          </div>
      </div>

      {/* ══════════════════════════════════════════════
          HERO — MOBILE ONLY (< md)
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 md:hidden flex flex-col items-center text-center px-5 pt-14 mx-auto w-full max-w-[480px]">
        <div className="w-[90%] mb-22">
          <div className="inline-flex items-center justify-center px-4 py-1.5 border border-white/20 rounded-full mb-5 text-[11px] font-medium text-white/70 tracking-wide">
            CRM & Pipelines
          </div>
          <h1 className="text-[23px] sm:text-[28px] font-medium leading-[1.35] text-white mb-4">
            Your pipeline runs <br /> inside your{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#00A3FF]">
              AI system
            </span>
          </h1>
          <p className="text-[12.2px]  text-white leading-[1.25] max-w-[300px] mx-auto mb-3 ">
            Leads, opportunities, and follow-ups stay connected—so execution and
            revenue move together.
          </p>
          <div className="flex flex-col items-center gap-3">
              
              <button className="flex items-center cursor-pointer gap-2 px-6 py-2 rounded-[7px] text-[12px]  text-[#020a16] bg-white hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] scale-[0.86] ">
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
              <button className="px-6.5 py-1.5 rounded-[6px] text-[10px] font-medium text-white/90 bg-[#1e2e46] hover:bg-[#2a4060] cursor-pointer transition-all border border-white/5 shadow-sm scale-[1.1] ">
                Book Demo
              </button>
            </div>
        </div>
        
        {/* Mobile CRM Card Wrapper */}
          <MobileAliceCard/>
      </div>
    </div>
  );
}