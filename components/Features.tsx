  "use client";

  import { useState } from "react";
  import Image from "next/image";

  // Features/Hero Assets
  import men from '../public/men.png';
  import computer from '../public/computer.png';

  // BlogSection Assets
  import content1 from "../public/content1.png";
  import content2 from "../public/content2.png";
  import content3 from "../public/content3.png";
  import content4 from "../public/content4.png";
  import desktop from "../public/Desktop - 19.png";
  import linkedIn from "../public/linkedin.png";
  import studio from "../public/studio.png";
  import automation from "../public/automation.png";
  import scrollBar from "../public/bar.png";

  export default function Features() {
    const [activeTab, setActiveTab] = useState("Image");
    const tabs = ["Image", "Video", "Scripts", "Text"];

    return (
      <div
        className="relative w-full min-h-screen bg-[#020a16] text-white overflow-x-hidden"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
          * { box-sizing: border-box; }
        `}</style>

        {/* ── Shared Background Glow ── */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 flex justify-center overflow-hidden">
          <svg width="1728" height="1205" viewBox="0 0 1728 1205" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[1728px] max-w-none opacity-80 sticky top-0">
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
            HERO — DESKTOP ONLY (lg+), untouched original
        ══════════════════════════════════════════════ */}
        <div className="relative w-full h-screen items-center justify-center hidden lg:flex">
          <div className="relative w-[1485px] h-[600px] flex items-center justify-between scale-[0.65] xl:scale-[0.8] min-[1440px]:scale-[0.9] 2xl:scale-100 origin-center z-10">
            <div className="flex-shrink-0 flex flex-col justify-center w-[650px] h-[411px] pl-4">
              <div className="inline-flex items-center justify-center px-3.5 py-2 border border-white/20 rounded-full bg-transparent mb-6 text-[13.5px] font-medium text-white/70 tracking-wide w-max">Content Studio</div>
              <h1 className="text-[55px] md:text-[49px] font-medium leading-[1.15] text-white mb-6">
                Create content, assets,<br />and campaign-ready<br />materials without leaving<br />
                <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#00A3FF]">your operating system</span>
              </h1>
              <p className="text-[13.5px] font-light text-white/70 leading-[1.7] max-w-[440px] mb-8">Content Studio gives teams one place to generate, organize, and move content into the rest of the marketing workflow.</p>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 rounded-lg text-[13px] font-medium text-white/90 bg-[#1e2e46] hover:bg-[#2a4060] transition-all border border-white/5 shadow-sm">Request Demo</button>
                <button className="flex items-center gap-2 px-8 py-3 rounded-lg text-[13px] font-semibold text-[#020a16] bg-white hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                  See Pricing
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            </div>
            <div className="relative flex-shrink-0 w-[796px] h-[497px]">
              <div className="absolute flex flex-col items-center justify-center gap-2 rounded-[20px] bg-white/5 backdrop-blur-md text-[12px] text-white/80 cursor-pointer hover:bg-[#0c182e]/80 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.4)] z-20" style={{ width: "94.5px", height: "94.5px", top: "120px", left: "60px", backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='white' stroke-width='1.5' stroke-dasharray='8%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                Style
              </div>
              <div className="absolute rounded-[14px] overflow-hidden shadow-[0_0_40px_rgba(0,163,255,0.3)] border border-[#2d6f8e]/30 z-10" style={{ width: "156.22px", height: "166.02px", bottom: "30px", left: "40px" }}>
                <Image src={computer} alt="Dashboard" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#051124]/30" />
              </div>
              <div className="absolute rounded-[20px] overflow-hidden shadow-[0_0_40px_rgba(0,163,255,0.35)] border border-white/10 z-40" style={{ width: "197px", height: "210px", top: "-35px", left: "585px" }}>
                <Image src={men} alt="Men" fill className="object-cover" />
              </div>
              <div className="absolute flex items-center gap-0.5 p-0.5 rounded-full bg-[#0c182e]/80 border border-white/10 backdrop-blur-md z-40" style={{ top: "30px", left: "392px", transform: "translateX(-50%)" }}>
                {tabs.map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-full text-[13.5px] font-medium transition-all ${activeTab === tab ? "bg-white text-[#020a16]" : "text-white/60 hover:text-white"}`}>{tab}</button>
                ))}
              </div>
              <div className="absolute rounded-[20px] border border-[#2d6f8e]/50 flex flex-col items-center pt-7 backdrop-blur-2xl z-30" style={{ width: "423.83px", height: "318.03px", top: "90px", left: "180px", background: "linear-gradient(180deg, rgba(16, 44, 66, 0.85) 0%, rgba(9, 23, 41, 0.95) 100%)", boxShadow: "0 30px 60px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1)" }}>
                <p className="text-center text-[15.5px] text-white/90 font-medium mb-5">Describe the image you want<br />to create</p>
                <div className="relative bg-white rounded-[14px] p-5 shadow-inner flex flex-col" style={{ width: "378.24px", height: "195px" }}>
                  <p className="text-[12px] text-[#333] leading-[1.8] font-medium">Hyperrealistic modern marketing agency concept...</p>
                  <div className="absolute w-full flex items-center justify-between" style={{ bottom: "15px", left: "0", padding: "0 20px" }}>
                    <div className="flex items-center gap-2.5 text-[12px] text-gray-500 font-semibold">
                      <div className="relative w-[34px] h-[20px] rounded-full bg-[#0F72D7] cursor-pointer shadow-inner"><div className="absolute w-[14px] h-[14px] rounded-full bg-white top-[3px] right-[3px]" /></div>
                      Enhance Prompt
                    </div>
                    <button className="relative flex items-center justify-center gap-2 rounded-[10px] text-[13px] font-semibold text-white bg-gradient-to-r from-[#5BEC71] via-[#3ab4aa] to-[#0F72D7] hover:opacity-95 shadow-[0_15px_30px_rgba(15,114,215,0.4)] transition-all z-50" style={{ width: "180px", height: "39.38px", right: "-175px" }}>Generate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            HERO — MOBILE ONLY (< lg)
            Native layout, no scale tricks
        ══════════════════════════════════════════════ */}
        <div className="relative z-10 lg:hidden flex flex-col items-center text-center px-5 pt-14 pb-8">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-3.5 py-1.5 border border-white/20 rounded-full mb-4 text-[11px] font-medium text-white/70 tracking-wide">
            Content Studio
          </div>
          {/* Heading */}
          <h1 className="text-[24px] sm:text-[28px] font-medium leading-[1.3] text-white mb-4">
            Create content, assets, and campaign-ready materials without leaving{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#00A3FF]">your operating system</span>
          </h1>
          {/* Subtext */}
          <p className="text-[13px] font-light text-white/60 leading-[1.7] mb-7 max-w-[300px]">
            Content Studio gives teams one place to generate, organize, and move content into the rest of the marketing workflow.
          </p>
          {/* Buttons */}
          <div className="flex items-center gap-3 mb-8 flex-wrap justify-center">
            <button className="px-5 py-2.5 rounded-lg text-[12px] font-medium text-white/90 bg-[#1e2e46] border border-white/5">Request Demo</button>
            <button className="flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-[12px] font-semibold text-[#020a16] bg-white">
              See Pricing
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
          {/* Preview Card */}
          <div className="w-full max-w-[320px] rounded-[18px] border border-[#2d6f8e]/50 overflow-hidden" style={{ background: "linear-gradient(180deg, rgba(16,44,66,0.92) 0%, rgba(9,23,41,0.98) 100%)", boxShadow: "0 20px 50px rgba(0,0,0,0.7)" }}>
            {/* Tabs */}
            <div className="flex justify-center pt-4 pb-2 px-3">
              <div className="flex items-center gap-0.5 p-0.5 rounded-full bg-[#0c182e]/80 border border-white/10">
                {tabs.map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)} className={`px-3 py-1.5 rounded-full text-[10px] font-medium transition-all ${activeTab === tab ? "bg-white text-[#020a16]" : "text-white/60"}`}>{tab}</button>
                ))}
              </div>
            </div>
            {/* Prompt */}
            <div className="px-4 pb-4">
              <p className="text-[12px] text-white/80 font-medium text-center mb-2.5">Describe the image you want to create</p>
              <div className="bg-white rounded-[10px] p-3">
                <p className="text-[10px] text-[#444] leading-[1.6] mb-3">Hyperrealistic modern marketing agency concept...</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[9px] text-gray-500 font-semibold">
                    <div className="relative w-[26px] h-[15px] rounded-full bg-[#0F72D7]"><div className="absolute w-[10px] h-[10px] rounded-full bg-white top-[2.5px] right-[2.5px]" /></div>
                    Enhance Prompt
                  </div>
                  <button className="flex items-center justify-center rounded-[7px] text-[10px] font-semibold text-white bg-gradient-to-r from-[#5BEC71] via-[#3ab4aa] to-[#0F72D7] px-3.5 py-1.5">Generate</button>
                </div>
              </div>
            </div>
            {/* Men image as decorative bottom strip */}
            <div className="relative w-full h-[110px] overflow-hidden">
              <Image src={men} alt="Preview" fill className="object-cover object-top opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09172a] via-[#09172a]/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 2 — TEXT BLOCK (shared, responsive)
        ══════════════════════════════════════════════ */}
        <div className="relative z-10 py-10 lg:py-16 px-5 lg:px-6 max-w-[1300px] mx-auto text-center lg:-mt-10">
          <h2 className="text-[22px] sm:text-[26px] lg:text-[38px] font-medium leading-[1.35] text-white mb-5">
            Content production slows down when briefs,{" "}
            <br className="hidden lg:block" />
            approvals, files, and launch steps live in{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#00A3FF]">separated tools</span>
          </h2>
          <p className="text-[13px] lg:text-[15.5px] font-light text-white/60 leading-[1.8] max-w-[900px] mx-auto">
            Content Studio brings the production layer together so teams can move from planning to assets to launch with less back-and-forth...
          </p>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 3 — FEATURE CARDS
        ══════════════════════════════════════════════ */}
        <div className="relative z-10 max-w-[1400px] mx-auto py-4 lg:py-24 px-4 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">

            {/* ── CARD 1: Content Creation ── */}
            <div className="relative rounded-[20px] border border-white/10 bg-[#0B1528]/60 backdrop-blur-md overflow-hidden p-6 lg:p-7 flex flex-col h-auto lg:h-[380px]">
              <CardGlow id="c1" />
              <CardGrid />
              <div className="relative z-10 flex flex-col h-full">
                <CardHeader icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>} color="bg-[#5BEC71]/10 text-[#5BEC71]" title="Content Creation" />
                <p className="text-[11px] text-white/50 leading-snug mb-4">Build and organize campaign assets, working drafts, and production deliverables from one centralized workspace.</p>
                {/* Mobile */}
                <div className="lg:hidden grid grid-cols-2 gap-2">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5"><Image src={content1} alt="Video Scripts" className="w-full h-auto" /></div>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5"><Image src={content2} alt="Video Campaigns" className="w-full h-auto" /></div>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5"><Image src={content3} alt="Image Generator" className="w-full h-auto" /></div>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5"><Image src={content4} alt="Text Generator" className="w-full h-auto" /></div>
                </div>
                {/* Desktop */}
                <div className="hidden lg:block relative flex-1 w-full mt-4">
                  <div className="absolute left-[-35px] top-[12%] w-[135px] z-10 drop-shadow-2xl"><Image src={content1} alt="Video Scripts" priority /></div>
                  <div className="absolute left-[125px] top-[5px] w-[200px] z-20 drop-shadow-2xl"><Image src={content2} alt="Video Campaigns" priority /></div>
                  <div className="absolute left-[135px] shadow-2xl bottom-[-28px] w-[190px] z-30 drop-shadow-2xl"><Image src={content3} alt="Image Generator" priority /></div>
                  <div className="absolute right-[-35px] bottom-[-28px] w-[140px] z-10 drop-shadow-2xl"><Image src={content4} alt="Text Generator" priority /></div>
                </div>
              </div>
            </div>

            {/* ── CARD 2: Production Visibility ── */}
            <div className="relative rounded-[20px] border border-white/10 bg-[#0B1528]/60 backdrop-blur-md overflow-hidden p-6 lg:p-7 flex flex-col h-auto lg:h-[380px]">
              <CardGlow id="c2" />
              <CardGrid />
              <div className="relative z-10 flex flex-col h-full">
                <CardHeader icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>} color="bg-orange-400/10 text-orange-400" title="Production Visibility" />
                <p className="text-[11px] text-white/50 leading-snug mb-4">Keep stakeholders aligned on what is in progress, what is waiting on review, and what is ready for launch.</p>
                {/* Mobile */}
                <div className="lg:hidden rounded-xl overflow-hidden border border-white/10">
                  <Image src={desktop} alt="Dashboard" className="w-full h-auto" />
                </div>
                {/* Desktop */}
                <div className="hidden lg:block relative flex-1 w-full mt-6 translate-x-24 translate-y-7 rounded-tl-2xl overflow-hidden shadow-2xl border-l border-t border-white/10">
                  <Image src={desktop} alt="Dashboard" fill className="object-cover object-left-top" priority />
                </div>
              </div>
            </div>

            {/* ── CARD 3: Structured Handoffs ── */}
            <div className="relative rounded-[20px] border border-white/10 bg-[#0B1528]/60 backdrop-blur-md overflow-hidden p-6 lg:p-7 flex flex-col h-auto lg:h-[380px]">
              <CardGlow id="c3" />
              <CardGrid />
              <div className="relative z-10 flex flex-col h-full">
                <CardHeader icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h13.8"/><path d="M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H3.2"/></svg>} color="bg-pink-400/10 text-pink-400" title="Structured Handoffs" />
                <p className="text-[11px] text-white/50 leading-snug mb-4">Move completed assets directly into campaign execution, outreach, email, and project workflows.</p>
                {/* Mobile */}
                <div className="lg:hidden flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5"><Image src={automation} alt="AI Automation" className="w-full h-auto" /></div>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5"><Image src={scrollBar} alt="Publish Progress" className="w-full h-auto" /></div>
                </div>
                {/* Desktop */}
                <div className="hidden lg:block relative flex-1 w-full mt-6">
                  <div className="absolute left-[58px] top-[15%] w-[460px] z-10 drop-shadow-2xl"><Image src={automation} alt="AI Automation Agencies" priority /></div>
                  <div className="absolute left-[-40px] bottom-[-2%] w-[380px] z-20 drop-shadow-2xl"><Image src={scrollBar} alt="Publish Progress" priority /></div>
                </div>
              </div>
            </div>

            {/* ── CARD 4: Centralized Asset Access ── */}
            <div className="relative rounded-[20px] border border-white/10 bg-[#0B1528]/60 backdrop-blur-md overflow-hidden p-6 lg:p-7 flex flex-col h-auto lg:h-[380px]">
              <CardGlow id="c4" />
              <CardGrid />
              <div className="relative z-10 flex flex-col h-full">
                <CardHeader icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>} color="bg-teal-400/10 text-teal-400" title="Centralized Asset Access" />
                <p className="text-[11px] text-white/50 leading-snug mb-4">Give the team one place to find the files and materials connected to the work.</p>
                {/* Mobile */}
                <div className="lg:hidden flex flex-col gap-3">
                  <button className="self-start bg-[#0F72D7] text-white px-4 py-2 rounded-[8px] font-bold text-[12px] flex items-center gap-2 shadow-[0_0_16px_rgba(15,114,215,0.4)]">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    New Folder
                  </button>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5"><Image src={linkedIn} alt="LinkedIn Assets" className="w-full h-auto" /></div>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5"><Image src={studio} alt="Studio Scripts" className="w-full h-auto" /></div>
                </div>
                {/* Desktop */}
                <div className="hidden lg:block relative flex-1 w-full mt-4">
                  <button className="absolute left-[45%] top-[35%] -translate-x-1/2 -translate-y-1/2 bg-[#0F72D7] text-white px-4 py-2.5 rounded-[6px] font-bold text-[13px] flex items-center gap-2 shadow-[0_0_20px_rgba(15,114,215,0.5)] z-20 whitespace-nowrap">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    New Folder
                  </button>
                  <div className="absolute right-[-45px] top-[15%] w-[220px] h-[200px] z-10 drop-shadow-2xl"><Image src={linkedIn} alt="LinkedIn Assets" priority /></div>
                  <div className="absolute left-[-5px] bottom-[-45px] w-[230px] z-10 drop-shadow-2xl"><Image src={studio} alt="Studio Scripts" priority /></div>
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
        <h3 className="text-[16px] font-semibold">{title}</h3>
      </div>
    );
  }