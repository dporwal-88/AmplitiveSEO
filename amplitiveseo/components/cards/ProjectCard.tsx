import { CardHeader } from "../Cards"
export default function ProjectCard(){
    return (
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
                  <path
                    d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z"
                    fill="url(#paint0_radial_123_62463_proj)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_123_62463_proj"
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
                      result="effect1_foregroundBlur_123_62463_proj"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_123_62463_proj"
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
              className="absolute bottom-0 -left-10 pointer-events-none w-[50%] h-[84%]"
              style={{
                backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)
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
                  <div className="absolute top-[-22%] -left-[8%] md:top-[-2%] md:left-[2%] max-w-[240px] bg-white rounded-[10px] p-4 shadow-[0_10px_30px_rgba(255,255,255,0.1)] z-10 flex items-center gap-3 scale-[0.75] md:scale-100 origin-top-left md:origin-center transition-all" style={{boxShadow:
          "0 0 0 5px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)"}}>
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
                  <div className="absolute top-[37%] -right-[8%] md:top-[45%] md:right-[-3%] max-w-[240px] bg-white rounded-[10px] p-3 shadow-2xl z-20 flex items-center gap-3 scale-[0.80] md:scale-100 origin-bottom-right md:origin-center transition-all" style={{boxShadow:
          "0 0 0 5px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)"}}>
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
    )
}