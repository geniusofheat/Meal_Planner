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
    activeListName
  });
}

/* =========================
   CATEGORIES
   ========================= */
const CATEGORIES = ['Produce','Dairy and eggs','Meat and fish','Bakery','Pantry','Household','Other'];

const MENU = {
  'Produce': ['Apples','Bananas','Onions','Potatoes','Tomatoes','Garlic'],
  'Dairy and eggs': ['Milk','Eggs','Butter','Cheese','Yogurt'],
  'Meat and fish': ['Chicken','Ground beef','Bacon','Sausage','Shrimp'],
  'Bakery': ['Bread','Tortillas','Buns'],
  'Pantry': ['Rice','Pasta','Flour','Sugar','Coffee'],
  'Household': ['Paper towels','Dish soap','Foil']
};

const KEYWORDS = [
  ['Produce', ['apple','banana','lemon','lime','onion','garlic','potato','tomato','lettuce','spinach','pepper','carrot','celery','berry','fruit','herb']],
  ['Dairy and eggs', ['milk','egg','cheese','butter','yogurt','cream']],
  ['Meat and fish', ['chicken','beef','pork','sausage','bacon','shrimp','fish','salmon','steak','turkey','ham']],
  ['Bakery', ['bread','bun','roll','bagel','tortilla']],
  ['Pantry', ['rice','pasta','flour','sugar','oil','salt','sauce','bean','cereal','coffee','tea','spice','can']],
  ['Household', ['soap','paper','towel','foil','bag','detergent','sponge','tissue']]
];

function guessCategory(name) {
  const n = name.toLowerCase();
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
  items.forEach(i => { if (!i.category) i.category = guessCategory(i.name); });
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
  document.getElementById("menuPanel").innerHTML = Object.keys(MENU).map((cat, ci) => `
    <div>
      <h2 class="group-title">${cat}</h2>
      <div class="chips">
        ${MENU[cat].map((n, ni) => `
          <button class="chip ${has(n) ? "added" : ""}" aria-pressed="${has(n)}"
                  onclick="pickMenu(${ci},${ni})">${n}</button>`).join("")}
      </div>
    </div>`).join("");
}

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
  addItem(MENU[cat][ni], cat);
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
