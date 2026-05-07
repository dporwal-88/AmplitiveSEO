"use client";

import Image from "next/image";
import studioImage from "../public/studioColor.png";

export default function StudioSection() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
      `}</style>

      {/* ── 1. RAW BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={studioImage}
          alt="Studio Background"
          fill
          priority
          className="object-cover object-bottom md:object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ── 2. GEOMETRIC SVG OVERLAY ── */}
      {/* Adjusted the bottom positioning so the shape sits nicely in the extended mobile height */}
      <div className="absolute right-[-29%] md:right-[-15%] md:top-[8%] bottom-[-5%] md:bottom-auto z-[1] pointer-events-none opacity-40 md:opacity-40 select-none mix-blend-overlay">
        <svg 
          width="650" 
          height="450" 
          viewBox="0 0 828 938" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-[150vw] md:w-[60vw] h-auto lg:w-[828px]"
        >
          <path 
            d="M10.1752 571.093L510.957 13.4553C535.627 -14.0066 581.159 3.37623 581.159 40.2599V334.526L817.386 572.334C824.193 579.2 828 588.476 828 598.117V884.86C828 920.648 784.591 938.469 759.336 913.052L591.847 744.41C585.039 737.544 581.232 728.268 581.232 718.628V334.526L70.2018 903.484C45.6055 930.946 0 913.563 0 876.68V597.678C0 587.891 3.58695 578.47 10.1752 571.166V571.093Z" 
            fill="white" 
            fillOpacity="0.7"
          />
        </svg>
      </div>

      {/* ── 3. DIAGONAL GRID OVERLAY ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          transform: "skewY(-5deg) scale(1.2)"
        }}
      />

      {/* ── 4. CONTENT ── */}
      {/* FIXED: Changed `h-[430px ]` to `min-h-[600px]` for mobile to match Figma's tall aesthetic */}
      <div className="relative z-10 flex items-start md:items-center min-h-[600px] md:min-h-[480px] px-8 md:px-24 py-20 md:py-24 max-w-[1400px] mx-auto">
        <div className="max-w-[550px] w-full flex flex-col items-center md:items-start text-center md:text-left">
          
          <h2 className="text-[26px] md:text-[40px] font-medium tracking-tight leading-[1.1] md:leading-[1.05] text-white mb-6 md:mb-8">
            See CRM inside    
            <br className="hidden md:block" />
            <span className="md:hidden"> </span> Amplitive.
          </h2>

          <p className="text-[12px] md:text-[12px] font-medium text-[#FFFFFF] md:text-white/60 leading-relaxed mb-10 md:mb-12 w-[290px] sm:max-w-[350px] md:max-w-[480px]">
            Book a walkthrough to see how crm & pipelines fits into a more connected marketing operation.
          </p>

          <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-4 md:gap-5 w-full md:w-auto">
             <button className="md:w-full md:max-w-[280px] md:w-auto px-6 md:px-8 py-1.5 md:py-3 rounded-[8px] md:rounded-[12px] border border-white/20 text-[12px] md:text-[14px] md:font-medium text-white bg-white/[0.12] backdrop-blur-[32px] hover:bg-white/20 transition-all text-center">
                View Pricing
              </button>
            <button className="flex flex-row items-center justify-center gap-2 px-6 md:px-10 py-2 md:py-3 rounded-[8px] md:rounded-lg text-[12px] md:text-[14px] text-[#040d1e] bg-white hover:bg-gray-100 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-fit md:w-auto">
            <span className="whitespace-nowrap font-medium">Book Demo</span>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          </div>

        </div>
      </div>
    </div>
  );
}