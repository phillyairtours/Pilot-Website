import React from "react";
import { PILOT_DATA } from "@/data/pilot";
import { ShieldCheck, Compass, Award, Globe, Users, CheckCircle2 } from "lucide-react";

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-amber-400" />,
      title: "Dedicated Corporate & Charter Aviator",
      description:
        "Committed 100% to private aviation longevity and aircraft management. Seeking stable, career-oriented employment without airline career aspirations or flight time churn.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Safety-Driven Stick & Rudder Mastery",
      description:
        "Deep manual aircraft handling skills honed through tailwheel operations, primary flight training, emergency upset prevention, and demanding crosswind conditions.",
    },
    {
      icon: <Compass className="w-5 h-5 text-cyan-hud" />,
      title: "Disciplined Decision Making (ADM & SRM)",
      description:
        "Single-Pilot Resource Management (SRM), rigorous pre-flight risk assessment, and standard operating procedures (SOPs) ensuring uncompromising mission safety.",
    },
    {
      icon: <Users className="w-5 h-5 text-sky-400" />,
      title: "Operations Management & Mentoring",
      description:
        "Founder of PAFOS FLY and Operations Manager at Dorans Aviation, directing fleet maintenance, regulatory compliance, and standardized pilot evaluations.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-cyan-hud bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 mb-3">
            Aviation Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Arthur Paley
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Based out of the Greater Philadelphia metropolitan airspace (KPNE / KPHL), Arthur combines disciplined commercial pilot execution with flight academy leadership, ensuring exceptional safety, passenger comfort, and operational precision.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl glass-panel flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified FAA Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trilingual & Communication Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-hud mb-2">
              <Globe className="w-5 h-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                International Communication Advantage
              </span>
            </div>
            <h4 className="text-xl font-bold text-white">Trilingual Flight Operations</h4>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Fluent communication across diverse passenger and international corporate flight operations.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {PILOT_DATA.languages.map((lang, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-aerospace-900/90 border border-white/10 text-center"
              >
                <div className="font-bold text-sm text-white">{lang.name}</div>
                <div className="text-[11px] font-mono text-cyan-300">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
