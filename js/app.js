/**
 * Travelink - Main Application Script
 * Brand: Travelink by Akshay
 * Tagline: "Where Journeys Connect"
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize UI components
  initHeader();
  initMobileMenu();
  renderTravelTips('All');
  renderQatarEvents('All');
  renderActivities();
  initContactForm();
  initNewsletterForm();
  initModals();
});

// ==========================================================================
// HEADER & NAVIGATION
// ==========================================================================
function initHeader() {
  const header = document.getElementById('mainHeader');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // ScrollSpy active link detection
    let currentSection = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = toggleBtn.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    // Close menu when clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (toggleBtn.querySelector('i')) {
          toggleBtn.querySelector('i').className = 'fa-solid fa-bars';
        }
      });
    });
  }
}

// ==========================================================================
// RENDER TRAVEL TIPS (FILTERABLE)
// ==========================================================================
function renderTravelTips(categoryFilter = 'All') {
  const container = document.getElementById('tipsGrid');
  if (!container) return;

  const filtered = categoryFilter === 'All'
    ? TRAVELINK_DATA.travelTips
    : TRAVELINK_DATA.travelTips.filter(item => item.category === categoryFilter);

  container.innerHTML = filtered.map(tip => `
    <article class="tip-card" data-category="${tip.category}">
      <div class="tip-img-wrap">
        <img src="${tip.image}" alt="${tip.title}" loading="lazy">
        <span class="tip-category-badge">${tip.category}</span>
      </div>
      <div class="tip-body">
        <div class="tip-meta">
          <span><i class="fa-regular fa-clock"></i> ${tip.readTime}</span>
          <span><i class="fa-regular fa-calendar"></i> ${tip.date}</span>
        </div>
        <h3 class="tip-title">${tip.title}</h3>
        <p class="tip-summary">${tip.summary}</p>
        <button class="tip-read-more" onclick="openTipModal('${tip.id}')">
          Read Guide <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </article>
  `).join('');

  initTipsFilterButtons();
}

function initTipsFilterButtons() {
  const buttons = document.querySelectorAll('#tipsFilterTabs .filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.getAttribute('data-filter');
      renderTravelTips(cat);
    });
  });
}

// ==========================================================================
// RENDER QATAR EVENTS (FILTERABLE)
// ==========================================================================
function renderQatarEvents(categoryFilter = 'All') {
  const container = document.getElementById('eventsGrid');
  if (!container) return;

  const filtered = categoryFilter === 'All'
    ? TRAVELINK_DATA.qatarEvents
    : TRAVELINK_DATA.qatarEvents.filter(item => item.category === categoryFilter);

  container.innerHTML = filtered.map(evt => `
    <div class="event-card">
      <div class="event-img-wrap">
        <img src="${evt.image}" alt="${evt.title}" loading="lazy">
        <span class="event-date-badge"><i class="fa-regular fa-calendar-check"></i> ${evt.date}</span>
      </div>
      <div class="event-body">
        <div class="event-location"><i class="fa-solid fa-location-dot"></i> ${evt.location}</div>
        <h3 class="event-title">${evt.title}</h3>
        <p class="event-desc">${evt.description}</p>
        <button class="btn btn-outline" style="width: 100%; padding: 8px 16px; font-size: 0.875rem;" onclick="openEventModal('${evt.id}')">
          View Event Details
        </button>
      </div>
    </div>
  `).join('');

  initEventsFilterButtons();
}

function initEventsFilterButtons() {
  const buttons = document.querySelectorAll('#eventsFilterTabs .filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.getAttribute('data-filter');
      renderQatarEvents(cat);
    });
  });
}

// ==========================================================================
// RENDER ACTIVITIES GALLERY
// ==========================================================================
function renderActivities() {
  const container = document.getElementById('activitiesGrid');
  if (!container) return;

  container.innerHTML = TRAVELINK_DATA.activities.map(act => `
    <div class="gallery-card" onclick="openLightbox('${act.image}', '${act.title}', '${act.description}')">
      <img src="${act.image}" alt="${act.title}" loading="lazy">
      <span class="gallery-zoom-icon"><i class="fa-solid fa-expand"></i></span>
      <div class="gallery-overlay">
        <span class="gallery-cat">${act.category}</span>
        <h3 class="gallery-title">${act.title}</h3>
        <div class="gallery-meta">
          <span><i class="fa-regular fa-clock"></i> ${act.duration}</span>
          <span><i class="fa-solid fa-location-dot"></i> ${act.location}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// MODALS & LIGHTBOX HANDLERS
// ==========================================================================
function initModals() {
  const backdrop = document.getElementById('globalModalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', () => {
      backdrop.classList.remove('active');
    });
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.remove('active');
    });
  }
}

window.openTipModal = function(tipId) {
  const tip = TRAVELINK_DATA.travelTips.find(t => t.id === tipId);
  if (!tip) return;

  const content = `
    <div style="padding: 30px;">
      <span class="section-tag" style="margin-bottom: 12px;">${tip.category}</span>
      <h2 style="font-size: 1.8rem; margin-bottom: 14px;">${tip.title}</h2>
      <div style="font-size: 0.875rem; color: var(--text-light); margin-bottom: 20px;">
        <i class="fa-regular fa-clock"></i> ${tip.readTime} &bull; <i class="fa-regular fa-calendar"></i> ${tip.date}
      </div>
      <img src="${tip.image}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">
      <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-dark);">${tip.fullContent}</p>
      <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.9rem; font-weight: 600; color: var(--text-muted);">Shared by Travelink Creator Akshay</span>
        <button class="btn btn-primary" onclick="document.getElementById('globalModalBackdrop').classList.remove('active')">Got It</button>
      </div>
    </div>
  `;

  document.getElementById('modalDynamicContent').innerHTML = content;
  document.getElementById('globalModalBackdrop').classList.add('active');
};

window.openEventModal = function(eventId) {
  const evt = TRAVELINK_DATA.qatarEvents.find(e => e.id === eventId);
  if (!evt) return;

  const content = `
    <div style="padding: 30px;">
      <span class="section-tag" style="margin-bottom: 12px;">${evt.category}</span>
      <h2 style="font-size: 1.8rem; margin-bottom: 14px;">${evt.title}</h2>
      <div style="display: flex; gap: 20px; font-size: 0.9rem; color: var(--primary-coral); font-weight: 600; margin-bottom: 20px;">
        <span><i class="fa-regular fa-calendar"></i> ${evt.date}</span>
        <span><i class="fa-solid fa-location-dot"></i> ${evt.location}</span>
      </div>
      <img src="${evt.image}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">
      <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-dark);">${evt.description}</p>
      <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.1); display: flex; gap: 12px; justify-content: flex-end;">
        <a href="#contact" class="btn btn-primary" onclick="document.getElementById('globalModalBackdrop').classList.remove('active')">Ask Akshay About This Event</a>
      </div>
    </div>
  `;

  document.getElementById('modalDynamicContent').innerHTML = content;
  document.getElementById('globalModalBackdrop').classList.add('active');
};

window.openLightbox = function(imageSrc, title, description) {
  const content = `
    <div style="padding: 20px; text-align: center;">
      <img src="${imageSrc}" style="width: 100%; max-height: 480px; object-fit: cover; border-radius: 12px; margin-bottom: 16px;">
      <h3 style="font-size: 1.5rem; margin-bottom: 8px;">${title}</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 600px; margin: 0 auto;">${description}</p>
    </div>
  `;

  document.getElementById('modalDynamicContent').innerHTML = content;
  document.getElementById('globalModalBackdrop').classList.add('active');
};

// ==========================================================================
// FORM HANDLERS & TOASTS
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('travelinkContactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      showToast(`Thank you, ${name}! Your message has been sent to Akshay.`);
      form.reset();
    });
  }
}

function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      showToast(`Welcome to Travelink Network! Confirmation sent to ${email}.`);
      form.reset();
    });
  }
}

window.showToast = function(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--primary-gold); font-size: 1.2rem;"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
};
