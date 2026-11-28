/* ingredient_picker.js — tap ingredients on a recipe card, press Add, and they go on the grocery list.
   Shared by the Recipes Menu and Favorite Recipes. Writes to users/{uid}/groceryData/main (same data the
   Grocery List page reads). */
import { auth, db } from './firebase_config.js';
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

function esc(t) {
  return String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* The tip row (sentence + Add button) and the tappable ingredient list, as one block of HTML */
window.ing_picker_html = function (ingredients) {
  const list = (ingredients || []);
  return '<div class="pick-block">' +
    '<div class="pick-row"><span class="pick-tip" data-idle="Press Select, then check the ingredients you would like to add to your grocery list.">Press Select, then check the ingredients you would like to add to your grocery list.</span>' +
    '<span class="pick-btns"><button type="button" class="orange-btn pick-main-btn">Select</button></span></div>' +
    '<ul class="ingredients-list pick-list">' +
    list.map(i => '<li class="pick-ing" role="checkbox" aria-checked="false" tabindex="0">' + esc(i) + '</li>').join('') +
    '</ul></div>';
};

function refresh(block) {
  const btn = block.querySelector('.pick-main-btn');
  btn.disabled = false;
  btn.textContent = block.classList.contains('selecting') ? 'Save' : 'Select';
}

function set_selecting(block, on) {
  block.classList.toggle('selecting', on);
  const tip = block.querySelector('.pick-tip');
  tip.textContent = on ? 'Check the ingredients you want, then press Save.' : tip.getAttribute('data-idle');
  if (!on) block.querySelectorAll('.pick-ing').forEach(li => { li.classList.remove('picked', 'added'); li.setAttribute('aria-checked', 'false'); });
  refresh(block);
}

function toggle(li) {
  const block = li.closest('.pick-block');
  if (!block.classList.contains('selecting')) return;
  const on = li.classList.toggle('picked');
  li.setAttribute('aria-checked', on ? 'true' : 'false');
  refresh(block);
}

async function add_to_grocery(names) {
  if (auth.authStateReady) await auth.authStateReady();
  const user = auth.currentUser;
  if (!user) return { ok: false, msg: 'Please sign in to use your grocery list.' };
  const ref = doc(db, 'users', user.uid, 'groceryData', 'main');
  const snap = await getDoc(ref);
  const data = snap.exists() ? snap.data() : {};
  const lists = data.lists || {};
  const active = data.activeListName || 'Default';
  if (!lists[active]) lists[active] = [];
  let added = 0, had = 0;
  names.forEach((n, k) => {
    if (lists[active].some(i => String(i.name).toLowerCase() === n.toLowerCase())) { had++; return; }
    lists[active].push({ id: Date.now() + k, name: n, checked: false, serving: '', price: '' });
    added++;
  });
  await setDoc(ref, { lists, activeListName: active, menuInfo: data.menuInfo || {} });
  return { ok: true, added, had };
}

document.addEventListener('click', async (e) => {
  const li = e.target.closest('.pick-ing');
  if (li) { toggle(li); return; }
  const btn = e.target.closest('.pick-main-btn');
  if (!btn || btn.disabled) return;
  const block = btn.closest('.pick-block');
  if (!block.classList.contains('selecting')) { set_selecting(block, true); return; }
  const tip = block.querySelector('.pick-tip');
  const picked = Array.from(block.querySelectorAll('.pick-ing.picked'));
  if (!picked.length) { set_selecting(block, false); return; }   // nothing checked: just close the checkboxes
  btn.disabled = true;
  let res;
  try { res = await add_to_grocery(picked.map(li => li.textContent.trim())); }
  catch (err) { console.error(err); res = { ok: false, msg: 'Could not reach your grocery list. Try again.' }; }
  if (res.ok) {
    set_selecting(block, false);
    tip.textContent = res.added
      ? 'Added ' + res.added + (res.added === 1 ? ' item' : ' items') + ' to your grocery list.' + (res.had ? ' ' + res.had + ' already there.' : '')
      : 'Already on your grocery list.';
    setTimeout(() => { if (!block.classList.contains('selecting')) tip.textContent = tip.getAttribute('data-idle'); }, 3500);
  } else {
    tip.textContent = res.msg;
    refresh(block);
  }
});

document.addEventListener('keydown', (e) => {
  if ((e.key === ' ' || e.key === 'Enter') && e.target.classList && e.target.classList.contains('pick-ing')) {
    e.preventDefault(); toggle(e.target);
  }
});
