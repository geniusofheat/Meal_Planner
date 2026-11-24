// Welcome page: signed-in users go straight to their own page.
import { auth, db } from './firebase_config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
  if (!user) return;
  try {
    const snap = await getDoc(doc(db, 'users', user.uid));
    const paid = snap.exists() && snap.data().paid === true;
    window.location.replace(paid ? 'meal_planner_full.html' : 'meal_planner_free.html');
  } catch (e) {
    console.error(e);
  }
});
