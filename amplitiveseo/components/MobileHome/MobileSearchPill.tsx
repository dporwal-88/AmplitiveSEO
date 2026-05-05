export default function MobileSearchPill(){
    return (
         <div className="absolute -top-14 right-12 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#01091E]/10 backdrop-blur-md text-[11px] text-white/80 z-20 shadow-lg">
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
            Track search visibility
          </div>
    )
}