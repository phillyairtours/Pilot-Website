export interface FlightHours {
  totalTime: number;
  pic: number;
  crossCountry: number;
  dualGiven: number;
  instrument: number;
  night: number;
  tailwheel: number;
  complexHighPerf: number;
  safetyRecord: string;
  medical: string;
}

export interface Certificate {
  title: string;
  category: string;
  authority: string;
  description: string;
  badge: string;
  highlight?: boolean;
}

export interface Endorsement {
  name: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  achievements: string[];
  link?: string;
  linkText?: string;
}

export interface PilotProfile {
  name: string;
  headline: string;
  summary: string;
  location: string;
  homeAirports: string[];
  email: string;
  phone: string;
  phoneRaw: string;
  website: string;
  linkedin: string;
  github: string;
  availability: string;
  flightHours: FlightHours;
  certificates: Certificate[];
  endorsements: Endorsement[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skills: string[];
  languages: { name: string; level: string }[];
  fleet: { model: string; role: string }[];
}

export const PILOT_DATA: PilotProfile = {
  name: "Arthur Paley",
  headline: "Owner & Chief Instructor at PAFOS FLY | Commercial Pilot ASEL • Instrument Rated",
  summary:
    "Safety-driven commercial aviator and flight instructor with 750+ total flight hours. Proven background in flight operations management, standardized flight instruction, and disciplined aeronautical decision-making. Actively seeking long-term, stable opportunities in corporate flight departments, Part 135 charter operations, or specialized flight operations.",
  location: "Philadelphia, Pennsylvania, United States",
  homeAirports: ["KPNE (Northeast Philadelphia)", "KPHL (Philadelphia Intl)", "KTTN (Trenton-Mercer)"],
  email: "arthur@pafosfly.com",
  phone: "(917) 385-9680",
  phoneRaw: "9173859680",
  website: "https://www.pafosfly.com",
  linkedin: "https://www.linkedin.com/in/arthurpaleypilot",
  github: "https://github.com/phillyairtours/Pilot-Website",
  availability: "Available for Corporate, Part 135 Charter, Contract Operations & Advanced Flight Training",

  flightHours: {
    totalTime: 750,
    pic: 620,
    crossCountry: 260,
    dualGiven: 290,
    instrument: 75,
    night: 85,
    tailwheel: 65,
    complexHighPerf: 140,
    safetyRecord: "100% Incident-Free Safety Record",
    medical: "FAA First Class Medical (Current & Valid)",
  },

  certificates: [
    {
      title: "Commercial Pilot",
      category: "Airplane Single Engine Land (ASEL)",
      authority: "Federal Aviation Administration (FAA)",
      description:
        "FAA-certified for commercial operations, charter transport, precision aircraft handling, and cross-country flight missions.",
      badge: "Commercial ASEL",
      highlight: true,
    },
    {
      title: "Instrument Rating - Airplane",
      category: "IFR Precision Operations",
      authority: "FAA",
      description:
        "Proficient in IMC weather, precision instrument approaches (ILS, RNAV / GPS, LPV, VOR), and complex airspace navigation.",
      badge: "Instrument Rated",
      highlight: true,
    },
    {
      title: "Certified Flight Instructor - Sport (CFIS)",
      category: "Flight Training & Standardization",
      authority: "FAA",
      description:
        "Primary and advanced flight instruction focusing on stick-and-rudder fundamentals, stall/spin awareness, and pilot decision-making.",
      badge: "Flight Instructor",
      highlight: true,
    },
    {
      title: "Advanced Ground Instructor (AGI)",
      category: "Aeronautical Education",
      authority: "FAA",
      description:
        "Authorized to deliver comprehensive ground training curricula for Private, Commercial, and specialized aeronautical ratings.",
      badge: "FAA AGI",
    },
    {
      title: "Instrument Ground Instructor (IGI)",
      category: "Instrument Theory",
      authority: "FAA",
      description:
        "Specialized instruction in instrument charts, weather theory, IFR clearance procedures, and advanced avionics systems.",
      badge: "FAA IGI",
    },
  ],

  endorsements: [
    {
      name: "Tailwheel Aircraft Endorsement",
      description: "Mastery of conventional gear, rudder authority, three-point and wheel landings, and demanding crosswind handling.",
    },
    {
      name: "High-Performance Aircraft Endorsement",
      description: "Trained and authorized for aircraft equipped with engines generating greater than 200 horsepower.",
    },
    {
      name: "Complex Aircraft Endorsement",
      description: "Proficient in retractable landing gear, flaps, and controllable-pitch constant-speed propeller management.",
    },
    {
      name: "Modern Glass Avionics & EFB",
      description: "Extensive flight deck experience with Garmin G1000, Garmin G5, autopilot systems, and ForeFlight EFB navigation.",
    },
  ],

  experiences: [
    {
      role: "Operations Manager & Chief Instructor",
      company: "DORANS AVIATION",
      period: "August 2024 – Present",
      location: "Greater Philadelphia Area",
      type: "Operations & Flight Leadership",
      highlights: [
        "Manage daily flight schedules, fleet operations, aircraft airworthiness tracking, and strict regulatory compliance.",
        "Lead standardized flight instructor training, safety evaluations, and ongoing pilot mentorship programs.",
        "Serve as head instructor and operations trainer, standardizing operational procedures and emergency readiness.",
      ],
    },
    {
      role: "Founder & Chief Flight Instructor",
      company: "PAFOS FLY Flight School",
      period: "2019 – Present",
      location: "Philadelphia, PA",
      type: "Aviation Academy Leadership",
      highlights: [
        "Founded and direct operations for a full-service flight training academy dedicated to safety, precision, and student mastery.",
        "Provide foundational, instrument, and advanced transition instruction tailored to each student's career or personal aviation goals.",
        "Maintain an impeccable safety record through strict standard operating procedures (SOPs) and risk mitigation culture.",
      ],
    },
  ],

  projects: [
    {
      title: "PAFOS FLY Flight Training Academy & Safety Syllabus",
      subtitle: "Standardized Flight School & Mentorship Program",
      category: "Aviation Education",
      description:
        "Architected and deployed a standardized flight training syllabus from the ground up for PAFOS FLY. Focuses on deep aeronautical decision-making, stick-and-rudder confidence, and structured student progression with a 100% incident-free safety record.",
      achievements: [
        "Structured comprehensive initial and advanced flight training modules",
        "Established strict pre-flight risk assessment and weather minimum protocols",
        "Mentored aspiring pilots from zero hours through solo flights and FAA practical exams",
      ],
      link: "https://www.pafosfly.com",
      linkText: "Visit PAFOS FLY",
    },
    {
      title: "Fleet Operations Management & Dispatch Standardization",
      subtitle: "Operational Discipline at Dorans Aviation",
      category: "Flight Operations",
      description:
        "Developed and executed operational workflows at Dorans Aviation covering fleet dispatch scheduling, maintenance coordination, instructor standardization checks, and real-time safety monitoring across daily flight activities.",
      achievements: [
        "Standardized instructor check rides and student progress tracking metrics",
        "Enhanced aircraft dispatch reliability and maintenance tracking workflows",
        "Conducted recurrent safety seminars on crosswind handling and Single-Pilot Resource Management",
      ],
    },
    {
      title: "Stick-and-Rudder & Tailwheel Precision Training Curriculum",
      subtitle: "Advanced Aircraft Handling & Upset Prevention",
      category: "Specialized Training",
      description:
        "Curated a specialized training syllabus emphasizing rudder coordination, high crosswind handling, energy management, and tailwheel aircraft mastery to build exceptional manual flying instincts beyond basic automation.",
      achievements: [
        "Authored step-by-step crosswind landing and three-point touchdown standardization guide",
        "Trained pilots to transition seamlessly into complex, high-performance, and conventional gear aircraft",
      ],
    },
  ],

  skills: [
    "Safety-Driven Stick-and-Rudder Handling",
    "Aeronautical Decision Making (ADM)",
    "Single-Pilot Resource Management (SRM)",
    "Risk Mitigation & Weather Analysis",
    "Flight Standardization & Mentoring",
    "Standard Operating Procedures (SOPs)",
    "Crosswind & Adverse Weather Operations",
    "Tailwheel & Conventional Gear Mastery",
    "Garmin G1000 & Glass Avionics",
    "Fleet Operations & Airworthiness Tracking",
  ],

  languages: [
    { name: "English", level: "Full Professional Proficiency" },
    { name: "Russian", level: "Full Professional Fluency" },
    { name: "Ukrainian", level: "Full Professional Fluency" },
  ],

  fleet: [
    { model: "Cessna 172 Skyhawk (Classic & G1000)", role: "Primary, IFR, Cross-Country Operations" },
    { model: "Cessna 182 Skylane", role: "High-Performance & Cross-Country Flying" },
    { model: "Piper PA-28 Cherokee / Archer / Arrow", role: "Complex Transition & Flight Instruction" },
    { model: "Tailwheel / Conventional Gear Platforms", role: "Stick & Rudder Precision & Upset Training" },
    { model: "Multi-Engine Trainer Platforms", role: "Multi-Engine Procedures & Asymmetric Thrust" },
  ],
};
