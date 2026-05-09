"use client";

import React from "react";
import Image from "next/image";

// Make sure to import your images as before or point to the correct paths
import Owner from "../public/owner.svg";
import Team1 from "../public/team1.svg";
import Team2 from "../public/team2.svg";
import Team3 from "../public/team3.svg";
import linkedIn from "../public/linkedin.svg";

// ══════════════════════════════════════════════
// Data Configurations
// ══════════════════════════════════════════════

const steps = [
  { label: "Email", day: "Day 1", svg: <Email1Icon /> },
  { label: "LinkedIn", day: "Day 2", svg: <LinkedInIcon /> },
  { label: "Email 2", day: "Day 5", svg: <Email2Icon /> },
  { label: "Call", day: "Day 6", svg: <CallIcon /> },
];

const perfItems = [
  { value: "320", label: "Sent", svg: <SentIcon /> },
  { value: "132", label: "Opened", svg: <OpenedIcon /> },
  { value: "76", label: "Replied", svg: <RepliedIcon /> },
  { value: "23", label: "Meetings", svg: <MeetingsIcon /> },
];

// ══════════════════════════════════════════════
// Reusable Mini-Components
// ══════════════════════════════════════════════

// Abstracted reusable glass wrapper to remove duplicated box-shadows and backgrounds
function GlassWrapper({ children, className = "" }) {
  return (
    <div className={`bg-[#FFFFFF29] shadow-[0px_4px_22px_0px_#75BAFF38] ${className}`}>
      {children}
    </div>
  );
}

function OpenRateBox() {
  return (
    <div className="relative bottom-[-20px] right-[20px] md:right-0 md:bottom-[70px] scale-[0.95] rounded-[9.33px] p-[3px] min-w-[140px] bg-[#FFFFFF26]">
      <div className="rounded-[8.33px] px-3 py-2 flex items-center gap-2.5 bg-white bg-[linear-gradient(60.63deg,rgba(185,205,255,0.42)_-8.01%,rgba(238,233,255,0.42)_90.19%)]">
        <OpenRateIcon />
        <div className="flex flex-col gap-0.5">
          <span className="font-urbanist font-medium text-[8px] leading-tight text-left text-[#3E3E3E]">
            Open Rate
          </span>
          <span className="font-urbanist font-medium text-[12px] leading-tight text-left text-[#3E3E3E]">
            58%
          </span>
        </div>
      </div>
    </div>
  );
}

function EmailsSentCard() {
  return (
    <div className="relative bottom-[-10px] left-[50px] md:left-0 md:bottom-[70px] rounded-[9.33px] shadow-[0_0_0_5px_rgba(255,255,255,0.08),0_5px_10px_rgba(0,0,0,0.2)] p-[1px] min-w-[130px] bg-[#FFFFFF26]">
      <div className="rounded-[8.33px] px-3 py-2 flex items-center gap-2.5 bg-white bg-[linear-gradient(60.63deg,rgba(255,175,163,0.42)_-8.01%,rgba(255,230,207,0.42)_90.19%)]">
        <EmailsSentIcon />
        <div className="flex flex-col gap-0.5">
          <span className="font-urbanist font-medium text-[8px] leading-tight text-[#3E3E3E]">
            Emails Sent
          </span>
          <span className="font-urbanist font-medium text-[12px] text-left leading-tight text-[#3E3E3E]">
            87
          </span>
        </div>
      </div>
    </div>
  );
}

function BounceRateCard() {
  return (
    <div className="relative bottom-[40px] md:bottom-[70px] md:right-[30%] p-[3px] w-max rounded-[10.38px]">
      <div className="flex items-center shadow-[0_0_0_5px_rgba(255,255,255,0.08),0_5px_10px_rgba(0,0,0,0.2)] box-border w-[127px] h-[42px] rounded-[7.38px] p-[9.35px] gap-[9.23px] bg-white bg-[linear-gradient(60.63deg,rgba(255,175,163,0.42)_-8.01%,rgba(255,230,207,0.42)_90.19%)]">
        <BounceRateIcon />
        <div className="flex flex-col justify-center w-[78.41px] gap-[2px]">
          <span className="font-urbanist font-medium text-[7.27px] leading-none text-[#3E3E3E]">
            Bounce Rate
          </span>
          <span className="font-urbanist font-medium text-[10.39px] leading-none text-[#1F1F1F]">
            1.2%
          </span>
        </div>
      </div>
    </div>
  );
}

function Chart() {
  const yLabels = [150, 100, 50, 0];
  const xLabels = ["4/15/26", "4/16/26", "4/17/26", "4/18/26", "4/19/26"];

  return (
    <div className="relative md:bottom-[10%] md:right-[2%] w-full h-full mt-4">
      <div className="absolute left-0 top-0 bottom-[24px] flex flex-col justify-between pr-1">
        {yLabels.map((l) => (
          <span key={l} className="text-[7px] text-white/40 font-urbanist text-right w-[24px]">
            {l}
          </span>
        ))}
      </div>
      <div className="absolute left-[32px] right-0 bottom-0 flex justify-between">
        {xLabels.map((l) => (
          <span key={l} className="text-[7px] text-white/40 font-urbanist">
            {l}
          </span>
        ))}
      </div>
      <div className="absolute left-[32px] right-0 top-0 bottom-[24px]">
        <ChartSVG />
      </div>
    </div>
  );
}

function ProspectingCard() {
  return (
    <GlassWrapper className="relative left-[60px] scale-[0.9] rounded-[8.4px] p-[4.2px]">
      <div className="rounded-[7px] bg-white px-4 py-3 flex flex-col gap-3">
        <span className="font-urbanist font-medium text-[11px] text-[#3E3E3E]">
          Prospecting
        </span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Image src={linkedIn} alt="linkedIn" height={28} width={28} />
            <span className="font-urbanist font-medium text-[11px] text-[#7D7D7D]">
              LinkedIn
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ProspectingEmailIcon />
            <span className="font-urbanist font-medium text-[11px] text-[#7D7D7D]">
              Email
            </span>
          </div>
        </div>
      </div>
    </GlassWrapper>
  );
}

function ConnectedBox() {
  return (
    <div className="flex relative bottom-[28px] left-[58px] scale-[0.8] items-center gap-2 px-5 py-3 rounded-[10px] bg-[#0000001F] border-[0.84px] border-[#FFFFFF1A] shadow-[inset_4.18px_4.18px_37.61px_0px_#75BAFF1F,inset_4.18px_4.18px_37.61px_0px_#5BEC710D,0px_4.18px_18.81px_0px_#75BAFF1F] backdrop-blur-[10.45px]">
      <span className="font-urbanist text-[14px] text-white">Connected</span>
      <ConnectedCheckIcon />
    </div>
  );
}

function CRMCard() {
  return (
    <GlassWrapper className="relative bottom-[25px] left-[80px] scale-[0.9] rounded-[8.4px] p-[4.2px]">
      <div className="rounded-[7px] bg-white px-4 py-3 flex flex-col gap-3">
        <span className="font-urbanist font-medium text-[10px] text-[#3E3E3E]">
          Your CRM
        </span>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-[5px] flex items-center justify-center shrink-0 bg-[linear-gradient(135deg,#2EB0D7_0%,#0F72D7_100%)]">
            <CRMAmplitiveIcon />
          </div>
          <span className="font-urbanist font-medium text-[11px] text-[#000000]">
            Amplitive
          </span>
        </div>
      </div>
    </GlassWrapper>
  );
}

// ══════════════════════════════════════════════
// MAIN COMPONENT EXPORT
// ══════════════════════════════════════════════

export default function Cards() {
  return (
    <div className="bg-[#01091E] overflow-hidden pb-20 font-['Montserrat',_sans-serif]">
      {/* SECTION 2 — TEXT BLOCK */}
      <div className="relative z-10 py-12 md:py-16 lg:py-22 px-5 lg:px-6 max-w-[1180px] mx-auto text-center">
        <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-medium leading-[1.3] text-white mb-6">
          Outbound breaks when work is{" "}
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#0F72D7]">
            scattered
          </span>
        </h2>
        <p className="text-[13.4px] lg:text-[13px] text-white/80 leading-[1.2] max-w-[1100px] mx-auto">
          Research, messaging, inboxes, and follow-up must run in one system—or execution falls apart.
        </p>
      </div>

      {/* SECTION 3 — FEATURE CARDS */}
      <div className="relative z-10 max-w-[1400px] mx-auto py-4 lg:py-12 px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          
          {/* ── CARD 1: Outreach Planning ── */}
          <FeatureCard className="h-[220px] sm:h-[380px] md:h-[350px] lg:h-[400px]">
            <CardBackgrounds index={1} />
            <div className="relative z-10 flex flex-col h-full">
              <CardHeader icon={<HeaderIcon1 />} title="Outreach Planning" />
              <p className="text-[11px] md:text-[11px] text-[#FFFFFF] leading-[1.4] mb-12 md:mb-6 md:mt-1">
                Structure outbound campaigns with clearer ownership, targets, and workflow control.
              </p>

              {/* Floating Content */}
              <div className="relative flex-1 w-full flex items-center justify-center">
                <div className="absolute flex flex-col items-center scale-[0.45] sm:scale-[0.65] md:scale-[0.55] lg:scale-[0.7] xl:scale-[0.85] origin-center -translate-y-2">
                  <div className="flex items-center md:gap-[30px]">
                    
                    {/* Outbound Campaign card */}
                    <GlassWrapper className="relative rounded-[8.4px] w-[260px] md:w-auto md:p-[4.2px] scale-[0.7] md:scale-[0.75]">
                      <div className="rounded-[8.4px] p-3 bg-white flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="font-urbanist font-medium text-[10px] text-[#1F1F1F]">Outbound Campaign</span>
                          <div className="px-2 rounded-[38.12px] bg-[#D2FFD9]">
                            <span className="font-urbanist font-medium text-[7px] text-[#3AC750] leading-none">
                              Active
                            </span>
                          </div>
                        </div>
                        <div className="border-t-[0.56px] border-[#ECECED]" />
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5">
                            <Image src={Owner} alt="Owner" className="w-7 h-7 rounded-full object-cover object-center shrink-0" />
                            <div className="flex flex-col">
                              <span className="font-urbanist font-normal text-[7px] text-[#3E3E3E]">Owner</span>
                              <span className="font-urbanist font-medium text-[8.4px] text-[#1F1F1F] leading-none">John King</span>
                            </div>
                          </div>
                          <div className="self-stretch border-l-[0.56px] border-[#ECECED]" />
                          <div className="flex flex-col gap-1">
                            <span className="font-urbanist font-normal text-[7px] text-[#3E3E3E]">Team</span>
                            <div className="flex items-center gap-1 md:scale-[1]">
                              <Image src={Team1} alt="Team 1" className="w-6 h-6 rounded-full object-cover object-center" />
                              <Image src={Team2} alt="Team 2" className="w-6 h-6 rounded-full object-cover object-center" />
                              <Image src={Team3} alt="Team 3" className="w-6 h-6 rounded-full object-cover object-center" />
                              <div className="w-6 h-6 flex items-center justify-center shrink-0 bg-[#F5F5F5] rounded-[51.33px]">
                                <span className="font-urbanist text-[10px] text-[#9E9E9E] leading-none">+</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassWrapper>

                    {/* Target Accounts card */}
                    <GlassWrapper className="scale-[0.8] w-[210.7px] h-[82px] rounded-[8.4px] p-[4.2px] shrink-0">
                      <div className="rounded-[8.4px] p-[15.4px] bg-white h-full flex items-center gap-[18.2px] box-border">
                        <div className="w-[140.7px] h-[42.8px] flex items-center gap-[11.2px] shrink-0">
                          <TargetAccountsIcon />
                          <div className="w-[95.9px] h-[42.8px] flex flex-col gap-[1.4px] justify-center">
                            <span className="font-urbanist font-normal text-[8.4px] leading-none text-[#7D7D7D] h-[10px] flex items-center">Target Accounts</span>
                            <span className="font-urbanist font-bold text-[16.8px] leading-none text-[#5BEC71] h-[20px] flex items-center">120</span>
                            <span className="font-urbanist font-normal text-[8.4px] leading-none text-[#7D7D7D] h-[10px] flex items-center">Ideal Customer Profile</span>
                          </div>
                        </div>
                        <div className="relative bottom-[30%]">
                          <TargetMiniGraphIcon />
                        </div>
                      </div>
                    </GlassWrapper>
                  </div>

                  {/* Dashed connector lines */}
                  <div className="relative bottom-[25px]">
                    <DashedConnectorLine1 />
                  </div>

                  {/* Overall Process card */}
                  <GlassWrapper className="scale-[0.9] w-[192.836px] h-[88.8px] rounded-[8.4px] p-[4.2px] box-border">
                    <div className="rounded-[8.4px] p-[15.4px] bg-white h-full flex items-center gap-[30.8px] box-border">
                      <div className="w-[75px] h-[49.6px] flex flex-col gap-[2.8px] justify-center shrink-0">
                        <span className="font-urbanist font-medium text-[9.8px] leading-none text-[#3E3E3E] h-[12px] flex items-center">Overall Process</span>
                        <span className="font-urbanist font-bold text-[20px] leading-none text-[#8C48E6] h-[22px] flex items-center">62%</span>
                        <span className="font-urbanist font-normal text-[8.4px] leading-none text-[#7D7D7D] h-[10px] flex items-center">65 of 120 completed</span>
                      </div>
                      <OverallProcessGraphIcon />
                    </div>
                  </GlassWrapper>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 2: Coordinated Sequences ── */}
          <FeatureCard className="h-[220px] sm:h-[350px] md:h-[350px] lg:h-[400px]">
            <CardBackgrounds index={2} />
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              <CardHeader icon={<HeaderIcon2 />} title="Coordinated Sequences" />
              <p className="text-[10.6px] text-[#FFFFFF] leading-[1.4] mb-6 md:mt-1">
                Run LinkedIn and email outreach with a more consistent process for messaging and follow-up.
              </p>

              {/* Layout for Sequences */}
              <div className="relative w-full flex flex-col items-start gap-8 px-3 pb-3 scale-[0.5] md:scale-[0.80] lg:scale-[0.80] -translate-y-6">
                
                {/* Outreach Workflow card */}
                <GlassWrapper className="rounded-[8px] p-[4.86px] scale-[1.25] md:scale-[1] relative bottom-[37%] left-[-18%] md:bottom-0 md:left-0">
                  <div className="rounded-[8px] bg-white px-4 py-4 flex flex-col gap-3 w-[275.4px]">
                    <span className="font-urbanist font-medium text-[10px] text-[#3E3E3E]">Outreach Workflow</span>
                    <div className="flex items-center gap-2">
                      {steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="flex flex-col items-center gap-1">
                            {step.svg}
                            <span className="font-urbanist text-[8px] font-medium text-[#1F1F1F]">{step.label}</span>
                            <span className="font-urbanist text-[7px] text-[#9E9E9E]">{step.day}</span>
                          </div>
                          <div className="relative bottom-[15px]">{i < steps.length - 1 && <Arrow />}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassWrapper>

                {/* Campaign Performance card */}
                <GlassWrapper className="self-end rounded-[9.73px] p-[4.86px] -mr-[28px]">
                  <div className="rounded-[8px] bg-white px-4 py-3 flex flex-col gap-3 w-[275.4px]">
                    <span className="font-urbanist font-medium text-[10px] text-[#3E3E3E]">Campaign Performance</span>
                    <div className="flex items-center justify-between">
                      {perfItems.map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          {item.svg}
                          <span className="font-urbanist font-semibold text-[12px] text-[#1F1F1F]">{item.value}</span>
                          <span className="font-urbanist text-[8px] text-[#9E9E9E]">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassWrapper>

              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 3: Operational Visibility ── */}
          <FeatureCard className="h-[220px] md:h-[350px] lg:h-[400px]">
            <CardBackgrounds index={3} />
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              <CardHeader icon={<HeaderIcon3 />} title="Operational Visibility" />
              <p className="text-[10.4px] md:text-[10.42px] text-[#FFFFFF] leading-[1.4] mb-2 md:mt-1">
                Keep the team aligned on what has been sent, what needs attention, and what happens next.
              </p>

              <div className="relative flex-1 w-full flex items-start justify-center md:items-end mt-4 md:mt-0">
                <div className="relative w-[525px] h-[240px] scale-[0.42] sm:scale-[0.65] md:scale-[0.8] bottom-[13.5%] md:bottom-0 lg:scale-[0.85] origin-top md:origin-bottom shrink-0">
                  <div className="absolute top-[20px] left-[55px] z-10"><OpenRateBox /></div>
                  <div className="absolute top-[35px] right-[40px] z-10"><EmailsSentCard /></div>
                  <div className="absolute top-[100px] left-[210px] z-10"><BounceRateCard /></div>
                  <div className="absolute inset-x-0 bottom-[-10px] h-[187px] pointer-events-none"><Chart /></div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 4: Pipeline Connection ── */}
          <FeatureCard className="h-[220px] md:h-[350px] lg:h-[400px]">
            <CardBackgrounds index={4} />
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              <CardHeader icon={<HeaderIcon4 />} title="Pipeline Connection" />
              <p className="text-[10.76px] md:text-[11px] text-[#FFFFFF] leading-[1.4] mb-2 md:mb-12 md:mt-1">
                Move prospecting activity into CRM workflows without recreating context elsewhere.
              </p>

              <div className="relative flex-1 w-full h-full">
                <div className="absolute md:relative top-[-20%] md:top-auto left-[12%] md:left-auto w-full flex flex-col items-start px-2 md:px-4 pb-4 scale-[0.45] sm:scale-[0.6] md:scale-[0.7] lg:scale-[0.92] origin-top-left md:origin-top-left mt-2 md:-mt-2">
                  <div className="absolute left-[78px] top-[40px] z-0 pointer-events-none">
                    <ConnectingDashedLine />
                  </div>
                  <div className="relative z-10 flex items-center gap-0 ml-[16px]">
                    <ProspectingCard />
                  </div>
                  <div className="relative z-10 flex items-center gap-[40px] ml-[70px] mt-[65px]">
                    <ConnectedBox />
                    <CRMCard />
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════
// Reusable Structural Components
// ══════════════════════════════════════════════

export function FeatureCard({ children, className }) {
  return (
    <div
      className={`relative rounded-[20px] border border-white/10 bg-[#01091E] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_4px_4px_36px_rgba(117,186,255,0.12),inset_4px_4px_36px_rgba(91,236,113,0.05)] backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-300 ease-in-out p-6 lg:p-7 flex flex-col ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-2 z-10">
      <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center shrink-0">{icon}</div>
      <h3 className="text-[17px] leading-[1.2] font-medium text-white">{title}</h3>
    </div>
  );
}

function CardBackgrounds({ index }) {
  if (index === 1) {
    return (
      <>
        <div className="absolute -bottom-20 -right-20 pointer-events-none z-0 opacity-40">
          <BackgroundGlow id="303_14675_c1" viewBox="0 0 332 480" />
        </div>
        <GridOverlay mobileProps={{ size: "35px", pos: "-right-2 bottom-0" }} desktopProps={{ size: "60px", pos: "-right-2 bottom-0" }} mask="100% 100%" />
      </>
    );
  }
  if (index === 2) {
    return (
      <>
        <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
          <BackgroundGlow id="lead_glow_c2" viewBox="0 0 800 800" customDims={{ w: 800, h: 430 }} blur={80} />
        </div>
        <GridOverlay mobileProps={{ size: "40px", pos: "-left-8 bottom-0 h-[70%]", rgba: "0.1" }} desktopProps={{ size: "60px", pos: "-left-8 bottom-0 w-[50%] h-[70%]", rgba: "0.1" }} mask="0% 100%" />
      </>
    );
  }
  if (index === 3) {
    return (
      <>
        <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
          <BackgroundGlow id="123_client_c3" viewBox="0 0 800 800" customDims={{ w: 800, h: 800 }} customClass="h-[520px] md:h-[800px]" blur={80} />
        </div>
        <GridOverlay mobileProps={{ size: "40px", pos: "-left-10 bottom-0 h-[74%]", rgba: "0.1" }} desktopProps={{ size: "60px", pos: "-left-10 bottom-0 w-[50%] h-[84%]", rgba: "0.1" }} mask="0% 100%" />
      </>
    );
  }
  if (index === 4) {
    return (
      <>
        <div className="absolute -bottom-20 -right-20 pointer-events-none z-0 opacity-40">
          <BackgroundGlow id="303_14675_c4" viewBox="0 0 332 480" />
        </div>
        <GridOverlay mobileProps={{ size: "40px", pos: "-right-2 bottom-0" }} desktopProps={{ size: "60px", pos: "-right-2 bottom-0" }} mask="100% 100%" />
      </>
    );
  }
  return null;
}

// Extracted to remove duplication of the identical inner glow vectors
function BackgroundGlow({ id, viewBox, customDims = { w: 900, h: 480 }, customClass = "", blur = 74.9737 }) {
  return (
    <svg width={customDims.w} height={customDims.h} viewBox={viewBox} className={customClass} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.2" filter={`url(#filter0_f_${id})`}>
        <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill={`url(#paint0_radial_${id})`} />
      </g>
      <defs>
        <filter id={`filter0_f_${id}`} x="-100" y="-100" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={blur} result={`effect1_foregroundBlur_${id}`} />
        </filter>
        <radialGradient id={`paint0_radial_${id}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
          <stop stopColor="#5BEC71" />
          <stop offset="1" stopColor="#0F72D7" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function GridOverlay({ mobileProps, desktopProps, mask }) {
  const getStyle = (props) => ({
    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, ${props.rgba || "0.08"}) ${props.size === "60px" ? "4px" : "2px"}, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, ${props.rgba || "0.08"}) ${props.size === "60px" ? "4px" : "2px"}, transparent 1px)`,
    backgroundSize: `${props.size} ${props.size}`,
    backgroundPosition: "left bottom",
    maskImage: `radial-gradient(circle at ${mask}, black, transparent 80%)`,
    WebkitMaskImage: `radial-gradient(circle at ${mask}, black, transparent 80%)`,
  });

  return (
    <>
      <div className={`absolute pointer-events-none ${mobileProps.pos.includes('w-') ? '' : 'w-[80%]'} ${mobileProps.pos.includes('h-') ? '' : 'h-[80%]'} opacity-60 block md:hidden ${mobileProps.pos}`} style={getStyle(mobileProps)} />
      <div className={`absolute pointer-events-none ${desktopProps.pos.includes('w-') ? '' : 'w-[80%]'} ${desktopProps.pos.includes('h-') ? '' : 'h-[80%]'} opacity-60 hidden md:block ${desktopProps.pos}`} style={getStyle(desktopProps)} />
    </>
  );
}


// ══════════════════════════════════════════════
// SVG Icons & Graphics
// ══════════════════════════════════════════════

function Email1Icon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect width="29.1886" height="29.1886" rx="4.3783" fill="url(#email1_grad)" />
      <path d="M19.4575 9.72949H9.72791C9.05623 9.72949 8.51172 10.274 8.51172 10.9457V18.2428C8.51172 18.9145 9.05623 19.459 9.72791 19.459H19.4575C20.1291 19.459 20.6736 18.9145 20.6736 18.2428V10.9457C20.6736 10.274 20.1291 9.72949 19.4575 9.72949Z" stroke="white" strokeWidth="1.21619" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.6736 11.5538L15.219 15.02C15.0313 15.1376 14.8142 15.2 14.5927 15.2C14.3711 15.2 14.1541 15.1376 13.9663 15.02L8.51172 11.5538" stroke="white" strokeWidth="1.21619" strokeLinecap="round" strokeLinejoin="round" />
      <defs><linearGradient id="email1_grad" x1="23.7158" y1="-1.26406e-06" x2="3.64858" y2="29.1886" gradientUnits="userSpaceOnUse"><stop stopColor="#CCFFD4" /><stop offset="1" stopColor="#2EB0D7" /></linearGradient></defs>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect width="29.1886" height="29.1886" rx="4.3783" fill="url(#li_grad)" />
      <g clipPath="url(#li_clip)">
        <path d="M17.0275 12.1619C17.9951 12.1619 18.9232 12.5463 19.6074 13.2305C20.2917 13.9148 20.6761 14.8428 20.6761 15.8104V20.0671H18.2437V15.8104C18.2437 15.4879 18.1155 15.1785 17.8875 14.9505C17.6594 14.7224 17.35 14.5943 17.0275 14.5943C16.7049 14.5943 16.3956 14.7224 16.1675 14.9505C15.9394 15.1785 15.8113 15.4879 15.8113 15.8104V20.0671H13.3789V15.8104C13.3789 14.8428 13.7633 13.9148 14.4476 13.2305C15.1318 12.5463 16.0598 12.1619 17.0275 12.1619Z" stroke="white" strokeWidth="1.21619" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.9441 12.77H8.51172V20.0672H10.9441V12.77Z" stroke="white" strokeWidth="1.21619" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.72791 10.9457C10.3996 10.9457 10.9441 10.4012 10.9441 9.7295C10.9441 9.05781 10.3996 8.51331 9.72791 8.51331C9.05623 8.51331 8.51172 9.05781 8.51172 9.7295C8.51172 10.4012 9.05623 10.9457 9.72791 10.9457Z" stroke="white" strokeWidth="1.21619" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs><linearGradient id="li_grad" x1="29.1886" y1="-9.24257e-07" x2="3.64858" y2="31.0129" gradientUnits="userSpaceOnUse"><stop stopColor="#ACD5FF" /><stop offset="1" stopColor="#003F9D" /></linearGradient><clipPath id="li_clip"><rect width="14.5943" height="14.5943" fill="white" transform="translate(7.29688 7.29712)" /></clipPath></defs>
    </svg>
  );
}

function Email2Icon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect width="29.1886" height="29.1886" rx="4.3783" fill="url(#email2_grad)" />
      <path d="M19.4575 9.72949H9.72791C9.05623 9.72949 8.51172 10.274 8.51172 10.9457V18.2428C8.51172 18.9145 9.05623 19.459 9.72791 19.459H19.4575C20.1291 19.459 20.6736 18.9145 20.6736 18.2428V10.9457C20.6736 10.274 20.1291 9.72949 19.4575 9.72949Z" stroke="white" strokeWidth="1.21619" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.6736 11.5538L15.219 15.02C15.0313 15.1376 14.8142 15.2 14.5927 15.2C14.3711 15.2 14.1541 15.1376 13.9663 15.02L8.51172 11.5538" stroke="white" strokeWidth="1.21619" strokeLinecap="round" strokeLinejoin="round" />
      <defs><linearGradient id="email2_grad" x1="23.7158" y1="-1.26406e-06" x2="3.64858" y2="29.1886" gradientUnits="userSpaceOnUse"><stop stopColor="#FFCC9C" /><stop offset="1" stopColor="#FF8853" /></linearGradient></defs>
    </svg>
  );
}

function CallIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect width="29.1886" height="29.1886" rx="4.3783" fill="url(#call_grad)" />
      <g clipPath="url(#call_clip)">
        <path d="M20.672 17.5862V19.4105C20.6727 19.5798 20.638 19.7474 20.5702 19.9026C20.5023 20.0578 20.4028 20.1971 20.278 20.3116C20.1532 20.4261 20.0059 20.5132 19.8455 20.5675C19.685 20.6217 19.515 20.6419 19.3464 20.6266C17.4752 20.4233 15.6777 19.7839 14.0985 18.7598C12.6292 17.8262 11.3836 16.5805 10.4499 15.1112C9.42222 13.5248 8.78266 11.7186 8.58306 9.83902C8.56786 9.67086 8.58785 9.50138 8.64174 9.34136C8.69564 9.18135 8.78226 9.03431 8.89609 8.90961C9.00992 8.78491 9.14847 8.68528 9.30292 8.61706C9.45737 8.54884 9.62433 8.51352 9.79317 8.51336H11.6175C11.9126 8.51046 12.1987 8.61496 12.4224 8.8074C12.6462 8.99983 12.7924 9.26707 12.8337 9.55929C12.9107 10.1431 13.0535 10.7163 13.2593 11.268C13.3411 11.4857 13.3588 11.7222 13.3103 11.9496C13.2618 12.177 13.1492 12.3858 12.9857 12.5511L12.2134 13.3234C13.0791 14.8458 14.3396 16.1063 15.862 16.972L16.6343 16.1997C16.7996 16.0362 17.0083 15.9235 17.2357 15.875C17.4631 15.8265 17.6997 15.8442 17.9173 15.9261C18.4691 16.1319 19.0423 16.2747 19.6261 16.3517C19.9215 16.3934 20.1913 16.5422 20.3841 16.7698C20.577 16.9974 20.6794 17.2879 20.672 17.5862Z" stroke="white" strokeWidth="1.21619" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs><linearGradient id="call_grad" x1="29.1886" y1="-1.80502e-06" x2="-1.09457" y2="29.1886" gradientUnits="userSpaceOnUse"><stop stopColor="#B8A4FF" /><stop offset="1" stopColor="#6B31B6" /></linearGradient><clipPath id="call_clip"><rect width="14.5943" height="14.5943" fill="white" transform="translate(7.29688 7.29712)" /></clipPath></defs>
    </svg>
  );
}

function SentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="21.6437" height="21.6437" rx="3.11669" fill="#FFCC9C" fillOpacity="0.6"/>
      <g clipPath="url(#clip0_303_42720)">
        <path d="M14.2878 7.35876H7.36184C6.8837 7.35876 6.49609 7.74637 6.49609 8.22451V13.419C6.49609 13.8971 6.8837 14.2847 7.36184 14.2847H14.2878C14.766 14.2847 15.1536 13.8971 15.1536 13.419V8.22451C15.1536 7.74637 14.766 7.35876 14.2878 7.35876Z" stroke="#FF8853" strokeWidth="0.865747" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.1536 8.65747L11.2707 11.1248C11.137 11.2086 10.9825 11.253 10.8248 11.253C10.6671 11.253 10.5126 11.2086 10.379 11.1248L6.49609 8.65747" stroke="#FF8853" strokeWidth="0.865747" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs><clipPath id="clip0_303_42720"><rect width="10.389" height="10.389" fill="white" transform="translate(5.62891 5.62732)"/></clipPath></defs>
    </svg>
  );
}

function OpenedIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="21.6437" height="21.6437" rx="3.11669" fill="#B6DAFF" fillOpacity="0.6"/>
      <g clipPath="url(#clip0_303_42727)">
        <path d="M6.65234 10.8219C6.65234 10.8219 7.90234 7.90527 10.819 7.90527C13.7357 7.90527 14.9857 10.8219 14.9857 10.8219C14.9857 10.8219 13.7357 13.7386 10.819 13.7386C7.90234 13.7386 6.65234 10.8219 6.65234 10.8219Z" stroke="#63A2FF" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.8203 12.0719C11.5107 12.0719 12.0703 11.5123 12.0703 10.8219C12.0703 10.1315 11.5107 9.5719 10.8203 9.5719C10.13 9.5719 9.57031 10.1315 9.57031 10.8219C9.57031 11.5123 10.13 12.0719 10.8203 12.0719Z" stroke="#63A2FF" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs><clipPath id="clip0_303_42727"><rect width="10" height="10" fill="white" transform="translate(5.82031 5.8219)"/></clipPath></defs>
    </svg>
  );
}

function RepliedIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="21.6437" height="21.6437" rx="3.11669" fill="#FFA9CF" fillOpacity="0.45"/>
      <path d="M9.55078 12.9468L7.42578 10.8218L9.55078 8.69678" stroke="#DC486D" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.2258 13.3718V12.5218C14.2258 12.0709 14.0467 11.6385 13.7279 11.3197C13.4091 11.0009 12.9766 10.8218 12.5258 10.8218H7.42578" stroke="#DC486D" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MeetingsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="21.6437" height="21.6437" rx="3.11669" fill="#CEC0FF" fillOpacity="0.7"/>
      <g clipPath="url(#clip0_303_42745)">
        <path d="M15.0735 12.9128V14.1878C15.074 14.3062 15.0498 14.4233 15.0024 14.5318C14.9549 14.6402 14.8854 14.7376 14.7982 14.8176C14.711 14.8976 14.608 14.9585 14.4959 14.9965C14.3837 15.0344 14.2649 15.0485 14.147 15.0378C12.8392 14.8957 11.583 14.4488 10.4793 13.7331C9.45242 13.0806 8.58181 12.2099 7.92929 11.1831C7.21103 10.0743 6.76405 8.81199 6.62454 7.49832C6.61392 7.38079 6.62789 7.26234 6.66556 7.15051C6.70322 7.03868 6.76376 6.93591 6.84332 6.84876C6.92288 6.7616 7.01971 6.69197 7.12765 6.64429C7.2356 6.59661 7.35229 6.57193 7.47029 6.57182H8.74529C8.95155 6.56979 9.1515 6.64283 9.30789 6.77732C9.46428 6.91181 9.56643 7.09858 9.59529 7.30282C9.64911 7.71085 9.74891 8.11148 9.89279 8.49707C9.94997 8.64919 9.96235 8.81451 9.92845 8.97344C9.89456 9.13238 9.81581 9.27827 9.70154 9.39382L9.16179 9.93357C9.7668 10.9976 10.6478 11.8786 11.7118 12.4836L12.2515 11.9438C12.3671 11.8296 12.513 11.7508 12.6719 11.7169C12.8309 11.683 12.9962 11.6954 13.1483 11.7526C13.5339 11.8965 13.9345 11.9963 14.3425 12.0501C14.549 12.0792 14.7375 12.1832 14.8723 12.3423C15.0071 12.5013 15.0787 12.7044 15.0735 12.9128Z" stroke="#8C48E6" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs><clipPath id="clip0_303_42745"><rect width="10.2" height="10.2" fill="white" transform="translate(5.72266 5.7218)"/></clipPath></defs>
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.324219 2.06399H-9.94205e-05V2.71262H0.324219V2.38831V2.06399ZM23.2558 2.61763C23.3825 2.49098 23.3825 2.28563 23.2558 2.15898L21.1919 0.0950298C21.0652 -0.0316243 20.8599 -0.0316243 20.7332 0.0950298C20.6066 0.221684 20.6066 0.427031 20.7332 0.553685L22.5678 2.38831L20.7332 4.22293C20.6066 4.34958 20.6066 4.55493 20.7332 4.68158C20.8599 4.80824 21.0652 4.80824 21.1919 4.68158L23.2558 2.61763ZM0.324219 2.38831V2.71262H23.0265V2.38831V2.06399H0.324219V2.38831Z" fill="#7D7D7D"/>
    </svg>
  );
}

function OpenRateIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <rect width="25.1515" height="25.1515" rx="3.77273" fill="url(#or_grad)" />
      <path d="M7.33594 12.5758C7.33594 12.5758 8.90791 8.90784 12.5758 8.90784C16.2438 8.90784 17.8157 12.5758 17.8157 12.5758C17.8157 12.5758 16.2438 16.2437 12.5758 16.2437C8.90791 16.2437 7.33594 12.5758 7.33594 12.5758Z" stroke="white" strokeWidth="1.04798" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5759 14.1477C13.4441 14.1477 14.1478 13.4439 14.1478 12.5758C14.1478 11.7076 13.4441 11.0038 12.5759 11.0038C11.7077 11.0038 11.0039 11.7076 11.0039 12.5758C11.0039 13.4439 11.7077 14.1477 12.5759 14.1477Z" stroke="white" strokeWidth="1.04798" strokeLinecap="round" strokeLinejoin="round" />
      <defs><linearGradient id="or_grad" x1="25.1515" y1="-1.55537e-06" x2="-0.943182" y2="25.1515" gradientUnits="userSpaceOnUse"><stop stopColor="#B8A4FF" /><stop offset="1" stopColor="#6B31B6" /></linearGradient></defs>
    </svg>
  );
}

function EmailsSentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 25 25" fill="none">
      <rect width="24.543" height="24.543" rx="3.68145" fill="url(#es_grad)" />
      <g clipPath="url(#es_clip)">
        <path d="M16.3693 8.18097H10.2336C9.66878 8.18097 9.21094 8.63881 9.21094 9.20359V13.8054C9.21094 14.3702 9.66878 14.828 10.2336 14.828H16.3693C16.9341 14.828 17.3919 14.3702 17.3919 13.8054V9.20359C17.3919 8.63881 16.9341 8.18097 16.3693 8.18097Z" stroke="white" strokeWidth="1.02262" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.3919 9.7149L13.7616 11.6477C13.4702 11.8011 13.1327 11.8011 12.8413 11.6477L9.21094 9.7149" stroke="white" strokeWidth="1.02262" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.16406 10.2261V15.8506C7.16406 16.413 7.62424 16.8732 8.18669 16.8732H15.3451" stroke="white" strokeWidth="1.02262" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs><linearGradient id="es_grad" x1="24.543" y1="-1.51773e-06" x2="-0.920362" y2="24.543" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA9CF" /><stop offset="1" stopColor="#C62943" /></linearGradient><clipPath id="es_clip"><rect width="12.2715" height="12.2715" fill="white" transform="translate(6.13672 6.13574)" /></clipPath></defs>
    </svg>
  );
}

function BounceRateIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20.5419" height="20.5419" rx="3.07258" fill="url(#paint0_linear_303_42806)" />
      <g clipPath="url(#clip0_303_42806)">
        <path d="M14.4478 12.8458L11.0145 6.83747C10.9396 6.70538 10.8311 6.5955 10.6999 6.51906C10.5687 6.44262 10.4196 6.40234 10.2678 6.40234C10.1159 6.40234 9.9668 6.44262 9.83562 6.51906C9.70443 6.5955 9.59587 6.70538 9.521 6.83747L6.08767 12.8458C6.012 12.9769 5.97232 13.1256 5.97266 13.2769C5.97299 13.4282 6.01333 13.5768 6.08958 13.7075C6.16583 13.8382 6.27528 13.9464 6.40684 14.0212C6.5384 14.096 6.68739 14.1347 6.83871 14.1333H13.7054C13.856 14.1332 14.0039 14.0934 14.1342 14.018C14.2646 13.9426 14.3728 13.8342 14.4481 13.7038C14.5233 13.5733 14.5629 13.4253 14.5628 13.2748C14.5628 13.1242 14.5231 12.9762 14.4478 12.8458Z" stroke="white" strokeWidth="0.858333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.2695 8.9834V10.7001" stroke="white" strokeWidth="0.858333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.2695 12.4167H10.2738" stroke="white" strokeWidth="0.858333" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs><linearGradient id="paint0_linear_303_42806" x1="20.5419" y1="-6.5046e-07" x2="2.56774" y2="21.8258" gradientUnits="userSpaceOnUse"><stop stopColor="#FFCC9C" /><stop offset="1" stopColor="#FF755F" /></linearGradient><clipPath id="clip0_303_42806"><rect width="10.3" height="10.3" fill="white" transform="translate(5.12109 5.12097)" /></clipPath></defs>
    </svg>
  );
}

function ChartSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 525 187" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 0L0.5 186.5H534" stroke="white" fill="none" />
      <path d="M72.0656 73.534L3.07833 175.678C1.07204 178.649 0 182.151 0 185.736H520.5C520.5 182.114 519.7 178.537 518.157 175.26L453.462 37.8813C429.892 -12.1706 358.898 -12.7525 334.511 36.9063L309.407 88.0226C286.574 134.516 221.53 137.79 194.144 93.8231L182.781 75.5798C157.507 35.0035 98.8212 33.9191 72.0656 73.534Z" fill="url(#green_fill)" fillOpacity="0.12" />
      <path d="M0 185.736L72.0656 73.534C98.8212 33.9191 157.507 35.0035 182.781 75.5798L194.144 93.8231C221.53 137.79 286.574 134.516 309.407 88.0226L334.511 36.9063C358.898 -12.7525 429.892 -12.1706 453.462 37.8813L520.5 185.736" stroke="url(#green_line)" strokeWidth="2" fill="none" />
      <path d="M87.7531 109.616L0 0V175.5H521.5L470.366 107.89C451.932 83.5157 414.602 85.8559 399.356 112.341C383.085 140.608 342.403 140.908 325.716 112.884L309.95 86.4064C286.576 47.1517 229.853 46.807 206.004 85.7748L195.57 102.822C171.694 141.834 116.338 145.323 87.7531 109.616Z" fill="url(#paint0_linear_303_42781)" fillOpacity="0.12" />
      <path d="M0 0L87.7531 109.616C116.338 145.323 171.694 141.834 195.57 102.822L206.004 85.7748C229.853 46.807 286.576 47.1517 309.95 86.4064L325.716 112.884C342.403 140.908 383.085 140.608 399.356 112.341C414.602 85.8559 451.932 83.5157 470.366 107.89L521.5 175.5" stroke="url(#paint0_linear_303_42781)" strokeWidth="2" fill="none" />
      <defs>
        <linearGradient id="paint0_linear_303_42781" x1="521.5" y1="-1.13167e-05" x2="399.35" y2="335.511" gradientUnits="userSpaceOnUse"><stop stopColor="#B8A4FF" /><stop offset="1" stopColor="#6B31B6" /></linearGradient>
        <linearGradient id="green_fill" x1="422.906" y1="-86.2642" x2="287.912" y2="277.448" gradientUnits="userSpaceOnUse"><stop stopColor="#CCFFD4" /><stop offset="1" stopColor="#2EB0D7" /></linearGradient>
        <linearGradient id="green_line" x1="0" y1="0" x2="521" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#5BEC71" /><stop offset="1" stopColor="#2EB0D7" /></linearGradient>
      </defs>
    </svg>
  );
}

function TargetAccountsIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect width="33.6" height="33.6" rx="4.32" fill="url(#target_accounts_grad)" />
      <g clipPath="url(#target_accounts_clip)">
        <path d="M16.7969 24.7999C21.2152 24.7999 24.7969 21.2182 24.7969 16.7999C24.7969 12.3816 21.2152 8.79993 16.7969 8.79993C12.3786 8.79993 8.79688 12.3816 8.79688 16.7999C8.79688 21.2182 12.3786 24.7999 16.7969 24.7999Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.7961 21.6C19.4471 21.6 21.5961 19.451 21.5961 16.8C21.5961 14.149 19.4471 12 16.7961 12C14.1451 12 11.9961 14.149 11.9961 16.8C11.9961 19.451 14.1451 21.6 16.7961 21.6Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.7953 18.4C17.679 18.4 18.3953 17.6836 18.3953 16.8C18.3953 17.6836 17.679 15.2 16.7953 15.2C15.9117 15.2 15.1953 15.9163 15.1953 16.8C15.1953 17.6836 15.9117 18.4 16.7953 18.4Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs><linearGradient id="target_accounts_grad" x1="27.3" y1="-1.4551e-06" x2="4.2" y2="33.6" gradientUnits="userSpaceOnUse"><stop stopColor="#CCFFD4" /><stop offset="1" stopColor="#2EB0D7" /></linearGradient><clipPath id="target_accounts_clip"><rect width="19.2" height="19.2" fill="white" transform="translate(7.19922 7.19995)" /></clipPath></defs>
    </svg>
  );
}

function TargetMiniGraphIcon() {
  return (
    <svg width="12.6" height="12.6" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M8.40078 11.025V9.975C8.40078 9.41805 8.17953 8.8839 7.78571 8.49008C7.39188 8.09625 6.85774 7.875 6.30078 7.875H3.15078C2.59383 7.875 2.05968 8.09625 1.66586 8.49008C1.27203 8.8839 1.05078 9.41805 1.05078 9.975V11.025" stroke="#818285" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.725 5.77495C5.8848 5.77495 6.825 4.83475 6.825 3.67495C6.825 2.51515 5.8848 1.57495 4.725 1.57495C3.5652 1.57495 2.625 2.51515 2.625 3.67495C2.625 4.83475 3.5652 5.77495 4.725 5.77495Z" stroke="#818285" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5516 11.025V9.97499C11.5512 9.50969 11.3963 9.05769 11.1113 8.68995C10.8262 8.32221 10.4271 8.05956 9.97656 7.94324" stroke="#818285" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.39844 1.64331C8.85016 1.75897 9.25053 2.02168 9.53645 2.39002C9.82236 2.75837 9.97756 3.2114 9.97756 3.67769C9.97756 4.14397 9.82236 4.597 9.53645 4.96535C9.25053 5.33369 8.85016 5.5964 8.39844 5.71206" stroke="#818285" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashedConnectorLine1() {
  return (
    <svg width="285" height="40" viewBox="0 0 285 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.398438 11.9V27.4C0.398438 34.0274 5.77102 39.4 12.3984 39.4H272.398C279.026 39.4 284.398 34.0274 284.398 27.4V0.400024" stroke="url(#paint0_linear_303_42648)" strokeWidth="0.8" strokeLinecap="square" strokeDasharray="6 6" />
      <defs><linearGradient id="paint0_linear_303_42648" x1="21.6984" y1="44.7625" x2="30.4261" y2="-30.3483" gradientUnits="userSpaceOnUse"><stop stopColor="#5BEC71" /><stop offset="0.902778" stopColor="#0F72D7" /></linearGradient></defs>
    </svg>
  );
}

function OverallProcessGraphIcon() {
  return (
    <svg width="47.836" height="48.032" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M23.9189 48.0317C17.5757 48.0317 11.4923 45.5119 7.00699 41.0266C2.52168 36.5413 0.00185166 30.4579 0.00184459 24.1147C0.00183751 17.7715 2.52165 11.6881 7.00695 7.20281C11.4923 2.71749 17.5756 0.197656 23.9188 0.197641L23.9189 7.38198C19.4811 7.38199 15.225 9.1449 12.0871 12.2829C8.94907 15.4209 7.18618 19.6769 7.18618 24.1147C7.18619 28.5525 8.94909 32.8085 12.0871 35.9465C15.2251 39.0845 19.4811 40.8474 23.9189 40.8474L23.9189 48.0317Z" fill="#CDCDCD" fillOpacity="0.3" />
      <path d="M23.917 0C27.6366 4.43556e-08 31.3049 0.867549 34.6305 2.53371C37.956 4.19986 40.8471 6.6187 43.074 9.59799C45.3009 12.5773 46.8023 16.0349 47.4587 19.6961C48.1151 23.3573 47.9086 27.1212 46.8555 30.6886C45.8024 34.256 43.9317 37.5285 41.3922 40.2463C38.8527 42.964 35.7143 45.052 32.2264 46.3443C28.7385 47.6365 24.9973 48.0975 21.3 47.6905C17.6028 47.2835 14.0514 46.0198 10.9282 43.9997L14.9514 37.7792C17.1073 39.1735 19.5586 40.0458 22.1106 40.3268C24.6627 40.6077 27.2451 40.2895 29.6526 39.3975C32.0601 38.5055 34.2264 37.0643 35.9793 35.1884C37.7323 33.3124 39.0235 31.0535 39.7504 28.5911C40.4773 26.1287 40.6199 23.5307 40.1668 21.0035C39.7136 18.4764 38.6774 16.0897 37.1402 14.0333C35.6031 11.9768 33.6075 10.3072 31.312 9.15711C29.0166 8.00704 26.4845 7.40821 23.917 7.40821V0Z" fill="url(#overall_process_grad)" />
      <defs><linearGradient id="overall_process_grad" x1="47.8341" y1="-2.95805e-06" x2="-1.79378" y2="47.8341" gradientUnits="userSpaceOnUse"><stop stopColor="#B8A4FF" /><stop offset="1" stopColor="#6B31B6" /></linearGradient></defs>
    </svg>
  );
}

function ProspectingEmailIcon() {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="30.524" height="30.524" rx="4.5786" fill="url(#paint0_linear_303_42857)"/>
      <g clipPath="url(#clip0_303_42857)">
        <path d="M20.3528 10.1747H10.1781C9.47567 10.1747 8.90625 10.7441 8.90625 11.4465V19.0775C8.90625 19.7799 9.47567 20.3494 10.1781 20.3494H20.3528C21.0552 20.3494 21.6246 19.7799 21.6246 19.0775V11.4465C21.6246 10.7441 21.0552 10.1747 20.3528 10.1747Z" stroke="white" strokeWidth="1.27183" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.6246 12.0824L15.9204 15.7071C15.7241 15.8301 15.4971 15.8954 15.2654 15.8954C15.0337 15.8954 14.8067 15.8301 14.6104 15.7071L8.90625 12.0824" stroke="white" strokeWidth="1.27183" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs><linearGradient id="paint0_linear_303_42857" x1="24.8008" y1="-1.32189e-06" x2="3.8155" y2="30.524" gradientUnits="userSpaceOnUse"><stop stopColor="#FFCC9C"/><stop offset="1" stopColor="#FF8853"/></linearGradient><clipPath id="clip0_303_42857"><rect width="15.262" height="15.262" fill="white" transform="translate(7.63281 7.63098)"/></clipPath></defs>
    </svg>
  );
}

function ConnectedCheckIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
      <path d="M8.48047 11.0225C8.8446 11.5093 9.30916 11.9121 9.84265 12.2036C10.3761 12.495 10.9661 12.6684 11.5724 12.7118C12.1788 12.7552 12.7874 12.6677 13.357 12.4553C13.9265 12.2428 14.4438 11.9103 14.8736 11.4804L17.4172 8.93671C18.1895 8.13714 18.6168 7.06625 18.6071 5.95468C18.5975 4.84311 18.1516 3.77981 17.3656 2.99378C16.5796 2.20775 15.5162 1.76189 14.4047 1.75224C13.2931 1.74258 12.2222 2.16989 11.4226 2.94214L9.96427 4.39203" stroke="#5BEC71" strokeWidth="1.69578" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.869 9.32682C11.5049 8.84002 11.0403 8.43723 10.5068 8.14576C9.97334 7.85429 9.38341 7.68097 8.77705 7.63754C8.17068 7.59411 7.56207 7.6816 6.9925 7.89407C6.42292 8.10654 5.9057 8.43902 5.47592 8.86896L2.93225 11.4126C2.16 12.2122 1.73269 13.2831 1.74235 14.3947C1.75201 15.5062 2.19786 16.5695 2.98389 17.3556C3.76992 18.1416 4.83323 18.5874 5.94479 18.5971C7.05636 18.6068 8.12726 18.1795 8.92683 17.4072L10.3767 15.9573" stroke="#5BEC71" strokeWidth="1.69578" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CRMAmplitiveIcon() {
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32.2198" height="32.2198" rx="4.5786" fill="url(#paint0_linear_303_42865)"/>
      <g clipPath="url(#clip0_303_42865)">
        <path d="M21.0591 10.4575H11.1671C10.3866 10.4575 9.75391 11.0902 9.75391 11.8707V17.5233C9.75391 18.3037 10.3866 18.9364 11.1671 18.9364H21.0591C21.8396 18.9364 22.4722 18.3037 22.4722 17.5233V11.8707C22.4722 11.0902 21.8396 10.4575 21.0591 10.4575Z" stroke="white" strokeWidth="1.41315" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.04688 21.7627H23.1784" stroke="white" strokeWidth="1.41315" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs><linearGradient id="paint0_linear_303_42865" x1="2.41648" y1="36.65" x2="33.428" y2="-1.4777e-06" gradientUnits="userSpaceOnUse"><stop stopColor="#5BEC71"/><stop offset="0.902778" stopColor="#0F72D7"/></linearGradient><clipPath id="clip0_303_42865"><rect width="16.9578" height="16.9578" fill="white" transform="translate(7.63281 7.6311)"/></clipPath></defs>
    </svg>
  );
}

function ConnectingDashedLine() {
  return (
    <svg width="338" height="135" viewBox="0 0 338 135" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 0.5H0.5V134.5H337.5" stroke="url(#paint0_linear_303_42844)" strokeWidth="1.5" strokeLinecap="square" strokeDasharray="6 6" />
      <defs><linearGradient id="paint0_linear_303_42844" x1="25.775" y1="152.925" x2="104.828" y2="-82.0351" gradientUnits="userSpaceOnUse"><stop stopColor="#5BEC71"/><stop offset="0.902778" stopColor="#0F72D7"/></linearGradient></defs>
    </svg>
  );
}

function HeaderIcon1() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="38" height="38" rx="5.4" fill="url(#campflow_icon_grad)" />
      <rect x="10" y="12" width="18" height="15" rx="2" stroke="white" strokeWidth="1.67" fill="none" />
      <line x1="10" y1="17.5" x2="28" y2="17.5" stroke="white" strokeWidth="1.67" />
      <line x1="15" y1="9.5" x2="15" y2="14" stroke="white" strokeWidth="1.67" strokeLinecap="round" />
      <line x1="23" y1="9.5" x2="23" y2="14" stroke="white" strokeWidth="1.67" strokeLinecap="round" />
      <defs><linearGradient id="campflow_icon_grad" x1="38" y1="-2.34991e-06" x2="-1.425" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA9CF" /><stop offset="1" stopColor="#C62943" /></linearGradient></defs>
    </svg>
  );
}

function HeaderIcon2() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="38" height="38" rx="5.4" fill="url(#paint0_linear_303_42679)"/>
      <path d="M17.332 14H26.4987" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.332 19H26.4987" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.332 24H26.4987" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.332 14H13.1654V17.3333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.332 17.3334H13.9987" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.9987 24H12.332C12.332 23.1666 13.9987 22.3333 13.9987 21.5C13.9987 20.6666 13.1654 20.25 12.332 20.6666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <defs><linearGradient id="paint0_linear_303_42679" x1="30.875" y1="-1.64565e-06" x2="4.75" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#CCFFD4"/><stop offset="1" stopColor="#2EB0D7"/></linearGradient></defs>
    </svg>
  );
}

function HeaderIcon3() {
  return (
    <svg width="38" height="38" viewBox="0 0 26 26" fill="none">
      <rect width="25.1515" height="25.1515" rx="3.77273" fill="url(#ov_icon_grad)" />
      <path d="M7.33594 12.5758C7.33594 12.5758 8.90791 8.90784 12.5758 8.90784C16.2438 8.90784 17.8157 12.5758 17.8157 12.5758C17.8157 12.5758 16.2438 16.2437 12.5758 16.2437C8.90791 16.2437 7.33594 12.5758 7.33594 12.5758Z" stroke="white" strokeWidth="1.04798" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5759 14.1477C13.4441 14.1477 14.1478 13.4439 14.1478 12.5758C14.1478 11.7076 13.4441 11.0038 12.5759 11.0038C11.7077 11.0038 11.0039 11.7076 11.0039 12.5758C11.0039 13.4439 11.7077 14.1477 12.5759 14.1477Z" stroke="white" strokeWidth="1.04798" strokeLinecap="round" strokeLinejoin="round" />
      <defs><linearGradient id="ov_icon_grad" x1="25.1515" y1="-1.55537e-06" x2="-0.943182" y2="25.1515" gradientUnits="userSpaceOnUse"><stop stopColor="#ACD5FF" /><stop offset="1" stopColor="#003F9D" /></linearGradient></defs>
    </svg>
  );
}

function HeaderIcon4() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
      <rect width="38" height="38" rx="5.4" fill="url(#pipe_icon_grad)" />
      <path d="M16.48 20.02C16.844 20.51 17.31 20.91 17.843 21.2C18.376 21.49 18.966 21.67 19.572 21.71C20.179 21.75 20.787 21.67 21.357 21.46C21.927 21.24 22.444 20.91 22.874 20.48L25.417 17.94C26.19 17.14 26.617 16.07 26.607 14.95C26.598 13.84 26.152 12.78 25.366 11.99C24.58 11.21 23.516 10.76 22.405 10.75C21.293 10.74 20.222 11.17 19.423 11.94L17.964 13.39" stroke="white" strokeWidth="1.69578" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.869 18.33C19.505 17.84 19.04 17.44 18.507 17.15C17.973 16.85 17.383 16.68 16.777 16.64C16.171 16.59 15.562 16.68 14.993 16.89C14.423 17.11 13.906 17.44 13.476 17.87L10.932 20.41C10.16 21.21 9.733 22.28 9.742 23.39C9.752 24.51 10.198 25.57 10.984 26.36C11.77 27.14 12.833 27.59 13.945 27.6C15.056 27.61 16.127 27.18 16.927 26.41L18.377 24.96" stroke="white" strokeWidth="1.69578" strokeLinecap="round" strokeLinejoin="round" />
      <defs><linearGradient id="pipe_icon_grad" x1="30.875" y1="-1.64565e-06" x2="4.75" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#FFCC9C" /><stop offset="1" stopColor="#FF8853" /></linearGradient></defs>
    </svg>
  );
}