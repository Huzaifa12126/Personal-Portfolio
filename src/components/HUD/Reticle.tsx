"use client";

import React, { useEffect, useState } from 'react';
import { TriangleAlert } from 'lucide-react';

export const Reticle = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [showThwip, setShowThwip] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
        setShowThwip(true);
        const timer = setTimeout(() => setShowThwip(false), 500);
        return () => clearTimeout(timer);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleScroll);
    
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-[100] transition-transform duration-100 ease-out will-change-transform"
      style={{ 
        left: 0,
        top: 0,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` 
      }}
    >
      {/* Reticle Circles */}
      <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
        <div className="w-64 h-64 border-2 border-secondary-container/20 rounded-full flex items-center justify-center">
            <div className="w-48 h-48 border border-primary/20 rounded-full flex items-center justify-center border-dashed"></div>
            <div className="absolute w-[1px] h-16 bg-secondary-container/60"></div>
            <div className="absolute h-[1px] w-16 bg-secondary-container/60"></div>
        </div>

        {/* Danger Sense Warning */}
        <div className="absolute -top-24 text-primary flex flex-col items-center animate-pulse">
            <TriangleAlert size={40} className="fill-current" />
            <div className="h-[2px] w-24 bg-primary mt-1 shadow-[0_0_10px_#ff525d]"></div>
            <p className="font-label-caps text-[10px] mt-1 tracking-widest font-bold">DANGER_SENSE_ACTIVE</p>
        </div>

        {/* THWIP Pop-up */}
        <div className={`absolute top-0 left-32 transition-all duration-300 ${showThwip ? 'opacity-100 scale-110 translate-x-4' : 'opacity-0 scale-90 translate-x-0'}`}>
            <div className="bg-primary text-on-primary font-display-hero text-4xl px-6 py-2 skew-x-[-15deg] shadow-[4px_4px_0px_#00eefc] border-2 border-black italic">
                THWIP!
            </div>
        </div>
      </div>
    </div>
  );
};