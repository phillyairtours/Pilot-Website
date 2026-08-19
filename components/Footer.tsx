import React from "react";
import { PILOT_DATA } from "@/data/pilot";
import { Plane, Linkedin, Github, Globe } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-aerospace-950 border-t border-white/10 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Plane className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-sm text-white">{PILOT_DATA.name}</div>
              <div className="text-[11px] font-mono text-slate-400">
                Commercial Pilot ASEL • CFIS • AGI/IGI
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a href="#overview" className="hover:text-cyan-hud transition-colors">Overview</a>
            {/* <a href="#about" className="hover:text-cyan-hud transition-colors">About</a> */}
            <a href="#experience" className="hover:text-cyan-hud transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-hud transition-colors">Flight Hours</a>
            <a href="#projects" className="hover:text-cyan-hud transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-hud transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PILOT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PILOT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PILOT_DATA.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/40 transition-colors"
              aria-label="PAFOS FLY Website"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} Arthur Paley. All rights reserved.
          </div>
          <div>
            Base Airspace: KPNE / KPHL / KTTN • Philadelphia, PA
          </div>
        </div>

      </div>
    </footer>
  );
};
