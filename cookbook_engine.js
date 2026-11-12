// ================================================================
//  meal_planner_engine.js
//  Renders the Cookbook page using the exact same classes/behavior
//  as Notepad's list -> note pattern, applied one extra level deep
//  since Cookbook Tools -> Categories -> Subcategories -> Recipes
//  needs one more tier than Notepad's list -> note.
//
//  Level 1 = Cookbook Tools (Recipes, Favorites Menu, Meal Planner,
//            Recipe Creator) — fixed and preloaded, not user-typed,
//            so there is no "new list +" toolbar and no delete button.
//  Level 2 = Categories (Beverages, Meats, etc.) — also fixed,
//            rendered with the same note-items-list/note-item-row
//            classes Notepad uses for notes under a list.
//  Level 3 = Subcategories — same pattern again, one level deeper.
//  Level 4 = Recipe titles — the leaf. Tapping one opens the full
//            recipe view, replacing the list, exactly like Notepad's
//            note titles open the full note editor. No formatting
//            toolbar here — just the recipe content on screen.
//
//  cookbook_menu_data.js still declares cookbook_data (the recipe
//  data itself) — this file reads that global but does its own
//  rendering.
// ================================================================

// ── SECTION 1: STATE ────────────────────────────────────────────

const TOOLS = [
  { id: 'recipes',        label: '📖 Recipes',        sortKey: 'Recipes' },
  { id: 'favorites',      label: '♡ Favorites Menu',   sortKey: 'Favorites Menu' },
  { id: 'meal-planner',   label: '📅 Meal Planner',    sortKey: 'Meal Planner' },
  { id: 'recipe-creator', label: '✍️ Recipe Creator',  sortKey: 'Recipe Creator' },
  { id: 'my-recipes',     label: '⭐ My Recipes',      sortKey: 'My Recipes' }
];

const CATEGORIES = [
  { id: 'beverages',                icon: '🍷', label: 'Beverages' },
  { id: 'beans_and_legumes',        icon: '🫘', label: 'Beans & Legumes' },
  { id: 'breads_and_grains',        icon: '🍞', label: 'Breads & Grains' },
  { id: 'desserts',                 icon: '🍰', label: 'Desserts' },
  { id: 'dips_sauces_and_gravies',  icon: '🥣', label: 'Dips, Sauces, & Gravies' },
  { id: 'hard_and_soft_candy',      icon: '🍬', label: 'Hard & Soft Candy' },
  { id: 'meats',                    icon: '🥩', label: 'Meats' },
  { id: 'pastas',                   icon: '🍝', label: 'Pastas & Rice' },
  { id: 'pickles_and_preserves',    icon: '🥒', label: 'Pickles & Preserves' },
  { id: 'salads',                   icon: '🥗', label: 'Salads' },
  { id: 'soups_and_stews',          icon: '🍲', label: 'Soups & Stews' },
  { id: 'vegetables',               icon: '🥦', label: 'Vegetable Dishes' },
  { id: 'side_dishes',              icon: '🥔', label: 'Side Dishes' }
];

let expanded_tools = new Set();
let expanded_categories = new Set();
let open_subcat = {}; // { cat_id: sub_idx_or_'custom' }

let engine_current_recipe = null;
let engine_current_cat_name = null;
let engine_batch_count = 1;
let engine_list_scroll = 0;   // where the list was scrolled when a recipe was opened


// ── SECTION 2: INIT ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  set_date_display();
  redraw_list();
});

function set_date_display() {
  const el = document.getElementById('dateDisplay');
  if (!el) return;
  el.textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric'
  });
}

function set_header_title(text) {
  const el = document.getElementById('pageTitle');
  if (el) el.textContent = text;
}


// ── SECTION 3: LEVEL 1 — COOKBOOK TOOLS (fixed, preloaded) ─────

function redraw_list() {
  const list = document.getElementById('notes-list');
  if (!list) return;

  const sorted_tools = [...TOOLS].sort((a, b) => a.sortKey.localeCompare(b.sortKey));

  let html = '<ol class="notes-ol">';
  sorted_tools.forEach((tool) => {
    const is_open = expanded_tools.has(tool.id);
    const add_btn = (tool.id === 'recipes')
      ? '<span class="bracket-action" onclick="event.stopPropagation(); open_add_recipe_modal()">[ + ]</span>'
      : '';
    html += `
      <li class="note-list-item">
        <div class="row-content">
          <span class="note-list-title" onclick="toggle_tool('${tool.id}')">${tool.label}</span>
          ${add_btn}
        </div>
      </li>
    `;
    if (is_open) {
      html += `<li class="sub-content-row">${render_tool_content(tool.id)}</li>`;
    }
  });
  html += '</ol>';
  list.innerHTML = html;
}
window.redraw_list = redraw_list;

function toggle_tool(id) {
  if (expanded_tools.has(id)) expanded_tools.delete(id);
  else expanded_tools.add(id);
  redraw_list();
}
window.toggle_tool = toggle_tool;

function render_tool_content(id) {
  if (id === 'recipes') return render_recipes_tool();
  if (id === 'favorites') {
    return '<div class="notepad-placeholder">Favorites isn\'t built yet — this is a placeholder until that page\'s content is ready.</div>';
  }
  if (id === 'meal-planner') {
    return '<div class="notepad-placeholder">Meal Planner isn\'t built yet — this is a placeholder until that page\'s content is ready.</div>';
  }
  if (id === 'recipe-creator') return render_recipe_creator_form();
  if (id === 'my-recipes') return render_my_recipes_tool();
  return '';
}


// ── SECTION 4: LEVEL 2 — CATEGORIES (under the Recipes tool) ───

function render_recipes_tool() {
  return `
    <div class="notepad-row">
      <span onclick="startVoice()" style="cursor:pointer;">🎤</span>
      <input class="text-input" type="text" id="search_input" placeholder="Search the menu here..." onkeydown="search_on_enter(event)" autocomplete="off">
      <span onclick="search_cookbook()" style="cursor:pointer;">🔍</span>
    </div>
    ${render_categories_list()}
  `;
}

function render_categories_list() {
  const sorted_categories = [...CATEGORIES].sort((a, b) => a.label.localeCompare(b.label));
  let html = '<ul class="note-items-list">';
  sorted_categories.forEach((cat) => {
    const is_open = expanded_categories.has(cat.id);
    html += `
      <li class="note-item-row">
        <div class="row-content">
          <span class="note-list-title" onclick="toggle_category_cb('${cat.id}')">${cat.icon} ${cat.label}</span>
        </div>
      </li>
    `;
    if (is_open) {
      html += `<li class="sub-content-row">${render_subcats(cat.id)}</li>`;
    }
  });
  html += '</ul>';
  return html;
}

function toggle_category_cb(cat_id) {
  if (expanded_categories.has(cat_id)) expanded_categories.delete(cat_id);
  else expanded_categories.add(cat_id);
  redraw_list();
}
window.toggle_category_cb = toggle_category_cb;


// ── SECTION 5: LEVEL 3 — SUBCATEGORIES ──────────────────────────

function toggle_subcat(cat_id, key) {
  if (open_subcat[cat_id] === key) delete open_subcat[cat_id];
  else open_subcat[cat_id] = key;
  redraw_list();
}
window.toggle_subcat = toggle_subcat;

function render_subcats(cat_id) {
  const subcats_raw = (typeof cookbook_data !== 'undefined' && cookbook_data[cat_id]) ? cookbook_data[cat_id] : [];
  const subcats = subcats_raw
    .map((sub, original_idx) => ({ sub, original_idx }))
    .sort((a, b) => a.sub.name.localeCompare(b.sub.name));
  const open_key = open_subcat[cat_id];
  let html = '<ul class="sub-list level-2">';

  if (subcats.length === 0) {
    html += '<li class="notepad-placeholder">Coming soon.</li>';
  } else {
    subcats.forEach(({ sub, original_idx }) => {
      html += `
        <li class="note-item-row">
          <div class="row-content">
            <span class="note-list-title" onclick="toggle_subcat('${cat_id}', ${original_idx})">${sub.name}</span>
          </div>
        </li>
      `;
      if (open_key === original_idx) {
        html += `<li>${render_recipe_titles(cat_id, original_idx, sub.recipes || [])}</li>`;
      }
    });
  }

  html += '</ul>';
  return html;
}


// ── SECTION 6: LEVEL 4 — RECIPE TITLES (leaf — opens full view) ─

function render_recipe_titles(cat_id, sub_idx, recipes) {
  const sorted = recipes
    .map((r, original_ri) => ({ r, original_ri }))
    .sort((a, b) => a.r.name.localeCompare(b.r.name));
  let html = '<ul class="sub-list level-3">';
  sorted.forEach(({ r, original_ri }) => {
    html += `
      <li class="note-item-row">
        <div class="row-content">
          <span class="note-list-title" onclick="open_recipe_view_by_lookup('${cat_id}', ${sub_idx}, ${original_ri})">${r.name}</span>
        </div>
      </li>
    `;
  });
  html += '</ul>';
  return html;
}

// ── SECTION 7: RECIPE FULL VIEW (replaces the list, like Notepad's note editor) ──

function open_recipe_view_by_lookup(cat_id, sub_idx, recipe_idx) {
  const subcat = cookbook_data[cat_id][sub_idx];
  const recipe = subcat.recipes[recipe_idx];
  open_recipe_view(recipe, subcat.icon || '', subcat.name);
}
window.open_recipe_view_by_lookup = open_recipe_view_by_lookup;

function open_recipe_view(recipe, icon, cat_name) {
  engine_current_recipe = recipe;
  engine_current_cat_name = cat_name;
  engine_batch_count = 1;
  engine_list_scroll = window.scrollY || 0;

  document.getElementById('notes-list-view').style.display = 'none';
  document.getElementById('recipe-editor-view').style.display = 'block';

  document.getElementById('recipe-title-display').textContent = (icon ? icon + ' ' : '') + recipe.name;
  set_header_title('🍽️  Recipe :');

  document.getElementById('recipe-editor-body').innerHTML = render_recipe_card(recipe);
  show_back_btn();
  const desc = document.getElementById('mainPageDescription');
  if (desc) desc.style.display = 'none';
  window.scrollTo(0, 0);
}
window.open_recipe_view = open_recipe_view;

function render_recipe_card(recipe) {
  let html = '<div class="recipe-card">';

  html += `<h4>Serving Size : ${recipe.servings}</h4>`;

  html += `
    <div class="servings-box">
      <button class="servings-btn" onclick="adjust_batches(-1)">−</button>
      <span class="servings-count" id="batch_count">${engine_batch_count}</span>
      <button class="servings-btn" onclick="adjust_batches(1)">+</button>
    </div>
    <div class="servings-label">batches</div>
  `;

  html += '<h4>Ingredients :</h4><ul class="ingredients-list">';
  (recipe.ingredients || []).forEach((ing) => { html += `<li>${ing}</li>`; });
  html += '</ul>';

  html += '<h4>Preparation :</h4><div class="steps-list">';
  if (Array.isArray(recipe.steps) && recipe.steps.length > 0) {
    recipe.steps.forEach((step, idx) => {
      html += `
        <div class="step-item">
          <span class="step-number">${idx + 1}</span>
          <p class="step-text">${step}</p>
        </div>
      `;
    });
  } else if (recipe.prep) {
    // fallback for recipe files not yet converted to a steps array
    html += `<div class="step-item"><p class="step-text">${recipe.prep}</p></div>`;
  }
  html += '</div>';

  if (recipe.notes) {
    html += `<div class="recipe-notes"><h4>Notes :</h4><p>${recipe.notes}</p></div>`;
  }

  html += '<button class="orange-btn" onclick="save_to_favorites_cb()">Save</button>';
  html += '<button class="orange-btn" onclick="open_plan_popup_cb()">Plan</button>';

  html += '</div>'; // .recipe-card
  return html;
}

function adjust_batches(delta) {
  engine_batch_count = Math.max(1, Math.min(99, engine_batch_count + delta));
  const el = document.getElementById('batch_count');
  if (el) el.textContent = engine_batch_count;
}
window.adjust_batches = adjust_batches;

function back_to_list() {
  document.getElementById('recipe-editor-view').style.display = 'none';
  document.getElementById('notes-list-view').style.display = 'block';
  set_header_title('📖  Cookbook :');
  hide_back_btn();
  const desc = document.getElementById('mainPageDescription');
  if (desc) desc.style.display = '';
  window.scrollTo(0, engine_list_scroll);   // return to the spot in the list
}
window.back_to_list = back_to_list;

// Toolbar Back button (always visible above the container):
//   recipe open  -> back to the list you were viewing
//   list showing -> back to the Full Version Tools page
function toolbar_back() {
  const recipe_view = document.getElementById('recipe-editor-view');
  if (recipe_view && recipe_view.style.display !== 'none') {
    back_to_list();
  } else {
    window.location.href = 'full_version_index.html';
  }
}
window.toolbar_back = toolbar_back;

function show_back_btn() {
  const btn = document.getElementById('headerBackBtn');
  if (btn) btn.style.display = 'inline-flex';
}
function hide_back_btn() {
  const btn = document.getElementById('headerBackBtn');
  if (btn) btn.style.display = 'none';
}

// Hand the open recipe to the Meal Planner page and go there.
// mode 'plan' -> planner asks which day;  mode 'save' -> also kept in Favorites.
function send_recipe_to_planner(mode) {
  const r = engine_current_recipe;
  if (!r) return;
  const copy = {
    name:        r.name,
    servings:    r.servings || '',
    ingredients: r.ingredients || [],
    steps:       Array.isArray(r.steps) ? r.steps : [],
    prep:        r.prep || '',
    notes:       r.notes || '',
    batches:     engine_batch_count,
    mode:        mode
  };
  try { localStorage.setItem('mealplanner_pending_recipe', JSON.stringify(copy)); } catch (e) { console.error(e); }
  window.location.href = 'meal_planner.html';
}

function save_to_favorites_cb() {
  if (!engine_current_recipe) return;
  try {
    const favs = JSON.parse(localStorage.getItem('mealplanner_favorites') || '[]');
    const exists = favs.find((f) => f.name === engine_current_recipe.name);
    if (!exists) {
      favs.push({
        name: engine_current_recipe.name,
        catName: engine_current_cat_name,
        servings: engine_current_recipe.servings,
        ingredients: engine_current_recipe.ingredients,
        steps: engine_current_recipe.steps,
        prep: engine_current_recipe.prep,
        notes: engine_current_recipe.notes
      });
      localStorage.setItem('mealplanner_favorites', JSON.stringify(favs));
    }
  } catch (e) { console.error(e); }
  send_recipe_to_planner('save');
}
window.save_to_favorites_cb = save_to_favorites_cb;

function open_plan_popup_cb() {
  send_recipe_to_planner('plan');
}
window.open_plan_popup_cb = open_plan_popup_cb;


// ── SECTION 8: SEARCH ───────────────────────────────────────────

function search_cookbook() {
  const input = document.getElementById('search_input');
  const q = input ? input.value.trim().toLowerCase() : '';
  if (q.length < 2) return;

  let found = null;
  Object.keys(cookbook_data).some((cat_id) => {
    const cat = cookbook_data[cat_id];
    if (!cat) return false;
    return cat.some((subcat, sub_idx) => {
      return (subcat.recipes || []).some((recipe) => {
        if (recipe.name.toLowerCase().indexOf(q) !== -1) {
          found = { cat_id, sub_idx };
          return true;
        }
        return false;
      });
    });
  });

  if (found) {
    expanded_tools.add('recipes');
    expanded_categories.add(found.cat_id);
    open_subcat[found.cat_id] = found.sub_idx;
    redraw_list();
  }
}
window.search_cookbook = search_cookbook;

function search_on_enter(e) {
  if (e.key === 'Enter') search_cookbook();
}
window.search_on_enter = search_on_enter;

function startVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { alert('Voice input not supported.'); return; }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById('search_input');
    if (input) { input.value = transcript; input.focus(); }
    search_cookbook();
  };
}
window.startVoice = startVoice;


// ── SECTION 9: RECIPE CREATOR (a Cookbook Tool — saves to favorites) ──

function render_recipe_creator_form() {
  return `
    <div class="notepad-placeholder">Build your own recipe card and save it to your favorites.</div>
    <input class="text-input" type="text" id="creator_name" placeholder="Recipe name">
    <input class="text-input" type="text" id="creator_servings" placeholder="Serving size (e.g. Serves 4)">
    <div class="notepad-placeholder">Ingredients :</div>
    <div id="creator_ingredients_list">
      <input class="text-input creator-ingredient-input" type="text" placeholder="Ingredient">
    </div>
    <button class="orange-btn" onclick="add_ingredient_field()">+ Add Ingredient</button>
    <div class="notepad-placeholder">Preparation :</div>
    <textarea class="text-input" id="creator_prep" placeholder="Preparation steps" style="height:100px;"></textarea>
    <button class="orange-btn" onclick="save_created_recipe()">Save Recipe</button>
    <div id="creator_message" class="notepad-placeholder"></div>
  `;
}

function add_ingredient_field() {
  const container = document.getElementById('creator_ingredients_list');
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'text-input creator-ingredient-input';
  input.placeholder = 'Ingredient';
  container.appendChild(input);
}
window.add_ingredient_field = add_ingredient_field;

function save_created_recipe() {
  const name      = document.getElementById('creator_name').value.trim();
  const servings  = document.getElementById('creator_servings').value.trim();
  const prep      = document.getElementById('creator_prep').value.trim();
  const msgEl     = document.getElementById('creator_message');
  const ingredients = [];

  document.querySelectorAll('.creator-ingredient-input').forEach((inp) => {
    if (inp.value.trim()) ingredients.push(inp.value.trim());
  });

  if (!name || !servings || ingredients.length === 0 || !prep) {
    if (msgEl) msgEl.textContent = 'Please fill out the name, servings, at least one ingredient, and the preparation steps.';
    return;
  }

  const steps = prep.split(/\n+/).map(s => s.trim()).filter(Boolean);

  const favs = JSON.parse(localStorage.getItem('mealplanner_favorites') || '[]');
  favs.push({ name, catName: 'My Recipes', servings, ingredients, steps });
  localStorage.setItem('mealplanner_favorites', JSON.stringify(favs));

  if (msgEl) msgEl.textContent = 'Recipe saved to your favorites!';

  document.getElementById('creator_name').value = '';
  document.getElementById('creator_servings').value = '';
  document.getElementById('creator_prep').value = '';
  document.getElementById('creator_ingredients_list').innerHTML =
    '<input class="text-input creator-ingredient-input" type="text" placeholder="Ingredient">';
}
window.save_created_recipe = save_created_recipe;


// ── SECTION 10: ADD RECIPE MODAL (feeds the flat My Recipes list — reuses the help-modal classes) ──

const MY_RECIPES_KEY = 'cookbook_my_recipes';

function open_add_recipe_modal() {
  document.getElementById('add_recipe_modal_title').textContent = 'Add Recipe :';
  document.getElementById('addRecipeModalOverlay').style.display = 'flex';
}
window.open_add_recipe_modal = open_add_recipe_modal;

function close_add_recipe_modal() {
  document.getElementById('addRecipeModalOverlay').style.display = 'none';
}
window.close_add_recipe_modal = close_add_recipe_modal;

function add_recipe_ingredient_field() {
  const container = document.getElementById('add_recipe_ingredients_list');
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'text-input add-recipe-ingredient-input';
  input.placeholder = 'Ingredient';
  container.appendChild(input);
}
window.add_recipe_ingredient_field = add_recipe_ingredient_field;

function save_add_recipe_modal() {
  const name     = document.getElementById('add_recipe_name').value.trim();
  const servings = document.getElementById('add_recipe_servings').value.trim();
  const prep     = document.getElementById('add_recipe_prep').value.trim();
  const msgEl    = document.getElementById('add_recipe_message');
  const ingredients = [];

  document.querySelectorAll('.add-recipe-ingredient-input').forEach((inp) => {
    if (inp.value.trim()) ingredients.push(inp.value.trim());
  });

  if (!name || !servings || ingredients.length === 0 || !prep) {
    if (msgEl) msgEl.textContent = 'Please fill out the name, servings, at least one ingredient, and the preparation steps.';
    return;
  }

  const steps = prep.split(/\n+/).map(s => s.trim()).filter(Boolean);

  const stored = JSON.parse(localStorage.getItem(MY_RECIPES_KEY) || '[]');
  stored.push({ name, servings, ingredients, steps });
  localStorage.setItem(MY_RECIPES_KEY, JSON.stringify(stored));

  if (msgEl) msgEl.textContent = 'Recipe added!';

  document.getElementById('add_recipe_name').value = '';
  document.getElementById('add_recipe_servings').value = '';
  document.getElementById('add_recipe_prep').value = '';
  document.getElementById('add_recipe_ingredients_list').innerHTML =
    '<input class="text-input add-recipe-ingredient-input" type="text" placeholder="Ingredient">';

  redraw_list();
  setTimeout(close_add_recipe_modal, 800);
}
window.save_add_recipe_modal = save_add_recipe_modal;

// ── My Recipes tool panel (flat, alphabetized list of everything added via [ + ]) ──

function render_my_recipes_tool() {
  const stored = JSON.parse(localStorage.getItem(MY_RECIPES_KEY) || '[]');
  if (stored.length === 0) {
    return '<div class="notepad-placeholder">Tap [ + ] beside Recipes to add your first custom recipe.</div>';
  }
  const sorted = stored
    .map((r, original_idx) => ({ r, original_idx }))
    .sort((a, b) => a.r.name.localeCompare(b.r.name));

  let html = '<ul class="note-items-list">';
  sorted.forEach(({ r, original_idx }) => {
    html += `
      <li class="note-item-row">
        <div class="row-content">
          <span class="note-list-title" onclick="open_my_recipe_view(${original_idx})">${r.name}</span>
        </div>
      </li>
    `;
  });
  html += '</ul>';
  return html;
}

function open_my_recipe_view(idx) {
  const stored = JSON.parse(localStorage.getItem(MY_RECIPES_KEY) || '[]');
  const recipe = stored[idx];
  if (!recipe) return;
  open_recipe_view(recipe, '⭐', 'My Recipes');
}
window.open_my_recipe_view = open_my_recipe_view;



// ── SECTION 11: HELP MODAL ──────────────────────────────────────

const HELP_CONTENT_MAIN = `
  <p>All the recipes we provide are researched and verified by proven chef inspired ingredients and preparation instructions.</p>
  <p>The free version of cookbook allows you to view the items in the menu but only allows access to one recipe card until you subscribe to the full version.</p>
  <p>Browse the menu sections below or use the search bar to search for specific recipes or ingredients.</p>
  <ul class="help-list">
    <li>Tap a title to open or close it — titles are tappable throughout the list.</li>
    <li>The [ + ] beside Recipes lets you add your own recipe — it's saved to My Recipes.</li>
    <li>Recipe Creator saves a recipe straight to your favorites instead of a specific category.</li>
  </ul>
`;

function show_help_modal() {
  const body = document.getElementById('helpModalBody');
  const overlay = document.getElementById('helpModalOverlay');
  if (!body || !overlay) return;
  body.innerHTML = HELP_CONTENT_MAIN;
  overlay.style.display = 'flex';
}
window.show_help_modal = show_help_modal;

function hide_help_modal() {
  const overlay = document.getElementById('helpModalOverlay');
  if (overlay) overlay.style.display = 'none';
}
window.hide_help_modal = hide_help_modal;
