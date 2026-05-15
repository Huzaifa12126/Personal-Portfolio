"use client";

import React, { useEffect } from 'react';
import { Sidebar } from "@/components/HUD/Sidebar";
import { Header } from "@/components/HUD/Header";
import { 
  ShieldCheck, 
  Plane, 
  Activity, 
  Terminal, 
  LogOut, 
  AlertTriangle,
  ExternalLink,
  Code
} from 'lucide-react';

export default function ProjectsPage() {
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
      <div className="fixed inset-0 halftone opacity-30 z-0 pointer-events-none"></div>
      <div className="fixed inset-0 scanlines opacity-10 z-0 pointer-events-none"></div>
      <div className="fixed inset-0 vortex-bg opacity-40 z-[-1] pointer-events-none"></div>

      <div className="relative z-10 pt-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <section className="mb-stack-lg reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary border border-secondary/30 skew-x-[-12deg] mb-6">
            <ShieldCheck size={14} />
            <span className="font-label-caps text-[10px] tracking-widest font-bold uppercase">AUTHORIZED ACCESS ONLY</span>
          </div>
          <h1 className="font-display-hero text-7xl md:text-[100px] text-primary uppercase italic leading-[0.8] mb-6 tracking-tighter chromatic-text">
            SPIDER-SANCTUARY
          </h1>
          <p className="font-hud-data text-white/50 max-w-2xl text-[12px] uppercase tracking-tighter italic">
            {`// PROJECT ARCHIVAL TERMINAL. DIMENSIONAL RIFT DETECTED.`} <br/>
            {`// ACCESSING ENCRYPTED DATA STREAMS FOR MULTIVERSAL DEVELOPMENT LOGS...`}
          </p>
        </section>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/* PROJECT 1: PRIMARY FOCUS */}
          <div className="md:col-span-8 group relative bg-surface-container/60 backdrop-blur-md border border-secondary/40 overflow-hidden reveal-on-scroll transition-all hover:shadow-[0_0_30px_rgba(0,238,252,0.2)]">
            <div className="absolute inset-0 halftone opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 p-8 opacity-10 font-display-hero text-[150px] pointer-events-none leading-none italic">01</div>
            
            <div className="relative p-8 flex flex-col h-full min-h-[450px] z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="font-label-caps text-[10px] text-secondary tracking-widest font-bold uppercase">#DIMENSION_01-ALPHA</div>
                <Plane size={24} className="text-secondary" />
              </div>
              
              <div className="w-full h-56 bg-white/5 mb-8 border border-white/10 relative overflow-hidden group-hover:border-secondary/40 transition-colors">
                 <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" 
                    alt="System UI" 
                    className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 group-hover:opacity-80"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
              </div>

              <h2 className="font-display-hero text-4xl md:text-5xl text-secondary uppercase italic mb-2 tracking-tight">Smart Travel Planner</h2>
              <p className="font-body-md text-sm text-on-surface-variant mb-8 flex-grow leading-relaxed uppercase opacity-80 italic">
                AI-driven multiversal logistics engine optimized for route efficiency and anomaly avoidance across 1,000+ potential timelines.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["REACT", "OPENAI_API", "FIREBASE"].map(tag => (
                  <span key={tag} className="font-label-caps text-[9px] px-3 py-1 border border-secondary/40 text-secondary uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT 2: SIDE FOCUS */}
          <div className="md:col-span-4 group relative bg-surface-container/60 backdrop-blur-md border border-primary/40 overflow-hidden reveal-on-scroll transition-all hover:shadow-[0_0_30px_rgba(255,82,93,0.2)]">
            <div className="absolute inset-0 halftone opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-on-primary font-label-caps text-[10px] tracking-widest uppercase shadow-[4px_4px_0px_#000] z-20">CRITICAL_DATA</div>
            
            <div className="relative p-8 flex flex-col h-full min-h-[450px] z-10">
              <div className="font-label-caps text-[10px] text-primary tracking-widest font-bold uppercase mb-8">#MED_LOG-BETA</div>
              
              <div className="flex-grow flex items-center justify-center mb-8 relative">
                <div className="relative">
                  <Activity size={100} className="text-primary animate-pulse" />
                  <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-ping"></div>
                </div>
              </div>

              <h2 className="font-display-hero text-3xl text-primary uppercase italic mb-2 tracking-tight">Diabetes Readmission Classifier</h2>
              <p className="font-body-md text-sm text-on-surface-variant mb-8 leading-relaxed uppercase opacity-80 italic">
                Predictive neural network analyzing patient trajectories to minimize recovery anomalies in the healthcare sector.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["PYTHON", "SCIKIT-LEARN"].map(tag => (
                  <span key={tag} className="font-label-caps text-[9px] px-3 py-1 bg-white/5 border border-white/10 text-white/80 uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT 3: SYSTEM UTIL */}
          <div className="md:col-span-6 group relative bg-surface-container-low/60 backdrop-blur-md border border-white/10 reveal-on-scroll hover:bg-surface-container transition-all">
            <div className="flex h-full min-h-[120px]">
              <div className="w-1/3 bg-white/5 flex items-center justify-center border-r border-white/10 group-hover:bg-primary/10 transition-colors">
                <Terminal size={40} className="text-white/40 group-hover:text-primary transition-colors" />
              </div>
              <div className="w-2/3 p-6">
                <div className="font-label-caps text-[9px] text-white/40 mb-1 tracking-widest uppercase">#SYSTEM_UTIL</div>
                <h3 className="font-display-hero text-2xl text-white uppercase italic tracking-tight mb-1 group-hover:text-primary transition-colors">Multiverse Shell</h3>
                <p className="font-hud-data text-[10px] text-white/50 uppercase leading-tight italic">
                  Custom CLI for managing inter-dimensional webhooks and server protocols.
                </p>
              </div>
            </div>
          </div>

          {/* PROJECT 4: EXIT BUTTON */}
          <div className="md:col-span-6 group relative bg-primary/90 transition-all cursor-pointer hover:skew-x-[-2deg] reveal-on-scroll overflow-hidden active:scale-[0.98]">
             <div className="absolute inset-0 kirby-krackle opacity-10 pointer-events-none"></div>
             <div className="p-8 flex items-center justify-between relative z-10">
                <div>
                   <h3 className="font-display-hero text-4xl text-on-primary uppercase italic tracking-tighter">EXIT SANCTUARY</h3>
                   <p className="font-label-caps text-[10px] text-on-primary/70 tracking-widest uppercase">RETURNING TO HOME_DIMENSION</p>
                </div>
                <LogOut size={48} className="text-on-primary animate-pulse" />
             </div>
          </div>

        </div>

        {/* SPIDEY-SENSE ALERT */}
        <div className="fixed bottom-10 right-10 z-50 flex flex-col items-center pointer-events-none">
          <div className="relative mb-4 flex items-center justify-center">
             <AlertTriangle size={64} className="text-primary animate-bounce shadow-primary" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-1 border-t-2 border-primary rotate-45 transform origin-center animate-ping opacity-50"></div>
                <div className="w-16 h-1 border-t-2 border-primary -rotate-45 transform origin-center animate-ping opacity-50"></div>
             </div>
          </div>
          <div className="bg-primary text-on-primary px-4 py-1 font-label-caps text-[10px] tracking-widest font-bold shadow-[6px_6px_0px_#000] border-2 border-black/20 uppercase">
            SPIDEY_SENSE: ACTIVE
          </div>
        </div>

      </div>
    </main>
  );
}