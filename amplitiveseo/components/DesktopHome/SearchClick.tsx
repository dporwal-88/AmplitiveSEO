export default function SearchClick() {
  return (
    <div
      className="absolute rounded-2xl bg-[#FFF5EE] flex flex-col items-center justify-center z-30"
      style={{
        width: "112px",
        height: "130px",
        top: "340px",
        left: "100px",
        // 1. The first part creates the crisp translucent frame (0 blur, 10px spread)
        // 2. The second part adds a standard soft shadow underneath so it doesn't look flat
        boxShadow:
          "0 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="relative flex items-center justify-center w-[88px] h-[88px]">
        <svg className="w-full h-full transform" viewBox="0 0 36 36">
          <defs>
            <linearGradient id="pinkGradient" x1="60%" y1="0%" x2="100%" y2="100%">
              <stop offset="40%" stopColor="#FFA9CF" />
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
            stroke="url(#pinkGradient)"
            strokeWidth="3.5"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-[22px] font-semibold text-black leading-none">
            86%
          </span>
          <span className="text-[6px] text-black/50 mt-1">Search Clicks</span>
        </div>
      </div>
    </div>
  );
}