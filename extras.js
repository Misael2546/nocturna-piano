/* ============================================================
   EXTRAS 3.4 · Metrónomo con cuenta, manos animadas,
   reconocimiento por micrófono y motor de piezas (melodía + acordes)
   Se carga después de app.js y se engancha a sus funciones.
   ============================================================ */
(function () {
  'use strict';
  if (typeof studioInit !== 'function' || !document.getElementById('studio-learnbar')) return;
  const $ = id => document.getElementById(id);
  const bar = $('studio-learnbar'), stage = document.querySelector('.falling-stage');

  /* ---------- 1. METRÓNOMO + CUENTA REGRESIVA ---------- */
  let metroOn = false, countTimers = [], clickLast = -1, clickTimer = 0, countPending = false, counting = false;
  const mkBtn = (id, text, title) => { const b = document.createElement('button'); b.type = 'button'; b.id = id; b.textContent = text; b.title = title; b.setAttribute('aria-pressed', 'false'); bar.insertBefore(b, $('studio-score-btn')); return b; };
  const metroBtn = mkBtn('studio-metro-btn', '🥁 Metrónomo', 'Cuenta regresiva y clic al tempo');
  const handsBtn = mkBtn('studio-hands-btn', '🖐 Manos', 'Mostrar manos animadas sobre el teclado');
  const micBtn = mkBtn('studio-mic-btn', '🎤 Micrófono', 'Tocá tu piano real y la app te escucha');
  const overlay = document.createElement('div'); overlay.id = 'count-overlay'; overlay.hidden = true; stage.append(overlay);

  function click(accent, when) {
    const c = getAudio(), o = c.createOscillator(), g = c.createGain(), t = when || c.currentTime;
    o.frequency.value = accent ? 1100 : 760;
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.22, t + .005); g.gain.exponentialRampToValueAtTime(.0001, t + .07);
    o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + .08);
  }
  function cancelCount() { countTimers.forEach(clearTimeout); countTimers = []; overlay.hidden = true; counting = false; }
  function beatSec() { return 60 / ((studioCurrent?.bpm || 80) * studioSpeed); }
  function countIn(done) {
    const n = studioCurrent?.meter || 4, bs = beatSec(), c = getAudio(), t0 = c.currentTime + .08;
    counting = true; overlay.hidden = false;
    for (let i = 0; i < n; i++) {
      click(i === 0, t0 + i * bs);
      countTimers.push(setTimeout(() => { overlay.textContent = String(i + 1); overlay.classList.remove('pop'); void overlay.offsetWidth; overlay.classList.add('pop'); }, 80 + i * bs * 1000));
    }
    countTimers.push(setTimeout(() => { cancelCount(); done(); }, 80 + n * bs * 1000));
  }
  const _begin = studioBegin, _clock = studioStartClock, _pause = studioPause, _reset = studioReset;
  studioBegin = async function () {
    if (counting) { cancelCount(); se('engine-play').disabled = false; return; }
    countPending = metroOn; try { await _begin.apply(this, arguments); } finally { countPending = false; }
  };
  studioStartClock = function () {
    if (countPending && !studioBlocked && studioCurrent) {
      countPending = false;
      se('engine-status').textContent = 'Cuenta regresiva… preparate.';
      countIn(() => { _clock(); startClick(); });
      return;
    }
    _clock(); if (metroOn) startClick();
  };
  studioPause = function () { cancelCount(); stopClick(); return _pause.apply(this, arguments); };
  studioReset = function () { cancelCount(); stopClick(); clickLast = -1; return _reset.apply(this, arguments); };
  function startClick() {
    stopClick(); if (!metroOn) return;
    clickLast = -1;
    clickTimer = setInterval(() => {
      if (!studioRunning || studioBlocked) return;
      const n = studioCurrent?.meter || 4, beat = Math.floor(studioSongTime() / (60 / (studioCurrent.bpm || 80)) + 1e-6);
      if (beat !== clickLast) { clickLast = beat; click(beat % n === 0); }
    }, 20);
  }
  function stopClick() { clearInterval(clickTimer); clickTimer = 0; }
  metroBtn.addEventListener('click', () => {
    metroOn = !metroOn; metroBtn.setAttribute('aria-pressed', metroOn); metroBtn.classList.toggle('on', metroOn);
    se('engine-feedback').textContent = metroOn ? 'Metrónomo activado: al tocar ▶ hay una cuenta de un compás y el clic acompaña el tempo.' : 'Metrónomo desactivado.';
    if (metroOn && studioRunning) startClick(); else stopClick();
  });

  /* ---------- 2. MANOS ANIMADAS SOBRE EL TECLADO ---------- */
  let handsOn = true;
  const kbWrap = $('liveKeyboard').parentElement; kbWrap.style.position = 'relative';
  const layer = document.createElement('div'); layer.id = 'hands-layer'; kbWrap.append(layer);
  const handSvg = side => `<svg viewBox="0 0 100 90" class="hand ${side}" aria-hidden="true"><g class="fingers">${[0, 1, 2, 3, 4].map(i => {
    const x = side === 'right' ? 8 + i * 17 : 92 - i * 17, h = [34, 50, 56, 50, 40][i], y = 52 - h + 18;
    return `<rect class="fg f${i + 1}" x="${x - 7}" y="${y}" width="14" height="${h}" rx="7"/>`;
  }).join('')}</g><path class="palm" d="M6 60 Q50 44 94 60 L88 88 Q50 94 12 88Z"/></svg>`;
  layer.innerHTML = handSvg('left') + handSvg('right');
  const handEl = { left: layer.children[0], right: layer.children[1] };
  const slotX = (side, f) => side === 'right' ? 8 + (f - 1) * 17 : 92 - (f - 1) * 17;
  function placeHands() {
    layer.hidden = !handsOn;
    if (!handsOn || !studioCurrent) return;
    const kb = $('liveKeyboard'), kr = kb.getBoundingClientRect(), wr = kbWrap.getBoundingClientRect();
    if (!kr.width) return;
    layer.style.top = (kr.top - wr.top - 6) + 'px'; layer.style.height = (kr.height * .62) + 'px';
    const ev = studioCurrent.events[Math.min(studioStep, studioCurrent.events.length - 1)];
    const wk = kr.width / ([...studioKeyEls.keys()].filter(m => ![1, 3, 6, 8, 10].includes(m % 12)).length);
    ['left', 'right'].forEach(side => {
      const el = handEl[side], notes = (ev?.notes || []).filter(n => n.hand === side);
      const w = wk * 5.6; el.style.width = w + 'px';
      const dim = (studioHandMode === 'right' && side === 'left') || (studioHandMode === 'left' && side === 'right');
      el.classList.toggle('dim', dim); el.classList.toggle('idle', !notes.length);
      el.querySelectorAll('.fg').forEach(f => f.classList.remove('down'));
      if (!notes.length) { if (!el.dataset.x) el.style.transform = `translateX(${side === 'left' ? kr.width * .3 : kr.width * .6}px)`; return; }
      let off = 0;
      notes.forEach((n, i) => {
        const f = n.finger || (side === 'right' ? i + 1 : 5 - i), key = studioKeyEls.get(n.midi); if (!key) return;
        const kx = key.getBoundingClientRect().left - kr.left + key.getBoundingClientRect().width / 2;
        off += kx - slotX(side, f) / 100 * w; el.querySelector('.f' + f)?.classList.add('down');
      });
      off = Math.max(-w * .1, Math.min(kr.width - w * .9, off / notes.length));
      el.dataset.x = 1; el.style.transform = `translateX(${off}px)`;
    });
  }
  const _paint = studioPaintKeys;
  studioPaintKeys = function () { _paint.apply(this, arguments); if (handsOn) requestAnimationFrame(placeHands); };
  handsBtn.setAttribute('aria-pressed', 'true'); handsBtn.classList.add('on');
  handsBtn.addEventListener('click', () => { handsOn = !handsOn; handsBtn.setAttribute('aria-pressed', handsOn); handsBtn.classList.toggle('on', handsOn); placeHands(); });
  window.addEventListener('resize', () => setTimeout(placeHands, 80));
  setTimeout(placeHands, 300);

  /* ---------- 3. RECONOCIMIENTO POR MICRÓFONO ---------- */
  let micStream = null, micAn = null, micBuf = null, micTimer = 0, micHist = new Map(), micMute = false;
  const _play = playMidi;
  playMidi = function () { if (micMute && !studioDemo) return; return _play.apply(this, arguments); };
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);
  function goertzel(buf, sr, f) {
    const w = 2 * Math.PI * f / sr, co = 2 * Math.cos(w); let s1 = 0, s2 = 0;
    for (let i = 0; i < buf.length; i++) { const win = .5 - .5 * Math.cos(2 * Math.PI * i / (buf.length - 1)); const s = buf[i] * win + co * s1 - s2; s2 = s1; s1 = s; }
    return Math.sqrt(Math.max(0, s1 * s1 + s2 * s2 - co * s1 * s2)) / buf.length;
  }
  function micTick() {
    if (!studioBlocked || !studioExpected.size) { micHist.clear(); return; }
    micAn.getFloatTimeDomainData(micBuf);
    const sr = audioCtx.sampleRate;
    for (const m of studioExpected) {
      if (studioPressed.has(m)) continue;
      const f = hz(m), mag = goertzel(micBuf, sr, f);
      const near = (goertzel(micBuf, sr, f * Math.pow(2, 1.5 / 12)) + goertzel(micBuf, sr, f / Math.pow(2, 1.5 / 12))) / 2;
      const sub = m - 12 >= 21 ? goertzel(micBuf, sr, hz(m - 12)) : 0;
      const h = micHist.get(m) || []; h.push(mag); if (h.length > 5) h.shift(); micHist.set(m, h);
      const loud = mag > 0.0012 && mag > near * 2.6 && mag > sub * .7;
      const onset = h.length >= 3 && mag > Math.min(...h.slice(0, -1)) * 1.6;
      if (loud && onset) {
        micMute = true; studioNoteOn(m, 'mic'); setTimeout(() => { studioNoteOff(m); }, 220); micHist.delete(m);
        se('engine-key-hint').textContent = `${noteName(m)} · micrófono`;
      }
    }
  }
  async function micStart() {
    if (!navigator.mediaDevices?.getUserMedia) { se('engine-feedback').textContent = 'Este navegador no permite usar el micrófono (hace falta HTTPS).'; return; }
    try {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
    } catch (e) { se('engine-feedback').textContent = 'No pude acceder al micrófono. Revisá el permiso del sitio en tu navegador.'; return; }
    const c = getAudio(); micAn = c.createAnalyser(); micAn.fftSize = 16384; micBuf = new Float32Array(micAn.fftSize);
    c.createMediaStreamSource(micStream).connect(micAn);
    micMute = true; studioWaitMode = true; se('engine-wait').checked = true;
    micBtn.setAttribute('aria-pressed', 'true'); micBtn.classList.add('on');
    micTimer = setInterval(micTick, 70);
    se('engine-feedback').textContent = 'Micrófono activo: la app se silencia y escucha tu piano. Tocá las notas iluminadas (mejor desde Do3 hacia arriba).';
  }
  function micStop() {
    clearInterval(micTimer); micStream?.getTracks().forEach(t => t.stop()); micStream = null; micMute = false; micHist.clear();
    micBtn.setAttribute('aria-pressed', 'false'); micBtn.classList.remove('on');
    se('engine-feedback').textContent = 'Micrófono desactivado.';
  }
  micBtn.addEventListener('click', () => micStream ? micStop() : micStart());
  document.addEventListener('visibilitychange', () => { if (document.hidden && micStream) micStop(); });

  /* ---------- 4. MOTOR DE PIEZAS: MELODÍA + ACORDES ---------- */
  const PC = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const QUAL = { '': [0, 4, 7], m: [0, 3, 7], 7: [0, 4, 7, 10], maj7: [0, 4, 7, 11], m7: [0, 3, 7, 10], dim: [0, 3, 6], sus4: [0, 5, 7], 6: [0, 4, 7, 9], m6: [0, 3, 7, 9] };
  function parseNote(s) {
    const m = /^([A-Ga-g])([#b]?)(-?\d)$/.exec(s); if (!m) throw new Error('Nota no válida: ' + s);
    return 12 * (Number(m[3]) + 1) + PC[m[1].toUpperCase()] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
  }
  function parseChord(s) {
    const m = /^([A-G])([#b]?)(.*)$/.exec(s); if (!m || !(m[3] in QUAL)) throw new Error('Acorde no válido: ' + s);
    const pc = (PC[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0) + 12) % 12, iv = QUAL[m[3]];
    const tones = iv.map(i => { let n = 48 + pc + i; while (n > 62) n -= 12; return n; });
    return { pc, bass: 36 + pc, tones, iv };
  }
  /** Genera la mano izquierda de un compás: devuelve [{b:beat, notes:[midi], d:beats}] */
  function pattern(kind, ch, next, B) {
    const t = ch.tones, r = ch.bass, out = [], add = (b, notes, d) => out.push({ b, notes, d });
    if (kind === 'waltz') { add(0, [r], 1); add(1, t.slice(0, 3), 1); add(2, t.slice(0, 3), 1); }
    else if (kind === 'arp') { for (let i = 0; i < B * 2; i++) add(i / 2, [i === 0 ? r : t[[0, 1, 2, 1][i % 4] % t.length] ], .5); }
    else if (kind === 'alberti') { for (let i = 0; i < B * 2; i++) add(i / 2, [[r + 12, t[2 % t.length], t[1], t[2 % t.length]][i % 4]], .5); }
    else if (kind === 'walking') {
      const nb = next ? next.bass : r, seq = [r, r + (ch.iv[1] || 4), r + (ch.iv[2] || 7), nb + (nb > r ? -1 : 1)];
      for (let i = 0; i < B; i++) add(i, [seq[i % 4] < 36 ? seq[i % 4] + 12 : seq[i % 4]], 1);
      if (B >= 4) { add(1, t.filter((_, i) => i === 1 || i === 3 || (i === 2 && t.length < 4)), .9); add(3, t.filter((_, i) => i === 1 || i === 3 || (i === 2 && t.length < 4)), .9); }
    }
    else { add(0, [r, ...t.slice(0, 3)], B >= 4 ? 2 : B); if (B >= 4) add(2, [r + 7 > 47 ? r - 5 : r + 7, ...t.slice(0, 3)], 2); }
    return out;
  }
  /**
   * buildPiece({id,title,style,level,bpm,meter,description, melody:'E4/1 G4/1 r/2', chords:'C | F G7 | C', pattern:'block'})
   * En `chords`, cada compás se separa con | y los acordes de un compás se reparten en partes iguales.
   */
  function buildPiece(o) {
    const B = o.meter || 4, spb = 60 / o.bpm, hits = new Map();
    const put = (b, hand, midi, d) => { const k = Math.round(b * 1000) / 1000; if (!hits.has(k)) hits.set(k, []); hits.get(k).push({ midi, hand, velocity: hand === 'right' ? .84 : .7, duration: Math.max(.1, d * spb * .96) }); };
    let beat = 0;
    for (const tok of o.melody.trim().split(/\s+/)) {
      const [n, d] = tok.split('/'), len = Number(d || 1); if (n !== 'r') put(beat, 'right', parseNote(n), len); beat += len;
    }
    const bars = o.chords.split('|').map(s => s.trim().split(/\s+/).map(parseChord));
    bars.forEach((cs, i) => cs.forEach((c, j) => {
      const slice = B / cs.length, nx = bars[i + 1]?.[0] || bars[0][0];
      pattern(o.pattern || 'block', c, nx, slice).forEach(p => p.notes.forEach(m => put(i * B + j * slice + p.b, 'left', m, p.d)));
    }));
    const keys = [...hits.keys()].sort((a, b) => a - b), end = Math.max(beat, bars.length * B);
    const events = keys.map((k, i) => { const nxt = keys[i + 1] ?? end; return { t: k * spb, d: Math.max(.1, (nxt - k) * spb), notes: hits.get(k) }; });
    return { id: o.id, title: o.title, style: o.style, level: o.level, bpm: o.bpm, meter: B, description: o.description, events, generated: true };
  }
  window.buildPiece = buildPiece;

  /* ---------- 5. REPERTORIO NUEVO ---------- */
  /* Piezas ORIGINALES en estilo (sin melodías comerciales), dominio público y tradicionales. */
  const repertoire = [
    { id: 'x-greensleeves', title: 'Greensleeves · tradicional', style: 'Tradicional', level: 'Básico', bpm: 84, meter: 3, description: 'Canción inglesa tradicional (dominio público) en La menor',
      melody: 'A4/1 C5/2 D5/1 E5/1.5 F5/.5 E5/1 D5/2 B4/1 G4/1.5 A4/.5 B4/1 C5/2 A4/1 A4/1.5 G#4/.5 A4/1 B4/2 G#4/1 E4/3', chords: 'Am | Am | C | G | Am | Am E | Am | E | Am', pattern: 'waltz' },
    { id: 'x-grace', title: 'Sublime gracia · tradicional', style: 'Tradicional', level: 'Básico', bpm: 72, meter: 3, description: 'Himno tradicional (dominio público) en Sol mayor',
      melody: 'D4/1 G4/2 B4/.5 G4/.5 B4/2 A4/1 G4/2 E4/1 D4/3 D4/1 G4/2 B4/.5 G4/.5 B4/2 A4/1 D5/3', chords: 'G | G | C G | G Em | G | G | G D | G', pattern: 'arp' },
    { id: 'x-saints', title: 'Cuando los santos · estilo dixie', style: 'Jazz', level: 'Intermedio', bpm: 112, meter: 4, description: 'Tradicional (dominio público) con bajo caminante',
      melody: 'C4/1 E4/1 F4/1 G4/3 C4/1 E4/1 F4/1 G4/3 C4/1 E4/1 F4/1 G4/2 E4/1 C4/1 E4/1 D4/3 E4/1 E4/1 D4/1 C4/1 C4/1 E4/1 G4/1 G4/1 F4/2 E4/1 F4/1 G4/1 E4/1 C4/1 D4/1 C4/4', chords: 'C | C | C | C | C | C | F | G7 | C | C', pattern: 'walking' },
    { id: 'x-minueto', title: 'Minueto en Sol · Petzold', style: 'Clásica', level: 'Intermedio', bpm: 96, meter: 3, description: 'Barroco (dominio público) · frase inicial con bajo sencillo',
      melody: 'D5/1 G4/.5 A4/.5 B4/.5 C5/.5 D5/1 G4/1 G4/1 E5/1 C5/.5 D5/.5 E5/.5 F#5/.5 G5/1 G4/1 G4/1', chords: 'G | G | C | G D | G', pattern: 'waltz' },
    { id: 'x-neon', title: 'Neón nocturno · original estilo 80', style: 'Original', level: 'Básico', bpm: 112, meter: 4, description: 'Pieza original de pop sintético · Am–F–C–G',
      melody: 'E5/1 E5/.5 D5/.5 C5/1 D5/1 C5/1 A4/1 A4/2 r/1 C5/1 E5/1 E5/.5 F5/.5 E5/1 D5/1 C5/1 D5/1 B4/2 r/1 G4/1', chords: 'Am | F | C | G | Am | F | C | G', pattern: 'arp' },
    { id: 'x-noventa', title: 'Ruta 90 · original estilo balada', style: 'Original', level: 'Intermedio', bpm: 76, meter: 4, description: 'Balada original de los 90 · C–G–Am–F',
      melody: 'G4/1 C5/1 E5/2 D5/1 C5/1 B4/2 C5/1 A4/1 E5/2 D5/1 C5/1 C5/2', chords: 'C | G | Am | F | C | G Am | F | G7', pattern: 'alberti' },
    { id: 'x-actual', title: 'Pulso urbano · original estilo actual', style: 'Original', level: 'Básico', bpm: 100, meter: 4, description: 'Pop moderno original · Em–C–G–D',
      melody: 'B4/1 B4/.5 D5/.5 E5/1 D5/1 C5/1 C5/.5 E5/.5 G5/1 E5/1 D5/1 D5/.5 B4/.5 G5/1 F#5/1 D5/2 r/1 A4/1', chords: 'Em | C | G | D | Em | C | G | D', pattern: 'block' },
    { id: 'x-ii-v-i', title: 'Cadencia ii–V–I · original jazz', style: 'Jazz', level: 'Intermedio', bpm: 120, meter: 4, description: 'Original jazz con bajo caminante · Dm7–G7–Cmaj7–A7',
      melody: 'F4/1 A4/1 C5/1 E5/1 D5/2 B4/2 C5/3 r/1 C#5/1 E5/1 G5/1 E5/1 D5/4', chords: 'Dm7 | G7 | Cmaj7 | A7 | Dm7 | G7 | Cmaj7 A7 | Dm7 G7', pattern: 'walking' },
    { id: 'x-blues', title: 'Blues de medianoche · original', style: 'Blues', level: 'Intermedio', bpm: 96, meter: 4, description: 'Blues original de 12 compases en Do',
      melody: 'C5/1 Eb5/1 E5/1 G5/1 G5/2 E5/1 Eb5/1 C5/4 r/4 F5/1 G5/1 F5/1 Eb5/1 C5/4 C5/1 Eb5/1 G5/1 Bb5/1 G5/2 E5/2 D5/2 C5/2', chords: 'C7 | C7 | C7 | C7 | F7 | F7 | C7 | C7 | G7 | F7 | C7 | G7', pattern: 'walking' }
  ];
  repertoire.forEach(r => { try { studioLibrary.push(buildPiece(r)); } catch (e) { console.warn('Pieza omitida', r.id, e.message); } });
  /* "Jazz" y "Blues" caen en el filtro "Otro" de la lista; agrego su propio filtro */
  const filt = document.querySelector('[data-studio-filter="Otro"]');
  if (filt) { const j = document.createElement('button'); j.dataset.studioFilter = 'Jazz'; j.textContent = 'Jazz'; filt.before(j); j.addEventListener('click', () => { studioFilter = 'Jazz'; document.querySelectorAll('[data-studio-filter]').forEach(b => b.classList.toggle('selected', b === j)); studioRenderList(); }); }

  /* Panel «Armar pieza» en la barra lateral */
  const side = document.querySelector('.studio-import-panel');
  if (side) {
    const d = document.createElement('details'); d.className = 'builder';
    d.innerHTML = `<summary>♬ Armar pieza (melodía + acordes)</summary>
      <input id="bd-title" placeholder="Título" value="Mi pieza">
      <textarea id="bd-mel" rows="3" placeholder="Melodía: E4/1 G4/1 r/1 C5/2  (nota/duración en tiempos, r = silencio)">C4/1 E4/1 G4/1 E4/1 D4/1 F4/1 A4/1 F4/1 E4/2 C4/2</textarea>
      <textarea id="bd-ch" rows="2" placeholder="Acordes por compás separados con |  ej: C | F G7 | Am">C | F | G7 | C</textarea>
      <div class="bd-row"><select id="bd-pat"><option value="block">Bloque</option><option value="arp">Arpegio</option><option value="alberti">Alberti</option><option value="waltz">Vals (3/4)</option><option value="walking">Jazz caminante</option></select>
      <input id="bd-bpm" type="number" min="40" max="200" value="90" aria-label="BPM"><select id="bd-meter"><option>4</option><option>3</option></select></div>
      <button type="button" id="bd-go" class="btn btn-primary btn-small">Crear y practicar</button><p id="bd-msg" class="muted"></p>`;
    side.after(d);
    $('bd-go').addEventListener('click', () => {
      try {
        const p = buildPiece({ id: 'u-' + Date.now(), title: $('bd-title').value || 'Mi pieza', style: 'Original', level: 'Propia', bpm: Number($('bd-bpm').value) || 90, meter: Number($('bd-meter').value), description: 'Armada por vos · melodía + acordes', melody: $('bd-mel').value, chords: $('bd-ch').value, pattern: $('bd-pat').value });
        studioLibrary.unshift(p); studioSelect(p.id); $('bd-msg').textContent = 'Lista: ' + p.events.length + ' pasos.';
      } catch (e) { $('bd-msg').textContent = e.message; }
    });
  }
  studioRenderList();
})();
