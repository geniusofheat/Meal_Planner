// ============================================================
// SERVICE WORKER — Meal Planner PWA
// Auto-updating: always fetches fresh files, cache is backup only
// ============================================================

const CACHE_NAME = 'Meal_Planner-v6';

const FILES_TO_CACHE = [
  'index.html',
  'index_stylesheet.css',
  'index_data.js',
  'account_type.html',
  'account_type_stylesheet.css',
  'account_type_data.js',
  'free_version_index.html',
  'full_version_index.html',
  'full_version_stylesheet.css',
  'icon-192.png',
  'icon-512.png',
  'meal_planner_service_worker.js',
  'meal_planner_manifest.json',
  'meal_planner_data.js',
  'meal_planner.html',
  'meal_planner_calendar.css',
  'meal_planner_calendar.js',
  'cookbook_menu.html',
  'cookbook_menu_stylesheet.css',
  'cookbook_menu_data.js',
  'cookbook_engine.js',
  'grocery_list.html',
  'grocery_list.css',
  'grocery_list_data.js',
  'firebase_config.js',
  'firebase_login_auth.js',
  'meats_data.js',
  'pork_data.js',
  'desserts_data.js',
  'pastas_data.js',
  'beans_and_legumes_data.js',
  'beverages_data.js',
  'breads_and_grains_data.js',
  'hard_and_soft_candy_data.js',
  'dips_sauces_and_gravies_data.js',
  'salads_data.js',
  'seafood_data.js',
  'side_dishes_data.js',
  'soups_and_stews_data.js',
  'vegetables_data.js',
  'pickles_and_preserves.js'
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
