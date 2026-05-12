"use client";

import { Montserrat_Alternates } from 'next/font/google';

// Configure the font
const montserratAlt = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['600', '700'], // 600 is semi-bold
});

export default function Features() {
  return (
    <div
      className="relative w-full bg-[#01091E] text-white pb-10 overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* ── Background Glows (Preserved exactly with display toggles) ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:flex justify-center overflow-hidden">
        <svg width="1446" height="530" viewBox="0 0 1728 1168" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6" filter="url(#filter0_f_123_48913)" style={{ mixBlendMode: "plus-lighter" }}>
            <path d="M1371.61 -553.896C1644.95 -273.424 1639.17 175.53 1358.7 448.872C1078.22 722.213 629.269 716.432 355.928 435.96C82.5869 155.488 88.3677 -293.467 368.84 -566.808C649.313 -840.15 1098.27 -834.369 1371.61 -553.896Z" fill="url(#paint0_radial_123_48913)" />
          </g>
          <defs>
            <filter id="filter0_f_123_48913" x="-450.186" y="-1372.92" width="2627.91" height="2627.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="302.415" result="effect1_foregroundBlur_123_48913" />
            </filter>
            <radialGradient id="paint0_radial_123_48913" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(845.511 -78.6694) rotate(45.7377) scale(757.944 704.321)">
              <stop offset="0.303662" stopColor="#5BEC71" />
              <stop offset="0.870122" stopColor="#0F72D7" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-full h-[1076px] pointer-events-none z-0 flex md:hidden justify-center overflow-hidden">
        <svg width="430" height="626" className="w-full h-full" viewBox="0 0 430 1800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6" filter="url(#filter0_f_123_75770)" style={{ mixBlendMode: "plus-lighter" }}>
            <path d="M722.608 -553.896C995.95 -273.424 990.169 175.53 709.697 448.872C429.224 722.213 -19.7305 716.432 -293.072 435.96C-566.413 155.488 -560.632 -293.467 -280.16 -566.808C0.312524 -840.15 449.267 -834.369 722.608 -553.896Z" fill="url(#paint0_radial_123_75770)" />
          </g>
          <defs>
            <filter id="filter0_f_123_75770" x="-1099.19" y="-1372.92" width="2627.91" height="2627.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="302.415" result="effect1_foregroundBlur_123_75770" />
            </filter>
            <radialGradient id="paint0_radial_123_75770" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(196.511 -78.6694) rotate(45.7377) scale(757.944 704.321)">
              <stop offset="0.303662" stopColor="#5BEC71" />
              <stop offset="0.870122" stopColor="#0F72D7" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* ── Shared Grids (Preserved exactly) ── */}
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

      {/* ══════════════════════════════════════════════
          UNIFIED HERO CONTENT (Merged layout)
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-5 md:px-0 pt-14 md:pt-0 mx-auto md:mx-0 max-w-[480px] md:max-w-none md:h-[650px] lg:h-screen mt-0 md:mt-10 lg:mt-0">
        <div className="relative flex flex-col md:flex-row items-center w-full md:w-auto md:w-[1485px] md:min-h-[600px] md:justify-between md:scale-[0.5] lg:scale-[0.65] xl:scale-[0.8] 2xl:scale-100 origin-center z-10">
          
          {/* ── Left Text Content ── */}
          <div className="flex flex-col flex-shrink-0 w-[92%] md:w-[650px] md:h-[411px] items-center md:items-start text-center md:text-left justify-center mb-22 md:mb-0 md:pl-4 md:-translate-y-[20px]">
            <div className="inline-flex items-center justify-center px-4 py-1.5 md:py-2 border border-white/20 rounded-full bg-transparent md:bg-[#FFFFFF08] mb-5 text-[11px] md:text-[13.5px] font-medium text-white/70 tracking-wide w-max">
              CRM & Pipelines
            </div>
            <h1 className="text-[23px] sm:text-[28px] md:text-[52px] lg:text-[55px] font-medium leading-[1.35] md:leading-[1.15] text-white mb-4 md:mb-6">
              Your pipeline runs <br />
              inside your{" "}
              <span className={`${montserratAlt.className} font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#0E78E9]`}>
                AI system
              </span>
            </h1>
            <p className="text-[12.2px] md:text-[14px] font-light text-white md:text-white/70 leading-[1.25] md:leading-[1.7] max-w-[300px] md:max-w-[480px] mx-auto md:mx-0 mb-3 md:mb-8">
              Leads, opportunities, and follow-ups stay connected—so execution
              and revenue move together.
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-3 md:gap-4">
              <button className="px-6.5 md:px-6 py-1.5 md:py-3 rounded-[6px] md:rounded-lg text-[10px] md:text-[13px] font-medium text-white/90 bg-[#1e2e46] hover:bg-[#2a4060] cursor-pointer transition-all border border-white/5 shadow-sm scale-[1.1] md:scale-100">
                Book Demo
              </button>
              <button className="flex items-center cursor-pointer gap-2 px-6 md:px-8 py-2 md:py-3 rounded-[7px] md:rounded-lg text-[12px] md:text-[13px] font-semibold text-[#020a16] bg-white hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] scale-[0.86] md:scale-100">
                View Pricing
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Right Floating Elements (CRM Workspace UI) ── */}
          <div className="flex w-full md:w-auto flex-shrink-0 justify-center items-center overflow-hidden py-4 md:py-0 h-[280px] sm:h-[450px] md:h-[497px]">
            <div className="origin-center scale-[0.38] sm:scale-[0.5] md:scale-[1]">
              <div className="relative flex-shrink-0 w-[796px] h-[497px]">
                
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" fill="none">
                  <path d="M 150 145 L 68 145 L 68 104" stroke="#5BEC71" strokeWidth="1.5" strokeOpacity="0.8" />
                  <path d="M 220 420 L 220 450 L 92 450 L 92 414" stroke="#5BEC71" strokeWidth="1.5" strokeOpacity="0.8" />
                  <path d="M 610 80 L 610 0 L 702 0 L 702 60" stroke="#0E78E9" strokeWidth="1.5" strokeOpacity="0.8" />
                </svg>

                {/* Top-Left Box (LET) */}
                <div
                  className="absolute top-[35px] left-[35px] w-16 h-16 rounded-[14px] bg-[#FFEAF3] flex items-center justify-center shadow-[0_0_20px_rgba(255,107,107,0.15)] z-20 border border-white/10"
                  style={{ boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.8), 0 10px 20px rgba(0, 0, 0, 0.2)" }}
                >
                  <svg width="35" height="35" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.8752 22.3807V10.3296C37.8752 9.41637 37.5124 8.54058 36.8667 7.89486C36.221 7.24914 35.3452 6.88638 34.432 6.88638H6.88654C5.97335 6.88638 5.09757 7.24914 4.45184 7.89486C3.80612 8.54058 3.44336 9.41637 3.44336 10.3296V30.9886C3.44336 32.8824 4.99279 34.4318 6.88654 34.4318H20.6593" stroke="url(#paint0_linear_303_14611)" strokeWidth="3.44318" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37.8752 12.0511L22.4325 21.8642C21.901 22.1972 21.2865 22.3738 20.6593 22.3738C20.0321 22.3738 19.4175 22.1972 18.886 21.8642L3.44336 12.0511" stroke="url(#paint1_linear_303_14611)" strokeWidth="3.44318" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27.5469 32.7102L30.9901 36.1534L37.8764 29.2671" stroke="url(#paint2_linear_303_14611)" strokeWidth="3.44318" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_303_14611" x1="37.8752" y1="6.88638" x2="9.76676" y2="40.7519" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA9CF" /><stop offset="1" stopColor="#C62943" /></linearGradient>
                      <linearGradient id="paint1_linear_303_14611" x1="37.8752" y1="12.0511" x2="31.7964" y2="31.5944" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA9CF" /><stop offset="1" stopColor="#C62943" /></linearGradient>
                      <linearGradient id="paint2_linear_303_14611" x1="37.8764" y1="29.2671" x2="31.1867" y2="38.9389" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA9CF" /><stop offset="1" stopColor="#C62943" /></linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Bottom-Left Box (CAL) */}
                <div
                  className="absolute top-[395px] left-[80px] w-16 h-16 rounded-[14px] bg-[#FFF5E6] flex items-center justify-center shadow-[0_0_20px_rgba(255,159,67,0.15)] z-30 border border-white/10"
                  style={{ boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}
                >
                  <svg width="35" height="35" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.25 7H8.75C6.817 7 5.25 8.567 5.25 10.5V35C5.25 36.933 6.817 38.5 8.75 38.5H33.25C35.183 38.5 36.75 36.933 36.75 35V10.5C36.75 8.567 35.183 7 33.25 7Z" stroke="url(#paint0_linear_303_14619)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 3.5V10.5" stroke="url(#paint1_linear_303_14619)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 3.5V10.5" stroke="url(#paint2_linear_303_14619)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.25 17.5H36.75" stroke="url(#paint3_linear_303_14619)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 24.5H14.0175" stroke="url(#paint4_linear_303_14619)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 24.5H21.0175" stroke="url(#paint5_linear_303_14619)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 24.5H28.0175" stroke="url(#paint6_linear_303_14619)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 31.5H14.0175" stroke="url(#paint7_linear_303_14619)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 31.5H21.0175" stroke="url(#paint8_linear_303_14619)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 31.5H28.0175" stroke="url(#paint9_linear_303_14619)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_303_14619" x1="36.75" y1="7" x2="9.1875" y2="40.4688" gradientUnits="userSpaceOnUse"><stop stopColor="#FF8853" /><stop offset="1" stopColor="#FF755F" /></linearGradient>
                      <linearGradient id="paint1_linear_303_14619" x1="29" y1="3.5" x2="26.8981" y2="3.86462" gradientUnits="userSpaceOnUse"><stop stopColor="#FF8853" /><stop offset="1" stopColor="#FF755F" /></linearGradient>
                      <linearGradient id="paint2_linear_303_14619" x1="15" y1="3.5" x2="12.8981" y2="3.86462" gradientUnits="userSpaceOnUse"><stop stopColor="#FF8853" /><stop offset="1" stopColor="#FF755F" /></linearGradient>
                      <linearGradient id="paint3_linear_303_14619" x1="36.75" y1="17.5" x2="36.7034" y2="19.2819" gradientUnits="userSpaceOnUse"><stop stopColor="#FF8853" /><stop offset="1" stopColor="#FF755F" /></linearGradient>
                      <linearGradient id="paint4_linear_303_14619" x1="14.0175" y1="24.5" x2="13.9796" y2="24.5008" gradientUnits="userSpaceOnUse"><stop stopColor="#FF8853" /><stop offset="1" stopColor="#FF755F" /></linearGradient>
                      <linearGradient id="paint5_linear_303_14619" x1="21.0175" y1="24.5" x2="20.9796" y2="24.5008" gradientUnits="userSpaceOnUse"><stop stopColor="#FF8853" /><stop offset="1" stopColor="#FF755F" /></linearGradient>
                      <linearGradient id="paint6_linear_303_14619" x1="28.0175" y1="24.5" x2="27.9796" y2="24.5008" gradientUnits="userSpaceOnUse"><stop stopColor="#FF8853" /><stop offset="1" stopColor="#FF755F" /></linearGradient>
                      <linearGradient id="paint7_linear_303_14619" x1="14.0175" y1="31.5" x2="13.9796" y2="31.5008" gradientUnits="userSpaceOnUse"><stop stopColor="#FF8853" /><stop offset="1" stopColor="#FF755F" /></linearGradient>
                      <linearGradient id="paint8_linear_303_14619" x1="21.0175" y1="31.5" x2="20.9796" y2="31.5008" gradientUnits="userSpaceOnUse"><stop stopColor="#FF8853" /><stop offset="1" stopColor="#FF755F" /></linearGradient>
                      <linearGradient id="paint9_linear_303_14619" x1="28.0175" y1="31.5" x2="27.9796" y2="31.5008" gradientUnits="userSpaceOnUse"><stop stopColor="#FF8853" /><stop offset="1" stopColor="#FF755F" /></linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Top-Right Box (GEAR) */}
                <div
                  className="absolute top-[35px] left-[670px] w-16 h-16 rounded-[14px] bg-[#EAF4FF] flex items-center justify-center shadow-[0_0_20px_rgba(84,160,255,0.15)] z-30 border border-white/10"
                  style={{ boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}
                >
                  <svg width="35" height="35" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.3845 3.5H20.6145C19.6863 3.5 18.796 3.86875 18.1396 4.52513C17.4833 5.1815 17.1145 6.07174 17.1145 7V7.315C17.1139 7.92877 16.9519 8.53158 16.6447 9.06297C16.3375 9.59435 15.8961 10.0356 15.3645 10.3425L14.612 10.78C14.0799 11.0872 13.4764 11.2489 12.862 11.2489C12.2476 11.2489 11.6441 11.0872 11.112 10.78L10.8495 10.64C10.0464 10.1767 9.09223 10.051 8.19652 10.2905C7.30081 10.5301 6.53673 11.1152 6.07202 11.9175L5.68702 12.5825C5.22372 13.3856 5.09804 14.3398 5.33755 15.2355C5.57707 16.1312 6.1622 16.8953 6.96452 17.36L7.22702 17.535C7.756 17.8404 8.19585 18.2789 8.50285 18.807C8.80986 19.335 8.97333 19.9342 8.97702 20.545V21.4375C8.97946 22.0542 8.8189 22.6607 8.51159 23.1954C8.20428 23.7301 7.76113 24.1741 7.22702 24.4825L6.96452 24.64C6.1622 25.1047 5.57707 25.8688 5.33755 26.7645C5.09804 27.6602 5.22372 28.6144 5.68702 29.4175L6.07202 30.0825C6.53673 30.8848 7.30081 31.4699 8.19652 31.7095C9.09223 31.949 10.0464 31.8233 10.8495 31.36L11.112 31.22C11.6441 30.9128 12.2476 30.7511 12.862 30.7511C13.4764 30.7511 14.0799 30.9128 14.612 31.22L15.3645 31.6575C15.8961 31.9644 16.3375 32.4057 16.6447 32.937C16.9519 33.4684 17.1139 34.0712 17.1145 34.685V35C17.1145 35.9283 17.4833 36.8185 18.1396 37.4749C18.796 38.1313 19.6863 38.5 20.6145 38.5H21.3845C22.3128 38.5 23.203 38.1313 23.8594 37.4749C24.5158 36.8185 24.8845 35.9283 24.8845 35V34.685C24.8851 34.0712 25.0472 33.4684 25.3543 32.937C25.6615 32.4057 26.103 31.9644 26.6345 31.6575L27.387 31.22C27.9191 30.9128 28.5226 30.7511 29.137 30.7511C29.7514 30.7511 30.3549 30.9128 30.887 31.22L31.1495 31.36C31.9526 31.8233 32.9068 31.949 33.8025 31.7095C34.6982 31.4699 35.4623 30.8848 35.927 30.0825L36.312 29.4C36.7753 28.5969 36.901 27.6427 36.6615 26.747C36.422 25.8513 35.8368 25.0872 35.0345 24.6225L34.772 24.4825C34.2379 24.1741 33.7947 23.7301 33.4874 23.1954C33.1801 22.6607 33.0196 22.0542 33.022 21.4375V20.5625C33.0196 19.9458 33.1801 19.3393 33.4874 18.8046C33.7947 18.2699 34.2379 17.8259 34.772 17.5175L35.0345 17.36C35.8368 16.8953 36.422 16.1312 36.6615 15.2355C36.901 14.3398 36.7753 13.3856 36.312 12.5825L35.927 11.9175C35.4623 11.1152 34.6982 10.5301 33.8025 10.2905C32.9068 10.051 31.9526 10.1767 31.1495 10.64L30.887 10.78C30.3549 11.0872 29.7514 11.2489 29.137 11.2489C28.5226 11.2489 27.9191 11.0872 27.387 10.78L26.6345 10.3425C26.103 10.0356 25.6615 9.59435 25.3543 9.06297C25.0472 8.53158 24.8851 7.92877 24.8845 7.315V7C24.8845 6.07174 24.5158 5.1815 23.8594 4.52513C23.203 3.86875 22.3128 3.5 21.3845 3.5Z" stroke="url(#paint0_linear_303_14614)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 26.25C23.8995 26.25 26.25 23.8995 26.25 21C26.25 18.1005 23.8995 15.75 21 15.75C18.1005 15.75 15.75 18.1005 15.75 21C15.75 23.8995 18.1005 26.25 21 26.25Z" stroke="url(#paint1_linear_303_14614)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_303_14614" x1="36.7803" y1="3.5" x2="5.70428" y2="37.528" gradientUnits="userSpaceOnUse"><stop stopColor="#ACD5FF" /><stop offset="1" stopColor="#003F9D" /></linearGradient>
                      <linearGradient id="paint1_linear_303_14614" x1="26.25" y1="15.75" x2="17.0625" y2="26.9063" gradientUnits="userSpaceOnUse"><stop stopColor="#ACD5FF" /><stop offset="1" stopColor="#003F9D" /></linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Main CRM Card Container (Merged Styles) */}
                <div className="absolute top-[80px] left-[140px] z-20 rounded-[20px] border-none w-[520px] md:w-[540px] h-[340px] shadow-[0_0_30px_rgba(255,255,255,0.25)] md:shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_4px_4px_36px_rgba(117,186,255,0.12),inset_4px_4px_36px_rgba(91,236,113,0.05)] md:backdrop-blur-md">
                  <div className="relative w-full h-full rounded-[20px] bg-[#0A1325] border border-white/5 p-8 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    
                    {/* Background SVG Mobile */}
                    <svg className="absolute top-0 left-0 z-0 opacity-90 pointer-events-none md:hidden" width="60%" height="60%" viewBox="0 0 316 205" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <g opacity="0.6" filter="url(#filter0_f_303_14574_mob)">
                        <path d="M221.555 -50.7261C221.555 38.4702 149.247 110.778 60.051 110.778C-29.1452 110.778 -101.453 38.4702 -101.453 -50.7261C-101.453 -139.922 -29.1452 -212.23 60.051 -212.23C149.247 -212.23 221.555 -139.922 221.555 -50.7261Z" fill="url(#paint0_radial_303_14574_mob)" />
                      </g>
                      <defs>
                        <filter id="filter0_f_303_14574_mob" x="-194.955" y="-305.733" width="510.013" height="510.013" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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

                    <div className="relative z-10 flex flex-col justify-between h-full text-white font-medium">
                      {/* Top: Profile Info */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          {/* Avatar Merged */}
                          <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-[18px] shadow-sm bg-gradient-to-l from-[#FF8853] to-[#FF5001] md:bg-none md:bg-[#FF7A00]">
                            AD
                          </div>
                          <div className="flex flex-col items-start md:items-stretch">
                            <span className="text-[23px] md:text-[20px] font-medium text-white mb-0.5">Alice Davis</span>
                            <span className="text-[19px] md:text-[16px] font-light text-white">Company Name</span>
                          </div>
                        </div>
                        <div className="px-5 py-1.5 rounded-full text-[13px] font-semibold text-[#3AC750] bg-[#D2FFD9] border md:border-none shadow-sm backdrop-blur-sm">
                          Active
                        </div>
                      </div>

                      {/* Middle: Stats */}
                      <div className="grid grid-cols-3 gap-7 w-full mt-8">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[13px] text-white font-medium tracking-wide">Position</span>
                          <span className="text-[17px] font-light text-white/90">CEO</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[13px] text-white font-medium tracking-wide">Source</span>
                          <span className="text-[17px] font-light text-white/90">Apollo_search</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[13px] text-white font-medium tracking-wide">Last Active</span>
                          <span className="text-[17px] font-light text-white/90">08/11/2025</span>
                        </div>
                      </div>

                      {/* Bottom: Pipeline Stage */}
                      <div>
                        <div className="w-full h-px bg-white/50 mb-6"></div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[16px] text-white/90">
                            Stage:
                            <div className="flex items-center gap-2 ml-1 text-white font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></div>
                              Contact
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <button className="px-6 py-2 rounded-full text-[13px] font-medium text-white/80 bg-[#162032]/90 border border-white/5 hover:bg-white/5 transition-colors">
                              Open
                            </button>
                            <button className="px-6 py-2 rounded-full text-[13px] font-semibold text-[#020a16] bg-[#3AC750] shadow-[0_0_20px_rgba(91,236,113,0.3)]">
                              Won
                            </button>
                            <button className="px-6 py-2 rounded-full text-[13px] font-medium text-white/80 bg-[#162032] border border-white/5 hover:bg-white/5 transition-colors">
                              Lost
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* + Add Company Button */}
                  <button className="absolute -bottom-[30px] -right-[95px] flex items-center gap-2 px-6 py-2 rounded-[10px] text-[14px] text-white z-30 bg-gradient-to-t from-[#5BEC71] to-[#0F72D7] shadow-[0_10px_30px_rgba(0,163,255,0.4)] hover:scale-105 transition-transform cursor-pointer border border-white/10">
                    <span className="text-lg leading-none font-light">+</span> Add Company
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}