export default function MobileSearchClick() {
  return (
    <div
      className="absolute bottom-8 -left-1 rounded-[12px] bg-[#FFF5EE] flex flex-col items-center justify-center z-30"
      style={{
        width: "70px",
        height: "80px",
        // Precise translucent frame shadow matching Figma
        boxShadow: "0 0 0 6px rgba(255, 255, 255, 0.08), 0 4px 10px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className="relative flex items-center justify-center w-[60px] h-[60px]">
        <svg className="w-full h-full transform " viewBox="0 0 36 36">
          <defs>
            {/* 1. Define the Gradient here */}
            <linearGradient id="searchClickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA9CF" />
              <stop offset="100%" stopColor="#C62943" />
            </linearGradient>
          </defs>
          <path
            className="text-gray-200"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            strokeDasharray="60, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            // 2. Reference the ID of the linearGradient
            stroke="url(#searchClickGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-[12px] font-semibold text-black leading-none">86%</span>
          <span className="text-[5px] text-gray-400 mt-0.5">Search Clicks</span>
        </div>
      </div>
    </div>
  );
}