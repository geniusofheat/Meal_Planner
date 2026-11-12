// ================================================================
//  meal_planner_calendar.js — Meal Planner page
//  Month calendar (prev/next in a toolbar row), planned days shown as
//  highlighted squares, and a 7-day list for the chosen week below.
//
//  Storage (localStorage):
//    mealplanner_plan            { 'YYYY-MM-DD': [ recipe, ... ] }
//    mealplanner_pending_recipe  recipe sent from the Cookbook's Plan
//                                or Save button (mode: 'plan' | 'save')
// ================================================================

const PLAN_KEY    = 'mealplanner_plan';
const PENDING_KEY = 'mealplanner_pending_recipe';

const MONTHS = ['January','February','March','April','May','June','July',
                'August','September','October','November','December'];
const DAYS   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let plan        = {};
let pending     = null;
let view_year   = 0;
let view_month  = 0;      // 0-indexed
let week_start  = null;   // Date (a Sunday) for the week list
let selected_iso = null;
let open_days   = new Set();
let open_meals  = new Set();

// ── helpers ─────────────────────────────────────────────────────
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function iso_of(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function date_of(iso) {
  const p = iso.split('-').map(Number);
  return new Date(p[0], p[1] - 1, p[2]);
}
function sunday_of(d) {
  const s = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  s.setDate(s.getDate() - s.getDay());
  return s;
}
function short_date(d) {
  return MONTHS[d.getMonth()].slice(0, 3) + ' ' + d.getDate();
}
function load_json(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
  catch (e) { return fallback; }
}
function save_plan() {
  try { localStorage.setItem(PLAN_KEY, JSON.stringify(plan)); } catch (e) { console.error(e); }
}

// ── init ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  view_year  = now.getFullYear();
  view_month = now.getMonth();
  week_start = sunday_of(now);

  plan    = load_json(PLAN_KEY, {});
  pending = load_json(PENDING_KEY, null);
  if (pending && !pending.name) pending = null;

  const dd = document.getElementById('dateDisplay');
  if (dd) dd.textContent = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  document.getElementById('cal-prev').addEventListener('click', () => change_month(-1));
  document.getElementById('cal-next').addEventListener('click', () => change_month(1));
  document.getElementById('cal-grid').addEventListener('click', on_grid_click);
  document.getElementById('week-section').addEventListener('click', on_week_click);
  document.getElementById('pending-banner').addEventListener('click', on_banner_click);

  render_all();
});

function change_month(delta) {
  view_month += delta;
  if (view_month < 0)  { view_month = 11; view_year--; }
  if (view_month > 11) { view_month = 0;  view_year++; }
  render_all();
}

function render_all() {
  render_banner();
  render_calendar();
  render_week();
}

// ── pending recipe banner ───────────────────────────────────────
function render_banner() {
  const el = document.getElementById('pending-banner');
  if (!pending) { el.style.display = 'none'; el.innerHTML = ''; return; }
  const lead = pending.mode === 'save' ? 'Saved to Favorites. ' : '';
  el.style.display = 'flex';
  el.innerHTML = '<div>' + lead + 'Tap a day to plan <b>' + esc(pending.name) + '</b>.</div>' +
                 '<button class="orange-btn" data-act="cancel-pending">Cancel</button>';
}
function on_banner_click(e) {
  if (e.target.closest('[data-act="cancel-pending"]')) {
    pending = null;
    try { localStorage.removeItem(PENDING_KEY); } catch (err) {}
    render_all();
  }
}

// ── month calendar ──────────────────────────────────────────────
function render_calendar() {
  document.getElementById('cal-month-title').textContent = MONTHS[view_month] + ' ' + view_year;

  const first      = new Date(view_year, view_month, 1).getDay();
  const days_in    = new Date(view_year, view_month + 1, 0).getDate();
  const today_iso  = iso_of(new Date());
  const grid       = document.getElementById('cal-grid');
  grid.className   = 'cal-grid' + (pending ? ' picking' : '');

  let html = '';
  for (let i = 0; i < first; i++) html += '<div class="cal-blank"></div>';
  for (let d = 1; d <= days_in; d++) {
    const iso = view_year + '-' + String(view_month + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
    const planned = plan[iso] && plan[iso].length > 0;
    let cls = 'cal-day';
    if (planned)              cls += ' planned';
    if (iso === today_iso)    cls += ' today';
    if (iso === selected_iso) cls += ' selected';
    html += '<button type="button" class="' + cls + '" data-iso="' + iso + '">' + d + '</button>';
  }
  grid.innerHTML = html;
}

function on_grid_click(e) {
  const btn = e.target.closest('.cal-day');
  if (!btn) return;
  const iso = btn.getAttribute('data-iso');

  if (pending) {
    // A recipe is waiting: put it on the tapped day
    const recipe = Object.assign({}, pending);
    delete recipe.mode;
    if (!plan[iso]) plan[iso] = [];
    plan[iso].push(recipe);
    save_plan();
    pending = null;
    try { localStorage.removeItem(PENDING_KEY); } catch (err) {}
  } else if (!(plan[iso] && plan[iso].length)) {
    return;   // only highlighted days open anything
  }

  selected_iso = iso;
  week_start   = sunday_of(date_of(iso));
  open_days    = new Set([iso]);
  render_all();
}

// ── 7-day list for the chosen week ──────────────────────────────
function render_week() {
  const sec = document.getElementById('week-section');
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(week_start.getFullYear(), week_start.getMonth(), week_start.getDate() + i);
    const iso = iso_of(d);
    if (plan[iso] && plan[iso].length) days.push({ d, iso, meals: plan[iso] });
  }
  if (days.length === 0) { sec.innerHTML = ''; return; }   // nothing planned that week

  const end = new Date(week_start.getFullYear(), week_start.getMonth(), week_start.getDate() + 6);
  let html = '<div class="week-title">Week of ' + short_date(week_start) + ' – ' + short_date(end) + '</div><ol class="week-ol">';

  days.forEach(({ d, iso, meals }) => {
    const is_open = open_days.has(iso);
    html += '<li class="week-day' + (iso === selected_iso ? ' selected' : '') + '">' +
            '<div class="week-day-head" data-act="toggle-day" data-iso="' + iso + '">' +
            '<span>' + DAYS[d.getDay()] + ', ' + short_date(d) + '</span>' +
            '<span class="count">' + meals.length + (meals.length === 1 ? ' meal' : ' meals') + ' ' + (is_open ? '[–]' : '[+]') + '</span></div>';
    if (is_open) {
      html += '<div class="week-meals">';
      meals.forEach((m, idx) => {
        const key = iso + '#' + idx;
        const m_open = open_meals.has(key);
        html += '<div class="meal-row"><div class="meal-head" data-act="toggle-meal" data-key="' + key + '">' +
                '<span>' + esc(m.name) + '</span>' +
                '<button class="orange-btn" data-act="remove-meal" data-iso="' + iso + '" data-idx="' + idx + '">Remove</button></div>';
        if (m_open) html += '<div class="meal-detail">' + meal_detail_html(m) + '</div>';
        html += '</div>';
      });
      html += '</div>';
    }
    html += '</li>';
  });
  html += '</ol>';
  sec.innerHTML = html;
}

function meal_detail_html(m) {
  let h = '';
  if (m.servings) h += '<div>' + esc(m.servings) + '</div>';
  if (Array.isArray(m.ingredients) && m.ingredients.length) {
    h += '<h4>Ingredients :</h4><ul>' + m.ingredients.map(i => '<li>' + esc(i) + '</li>').join('') + '</ul>';
  }
  if (Array.isArray(m.steps) && m.steps.length) {
    h += '<h4>Preparation :</h4><ol>' + m.steps.map(s => '<li>' + esc(s) + '</li>').join('') + '</ol>';
  } else if (m.prep) {
    h += '<h4>Preparation :</h4><div>' + esc(m.prep) + '</div>';
  }
  if (m.notes) h += '<h4>Notes :</h4><div>' + esc(m.notes) + '</div>';
  return h;
}

function on_week_click(e) {
  const rm = e.target.closest('[data-act="remove-meal"]');
  if (rm) {
    e.stopPropagation();
    const iso = rm.getAttribute('data-iso');
    const idx = Number(rm.getAttribute('data-idx'));
    if (plan[iso]) {
      plan[iso].splice(idx, 1);
      if (plan[iso].length === 0) delete plan[iso];
      save_plan();
    }
    open_meals.clear();
    render_all();
    return;
  }
  const meal = e.target.closest('[data-act="toggle-meal"]');
  if (meal) {
    const key = meal.getAttribute('data-key');
    if (open_meals.has(key)) open_meals.delete(key); else open_meals.add(key);
    render_week();
    return;
  }
  const day = e.target.closest('[data-act="toggle-day"]');
  if (day) {
    const iso = day.getAttribute('data-iso');
    if (open_days.has(iso)) open_days.delete(iso); else open_days.add(iso);
    render_week();
  }
}
