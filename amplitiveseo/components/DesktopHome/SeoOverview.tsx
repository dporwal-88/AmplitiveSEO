export default function SeoOverview(){
    return (
         <div
              className="absolute rounded-[20px] p-7 z-10 overflow-hidden"
              style={{
                width: "504.4px",
                height: "356px",
                top: "60px",
                left: "190px",
                background: "#01091E",
                boxShadow:
                  "0 0 30px rgba(135, 206, 250, 0.4), 0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <div className="absolute top-0 left-0 pointer-events-none opacity-100 ">
                <svg
                  width="420"
                  height="360"
                  viewBox="0 0 316 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.6" filter="url(#filter0_f_123_55689)">
                    <path
                      d="M221.551 -35.7261C221.551 53.4702 149.243 125.778 60.0471 125.778C-29.1492 125.778 -101.457 53.4702 -101.457 -35.7261C-101.457 -124.922 -29.1492 -197.23 60.0471 -197.23C149.243 -197.23 221.551 -124.922 221.551 -35.7261Z"
                      fill="url(#paint0_radial_123_55689)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_123_55689"
                      x="-194.959"
                      y="-290.733"
                      width="510.013"
                      height="510.013"
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
                        stdDeviation="46.7512"
                        result="effect1_foregroundBlur_123_55689"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial_123_55689"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(60.2009 -41.8416) rotate(90) scale(172.623 160.411)"
                    >
                      <stop stopColor="#5BEC71" />
                      <stop offset="1" stopColor="#0F72D7" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-[23px] text-white pt-2 font-medium mb-6 px-5">
                  SEO Overview
                </h3>

                <div className="pt-5 space-y-8 px-5">
                  {/* Bar 1 */}
                  <div className="w-full">
                    <div className="text-[13px] text-white/70 mb-2">
                      Total Keywords
                    </div>
                    <div className="flex items-center w-full gap-4">
                      <div className="flex-1 bg-white/10 rounded-full h-[10px]">
                        <div
                          className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[10px] rounded-full"
                          style={{ width: "33%" }}
                        ></div>
                      </div>
                      <span className="text-[15px] font-semibold text-white/70 text-right w-5 shrink-0">
                        33
                      </span>
                    </div>
                  </div>

                  {/* Bar 2 */}
                  <div className="w-full">
                    <div className="text-[13px] text-white/70 mb-2">
                      Total Backlinks
                    </div>
                    <div className="flex items-center w-full gap-4">
                      <div className="flex-1 bg-white/10 rounded-full h-[10px]">
                        <div
                          className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[10px] rounded-full"
                          style={{ width: "56%" }}
                        ></div>
                      </div>
                      <span className="text-[15px] font-semibold text-white/70 text-right w-5 shrink-0">
                        56
                      </span>
                    </div>
                  </div>

                  {/* Bar 3 */}
                  <div className="w-full">
                    <div className="text-[13px] text-white/70 mb-2">
                      Organic Traffic
                    </div>
                    <div className="flex items-center w-full gap-4">
                      <div className="flex-1 bg-white/10 rounded-full h-[10px]">
                        <div
                          className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[10px] rounded-full"
                          style={{ width: "44%" }}
                        ></div>
                      </div>
                      <span className="text-[15px] font-semibold text-white/70 text-right w-5 shrink-0">
                        44
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    )
}