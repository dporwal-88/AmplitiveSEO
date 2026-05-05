"use client";

import { useState } from "react";
import Image from "next/image";

import healthIcon from "../public/healthIcon.png"
import seachPink from "../public/searchPink.png"
import taskIcon from "../public/TaskIcon.png"
import optimizationIcon from "../public/OptimizationIcon.png"
import projectIcon from "../public/ProjectIcon.png"
import guestIcon from "../public/guestIcon.png"
import guestKey from "../public/guestKey.png"


export default function Features() {
  const [activeTab, setActiveTab] = useState("Image");

  return (
    <div
      className="relative w-full min-h-screen bg-[#01091E] text-white overflow-x-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      {/* ── Shared Background Glow ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 flex justify-center overflow-hidden">
        <svg width="1728" height="1205" viewBox="0 0 1728 1205" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[1366px] max-w-none opacity-80 sticky top-0">
          <g opacity="0.6" filter="url(#filter0_f_1_27129)" style={{ mixBlendMode: "plus-lighter" }}>
            <path d="M1318.28 -553.896C1591.62 -273.424 1585.84 175.53 1305.36 448.872C1024.89 722.213 575.937 716.432 302.596 435.96C29.2549 155.488 35.0357 -293.467 315.508 -566.808C595.98 -840.15 1044.94 -834.369 1318.28 -553.896Z" fill="url(#paint0_radial_1_27129)" />
          </g>
          <defs>
            <filter id="filter0_f_1_27129" x="-503.518" y="-1372.92" width="2627.91" height="2627.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="302.415" result="effect1_foregroundBlur_1_27129" />
            </filter>
            <radialGradient id="paint0_radial_1_27129" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(792.179 -78.6694) rotate(45.7377) scale(757.944 704.321)">
              <stop offset="0.303662" stopColor="#5BEC71" />
              <stop offset="0.870122" stopColor="#0F72D7" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* ── Shared Grid ── */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "120px 120px", backgroundPosition: "center top" }} />

      {/* ══════════════════════════════════════════════
          HERO — DESKTOP ONLY (lg+)
      ══════════════════════════════════════════════ */}
      <div className="relative w-full h-screen items-center justify-center hidden lg:flex">
        <div className="relative w-[1485px] h-[600px] flex items-center justify-between scale-[0.65] xl:scale-[0.8] min-[1440px]:scale-[0.9] 2xl:scale-100 origin-center z-10">
          
          {/* Left Text Content */}
          <div className="flex-shrink-0 flex flex-col justify-center w-[650px] h-[411px] pl-4">
            <div className="inline-flex items-center justify-center px-3.5 py-2 border border-white/20 rounded-full bg-transparent mb-6 text-[13.5px] font-medium text-white/70 tracking-wide w-max">
              SEO Workspace
            </div>
            <h1 className="text-[55px] md:text-[52px] font-medium leading-[1.15] text-white mb-6">
              Run SEO with AI across <br />your
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#0E78E9]"> entire system</span>
            </h1>
            <p className="text-[13.5px] font-light text-white/70 leading-[1.7] max-w-[480px] mb-8">
              AI connects SEO to content, planning, and execution—so your workflows drive growth automatically.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 rounded-lg text-[13px] font-medium text-white/90 bg-[#1e2e46] hover:bg-[#2a4060] cursor-pointer transition-all border border-white/5 shadow-sm">
                Book Demo
              </button>
              <button className="flex items-center cursor-pointer gap-2 px-8 py-3 rounded-lg text-[13px] font-semibold text-[#020a16] bg-white hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                View Pricing
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>

          {/* Right Floating Elements (SEO Workspace UI) */}
          <div className="relative flex-shrink-0 w-[796px] h-[497px]">
            
            {/* 1. Track Search Visibility Pill */}
            <div className="absolute flex items-center gap-2 px-4 pr-20  py-2.5 rounded-full border border-white/10 bg-[#0c182e]/10 backdrop-blur-md text-[13px] text-white/80 z-20 shadow-[0_10px_30px_rgba(0,0,0,0.4)]" style={{ top: "0px", left: "260px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Track search visibility
            </div>

            {/* 2. Business Box (Dashed) */}
            <div className="absolute flex flex-col items-center justify-center gap-1.5 rounded-[12px] text-[11px] text-white/80 cursor-pointer hover:bg-[#0c182e]/15 transition-all z-20" style={{ width: "80px", height: "80px", top: "50px", left: "85px", backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='white' stroke-width='1.5' stroke-dasharray='6%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
               Business
            </div>

            {/* 3. Main SEO Overview Card */}
            <div className="absolute rounded-[20px] p-7 backdrop-blur-3xl z-10" 
                 style={{ 
                   width: "450px", 
                   height: "350px", 
                   top: "60px", 
                   left: "190px", 
                   background: "radial-gradient(circle at 0% 0%, rgba(91, 236, 113, 0.2) 0%, transparent 40%), linear-gradient(150deg, rgba(91, 236, 113, 0.1), rgba(15, 114, 215, 0.1)), linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)), rgba(0, 0, 0, 0.16)", 
                   border: "1px solid rgba(255, 255, 255, 0.1)",
                   boxShadow: "0 30px 60px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1)" 
                 }}>
              <h3 className="text-[22px] text-white pt-2 font-medium mb-6">SEO Overview</h3>
              
              <div className="pt-8 space-y-10">
                {/* Bar 1 */}
                <div>
                  <div className="flex justify-between text-[11px] text-white/70 mb-1.5">
                    <span>Total Keywords</span>
                    <span>33</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-[6px]">
                    <div className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[10px] rounded-full" style={{ width: "33%" }}></div>
                  </div>
                </div>
                {/* Bar 2 */}
                <div>
                  <div className="flex justify-between text-[11px] text-white/70 mb-1.5">
                    <span>Total Backlinks</span>
                    <span>56</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-[6px]">
                    <div className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[10px] rounded-full" style={{ width: "56%" }}></div>
                  </div>
                </div>
                {/* Bar 3 */}
                <div>
                  <div className="flex justify-between text-[11px] text-white/70 mb-1.5">
                    <span>Organic Traffic</span>
                    <span>44</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-[6px]">
                    <div className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[10px] rounded-full" style={{ width: "44%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Company Health Score */}
            <div className="absolute rounded-[8px] bg-[#FFF5EE] p-2 pl-4 shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-30" style={{ width: "180px", top: "45px", left: "560px" }}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded bg-orange-400 flex items-center justify-center">
                  {/* <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> */}
                  <Image
                    src={healthIcon}
                    alt="healthIcon"
                    width={10}
                    height={10}
                  />
                </div>
                
              </div>
              <div className="text-[10px] text-black/60 font-medium">Company Health Score</div>
              <div className="text-[24px] font-semibold text-black">88%</div>
            </div>

            {/* 5. 86% Search Click Circle */}
            <div className="absolute rounded-[8px] bg-[#FFF5EE] flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-30" style={{ width: "106px", height: "120px", top: "340px", left: "100px" }}>
            <div className="relative flex items-center justify-center w-[88px] h-[88px]">
              <svg className="w-full h-full transform" viewBox="0 0 36 36">
                <defs>
                  <linearGradient id="pinkGradient" x1="60%" y1="0%" x2="100%" y2="100%">
                    <stop offset="40%" stopColor="#FFA9CF" />
                    <stop offset="100%" stopColor="#C62943" />
                  </linearGradient>
                </defs>
                <path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="url(#pinkGradient)" strokeWidth="3.5" />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-[16px] font-bold text-black leading-none">86%</span>
                <span className="text-[6px] text-black/50 mt-1">Search Clicks</span>
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
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#00A3FF]">your entire system</span>
        </h1>
        <p className="text-[13px] font-light text-white/60 leading-[1.7] mb-7 max-w-[300px]">
          AI connects SEO to content, planning, and execution—so your workflows drive growth automatically.
        </p>
        <div className="flex items-center gap-3 mb-10 flex-wrap justify-center">
          <button className="px-5 py-2.5 rounded-lg text-[12px] font-medium text-white/90 bg-[#1e2e46] border border-white/5">Book Demo</button>
          <button className="flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-[12px] font-semibold text-[#020a16] bg-white">
            View Pricing
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        {/* Mobile Preview Cards */}
        <div className="w-full max-w-[340px] relative">
          <div className="rounded-[18px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-left backdrop-blur-3xl"
               style={{ 
                 background: "linear-gradient(135deg, rgba(91, 236, 113, 0.1), rgba(15, 114, 215, 0.1)), rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.16), radial-gradient(circle at 0% 0%, rgba(91, 236, 113, 0.15) 0%, transparent 70%)", 
                 border: "1px solid rgba(255, 255, 255, 0.1)"
               }}>
            <h3 className="text-[15px] text-white font-medium mb-4">SEO Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] text-white/70 mb-1.5"><span>Total Keywords</span><span>33</span></div>
                <div className="w-full bg-white/10 rounded-full h-[5px]"><div className="bg-gradient-to-r from-[#0F72D7] to-[#3ab4aa] h-[5px] rounded-full" style={{ width: "33%" }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-white/70 mb-1.5"><span>Total Backlinks</span><span>56</span></div>
                <div className="w-full bg-white/10 rounded-full h-[5px]"><div className="bg-gradient-to-r from-[#0F72D7] to-[#0F72D7] h-[5px] rounded-full" style={{ width: "56%" }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-white/70 mb-1.5"><span>Organic Traffic</span><span>44</span></div>
                <div className="w-full bg-white/10 rounded-full h-[5px]"><div className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[5px] rounded-full" style={{ width: "44%" }}></div></div>
              </div>
            </div>
          </div>
          {/* Floating Mobile Items */}
          <div className="absolute -bottom-6 -left-2 rounded-[12px] bg-[#FFF5EE] flex flex-col items-center justify-center shadow-2xl w-[80px] h-[80px]">
            <div className="relative flex items-center justify-center w-[50px] h-[50px]">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36"><path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" /><path className="text-pink-500" strokeDasharray="86, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" /></svg>
              <div className="absolute flex flex-col items-center justify-center"><span className="text-[12px] font-bold text-black">86%</span></div>
            </div>
          </div>
          <div className="absolute -top-4 -right-2 rounded-[10px] bg-[#FFF5EE] p-3 shadow-2xl w-[120px]">
             <div className="flex items-center gap-1.5 mb-1">
                <div className="w-4 h-4 rounded bg-orange-400 flex items-center justify-center"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                <span className="text-[8px] text-black/60 font-medium">Health Score</span>
              </div>
              <div className="text-[18px] font-semibold text-black">88%</div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 2 — TEXT BLOCK
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 py-10 lg:py-16 px-5 lg:px-6 max-w-[1300px] mx-auto text-center lg:-mt-10">
        <h2 className="text-[22px] sm:text-[26px] lg:text-[38px] font-medium leading-[1.35] text-white mb-5">
          SEO only works when it's <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] via-[#0F72D7] to-[#003F9D]">connected</span>
        </h2>
        <p className="text-[13px] lg:text-[14px] font-light text-white/60 leading-[1.8] max-w-[1100px] mx-auto">
          Search-driven execution works best when it stays connected to content production, campaign timelines, and operational priorities. Amplitive helps teams keep SEO work visible alongside the projects, assets, and workflows it depends on instead of managing it in a separate silo.
        </p>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 — FEATURE CARDS
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto py-4 lg:py-12 px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">

{/* ── CARD 1: Search Visibility Management ── */}
          <div className="relative rounded-[20px] border border-white/10 bg-[#0B1528]/60 backdrop-blur-md overflow-hidden p-6 lg:p-7 duration-300 ease-in-out transition-all hover:border-blue-950 flex flex-col h-[350px] lg:h-[400px]">
            <CardGlow id="c1" />
            <CardGrid />
            <div className="relative z-10 flex flex-col h-full">
              <CardHeader icon={<Image
              src={seachPink} // Ensure seachPink is imported at the top of your file
              alt="searchPink icon"
              width={36}
              height={36}
              className="object-contain"
              />} color="bg-transparent" title="Search Visibility Management" />
              <p className="text-[12px] text-white/50 leading-relaxed mb-6">Keep SEO efforts organized inside the same system as the campaigns and content they influence.</p>
              
              <div className="relative flex-1 w-full flex items-center justify-center">
                
                {/* Search Bar Pill */}
                <div className="absolute top-[12%] left-[8%] md:left-[50%] md:top-10 md:right-[6%] bg-[#0c182e]/90 border border-white/10 rounded-full px-4 py-2 pr-8 flex items-center gap-2 text-[10px] text-white/60 shadow-lg z-20 transition-all">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                   Search SEO Campaign
                </div>

                {/* Campaign Card 1 */}
                <div className="absolute top-[45%] -left-[2%] md:top-3 md:left-[10%] max-w-[180px] bg-white rounded-[8px] p-3 shadow-xl z-10 scale-[0.8] md:scale-90 lg:scale-100 origin-top-left md:origin-center transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] text-gray-800 leading-tight">Link Building<br/>Campaign 1<br/><span className="text-[8px] font-normal text-gray-400">Track prospects</span></div>
                    <span className="bg-green-100 text-green-600 text-[8px] px-2 py-0.5 rounded-full font-medium">Active</span>
                  </div>
                  <div className="w-full h-px bg-gray-100 my-2" />
                  <div className="text-[7px] text-gray-400 flex justify-between mb-1"><span>Progress</span><span>4/10 links</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-[5px] mb-2"><div className="bg-gradient-to-l from-[#FFA9CF] to-[#C62943] h-[5px] rounded-full w-[40%]"></div></div>
                  <div className="text-[7px] text-gray-300">Created 4/14/2023</div>
                </div>

                {/* Campaign Card 2 */}
                <div className="absolute top-[35%] -right-[5%] md:top-[45%] md:right-[15%] max-w-[200px] bg-white rounded-[8px] p-3 shadow-2xl z-30 scale-[0.85] md:scale-95 lg:scale-110 origin-bottom-right md:origin-center transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] text-gray-800 leading-tight">Link Building<br/>Campaign 2<br/><span className="text-[8px] font-normal text-gray-400">Track prospects</span></div>
                    <span className="bg-green-100 text-green-600 text-[8px] px-2 py-0.5 rounded-full font-medium">Active</span>
                  </div>
                  <div className="w-full h-px bg-gray-100 my-2"/>
                  <div className="text-[7px] text-gray-400 flex justify-between mb-1"><span>Progress</span><span>8/10 links</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-[3px] mb-2"><div className="bg-[#0F72D7] h-[3px] rounded-full w-[80%]"></div></div>
                  <div className="text-[7px] text-gray-300">Created 4/16/2023</div>
                </div>

                {/* Create New Box */}
                <div className="absolute bottom-[2%] left-[10%] md:bottom-[5%] md:left-[16.5%] w-[70px] h-[70px] rounded-[10px] border border-dashed border-white/30 bg-white/5 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-white/10 transition-all z-10 md:z-20 scale-[0.8] md:scale-100 origin-bottom-left md:origin-center">
                  <span className="text-white text-[20px] leading-none">+</span>
                  <span className="text-[9px] text-white/70 text-center leading-tight">Create<br/>New</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* ── CARD 2: Task Alignment ── */}
          <div className="relative rounded-[20px] border border-white/10 bg-[#0B1528]/60 backdrop-blur-md overflow-hidden hover:border-blue-950 transition-all duration-300 ease-in-out p-6 lg:p-7 flex flex-col h-[350px] lg:h-[400px]">
            <CardGlow id="c2" />
            <CardGrid />
            <div className="relative z-10 flex flex-col h-full">
              <CardHeader icon={<Image
              src={taskIcon} // Ensure seachPink is imported at the top of your file
              alt="searchPink icon"
              width={36}
              height={36}
              className="object-contain"
              />} color="bg-transparent" title="Task Alignment" />
              <p className="text-[12px] text-white/50 leading-relaxed mb-6">Tie search priorities to the production and implementation work required to move them forward.</p>
              
              <div className="mt-5 space-y-4 lg:space-y-5 px-2">
                <div>
                  <div className="flex justify-between text-[11px] text-white/80 mb-1"><span>Total Keywords</span><span>33</span></div>
                  <div className="w-full bg-white/5 rounded-full h-[5px]"><div className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[6px] rounded-full" style={{ width: "33%" }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-white/80 mb-1"><span>Total Backlinks</span><span>56</span></div>
                  <div className="w-full bg-white/5 rounded-full h-[5px]"><div className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[6px] rounded-full" style={{ width: "56%" }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-white/80 mb-1"><span>Organic Traffic</span><span>72</span></div>
                  <div className="w-full bg-white/5 rounded-full h-[5px]"><div className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[6px] rounded-full" style={{ width: "72%" }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-white/80 mb-2"><span>Health Score</span><span>79</span></div>
                  <div className="w-full bg-white/5 rounded-full h-[5px]"><div className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[6px] rounded-full" style={{ width: "79%" }}></div></div>
                </div>
              </div>
            </div>
          </div>

{/* ── CARD 3: Project Coordination ── */}
          <div className="relative rounded-[20px] border border-white/10 bg-[#0B1528]/60 backdrop-blur-md overflow-hidden p-6 lg:p-7 hover:border-blue-950 duration-300 ease-in-out transition-all flex flex-col h-[350px] lg:h-[400px]">
            <CardGlow id="c3" />
            <CardGrid />
            <div className="relative z-10 flex flex-col h-full">
              <CardHeader icon={<Image
              src={projectIcon} 
              alt="Project icon"
              width={36}
              height={36}
              className="object-contain"
              />} color="bg-transparent" title="Project Coordination" />
              <p className="text-[12px] text-white/50 leading-relaxed mb-6">Manage SEO initiatives with clearer ownership, timelines, and workflow structure.</p>
              
              <div className="relative flex-1 w-full flex flex-col items-center">
                {/* Nav Pills - Mobile scrollable, scaled font */}
                <div className="flex items-center gap-0.4 md:gap-4 text-[7.5px] md:text-[10px] text-white/60 bg-white/5 rounded-full px-0.5 py-0.5 border border-white/10 mb-8 mt-2 w-max max-w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
                  <span className="bg-white text-black px-3 md:px-5 py-1 rounded-full font-medium whitespace-nowrap">All</span>
                  <span className="px-2 md:px-0 whitespace-nowrap cursor-pointer hover:text-white transition-colors">Backlinks</span>
                  <span className="px-2 md:px-0 whitespace-nowrap cursor-pointer hover:text-white transition-colors">Keywords</span>
                  <span className="px-2 md:px-0 whitespace-nowrap cursor-pointer hover:text-white transition-colors">Content</span>
                  <span className="px-2 md:px-0 whitespace-nowrap cursor-pointer hover:text-white transition-colors">On-Page</span>
                </div>

                {/* Task Cards */}
                <div className="relative w-full h-full">
                  {/* Card 1 */}
                  <div className="absolute top-[-22%] -left-[8%] md:top-[-2%] md:left-[2%] max-w-[240px] bg-white rounded-[10px] p-4 shadow-[0_10px_30px_rgba(255,255,255,0.1)] z-10 flex items-center gap-3 scale-[0.75] md:scale-100 origin-top-left md:origin-center transition-all">
                    <Image
                    src={guestIcon}
                    alt="guest"
                    width={30}
                    height={30}
                    className="relative top-[-14px] shrink-0"
                    />
                    <div className="flex-1">
                       <h4 className="text-[9px] text-black leading-tight font-semibold">Guest Post Opportunities</h4>
                       <p className="text-[6px] text-gray-500 leading-tight mt-1">Identify blogs in directly related industries where you can potentially post a guest article to improve domain authority.</p>
                       <div className="flex gap-2.5 m-2 relative right-[45px] top-[10px]" >
                         <span className="bg-purple-100 text-purple-600 text-[6px] px-1.5 py-0.5 rounded font-medium">Backlinks</span>
                         <span className="bg-orange-100 text-orange-600 text-[6px] px-1.5 py-0.5 rounded font-medium">High Impact</span>
                       </div> 
                    </div>
                    <button className="bg-black cursor-pointer hover:bg-gray-900 text-white text-[8px] px-2 py-1 rounded relative bottom-[15px] shrink-0 font-medium">Start</button>
                  </div>  

                  {/* Card 2 */}
                  <div className="absolute top-[37%] -right-[8%] md:top-[45%] md:right-[-2%] max-w-[240px] bg-white rounded-[10px] p-3 shadow-2xl z-20 flex items-center gap-3 scale-[0.80] md:scale-100 origin-bottom-right md:origin-center transition-all">
                    <div className="w-8 h-8 rounded bg-transparent flex items-center justify-center shrink-0">
                      <Image
                      src={guestKey}
                      alt="guestKey"
                      width={30}
                      height={30}
                      className="relative bottom-[10px]"
                      /> 
                    </div>
                    <div className="flex-1">
                       <h4 className="text-[9px] text-black leading-tight font-semibold">Guest Post Opportunities</h4>
                       <p className="text-[6px] text-gray-500 leading-tight mt-1">Identify blogs in directly related industries where you can potentially post a guest article to improve domain authority.</p>
                       <div className="flex gap-2.5 mt-2 relative right-[40px]">
                         <span className="bg-blue-100 text-blue-600 text-[6px] px-1.5 py-0.5 rounded font-medium">Keyword</span>
                         <span className="bg-green-100 text-green-600 text-[6px] px-1.5 py-0.5 rounded font-medium">Low Impact</span>
                       </div>
                    </div>
                    <div className="bg-black text-white text-[8px] px-2 py-1 rounded relative bottom-[10px] shrink-0 font-medium cursor-pointer">Start</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 4: Optimization Support ── */}
          <div className="relative rounded-[20px] border border-white/10 bg-[#0B1528]/60 backdrop-blur-md overflow-hidden p-6 lg:p-7 hover:border-blue-950 transition-all duration-300 shadow-md ease-in-out flex flex-col h-[350px] lg:h-[400px]">
            <CardGlow id="c4" />
            <CardGrid />
            <div className="relative z-10 flex flex-col h-full">
              <CardHeader 
                icon={
                  <Image
                    src={optimizationIcon} // Ensure optimizationIcon is imported at the top of your file
                    alt="Optimization icon"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                } 
                color="bg-transparent" 
                title="Optimization Support" 
              />
              <p className="text-[12px] text-white/50 leading-relaxed mb-6">
                Keep search-driven work closer to reporting, iteration, and broader performance operations.
              </p>
              
              {/* Chart Area */}
              <div className="relative flex-1 w-full mt-2">
                
                {/* Pill Navbar */}
                <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 flex items-center gap-4 text-[8px] md:gap-6 md:text-[10px] font-medium text-white/60 bg-[#0c182e]/90 border border-white/10 rounded-full px-4 md:px-6 py-1 md:py-2 shadow-xl z-20 backdrop-blur-sm">
                  <span className="hover:text-white cursor-pointer transition-colors">Target</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Optimize</span> 
                  <span className="hover:text-white cursor-pointer transition-colors">Grow</span>
                </div>

                {/* Chart Content Container */}
                <div className="absolute inset-0 top-[-18px]">
                  
                  {/* Gradient Bars */}
                  <div className="absolute bottom-0 left-[10%] w-[9%] h-[60%] bg-gradient-to-t from-transparent via-white/[0.03] to-white/10"></div>
                  <div className="absolute bottom-0 left-[28%] w-[9%] h-[65%] bg-gradient-to-t from-transparent via-white/[0.03] to-white/10 "></div>
                  <div className="absolute bottom-0 left-[46%] w-[9%] h-[80%] bg-gradient-to-t from-transparent via-white/[0.03] to-white/10 "></div>
                  <div className="absolute bottom-0 left-[64%] w-[9%] h-[55%] bg-gradient-to-t from-transparent via-white/[0.03] to-white/10 "></div>
                  <div className="absolute bottom-0 left-[82%] w-[9%] h-[85%] bg-gradient-to-t from-transparent via-white/[0.03] to-white/10 "></div>

                  {/* Line Graph SVG */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                        <defs>
                            <linearGradient id="optGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#5BEC71" />
                              <stop offset="50%" stopColor="#3ab4aa" />
                              <stop offset="100%" stopColor="#00A3FF" />
                            </linearGradient>
                        </defs>
                        
                        {/* Main Line connecting the dots */}
                        {/* Coordinates (x,y): Note that SVG Y goes top-to-bottom, so 30% height = 70Y */}
                        <path 
                          d="M 13,53 L 33,42 L 50.5,25 L 68.5,52 L 87,20 L 96,4" 
                          fill="none" 
                          stroke="url(#optGrad)" 
                          strokeWidth="2.5" 
                          vectorEffect="non-scaling-stroke" 
                        />
                    </svg>
                  </svg>

                  {/* HTML Data Nodes (Used HTML divs instead of SVG circles so they stay perfectly round regardless of screen width) */}
                  
                  {/* Node 1 */}
                  <div className="absolute w-[14px] h-[14px] bg-[#5BEC71]/20 rounded-full flex items-center justify-center shadow-lg" style={{ left: '13.5%', bottom: '47%', transform: 'translate(-50%, 50%)' }}>
                    <div className="w-[6px] h-[6px] bg-[#5BEC71] rounded-full"></div>
                  </div>
                  {/* Node 2 */}
                  <div className="absolute w-[14px] h-[14px] bg-[#5BEC71]/20 rounded-full flex items-center justify-center shadow-lg" style={{ left: '33%', bottom: '58%', transform: 'translate(-50%, 50%)' }}>
                    <div className="w-[6px] h-[6px] bg-[#5BEC71] rounded-full"></div>
                  </div>
                  {/* Node 3 */}
                  <div className="absolute w-[14px] h-[14px] bg-[#3ab4aa]/20 rounded-full flex items-center justify-center shadow-lg" style={{ left: '50.5%', bottom: '75%', transform: 'translate(-50%, 50%)' }}>
                    <div className="w-[6px] h-[6px] bg-[#3ab4aa] rounded-full"></div>
                  </div>
                  {/* Node 4 */}
                  <div className="absolute w-[14px] h-[14px] bg-[#3ab4aa]/20 rounded-full flex items-center justify-center shadow-lg" style={{ left: '68.5%', bottom: '47.5%', transform: 'translate(-50%, 50%)' }}>
                    <div className="w-[6px] h-[6px] bg-[#3ab4aa] rounded-full"></div>
                  </div>
                  {/* Node 5 */}
                  <div className="absolute w-[14px] h-[14px] bg-[#00A3FF]/20 rounded-full flex items-center justify-center shadow-lg" style={{ left: '86.5%', bottom: '79%', transform: 'translate(-50%, 50%)' }}>
                    <div className="w-[6px] h-[6px] bg-[#00A3FF] rounded-full"></div>
                  </div>

                  {/* Arrow Head at the end of the line */}
                  <div className="absolute text-[#00A3FF]" style={{ left: '95.5%', bottom: '94.5%', transform: 'translate(-50%, 50%)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="12 5 19 5 19 12" />
                    </svg>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ── Small reusable sub-components ── */

function CardGlow({ id }: { id: string }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 394 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
        <g opacity="0.2" filter={`url(#glow_${id})`}>
          <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill={`url(#grad_${id})`} />
        </g>
        <defs>
          <filter id={`glow_${id}`} x="0" y="-35.9474" width="817.895" height="817.895" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="74.9737" result={`blur_${id}`} />
          </filter>
          <radialGradient id={`grad_${id}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
            <stop stopColor="#5BEC71" />
            <stop offset="1" stopColor="#0F72D7" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function CardGrid() {
  return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="w-full h-full" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
    </div>
  );
}

function CardHeader({ icon, color, title }: { icon: React.ReactNode; color: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>{icon}</div>
      <h3 className="text-[16px] font-semibold text-white">{title}</h3>
    </div>
  );
}