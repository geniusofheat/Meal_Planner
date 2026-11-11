// ================================================================
// index_data.js — Account Type Selection UI Only
// Auth handled by firebase_login_auth.js
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);

  const card = params.get('card');
  const plan = params.get('plan');

  // ── ROUTING LOGIC — only runs if the URL requests a specific card
  if (card === 'create-account') {
    if (plan === 'full') {
      window.showOnlyCard('full_version_card');
    } else {
      // default to free if plan missing/invalid
      window.showOnlyCard('free_version_card');
    }
  }
  // if no card param, firebase_login_auth.js has already defaulted to sign-in-out
});

// ── Show/Hide Password Toggle ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('show-password-toggle');

  if (toggle) {
    toggle.addEventListener('change', () => {
      const pwd = document.getElementById('auth_password');
      if (pwd) pwd.type = toggle.checked ? 'text' : 'password';
    });
  }
});
