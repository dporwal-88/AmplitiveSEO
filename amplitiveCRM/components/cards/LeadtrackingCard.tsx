import { CardHeader } from "../Cards";

export default function LeadTrackingCard() {
  return (
    <div className="relative rounded-[20px] border border-white/10 bg-[#01091E] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_4px_4px_36px_rgba(117,186,255,0.12),inset_4px_4px_36px_rgba(91,236,113,0.05)] backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-300 ease-in-out p-6 lg:p-7 flex flex-col h-[220px] md:h-[350px] lg:h-[430px]">
      {/* ── Background SVG Glow ── */}
      <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
        <svg
          width="800"
          height="430"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6" filter="url(#filter0_f_lead_glow)">
            <path
              d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z"
              fill="url(#paint0_radial_lead_glow)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_lead_glow"
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
                result="effect1_foregroundBlur_lead_glow"
              />
            </filter>
            <radialGradient
              id="paint0_radial_lead_glow"
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
    className="absolute bottom-0 -left-8 pointer-events-none w-[80%] h-[70%] block md:hidden"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)
      `,
      backgroundSize: "40px 40px", /* Scaled down for mobile */
      backgroundPosition: "left bottom",
      maskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
      WebkitMaskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
    }}
  />

  {/* ── DESKTOP GRID (Hidden on Mobile) ── */}
  <div
    className="absolute bottom-0 -left-8 pointer-events-none w-[50%] h-[70%] hidden md:block"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.1) 4px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 4px, transparent 1px)
      `,
      backgroundSize: "60px 60px", /* Original desktop size */
      backgroundPosition: "left bottom",
      maskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
      WebkitMaskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
    }}
      />
    </>

      {/* ── Content Wrapper ── */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
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
                rx="8"
                fill="url(#paint0_linear_lead)"
              />
              <path
                d="M17 19C19.2091 19 21 17.2091 21 15C21 12.7909 19.2091 11 17 11C14.7909 11 13 12.7909 13 15C13 17.2091 14.7909 19 17 19Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 27V25C24 22.7909 22.2091 21 20 21H14C11.7909 21 10 22.7909 10 25V27"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 12C25.6569 12 27 13.3431 27 15C27 16.6569 25.6569 18 24 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29 27V25C29 23.3431 27.6569 22 26 22H23.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_lead"
                  x1="19"
                  y1="0"
                  x2="19"
                  y2="38"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A5FFD6" />
                  <stop offset="1" stopColor="#48DBFB" />
                </linearGradient>
              </defs>
            </svg>
          }
          color="bg-transparent"
          title="Lead Tracking"
        />
        <p className="text-[11.5px] md:text-[14px] text-white/80 leading-[1.2] md:leading-[1.6] md:mb-6 mt-1">
          Keep lead records connected to the activities and campaigns generating
          them.
        </p>

        {/* ── Floating Lead Cards Grid ── */}
        <div className="relative flex-1 w-full mt-2 md:mt-4">
          
          {/* SCALING WRAPPER */}
          <div className="relative w-full min-w-[600px] h-[300px] md:min-w-0 md:h-full origin-top-left md:origin-center scale-[0.45] sm:scale-[0.65] md:scale-100 md:bottom-0 bottom-[2%] md:right-0  right-[20%]">
            
            {/* Top Row: Empty Placeholder (Left, partially hidden) */}
            <div className="absolute top-[15%] md:top-[30%] -left-[10%] md:-left-[23%] w-[130px] h-[95px] bg-[#141C2F]/80 border border-white/5 rounded-[12px] shadow-lg backdrop-blur-sm z-10 transition-all" />

            {/* Top Row: Steve Bennett (Center) */}
            <div
              className="absolute top-[12%] md:top-[28%] left-[11%] md:left-[4%] w-[240px] bg-white rounded-[12px] p-3.5 shadow-xl z-30 scale-[0.8] transition-all cursor-default"
              style={{
                boxShadow:
                  "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2.5 items-center">
                  <div className="w-9 h-9 rounded-full bg-[#1D64D8] text-white flex items-center justify-center text-[12px] font-bold shadow-sm">
                    SB
                  </div>
                  <div className="leading-tight">
                    <div className="text-[13px] font-semibold text-[#01091E] mb-0.5">
                      Steve Bennett
                    </div>
                    <div className="text-[10px] text-gray-500">
                      Talent X Factor
                    </div>
                  </div>
                </div>
                <div className="bg-[#D4F7D9] text-[#128B2B] text-[9px] font-bold px-2.5 py-1 rounded-full">
                  Active
                </div>
              </div>
              <div className="flex justify-between text-left">
                <div>
                  <div className="text-[9px] text-gray-400 mb-1">Position</div>
                  <div className="text-[10px] text-[#01091E] font-medium">
                    Manager
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-400 mb-1">Source</div>
                  <div className="text-[10px] text-[#01091E] font-medium">
                    Apollo_search
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-400 mb-1">
                    Last Active
                  </div>
                  <div className="text-[10px] text-[#01091E] font-medium">
                    08/11/2025
                  </div>
                </div>
              </div>
            </div>

            {/* Top Row: Empty Placeholder (Right) */}
            <div className="absolute top-[15%] md:top-[30%] left-[50%] md:left-[53.5%] w-[185px] h-[97px] bg-[#141C2F]/80 border border-white/5 rounded-[12px] shadow-lg backdrop-blur-sm z-10 transition-all" />

            {/* Top Row: "J" Card (Far Right, partially hidden) */}
            <div
              className="absolute top-[12%] md:top-[27%] left-[80%] md:left-[93%] w-[240px] bg-white rounded-[14px] p-3.5 shadow-xl z-20 scale-[0.8] transition-all "
              style={{
                boxShadow:
                  "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2.5 items-center">
                  <div className="w-9 h-9 rounded-full bg-[#F97316] text-white flex items-center justify-center text-[12px] font-bold shadow-sm">
                    J
                  </div>
                  <div className="leading-tight">
                    <div className="text-[13px] font-semibold text-[#01091E] mb-0.5">
                      Jason Smith
                    </div>
                    <div className="text-[10px] text-gray-500">Acme Corp</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-left">
                <div>
                  <div className="text-[9px] text-gray-400 mb-1">Position</div>
                  <div className="text-[10px] text-[#01091E] font-medium">
                    CEO
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Empty Placeholder (Left) */}
            <div
              className="absolute top-[49%] md:top-[75%] -left-[15%] md:-left-[33%] w-[240px] bg-white rounded-[12px] p-3.5 shadow-xl z-30 transition-all cursor-default scale-[0.8]"
              style={{
                boxShadow:
                  "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2.5 items-center">
                  <div className="w-9 h-9 rounded-full bg-[#1D64D8] text-white flex items-center justify-center text-[12px] font-bold shadow-sm">
                    SB
                  </div>
                  <div className="leading-tight">
                    <div className="text-[13px] font-semibold text-[#01091E] mb-0.5">
                      Steve Bennett
                    </div>
                    <div className="text-[10px] text-gray-500">
                      Talent X Factor
                    </div>
                  </div>
                </div>
                <div className="bg-[#D4F7D9] text-[#128B2B] text-[9px] font-bold px-2.5 py-1 rounded-full">
                  Active
                </div>
              </div>
              <div className="flex justify-between text-left">
                <div>
                  <div className="text-[9px] text-gray-400 mb-1">Position</div>
                  <div className="text-[10px] text-[#01091E] font-medium">
                    Manager
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-400 mb-1">Source</div>
                  <div className="text-[10px] text-[#01091E] font-medium">
                    Apollo_search
                  </div>
                </div>
                <div>
                  <div className="text-[9px]  text-[#01091E] mb-1">
                    Last Active
                  </div>
                  <div className="text-[10px] text-gray-400 font-medium">
                    08/11/2025
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Empty Placeholder (Center) */}
            <div className="absolute top-[155px] md:top-[211px] left-[26%] w-[180px] h-[95px] bg-[#141C2F]/80 border border-white/5 rounded-[12px] scale-[1.1] shadow-lg backdrop-blur-sm z-10 transition-all" />

            {/* Bottom Row: Frank Martin (Right) */}
            <div
              className="absolute top-[145px] md:top-[200px] left-[58%] md:left-[58%] w-[240px] bg-white rounded-[8px] p-3.5 shadow-xl z-20 transition-all scale-[0.8] cursor-default"
              style={{
                boxShadow:
                  "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2.5 items-center">
                  <div className="w-9 h-9 rounded-full bg-[#6B46C1] text-white flex items-center justify-center text-[12px] font-bold shadow-sm">
                    FM
                  </div>
                  <div className="leading-tight">
                    <div className="text-[13px] font-semibold text-[#01091E] mb-0.5">
                      Frank Martin
                    </div>
                    <div className="text-[10px] text-gray-500">Qubic</div>
                  </div>
                </div>
                <div className="bg-[#D4F7D9] text-[#128B2B] text-[9px] font-bold px-2.5 py-1 rounded-full">
                  Active
                </div>
              </div>
              <div className="flex justify-between text-left">
                <div>
                  <div className="text-[9px] text-gray-400 mb-1">Position</div>
                  <div className="text-[10px] text-[#01091E] font-medium">
                    Ceo
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-400 mb-1">Source</div>
                  <div className="text-[10px] text-[#01091E] font-medium">
                    Apollo_search
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-400 mb-1">
                    Last Active
                  </div>
                  <div className="text-[10px] text-[#01091E] font-medium">
                    03/27/2026
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[155px] md:top-[211px] left-[100%] w-[180px] h-[95px] bg-[#141C2F]/80 border border-white/5 rounded-[12px] scale-[1.1] shadow-lg backdrop-blur-sm z-10 transition-all md:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}