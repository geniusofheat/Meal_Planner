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
const EVENTS_KEY  = 'mealplanner_events';
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
let mode        = 'meal';   // which view the week list shows
let mode_chosen = false;    // true once a Plan button has been pressed
let _unused_mode_note = 0;
let mode_x      = 0;   // 'meal' | 'events'
let events      = {};       // { 'YYYY-MM-DD': [ { title }, ... ] }
let edit_iso    = null;     // day whose Edit controls (Change / ✕) are showing
let event_iso   = null;     // day whose event-title row is open
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
// Drop empty leftovers so a day with nothing planned is never highlighted
function clean_events() {
  let changed = false;
  Object.keys(events).forEach(iso => {
    const list = Array.isArray(events[iso]) ? events[iso].filter(e => e && String(e.title || '').trim()) : [];
    if (!Array.isArray(events[iso]) || list.length !== events[iso].length) changed = true;
    if (list.length) events[iso] = list; else { delete events[iso]; changed = true; }
  });
  if (changed) save_events();
}
function clean_plan() {
  let changed = false;
  Object.keys(plan).forEach(iso => {
    const list = Array.isArray(plan[iso]) ? plan[iso].filter(m => m && String(m.name || '').trim()) : [];
    if (!Array.isArray(plan[iso]) || list.length !== plan[iso].length) changed = true;
    if (list.length) plan[iso] = list; else { delete plan[iso]; changed = true; }
  });
  if (changed) save_plan();
}
function save_events() {
  try { localStorage.setItem(EVENTS_KEY, JSON.stringify(events)); } catch (e) { console.error(e); }
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
  selected_iso = iso_of(now);   // today starts out selected
  open_weeks = new Set([week_key(view_year, view_month, ordinal_week(now))]);

  plan    = load_json(PLAN_KEY, {});
  events  = load_json(EVENTS_KEY, {});
  clean_events();
  clean_plan();
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

  document.getElementById('mode-meal').addEventListener('click', () => set_mode('meal'));
  document.getElementById('mode-events').addEventListener('click', () => set_mode('events'));
  document.getElementById('cal-prev').addEventListener('click', () => change_month(-1));
  document.getElementById('cal-next').addEventListener('click', () => change_month(1));
  document.getElementById('cal-grid').addEventListener('click', on_grid_click);
  document.getElementById('week-section').addEventListener('click', on_week_click);
  document.getElementById('pending-banner').addEventListener('click', on_banner_click);

  if (pending) mode = 'meal';
  render_all();
});

function set_mode(m) {
  if (m === 'events' && pending) return;     // finish placing the waiting recipe first
  if (mode_chosen && mode === m) { mode_chosen = false; mode = 'meal'; add_iso = null; event_iso = null; render_all(); return; }   // press again to clear
  mode_chosen = true;
  mode = m; add_iso = null; event_iso = null; edit_iso = null;
  render_all();
}

function change_month(delta) {
  view_month += delta;
  if (view_month < 0)  { view_month = 11; view_year--; }
  if (view_month > 11) { view_month = 0;  view_year++; }
  render_all();
}

function render_all() {
  render_mode_buttons();
  render_prompt();
  render_banner();
  render_calendar();
  render_week();
}

function render_mode_buttons() {
  document.body.classList.toggle('mode-meal', mode_chosen && mode === 'meal');
  document.body.classList.toggle('mode-events', mode_chosen && mode === 'events');
  const row = document.querySelector('.mode-row');
  if (row) row.classList.toggle('chosen', mode_chosen);
  ['meal', 'events'].forEach(k => {
    const b = document.getElementById('mode-' + k);
    if (!b) return;
    const on = mode_chosen && mode === k;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

// ── prompt above the calendar ───────────────────────────────────
function render_prompt() {
  const el = document.getElementById('cal-prompt');
  if (!el) return;
  if (mode === 'events' && mode_chosen) { el.textContent = 'Tap a date to open its week, then tap the + beside a day to add an event.'; return; }
  el.textContent = pending
    ? (moving ? 'Choose the new day for this meal from the calendar below.' : 'Please choose a day of the week from the calendar below.')
    : 'Tap a date to open its week.';
}

// ── help ────────────────────────────────────────────────────────
const HELP_CONTENT = `
  <p>The Calendar lets you plan recipes on the days you want to cook them.</p>
  <ul class="help-list">
    <li>Tap a date on the calendar to open its week in the list below. An empty day shows a + button.</li>
    <li>Tap the + to choose where the recipe comes from: the Recipe Menu, your Favorites or My Recipes. The recipe is added to that day.</li>
    <li>You can also press Plan on any recipe card, then tap a day on the calendar.</li>
    <li>Use the arrows above the calendar to move to the previous or next month.</li>
    <li>Days with something planned are highlighted.</li>
    <li>Press Plan Events at the top to pin events to dates instead of meals. Tap a date, then tap the + beside a day in the week list and type the event title. Press Plan a Meal to go back to meals.</li>
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
    const has_meal  = !!(plan[iso] && plan[iso].length);
    const has_event = !!(events[iso] && events[iso].length);
    let cls = 'cal-day';
    if (has_meal)             cls += ' has-meal';
    if (has_event)            cls += ' has-event';
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

function day_num_cls(iso) {
  const has = mode === 'events' ? !!(events[iso] && events[iso].length) : !!(plan[iso] && plan[iso].length);
  return (has ? (mode === 'events' ? ' has-event' : ' has-meal') : '') + (iso === selected_iso ? ' selected' : '');
}

// One day in the week list (meal view OR events view, never both):
//   row 1: date + weekday + [+] [Edit]   then the numbered items below it
function day_block_html(iso, n) {
  const is_ev = mode === 'events';
  const items = is_ev ? (events[iso] || []) : (plan[iso] || []);
  const dow   = DAYS[date_of(iso).getDay()].slice(0, 3);
  const editing = edit_iso === iso;
  let h = '<div class="day-block">';
  h += '<div class="day-top"><div class="day-num' + day_num_cls(iso) + '">' + n + '</div><span class="day-dow">' + dow + '</span>' +
       '<span class="day-top-btns">' +
       '<button class="orange-btn add-btn" data-act="add-plus" data-iso="' + iso + '" aria-label="Add to ' + esc(full_date(iso)) + '">+</button>' +
       (items.length ? '<button class="orange-btn" data-act="toggle-edit" data-iso="' + iso + '">' + (editing ? 'Done' : 'Edit') + '</button>' : '') +
       '</span></div>';
  if (!is_ev && add_iso === iso) {
    h += '<div class="add-choice"><div>Add a meal for ' + esc(full_date(iso)) + ':</div><div class="add-choice-btns">' +
      '<button class="orange-btn" data-act="go-menu" data-iso="' + iso + '">Recipes Menu</button>' +
      '<button class="orange-btn" data-act="go-favorites" data-iso="' + iso + '">Favorites Menu</button>' +
      '<button class="orange-btn" data-act="go-creator" data-iso="' + iso + '">My Recipes</button></div></div>';
  }
  if (is_ev && event_iso === iso) {
    h += '<div class="add-choice"><div>Event for ' + esc(full_date(iso)) + ':</div>' +
      '<input class="event-input" id="event-title-input" type="text" maxlength="80" placeholder="Event title" autocomplete="off">' +
      '<div class="add-choice-btns"><button class="orange-btn" data-act="save-event" data-iso="' + iso + '">Save</button>' +
      '<button class="orange-btn" data-act="cancel-event">Cancel</button></div></div>';
  }
  if (items.length) {
    h += '<div class="day-section">';
    items.forEach((it, idx) => {
      if (is_ev) {
        h += '<div class="meal-row"><div class="meal-head ev-head"><span class="ev-title"><span class="item-num">' + (idx + 1) + '.</span> ' + esc(it.title) + '</span>' +
          (editing ? '<span class="meal-btns"><button class="orange-btn" data-act="remove-event" aria-label="Remove ' + esc(it.title) + '" data-iso="' + iso + '" data-idx="' + idx + '">✕</button></span>' : '') + '</div></div>';
      } else {
        const mkey = iso + '#' + idx;
        h += '<div class="meal-row"><div class="meal-head ev-head" data-act="toggle-meal" data-key="' + mkey + '">' +
          '<span class="ev-title"><span class="item-num">' + (idx + 1) + '.</span> ' + esc(it.name) + '</span>' +
          (editing ? '<span class="meal-btns">' +
          '<button class="orange-btn" data-act="change-meal" data-iso="' + iso + '" data-idx="' + idx + '">Change</button>' +
          '<button class="orange-btn" data-act="remove-meal" aria-label="Remove ' + esc(it.name) + '" data-iso="' + iso + '" data-idx="' + idx + '">✕</button>' +
          '</span>' : '') + '</div>';
        if (open_meals.has(mkey)) h += '<div class="meal-detail">' + meal_detail_html(it, iso) + '</div>';
        h += '</div>';
      }
    });
    h += '</div>';
  }
  return h + '</div>';
}

function render_week() {
  const sec = document.getElementById('week-section');
  const days_in = new Date(view_year, view_month + 1, 0).getDate();
  const weeks = Math.ceil(days_in / 7);
  const is_ev = mode === 'events';

  let cur = 0;
  for (let w = 0; w < weeks; w++) if (open_weeks.has(week_key(view_year, view_month, w))) { cur = w; break; }
  const first = cur * 7 + 1;
  const last  = Math.min(first + 6, days_in);

  let html = '<h3 class="week-title">' + (is_ev ? 'Planned Events' : 'Planned Meals') + '</h3>' +
    '<div class="week-toolbar"><span class="week-label">Week</span><span class="week-nums">';
  for (let w = 0; w < weeks; w++) {
    html += '<button class="week-num' + (w === cur ? ' on' : '') + '" data-act="pick-week" data-key="' + week_key(view_year, view_month, w) + '" aria-label="Week ' + (w + 1) + '">' + (w + 1) + '</button>';
  }
  html += '</span></div><div class="week-range">' + MONTHS[view_month] + ' ' + first + ' – ' + last + '</div><div class="week-days">';
  for (let n = first; n <= last; n++) {
    const iso = view_year + '-' + String(view_month + 1).padStart(2, '0') + '-' + String(n).padStart(2, '0');
    html += day_block_html(iso, n);
  }
  html += '</div>';
  sec.innerHTML = html;
}

function commit_event(iso) {
  const inp = document.getElementById('event-title-input');
  const title = inp ? inp.value.trim() : '';
  if (!title) { if (inp) inp.focus(); return; }
  if (!events[iso]) events[iso] = [];
  events[iso].push({ title: title });
  save_events();
  event_iso = null;
  render_all();
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
  const a0 = e.target.closest('[data-act]');
  if (a0) {
    const act = a0.getAttribute('data-act'), iso = a0.getAttribute('data-iso');
    if (act === 'toggle-edit') { edit_iso = (edit_iso === iso) ? null : iso; render_week(); return; }
    if (act === 'add-plus' && mode === 'events') {
      event_iso = (event_iso === iso) ? null : iso;
      add_iso = null; selected_iso = iso;
      render_all();
      const inp0 = document.getElementById('event-title-input');
      if (inp0) { inp0.focus(); inp0.addEventListener('keydown', ev => { if (ev.key === 'Enter') commit_event(iso); }); }
      return;
    }
    if (act === 'add-event') {
      event_iso = (event_iso === iso) ? null : iso;
      add_iso = null; selected_iso = iso;
      render_all();
      const inp = document.getElementById('event-title-input');
      if (inp) { inp.focus(); inp.addEventListener('keydown', ev => { if (ev.key === 'Enter') commit_event(iso); }); }
      return;
    }
    if (act === 'save-event') { commit_event(iso); return; }
    if (act === 'cancel-event') { event_iso = null; render_week(); return; }
    if (act === 'remove-event') {
      const idx = Number(a0.getAttribute('data-idx'));
      if (events[iso]) { events[iso].splice(idx, 1); if (!events[iso].length) delete events[iso]; save_events(); }
      render_all();
      return;
    }
  }
  const addb = e.target.closest('[data-act="add-meal"], [data-act="add-plus"]');
  if (addb) {
    const iso = addb.getAttribute('data-iso');
    add_iso = (add_iso === iso) ? null : iso;
    event_iso = null; selected_iso = iso;
    render_all();
    return;
  }
  const go = e.target.closest('[data-act="go-menu"], [data-act="go-favorites"], [data-act="go-creator"]');
  if (go) {
    try { localStorage.setItem(TARGET_KEY, JSON.stringify({ iso: go.getAttribute('data-iso'), t: Date.now() })); } catch (err) {}
    const dest = { 'go-menu': 'recipes_menu.html', 'go-favorites': 'favorite_recipes.html', 'go-creator': 'my_recipes.html' };
    window.location.href = dest[go.getAttribute('data-act')];
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
  const wk = e.target.closest('[data-act="pick-week"]');
  if (wk) {
    open_weeks = new Set([wk.getAttribute('data-key')]);
    add_iso = null; event_iso = null; edit_iso = null;
    render_week();
    return;
  }

}
