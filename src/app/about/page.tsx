"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Sidebar } from "@/components/HUD/Sidebar";
import { Header } from "@/components/HUD/Header";
import { Reticle } from "@/components/HUD/Reticle";
import { ShieldCheck, GraduationCap, Fingerprint, MessageSquare } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const items = document.querySelectorAll('.reveal-on-scroll');
    items.forEach(item => observer.observe(item));

    return () => items.forEach(item => observer.unobserve(item));
  }, []);

  return (
    <main className="relative h-screen bg-background text-on-background overflow-x-hidden overflow-y-auto font-body-md md:pl-72 pb-32">
      <Sidebar />
      <Header />

      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 vortex-bg opacity-40 z-0 pointer-events-none"></div>
      <div className="fixed inset-0 halftone opacity-30 z-0 pointer-events-none"></div>
      <div className="fixed inset-0 scanlines opacity-10 z-0 pointer-events-none"></div>
      
      {/* Spider-Verse Glow Accent */}
      <div className="fixed top-0 right-0 w-[50%] h-full bg-primary/5 blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 pt-16 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        
        {/* STATUS HEADER */}
        <div className="flex flex-col gap-1 mb-8 reveal-on-scroll">
            <div className="font-hud-data text-[10px] text-secondary opacity-60 uppercase italic">
                {`// ACCESSING ENCRYPTED BIOGRAPHICAL DATA...`}
            </div>
            <div className="font-hud-data text-[10px] text-secondary opacity-60 uppercase italic">
                {`// SUBJECT ID: SMHN-1610 | STATUS: ACTIVE_DEVELOPER`}
            </div>
            <div className="font-hud-data text-[10px] text-secondary opacity-60 uppercase italic">
                {`// ARCHIVE RETRIEVAL SUCCESSFUL. DISPLAYING CAREER_LOGS.`}
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-start">
          
          {/* PROFILE CARD */}
          <div className="lg:col-span-8 reveal-on-scroll">
             <div className="p-10 border-2 border-secondary bg-surface-container-low/60 backdrop-blur-xl relative shadow-[12px_12px_0px_rgba(0,238,252,0.15)] group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 kirby-krackle opacity-10 -mr-16 -mt-16 bg-secondary rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="font-hud-data text-[10px] text-secondary mb-4 italic font-bold">#BIO_ENCRYPT-BETA</div>
                
                <h1 className="font-display-hero text-5xl md:text-7xl text-secondary uppercase italic leading-none mb-8 tracking-tighter chromatic-text">
                  SYED MUHAMMAD HUZAIFA NADEEM
                </h1>
                
                <p className="font-display-hero text-lg text-white/90 leading-relaxed uppercase tracking-wide">
                  Full-stack developer and database specialist with hands-on experience in Oracle DBA, game development (Unity3D), and MERN applications. Expertise in cloud deployment, machine learning, and AI-integrated systems.
                </p>

                <div className="flex flex-wrap gap-3 mt-10">
                    {["ORACLE_DBA", "UNITY_3D", "MERN_STACK", "MACHINE_LEARNING", "AI_INTEGRATION"].map(tag => (
                        <div key={tag} className="border-2 border-secondary/30 bg-secondary/5 px-4 py-2 font-hud-data text-[10px] text-secondary tracking-widest font-bold">
                            {tag}
                        </div>
                    ))}
                </div>
             </div>
          </div>

          {/* STATUS SIDEBAR */}
          <div className="lg:col-span-4 space-y-stack-md reveal-on-scroll">
             <div className="p-8 border-2 border-primary/20 bg-surface-container-high/40 relative group">
                <div className="font-hud-data text-[9px] text-white/40 mb-6 flex justify-between font-bold">
                    <span>#SYSTEM_LOGS-77</span>
                    <span className="bg-primary/20 text-primary px-2 border border-primary/30">LIVE_STATUS</span>
                </div>
                
                <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 border-2 border-secondary/20 bg-secondary/5">
                        <Fingerprint size={48} className="text-secondary opacity-60" />
                    </div>
                    <div>
                        <div className="font-label-caps text-[9px] text-secondary/60 uppercase font-bold">Subject_Location</div>
                        <div className="font-display-hero text-2xl text-white uppercase italic">KARACHI, PK</div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-hud-data text-[9px] text-white/60 uppercase font-bold">Timeline_Stability</span>
                            <span className="font-hud-data text-[9px] text-secondary">98.2%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 overflow-hidden">
                            <div className="h-full bg-secondary w-[98.2%]"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-hud-data text-[9px] text-white/60 uppercase font-bold">Cognitive_Load</span>
                            <span className="font-hud-data text-[9px] text-primary uppercase">Optimal</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 overflow-hidden">
                            <div className="h-full bg-primary w-[40%]"></div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg mt-20 reveal-on-scroll">
            
            {/* ACTIVE EXPERIENCE */}
            <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-2 border-2 border-white/20">
                        <ShieldCheck size={20} className="text-white" />
                    </div>
                    <h2 className="font-display-hero text-4xl text-white uppercase italic tracking-tight">ACTIVE_EXPERIENCE</h2>
                </div>

                <div className="space-y-12 pl-4 border-l-2 border-white/10">
                    {/* DBA */}
                    <div className="relative group">
                        <div className="absolute -left-[22px] top-1 w-4 h-4 bg-primary border-2 border-background shadow-[0_0_10px_#ff525d]"></div>
                        <div className="font-hud-data text-[10px] text-primary mb-2 font-bold tracking-widest">SEP 2024 - NOV 2024</div>
                        <h3 className="font-display-hero text-3xl text-white uppercase italic">DATABASE ADMINISTRATOR INTERN</h3>
                        <div className="font-hud-data text-[11px] text-secondary mb-4 uppercase font-bold tracking-tight">@ Mag Tech Consultants</div>
                        <ul className="space-y-3 font-display-hero text-sm text-white/60 tracking-wide">
                            <li className="flex gap-3"><span>•</span> PROVISIONED ORACLE DATABASE ON LINUX SYSTEMS</li>
                            <li className="flex gap-3"><span>•</span> IMPLEMENTED RMAN RECOVERY STRATEGIES</li>
                            <li className="flex gap-3"><span>•</span> AUTOMATED BACKUPS VIA PYTHON SCRIPTING</li>
                        </ul>
                    </div>

                    {/* GAME DEV */}
                    <div className="relative group">
                        <div className="absolute -left-[22px] top-1 w-4 h-4 bg-secondary border-2 border-background shadow-[0_0_10px_#00eefc]"></div>
                        <div className="font-hud-data text-[10px] text-secondary mb-2 font-bold tracking-widest">2023 - PRESENT</div>
                        <h3 className="font-display-hero text-3xl text-white uppercase italic">FREELANCE GAME DEVELOPER</h3>
                        <div className="font-hud-data text-[11px] text-primary mb-4 uppercase font-bold tracking-tight">@ INDIE_CORE_SYSTEMS</div>
                        <ul className="space-y-3 font-display-hero text-sm text-white/60 tracking-wide">
                            <li className="flex gap-3"><span>•</span> DELIVERED 4 COMMERCIAL 3D TITLES VIA UNITY3D</li>
                            <li className="flex gap-3"><span>•</span> ARCHITECTED MODULAR COMPONENT PHYSICS</li>
                            <li className="flex gap-3"><span>•</span> AUTOMATED CHARACTER ANIMATION WORKFLOWS</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* EDUCATION LOG */}
            <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-2 border-2 border-white/20">
                        <GraduationCap size={20} className="text-white" />
                    </div>
                    <h2 className="font-display-hero text-4xl text-white uppercase italic tracking-tight">EDUCATION_LOG</h2>
                </div>

                <div className="space-y-12">
                    <div className="p-8 border-2 border-white/5 bg-surface-container-low/20 group relative overflow-hidden transition-all hover:bg-white/5">
                        <div className="absolute bottom-0 right-0 w-16 h-16 halftone opacity-20 group-hover:scale-125 transition-transform"></div>
                        <h3 className="font-display-hero text-2xl text-secondary uppercase italic leading-tight">BS INFORMATION TECHNOLOGY</h3>
                        <div className="font-hud-data text-[11px] text-white/80 mt-1 uppercase mb-6 font-bold tracking-tight">Bahria University Karachi</div>
                        <div className="flex justify-between items-center border-t border-white/10 pt-4">
                            <span className="font-hud-data text-[9px] text-white/40 uppercase font-bold tracking-widest">Class of 2026</span>
                            <div className="flex gap-1">
                                <div className="w-4 h-1 bg-secondary animate-pulse"></div>
                                <div className="w-4 h-1 bg-secondary/30"></div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 border-2 border-white/5 bg-surface-container-low/20 group relative overflow-hidden transition-all hover:bg-white/5">
                         <div className="absolute bottom-0 right-0 w-16 h-16 halftone opacity-20 group-hover:scale-125 transition-transform"></div>
                        <h3 className="font-display-hero text-2xl text-white/90 uppercase italic leading-tight">INTERMEDIATE (PRE-ENGINEERING)</h3>
                        <div className="font-hud-data text-[11px] text-white/60 mt-1 uppercase mb-6 font-bold tracking-tight">GULSHAN-E-IQBAL COLLEGE</div>
                        <div className="font-hud-data text-[9px] text-white/30 uppercase font-bold tracking-widest">2020 - 2022</div>
                    </div>
                </div>
            </div>
        </div>

        {/* REACH OUT BUTTON SECTION */}
        <div className="mt-32 mb-16 reveal-on-scroll">
            <Link href="/contact" className="group block relative w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary skew-x-[-12deg] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <div className="relative border-4 border-primary p-12 flex items-center justify-between transition-all group-hover:border-black/20">
                    <div>
                        <h2 className="font-display-hero text-6xl md:text-8xl text-primary uppercase italic leading-none tracking-tighter transition-colors group-hover:text-on-primary">
                            REACH OUT
                        </h2>
                        <p className="font-hud-data text-xs text-white/40 uppercase tracking-[0.4em] mt-4 transition-colors group-hover:text-on-primary/60 font-bold">
                            INITIATE_CONTACT_PROTOCOL_1610
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-primary transition-colors group-hover:text-on-primary">
                        <MessageSquare size={64} className="animate-pulse" />
                        <div className="mt-4 font-hud-data text-[10px] uppercase font-bold">SIGNAL_READY</div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 halftone opacity-20 pointer-events-none group-hover:opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 halftone opacity-20 rotate-180 pointer-events-none group-hover:opacity-40"></div>
            </Link>
        </div>

      </div>
    </main>
  );
}
