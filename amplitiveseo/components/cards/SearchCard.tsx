import { CardHeader } from "../Cards"
export default function SearchCard(){
    return (
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
                    <stop stopColor="#5BEC71" />
                    <stop offset="1" stopColor="#0F72D7" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            {/* <CardGrid /> */}
            <div
              // Change inset-0 to bottom-0 right-0 to anchor it correctly
              className="absolute bottom-0 -right-2 pointer-events-none w-[70%] h-[75.5%]"
              style={{
                backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)
    `,
                backgroundSize: "60px 60px",
                backgroundPosition: "left bottom",
                // The mask now correctly calculates from the bottom-right of the bottom-right anchored div
                maskImage:
                  "radial-gradient(circle at 100% 100%, black, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 100% 100%, black, transparent 80%)",
              }}
            />

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
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.499 26.5L22.874 22.875"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                        <stop stopColor="#FFA9CF" />
                        <stop offset="1" stopColor="#C62943" />
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
                <div className="absolute top-[45%] -left-[2%] md:top-3 md:left-[9%] max-w-[180px] md:w-[240px] bg-white rounded-[8px] p-3 shadow-xl z-10 scale-[0.8] md:scale-80 lg:scale-100 origin-top-left md:origin-center transition-all" style={{boxShadow:
          "0 0 0 5px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)"}}>
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
                <div className="absolute top-[35%] -right-[5%] md:top-[45%] md:right-[5%] max-w-[200px] bg-white md:w-[240px] rounded-[8px] p-3 shadow-2xl z-30 scale-[0.85] md:scale-85 lg:scale-110 origin-bottom-right md:origin-center transition-all" style={{boxShadow:
          "0 0 0 6px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)"}}>
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
                  <div className="w-full bg-white/10 rounded-full h-[4px] mb-2">
                    <div className="bg-gradient-to-r from-[#6B31B6] to-[#B8A4FF] h-[4px] rounded-full w-[80%]"></div>
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
    )
}