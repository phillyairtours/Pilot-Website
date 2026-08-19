# Arthur Paley | Professional Pilot Portfolio & Resume Website

An interactive, modern personal pilot portfolio and career flight resume web application for **Arthur Paley** (Commercial Pilot ASEL, Instrument Rated, CFIS, AGI/IGI).

Live Repository: [https://github.com/phillyairtours/Pilot-Website](https://github.com/phillyairtours/Pilot-Website)

---

## ✈️ Overview

- **Pilot**: Arthur Paley
- **Location**: Philadelphia, Pennsylvania, USA (KPNE / KPHL / KTTN)
- **Total Flight Hours**: 750+ Hours
- **Certificates**: FAA Commercial Pilot ASEL • Instrument Airplane • Certified Flight Instructor (CFIS) • Advanced & Instrument Ground Instructor (AGI / IGI)
- **Endorsements**: High Performance, Complex, Tailwheel
- **Specialization**: Corporate Flight Departments, Part 135 Charter, Aircraft Management & Ferry Operations

---

## 📂 Project Structure

```
Pilot Website/
├── index.html        # Main semantic HTML5 webpage & layout
├── styles.css        # Aviation glassmorphism, responsive styles & print layout
├── pilot-data.js     # Centralized, easy-to-update pilot profile and logbook data
├── app.js            # Dynamic counters, interactive HUD attitude indicator & modals
├── Profile.pdf       # Original pilot credentials reference
└── README.md         # Project documentation
```

---

## 🛠️ How to Update Flight Hours & Profile Info

Open `pilot-data.js` in any text editor and update the numbers or text:
```javascript
flightHours: {
  totalTime: 750,       // Update your total hours here
  pic: 620,             // Update PIC hours here
  crossCountry: 260,    // Update XC hours here
  ...
}
```
Saving `pilot-data.js` automatically updates the counters, charts, certificate cards, and printable resume across the entire website!

---

## 🚀 Local Preview

Simply double-click `index.html` to view in your browser, or run a local server:
```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

---

© 2026 Arthur Paley. All rights reserved.
