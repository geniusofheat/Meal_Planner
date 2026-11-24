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
const TARGET_KEY  = 'mealplanner_target_date';   // day chosen with the + button, waiting for a recipe
let add_iso = null;                                // day whose + chooser is open

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
let open_weeks  = new Set();
let month_open  = true;
let moving      = null;   // { iso, idx } while a planned meal is being moved to another day

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
  open_weeks = new Set([week_key(view_year, view_month, ordinal_week(now))]);

  plan    = load_json(PLAN_KEY, {});
  pending = load_json(PENDING_KEY, null);
  if (pending && !pending.name) pending = null;

  // A day was chosen with the + button and a recipe has now come back for it
  const target = load_json(TARGET_KEY, null);
  try { localStorage.removeItem(TARGET_KEY); } catch (e) {}
  if (pending && target && target.iso && (Date.now() - target.t) < 30 * 60 * 1000) {
    const recipe = Object.assign({}, pending);
    delete recipe.mode;
    if (!plan[target.iso]) plan[target.iso] = [];
    plan[target.iso].push(recipe);
    save_plan();
    pending = null;
    try { localStorage.removeItem(PENDING_KEY); } catch (e) {}
    selected_iso = target.iso;
    const td = date_of(target.iso);
    view_year = td.getFullYear(); view_month = td.getMonth();
    open_weeks = new Set([week_key(view_year, view_month, ordinal_week(td))]);
  }

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
  render_prompt();
  render_banner();
  render_calendar();
  render_week();
}

// ── prompt above the calendar ───────────────────────────────────
function render_prompt() {
  const el = document.getElementById('cal-prompt');
  if (!el) return;
  el.textContent = pending
    ? (moving ? 'Choose the new day for this meal from the calendar below.' : 'Please choose a day of the week from the calendar below.')
    : 'Tap a date to open its week.';
}

// ── help ────────────────────────────────────────────────────────
const HELP_CONTENT = `
  <p>The Meal Planner lets you plan recipes on the days you want to cook them.</p>
  <ul class="help-list">
    <li>Tap a date on the calendar to open its week in the list below. An empty day shows a + button.</li>
    <li>Tap the + to choose where the recipe comes from: the Recipe Menu or the Recipe Creator. The recipe is added to that day.</li>
    <li>You can also press Plan on any recipe card, then tap a day on the calendar.</li>
    <li>Use the arrows above the calendar to move to the previous or next month.</li>
    <li>Days with something planned are highlighted.</li>
    <li>The list below the calendar shows the month by week. Tap a week to see its seven days, with Empty beside any day that has nothing planned. Tap a meal to see its recipe, and tap Change to move it to another day, and tap ✕ to take it off your plan.</li>
  </ul>
`;
function show_help_modal() {
  document.getElementById('helpModalBody').innerHTML = HELP_CONTENT;
  document.getElementById('helpModalOverlay').style.display = 'flex';
}
function hide_help_modal() {
  document.getElementById('helpModalOverlay').style.display = 'none';
}
window.show_help_modal = show_help_modal;
window.hide_help_modal = hide_help_modal;

// ── pending recipe banner ───────────────────────────────────────
function render_banner() {
  const el = document.getElementById('pending-banner');
  if (!pending) { el.style.display = 'none'; el.innerHTML = ''; return; }
  const lead = pending.mode === 'save' ? 'Saved to Favorites. ' : '';
  el.style.display = 'flex';
  el.innerHTML = '<div>' + lead + (moving ? 'Moving: <b>' : 'Planning: <b>') + esc(pending.name) + '</b></div>' +
                 '<button class="orange-btn" data-act="cancel-pending">Cancel</button>';
}
function on_banner_click(e) {
  if (e.target.closest('[data-act="cancel-pending"]')) {
    pending = null;
    moving = null;
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
    if (moving) {
      // Moving a planned meal: take it off its old day first
      const from = plan[moving.iso];
      if (from) {
        from.splice(moving.idx, 1);
        if (from.length === 0) delete plan[moving.iso];
      }
      moving = null;
      open_meals.clear();
    }
    if (!plan[iso]) plan[iso] = [];
    plan[iso].push(recipe);
    save_plan();
    pending = null;
    try { localStorage.removeItem(PENDING_KEY); } catch (err) {}
  }

  selected_iso = iso;
  add_iso = null;
  const dd = date_of(iso);
  view_year = dd.getFullYear(); view_month = dd.getMonth();
  open_weeks = new Set([week_key(view_year, view_month, ordinal_week(dd))]);
  render_all();
}

// ── Month list below the calendar: Month > Weeks > Days > Meals ──
function week_key(y, m, w) { return y + '-' + m + '-' + w; }
function ordinal_week(d) { return Math.floor((d.getDate() - 1) / 7); }

function render_week() {
  const sec = document.getElementById('week-section');
  const days_in = new Date(view_year, view_month + 1, 0).getDate();
  const weeks = Math.ceil(days_in / 7);

  let html = '<div class="month-block">' +
    '<div class="month-head"><span>' + MONTHS[view_month] + '</span></div>';

  {
    html += '<div class="month-weeks">';
    for (let w = 0; w < weeks; w++) {
      const first = w * 7 + 1;
      const last  = Math.min(first + 6, days_in);
      const key   = week_key(view_year, view_month, w);
      const is_open = open_weeks.has(key);
      html += '<div class="week-block">' +
        '<div class="week-head" data-act="toggle-week" data-key="' + key + '">' +
        '<span>Week ' + (w + 1) + '</span>' +
        '<span class="count">' + first + ' – ' + last + ' ' + (is_open ? '[–]' : '[+]') + '</span></div>';

      if (is_open) {
        html += '<div class="week-days">';
        for (let n = first; n <= last; n++) {
          const iso = view_year + '-' + String(view_month + 1).padStart(2, '0') + '-' + String(n).padStart(2, '0');
          const meals = plan[iso] || [];
          html += '<div class="day-row"><div class="day-num' + ((meals.length || iso === selected_iso) ? ' planned' : '') + '">' + n + '</div><div class="day-meals">';
          if (!meals.length) {
            html += '<div class="day-empty"><span>Empty</span>';
            if (iso === selected_iso) {
              html += '<button class="orange-btn" data-act="add-meal" data-iso="' + iso + '" aria-label="Add a meal to ' + esc(full_date(iso)) + '">+</button>';
            }
            html += '</div>';
            if (iso === selected_iso && add_iso === iso) {
              html += '<div class="add-choice"><div>Add a meal for ' + esc(full_date(iso)) + ':</div>' +
                '<div class="add-choice-btns">' +
                '<button class="orange-btn" data-act="go-menu" data-iso="' + iso + '">Recipe Menu</button>' +
                '<button class="orange-btn" data-act="go-creator" data-iso="' + iso + '">Recipe Creator</button>' +
                '</div></div>';
            }
          } else {
            meals.forEach((m, idx) => {
              const mkey = iso + '#' + idx;
              const m_open = open_meals.has(mkey);
              html += '<div class="meal-row"><div class="meal-head" data-act="toggle-meal" data-key="' + mkey + '">' +
                '<span>' + esc(m.name) + '</span>' +
                '<span class="meal-btns">' +
                '<button class="orange-btn" data-act="change-meal" data-iso="' + iso + '" data-idx="' + idx + '">Change</button>' +
                '<button class="orange-btn" data-act="remove-meal" aria-label="Remove ' + esc(m.name) + '" data-iso="' + iso + '" data-idx="' + idx + '">✕</button>' +
                '</span></div>';
              if (m_open) html += '<div class="meal-detail">' + meal_detail_html(m, iso) + '</div>';
              html += '</div>';
            });
          }
          html += '</div></div>';
        }
        html += '</div>';
      }
      html += '</div>';
    }
    html += '</div>';
  }
  html += '</div>';
  sec.innerHTML = html;
}

// ── recovering instructions for meals saved without them ───────
function load_cookbook_data() {
  return window.load_cookbook_json ? window.load_cookbook_json() : Promise.resolve();
}

function find_cookbook_recipe(name) {
  const want = String(name || '').trim().toLowerCase();
  const data = window.cookbook_json_data || {};
  for (const cat_id of Object.keys(data)) {
    for (const sub of (data[cat_id] || [])) {
      const groups = Array.isArray(sub.subcategories) ? sub.subcategories : [sub];
      for (const g of groups) {
        for (const r of (g.recipes || [])) {
          if (String(r.name).trim().toLowerCase() === want) return r;
        }
      }
    }
  }
  return null;
}

function has_instructions(m) {
  if (Array.isArray(m.steps) && m.steps.length) return true;
  if (typeof m.steps === 'string' && m.steps.trim()) return true;
  return !!(m.prep && String(m.prep).trim());
}

// Fill in preparation (and any other missing parts) from the Cookbook
function recover_meal(iso, idx) {
  const m = plan[iso] && plan[iso][idx];
  if (!m || has_instructions(m)) return Promise.resolve();
  return load_cookbook_data().then(() => {
    const r = find_cookbook_recipe(m.name);
    if (!r) return;
    if (!m.servings && r.servings) m.servings = r.servings;
    if ((!m.ingredients || !m.ingredients.length) && r.ingredients) m.ingredients = r.ingredients;
    if (Array.isArray(r.steps) && r.steps.length) m.steps = r.steps;
    if (r.prep) m.prep = r.prep;
    if (!m.notes && r.notes) m.notes = r.notes;
    save_plan();
    render_week();
  });
}

function full_date(iso) {
  const d = date_of(iso);
  return MONTHS[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function meal_detail_html(m, iso) {
  let h = '';
  if (iso) h += '<div class="meal-date">' + esc(full_date(iso)) + '</div>';
  if (m.servings) h += '<div>' + esc(m.servings) + '</div>';
  if (Array.isArray(m.ingredients) && m.ingredients.length) {
    h += '<h4>Ingredients :</h4><ul>' + m.ingredients.map(i => '<li>' + esc(i) + '</li>').join('') + '</ul>';
  }
  if (Array.isArray(m.steps) && m.steps.length) {
    h += '<h4>Preparation :</h4><ol>' + m.steps.map(s => '<li>' + esc(s) + '</li>').join('') + '</ol>';
  } else if (typeof m.steps === 'string' && m.steps.trim()) {
    h += '<h4>Preparation :</h4><div>' + esc(m.steps) + '</div>';
  } else if (m.prep) {
    h += '<h4>Preparation :</h4><div>' + esc(m.prep) + '</div>';
  } else {
    h += '<h4>Preparation :</h4><div>Loading instructions…</div>';
  }
  if (m.notes) h += '<h4>Notes :</h4><div>' + esc(m.notes) + '</div>';
  return h;
}

function on_week_click(e) {
  const addb = e.target.closest('[data-act="add-meal"]');
  if (addb) {
    const iso = addb.getAttribute('data-iso');
    add_iso = (add_iso === iso) ? null : iso;
    render_week();
    return;
  }
  const go = e.target.closest('[data-act="go-menu"], [data-act="go-creator"]');
  if (go) {
    try { localStorage.setItem(TARGET_KEY, JSON.stringify({ iso: go.getAttribute('data-iso'), t: Date.now() })); } catch (err) {}
    window.location.href = go.getAttribute('data-act') === 'go-menu' ? 'recipes_menu.html' : 'recipe_creator.html';
    return;
  }
  const ch = e.target.closest('[data-act="change-meal"]');
  if (ch) {
    e.stopPropagation();
    const iso = ch.getAttribute('data-iso');
    const idx = Number(ch.getAttribute('data-idx'));
    const m = plan[iso] && plan[iso][idx];
    if (!m) return;
    pending = Object.assign({}, m);
    moving = { iso: iso, idx: idx };
    window.scrollTo(0, 0);
    render_all();
    return;
  }
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
    if (open_meals.has(key)) {
      const parts = key.split('#');
      recover_meal(parts[0], Number(parts[1]));
    }
    return;
  }
  const wk = e.target.closest('[data-act="toggle-week"]');
  if (wk) {
    const key = wk.getAttribute('data-key');
    if (open_weeks.has(key)) open_weeks.delete(key); else open_weeks.add(key);
    render_week();
    return;
  }

}
