"use client";

import React from "react";
import Image from "next/image";
import desktop from "../public/Desktop - 20.svg"

export default function Cards() {
  return (
    <div
      className="bg-[#01091E] overflow-hidden pb-20"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* ══════════════════════════════════════════════
          SECTION 2 — TEXT BLOCK
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 py-12 md:py-16 lg:py-22 px-5 lg:px-6 max-w-[1180px] mx-auto text-center">
        <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-medium leading-[1.3] text-white mb-6">
          Keep your content pipeline clear, scheduled,{" "}
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#0F72D7]">
             and moving
          </span>
        </h2>
        <p className="text-[13.4px] lg:text-[13px] text-white/80 leading-[1.2] max-w-[1100px] mx-auto">
          Manage your content calendar, deadlines, and publishing flow in one
          place.
        </p>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 — FEATURE CARDS
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto py-4 lg:py-12 px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* ── CARD 1: Projects ── */}
          <FeatureCard className="h-[220px] sm:h-[380px] md:h-[350px] lg:h-[400px]">
            <CardBackgrounds index={1} />
            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-gradient-to-bl from-[#FFA9CF] to-[#C62943] rounded-[4px] scale-[0.85] md:scale-[1] flex items-center justify-center shadow-[0_0_15px_rgba(255,107,139,0.3)]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.7513 16.6667H3.33464C2.89261 16.6667 2.46868 16.4911 2.15612 16.1785C1.84356 15.866 1.66797 15.442 1.66797 15V4.16667C1.66797 3.25 2.41797 2.5 3.33464 2.5H6.60964C6.88415 2.50142 7.15406 2.57063 7.39539 2.70147C7.63672 2.83231 7.84199 3.02073 7.99297 3.25L8.6763 4.25C8.82728 4.47927 9.03256 4.66769 9.27388 4.79853C9.51521 4.92937 9.78512 4.99858 10.0596 5H16.668C17.11 5 17.5339 5.17559 17.8465 5.48816C18.159 5.80072 18.3346 6.22464 18.3346 6.66667V9.16667"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6193 16.3807 12.5 15 12.5C13.6193 12.5 12.5 13.6193 12.5 15C12.5 16.3807 13.6193 17.5 15 17.5Z"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 11.6666V12.5"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 17.5V18.3333"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.3333 15H17.5"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.5013 15H11.668"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.499 12.5L16.7656 13.2333"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.2333 16.7666L12.5 17.4999"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.499 17.4999L16.7656 16.7666"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.2333 13.2333L12.5 12.5"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                }
                title="Projects"
              />
              <p className="text-[11px] md:text-[13px] text-[#FFFFFF] leading-[1.4] mb-12 md:mb-6 md:mt-1">
                Organize campaign work, tasks, deliverables, and ownership
                inside one system.
              </p>

              {/* Floating Content: Project Overview */}
              <div className="relative flex-1 w-full flex items-center justify-center">
                {/* Updated wrapper width/height to match inner container for perfect scaling */}
                <div className="absolute w-[515px] h-[175.91px] scale-[0.45] sm:scale-[0.65] md:scale-[0.65] lg:scale-[0.8] xl:scale-[0.95] origin-center -translate-y-2">
                  {/* Glassmorphism Container */}
                  <div className="w-full h-full flex flex-col gap-[16.92px] bg-[#FFFFFF0F] border border-white/10 rounded-[11.63px] p-[23.26px] shadow-[inset_2.11px_2.11px_19.03px_0px_#75BAFF1F,inset_2.11px_2.11px_19.03px_0px_#5BEC710D,0_4.23px_33.84px_rgba(117,186,255,0.16)] backdrop-blur-xl">
                    {/* Removed mb-5 since we are using gap on the parent now */}
                    <h4 className="text-white text-[16px] font-medium leading-none">
                      Project overview
                    </h4>

                    <div className="grid grid-cols-4 gap-4 flex-1">
                    {/* Subcard 1 */}
                    <div className="bg-white rounded-[12px] p-3 flex flex-col justify-between h-full shadow-lg transition-transform hover:-translate-y-1">
                        <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-gradient-to-bl from-[#B8A4FF] to-[#6B31B6] flex items-center justify-center">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_425_36145)">
                                <path d="M2.77734 3.39282L3.70265 4.31812L6.78701 1.23376" stroke="white" strokeWidth="0.616872" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.47763 3.70122V5.86027C6.47763 6.02387 6.41264 6.18078 6.29695 6.29646C6.18127 6.41215 6.02436 6.47714 5.86076 6.47714H1.54265C1.37905 6.47714 1.22214 6.41215 1.10646 6.29646C0.990773 6.18078 0.925781 6.02387 0.925781 5.86027V1.54216C0.925781 1.37856 0.990773 1.22166 1.10646 1.10597C1.22214 0.990285 1.37905 0.925293 1.54265 0.925293H4.93545" stroke="white" strokeWidth="0.616872" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_425_36145">
                                <rect width="7.40246" height="7.40246" fill="white" />
                                </clipPath>
                            </defs>
                            </svg>
                        </div>
                        <span className="text-[10px] font-medium text-gray-600">
                            Tasks
                        </span>
                        </div>
                        <div className="flex flex-col justify-between gap-1.5">
                        <div>
                            <div className="text-[16px] font-semibold text-[#3E3E3E] leading-none">
                            28
                            </div>
                            <div className="text-[7px] text-gray-400 mt-1">
                            Total tasks
                            </div>
                        </div>
                        <span className="text-[7px] font-medium text-end text-[#071F37] cursor-pointer">
                            View all &gt;
                        </span>
                        </div>
                    </div>

                    {/* Subcard 2 */}
                    <div className="bg-white rounded-[12px] p-3 flex flex-col justify-between h-full shadow-lg transition-transform hover:-translate-y-1">
                        <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-gradient-to-bl from-[#B6DAFF] to-[#63A2FF] flex items-center justify-center">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_425_36159)">
                                <path d="M3.70155 6.78554C5.40499 6.78554 6.78591 5.40463 6.78591 3.70118C6.78591 1.99774 5.40499 0.616821 3.70155 0.616821C1.9981 0.616821 0.617188 1.99774 0.617188 3.70118C0.617188 5.40463 1.9981 6.78554 3.70155 6.78554Z" stroke="white" strokeWidth="0.616872" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.70312 1.85059V3.7012L4.93687 4.31807" stroke="white" strokeWidth="0.616872" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_425_36159">
                                <rect width="7.40246" height="7.40246" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                        </div>
                        <span className="text-[10px] font-medium text-gray-600">
                            In process
                        </span>
                        </div>
                        <div className="flex flex-col justify-between gap-1.5">
                        <div>
                            <div className="text-[16px] font-semibold text-[#3E3E3E] leading-none">
                            12
                            </div>
                            <div className="text-[7px] text-gray-400 mt-1">
                            Tasks
                            </div>
                        </div>
                        <span className="text-[7px] font-medium text-end text-[#071F37] cursor-pointer">
                            View all &gt;
                        </span>
                        </div>
                    </div>

                    {/* Subcard 3 */}
                    <div className="bg-white rounded-[12px] p-3 flex flex-col justify-between h-full shadow-lg transition-transform hover:-translate-y-1">
                        <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-gradient-to-bl from-[#BBFFC5] to-[#46C95A] flex items-center justify-center">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_425_36173)">
                            <path d="M3.70155 6.78554C5.40504 6.78554 6.78591 5.40467 6.78591 3.70118C6.78591 1.99769 5.40504 0.616821 3.70155 0.616821C1.99806 0.616821 0.617188 1.99769 0.617188 3.70118C0.617188 5.40467 1.99806 6.78554 3.70155 6.78554Z" stroke="white" strokeWidth="0.616872" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.77734 3.70122L3.39422 4.31809L4.62796 3.08435" stroke="white" strokeWidth="0.616872" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_425_36173">
                            <rect width="7.40246" height="7.40246" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        <span className="text-[10px] font-medium text-gray-600">
                            Completed
                        </span>
                        </div>
                        <div className="flex flex-col justify-between gap-1.5">
                        <div>
                            <div className="text-[16px] font-semibold text-[#3E3E3E] leading-none">
                            12
                            </div>
                            <div className="text-[7px] text-gray-400 mt-1">
                            Tasks
                            </div>
                        </div>
                        <span className="text-[7px] font-medium text-end text-[#071F37] cursor-pointer">
                            View all &gt;
                        </span>
                        </div>
                    </div>

                    {/* Subcard 4 */}
                    <div className="bg-white rounded-[12px] p-3 flex flex-col justify-between h-full shadow-lg transition-transform hover:-translate-y-1">
                        <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-gradient-to-bl from-[#FFCC9C] to-[#FF8853] flex items-center justify-center">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_425_36187)">
                            <path d="M5.86076 1.23376H1.54265C1.20196 1.23376 0.925781 1.50995 0.925781 1.85064V6.16874C0.925781 6.50943 1.20196 6.78561 1.54265 6.78561H5.86076C6.20145 6.78561 6.47763 6.50943 6.47763 6.16874V1.85064C6.47763 1.50995 6.20145 1.23376 5.86076 1.23376Z" stroke="white" strokeWidth="0.616872" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.93359 0.616821V1.85057" stroke="white" strokeWidth="0.616872" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.46875 0.616821V1.85057" stroke="white" strokeWidth="0.616872" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M0.925781 3.08435H6.47763" stroke="white" strokeWidth="0.616872" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_425_36187">
                            <rect width="7.40246" height="7.40246" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                                                    </div>
                        <span className="text-[10px] font-medium text-gray-600">
                            Due this week
                        </span>
                        </div>
                        <div className="flex flex-col justify-between gap-1.5">
                        <div>
                            <div className="text-[16px] font-semibold text-[#3E3E3E] leading-none">
                            12
                            </div>
                            <div className="text-[7px] text-gray-400 mt-1">
                            Tasks
                            </div>
                        </div>
                        <span className="text-[7px] font-medium text-end text-[#071F37] cursor-pointer">
                            View all &gt;
                        </span>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 2: Calendar Visibility ── */}
          <FeatureCard className="h-[220px] sm:h-[350px] md:h-[350px] lg:h-[400px] relative overflow-hidden">
            <CardBackgrounds index={2} />
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-gradient-to-br from-[#CCFFD4] to-[#2EB0D7] rounded-[4px] scale-[0.85] md:scale-[1] flex items-center justify-center shadow-[0_0_15px_rgba(72,219,251,0.3)]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8333 3.33337H4.16667C3.24619 3.33337 2.5 4.07957 2.5 5.00004V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V5.00004C17.5 4.07957 16.7538 3.33337 15.8333 3.33337Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.332 1.66663V4.99996" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66797 1.66663V4.99996" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.5 8.33337H17.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                }
                title="Calendar Visibility"
              />
              <p className="text-[10.6px] md:text-[13px] text-[#FFFFFF] leading-[1.4] mb-6 md:mt-1">
                Keep launches, deadlines, and execution timing easier to
                understand across the team.
              </p>

              {/* UI Mockup Image Element */}
              <div className="absolute bottom-[-45px] md:bottom-[-8%] right-[-10%] md:right-[-7%] w-[95%] h-[68%] md:h-[75%] bg-white rounded-tl-[6px] md:rounded-tl-[16px] shadow-[0_0_0_5px_rgba(255,255,255,0.08),0_5px_10px_rgba(0,0,0,0.2)] md:shadow-[0_0_0_10px_rgba(255,255,255,0.08),0_10px_20px_rgba(0,0,0,0.2)] border-t border-l border-white/20 flex overflow-hidden scale-105 md:scale-100 origin-bottom-right " >
                {/* Sidebar */}
                <Image
                    src={desktop}
                    alt="desktop"
                />
                
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 3: Planning Boards ── */}
          <FeatureCard className="h-[220px] md:h-[350px] lg:h-[400px]">
            <CardBackgrounds index={3} />
            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-[#3B82F6] rounded-[4px] scale-[0.85] md:scale-[1] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                      <line x1="9" y1="10" x2="15" y2="10" />
                      <line x1="9" y1="14" x2="15" y2="14" />
                    </svg>
                  </div>
                }
                title="Planning Boards"
              />
              <p className="text-[11.4px] md:text-[13px] text-[#FFFFFF] leading-[1.4] mb-10 md:mb-6 mt-1">
                Turn strategy into visible work with structured flows and
                clearer prioritization.
              </p>

              {/* Board Cards */}
              <div className="relative flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[600px] h-[220px] scale-[0.32] sm:scale-[0.65] md:scale-[0.53] lg:scale-[0.8]  xl:scale-[0.65] origin-center -translate-y-2 flex justify-center gap-12 md:gap-14">
                  {/* Board Card 1 */}
                  <div
                    className="w-[280px] bg-white rounded-[16px] p-6 shadow-xl flex flex-col justify-between shadow-[0_0_0_5px_rgba(255,255,255,0.08),0_5px_10px_rgba(0,0,0,0.2)] md:shadow-[0_0_0_10px_rgba(255,255,255,0.08),0_10px_20px_rgba(0,0,0,0.2)] md:scale-[1] transition-transform hover:-translate-y-2"
                  >
                    <div>
                      <h4 className="text-[16px] text-[#01091E]">
                        Reach 60 new leads
                      </h4>
                      <p className="text-[12px] text-gray-400 mt-1">
                        Prospects Contacted | Monthly
                      </p>

                      <div className="flex gap-2 mt-4">
                        <span className="bg-[#FFF1F2] text-[#E11D48] text-[11px] font-semibold px-3 py-1 rounded-full">
                          Email
                        </span>
                        <span className="bg-[#DCFCE7] text-[#16A34A] text-[11px] font-semibold px-3 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="flex justify-between text-[10px] font-medium text-gray-500 mb-2">
                        <span>Progress</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#2DD4BF] to-[#3B82F6] h-2 rounded-full w-[28%]"></div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-3">
                      <span className="bg-gray-50 text-gray-400 text-[10px] font-medium px-3 py-1.5 rounded-md border border-gray-100">
                        Created: 4/12/26
                      </span>
                      <span className="bg-gray-50 text-gray-400 text-[10px] font-medium px-3 py-1.5 rounded-md border border-gray-100">
                        Created: 5/12/26
                      </span>
                    </div>
                  </div>

                  {/* Board Card 2 */}
                  <div
                    className="w-[280px] shadow-[0_0_0_5px_rgba(255,255,255,0.08),0_5px_10px_rgba(0,0,0,0.2)] md:shadow-[0_0_0_10px_rgba(255,255,255,0.08),0_10px_20px_rgba(0,0,0,0.2)] bg-white rounded-[16px] p-6 shadow-xl flex flex-col justify-between transition-transform hover:-translate-y-2"
                  >
                    <div>
                      <h4 className="text-[16px] text-[#01091E]">
                        20 backlinks per month
                      </h4>
                      <p className="text-[12px] text-gray-400 mt-1">
                        Backlinks Acquired | Monthly
                      </p>

                      <div className="flex gap-2 mt-4">
                        <span className="bg-[#DBEAFE] text-[#2563EB] text-[11px] font-semibold px-3 py-1 rounded-full">
                          SEO
                        </span>
                        <span className="bg-[#DCFCE7] text-[#16A34A] text-[11px] font-semibold px-3 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="flex justify-between text-[10px] font-medium text-gray-500 mb-2">
                        <span>Progress</span>
                        <span>72%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#2DD4BF] to-[#3B82F6] h-2 rounded-full w-[72%]"></div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-3">
                      <span className="bg-gray-150 text-gray-400 text-[10px] font-medium px-3 py-1.5 rounded-md border border-gray-100">
                        Created: 4/12/26
                      </span>
                      <span className="bg-gray-50 text-gray-400 text-[10px] font-medium px-3 py-1.5 rounded-md border border-gray-100">
                        Created: 5/12/26
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 4: Operational Coordination ── */}
        <FeatureCard className="h-[220px] md:h-[350px] lg:h-[400px] relative overflow-hidden">
          <CardBackgrounds index={4} />
          
          <div className="relative z-10 flex flex-col h-full pointer-events-none">
            <CardHeader
              icon={
                <div className="w-full h-full bg-gradient-to-br from-[#FFCC9C] to-[#FF8853] rounded-[4px] scale-[0.85] md:scale-[1] flex items-center justify-center shadow-[0_0_15px_rgba(255,159,67,0.3)]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1863 1.66663H9.8196C9.37757 1.66663 8.95365 1.84222 8.64109 2.15478C8.32853 2.46734 8.15293 2.89127 8.15293 3.33329V3.48329C8.15263 3.77556 8.07548 4.06262 7.92921 4.31566C7.78295 4.5687 7.57271 4.77882 7.3196 4.92496L6.96126 5.13329C6.7079 5.27957 6.42049 5.35658 6.12793 5.35658C5.83537 5.35658 5.54796 5.27957 5.2946 5.13329L5.1696 5.06663C4.78715 4.84601 4.3328 4.78616 3.90627 4.90022C3.47974 5.01427 3.11589 5.29291 2.8946 5.67496L2.71126 5.99163C2.49065 6.37407 2.4308 6.82843 2.54485 7.25496C2.65891 7.68149 2.93754 8.04533 3.3196 8.26663L3.4446 8.34996C3.69649 8.49538 3.90595 8.7042 4.05214 8.95565C4.19833 9.2071 4.27618 9.49244 4.27793 9.78329V10.2083C4.2791 10.502 4.20264 10.7908 4.0563 11.0454C3.90996 11.3 3.69894 11.5115 3.4446 11.6583L3.3196 11.7333C2.93754 11.9546 2.65891 12.3184 2.54485 12.745C2.4308 13.1715 2.49065 13.6258 2.71126 14.0083L2.8946 14.325C3.11589 14.707 3.47974 14.9856 3.90627 15.0997C4.3328 15.2138 4.78715 15.1539 5.1696 14.9333L5.2946 14.8666C5.54796 14.7203 5.83537 14.6433 6.12793 14.6433C6.42049 14.6433 6.7079 14.7203 6.96126 14.8666L7.3196 15.075C7.57271 15.2211 7.78295 15.4312 7.92921 15.6843C8.07548 15.9373 8.15263 16.2244 8.15293 16.5166V16.6666C8.15293 17.1087 8.32853 17.5326 8.64109 17.8451C8.95365 18.1577 9.37757 18.3333 9.8196 18.3333H10.1863C10.6283 18.3333 11.0522 18.1577 11.3648 17.8451C11.6773 17.5326 11.8529 17.1087 11.8529 16.6666V16.5166C11.8532 16.2244 11.9304 15.9373 12.0766 15.6843C12.2229 15.4312 12.4332 15.2211 12.6863 15.075L13.0446 14.8666C13.298 14.7203 13.5854 14.6433 13.8779 14.6433C14.1705 14.6433 14.4579 14.7203 14.7113 14.8666L14.8363 14.9333C15.2187 15.1539 15.6731 15.2138 16.0996 15.0997C16.5261 14.9856 16.89 14.707 17.1113 14.325L17.2946 14C17.5152 13.6175 17.5751 13.1632 17.461 12.7366C17.347 12.3101 17.0683 11.9463 16.6863 11.725L16.5613 11.6583C16.3069 11.5115 16.0959 11.3 15.9496 11.0454C15.8032 10.7908 15.7268 10.502 15.7279 10.2083V9.79163C15.7268 9.49794 15.8032 9.20917 15.9496 8.95454C16.0959 8.69991 16.3069 8.48847 16.5613 8.34163L16.6863 8.26663C17.0683 8.04533 17.347 7.68149 17.461 7.25496C17.5751 6.82843 17.5152 6.37407 17.2946 5.99163L17.1113 5.67496C16.89 5.29291 16.5261 5.01427 16.0996 4.90022C15.6731 4.78616 15.2187 4.84601 14.8363 5.06663L14.7113 5.13329C14.4579 5.27957 14.1705 5.35658 13.8779 5.35658C13.5854 5.35658 13.298 5.27957 13.0446 5.13329L12.6863 4.92496C12.4332 4.77882 12.2229 4.5687 12.0766 4.31566C11.9304 4.06262 11.8532 3.77556 11.8529 3.48329V3.33329C11.8529 2.89127 11.6773 2.46734 11.3648 2.15478C11.0522 1.84222 10.6283 1.66663 10.1863 1.66663Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              }
              title="Operational Coordination"
            />
            <p className="text-[10.76px] md:text-[13px] text-[#FFFFFF] leading-[1.4] mb-6 md:mt-1">
              Reduce confusion between who owns what, what is waiting, and
              what should happen next.
            </p>

            {/* Dashed Arcs Visualization Container */}
            <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] scale-[0.46] sm:scale-[0.55] md:scale-[0.7] lg:scale-100 origin-bottom flex items-end justify-center pointer-events-none">
              
              {/* Background SVG with your exact dashed line parameters */}
              <svg width="600" height="294" viewBox="0 0 600 294" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[-40px] md:bottom-0 ">
                {/* Outermost Arc */}
                <circle cx="300.5" cy="365" r="330.383" stroke="white" strokeOpacity="0.35" strokeWidth="1.23311" strokeDasharray="12.33 12.33" />
                {/* Middle Arc */}
                <circle cx="300.5" cy="365" r="235" stroke="white" strokeOpacity="0.35" strokeWidth="1.23311" strokeDasharray="12.33 12.33" />
                {/* Innermost Arc */}
                <circle cx="300.5" cy="365" r="150" stroke="white" strokeOpacity="0.35" strokeWidth="1.23311" strokeDasharray="12.33 12.33" />
              </svg>

              {/* ── Outer Arc Elements ── */}
              {/* Campaign Launched Pill */}
              <div className="absolute top-[90px] md:top-[50px] md:left-[110px] bg-[#FFFFFF] rounded-full px-[9px] py-[5px] flex items-center gap-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.2),0_0_20px_rgba(255,255,255,0.2)] ">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1366 4.37842L5.10959 12.4054L1.46094 8.7568" stroke="#3AC750" strokeWidth="1.45946" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.0558 7.29724L10.5829 12.7702L9.48828 11.6756" stroke="#3AC750" strokeWidth="1.45946" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#3E3E3E] text-[10.95px] ">
                  Campaign Launched
                </span>
              </div>

              {/* Active Pill */}
              <div className="absolute right-[450px] top-[130px] md:top-[75px] md:right-[100px] bg-[#D2FFD9] rounded-full px-[16px] py-[2px] scale-[0.7] shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <span className="text-[#3AC750] text-[12.68px] font-semibold">
                  Active
                </span>
              </div>

              {/* ── Middle Arc Elements ── */}
              {/* New Creative Pill */}
              <div className="absolute top-[170px] left-[420px] md:top-[132px] md:left-1/2 -translate-x-1/2 bg-[#FFFFFF] rounded-full scale-[0.95] px-[9px] py-[5px] flex items-center gap-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.2),0_0_20px_rgba(255,255,255,0.2)]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0244 2.21436H3.69103C2.87576 2.21436 2.21484 2.87527 2.21484 3.69055V14.0239C2.21484 14.8392 2.87576 15.5001 3.69103 15.5001H14.0244C14.8396 15.5001 15.5006 14.8392 15.5006 14.0239V3.69055C15.5006 2.87527 14.8396 2.21436 14.0244 2.21436Z" stroke="#DC486D" strokeWidth="1.47619" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.64416 8.11901C7.45944 8.11901 8.12035 7.45809 8.12035 6.64282C8.12035 5.82754 7.45944 5.16663 6.64416 5.16663C5.82888 5.16663 5.16797 5.82754 5.16797 6.64282C5.16797 7.45809 5.82888 8.11901 6.64416 8.11901Z" stroke="#DC486D" strokeWidth="1.47619" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.4972 11.0714L13.2194 8.79366C12.9426 8.51692 12.5672 8.36145 12.1758 8.36145C11.7843 8.36145 11.4089 8.51692 11.1321 8.79366L4.42578 15.5" stroke="#DC486D" strokeWidth="1.47619" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#3E3E3E] text-[11.07px]">
                  New Creative
                </span>
              </div>

              {/* Calendar Icon */}
              <div className="absolute bottom-[35px] left-[210px] md:bottom-[75px] md:left-[110px]">
                {/* Subtle Ambient Glow */}
                <div className="absolute inset-0 bg-[#3B82F6] blur-xl opacity-40 rounded-full scale-150"></div>
                {/* Actual Icon */}
                <div className="relative w-[38px] h-[38px] bg-gradient-to-br from-[#B6DAFF] to-[#63A2FF] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.668 1.33325V3.99992" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.33203 1.33325V3.99992" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 6.66663H14" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.33203 9.33325H5.3387" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 9.33337H8.00667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.668 9.33325H10.6746" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.33203 12H5.3387" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H8.00667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.668 12H10.6746" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* ── Inner Arc Elements ── */}
              {/* Bell Icon */}
              <div className="absolute bottom-[-40px] md:bottom-[20px] right-[175px]">
                {/* Subtle Ambient Glow */}
                <div className="absolute inset-0 bg-[#7E22CE] blur-xl opacity-40 rounded-full scale-150"></div>
                {/* Actual Icon */}
                <div className="relative w-[38px] h-[38px] bg-gradient-to-br from-[#B8A4FF] to-[#6B31B6] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(126,34,206,0.5)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_425_36555)">
                  <path d="M12 5.33325C12 4.27239 11.5786 3.25497 10.8284 2.50482C10.0783 1.75468 9.06087 1.33325 8 1.33325C6.93913 1.33325 5.92172 1.75468 5.17157 2.50482C4.42143 3.25497 4 4.27239 4 5.33325C4 9.99992 2 11.3333 2 11.3333H14C14 11.3333 12 9.99992 12 5.33325Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.15432 14C9.03712 14.2021 8.86888 14.3698 8.66647 14.4864C8.46406 14.6029 8.23458 14.6643 8.00099 14.6643C7.7674 14.6643 7.53792 14.6029 7.33551 14.4864C7.13309 14.3698 6.96486 14.2021 6.84766 14" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.33203 5.33325C1.33203 3.86659 1.7987 2.46659 2.66536 1.33325" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.6654 5.33325C14.6654 3.89078 14.1975 2.48723 13.332 1.33325" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_425_36555">
                  <rect width="16" height="16" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
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
// Reusable Helper Components
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
      <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-[17px] leading-[1.2] font-medium text-white">{title}</h3>
    </div>
  );
}

// Shared Component for Background SVGs matched directly to the CRM cards
const CardBackgrounds = ({ index }) => {
  if (index === 1) {
    return (
      <>
        {/* Background SVG Glow */}
        <div className="absolute -bottom-20 -right-20 pointer-events-none z-0 opacity-40">
          <svg width="900" height="480" viewBox="0 0 332 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2" filter="url(#filter0_f_303_14675_c1)">
              <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_303_14675_c1)" />
            </g>
            <defs>
              <filter id="filter0_f_303_14675_c1" x="-9.15527e-05" y="-35.9474" width="817.895" height="817.895" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="74.9737" result="effect1_foregroundBlur_303_14675_c1" />
              </filter>
              <radialGradient id="paint0_radial_303_14675_c1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                <stop stopColor="#5BEC71" />
                <stop offset="1" stopColor="#0F72D7" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        {/* Background Grid */}
        <>
          <div className="absolute bottom-0 -right-2 pointer-events-none w-[80%] h-[80%] opacity-60 block md:hidden"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 2px, transparent 1px)`,
              backgroundSize: "35px 35px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)",
            }} />
          <div className="absolute bottom-0 -right-2 pointer-events-none w-[80%] h-[80%] opacity-60 hidden md:block"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 4px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 4px, transparent 1px)`,
              backgroundSize: "60px 60px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)",
            }} />
        </>
      </>
    );
  }
  
  if (index === 2) {
    return (
      <>
        <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
          <svg width="800" height="430" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6" filter="url(#filter0_f_lead_glow_c2)">
              <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_lead_glow_c2)" />
            </g>
            <defs>
              <filter id="filter0_f_lead_glow_c2" x="-100" y="-100" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_lead_glow_c2" />
              </filter>
              <radialGradient id="paint0_radial_lead_glow_c2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                <stop stopColor="#5BEC71" />
                <stop offset="1" stopColor="#0F72D7" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <>
          <div className="absolute bottom-0 -left-8 pointer-events-none w-[80%] h-[70%] block md:hidden"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)`,
              backgroundSize: "40px 40px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
            }} />
          <div className="absolute bottom-0 -left-8 pointer-events-none w-[50%] h-[70%] hidden md:block"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 4px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 4px, transparent 1px)`,
              backgroundSize: "60px 60px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
            }} />
        </>
      </>
    );
  }

  if (index === 3) {
    return (
      <>
        <div className="absolute bottom-0 left-0 pointer-events-none z-0 translate-y-[45%] -translate-x-[40%] opacity-30">
          <svg width="800" height="800" viewBox="0 0 800 800" className="h-[520px] md:h-[800px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6" filter="url(#filter0_f_123_client_c3)">
              <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_123_client_c3)" />
            </g>
            <defs>
              <filter id="filter0_f_123_client_c3" x="-100" y="-100" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_123_client_c3" />
              </filter>
              <radialGradient id="paint0_radial_123_client_c3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                <stop stopColor="#5BEC71" />
                <stop offset="1" stopColor="#0F72D7" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <>
          <div className="absolute bottom-0 -left-10 pointer-events-none w-[80%] h-[74%] block md:hidden"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)`,
              backgroundSize: "40px 40px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
            }} />
          <div className="absolute bottom-0 -left-10 pointer-events-none w-[50%] h-[84%] hidden md:block"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 4px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 4px, transparent 1px)`,
              backgroundSize: "60px 60px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 0% 100%, black, transparent 80%)",
            }} />
        </>
      </>
    );
  }

  if (index === 4) {
    return (
      <>
        <div className="absolute -bottom-20 -right-20 pointer-events-none z-0 opacity-40">
          <svg width="900" height="480" viewBox="0 0 332 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2" filter="url(#filter0_f_303_14675_c4)">
              <path d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z" fill="url(#paint0_radial_303_14675_c4)" />
            </g>
            <defs>
              <filter id="filter0_f_303_14675_c4" x="-9.15527e-05" y="-35.9474" width="817.895" height="817.895" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="74.9737" result="effect1_foregroundBlur_303_14675_c4" />
              </filter>
              <radialGradient id="paint0_radial_303_14675_c4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)">
                <stop stopColor="#5BEC71" />
                <stop offset="1" stopColor="#0F72D7" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <>
          <div className="absolute bottom-0 -right-2 pointer-events-none w-[80%] h-[80%] opacity-60 block md:hidden"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 2px, transparent 1px)`,
              backgroundSize: "40px 40px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)",
            }} />
          <div className="absolute bottom-0 -right-2 pointer-events-none w-[80%] h-[80%] opacity-60 hidden md:block"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 4px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 4px, transparent 1px)`,
              backgroundSize: "60px 60px", backgroundPosition: "left bottom", maskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 100% 100%, black, transparent 80%)",
            }} />
        </>
      </>
    );
  }
  
  return null;
};

// Main Background SVGs
const BackgroundGlows = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:flex justify-center overflow-hidden">
      <svg
        width="1446"
        height="530"
        viewBox="0 0 1728 1168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          opacity="0.6"
          filter="url(#bg_f_desk)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            d="M1371.61 -553.896C1644.95 -273.424 1639.17 175.53 1358.7 448.872C1078.22 722.213 629.269 716.432 355.928 435.96C82.5869 155.488 88.3677 -293.467 368.84 -566.808C649.313 -840.15 1098.27 -834.369 1371.61 -553.896Z"
            fill="url(#bg_r_desk)"
          />
        </g>
        <defs>
          <filter
            id="bg_f_desk"
            x="-450.186"
            y="-1372.92"
            width="2627.91"
            height="2627.91"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="302.415" />
          </filter>
          <radialGradient
            id="bg_r_desk"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(845.511 -78.6694) rotate(45.7377) scale(757.944 704.321)"
          >
            <stop offset="0.303662" stopColor="#5BEC71" />
            <stop offset="0.870122" stopColor="#0F72D7" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <div className="absolute top-0 left-0 w-full h-[1076px] pointer-events-none z-0 flex md:hidden justify-center overflow-hidden">
      <svg
        width="430"
        height="626"
        className="w-full h-full"
        viewBox="0 0 430 1800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          opacity="0.6"
          filter="url(#bg_f_mob)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            d="M722.608 -553.896C995.95 -273.424 990.169 175.53 709.697 448.872C429.224 722.213 -19.7305 716.432 -293.072 435.96C-566.413 155.488 -560.632 -293.467 -280.16 -566.808C0.312524 -840.15 449.267 -834.369 722.608 -553.896Z"
            fill="url(#bg_r_mob)"
          />
        </g>
        <defs>
          <filter
            id="bg_f_mob"
            x="-1099.19"
            y="-1372.92"
            width="2627.91"
            height="2627.91"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="302.415" />
          </filter>
          <radialGradient
            id="bg_r_mob"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(196.511 -78.6694) rotate(45.7377) scale(757.944 704.321)"
          >
            <stop offset="0.303662" stopColor="#5BEC71" />
            <stop offset="0.870122" stopColor="#0F72D7" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </>
);

const GridBackground = () => (
  <>
    <div
      className="absolute inset-0 pointer-events-none z-0 block sm:hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "100px 100px",
        backgroundPosition: "center -15px",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 50%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
      }}
    />
    <div
      className="absolute inset-0 pointer-events-none z-0 hidden sm:block"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
        backgroundPosition: "center -30px",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 60%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
      }}
    />
  </>
);