/**
 * ===================================================================
 * ARTHUR PALEY - PILOT PORTFOLIO APPLICATION LOGIC
 * Dynamic data binding, counter animations, HUD attitude indicator,
 * resume modal, and live update helper.
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure pilot profile data is available
  const profile = window.PILOT_PROFILE || {};

  initProfileData(profile);
  initCounters(profile.flightHours || {});
  initAttitudeIndicator();
  initResumeModal();
  initMobileMenu();
  initContactForm(profile);
  initLiveUpdateHelper(profile);
});

/**
 * Populate dynamic fields across the website from pilot-data.js
 */
function initProfileData(profile) {
  const p = profile.personal || {};
  const h = profile.flightHours || {};

  // Header & Hero Identity
  setElemText('navPilotName', p.fullName || "Arthur Paley");
  setElemText('heroFullName', p.fullName || "Arthur Paley");
  setElemText('heroHeadline', p.headline || "Commercial Pilot ASEL • Instrument Rated • Chief Flight Instructor");
  setElemText('heroTagline', p.tagline || "");
  setElemText('heroLocation', p.location || "Philadelphia, PA");
  setElemText('heroBadgeHours', `${h.totalTime || 750}+ Total Hours`);

  if (p.homeBaseAirports && p.homeBaseAirports.length > 0) {
    setElemText('heroBases', p.homeBaseAirports.join(' • '));
  }

  // HUD Quick Metrics
  setElemText('hudTotalHours', `${h.totalTime || 750}+`);
  setElemText('hudPicHours', `${h.pic || 620}+`);

  // Direct Contact Card Values
  setElemText('contactEmailVal', p.email || "arthur@pafosfly.com");
  setElemText('contactPhoneVal', p.phone || "(917) 385-9680");
  const cardEmail = document.getElementById('cardEmail');
  if (cardEmail && p.email) cardEmail.href = `mailto:${p.email}`;
  const cardPhone = document.getElementById('cardPhone');
  if (cardPhone && p.phoneClean) cardPhone.href = `tel:${p.phoneClean}`;

  // Medical & Compliance
  if (h.medicalClass) {
    setElemText('medStatus', h.medicalClass);
  }

  // Populate FAA Certificates
  renderCertificates(profile.certificates || []);

  // Populate Endorsements
  renderEndorsements(profile.endorsements || []);

  // Populate Corporate Differentiators
  renderCorporateDifferentiators(profile.careerFocus || {});

  // Populate Professional Experience Timeline
  renderExperienceTimeline(profile.experience || []);

  // Populate Fleet Proficiency
  renderFleet(profile.fleetExperience || []);

  // Populate Competencies & Languages
  renderCompetencies(profile.competencies || []);
  renderLanguages(profile.languages || []);

  // Populate Resume Modal View
  updateResumeModalContent(profile);
}

/**
 * Render FAA Certificates Cards
 */
function renderCertificates(certs) {
  const container = document.getElementById('certificatesContainer');
  if (!container) return;

  container.innerHTML = certs.map(cert => `
    <div class="cert-card ${cert.highlight ? 'featured-cert' : ''}">
      <div>
        <div class="cert-header">
          <span class="cert-badge">${cert.badge || 'FAA CERTIFIED'}</span>
          <span class="cert-authority">${cert.authority || 'FAA'}</span>
        </div>
        <h3 class="cert-title">${cert.title}</h3>
        <div class="cert-category">${cert.category}</div>
        <p class="cert-description">${cert.description}</p>
      </div>
      <div class="cert-footer">
        <span class="cert-status-ok">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Current & Active Privileges
        </span>
        <span>Commercial Grade</span>
      </div>
    </div>
  `).join('');
}

/**
 * Render Endorsements
 */
function renderEndorsements(endorsements) {
  const container = document.getElementById('endorsementsContainer');
  if (!container) return;

  container.innerHTML = endorsements.map(item => `
    <div class="endorsement-item">
      <div class="endorsement-icon-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 14 14"></polyline>
        </svg>
      </div>
      <div>
        <div class="endorsement-name">${item.name}</div>
        <div class="endorsement-desc">${item.description}</div>
      </div>
    </div>
  `).join('');
}

/**
 * Render Corporate Differentiators
 */
function renderCorporateDifferentiators(careerFocus) {
  const container = document.getElementById('differentiatorsContainer');
  if (!container || !careerFocus.keyDifferentiators) return;

  container.innerHTML = careerFocus.keyDifferentiators.map(diff => `
    <div class="diff-card">
      <div class="diff-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </div>
      <h3 class="diff-title">${diff.title}</h3>
      <p class="diff-desc">${diff.description}</p>
    </div>
  `).join('');
}

/**
 * Render Experience Timeline
 */
function renderExperienceTimeline(experiences) {
  const container = document.getElementById('experienceTimeline');
  if (!container) return;

  container.innerHTML = experiences.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-role">${exp.role}</h3>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <div class="timeline-company">${exp.company} • ${exp.location}</div>
        <ul class="timeline-bullets">
          ${exp.highlights.map(bullet => `<li class="timeline-bullet">${bullet}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/**
 * Render Fleet Experience List
 */
function renderFleet(fleet) {
  const container = document.getElementById('fleetListContainer');
  if (!container) return;

  container.innerHTML = fleet.map(f => `
    <div class="fleet-item">
      <span class="fleet-name">${f.model}</span>
      <span class="fleet-role">${f.role}</span>
    </div>
  `).join('');
}

/**
 * Render Competencies & Languages
 */
function renderCompetencies(comps) {
  const container = document.getElementById('competenciesContainer');
  if (!container) return;

  container.innerHTML = comps.map(c => `<span class="skill-pill">${c}</span>`).join('');
}

function renderLanguages(langs) {
  const container = document.getElementById('languagesContainer');
  if (!container) return;

  container.innerHTML = langs.map(l => `
    <div class="lang-item">
      <div class="lang-name">${l.name}</div>
      <div class="lang-level">${l.level}</div>
    </div>
  `).join('');
}

/**
 * Smooth Flight Hours Animated Counters
 */
function initCounters(hours) {
  const counters = [
    { elemId: 'cntTotalTime', target: hours.totalTime || 750 },
    { elemId: 'cntPic', target: hours.pic || 620 },
    { elemId: 'cntXc', target: hours.crossCountry || 260 },
    { elemId: 'cntDualGiven', target: hours.dualGiven || 290 },
    { elemId: 'cntInstrument', target: hours.instrument || 75 },
    { elemId: 'cntNight', target: hours.nightTime || 85 }
  ];

  let hasAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(c => animateValue(c.elemId, 0, c.target, 1600));
      }
    });
  }, { threshold: 0.2 });

  const section = document.getElementById('flight-hours');
  if (section) observer.observe(section);
}

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  if (!obj) return;
  
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // Ease-out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.floor(easeProgress * (end - start) + start);
    obj.innerHTML = currentVal.toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.innerHTML = end.toLocaleString();
    }
  };
  window.requestAnimationFrame(step);
}

/**
 * Interactive Artificial Horizon (Attitude Indicator)
 * Responds dynamically to mouse movement across the hero section
 */
function initAttitudeIndicator() {
  const horizonPlane = document.getElementById('horizonPlane');
  const hudContainer = document.getElementById('cockpitHudCard');
  if (!horizonPlane || !hudContainer) return;

  let currentPitch = 0;
  let currentRoll = 0;
  let targetPitch = 0;
  let targetRoll = 0;

  // Track mouse over card or hero area
  hudContainer.addEventListener('mousemove', (e) => {
    const rect = hudContainer.getBoundingClientRect();
    const x = e.clientX - rect.left - (rect.width / 2);
    const y = e.clientY - rect.top - (rect.height / 2);

    targetRoll = (x / (rect.width / 2)) * 18; // Max 18 deg bank
    targetPitch = -(y / (rect.height / 2)) * 14; // Max 14 deg pitch
  });

  hudContainer.addEventListener('mouseleave', () => {
    targetRoll = 0;
    targetPitch = 0;
  });

  // Smooth animation loop
  function updateHorizon() {
    currentPitch += (targetPitch - currentPitch) * 0.08;
    currentRoll += (targetRoll - currentRoll) * 0.08;

    horizonPlane.style.transform = `translateY(${currentPitch * 3}px) rotate(${currentRoll}deg)`;
    requestAnimationFrame(updateHorizon);
  }
  updateHorizon();
}

/**
 * Interactive Resume One-Sheet Modal
 */
function initResumeModal() {
  const modal = document.getElementById('resumeModal');
  const btnNav = document.getElementById('btnOpenResumeNav');
  const btnHero = document.getElementById('btnOpenResumeHero');
  const btnClose = document.getElementById('btnCloseResumeModal');

  function openModal() {
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (btnNav) btnNav.addEventListener('click', openModal);
  if (btnHero) btnHero.addEventListener('click', openModal);
  if (btnClose) btnClose.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function updateResumeModalContent(profile) {
  const p = profile.personal || {};
  const h = profile.flightHours || {};

  setElemText('resName', p.fullName || "Arthur Paley");
  setElemText('resHeadline', p.headline || "Commercial Pilot ASEL • Instrument Rated • Flight Instructor");
  setElemText('resEmail', p.email || "arthur@pafosfly.com");
  setElemText('resPhone', p.phone || "(917) 385-9680");
  setElemText('resLocation', p.location || "Philadelphia, PA");
  setElemText('resWeb', p.websiteDisplay || "www.pafosfly.com");

  setElemText('resTT', `${h.totalTime || 750}+`);
  setElemText('resPIC', `${h.pic || 620}+`);
  setElemText('resXC', `${h.crossCountry || 260}+`);
  setElemText('resDual', `${h.dualGiven || 290}+`);
  setElemText('resInst', `${h.instrument || 75}+`);
  setElemText('resNight', `${h.nightTime || 85}+`);
}

/**
 * Mobile Navigation Menu Toggle
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
    });
  });
}

/**
 * Contact Dispatch Terminal Form
 */
function initContactForm(profile) {
  const form = document.getElementById('flightInquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inqName').value.trim();
    const email = document.getElementById('inqEmail').value.trim();
    const type = document.getElementById('inqType').value;
    const airport = document.getElementById('inqAirport').value.trim();
    const message = document.getElementById('inqMessage').value.trim();

    const subject = encodeURIComponent(`[Flight Inquiry] ${type} - from ${name}`);
    const body = encodeURIComponent(
      `Hello Arthur,\n\n` +
      `Inquiry Type: ${type}\n` +
      `Target Airport / Base: ${airport || 'N/A'}\n` +
      `Contact Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message / Mission Details:\n${message}\n\n` +
      `Sent via arthurpaleypilot portfolio website`
    );

    const recipient = (profile.personal && profile.personal.email) || 'arthur@pafosfly.com';
    
    // Open standard mail client pre-filled
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    alert(`Thank you, ${name}! Your email client will now open with your pre-formatted flight inquiry addressed to Arthur Paley.`);
    form.reset();
  });
}

/**
 * LIVE UPDATE HELPER (FOR ARTHUR)
 * Gives Arthur an in-browser helper window where he can update his flight hours
 * and test new numbers live on screen, with a one-click copy helper for pilot-data.js!
 */
function initLiveUpdateHelper(profile) {
  const btn = document.getElementById('btnEditorHelper');
  if (!btn) return;

  // Create helper modal dynamically
  const helperModal = document.createElement('div');
  helperModal.className = 'modal-backdrop';
  helperModal.id = 'editorHelperModal';
  helperModal.innerHTML = `
    <div class="resume-modal-dialog" style="max-width: 600px; background: #0f172a; color: #ffffff; border: 1px solid var(--border-glow);">
      <div class="modal-header-bar" style="background: #162038; border-bottom: 1px solid var(--border-glow);">
        <div class="modal-title" style="display: flex; align-items: center; gap: 8px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-amber)" stroke-width="2">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
          Quick Hours & Profile Updater
        </div>
        <button class="modal-close-btn" id="btnCloseEditorHelper">✕</button>
      </div>

      <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
        <p style="font-size: 0.9rem; color: var(--text-secondary);">
          As your flight hours grow, update your numbers below to test them live on your website:
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--accent-amber);">TOTAL TIME (HRS)</label>
            <input type="number" id="editTT" value="${(profile.flightHours && profile.flightHours.totalTime) || 750}" 
                   style="width: 100%; background: #0a0f1d; color: #fff; border: 1px solid var(--border-subtle); padding: 10px; border-radius: 8px; font-weight: 700;">
          </div>
          <div>
            <label style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--accent-cyan);">PIC (HRS)</label>
            <input type="number" id="editPIC" value="${(profile.flightHours && profile.flightHours.pic) || 620}" 
                   style="width: 100%; background: #0a0f1d; color: #fff; border: 1px solid var(--border-subtle); padding: 10px; border-radius: 8px; font-weight: 700;">
          </div>
          <div>
            <label style="font-size: 0.8rem; font-family: var(--font-mono); color: #94a3b8;">CROSS COUNTRY (XC)</label>
            <input type="number" id="editXC" value="${(profile.flightHours && profile.flightHours.crossCountry) || 260}" 
                   style="width: 100%; background: #0a0f1d; color: #fff; border: 1px solid var(--border-subtle); padding: 10px; border-radius: 8px;">
          </div>
          <div>
            <label style="font-size: 0.8rem; font-family: var(--font-mono); color: #94a3b8;">DUAL GIVEN (HRS)</label>
            <input type="number" id="editDual" value="${(profile.flightHours && profile.flightHours.dualGiven) || 290}" 
                   style="width: 100%; background: #0a0f1d; color: #fff; border: 1px solid var(--border-subtle); padding: 10px; border-radius: 8px;">
          </div>
        </div>

        <div style="margin-top: 8px; display: flex; gap: 12px;">
          <button class="btn btn-primary" id="btnApplyLiveEdits" style="flex: 1;">
            Apply & View Live on Page
          </button>
        </div>

        <div style="background: rgba(0, 240, 255, 0.05); border: 1px dashed rgba(0, 240, 255, 0.3); padding: 12px; border-radius: 8px; font-size: 0.82rem; color: #cbd5e1;">
          💡 <strong>How to save permanently:</strong> Open the file called <code>pilot-data.js</code> in this folder, change the number next to <code>totalTime</code>, and save it!
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(helperModal);

  btn.addEventListener('click', () => {
    helperModal.classList.add('open');
  });

  const btnClose = document.getElementById('btnCloseEditorHelper');
  if (btnClose) {
    btnClose.addEventListener('click', () => helperModal.classList.remove('open'));
  }

  helperModal.addEventListener('click', (e) => {
    if (e.target === helperModal) helperModal.classList.remove('open');
  });

  const btnApply = document.getElementById('btnApplyLiveEdits');
  if (btnApply) {
    btnApply.addEventListener('click', () => {
      const newTT = parseInt(document.getElementById('editTT').value) || 750;
      const newPIC = parseInt(document.getElementById('editPIC').value) || 620;
      const newXC = parseInt(document.getElementById('editXC').value) || 260;
      const newDual = parseInt(document.getElementById('editDual').value) || 290;

      // Update in-memory profile
      if (!profile.flightHours) profile.flightHours = {};
      profile.flightHours.totalTime = newTT;
      profile.flightHours.pic = newPIC;
      profile.flightHours.crossCountry = newXC;
      profile.flightHours.dualGiven = newDual;

      // Update displays
      setElemText('heroBadgeHours', `${newTT}+ Total Hours`);
      setElemText('hudTotalHours', `${newTT}+`);
      setElemText('hudPicHours', `${newPIC}+`);
      setElemText('cntTotalTime', newTT);
      setElemText('cntPic', newPIC);
      setElemText('cntXc', newXC);
      setElemText('cntDualGiven', newDual);

      updateResumeModalContent(profile);
      helperModal.classList.remove('open');
      alert(`Updated live! Total Hours set to ${newTT} hrs, PIC set to ${newPIC} hrs.`);
    });
  }
}

function setElemText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
