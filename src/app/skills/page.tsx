"use client";

import React, { useEffect } from 'react';
import { Sidebar } from "@/components/HUD/Sidebar";
import { ShieldCheck, Database, Globe, Terminal, Layout, Cpu, Wrench } from 'lucide-react';

export default function SkillsPage() {
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

  const skillGroups = [
    {
      id: "SYS_LANG-01",
      title: "LANGUAGES_CORE",
      icon: Terminal,
      skills: [
        { name: "PYTHON", desc: "AI, ML, AND AUTOMATION SCRIPTS" },
        { name: "JAVASCRIPT", desc: "MODERN WEB & ASYNC LOGIC" },
        { name: "JAVA", desc: "ENTERPRISE SYSTEMS & SWING UI" },
        { name: "C++", desc: "HIGH-PERFORMANCE SYSTEM LOGIC" },
        { name: "C#", desc: "GAME ENGINE ARCHITECTURE" },
        { name: "KOTLIN", desc: "MODERN ANDROID FRAMEWORKS" }
      ]
    },
    {
      id: "WEB_STACK-BETA",
      title: "WEB_DEVELOPMENT",
      icon: Globe,
      skills: [
        { name: "REACT", desc: "COMPONENT-BASED UI" },
        { name: "NODE.JS", desc: "SERVER-SIDE RUNTIME" },
        { name: "EXPRESS", desc: "HIGH-THROUGHPUT API ROUTES" },
        { name: "MONGODB", desc: "NO-SQL DOCUMENT SCHEMAS" },
        { name: "MERN STACK", desc: "END-TO-END DATA ECOSYSTEMS" }
      ]
    },
    {
      id: "DATA_INFRA-OMEGA",
      title: "DATABASE_SYSTEMS",
      icon: Database,
      skills: [
        { name: "ORACLE", desc: "DBA & RMAN RECOVERY" },
        { name: "MYSQL", desc: "RELATIONAL QUERY OPTIMIZATION" },
        { name: "SQLITE", desc: "LOCAL DATA PERSISTENCE" },
        { name: "MONGODB", desc: "DISTRIBUTED DATA STORAGE" },
        { name: "ORACLE LINUX", desc: "ENTERPRISE OS FOR DATABASES" }
      ]
    },
    {
      id: "VIRTUAL_REALITY",
      title: "MOBILE_&_GAMES",
      icon: Layout,
      skills: [
        { name: "ANDROID (KOTLIN)", desc: "NATIVE MOBILE APPLICATIONS" },
        { name: "UNITY3D", desc: "C# PHYSICS & 3D MECHANICS" },
        { name: "UNREAL ENGINE", desc: "TRIPLE-A GRAPHICS LOGIC" }
      ]
    },
    {
      id: "NEURAL_NET-04",
      title: "MACHINE_LEARNING",
      icon: Cpu,
      skills: [
        { name: "SCIKIT-LEARN", desc: "PREDICTIVE DATA MODELING" },
        { name: "TENSORFLOW", desc: "DEEP LEARNING FRAMEWORKS" },
        { name: "NUMPY", desc: "SCIENTIFIC COMPUTING" },
        { name: "PANDAS", desc: "DATA MANIPULATION & ANALYSIS" }
      ]
    },
    {
      id: "DEV_TOOLS-SYNC",
      title: "DEVELOPER_TOOLS",
      icon: Wrench,
      skills: [
        { name: "GIT & GITHUB", desc: "VERSION CONTROL & COLLABORATION" },
        { name: "POSTMAN", desc: "API TESTING & DOCUMENTATION" },
        { name: "VS CODE", desc: "PRIMARY DEVELOPMENT ENVIRONMENT" },
        { name: "CLAUDE CODE", desc: "AI-POWERED PAIR PROGRAMMING" }
      ]
    }
  ];

  return (
    <main className="relative h-screen bg-background text-on-background overflow-x-hidden overflow-y-auto font-body-md md:pl-72 pb-32">
      <Sidebar />

      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 vortex-bg opacity-50 z-0 pointer-events-none"></div>
      <div className="fixed inset-0 halftone opacity-40 z-0 pointer-events-none"></div>
      <div className="fixed inset-0 scanlines opacity-10 z-0 pointer-events-none"></div>

      <div className="relative z-10 pt-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-12 reveal-on-scroll">
          <div className="flex items-center gap-2 mb-4">
             <div className="bg-secondary/10 border border-secondary/30 px-3 py-1 flex items-center gap-2 skew-x-[-10deg]">
                <ShieldCheck size={14} className="text-secondary" />
                <span className="font-label-caps text-[10px] text-secondary tracking-widest font-bold">AUTHORIZED_ARSENAL_ACCESS</span>
             </div>
          </div>
          
          <h1 className="font-display-hero text-7xl md:text-[100px] text-white italic leading-none mb-4 tracking-tighter chromatic-text uppercase">
            Tech_Arsenal
          </h1>

          <div className="flex items-center gap-8 border-t border-b border-white/10 py-3">
             <div className="flex items-center gap-2">
                <span className="font-label-caps text-[11px] text-primary font-bold">STATUS:</span>
                <span className="font-hud-data text-[11px] text-white bg-primary/20 px-2 py-0.5 border border-primary/30">SYSTEM_SYNCED</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary animate-ping rounded-full"></div>
                <span className="font-hud-data text-[11px] text-white/60 uppercase italic tracking-tighter">Data_Stream_Live</span>
             </div>
          </div>
        </header>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg p-4">
          {skillGroups.map((group, index) => (
            <div 
              key={index} 
              className={`p-8 border-2 border-secondary/30 bg-surface-container-low/60 backdrop-blur-md relative reveal-on-scroll group transition-all duration-300 hover:border-secondary hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[12px_12px_0px_rgba(255,82,93,0.9)]`}
            >
              {/* Internal Scanlines Texture */}
              <div className="absolute inset-0 scanlines opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity"></div>
              
              {/* ID and Icon */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                 <div>
                    <span className="font-hud-data text-[10px] text-secondary opacity-60 font-bold uppercase tracking-widest">#{group.id}</span>
                    <h2 className="font-display-hero text-4xl text-white mt-2 italic tracking-tight uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">{group.title}</h2>
                 </div>
                 <div className="p-4 border-2 border-secondary/30 bg-secondary/10 group-hover:bg-secondary/20 group-hover:border-secondary transition-all">
                    <group.icon className="text-secondary" size={24} />
                 </div>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 gap-6 relative z-10">
                {group.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="flex gap-5 items-start group/item border-b border-white/5 pb-4 last:border-0">
                    <span className="font-hud-data text-[11px] text-primary/80 mt-1 font-bold">#0{sIndex + 1}</span>
                    <div>
                        <div className="font-display-hero text-2xl text-white group-hover/item:text-secondary transition-colors tracking-wide uppercase italic">
                            {skill.name}
                        </div>
                        <div className="font-hud-data text-[9px] text-on-surface-variant uppercase tracking-widest mt-1.5 opacity-60 font-bold">
                            {skill.desc}
                        </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Box Corner Decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 halftone opacity-40 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 halftone opacity-40 rotate-180 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}