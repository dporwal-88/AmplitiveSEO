import Optimization from "./cards/OptimizationCard";
import ProjectCard from "./cards/ProjectCard";
import TaskCard from "./cards/TaskCard";
import SearchCard from "./cards/SearchCard";

export default function Cards() {
  return (
    <div className="bg-[#01091E] ">
      {/* ══════════════════════════════════════════════
          SECTION 2 — TEXT BLOCK
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 md:py-10 lg:py-16 px-5 lg:px-6 max-w-[1300px] mx-auto text-center lg:-mt-10">
        <h2 className="text-[22px] sm:text-[26px] lg:text-[38px] font-medium leading-[1.35] text-white mb-5">
          SEO only works when it's{" "}
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] via-[#0F72D7] to-[#003F9D]">
            connected
          </span>
        </h2>
        <p className="text-[13px] lg:text-[14px] font-light text-white/60 leading-[1.8] max-w-[1100px] mx-auto">
          Search-driven execution works best when it stays connected to content
          production, campaign timelines, and operational priorities. Amplitive
          helps teams keep SEO work visible alongside the projects, assets, and
          workflows it depends on instead of managing it in a separate silo.
        </p>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 — FEATURE CARDS
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto py-4 lg:py-12 px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* ── CARD 1: Search Visibility Management ── */}
          <SearchCard/>
          {/* ── CARD 2: Task Alignment ── */}
          <TaskCard/>
          {/* ── CARD 3: Project Coordination ── */}
          <ProjectCard/>
          {/* ── CARD 4: Optimization Support ── */}
          <Optimization/>
        </div>
      </div>
    </div>
  );
}

export function CardHeader({
  icon,
  color,
  title,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}
      >
        {icon}
      </div>
      <h3 className="text-[16px] font-semibold text-white">{title}</h3>
    </div>
  );
}
