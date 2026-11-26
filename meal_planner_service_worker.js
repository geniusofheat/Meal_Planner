// ============================================================
// SERVICE WORKER — Meal Planner PWA
// Auto-updating: always fetches fresh files, cache is backup only
// ============================================================

const CACHE_NAME = 'Meal_Planner-v87';

const FILES_TO_CACHE = [
  'index.html',
  'login.html',
  'index_redirect.js',
  'login_stylesheet.css',
  'button_style.css',
  'login_data.js',
  'account_type.html',
  'account_type_stylesheet.css',
  'account_type_data.js',
  'meal_planner_free.html',
  'meal_planner_full.html',
  'full_version_stylesheet.css',
  'icon-192.png',
  'icon-512.png',
  'meal_planner_service_worker.js',
  'meal_planner_manifest.json',
  'meal_planner_data.js',
  'meal_planner.html',
  'meal_planner_calendar.css',
  'meal_planner_calendar.js',
  'recipes_menu.html',
  'cookbook_menu_stylesheet.css',
  'cookbook_menu_data.js',
  'cookbook_engine.js',
  'grocery_list.html',
  'my_recipes.html',
  'my_recipes.js',
  'notepad.html',
  'notepad_screenshot_1.png',
  'notepad_screenshot_2.png',
  'notepad_screenshot_3.png',
  'notepad_engine.js',
  'notepad_fonts.js',
  'notepad_menu.js',
  'notepad_photos.js',
  'notepad_stylesheet.css',
  'notepad_sync.js',
  'favorite_recipes.html',
  'favorite_recipes.js',
  'recipe_tools.css',
  'grocery_list.css',
  'grocery_list_data.js',
  'firebase_config.js',
  'firebase_login_auth.js',
  'cookbook_json.js',
  'beans_and_legumes.json',
  'beverages.json',
  'breads_and_grains.json',
  'desserts.json',
  'dips_sauces_and_gravies.json',
  'hard_and_soft_candy.json',
  'meats.json',
  'pastas.json',
  'pickles_and_preserves.json',
  'salads.json',
  'side_dishes.json',
  'snacks.json',
  'soups_and_stews.json',
  'vegetable_dishes.json'
];

// Install — cache all files
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

// Activate — take control immediately
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

// Fetch — network first, fall back to cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        const clone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
