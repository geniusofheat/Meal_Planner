/* ingredient_picker.js — tap ingredients on a recipe card, press Add, and they go on the grocery list.
   Shared by the Recipes Menu and Favorite Recipes. Writes to users/{uid}/groceryData/main (same data the
   Grocery List page reads). */
import { auth, db } from './firebase_config.js';
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

function esc(t) {
  return String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* "1 can black beans, drained" -> "black bean": compare ingredients by what they are, not the amount */
const UNITS = 'cups?|c|tbsp|tablespoons?|tsp|teaspoons?|oz|ounces?|lbs?|pounds?|g|grams?|kg|ml|l|liters?|cans?|cloves?|slices?|pinch(?:es)?|dash(?:es)?|packages?|pkgs?|bunch(?:es)?|large|medium|small|whole|fresh|ripe|about';
function key(name) {
  let n = String(name).toLowerCase().split(',')[0].replace(/\(.*?\)/g, ' ');
  n = n.replace(/[\d\u00bc-\u00be\u2150-\u215e\/.\-]+/g, ' ');
  n = n.replace(new RegExp('\\b(' + UNITS + ')\\b', 'g'), ' ').replace(/\bof\b/g, ' ');
  return n.split(/\s+/).filter(Boolean).map(w => w.replace(/(es|s)$/, '')).join(' ');
}

/* Pop-up message */
function popup(lines) {
  const old = document.getElementById('pickPopup'); if (old) old.remove();
  const o = document.createElement('div');
  o.id = 'pickPopup'; o.className = 'pick-popup';
  o.innerHTML = '<div class="pick-popup-box" role="alertdialog"><div class="pick-popup-text">' +
    lines.map(l => '<p>' + esc(l) + '</p>').join('') + '</div><button type="button" class="orange-btn pick-popup-ok">OK</button></div>';
  o.addEventListener('click', ev => { if (ev.target === o || ev.target.closest('.pick-popup-ok')) o.remove(); });
  document.body.appendChild(o);
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
  let added = 0; const dups = [];
  names.forEach((n, k) => {
    const kn = key(n);
    if (lists[active].some(i => key(i.name) === kn)) { dups.push(n); return; }
    lists[active].push({ id: Date.now() + k, name: n, checked: false, serving: '', price: '' });
    added++;
  });
  await setDoc(ref, { lists, activeListName: active, menuInfo: data.menuInfo || {} });
  return { ok: true, added, dups };
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
    if (res.added) {
      tip.textContent = 'Added ' + res.added + (res.added === 1 ? ' item' : ' items') + ' to your grocery list.';
      setTimeout(() => { if (!block.classList.contains('selecting')) tip.textContent = tip.getAttribute('data-idle'); }, 3500);
    }
    if (res.dups.length) {
      popup(res.dups.length === 1
        ? ['This item is already in the grocery list:', res.dups[0]]
        : ['These items are already in the grocery list:'].concat(res.dups));
    }
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
