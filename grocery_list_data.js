/* ============================================================
   GROCERY LIST DATA — FIRESTORE VERSION
   Notepad-style list hierarchy and per-item content editor.
   ============================================================ */

import { auth, db } from './firebase_config.js';
import {
  doc, getDoc, setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/* STATE */
let groceryLists = {};
let activeListName = "Default";
let locked = false;
let expandedLists = new Set(["Default"]);
let editingItemId = null;

/* EXISTING FIRESTORE DOCUMENT PATH */
function getRef(uid) {
  return doc(db, "users", uid, "groceryData", "main");
}

/* LOAD EXISTING DATA; ADD AN EMPTY CONTENT FIELD TO OLDER ITEMS */
async function loadLists() {
  const user = auth.currentUser;
  if (!user) return;

  const snap = await getDoc(getRef(user.uid));

  if (snap.exists()) {
    const data = snap.data();
    groceryLists = data.lists || {};
    activeListName = data.activeListName || "Default";

    Object.values(groceryLists).forEach(items => {
      if (!Array.isArray(items)) return;
      items.forEach(item => {
        if (typeof item.content !== "string") item.content = "";
      });
    });
  } else {
    groceryLists = { Default: [] };
    activeListName = "Default";
  }

  if (!groceryLists[activeListName]) {
    activeListName = Object.keys(groceryLists)[0] || "Default";
  }
  if (!groceryLists[activeListName]) groceryLists[activeListName] = [];

  expandedLists.add(activeListName);
  await saveLists();
  renderList();
}

/* SAVE USING THE SAME DOCUMENT AND EXISTING LISTS OBJECT */
async function saveLists() {
  const user = auth.currentUser;
  if (!user) return;

  await setDoc(getRef(user.uid), {
    lists: groceryLists,
    activeListName
  });
}

function getItems(listName = activeListName) {
  if (!Array.isArray(groceryLists[listName])) groceryLists[listName] = [];
  return groceryLists[listName];
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

/* WAIT FOR AUTHENTICATION BEFORE LOADING THE USER'S LISTS */
auth.onAuthStateChanged(user => {
  if (user) loadLists();
});

/* HOME VIEW: EACH SAVED LIST IS A PARENT TITLE */
function renderList() {
  const container = document.getElementById("grocery-list");
  if (!container) return;

  const names = Object.keys(groceryLists);
  if (!names.length) groceryLists = { Default: [] };

  container.innerHTML = Object.keys(groceryLists).map(listName => {
    const items = getItems(listName);
    const expanded = expandedLists.has(listName);

    return `
      <section class="grocery-parent-list">
        <div class="grocery-parent-row">
          <button
            class="grocery-parent-title"
            type="button"
            data-action="toggle-list"
            data-list-name="${escapeHTML(listName)}"
            aria-expanded="${expanded}">
            <span class="grocery-disclosure">${expanded ? "▾" : "▸"}</span>
            <span>${escapeHTML(listName === "Default" ? "Default List" : listName)}</span>
            <span class="grocery-item-count">(${items.length})</span>
          </button>
          ${!locked && listName !== "Default" ? `
            <button class="remove-btn grocery-delete-list"
              type="button"
              data-action="delete-list"
              data-list-name="${escapeHTML(listName)}"
              aria-label="Delete ${escapeHTML(listName)}">✕</button>
          ` : ""}
        </div>

        ${expanded ? `
          <div class="grocery-child-list">
            ${items.map(item => `
              <div class="notepad-row grocery-item-row">
                <input
                  type="checkbox"
                  data-action="check-item"
                  data-item-id="${escapeHTML(item.id)}"
                  data-list-name="${escapeHTML(listName)}"
                  ${item.checked ? "checked" : ""}
                  ${locked ? "disabled" : ""}>
                <button
                  class="grocery-item-title ${item.checked ? "crossed" : ""}"
                  type="button"
                  data-action="open-item"
                  data-item-id="${escapeHTML(item.id)}"
                  data-list-name="${escapeHTML(listName)}">${escapeHTML(item.name)}</button>
                ${!locked ? `
                  <button class="remove-btn"
                    type="button"
                    data-action="remove-item"
                    data-item-id="${escapeHTML(item.id)}"
                    data-list-name="${escapeHTML(listName)}"
                    aria-label="Remove ${escapeHTML(item.name)}">✕</button>
                ` : ""}
              </div>
            `).join("")}
            ${items.length === 0 ? '<div class="grocery-empty-list">No items yet.</div>' : ""}
          </div>
        ` : ""}
      </section>
    `;
  }).join("");
}

/* CLICK ACTIONS FOR PARENT TITLES AND ITEM TITLES */
document.addEventListener("click", async event => {
  const control = event.target.closest("[data-action]");
  if (!control) return;

  const action = control.dataset.action;
  const listName = control.dataset.listName;
  const itemId = control.dataset.itemId;

  if (action === "toggle-list") {
    if (expandedLists.has(listName)) {
      expandedLists.delete(listName);
    } else {
      expandedLists.add(listName);
      activeListName = listName;
      await saveLists();
    }
    renderList();
    return;
  }

  if (action === "open-item") {
    openItemEditor(listName, itemId);
    return;
  }

  if (action === "remove-item" && !locked) {
    groceryLists[listName] = getItems(listName).filter(item => String(item.id) !== String(itemId));
    await saveLists();
    renderList();
    return;
  }

  if (action === "delete-list" && !locked) {
    if (!confirm(`Delete "${listName}" and all its grocery items?`)) return;

    delete groceryLists[listName];
    expandedLists.delete(listName);

    if (activeListName === listName) {
      activeListName = Object.keys(groceryLists)[0] || "Default";
    }
    if (!groceryLists[activeListName]) groceryLists[activeListName] = [];

    await saveLists();
    renderList();
  }
});

/* CHECKBOXES REMAIN AVAILABLE IN THE EXPANDED LIST */
document.addEventListener("change", async event => {
  const checkbox = event.target.closest('input[data-action="check-item"]');
  if (!checkbox || locked) return;

  const item = getItems(checkbox.dataset.listName)
    .find(entry => String(entry.id) === String(checkbox.dataset.itemId));

  if (item) item.checked = checkbox.checked;

  await saveLists();
  renderList();
});

/* ADD A GROCERY ITEM TO THE CURRENTLY ACTIVE LIST */
function addItem(name) {
  if (!auth.currentUser || locked) return;

  getItems().push({
    id: Date.now(),
    name,
    checked: false,
    content: ""
  });

  saveLists().then(renderList);
}
window.addItem = addItem;

function addItems() {
  const input = document.getElementById("textInput");
  const name = input.value.trim();
  if (!name || locked) return;

  addItem(name);
  input.value = "";
}
window.addItems = addItems;

function voiceInput() {
  if (locked) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Voice input is not available in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = event => {
    document.getElementById("textInput").value = event.results[0][0].transcript;
  };

  recognition.onerror = event => console.error("Voice error:", event.error);
}
window.voiceInput = voiceInput;

/* OPEN THE ITEM CONTENT EDITOR */
function openItemEditor(listName, itemId) {
  const item = getItems(listName)
    .find(entry => String(entry.id) === String(itemId));
  if (!item) return;

  activeListName = listName;
  editingItemId = itemId;

  document.getElementById("grocery-editor-title").textContent = item.name;
  document.getElementById("grocery-item-content").value = item.content || "";
  document.getElementById("grocery-item-content").disabled = locked;

  document.getElementById("grocery-home-view").style.display = "none";
  document.getElementById("grocery-editor-view").style.display = "flex";
}

/* SAVE CONTENT TO THE ITEM'S CONTENT FIELD IN FIRESTORE */
async function saveItemContent() {
  if (editingItemId === null) return;

  const item = getItems(activeListName)
    .find(entry => String(entry.id) === String(editingItemId));
  if (!item || locked) return;

  item.content = document.getElementById("grocery-item-content").value;
  await saveLists();
}
window.saveItemContent = saveItemContent;

/* BACK TO HOME; SAVE FIRST */
async function closeItemEditor() {
  await saveItemContent();

  editingItemId = null;
  document.getElementById("grocery-editor-view").style.display = "none";
  document.getElementById("grocery-home-view").style.display = "flex";

  expandedLists.add(activeListName);
  renderList();
}
window.closeItemEditor = closeItemEditor;

/* CREATE A NEW NAMED LIST BY COPYING THE CURRENT LIST */
function saveCurrentList() {
  if (locked) return;

  const container = document.getElementById("saveListContainer");
  container.style.display = "flex";
  document.getElementById("saveListNameInput").focus();
}
window.saveCurrentList = saveCurrentList;

async function confirmSaveList() {
  const input = document.getElementById("saveListNameInput");
  const name = input.value.trim();
  if (!name || locked) return;

  if (groceryLists[name] && !confirm(`Replace the existing "${name}" list?`)) return;

  groceryLists[name] = JSON.parse(JSON.stringify(getItems(activeListName)));
  activeListName = name;
  expandedLists.add(name);

  await saveLists();

  input.value = "";
  document.getElementById("saveListContainer").style.display = "none";
  renderList();
}
window.confirmSaveList = confirmSaveList;

/* LOCK / UNLOCK */
function toggleLock() {
  locked = !locked;

  document.getElementById("lockBtn").textContent = locked ? "🔒 Unlock" : "🔓 Lock";
  document.getElementById("textInput").disabled = locked;
  document.getElementById("grocery-item-content").disabled = locked;

  renderList();
}
window.toggleLock = toggleLock;

/* DATE AND INITIAL EMPTY VIEW */
document.addEventListener("DOMContentLoaded", () => {
  const date = document.getElementById("dateDisplay");
  if (date) date.textContent = new Date().toLocaleDateString();
  renderList();
});

/* RETURN TO THE EXISTING APP LANDING PAGE */
function handleBack() {
  const user = auth.currentUser;

  if (user && user.isFullVersion) {
    window.location.href = "full_version_index.html";
    return;
  }

  window.location.href = "free_version_index.html";
}
window.handleBack = handleBack;
