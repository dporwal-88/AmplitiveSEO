export default function MobileSeoOverview(){
    return (
        <div
            className="rounded-[18px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-left relative overflow-hidden z-10 translate-x-4 scale-70 -translate-y-8"
            style={{
              background: "#01091E",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 0 30px rgba(135, 206, 250, 0.15), 0 10px 20px rgba(0,0,0,0.3)",
            }}
          >
            {/* Inner Glow SVG inside Mobile Card */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-80">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 316 220"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.6" filter="url(#filter_mob_card_glow)">
                  <path
                    d="M221.551 -35.7261C221.551 53.4702 149.243 125.778 60.0471 125.778C-29.1492 125.778 -101.457 53.4702 -101.457 -35.7261C-101.457 -124.922 -29.1492 -197.23 60.0471 -197.23C149.243 -197.23 221.551 -124.922 221.551 -35.7261Z"
                    fill="url(#paint_mob_card_glow)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter_mob_card_glow"
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
                      result="effect1_foregroundBlur"
                    />
                  </filter>
                  <radialGradient
                    id="paint_mob_card_glow"
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

            {/* Mobile Card Text Content */}
            <div className="relative z-10">
              <h3 className="text-[15px] text-white font-medium mb-4">
                SEO Overview
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] text-white/70 mb-1.5">
                    <span>Total Keywords</span>
                    <span>33</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-[5px]">
                    <div
                      className="bg-gradient-to-r from-[#0F72D7] to-[#3ab4aa] h-[5px] rounded-full"
                      style={{ width: "33%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-white/70 mb-1.5">
                    <span>Total Backlinks</span>
                    <span>56</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-[5px]">
                    <div
                      className="bg-gradient-to-r from-[#0F72D7] to-[#0F72D7] h-[5px] rounded-full"
                      style={{ width: "56%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-white/70 mb-1.5">
                    <span>Organic Traffic</span>
                    <span>44</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-[5px]">
                    <div
                      className="bg-gradient-to-r from-[#5BEC71] to-[#0F72D7] h-[5px] rounded-full"
                      style={{ width: "44%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}