import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arthur Paley | Commercial Pilot, Flight Instructor & Aviation Leader",
  description:
    "Official portfolio and flight resume for Arthur Paley - Commercial Pilot ASEL, Instrument Rated, CFIS, AGI/IGI with 745+ total flight hours. Dedicated corporate, charter, and flight instruction professional.",
  keywords: [
    "Arthur Paley",
    "Commercial Pilot",
    "Flight Instructor",
    "Philadelphia Pilot",
    "PAFOS FLY",
    "Dorans Aviation",
    "Part 135 Pilot",
    "Corporate Pilot",
    "Tailwheel Pilot",
    "KPNE Pilot",
  ],
  authors: [{ name: "Arthur Paley", url: "https://www.linkedin.com/in/arthurpaleypilot" }],
  openGraph: {
    title: "Arthur Paley | Commercial Pilot & Flight Instructor",
    description:
      "Commercial Pilot ASEL, Instrument Rated, CFIS, AGI/IGI with 745+ total flight hours.",
    url: "https://www.pafosfly.com",
    siteName: "Arthur Paley Pilot Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-aerospace-950 text-slate-100 min-h-screen relative overflow-x-hidden antialiased`}
      >
        <div className="fixed inset-0 bg-aerospace-grid pointer-events-none z-0" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
