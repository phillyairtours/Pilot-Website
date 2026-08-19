/**
 * ===================================================================
 * ARTHUR PALEY - PILOT PROFILE & LOGBOOK DATA
 * ===================================================================
 * 
 * QUICK INSTRUCTION FOR ARTHUR:
 * Whenever your flight hours, ratings, or contact details change, 
 * you can simply update the numbers or text below and save this file!
 * The entire website updates automatically.
 */

const PILOT_PROFILE = {
  // --- Personal & Contact Information ---
  personal: {
    fullName: "Arthur Paley",
    callsignOrTitle: "Commercial Pilot • Flight Instructor",
    headline: "Commercial Pilot ASEL • Instrument Rated • Chief Flight Instructor",
    tagline: "Career-Dedicated Aviator with 750+ Total Flight Hours, Advanced Instruction Mastery & Uncompromising Operational Discipline.",
    location: "Philadelphia, Pennsylvania, United States",
    homeBaseAirports: ["KPNE (Northeast Philadelphia)", "KPHL (Philadelphia Intl)", "KTTN (Trenton-Mercer)"],
    email: "arthur@pafosfly.com",
    phone: "(917) 385-9680",
    phoneClean: "9173859680",
    website: "https://www.pafosfly.com",
    websiteDisplay: "www.pafosfly.com",
    linkedin: "https://www.linkedin.com/in/arthurpaleypilot",
    linkedinDisplay: "linkedin.com/in/arthurpaleypilot",
    availability: "Available for Corporate, Charter (Part 135/91), Contract Flying & Advanced Instruction",
    statusBadge: "Active Flight Operations",
  },

  // --- Professional Flight Hours Logbook (Updated) ---
  flightHours: {
    totalTime: 750,          // Total Flight Hours
    pic: 650,                // Pilot in Command (PIC)
    crossCountry: 260,       // Cross Country (XC)
    dualGiven: 290,          // Dual Instruction Given (CFI/CFIS)
    instrument: 75,          // Instrument Flight (Actual & Simulated)
    multiEngine: 8,          // Multi-Engine Time
    nightTime: 85,           // Night Flight Time
    tailwheelTime: 20,       // Tailwheel Time
    complexHighPerf: 140,    // Complex & High Performance Aircraft Time
    safetyRecord: "100%",    // Zero Incidents / Zero Violations
    lastBFRDate: "Current & Valid",
    medicalClass: "FAA First Class Medical (Current)",
  },

  // --- FAA Certificates & Ratings ---
  certificates: [
    {
      title: "Commercial Pilot",
      category: "Airplane Single Engine Land (ASEL)",
      authority: "Federal Aviation Administration (FAA)",
      description: "Privileged for commercial flight operations, passenger and cargo charter, ferry flights, and precision operations.",
      badge: "FAA COMMERCIAL",
      highlight: true
    },
    {
      title: "Instrument Rating - Airplane",
      category: "IFR Operations",
      authority: "FAA",
      description: "Proficient in IMC, precision/non-precision approaches (ILS, RNAV/GPS, LPV, VOR), and low-visibility operations.",
      badge: "INSTRUMENT RATED",
      highlight: true
    },
    {
      title: "Certified Flight Instructor - Sport (CFIS)",
      category: "Flight Instruction",
      authority: "FAA",
      description: "Providing foundational and advanced stick-and-rudder instruction, stall/spin awareness, and pilot safety mentoring.",
      badge: "FLIGHT INSTRUCTOR",
      highlight: true
    },
    {
      title: "Advanced Ground Instructor (AGI)",
      category: "Aviation Education",
      authority: "FAA",
      description: "Authorized for ground instruction covering Private, Commercial, and Instrument aeronautical knowledge syllabi.",
      badge: "FAA AGI",
      highlight: false
    },
    {
      title: "Instrument Ground Instructor (IGI)",
      category: "IFR Education",
      authority: "FAA",
      description: "Specialized in advanced instrument procedures, weather theory, navigation charts, and avionics systems training.",
      badge: "FAA IGI",
      highlight: false
    }
  ],

  // --- Endorsements & Specialized Qualifications ---
  endorsements: [
    {
      name: "High-Performance Endorsement",
      description: "Authorized for aircraft with engines exceeding 200 horsepower.",
      icon: "gauge-high"
    },
    {
      name: "Complex Aircraft Endorsement",
      description: "Proficient in retractable landing gear, flaps, and controllable-pitch propeller management.",
      icon: "sliders"
    },
    {
      name: "Tailwheel Aircraft Endorsement",
      description: "Mastery of conventional gear, rudder authority, three-point/wheel landings, and crosswind ground handling.",
      icon: "plane-tail"
    }
  ],

  // --- Career Mission & Corporate Aviation Focus ---
  careerFocus: {
    title: "Dedicated Corporate & Charter Aviator",
    statement: "Seeking stable, long-term employment in corporate flight departments, Part 135 charter, or aircraft management operations.",
    keyDifferentiators: [
      {
        title: "No Airline Career Churn",
        description: "Committed 100% to private, corporate, and charter aviation longevity rather than using positions as temporary time-building.",
        icon: "shield-check"
      },
      {
        title: "Safety-Driven Stick & Rudder",
        description: "Exceptional manual flying skills honed through tailwheel operations, primary flight training, and upset prevention.",
        icon: "feather"
      },
      {
        title: "Aeronautical Decision Making (ADM)",
        description: "Disciplined risk mitigation, single-pilot resource management (SRM), and strict standard operating procedure adherence.",
        icon: "compass"
      },
      {
        title: "Executive & VIP Discretion",
        description: "Professional demeanor, utmost discretion for high-net-worth passengers, and dedication to premier customer service.",
        icon: "briefcase"
      }
    ]
  },

  // --- Professional Work Experience ---
  experience: [
    {
      role: "Operations Manager & Chief Instructor",
      company: "DORANS AVIATION",
      period: "August 2024 – Present",
      location: "Greater Philadelphia Area",
      highlights: [
        "Oversee daily flight operations, flight scheduling, and safety compliance across fleet operations.",
        "Lead standardized instructor training, standardization checks, and pilot evaluation programs.",
        "Manage regulatory adherence, airworthiness tracking, and aircraft dispatch reliability."
      ]
    },
    {
      role: "Founder & Chief Flight Instructor",
      company: "PAFOS FLY Flight School",
      period: "2019 – Present",
      location: "Philadelphia, PA",
      highlights: [
        "Founded and direct operations for a premier flight training academy emphasizing safety, precision, and student success.",
        "Deliver comprehensive initial, instrument, and advanced transition flight and ground instruction.",
        "Developed custom safety protocols and standardized aeronautical decision-making curricula."
      ]
    }
  ],

  // --- Aircraft Types Flown & Familiarity ---
  fleetExperience: [
    { model: "Cessna 172 Skyhawk (Standard & G1000)", role: "Primary & Instrument Instruction / XC" },
    { model: "Cessna 182 Skylane", role: "High-Performance Cross-Country Operations" },
    { model: "Piper PA-28 Cherokee / Archer / Arrow", role: "Complex Transition & Flight Training" },
    { model: "Conventional Gear / Tailwheel Aircraft", role: "Stick & Rudder Precision & Crosswind Handling" },
    { model: "Multi-Engine Trainer Platforms", role: "Asymmetric Thrust & Multi-Engine Procedures" }
  ],

  // --- Languages ---
  languages: [
    { name: "English", level: "Native / Full Professional Proficiency" },
    { name: "Russian", level: "Full Professional Fluency" },
    { name: "Ukrainian", level: "Full Professional Fluency" }
  ],

  // --- Core Competencies ---
  competencies: [
    "Safety-Driven Stick-and-Rudder Aircraft Handling",
    "Aeronautical Decision Making (ADM) & Risk Management",
    "Single-Pilot Resource Management (SRM)",
    "Standard Operating Procedures (SOP) Development",
    "Flight Standardization & Pilot Mentorship",
    "Adverse Weather & Crosswind Operations",
    "Flight Operations & Fleet Scheduling Management"
  ]
};

// Export to global window so vanilla JS app can easily access it
if (typeof window !== "undefined") {
  window.PILOT_PROFILE = PILOT_PROFILE;
}
