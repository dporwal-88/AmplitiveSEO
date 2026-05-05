export default function HealthScore(){
    return (
        <div
              className="absolute rounded-[8px] bg-[#FFF5EE] p-2 pl-4  z-30"
              style={{
                width: "180px",
                top: "45px",
                left: "560px",
                boxShadow:
                "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded bg-orange-400 flex items-center justify-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="21.1445"
                      height="21.1445"
                      rx="3.00475"
                      fill="url(#paint0_linear_123_48980)"
                    />
                    <path
                      d="M15.2095 10.5722H13.3547L11.9636 14.7455L9.18142 6.39899L7.79033 10.5722H5.93555"
                      stroke="white"
                      strokeWidth="0.927391"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_123_48980"
                        x1="17.1799"
                        y1="-9.15695e-07"
                        x2="2.64306"
                        y2="21.1445"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFCC9C" />
                        <stop offset="1" stopColor="#FF8853" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="text-[10px] text-black/60 font-medium">
                Company Health Score
              </div>
              <div className="text-[24px] font-semibold text-black">88%</div>
            </div>

    )
}