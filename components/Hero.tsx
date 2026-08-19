"use client";

import React, { useState } from "react";
import { PILOT_DATA } from "@/data/pilot";
import {
  ShieldCheck,
  Compass,
  FileText,
  MapPin,
  Clock,
  ArrowUpRight,
  Activity,
  Award,
} from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Interactive HUD tilt state
  const [hudTilt, setHudTilt] = useState({ pitch: 0, roll: 0 });

  const handleHudMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setHudTilt({
      roll: (x / (rect.width / 2)) * 14,
      pitch: -(y / (rect.height / 2)) * 10,
    });
  };

  const handleHudMouseLeave = () => {
    setHudTilt({ pitch: 0, roll: 0 });
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Pilot Identity & Value Prop */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Commercial Pilot ASEL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-hud border border-cyan-500/30">
                <Compass className="w-3.5 h-3.5" />
                Instrument Rated
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-300 border border-sky-500/30">
                <Award className="w-3.5 h-3.5" />
                CFIS / AGI / IGI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Clock className="w-3.5 h-3.5" />
                {PILOT_DATA.flightHours.totalTime}+ Total Hours
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {PILOT_DATA.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-slate-300">
                Chief Flight Instructor • Flight Operations Leader • Corporate Aviator
              </p>
            </div>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {PILOT_DATA.summary}
            </p>

            {/* Base Airports & Location Strip */}
            <div className="p-4 rounded-xl glass-panel flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-hud" />
                <span>{PILOT_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>KPNE • KPHL • KTTN</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Incident-Free Safety</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#skills"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all hover:-translate-y-0.5"
              >
                <Activity className="w-4 h-4" />
                Explore Flight Hours
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                View & Print CV
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-medium text-sm transition-all hover:-translate-y-0.5"
              >
                Direct Inquiry
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Glass Cockpit HUD Card */}
          <div className="lg:col-span-5">
            <div
              onMouseMove={handleHudMouseMove}
              onMouseLeave={handleHudMouseLeave}
              className="relative p-6 rounded-2xl glass-panel border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 transition-all duration-200 cursor-crosshair"
            >
              {/* HUD Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-hud animate-ping" />
                  <span className="font-mono text-xs font-bold text-cyan-hud tracking-wider uppercase">
                    PAFOS-01 // COCKPIT HUD
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Artificial Horizon Frame */}
              <div className="relative w-full h-48 sm:h-52 bg-slate-950 rounded-xl border border-cyan-500/40 overflow-hidden flex items-center justify-center">
                {/* Dynamic Horizon Ground/Sky Mesh */}
                <div
                  className="absolute w-[200%] h-[200%] transition-transform duration-75 ease-out pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, #0369a1 0%, #0284c7 49.6%, #ffffff 49.9%, #00f0ff 50.1%, #78350f 50.4%, #451a03 100%)",
                    opacity: 0.35,
                    transform: `translateY(${hudTilt.pitch * 3}px) rotate(${hudTilt.roll}deg)`,
                  }}
                />

                {/* Pitch Ladder Indicators */}
                <div className="absolute inset-0 flex flex-col justify-around items-center opacity-60 font-mono text-[10px] text-cyan-hud pointer-events-none">
                  <div className="flex items-center gap-2"><span className="w-6 h-[1px] bg-cyan-hud" />+10°<span className="w-6 h-[1px] bg-cyan-hud" /></div>
                  <div className="flex items-center gap-2"><span className="w-4 h-[1px] bg-cyan-hud" />+05°<span className="w-4 h-[1px] bg-cyan-hud" /></div>
                  <div className="flex items-center gap-2 font-bold text-white"><span className="w-12 h-[2px] bg-white shadow-[0_0_8px_#fff]" />00°<span className="w-12 h-[2px] bg-white shadow-[0_0_8px_#fff]" /></div>
                  <div className="flex items-center gap-2"><span className="w-4 h-[1px] bg-cyan-hud" />-05°<span className="w-4 h-[1px] bg-cyan-hud" /></div>
                  <div className="flex items-center gap-2"><span className="w-6 h-[1px] bg-cyan-hud" />-10°<span className="w-6 h-[1px] bg-cyan-hud" /></div>
                </div>

                {/* Center Aircraft Reticle */}
                <div className="absolute z-10 flex items-center justify-center pointer-events-none">
                  <div className="w-24 h-4 flex items-center justify-between">
                    <div className="w-8 h-1 bg-amber-400 rounded-sm shadow-[0_0_8px_#f59e0b]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-white shadow-[0_0_8px_#f59e0b]" />
                    <div className="w-8 h-1 bg-amber-400 rounded-sm shadow-[0_0_8px_#f59e0b]" />
                  </div>
                </div>

                {/* Airspeed & Altitude Tapes */}
                <div className="absolute left-2 top-3 bottom-3 w-10 bg-black/60 border border-white/10 rounded px-1 flex flex-col justify-between items-center text-[10px] font-mono text-cyan-300">
                  <span className="text-[8px] text-slate-400">IAS</span>
                  <span>140</span>
                  <span className="bg-cyan-500/20 px-1 py-0.5 rounded text-white font-bold border border-cyan-400/40">120</span>
                  <span>100</span>
                  <span className="text-[8px]">KT</span>
                </div>

                <div className="absolute right-2 top-3 bottom-3 w-12 bg-black/60 border border-white/10 rounded px-1 flex flex-col justify-between items-center text-[10px] font-mono text-cyan-300">
                  <span className="text-[8px] text-slate-400">ALT</span>
                  <span>6500</span>
                  <span className="bg-cyan-500/20 px-1 py-0.5 rounded text-white font-bold border border-cyan-400/40">5500</span>
                  <span>4500</span>
                  <span className="text-[8px]">FT</span>
                </div>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div className="p-2.5 rounded-lg bg-aerospace-900/80 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Total Time</div>
                  <div className="text-lg font-bold text-amber-400 font-mono">
                    {PILOT_DATA.flightHours.totalTime}+
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-aerospace-900/80 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">PIC Hours</div>
                  <div className="text-lg font-bold text-cyan-hud font-mono">
                    {PILOT_DATA.flightHours.pic}+
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-aerospace-900/80 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Dual Given</div>
                  <div className="text-lg font-bold text-emerald-400 font-mono">
                    {PILOT_DATA.flightHours.dualGiven}+
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
