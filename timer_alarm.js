/* timer_alarm.js — digital timer + alarm clock. Everything is stored on this device. */
(function () {
  var TIMER_KEY = 'mealplanner_timer';      // { end: ms timestamp } while running, { left: ms } while paused
  var ALARM_KEY = 'mealplanner_alarms';     // [ { id, time:'HH:MM', label, on } ]
  var $ = function (id) { return document.getElementById(id); };
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function load(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  // Only the full version has this tool
  try { if (localStorage.getItem('mealplanner_account') === 'free') { location.replace('meal_planner_free.html'); return; } } catch (e) {}

  $('dateDisplay').textContent = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  window.showHelp = function () { $('helpOverlay').style.display = 'flex'; };
  window.hideHelp = function () { $('helpOverlay').style.display = 'none'; };

  /* ── sound, vibration, screen wake ── */
  var ac = null, ringTimer = null, wake = null;
  function unlock() {
    try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); if (ac.state === 'suspended') ac.resume(); } catch (e) {}
  }
  function beep() {
    if (!ac) return;
    var t = ac.currentTime;
    [0, 0.25, 0.5].forEach(function (d) {
      var o = ac.createOscillator(), g = ac.createGain();
      o.type = 'square'; o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, t + d); g.gain.exponentialRampToValueAtTime(0.35, t + d + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.18);
      o.connect(g); g.connect(ac.destination); o.start(t + d); o.stop(t + d + 0.2);
    });
    if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 200]);
  }
  function wakeOn() { try { if (navigator.wakeLock && !wake) navigator.wakeLock.request('screen').then(function (w) { wake = w; w.addEventListener('release', function () { wake = null; }); }).catch(function () {}); } catch (e) {} }
  function wakeOff() { try { if (wake) { wake.release(); wake = null; } } catch (e) {} }
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') keepAwake(); });
  function keepAwake() {
    var t = load(TIMER_KEY, null), alarms = load(ALARM_KEY, []).some(function (a) { return a.on; });
    if ((t && t.end) || alarms) wakeOn(); else wakeOff();
  }

  /* ── ringing ── */
  var ringing = null;   // { kind:'timer'|'alarm', id }
  function ring(kind, title, sub, id) {
    if (ringing) return;
    ringing = { kind: kind, id: id };
    $('ringTitle').textContent = title; $('ringSub').textContent = sub || '';
    $('ringOverlay').style.display = 'flex';
    $('ringSnooze').style.display = '';
    unlock(); beep(); ringTimer = setInterval(beep, 1500);
  }
  function stopRing() {
    clearInterval(ringTimer); ringTimer = null; ringing = null;
    $('ringOverlay').style.display = 'none';
    if (navigator.vibrate) navigator.vibrate(0);
    $('timerDisplay').classList.remove('done');
  }
  $('ringStop').addEventListener('click', stopRing);
  $('ringSnooze').addEventListener('click', function () {
    var r = ringing; stopRing();
    if (!r) return;
    var end = Date.now() + 5 * 60 * 1000;
    save(TIMER_KEY, { end: end, snooze: true });
    tick();
  });

  /* ── timer ── */
  function fmt(ms) {
    var s = Math.max(0, Math.ceil(ms / 1000)), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60);
    return pad(h) + ':' + pad(m) + ':' + pad(s % 60);
  }
  function inputsMs() {
    var h = +$('tHours').value || 0, m = +$('tMins').value || 0, s = +$('tSecs').value || 0;
    return ((Math.min(h, 99) * 60 + Math.min(m, 59)) * 60 + Math.min(s, 59)) * 1000;
  }
  function setInputs(ms) {
    var s = Math.round(ms / 1000);
    $('tHours').value = Math.floor(s / 3600); $('tMins').value = Math.floor(s % 3600 / 60); $('tSecs').value = s % 60;
  }
  function timerUI() {
    var t = load(TIMER_KEY, null);
    var running = t && t.end, paused = t && t.left != null;
    $('timerSet').classList.toggle('locked', !!(running || paused));
    $('presets').classList.toggle('locked', !!(running || paused));
    $('scaleRow').classList.toggle('locked', !!(running || paused));
    $('timerStart').textContent = running ? 'Pause' : (paused ? 'Resume' : 'Start');
  }
  function tick() {
    var t = load(TIMER_KEY, null), d = new Date();
    $('clockDisplay').textContent = (function () { var h = d.getHours() % 12 || 12; return pad(h) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + (d.getHours() < 12 ? ' AM' : ' PM'); })();
    if (t && t.end) {
      var left = t.end - Date.now();
      if (left <= 0) {
        localStorage.removeItem(TIMER_KEY);
        $('timerDisplay').textContent = '00:00:00'; $('timerDisplay').classList.add('done');
        timerUI(); ring('timer', t.snooze ? 'Snooze over' : "Time's up", 'Timer finished');
        setInputs(inputsMs() || 60 * 60000);
      } else { $('timerDisplay').textContent = fmt(left); }
    } else if (t && t.left != null) {
      $('timerDisplay').textContent = fmt(t.left);
    } else if (!ringing) {
      $('timerDisplay').textContent = fmt(inputsMs());
    }
    checkAlarms(d);
  }
  $('timerStart').addEventListener('click', function () {
    unlock();
    var t = load(TIMER_KEY, null);
    if (t && t.end) { save(TIMER_KEY, { left: t.end - Date.now() }); }                       // pause
    else if (t && t.left != null) { save(TIMER_KEY, { end: Date.now() + t.left }); }          // resume
    else { var ms = inputsMs(); if (!ms) return; save(TIMER_KEY, { end: Date.now() + ms }); } // start
    timerUI(); keepAwake(); tick();
  });
  $('timerReset').addEventListener('click', function () {
    localStorage.removeItem(TIMER_KEY); stopRing(); timerUI(); keepAwake(); tick();
  });
  ['tHours', 'tMins', 'tSecs'].forEach(function (id) { $(id).addEventListener('input', tick); });
  function scale(f) {
    if (load(TIMER_KEY, null)) return;
    var ms = inputsMs() || 60000;
    ms = Math.round(ms * f / 1000) * 1000;
    ms = Math.max(1000, Math.min(ms, (99 * 3600 + 59 * 60 + 59) * 1000));
    setInputs(ms); tick();
  }
  $('timerUp').addEventListener('click', function () { scale(2); });
  $('timerDown').addEventListener('click', function () { scale(0.5); });
  $('presets').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b || load(TIMER_KEY, null)) return;
    setInputs(+b.getAttribute('data-m') * 60000); tick();
  });

  /* ── alarms ── */
  var alarms = load(ALARM_KEY, []);
  var firedKey = '';
  function t12(hhmm) { var p = hhmm.split(':'), h = +p[0]; return pad(h % 12 || 12) + ':' + p[1] + (h < 12 ? ' AM' : ' PM'); }
  function renderAlarms() {
    var ul = $('alarmList');
    if (!alarms.length) { ul.innerHTML = '<li class="empty" style="border:0;padding-top:0;">No alarms yet.</li>'; return; }
    ul.innerHTML = alarms.slice().sort(function (a, b) { return a.time < b.time ? -1 : 1; }).map(function (a) {
      return '<li class="' + (a.on ? '' : 'off') + '"><span class="alarm-time">' + t12(a.time) + '</span><span class="alarm-label">' +
        (a.label ? a.label.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }) : '') + '</span>' +
        '<button type="button" class="switch' + (a.on ? ' on' : '') + '" data-act="tog" data-id="' + a.id + '" role="switch" aria-checked="' + a.on + '" aria-label="Alarm on or off"></button>' +
        '<button type="button" class="del" data-act="del" data-id="' + a.id + '" aria-label="Delete alarm">✕</button></li>';
    }).join('');
  }
  function checkAlarms(d) {
    var now = pad(d.getHours()) + ':' + pad(d.getMinutes());
    if (d.getSeconds() > 5) return;                      // ring in the first seconds of the minute only
    var key = d.toDateString() + now;
    if (key === firedKey) return;
    var hit = alarms.filter(function (a) { return a.on && a.time === now; })[0];
    if (hit) { firedKey = key; ring('alarm', hit.label || 'Alarm', t12(hit.time), hit.id); }
  }
  $('alarmAdd').addEventListener('click', function () {
    unlock();
    var v = $('alarmTime').value; if (!v) return;
    alarms.push({ id: Date.now(), time: v, label: $('alarmLabel').value.trim(), on: true });
    save(ALARM_KEY, alarms); $('alarmLabel').value = ''; renderAlarms(); keepAwake();
  });
  $('alarmList').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    var id = +b.getAttribute('data-id');
    if (b.getAttribute('data-act') === 'del') alarms = alarms.filter(function (a) { return a.id !== id; });
    else alarms.forEach(function (a) { if (a.id === id) a.on = !a.on; });
    save(ALARM_KEY, alarms); renderAlarms(); keepAwake();
  });

  /* ── go ── */
  var t0 = load(TIMER_KEY, null);
  if (!t0) setInputs(60 * 60000);
  renderAlarms(); timerUI(); keepAwake(); tick();
  setInterval(tick, 250);
})();
