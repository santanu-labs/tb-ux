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
    // Search for panels in the closest shared parent (admin-content, emp-content, or body)
    const scope = tabGroup.closest('.admin-content') || tabGroup.closest('.emp-content') || tabGroup.parentElement || document;
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

// ---- Holiday Planner Toggle (Employee Dashboard) ----
function toggleHoliday(cardEl) {
  const row = cardEl.closest('.holiday-row');
  if (!row) return;
  row.classList.toggle('collapsed');
}

// ---- Date Range Extend / Shrink (Employee Dashboard) ----
var _dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function initDateExtendButtons() {
  document.querySelectorAll('.date-extend-btn button').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var group = btn.closest('.date-extend-btn');
      var container = group.closest('.day-tiles');
      var groups = container.querySelectorAll('.date-extend-btn');
      var isLeft = (group === groups[0]);
      var buttons = Array.from(group.querySelectorAll('button'));
      var isPlus = (buttons.indexOf(btn) === 0);

      if (isLeft && isPlus)       addDayToRange(container, 'before');
      else if (isLeft && !isPlus) removeDayFromRange(container, 'before');
      else if (!isLeft && isPlus) addDayToRange(container, 'after');
      else                        removeDayFromRange(container, 'after');
    });
  });
}

function _getMonthYear(container) {
  var cal = container.closest('.holiday-details').querySelector('.month-calendar');
  return { m: parseInt(cal.dataset.month), y: parseInt(cal.dataset.year) };
}

function addDayToRange(container, side) {
  var my = _getMonthYear(container);
  var tiles = container.querySelectorAll('.day-tile');
  if (!tiles.length) return;

  var refTile, curDay, newMonth, newYear, newDay;
  if (side === 'before') {
    refTile = tiles[0];
    curDay = parseInt(refTile.querySelector('.day-tile-num').textContent);
    newDay = curDay - 1;
    newMonth = my.m;
    newYear = my.y;
    // Cross into previous month
    if (newDay < 1) {
      newMonth = my.m - 1;
      newYear = my.y;
      if (newMonth < 1) { newMonth = 12; newYear = my.y - 1; }
      newDay = new Date(newYear, newMonth, 0).getDate();
    }
  } else {
    refTile = tiles[tiles.length - 1];
    curDay = parseInt(refTile.querySelector('.day-tile-num').textContent);
    var totalInMonth = new Date(my.y, my.m, 0).getDate();
    newDay = curDay + 1;
    newMonth = my.m;
    newYear = my.y;
    // Cross into next month
    if (newDay > totalInMonth) {
      newMonth = my.m + 1;
      newYear = my.y;
      if (newMonth > 12) { newMonth = 1; newYear = my.y + 1; }
      newDay = 1;
    }
  }

  var _monthShort = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var date = new Date(newYear, newMonth - 1, newDay);
  var dow = date.getDay();
  var isWknd = (dow === 0 || dow === 6);
  var type = isWknd ? 'weekend' : 'leave';

  var el = document.createElement('div');
  el.className = 'day-tile day-tile-' + type;
  // Show month label if crossing month boundary
  var crossMonth = (newMonth !== my.m);
  var numLabel = crossMonth ? _monthShort[newMonth] + ' ' + newDay : String(newDay);
  el.innerHTML = '<span class="day-tile-label">' + _dayNames[dow] + '</span><span class="day-tile-num">' + numLabel + '</span>';
  if (crossMonth) el.dataset.crossMonth = newMonth + '-' + newYear;

  if (side === 'before') {
    container.insertBefore(el, refTile);
  } else {
    container.insertBefore(el, container.querySelectorAll('.date-extend-btn')[1]);
  }

  _syncAfterChange(container, newDay, type, 'add');
  showToast(_dayNames[dow] + ' ' + numLabel + ' added', 'success');
}

function removeDayFromRange(container, side) {
  var tiles = container.querySelectorAll('.day-tile');
  if (tiles.length <= 1) { showToast('Must keep at least 1 day', 'default'); return; }

  var tile = (side === 'before') ? tiles[0] : tiles[tiles.length - 1];

  if (tile.classList.contains('day-tile-holiday')) {
    showToast('Cannot remove a public holiday', 'default');
    return;
  }

  var num = parseInt(tile.querySelector('.day-tile-num').textContent);
  var label = tile.querySelector('.day-tile-label').textContent;
  tile.remove();

  _syncAfterChange(container, num, null, 'remove');
  showToast(label + ' ' + num + ' removed', 'default');
}

function _syncAfterChange(container, dayNum, type, action) {
  // 1) Update header date range text
  var tiles = container.querySelectorAll('.day-tile');
  if (tiles.length) {
    var fL = tiles[0].querySelector('.day-tile-label').textContent;
    var fN = tiles[0].querySelector('.day-tile-num').textContent;
    var lL = tiles[tiles.length-1].querySelector('.day-tile-label').textContent;
    var lN = tiles[tiles.length-1].querySelector('.day-tile-num').textContent;
    var row = container.closest('.holiday-row');
    var hd = row && row.querySelector('.holiday-dates');
    if (hd) hd.textContent = fL + ' ' + fN + ' \u2014 ' + lL + ' ' + lN;
  }

  // 2) Update month-calendar data-days & re-render if open
  var cal = container.closest('.holiday-details').querySelector('.month-calendar');
  if (cal) {
    var days = JSON.parse(cal.dataset.days || '{}');
    if (action === 'add') days[String(dayNum)] = type;
    else delete days[String(dayNum)];
    cal.dataset.days = JSON.stringify(days);
    if (cal.classList.contains('active')) generateMonthCalendar(cal);
  }
}

// ---- Calendar Month View Toggle ----
function toggleCalendarView(btn) {
  var details = btn.closest('.holiday-details');
  if (!details) return;
  var dayTiles = details.querySelector('.day-tiles');
  var calContainer = details.querySelector('.month-calendar');
  if (!calContainer) return;
  var isActive = calContainer.classList.contains('active');
  if (isActive) {
    calContainer.classList.remove('active');
    dayTiles.style.display = '';
    btn.innerHTML = '<i data-lucide="calendar-days" class="w-3 h-3"></i> Month View';
  } else {
    if (!calContainer.innerHTML.trim()) generateMonthCalendar(calContainer);
    calContainer.classList.add('active');
    dayTiles.style.display = 'none';
    btn.innerHTML = '<i data-lucide="list" class="w-3 h-3"></i> Compact';
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function generateMonthCalendar(el) {
  var m = parseInt(el.dataset.month);
  var y = parseInt(el.dataset.year);
  var sel = JSON.parse(el.dataset.days || '{}');
  var names = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var first = new Date(y, m - 1, 1).getDay();
  var total = new Date(y, m, 0).getDate();
  var h = '<div class="flex items-center justify-between mb-1"><span class="text-xs font-bold">' + names[m-1] + ' ' + y + '</span></div><div class="month-cal-grid">';
  days.forEach(function(d){ h += '<div class="month-cal-header">' + d + '</div>'; });
  for (var i = 0; i < first; i++) h += '<div class="month-cal-day empty"></div>';
  for (var d = 1; d <= total; d++) {
    var c = 'month-cal-day';
    var k = String(d);
    if (sel[k]) {
      var t = sel[k];
      if (t === 'holiday') c += ' cal-holiday cal-selected';
      else if (t === 'leave') c += ' cal-leave cal-selected';
      else if (t === 'weekend') c += ' cal-weekend cal-selected';
    } else {
      var dow = new Date(y, m - 1, d).getDay();
      if (dow === 0 || dow === 6) c += ' cal-weekend';
    }
    h += '<div class="' + c + '">' + d + '</div>';
  }
  h += '</div>';
  el.innerHTML = h;
}

// ---- Package Show More / Less ----
function initPkgShowMore() {
  document.querySelectorAll('.pkg-show-more').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var container = btn.closest('.holiday-packages');
      if (!container) return;
      var isExpanded = container.classList.contains('show-all');
      container.classList.toggle('show-all');
      var total = container.querySelectorAll('.pkg-card').length;
      if (isExpanded) {
        btn.innerHTML = '<i data-lucide="chevron-down" class="w-3.5 h-3.5"></i> Show ' + (total - 4) + ' more packages';
      } else {
        btn.innerHTML = '<i data-lucide="chevron-up" class="w-3.5 h-3.5"></i> Show less';
      }
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  });
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
  initDateExtendButtons();
  initPkgShowMore();
});
