// notepad_sync.js — Notepad tool: keeps the notes in Firestore under the signed-in Meal Planner
// account (users/{uid}/notepad/main), so every device signed in to the same account sees the
// same notes, and each person's notes stay separate. Full version only.
import { auth, db, onAuthStateChanged } from './firebase_config.js';
import { doc, getDoc, setDoc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const LOGIN_PAGE = 'login.html';
const FREE_PAGE  = 'meal_planner_free.html';

let notes_ref = null;
let unsubscribe = null;

// The engine calls these two after every change / on start.
window.saveNotesToCloud = async function (notesData) {
  if (!notes_ref) return;
  try {
    await setDoc(notes_ref, { notes: notesData, updatedAt: serverTimestamp() });
  } catch (err) { console.error('Notepad: could not save to the cloud:', err); }
};

window.subscribeToNotes = function (onNotesChanged) {
  if (!notes_ref) { window.__notepad_on_cloud = onNotesChanged; return; }
  if (unsubscribe) unsubscribe();
  unsubscribe = onSnapshot(notes_ref, (snap) => {
    if (snap.exists()) onNotesChanged(snap.data().notes);
  }, (err) => console.error('Notepad: cloud listener error:', err));
};

// Only signed-in members with the full version may be here.
async function is_full_member(user) {
  try {
    const snap = await getDoc(doc(db, 'users', user.uid));
    return snap.exists() && snap.data().paid === true;
  } catch (err) {
    // Offline: trust what this device learned the last time it was online.
    return localStorage.getItem('mealplanner_account') === 'full';
  }
}

// ---- ONE-TIME IMPORT of the notes the stand-alone Notepad app saved in its own Firebase project ----
// The old Notepad app and this app live on the same web address, so this device still holds the old
// sync code. The old cloud copy is only read, never changed or deleted.
const OLD_CONFIG = {
  apiKey: "AIzaSyCGvpWKfkSQapFEwx6lMr6kAMFQ7Ir-sNQ",
  authDomain: "notepad-fba.firebaseapp.com",
  projectId: "notepad-fba",
  storageBucket: "notepad-fba.firebasestorage.app",
  messagingSenderId: "570988410605",
  appId: "1:570988410605:web:a70688966f8c6035cc3ee4"
};
const OLD_BASE = 'https://www.gstatic.com/firebasejs/10.13.0/';
const OLD_IMPORT_KEY = 'notepad_old_import_done';

function load_script(src) {
  return new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.src = src; el.onload = resolve; el.onerror = reject;
    document.head.appendChild(el);
  });
}

async function read_old_cloud_notes() {
  const code = localStorage.getItem('notepad_sync_code');
  if (!code) return null;
  await load_script(OLD_BASE + 'firebase-app-compat.js');
  await load_script(OLD_BASE + 'firebase-auth-compat.js');
  await load_script(OLD_BASE + 'firebase-firestore-compat.js');
  const old_app = window.firebase.apps.length ? window.firebase.app() : window.firebase.initializeApp(OLD_CONFIG);
  const old_auth = old_app.auth();
  if (!old_auth.currentUser) await old_auth.signInAnonymously();
  const snap = await old_app.firestore().collection('notepads').doc(code).get();
  return snap.exists ? snap.data().notes : null;
}

onAuthStateChanged(auth, async (user) => {
  if (!user) { window.location.replace(LOGIN_PAGE); return; }
  if (!(await is_full_member(user))) { window.location.replace(FREE_PAGE); return; }

  notes_ref = doc(db, 'users', user.uid, 'notepad', 'main');

  // Bring this device's notes and the account's notes together, then keep them in step.
  let merged = notes;
  try {
    const snap = await getDoc(notes_ref);
    if (snap.exists()) merged = merge_cloud_notes(merged, snap.data().notes);
  } catch (err) { console.error('Notepad: could not read the account notes:', err); }

  // Bring in the old Notepad app's cloud notes once, so nothing that was already written is lost.
  if (localStorage.getItem(OLD_IMPORT_KEY + '_' + user.uid) !== '1') {
    try {
      const old_notes = await read_old_cloud_notes();
      if (old_notes) merged = merge_cloud_notes(merged, old_notes);
      localStorage.setItem(OLD_IMPORT_KEY + '_' + user.uid, '1');
    } catch (err) { console.error('Notepad: could not read the old Notepad notes (will try again next time):', err); }
  }

  notes = merged;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(notes)); } catch (err) { console.error(err); }
  redraw_list();
  await window.saveNotesToCloud(notes);
  window.subscribeToNotes(on_cloud_notes);
});
