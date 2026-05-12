"use client";

import React, { useState } from "react";
import { Montserrat_Alternates, Montserrat, Urbanist } from 'next/font/google';

// Configure the font
const montserratAlt = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['600', '700'], 
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
const urbanist = Urbanist({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist', 
});

export default function Features() {
  // Removed state from here, as it belongs in MainCalendarCard where it's used
  return (
    <div
      className={`relative w-full min-h-[100dvh] bg-[#01091E] text-white overflow-hidden ${montserrat.className}`}
    >
      <BackgroundGlows />
      <GridBackground />

      {/* ══════════════════════════════════════════════
          UNIFIED RESPONSIVE LAYOUT
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-14 md:flex-row md:justify-center md:h-screen md:px-0 md:pt-0  ">
        
        {/* Scaling Wrapper */}
        <div className="w-full flex flex-col items-center md:relative md:w-[1485px] md:min-h-[600px] md:flex-row md:items-center md:justify-between md:scale-[0.5] lg:scale-[0.65] xl:scale-[0.8] 2xl:scale-100 md:origin-center md:z-10 md:transition-transform md:duration-300 ">
          
          {/* ── 1. Text & CTA Section ── */}
          <div className="w-[95%] md:w-[650px] md:h-[411px] md:flex-shrink-0 md:flex md:flex-col mb-4 md:mb-0 md:justify-center md:pl-4 md:-translate-y-[20px] md:translate-x-[50px] md:text-left">
            <div className="inline-flex items-center justify-center mx-auto md:mx-0 px-4 py-1.5 md:py-2 border border-white/20 rounded-full mb:3 md:mb-5 text-[11px] md:text-[13.5px] md:font-medium text-white/80 tracking-wide md:bg-[#FFFFFF08] md:w-max scale-[0.8] md:scale-[1] ">
              Planning, Calendar & Projects
            </div>
            <h1 className="text-[23px] sm:text-[32px] md:text-[45px] lg:text-[46px] font-medium leading-[1.35] md:leading-[1.15] text-[#FFFFFF] mb-4 md:mb-6">
              Plan, schedule, and <br />
              publish content from <br className="hidden md:block" />
              <span className={`${montserratAlt.className} md:font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#0E78E9]`}>
                {" "}one place
              </span>
            </h1>
            <p className="text-[12px] md:text-[16px] font-light text-[#FFFFFF]  leading-[1.25] md:leading-[1.7] w-[260px] md:w-[560px] mx-auto md:mx-0 mb-7 md:mb-8">
              Organize your content calendar, schedule posts, and keep execution on track.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 justify-center md:justify-start">
              <button className="px-8.5 md:px-6 py-1.5 md:py-2.5 rounded-[6px] md:rounded-lg text-[9.1px] md:text-[13px] font-medium text-white/90 bg-[#FFFFFF1F] md:bg-[#1e2e46] backdrop-blur-[32px] md:backdrop-blur-none hover:bg-[#2a4060] transition-all border border-white/5 shadow-sm scale-[1.1] md:scale-100 cursor-pointer">
              Book Demo
            </button>
              <button className="flex items-center gap-2 px-8 md:px-8 py-2 md:py-2.5 rounded-[7px] md:rounded-lg text-[11px] md:text-[13px] md:font-semibold text-[#000000] bg-[#FFFFFF] hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] scale-[0.86] md:scale-100 cursor-pointer">
                View Pricing
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>

          {/* ── 2. Floating Widgets Container ── */}
          <div className="w-full relative mt-20 md:mt-0 md:flex-shrink-0 md:w-[796px] md:h-[497px] flex justify-center md:block md:-translate-x-[50px]">
            {/* Mobile Scaling Wrapper */}
            <div className={`relative w-[320px] h-[340px] sm:w-[360px] sm:h-[380px] md:w-full md:h-full origin-center scale-[0.95] sm:scale-100 md:scale-100 ${urbanist.className} `}>
              <SearchWidget />
              <MainCalendarCard />
              <LinkedInPostWidget />
              <InstagramPostWidget />
              <SchedulePostButton />
              <SmallBellIcon />
              <SmallClipboardIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
    CALENDAR UI COMPONENTS
   ══════════════════════════════════════════════ */

const SearchWidget = () => (
  <div className="absolute top-[8px] -left-1 sm:left-6 md:top-[-13px] md:left-[120px] md:right-auto flex items-center gap-[5.75px] md:gap-[10.46px] px-[6.6px] md:px-[12px] py-[2.56px] md:py-[4.65px] w-[157.75px] md:w-[305px] h-[28.53px] md:h-[51.88px] rounded-[51.11px] md:rounded-[92.94px] border-[0.64px] md:border-[1.16px] border-[#FFFFFF1A] bg-[#00000024] backdrop-blur-md text-[8.95px] scale-[0.9] md:scale-[1] md:text-[16.26px] text-white/70 z-20 shadow-[inset_2.56px_2.56px_23px_0px_#75BAFF1F,inset_2.56px_2.56px_23px_0px_#5BEC710D] md:shadow-[inset_4.65px_4.65px_41.82px_0px_#75BAFF1F,inset_4.65px_4.65px_41.82px_0px_#5BEC710D,0_10px_30px_rgba(0,0,0,0.4)]">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-[14px] h-[14px] md:w-[24px] md:h-[24px]">
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.9984 21L16.6484 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="truncate">Search Posts</span>
  </div>
);

// Changed to explicit return () => { return (...) } so we can use hooks inside
const MainCalendarCard = () => {
  // State moved inside the component that actually uses it
  const [activeTab, setActiveTab] = useState("Weekly");
  const tabs = ["Weekly", "Daily", "Monthly"];

  return (
    <div className="relative md:absolute md:top-[60px] md:left-[230px] z-10 rounded-[18px] md:rounded-[20px] border-none w-[full] h-[240px] md:w-[410px] md:h-[330px] shadow-[0_0_30px_rgba(255,255,255,0.25)] md:shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_4px_4px_36px_rgba(117,186,255,0.12),inset_4px_4px_36px_rgba(91,236,113,0.05)] md:backdrop-blur-md scale-[0.6] md:scale-[1]">
      <div className="relative w-full h-full rounded-[18px] md:rounded-[20px] bg-[#0A1325] border border-white/5 p-4 sm:p-5 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Background SVG Mobile */}
        <svg className="absolute top-0 left-0 z-0 opacity-90 pointer-events-none md:hidden" width="90%" height="62%" viewBox="0 0 316 205" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <g opacity="0.6" filter="url(#filter0_f_303_14574_mob)">
            <path d="M221.555 -50.7261C221.555 38.4702 149.247 110.778 60.051 110.778C-29.1452 110.778 -101.453 38.4702 -101.453 -50.7261C-101.453 -139.922 -29.1452 -212.23 60.051 -212.23C149.247 -212.23 221.555 -139.922 221.555 -50.7261Z" fill="url(#paint0_radial_303_14574_mob)" />
          </g>
          <defs>
            <filter id="filter0_f_303_14574_mob" x="-194.955" y="-305.733" width="610.013" height="510.013" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="46.7512" result="effect1_foregroundBlur_303_14574_mob" />
            </filter>
            <radialGradient id="paint0_radial_303_14574_mob" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.2048 -56.8416) rotate(90) scale(172.623 160.411)">
              <stop stopColor="#5BEC71" />
              <stop offset="1" stopColor="#0F72D7" />
            </radialGradient>
          </defs>
        </svg>

        {/* Background SVG Desktop */}
        <svg className="absolute top-0 left-0 z-0 opacity-90 pointer-events-none hidden md:block" width="100%" height="100%" viewBox="0 0 376 175" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <g opacity="0.6" filter="url(#filter0_f_303_14574)">
            <path d="M221.555 -50.7261C221.555 38.4702 149.247 110.778 60.051 110.778C-29.1452 110.778 -101.453 38.4702 -101.453 -50.7261C-101.453 -139.922 -29.1452 -212.23 60.051 -212.23C149.247 -212.23 221.555 -139.922 221.555 -50.7261Z" fill="url(#paint0_radial_303_14574)" />
          </g>
          <defs>
            <filter id="filter0_f_303_14574" x="-194.955" y="-305.733" width="510.013" height="510.013" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="46.7512" result="effect1_foregroundBlur_303_14574" />
            </filter>
            <radialGradient id="paint0_radial_303_14574" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.2048 -56.8416) rotate(90) scale(172.623 160.411)">
              <stop stopColor="#5BEC71" />
              <stop offset="1" stopColor="#0F72D7" />
            </radialGradient>
          </defs>
        </svg>

        {/* Calendar Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Navbar */}
          {/* Interactive Timeframe Navbar */}
          <div className="flex items-center justify-between bg-white/5 rounded-[10px] p-1 mb-3 md:mb-3 border border-white/5 relative">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[10px] md:text-[16px] py-[6px] md:py-[7.5px] px-4 md:px-6 rounded-md cursor-pointer transition-all duration-300 ease-in-out font-medium ${
                  activeTab === tab
                    ? "bg-white text-[#01091E] shadow-sm"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Month Title */}
          <h3 className="text-white font-medium text-[20px] md:text-[38px] text-center mb-2 md:mb-3 tracking-wide">
            May 23
          </h3>

          {/* Calendar Grid */}
          <div className="grid grid-cols-6 gap-y-4 md:gap-y-3 text-center flex-1 content-center">
            {/* Days Header */}
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d} className="text-[11px] md:text-[14px] text-white/80 font-medium tracking-wider">{d}</div>
            ))}
            
            {/* Dates - Row 1 */}
            <div className="text-[10px] md:text-[14px] text-white bg-white/25 p-1 md:p-2 ">12</div>
            <div className="text-[10px] md:text-[14px] text-white bg-white/25 p-1 md:p-2 ">13</div>
            <div className="text-[10px] md:text-[14px] text-white bg-white/25 p-1 md:p-2  relative">
              <div className="absolute inset-0 bg-white/25 bg-gradient-to-l from-[#FFA9CF] to-[#C62943] rounded-full w-[22px] h-[22px] md:w-[26px] md:h-[26px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 shadow-[0_0_15px_rgba(255,107,107,0.5)]"></div>
              14
            </div>
            <div className="text-[10px] md:text-[14px] text-white bg-white/25 p-1 md:p-2 ">15</div>
            <div className="text-[10px] md:text-[14px] text-white bg-white/25 p-1 md:p-2 ">16</div>
            <div className="text-[10px] md:text-[14px] text-white bg-white/25 p-1 md:p-2 ">17</div>
            
            {/* Dates - Row 2 */}
            <div className="text-[10px] md:text-[14px] text-white ">18</div>
            <div className="text-[10px] md:text-[14px] text-white ">19</div>
            <div className="text-[10px] md:text-[14px] text-white ">20</div>
            <div className="text-[10px] md:text-[14px] text-white ">21</div>
            <div className="text-[10px] md:text-[14px] text-white ">22</div>
            <div className="text-[10px] md:text-[14px] text-white ">23</div>

            {/* Dates - Row 3 */}
            <div className="text-[10px] md:text-[14px] text-white ">24</div>
            <div className="text-[10px] md:text-[14px] text-white ">25</div>
            <div className="text-[10px] md:text-[14px] text-white ">26</div>
            <div className="text-[10px] md:text-[14px] text-white ">27</div>
            <div className="text-[10px] md:text-[14px] text-white ">28</div>
            <div className="text-[10px] md:text-[14px] text-white ">29</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkedInPostWidget = () => (
  <div 
    className="absolute flex items-start flex-col bottom-35 -left-8 sm:-left-6 md:bottom-auto md:top-[250px] md:left-[105px] rounded-[12px] py-[10px] px-[14px] md:py-3 md:px-6 md:pr-8 z-30 w-[140px] md:w-[180px] transform hover:-translate-y-1 transition-transform border border-white/50 scale-[0.55] md:scale-[1] "
    style={{
      background: "linear-gradient(230.79deg, rgba(182, 218, 255, 0.35) 11.45%, rgba(99, 162, 255, 0.35) 88.55%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
      boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)"
    }}
  >
    <div className="text-[#3B82F6] text-[12px] md:text-[15px] mb-0.5 md:mb-1 font-medium">LinkedIn Post</div>
    <div className="text-gray-400 text-[9px] md:text-[13px] mb-1.5 md:mb-2.5">10:30 am</div>
    <div className="text-[#01091E] font-medium text-[10px] md:text-[13px]">"UX vs. UI Design"</div>
  </div>
);

const InstagramPostWidget = () => (
  <div 
    className="absolute flex flex-col items-start top-3 -right-9 sm:-right-6 md:top-[20px] md:left-[590px] md:right-auto justify-between w-[140px] md:w-[190.18px] h-[80px] md:h-[107.44px] rounded-[12px] md:rounded-[12.35px] px-[12px] md:px-[22.23px] py-[10px] md:py-[14.82px] z-30 transform hover:-translate-y-1 transition-transform border border-white/50 scale-[0.55] md:scale-[0.95] "
    style={{
      background: "linear-gradient(230.79deg, rgba(255, 234, 243, 0.35) 11.45%, rgba(255, 183, 183, 0.35) 88.55%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
      boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)"
    }}
  >
    <div className="flex flex-col items-start w-full">
      <div className="text-[#E11D48] text-[12px] md:text-[16px] mb-0.5 font-medium">Instagram Post</div>
      <div className="text-gray-400 text-[9px] md:text-[13px]">8:30 am</div>
    </div>
    <div className="text-[#01091E] font-medium text-[10px] md:text-[13px] mt-1 md:mt-0">"UX vs. UI Design"</div>
  </div>
);

const SchedulePostButton = () => (
  <button className="absolute bottom-31 -right-3 sm:-right-4 md:right-auto md:bottom-auto md:top-[360px] md:left-[545px] flex justify-center items-center gap-1.5 md:gap-2 px-4 md:px-8 py-2 md:py-2 rounded-[8px] md:rounded-[10px] text-white font-semibold text-[11px] md:text-[15.35px] bg-gradient-to-t from-[#5BEC71] scale-[0.55] md:scale-[1] to-[#0F72D7] shadow-[0_15px_30px_rgba(59,130,246,0.4)] z-30 hover:scale-105 transition-transform border border-white/20 cursor-pointer">
    <span className="text-[20px] md:text-[28px] leading-none font-light">+</span> Schedule Post
  </button>
);

const SmallBellIcon = () => (
  <div className="absolute top-[60px] left-5 md:top-[105px] md:left-[160px] w-8 h-8 md:w-11 md:h-11 rounded-[5px] bg-gradient-to-bl from-[#B8A4FF] to-[#6B31B6] flex items-center scale-[0.55] md:scale-[0.95] justify-center shadow-[0_10px_20px_rgba(168,85,247,0.4)] z-20">
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px] md:w-[20px] md:h-[20px]">
      <g clipPath="url(#clip0_425_29014)">
        <path d="M15 6.66666C15 5.34057 14.4732 4.0688 13.5355 3.13112C12.5979 2.19344 11.3261 1.66666 10 1.66666C8.67392 1.66666 7.40215 2.19344 6.46447 3.13112C5.52678 4.0688 5 5.34057 5 6.66666C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66666Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.4419 17.5C11.2954 17.7526 11.0851 17.9622 10.8321 18.1079C10.5791 18.2537 10.2922 18.3304 10.0003 18.3304C9.70828 18.3304 9.42142 18.2537 9.1684 18.1079C8.91539 17.9622 8.7051 17.7526 8.55859 17.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.66797 6.66666C1.66797 4.83332 2.2513 3.08332 3.33464 1.66666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.3346 6.66666C18.3346 4.86357 17.7498 3.10912 16.668 1.66666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_425_29014"><rect width="20" height="20" fill="white"/></clipPath>
      </defs>
    </svg>
  </div>
);

const SmallClipboardIcon = () => (
  <div className="absolute top-[110px] right-4 md:top-[200px] md:left-[670px] w-8 h-8 md:w-11 md:h-11 rounded-[5px] bg-gradient-to-br from-[#FFCC9C] to-[#FF755F] flex items-center scale-[0.55] md:scale-[0.9] justify-center shadow-[0_10px_20px_rgba(234,88,12,0.4)] z-20">
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px] md:w-[20px] md:h-[20px]">
      <path d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 1.66666V4.99999" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66797 1.66666V4.99999" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 8.33334H17.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66797 11.6667H6.6763" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 11.6667H10.0083" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 11.6667H13.3404" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66797 15H6.6763" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 15H10.0083" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 15H13.3404" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

/* ══════════════════════════════════════════════
    BACKGROUND COMPONENTS
   ══════════════════════════════════════════════ */

const BackgroundGlows = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:flex justify-center overflow-hidden">
      <svg width="1446" height="530" viewBox="0 0 1728 1168" fill="none" xmlns="http://www.w3.org/2000/svg">
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