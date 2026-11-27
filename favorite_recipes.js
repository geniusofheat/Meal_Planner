// Favorite Recipes — reads/writes localStorage 'mealplanner_favorites'.
(function () {
  var FAV_KEY = 'mealplanner_favorites';
  var PENDING_KEY = 'mealplanner_pending_recipe';
  var openName = null;
  var confirming = false;

  function $(id) { return document.getElementById(id); }
  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function load() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); } catch (e) { return []; }
  }
  function save(list) { try { localStorage.setItem(FAV_KEY, JSON.stringify(list)); } catch (e) {} }

  $('dateDisplay').textContent =
    new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });

  window.renderList = function () {
    var favs = load().sort(function (a, b) { return a.name.localeCompare(b.name); });
    var q = $('favSearch').value.trim().toLowerCase();
    if (q) favs = favs.filter(function (f) { return f.name.toLowerCase().indexOf(q) !== -1; });
    var el = $('favList');

    if (!load().length) {
      $('favSearch').classList.add('hidden');
      el.innerHTML =
        '<p style="font-size:18px;line-height:1.5">You have no favorite recipes yet. Open any recipe in the Recipes Menu and tap Save, or build your own in My Recipes. Saved recipes will appear here.</p>' +
        '<div class="btn-row"><a class="orange-btn" href="recipes_menu.html">Open Recipes Menu</a>' +
        '<a class="orange-btn" href="my_recipes.html">Open My Recipes</a></div>';
      return;
    }
    $('favSearch').classList.remove('hidden');
    if (!favs.length) { el.innerHTML = '<p style="font-size:18px">No favorites match your search.</p>'; return; }

    el.innerHTML = favs.map(function (f) {
      return '<div class="fav-item" style="margin-bottom:8px" onclick="openFav(' + JSON.stringify(f.name).replace(/"/g, '&quot;') + ')">' +
        '<span class="fav-name">' + esc(f.name) + '</span>' +
        '<span class="fav-cat">' + esc(f.catName || '') + '</span></div>';
    }).join('');
  };

  window.openFav = function (name) {
    var f = load().filter(function (x) { return x.name === name; })[0];
    if (!f) return;
    openName = name; confirming = false;
    var steps = Array.isArray(f.steps) && f.steps.length ? f.steps : (f.prep ? [f.prep] : []);
    $('cardView').innerHTML =
      '<h2>' + esc(f.name) + '</h2>' +
      (f.servings ? '<p>' + esc(f.servings) + '</p>' : '') +
      '<div class="label">Ingredients</div><ul>' +
        (f.ingredients || []).map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' +
      '<div class="label">Preparation</div><ol>' +
        steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>' +
      (f.notes ? '<div class="label">Notes</div><p>' + esc(f.notes) + '</p>' : '') +
      '<div class="btn-row"><button class="orange-btn" onclick="planFav()">Plan</button>' +
      '<button class="orange-btn" id="rmBtn" onclick="removeFav()">Remove</button></div>';
    $('listView').classList.add('hidden');
    $('cardView').classList.remove('hidden');
    window.scrollTo(0, 0);
  };

  window.planFav = function () {
    var f = load().filter(function (x) { return x.name === openName; })[0];
    if (!f) return;
    var copy = {
      name: f.name, servings: f.servings || '', ingredients: f.ingredients || [],
      steps: Array.isArray(f.steps) ? f.steps : [], prep: f.prep || '', notes: f.notes || '',
      batches: 1, mode: 'plan'
    };
    try { localStorage.setItem(PENDING_KEY, JSON.stringify(copy)); } catch (e) {}
    window.location.href = 'calendar.html';
  };

  window.removeFav = function () {
    var btn = $('rmBtn');
    if (!confirming) { confirming = true; btn.textContent = 'Tap again to remove'; return; }
    save(load().filter(function (x) { return x.name !== openName; }));
    showList();
  };

  function showList() {
    openName = null; confirming = false;
    $('cardView').classList.add('hidden');
    $('listView').classList.remove('hidden');
    renderList();
  }

  window.goBack = function () {
    if (openName) showList(); else window.location.href = 'meal_planner_full.html';
  };

  renderList();
})();
