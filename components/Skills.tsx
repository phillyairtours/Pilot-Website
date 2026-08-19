import React from "react";
import { PILOT_DATA } from "@/data/pilot";
import {
  Clock,
  Award,
  ShieldCheck,
  CheckCircle,
  Plane,
  Layers,
  Sparkles,
} from "lucide-react";

export const Skills: React.FC = () => {
  const hoursList = [
    { label: "Total Flight Time", value: PILOT_DATA.flightHours.totalTime, featured: true, subtext: "Comprehensive logged flight hours across airspace classes" },
    { label: "Pilot in Command (PIC)", value: PILOT_DATA.flightHours.pic, subtext: "Sole manipulator of flight controls & final mission authority" },
    { label: "Cross Country (XC)", value: PILOT_DATA.flightHours.crossCountry, subtext: "Point-to-point cross-country navigational routes (>50 NM)" },
    { label: "Dual Given (Instruction)", value: PILOT_DATA.flightHours.dualGiven, subtext: "Active student flight instruction & safety evaluations" },
    { label: "Instrument (IFR)", value: PILOT_DATA.flightHours.instrument, subtext: "Actual IMC & simulated hood instrument procedures" },
    { label: "Night Operations", value: PILOT_DATA.flightHours.night, subtext: "Night cross-country flights & night precision landings" },
    { label: "Tailwheel Aircraft", value: PILOT_DATA.flightHours.tailwheel, subtext: "Conventional-gear stick-and-rudder handling" },
    { label: "Complex & High Perf", value: PILOT_DATA.flightHours.complexHighPerf, subtext: "Retractable gear, constant-speed prop & >200HP aircraft" },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-cyan-hud bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 mb-3">
            Aeronautical Telemetry
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Flight Hours & FAA Ratings
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            A comprehensive breakdown of logged flight time, FAA commercial privileges, instructor certifications, and specialized tailwheel and high-performance endorsements.
          </p>
        </div>

        {/* Flight Hours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {hoursList.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl glass-panel flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                item.featured
                  ? "sm:col-span-2 bg-gradient-to-br from-aerospace-900/90 to-amber-950/30 border-amber-500/40 shadow-lg shadow-amber-950/20"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      item.featured
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                        : "bg-white/5 text-cyan-hud border border-white/10"
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                    Logbook Verified
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span
                    className={`font-mono font-extrabold tracking-tight ${
                      item.featured
                        ? "text-4xl sm:text-5xl text-amber-400"
                        : "text-3xl sm:text-4xl text-white"
                    }`}
                  >
                    {item.value}
                  </span>
                  <span className="font-mono text-sm font-semibold text-cyan-300">
                    HOURS
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-100 mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates & Ratings Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-2xl font-bold text-white tracking-tight">
              FAA Certificates & Authorizations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILOT_DATA.certificates.map((cert, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl glass-panel flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/40 ${
                  cert.highlight ? "border-cyan-500/30 bg-cyan-950/10" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-hud border border-cyan-500/30 uppercase">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{cert.authority}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
                  <div className="text-xs font-mono text-amber-400/90 mb-3">{cert.category}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{cert.description}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Active Privileges
                  </span>
                  <span className="text-slate-500">FAA Airman</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Endorsements & Fleet Familiarity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Endorsements Panel */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel">
            <div className="flex items-center gap-2 mb-6 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-xl font-bold text-white">Specialized Endorsements</h3>
            </div>
            <div className="flex flex-col gap-4">
              {PILOT_DATA.endorsements.map((end, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-aerospace-900/60 border border-white/5 flex gap-3.5">
                  <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">{end.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{end.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fleet Experience Panel */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel">
            <div className="flex items-center gap-2 mb-6 text-cyan-hud">
              <Plane className="w-5 h-5" />
              <h3 className="text-xl font-bold text-white">Aircraft Types & Fleet Experience</h3>
            </div>
            <div className="flex flex-col gap-3">
              {PILOT_DATA.fleet.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-aerospace-900/60 border border-white/5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-sm text-slate-200">{item.model}</span>
                  <span className="font-mono text-xs text-cyan-300 text-right">{item.role}</span>
                </div>
              ))}
            </div>

            {/* Core Competency Chips */}
            <div className="mt-6 pt-5 border-t border-white/5">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase text-slate-400">
                <Layers className="w-3.5 h-3.5 text-cyan-hud" />
                Key Pilot Competencies
              </div>
              <div className="flex flex-wrap gap-2">
                {PILOT_DATA.skills.slice(0, 6).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
