"use client";

import React, { useState, useEffect } from 'react';
import { Sidebar } from "@/components/HUD/Sidebar";
import { Header } from "@/components/HUD/Header";
import { 
  Mail, 
  MapPin, 
  Share2, 
  Terminal, 
  Globe, 
  Send, 
  CheckCircle,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xjglnkoj", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <main className="relative h-screen bg-background text-on-background overflow-x-hidden overflow-y-auto font-body-md md:pl-72 pb-32">
      <Sidebar />
      <Header />

      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 vortex-bg opacity-40 z-0 pointer-events-none"></div>
      <div className="fixed inset-0 halftone opacity-30 z-0 pointer-events-none"></div>
      <div className="fixed inset-0 scanlines opacity-10 z-0 pointer-events-none"></div>
      
      {/* Spider-Verse Glow Accent */}
      <div className="fixed top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] pointer-events-none z-0"></div>

      <div className="relative z-10 pt-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <section className="mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary border border-secondary/30 skew-x-[-12deg] mb-6">
            <ShieldCheck size={14} />
            <span className="font-label-caps text-[10px] tracking-widest font-bold uppercase">AUTHORIZED_SIGNAL_LINK</span>
          </div>
          <h1 className="font-display-hero text-7xl md:text-[110px] text-white uppercase italic leading-[0.8] mb-6 tracking-tighter chromatic-text">
            SEND_<span className="text-secondary">SIGNAL</span>
          </h1>
          <p className="font-hud-data text-white/50 max-w-2xl text-[10px] uppercase tracking-tighter italic">
            {`// INITIATING MULTIVERSAL COMMUNICATION PROTOCOL...`} <br/>
            {`// FREQUENCY: 1610.77 MHZ | ENCRYPTION: ACTIVE`}
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* LEFT PANEL: CONTACT INFO & STATUS */}
          <div className="lg:col-span-5 space-y-10 order-2 lg:order-1 reveal-on-scroll">
            
            {/* CONTACT LOG CARD */}
            <div className="p-10 border-2 border-secondary bg-surface-container-low/60 backdrop-blur-xl relative shadow-[10px_10px_0px_rgba(0,238,252,0.1)] group">
                <div className="absolute top-0 right-0 w-24 h-24 kirby-krackle opacity-10 -mr-12 -mt-12 bg-secondary rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="absolute -top-[14px] -left-2 bg-secondary text-on-secondary px-4 py-1 font-display-hero text-lg italic border-2 border-black/20 z-10 uppercase tracking-tight shadow-[4px_4px_0px_#000]">
                    CONTACT_LOG
                </div>
                
                <div className="space-y-8 pt-6">
                    <div className="flex items-start gap-5 group/item transition-transform hover:translate-x-2">
                        <Mail className="text-secondary mt-1 shrink-0" size={24} />
                        <div>
                            <div className="font-label-caps text-[9px] text-secondary/60 uppercase tracking-widest mb-1 font-bold">Secure_Channel</div>
                            <div className="font-display-hero text-2xl text-white italic tracking-wide break-all uppercase">huzaifnadeem86@gmail.com</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-5 group/item transition-transform hover:translate-x-2">
                        <MapPin className="text-secondary mt-1 shrink-0" size={24} />
                        <div>
                            <div className="font-label-caps text-[9px] text-secondary/60 uppercase tracking-widest mb-1 font-bold">Current_Coordinates</div>
                            <div className="font-display-hero text-2xl text-white italic tracking-wide uppercase">KARACHI, PAKISTAN // EARTH-1610</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-5 group/item transition-transform hover:translate-x-2">
                        <Share2 className="text-secondary mt-1 shrink-0" size={24} />
                        <div>
                            <div className="font-label-caps text-[9px] text-secondary/60 uppercase tracking-widest mb-1 font-bold">Relay_Links</div>
                            <div className="flex gap-8 mt-4">
                                <a href="https://github.com/Huzaifa12126" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-all text-white hover:text-secondary">
                                    <Terminal size={22} />
                                </a>
                                <a href="https://www.linkedin.com/in/huzaifa-nadeem-137706249" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-all text-white hover:text-secondary">
                                    <Globe size={22} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-all text-white hover:text-secondary">
                                    <Share2 size={22} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SYSTEM STATUS CARD */}
            <div className="p-8 border-2 border-primary/20 bg-primary/5 relative group transition-all hover:bg-primary/10">
              <div className="font-label-caps text-[10px] text-primary uppercase mb-4 tracking-widest font-bold border-b border-primary/20 pb-2 flex justify-between items-center">
                <span>System_Status</span>
                <span className="text-primary/40 font-mono italic">ID: EARTH-1610</span>
              </div>
              <div className="flex items-center gap-5">
                <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(255,82,93,0.8)]"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-50"></div>
                </div>
                <div className="font-hud-data text-[11px] text-white uppercase tracking-tight font-bold italic leading-none">
                    SIGNAL_BROADCASTING AT 100% CAPACITY // ENCRYPTION_STABLE
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: CONTACT FORM */}
          <div className="lg:col-span-7 order-1 lg:order-2 reveal-on-scroll">
            <div className="relative group">
              
              {/* STICKERS - Comic Book Vibe */}
              <div className="absolute -top-6 -right-6 bg-primary text-on-primary px-8 py-3 font-display-hero text-3xl border-2 border-black transform -rotate-6 shadow-[6px_6px_0px_#000] z-30 italic animate-bounce-subtle">BAM!</div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-on-secondary px-8 py-3 font-display-hero text-3xl border-2 border-black transform rotate-3 shadow-[6px_6px_0px_#000] z-30 italic animate-pulse-slow">THWIP!</div>

              <div className="bg-surface border-2 border-white/20 p-12 relative overflow-hidden min-h-[600px] shadow-[20px_20px_0px_#000] group-hover:border-secondary/40 transition-colors">
                <div className="absolute top-0 right-0 w-48 h-48 halftone opacity-10 pointer-events-none"></div>
                
                <div className="mb-14 relative z-10">
                  <h2 className="font-display-hero text-6xl md:text-8xl text-white uppercase tracking-tight mb-2 leading-none italic chromatic-text">TRANSMIT</h2>
                  <div className="flex items-center gap-3">
                     <div className="w-12 h-1 bg-primary"></div>
                     <p className="font-hud-data text-[11px] text-primary italic uppercase tracking-widest font-bold">{`// DATA_PAYLOAD_READY`}</p>
                  </div>
                </div>

                {status !== 'sent' ? (
                  <form className="space-y-12 relative z-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="font-display-hero text-xs text-white/40 uppercase tracking-[0.3em] font-bold">Identifier</label>
                        <input name="name" required className="w-full bg-transparent border-b-2 border-white/10 focus:border-secondary outline-none py-4 text-white font-display-hero text-2xl italic transition-all placeholder:opacity-20 uppercase" placeholder="ENTER NAME ..." type="text" />
                      </div>
                      <div className="space-y-4">
                        <label className="font-display-hero text-xs text-white/40 uppercase tracking-[0.3em] font-bold">Freq_Channel</label>
                        <input name="email" required className="w-full bg-transparent border-b-2 border-white/10 focus:border-secondary outline-none py-4 text-white font-display-hero text-2xl italic transition-all placeholder:opacity-20 uppercase" placeholder="USER@HUB.TECH" type="email" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <label className="font-display-hero text-xs text-white/40 uppercase tracking-[0.3em] font-bold">Transmission_Type</label>
                      <input name="subject" required className="w-full bg-transparent border-b-2 border-white/10 focus:border-secondary outline-none py-4 text-white font-display-hero text-2xl italic transition-all placeholder:opacity-20 uppercase" placeholder="MISSION_PROPOSAL" type="text" />
                    </div>

                    <div className="space-y-4">
                      <label className="font-display-hero text-xs text-white/40 uppercase tracking-[0.3em] font-bold">Data_Payload</label>
                      <textarea name="message" required className="w-full bg-transparent border-b-2 border-white/10 focus:border-secondary outline-none py-4 text-white font-display-hero text-2xl italic transition-all resize-none placeholder:opacity-20 min-h-[120px] uppercase" placeholder="ENTER MESSAGE CONTENT ..." rows={1}></textarea>
                    </div>

                    <button 
                        disabled={status === 'sending'} 
                        className={`w-full py-6 font-display-hero text-3xl transition-all active:scale-95 uppercase flex items-center justify-center gap-6 group italic shadow-[10px_10px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 border-2 ${
                            status === 'error' ? 'bg-primary/20 text-primary border-primary' : 'bg-primary text-on-primary border-black/20 hover:bg-primary-container'
                        }`} 
                        type="submit"
                    >
                        {status === 'sending' ? (
                            <>
                                <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>ENCRYPTING...</span>
                            </>
                        ) : status === 'error' ? (
                            <>
                                <AlertCircle size={32} />
                                <span>RETRY_TRANSMISSION</span>
                            </>
                        ) : (
                            <>
                                <Send className="group-hover:animate-bounce-subtle" size={32} />
                                <span>SUBMIT_SIGNAL</span>
                            </>
                        )}
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-10 animate-in fade-in zoom-in duration-500 relative z-10">
                    <div className="relative">
                        <CheckCircle size={120} className="text-secondary animate-bounce-subtle" />
                        <div className="absolute inset-0 bg-secondary blur-3xl opacity-20 animate-pulse"></div>
                    </div>
                    <div>
                        <h2 className="font-display-hero text-7xl text-white uppercase italic chromatic-text leading-none mb-4">SIGNAL_SENT</h2>
                        <p className="font-display-hero text-xl text-white/60 uppercase max-w-md tracking-wide">YOUR TRANSMISSION HAS BEEN ENCRYPTED AND BROADCAST ACROSS THE MULTIVERSE.</p>
                    </div>
                    <button onClick={() => setStatus('idle')} className="font-label-caps text-xs text-primary border-b-2 border-primary hover:text-white hover:border-white transition-all tracking-widest uppercase pb-1 font-bold">RE-ESTABLISH_UPLINK</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
