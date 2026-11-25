/* ============================================================
   GROCERY LIST DATA — FIRESTORE VERSION
   ============================================================ */

import { auth, db } from './firebase_config.js';
import {
  doc, getDoc, setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/* =========================
   STATE
   ========================= */
let groceryLists = {};
let activeListName = "Default";

let locked = false;
let itemCounter = 0;
let showingSavedLists = false;
let addOpen = false;
let menuOpen = false;
let menuInfo = {};        // saved serving size and price per menu item: { Eggs: { serving, price } }
let openCats = new Set(); // menu categories that are expanded
let openItem = null;
const menuChecked = new Set();      // menu item whose serving size / price fields are showing

/* =========================
   FIRESTORE PATH
   users/{uid}/groceryData/main
   ========================= */
function getRef(uid) {
  return doc(db, "users", uid, "groceryData", "main");
}

/* =========================
   LOAD FROM FIRESTORE
   ========================= */
async function loadLists() {
  const user = auth.currentUser;
if (!user) return;

  const snap = await getDoc(getRef(user.uid));

  if (snap.exists()) {
    const data = snap.data();
    groceryLists = data.lists || {};
    activeListName = data.activeListName || "Default";
    menuInfo = data.menuInfo || {};
  } else {
    groceryLists = { Default: [] };
    activeListName = "Default";
    await saveLists();
  }

  renderList();
}

/* =========================
   SAVE TO FIRESTORE
   ========================= */
async function saveLists() {
  const user = auth.currentUser;
  if (!user) return;

  await setDoc(getRef(user.uid), {
    lists: groceryLists,
    activeListName,
    menuInfo
  });
}

/* =========================
   CATEGORIES
   ========================= */
const MENU = {
  'Produce': [
    'Apples','Apricots','Artichokes','Arugula','Asparagus','Avocados','Bananas','Basil','Beets','Bell peppers',
    'Blackberries','Blueberries','Bok choy','Broccoli','Brussels sprouts','Butternut squash','Cabbage','Cantaloupe',
    'Carrots','Cauliflower','Celery','Cherries','Cilantro','Clementines','Collard greens','Corn on the cob',
    'Cranberries','Cucumbers','Dill','Eggplant','Fennel','Garlic','Ginger','Grapefruit','Grapes','Green beans',
    'Green onions','Honeydew','Jalapenos','Kale','Kiwi','Leeks','Lemons','Lettuce','Limes','Mangoes','Mint',
    'Mushrooms','Nectarines','Okra','Onions','Oranges','Oregano','Papayas','Parsley','Parsnips','Peaches','Pears',
    'Peas','Pineapple','Plums','Pomegranates','Potatoes','Pumpkin','Radishes','Raspberries','Red onions','Rosemary',
    'Rutabaga','Sage','Shallots','Spaghetti squash','Spinach','Strawberries','Sweet potatoes','Tangerines','Thyme',
    'Tomatoes','Turnips','Watermelon','Yams','Yellow squash','Zucchini'
  ],
  'Dairy and eggs': [
    'Almond milk','Buttermilk','Butter','Cheddar cheese','Cottage cheese','Cream cheese','Eggs','Egg whites',
    'Feta cheese','Greek yogurt','Half and half','Heavy cream','Margarine','Mozzarella cheese','Oat milk',
    'Parmesan cheese','Provolone cheese','Ricotta cheese','Shredded cheese','Sour cream','Soy milk','String cheese',
    'Swiss cheese','Whipped cream','Whole milk','2% milk','Skim milk','Yogurt'
  ],
  'Meat and fish': [
    'Bacon','Beef roast','Brisket','Chicken breasts','Chicken drumsticks','Chicken thighs','Chicken wings','Clams',
    'Cod','Crab','Duck','Flank steak','Ground beef','Ground chicken','Ground pork','Ground turkey','Ham','Lamb chops',
    'Lobster','Mussels','Oysters','Pork chops','Pork loin','Pork ribs','Pork shoulder','Ribeye steak','Salmon',
    'Scallops','Shrimp','Sirloin steak','Smoked sausage','Sausage','Tilapia','Tuna steaks','Turkey breast','Whole chicken'
  ],
  'Deli': [
    'Bologna','Deli chicken','Deli ham','Deli turkey','Hummus','Olives','Pastrami','Potato salad','Prepared salads',
    'Rotisserie chicken','Roast beef','Salami','Sliced cheese','Coleslaw','Pickles'
  ],
  'Bakery': [
    'Bagels','Baguette','Birthday cake','Bread','Brioche buns','Cake','Ciabatta','Cookies','Cupcakes','Croissants',
    'Donuts','English muffins','Hamburger buns','Hot dog buns','Muffins','Pie','Pita bread','Rolls','Sourdough bread',
    'Tortillas','Wheat bread'
  ],
  'Frozen': [
    'Frozen berries','Frozen broccoli','Frozen corn','Frozen dinners','Frozen fish sticks','Frozen fruit','Frozen peas',
    'Frozen pizza','Frozen shrimp','Frozen vegetables','Frozen waffles','French fries','Ice cream','Ice cubes',
    'Popsicles','Tater tots'
  ],
  'Canned and jarred': [
    'Applesauce','Baked beans','Black beans','Canned corn','Canned fruit','Canned peaches','Canned tomatoes',
    'Canned tuna','Chicken broth','Beef broth','Chickpeas','Coconut milk','Diced tomatoes','Green beans (canned)',
    'Kidney beans','Pasta sauce','Pinto beans','Refried beans','Soup','Tomato paste','Tomato sauce','Vegetable broth'
  ],
  'Pantry': [
    'Breadcrumbs','Brown rice','Cereal','Cornmeal','Couscous','Grits','Lentils','Macaroni','Noodles','Oatmeal','Oats',
    'Olive oil','Pancake mix','Pasta','Peanut butter','Quinoa','Ramen','Rice','Spaghetti','Vegetable oil','Vegetable shortening'
  ],
  'Spices and baking': [
    'Baking powder','Baking soda','Black pepper','Brown sugar','Cinnamon','Chili powder','Chocolate chips','Cocoa powder',
    'Confectioners sugar','Cornstarch','Cumin','Flour','Garlic powder','Honey','Italian seasoning','Maple syrup',
    'Molasses','Nutmeg','Onion powder','Paprika','Red pepper flakes','Salt','Sugar','Vanilla extract','Yeast'
  ],
  'Condiments and sauces': [
    'Barbecue sauce','Hot sauce','Jam','Jelly','Ketchup','Mayonnaise','Mustard','Pickle relish','Ranch dressing',
    'Salad dressing','Salsa','Soy sauce','Steak sauce','Syrup','Vinegar','Worcestershire sauce'
  ],
  'Snacks': [
    'Candy','Cheese crackers','Chips','Chocolate','Cookies (packaged)','Crackers','Granola bars','Nuts','Peanuts','Popcorn',
    'Pretzels','Raisins','Tortilla chips','Trail mix'
  ],
  'Beverages': [
    'Apple juice','Bottled water','Coffee (ground)','Energy drinks','Ginger ale','Iced tea','Juice','Lemonade','Orange juice',
    'Soda','Sparkling water','Sports drinks','Tea bags'
  ]
};

const CATEGORIES = Object.keys(MENU).concat(['Other']);

const KEYWORDS = [
  ['Produce', ['apple','banana','lemon','lime','onion','garlic','potato','tomato','lettuce','spinach','pepper','carrot','celery','berry','fruit','herb','squash','melon','bean sprout']],
  ['Dairy and eggs', ['milk','egg','cheese','butter','yogurt','cream']],
  ['Meat and fish', ['chicken','beef','pork','sausage','bacon','shrimp','fish','salmon','steak','turkey','ham','lamb']],
  ['Bakery', ['bread','bun','roll','bagel','tortilla','cake','muffin']],
  ['Frozen', ['frozen','ice cream']],
  ['Pantry', ['rice','pasta','cereal','oat','noodle','flour','oil']],
  ['Spices and baking', ['sugar','salt','spice','vanilla']],
  ['Condiments and sauces', ['sauce','dressing','ketchup','mustard','mayo']],
  ['Snacks', ['chip','cracker','cookie','candy','nut','popcorn']],
  ['Beverages', ['juice','soda','water','coffee','tea','drink']]
];

function guessCategory(name) {
  const n = name.trim().toLowerCase();
  const stem = w => w.replace(/(es|s)$/, "");

  // 1. exact match against the menu lists (ignoring plural endings)
  for (const cat of Object.keys(MENU)) {
    if (MENU[cat].some(i => stem(i.toLowerCase()) === stem(n))) return cat;
  }
  // 2. the typed name contains a menu item (longest item wins)
  let best = null, bestLen = 0;
  for (const cat of Object.keys(MENU)) {
    for (const i of MENU[cat]) {
      const key = stem(i.toLowerCase());
      if (key.length > 3 && n.indexOf(key) !== -1 && key.length > bestLen) { best = cat; bestLen = key.length; }
    }
  }
  if (best) return best;
  // 3. keywords
  for (const [cat, words] of KEYWORDS) {
    if (words.some(w => n.includes(w))) return cat;
  }
  return 'Other';
}

function esc(t) {
  return String(t).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* =========================
   GET ACTIVE ITEMS
   ========================= */
function getItems() {
  if (!groceryLists[activeListName]) {
    groceryLists[activeListName] = [];
  }
  const items = groceryLists[activeListName];
  items.forEach(i => { if (!i.category || !CATEGORIES.includes(i.category)) i.category = guessCategory(i.name); });
  return items;
}

/* =========================
   INIT AFTER LOGIN
   ========================= */
auth.onAuthStateChanged(user => {
  if (user) loadLists();
});

const CHECK_SVG = '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const X_SVG = '<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M4 4l10 10M14 4L4 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>';

/* =========================
   RENDER
   ========================= */
function show(id, on) {
  document.getElementById(id).classList.toggle("hidden", !on);
}

function renderList() {
  const el = document.getElementById("grocery-list");
  const items = getItems();
  const doneCount = items.filter(i => i.checked).length;

  /* header */
  document.getElementById("summary").textContent =
    activeListName !== "Default" ? activeListName + " - " + items.length + " items" :
    items.length === 0 ? "Your list is empty" :
    doneCount + " of " + items.length + " in the cart";
  let total = 0, priced = 0;
  items.forEach(i => {
    const m = menuInfo[i.name] && String(menuInfo[i.name].price || "").replace(/,/g, "").match(/\d+(\.\d+)?/);
    if (m) { total += parseFloat(m[0]); priced++; }
  });
  document.getElementById("totalCost").textContent =
    priced ? "Total: $" + total.toFixed(2) + " (" + priced + " priced)" : "";
  document.getElementById("progressFill").style.width =
    items.length ? Math.round(doneCount / items.length * 100) + "%" : "0%";

  const lockBtn = document.getElementById("lockBtn");
  lockBtn.textContent = locked ? "Unlock" : "Lock";
  lockBtn.classList.toggle("on", locked);
  lockBtn.setAttribute("aria-pressed", locked);
  document.getElementById("addBtn").disabled = locked;
  document.getElementById("menuBtn").disabled = locked;

  /* panels */
  show("addPanel", addOpen && !locked);
  show("menuPanel", menuOpen && !locked);
  show("emptyState", items.length === 0 && !showingSavedLists);
  show("clearBtn", doneCount > 0 && !locked && !showingSavedLists);
  if (menuOpen && !locked) renderMenu(items);

  /* saved lists view */
  if (showingSavedLists) {
    el.innerHTML = renderSavedListsPanel();
    return;
  }

  /* list grouped by category */
  el.innerHTML = CATEGORIES.map(cat => {
    const list = items.filter(i => i.category === cat);
    if (!list.length) return "";
    const sorted = [...list.filter(i => !i.checked), ...list.filter(i => i.checked)];
    const done = list.filter(i => i.checked).length;
    return `
      <section>
        <div class="section-head">
          <h2 class="group-title">${cat}</h2>
          <span class="section-count">${done} of ${list.length}</span>
        </div>
        <div class="rows">
          ${sorted.map(item => `
            <div class="row ${item.checked ? "done" : ""}">
              <button class="check-btn" onclick="toggleCheck(${item.id})"
                      aria-pressed="${!!item.checked}"
                      aria-label="${item.checked ? "Uncheck " : "Check "}${esc(item.name)}">
                <span class="box">${CHECK_SVG}</span>
              </button>
              <span class="row-name">${esc(item.name)}</span>
              ${locked ? "" : `<button class="remove-btn" onclick="removeItem(${item.id})" aria-label="Remove ${esc(item.name)}">${X_SVG}</button>`}
            </div>`).join("")}
        </div>
      </section>`;
  }).join("");
}

function renderMenu(items) {
  const has = n => items.some(i => i.name.toLowerCase() === n.toLowerCase());
  document.getElementById("menuPanel").innerHTML = Object.keys(MENU).map((cat, ci) => {
    const open = openCats.has(cat);
    return `
    <div class="menu-cat">
      <div class="cat-head">
        <button class="cat-row" onclick="toggleCat(${ci})" aria-expanded="${open}">
          <span>${cat}</span><span class="cat-mark">${open ? "[–]" : "[+]"}</span>
        </button>
        <button class="btn-dark cat-save" onclick="saveChecked(${ci})">Save</button>
      </div>
      ${open ? MENU[cat].map((n, ni) => {
        const info = menuInfo[n];
        const bits = info ? [info.serving, info.price].filter(Boolean).map(esc).join(" · ") : "";
        const editing = openItem === n;
        const onList = has(n);
        return `
        <div class="opt-row">
          <input type="checkbox" class="opt-check" aria-label="Select ${n}" ${menuChecked.has(n) || onList ? "checked" : ""} ${onList ? "disabled" : ""} onchange="toggleMenuCheck(${ci},${ni})">
          <button class="opt-name" onclick="pickMenu(${ci},${ni})">${n}</button>
          ${bits && !editing ? `<span class="opt-info">${bits}</span>` : ""}
        </div>
        ${editing ? `
        <div class="opt-form">
          <div class="form-line">
            <input id="mi_serving" class="text-input" placeholder="Serving size" aria-label="Serving size for ${n}" value="${info ? esc(info.serving || "") : ""}">
            <button class="btn-dark" onclick="saveMenuInfo()">Save</button>
          </div>
          <div class="form-line">
            <input id="mi_price" class="text-input" placeholder="Price" aria-label="Price for ${n}" value="${info ? esc(info.price || "") : ""}">
            <button class="btn-dark" onclick="saveMenuInfo()">Save</button>
          </div>
        </div>` : ""}`;
      }).join("") : ""}
    </div>`;
  }).join("");
}

function toggleMenuCheck(ci, ni) {
  const name = MENU[Object.keys(MENU)[ci]][ni];
  if (menuChecked.has(name)) menuChecked.delete(name); else menuChecked.add(name);
}
window.toggleMenuCheck = toggleMenuCheck;

async function saveChecked(ci) {
  const cat = Object.keys(MENU)[ci];
  const items = getItems();
  MENU[cat].forEach(n => {
    if (menuChecked.has(n) && !items.some(i => i.name.toLowerCase() === n.toLowerCase())) {
      items.push({ id: Date.now() + (itemCounter++), name: n, category: cat, checked: false });
    }
    menuChecked.delete(n);
  });
  await saveLists();
  renderList();
}
window.saveChecked = saveChecked;

function toggleCat(ci) {
  const cat = Object.keys(MENU)[ci];
  if (openCats.has(cat)) openCats.delete(cat); else openCats.add(cat);
  openItem = null;
  renderList();
}
window.toggleCat = toggleCat;

async function saveMenuInfo() {
  if (!openItem) return;
  const serving = document.getElementById("mi_serving").value.trim();
  const price = document.getElementById("mi_price").value.trim();
  if (serving || price) menuInfo[openItem] = { serving, price };
  else delete menuInfo[openItem];
  openItem = null;
  await saveLists();
  renderList();
}
window.saveMenuInfo = saveMenuInfo;

/* =========================
   ADD ITEMS
   ========================= */
function addItem(name, category) {
  const user = auth.currentUser;
  if (!user) return;

  const items = getItems();
  if (items.some(i => i.name.toLowerCase() === name.toLowerCase())) return Promise.resolve();

  items.push({
    id: Date.now() + (itemCounter++),
    name,
    category: category || guessCategory(name),
    checked: false
  });

  return saveLists().then(() => renderList());
}
window.addItem = addItem;

function addItems() {
  const input = document.getElementById("textInput");
  const name = input.value.trim();
  if (!name) return;
  addItem(name);
  input.value = "";
}
window.addItems = addItems;

document.addEventListener("keydown", e => {
  if (e.key === "Enter" && document.activeElement &&
      document.activeElement.id === "textInput") addItems();
});

function pickMenu(ci, ni) {
  const cat = Object.keys(MENU)[ci];
  const name = MENU[cat][ni];
  openItem = (openItem === name) ? null : name;   // tapping again closes the fields
  renderList();
}
window.pickMenu = pickMenu;

function toggleAdd() {
  addOpen = !addOpen;
  renderList();
  if (addOpen) document.getElementById("textInput").focus();
}
window.toggleAdd = toggleAdd;

function toggleMenu() {
  menuOpen = !menuOpen;
  renderList();
}
window.toggleMenu = toggleMenu;

function voiceInput() {
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Rec) return;
  const recognition = new Rec();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById("textInput").value = transcript;
  };

  recognition.onerror = function(event) {
    console.error("Voice error:", event.error);
  };
}
window.voiceInput = voiceInput;

/* =========================
   REMOVE / CHECK / CLEAR
   ========================= */
async function removeItem(id) {
  groceryLists[activeListName] =
    getItems().filter(i => i.id !== id);

  await saveLists();
  renderList();
}
window.removeItem = removeItem;

async function toggleCheck(id) {
  const item = getItems().find(i => i.id === id);
  if (item) item.checked = !item.checked;

  await saveLists();
  renderList();
}
window.toggleCheck = toggleCheck;

async function clearChecked() {
  groceryLists[activeListName] = getItems().filter(i => !i.checked);
  await saveLists();
  renderList();
}
window.clearChecked = clearChecked;

/* =========================
   SAVE LIST UI
   ========================= */
function saveCurrentList() {
  show("saveListContainer", true);
  document.getElementById("saveListNameInput").focus();
}
window.saveCurrentList = saveCurrentList;

async function confirmSaveList() {
  const input = document.getElementById("saveListNameInput");
  const name = input.value.trim();
  if (!name) return;

  groceryLists[name] = JSON.parse(JSON.stringify(getItems()));
  activeListName = name;

  await saveLists();

  input.value = "";
  show("saveListContainer", false);

  renderList();
}
window.confirmSaveList = confirmSaveList;

/* =========================
   SAVED LISTS VIEW
   ========================= */
function toggleSavedLists() {
  showingSavedLists = !showingSavedLists;
  renderList();
}
window.toggleSavedLists = toggleSavedLists;

async function loadList(i) {
  activeListName = Object.keys(groceryLists)[i];
  showingSavedLists = false;

  await saveLists();
  renderList();
}
window.loadList = loadList;

async function deleteList(i) {
  const name = Object.keys(groceryLists)[i];
  delete groceryLists[name];

  if (activeListName === name) {
    activeListName = Object.keys(groceryLists)[0] || "Default";
  }

  await saveLists();
  renderList();
}
window.deleteList = deleteList;

function renderSavedListsPanel() {
  const names = Object.keys(groceryLists);

  return `
    <div>
      <h2 class="group-title" style="margin-bottom:10px">Saved Lists</h2>
      ${names.map((name, i) => `
        <div class="saved-row">
          <button class="open-list" onclick="loadList(${i})">
            ${esc(name)} - (${groceryLists[name].length} items)
          </button>
          <button class="remove-btn" onclick="deleteList(${i})" aria-label="Delete ${esc(name)}">${X_SVG}</button>
        </div>
      `).join("")}
    </div>
  `;
}

/* =========================
   LOCK
   ========================= */
function toggleLock() {
  locked = !locked;
  renderList();
}
window.toggleLock = toggleLock;

document.addEventListener("DOMContentLoaded", () => {
  renderList();
});

function handleBack() {
  const user = auth.currentUser;

  if (user && user.isFullVersion) {
    window.location.href = "meal_planner_full.html";
    return;
  }

  window.location.href = "meal_planner_free.html";
}
window.handleBack = handleBack;
