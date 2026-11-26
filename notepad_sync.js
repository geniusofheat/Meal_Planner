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

  notes = merged;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(notes)); } catch (err) { console.error(err); }
  redraw_list();
  await window.saveNotesToCloud(notes);
  window.subscribeToNotes(on_cloud_notes);
});
