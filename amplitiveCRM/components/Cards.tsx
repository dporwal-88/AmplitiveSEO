import FollowUpCard from "./cards/FollowUpCard";
import ClientCard from "./cards/ClientVisibilityCard";
import LeadCard from "./cards/LeadtrackingCard";
import PipeLineCard from "./cards/PipelineCard";
import LeadTrackingCard from "./cards/LeadtrackingCard";

export default function Cards() {
  return (
    <div className="bg-[#01091E] ">
      {/* ══════════════════════════════════════════════
          SECTION 2 — TEXT BLOCK
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 py-12 md:py-16 lg:py-24 px-5 lg:px-6 max-w-[1440px] mx-auto text-center">
        <h2 className="text-[22px] sm:text-[30px] lg:text-[42px] font-medium leading-[1.3] text-white mb-6">
          A CRM becomes more valuable when it is not isolated <br className="hidden md:block" />
          from the rest of 
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] via-[#0F72D7] to-[#003F9D]">
            {" "}business execution
          </span>
        </h2>
        <p className="text-[13.4px] lg:text-[15px] text-white/80 leading-[1.2] max-w-[1100px] mx-auto">
          Leads often disappear into separate systems after campaigns go live. Amplitive keeps CRM and pipeline 
          activity connected to outreach,<br/> email, paid campaigns, and project <br/> workflows so teams can manage 
          movement <br/> through the pipeline with more clarity and <br/> less manual chasing.
        </p>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 — FEATURE CARDS
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto py-4 lg:py-12 px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* ── CARD 1 ── */}
          <PipeLineCard/>
          {/* ── CARD 2 ── */}
          <LeadTrackingCard/>
          {/* ── CARD 3 ── */}
          <ClientCard/>
          {/* ── CARD 4 ── */}
          <FollowUpCard/>
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
      <h3 className="text-[18px] text-white">{title}</h3>
    </div>
  );
}