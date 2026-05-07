import { CardHeader } from "../Cards";

export default function ClientVisibilityCard() {
  return (
    <div className="relative rounded-[20px] border border-white/10 bg-[#01091E] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_4px_4px_36px_rgba(117,186,255,0.12),inset_4px_4px_36px_rgba(91,236,113,0.05)] backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-300 ease-in-out p-6 lg:p-7 flex flex-col h-[220px] md:h-[350px] lg:h-[430px]">
      
      {/* ── Background SVG Glow ── */}
      <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
        <svg
          width="800"
          height="800"
          viewBox="0 0 800 800"
          className="h-[520px] md:h-[800px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6" filter="url(#filter0_f_123_client)">
            <path
              d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z"
              fill="url(#paint0_radial_123_client)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_123_client"
              x="-100"
              y="-100"
              width="1000"
              height="1000"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="80"
                result="effect1_foregroundBlur_123_client"
              />
            </filter>
            <radialGradient
              id="paint0_radial_123_client"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)"
            >
              <stop stopColor="#5BEC71" />
              <stop offset="1" stopColor="#0F72D7" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* ── Background Grid ── */}
      <>
        {/* ── MOBILE GRID (Hidden on Desktop) ── */}
        <div
          className="absolute bottom-0 -left-10 pointer-events-none w-[80%] h-[74%] block md:hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            backgroundPosition: "left bottom",
            maskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
          }}
        />

        {/* ── DESKTOP GRID (Hidden on Mobile) ── */}
        <div
          className="absolute bottom-0 -left-10 pointer-events-none w-[50%] h-[84%] hidden md:block"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 4px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 4px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            backgroundPosition: "left bottom",
            maskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
          }}
        />
      </>

      {/* ── Content Wrapper ── */}
      <div className="relative z-10 flex flex-col h-full">
        <CardHeader
          icon={
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="38" height="38" rx="8" fill="url(#paint0_linear_eye)" />
              <path d="M19 12C14.0294 12 10.5 19 10.5 19C10.5 19 14.0294 26 19 26C23.9706 26 27.5 19 27.5 19C27.5 19 23.9706 12 19 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="19" cy="19" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_eye" x1="19" y1="0" x2="19" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#63A2FF" />
                  <stop offset="1" stopColor="#0E4595" />
                </linearGradient>
              </defs>
            </svg>
          }
          color="bg-transparent"
          title="Client Visibility"
        />
        <p className="text-[11.5px] md:text-[14px] text-white/80 leading-[1.2] md:leading-[1.6] md:mb-6 mt-1">
          Give teams a shared view of conversations, status, and next steps.
        </p>

        {/* ── Visual Graphic Area ── */}
        <div className="relative flex-1 w-full flex items-center justify-center">
          <div className="absolute w-[600px] h-[226px] scale-[0.50] sm:scale-[0.65] md:scale-[0.80] lg:scale-[0.95] mt-12 origin-center">
            
            <svg className="absolute inset-0 w-full h-full top-[30%]" width="600" height="226" viewBox="0 0 600 226" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300.5" cy="365" r="364.383" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="12 12" />
            </svg>

            {/* Pill 1: Companys */}
            <div className="absolute flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_1.86px_1.86px_16.73px_0px_rgba(117,186,255,0.12),inset_1.86px_1.86px_16.73px_0px_rgba(91,236,113,0.05)] z-20 scale-[0.65] md:scale-[0.95] -translate-x-8 translate-y-6 md:-translate-x-0 md:translate-y-0"
                 style={{ left: "115px", top: "5px", transform: "translate(-50%, -50%)" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_303_14986)">
                  <path d="M5 18.3333V3.33329C5 3.10829 5 2.87496 5.05833 2.64996C5.10934 2.42548 5.22228 2.21981 5.38431 2.0563C5.54635 1.89279 5.75099 1.77799 5.975 1.72496C6.21667 1.66663 7.275 1.66663 7.5 1.66663H13.3333C13.5583 1.66663 13.7917 1.66663 14.0167 1.72496C14.2411 1.77597 14.4468 1.8889 14.6103 2.05094C14.7738 2.21298 14.8886 2.41762 14.9417 2.64163C15 2.87496 15 3.10829 15 3.33329V18.3333H5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.66592 11.6667V16.6667C1.66592 17.5833 2.41592 18.3333 3.33258 18.3333H4.99925V10H3.33258C3.10758 10 2.87425 10 2.64925 10.0583C2.42425 10.1167 2.21592 10.225 2.04925 10.3917C1.89092 10.55 1.78258 10.7583 1.72425 10.9833C1.67721 11.2079 1.65762 11.4374 1.66592 11.6667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.35 7.55835C17.1254 7.51131 16.896 7.49173 16.6667 7.50002H15V18.3334H16.6667C17.1087 18.3334 17.5326 18.1578 17.8452 17.8452C18.1577 17.5326 18.3333 17.1087 18.3333 16.6667V9.16669C18.3333 8.93336 18.3333 8.70836 18.275 8.48336C18.2167 8.25836 18.1083 8.05002 17.9417 7.88336C17.7833 7.72502 17.575 7.61669 17.35 7.55835Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.33594 5H11.6693" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.33594 8.33337H11.6693" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.33594 11.6666H11.6693" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.33594 15H11.6693" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_303_14986">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="font-medium text-white/90 tracking-wide">Companys: 12</span>
            </div>

            {/* Pill 2: New Lead Added */}
            <div className="absolute flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_1.86px_1.86px_16.73px_0px_rgba(117,186,255,0.12),inset_1.86px_1.86px_16.73px_0px_rgba(91,236,113,0.05)] z-20 scale-[0.75] md:scale-[0.95] -translate-y-9 md:translate-x-0 md:translate-y-0"
                 style={{ left: "280px", top: "190px", transform: "translate(-50%, -50%)" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8307 17.5V15.8333C15.8307 14.9493 15.4795 14.1014 14.8544 13.4763C14.2293 12.8512 13.3815 12.5 12.4974 12.5H7.4974C6.61334 12.5 5.76549 12.8512 5.14037 13.4763C4.51525 14.1014 4.16406 14.9493 4.16406 15.8333V17.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.9974 9.16667C11.8383 9.16667 13.3307 7.67428 13.3307 5.83333C13.3307 3.99238 11.8383 2.5 9.9974 2.5C8.15645 2.5 6.66406 3.99238 6.66406 5.83333C6.66406 7.67428 8.15645 9.16667 9.9974 9.16667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-medium text-white/90 tracking-wide">New Lead Added</span>
            </div>

            {/* Pill 3: Content Scheduled */}
            <div 
              className="absolute flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_1.86px_1.86px_16.73px_0px_rgba(117,186,255,0.12),inset_1.86px_1.86px_16.73px_0px_rgba(91,236,113,0.05)] z-20 scale-[0.85] md:scale-[0.95]"
              style={{ left: "450px", top: "-10px", transform: "translate(-50%, -50%)" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <g clipPath="url(#clip0_303_14976)">
                  <path d="M15.0013 5L5.83464 14.1667L1.66797 10" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.332 8.33325L12.082 14.5833L10.832 13.3333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_303_14976">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="font-light text-[13px] text-white tracking-wide whitespace-nowrap">
                Content Scheduled
              </span>
            </div>

            {/* Node 1: Chat (Pink) */}
            <div className="absolute w-[75px] h-[75px] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)] z-30" 
                 style={{ left: "90px", top: "130px", transform: "translate(-50%, -50%)", boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FFF0F4] to-[#FFE0EA] flex items-center justify-center shadow-[inset_0_-4px_10px_rgba(255,255,255,0.7)]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.6673 10.4167V18.9167C36.6673 21.0333 35.9673 22.8167 34.7173 24.05C33.484 25.3 31.7007 26 29.584 26V29.0167C29.584 30.15 28.3173 30.8334 27.384 30.2L25.7673 29.1333C25.9173 28.6167 25.984 28.05 25.984 27.45V20.6667C25.984 17.2667 23.7173 15 20.3173 15H9.00064C8.76731 15 8.55065 15.0167 8.33398 15.0334V10.4167C8.33398 6.16671 11.1673 3.33337 15.4173 3.33337H29.584C33.834 3.33337 36.6673 6.16671 36.6673 10.4167Z" stroke="url(#paint0_linear_303_14948)" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M25.984 20.6667V27.45C25.984 28.05 25.9173 28.6166 25.7673 29.1333C25.1507 31.5833 23.1173 33.1167 20.3173 33.1167H15.784L10.7506 36.4667C10.0006 36.9833 9.00064 36.4333 9.00064 35.5333V33.1167C7.30064 33.1167 5.88399 32.55 4.90066 31.5667C3.90066 30.5667 3.33398 29.15 3.33398 27.45V20.6667C3.33398 17.5 5.30065 15.3167 8.33398 15.0334C8.55065 15.0167 8.76731 15 9.00064 15H20.3173C23.7173 15 25.984 17.2667 25.984 20.6667Z" stroke="url(#paint1_linear_303_14948)" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_303_14948" x1="36.6673" y1="3.33337" x2="8.52353" y2="31.6851" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFA9CF"/>
                      <stop offset="1" stopColor="#C62943"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_303_14948" x1="25.984" y1="15" x2="3.49087" y2="37.6647" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFA9CF"/>
                      <stop offset="1" stopColor="#C62943"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Node 2: Bell (Green) */}
            <div className="absolute w-[75px] h-[75px] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)] z-30" 
                 style={{ left: "220px", top: "75px", transform: "translate(-50%, -50%)", boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#E8FAF4] to-[#D1F2E6] flex items-center justify-center shadow-[inset_0_-4px_10px_rgba(255,255,255,0.7)]">
                <svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.1165 32.498C18.5783 31.702 19.5977 31.4311 20.3939 31.8926C21.19 32.3544 21.4611 33.3737 20.9993 34.1699C20.5598 34.9275 19.9292 35.557 19.1702 35.9941C18.4114 36.4312 17.5508 36.6611 16.6751 36.6611C15.7993 36.6611 14.938 36.4313 14.179 35.9941C13.4201 35.5569 12.7894 34.9275 12.3499 34.1699C11.8884 33.3738 12.1595 32.3545 12.9554 31.8926C13.7515 31.4309 14.7709 31.702 15.2327 32.498C15.3792 32.7505 15.5903 32.9598 15.8431 33.1055C16.096 33.2511 16.3833 33.3281 16.6751 33.3281C16.9668 33.328 17.2534 33.251 17.5062 33.1055C17.7591 32.9598 17.97 32.7505 18.1165 32.498ZM16.6663 0C19.7604 0 22.7284 1.22929 24.9163 3.41699C27.1042 5.60483 28.3332 8.57293 28.3333 11.667C28.3333 17.2544 29.5279 20.7249 30.6292 22.7441C31.182 23.7575 31.721 24.4225 32.0951 24.8174C32.2822 25.015 32.4301 25.1467 32.5189 25.2207C32.5626 25.2572 32.5928 25.2803 32.6058 25.29C32.6085 25.2921 32.6106 25.294 32.6117 25.2949L32.7015 25.3604C33.2342 25.782 33.4605 26.4914 33.2611 27.1504C33.0481 27.853 32.4006 28.334 31.6663 28.334H1.66634C0.932219 28.3338 0.284569 27.8529 0.0716142 27.1504C-0.127691 26.4915 0.0985881 25.7819 0.631184 25.3604L0.721028 25.2949C0.72194 25.2941 0.723805 25.2923 0.726888 25.29C0.739689 25.2805 0.769609 25.2575 0.813802 25.2207C0.902495 25.1468 1.05017 25.0153 1.23763 24.8174C1.61166 24.4226 2.15053 23.7578 2.70345 22.7441C3.80481 20.7249 4.99935 17.2546 4.99935 11.667C4.99945 8.57293 6.2285 5.60483 8.41634 3.41699C10.6042 1.22915 13.5723 9.44456e-05 16.6663 0ZM0.733724 25.2852C0.731445 25.2867 0.729574 25.2889 0.727864 25.29L0.73763 25.2832C0.736385 25.284 0.734821 25.2844 0.733724 25.2852ZM32.6048 25.29C32.6032 25.2888 32.6011 25.2866 32.599 25.2852C32.5979 25.2846 32.5962 25.2839 32.5951 25.2832L32.5931 25.2812H32.5921L32.6048 25.29ZM16.6663 3.33398C14.4563 3.33408 12.3365 4.2117 10.7738 5.77441C9.21105 7.33713 8.33343 9.45699 8.33333 11.667C8.33333 17.7457 7.02781 21.7757 5.62923 24.3398C5.50228 24.5726 5.37335 24.792 5.24642 25H28.0863C27.9594 24.7921 27.8303 24.5725 27.7034 24.3398C26.3049 21.7757 24.9993 17.7455 24.9993 11.667C24.9993 9.45699 24.1216 7.33713 22.5589 5.77441C20.9961 4.21184 18.8763 3.33398 16.6663 3.33398Z" fill="url(#paint0_linear_303_14957)"/>
                  <defs>
                    <linearGradient id="paint0_linear_303_14957" x1="2.49996" y1="41.702" x2="38.1876" y2="3.35484" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5BEC71"/>
                      <stop offset="0.902778" stopColor="#0F72D7"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Node 3: Calendar (Orange) */}
            <div className="absolute w-[75px] h-[75px] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)] z-30" 
                 style={{ left: "380px", top: "75px", transform: "translate(-50%, -50%)", boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FFF5EC] to-[#FFE6D1] flex items-center justify-center shadow-[inset_0_-4px_10px_rgba(255,255,255,0.7)]">
                <svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.3311 0C24.2514 0 24.9978 0.746686 24.998 1.66699V3.33398H28.334C31.0951 3.33416 33.3338 5.57282 33.334 8.33398V31.668C33.3336 34.429 31.095 36.6678 28.334 36.668H5C2.23896 36.6678 0.000374151 34.429 0 31.668V8.33398C0.000175857 5.57282 2.23883 3.33416 5 3.33398H8.33594V1.66699C8.33614 0.746686 9.08258 0 10.0029 0C10.9233 0 11.6697 0.746686 11.6699 1.66699V3.33398H21.6641V1.66699C21.6643 0.746686 22.4107 0 23.3311 0ZM3.33398 31.668C3.33436 32.588 4.07991 33.3338 5 33.334H28.334C29.2541 33.3338 29.9996 32.588 30 31.668V16.668H3.33398V31.668ZM10.0195 26.667C10.94 26.667 11.6865 27.4135 11.6865 28.334C11.6865 29.2545 10.94 30.001 10.0195 30.001H10.0029C9.08245 30.001 8.33594 29.2545 8.33594 28.334C8.33594 27.4135 9.08245 26.667 10.0029 26.667H10.0195ZM16.6836 26.667C17.6041 26.667 18.3506 27.4135 18.3506 28.334C18.3506 29.2545 17.6041 30.001 16.6836 30.001H16.667C15.7465 30.001 15 29.2545 15 28.334C15 27.4135 15.7465 26.667 16.667 26.667H16.6836ZM23.3477 26.667C24.2681 26.667 25.0146 27.4135 25.0146 28.334C25.0146 29.2545 24.2681 30.001 23.3477 30.001H23.3311C22.4106 30.001 21.6641 29.2545 21.6641 28.334C21.6641 27.4135 22.4106 26.667 23.3311 26.667H23.3477ZM10.0195 20C10.9399 20 11.6863 20.7467 11.6865 21.667C11.6865 22.5875 10.94 23.334 10.0195 23.334H10.0029C9.08245 23.334 8.33594 22.5875 8.33594 21.667C8.33614 20.7467 9.08258 20 10.0029 20H10.0195ZM16.6836 20C17.6039 20 18.3504 20.7467 18.3506 21.667C18.3506 22.5875 17.6041 23.334 16.6836 23.334H16.667C15.7465 23.334 15 22.5875 15 21.667C15.0002 20.7467 15.7466 20 16.667 20H16.6836ZM23.3477 20C24.268 20 25.0145 20.7467 25.0146 21.667C25.0146 22.5875 24.2681 23.334 23.3477 23.334H23.3311C22.4106 23.334 21.6641 22.5875 21.6641 21.667C21.6643 20.7467 22.4107 20 23.3311 20H23.3477ZM5 6.66797C4.07978 6.66814 3.33416 7.41377 3.33398 8.33398V13.334H30V8.33398C29.9998 7.41377 29.2542 6.66815 28.334 6.66797H24.998V8.33398C24.9979 9.25431 24.2514 10 23.3311 10C22.4107 10 21.6642 9.25431 21.6641 8.33398V6.66797H11.6699V8.33398C11.6697 9.25431 10.9233 10 10.0029 10C9.08256 10 8.33611 9.25431 8.33594 8.33398V6.66797H5Z" fill="url(#paint0_linear_303_14963)"/>
                  <defs>
                    <linearGradient id="paint0_linear_303_14963" x1="33.334" y1="-1.16109e-06" x2="0.80188" y2="35.9115" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFCC9C"/>
                      <stop offset="1" stopColor="#FF755F"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Node 4: Checkmarks (Blue) */}
            <div className="absolute w-[75px] h-[75px] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)] z-30" 
                 style={{ left: "520px", top: "130px", transform: "translate(-50%, -50%)", boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)" }}>
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#F0F7FF] to-[#DDEBFF] flex items-center justify-center shadow-[inset_0_-4px_10px_rgba(255,255,255,0.7)]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.0026 10L11.6693 28.3333L3.33594 20" stroke="url(#paint0_linear_303_14951)" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36.6641 16.6666L24.1641 29.1666L21.6641 26.6666" stroke="url(#paint1_linear_303_14951)" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_303_14951" x1="30.0026" y1="10" x2="15.9871" y2="34.7547" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ACD5FF"/>
                      <stop offset="1" stopColor="#003F9D"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_303_14951" x1="36.6641" y1="16.6666" x2="26.2654" y2="31.8189" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ACD5FF"/>
                      <stop offset="1" stopColor="#003F9D"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}