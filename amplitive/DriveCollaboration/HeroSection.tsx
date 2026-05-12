"use client";

import React from "react";
import { Montserrat_Alternates, Montserrat, Urbanist } from "next/font/google";
import Image from "next/image";
// Ensure these paths match your project structure
import womanInteracting from "../public/woman-interacting.svg";
import man from "../public/man.svg";

// Configure the fonts
const montserratAlt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export default function DriveCollaborationHeroSection() {
  return (
    <div className={`relative w-full min-h-[100dvh] bg-[#01091E] text-white overflow-hidden ${montserrat.className}`}>
      <BackgroundGlows />
      <GridBackground />

      {/* ══════════════════════════════════════════════
          UNIFIED RESPONSIVE LAYOUT
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-14 md:flex-row md:justify-center md:h-screen md:px-0 md:pt-0">
        
        {/* Scaling Wrapper */}
        <div className="w-full flex flex-col items-center md:relative md:min-w-[1585px] md:min-h-[600px] md:flex-row md:items-center md:justify-between md:scale-[0.5] lg:scale-[0.65] xl:scale-[0.8] 2xl:scale-100 md:origin-center md:z-10 md:transition-transform md:duration-300">
          
          {/* ── 1. Text & CTA Section ── */}
          <div className="w-full md:w-[650px] md:h-[411px] md:flex-shrink-0 md:flex md:flex-col mb-4 md:mb-0 md:justify-center md:pl-4 md:-translate-y-[20px] md:translate-x-[50px] md:text-left">
            <div className="inline-flex items-center justify-center mx-auto md:mx-0 px-4 py-1.5 md:py-2 border border-white/20 rounded-full mb:3 md:mb-5 text-[11px] md:text-[13.5px] md:font-medium text-white/80 tracking-wide md:bg-[#FFFFFF08] md:w-max scale-[0.8] md:scale-[1]">
              Drive & Collaboration
            </div>
            
            <h1 className="text-[25px] sm:text-[32px] md:text-[45px] lg:text-[45px] font-medium leading-[1.35] md:leading-[1.15] text-[#FFFFFF] mb-4 md:mb-6">
              Centralize assets,<br />
              documents, and team<br className="block" />
              collaboration around the{" "}
              <span
                className={`${montserratAlt.className} md:font-semibold bg-clip-text text-transparent`}
                style={{ backgroundImage: "linear-gradient(90deg, #1ab87e, #0f72d7)" }}
              >
                {" "}marketing work.
              </span>
            </h1>
            
            <p className="text-[12px] md:text-[16px] font-light text-[#FFFFFF] leading-[1.25] md:leading-[1.7] w-[260px] md:w-[560px] mx-auto md:mx-0 mb-7 md:mb-8">
              Amplitive reduces the need to chase files and context across separate storage and communication tools.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 justify-center md:justify-start">
              <button className="px-8.5 md:px-6 py-1.5 md:py-2.5 rounded-[6px] md:rounded-lg text-[9.1px] md:text-[13px] font-medium text-white/90 bg-[#FFFFFF1F] md:bg-[#1e2e46] backdrop-blur-[32px] md:backdrop-blur-none hover:bg-[#2a4060] transition-all border border-white/5 shadow-sm scale-[1.1] md:scale-100 cursor-pointer">
                View Pricing
              </button>
              <button className="flex items-center gap-2 px-8 md:px-8 py-2 md:py-2.5 rounded-[7px] md:rounded-lg text-[11px] md:text-[13px] md:font-semibold text-[#000000] bg-[#FFFFFF] hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] scale-[0.86] md:scale-100 cursor-pointer">
                Book Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>

          {/* ── 2. Floating Widgets Container (Drive UI) ── */}
          {/* We define a fixed height wrapper for mobile to prevent overlap with elements below it, 
              then scale the inner 796x497 container down proportionally */}
          <div className="w-full relative left-[20px] md:left-[80px] mt-16 md:mt-0 h-[240px] sm:h-[300px] md:h-[497px] md:w-[796px] md:flex-shrink-0 md:-translate-x-[50px]">
            {/* Mobile Scaling Wrapper */}
            <div className={`absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 w-[796px] h-[497px] origin-top scale-[0.43] sm:scale-[0.55] md:scale-100 ${urbanist.className}`}>
              <DriveCollaborationVisuals />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
    DRIVE & COLLABORATION UI COMPONENTS
   ══════════════════════════════════════════════ */

const DriveCollaborationVisuals = () => (
  <>
    <DriveTabsWidget />
    <FolderCardsContainer />
    <VideoThumbnailWidget />
    <ProfileThumbnailWidget />
    <NewFolderButton />
    
    {/* Floating Blue Document Icon */}
    <FloatingIcon 
      top="30px" left="480px" 
      icon={<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="38" height="38" rx="5.4" fill="url(#paint0_linear_blue)"/>
        <path d="M21.0859 10.6667H14.0026C13.5606 10.6667 13.1367 10.8423 12.8241 11.1548C12.5115 11.4674 12.3359 11.8913 12.3359 12.3334V25.6667C12.3359 26.1087 12.5115 26.5326 12.8241 26.8452C13.1367 27.1578 13.5606 27.3334 14.0026 27.3334H24.0026C24.4446 27.3334 24.8686 27.1578 25.1811 26.8452C25.4937 26.5326 25.6693 26.1087 25.6693 25.6667V15.25L21.0859 10.6667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.6641 10.6667V15.6667H25.6641" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.3307 19.8333H15.6641" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.3307 23.1667H15.6641" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.3307 16.5H15.6641" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_blue" x1="38" y1="-1.20327e-06" x2="4.75" y2="40.375" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ACD5FF"/>
            <stop offset="1" stopColor="#003F9D"/>
          </linearGradient>
        </defs>
      </svg>}
    />
    
    {/* Floating Purple Video Icon */}
    <FloatingIcon 
      top="90px" left="650px" 
      icon={<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="38" height="38" rx="5.4" fill="url(#paint0_linear_purple)"/>
        <path d="M21.0859 10.6667H14.0026C13.5606 10.6667 13.1367 10.8423 12.8241 11.1548C12.5115 11.4674 12.3359 11.8913 12.3359 12.3333V25.6667C12.3359 26.1087 12.5115 26.5326 12.8241 26.8452C13.1367 27.1577 13.5606 27.3333 14.0026 27.3333H24.0026C24.4446 27.3333 24.8686 27.1577 25.1811 26.8452C25.4937 26.5326 25.6693 26.1087 25.6693 25.6667V15.25L21.0859 10.6667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.6641 10.6667V15.6667H25.6641" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.3359 18.1667L21.5026 20.6667L17.3359 23.1667V18.1667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_purple" x1="38" y1="-2.34991e-06" x2="-1.425" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B8A4FF"/>
            <stop offset="1" stopColor="#6B31B6"/>
          </linearGradient>
        </defs>
      </svg>}
    />
    
    {/* Floating Orange Image Icon */}
    <FloatingIcon 
      top="350px" left="320px" 
      icon={<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="38" height="38" rx="5.4" fill="url(#paint0_linear_orange)"/>
        <path d="M24.8333 11.5H13.1667C12.2462 11.5 11.5 12.2462 11.5 13.1667V24.8333C11.5 25.7538 12.2462 26.5 13.1667 26.5H24.8333C25.7538 26.5 26.5 25.7538 26.5 24.8333V13.1667C26.5 12.2462 25.7538 11.5 24.8333 11.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5026 18.1667C17.4231 18.1667 18.1693 17.4205 18.1693 16.5C18.1693 15.5795 17.4231 14.8333 16.5026 14.8333C15.5821 14.8333 14.8359 15.5795 14.8359 16.5C14.8359 17.4205 15.5821 18.1667 16.5026 18.1667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.5 21.5L23.9283 18.9283C23.6158 18.6159 23.1919 18.4404 22.75 18.4404C22.3081 18.4404 21.8842 18.6159 21.5717 18.9283L14 26.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_orange" x1="38" y1="-1.20327e-06" x2="4.75" y2="40.375" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFCC9C"/>
            <stop offset="1" stopColor="#FF755F"/>
          </linearGradient>
        </defs>
      </svg>}
    />
  </>
);

const DriveTabsWidget = () => (
  <div className="absolute top-[20px] left-[30px] z-20 flex items-center gap-1 bg-[#FFFFFF0A] border border-white/10 rounded-full p-1 backdrop-blur-md shadow-lg">
    <div className="bg-white text-[#01091E] text-[14px] font-semibold px-8 py-2 rounded-full cursor-pointer shadow-sm">All</div>
    {['Text', 'Images', 'Video'].map(tab => (
      <div key={tab} className="text-white/70 hover:text-white text-[14px] font-medium px-8 py-2 rounded-full cursor-pointer transition-colors">
        {tab}
      </div>
    ))}
  </div>
);

const FolderCardsContainer = () => (
  // z-20 keeps this whole block perfectly above the ProfileThumbnailWidget
  <div className="absolute top-[120px] left-[130px] z-20 w-[650px] h-[190px]">
    
    {/* Background Panel (Matches Calendar UI) */}
    <div className="absolute inset-0 bg-[#0A1325]/60 border border-white/5 rounded-[20px] overflow-hidden ">
      
      {/* Background SVG Glow */}
      <svg className="absolute top-0 left-0 z-0 opacity-90 pointer-events-none" width="100%" height="100%" viewBox="0 0 376 195" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <g opacity="0.6" filter="url(#folder_glow_f_desk)">
          <path d="M221.555 -50.7261C221.555 38.4702 149.247 110.778 60.051 110.778C-29.1452 110.778 -101.453 38.4702 -101.453 -50.7261C-101.453 -139.922 -29.1452 -212.23 60.051 -212.23C149.247 -212.23 221.555 -139.922 221.555 -50.7261Z" fill="url(#folder_glow_r_desk)" />
        </g>
        <defs>
          <filter id="folder_glow_f_desk" x="-194.955" y="-305.733" width="510.013" height="510.013" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="46.7512" result="effect1_foregroundBlur_folder_desk" />
          </filter>
          <radialGradient id="folder_glow_r_desk" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.2048 -56.8416) rotate(90) scale(172.623 160.411)">
            <stop stopColor="#5BEC71" />
            <stop offset="1" stopColor="#0F72D7" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    
    {/* Card Row */}
    <div className="relative flex items-center gap-5 p-7 h-full overflow-hidden">
      <FolderCard title="Studio Video Scripts Drafts" date="Mar 22" items="6 items" />
      <FolderCard title="Ads Campaign Studio Images" date="Mar 22" items="6 items" />
      
      {/* FIX 1: Removed opacity-40 and pointer-events-none */}
      <FolderCard 
        title="Studio Video Edits" 
        date="Mar 22" 
        items="3 items" 
      />
      
      {/* FIX 2: Removed the Right Edge Fade Out div completely */}
    </div>
  </div>
);

const FolderCard = ({ title, date, items, className = "" }) => (
  <div 
    className={`w-[245px] flex-shrink-0 bg-white rounded-[14px] p-5 scale-[0.95] flex flex-col justify-between border border-gray-100 transform hover:-translate-y-1 transition-transform cursor-pointer ${className}`}
    style={{
      boxShadow: "0 0 0 6px rgba(255, 255, 255, 0.08), 0 5px 10px rgba(0, 0, 0, 0.2)"
    }}
  >
    <div className="flex items-center justify-between mb-2">
      <div className="w-9 h-9 rounded-[10px] bg-[#EAF2FF] flex items-center justify-center text-[#2563EB]">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.797 3.07226C14.8978 3.23059 14.7252 3.41503 14.5422 3.37344C14.1843 3.26683 13.7884 3.21353 13.3848 3.21353H10.8716C10.7519 3.21353 10.6391 3.15722 10.5672 3.06151L9.69151 1.89614C9.58425 1.74418 9.68564 1.52301 9.87164 1.52301H11.9684C13.1571 1.52301 14.2042 2.14038 14.797 3.07226Z" fill="#0F72D7"/>
        <path d="M15.3369 4.98019C15.0095 4.74413 14.6364 4.56899 14.2328 4.46999C13.9586 4.39384 13.6769 4.35577 13.3875 4.35577H10.5548C10.1131 4.35577 10.0826 4.31769 9.84657 4.00548L8.78048 2.5891C8.28551 1.9266 7.89714 1.52301 6.65591 1.52301H4.88924C3.0312 1.52301 1.52344 3.03077 1.52344 4.88881V13.3871C1.52344 15.2451 3.0312 16.7529 4.88924 16.7529H13.3875C15.2456 16.7529 16.7533 15.2451 16.7533 13.3871V7.72157C16.7533 6.58695 16.1974 5.58939 15.3369 4.98019ZM10.9584 12.4428H7.31079C7.01381 12.4428 6.78536 12.2068 6.78536 11.9098C6.78536 11.6204 7.01381 11.3767 7.31079 11.3767H10.9584C11.2553 11.3767 11.4914 11.6204 11.4914 11.9098C11.4914 12.2068 11.2553 12.4428 10.9584 12.4428Z" fill="#0F72D7"/>
        </svg>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
      </button>
    </div>
    <h3 className="text-[#3E3E3E] text-start text-[14px] leading-[1.3] mb-4 pr-2">
      {title}
    </h3>
    <div className="flex items-center w-[65%] justify-between text-[#7D7D7D] text-[11px] font-medium mt-auto">
      <span>{date}</span>
      <span>{items}</span>
    </div>
  </div>
);

const VideoThumbnailWidget = () => (
  <div className="absolute top-[145px] left-[20px] z-20 w-[120px] h-[120px] rounded-xl overflow-hidden border border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.5)] group cursor-pointer bg-black/40 backdrop-blur-sm">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-500"></div>
    <div className="absolute inset-0 bg-black/20">
      <Image
        src={womanInteracting}
        alt="woman"
        fill
        className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    
    {/* Play Button Overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg bg-black/20 backdrop-blur-md border border-white/30">
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2727 6.48794C12.8182 6.80286 12.8182 7.59015 12.2727 7.90507L1.22727 14.2822C0.681814 14.5971 -2.60703e-06 14.2034 -2.5795e-06 13.5736L-2.022e-06 0.819405C-1.99447e-06 0.189568 0.681816 -0.204079 1.22727 0.11084L12.2727 6.48794Z" fill="white"/>
        </svg>
      </div>
    </div>
    
    {/* Progress Bar */}
    <div className="absolute bottom-3 left-3 right-3 h-1 bg-white/30 rounded-full overflow-hidden">
      <div className="w-1/3 h-full bg-white rounded-full"></div>
    </div>
  </div>
);

const ProfileThumbnailWidget = () => (
  // z-10 ensures it smoothly stays behind the z-20 FolderCardsContainer
  <div className="absolute top-[260px] left-[600px] z-10 w-[140px] h-[150px] rounded-xl overflow-hidden border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group">
    <div className="absolute inset-0 ">
      <Image
        src={man}
        alt="man"
        fill
        className="object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#01091E]/90 via-transparent to-transparent"></div>
  </div>
);

const NewFolderButton = () => (
  <button className="absolute top-[300px] left-[70px] z-30 flex items-center gap-2 bg-gradient-to-t from-[#5BEC71] to-[#0F72D7] text-white px-5 py-2.5 rounded-[8px] font-medium text-[14px] shadow-[0_15px_30px_rgba(15,114,215,0.3)] hover:scale-105 transition-transform border border-white/20 cursor-pointer">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      <line x1="12" y1="11" x2="12" y2="17"></line>
      <line x1="9" y1="14" x2="15" y2="14"></line>
    </svg>
    New Folder
  </button>
);

const FloatingIcon = ({ top, left, icon }) => (
  <div 
    className="absolute z-30 transform hover:-translate-y-1 transition-transform cursor-pointer"
    style={{ top, left }}
  >
    {icon}
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