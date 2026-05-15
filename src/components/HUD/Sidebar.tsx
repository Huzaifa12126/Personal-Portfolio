"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  History, 
  FileText, 
  Radio,
  Download,
  Backpack,
  Layers
} from 'lucide-react';

import { useNavigation } from './NavigationProvider';

export const Sidebar = () => {
  const pathname = usePathname();
  const { isMobileMenuOpen, setMobileMenuOpen } = useNavigation();

  const menuItems = [
    { label: 'PROJECT_TIMELINE', path: '/', icon: History },
    { label: 'ARSENAL', path: '/skills', icon: Backpack },
    { label: 'LOGS', path: '/about', icon: FileText },
    { label: 'SIGNAL', path: '/contact', icon: Radio },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <nav className={`fixed left-0 top-0 h-screen z-[60] flex flex-col w-72 border-r border-secondary/20 bg-background/80 md:bg-background/40 backdrop-blur-xl transition-transform duration-500 ease-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
      <div className="p-8 pb-0">
        <h1 className="font-display-hero text-3xl text-primary tracking-tighter italic uppercase mb-2 drop-shadow-[0_0_10px_rgba(255,82,93,0.3)]">
          S.M HUZAIFA NADEEM
        </h1>
        <div className="flex flex-col mb-12">
          <div className="font-display-hero text-2xl text-primary/90 leading-tight uppercase italic flex items-center gap-2 tracking-tight">
             ANOMALY_DETECTED
          </div>
          <div className="font-hud-data text-[11px] text-secondary/60 tracking-[0.2em] font-bold uppercase mt-1">SECTOR-1610</div>
        </div>
      </div>

      <ul className="flex-grow flex flex-col px-4 gap-4">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <li key={index}>
              <Link 
                href={item.path}
                className={`flex items-center gap-5 px-6 py-4 transition-all duration-300 group relative ${
                  isActive 
                    ? 'bg-primary text-on-primary font-bold skew-x-[-12deg] transform shadow-[8px_8px_0px_rgba(255,82,93,0.2)]' 
                    : 'text-white/70 hover:bg-white/5 hover:translate-x-2 hover:text-primary'
                }`}
              >
                <Icon size={22} className={isActive ? 'text-on-primary' : 'text-white/40 group-hover:text-primary transition-colors'} />
                <span className="font-label-caps text-[14px] tracking-[0.2em] uppercase font-bold">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* CV Download Area */}
      <div className="p-6 mt-auto">
        <a 
          href="/cv.pdf" 
          download="Syed_Muhammad_Huzaifa_Nadeem_CV.pdf"
          className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-on-primary font-display-hero text-2xl p-5 flex items-center justify-center gap-3 transition-all active:scale-95 border-2 border-primary/40 shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:shadow-none uppercase italic"
        >
          <Download size={24} />
          DOWNLOAD_CV
        </a>
      </div>
      
      {/* Bottom status bar */}
      <div className="h-10 bg-primary/5 flex items-center px-6 border-t border-white/5">
        <div className="w-2.5 h-2.5 bg-primary animate-pulse mr-3 rounded-full"></div>
        <span className="font-hud-data text-[10px] text-primary/70 tracking-widest uppercase italic">SYSTEM_STABLE // EARTH-1610</span>
      </div>
    </nav>
    </>
  );
};