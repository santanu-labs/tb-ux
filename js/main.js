/* ==========================================================================
   Trvello — Main JavaScript (Interactions)
   ========================================================================== */

// ---- Mobile Menu Toggle ----
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', !menu.classList.contains('hidden'));
  });
}

// ---- Sidebar Toggle (Admin) ----
function initSidebar() {
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (!sidebar) return;

  // Mobile toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay?.classList.toggle('hidden');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.add('hidden');
    });
  }

  // Desktop collapse
  initSidebarCollapse(sidebar);

  // Sidebar theme (light/dark)
  initSidebarTheme(sidebar);
}

function initSidebarCollapse(sidebar) {
  if (!sidebar) return;
  const saved = localStorage.getItem('trvello-sidebar-collapsed');
  if (saved === 'true') sidebar.classList.add('collapsed');

  const btn = document.getElementById('sidebar-collapse-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    const isCollapsed = sidebar.classList.contains('collapsed');
    localStorage.setItem('trvello-sidebar-collapsed', isCollapsed);
  });
}

function initSidebarTheme(sidebar) {
  if (!sidebar) return;
  const saved = localStorage.getItem('trvello-sidebar-theme');
  if (saved === 'light') sidebar.classList.add('sidebar-light');

  const btn = document.getElementById('sidebar-theme-btn');
  if (!btn) return;

  function updateLabel() {
    const isLight = sidebar.classList.contains('sidebar-light');
    btn.innerHTML = isLight
      ? '<i data-lucide="moon" style="width:14px;height:14px;"></i> Dark Sidebar'
      : '<i data-lucide="sun" style="width:14px;height:14px;"></i> Light Sidebar';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
  updateLabel();

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-light');
    const isLight = sidebar.classList.contains('sidebar-light');
    localStorage.setItem('trvello-sidebar-theme', isLight ? 'light' : 'dark');
    updateLabel();
  });
}

// ---- Dropdown Menus ----
function initDropdowns() {
  document.querySelectorAll('[data-dropdown-trigger]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = trigger.nextElementSibling;
      if (!menu) return;
      // Close all other open dropdowns
      document.querySelectorAll('.dropdown-menu.open').forEach(m => {
        if (m !== menu) m.classList.remove('open');
      });
      menu.classList.toggle('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
  });
}

// ---- Toggle Switches ----
function initToggles() {
  document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
    });
  });
}

// ---- File Upload Drag & Drop ----
function initFileUpload() {
  document.querySelectorAll('.file-upload').forEach(zone => {
    ['dragenter', 'dragover'].forEach(evt => {
      zone.addEventListener(evt, (e) => { e.preventDefault(); zone.classList.add('dragover'); });
    });
    ['dragleave', 'drop'].forEach(evt => {
      zone.addEventListener(evt, (e) => { e.preventDefault(); zone.classList.remove('dragover'); });
    });
    zone.addEventListener('drop', () => {
      showToast('File received!', 'success');
    });
    zone.addEventListener('click', () => {
      const input = zone.querySelector('input[type="file"]');
      if (input) input.click();
    });
  });
}

// ---- Tabs ----
function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(tabGroup => {
    const triggers = tabGroup.querySelectorAll('.tab-trigger[data-tab]');
    if (!triggers.length) return;
    // Search for panels in the closest shared parent (admin-content or body)
    const scope = tabGroup.closest('.admin-content') || tabGroup.parentElement || document;
    const panels = scope.querySelectorAll('[data-tab-panel]');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const target = trigger.getAttribute('data-tab');

        triggers.forEach(t => t.classList.remove('active'));
        trigger.classList.add('active');

        panels.forEach(p => {
          const match = p.getAttribute('data-tab-panel') === target;
          if (match) {
            p.style.display = '';
            p.classList.remove('hidden');
          } else {
            p.style.display = 'none';
            p.classList.add('hidden');
          }
        });
      });
    });
  });
}

// ---- Dialog / Modal ----
function openDialog(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeDialog(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function initDialogs() {
  // Close on overlay click
  document.querySelectorAll('.dialog-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.dialog-overlay.open').forEach(overlay => {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });
}

// ---- Date Picker Helpers ----
function setMinDate(inputId) {
  const input = document.getElementById(inputId);
  if (input) {
    const today = new Date().toISOString().split('T')[0];
    input.setAttribute('min', today);
  }
}

// ---- Stepper (Booking flow) ----
function initStepper() {
  const steps = document.querySelectorAll('[data-step]');
  const panels = document.querySelectorAll('[data-step-panel]');
  if (!steps.length) return;

  window.goToStep = function (stepNum) {
    steps.forEach(s => {
      const num = parseInt(s.getAttribute('data-step'));
      s.classList.toggle('active', num === stepNum);
      s.classList.toggle('completed', num < stepNum);
    });
    panels.forEach(p => {
      p.classList.toggle('hidden', parseInt(p.getAttribute('data-step-panel')) !== stepNum);
    });
  };
}

// ---- Traveller Counter (+ / -) ----
function initCounters() {
  document.querySelectorAll('[data-counter]').forEach(counter => {
    const input = counter.querySelector('input');
    const decBtn = counter.querySelector('[data-decrement]');
    const incBtn = counter.querySelector('[data-increment]');
    const min = parseInt(input.min) || 0;
    const max = parseInt(input.max) || 99;

    decBtn?.addEventListener('click', () => {
      const val = parseInt(input.value) || 0;
      if (val > min) input.value = val - 1;
    });
    incBtn?.addEventListener('click', () => {
      const val = parseInt(input.value) || 0;
      if (val < max) input.value = val + 1;
    });
  });
}

// ---- Accordion ----
function initAccordions() {
  document.querySelectorAll('[data-accordion-trigger]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const isOpen = !content.classList.contains('hidden');

      // Close all siblings if single mode
      const parent = trigger.closest('[data-accordion]');
      if (parent && !parent.hasAttribute('data-accordion-multi')) {
        parent.querySelectorAll('[data-accordion-trigger] + *').forEach(c => c.classList.add('hidden'));
        parent.querySelectorAll('[data-accordion-trigger]').forEach(t => t.setAttribute('aria-expanded', 'false'));
      }

      content.classList.toggle('hidden', isOpen);
      trigger.setAttribute('aria-expanded', !isOpen);
    });
  });
}

// ---- Smooth Scroll to Section ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ---- Image Gallery (simple lightbox) ----
function initGallery() {
  document.querySelectorAll('[data-gallery-thumb]').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.getAttribute('data-full') || thumb.src;
      const viewer = document.getElementById('gallery-viewer');
      const img = viewer?.querySelector('img');
      if (viewer && img) {
        img.src = src;
        openDialog('gallery-viewer');
      }
    });
  });
}

// ---- Toast Notification ----
function showToast(message, type = 'default', duration = 3000) {
  const container = document.getElementById('toast-container') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function createToastContainer() {
  const c = document.createElement('div');
  c.id = 'toast-container';
  c.style.cssText = 'position:fixed;bottom:1rem;right:1rem;z-index:100;display:flex;flex-direction:column;gap:0.5rem;';
  document.body.appendChild(c);
  return c;
}

// ---- Init Everything ----
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSidebar();
  initTabs();
  initDialogs();
  initDropdowns();
  initToggles();
  initFileUpload();
  initStepper();
  initCounters();
  initAccordions();
  initSmoothScroll();
  initGallery();
});
