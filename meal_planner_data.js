/* ============================================================ */
/*  meal_planner.js                                             */
/*  Step-by-step card flow meal planner.                        */
/*  Steps: 1 = Calendar, 2 = Choose Meal, 3 = Confirm,         */
/*         4 = Planned Meals list                               */
/* ============================================================ */


/* ── STATE ─────────────────────────────────────────────────── */
let mp_selected_date  = null;   // { day: 'Tuesday', date: 'May 13', iso: '2026-05-13' }
let mp_selected_meal  = null;   // { name: '...', ingredients: '...', steps: '...' }
let mp_planned_meals  = [];     // array of { day, date, iso, meal }
let mp_cal_year       = 0;
let mp_cal_month      = 0;      // 0-indexed


/* ── STEP HEADER CONTENT ────────────────────────────────────── */
const MP_STEPS = {
  1: {
    tag:   'Step 1 of 3',
    title: 'Pick a Day',
    desc:  'Choose a day from the calendar below. Tap any date and the planner will move you to the next step automatically.'
  },
  2: {
    tag:   'Step 2 of 3',
    title: 'Choose Your Meal',
    desc:  'Pick a recipe from the Cookbook or create your own meal by typing in the name, ingredients and preparation steps.'
  },
  3: {
    tag:   'Step 3 of 3',
    title: 'Confirm Your Selection',
    desc:  'Review your selection below. You can add meals for more days or finish and view your full meal plan.'
  },
  4: {
    tag:   'Done ✓',
    title: 'Your Meal Plan',
    desc:  'Here are all the meals you have planned. Tap a meal name to see the full recipe.'
  }
};


/* ── INIT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const now    = new Date();
  mp_cal_year  = now.getFullYear();
  mp_cal_month = now.getMonth();
  loadSavedMeals();
  renderCalendar();
  showStep(1);
});


/* ── STEP NAVIGATION ────────────────────────────────────────── */
function showStep(n) {
  // Update header
  const s = MP_STEPS[n];
  document.getElementById('mp-step-tag').textContent   = s.tag;
  document.getElementById('mp-step-title').textContent = s.title;
  document.getElementById('mp-step-desc').textContent  = s.desc;

  // Hide all cards, show the target
  [1, 2, 3, 4].forEach(i => {
    document.getElementById('mp-card-' + i).style.display = (i === n) ? 'block' : 'none';
  });

  // Scroll header into view smoothly
  document.getElementById('mp-step-header').scrollIntoView({ behavior: 'smooth', block: 'start' });
}


/* ============================================================ */
/*  STEP 1 — CALENDAR                                           */
/* ============================================================ */
function renderCalendar() {
  const DAYS   = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MONTHS = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];

  const now        = new Date();
  const firstDay   = new Date(mp_cal_year, mp_cal_month, 1).getDay();
  const daysInMonth= new Date(mp_cal_year, mp_cal_month + 1, 0).getDate();

  document.getElementById('monthName').textContent = MONTHS[mp_cal_month];
  document.getElementById('yearLabel').textContent = mp_cal_year;

  const grid = document.getElementById('calGrid');
  grid.innerHTML = '';

  // Empty cells before the 1st
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'cal-cell cal-cell-empty';
    grid.appendChild(empty);
  }

  // Day cells
  for (let d = 1; d <= daysInMonth; d++) {
    const cellDate  = new Date(mp_cal_year, mp_cal_month, d);
    const dayName   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][cellDate.getDay()];
    const isoStr    = cellDate.toISOString().slice(0, 10);
    const isToday   = (d === now.getDate() && mp_cal_month === now.getMonth() && mp_cal_year === now.getFullYear());
    const hasMeal   = mp_planned_meals.some(m => m.iso === isoStr);
    const isSelected= mp_selected_date && mp_selected_date.iso === isoStr;

    const cell = document.createElement('div');
    cell.className = 'cal-cell'
      + (isToday    ? ' cal-today'    : '')
      + (hasMeal    ? ' cal-has-meal' : '')
      + (isSelected ? ' cal-selected' : '');
    cell.textContent = d;

    // Format display date e.g. "May 13"
    const displayDate = MONTHS[mp_cal_month] + ' ' + d;

    cell.addEventListener('click', () => selectCalendarDay(dayName, displayDate, isoStr, cell));
    grid.appendChild(cell);
  }
}

function selectCalendarDay(dayName, displayDate, isoStr, cellEl) {
  // Clear previous selection highlight
  document.querySelectorAll('.cal-cell.cal-selected').forEach(c => c.classList.remove('cal-selected'));
  cellEl.classList.add('cal-selected');

  mp_selected_date = { day: dayName, date: displayDate, iso: isoStr };

  // Show brief confirmation flash then advance
  const confirm = document.getElementById('mp-day-confirm');
  document.getElementById('mp-day-confirm-text').textContent = dayName + ', ' + displayDate + ' selected ✓';
  confirm.style.display = 'block';

  setTimeout(() => {
    confirm.style.display = 'none';
    showStep(2);
  }, 900);
}

function prevMonth() {
  mp_cal_month--;
  if (mp_cal_month < 0) { mp_cal_month = 11; mp_cal_year--; }
  renderCalendar();
}

function nextMonth() {
  mp_cal_month++;
  if (mp_cal_month > 11) { mp_cal_month = 0; mp_cal_year++; }
  renderCalendar();
}


/* ============================================================ */
/*  STEP 2 — CHOOSE MEAL                                        */
/* ============================================================ */
function chooseCookbook() {
  // Save the pending date so cookbook_menu can pass a recipe back
  localStorage.setItem('mealplanner_pending_date', JSON.stringify(mp_selected_date));
  window.location.href = 'recipes_menu.html';
}

function showCreateForm() {
  document.querySelector('.mp-choice-grid').style.display = 'none';
  document.getElementById('mp-create-form').style.display = 'block';
}

function hideCreateForm() {
  document.getElementById('mp-create-form').style.display = 'none';
  document.querySelector('.mp-choice-grid').style.display = 'grid';
}

function submitCreatedMeal() {
  const name  = document.getElementById('mp-meal-name-input').value.trim();
  const ings  = document.getElementById('mp-meal-ingredients').value.trim();
  const steps = document.getElementById('mp-meal-steps').value.trim();

  if (!name) {
    showToast('Please enter a meal name.');
    return;
  }

  mp_selected_meal = { name, ingredients: ings, steps };
  confirmMeal();
}

// Called by recipes_menu.html after recipe is chosen (via localStorage + redirect back)
function checkPendingCookbookRecipe() {
  const raw = localStorage.getItem('mealplanner_pending_recipe');
  if (!raw) return;
  localStorage.removeItem('mealplanner_pending_recipe');

  const recipe = JSON.parse(raw);
  mp_selected_meal = {
    name:        recipe.name        || 'Untitled Recipe',
    ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients.join('\n') : '',
    steps:       recipe.steps || ''
  };

  const rawDate = localStorage.getItem('mealplanner_pending_date');
  if (rawDate) {
    mp_selected_date = JSON.parse(rawDate);
    localStorage.removeItem('mealplanner_pending_date');
  }

  if (mp_selected_date && mp_selected_meal) {
    confirmMeal();
  } else {
    showStep(1);
  }
}


/* ============================================================ */
/*  STEP 3 — CONFIRM                                            */
/* ============================================================ */
function confirmMeal() {
  document.getElementById('mp-confirm-day').textContent  = mp_selected_date.day + ', ' + mp_selected_date.date;
  document.getElementById('mp-confirm-meal').textContent = mp_selected_meal.name;
  showStep(3);
}

function addAnother() {
  // Save current selection to list
  saveMeal();
  // Reset meal selection, keep calendar state, go back to step 1
  mp_selected_meal = null;
  mp_selected_date = null;
  renderCalendar();
  showStep(1);
}

function finishPlanning() {
  saveMeal();
  renderPlannedList();
  showStep(4);
}


/* ============================================================ */
/*  STEP 4 — PLANNED MEALS LIST                                 */
/* ============================================================ */
function renderPlannedList() {
  const list = document.getElementById('mp-meals-list');
  list.innerHTML = '';

  if (mp_planned_meals.length === 0) {
    list.innerHTML = '<p style="color:rgba(200,220,255,0.4);text-align:center;">No meals planned yet.</p>';
    return;
  }

  // Sort by ISO date
  const sorted = [...mp_planned_meals].sort((a, b) => a.iso.localeCompare(b.iso));

  sorted.forEach((entry, idx) => {
    const row = document.createElement('div');
    row.className = 'mp-meal-row';

    const label = document.createElement('div');
    label.className = 'mp-meal-row-label';
    label.textContent = entry.day + ', ' + entry.date + ' :';

    const nameBtn = document.createElement('button');
    nameBtn.className = 'mp-meal-row-name';
    nameBtn.textContent = entry.meal.name;
    nameBtn.addEventListener('click', () => openRecipeModal(entry.meal));

    const removeBtn = document.createElement('button');
    removeBtn.className = 'mp-meal-remove-btn';
    removeBtn.textContent = '✕';
    removeBtn.addEventListener('click', () => removeMeal(idx));

    row.appendChild(label);
    row.appendChild(nameBtn);
    row.appendChild(removeBtn);
    list.appendChild(row);

    // Divider
    if (idx < sorted.length - 1) {
      const hr = document.createElement('hr');
      hr.className = 'pm-rule';
      list.appendChild(hr);
    }
  });
}

function removeMeal(idx) {
  const sorted = [...mp_planned_meals].sort((a, b) => a.iso.localeCompare(b.iso));
  const target = sorted[idx];
  mp_planned_meals = mp_planned_meals.filter(m => m.iso !== target.iso || m.meal.name !== target.meal.name);
  saveMealsToStorage();
  renderPlannedList();
  renderCalendar();
}

function startOver() {
  mp_selected_date = null;
  mp_selected_meal = null;
  renderCalendar();
  showStep(1);
}


/* ============================================================ */
/*  RECIPE MODAL                                                */
/* ============================================================ */
function openRecipeModal(meal) {
  const content = document.getElementById('mp-modal-content');
  content.innerHTML = `
    <h3 class="mp-modal-title">${meal.name}</h3>
    ${meal.ingredients ? `
      <div class="mp-modal-section-label">Ingredients</div>
      <p class="mp-modal-text">${meal.ingredients.replace(/\n/g, '<br>')}</p>
    ` : ''}
    ${meal.steps ? `
      <div class="mp-modal-section-label">Preparation</div>
      <p class="mp-modal-text">${meal.steps.replace(/\n/g, '<br>')}</p>
    ` : ''}
  `;
  document.getElementById('mp-recipe-modal').style.display = 'flex';
}

function closeRecipeModal() {
  document.getElementById('mp-recipe-modal').style.display = 'none';
}


/* ============================================================ */
/*  PERSISTENCE                                                 */
/* ============================================================ */
function saveMeal() {
  if (!mp_selected_date || !mp_selected_meal) return;

  // Avoid duplicates for same ISO date
  mp_planned_meals = mp_planned_meals.filter(m => m.iso !== mp_selected_date.iso);
  mp_planned_meals.push({
    day:  mp_selected_date.day,
    date: mp_selected_date.date,
    iso:  mp_selected_date.iso,
    meal: mp_selected_meal
  });

  saveMealsToStorage();
}

function saveMealsToStorage() {
  localStorage.setItem('mealplanner_meals', JSON.stringify(mp_planned_meals));
}

function loadSavedMeals() {
  const raw = localStorage.getItem('mealplanner_meals');
  if (raw) {
    try {
  const parsed = JSON.parse(raw);
  mp_planned_meals = Array.isArray(parsed) ? parsed : [];
} catch(e) { mp_planned_meals = []; }
  }
  // Check if returning from cookbook with a recipe
  checkPendingCookbookRecipe();
}


/* ============================================================ */
/*  TOAST                                                       */
/* ============================================================ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}
