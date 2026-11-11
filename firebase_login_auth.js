// ================================================================
//  firebase_login_auth.js — Auth & Paywall System
// ================================================================

import { auth, db, onAuthStateChanged } from './firebase_config.js';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc, setDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ── State ──────────────────────────────────────────────────────
let currentUser       = null;
let cookbook_unlocked = false;
let preview_used      = false;

// ── Card switcher (shared with index_data.js via window) ───────
// Any card that should be part of the same-page switching system
// must have its id listed here.
const ALL_CARD_IDS = [
  'sign-in-out',
  'contfor-form'
];

window.showOnlyCard = function(idToShow) {
  ALL_CARD_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', id !== idToShow);
  });
};

// Show only the sign-in card by default the instant this runs.
window.showOnlyCard('sign-in-out');

// Delegated click handler: any link/button with data-show-card="id"
// switches to that card, no matter where it's added in the future.
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-show-card]');
  if (!trigger) return;
  e.preventDefault();
  window.showOnlyCard(trigger.getAttribute('data-show-card'));
});

// ── Update nav bar ─────────────────────────────────────────────
export async function updateNavBar(user) {
  const navEmail   = document.getElementById('nav-user-email');
  const signOutBtn = document.getElementById('sign-out-btn');
  if (!navEmail || !signOutBtn) return;

  let displayName = 'Guest';

  if (user) {
    try {
      const snap = await getDoc(doc(db, 'users', user.uid));
      if (snap.exists() && snap.data().username) displayName = snap.data().username;
      else displayName = user.email;
    } catch (e) {
      console.error('Error fetching user name:', e);
      displayName = user.email;
    }
  }

  navEmail.textContent     = `Welcome, ${displayName}`;
  signOutBtn.style.display = user ? 'inline-block' : 'none';
}

// ── Show post login options ────────────────────────────────────
export async function showPostLoginOptions(user) {
  const postLogin = document.getElementById('post-login-options');
  const msg       = document.getElementById('login-message');
  if (!postLogin || !msg) return;

  let displayName = 'Guest';
  if (user) {
    try {
      const snap = await getDoc(doc(db, 'users', user.uid));
      if (snap.exists() && snap.data().username) displayName = snap.data().username;
      else displayName = user.email;
    } catch (e) {
      displayName = user.email;
    }
  }

  msg.textContent         = user ? `You are signed in as ${displayName}.` : '';
  postLogin.style.display = user ? 'block' : 'none';
}

// ── Check Firestore for paid status ───────────────────────────
async function check_paid_status(uid) {
  try {
    const snap = await getDoc(doc(db, 'users', uid));
    cookbook_unlocked = snap.exists() && snap.data().paid === true;
  } catch (e) {
    cookbook_unlocked = false;
  }
}

// ── Unlock grocery menu for paid subscribers ──────────────────
function unlockGroceryMenu() {
  if (!cookbook_unlocked) return;
  const overlay = document.getElementById('groceryMenuPaywall');
  if (overlay) overlay.classList.add('hidden');
}

// ── Page destinations ──────────────────────────────────────────
const LOGIN_PAGE = 'index.html';
const FREE_PAGE  = 'free_version_index.html';
const FULL_PAGE  = 'full_version_index.html';

// The sign-in page is identified by the presence of the sign-in
// form itself, not by filename — this keeps working even if the
// page gets renamed again later.
const on_login_page = !!document.getElementById('sign-in-form');

// ── Create the Firestore user doc on first Google sign-in ─────
async function ensureUserDoc(user) {
  try {
    const ref  = doc(db, 'users', user.uid);
    const snap = await getDoc(ref);
    if (snap.exists()) return;
    await setDoc(ref, {
      username: user.displayName || (user.email ? user.email.split('@')[0] : 'User'),
      email:    user.email || '',
      paid:     false,
      created:  new Date().toISOString()
    });
  } catch (e) {
    console.error('Error creating user doc:', e);
  }
}

// ── Auth state listener ────────────────────────────────────────
onAuthStateChanged(auth, async (user) => {
  currentUser = user;

  if (user) await ensureUserDoc(user);
  await updateNavBar(user);

  if (user) {
    await check_paid_status(user.uid);
    unlockGroceryMenu();
    user.isFullVersion = cookbook_unlocked;
    await showPostLoginOptions(user);
    prefillContactForm(user);

    // ── Update home button destination ────────────────────────
    const homeLink = document.getElementById('homepage-redirect-link');
    if (homeLink) {
      homeLink.href = cookbook_unlocked ? FULL_PAGE : FREE_PAGE;
    }

    // ── Auto-redirect if already signed in and on sign-in page ─
    if (on_login_page) {
      window.location.href = cookbook_unlocked ? FULL_PAGE : FREE_PAGE;
      return;
    }

} else {
    // ── Not signed in — send to sign-in page if on a protected page ──
    const on_public_page = on_login_page || window.location.pathname.includes('account_type');
    if (!on_public_page) {
      window.location.href = LOGIN_PAGE;
    }
  }
});

// ── Google Sign In ─────────────────────────────────────────────
// Popup first (works best in the installed PWA); falls back to
// redirect if the popup is blocked. The auth listener above does
// the user-doc creation and the page redirect after sign-in.
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export async function signInWithGoogle(showError) {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (e) {
    if (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment') {
      try { await signInWithRedirect(auth, googleProvider); return; } catch (e2) { e = e2; }
    }
    if (e.code === 'auth/popup-closed-by-user' || e.code === 'auth/cancelled-popup-request') return;
    if (e.code === 'auth/unauthorized-domain') {
      if (showError) showError('This site is not authorized for Google sign-in yet.');
    } else {
      if (showError) showError('Google sign-in failed. Please try again.');
    }
    console.error(e);
  }
}

// Finish a redirect-style sign-in if one was started
getRedirectResult(auth).catch(e => console.error('Redirect sign-in error:', e));

// ── Sign Out ───────────────────────────────────────────────────
export async function signOutUser() {
  try {
    await signOut(auth);
    window.location.href = 'index.html';
  } catch (e) {
    console.error(e);
  }
}
window.signOutUser = signOutUser;

// ── Wire up all buttons on page load ──────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  function showSignInError(msg) {
    const el = document.getElementById('sign_in_error');
    if (el) { el.textContent = msg; el.style.display = 'block'; }
  }

  // ── GOOGLE SIGN IN ───────────────────────────────────────
  const googleBtn = document.getElementById('google-sign-in-btn');
  if (googleBtn) googleBtn.addEventListener('click', () => signInWithGoogle(showSignInError));

  // ── SIGN OUT ──────────────────────────────────────────────
  const signOutBtn = document.getElementById('sign-out-btn');
  if (signOutBtn) signOutBtn.addEventListener('click', () => signOutUser());

  // ── CONTACT FORM ──────────────────────────────────────────
  const contactForm = document.getElementById('contact_form');
  if (contactForm) contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!currentUser) { alert('You must be logged in to submit a contact form.'); return; }

    const title    = document.getElementById('contact_title')?.value.trim();
    const username = document.getElementById('contact_username')?.value.trim();
    const email    = document.getElementById('contact_email')?.value.trim();
    const message  = document.getElementById('contact_message')?.value.trim();

    if (!title || !username || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'contact_forms'), {
        uid: currentUser.uid,
        title, username, email, message,
        submitted: new Date().toISOString()
      });
      alert('Your message has been submitted!');
      contactForm.reset();
      prefillContactForm(currentUser);
    } catch (e) {
      console.error('Error submitting contact form:', e);
      alert('Failed to submit your message.');
    }
  });

});

// ── Prefill contact form ───────────────────────────────────────
async function prefillContactForm(user) {
  if (!user) return;
  try {
    const snap = await getDoc(doc(db, 'users', user.uid));
    if (!snap.exists()) return;
    const data = snap.data();
    const usernameInput = document.getElementById('contact_username');
    const emailInput    = document.getElementById('contact_email');
    if (usernameInput) usernameInput.value = data.username || '';
    if (emailInput)    emailInput.value    = data.email    || '';
  } catch (e) {
    console.error('Error pre-filling contact form:', e);
  }
}

// ── Recipe paywall check ───────────────────────────────────────
window.check_and_open_recipe = function(recipe, icon, cat_name) {
  if (cookbook_unlocked) {
    open_recipe_modal(recipe, icon, cat_name);
    return;
  }
  if (!preview_used) {
    preview_used = true;
    open_recipe_modal(recipe, icon, cat_name);
    setTimeout(show_preview_banner, 600);
    return;
  }
  show_paywall_modal();
};

function show_preview_banner() { /*... keep as before ...*/ }
window.show_paywall_modal  = function() { /*... keep as before ...*/ };
window.close_paywall_modal = function() { /*... keep as before ...*/ };

/* =========================================================
   GLOBAL BRIDGE (MENU ACCESS)
   ========================================================= */
window.cookbook_unlocked = cookbook_unlocked;
