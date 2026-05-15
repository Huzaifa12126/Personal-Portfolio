import { SceneCanvas } from "@/components/Scene/Canvas";
import { Sidebar } from "@/components/HUD/Sidebar";
import { Header } from "@/components/HUD/Header";
import { getGitHubProjects } from "@/lib/github";
import { Radar } from 'lucide-react';

export default async function Home() {
  const projects = await getGitHubProjects("Huzaifa12126");

  return (
    <main className="relative h-screen w-full overflow-hidden bg-background">
      <Sidebar />
      <Header />
      
      <SceneCanvas projects={projects} />

      {/* 2D HUD Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Background Textures */}
        <div className="absolute inset-0 halftone opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 scanlines opacity-10 pointer-events-none"></div>
      </div>

      {/* Project Scanner Info Area (Right Sidebar Style) */}
      <section className="absolute top-1/4 right-10 z-30 pointer-events-none flex flex-col items-end gap-12">
        <div className="reveal-on-scroll active text-right">
           <div className="font-hud-data text-[9px] text-secondary opacity-40 italic mb-2 uppercase">
                {`// SCANNING_DIMENSIONAL_TIMELINE`}
           </div>
           <h2 className="font-display-hero text-6xl md:text-8xl text-white/10 uppercase italic leading-none tracking-tighter transform rotate-90 origin-right translate-y-full">
            PROJECTS
          </h2>
        </div>
      </section>

      {/* BOTTOM HUD CARDS (Bento Style from Screenshots) */}
      <section className="absolute bottom-10 left-[280px] flex gap-stack-md z-30 hidden lg:flex pointer-events-none">
        
        {/* DATA_SCAN Card */}
        <div className="bg-surface-container-low/60 backdrop-blur-md border border-white/10 p-6 relative w-80 shadow-[10px_10px_0px_rgba(0,0,0,0.5)] group pointer-events-auto">
          <div className="absolute top-0 right-0 p-2 halftone opacity-30"></div>
          <div className="flex items-center gap-3 mb-4">
             <Radar size={16} className="text-primary" />
             <h3 className="font-label-caps text-[10px] text-primary tracking-widest font-bold">DATA_SCAN</h3>
          </div>
          <div className="font-hud-data text-[10px] text-on-surface-variant leading-relaxed uppercase opacity-80 italic">
            {`MULTIDIMENSIONAL ANOMALY DETECTED IN QUADRANT 7. COORDINATES PINNED TO EARTH-1610. SCANNING BIOMETRICS...`}
          </div>
          <div className="flex gap-2 mt-6">
             <div className="flex-1 h-0.5 bg-secondary"></div>
             <div className="flex-1 h-0.5 bg-secondary/30"></div>
             <div className="flex-1 h-0.5 bg-secondary/30"></div>
          </div>
        </div>

        {/* ACTIVE_PROJECTS Card */}
        <div className="bg-surface-container-low/60 backdrop-blur-md border border-white/10 p-6 relative w-64 shadow-[10px_10px_0px_rgba(0,0,0,0.5)] slant-box pointer-events-auto group">
          <h3 className="font-label-caps text-[10px] text-secondary mb-2 tracking-widest font-bold">ACTIVE_PROJECTS</h3>
          <div className="flex justify-between items-end">
            <span className="font-display-hero text-6xl text-white italic drop-shadow-[4px_4px_0px_rgba(0,238,252,0.3)]">
                {projects.length.toString().padStart(2, '0')}
            </span>
            <div className="flex flex-col items-end pb-1">
              <span className="font-hud-data text-[9px] opacity-40 uppercase italic animate-pulse">Synching_Files...</span>
              <div className="w-12 h-1 bg-secondary mt-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL INSTRUCTION */}
      <div className="absolute bottom-10 left-[60%] -translate-x-1/2 z-30 text-center pointer-events-none opacity-40">
        <p className="font-display-hero text-secondary text-sm tracking-[0.4em] mb-4 uppercase italic">SCROLL_TO_SWING</p>
        <div className="w-[1px] h-16 bg-gradient-to-b from-secondary to-transparent mx-auto"></div>
      </div>
    </main>
  );
}