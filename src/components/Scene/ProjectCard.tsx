"use client";

import React from 'react';
import { GitHubRepo } from '@/lib/github';
import { ExternalLink, Star, Code } from 'lucide-react';

export const ProjectCard: React.FC<{ repo: GitHubRepo }> = ({ repo }) => {
  return (
    <div className="w-80 md:w-96 bg-surface-container-high/40 backdrop-blur-md border border-secondary-container/30 p-stack-md relative comic-panel shadow-[12px_12px_0px_0px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-transform cursor-pointer group">
      {/* Halftone Texture Overlay */}
      <div className="absolute inset-0 halftone opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"></div>
      
      <div className="absolute -top-4 -left-4 bg-primary text-on-primary px-4 py-1 font-headline-lg text-lg transform rotate-[-4deg] border-2 border-black z-10 uppercase shadow-[2px_2px_0px_0px_#000]">
        MISSION_LOG
      </div>
      
      <div className="space-y-4 pt-4 relative z-10">
        <h3 className="font-display-hero text-2xl text-secondary-container uppercase tracking-tight truncate group-hover:text-white transition-colors">
          {repo.name.replace(/-/g, '_')}
        </h3>
        
        <p className="font-body-md text-sm text-on-surface-variant line-clamp-3 h-12 italic opacity-80">
          {repo.description || "NO_DATA_AVAILABLE // ENCRYPTED_STREAM_DETECTED"}
        </p>
        
        <div className="flex justify-between items-center border-t border-outline-variant pt-4">
          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-primary">
              <Star size={14} className="fill-current" />
              <span className="font-hud-data text-xs">{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1 text-secondary-container">
              <Code size={14} />
              <span className="font-hud-data text-xs uppercase">{repo.language || "UNKNOWN"}</span>
            </div>
          </div>
          
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-secondary-container text-on-secondary-container p-2 rounded-none hover:bg-primary hover:text-on-primary transition-all shadow-[2px_2px_0px_0px_#000] active:scale-95"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Comic Accent */}
      <div className="absolute bottom-0 right-0 p-2 kirby-krackle text-surface-variant opacity-20 w-16 h-16 pointer-events-none"></div>
    </div>
  );
};