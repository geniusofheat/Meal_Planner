import { auth, db } from './firebase_config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
  if (!user) return;

  const snap = await getDoc(doc(db, 'users', user.uid));
  const paid = snap.exists() && snap.data().paid === true;

  if (paid) {
    await navigator.serviceWorker.ready;
window.location.replace('meal_planner_full.html');
  } else {
    await navigator.serviceWorker.ready;
window.location.replace('meal_planner_free.html');
  }
});

// § PREVIEW MODAL

function openPreview(imgSrc) {
  const modal = document.getElementById('preview-modal');
  const img = document.getElementById('preview-img');
  img.src = imgSrc;
  img.alt = 'Tool preview';
  modal.classList.add('open');
}

function closePreview() {
  const modal = document.getElementById('preview-modal');
  modal.classList.remove('open');
  document.getElementById('preview-img').src = '';
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('preview-close-btn').addEventListener('click', closePreview);

  // Close when clicking outside the box
  document.getElementById('preview-modal').addEventListener('click', function (e) {
    if (e.target === this) closePreview();
  });

  // Wire up all tool title links
  document.querySelectorAll('[data-preview]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openPreview(this.dataset.preview);
    });
  });
});
