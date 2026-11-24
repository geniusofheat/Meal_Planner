// My Recipes — saves a recipe card to localStorage 'mealplanner_favorites'
// (same format the cookbook's Save button uses).

(function () {
  var FAV_KEY = 'mealplanner_favorites';

  function $(id) { return document.getElementById(id); }

  $('dateDisplay').textContent =
    new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });

  function ingredientRow() {
    var row = document.createElement('div');
    row.className = 'ing-row';
    var inp = document.createElement('input');
    inp.className = 'field ing-input';
    inp.placeholder = 'Ingredient';
    inp.autocomplete = 'off';
    var del = document.createElement('button');
    del.className = 'orange-btn-44';
    del.textContent = '✕';
    del.setAttribute('aria-label', 'Remove ingredient');
    del.onclick = function () {
      var list = $('r_ingredients');
      if (list.children.length > 1) list.removeChild(row); else inp.value = '';
    };
    row.appendChild(inp);
    row.appendChild(del);
    return row;
  }

  window.addIngredient = function () {
    var row = ingredientRow();
    $('r_ingredients').appendChild(row);
    row.querySelector('input').focus();
  };

  window.saveRecipe = function () {
    var name = $('r_name').value.trim();
    var servings = $('r_servings').value.trim();
    var prep = $('r_prep').value.trim();
    var notes = $('r_notes').value.trim();
    var ingredients = [];
    document.querySelectorAll('.ing-input').forEach(function (i) {
      if (i.value.trim()) ingredients.push(i.value.trim());
    });
    var msg = $('r_msg');

    if (!name || !servings || !ingredients.length || !prep) {
      msg.className = 'msg err';
      msg.textContent = 'Please fill out the name, servings, at least one ingredient and the preparation steps.';
      return;
    }

    var favs = [];
    try { favs = JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); } catch (e) { favs = []; }
    if (favs.some(function (f) { return f.name.toLowerCase() === name.toLowerCase(); })) {
      msg.className = 'msg err';
      msg.textContent = 'A favorite named "' + name + '" already exists. Please use a different name.';
      return;
    }

    var steps = prep.split(/\n+/).map(function (s) { return s.trim(); }).filter(Boolean);
    favs.push({ name: name, catName: 'My Recipes', servings: servings, ingredients: ingredients, steps: steps, prep: '', notes: notes });
    try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); } catch (e) {
      msg.className = 'msg err'; msg.textContent = 'Could not save the recipe on this device.'; return;
    }

    msg.className = 'msg';
    msg.textContent = 'Recipe saved to your favorites!';

    // A day was chosen in the Meal Planner: offer to plan this recipe on it
    try {
      var tg = JSON.parse(localStorage.getItem('mealplanner_target_date') || 'null');
      if (tg && tg.iso && (Date.now() - tg.t) < 30 * 60 * 1000) {
        var p = tg.iso.split('-').map(Number);
        var label = new Date(p[0], p[1] - 1, p[2]).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        localStorage.setItem('mealplanner_pending_recipe', JSON.stringify({
          name: name, servings: servings, ingredients: ingredients, steps: steps, prep: '', notes: notes, batches: 1, mode: 'plan'
        }));
        $('r_plan').textContent = 'Plan on ' + label;
        $('r_plan').classList.remove('hidden');
      }
    } catch (e) {}

    $('r_after').classList.remove('hidden');
    $('r_name').value = ''; $('r_servings').value = ''; $('r_prep').value = ''; $('r_notes').value = '';
    $('r_ingredients').innerHTML = '';
    $('r_ingredients').appendChild(ingredientRow());
  };

  $('r_ingredients').appendChild(ingredientRow());
})();
