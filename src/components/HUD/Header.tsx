"use client";

import React from 'react';
import Link from 'next/link';
import { Terminal, Link as LinkIcon } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 p-8 z-50 flex items-center gap-12 pointer-events-auto">
      <nav className="hidden md:flex gap-8 font-hud-data text-[10px] uppercase items-center">
        <Link href="/about" className="text-white/70 hover:text-primary hover:skew-x-2 transition-all cursor-pointer tracking-widest">ANOMALY_STATUS</Link>
        <Link href="/projects" className="text-white/70 hover:text-secondary hover:skew-x-2 transition-all cursor-pointer tracking-widest border-b-2 border-secondary/0 hover:border-secondary">PROJECT_VAULT</Link>
        <Link href="/contact" className="text-white/70 hover:text-primary hover:skew-x-2 transition-all cursor-pointer tracking-widest">COORDS</Link>
      </nav>

      <div className="flex items-center gap-6">
        <a href="https://github.com/Huzaifa12126" target="_blank" className="flex items-center gap-2 group">
          <div className="bg-white/10 p-1 group-hover:bg-primary transition-colors">
            <Terminal size={14} className="text-white" />
          </div>
          <span className="font-label-caps text-[10px] text-white/60 group-hover:text-primary tracking-widest uppercase">Github</span>
        </a>
        <a href="https://www.linkedin.com/in/huzaifa-nadeem-137706249" target="_blank" className="flex items-center gap-2 group">
          <div className="bg-white/10 p-1 group-hover:bg-secondary transition-colors">
            <LinkIcon size={14} className="text-white" />
          </div>
          <span className="font-label-caps text-[10px] text-white/60 group-hover:text-secondary tracking-widest uppercase">Linkedin</span>
        </a>
      </div>
    </header>
  );
};