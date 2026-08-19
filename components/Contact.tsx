"use client";

import React, { useState } from "react";
import { PILOT_DATA } from "@/data/pilot";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Send,
  CheckCircle2,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Corporate Flight Department / Part 135",
    airport: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`[Flight Inquiry] ${formData.inquiryType} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Arthur,\n\n` +
      `Inquiry Type: ${formData.inquiryType}\n` +
      `Target Airport / Location: ${formData.airport || 'N/A'}\n` +
      `Contact Name: ${formData.name}\n` +
      `Contact Email: ${formData.email}\n\n` +
      `Message Details:\n${formData.message}\n\n` +
      `Sent via arthurpaleypilot portfolio`
    );

    // Open user's default email client pre-filled
    window.location.href = `mailto:${PILOT_DATA.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-cyan-hud bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 mb-3">
            Direct Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Arthur Paley
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Inquire regarding corporate flight positions, Part 135 on-demand charter operations, ferry flights, or advanced flight instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${PILOT_DATA.email}`}
              className="p-5 rounded-2xl glass-panel flex items-center gap-4 transition-all duration-200 hover:border-cyan-400/40 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-hud flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Direct Email</div>
                <div className="text-base font-bold text-white">{PILOT_DATA.email}</div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${PILOT_DATA.phoneRaw}`}
              className="p-5 rounded-2xl glass-panel flex items-center gap-4 transition-all duration-200 hover:border-amber-400/40 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Direct Phone</div>
                <div className="text-base font-bold text-white">{PILOT_DATA.phone}</div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PILOT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel flex items-center gap-4 transition-all duration-200 hover:border-sky-400/40 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">LinkedIn Profile</div>
                <div className="text-base font-bold text-white">arthurpaleypilot</div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={PILOT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel flex items-center gap-4 transition-all duration-200 hover:border-slate-300/40 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-slate-200 flex items-center justify-center flex-shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">GitHub Project</div>
                <div className="text-base font-bold text-white">phillyairtours/Pilot-Website</div>
              </div>
            </a>

            {/* Flight School Website */}
            <a
              href={PILOT_DATA.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel flex items-center gap-4 transition-all duration-200 hover:border-emerald-400/40 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Flight Academy</div>
                <div className="text-base font-bold text-white">www.pafosfly.com</div>
              </div>
            </a>

            {/* Philadelphia Air Tours Website */}
            <a
              href="https://www.phillyairtours.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel flex items-center gap-4 transition-all duration-200 hover:border-purple-400/40 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Philadelphia Air Tours</div>
                <div className="text-base font-bold text-white">www.phillyairtours.com</div>
              </div>
            </a>

            {/* Base Location Info */}
            <div className="p-4 rounded-xl bg-aerospace-900/60 border border-white/5 text-xs text-slate-400 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyan-hud flex-shrink-0" />
              <span>Base Airspace: KPNE (Northeast Philadelphia), KPHL, KTTN</span>
            </div>
          </div>

          {/* Right Column: Flight Mission Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <Send className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Dispatch Flight Inquiry</h3>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Inquiry Prepared</h4>
                  <p className="text-sm text-slate-300">
                    Your default email application was prompted with your pre-formatted message addressed to Arthur Paley.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-mono text-cyan-hud underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Your Name / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Flight Dept / Capt. Smith"
                        className="w-full px-4 py-2.5 rounded-xl bg-aerospace-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-hud focus:ring-1 focus:ring-cyan-hud transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-aerospace-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-hud focus:ring-1 focus:ring-cyan-hud transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-aerospace-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-hud transition-all"
                      >
                        <option value="Corporate Flight Department / Part 135">Corporate Flight Dept / Part 135</option>
                        <option value="Contract Pilot / Ferry Flight">Contract Pilot / Ferry Flight</option>
                        <option value="Advanced Flight Training">Advanced Flight Training (PAFOS FLY)</option>
                        <option value="General Aviation Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Target Airport / Base
                      </label>
                      <input
                        type="text"
                        value={formData.airport}
                        onChange={(e) => setFormData({ ...formData, airport: e.target.value })}
                        placeholder="e.g. KPNE, KPHL, KTEB"
                        className="w-full px-4 py-2.5 rounded-xl bg-aerospace-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-hud focus:ring-1 focus:ring-cyan-hud transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Flight Mission Details / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the aircraft role, mission schedule, training goal, or position details..."
                      className="w-full px-4 py-2.5 rounded-xl bg-aerospace-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-hud focus:ring-1 focus:ring-cyan-hud transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Transmit Flight Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
