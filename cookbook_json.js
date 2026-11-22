// ================================================================
//  cookbook_json.js — loads one JSON file per main category.
//  The file names match the category titles in the Recipes Menu.
//  Each file holds only that category's subcategories and recipes.
// ================================================================
window.COOKBOOK_JSON_FILES = {
  beans_and_legumes:       'beans_and_legumes.json',
  beverages:               'beverages.json',
  breads_and_grains:       'breads_and_grains.json',
  desserts:                'desserts.json',
  dips_sauces_and_gravies: 'dips_sauces_and_gravies.json',
  hard_and_soft_candy:     'hard_and_soft_candy.json',
  meats:                   'meats.json',
  pastas:                  'pastas.json',
  pickles_and_preserves:   'pickles_and_preserves.json',
  salads:                  'salads.json',
  side_dishes:             'side_dishes.json',
  snacks:                  'snacks.json',
  soups_and_stews:         'soups_and_stews.json',
  vegetables:              'vegetable_dishes.json'
};

// category id -> array of subcategories (filled in as the files load)
window.cookbook_json_data = window.cookbook_json_data || {};

let cookbook_json_loading = null;

window.load_cookbook_json = function () {
  if (cookbook_json_loading) return cookbook_json_loading;
  const files = window.COOKBOOK_JSON_FILES;
  cookbook_json_loading = Promise.all(Object.keys(files).map(function (cat_id) {
    return fetch(files[cat_id] + "?v=6")
      .then(function (res) { return res.ok ? res.json() : []; })
      .catch(function () { return []; })
      .then(function (data) {
        window.cookbook_json_data[cat_id] = Array.isArray(data) ? data : [];
      });
  }));
  return cookbook_json_loading;
};
