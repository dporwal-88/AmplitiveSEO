export default function MobileBusinessBox(){
    return (
        <div
            className="absolute flex flex-col items-center justify-center gap-1 rounded-[10px] text-[9px] text-white/80 z-20 hover:bg-[#0c182e]/15 transition-all"
            style={{
              width: "55px",
              height: "55px",
              top: "-10px",
              left: "-15px",
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='white' stroke-width='1.5' stroke-dasharray='4%2c 4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "rgba(1, 9, 30, 0.6)",
              backdropFilter: "blur(6px)",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Business
          </div>
    )
}