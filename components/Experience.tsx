import React from "react";
import { PILOT_DATA } from "@/data/pilot";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-aerospace-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 mb-3">
            Career History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Flight Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Professional track record overseeing flight school operations, standardized syllabus delivery, instructor checks, and fleet airworthiness management.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="flex flex-col gap-8 max-w-4xl">
          {PILOT_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40"
            >
              {/* Top Row: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-amber-400">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 font-normal">{exp.type}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-3">
                {exp.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-cyan-hud flex-shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
