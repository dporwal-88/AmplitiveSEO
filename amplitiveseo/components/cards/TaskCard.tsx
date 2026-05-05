import { CardHeader } from "../Cards"
export default function TaskCard(){
    return (
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
                  <path
                    d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z"
                    fill="url(#paint0_radial_123_62463)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_123_62463"
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
                      result="effect1_foregroundBlur_123_62463"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_123_62463"
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
            <div
              // Change inset-0 to bottom-0 right-0 to anchor it correctly
              className="absolute bottom-0 -left-8 pointer-events-none w-[50%] h-[70%]"
              style={{
                backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 3px, transparent 1px)
    `,
                backgroundSize: "60px 60px",
                backgroundPosition: "left bottom",
                // The mask now correctly calculates from the bottom-right of the bottom-right anchored div
                maskImage:
                  "radial-gradient(circle at 0% 100%, black, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 0% 100%, black, transparent 80%)",
              }}
            />

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
              <p className="text-[12px] text-white/50 leading-relaxed mb-6">
                Tie search priorities to the production and implementation work
                required to move them forward.
              </p>

              <div className="mt-2 space-y-5 lg:space-y-6 px-1">
                {/* Bar 1 */}
                <div className="w-full">
                  <div className="text-[12px] text-white/70 mb-2">
                    Total Keywords
                  </div>
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
                  <div className="text-[12px] text-white/70 mb-2">
                    Total Backlinks
                  </div>
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
                  <div className="text-[12px] text-white/70 mb-2">
                    Organic Traffic
                  </div>
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
                  <div className="text-[12px] text-white/70 mb-2">
                    Health Score
                  </div>
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
    )
}