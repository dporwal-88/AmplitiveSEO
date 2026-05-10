"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Montserrat_Alternates, Montserrat, Urbanist } from "next/font/google";
import {
  FileText,
  Settings,
  ImageIcon,
  Rocket,
} from "lucide-react";

import assest1 from "../public/asset1.svg";
import assest2 from "../public/asset2.svg";

const montserratAlt = Montserrat_Alternates({ subsets: ["latin"], weight: ["600", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const urbanist = Urbanist({ subsets: ["latin"], display: "swap", variable: "--font-urbanist" });

// ══════════════════════════════════════════════
// DATA CONFIGURATIONS
// ══════════════════════════════════════════════

const CARD1_STATS = [
  { 
    label: "DA: 0", 
    svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_123_1115)"><path d="M6.8206 12.5044C9.9597 12.5044 12.5044 9.95965 12.5044 6.82056C12.5044 3.68146 9.9597 1.13672 6.8206 1.13672C3.68151 1.13672 1.13676 3.68146 1.13676 6.82056C1.13676 9.95965 3.68151 12.5044 6.8206 12.5044Z" stroke="#7D7D7D" strokeWidth="1.13677" strokeLinecap="round" strokeLinejoin="round"/><path d="M1.13676 6.82056H12.5044" stroke="#7D7D7D" strokeWidth="1.13677" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.82061 1.13672C8.2423 2.69315 9.05024 4.71301 9.09414 6.82056C9.05024 8.92811 8.2423 10.948 6.82061 12.5044C5.39892 10.948 4.59098 8.92811 4.54707 6.82056C4.59098 4.71301 5.39892 2.69315 6.82061 1.13672Z" stroke="#7D7D7D" strokeWidth="1.13677" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_123_1115"><rect width="13.6412" height="13.6412" fill="white"/></clipPath></defs></svg> 
  },
  { 
    label: "Keywords: 43", 
    svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_123_1122)"><path d="M11.9351 1.13672L10.7983 2.27349M10.7983 2.27349L12.5035 3.97864L10.5141 5.96798L8.80898 4.26283M10.7983 2.27349L8.80898 4.26283M6.47293 6.59889C6.76641 6.88846 6.99971 7.23323 7.15939 7.61333C7.31908 7.99344 7.402 8.40138 7.40339 8.81367C7.40477 9.22596 7.32458 9.63445 7.16744 10.0156C7.0103 10.3968 6.77932 10.7431 6.48779 11.0346C6.19625 11.3262 5.84993 11.5572 5.46876 11.7143C5.08759 11.8714 4.67911 11.9516 4.26682 11.9502C3.85453 11.9489 3.44659 11.8659 3.06648 11.7062C2.68637 11.5466 2.34161 11.3133 2.05204 11.0198C1.48259 10.4302 1.1675 9.64052 1.17462 8.82087C1.18174 8.00121 1.51051 7.21714 2.09012 6.63754C2.66972 6.05793 3.45379 5.72916 4.27345 5.72204C5.0931 5.71492 5.88277 6.03001 6.47236 6.59946L6.47293 6.59889ZM6.47293 6.59889L8.80898 4.26283" stroke="#7D7D7D" strokeWidth="1.13677" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_123_1122"><rect width="13.6412" height="13.6412" fill="white"/></clipPath></defs></svg> 
  },
  { 
    label: "Backlinks: 42", 
    svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_123_1118)"><path d="M5.11545 9.66248H3.97868C3.22496 9.66248 2.50211 9.36306 1.96914 8.8301C1.43618 8.29713 1.13676 7.57428 1.13676 6.82056C1.13676 6.06683 1.43618 5.34398 1.96914 4.81102C2.50211 4.27805 3.22496 3.97864 3.97868 3.97864H5.11545" stroke="#7D7D7D" strokeWidth="1.13677" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.52576 3.97864H9.66252C10.4162 3.97864 11.1391 4.27805 11.6721 4.81102C12.205 5.34398 12.5044 6.06683 12.5044 6.82056C12.5044 7.57428 12.205 8.29713 11.6721 8.8301C11.1391 9.36306 10.4162 9.66248 9.66252 9.66248H8.52576" stroke="#7D7D7D" strokeWidth="1.13677" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.54707 6.82056H9.09414" stroke="#7D7D7D" strokeWidth="1.13677" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_123_1118"><rect width="13.6412" height="13.6412" fill="white"/></clipPath></defs></svg> 
  },
  { 
    label: "Health: 94%", 
    svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5045 6.82066H10.2309L8.52577 11.9361L5.11547 1.7052L3.41032 6.82066H1.13678" stroke="#7D7D7D" strokeWidth="1.13677" strokeLinecap="round" strokeLinejoin="round"/></svg> 
  }
];

const AD_COPIES = [
  {
    id: "1202235684", title: "New Traffic Ad Copy 1", spend: "$376.22", img: assest1,
    wrapperClass: "relative translate-x-2 z-10 scale-[1.04] w-[90%] md:w-[99%] mx-auto md:ml-0 p-[1.5px] rounded-[10px]",
    innerClass: "bg-[#FFFFFF] px-3 py-2.5 shadow-[0_0_0_5px_rgba(255,255,255,0.08),0_5px_10px_rgba(0,0,0,0.2)] rounded-lg border-[#EBEBEB] flex items-center gap-2",
  },
  {
    id: "1202235685", title: "New Traffic Ad Copy 2", spend: "$224", img: assest2,
    wrapperClass: "relative z-10 w-[100%] shadow-[0_0_0_5px_rgba(255,255,255,0.08),0_5px_10px_rgba(0,0,0,0.2)] md:w-[100%] scale-[1.1] mx-auto md:ml-0 p-[1.5px] rounded-[10px]",
    innerClass: "bg-[#FFFFFF] px-3 py-2.5 shadow-sm rounded-lg border-[#EBEBEB] border-[0.5px] flex items-center gap-2",
  },
];

const CAMPAIGN_STEPS_DATA = [
  { label: "Campaign Details", top: 30, lineWidth: 80, icon: <FileText size={14} className="text-white" />, iconGrad: "linear-gradient(135deg, #FF7EB3 0%, #FF758C 100%)" },
  { label: "Ad Setup", top: 108, lineWidth: 160, icon: <Settings size={14} className="text-white" />, iconGrad: "linear-gradient(135deg, #8AD4FF 0%, #419EFF 100%)" },
  { label: "Ad Creative", top: 186, lineWidth: 240, icon: <ImageIcon size={14} className="text-white" />, iconGrad: "linear-gradient(135deg, #FFB382 0%, #F07537 100%)" },
  { label: "Review & Launch", top: 264, lineWidth: 320, icon: <Rocket size={14} className="text-white" />, iconGrad: "linear-gradient(135deg, #70F3B7 0%, #39D0D3 100%)" },
];

const ORBIT_CIRCLES = [330.383, 235, 150];

// ══════════════════════════════════════════════
// MAIN EXPORT COMPONENT
// ══════════════════════════════════════════════

export default function Cards() {
  return (
    <div className={`bg-[#01091E] overflow-hidden pb-20 ${montserrat.className}`}>
      
      {/* SECTION 2 — TEXT BLOCK (Ads Header) */}
      <div className="relative z-10 py-12 pt-24 md:pt-0 md:py-16 lg:py-22 px-5 lg:px-6 max-w-[1280px] mx-auto text-center">
        <h2 className="text-[22px] sm:text-[30px] lg:text-[36px] font-medium leading-[1.3] text-[#FFFFFF] mb-6">
          Paid campaigns become harder to manage when briefs, assets,{" "}
          <br className="hidden md:block" />
          approvals, and follow-up are spread{" "}
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] via-[#0F72D7] to-[#003F9D]">
            across separate tools.
          </span>
        </h2>
        <p className="text-[13.4px] lg:text-[14px] text-[#FFFFFF] leading-[1.6] max-w-[1280px] mx-auto">
          Ads do not fail because teams lack media buying access. They fail
          because the surrounding operation is disorganized. Amplitive keeps
          campaign planning, asset readiness, execution tasks, and downstream
          lead visibility more connected so paid work is easier to coordinate.
        </p>
      </div>

      {/* SECTION 3 — FEATURE CARDS */}
      <div className="relative z-10 max-w-[1400px] mx-auto py-4 lg:py-12 px-5 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* ── CARD 1: Campaign Organization ── */}
          <FeatureCard className="h-[220px] sm:h-[380px] md:h-[350px] lg:h-[380px]">
            <CardBackgrounds index={1} />
            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-gradient-to-bl from-[#FFA9CF] to-[#C62943] rounded-[4px] scale-[0.85] md:scale-[1] flex items-center justify-center shadow-[0_0_15px_rgba(255,107,139,0.3)]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.33203 5H17.4987" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.33203 10H17.4987" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.33203 15H17.4987" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.5 4.99996L3.33333 5.83329L5 4.16663" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.5 9.99996L3.33333 10.8333L5 9.16663" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.5 15L3.33333 15.8333L5 14.1666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                }
                title="Campaign Organization"
              />
              <p className="text-[10px] md:text-[10.2px] text-[#FFFFFF] leading-[1.4] mb-8 md:mb-6 md:mt-1">
                Keep ad initiatives visible inside the same project and planning layer as the rest of marketing.
              </p>

              <div className="relative flex-1 w-full scale-[0.85] flex items-center justify-center pointer-events-none">
                <div className="absolute w-[500px] flex items-center px-2 scale-[0.48] sm:scale-[0.75] md:scale-[0.8] lg:scale-[0.95] xl:scale-100 origin-center -translate-y-2">
                  
                  {/* Left Box */}
                  <div className="relative left-[6px] md:left-0 bottom-[-20px] z-10 scale-[1.08] w-[42%] bg-[#FFFFFF29] p-[4.09px] rounded-[9.55px]">
                    <div className="bg-white p-3 shadow-2xl rounded-[9.55px] border-[#EBEBEB] border-[0.55px]">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-gradient-to-bl from-[#FF8853] to-[#FF5001] rounded flex items-center justify-center text-white text-[10px] font-bold">SD</div>
                        <div>
                          <h4 className="text-slate-900 font-medium text-[10px] leading-tight">Stremeline Digital</h4>
                          <p className="text-slate-400 text-[8px]">stremelinedigital.com</p>
                        </div>
                      </div>
                      <div className="flex gap-1.5 mb-3">
                        <span className="bg-[#F0F2FF] text-[#8C48E6] text-[8px] px-2 py-0.5 rounded-full font-bold">Brand</span>
                        <span className="bg-[#D2FFD9] text-[#3AC750] text-[8px] px-2 py-0.5 rounded-full font-bold">Active</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[8px] text-slate-500">
                        {CARD1_STATS.map((stat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            {stat.svg}
                            <span className="font-medium">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arcs */}
                  <div className="relative z-0 flex-1 h-[104px] md:h-[115px] flex flex-col pointer-events-none -mx-1 md:-mx-1.5">
                    <div className="relative scale-[0.8] w-full h-1/2">
                      <svg width="48" height="95" viewBox="0 0 48 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 93.9389C16.485 93.9389 29.8487 80.5752 29.8487 64.0902V18.4724C29.8487 8.51923 37.9174 0.450562 47.8706 0.450562" stroke="url(#paint0_linear_123_1165)" strokeWidth="0.901093" />
                        <defs>
                          <linearGradient id="paint0_linear_123_1165" x1="3.59029" y1="106.794" x2="84.4191" y2="57.8802" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5BEC71" />
                            <stop offset="0.902778" stopColor="#0F72D7" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <JointDot className="top-0 right-[53px] md:right-[62px] translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="relative top-[17.5px] scale-[0.8] w-full h-1/2">
                      <svg width="48" height="95" viewBox="0 0 48 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.450595C16.485 0.450595 29.8487 13.8143 29.8487 30.2993V75.9171C29.8487 85.8703 37.9174 93.939 47.8706 93.939" stroke="url(#paint0_linear_123_1166)" strokeWidth="0.901093" />
                        <defs>
                          <linearGradient id="paint0_linear_123_1166" x1="3.59029" y1="-12.4041" x2="84.4191" y2="36.5093" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5BEC71" />
                            <stop offset="0.902778" stopColor="#0F72D7" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <JointDot className="bottom-[-42px] md:bottom-[-35px] right-[54px] md:right-[62px] translate-x-1/2 translate-y-1/2" />
                    </div>
                    <JointDot className="top-[78px] md:top-[82px] left-[16px] md:left-[12px] -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  {/* Right Boxes */}
                  <div className="relative right-[9%] md:right-[10%] bottom-[-20px] z-10 flex flex-col gap-6 md:gap-12 w-[38%] scale-[1.08] ">
                    {[1, 2].map((i) => (
                      <div key={i} className="bg-[#FFFFFF29] p-[3px] rounded-[9.55px]">
                        <div className="bg-white p-2.5 shadow-xl rounded-[9.55px] border-[#EBEBEB] border-[0.55px] flex flex-col justify-between min-h-[80px]">
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <h5 className="text-slate-900 font-medium text-[9px] leading-tight">Sales Campaign {i}</h5>
                              <p className="text-slate-400 text-[7px]">ID: 1202235684</p>
                            </div>
                            <span className={`text-[6px] px-1.5 py-0.5 rounded font-bold uppercase ${i === 1 ? "text-[#3AC750] bg-[#D2FFD9]" : "text-[#FF5001] bg-[#FFE5D9]"}`}>
                              {i === 1 ? "Active" : "Paused"}
                            </span>
                          </div>
                          <div className="flex justify-between text-[7px] text-slate-500 border-t border-slate-50 pt-1.5 mt-auto">
                            <div className="flex flex-col">
                              <span className="text-[6px] text-slate-300 uppercase font-semibold">Objective</span>
                              <span className="font-medium text-slate-600">Sales</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[6px] text-slate-300 uppercase font-semibold">Budget</span>
                              <span className="font-medium text-slate-600">$8.00/day</span>
                            </div>
                            <div className="flex flex-col text-right">
                              <span className="text-[6px] text-slate-300 uppercase font-semibold">Created</span>
                              <span className="font-medium text-slate-600">4/3/2026</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 2: Asset Readiness ── */}
          <FeatureCard className="h-[220px] sm:h-[350px] md:h-[350px] lg:h-[380px] relative overflow-hidden">
            <CardBackgrounds index={2} />
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-gradient-to-br from-[#CCFFD4] to-[#2EB0D7] rounded-[4px] scale-[0.85] md:scale-[1] flex items-center justify-center shadow-[0_0_15px_rgba(72,219,251,0.3)]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33203 18.3333H14.9987C15.4407 18.3333 15.8646 18.1577 16.1772 17.8451C16.4898 17.5326 16.6654 17.1087 16.6654 16.6666V6.24996L12.082 1.66663H4.9987C4.55667 1.66663 4.13275 1.84222 3.82019 2.15478C3.50763 2.46734 3.33203 2.89127 3.33203 3.33329V9.16663" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.668 1.66663V6.66663H16.668" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.33203 15L10.832 12.5L8.33203 10" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3.33203 15V14.1667C3.33203 13.7246 3.50763 13.3007 3.82019 12.9882C4.13275 12.6756 4.55667 12.5 4.9987 12.5H9.9987" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                }
                title="Asset Readiness"
              />
              <p className="text-[10.6px] md:text-[11px] text-[#FFFFFF] leading-[1.4] mb-6 md:mt-1">
                Connect paid campaigns to the assets, approvals, and files required to launch them.
              </p>

              <div className="relative flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[450px] flex flex-col gap-6 scale-[0.54] sm:scale-[0.8] md:scale-[0.85] lg:scale-[1] origin-center md:-translate-y-[10px]">
                  {AD_COPIES.map((ad, index) => (
                    <div key={index} className={ad.wrapperClass}>
                      <div className={ad.innerClass}>
                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-md overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                          <Image src={ad.img} alt={ad.title} width={44} height={44} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-slate-900 font-bold text-[8px] md:text-[11px] leading-tight">{ad.title}</h4>
                          <p className="text-slate-400 text-[8px] md:text-[10px] mt-0.5">ID: {ad.id}</p>
                        </div>
                        <div className="flex items-center gap-1.5 ml-auto shrink-0">
                          <div className="flex items-center gap-1 bg-[#F8F8FA] rounded-sm px-2 py-1">
                            <span className="text-[#7D7D7D] text-[8px] md:text-[9px] font-medium">Status:</span>
                            <span className="bg-[#D2FFD9] text-[#3AC750] text-[6px] md:text-[7px] font-semibold px-1 py-px rounded-sm">Active</span>
                          </div>
                          <div className="bg-[#F8F8FA] rounded-sm px-1">
                            <span className="text-[#7D7D7D] text-[8px] font-medium">Spend: </span>
                            <span className="text-[#7D7D7D] text-[8px] font-semibold">{ad.spend}</span>
                          </div>
                          <div className="bg-[#F8F8FA] rounded-sm px-1">
                            <span className="text-[#7D7D7D] text-[8px] font-medium">CTR: </span>
                            <span className="text-[#7D7D7D] text-[8px] font-semibold">2.80%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 3: Workflow Alignment ── */}
          <FeatureCard className="h-[220px] md:h-[350px] lg:h-[380px]">
            <CardBackgrounds index={3} />
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-gradient-to-br from-[#ACD5FF] to-[#003F9D] rounded-[4px] scale-[0.85] md:scale-[1] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_123_1256)">
                        <path d="M12.5 1.66663H7.5V6.66663H12.5V1.66663Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.3333 13.3334H13.3333V18.3334H18.3333V13.3334Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.66667 13.3334H1.66667V18.3334H6.66667V13.3334Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.16667 13.3333V10H15.8333V13.3333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 9.99996V6.66663" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs><clipPath id="clip0_123_1256"><rect width="20" height="20" fill="white" /></clipPath></defs>
                    </svg>
                  </div>
                }
                title="Workflow Alignment"
              />
              <p className="text-[11.4px] md:text-[11px] text-[#FFFFFF] leading-[1.4] mb-4 mt-1">
                Coordinate launch steps, deadlines, and stakeholders with fewer disconnected handoffs.
              </p>

              <div className="relative scale-[0.8] md:scale-[1] top-[5px] md:top-0 md:right-[140px] flex-1 w-full flex items-center justify-center pt-8 md:pt-4">
                <div className="absolute w-[400px] h-[350px] scale-[0.48] sm:scale-[0.7] md:scale-[0.8] lg:scale-[0.85] origin-left md:origin-center translate-y-[12px] md:translate-y-[50px] left-[5%] md:left-[22%]">
                  <CampaignSteps />
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 4: Shared Visibility ── */}
          <FeatureCard className="h-[220px] md:h-[350px] lg:h-[380px] relative overflow-hidden">
            <CardBackgrounds index={4} />

            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-gradient-to-br from-[#FFCC9C] to-[#FF8853] rounded-[4px] scale-[0.85] md:scale-[1] flex items-center justify-center shadow-[0_0_15px_rgba(255,159,67,0.3)]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3346 17.5V15.8333C13.3346 14.9493 12.9834 14.1014 12.3583 13.4763C11.7332 12.8512 10.8854 12.5 10.0013 12.5H5.0013C4.11725 12.5 3.2694 12.8512 2.64428 13.4763C2.01916 14.1014 1.66797 14.9493 1.66797 15.8333V17.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5013 9.16667C9.34225 9.16667 10.8346 7.67428 10.8346 5.83333C10.8346 3.99238 9.34225 2.5 7.5013 2.5C5.66035 2.5 4.16797 3.99238 4.16797 5.83333C4.16797 7.67428 5.66035 9.16667 7.5013 9.16667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18.332 17.5001V15.8334C18.3315 15.0948 18.0857 14.3774 17.6332 13.7937C17.1807 13.2099 16.5471 12.793 15.832 12.6084" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.332 2.6084C14.049 2.79198 14.6846 3.20898 15.1384 3.79366C15.5922 4.37833 15.8386 5.09742 15.8386 5.83757C15.8386 6.57771 15.5922 7.2968 15.1384 7.88147C14.6846 8.46615 14.049 8.88315 13.332 9.06673" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                }
                title="Shared Visibility"
              />
              <p className="text-[10.76px] md:text-[11px] text-[#FFFFFF] leading-[1.4] mb-6 md:mt-1">
                Give teams a clearer view of what is being prepared, launched, and managed.
              </p>

              <div className="absolute bottom-[-23px] md:bottom-[-30px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] scale-[0.48] sm:scale-[0.55] md:scale-[0.7] lg:scale-96 origin-bottom flex items-end justify-center pointer-events-none">
                <svg width="600" height="294" viewBox="0 0 600 294" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[-40px] md:bottom-0 ">
                  {ORBIT_CIRCLES.map((r, i) => (
                    <circle key={i} cx="300.5" cy="365" r={r} stroke="white" strokeOpacity="0.35" strokeWidth="1.23311" strokeDasharray="12.33 12.33" />
                  ))}
                </svg>

                <div className="absolute top-[100px] md:top-[50px] left-[70px]  md:left-[110px] bg-[#FFFFFF] rounded-full px-[9px] py-[5px] flex items-center gap-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.2),0_0_20px_rgba(255,255,255,0.2)] ">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1366 4.37842L5.10959 12.4054L1.46094 8.7568" stroke="#3AC750" strokeWidth="1.45946" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.0558 7.29724L10.5829 12.7702L9.48828 11.6756" stroke="#3AC750" strokeWidth="1.45946" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[#3E3E3E] text-[10.95px] ">Campaign Launched</span>
                </div>

                <div className="absolute right-[100px] top-[110px] md:top-[75px] md:right-[100px] bg-[#D2FFD9] rounded-full px-[16px] py-[2px] scale-[0.7] shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <span className="text-[#3AC750] text-[12.68px] font-semibold">Active</span>
                </div>

                <div className="absolute top-[180px] left-[400px] md:top-[132px] md:left-1/2 -translate-x-1/2 bg-[#FFFFFF] rounded-full scale-[0.95] px-[9px] py-[6px] flex items-center gap-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.2),0_0_20px_rgba(255,255,255,0.2)]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0244 2.21436H3.69103C2.87576 2.21436 2.21484 2.87527 2.21484 3.69055V14.0239C2.21484 14.8392 2.87576 15.5001 3.69103 15.5001H14.0244C14.8396 15.5001 15.5006 14.8392 15.5006 14.0239V3.69055C15.5006 2.87527 14.8396 2.21436 14.0244 2.21436Z" stroke="#DC486D" strokeWidth="1.47619" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.64416 8.11901C7.45944 8.11901 8.12035 7.45809 8.12035 6.64282C8.12035 5.82754 7.45944 5.16663 6.64416 5.16663C5.82888 5.16663 5.16797 5.82754 5.16797 6.64282C5.16797 7.45809 5.82888 8.11901 6.64416 8.11901Z" stroke="#DC486D" strokeWidth="1.47619" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.4972 11.0714L13.2194 8.79366C12.9426 8.51692 12.5672 8.36145 12.1758 8.36145C11.7843 8.36145 11.4089 8.51692 11.1321 8.79366L4.42578 15.5" stroke="#DC486D" strokeWidth="1.47619" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[#3E3E3E] text-[11.07px]">New Creative</span>
                </div>

                {/* ── Inner Arc Elements: RESTORED ICONS ── */}

                {/* Calendar Icon */}
                <div className="absolute bottom-[55px] left-[140px] md:bottom-[75px] md:left-[110px]">
                  {/* Subtle Ambient Glow */}
                  <div className="absolute inset-0 bg-[#3B82F6] blur-xl opacity-40 rounded-full scale-150"></div>
                  {/* Actual Icon */}
                  <div className="relative w-[38px] h-[38px] bg-gradient-to-br from-[#B6DAFF] to-[#63A2FF] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.668 1.33325V3.99992" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.33203 1.33325V3.99992" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 6.66663H14" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.33203 9.33325H5.3387" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 9.33337H8.00667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.668 9.33325H10.6746" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.33203 12H5.3387" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 12H8.00667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.668 12H10.6746" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Bell Icon */}
                <div className="absolute bottom-[10px] md:bottom-[20px] right-[215px] md:right-[175px]">
                  {/* Subtle Ambient Glow */}
                  <div className="absolute inset-0 bg-[#7E22CE] blur-xl opacity-40 rounded-full scale-150"></div>
                  {/* Actual Icon */}
                  <div className="relative w-[38px] h-[38px] bg-gradient-to-br from-[#B8A4FF] to-[#6B31B6] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(126,34,206,0.5)]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_425_36555)">
                        <path d="M12 5.33325C12 4.27239 11.5786 3.25497 10.8284 2.50482C10.0783 1.75468 9.06087 1.33325 8 1.33325C6.93913 1.33325 5.92172 1.75468 5.17157 2.50482C4.42143 3.25497 4 4.27239 4 5.33325C4 9.99992 2 11.3333 2 11.3333H14C14 11.3333 12 9.99992 12 5.33325Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.15432 14C9.03712 14.2021 8.86888 14.3698 8.66647 14.4864C8.46406 14.6029 8.23458 14.6643 8.00099 14.6643C7.7674 14.6643 7.53792 14.6029 7.33551 14.4864C7.13309 14.3698 6.96486 14.2021 6.84766 14" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1.33203 5.33325C1.33203 3.86659 1.7987 2.46659 2.66536 1.33325" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.6654 5.33325C14.6654 3.89078 14.1975 2.48723 13.332 1.33325" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_425_36555">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
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
// REUSABLE HELPER COMPONENTS
// ══════════════════════════════════════════════

export function FeatureCard({ children, className }: { children: React.ReactNode; className?: string; }) {
  return (
    <div className={`relative rounded-[20px] border border-white/10 bg-[#01091E] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_4px_4px_36px_rgba(117,186,255,0.12),inset_4px_4px_36px_rgba(91,236,113,0.05)] backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-300 ease-in-out p-6 lg:p-7 flex flex-col ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ icon, title }: { icon: React.ReactNode; title: string; }) {
  return (
    <div className="flex items-center gap-3 mb-2 z-10">
      <div className="w-9 h-9 scale-[0.95] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-[17px] leading-[1.2] font-medium text-white">{title}</h3>
    </div>
  );
}

const Dot = ({ top, left }: { top: string; left: string }) => {
  return (
    <div className="absolute rounded-full flex items-center justify-center transition-all duration-300 w-[12.49px] h-[12.49px] bg-[#FFFFFF14]" style={{ top, left }}>
      <div className="rounded-full w-[6.25px] h-[6.25px] bg-[#FFFFFF]" />
    </div>
  );
};

const JointDot = ({ className }: { className: string }) => (
  <div className={`absolute w-[14px] h-[14px] ${className}`}>
    <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.03613" cy="7.03613" r="7.03613" fill="white" fillOpacity="0.08" />
    </svg>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,1)]" />
  </div>
);

function CampaignSteps() {
  return (
    <div className={`absolute -top-7 left-0 md:left-20 z-30 w-full h-[350px] origin-top-left ${urbanist.className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-[30px] w-px h-[234px] bg-[linear-gradient(180deg,#5BEC71_-4.01%,#0F72D7_91.44%)]" />
        {CAMPAIGN_STEPS_DATA.map((step, i) => (
          <React.Fragment key={`branch-${i}`}>
            <div className="absolute h-px bg-[linear-gradient(90deg,#5BEC71_-4.01%,#0F72D7_91.44%)]" style={{ top: `${step.top}px`, left: "0px", width: `${step.lineWidth}px` }} />
            <Dot top={`${step.top - 6.25}px`} left={`${step.lineWidth - 6.25}px`} />
          </React.Fragment>
        ))}
      </div>
      {CAMPAIGN_STEPS_DATA.map((step) => (
        <div key={step.label} className="absolute flex items-center -translate-y-1/2" style={{ top: `${step.top}px`, left: `${step.lineWidth}px` }}>
          <div className="absolute flex items-center justify-center rounded-[9.16px] p-px bg-[#FFFFFF26] w-[162.67px] h-[58.06px]">
            <div className="rounded-[8.79px] bg-white backdrop-blur-md flex items-center gap-[11.3px] px-[11.3px] w-[153.5px] h-[48.9px]">
              <div className="shrink-0 flex items-center justify-center rounded-[3.77px] w-[26.3px] h-[26.3px]" style={{ background: step.iconGrad }}>
                {step.icon}
              </div>
              <span className="text-[11.46px] font-medium text-[#1F1F1F] leading-none whitespace-nowrap">
                {step.label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const CardGrid = ({ mobileSize, desktopSize, maskDir, mobileClass, desktopClass }: any) => (
  <>
    <div className={`absolute pointer-events-none opacity-60 block md:hidden ${mobileClass}`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 2px, transparent 1px)`,
        backgroundSize: `${mobileSize}px ${mobileSize}px`,
        backgroundPosition: "left bottom",
        maskImage: `radial-gradient(circle at ${maskDir}, black, transparent 80%)`,
        WebkitMaskImage: `radial-gradient(circle at ${maskDir}, black, transparent 80%)`,
      }}
    />
    <div className={`absolute pointer-events-none opacity-60 hidden md:block ${desktopClass}`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 4px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 4px, transparent 1px)`,
        backgroundSize: `${desktopSize}px ${desktopSize}px`,
        backgroundPosition: "left bottom",
        maskImage: `radial-gradient(circle at ${maskDir}, black, transparent 80%)`,
        WebkitMaskImage: `radial-gradient(circle at ${maskDir}, black, transparent 80%)`,
      }}
    />
  </>
);

const CardBackgrounds = ({ index }: { index: number }) => {
  if (index === 1) {
    return (
      <>
        <div className="absolute -bottom-20 -right-20 pointer-events-none z-0 opacity-40">
          <svg width="900" height="480" viewBox="0 0 332 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2" filter="url(#filter0_f_303_14675_c1)">
              <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_303_14675_c1)" />
            </g>
            <defs>
              <filter id="filter0_f_303_14675_c1" x="-9.15527e-05" y="-35.9474" width="817.895" height="817.895" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="74.9737" result="effect1_foregroundBlur_303_14675_c1" />
              </filter>
              <radialGradient id="paint0_radial_303_14675_c1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                <stop stopColor="#5BEC71" />
                <stop offset="1" stopColor="#0F72D7" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <CardGrid mobileSize={35} desktopSize={60} maskDir="100% 100%" mobileClass="bottom-0 -right-2 w-[80%] h-[80%]" desktopClass="bottom-0 -right-2 w-[80%] h-[80%]" />
      </>
    );
  }

  if (index === 2) {
    return (
      <>
        <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
          <svg width="800" height="430" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6" filter="url(#filter0_f_lead_glow_c2)">
              <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_lead_glow_c2)" />
            </g>
            <defs>
              <filter id="filter0_f_lead_glow_c2" x="-100" y="-100" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_lead_glow_c2" />
              </filter>
              <radialGradient id="paint0_radial_lead_glow_c2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                <stop stopColor="#5BEC71" />
                <stop offset="1" stopColor="#0F72D7" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <CardGrid mobileSize={40} desktopSize={60} maskDir="0% 100%" mobileClass="bottom-0 -left-8 w-[80%] h-[70%]" desktopClass="bottom-0 -left-8 w-[50%] h-[70%]" />
      </>
    );
  }

  if (index === 3) {
    return (
      <>
        <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
          <svg width="800" height="800" viewBox="0 0 800 800" className="h-[520px] md:h-[800px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6" filter="url(#filter0_f_123_client_c3)">
              <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_123_client_c3)" />
            </g>
            <defs>
              <filter id="filter0_f_123_client_c3" x="-100" y="-100" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_123_client_c3" />
              </filter>
              <radialGradient id="paint0_radial_123_client_c3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                <stop stopColor="#5BEC71" />
                <stop offset="1" stopColor="#0F72D7" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <CardGrid mobileSize={40} desktopSize={60} maskDir="0% 100%" mobileClass="bottom-0 -left-10 w-[80%] h-[74%]" desktopClass="bottom-0 -left-10 w-[50%] h-[84%]" />
      </>
    );
  }

  if (index === 4) {
    return (
      <>
        <div className="absolute -bottom-20 -right-20 pointer-events-none z-0 opacity-40">
          <svg width="900" height="480" viewBox="0 0 332 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2" filter="url(#filter0_f_303_14675_c4)">
              <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_303_14675_c4)" />
            </g>
            <defs>
              <filter id="filter0_f_303_14675_c4" x="-9.15527e-05" y="-35.9474" width="817.895" height="817.895" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="74.9737" result="effect1_foregroundBlur_303_14675_c4" />
              </filter>
              <radialGradient id="paint0_radial_303_14675_c4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                <stop stopColor="#5BEC71" />
                <stop offset="1" stopColor="#0F72D7" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <CardGrid mobileSize={40} desktopSize={60} maskDir="100% 100%" mobileClass="bottom-0 -right-2 w-[80%] h-[80%]" desktopClass="bottom-0 -right-2 w-[80%] h-[80%]" />
      </>
    );
  }

  return null;
};