export default function MobileSearchClick(){
    return (
        <div className="absolute bottom-8 -left-1 rounded-[12px] bg-[#FFF5EE] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(135,206,250,0.3)] w-[70px] h-[80px] z-30">
            <div className="relative flex items-center justify-center w-[50px] h-[50px]">
              <svg
                className="w-full h-full transform "
                viewBox="0 0 36 36"
              >
                <path
                  className="text-gray-200"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="text-pink-500"
                  strokeDasharray="60, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-[10px] font-bold text-black">86%</span>
                <span className="text-[5px] text-gray-400 ">Search Clicks</span>
              </div>
            </div>
          </div>
    )
}