import React from "react";
import { PILOT_DATA } from "@/data/pilot";
import { FolderGit2, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative bg-aerospace-900/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 mb-3">
            Featured Aviation Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & Operational Initiatives
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Standardized flight training curricula, safety management implementations, and operations workflows developed and directed by Arthur Paley.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PILOT_DATA.projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl glass-panel flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-hud flex items-center justify-center">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-semibold uppercase px-2.5 py-1 rounded bg-white/5 text-slate-400 border border-white/10">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-amber-400 mb-4">{project.subtitle}</div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  {project.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="pt-4 border-t border-white/5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-hud hover:text-cyan-300 transition-colors"
                  >
                    <span>{project.linkText || "View Project"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
