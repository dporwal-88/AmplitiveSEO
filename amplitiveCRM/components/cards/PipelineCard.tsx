import { CardHeader } from "../Cards";

export default function PipelineCard() {
  return (
    <div
      className="relative rounded-[20px] border border-white/10 bg-[#01091E] 
      shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_4px_4px_36px_rgba(117,186,255,0.12),inset_4px_4px_36px_rgba(91,236,113,0.05)]
      backdrop-blur-md overflow-hidden p-6 lg:p-7 duration-300 ease-in-out 
      transition-all hover:border-white/20 flex flex-col h-[220px] sm:h-[380px] md:h-[430px]"
    >
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
      backgroundSize: "35px 35px", /* Scaled down for mobile */
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
                fill="url(#paint0_linear_303_14677)"
              />
              <path
                d="M17.332 14H26.4987"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.332 19H26.4987"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.332 24H26.4987"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 14L12.3333 14.8333L14 13.1666"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 19L12.3333 19.8333L14 18.1666"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 24L12.3333 24.8333L14 23.1666"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_303_14677"
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
          title="Pipeline Stages"
        />
        <p className="text-[12.5px] md:text-[14px] text-white/80 leading-[1.2] md:leading-[1.6] md:mb-6 mt-1">
          Track opportunities through visible stages that support cleaner
          follow-up and ownership.
        </p>

        {/* ── Funnel Graphic Container ── */}
        <div className="relative flex-1 w-full mt-4 md:mt-6 mb-2 flex items-start justify-center bottom-[10%] left-[28%] md:bottom-0 md:left-0">
          
          {/* SCALING WRAPPER: Locks internal height for percentages to calculate correctly, then visually scales it down for mobile */}
          <div className="relative w-full min-w-[300px] h-[160px] md:h-full md:min-w-0 origin-top scale-[0.65] sm:scale-[0.85] md:scale-100">
            
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <line
                x1="5"
                y1="8"
                x2="15.2"
                y2="92"
                stroke="#16856f"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
              <line x1="5" y1="8" x2="15" y2="8" stroke="#16856f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="7.6" y1="29" x2="20" y2="29" stroke="#16856f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="10" y1="50" x2="35" y2="50" stroke="#16856f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="12.8" y1="71" x2="45" y2="71" stroke="#16856f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="15.2" y1="92" x2="55" y2="92" stroke="#16856f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>

            {/* Dots */}
            {[
              { left: "15%", top: "8%" },
              { left: "20%", top: "29%" },
              { left: "25%", top: "50%" },
              { left: "30%", top: "71%" },
              { left: "35%", top: "92%" },
            ].map((pos, index) => (
              <div
                key={index}
                className="absolute w-[3px] h-[3px] rounded-full bg-[#A5FFD6] shadow-[0_0_8px_2px_#5BEC71] z-10"
                style={{ left: pos.left, top: pos.top, transform: "translate(-50%, -50%)" }}
              />
            ))}

            {/* Horizontal Glow Dots */}
            {[
              { left: "10%", top: "8%" },
              { left: "14%", top: "29%" },
              { left: "19%", top: "50%" },
              { left: "24%", top: "71%" },
              { left: "31%", top: "92%" },
            ].map((pos, index) => (
              <div
                key={index}
                className="absolute w-[9px] h-[4px] rounded-full bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] shadow-[0_0_6px_1.2px_#5BEC71] z-10"
                style={{ left: pos.left, top: pos.top, transform: "translate(-50%, -50%)" }}
              />
            ))}

            {/* Stage 1 */}
          <div className="absolute top-[0%] w-[65%] right-[20%] h-[18%] flex items-center gap-3 p-2.5 rounded-[6px] md:rounded-[10px] bg-white/[0.04] border border-white/5 shadow-[inset_4.87px_4.87px_43.86px_0px_rgba(117,186,255,0.12),inset_4.87px_4.87px_43.86px_0px_rgba(91,236,113,0.05)] backdrop-blur-md z-20 transition-transform hover:scale-[1.02]">
            <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27.9899" height="27.9899" rx="3.5987" fill="url(#paint0_linear_303_14714)"/>
                <path d="M18.66 19.9927V18.6598C18.66 17.9529 18.3792 17.2748 17.8793 16.7749C17.3794 16.275 16.7013 15.9941 15.9943 15.9941H11.9958C11.2888 15.9941 10.6108 16.275 10.1108 16.7749C9.61093 17.2748 9.33008 17.9529 9.33008 18.6598V19.9927" stroke="white" strokeWidth="1.33285" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.9958 13.3285C15.468 13.3285 16.6615 12.135 16.6615 10.6628C16.6615 9.19055 15.468 7.99707 13.9958 7.99707C12.5236 7.99707 11.3301 9.19055 11.3301 10.6628C11.3301 12.135 12.5236 13.3285 13.9958 13.3285Z" stroke="white" strokeWidth="1.33285" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_303_14714" x1="22.7418" y1="-1.21214e-06" x2="3.49873" y2="27.9899" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B6DAFF"/>
                    <stop offset="1" stopColor="#63A2FF"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] md:text-[10px] text-white/70 leading-tight mb-0.5">Stage 1:</span>
              <span className="text-[10px] md:text-[13px] text-white font-medium leading-[1] md:leading-tight tracking-wide">Capture</span>
            </div>
          </div>

            {/* Stage 2 */}
            <div className="absolute top-[21%] w-[55%] right-[25%] h-[18%] flex items-center gap-3 p-2.5 rounded-[6px] md:rounded-[10px] bg-white/[0.04] border border-white/5 shadow-[inset_4.87px_4.87px_43.86px_0px_rgba(117,186,255,0.12),inset_4.87px_4.87px_43.86px_0px_rgba(91,236,113,0.05)] backdrop-blur-md z-20 transition-transform hover:scale-[1.02]">
              <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="27.9957" height="27.9957" rx="3.5987" fill="url(#paint0_linear_303_14720)"/>
                  <path d="M13.3314 18.6645C16.2769 18.6645 18.6647 16.2767 18.6647 13.3311C18.6647 10.3856 16.2769 7.9978 13.3314 7.9978C10.3859 7.9978 7.99805 10.3856 7.99805 13.3311C7.99805 16.2767 10.3859 18.6645 13.3314 18.6645Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.9996 19.9978L17.0996 17.0978" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_303_14720" x1="27.9957" y1="-1.73125e-06" x2="-1.04984" y2="27.9957" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFEAF3"/>
                      <stop offset="1" stopColor="#DC486D"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] md:text-[10px] text-white/70 leading-tight mb-0.5">Stage 2:</span>
                <span className="text-[10px] md:text-[13px] text-white font-medium leading-[1] md:leading-tight tracking-wide">Qualify</span>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="absolute top-[42%] w-[45%] right-[30%] h-[18%] flex items-center gap-3 p-2.5 rounded-[6px] md:rounded-[10px] bg-white/[0.04] border border-white/5 shadow-[inset_4.87px_4.87px_43.86px_0px_rgba(117,186,255,0.12),inset_4.87px_4.87px_43.86px_0px_rgba(91,236,113,0.05)] backdrop-blur-md z-20 transition-transform hover:scale-[1.02]">
              <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="27.9957" height="27.9957" rx="3.5987" fill="url(#paint0_linear_303_14728)"/>
                  <g clipPath="url(#clip0_303_14728)">
                    <path d="M19.3314 8.66443H11.3314C10.595 8.66443 9.99805 9.26138 9.99805 9.99776V15.9978C9.99805 16.7341 10.595 17.3311 11.3314 17.3311H19.3314C20.0678 17.3311 20.6647 16.7341 20.6647 15.9978V9.99776C20.6647 9.26138 20.0678 8.66443 19.3314 8.66443Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.6647 10.6644L15.9314 13.1844C15.5514 13.3844 15.1114 13.3844 14.7314 13.1844L9.99805 10.6644" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.33398 11.3312V18.6645C7.33398 19.3978 7.93398 19.9978 8.66732 19.9978H18.0007" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_303_14728" x1="22.7465" y1="-1.21239e-06" x2="3.49946" y2="27.9957" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFCC9C"/>
                      <stop offset="1" stopColor="#FF8853"/>
                    </linearGradient>
                    <clipPath id="clip0_303_14728">
                      <rect width="16" height="16" fill="white" transform="translate(5.99805 5.9978)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] md:text-[10px] text-white/70 leading-tight mb-0.5">Stage 3:</span>
                <span className="text-[10px] md:text-[13px] text-white font-medium leading-[1] md:leading-tight tracking-wide">Nurture</span>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="absolute top-[63%] w-[35%] right-[35%] h-[18%] flex items-center gap-3 p-2.5 rounded-[6px] md:rounded-[10px] bg-white/[0.04] border border-white/5 shadow-[inset_4.87px_4.87px_43.86px_0px_rgba(117,186,255,0.12),inset_4.87px_4.87px_43.86px_0px_rgba(91,236,113,0.05)] backdrop-blur-md z-20 transition-transform hover:scale-[1.02]">
              <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="27.9957" height="27.9957" rx="3.5987" fill="url(#paint0_linear_303_14737)"/>
                  <path d="M17.334 7.33118L20.0007 9.99784L17.334 12.6645" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99805 13.3311V12.6645C7.99805 11.9572 8.279 11.2789 8.7791 10.7789C9.27919 10.2788 9.95747 9.9978 10.6647 9.9978H19.998" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6647 20.6645L7.99805 17.9978L10.6647 15.3312" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.998 14.6644V15.3311C19.998 16.0383 19.7171 16.7166 19.217 17.2167C18.7169 17.7168 18.0386 17.9978 17.3314 17.9978H7.99805" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_303_14737" x1="22.7465" y1="-1.21239e-06" x2="3.49946" y2="27.9957" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#CCFFD4"/>
                      <stop offset="1" stopColor="#2EB0D7"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] md:text-[10px]text-white/70 leading-tight mb-0.5">Stage 4:</span>
                <span className="text-[10px] md:text-[13px] text-white font-medium leading-[1] md:leading-tight tracking-wide">Convert</span>
              </div>
            </div>

            {/* Stage 5 */}
            <div className="absolute top-[84%] w-[25%] right-[40%] h-[18%] flex items-center gap-3  md:p-2.5 rounded-[6px] md:rounded-[10px] bg-white/[0.04] border border-white/5 shadow-[inset_4.87px_4.87px_43.86px_0px_rgba(117,186,255,0.12),inset_4.87px_4.87px_43.86px_0px_rgba(91,236,113,0.05)] backdrop-blur-md z-20 transition-transform hover:scale-[1.02]">
              <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="27.9957" height="27.9957" rx="3.5987" fill="url(#paint0_linear_303_14747)"/>
                  <g clipPath="url(#clip0_303_14747)">
                    <path d="M10.0007 11.9978H9.00065C8.55862 11.9978 8.1347 11.8222 7.82214 11.5096C7.50958 11.197 7.33398 10.7731 7.33398 10.3311C7.33398 9.88907 7.50958 9.46514 7.82214 9.15258C8.1347 8.84002 8.55862 8.66443 9.00065 8.66443H10.0007" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.998 11.9978H18.998C19.4401 11.9978 19.864 11.8222 20.1766 11.5096C20.4891 11.197 20.6647 10.7731 20.6647 10.3311C20.6647 9.88907 20.4891 9.46514 20.1766 9.15258C19.864 8.84002 19.4401 8.66443 18.998 8.66443H17.998" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.66211 20.6644H19.3288" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.6621 15.7711V17.3311C12.6621 17.6978 12.3488 17.9845 12.0154 18.1378C11.2288 18.4978 10.6621 19.4911 10.6621 20.6645" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.334 15.7711V17.3311C15.334 17.6978 15.6473 17.9845 15.9807 18.1378C16.7673 18.4978 17.334 19.4911 17.334 20.6645" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.998 7.33118H9.99805V11.9978C9.99805 13.0587 10.4195 14.0761 11.1696 14.8263C11.9198 15.5764 12.9372 15.9978 13.998 15.9978C15.0589 15.9978 16.0763 15.5764 16.8265 14.8263C17.5766 14.0761 17.998 13.0587 17.998 11.9978V7.33118Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_303_14747" x1="27.9957" y1="-1.73125e-06" x2="-1.04984" y2="27.9957" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#B8A4FF"/>
                      <stop offset="1" stopColor="#6B31B6"/>
                    </linearGradient>
                    <clipPath id="clip0_303_14747">
                      <rect width="16" height="16" fill="white" transform="translate(5.99805 5.9978)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] md:text-[10px] text-white/70 leading-tight mb-0.5">Stage 5:</span>
                <span className="text-[10px] md:text-[13px] text-white font-medium leading-[1] md:leading-tight tracking-wide">Close</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}