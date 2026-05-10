"use client";

import { Montserrat_Alternates, Montserrat, Urbanist } from 'next/font/google';
import React, { ReactNode, useState } from "react";

interface GlassBadgeProps {
  top: string;
  left: string;
  width?: string;
  height?: string;
  children: ReactNode;
}

const GlassBadge: React.FC<GlassBadgeProps> = ({
  top,
  left,
  width = "93.99px",
  height = "33.74px",
  children,
}) => {
  return (
    <div
      className="absolute z-30 flex items-center justify-center font-['Montserrat']"
      style={{
        width,
        height,
        top,
        left,
        borderRadius: "124.94px",
        background: `
          linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.18) 0%,
            rgba(255, 255, 255, 0.06) 40%,
            rgba(255, 255, 255, 0.10) 100%
          )
        `,
        border: "1px solid rgba(255, 255, 255, 0.22)",
        boxShadow: `
          0 0 0 0.5px rgba(255, 255, 255, 0.08) inset,
          0 1px 0 0 rgba(255, 255, 255, 0.30) inset,
          0 -0.5px 0 0 rgba(0, 0, 0, 0.12) inset,
          0 4px 16px rgba(0, 0, 0, 0.18),
          0 1.5px 4px rgba(0, 0, 0, 0.12)
        `,
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        gap: "15.62px",
        padding: "9.37px 12.49px",
        isolation: "isolate",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "124.94px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.00) 45%)",
          pointerEvents: "none",
        }}
      />
      <span
        style={{
          width: "66px",
          height: "15px",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
          fontSize: "12px",
          color: "rgba(255, 255, 255, 0.92)",
          lineHeight: "100%",
          textAlign: "center",
          letterSpacing: "0.01em",
          textShadow: "0 1px 2px rgba(0,0,0,0.25)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </span>
    </div>
  );
};

const Dot = ({ top, left }: { top: string; left: string }) => {
  return (
    <div
      className="absolute rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        width: "12.49px",
        height: "12.49px",
        top: top,
        left: left,
        background: "#FFFFFF14", 
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: "6.25px",
          height: "6.25px",
          background: "#FFFFFF", 
        }}
      />
    </div>
  );
};

// Configure the fonts
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

// ─── Data ────────────────────────────────────────────────────────────────────

const TABS = ["Image", "Video", "Scripts", "Text"] as const;

const CAMPAIGN_STEPS = [
  {
    label: "Campaign Details",
    top: 30,
    lineWidth: 15.5,
    iconGrad: "linear-gradient(226.05deg, #FFEAF3 0%, #DC486D 101.91%)",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M8.5 1H3.5C3.23 1 2.96 1.11 2.76 1.3C2.55 1.5 2.44 1.77 2.44 2.04V11.96C2.44 12.23 2.55 12.5 2.76 12.7C2.96 12.89 3.23 13 3.5 13H10.5C10.77 13 11.04 12.89 11.24 12.7C11.44 12.5 11.56 12.23 11.56 11.96V4L8.5 1Z" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 1V4H11.56" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.25 7.75H4.75" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.25 10H4.75" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.875 5.5H4.75" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Ad Setup",
    top: 108,
    lineWidth: 31,
    iconGrad: "linear-gradient(214.51deg, #B6DAFF 7.64%, #63A2FF 94.91%)",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="2" stroke="white" strokeWidth="1.1" />
        <path d="M11.2 8.6a1 1 0 0 0 .2 1.1l.03.04a1.2 1.2 0 0 1-1.7 1.7l-.04-.04a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.92V12a1.2 1.2 0 0 1-2.4 0v-.05a1 1 0 0 0-.65-.91 1 1 0 0 0-1.1.2l-.04.03a1.2 1.2 0 0 1-1.7-1.7l.04-.04A1 1 0 0 0 2.3 8.4a1 1 0 0 0-.91-.6H1a1.2 1.2 0 0 1 0-2.4h.05a1 1 0 0 0 .91-.65 1 1 0 0 0-.2-1.1l-.03-.04a1.2 1.2 0 0 1 1.7-1.7l.04.04a1 1 0 0 0 1.1.2h.05A1 1 0 0 0 5.2 2V2a1.2 1.2 0 0 1 2.4 0v.05a1 1 0 0 0 .6.91 1 1 0 0 0 1.1-.2l.04-.03a1.2 1.2 0 0 1 1.7 1.7l-.04.04A1 1 0 0 0 10.8 5.6a1 1 0 0 0 .91.6H12a1.2 1.2 0 0 1 0 2.4h-.05a1 1 0 0 0-.91.6z" stroke="white" strokeWidth="1.1" />
      </svg>
    ),
  },
  {
    label: "Ad Creative",
    top: 183,
    lineWidth: 57.5,
    iconGrad: "linear-gradient(214.51deg, #FFCC9C 7.64%, #FF8853 94.91%)",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1.5" y="1.5" width="11" height="11" rx="1.5" stroke="white" strokeWidth="1.1" />
        <circle cx="4.5" cy="4.5" r="1" fill="white" />
        <path d="M13 9.5L9.5 6L3 13" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Review & Launch",
    top: 264,
    lineWidth: 97,
    iconGrad: "linear-gradient(214.51deg, #CCFFD4 7.64%, #2EB0D7 94.91%)",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1.5" y="1.5" width="11" height="11" rx="1.5" stroke="white" strokeWidth="1.1" />
        <path d="M13 9.5L9.5 6L3 13" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 1.5V4.5L11 3" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

// ─── Main export ──────────────────────────────────────────────────────────────

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<string>("Image");

  return (
    <div
      /* Added md:min-h-[100dvh] so it stops dragging full viewport height on mobile */
      className={`relative w-full md:min-h-[100dvh] bg-[#01091E] text-white overflow-hidden ${montserrat.className}`}
    >
      <BackgroundGlows />
      <GridBackground />

      {/* ══════════════════════════════════════════════
          UNIFIED RESPONSIVE LAYOUT 
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-14 md:flex-row md:justify-center md:h-screen md:px-0 md:pt-0">
        
        {/* Scaling Wrapper */}
        <div className="w-full flex flex-col items-center md:relative md:min-w-[1485px] md:min-h-[600px] md:flex-row md:items-center md:justify-between md:scale-[0.5] lg:scale-[0.65] xl:scale-[0.8] 2xl:scale-100 md:origin-center md:z-10 md:transition-transform md:duration-300">
          
          {/* ── 1. Text & CTA Section ── */}
          <div className="w-[100%] md:w-[480px] md:flex-shrink-0 md:flex md:flex-col mb-10 md:mb-0 justify-center md:pl-4 md:-translate-y-[20px] md:translate-x-[50px] md:text-left">
            <div className="inline-flex items-center justify-center mx-auto md:mx-0 px-2 py-1.5 md:py-2 border border-white/20 rounded-full mb-4 md:mb-5 text-[12px] md:font-medium text-white/90 tracking-wide bg-[#FFFFFF08] backdrop-blur-xl md:w-max scale-[0.8] md:scale-[1] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-0.5px_0_rgba(0,0,0,0.1),0_4px_16px_rgba(0,0,0,0.18)]">
              Ads
            </div>
            
            <h1 className="text-[24px] sm:text-[26px] md:text-[42px] font-medium leading-[1.3] md:leading-[1.2] text-[#FFFFFF] mb-4 md:mb-6">
              {/* --- MOBILE TITLE --- */}
              <span className="block md:hidden">
                Manage ad execution with better coordination between assets, campaigns, and the rest of your<br />
                <span className={`${montserratAlt.className}  bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#0E78E9]`}>
                  {" "}marketing operation
                </span>
              </span>
              
              {/* --- DESKTOP TITLE --- */}
              <span className="hidden md:block">
                Run ad execution as <br />
                part of your <br />
                <span className={`${montserratAlt.className} font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#0E78E9]`}>
                  {" "}business operations
                </span>
              </span>
            </h1>

            <p className="text-[12.95px] md:text-[14px] text-[#FFFFFF] leading-[1.7] md:leading-[1.7] w-[290px] md:w-[480px] mx-auto md:mx-0 mb-7 md:mb-8 text-center md:text-left">
              {/* --- MOBILE SUBTEXT --- */}
              <span className="block md:hidden">
                Amplitive helps teams manage the inputs around paid media instead of treating ads as an isolated workflow.
              </span>

              {/* --- DESKTOP SUBTEXT --- */}
              <span className="hidden md:block">
                Connect campaigns, assets, and workflows—so execution stays aligned across your entire system.
              </span>
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 justify-center md:justify-start">
              {/* Primary Button: "View Pricing" (Mobile) / "Request Demo" (Desktop) */}
              <button className="font-['Urbanist'] md:w-[240px] md:w-auto px-10 md:px-7 py-1.5 md:py-2 rounded-[6px] text-[12.2px] md:text-[14px] md:font-medium text-[#FFFFFF] bg-[#FFFFFF1F] hover:bg-[#2a4060] transition-all shadow-sm md:scale-100 cursor-pointer">
                <span className="md:hidden">View Pricing</span>
                <span className="hidden md:inline">Request Demo</span>
              </button>
              
              {/* Secondary Button: "Book Demo" (Mobile) / "See Pricing" (Desktop) */}
              <button className="font-['Urbanist'] md:w-[240px] md:w-auto flex items-center justify-center gap-2 px-7 py-1.5 md:py-2 rounded-[5px] rounded-[6px] text-[12.4px] md:text-[14px] md:font-semibold text-[#000000] bg-[#FFFFFF] hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] md:scale-100 cursor-pointer">
                <span className="md:hidden">Book Demo</span>
                <span className="hidden md:inline">See Pricing</span>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 16.5L13.75 11L8.25 5.5" stroke="black" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ── 2. Floating Widgets Container (Ads Mockup) ── */}
          {/* Added h-[220px] sm:h-[300px] md:h-auto to clip invisible layout height on mobile */}
          <div className="font-Urbanist w-full relative mt-8 md:mt-0 md:flex-shrink-0 md:w-[796px] flex justify-center md:block md:-translate-x-[20px] h-[220px] sm:h-[300px] md:h-auto">
            {/* Mobile Scaling Wrapper */}
            <div className={`relative left-[4%] md:left-0 origin-top md:origin-center scale-[0.45] sm:scale-[0.6] md:scale-[0.95] ${urbanist.className} flex justify-center md:block`}>
              <DesktopAdsMockup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CampaignSteps() {
  return (
    <div className="absolute top-[178px] left-0 z-30 w-[400px] h-[350px]">
      {/* Connector lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical stem */}
        <div
          className="absolute left-0 top-[30px] w-[1px]"
          style={{
            height: "234px",
            background: "linear-gradient(180deg, #5BEC71 -4.01%, #0F72D7 91.44%)",
          }}
        />
        {/* Horizontal branches + glow dots */}
        {CAMPAIGN_STEPS.map((step, i) => (
          <React.Fragment key={`branch-${i}`}>
            <div
              className="absolute h-[1px] font-normal"
              style={{
                top: `${step.top}px`,
                left: "0px",
                width: `${step.lineWidth}px`,
                background: "linear-gradient(90deg, #5BEC71 -4.01%, #0F72D7 91.44%)",
              }}
            />
            <div
              className="absolute -translate-y-1/2 flex items-center justify-center"
              style={{ top: `${step.top}px`, left: `${step.lineWidth}px` }}
            >
              <div className="absolute w-[6px] h-[6px] bg-white/20 rounded-full blur-[1px]" />
              <div className="w-[3px] h-[3px] bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Step cards */}
      {CAMPAIGN_STEPS.map((step) => (
        <div
          key={step.label}
          className="absolute flex items-center -translate-y-1/2"
          style={{ top: `${step.top}px`, left: `${step.lineWidth}px` }}
        >
          <div
            className="absolute flex items-center justify-center rounded-[9.16px] p-[1px] bg-[#FFFFFF26]"
            style={{ width: "162.67px", height: "58.06px" }}
          >
            <div
              className="rounded-[8.79px] bg-white backdrop-blur-md flex items-center gap-[11.3px] px-[11.3px]"
              style={{ width: "153.5px", height: "48.9px" }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-[3.77px]"
                style={{
                  width: "26.3px",
                  height: "26.3px",
                  background: step.iconGrad,
                }}
              >
                {step.icon}
              </div>
              <span className="font-urbanist text-[11.46px] font-medium text-[#1F1F1F] leading-none whitespace-nowrap">
                {step.label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AdsAnalyticsBox() {
  const gradientId = "chart_fill_unique";
  const strokeId = "chart_stroke_unique";
  return (
    <div
      className="absolute z-20 flex flex-col overflow-hidden bg-[#0A1325]"
      style={{
        width: "504.47px",
        height: "356px",
        top: "71px",
        left: "129px",
        borderRadius: "18.7px",
        border: "0.85px solid rgba(255,255,255,0.1)",
        boxShadow:
          "2.66px 2.66px 23.91px 0px rgba(117,186,255,0.12) inset, 2.66px 2.66px 23.91px 0px rgba(91,236,113,0.05) inset, 0px 3.4px 20.4px 0px rgba(117,186,255,0.19)",
        backdropFilter: "blur(10.2px)",
      }}
    >
      {/* Background SVG Mobile (from Calendar) */}
      <svg className="absolute top-0 left-0 z-0 opacity-90 pointer-events-none md:hidden" width="70%" height="80%" viewBox="0 0 316 205" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <g opacity="0.6" filter="url(#filter0_f_303_14574_mob_ads)">
          <path d="M221.555 -50.7261C221.555 38.4702 149.247 110.778 60.051 110.778C-29.1452 110.778 -101.453 38.4702 -101.453 -50.7261C-101.453 -139.922 -29.1452 -212.23 60.051 -212.23C149.247 -212.23 221.555 -139.922 221.555 -50.7261Z" fill="url(#paint0_radial_303_14574_mob_ads)" />
        </g>
        <defs>
          <filter id="filter0_f_303_14574_mob_ads" x="-194.955" y="-305.733" width="610.013" height="510.013" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="46.7512" result="effect1_foregroundBlur_303_14574_mob_ads" />
          </filter>
          <radialGradient id="paint0_radial_303_14574_mob_ads" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.2048 -56.8416) rotate(90) scale(172.623 160.411)">
            <stop stopColor="#5BEC71" />
            <stop offset="1" stopColor="#0F72D7" />
          </radialGradient>
        </defs>
      </svg>

      {/* Background SVG Desktop (from Calendar) */}
      <svg className="absolute top-0 left-0 z-0 opacity-90 pointer-events-none hidden md:block" width="100%" height="100%" viewBox="0 0 376 175" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <g opacity="0.6" filter="url(#filter0_f_303_14574_ads)">
          <path d="M221.555 -50.7261C221.555 38.4702 149.247 110.778 60.051 110.778C-29.1452 110.778 -101.453 38.4702 -101.453 -50.7261C-101.453 -139.922 -29.1452 -212.23 60.051 -212.23C149.247 -212.23 221.555 -139.922 221.555 -50.7261Z" fill="url(#paint0_radial_303_14574_ads)" />
        </g>
        <defs>
          <filter id="filter0_f_303_14574_ads" x="-194.955" y="-305.733" width="510.013" height="510.013" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="46.7512" result="effect1_foregroundBlur_303_14574_ads" />
          </filter>
          <radialGradient id="paint0_radial_303_14574_ads" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.2048 -56.8416) rotate(90) scale(172.623 160.411)">
            <stop stopColor="#5BEC71" />
            <stop offset="1" stopColor="#0F72D7" />
          </radialGradient>
        </defs>
      </svg>

      <div className="relative md:top-0 z-10 flex flex-col h-full font-urbanist">
        <p className="relative top-[7%] text-white text-[24px] md:text-[16px] font-medium mt-[18.7px] text-center opacity-90">
          Ads Analytics
        </p>

        <div className="relative flex-1 w-full overflow-hidden">
          {/* Y-axis labels */}
          <div
            className="absolute flex flex-col-reverse justify-between"
            style={{
              width: "12.79px",
              height: "257.55px",
              top: "35px",
              left: "18px",
            }}
          >
            {[0, 45, 90, 135, 180].map((val) => (
              <div
                key={val}
                className="text-white text-[6.68px] font-normal text-right leading-none"
              >
                {val}
              </div>
            ))}
          </div>

          {/* Axis border lines */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "431.95px",
              height: "257.55px",
              top: "35px",
              left: "36.76px",
              borderLeft: "0.56px solid #ECECED",
              borderBottom: "0.56px solid #ECECED",
            }}
          />

          <GlassBadge top="53px" left="118px">
            1288 Clicks
          </GlassBadge>

          {/* SVG chart */}
          <div
            className="absolute"
            style={{
              width: "431.81px",
              height: "221px",
              top: "70px",
              left: "37.25px",
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 432 221"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id={gradientId} x1="-11.71" y1="194.3" x2="399.01" y2="60.04" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5BEC71" />
                  <stop offset="1" stopColor="#0F72D7" />
                </linearGradient>
                <linearGradient id={strokeId} x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                  <stop stopColor="#0F72D7" />
                  <stop offset="1" stopColor="#5BEC71" />
                </linearGradient>
              </defs>
              <path
                d="M29.6368 57.941L0 81.9119V220.902H431.807V26.472L425.691 17.7359C408.842 -6.33445 372.321 -3.39893 359.532 23.0537L349.247 44.3296C341.095 61.1925 317.827 63.0958 307.043 47.782C298.902 36.2222 282.708 33.9024 271.649 42.7118L270.273 43.8083C257.566 53.9307 238.807 50.1829 230.965 35.9551L222.73 21.0144C208.227 -5.29777 171.168 -7.30663 153.905 17.2837L131.493 49.2106C118.993 67.0168 94.1503 70.767 76.9514 57.444C62.9734 46.6159 43.3842 46.8217 29.6368 57.941Z"
                fill={`url(#${gradientId})`}
                fillOpacity="0.15"
              />
              <path
                d="M0 81.9119L29.6368 57.941C43.3842 46.8217 62.9734 46.6159 76.9514 57.444C94.1503 70.767 118.993 67.0168 131.493 49.2106L153.905 17.2837C171.168 -7.30663 208.227 -5.29777 222.73 21.0144L230.965 35.9551C238.807 50.1829 257.566 53.9307 270.273 43.8083L271.649 42.7118C282.708 33.9024 298.902 36.2222 307.043 47.782C317.827 63.0958 341.095 61.1925 349.247 44.3296L359.532 23.0537C372.321 -3.39893 408.842 -6.33445 425.691 17.7359L431.807 26.472"
                stroke={`url(#${strokeId})`}
                strokeWidth="2.34"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <Dot top="-6px" left="180.34px" />
            <Dot top="59px" left="96px" />
            <Dot top="43.67px" left="247.34px" />
            <Dot top="52px" left="318.34px" />
            <Dot top="-4.33px" left="390px" />
          </div>

          <GlassBadge top="190px" left="83px">
            4.12% CTR
          </GlassBadge>
          <GlassBadge top="145px" left="390px" width="110px">
            51,200 Impressions
          </GlassBadge>
        </div>
      </div>
    </div>
  );
}

function DesktopAdsMockup() {
  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: "700.5px", height: "468.32px" }}
    >
      {/* Search bar */}
      <div className="absolute top-0 left-[65px] z-30 flex h-[51.88px] w-[325px] items-center gap-3 rounded-[92.94px] border border-white/15 bg-black/15 px-4 shadow-[inset_4.65px_4.65px_41.82px_0px_rgba(117,186,255,0.12),inset_4.65px_4.65px_41.82px_0px_rgba(91,236,113,0.05)]">
        <div className="relative h-3.5 w-3.5 rounded-full border-2 border-white after:absolute after:-bottom-1 after:-right-1 after:h-1.5 after:w-[2px] after:rotate-[-45deg] after:bg-white after:content-['']" />
        <span className="font-normal text-[16.26px] leading-none text-white">
          Search Campaigns
        </span>
      </div>

      {/* Create Campaign button */}
      <div className="absolute top-[49px] right-[13%] md:right-0 z-40 flex h-[41.27px] w-[182px] cursor-pointer items-center justify-center gap-2 rounded-[6.58px] bg-[linear-gradient(40.24deg,#5BEC71_-4.01%,#0F72D7_91.44%)] px-[10.97px] py-[8.77px] shadow-[0px_4.39px_13.16px_0px_rgba(137,196,255,0.36)]">
        <span className="text-[30px] font-light leading-none text-white">
          +
        </span>
        <span className="font-normal text-[14px] leading-none text-white">
          Create Campaign
        </span>
      </div>

      <CampaignSteps />
      <AdsAnalyticsBox />
    </div>
  );
}

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