import { CardHeader } from "../Cards";

export default function FollowUpCard() {
  return (
    <div className="relative rounded-[20px] border border-white/10 bg-[#01091E] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_4px_4px_36px_rgba(117,186,255,0.12),inset_4px_4px_36px_rgba(91,236,113,0.05)] backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-300 ease-in-out p-6 lg:p-7 flex flex-col h-[220px] sm:h-[320px] md:h-[350px] lg:h-[430px]">
      
      {/* ── Background SVG Glow ── */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none z-0 opacity-40">
        <svg
          width="900"
          height="480"
          viewBox="0 0 332 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2" filter="url(#filter0_f_303_14675)">
            <path
              d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z"
              fill="url(#paint0_radial_303_14675)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_303_14675"
              x="-9.15527e-05"
              y="-35.9474"
              width="817.895"
              height="817.895"
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
                stdDeviation="74.9737"
                result="effect1_foregroundBlur_303_14675"
              />
            </filter>
            <radialGradient
              id="paint0_radial_303_14675"
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
    className="absolute bottom-0 -right-2 pointer-events-none w-[80%] h-[80%] opacity-60 block md:hidden"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.08) 2px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 2px, transparent 1px)
      `,
      backgroundSize: "40px 40px", /* Scaled down for mobile */
      backgroundPosition: "left bottom",
      maskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)",
      WebkitMaskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)",
    }}
  />

  {/* ── DESKTOP GRID (Hidden on Mobile) ── */}
  <div
    className="absolute bottom-0 -right-2 pointer-events-none w-[80%] h-[80%] opacity-60 hidden md:block"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.08) 4px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 4px, transparent 1px)
      `,
      backgroundSize: "60px 60px", /* Original desktop size */
      backgroundPosition: "left bottom",
      maskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)",
      WebkitMaskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)",
    }}
      />
    </>

      {/* ── Content Wrapper ── */}
      <div className="relative z-10 flex flex-col h-full">
        <CardHeader
          icon={
           <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="38" height="38" rx="5.4" fill="url(#paint0_linear_303_15015)"/>
            <path d="M21.4993 10.6666H16.4993C16.0391 10.6666 15.666 11.0397 15.666 11.5V13.1666C15.666 13.6269 16.0391 14 16.4993 14H21.4993C21.9596 14 22.3327 13.6269 22.3327 13.1666V11.5C22.3327 11.0397 21.9596 10.6666 21.4993 10.6666Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.334 12.3334H24.0007C24.4427 12.3334 24.8666 12.509 25.1792 12.8215C25.4917 13.1341 25.6673 13.558 25.6673 14V25.6667C25.6673 26.1087 25.4917 26.5327 25.1792 26.8452C24.8666 27.1578 24.4427 27.3334 24.0007 27.3334H14.0007C13.5586 27.3334 13.1347 27.1578 12.8221 26.8452C12.5096 26.5327 12.334 26.1087 12.334 25.6667V14C12.334 13.558 12.5096 13.1341 12.8221 12.8215C13.1347 12.509 13.5586 12.3334 14.0007 12.3334H15.6673" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5 20.6667L18.1667 22.3333L21.5 19" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear_303_15015" x1="30.875" y1="-1.64565e-06" x2="4.75" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFCC9C"/>
                <stop offset="1" stopColor="#FF8853"/>
              </linearGradient>
            </defs>
          </svg>
          }
          color="bg-transparent"
          title="Follow-Up Control"
        />
        <p className="text-[11.5px] md:text-[14px] text-white/80 leading-[1.2] md:leading-[1.6] md:mb-6 mt-1">
          Reduce missed handoffs by making pipeline activity easier to manage across contributors.
        </p>

        {/* ── Timeline Area ── */}
        <div className="relative flex-1 w-full mt-4 md:mt-2">
          
          {/* SCALING WRAPPER: Locks internal dimensions so flex works correctly, then scales down for mobile */}
          <div className="relative w-full min-w-[380px] h-[280px] md:min-w-0 md:h-full origin-top-left scale-[0.38] sm:scale-[0.8] md:scale-[0.85] lg:scale-100 flex flex-col justify-between max-w-[400px] translate-x-5 md:translate-x-0 -translate-y-1 ">
            
            {/* Vertical Dashed Line */}
            <div className="absolute left-[62px] top-[28px] bottom-[24px] border-l-[2px] border-dashed border-[#FFFFFF]/25 z-0"></div>

            {/* Row 1: Email */}
            <div className="relative z-10 flex items-center gap-8 w-full mb-5 left-[10%]">
              <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#CCFFD4] to-[#2EB0D7] flex items-center justify-center shrink-0 shadow-lg border-2 border-[#01091E]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.333 0.833984C13.793 0.834248 14.166 1.20692 14.166 1.66699V2.5H15.834C17.2144 2.50026 18.3338 3.61959 18.334 5V16.666C18.334 18.0466 17.2145 19.1658 15.834 19.166H4.16797C2.78726 19.166 1.66797 18.0467 1.66797 16.666V5C1.66813 3.61943 2.78736 2.5 4.16797 2.5H5.83594V1.66699C5.83594 1.20675 6.20871 0.833984 6.66895 0.833984C7.12896 0.834248 7.50195 1.20692 7.50195 1.66699V2.5H12.5V1.66699C12.5 1.20675 12.8728 0.833984 13.333 0.833984ZM3.33398 16.666C3.33398 17.1263 3.70773 17.5 4.16797 17.5H15.834C16.294 17.4997 16.668 17.1261 16.668 16.666V9.16602H3.33398V16.666ZM6.67773 14.167C7.13754 14.1675 7.51074 14.5401 7.51074 15C7.51074 15.4599 7.13754 15.8325 6.67773 15.833H6.66895C6.20871 15.833 5.83594 15.4602 5.83594 15C5.83594 14.5398 6.20871 14.167 6.66895 14.167H6.67773ZM10.0098 14.167C10.4696 14.1675 10.8428 14.5401 10.8428 15C10.8428 15.4599 10.4696 15.8325 10.0098 15.833H10.001C9.54074 15.833 9.16797 15.4602 9.16797 15C9.16797 14.5398 9.54074 14.167 10.001 14.167H10.0098ZM13.3418 14.167C13.8016 14.1675 14.1748 14.5401 14.1748 15C14.1748 15.4599 13.8016 15.8325 13.3418 15.833H13.333C12.8728 15.833 12.5 15.4602 12.5 15C12.5 14.5398 12.8728 14.167 13.333 14.167H13.3418ZM6.67773 10.834C7.13754 10.8345 7.51074 11.2071 7.51074 11.667C7.51058 12.1268 7.13744 12.4995 6.67773 12.5H6.66895C6.20881 12.5 5.8361 12.1271 5.83594 11.667C5.83594 11.2068 6.20871 10.834 6.66895 10.834H6.67773ZM10.0098 10.834C10.4696 10.8345 10.8428 11.2071 10.8428 11.667C10.8426 12.1268 10.4695 12.4995 10.0098 12.5H10.001C9.54084 12.5 9.16813 12.1271 9.16797 11.667C9.16797 11.2068 9.54074 10.834 10.001 10.834H10.0098ZM13.3418 10.834C13.8016 10.8345 14.1748 11.2071 14.1748 11.667C14.1746 12.1268 13.8015 12.4995 13.3418 12.5H13.333C12.8729 12.5 12.5002 12.1271 12.5 11.667C12.5 11.2068 12.8728 10.834 13.333 10.834H13.3418ZM4.16797 4.16602C3.70783 4.16602 3.33415 4.5399 3.33398 5V7.5H16.668V5C16.6678 4.54007 16.2939 4.16628 15.834 4.16602H14.166V5C14.1659 5.45993 13.7929 5.83372 13.333 5.83398C12.8729 5.83398 12.5002 5.4601 12.5 5V4.16602H7.50195V5C7.50179 5.45993 7.12886 5.83372 6.66895 5.83398C6.20881 5.83398 5.8361 5.4601 5.83594 5V4.16602H4.16797Z" fill="white"/>
                </svg>
              </div>
              <div className="flex-1 bg-white rounded-[14px] px-5 py-3 shadow-xl transition-transform top-[5%] scale-[0.90]" style={{boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)"}}>
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-[13.5px] text-[#01091E] leading-tight">Email sent</span>
                    <span className="text-[12.5px] text-gray-500">Proposal follow-up</span>
                  </div>
                  <span className="bg-[#D4F7D9] text-[#128B2B] text-[9px] font-bold px-2.5 py-0.5 rounded-full">Completed</span>
                </div>
                <div className="flex items-center gap-1.5 mt-2.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="text-[10.5px] text-gray-400 font-medium">James Carter</span>
                </div>
              </div> 
            </div>

            {/* Row 2: Call */}
            <div className="relative z-10 flex items-center gap-8 w-full mb-5 left-[10%] top-[4%]">
              <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#B8A4FF] to-[#6B31B6] flex items-center justify-center shrink-0 shadow-lg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_303_15040)">
                <path d="M18.3312 14.1V16.6C18.3322 16.8321 18.2846 17.0618 18.1917 17.2745C18.0987 17.4871 17.9623 17.678 17.7913 17.8349C17.6203 17.9918 17.4184 18.1113 17.1985 18.1856C16.9787 18.26 16.7457 18.2876 16.5146 18.2667C13.9503 17.9881 11.4871 17.1118 9.32291 15.7084C7.30943 14.4289 5.60236 12.7219 4.32291 10.7084C2.91456 8.53438 2.03811 6.0592 1.76458 3.48337C1.74375 3.25293 1.77114 3.02067 1.84499 2.80139C1.91885 2.58211 2.03755 2.38061 2.19355 2.20972C2.34954 2.03883 2.53941 1.9023 2.75107 1.80881C2.96272 1.71532 3.19153 1.66692 3.42291 1.66671H5.92291C6.32733 1.66273 6.7194 1.80594 7.02604 2.06965C7.33269 2.33336 7.53297 2.69958 7.58958 3.10004C7.6951 3.9001 7.89078 4.68565 8.17291 5.44171C8.28503 5.73998 8.30929 6.06414 8.24283 6.37577C8.17637 6.68741 8.02196 6.97347 7.79791 7.20004L6.73958 8.25837C7.92587 10.3447 9.65329 12.0721 11.7396 13.2584L12.7979 12.2C13.0245 11.976 13.3105 11.8216 13.6222 11.7551C13.9338 11.6887 14.258 11.7129 14.5562 11.825C15.3123 12.1072 16.0979 12.3029 16.8979 12.4084C17.3027 12.4655 17.6724 12.6694 17.9367 12.9813C18.201 13.2932 18.3414 13.6914 18.3312 14.1Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_303_15040">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              </div>
              <div className="flex-1 bg-white rounded-[14px] px-5 py-3 shadow-xl transition-transform scale-[0.90]" style={{boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)"}}>
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-[13.5px] text-[#01091E] leading-tight">Call logged</span>
                    <span className="text-[12.5px] text-gray-500 mt-0.5">Discussed next steps</span>
                  </div>
                  <span className="bg-[#D4F7D9] text-[#128B2B] text-[9px] font-bold px-2.5 py-0.5 rounded-full">Completed</span>
                </div>
                <div className="flex items-center gap-1.5 mt-2.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                  <span className="text-[10.5px] text-gray-400 font-medium">Interested in implementation</span>
                </div>
              </div>
            </div>

            {/* Row 3: LinkedIn */}
            <div className="relative z-10 flex items-center gap-8 w-full left-[10%] top-[6%]">
              <div className="w-[48px] h-[48px] rounded-full items-center justify-center shrink-0 translate-y-1.5">
                <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="url(#paint0_linear_303_15053)"/>
                <path d="M27.334 20.6666C28.6601 20.6666 29.9318 21.1934 30.8695 22.1311C31.8072 23.0688 32.334 24.3405 32.334 25.6666V31.5H29.0007V25.6666C29.0007 25.2246 28.8251 24.8007 28.5125 24.4881C28.1999 24.1756 27.776 24 27.334 24C26.892 24 26.468 24.1756 26.1555 24.4881C25.8429 24.8007 25.6673 25.2246 25.6673 25.6666V31.5H22.334V25.6666C22.334 24.3405 22.8608 23.0688 23.7985 22.1311C24.7361 21.1934 26.0079 20.6666 27.334 20.6666Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.9993 21.5H15.666V31.5H18.9993V21.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.3327 19C18.2532 19 18.9993 18.2538 18.9993 17.3333C18.9993 16.4128 18.2532 15.6666 17.3327 15.6666C16.4122 15.6666 15.666 16.4128 15.666 17.3333C15.666 18.2538 16.4122 19 17.3327 19Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                <linearGradient id="paint0_linear_303_15053" x1="48" y1="-1.51992e-06" x2="6" y2="51" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ACD5FF"/>
                <stop offset="1" stopColor="#003F9D"/>
                </linearGradient>
                </defs>
                </svg>
              </div>
              <div className="flex-1 bg-white rounded-[14px] p-3.5 shadow-xl transition-transform scale-[0.90]" style={{boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)"}}>
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-[13.5px] text-[#01091E] leading-tight">LinkedIn connection</span>
                    <span className="text-[12.5px] text-gray-500 mt-0.5">Connect with James Carter</span>
                  </div>
                  <span className="bg-[#D4F7D9] text-[#128B2B] text-[9px] font-bold px-2.5 py-0.5 rounded-full">Completed</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}