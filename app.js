// NOCTURNA · Fase 1. Catálogo demostrativo: no contiene partituras ni audio licenciado.
// Las piezas etiquetadas "Estudio original" son títulos de ejemplo, no obras publicadas.
const SONGS = [
  {id:"c1",title:"Preludio en Do",artist:"J. S. Bach · BWV 846",category:"Clásico",level:"intermedio",art:"♬",colors:["#24345c","#7453a4"]},
  {id:"c2",title:"Oda a la alegría",artist:"L. van Beethoven · tema",category:"Clásico",level:"facil",art:"♪",colors:["#214e57","#3b8d92"]},
  {id:"c3",title:"Gymnopédie n.º 1",artist:"Erik Satie",category:"Clásico",level:"intermedio",art:"♩",colors:["#394257","#8d688c"]},
  {id:"c4",title:"Invención n.º 1",artist:"J. S. Bach · BWV 772",category:"Clásico",level:"avanzado",art:"♫",colors:["#5a3357","#9b667a"]},
  {id:"p1",title:"Balada luminosa",artist:"Estudio original · Pop",category:"Pop",level:"facil",art:"✦",colors:["#245f77","#3f92b1"]},
  {id:"p2",title:"Acordes de medianoche",artist:"Estudio original · Pop",category:"Pop",level:"intermedio",art:"♫",colors:["#533a83","#9d6db6"]},
  {id:"j1",title:"Swing de tres acordes",artist:"Estudio original · Jazz",category:"Jazz",level:"intermedio",art:"♬",colors:["#72502f","#bc8a52"]},
  {id:"j2",title:"Blue Notes",artist:"Estudio original · Jazz",category:"Jazz",level:"avanzado",art:"♭",colors:["#264f64","#6390a8"]},
  {id:"r1",title:"Riff de cuatro compases",artist:"Estudio original · Rock",category:"Rock",level:"facil",art:"⚡",colors:["#6b343b","#c16b61"]},
  {id:"r2",title:"Octavas en marcha",artist:"Estudio original · Rock",category:"Rock",level:"intermedio",art:"♫",colors:["#4d365e","#9d628a"]},
  {id:"s1",title:"Horizonte cinematográfico",artist:"Estudio original · Bandas sonoras",category:"Bandas Sonoras",level:"intermedio",art:"✧",colors:["#2c466f","#7087bd"]},
  {id:"s2",title:"Tema de aventura",artist:"Estudio original · Bandas sonoras",category:"Bandas Sonoras",level:"avanzado",art:"✦",colors:["#3d476c","#8a77ba"]},
  {id:"v1",title:"Mundo de píxeles",artist:"Estudio original · Videojuegos",category:"Videojuegos",level:"facil",art:"◇",colors:["#24665b","#51a88c"]},
  {id:"v2",title:"Nivel secreto",artist:"Estudio original · Videojuegos",category:"Videojuegos",level:"intermedio",art:"◆",colors:["#4a447c","#777ad0"]},
  {id:"b1",title:"Cinco notas",artist:"Estudio original · Principiantes",category:"Principiantes",level:"facil",art:"♪",colors:["#235a5d","#4b9994"]},
  {id:"b2",title:"Primer vals",artist:"Estudio original · Principiantes",category:"Principiantes",level:"facil",art:"♩",colors:["#5b456a","#a47e9e"]}
];
const $ = (id) => document.getElementById(id);
const state={category:"Todos",query:"",difficulty:"all",song:null,wait:true,metronome:false,bpm:80};
const label={facil:"Fácil",intermedio:"Intermedio",avanzado:"Avanzado"};
const key="nocturna-fase1-openings";
function readOpenings(){try{const n=Number(localStorage.getItem(key));return Number.isFinite(n)&&n>=0?n:0}catch{return 0}}
function saveOpenings(n){try{localStorage.setItem(key,String(n))}catch{/* modo privado o almacenamiento bloqueado */}}
function updateProfile(){const n=readOpenings();$("profile-progress").textContent=`${n} ${n===1?"sesión":"sesiones"}`;$("profile-detail").textContent=n?`Abriste ${n} ${n===1?"sesión":"sesiones"} de práctica. Todavía no se evalúan notas ni precisión.`:"Todavía no comenzaste una sesión."}
function render(){
 const q=state.query.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
 const songs=SONGS.filter(s=>(state.category==="Todos"||s.category===state.category)&&(state.difficulty==="all"||s.level===state.difficulty)&&`${s.title} ${s.artist} ${s.category}`.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().includes(q));
 const fragment=document.createDocumentFragment();
 for(const s of songs){
  const card=document.createElement("article");card.className="song-card";
  const cover=document.createElement("div");cover.className="cover";cover.style.setProperty("--cover-a",s.colors[0]);cover.style.setProperty("--cover-b",s.colors[1]);cover.setAttribute("aria-hidden","true");cover.textContent=s.art;
  const body=document.createElement("div");body.className="card-body";
  const meta=document.createElement("div");meta.className="card-meta";
  const category=document.createElement("span");category.textContent=s.category;
  const difficulty=document.createElement("span");difficulty.className=`difficulty ${s.level}`;difficulty.textContent=label[s.level];
  meta.append(category,difficulty);
  const title=document.createElement("h3");title.textContent=s.title;
  const artist=document.createElement("p");artist.className="artist";artist.textContent=s.artist;
  const button=document.createElement("button");button.type="button";button.className="practice-button";button.textContent="Practicar ↗";button.setAttribute("aria-label",`Practicar ${s.title}`);button.addEventListener("click",()=>openSong(s));
  body.append(meta,title,artist,button);card.append(cover,body);fragment.append(card);
 }
 $("song-grid").replaceChildren(fragment);
 $("results-count").textContent=`${songs.length} ${songs.length===1?"pieza":"piezas"}`;
 $("empty-state").hidden=songs.length!==0;
}
function setCategory(category){
 state.category=category;
 for(const tab of document.querySelectorAll('[role="tab"]')){const selected=tab.dataset.category===category;tab.setAttribute("aria-selected",String(selected));tab.tabIndex=selected?0:-1}
 render();
}
function openSong(song){
 state.song=song;$("player-title").textContent=song.title;$("player-artist").textContent=`${song.artist} · ${label[song.level]}`;
 $("explorar").hidden=true;$("practica").hidden=false;
 $("song-progress").value=0;$("progress-percent").textContent="0%";
 $("progress-label").textContent="Preparación · 0%";
 saveOpenings(readOpenings()+1);updateProfile();
 history.replaceState(null,"","#practica");window.scrollTo({top:0,behavior:"instant"});
}
function back(){
 $("practica").hidden=true;$("explorar").hidden=false;state.song=null;
 history.replaceState(null,"","#catalogo");$("catalog-title").scrollIntoView({block:"start",behavior:"instant"});
}
function syncMode(){
 $("mode-button").classList.toggle("active",state.wait);
 $("mode-button").setAttribute("aria-pressed",String(state.wait));
 $("mode-label").textContent=state.wait?"Modo espera":"Modo fluido";
 $("practice-feedback").textContent=state.wait?"Modo espera seleccionado. La detección de notas todavía no está implementada.":"Modo fluido seleccionado. La reproducción musical se incorporará en otra fase.";
}
function syncMetronome(){
 $("metronome-button").classList.toggle("active",state.metronome);
 $("metronome-button").setAttribute("aria-pressed",String(state.metronome));
 $("practice-feedback").textContent=state.metronome?"Metrónomo seleccionado: vista de control. El audio y el pulso se implementarán más adelante.":"Metrónomo desactivado.";
}
function init(){
 updateProfile();render();
 $("song-search").addEventListener("input",e=>{state.query=e.target.value;render()});
 $("difficulty-filter").addEventListener("change",e=>{state.difficulty=e.target.value;render()});
 const tabs=[...document.querySelectorAll('[role="tab"]')];
 for(const [i,tab] of tabs.entries()){
  tab.addEventListener("click",()=>setCategory(tab.dataset.category));
  tab.addEventListener("keydown",e=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;e.preventDefault();const next=e.key==="Home"?0:e.key==="End"?tabs.length-1:(i+(e.key==="ArrowRight"?1:-1)+tabs.length)%tabs.length;setCategory(tabs[next].dataset.category);tabs[next].focus()});
 }
 $("profile-button").addEventListener("click",()=>{const p=$("profile-panel");p.hidden=!p.hidden;$("profile-button").setAttribute("aria-expanded",String(!p.hidden))});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){$("profile-panel").hidden=true;$("profile-button").setAttribute("aria-expanded","false")}});
 $("back-button").addEventListener("click",back);
 $("mode-button").addEventListener("click",()=>{state.wait=!state.wait;syncMode()});
 $("metronome-button").addEventListener("click",()=>{state.metronome=!state.metronome;syncMetronome()});
 $("bpm-range").addEventListener("input",e=>{state.bpm=Number(e.target.value);$("bpm-value").textContent=`${state.bpm} BPM`});
 $("reset-button").addEventListener("click",()=>{state.wait=true;state.metronome=false;state.bpm=80;$("bpm-range").value=80;$("bpm-value").textContent="80 BPM";syncMode();$("metronome-button").classList.remove("active");$("metronome-button").setAttribute("aria-pressed","false")});
 // Indicadores son de solo lectura en Fase 1: no se simula una conexión inexistente.
 if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}))}
}
if ($("song-grid")) init();


/* NOCTURNA · Sample-based Web Audio + falling-note practice engine.
 * Piano sample source: Tone.js Salamander piano public demo assets.
 * Root samples: C4, E4, G4. Add local copies under ./audio/ for offline use;
 * remote URLs are fallbacks and require network + CORS permission.
 */
function initPremiumPlayer(){
 const canvas=document.getElementById('fallingNotesCanvas'); if(!canvas) return;
 const $id=id=>document.getElementById(id), ctx=canvas.getContext('2d');
 const ROOTS={48:'https://tonejs.github.io/audio/salamander/C3.mp3',60:'https://tonejs.github.io/audio/salamander/C4.mp3',64:'https://tonejs.github.io/audio/salamander/E4.mp3',67:'https://tonejs.github.io/audio/salamander/G4.mp3',72:'https://tonejs.github.io/audio/salamander/C5.mp3'};
 // Short public-domain Beethoven motif (Für Elise), didactic excerpt; MIDI note, start seconds, duration seconds.
 const SONG=[{n:76,t:0,d:.34},{n:75,t:.42,d:.34},{n:76,t:.84,d:.34},{n:75,t:1.26,d:.34},{n:76,t:1.68,d:.34},{n:71,t:2.1,d:.48},{n:74,t:2.7,d:.48},{n:72,t:3.3,d:.55},{n:69,t:4.0,d:.9},{n:60,t:5.1,d:.38},{n:64,t:5.55,d:.38},{n:69,t:6,d:.38},{n:71,t:6.5,d:.38},{n:64,t:7,d:.38},{n:68,t:7.5,d:.38},{n:71,t:8,d:.55},{n:72,t:8.7,d:.9}];
 const MIN=60,MAX=83,LEAD=2.6,EXEC=.84;
 let audio=null,master=null,buffers=new Map(),sources=new Set(),isPlaying=false,waitMode=true,waitIndex=0,pausedAt=0,startedAt=0,raf=0,lastFrame=0,waitBlocked=false,midiAccess=null,active=new Set(),expected=new Set(),fallingActive=new Set(),width=0,height=0,dpr=1,volume=.72,audioReady=false;
 const keyEls=new Map();
 function status(text){$id('engine-status').textContent=text}
 function resize(){const r=canvas.getBoundingClientRect();dpr=Math.min(devicePixelRatio||1,2);width=Math.max(1,r.width);height=Math.max(1,r.height);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw()}
 function buildKeyboard(){const host=$id('liveKeyboard');host.innerHTML='';const whites=[];for(let n=MIN;n<=MAX;n++)if(![1,3,6,8,10].includes(n%12))whites.push(n);const w=100/whites.length;for(const n of whites){const b=document.createElement('button');b.type='button';b.className='live-key';b.dataset.note=n;b.setAttribute('aria-label',noteName(n));b.innerHTML=`<span>${n%12===0?'Do':''}</span>`;bindKey(b,n);host.append(b);keyEls.set(n,b)}for(let n=MIN;n<=MAX;n++)if([1,3,6,8,10].includes(n%12)){const before=whites.filter(x=>x<n).length;const b=document.createElement('button');b.type='button';b.className='live-key black';b.dataset.note=n;b.setAttribute('aria-label',noteName(n));b.style.left=`calc(${before*w}% - ${w*.34}%)`;b.style.width=`${w*.68}%`;bindKey(b,n);host.append(b);keyEls.set(n,b)}}
 function noteName(n){return ['Do','Do♯','Re','Re♯','Mi','Fa','Fa♯','Sol','Sol♯','La','La♯','Si'][n%12]+(Math.floor(n/12)-1)}
 function bindKey(el,n){el.addEventListener('pointerdown',e=>{e.preventDefault();el.setPointerCapture?.(e.pointerId);noteOn(n,'virtual')});['pointerup','pointercancel','lostpointercapture'].forEach(ev=>el.addEventListener(ev,()=>noteOff(n)))}
 async function ensureAudio(){if(!audio){const AC=window.AudioContext||window.webkitAudioContext;if(!AC){status('Este navegador no admite Web Audio.');return false}audio=new AC();master=audio.createGain();master.gain.value=volume;master.connect(audio.destination)}if(audio.state==='suspended')await audio.resume();return true}
 async function loadSamples(){if(buffers.size)return;if(!await ensureAudio())return;status('Cargando muestras de piano acústico…');const jobs=Object.entries(ROOTS).map(async([midi,url])=>{try{const local=`./audio/${noteName(Number(midi)).replace('♯','s')}.mp3`;let response;try{response=await fetch(local)}catch{}if(!response||!response.ok)response=await fetch(url,{mode:'cors'});if(!response.ok)throw new Error(`HTTP ${response.status}`);const data=await response.arrayBuffer();const decoded=await audio.decodeAudioData(data);buffers.set(Number(midi),decoded)}catch(err){console.warn('No se pudo cargar la muestra',midi,err)}});await Promise.all(jobs);if(buffers.size)status(`Piano acústico listo · ${buffers.size} muestras cargadas`);else status('No se pudieron cargar las muestras. Revisá la conexión o agregá archivos en /audio/.')}
 function nearestRoot(n){return [...buffers.keys()].sort((a,b)=>Math.abs(a-n)-Math.abs(b-n))[0]}
 async function playNote(n,duration=.6){if(!await ensureAudio())return; if(!buffers.size)await loadSamples();const root=nearestRoot(n);if(root===undefined)return;const source=audio.createBufferSource(),gain=audio.createGain();source.buffer=buffers.get(root);source.playbackRate.value=Math.pow(2,(n-root)/12);gain.gain.setValueAtTime(.0001,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.9,audio.currentTime+.012);gain.gain.setTargetAtTime(.0001,audio.currentTime+Math.max(.08,duration*.7),Math.max(.03,duration*.15));source.connect(gain);gain.connect(master);source.start();source.stop(audio.currentTime+Math.max(.18,duration)+.15);sources.add(source);source.onended=()=>sources.delete(source)}
 function stopAudio(){for(const s of [...sources]){try{s.stop()}catch{}}sources.clear()}
 function songTime(){return isPlaying?Math.max(0,(performance.now()-startedAt)/1000):pausedAt}
 function setPlayButton(){const b=$id('engine-play');b.innerHTML=isPlaying?'Ⅱ':'▶';b.setAttribute('aria-label',isPlaying?'Pausar':'Reproducir');b.title=isPlaying?'Pausar':'Reproducir';b.classList.toggle('is-playing',isPlaying)}
 function showStartOverlay(show){const overlay=$id('audio-start-overlay');if(overlay)overlay.hidden=!show}
 async function beginPlayback(){const ok=await ensureAudio();if(!ok)return;await loadSamples();audioReady=true;showStartOverlay(false);start()}
 function start(){if(waitBlocked)return;if(waitIndex>=SONG.length)reset();if(!isPlaying){isPlaying=true;waitBlocked=false;startedAt=performance.now()-pausedAt*1000;setPlayButton();showStartOverlay(false);lastFrame=0;cancelAnimationFrame(raf);raf=requestAnimationFrame(frame);status('Reproducción activa · notas en movimiento')}}
 function pause(){if(!isPlaying)return;pausedAt=songTime();isPlaying=false;waitBlocked=false;stopAudio();cancelAnimationFrame(raf);setPlayButton();draw();status('Pausado · la posición quedó congelada')}
 function reset(){pause();pausedAt=0;waitIndex=0;SONG.forEach(ev=>delete ev.fired);active.clear();expected.clear();paintKeys();$id('engine-feedback').textContent='Práctica reiniciada.';$id('engine-time').textContent='00:00';draw()}
 function completeWait(note){if(!waitBlocked||!expected.has(note))return;expected.delete(note);if(expected.size===0){waitBlocked=false;waitIndex++;pausedAt=SONG[waitIndex]?.t??(SONG[SONG.length-1].t+SONG[SONG.length-1].d);startedAt=performance.now()-pausedAt*1000;isPlaying=true;setPlayButton();$id('engine-feedback').textContent='¡Correcto! Seguimos con la próxima nota.';if(waitIndex>=SONG.length){pause();$id('engine-feedback').textContent='¡Excelente! Terminaste el fragmento.';status('Práctica completada')}else{raf=requestAnimationFrame(frame)}}else{$id('engine-feedback').textContent='Bien. Falta: '+[...expected].map(noteName).join(' + ')}}
 async function noteOn(n,origin){active.add(n);const el=keyEls.get(n);el?.classList.add('active');playNote(n,.42);if(waitMode&&waitBlocked)completeWait(n);else if(!waitMode)$id('engine-feedback').textContent=`Tocaste ${noteName(n)}${origin==='midi'?' · MIDI':''}`;}
 function noteOff(n){active.delete(n);keyEls.get(n)?.classList.remove('active')}
 function paintKeys(){for(const [n,el] of keyEls){el.classList.toggle('active',active.has(n)||fallingActive.has(n));el.classList.toggle('expected',expected.has(n))}}
 function updateFallingKeys(t){fallingActive.clear();if(waitBlocked){for(const n of expected)fallingActive.add(n)}else{for(const ev of SONG){if(Math.abs(ev.t-t)<.105)fallingActive.add(ev.n)}}paintKeys()}
 function frame(now){if(!isPlaying)return;const t=songTime();$id('engine-time').textContent=`${String(Math.floor(t/60)).padStart(2,'0')}:${String(Math.floor(t%60)).padStart(2,'0')}`;updateFallingKeys(t);if(waitMode&&!waitBlocked&&waitIndex<SONG.length&&t>=SONG[waitIndex].t){waitBlocked=true;pausedAt=SONG[waitIndex].t;isPlaying=false;expected=new Set([SONG[waitIndex].n]);updateFallingKeys(pausedAt);setPlayButton();draw();status('Modo espera · tocá la nota iluminada');$id('engine-feedback').textContent='Buscá '+noteName(SONG[waitIndex].n)+' en el teclado.';return}if(!waitMode){for(const ev of SONG){if(!ev.fired&&t>=ev.t){ev.fired=true;playNote(ev.n,ev.d)}}}draw();if(t>SONG[SONG.length-1].t+SONG[SONG.length-1].d+.8){pause();status('Fragmento terminado')}else raf=requestAnimationFrame(frame)}
 function draw(){if(!ctx||!width||!height)return;ctx.clearRect(0,0,width,height);const cols=MAX-MIN+1,cw=width/cols,execY=height*EXEC,now=waitBlocked?pausedAt:songTime();ctx.fillStyle='#0d1727';ctx.fillRect(0,0,width,height);for(let i=0;i<=cols;i++){ctx.strokeStyle=i%12===0?'#8292ad38':'#8292ad18';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(i*cw,0);ctx.lineTo(i*cw,height);ctx.stroke()}const whites=Array.from({length:MAX-MIN+1},(_,i)=>MIN+i).filter(n=>![1,3,6,8,10].includes(n%12));const whiteW=width/whites.length;for(const ev of SONG){const isBlack=[1,3,6,8,10].includes(ev.n%12);const whiteIndex=isBlack?whites.filter(n=>n<ev.n).length-1:whites.indexOf(ev.n);const x=isBlack?(whiteIndex+.66)*whiteW:(whiteIndex+.12)*whiteW;const noteW=isBlack?whiteW*.68:whiteW*.76;const y=execY-(ev.t-now)*height/LEAD;const h=Math.max(13,ev.d*height/LEAD);if(y+h<0||y>height)continue;const isTarget=waitBlocked&&SONG[waitIndex]===ev;ctx.fillStyle=isTarget?'#b7f0e5':'#59e1ef';ctx.shadowColor=isTarget?'#b7f0e5':'#59e1ef';ctx.shadowBlur=12;roundRect(ctx,x,y,noteW,h,5);ctx.shadowBlur=0;ctx.fillStyle='#102034';ctx.font='bold 10px system-ui';ctx.textAlign='center';ctx.fillText(noteName(ev.n),x+noteW/2,y+Math.min(h-3,14))}ctx.fillStyle='#59e1ef';ctx.fillRect(0,execY,width,2)}
 function roundRect(c,x,y,w,h,r){c.beginPath();c.roundRect?c.roundRect(x,y,w,h,r):(c.rect(x,y,w,h));c.fill()}
 async function connectMidi(){if(!navigator.requestMIDIAccess){$id('engine-midi').textContent='● Web MIDI no disponible';return}try{midiAccess=await navigator.requestMIDIAccess({sysex:false});bindMidi();midiAccess.onstatechange=bindMidi}catch(e){$id('engine-midi').textContent='● MIDI sin permiso'}}
 function bindMidi(){if(!midiAccess)return;const inputs=[...midiAccess.inputs.values()].filter(x=>x.state==='connected');inputs.forEach(input=>input.onmidimessage=e=>{const [st,n,v]=e.data,cmd=st&0xf0;if(cmd===0x90&&v>0)noteOn(n,'midi');else if(cmd===0x80||(cmd===0x90&&v===0))noteOff(n)});$id('engine-midi').textContent=inputs.length?'● MIDI conectado':'● MIDI desconectado';$id('engine-midi').classList.toggle('connected',!!inputs.length)}
 $id('engine-play').addEventListener('click',async()=>{if(isPlaying){pause();return}await beginPlayback()});
 const startOverlay=$id('audio-start-overlay');startOverlay?.addEventListener('click',beginPlayback);
 $id('engine-midi-connect').addEventListener('click',connectMidi);$id('engine-reset').addEventListener('click',()=>{reset();showStartOverlay(!audioReady)});
 $id('engine-wait').addEventListener('change',e=>{waitMode=e.target.checked;reset();$id('engine-feedback').textContent=waitMode?'Modo espera activado.':'Modo libre: las notas se reproducen automáticamente.'});
 $id('engine-volume').addEventListener('input',e=>{volume=Number(e.target.value);if(master&&audio)master.gain.setTargetAtTime(volume,audio.currentTime,.02)});
 buildKeyboard();resize();if('ResizeObserver'in window)new ResizeObserver(resize).observe(canvas);else window.addEventListener('resize',resize);connectMidi();showStartOverlay(true);setPlayButton();document.addEventListener('visibilitychange',()=>{if(document.hidden)pause()});
}
if(document.getElementById('fallingNotesCanvas')) initPremiumPlayer();
