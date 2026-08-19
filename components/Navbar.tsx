"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PILOT_DATA } from "@/data/pilot";
import { Plane, FileText, Menu, X, Linkedin, Github } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills & Hours", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-aerospace-950/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="#overview"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-hud/50 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
            <Plane className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-2">
              {PILOT_DATA.name}
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Commercial Pilot • CFIS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-hud transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-hud hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions & Links */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PILOT_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={PILOT_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 hover:border-amber-400 text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Pilot CV</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-aerospace-900/95 border-b border-white/10 backdrop-blur-xl px-6 py-5 mt-2 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-hud py-1 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>View Pilot CV</span>
            </button>
            <div className="flex gap-2">
              <a
                href={PILOT_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PILOT_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-200"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
