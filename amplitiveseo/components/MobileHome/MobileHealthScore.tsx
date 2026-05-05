export default function MobileHealthScore(){
    return (
        <div className="absolute -top-6 -right-5 rounded-[10px] bg-[#FFF5EE] py-1 px-2 shadow-[0_0_20px_rgba(135,206,250,0.3)] w-[120px] h-[60px] z-30 scale-80">
            <div className="flex flex-col  gap-1.5 items-start">
              <div className="w-4 h-4 rounded bg-orange-400 flex ">
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
              <div className="text-[6px] text-black/60 font-medium">
                Company Health Score
              </div>
            </div>
            <div className="text-[18px] font-semibold text-black text-start">88%</div>
          </div>
    )
}