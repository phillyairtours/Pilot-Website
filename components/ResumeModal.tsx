"use client";

import React, { useEffect } from "react";
import { PILOT_DATA } from "@/data/pilot";
import { X, Printer, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-100">
        
        {/* Modal Controls Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-white/10 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-cyan-hud uppercase">
              Pilot Resume One-Sheet
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 text-xs font-semibold border border-amber-500/40 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans space-y-6 text-sm">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
              {PILOT_DATA.name}
            </h1>
            <div className="text-base font-semibold text-sky-800 mt-1">
              Commercial Pilot ASEL • Instrument Rated • Chief Flight Instructor
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 mt-2 font-mono">
              <span>{PILOT_DATA.email}</span>
              <span>•</span>
              <span>{PILOT_DATA.phone}</span>
              <span>•</span>
              <span>{PILOT_DATA.location}</span>
              <span>•</span>
              <span>www.pafosfly.com</span>
              <span>•</span>
              <span>linkedin.com/in/arthurpaleypilot</span>
            </div>
          </div>

          {/* Flight Hours Table */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              Flight Experience ({PILOT_DATA.flightHours.totalTime}+ Total Hours)
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-xs">
              <div className="p-2 bg-slate-100 rounded border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase">Total Time</div>
                <div className="text-base font-bold text-slate-950 font-mono">
                  {PILOT_DATA.flightHours.totalTime}+
                </div>
              </div>
              <div className="p-2 bg-slate-100 rounded border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase">PIC</div>
                <div className="text-base font-bold text-slate-950 font-mono">
                  {PILOT_DATA.flightHours.pic}+
                </div>
              </div>
              <div className="p-2 bg-slate-100 rounded border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase">Cross Country</div>
                <div className="text-base font-bold text-slate-950 font-mono">
                  {PILOT_DATA.flightHours.crossCountry}+
                </div>
              </div>
              <div className="p-2 bg-slate-100 rounded border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase">Dual Given</div>
                <div className="text-base font-bold text-slate-950 font-mono">
                  {PILOT_DATA.flightHours.dualGiven}+
                </div>
              </div>
              <div className="p-2 bg-slate-100 rounded border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase">Instrument</div>
                <div className="text-base font-bold text-slate-950 font-mono">
                  {PILOT_DATA.flightHours.instrument}+
                </div>
              </div>
              <div className="p-2 bg-slate-100 rounded border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase">Night</div>
                <div className="text-base font-bold text-slate-950 font-mono">
                  {PILOT_DATA.flightHours.night}+
                </div>
              </div>
            </div>
          </div>

          {/* Certificates & Ratings */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              FAA Certificates & Endorsements
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-800 list-disc list-inside">
              <li><strong>Commercial Pilot:</strong> Airplane Single Engine Land (ASEL)</li>
              <li><strong>Instrument Rating:</strong> Airplane (IFR Approach Capable)</li>
              <li><strong>Flight Instructor:</strong> Sport Pilot (CFIS)</li>
              <li><strong>Ground Instructor:</strong> Advanced (AGI) & Instrument (IGI)</li>
              <li><strong>Endorsements:</strong> Tailwheel, High Performance, Complex</li>
              <li><strong>Medical:</strong> FAA First Class Medical (Current & Valid)</li>
            </ul>
          </div>

          {/* Professional Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-3 font-mono">
              Professional Flight Experience
            </h2>
            <div className="space-y-4">
              {PILOT_DATA.experiences.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-950">
                    <span>{exp.role}</span>
                    <span className="font-mono text-slate-600">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-sky-800">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 pt-0.5">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Competencies & Languages */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              Competencies & Languages
            </h2>
            <div className="text-xs text-slate-700 space-y-1">
              <div>
                <strong>Languages:</strong> English (Full Professional), Russian (Full Professional), Ukrainian (Full Professional)
              </div>
              <div>
                <strong>Aeronautical Skills:</strong> Stick-and-Rudder Handling, Single-Pilot Resource Management (SRM), Aeronautical Decision Making (ADM), Crosswind Mastery, Fleet Dispatch & Maintenance Oversight.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
