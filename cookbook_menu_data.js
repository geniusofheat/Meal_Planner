// ================================================================
//  § 1 — CATEGORY DATA MAP
// ================================================================
// Filled in by cookbook_json.js (one JSON file per main category)
const cookbook_data = window.cookbook_json_data;

let active_category = null;
let current_recipe = null;
let current_cat_name = null;
// END § 1

//- ── TOGGLE ACCORDION LOGIC ── 

var _openCategory = null;
var _openRow      = null;

function openToggle(category, row) {
  var body = document.getElementById(category + '_toggle_body');
  if (!body) return;

  // If this row is already open, close it
  if (_openCategory === category) {
    body.classList.remove('open');
    row.classList.remove('open');
    _openCategory = null;
    _openRow      = null;
    return;
  }

  // Close the previously open one
  if (_openCategory) {
    var prevBody = document.getElementById(_openCategory + '_toggle_body');
    if (prevBody) prevBody.classList.remove('open');
    if (_openRow)  _openRow.classList.remove('open');
  }

  // Open the new one and load its recipes
  body.classList.add('open');
  row.classList.add('open');
  _openCategory = category;
  _openRow      = row;

  toggleCategory(category);
  setTimeout(function () {
  body.previousElementSibling.scrollIntoView({ behavior: 'smooth', block: 'start' });
}, 150);
}

//-- ── END TOGGLE ACCORDION LOGIC ── 


// ================================================================
//  § 2 — TOGGLE CATEGORY
// ================================================================
function toggleCategory(cat_id) {
  const list_el = document.getElementById(cat_id);
  if (!list_el) return;

  const cat_data = cookbook_data[cat_id];
  list_el.innerHTML = '';

  if (!cat_data || cat_data.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'Coming soon.';
    li.style.opacity = '0.5';
    list_el.appendChild(li);
  } else {
    cat_data.forEach(function (subcat, sub_idx) {
      const li = document.createElement('li');
      li.className = 'nested-li';
      li.dataset.subIdx = sub_idx;
      li.innerHTML = '<span class="subcat-chevron">▶</span> ' + subcat.name;
      li.style.cursor = 'pointer';
      li.addEventListener('click', function () { show_recipes(cat_id, sub_idx, li); });
      list_el.appendChild(li);
    });
  }
}

// ================================================================
//  § 3 — SHOW RECIPES
// ================================================================
function show_recipes(cat_id, sub_idx, clicked_li) {
  const list_el  = document.getElementById(cat_id);
  const cat_data = cookbook_data[cat_id];

  if (!list_el || !cat_data) return;

  const subcat = cat_data[sub_idx];
  if (!subcat || !Array.isArray(subcat.recipes)) return;

  const existing   = list_el.querySelector('.recipe-sublist');
  const chevron_el = clicked_li.querySelector('.subcat-chevron');

  if (existing && existing.dataset.subIdx == sub_idx) {
    existing.remove();
    if (chevron_el) chevron_el.textContent = '▶';
    return;
  }

  if (existing) {
    // Reset chevron on previously open subcat
    const prev_li = list_el.querySelector('.nested-li[data-sub-idx="' + existing.dataset.subIdx + '"]');
    if (prev_li) {
      const prev_chevron = prev_li.querySelector('.subcat-chevron');
      if (prev_chevron) prev_chevron.textContent = '▶';
    }
    existing.remove();
  }

  const recipe_ul = document.createElement('ul');
  recipe_ul.className = 'recipe-sublist';
  recipe_ul.dataset.subIdx = sub_idx;

  subcat.recipes.forEach(function (recipe) {
    const li = document.createElement('li');
    li.className = 'menu-item';
    li.innerHTML = recipe.name;
    li.style.cursor = 'pointer';
    li.addEventListener('click', function () {
      open_recipe_modal(recipe, subcat.icon, subcat.name);
    });
    recipe_ul.appendChild(li);
  });

  clicked_li.insertAdjacentElement('afterend', recipe_ul);
  if (chevron_el) chevron_el.textContent = '▼';
}

// ================================================================
//  § 4 — OPEN RECIPE MODAL
// ================================================================
function open_recipe_modal(recipe, icon, cat_name) {
  current_recipe = recipe;
  current_cat_name = cat_name;

  const title = document.getElementById('recipe_modal_title');
  const body = document.getElementById('recipe_modal_body');
  const modal = document.getElementById('recipe_modal');

  if (!title || !body || !modal) return;

  title.textContent = icon + ' ' + recipe.name;

  let html = '';
  html += '<h4 class="color">Serving Size : ' + recipe.servings + '</h4>';
  html += '<h4>Ingredients :</h4><ul>';

  recipe.ingredients.forEach(function (ing) {
    html += '<li>' + ing + '</li>';
  });

  html += '</ul>';
  html += '<h4>Preparation :</h4>';
  html += '<p>' + recipe.prep + '</p>';

  html += '<button onclick="save_to_favorites()">Save</button>';
  html += '<button onclick="open_plan_popup()">Plan</button>';

  body.innerHTML = html;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}
// END § 4

// ================================================================
//  § 4b — PLAN RECIPE (save to localStorage + return to planner)
// ================================================================
function open_plan_popup() {
  if (!current_recipe) return;

  localStorage.setItem('mealplanner_pending_recipe', JSON.stringify({
    name:        current_recipe.name,
    ingredients: current_recipe.ingredients,
    steps:       current_recipe.prep
  }));

  window.location.href = 'meal_planner.html';
}
// END § 4b


// ================================================================
//  § 5 — CLOSE RECIPE MODAL
// ================================================================
function close_recipe_modal() {
  document.getElementById('recipe_modal').style.display = 'none';
  document.body.style.overflow = '';
}
// END § 5


// ================================================================
//  § 6 — SAVE TO FAVORITES
// ================================================================
function save_to_favorites() {
  if (!current_recipe) return;

  let favs = JSON.parse(localStorage.getItem('mealplanner_favorites') || '[]');
  const exists = favs.find(f => f.name === current_recipe.name);

  if (!exists) {
    favs.push({
      name: current_recipe.name,
      catName: current_cat_name,
      ingredients: current_recipe.ingredients,
      prep: current_recipe.prep
    });

    localStorage.setItem('mealplanner_favorites', JSON.stringify(favs));
  }
}
// END § 6


// ================================================================
//  § 7 — PLAN POPUP
// ================================================================
const PLAN_MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const PLAN_DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let plan_year = new Date().getFullYear();
let plan_month = new Date().getMonth();
let plan_highlighted_dow = null;
let plan_selected_day = null;
let plan_selected_dow = null;

// (unchanged section 7 logic retained)
// ================================================================


// ================================================================
//  § 8 — INIT
// ================================================================
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('recipe_modal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === this) close_recipe_modal();
    });
  }
});
// END § 8


// ================================================================
//  § 9 — SEARCH
// ================================================================
function search_cookbook() {
  const input = document.getElementById('search_input');
  const q = input ? input.value.trim().toLowerCase() : '';
  if (q.length < 2) return;

  let found = null;

  Object.keys(cookbook_data).some(function (cat_id) {
    const cat = cookbook_data[cat_id];
    if (!cat) return false;

    return cat.some(function (subcat, sub_idx) {
      return subcat.recipes.some(function (recipe) {
        if (recipe.name.toLowerCase().includes(q)) {
          found = { cat_id, sub_idx };
          return true;
        }
        return false;
      });
    });
  });

  if (found) {
    toggleCategory(found.cat_id);
    show_recipes(found.cat_id, found.sub_idx);
  }
}
// END § 9
