export default function Cards() {
  return (
    <div className="bg-[#01091E] ">
      {/* ══════════════════════════════════════════════
          SECTION 2 — TEXT BLOCK
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 py-10 lg:py-16 px-5 lg:px-6 max-w-[1300px] mx-auto text-center lg:-mt-10">
        <h2 className="text-[22px] sm:text-[26px] lg:text-[38px] font-medium leading-[1.35] text-white mb-5">
          SEO only works when it's{" "}
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] via-[#0F72D7] to-[#003F9D]">
            connected
          </span>
        </h2>
        <p className="text-[13px] lg:text-[14px] font-light text-white/60 leading-[1.8] max-w-[1100px] mx-auto">
          Search-driven execution works best when it stays connected to content
          production, campaign timelines, and operational priorities. Amplitive
          helps teams keep SEO work visible alongside the projects, assets, and
          workflows it depends on instead of managing it in a separate silo.
        </p>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 — FEATURE CARDS
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto py-4 lg:py-12 px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* ── CARD 1: Search Visibility Management ── */}
          <div
            className="relative rounded-[20px] border border-white/10 bg-[#01091E] 
  shadow-[inset_4_5px_6px_rgba(255,255,255,0.1),0_20px_50px_rgba(0,0,0,0.5)] 
  backdrop-blur-md overflow-hidden p-6 lg:p-7 duration-300 ease-in-out 
  transition-all hover:border-white/20 flex flex-col h-[350px] lg:h-[400px]"
          >
            {/* ── Background SVG Glow (Bottom Right) ── */}
            <div className="absolute -bottom-20 -right-20 pointer-events-none z-0 opacity-40">
              <svg
                width="332"
                height="480"
                viewBox="0 0 332 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="blur-3xl"
              >
                <g opacity="0.6" filter="url(#filter0_f_bottom_glow)">
                  <path
                    d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z"
                    fill="url(#paint0_radial_bottom_glow)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_bottom_glow"
                    x="-9.15527e-05"
                    y="-35.9474"
                    width="817.895"
                    height="817.895"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="74.9737"
                      result="effect1_foregroundBlur_bottom_glow"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_bottom_glow"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)"
                  >
                    <stop stop-color="#5BEC71" />
                    <stop offset="1" stop-color="#0F72D7" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <CardGrid />

            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="38"
                      height="38"
                      rx="5.4"
                      fill="url(#paint0_linear_header)"
                    />
                    <path
                      d="M18.1667 24.8333C21.8486 24.8333 24.8333 21.8486 24.8333 18.1667C24.8333 14.4848 21.8486 11.5 18.1667 11.5C14.4848 11.5 11.5 14.4848 11.5 18.1667C11.5 21.8486 14.4848 24.8333 18.1667 24.8333Z"
                      stroke="white"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26.499 26.5L22.874 22.875"
                      stroke="white"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_header"
                        x1="38"
                        y1="-2.34991e-06"
                        x2="-1.425"
                        y2="38"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA9CF" />
                        <stop offset="1" stop-color="#C62943" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                color="bg-transparent"
                title="Search Visibility Management"
              />
              <p className="text-[12px] text-white/50 leading-relaxed mb-6">
                Keep SEO efforts organized inside the same system as the
                campaigns and content they influence.
              </p>

              <div className="relative flex-1 w-full flex items-center justify-center">
                {/* Search Bar Pill */}
                <div className="absolute top-[12%] left-[8%] md:left-[50%] md:top-10 md:right-[6%] bg-[#0c182e]/90 border border-white/10 rounded-full px-4 py-2 pr-8 flex items-center gap-2 text-[10px] text-white/60 shadow-lg z-20 transition-all">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Search SEO Campaign
                </div>

                {/* Campaign Card 1 */}
                <div className="absolute top-[45%] -left-[2%] md:top-3 md:left-[10%] max-w-[180px] bg-white rounded-[8px] p-3 shadow-xl z-10 scale-[0.8] md:scale-90 lg:scale-100 origin-top-left md:origin-center transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] text-gray-800 leading-tight">
                      Link Building
                      <br />
                      Campaign 1<br />
                      <span className="text-[8px] font-normal text-gray-400">
                        Track prospects
                      </span>
                    </div>
                    <span className="bg-green-100 text-green-600 text-[8px] px-2 py-0.5 rounded-full font-medium">
                      Active
                    </span>
                  </div>
                  <div className="w-full h-px bg-gray-100 my-2" />
                  <div className="text-[7px] text-gray-400 flex justify-between mb-1">
                    <span>Progress</span>
                    <span>4/10 links</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-[5px] mb-2">
                    <div className="bg-gradient-to-l from-[#FFA9CF] to-[#C62943] h-[5px] rounded-full w-[40%]"></div>
                  </div>
                  <div className="text-[7px] text-gray-300">
                    Created 4/14/2023
                  </div>
                </div>

                {/* Campaign Card 2 */}
                <div className="absolute top-[35%] -right-[5%] md:top-[45%] md:right-[15%] max-w-[200px] bg-white rounded-[8px] p-3 shadow-2xl z-30 scale-[0.85] md:scale-95 lg:scale-110 origin-bottom-right md:origin-center transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] text-gray-800 leading-tight">
                      Link Building
                      <br />
                      Campaign 2<br />
                      <span className="text-[8px] font-normal text-gray-400">
                        Track prospects
                      </span>
                    </div>
                    <span className="bg-green-100 text-green-600 text-[8px] px-2 py-0.5 rounded-full font-medium">
                      Active
                    </span>
                  </div>
                  <div className="w-full h-px bg-gray-100 my-2" />
                  <div className="text-[7px] text-gray-400 flex justify-between mb-1">
                    <span>Progress</span>
                    <span>8/10 links</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-[3px] mb-2">
                    <div className="bg-[#0F72D7] h-[3px] rounded-full w-[80%]"></div>
                  </div>
                  <div className="text-[7px] text-gray-300">
                    Created 4/16/2023
                  </div>
                </div>

                {/* Create New Box */}
                <div className="absolute bottom-[2%] left-[10%] md:bottom-[5%] md:left-[16.5%] w-[70px] h-[70px] rounded-[10px] border border-dashed border-white/30 bg-white/5 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-white/10 transition-all z-10 md:z-20 scale-[0.8] md:scale-100 origin-bottom-left md:origin-center">
                  <span className="text-white text-[20px] leading-none">+</span>
                  <span className="text-[9px] text-white/70 text-center leading-tight">
                    Create
                    <br />
                    New
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ── CARD 2: Task Alignment ── */}
<div className="relative rounded-[20px] border border-white/10 bg-[#01091E] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-300 ease-in-out p-6 lg:p-7 flex flex-col h-[350px] lg:h-[400px]">
  
  {/* ── Background SVG Glow (Brightness Reduced) ── */}
  {/* Lowered opacity to 30% and removed mix-blend-screen for a softer look */}
  <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
    <svg 
      width="800" 
      height="800" 
      viewBox="0 0 800 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6" filter="url(#filter0_f_123_62463)">
        <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_123_62463)"/>
      </g>
      <defs>
        <filter id="filter0_f_123_62463" x="-100" y="-100" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_123_62463"/>
        </filter>
        <radialGradient id="paint0_radial_123_62463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
          <stop stopColor="#5BEC71"/>
          <stop offset="1" stopColor="#0F72D7"/>
        </radialGradient>
      </defs>
    </svg>
  </div>

  {/* <CardGrid />  <-- Uncomment if you are using your grid component here */}

  {/* ── Content Wrapper ── */}
  <div className="relative z-10 flex flex-col h-full">
    <CardHeader
      icon={
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="38"
            height="38"
            rx="5.4"
            fill="url(#paint0_linear_123_49094)"
          />
          <path
            d="M16.5 18.1667L19 20.6667L27.3333 12.3334"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.5 19V24.8333C26.5 25.2754 26.3244 25.6993 26.0118 26.0118C25.6993 26.3244 25.2754 26.5 24.8333 26.5H13.1667C12.7246 26.5 12.3007 26.3244 11.9882 26.0118C11.6756 25.6993 11.5 25.2754 11.5 24.8333V13.1667C11.5 12.7246 11.6756 12.3007 11.9882 11.9882C12.3007 11.6756 12.7246 11.5 13.1667 11.5H22.3333"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_123_49094"
              x1="30.875"
              y1="-1.64565e-06"
              x2="4.75"
              y2="38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CCFFD4" />
              <stop offset="1" stopColor="#2EB0D7" />
            </linearGradient>
          </defs>
        </svg>
      }
      color="bg-transparent"
      title="Task Alignment"
    />
    <CardGrid/>
    <p className="text-[12px] text-white/50 leading-relaxed mb-6">
      Tie search priorities to the production and implementation work
      required to move them forward.
    </p>

    <div className="mt-2 space-y-5 lg:space-y-6 px-1">
      {/* Bar 1 */}
      <div className="w-full">
        <div className="text-[12px] text-white/70 mb-2">Total Keywords</div>
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 bg-white/10 rounded-full h-[6px]">
            <div
              className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[6px] rounded-full"
              style={{ width: "33%" }}
            ></div>
          </div>
          <span className="text-[13px] font-semibold text-white/80 text-right w-5 shrink-0">
            33
          </span>
        </div>
      </div>

      {/* Bar 2 */}
      <div className="w-full">
        <div className="text-[12px] text-white/70 mb-2">Total Backlinks</div>
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 bg-white/10 rounded-full h-[6px]">
            <div
              className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[6px] rounded-full"
              style={{ width: "56%" }}
            ></div>
          </div>
          <span className="text-[13px] font-semibold text-white/80 text-right w-5 shrink-0">
            56
          </span>
        </div>
      </div>

      {/* Bar 3 */}
      <div className="w-full">
        <div className="text-[12px] text-white/70 mb-2">Organic Traffic</div>
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 bg-white/10 rounded-full h-[6px]">
            <div
              className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[6px] rounded-full"
              style={{ width: "72%" }}
            ></div>
          </div>
          <span className="text-[13px] font-semibold text-white/80 text-right w-5 shrink-0">
            72
          </span>
        </div>
      </div>

      {/* Bar 4 */}
      <div className="w-full">
        <div className="text-[12px] text-white/70 mb-2">Health Score</div>
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 bg-white/10 rounded-full h-[6px]">
            <div
              className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[6px] rounded-full"
              style={{ width: "79%" }}
            ></div>
          </div>
          <span className="text-[13px] font-semibold text-white/80 text-right w-5 shrink-0">
            79
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
          {/* ── CARD 3: Project Coordination ── */}
          <div className="relative rounded-[20px] border border-white/10 bg-[#01091E] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-300 ease-in-out p-6 lg:p-7 flex flex-col h-[350px] lg:h-[400px]">
  
  {/* ── Background SVG Glow (Same as previous card) ── */}
  <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
    <svg 
      width="800" 
      height="800" 
      viewBox="0 0 800 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6" filter="url(#filter0_f_123_62463_proj)">
        <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_123_62463_proj)"/>
      </g>
      <defs>
        <filter id="filter0_f_123_62463_proj" x="-100" y="-100" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_123_62463_proj"/>
        </filter>
        <radialGradient id="paint0_radial_123_62463_proj" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
          <stop stopColor="#5BEC71"/>
          <stop offset="1" stopColor="#0F72D7"/>
        </radialGradient>
      </defs>
    </svg>
  </div>

  <CardGrid />

  {/* ── Content Wrapper ── */}
  <div className="relative z-10 flex flex-col h-full">
    <CardHeader
      icon={
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="38"
            height="38"
            rx="5.4"
            fill="url(#paint0_linear_123_49146)"
          />
          <path
            d="M12.333 27.3333H23.9997C24.4417 27.3333 24.8656 27.1577 25.1782 26.8451C25.4907 26.5326 25.6663 26.1087 25.6663 25.6666V15.25L21.083 10.6666H13.9997C13.5576 10.6666 13.1337 10.8422 12.8212 11.1548C12.5086 11.4673 12.333 11.8913 12.333 12.3333V15.6666"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.667 10.6666V15.6666H25.667"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 21.5L13.1667 23.1667L16.5 19.8334"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_123_49146"
              x1="38"
              y1="-1.20327e-06"
              x2="4.75"
              y2="40.375"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ACD5FF" />
              <stop offset="1" stopColor="#003F9D" />
            </linearGradient>
          </defs>
        </svg>
      }
      color="bg-transparent"
      title="Project Coordination"
    />
    <p className="text-[12px] text-white/50 leading-relaxed mb-6">
      Manage SEO initiatives with clearer ownership, timelines, and
      workflow structure.
    </p>

    <div className="relative flex-1 w-full flex flex-col items-center">
      {/* Nav Pills - Mobile scrollable, scaled font */}
      <div className="flex items-center gap-0.4 md:gap-4 text-[7.5px] md:text-[10px] text-white/60 bg-white/5 rounded-full px-0.5 py-0.5 border border-white/10 mb-8 mt-2 w-max max-w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <span className="bg-white text-black px-3 md:px-5 py-1 rounded-full font-medium whitespace-nowrap">
          All
        </span>
        <span className="px-2 md:px-0 whitespace-nowrap cursor-pointer hover:text-white transition-colors">
          Backlinks
        </span>
        <span className="px-2 md:px-0 whitespace-nowrap cursor-pointer hover:text-white transition-colors">
          Keywords
        </span>
        <span className="px-2 md:px-0 whitespace-nowrap cursor-pointer hover:text-white transition-colors">
          Content
        </span>
        <span className="px-2 md:px-0 whitespace-nowrap cursor-pointer hover:text-white transition-colors">
          On-Page
        </span>
      </div>

      {/* Task Cards */}
      <div className="relative w-full h-full">
        {/* Card 1 */}
        <div className="absolute top-[-22%] -left-[8%] md:top-[-2%] md:left-[2%] max-w-[240px] bg-white rounded-[10px] p-4 shadow-[0_10px_30px_rgba(255,255,255,0.1)] z-10 flex items-center gap-3 scale-[0.75] md:scale-100 origin-top-left md:origin-center transition-all">
          <div className="relative top-[-14px] shrink-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="23.199"
                height="23.199"
                rx="3.47985"
                fill="url(#paint0_linear_123_49170)"
              />
              <path
                d="M10.1498 14.0162H9.18317C8.54225 14.0162 7.92759 13.7616 7.4744 13.3084C7.0212 12.8552 6.7666 12.2406 6.7666 11.5997C6.7666 10.9588 7.0212 10.3441 7.4744 9.8909C7.92759 9.43771 8.54225 9.18311 9.18317 9.18311H10.1498"
                stroke="white"
                strokeWidth="0.966626"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.0498 9.18311H14.0164C14.6573 9.18311 15.272 9.43771 15.7252 9.8909C16.1784 10.3441 16.433 10.9588 16.433 11.5997C16.433 12.2406 16.1784 12.8552 15.7252 13.3084C15.272 13.7616 14.6573 14.0162 14.0164 14.0162H13.0498"
                stroke="white"
                strokeWidth="0.966626"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.66602 11.5996H13.5325"
                stroke="white"
                strokeWidth="0.966626"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_123_49170"
                  x1="23.199"
                  y1="-1.43462e-06"
                  x2="-0.869964"
                  y2="23.199"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#B8A4FF" />
                  <stop offset="1" stopColor="#6B31B6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-[9px] text-black leading-tight font-semibold">
              Guest Post Opportunities
            </h4>
            <p className="text-[6px] text-gray-500 leading-tight mt-1">
              Identify blogs in directly related industries where you
              can potentially post a guest article to improve domain
              authority.
            </p>
            <div className="flex gap-2.5 m-2 relative right-[45px] top-[10px]">
              <span className="bg-purple-100 text-purple-600 text-[6px] px-1.5 py-0.5 rounded font-medium">
                Backlinks
              </span>
              <span className="bg-orange-100 text-orange-600 text-[6px] px-1.5 py-0.5 rounded font-medium">
                High Impact
              </span>
            </div>
          </div>
          <button className="bg-black cursor-pointer hover:bg-gray-900 text-white text-[8px] px-2 py-1 rounded relative bottom-[15px] shrink-0 font-medium">
            Start
          </button>
        </div>

        {/* Card 2 */}
        <div className="absolute top-[37%] -right-[8%] md:top-[45%] md:right-[-2%] max-w-[240px] bg-white rounded-[10px] p-3 shadow-2xl z-20 flex items-center gap-3 scale-[0.80] md:scale-100 origin-bottom-right md:origin-center transition-all">
          <div className="w-8 h-8 rounded bg-transparent flex items-center justify-center shrink-0">
            <div className="relative bottom-[10px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="23.1995"
                  height="23.1995"
                  rx="3.47985"
                  fill="url(#paint0_linear_123_49187)"
                />
                <g clipPath="url(#clip0_123_49187)">
                  <path
                    d="M15.9463 6.76636L14.9797 7.73302M14.9797 7.73302L16.4297 9.18302L14.738 10.8747L13.288 9.42469M14.9797 7.73302L13.288 9.42469M11.3015 11.4112C11.5511 11.6574 11.7494 11.9506 11.8852 12.2738C12.021 12.5971 12.0915 12.944 12.0927 13.2946C12.0939 13.6452 12.0257 13.9925 11.8921 14.3167C11.7585 14.6408 11.562 14.9353 11.3141 15.1832C11.0662 15.4311 10.7717 15.6275 10.4476 15.7611C10.1235 15.8948 9.77609 15.963 9.4255 15.9618C9.0749 15.9606 8.728 15.8901 8.40477 15.7543C8.08154 15.6185 7.78837 15.4201 7.54212 15.1706C7.05789 14.6692 6.78994 13.9977 6.796 13.3007C6.80206 12.6037 7.08163 11.9369 7.57451 11.4441C8.06738 10.9512 8.73413 10.6716 9.43113 10.6655C10.1281 10.6595 10.7996 10.9274 11.301 11.4117L11.3015 11.4112ZM11.3015 11.4112L13.288 9.42469"
                    stroke="white"
                    strokeWidth="0.966667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_123_49187"
                    x1="18.8496"
                    y1="-1.00469e-06"
                    x2="2.89994"
                    y2="23.1995"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#B6DAFF" />
                    <stop offset="1" stopColor="#63A2FF" />
                  </linearGradient>
                  <clipPath id="clip0_123_49187">
                    <rect
                      width="11.6"
                      height="11.6"
                      fill="white"
                      transform="translate(5.7998 5.7998)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-[9px] text-black leading-tight font-semibold">
              Guest Post Opportunities
            </h4>
            <p className="text-[6px] text-gray-500 leading-tight mt-1">
              Identify blogs in directly related industries where you
              can potentially post a guest article to improve domain
              authority.
            </p>
            <div className="flex gap-2.5 mt-2 relative right-[40px]">
              <span className="bg-blue-100 text-blue-600 text-[6px] px-1.5 py-0.5 rounded font-medium">
                Keyword
              </span>
              <span className="bg-green-100 text-green-600 text-[6px] px-1.5 py-0.5 rounded font-medium">
                Low Impact
              </span>
            </div>
          </div>
          <div className="bg-black text-white text-[8px] px-2 py-1 rounded relative bottom-[10px] shrink-0 font-medium cursor-pointer">
            Start
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          {/* ── CARD 4: Optimization Support ── */}
         <div className="relative rounded-[20px] border border-white/10 bg-gradient-to-br from-[#01091E] via-[#01091E] to-[#1a2f5c] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden p-6 lg:p-7 hover:border-blue-950 duration-300 ease-in-out transition-all flex flex-col h-[350px] lg:h-[400px]">
  
  <CardGrid />
  
  <div className="relative z-10 flex flex-col h-full">
    <CardHeader
      icon={
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="38"
            height="38"
            rx="5.4"
            fill="url(#paint0_linear_123_49219)"
          />
          <path
            d="M27.3337 14.8334L20.2503 21.9167L16.0837 17.75L10.667 23.1667"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.333 14.8334H27.333V19.8334"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_123_49219"
              x1="30.875"
              y1="-1.64565e-06"
              x2="4.75"
              y2="38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFCC9C" />
              <stop offset="1" stopColor="#FF8853" />
            </linearGradient>
          </defs>
        </svg>
      }
      color="bg-transparent"
      title="Optimization Support"
    />
    <p className="text-[12px] text-white/50 leading-relaxed mb-6">
      Keep search-driven work closer to reporting, iteration, and
      broader performance operations.
    </p>

    {/* Chart Area */}
    <div className="relative flex-1 w-full mt-2">
      {/* Pill Navbar */}
      <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 flex items-center gap-4 text-[8px] md:gap-6 md:text-[10px] font-medium text-white/60 bg-[#0c182e]/90 border border-white/10 rounded-full px-4 md:px-6 py-1 md:py-2 shadow-xl z-20 backdrop-blur-sm">
        <span className="hover:text-white cursor-pointer transition-colors">
          Target
        </span>
        <span className="hover:text-white cursor-pointer transition-colors">
          Optimize
        </span>
        <span className="hover:text-white cursor-pointer transition-colors">
          Grow
        </span>
      </div>

      {/* Chart Content Container */}
      <div className="absolute inset-0 top-[-18px]">
        
        {/* Gradient Vertical Bars (Perfectly aligned to nodes) */}
        <div className="absolute bottom-0 bg-gradient-to-t from-transparent to-white/[0.08] w-[8%] rounded-t-[4px]" style={{ left: "9.5%", height: "47%" }}></div>
        <div className="absolute bottom-0 bg-gradient-to-t from-transparent to-white/[0.08] w-[8%] rounded-t-[4px]" style={{ left: "29%", height: "58%" }}></div>
        <div className="absolute bottom-0 bg-gradient-to-t from-transparent to-white/[0.08] w-[8%] rounded-t-[4px]" style={{ left: "46.5%", height: "75%" }}></div>
        <div className="absolute bottom-0 bg-gradient-to-t from-transparent to-white/[0.08] w-[8%] rounded-t-[4px]" style={{ left: "64.5%", height: "48%" }}></div>
        <div className="absolute bottom-0 bg-gradient-to-t from-transparent to-white/[0.08] w-[8%] rounded-t-[4px]" style={{ left: "82.5%", height: "80%" }}></div>

        {/* Line Graph SVG */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full overflow-visible"
          >
            <defs>
              <linearGradient
                id="optGrad"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#5BEC71" />
                <stop offset="50%" stopColor="#3ab4aa" />
                <stop offset="100%" stopColor="#00A3FF" />
              </linearGradient>
            </defs>

            {/* Main Line connecting the dots */}
            <path
              d="M 13.5,53 L 33,42 L 50.5,25 L 68.5,52 L 86.5,20 L 96,4"
              fill="none"
              stroke="url(#optGrad)"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </svg>

        {/* HTML Data Nodes */}
        {/* Node 1 */}
        <div
          className="absolute w-[14px] h-[14px] bg-[#5BEC71]/20 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(91,236,113,0.5)]"
          style={{ left: "13.5%", bottom: "47%", transform: "translate(-50%, 50%)" }}
        >
          <div className="w-[6px] h-[6px] bg-[#5BEC71] rounded-full"></div>
        </div>
        {/* Node 2 */}
        <div
          className="absolute w-[14px] h-[14px] bg-[#5BEC71]/20 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(91,236,113,0.5)]"
          style={{ left: "33%", bottom: "58%", transform: "translate(-50%, 50%)" }}
        >
          <div className="w-[6px] h-[6px] bg-[#5BEC71] rounded-full"></div>
        </div>
        {/* Node 3 */}
        <div
          className="absolute w-[14px] h-[14px] bg-[#3ab4aa]/20 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(58,180,170,0.5)]"
          style={{ left: "50.5%", bottom: "75%", transform: "translate(-50%, 50%)" }}
        >
          <div className="w-[6px] h-[6px] bg-[#3ab4aa] rounded-full"></div>
        </div>
        {/* Node 4 */}
        <div
          className="absolute w-[14px] h-[14px] bg-[#3ab4aa]/20 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(58,180,170,0.5)]"
          style={{ left: "68.5%", bottom: "48%", transform: "translate(-50%, 50%)" }}
        >
          <div className="w-[6px] h-[6px] bg-[#3ab4aa] rounded-full"></div>
        </div>
        {/* Node 5 */}
        <div
          className="absolute w-[14px] h-[14px] bg-[#00A3FF]/20 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,163,255,0.5)]"
          style={{ left: "86.5%", bottom: "80%", transform: "translate(-50%, 50%)" }}
        >
          <div className="w-[6px] h-[6px] bg-[#00A3FF] rounded-full"></div>
        </div>

        {/* Arrow Head at the end of the line */}
        <div
          className="absolute text-[#00A3FF]"
          style={{ left: "95.5%", bottom: "95%", transform: "translate(-50%, 50%)" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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

function CardGlow({ id }: { id: string }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 394 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-40"
      >
        <g opacity="0.2" filter={`url(#glow_${id})`}>
          <path
            d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z"
            fill={`url(#grad_${id})`}
          />
        </g>
        <defs>
          <filter
            id={`glow_${id}`}
            x="0"
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
            <feGaussianBlur stdDeviation="74.9737" result={`blur_${id}`} />
          </filter>
          <radialGradient
            id={`grad_${id}`}
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
  );
}

function CardGrid() {
  return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.05) 2px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function CardHeader({
  icon,
  color,
  title,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}
      >
        {icon}
      </div>
      <h3 className="text-[16px] font-semibold text-white">{title}</h3>
    </div>
  );
}
