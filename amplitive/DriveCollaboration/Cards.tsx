"use client";

import React from "react";
import Image from "next/image";
import men1 from "../public/men1.svg"
import men2 from "../public/men2.svg"
import men3 from "../public/men3.svg"
import women1 from "../public/women1.svg"
import women2 from "../public/women2.svg"
import women3 from "../public/women3.svg"

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
          Teams lose time when assets, drafts, approvals,
          <br className="hidden lg:block" /> and working context are{" "}
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#1ab87e] to-[#0F72D7]">
            spread across different locations.
          </span>
        </h2>
        <p className="text-[13.4px] lg:text-[13px] text-white/80 leading-[1.6] max-w-[860px] mx-auto">
          Drive & Collaboration gives teams a shared place to keep files, materials, and working
          context attached to the campaigns and workflows they support. Instead of recreating the
          background around every project, teams can keep the information connected to the work itself.
        </p>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 — FEATURE CARDS
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto py-4 lg:py-12 px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* ── CARD 1: Shared Files ── */}
          <FeatureCard className="h-[220px] sm:h-[380px] md:h-[350px] lg:h-[380px]">
            <CardBackgrounds index={1} />
            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-gradient-to-bl from-[#FFA9CF] to-[#C62943] rounded-[4px] scale-[0.85] md:scale-[1] flex items-center justify-center shadow-[0_0_15px_rgba(255,107,139,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3.33594 18.3334H15.0026C15.4446 18.3334 15.8686 18.1578 16.1811 17.8452C16.4937 17.5326 16.6693 17.1087 16.6693 16.6667V6.25002L12.0859 1.66669H5.0026C4.56058 1.66669 4.13665 1.84228 3.82409 2.15484C3.51153 2.4674 3.33594 2.89133 3.33594 3.33335V6.66669" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.6641 1.66669V6.66669H16.6641" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.66406 12.5H9.9974" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.5 15L10 12.5L7.5 10" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                }
                title="Shared Files"
              />
              <p className="text-[11px] md:text-[11px] text-[#FFFFFF] leading-[1.4] mb-12 md:mb-6 md:mt-1">
                Store and access the documents, assets, and reference materials tied to campaigns and workflows.
              </p>

              {/* Floating Content: Drive Collab Folder Tiles */}
              <div className="relative bottom-[12px] md:bottom-0 flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[455px] h-[175.91px] scale-[0.45] sm:scale-[0.65] md:scale-[0.65] lg:scale-[0.8] xl:scale-[0.95] origin-center -translate-y-2">
                  <div className="relative w-full h-full">
                    {/* Studio Video Scripts — left */}
                    <div className="absolute left-[3.5%] top-[5%] w-[47%] transition-transform hover:-translate-y-1">
                      <FolderTile title="Studio Video Scripts Drafts" date="Mar 22" items="6 Items"/>
                    </div>
                    {/* New Folder button — upper right */}
                    <button className="absolute right-[14%] top-[5%] z-20 flex items-center gap-2 whitespace-nowrap rounded-[6px] bg-[#0F72D7] px-4 py-2 text-[12px] text-white shadow-[0_0_20px_rgba(15,114,215,0.5)] transition-transform hover:-translate-y-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                      New Folder
                    </button>
                    {/* LinkedIn Campaign Assets — lower right */}
                    <div className="absolute right-[-6px] top-[44%] w-[46%] transition-transform hover:-translate-y-1">
                      <FolderTile title="LinkedIn Campaign Assets" date="Mar 22" items="12 Items"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 2: Team Collaboration ── */}
          <FeatureCard className="h-[220px] sm:h-[350px] md:h-[350px] lg:h-[380px] relative overflow-hidden">
            <CardBackgrounds index={2} />
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-gradient-to-br from-[#CCFFD4] to-[#2EB0D7] rounded-[4px] scale-[0.85] md:scale-[1] flex items-center justify-center shadow-[0_0_15px_rgba(72,219,251,0.3)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21V19C17 17.9 16.6 16.96 15.83 16.17C15.04 15.4 14.1 15 13 15H5C3.9 15 2.96 15.4 2.17 16.17C1.4 16.96 1 17.9 1 19V21" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M23 21V19C23 18.1 22.7 17.3 22.17 16.67C21.61 16.04 20.85 15.6 20 15.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 3.13C16.85 3.35 17.61 3.79 18.17 4.42C18.7 5.06 19 5.86 19 6.75C19 7.64 18.7 8.44 18.17 9.08C17.61 9.71 16.85 10.15 16 10.37" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                }
                title="Team Collaboration"
              />
              <p className="text-[10.6px] md:text-[11px] text-[#FFFFFF] leading-[1.4] mb-6 md:mt-1">
                Support coordinated work with shared access to the materials contributors need.
              </p>

              {/* Team Collaboration Grid Mockup */}
              <div className="relative top-[25px] md:top-0  flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[500px] h-[150px] scale-[0.58] sm:scale-[0.8] md:scale-[0.8] lg:scale-[1] xl:scale-[1.1] origin-center -translate-y-2">
                  <div className="w-full grid grid-cols-6 gap-4">
                    {/* Define the grid items beforehand so we can calculate their relative positions */}
                    {(() => {
                      const gridItems = [
                        men1, null, women1, null,  women2 , null,
                        null, women3, null, men2, null, men3
                      ];

                      return gridItems.map((imgSrc, i) => {
                        // Count how many actual images appear before the current one in the array
                        const appearingIndex = gridItems.slice(0, i).filter(Boolean).length;
                        
                        // If the appearing index is even (0, 2, 4), make it grayscale
                        const isGrayscale = appearingIndex % 2 === 0;

                        return (
                          <div
                            key={i}
                            className="overflow-hidden"
                            style={{
                              aspectRatio: "90 / 90",
                              borderRadius: "7.85px",
                              // Only apply the white translucent background if there is NO image
                              background: !imgSrc ? "rgba(255,255,255,0.08)" : undefined,
                            }}
                          >
                            {imgSrc && (
                              <Image
                                src={imgSrc}
                                alt={`Team member ${i}`}
                                // Conditionally append the Tailwind `grayscale` class
                                className={`h-full w-full object-cover object-center ${isGrayscale ? "grayscale" : ""}`}
                                style={{ borderRadius: "7.85px" }}
                              />
                            )}
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 3: Operational Visibility ── */}
          <FeatureCard className="h-[220px] md:h-[350px] lg:h-[380px]">
            <CardBackgrounds index={3} />
            <div className="relative z-10 flex flex-col h-full">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-[#3B82F6] rounded-[4px] scale-[0.85] md:scale-[1] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M1.66406 9.99996C1.66406 9.99996 4.16406 4.16663 9.9974 4.16663C15.8307 4.16663 18.3307 9.99996 18.3307 9.99996C18.3307 9.99996 15.8307 15.8333 9.9974 15.8333C4.16406 15.8333 1.66406 9.99996 1.66406 9.99996Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                }
                title="Operational Visibility"
              />
              <p className="text-[11.4px] md:text-[11px] text-[#FFFFFF] leading-[1.4] mb-10 md:mb-6 mt-1">
                Keep files closer to project status, timelines, and execution context.
              </p>

              {/* Workspace Mockup */}
              <div className="relative top-[20px] md:top-0 flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[600px] h-[220px] scale-[0.32] sm:scale-[0.65] md:scale-[0.53] lg:scale-[0.8] xl:scale-[0.65] origin-center -translate-y-2">
                  <div className="relative w-full h-full">
                    
                    {/* Left: Workspace panel */}
                    <div className="absolute h-[320px] scale-[1.1] md:scale-[1]  left-0 top-[-25px] w-[43%] bg-white rounded-[10px] overflow-hidden shadow-[0_0_0_5px_rgba(255,255,255,0.18),0_5px_10px_rgba(0,0,0,0.2)] pb-2">
                      <div className="flex items-center justify-between px-3 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-[24px] h-[24px] rounded-[8px] bg-[#FF6B35] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">SD</div>
                          <div>
                            <p className="text-[11.5px] font-medium text-[#111] leading-tight">Stremeline Digital</p>
                            <p className="text-[8px] text-[#aaa] leading-tight mt-0.5">Stremlinedigital.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-[#D2FFD9] border border-[#A7F3D0] rounded-full px-2 py-0.5">
                          {/* Tick SVG */}
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#23BB3A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-[8px] text-[#23BB3A] font-medium">On track</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-evenly gap-4 px-4 pt-2.5 pb-1 border-b border-[#eef0f3]">
                        {["Overview", "Tasks", "Files", "Timeline"].map(tab => (
                          <span key={tab} className={`text-[9px] pb-1.5 ${tab === "Files" ? "text-[#2563EB] border-b-2 border-[#2563EB] font-semibold" : "text-[#9ca3af]"}`}>{tab}</span>
                        ))}
                      </div>

                      {/* Internal Cards */}
                      <div className="px-3 pt-3 space-y-3">
                        {[
                          { 
                            name: "Campaign 1 brief.pdf", 
                            bg: "#EFF6FF", 
                            icon: (
                              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="26.6" height="26.6" rx="3.78" fill="url(#paint0_linear_425_84875)"/>
                              <g clipPath="url(#clip0_425_84875)">
                              <path d="M14.7578 7.46667H9.79948C9.49006 7.46667 9.19331 7.58959 8.97452 7.80838C8.75573 8.02718 8.63281 8.32392 8.63281 8.63334V17.9667C8.63281 18.2761 8.75573 18.5728 8.97452 18.7916C9.19331 19.0104 9.49006 19.1333 9.79948 19.1333H16.7995C17.1089 19.1333 17.4056 19.0104 17.6244 18.7916C17.8432 18.5728 17.9661 18.2761 17.9661 17.9667V10.675L14.7578 7.46667Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14.4688 7.46667V10.9667H17.9687" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15.6354 13.8834H10.9688" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15.6354 16.2167H10.9688" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.1354 11.55H10.9688" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              </g>
                              <defs>
                              <linearGradient id="paint0_linear_425_84875" x1="26.6" y1="-8.42288e-07" x2="3.325" y2="28.2625" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#ACD5FF"/>
                              <stop offset="1" stopColor="#003F9D"/>
                              </linearGradient>
                              <clipPath id="clip0_425_84875">
                              <rect width="14" height="14" fill="white" transform="translate(6.30078 6.30005)"/>
                              </clipPath>
                              </defs>
                              </svg>
                            )
                          },
                          { 
                            name: "Emails copy.docx",     
                            bg: "#FFF7ED", 
                            icon: (
                              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="26.6" height="26.6" rx="3.78" fill="url(#paint0_linear_425_84883)"/>
                              <path d="M14.7578 7.46667H9.79948C9.49006 7.46667 9.19331 7.58959 8.97452 7.80838C8.75573 8.02718 8.63281 8.32392 8.63281 8.63334V17.9667C8.63281 18.2761 8.75573 18.5728 8.97452 18.7916C9.19331 19.0104 9.49006 19.1333 9.79948 19.1333H16.7995C17.1089 19.1333 17.4056 19.0104 17.6244 18.7916C17.8432 18.5728 17.9661 18.2761 17.9661 17.9667V10.675L14.7578 7.46667Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14.4688 7.46667V10.9667H17.9687" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15.6354 13.8834H10.9688" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15.6354 16.2167H10.9688" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.1354 11.55H10.9688" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              <defs>
                              <linearGradient id="paint0_linear_425_84883" x1="21.6125" y1="-1.15195e-06" x2="3.325" y2="26.6" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFCC9C"/>
                              <stop offset="1" stopColor="#FF8853"/>
                              </linearGradient>
                              </defs>
                              </svg>
                            )
                          },
                          { 
                            name: "Campaign creative",    
                            bg: "linear-gradient(135deg, #34D399 0%, #3B82F6 100%)", 
                            icon: (
                              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="26.6" height="26.6" rx="3.78" fill="url(#paint0_linear_425_84891)"/>
                              <path d="M17.3841 8.05005H9.21745C8.57312 8.05005 8.05078 8.57238 8.05078 9.21672V17.3834C8.05078 18.0277 8.57312 18.55 9.21745 18.55H17.3841C18.0284 18.55 18.5508 18.0277 18.5508 17.3834V9.21672C18.5508 8.57238 18.0284 8.05005 17.3841 8.05005Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M11.5495 12.7168C12.1938 12.7168 12.7161 12.1944 12.7161 11.5501C12.7161 10.9058 12.1938 10.3834 11.5495 10.3834C10.9051 10.3834 10.3828 10.9058 10.3828 11.5501C10.3828 12.1944 10.9051 12.7168 11.5495 12.7168Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18.5508 15.05L16.7506 13.2498C16.5318 13.0311 16.2351 12.9082 15.9258 12.9082C15.6164 12.9082 15.3197 13.0311 15.1009 13.2498L9.80078 18.55" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                              <defs>
                              <linearGradient id="paint0_linear_425_84891" x1="1.995" y1="30.2575" x2="27.5975" y2="-1.21996e-06" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#5BEC71"/>
                              <stop offset="0.902778" stopColor="#0F72D7"/>
                              </linearGradient>
                              </defs>
                              </svg>
                            )
                          },
                        ].map((file, i) => (
                          <div key={i} className="flex items-center justify-between p-3.5 border border-[#e2e8f0] rounded-[8px]">
                            <div className="flex items-center gap-2.5">
                              
                              {/* Render the specific background and icon directly */}
                              <div className="w-[26px] h-[26px] rounded-[6px] flex items-center justify-center flex-shrink-0" style={{ background: file.bg }}>
                                {file.icon}
                              </div>

                              <div>
                                <p className="text-[10px] text-[#111] leading-tight font-medium">{file.name}</p>
                                <p className="text-[7.5px] text-[#9ca3af] leading-tight mt-0.5">Updated 2h ago</p>
                              </div>
                            </div>
                            
                            {/* 3-Dot Options Icon */}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connector SVG with Dots */}
                    <div className="absolute z-20 pointer-events-none" style={{ left: "calc(51% - 3px)", top: "34px" }}>
                      
                      {/* Starting Dot */}
                      <div className="absolute" style={{ left: -42, top: 97 }}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="white" fillOpacity="0.8"/>
                        </svg>
                      </div>

                      {/* Connecting Line */}
                      <div className="relative top-[-40px] right-[80px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="280" height="141" viewBox="0 0 180 131" fill="none">
                        <path d="M0 130.4H29.9835C42.1338 130.4 51.9836 120.55 51.9836 108.4V22.4C51.9836 10.2498 61.8333 0.400024 73.9836 0.400024H157C169.15 0.400024 179 10.2498 179 22.4V59.6278" stroke="url(#dc_c3_conn)" strokeWidth="1.2" strokeDasharray="6 6"/>
                        <defs>
                          <linearGradient id="dc_c3_conn" x1="13.425" y1="148.275" x2="126.615" y2="-35.9166" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5BEC71"/>
                            <stop offset="0.902778" stopColor="#0F72D7"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      </div>

                      {/* Ending Dot */}
                      <div className="absolute" style={{ left: 152, top: 18 }}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="white" fillOpacity="0.8"/>
                        </svg>
                      </div>
                    </div>

                    {/* Right: Project Status panel */}
                    <div className="absolute scale-[0.85] w-[210px] right-[35px] top-[50px] w-[41%] bg-white rounded-[10px] p-3.5 shadow-[0_0_0_5px_rgba(255,255,255,0.14),0_5px_10px_rgba(0,0,0,0.2)]">
                      <p className="text-[10px] text-[#111] mb-3">Project Status</p>
                      
                      <div className="mb-3.5">
                        <div className="flex justify-between mb-1.5">
                          <span className="text-[8.5px] text-[#9ca3af]">Progress</span>
                          <span className="text-[8.5px] text-[#111]">72%</span>
                        </div>
                        <div className="h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                          <div className="h-full w-[72%] rounded-full" style={{ background: "linear-gradient(45deg,  #0F72D7,#5BEC71)" }}/>
                        </div>
                      </div>

                      <div className="flex items-center justify-between py-2.5 border-t border-[#f1f5f9]">
                        <div className="flex items-center gap-1.5">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                          <span className="text-[8.5px] text-[#9ca3af]">Due date</span>
                        </div>
                        <span className="text-[8.5px] text-[#111]">4/28/2026</span>
                      </div>

                      <div className="flex items-center justify-between pt-2.5 border-t border-[#f1f5f9]">
                        <div className="flex items-center gap-1.5">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          <span className="text-[8.5px] text-[#9ca3af]">Owner</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-[16px] h-[16px] rounded-full overflow-hidden bg-[#FED7AA] flex-shrink-0">
                            <Image src={men3} alt="John King"/>
                          </div>
                          <span className="text-[8.5px] text-[#111]">John King</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* ── CARD 4: Central Working Space ── */}
          <FeatureCard className="h-[220px] md:h-[350px] lg:h-[380px] relative overflow-hidden">
            <CardBackgrounds index={4} />
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              <CardHeader
                icon={
                  <div className="w-full h-full bg-gradient-to-br from-[#FFCC9C] to-[#FF8853] rounded-[4px] scale-[0.85] md:scale-[1] flex items-center justify-center shadow-[0_0_15px_rgba(255,159,67,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M15.8333 3.33337H4.16667C3.24619 3.33337 2.5 4.07957 2.5 5.00004V11.6667C2.5 12.5872 3.24619 13.3334 4.16667 13.3334H15.8333C16.7538 13.3334 17.5 12.5872 17.5 11.6667V5.00004C17.5 4.07957 16.7538 3.33337 15.8333 3.33337Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.66406 16.6666H18.3307" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                }
                title="Central Working Space"
              />
              <p className="text-[10.76px] md:text-[11px] text-[#FFFFFF] leading-[1.4] mb-6 md:mt-1">
                Reduce the time spent tracking down versions, approvals, and supporting documents.
              </p>

              {/* Central Working Space UI */}
              <div className="relative top-[20px] md:top-0 flex-1 w-full flex items-center justify-center">
                <div className="absolute w-[450px] h-[180px] scale-[0.55] sm:scale-[0.7] md:scale-[0.7] lg:scale-[0.9] xl:scale-[1] origin-center -translate-y-2 flex flex-col justify-between">
                  {/* Search Bar */}
                  <div className="flex translate-x-8 scale-[0.92] items-center w-[255px] h-[41.88px] rounded-[92.94px] border-[1.16px] border-[#FFFFFF1A] py-[4.65px] px-[12px] gap-[10.46px] bg-[#00000024] shadow-[inset_4.65px_4.65px_41.82px_0px_#75BAFF1F,inset_4.65px_4.65px_41.82px_0px_#5BEC710D]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.9984 21L16.6484 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[#FFFFFF] text-[12.5px]">Search across all content</span>
                  </div>

                  {/* Floating badges */}
                  <div className="relative flex-1 my-3 w-full">
                    <div className="absolute scale-[0.78] right-[8%] top[-15%] md:top-[-5%] inline-flex items-center gap-2 px-3.5 py-2 rounded-full border hover:border-[#1ab87e]/40 bg-[#D2FFD9]">
                      <span className="text-[#1ab87e] text-[11px] font-medium">Creative Approved</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#1ab87e" strokeWidth="1.8"/>
                        <path d="M9 12l2 2 4-4" stroke="#1ab87e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="absolute translate-y-1 scale-[0.85]  md:scale-[0.75] left-[10%] top-[25%] md:top-[45%] inline-flex items-center gap-2 px-2.5 py-1 rounded-full border  bg-[#D1E8FF]">
                      <span className="text-[#0F72D7] text-[11px] font-medium">Document Updated</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33594 18.3333H15.0026C15.4446 18.3333 15.8686 18.1577 16.1811 17.8451C16.4937 17.5326 16.6693 17.1087 16.6693 16.6666V6.24996L12.0859 1.66663H5.0026C4.56058 1.66663 4.13665 1.84222 3.82409 2.15478C3.51153 2.46734 3.33594 2.89127 3.33594 3.33329V6.66663" stroke="#0F72D7" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>  
                      <path d="M11.6641 1.66663V6.66663H16.6641" stroke="#0F72D7" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.5 12.5L4.16667 14.1667L7.5 10.8334" stroke="#0F72D7" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex translate-x-28 -translate-y-8 md:translate-x-12 md:translate-y-1.5 items-center gap-1 scale-[0.8] bg-[#00000024] border border-[#FFFFFF24] shadow-[inset_4px_4px_36px_0px_#75BAFF1F,inset_4px_4px_36px_0px_#5BEC710D] backdrop-blur-[12px] rounded-full p-1 mx-auto w-[60%]">
                    {["Files", "Tasks", "Approvals"].map((tab, i) => (
                      <button
                        key={tab}
                        className={`flex-1 py-2 rounded-full text-[14px] transition-colors ${i === 1 ? "bg-white text-[#0a0a0a]" : "text-white/40 hover:text-white/70"}`}
                      >
                        {tab}
                      </button>
                    ))}
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

export function FolderTile({ title, date, items }) {
  return (
    <div className="bg-white rounded-[12px] p-3 shadow-[0_0_0_5px_rgba(255,255,255,0.28),0_5px_10px_rgba(0,0,0,0.2)]">
      <div className="flex items-start justify-between mb-4">
        <div className="w-[32px] h-[32px] rounded-[8px] bg-[#EFF6FF] flex items-center justify-center">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="37.8286" height="37.8286" rx="9.45714" fill="url(#paint0_linear_425_84732)" fillOpacity="0.6"/>
            <path d="M24.7748 12.6367C24.8791 12.8006 24.7005 12.9914 24.5111 12.9484C24.1407 12.8381 23.7309 12.7829 23.3132 12.7829H20.7123C20.5884 12.7829 20.4717 12.7246 20.3973 12.6256L19.491 11.4195C19.3799 11.2622 19.4849 11.0333 19.6774 11.0333H21.8474C23.0776 11.0333 24.1612 11.6723 24.7748 12.6367Z" fill="#0F72D7"/>
            <path d="M25.3312 14.6113C24.9923 14.367 24.6062 14.1857 24.1885 14.0833C23.9047 14.0044 23.6132 13.965 23.3137 13.965H20.382C19.9249 13.965 19.8933 13.9256 19.649 13.6025L18.5457 12.1367C18.0334 11.451 17.6315 11.0333 16.3469 11.0333H14.5185C12.5956 11.0333 11.0352 12.5938 11.0352 14.5167V23.3118C11.0352 25.2348 12.5956 26.7952 14.5185 26.7952H23.3137C25.2366 26.7952 26.7971 25.2348 26.7971 23.3118V17.4484C26.7971 16.2742 26.2217 15.2418 25.3312 14.6113ZM20.7997 22.3346H17.0247C16.7173 22.3346 16.4809 22.0903 16.4809 21.7829C16.4809 21.4835 16.7173 21.2313 17.0247 21.2313H20.7997C21.107 21.2313 21.3513 21.4835 21.3513 21.7829C21.3513 22.0903 21.107 22.3346 20.7997 22.3346Z" fill="#0F72D7"/>
            <defs>
            <linearGradient id="paint0_linear_425_84732" x1="28.3714" y1="0" x2="7.88721" y2="50.7379" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EFF7FF"/>
            <stop offset="1" stopColor="#A5C9FF"/>
            </linearGradient>
            </defs>
            </svg>
        </div>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="5" r="1.5" fill="#ccc"/><circle cx="12" cy="12" r="1.5" fill="#ccc"/><circle cx="12" cy="19" r="1.5" fill="#ccc"/>
        </svg>
      </div>
      <p className="text-[11px] text-[#111] leading-snug mb-3">{title}</p>
      <div className="flex items-center justify-between w-[75%]">
        <span className="text-[10px] text-[#999]">{date}</span>
        <span className="text-[10px] text-[#999]">{items}</span>
      </div>
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