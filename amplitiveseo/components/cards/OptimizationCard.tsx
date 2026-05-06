import { CardHeader } from "../Cards"

export default function Optimization(){
    return (
        <div className="relative rounded-[20px] border border-white/10 bg-gradient-to-br from-[#01091E] via-[#01091E] to-[#1a2f5c] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden p-6 lg:p-7 hover:border-blue-950 duration-300 ease-in-out transition-all flex flex-col h-[350px] lg:h-[400px]">
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
              <div
                // Change inset-0 to bottom-0 -right-0 to anchor it correctly
                className="absolute -bottom-15 -right-13 pointer-events-none w-[70%] h-[88%]"
                style={{
                  backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)
    `,
                  backgroundSize: "60px 60px",
                  backgroundPosition: "left bottom",
                  // The mask now correctly calculates from the bottom-right of the bottom-right anchored div
                  maskImage:
                    "radial-gradient(circle at 100% 100%, black, transparent 90%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 100% 100%, black, transparent 90%)",
                }}
              />
              <p className="text-[12px] text-white/80 leading-relaxed mb-6">
                Keep search-driven work closer to reporting, iteration, and
                broader performance operations.
              </p>

              {/* Chart Area */}
              <div className="relative flex-1 w-full mt-2">
                {/* Pill Navbar */}
                <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 flex items-center gap-4 text-[8px] md:gap-6 md:text-[10px] font-medium text-white/80 bg-[#0c182e]/90 border border-white/10 rounded-full px-4 md:px-4 py-1 md:py-1.5 shadow-xl z-20 backdrop-blur-sm">
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
                  <div
                    className="absolute bottom-0 bg-gradient-to-t from-transparent to-white/[0.08] w-[8.5%]"
                    style={{ left: "9.5%", height: "47%" }}
                  ></div>
                  <div
                    className="absolute bottom-0 bg-gradient-to-t from-transparent to-white/[0.08] w-[8.5%] "
                    style={{ left: "29%", height: "58%" }}
                  ></div>
                  <div
                    className="absolute bottom-0 bg-gradient-to-t from-transparent to-white/[0.08] w-[8.5%] "
                    style={{ left: "46.5%", height: "75%" }}
                  ></div>
                  <div
                    className="absolute bottom-0 bg-gradient-to-t from-transparent to-white/[0.08] w-[8.5%] "
                    style={{ left: "64.5%", height: "48%" }}
                  ></div>
                  <div
                    className="absolute bottom-0 bg-gradient-to-t from-transparent to-white/[0.08] w-[8.5%]"
                    style={{ left: "82.5%", height: "80%" }}
                  ></div>

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
                    style={{
                      left: "13.5%",
                      bottom: "47%",
                      transform: "translate(-50%, 50%)",
                    }}
                  >
                    <div className="w-[6px] h-[6px] bg-[#5BEC71] rounded-full"></div>
                  </div>
                  {/* Node 2 */}
                  <div
                    className="absolute w-[14px] h-[14px] bg-[#5BEC71]/20 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(91,236,113,0.5)]"
                    style={{
                      left: "33%",
                      bottom: "58%",
                      transform: "translate(-50%, 50%)",
                    }}
                  >
                    <div className="w-[6px] h-[6px] bg-[#5BEC71] rounded-full"></div>
                  </div>
                  {/* Node 3 */}
                  <div
                    className="absolute w-[14px] h-[14px] bg-[#3ab4aa]/20 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(58,180,170,0.5)]"
                    style={{
                      left: "50.5%",
                      bottom: "75%",
                      transform: "translate(-50%, 50%)",
                    }}
                  >
                    <div className="w-[6px] h-[6px] bg-[#3ab4aa] rounded-full"></div>
                  </div>
                  {/* Node 4 */}
                  <div
                    className="absolute w-[14px] h-[14px] bg-[#3ab4aa]/20 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(58,180,170,0.5)]"
                    style={{
                      left: "68.5%",
                      bottom: "48%",
                      transform: "translate(-50%, 50%)",
                    }}
                  >
                    <div className="w-[6px] h-[6px] bg-[#3ab4aa] rounded-full"></div>
                  </div>
                  {/* Node 5 */}
                  <div
                    className="absolute w-[14px] h-[14px] bg-[#00A3FF]/20 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,163,255,0.5)]"
                    style={{
                      left: "86.5%",
                      bottom: "80%",
                      transform: "translate(-50%, 50%)",
                    }}
                  >
                    <div className="w-[6px] h-[6px] bg-[#00A3FF] rounded-full"></div>
                  </div>

                  {/* Arrow Head at the end of the line */}
                  <div
                    className="absolute text-[#00A3FF]"
                    style={{
                      left: "95.5%",
                      bottom: "95%",
                      transform: "translate(-50%, 50%)",
                    }}
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
    )
}