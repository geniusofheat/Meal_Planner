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
   GET ACTIVE ITEMS
   ========================= */
function getItems() {
  if (!groceryLists[activeListName]) {
    groceryLists[activeListName] = [];
  }
  return groceryLists[activeListName];
}

/* =========================
   INIT AFTER LOGIN
   ========================= */
auth.onAuthStateChanged(user => {
  if (user) loadLists();
});

/* =========================
   RENDER LIST
   ========================= */
function renderList() {
  const el = document.getElementById("grocery-list");

  if (showingSavedLists) {
    el.innerHTML = renderSavedListsPanel();
    return;
  }

  const items = getItems();
  const blankCount = Math.max(0, 8 - items.length);
  const blanks = Array(blankCount)
    .fill('<div class="notepad-row blank"></div>')
    .join("");

  el.innerHTML =
`<div class="grocery-list-title">
  ${activeListName === "Default" ? "Default List :" : activeListName}
</div>` +
    items.map(item => `
      <div class="notepad-row">
        <input type="checkbox"
               ${item.checked ? "checked" : ""}
               onchange="toggleCheck(${item.id})"
               ${locked ? "disabled" : ""}>
        <label class="${item.checked ? "crossed" : ""}">
          ${item.name}
        </label>
        ${!locked ? `<button class="remove-btn" onclick="removeItem(${item.id})">✕</button>` : ""}
      </div>
    `).join("") +
    blanks;
}

function addItem(name) {
  const user = auth.currentUser;
  if (!user) return;

  const items = getItems();

  items.push({
    id: Date.now(),
    name,
    checked: false
  });

  saveLists().then(() => {
    renderList();
  });
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

function voiceInput() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
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
   REMOVE ITEM
   ========================= */
async function removeItem(id) {
  groceryLists[activeListName] =
    getItems().filter(i => i.id !== id);

  await saveLists();
  renderList();
}
window.removeItem = removeItem;

/* =========================
   TOGGLE CHECK
   ========================= */
async function toggleCheck(id) {
  const item = getItems().find(i => i.id === id);
  if (item) item.checked = !item.checked;

  await saveLists();
  renderList();
}
window.toggleCheck = toggleCheck;

/* =========================
   SAVE LIST UI
   ========================= */
function saveCurrentList() {
  document.getElementById("saveListContainer").style.display = "block";
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
  document.getElementById("saveListContainer").style.display = "none";

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

/* =========================
   LOAD LIST
   ========================= */
async function loadList(name) {
  activeListName = name;
  showingSavedLists = false;

  await saveLists();
  renderList();
}
window.loadList = loadList;

/* =========================
   DELETE LIST
   ========================= */
async function deleteList(name) {
  delete groceryLists[name];

  if (activeListName === name) {
    activeListName = Object.keys(groceryLists)[0] || "Default";
  }

  await saveLists();
  renderList();
}
window.deleteList = deleteList;

/* =========================
   SAVED LISTS UI
   ========================= */
function renderSavedListsPanel() {
  const names = Object.keys(groceryLists);

  return `
    <div class="saved-lists-panel">
      <h3>Saved Lists</h3>

      ${names.map(name => `
        <div>
          <button onclick="loadList('${name.replace(/'/g, "\\'")}')">
            ${name} - (${groceryLists[name].length} items)
          </button>

          <button onclick="deleteList('${name.replace(/'/g, "\\'")}')">✕</button>
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
  document.getElementById("lockBtn").textContent =
    locked ? "🔒 Unlock" : "🔓 Lock";

  renderList();
}
window.toggleLock = toggleLock;

document.addEventListener("DOMContentLoaded", () => {
  renderList();
});

function handleBack() {
  const user = auth.currentUser;

  if (user && user.isFullVersion) {
    window.location.href = "full_version_index.html";
    return;
  }

  window.location.href = "free_version_index.html";
}

window.handleBack = handleBack;