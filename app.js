const lessons = [
{title:"El piano y el mapa de las notas",level:"Inicio",time:"15 min",summary:"Ubicá las notas, las octavas y los grupos de teclas.",body:"El teclado se organiza en grupos que se repiten. Las teclas blancas siguen el orden Do, Re, Mi, Fa, Sol, La y Si. Después de Si vuelve Do, pero en una octava más aguda. Las teclas negras representan alteraciones: sostenidos (♯) y bemoles (♭).",bullets:["Identificá los grupos de dos y tres teclas negras.","Encontrá todos los Do del teclado.","Recordá que una octava contiene 12 semitonos."],example:"En el sistema internacional, Do = C, Re = D, Mi = E, Fa = F, Sol = G, La = A y Si = B.",q:"¿Qué nota aparece inmediatamente después de Si?",opts:["La","Do","Re","Fa"],a:1,why:"Después de Si vuelve Do. El patrón de siete nombres naturales se repite."},
{title:"El pentagrama y la clave de sol",level:"Inicio",time:"20 min",summary:"Aprendé a leer las notas en el pentagrama.",body:"El pentagrama tiene cinco líneas y cuatro espacios. La clave de sol indica que la segunda línea desde abajo representa Sol4. Desde allí se ordenan las demás notas, alternando líneas y espacios.",bullets:["Líneas de clave de sol, de abajo hacia arriba: Mi–Sol–Si–Re–Fa.","Espacios: Fa–La–Do–Mi.","Las notas más agudas o graves pueden necesitar líneas adicionales."],example:"Truco para las líneas: Mi, Sol, Si, Re, Fa. Para los espacios: Fa, La, Do, Mi.",q:"En clave de sol, ¿qué nota está en la segunda línea desde abajo?",opts:["Mi","Sol","Si","Re"],a:1,why:"La segunda línea desde abajo es Sol4; por eso la clave se llama clave de sol."},
{title:"Figuras musicales y silencios",level:"Inicio",time:"20 min",summary:"Comprendé cuánto dura cada figura.",body:"Las figuras representan la duración de los sonidos. En un compás de 4/4, la redonda dura cuatro pulsos, la blanca dos, la negra uno, la corchea medio y la semicorchea un cuarto de pulso. Cada figura tiene un silencio equivalente.",bullets:["Redonda = 4 negras.","Blanca = 2 negras.","Negra = 2 corcheas.","Corchea = 2 semicorcheas."],example:"Una blanca más dos negras suma 2 + 1 + 1 = 4 tiempos: completa un compás de 4/4.",q:"¿Cuántas negras equivalen a una blanca?",opts:["Una","Dos","Tres","Cuatro"],a:1,why:"La blanca dura dos tiempos y la negra dura un tiempo."},
{title:"Pulso, tempo y compás",level:"Inicio",time:"20 min",summary:"Sentí el pulso y entendé cómo se agrupa.",body:"El pulso es la referencia regular que sentimos al escuchar música. El tempo indica su velocidad y se mide en BPM. El compás organiza los pulsos en grupos. En 4/4 hay cuatro pulsos de negra por compás; en 3/4 hay tres.",bullets:["Practicá contar 1–2–3–4 de manera constante.","El número de arriba indica cuántas unidades se agrupan.","El número de abajo indica qué figura representa la unidad."],example:"En 3/4 podés contar un vals: UNO-dos-tres, UNO-dos-tres.",q:"¿Cuántos pulsos de negra tiene normalmente un compás de 3/4?",opts:["Dos","Tres","Cuatro","Seis"],a:1,why:"El 3/4 agrupa tres negras por compás."},
{title:"Tonos, semitonos e intervalos",level:"Básico",time:"25 min",summary:"Medí la distancia entre dos notas.",body:"En el piano, un semitono es la distancia entre dos teclas consecutivas, blancas o negras. Un tono equivale a dos semitonos. Un intervalo es la distancia entre dos notas y se nombra por su número: segunda, tercera, cuarta, quinta, sexta, séptima u octava.",bullets:["Mi–Fa es un semitono.","Si–Do es un semitono.","Do–Re es un tono.","Do–Sol es una quinta justa."],example:"Tocá Do y después Re: hay dos semitonos de distancia. Tocá Mi y Fa: hay un semitono.",q:"¿Cuántos semitonos forman un tono?",opts:["Uno","Dos","Tres","Cuatro"],a:1,why:"Un tono equivale a dos semitonos."},
{title:"Escala mayor y digitación",level:"Básico",time:"25 min",summary:"Construí Do mayor y empezá a coordinar los dedos.",body:"La escala mayor sigue el patrón de tonos y semitonos: T–T–S–T–T–T–S. Do mayor utiliza las notas Do, Re, Mi, Fa, Sol, La y Si, sin teclas negras. La digitación ayuda a que la mano se desplace con comodidad.",bullets:["Mano derecha en Do mayor: 1–2–3, paso del pulgar, 1–2–3–4–5.","Mano izquierda: 5–4–3–2–1, cruce, 3–2–1.","Practicá lento, con sonido parejo y muñeca relajada."],example:"Do–Re–Mi–Fa–Sol–La–Si–Do. Escuchá cómo la escala encuentra reposo al llegar al Do superior.",q:"¿Qué patrón de distancias tiene la escala mayor?",opts:["T–S–T–T–S–T–T","T–T–S–T–T–T–S","S–T–T–S–T–T–T","T–T–T–T–T–T–S"],a:1,why:"La escala mayor sigue tono, tono, semitono, tono, tono, tono, semitono."},
{title:"Escalas menores",level:"Básico",time:"25 min",summary:"Conocé la sonoridad menor natural, armónica y melódica.",body:"La escala menor natural tiene el patrón T–S–T–T–S–T–T. La menor armónica eleva el séptimo grado; la menor melódica clásica eleva el sexto y el séptimo al subir, y suele volver a la forma natural al bajar.",bullets:["La menor natural: La–Si–Do–Re–Mi–Fa–Sol–La.","La menor armónica: se eleva Sol a Sol♯.","Escuchá la diferencia entre el séptimo grado natural y el sensible."],example:"Do mayor y La menor natural comparten las mismas notas, pero tienen distinto centro tonal.",q:"¿Qué grado se eleva en la escala menor armónica?",opts:["Segundo","Cuarto","Sexto","Séptimo"],a:3,why:"La menor armónica eleva el séptimo grado para crear una sensible que conduce a la tónica."},
{title:"Armaduras y tonalidades",level:"Intermedio",time:"25 min",summary:"Entendé sostenidos, bemoles y tonalidades.",body:"La armadura aparece al comienzo del pentagrama y señala alteraciones que se mantienen durante la pieza, salvo indicación contraria. El orden de sostenidos es Fa–Do–Sol–Re–La–Mi–Si; el de bemoles es Si–Mi–La–Re–Sol–Do–Fa.",bullets:["Do mayor y La menor no tienen alteraciones en la armadura.","Sol mayor tiene un sostenido: Fa♯.","Fa mayor tiene un bemol: Si♭."],example:"Si encontrás un Fa♯ en la armadura, esa alteración se aplica a los Fa de cualquier octava, salvo que aparezca un becuadro.",q:"¿Qué alteración tiene Sol mayor en su armadura?",opts:["Si♭","Fa♯","Do♯","Ninguna"],a:1,why:"Sol mayor tiene un sostenido: Fa♯."},
{title:"Triadas y acordes",level:"Intermedio",time:"30 min",summary:"Construí acordes mayores, menores y disminuidos.",body:"Una triada se forma superponiendo terceras: fundamental, tercera y quinta. La triada mayor tiene tercera mayor y quinta justa; la menor, tercera menor y quinta justa; la disminuida, tercera menor y quinta disminuida.",bullets:["Do mayor: Do–Mi–Sol.","La menor: La–Do–Mi.","Si disminuido: Si–Re–Fa."],example:"Tocá Do–Mi–Sol juntos. Después bajá Mi a Mi♭: el acorde se vuelve Do menor.",q:"¿Qué notas forman la triada de Do mayor?",opts:["Do–Mi–Sol","Do–Mi♭–Sol","Do–Fa–La","Do–Re–Sol"],a:0,why:"La triada mayor se construye con fundamental, tercera mayor y quinta justa."},
{title:"Inversiones y conducción de voces",level:"Intermedio",time:"30 min",summary:"Mové los acordes sin perder su identidad.",body:"Un acorde está en estado fundamental cuando su nota raíz está en el bajo. En primera inversión, la tercera queda en el bajo; en segunda inversión, la quinta. Las inversiones permiten conectar acordes con movimientos pequeños.",bullets:["Do–Mi–Sol: estado fundamental.","Mi–Sol–Do: primera inversión.","Sol–Do–Mi: segunda inversión."],example:"Practicá Do mayor, Fa mayor y Sol mayor usando la inversión más cercana para que la mano no salte demasiado.",q:"¿Qué nota queda en el bajo en la primera inversión de Do mayor?",opts:["Do","Mi","Sol","Si"],a:1,why:"En primera inversión la tercera del acorde, Mi, queda como nota más grave."},
{title:"Funciones armónicas y cadencias",level:"Intermedio",time:"30 min",summary:"Comprendé tónica, dominante y subdominante.",body:"En una tonalidad, los acordes cumplen funciones. La tónica (I) da sensación de reposo; la dominante (V) genera tensión y suele resolver en I; la subdominante (IV) prepara o amplía el movimiento armónico.",bullets:["En Do mayor: I = Do, IV = Fa, V = Sol.","La cadencia V–I produce una resolución fuerte.","Probá I–V–vi–IV como progresión popular."],example:"Tocá Sol mayor y después Do mayor. Escuchá cómo la tensión del acorde dominante se resuelve en la tónica.",q:"En Do mayor, ¿cuál es el acorde dominante?",opts:["Fa mayor","La menor","Sol mayor","Do mayor"],a:2,why:"El quinto grado de Do mayor es Sol; su acorde es Sol mayor."},
{title:"Lectura a dos manos y primeras piezas",level:"Intermedio",time:"35 min",summary:"Uní lectura, coordinación, técnica y expresión.",body:"La partitura de piano suele utilizar dos pentagramas unidos: clave de sol para la mano derecha y clave de fa para la izquierda. Al principio conviene estudiar cada mano por separado, contar en voz alta y unirlas muy lentamente.",bullets:["Leé y tocá una frase corta por vez.","Practicá cada mano hasta que resulte estable.","Uní las manos a un tempo más lento que el final.","Agregá articulación, dinámica y fraseo cuando las notas estén seguras."],example:"Empezá con melodías de cinco dedos y acompañamientos sencillos de tónica y dominante. Después avanzá a piezas de Bach, Beethoven y otros autores.",q:"¿Qué conviene hacer antes de unir ambas manos?",opts:["Tocar más rápido","Practicar cada mano por separado","Memorizar sin contar","Usar siempre el pedal"],a:1,why:"Separar las manos permite resolver las dificultades de cada parte antes de coordinarlas."}
];

const songs = [
{id:1,title:"Oda a la alegría",style:"Clásica",level:"Inicial",origin:"Beethoven · melodía didáctica",tempo:90,notes:[64,64,65,67,67,65,64,62,60,60,62,64,64,62,62]},
{id:2,title:"Estrellita",style:"Tradicional",level:"Inicial",origin:"Tradicional · melodía popular",tempo:84,notes:[60,60,67,67,69,69,67,65,65,64,64,62,62,60]},
{id:3,title:"Para Elisa (inicio)",style:"Clásica",level:"Básico",origin:"Beethoven · motivo inicial simplificado",tempo:88,notes:[76,75,76,75,76,71,74,72,69]},
{id:4,title:"Greensleeves",style:"Tradicional",level:"Básico",origin:"Melodía tradicional inglesa",tempo:76,notes:[69,72,74,76,77,76,74,71,67,69,71,72,69]},
{id:5,title:"Amazing Grace",style:"Tradicional",level:"Inicial",origin:"Himno tradicional · fragmento didáctico",tempo:72,notes:[67,72,76,72,76,74,72,69,67,64]},
{id:6,title:"Minueto en Sol (tema)",style:"Clásica",level:"Intermedio",origin:"Petzold · tema simplificado",tempo:96,notes:[74,67,69,71,72,74,67,67,76,72,74,76,78,79]},
{id:7,title:"Preludio de Do",style:"Clásica",level:"Básico",origin:"Bach · estudio de arpegios inspirado en BWV 846",tempo:72,notes:[60,64,67,72,76,72,67,64,60,64,67,72]},
{id:8,title:"Vals de cinco dedos",style:"Estudio",level:"Inicial",origin:"Estudio original",tempo:90,notes:[60,64,67,64,65,69,72,69,67,64,60,64]},
{id:9,title:"Blues en Do",style:"Blues",level:"Básico",origin:"Estudio original de blues",tempo:92,notes:[60,63,65,66,67,70,67,65,63,60,67,65]},
{id:10,title:"Jazz de domingo",style:"Jazz",level:"Intermedio",origin:"Estudio original con color jazzístico",tempo:108,notes:[62,65,69,72,69,65,64,67,70,74,72,69]},
{id:11,title:"Tango breve",style:"Tango",level:"Básico",origin:"Estudio original",tempo:104,notes:[69,72,76,75,76,72,69,68,69,72,74,76]},
{id:12,title:"Cumbia del teclado",style:"Latino",level:"Inicial",origin:"Estudio original",tempo:100,notes:[60,64,67,64,67,69,67,64,60,64,67,72]},
{id:13,title:"Riff de rock",style:"Rock",level:"Básico",origin:"Estudio original",tempo:112,notes:[64,67,69,67,64,62,64,71,69,67,64]},
{id:14,title:"Balada sencilla",style:"Pop",level:"Inicial",origin:"Estudio original",tempo:76,notes:[60,62,64,67,76,74,72,67,69,67,64,62]},
{id:15,title:"Bossa al atardecer",style:"Jazz",level:"Intermedio",origin:"Estudio original",tempo:96,notes:[65,69,72,76,74,72,69,67,65,69,72,74]},
{id:16,title:"Danza folklórica",style:"Folklore",level:"Básico",origin:"Estudio original",tempo:108,notes:[67,71,74,71,69,72,74,79,74,72,69,67]},
{id:17,title:"Ragtime miniatura",style:"Jazz",level:"Intermedio",origin:"Estudio original",tempo:116,notes:[60,64,67,72,71,67,64,62,60,64,69,72]},
{id:18,title:"Canción de cuna",style:"Estudio",level:"Inicial",origin:"Estudio original",tempo:68,notes:[64,67,71,67,69,72,71,67,64,62,60]},
{id:19,title:"Danza barroca",style:"Clásica",level:"Intermedio",origin:"Estudio original de estilo barroco",tempo:104,notes:[62,66,69,74,73,69,66,62,66,69,74,78]},
{id:20,title:"Arpegio cinematográfico",style:"Estudio",level:"Básico",origin:"Estudio original",tempo:80,notes:[69,72,76,81,79,76,72,69,67,71,74,79]},
{id:21,title:"Reggae tranquilo",style:"Latino",level:"Inicial",origin:"Estudio original",tempo:88,notes:[60,64,67,64,60,64,69,67,60,64,67,72]},
{id:22,title:"Funk de cinco notas",style:"Rock",level:"Intermedio",origin:"Estudio original",tempo:112,notes:[64,67,69,71,74,71,69,67,64,67,71,74]},
{id:23,title:"Marcha en Do",style:"Estudio",level:"Inicial",origin:"Estudio original",tempo:104,notes:[60,67,64,67,65,69,67,72,60,67,64,60]},
{id:24,title:"Blues en Sol",style:"Blues",level:"Básico",origin:"Estudio original",tempo:96,notes:[67,70,72,73,74,77,74,72,70,67,74,72]},
{id:25,title:"Bolero sencillo",style:"Latino",level:"Básico",origin:"Estudio original",tempo:76,notes:[64,68,71,68,66,69,71,76,74,71,68,66]},
{id:26,title:"Chacarera breve",style:"Folklore",level:"Básico",origin:"Estudio original",tempo:112,notes:[67,71,74,71,69,72,74,79,76,74,72,69]},
{id:27,title:"Minimal electrónico",style:"Pop",level:"Intermedio",origin:"Estudio original",tempo:100,notes:[69,72,76,72,69,76,72,69,67,71,74,71]},
{id:28,title:"Vals en Fa",style:"Estudio",level:"Básico",origin:"Estudio original",tempo:90,notes:[65,69,72,69,67,71,74,71,65,69,72,77]},
{id:29,title:"Latín jazz",style:"Jazz",level:"Intermedio",origin:"Estudio original",tempo:108,notes:[62,65,69,72,74,72,69,65,67,70,74,77]},
{id:30,title:"Estudio de arpegios",style:"Estudio",level:"Intermedio",origin:"Estudio original",tempo:84,notes:[60,64,67,72,67,64,62,65,69,74,69,65,60]},
{id:31,title:"Gavota sencilla",style:"Clásica",level:"Básico",origin:"Estudio original de carácter barroco",tempo:92,notes:[67,72,71,72,74,76,74,72,71,69,67,69,71,67]},
{id:32,title:"Danza de salón",style:"Clásica",level:"Básico",origin:"Estudio original de carácter clásico",tempo:100,notes:[60,64,67,72,71,67,69,72,76,74,71,67,64,60]},
{id:33,title:"Pequeña sonatina",style:"Clásica",level:"Intermedio",origin:"Estudio original inspirado en formas clásicas",tempo:108,notes:[60,64,67,72,76,74,72,71,69,67,64,67,72,67,64,60]},
{id:34,title:"Coral de la mañana",style:"Estudio",level:"Básico",origin:"Estudio original de carácter coral",tempo:72,notes:[60,64,67,67,69,67,64,62,60,62,64,67,65,64,60]},
{id:35,title:"Himno de esperanza",style:"Música de iglesia",level:"Inicial",origin:"Melodía original para práctica de acompañamiento",tempo:76,notes:[60,64,67,69,67,64,62,64,67,72,71,69,67,64,60]},
{id:36,title:"Balada de domingo",style:"Pop",level:"Inicial",origin:"Estudio original",tempo:74,notes:[64,67,69,72,71,69,67,64,62,64,67,69,67,64]},
{id:37,title:"Zamba del río",style:"Folklore",level:"Básico",origin:"Estudio original de inspiración folklórica",tempo:96,notes:[67,71,74,76,74,71,69,72,74,79,76,74,71,67]},
{id:38,title:"Milonga breve",style:"Tango",level:"Básico",origin:"Estudio original de inspiración rioplatense",tempo:108,notes:[60,63,67,70,69,67,63,60,62,65,69,72,70,69]},
{id:39,title:"Cueca de cinco notas",style:"Folklore",level:"Inicial",origin:"Estudio original",tempo:112,notes:[60,64,67,69,67,64,62,65,69,72,69,65,64,60]},
{id:40,title:"Chamamé sencillo",style:"Folklore",level:"Básico",origin:"Estudio original",tempo:104,notes:[67,69,71,74,72,71,69,67,64,67,69,72,71,69]},
{id:41,title:"Candombe de teclas",style:"Latino",level:"Básico",origin:"Estudio original",tempo:110,notes:[60,60,64,67,64,60,67,69,67,64,60,64,67,72]},
{id:42,title:"Son cubano mini",style:"Latino",level:"Básico",origin:"Estudio original",tempo:104,notes:[60,64,67,69,67,64,60,62,65,69,72,69,65,62]},
{id:43,title:"Bolero nocturno",style:"Latino",level:"Inicial",origin:"Estudio original",tempo:72,notes:[60,64,67,72,71,69,67,64,62,64,67,69,72,67]},
{id:44,title:"Swing en Do",style:"Jazz",level:"Intermedio",origin:"Estudio original",tempo:116,notes:[60,64,67,70,72,70,67,64,62,65,69,72,74,72]},
{id:45,title:"Blues lento",style:"Blues",level:"Básico",origin:"Estudio original",tempo:68,notes:[60,63,65,66,67,70,67,65,63,60,62,63,65,60]},
{id:46,title:"Rock de estadio",style:"Rock",level:"Básico",origin:"Estudio original",tempo:120,notes:[60,60,67,67,69,67,64,60,62,62,69,69,67,64,60]},
{id:47,title:"Pop en arpegios",style:"Pop",level:"Básico",origin:"Estudio original",tempo:92,notes:[60,64,67,72,67,64,62,65,69,74,69,65,60,64]},
{id:48,title:"Pulso electrónico",style:"Pop",level:"Inicial",origin:"Estudio original",tempo:100,notes:[60,60,64,60,67,60,64,60,62,62,65,62,69,62]},
{id:49,title:"Estudio de notas repetidas",style:"Estudio",level:"Básico",origin:"Estudio original para control de articulación",tempo:88,notes:[64,64,64,67,67,67,69,69,69,67,67,67,64,64,64]},
{id:50,title:"Arpegios quebrados en Sol",style:"Estudio",level:"Intermedio",origin:"Estudio original para coordinación",tempo:80,notes:[67,71,74,79,74,71,67,71,74,79,83,79,74,71,67]}
];

let saved={};
try{saved=JSON.parse(localStorage.getItem("academiaPianoProgress")||"{}")||{}}catch(e){}
saved.lessons=saved.lessons||[];saved.songs=saved.songs||[];saved.score=saved.score||0;saved.practiceChecks=saved.practiceChecks||[];
let activeView="home", currentLesson=null, selectedSong=1, songIndex=0, songPractice=false, keyLabels=true, pianoMode="free", targetMidi=64;
let audioCtx=null, metroTimer=null, metroBeat=0, currentInterval=null, currentRhythm=null, staffTarget=64, staffClef="treble", keyboardStartMidi=60, songSearch="";
function persist(){try{localStorage.setItem("academiaPianoProgress",JSON.stringify(saved))}catch(e){}}
function go(view){activeView=view;document.documentElement.classList.toggle("studio-fullscreen",view==="studio");document.body.classList.toggle("studio-fullscreen",view==="studio");document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id===view));document.querySelectorAll(".nav button").forEach(x=>x.classList.toggle("active",x.dataset.view===view));if(view==="course")renderLessons();if(view==="studio"){studioRenderList();studioUpdate();studioResize()}if(view==="library")renderLibrary();if(view==="tech")renderTechnique();if(view==="progress")renderProgress();if(view==="piano")renderPiano();if(view!=="studio"){studioStartToken++;if(se("engine-play"))se("engine-play").disabled=false;if(studioRunning)studioPause();window.scrollTo({top:0,behavior:"smooth"})}}
document.querySelectorAll(".nav button").forEach(b=>b.addEventListener("click",()=>go(b.dataset.view)));
function refreshHome(){let pct=Math.round(saved.lessons.length/lessons.length*100);document.getElementById("homePercent").textContent=pct+"%";document.getElementById("homeProgress").style.width=pct+"%";document.getElementById("courseProgress").style.width=pct+"%";document.getElementById("lessonCount").textContent=saved.lessons.length+" / 12 completados"}
function renderLessons(){refreshHome();let list=document.getElementById("lessonList");list.innerHTML=lessons.map((l,i)=>`<div class="lesson-row ${saved.lessons.includes(i)?"done":""}"><div class="lesson-num">${saved.lessons.includes(i)?"✓":String(i+1).padStart(2,"0")}</div><div><h3>${l.title}</h3><p>${l.level} · ${l.time} · ${l.summary}</p></div><button class="btn btn-light btn-small" onclick="openLesson(${i})">${saved.lessons.includes(i)?"Repasar":"Abrir clase"}</button></div>`).join("")}
function openLesson(i){currentLesson=i;let l=lessons[i];document.getElementById("lessonDetail").innerHTML=`<div class="lesson-body"><span class="tag">MÓDULO ${i+1} · ${l.level} · ${l.time}</span><h2>${l.title}</h2><p>${l.body}</p><ul>${l.bullets.map(x=>`<li>${x}</li>`).join("")}</ul><div class="example">${l.example}</div><div class="quiz"><h3>Comprobá lo aprendido</h3><p>${l.q}</p><div class="choices">${l.opts.map((o,j)=>`<button class="choice" onclick="answerLesson(${i},${j},this)">${o}</button>`).join("")}</div><div class="feedback" id="lessonFeedback"></div></div><div class="controls" style="margin-top:16px"><button class="btn btn-dark btn-small" onclick="go('course')">Volver al temario</button><button class="btn btn-primary btn-small" onclick="go('piano')">Practicar en el piano →</button></div></div>`;document.getElementById("lessonDetail").scrollIntoView({behavior:"smooth",block:"start"})}
function answerLesson(i,j,el){let l=lessons[i],buttons=el.parentElement.querySelectorAll("button");buttons.forEach((b,k)=>{b.disabled=true;if(k===l.a)b.classList.add("correct");else if(k===j)b.classList.add("wrong")});let f=document.getElementById("lessonFeedback");if(j===l.a){f.textContent="¡Correcto! "+l.why;f.style.color="var(--green)";if(!saved.lessons.includes(i)){saved.lessons.push(i);saved.score++;persist();renderLessons();refreshHome()}}else{f.textContent="Todavía no. "+l.why;f.style.color="var(--red)"}}
function getAudio(){if(!audioCtx){audioCtx=new(window.AudioContext||window.webkitAudioContext)()}if(audioCtx.state==="suspended")audioCtx.resume();return audioCtx}
// playMidi se reemplaza más abajo por el reproductor de muestras acústicas Salamander.
function noteName(m){let names=["Do","Do♯","Re","Re♯","Mi","Fa","Fa♯","Sol","Sol♯","La","La♯","Si"];let n=names[m%12],oct=Math.floor(m/12)-1;return n+oct}
function noteShort(m){return noteName(m).replace("♯","#")}
function renderPiano(){buildKeyboard();renderStaff()}
function buildKeyboard(){let kb=document.getElementById("keyboard");if(!kb)return;kb.innerHTML="";kb.classList.toggle("key-label-hidden",!keyLabels);let whiteCount=0;for(let m=keyboardStartMidi;m<keyboardStartMidi+24;m++){let pc=m%12,isBlack=[1,3,6,8,10].includes(pc);if(!isBlack){let k=document.createElement("button");k.className="key-white";k.dataset.midi=m;k.innerHTML=`<span>${keyLabels?noteShort(m):""}</span>`;k.addEventListener("click",()=>keyPressed(m,k));kb.appendChild(k);whiteCount++}else{let key=document.createElement("button");key.className="key-black";key.dataset.midi=m;key.style.left=`calc(${(whiteCount/14)*100}% - 2.1%)`;key.innerHTML=`<span>${keyLabels?noteShort(m):""}</span>`;key.addEventListener("click",()=>keyPressed(m,key));kb.appendChild(key)}}document.getElementById("pianoOctaves").textContent=staffClef==="bass"?"Do3–Si4 · registro grave":"Do4–Si5 · registro agudo"}
function keyPressed(m,key){playMidi(m,.38);key.classList.add("pressed");setTimeout(()=>key.classList.remove("pressed"),160);if(pianoMode==="staff"){if(m===staffTarget){document.getElementById("pianoStatus").textContent="¡Correcto! Leíste y encontraste "+noteName(m)+" en el pentagrama.";document.getElementById("staffPrompt").textContent="¡Bien hecho! Tocá “Nueva nota” para seguir.";saved.score++;persist()}else{document.getElementById("pianoStatus").textContent="Tocaste "+noteName(m)+". Volvé a mirar la posición de la nota en el pentagrama."}}else if(pianoMode==="find"){if(m===targetMidi){document.getElementById("pianoStatus").textContent="¡Muy bien! Encontraste "+noteName(m)+".";saved.score++;persist();targetMidi=pickTarget();document.getElementById("findTarget").textContent=noteName(targetMidi)}else document.getElementById("pianoStatus").textContent="Esa es "+noteName(m)+". Buscá "+noteName(targetMidi)+"."}else if(pianoMode==="song"&&songPractice){let s=songs.find(x=>x.id===selectedSong);if(m===s.notes[songIndex]){songIndex++;if(songIndex>=s.notes.length){document.getElementById("pianoStatus").textContent="¡Excelente! Terminaste "+s.title+".";if(!saved.songs.includes(s.id))saved.songs.push(s.id);saved.score++;persist();songPractice=false;updateSongDetail()}else{document.getElementById("pianoStatus").textContent="¡Correcto! Próxima nota: "+noteName(s.notes[songIndex])+" ("+(songIndex+1)+"/"+s.notes.length+").";updateSongDetail()}}else document.getElementById("pianoStatus").textContent="Escuchá o mirá la siguiente nota: "+noteName(s.notes[songIndex])+"."}else{document.getElementById("pianoStatus").textContent="Tocaste "+noteName(m)+"."}}
function pickTarget(){let a=[60,62,64,65,67,69,71,72,74,76,77,79,81,83];return a[Math.floor(Math.random()*a.length)]}
document.getElementById("modeFree").onclick=()=>{pianoMode="free";songPractice=false;keyboardStartMidi=staffClef==="bass"?48:60;buildKeyboard();document.getElementById("pianoStatus").textContent="Modo libre: tocá cualquier tecla para escucharla.";document.getElementById("modeFree").className="btn btn-dark btn-small";document.getElementById("modeFind").className="btn btn-light btn-small"};
document.getElementById("modeFind").onclick=()=>{pianoMode="find";songPractice=false;keyboardStartMidi=60;buildKeyboard();targetMidi=pickTarget();document.getElementById("pianoStatus").innerHTML='Buscá la nota <b id="findTarget">'+noteName(targetMidi)+'</b> en el teclado.';document.getElementById("modeFind").className="btn btn-dark btn-small";document.getElementById("modeFree").className="btn btn-light btn-small"};
document.getElementById("toggleLabels").onclick=()=>{keyLabels=!keyLabels;document.getElementById("toggleLabels").textContent=keyLabels?"Ocultar nombres":"Mostrar nombres";buildKeyboard()};
document.getElementById("playScale").onclick=()=>[60,62,64,65,67,69,71,72,71,69,67,65,64,62,60].forEach((n,i)=>playMidi(n,.28,i*.31));
document.getElementById("resetPiano").onclick=()=>{pianoMode="free";songPractice=false;document.getElementById("pianoStatus").textContent="Práctica reiniciada. Tocá libremente o elegí un desafío."};
function staffSvg(midi,clef="treble"){
  const pc=midi%12, sharp=[1,3,6,8,10].includes(pc);
  const naturalPc=sharp?pc-1:pc;
  const letterByPc={0:["Do",0],2:["Re",1],4:["Mi",2],5:["Fa",3],7:["Sol",4],9:["La",5],11:["Si",6]};
  const [letter,letterIndex]=letterByPc[naturalPc]||["Do",0];
  const naturalMidi=midi-(sharp?1:0), octave=Math.floor(naturalMidi/12)-1;
  const diatonic=octave*7+letterIndex;
  const reference=clef==="bass"?(2*7+4):(4*7+2); // G2 bass; E4 treble, bottom line
  const step=diatonic-reference, y=150-step*10;
  let ledger="";
  if(y>150){for(let ly=170;ly<=y;ly+=20)ledger+=`<line x1="112" y1="${ly}" x2="150" y2="${ly}" stroke="#596575" stroke-width="1.3"/>`}
  if(y<70){for(let ly=50;ly>=y;ly-=20)ledger+=`<line x1="112" y1="${ly}" x2="150" y2="${ly}" stroke="#596575" stroke-width="1.3"/>`}
  const clefGlyph=clef==="bass"?"𝄢":"𝄞";
  return `<svg viewBox="0 0 360 190" role="img" aria-label="Nota en pentagrama de clave de ${clef==="bass"?"fa":"sol"}"><text x="18" y="142" font-size="78" fill="#26374e">${clefGlyph}</text>${[70,90,110,130,150].map(lineY=>`<line x1="65" y1="${lineY}" x2="335" y2="${lineY}" stroke="#596575" stroke-width="1.3"/>`).join("")}${ledger}${sharp?`<text x="105" y="${y+5}" font-size="20" fill="#17243a">♯</text>`:""}<ellipse cx="132" cy="${y}" rx="9" ry="6.5" fill="#17243a" transform="rotate(-18 132 ${y})"/><line x1="140" y1="${y}" x2="140" y2="${y-38}" stroke="#17243a" stroke-width="2"/></svg>`
}
function renderStaff(){let box=document.getElementById("staffQuiz");if(box)box.innerHTML=staffSvg(staffTarget,staffClef)}
function pickStaffTarget(){let notes=staffClef==="bass"?[48,50,52,53,55,57,59,60,62,64,65,67,69,71]:[60,62,64,65,67,69,71,72,74,76,77,79,81,83];return notes[Math.floor(Math.random()*notes.length)]}
function newStaff(){staffTarget=pickStaffTarget();keyboardStartMidi=staffClef==="bass"?48:60;pianoMode="staff";songPractice=false;buildKeyboard();renderStaff();document.getElementById("staffPrompt").textContent="Encontrá la nota en el teclado.";document.getElementById("pianoStatus").textContent="Desafío de lectura activo: buscá la nota que aparece en la clave de "+(staffClef==="bass"?"Fa":"Sol")+"."}
document.getElementById("newStaffNote").onclick=newStaff;
document.getElementById("clefSelect").addEventListener("change",e=>{staffClef=e.target.value;newStaff()});
const rhythmVals=[{sym:"𝅝",name:"Redonda",beats:4},{sym:"𝅗𝅥",name:"Blanca",beats:2},{sym:"♩",name:"Negra",beats:1},{sym:"♪",name:"Corchea",beats:.5},{sym:"𝅘𝅥𝅯",name:"Semicorchea",beats:.25}];
function newRhythm(){currentRhythm=rhythmVals[Math.floor(Math.random()*rhythmVals.length)];document.getElementById("rhythmQuestion").textContent=currentRhythm.sym;document.getElementById("rhythmFeedback").textContent="";let opts=[.25,.5,1,2,4].sort(()=>Math.random()-.5);document.getElementById("rhythmChoices").innerHTML=opts.map(v=>`<button class="choice" onclick="answerRhythm(${v},this)">${v} ${v===1?"tiempo":"tiempos"}</button>`).join("")}
function answerRhythm(v,el){let btns=el.parentElement.querySelectorAll("button");btns.forEach(b=>{b.disabled=true;if(Number(b.textContent.split(" ")[0])===currentRhythm.beats)b.classList.add("correct");else if(b===el)b.classList.add("wrong")});let f=document.getElementById("rhythmFeedback");if(v===currentRhythm.beats){f.textContent="¡Correcto! "+currentRhythm.name+" = "+currentRhythm.beats+" tiempos.";f.style.color="var(--green)";saved.score++;persist()}else{f.textContent="La respuesta es "+currentRhythm.beats+" tiempos. "+currentRhythm.name+".";f.style.color="var(--red)"}}
document.getElementById("nextRhythm").onclick=newRhythm;
function metroTick(){let c=getAudio(),o=c.createOscillator(),g=c.createGain();o.frequency.value=metroBeat%4===0?1100:760;g.gain.setValueAtTime(.0001,c.currentTime);g.gain.exponentialRampToValueAtTime(.17,c.currentTime+.005);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+.07);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+.08);document.querySelectorAll(".beat-dot").forEach((d,i)=>d.classList.toggle("on",i===metroBeat%4));metroBeat++}
function stopMetro(){if(metroTimer){clearInterval(metroTimer);metroTimer=null}document.querySelectorAll(".beat-dot").forEach(d=>d.classList.remove("on"))}
document.getElementById("metroStart").onclick=()=>{stopMetro();metroBeat=0;metroTick();metroTimer=setInterval(metroTick,60000/Number(document.getElementById("bpm").value))};
document.getElementById("metroStop").onclick=stopMetro;
document.getElementById("bpm").oninput=e=>{let v=Number(e.target.value);document.getElementById("bpmValue").textContent=v;document.getElementById("bpmRead").textContent=v;if(metroTimer){stopMetro();document.getElementById("metroStart").click()}};
document.addEventListener("visibilitychange",()=>{if(document.hidden)stopMetro()});
const intervals=[{s:2,n:"Segunda mayor"},{s:3,n:"Tercera menor"},{s:4,n:"Tercera mayor"},{s:5,n:"Cuarta justa"},{s:7,n:"Quinta justa"},{s:12,n:"Octava justa"}];
function newInterval(){currentInterval=intervals[Math.floor(Math.random()*intervals.length)];let opts=[...intervals].sort(()=>Math.random()-.5);document.getElementById("intervalChoices").innerHTML=opts.map(x=>`<button class="choice" onclick="answerInterval(${x.s},this)">${x.n}</button>`).join("");document.getElementById("intervalFeedback").textContent=""}
function playCurrentInterval(){if(!currentInterval)newInterval();let root=60;playMidi(root,.5,0);playMidi(root+currentInterval.s,.6,.65)}
function answerInterval(s,el){let btns=el.parentElement.querySelectorAll("button");btns.forEach(b=>{b.disabled=true;if(b.textContent===currentInterval.n)b.classList.add("correct");else if(b===el)b.classList.add("wrong")});let f=document.getElementById("intervalFeedback");if(s===currentInterval.s){f.textContent="¡Muy bien! Reconociste "+currentInterval.n+".";f.style.color="var(--green)";saved.score++;persist()}else{f.textContent="Era "+currentInterval.n+". Volvé a escucharlo y compará la distancia.";f.style.color="var(--red)"}}
document.getElementById("playInterval").onclick=playCurrentInterval;document.getElementById("newInterval").onclick=()=>{newInterval();playCurrentInterval()};
let activeFilter="Todos";
function renderLibrary(){let filters=["Todos","Clásica","Tradicional","Estudio","Blues","Jazz","Tango","Latino","Rock","Pop","Folklore","Música de iglesia"];document.getElementById("songFilters").innerHTML=filters.map(f=>`<button class="${f===activeFilter?"active":""}" onclick="setFilter('${f}')">${f}</button>`).join("");let input=document.getElementById("songSearch");if(input){input.value=songSearch;input.oninput=e=>setSongSearch(e.target.value)}renderSongCards();if(selectedSong)updateSongDetail()}
function renderSongCards(){let q=songSearch.trim().toLocaleLowerCase("es");let visible=songs.filter(s=>(activeFilter==="Todos"||s.style===activeFilter)&&(!q||[s.title,s.style,s.level,s.origin].join(" ").toLocaleLowerCase("es").includes(q)));document.getElementById("songGrid").innerHTML=visible.map(s=>`<article class="song-card"><div class="card-top"><span class="tag">${s.style}</span>${saved.songs.includes(s.id)?'<span style="color:var(--green);font-size:12px">✓ Practicada</span>':''}</div><h3>${s.title}</h3><p>${s.level} · ${s.tempo} BPM</p><p>${s.origin}</p><button class="btn btn-light btn-small" onclick="selectSong(${s.id})">Abrir práctica</button></article>`).join("");if(!visible.length)document.getElementById("songGrid").innerHTML='<div class="empty">No hay piezas que coincidan con la búsqueda.</div>'}
function setSongSearch(value){songSearch=value;renderSongCards()}
function setFilter(f){activeFilter=f;renderLibrary()}
function selectSong(id){selectedSong=id;songIndex=0;songPractice=false;updateSongDetail();document.getElementById("songDetail").scrollIntoView({behavior:"smooth",block:"start"})}
function melodySvg(notes){const letterMap=["Do","Do","Re","Re","Mi","Fa","Fa","Sol","Sol","La","La","Si"];const naturalOffset=[0,0,2,2,4,5,5,7,7,9,9,11];const letterIndex={Do:0,Re:1,Mi:2,Fa:3,Sol:4,La:5,Si:6};let width=Math.max(420,notes.length*48+70);let parts=[`<svg viewBox="0 0 ${width} 170" role="img" aria-label="Fragmento melódico en clave de sol"><text x="8" y="116" font-size="66" fill="#26374e">𝄞</text>`];[40,60,80,100,120].forEach(y=>parts.push(`<line x1="58" y1="${y}" x2="${width-12}" y2="${y}" stroke="#596575" stroke-width="1.2"/>`));notes.forEach((m,i)=>{let pc=m%12,oct=Math.floor(m/12)-1,letter=letterMap[pc],base=m-naturalOffset[pc],baseOct=Math.floor(base/12)-1,step=(baseOct-4)*7+letterIndex[letter]-2,y=120-step*10,x=75+i*48;if(y>120){for(let ly=140;ly<=y;ly+=20)parts.push(`<line x1="${x-12}" y1="${ly}" x2="${x+14}" y2="${ly}" stroke="#596575" stroke-width="1.1"/>`)}if(y<40){for(let ly=20;ly>=y;ly-=20)parts.push(`<line x1="${x-12}" y1="${ly}" x2="${x+14}" y2="${ly}" stroke="#596575" stroke-width="1.1"/>`)}if(pc===1||pc===3||pc===6||pc===8||pc===10)parts.push(`<text x="${x-18}" y="${y+5}" font-size="17" fill="#17243a">♯</text>`);parts.push(`<ellipse cx="${x}" cy="${y}" rx="7.5" ry="5.5" fill="#17243a" transform="rotate(-18 ${x} ${y})"/>`);parts.push(`<line x1="${x+6}" y1="${y}" x2="${x+6}" y2="${y-30}" stroke="#17243a" stroke-width="1.7"/>`)});parts.push("</svg>");return parts.join("")}
function updateSongDetail(){let s=songs.find(x=>x.id===selectedSong);if(!s)return;let d=document.getElementById("songDetail");if(!d)return;d.innerHTML=`<div class="card"><div class="panel-title"><div><span class="tag">${s.style} · ${s.level}</span><h2 style="margin:7px 0 3px;color:var(--navy)">${s.title}</h2><p class="muted">${s.origin} · Tempo sugerido: ${s.tempo} BPM</p></div><button class="btn btn-outline btn-small" onclick="playSong(${s.id})">▶ Escuchar</button></div><h3>Fragmento en pentagrama</h3><p class="muted">Lectura didáctica en clave de sol. La secuencia muestra las alturas; el ritmo se trabaja por separado.</p><div class="staff-box" id="songStaff"></div><h3 style="margin-top:15px">Secuencia de notas</h3><p class="muted">Usá esta secuencia como guía. Primero escuchala; después practicá nota por nota en el teclado.</p><div class="note-strip">${s.notes.map((n,i)=>`<span class="note-chip ${songPractice&&i===songIndex?"current":""}">${noteShort(n)}</span>`).join("")}</div><div class="controls"><button class="btn btn-primary btn-small" onclick="startSongPractice(${s.id})">Practicar en el teclado</button><button class="btn btn-light btn-small" onclick="resetSongPractice()">Reiniciar pieza</button><span class="muted" id="songProgress">${songPractice?"Nota "+(songIndex+1)+" de "+s.notes.length:"Lista para practicar"}</span></div></div>`;let scoreBox=document.getElementById("songStaff");if(scoreBox)scoreBox.innerHTML=melodySvg(s.notes)}
function playSong(id){let s=songs.find(x=>x.id===id);s.notes.forEach((n,i)=>playMidi(n,.32,i*(60/s.tempo)*.72))}
function startSongPractice(id){selectedSong=id;songIndex=0;songPractice=true;pianoMode="song";staffClef="treble";keyboardStartMidi=60;document.getElementById("clefSelect").value="treble";go("piano");document.getElementById("pianoStatus").textContent="Practicá "+songs.find(x=>x.id===id).title+". Primera nota: "+noteName(songs.find(x=>x.id===id).notes[0])+".";updateSongDetail()}
function resetSongPractice(){songIndex=0;songPractice=false;pianoMode="free";updateSongDetail();document.getElementById("pianoStatus").textContent="Práctica de pieza reiniciada."}
const pitchNames=["Do","Do♯","Re","Mi♭","Mi","Fa","Fa♯","Sol","La♭","La","Si♭","Si"];
const letterNames=["Do","Re","Mi","Fa","Sol","La","Si"], naturalPitch=[0,2,4,5,7,9,11];
const rootLetterByPc=[0,0,1,2,2,3,3,4,5,5,6,6];
function spellNotes(root,type,intervals,degreeOffsets){let rootLetter=rootLetterByPc[root];return intervals.map((interval,i)=>{let letter=(rootLetter+(degreeOffsets?degreeOffsets[i]:i))%7,target=(root+interval)%12,delta=(target-naturalPitch[letter]+12)%12;if(delta>6)delta-=12;let accidental=delta===1?"♯":delta===-1?"♭":"";return letterNames[letter]+accidental})}
const scalePatterns={major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],harmonic:[0,2,3,5,7,8,11],melodic:[0,2,3,5,7,9,11]};
const scaleLabels={major:"Escala mayor",minor:"Escala menor natural",harmonic:"Escala menor armónica",melodic:"Escala menor melódica ascendente"};
const chordPatterns={major:[0,4,7],minor:[0,3,7],dim:[0,3,6],aug:[0,4,8],sus4:[0,5,7],"7":[0,4,7,10]};
const chordLabels={major:"Mayor",minor:"Menor",dim:"Disminuido",aug:"Aumentado",sus4:"Suspendido de cuarta", "7":"Séptima dominante"};
function selectedScale(){let root=Number(document.getElementById("scaleRoot").value),type=document.getElementById("scaleType").value;return {root,type,notes:scalePatterns[type].map(i=>60+root+i)}}
function renderScaleResult(){let x=selectedScale(),rootName=pitchNames[x.root],spelled=spellNotes(x.root,x.type,scalePatterns[x.type]);document.getElementById("scaleResult").innerHTML=`<strong>${rootName} · ${scaleLabels[x.type]}</strong><div class="scale-notes">${spelled.map(n=>`<span>${n}</span>`).join("")}<span>${rootName}</span></div>`}
function playScaleSelection(){let x=selectedScale(),descending=(x.type==="melodic"?scalePatterns.minor:scalePatterns[x.type]).map(i=>60+x.root+i),seq=[...x.notes,60+x.root+12,...descending.slice().reverse()];seq.forEach((n,i)=>playMidi(n,.28,i*.34))}
function selectedChord(){let root=Number(document.getElementById("chordRoot").value),type=document.getElementById("chordType").value;return {root,type,notes:chordPatterns[type].map(i=>60+root+i)}}
function renderChordResult(){let x=selectedChord(),degrees=x.type==="sus4"?[0,3,4]:x.type==="7"?[0,2,4,6]:[0,2,4],spelled=spellNotes(x.root,x.type,chordPatterns[x.type],degrees);document.getElementById("chordResult").innerHTML=`<strong>${pitchNames[x.root]} ${chordLabels[x.type]}</strong><div class="scale-notes">${spelled.map(n=>`<span>${n}</span>`).join("")}</div><small class="muted">Intervalos desde la fundamental: ${chordPatterns[x.type].join(" · ")} semitonos.</small>`}
function playChordNotes(notes,when=0,duration=.9){let c=getAudio();notes.forEach(n=>playMidi(n,duration,when))}
function playChordLab(arpeggio=false){let x=selectedChord();if(arpeggio)x.notes.forEach((n,i)=>playMidi(n,.48,i*.24));else playChordNotes(x.notes)}
function playAccompaniment(kind){let bpm=84,beat=60/bpm,base=48;let triad=[base,base+4,base+7];if(kind==="waltz"){playMidi(base,.38,0);playChordNotes(triad,beat,.42);playChordNotes(triad,beat*2,.42)}else if(kind==="pop"){[base,base+7,base+12,base+7].forEach((n,i)=>playMidi(n,.34,i*beat))}else{[base,base+4,base+7,base+4,base,base+4,base+7,base+4].forEach((n,i)=>playMidi(n,.28,i*beat/2))}}
function playWorshipProgression(){let roots=[48,43,45,41],qualities=[[0,4,7],[0,4,7],[0,3,7],[0,4,7]],beat=60/76;roots.forEach((root,i)=>playChordNotes(qualities[i].map(n=>root+n),i*beat*4,beat*3.6))}
function renderTechnique(){renderScaleResult();renderChordResult()}
document.getElementById("scaleRoot").addEventListener("change",renderScaleResult);document.getElementById("scaleType").addEventListener("change",renderScaleResult);document.getElementById("playScaleLab").onclick=playScaleSelection;document.getElementById("showScaleNotes").onclick=renderScaleResult;
document.getElementById("chordRoot").addEventListener("change",renderChordResult);document.getElementById("chordType").addEventListener("change",renderChordResult);document.getElementById("playChordLab").onclick=()=>playChordLab(false);document.getElementById("arpeggiateChord").onclick=()=>playChordLab(true);

function renderProgress(){refreshHome();document.getElementById("progressLessons").textContent=saved.lessons.length+" / 12";document.getElementById("progressSongs").textContent=saved.songs.length+" / "+songs.length;document.getElementById("progressScore").textContent=saved.score;let p=Math.round(saved.lessons.length/12*100);document.getElementById("allProgress").style.width=p+"%";document.getElementById("progressMessage").textContent=p===100?"¡Completaste los 12 módulos! Seguí repasando y ampliando tu repertorio.":`Completaste ${saved.lessons.length} de 12 módulos. Cada clase que terminás fortalece tu base musical.`}
document.getElementById("resetProgress").onclick=()=>{if(confirm("¿Querés borrar todo tu progreso guardado en este dispositivo?")){saved={lessons:[],songs:[],score:0,practiceChecks:[]};persist();renderProgress();renderLessons();refreshHome();renderLibrary()}};
function exportProgress(){let blob=new Blob([JSON.stringify({app:"Academia de Piano",version:"1.1.1",exportedAt:new Date().toISOString(),progress:saved},null,2)],{type:"application/json"});let url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="academia-piano-progreso.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function importProgress(file){let reader=new FileReader();reader.onload=()=>{try{let data=JSON.parse(reader.result),p=data.progress||data;if(!p||!Array.isArray(p.lessons)||!Array.isArray(p.songs)||typeof p.score!=="number")throw new Error("Formato no válido");saved={lessons:p.lessons.filter(n=>Number.isInteger(n)&&n>=0&&n<lessons.length),songs:p.songs.filter(n=>songs.some(song=>song.id===n)),score:Math.max(0,p.score),practiceChecks:Array.isArray(p.practiceChecks)?p.practiceChecks:[]};persist();renderProgress();renderLessons();renderLibrary();refreshHome();alert("Respaldo importado correctamente.")}catch(e){alert("No se pudo importar el archivo. Elegí un respaldo JSON válido de Academia de Piano.")}};reader.readAsText(file)}
document.getElementById("exportProgress").onclick=exportProgress;document.getElementById("importProgress").onclick=()=>document.getElementById("progressFile").click();document.getElementById("progressFile").addEventListener("change",e=>{if(e.target.files[0])importProgress(e.target.files[0]);e.target.value=""});
let deferredInstallPrompt=null;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstallPrompt=e;document.getElementById("installHint").textContent="Instalar aplicación"});
document.getElementById("installHint").onclick=async()=>{if(deferredInstallPrompt){deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;return}alert("Para instalarla en iPhone: publicá la aplicación en HTTPS, abrila desde Safari, tocá Compartir y elegí ‘Agregar a pantalla de inicio’. En Android: abrila desde Chrome y elegí ‘Instalar aplicación’ o ‘Agregar a pantalla de inicio’.")};
if("serviceWorker" in navigator && location.protocol.startsWith("http")){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(err=>console.warn("No se pudo registrar el modo sin conexión:",err)))}
renderLessons();renderPiano();newRhythm();newInterval();renderLibrary();renderTechnique();refreshHome();


/* ============================================================
   NOCTURNA · Motor de práctica por manos y canciones
   - Eventos con propiedad hand en cada nota.
   - Modo espera con congelación exacta en el impacto.
   - Acompañamiento automático de la mano contraria.
   - Importación MIDI estándar (SMF) sin dependencias externas.
   - Piano sample-based mediante Web Audio API / AudioBuffer.
   ============================================================ */

const studioOriginal = [
  {id:'st1',title:'Primeros pasos',style:'Original',level:'Inicial',bpm:72,description:'Dos manos · negras y blancas',events:[[[60],[48],1],[[62],[48],1],[[64],[55],1],[[65],[55],1],[[67],[52],2],[[64],[48],1],[[60],[48],1]]},
  {id:'st2',title:'Pregunta y respuesta',style:'Original',level:'Inicial',bpm:80,description:'Frases de cuatro compases',events:[[[60],[48],1],[[64],[48],1],[[67],[52],1],[[64],[52],1],[[62],[43],1],[[65],[43],1],[[67],[50],1],[[60],[48],1]]},
  {id:'st3',title:'Vals de otoño',style:'Original',level:'Básico',bpm:92,description:'Compás 3/4 · bajo y melodía',meter:3,events:[[[64],[48],1],[[67],[52,55],1],[[72],[52,55],1],[[71],[43],1],[[67],[50,55],1],[[64],[50,55],1],[[65],[41],1],[[69],[48,53],1],[[72],[48,53],1],[[67],[43],1],[[64],[50,55],1],[[60],[48,52],1]]},
  {id:'st4',title:'Camino de escalas',style:'Original',level:'Básico',bpm:76,description:'Escala ascendente y descendente',events:[[[60],[48],1],[[62],[50],1],[[64],[52],1],[[65],[53],1],[[67],[55],1],[[69],[57],1],[[71],[59],1],[[72],[60],1],[[71],[59],1],[[69],[57],1],[[67],[55],1],[[65],[53],1],[[64],[52],1],[[62],[50],1],[[60],[48],2]]},
  {id:'st5',title:'Blues del atardecer',style:'Original',level:'Básico',bpm:88,description:'Escala blues y bajo',events:[[[60],[48],1],[[63],[55],1],[[65],[48],1],[[66],[55],1],[[67],[53],1],[[70],[60],1],[[67],[53],1],[[65],[60],1],[[63],[55],1],[[60],[48],1],[[67],[55],1],[[60],[48],1]]},
  {id:'st6',title:'Arpegios en Do',style:'Original',level:'Intermedio',bpm:84,description:'Arpegios y acompañamiento',events:[[[60],[48,55],.5],[[64],[],.5],[[67],[52],.5],[[72],[],.5],[[76],[48,55],.5],[[72],[],.5],[[67],[52],.5],[[64],[],.5],[[62],[43,50],.5],[[65],[],.5],[[67],[47],.5],[[74],[],.5],[[71],[43,50],.5],[[67],[],.5],[[65],[47],.5],[[62],[],.5]]},
  {id:'st7',title:'Aire de tango',style:'Original',level:'Intermedio',bpm:100,description:'Acentos y cromatismos',events:[[[69],[45],1],[[72],[52,57],.5],[[71],[],.5],[[69],[45],1],[[68],[52,57],1],[[69],[41],1],[[72],[48,53],.5],[[76],[],.5],[[74],[43],1],[[69],[45,52],1]]},
  {id:'st8',title:'Cadencia luminosa',style:'Original',level:'Intermedio',bpm:72,description:'Acordes simultáneos',events:[[[60,64,67],[48],2],[[60,65,69],[41],2],[[59,62,67],[43],2],[[60,64,67,72],[48],2]]}
];

/* Arreglos didácticos de dominio público / originales con ambas manos. */
const studioArrangements = [
  {id:'pd-prelude',title:'Preludio en Do · adaptación',style:'Clásica',level:'Básico',bpm:76,description:'Arpegios y bajo · adaptación didáctica a dos manos',events:[[[60],[36],.5],[[64],[],.5],[[67],[43],.5],[[72],[],.5],[[76],[48],.5],[[72],[],.5],[[67],[43],.5],[[64],[],.5],[[60],[41],.5],[[64],[],.5],[[69],[48],.5],[[72],[],.5],[[77],[53],.5],[[72],[],.5],[[69],[48],.5],[[64],[],.5],[[62],[38],.5],[[65],[],.5],[[69],[45],.5],[[74],[],.5],[[77],[50],.5],[[74],[],.5],[[69],[45],.5],[[65],[],.5]]},
  {id:'pd-ode',title:'Oda a la alegría · dos manos',style:'Clásica',level:'Inicial',bpm:90,description:'Melodía y acordes sencillos · arreglo didáctico',events:[[[64],[48,55],1],[[64],[],1],[[65],[48,55],1],[[67],[],1],[[67],[43,50],1],[[65],[],1],[[64],[43,50],1],[[62],[],1],[[60],[41,48],1],[[60],[],1],[[62],[41,48],1],[[64],[],1],[[64],[43,50],1],[[62],[],1],[[62],[43,50],1],[[60],[],1]]},
  {id:'pd-star',title:'Estrellita · dos manos',style:'Tradicional',level:'Inicial',bpm:84,description:'Melodía conocida con acompañamiento de tónica y dominante',events:[[[60],[48,55],1],[[60],[],1],[[67],[48,55],1],[[67],[],1],[[69],[43,50],1],[[69],[],1],[[67],[43,50],2],[[65],[41,48],1],[[65],[],1],[[64],[41,48],1],[[64],[],1],[[62],[43,50],1],[[62],[],1],[[60],[48,55],2]]},
  {id:'pd-furelise',title:'Para Elisa · fragmento a dos manos',style:'Clásica',level:'Básico',bpm:88,description:'Motivo inicial con bajo de acompañamiento · arreglo didáctico',events:[[[76],[45],.5],[[75],[],.5],[[76],[52],.5],[[75],[],.5],[[76],[57],.5],[[71],[],.5],[[74],[52],.5],[[72],[],.5],[[69],[45],1],[[60],[52],.5],[[64],[],.5],[[69],[57],.5],[[71],[],.5],[[64],[52],.5],[[68],[],.5],[[71],[45],.5],[[72],[],1]]},
  {id:'pd-birthday',title:'Cumpleaños feliz · dos manos',style:'Tradicional',level:'Inicial',bpm:96,meter:3,pickup:1,description:'Melodía conocida con acordes de Do, Sol7 y Fa · compás 3/4',events:[[[67],[],.5],[[67],[],.5],[[69],[48,55],1],[[67],[],1],[[72],[],1],[[71],[43,53],2],[[67],[],.5],[[67],[],.5],[[69],[43,53],1],[[67],[],1],[[74],[],1],[[72],[48,55],2],[[67],[],.5],[[67],[],.5],[[79],[48,55],1],[[76],[],1],[[72],[],1],[[71],[43,53],1],[[69],[],1],[[77],[41,48],.5],[[77],[],.5],[[76],[48,55],1],[[72],[],1],[[74],[43,53],1],[[72],[48,52,55],3]]},
  {id:'pd-canon',title:'Canon en Re · bajo y melodía',style:'Clásica',level:'Básico',bpm:66,description:'Famoso bajo de ocho notas en la izquierda con melodía lenta en la derecha',events:[[[78],[50],2],[[76],[45],2],[[74],[47],2],[[73],[42],2],[[71],[43],2],[[69],[50],2],[[71],[43],2],[[73],[45],2]]}
];

function normalizeLegacyPiece(piece) {
  let beat = 0;
  const bpm = Number(piece.bpm) || 80;
  const events = piece.events.map(raw => {
    if (!Array.isArray(raw)) return raw;
    const [right = [], left = [], beatDuration = 1] = raw;
    const t = beat * 60 / bpm;
    const d = Math.max(.08, beatDuration * 60 / bpm);
    const notes = [
      ...right.map(midi => ({midi, hand:'right', velocity:.82, duration:d})),
      ...left.map(midi => ({midi, hand:'left', velocity:.72, duration:d}))
    ];
    beat += beatDuration;
    return {t, d, notes};
  });
  return {...piece, events};
}

const studioLibrary = [
  ...studioOriginal.map(normalizeLegacyPiece),
  ...studioArrangements.map(normalizeLegacyPiece),
  ...songs.filter(song => ![1,2,3,7].includes(song.id)).map(song => ({
    id:`melody-${song.id}`,
    title:song.title,
    style:song.style === 'Estudio' ? 'Original' : song.style,
    level:song.level,
    bpm:song.tempo,
    description:`${song.origin} · melodía de mano derecha`,
    rightOnly:true,
    events:song.notes.map((midi,index) => ({
      t:index * 60 / song.tempo,
      d:.72 * 60 / song.tempo,
      notes:[{midi,hand:'right',velocity:.82,duration:.72 * 60 / song.tempo}]
    }))
  }))
];

const se = id => document.getElementById(id);
let studioCurrent = null;
let studioStep = 0;
let studioFilter = 'Todos';
let studioHits = 0;
let studioMistakes = 0;
let studioMidi = null;
let studioActive = new Set();
let studioPressed = new Set();
let studioExpected = new Set();
let studioHandMode = 'both';
let studioWaitMode = true;
let studioSpeed = 1;
let studioLoop = false;
let studioRunning = false;
let studioBlocked = false;
let studioPausedAt = 0;
let studioBaseTime = 0;
let studioStartedAt = 0;
let studioRaf = 0;
let studioStartToken = 0;
let studioCanvas = null;
let studioCtx = null;
let studioWidth = 0;
let studioHeight = 0;
let studioDpr = 1;
let studioKeyEls = new Map();
let studioAutoPlayedStep = -1;
let studioMidiInputs = [];
const STUDIO_KEY_MIN = 36;
const STUDIO_KEY_MAX = 96;
const STUDIO_IMPACT = .86;
const STUDIO_LEAD_SECONDS = 2.7;

/* Muestras acústicas Salamander Piano. Se buscan primero en ./audio/ y luego online. */
const PIANO_SAMPLE_ROOTS = [
  {midi:36,file:'C2.mp3'}, {midi:48,file:'C3.mp3'},
  {midi:60,file:'C4.mp3'}, {midi:64,file:'E4.mp3'},
  {midi:67,file:'G4.mp3'}, {midi:72,file:'C5.mp3'},
  {midi:76,file:'E5.mp3'}, {midi:79,file:'G5.mp3'},
  {midi:84,file:'C6.mp3'}
];
const pianoSampleBuffers = new Map();
const pianoSampleLoads = new Map();
const pianoSampleFailures = new Set();
const pianoActiveSources = new Set();
let pianoMasterGain = null;

function nearestPianoRoots(midi) {
  return [...PIANO_SAMPLE_ROOTS].sort((a,b) => Math.abs(a.midi-midi)-Math.abs(b.midi-midi));
}

async function loadPianoSample(root) {
  if (pianoSampleBuffers.has(root.midi)) return pianoSampleBuffers.get(root.midi);
  if (pianoSampleFailures.has(root.midi)) return null;
  if (pianoSampleLoads.has(root.midi)) return pianoSampleLoads.get(root.midi);
  const task = (async () => {
    const context = getAudio();
    const urls = [`./audio/${root.file}`, `https://tonejs.github.io/audio/salamander/${root.file}`];
    for (const url of urls) {
      try {
        const response = await fetch(url, {mode:'cors',cache:'force-cache'});
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const bytes = await response.arrayBuffer();
        const buffer = await context.decodeAudioData(bytes.slice(0));
        pianoSampleBuffers.set(root.midi, buffer);
        return buffer;
      } catch (error) {
        // Se prueba la siguiente fuente. La primera es local para permitir uso offline.
      }
    }
    pianoSampleFailures.add(root.midi);
    return null;
  })();
  pianoSampleLoads.set(root.midi, task);
  const result = await task;
  pianoSampleLoads.delete(root.midi);
  return result;
}

async function findPianoSample(midi) {
  for (const root of nearestPianoRoots(midi)) {
    const buffer = await loadPianoSample(root);
    if (buffer) return {root, buffer};
  }
  return null;
}

async function preloadStudioSamples(piece=studioCurrent) {
  if (!piece) return 0;
  const notes = [...new Set(piece.events.flatMap(event => (event.notes || []).map(note => note.midi)))];
  const loaded = await Promise.all(notes.map(findPianoSample));
  return loaded.filter(Boolean).length;
}

async function playMidi(midi, duration=.42, when=0, velocity=.82) {
  const context = getAudio();
  if (context.state === 'suspended') await context.resume();
  if (!pianoMasterGain) {
    pianoMasterGain = context.createGain();
    pianoMasterGain.gain.value = .76;
    pianoMasterGain.connect(context.destination);
  }
  const sample = await findPianoSample(midi);
  if (!sample) {
    const status = se('engine-status');
    if (status) status.textContent = 'No se pudieron cargar las muestras acústicas. Revisá la conexión o la carpeta audio.';
    return false;
  }
  const source = context.createBufferSource();
  const envelope = context.createGain();
  const startAt = context.currentTime + Math.max(0, Number(when) || 0);
  const length = Math.max(.12, Number(duration) || .42);
  source.buffer = sample.buffer;
  source.playbackRate.value = Math.pow(2, (midi - sample.root.midi) / 12);
  envelope.gain.setValueAtTime(.0001, startAt);
  envelope.gain.exponentialRampToValueAtTime(Math.max(.025, Math.min(1, velocity) * .78), startAt + .018);
  envelope.gain.setTargetAtTime(.0001, startAt + length, .28);
  source.connect(envelope);
  envelope.connect(pianoMasterGain);
  source.start(startAt);
  source.stop(startAt + length + 1.1);
  pianoActiveSources.add(source);
  source.onended = () => pianoActiveSources.delete(source);
  return true;
}

function stopPianoSamples() {
  for (const source of [...pianoActiveSources]) {
    try { source.stop(); } catch (error) {}
  }
  pianoActiveSources.clear();
}

function studioHasHand(hand) {
  return !!studioCurrent?.events.some(event => event.notes?.some(note => note.hand === hand));
}

function studioRenderList() {
  const host = se('studioList');
  if (!host) return;
  const query = (se('studioSearch')?.value || '').trim().toLocaleLowerCase('es');
  const visible = studioLibrary.filter(piece => {
    const styleMatch = studioFilter === 'Todos' || (studioFilter === 'Otro'
      ? !['Original','Clásica','Tradicional'].includes(piece.style)
      : piece.style === studioFilter);
    const textMatch = !query || `${piece.title} ${piece.style} ${piece.level} ${piece.description}`.toLocaleLowerCase('es').includes(query);
    return styleMatch && textMatch;
  });
  host.replaceChildren();
  for (const piece of visible) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `studio-item${piece.id === studioCurrent?.id ? ' active' : ''}`;
    button.dataset.song = String(piece.id);
    const icon = document.createElement('span');
    icon.className = 'song-icon';
    icon.textContent = piece.imported ? '⇧' : '♫';
    const details = document.createElement('span');
    const title = document.createElement('strong');
    title.textContent = piece.title;
    const meta = document.createElement('small');
    const hands = piece.rightOnly ? 'Solo MD' : 'Dos manos';
    const best = studioStarsAll()[`${piece.id}#all`];
    meta.textContent = `${piece.level} · ${piece.style} · ${piece.bpm} BPM · ${hands}${best ? ' · ' + '★'.repeat(best) : ''}`;
    details.append(title, meta);
    button.append(icon, details);
    button.addEventListener('click', () => studioSelect(piece.id));
    host.append(button);
  }
  if (!visible.length) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = 'No se encontraron piezas con ese nombre.';
    host.append(empty);
  }
}

function studioSelect(id) {
  const piece = studioLibrary.find(item => String(item.id) === String(id));
  if (!piece) return;
  studioReset(false);
  studioCurrent = piece;
  studioPrepare(piece);
  studioSections = piece._sections;
  studioFillSections();
  studioLesson = null;
  studioLessonUI();
  studioSetRange(0, piece.events.length);
  if (!studioHasHand('right')) studioHandMode = 'left';
  else if (!studioHasHand('left')) studioHandMode = 'right';
  else studioHandMode = 'both';
  se('studioTitle').textContent = piece.title;
  se('studioSubtitle').textContent = piece.description || 'Práctica interactiva · dos manos';
  se('studioLevel').textContent = piece.level || 'Importada';
  studioSyncHandButtons();
  studioRenderList();
  studioUpdate();
  studioDraw();
  se('engine-status').textContent = `${piece.events.length} pasos · ${piece.bpm || 'Tempo MIDI'} BPM · elegí una mano y comenzá.`;
  se('engine-feedback').textContent = piece.rightOnly
    ? 'Esta pista contiene solo melodía de mano derecha. Para practicar ambas manos, elegí un arreglo a dos manos o importá un MIDI completo.'
    : 'Elegí mano derecha, mano izquierda o ambas. En modo espera, el acompañamiento contrario se reproduce automáticamente.';
  se('engine-instruction').hidden = true;
  studioSetPlayButton();
  studioScoreSync(true);
}

function studioSyncHandButtons() {
  const hasRight = studioHasHand('right');
  const hasLeft = studioHasHand('left');
  document.querySelectorAll('[data-hand-mode]').forEach(button => {
    const mode = button.dataset.handMode;
    button.classList.toggle('active', mode === studioHandMode);
    button.setAttribute('aria-pressed', String(mode === studioHandMode));
    button.disabled = (mode === 'right' && !hasRight) || (mode === 'left' && !hasLeft) || (mode === 'both' && !(hasRight && hasLeft));
  });
}

function studioExpectedNotes(event) {
  const notes = event?.notes || [];
  if (studioHandMode === 'right') return notes.filter(note => note.hand === 'right');
  if (studioHandMode === 'left') return notes.filter(note => note.hand === 'left');
  return notes;
}

function studioAutoNotes(event) {
  if (studioHandMode === 'right') return (event.notes || []).filter(note => note.hand === 'left');
  if (studioHandMode === 'left') return (event.notes || []).filter(note => note.hand === 'right');
  return [];
}

function studioFingerName(number) {
  return ({1:'pulgar',2:'índice',3:'medio',4:'anular',5:'meñique'})[Number(number)] || 'dedo';
}

function studioShowInstruction(event, expected) {
  const label = note => {
    const finger = note.finger == null ? '' : ` · dedo ${note.finger} (${studioFingerName(note.finger)})`;
    return `${noteName(note.midi)}${finger}`;
  };
  const rightNotes = expected.filter(note => note.hand === 'right');
  const leftNotes = expected.filter(note => note.hand === 'left');
  const right = rightNotes.map(label);
  const left = leftNotes.map(label);
  const parts = [];
  if ((studioHandMode === 'right' || studioHandMode === 'both') && right.length)
    parts.push(`🔵 MANO DERECHA: ${right.join(' + ')}`);
  if ((studioHandMode === 'left' || studioHandMode === 'both') && left.length)
    parts.push(`🟢 MANO IZQUIERDA: ${left.join(' + ')}`);
  const message = parts.join('   |   ');
  const instruction = se('engine-instruction');
  instruction.textContent = message || 'Seguí los dedos indicados sobre el teclado';
  instruction.setAttribute('aria-label', message || 'Tocá las notas iluminadas');
  instruction.hidden = false;
  studioPaintKeys();
}

function studioBuildKeys() {
  const host = se('liveKeyboard');
  if (!host) return;
  host.replaceChildren();
  studioKeyEls.clear();
  const blackPitchClasses = [1,3,6,8,10];
  const whites = [];
  for (let midi = STUDIO_KEY_MIN; midi <= STUDIO_KEY_MAX; midi++) {
    if (!blackPitchClasses.includes(midi % 12)) whites.push(midi);
  }
  const whiteWidth = 100 / whites.length;
  for (const midi of whites) {
    const key = document.createElement('button');
    key.type = 'button';
    key.className = 'live-key';
    key.dataset.note = String(midi);
    key.setAttribute('aria-label', noteName(midi));
    const label = document.createElement('span');
    label.textContent = midi % 12 === 0 ? noteName(midi) : '';
    key.append(label);
    studioBindVirtualKey(key, midi);
    host.append(key);
    studioKeyEls.set(midi, key);
  }
  for (let midi = STUDIO_KEY_MIN; midi <= STUDIO_KEY_MAX; midi++) {
    if (!blackPitchClasses.includes(midi % 12)) continue;
    const key = document.createElement('button');
    key.type = 'button';
    key.className = 'live-key black';
    key.dataset.note = String(midi);
    key.setAttribute('aria-label', noteName(midi));
    const before = whites.filter(value => value < midi).length;
    key.style.left = `calc(${before * whiteWidth}% - ${whiteWidth * .34}%)`;
    key.style.width = `${whiteWidth * .68}%`;
    studioBindVirtualKey(key, midi);
    host.append(key);
    studioKeyEls.set(midi, key);
  }
  studioPaintKeys();
}

function studioBindVirtualKey(key, midi) {
  key.addEventListener('pointerdown', event => {
    event.preventDefault();
    try { key.setPointerCapture(event.pointerId); } catch (error) {}
    studioNoteOn(midi, 'virtual');
  });
  ['pointerup','pointercancel','lostpointercapture'].forEach(type => key.addEventListener(type, () => studioNoteOff(midi)));
}

function studioNoteOn(midi, origin='midi') {
  if (studioActive.has(midi)) return;
  studioActive.add(midi);
  studioPaintKeys();
  playMidi(midi, .48, 0, .88);
  se('engine-key-hint').textContent = `${noteName(midi)} · ${origin === 'midi' ? 'piano MIDI' : 'teclado virtual'}`;
  if (!studioWaitMode || !studioBlocked) {
    se('engine-feedback').textContent = `Tocaste ${noteName(midi)}.`;
    return;
  }
  if (studioExpected.has(midi)) {
    studioPressed.add(midi);
    studioBurstKey(midi);
    const missing = [...studioExpected].filter(note => !studioPressed.has(note));
    if (!missing.length) studioCompleteWait();
    else se('engine-feedback').textContent = `Bien. Falta: ${missing.map(noteName).join(' + ')}.`;
  } else {
    studioMistakes++;
    se('engine-feedback').textContent = `Esa fue ${noteName(midi)}. Revisá las teclas iluminadas y probá otra vez.`;
    studioUpdate();
  }
}

function studioNoteOff(midi) {
  studioActive.delete(midi);
  studioPaintKeys();
}

function studioPaintKeys() {
  const event = studioCurrent?.events[studioStep];
  const expectedNotes = studioBlocked ? studioExpectedNotes(event) : [];
  const expectedByMidi = new Map();
  for (const note of expectedNotes) {
    if (!expectedByMidi.has(note.midi)) expectedByMidi.set(note.midi, new Set());
    expectedByMidi.get(note.midi).add(note.hand);
  }
  const fingersByMidi = new Map();
  for (const note of expectedNotes) if (note.finger != null) {
    if (!fingersByMidi.has(note.midi)) fingersByMidi.set(note.midi, []);
    fingersByMidi.get(note.midi).push(note.finger);
  }
  for (const [midi, key] of studioKeyEls) {
    const hands = expectedByMidi.get(midi) || new Set();
    key.classList.toggle('active', studioActive.has(midi));
    const fingers = fingersByMidi.get(midi);
    if (fingers) key.dataset.finger = fingers.join('/'); else delete key.dataset.finger;
    if (hands.size) key.dataset.hand = hands.has('right') && hands.has('left') ? 'both' : (hands.has('right') ? 'right' : 'left');
    else delete key.dataset.hand;
    if (hands.size) {
      const handLabel = hands.has('right') && hands.has('left') ? 'ambas manos' : (hands.has('right') ? 'mano derecha' : 'mano izquierda');
      key.setAttribute('aria-label', `${noteName(midi)}, ${handLabel}${fingers ? `, dedo ${fingers.join(' y ')}` : ''}`);
    } else key.setAttribute('aria-label', noteName(midi));
    key.classList.toggle('expected-right', hands.has('right'));
    key.classList.toggle('expected-left', hands.has('left'));
    key.classList.toggle('expected-both', hands.has('right') && hands.has('left'));
  }
}

function studioBurstKey(midi) {
  const key = studioKeyEls.get(midi);
  if (!key) return;
  key.classList.remove('correct-burst');
  void key.offsetWidth;
  key.classList.add('correct-burst');
  const directions = [[-18,-24],[0,-32],[18,-24],[-24,-8],[24,-8],[0,-18]];
  for (const [dx,dy] of directions) {
    const particle = document.createElement('i');
    particle.className = 'key-particle';
    particle.style.setProperty('--dx', `${dx}px`);
    particle.style.setProperty('--dy', `${dy}px`);
    key.append(particle);
    particle.addEventListener('animationend', () => particle.remove(), {once:true});
  }
  window.setTimeout(() => key.classList.remove('correct-burst'), 650);
}

function studioSongTime() {
  return studioRunning
    ? studioBaseTime + ((performance.now() - studioStartedAt) / 1000) * studioSpeed
    : studioPausedAt;
}

function studioSetPlayButton() {
  const button = se('engine-play');
  if (!button) return;
  button.textContent = studioRunning ? 'Ⅱ' : '▶';
  button.setAttribute('aria-label', studioRunning ? 'Pausar' : 'Reproducir');
  button.title = studioRunning ? 'Pausar' : 'Reproducir';
  button.classList.toggle('is-playing', studioRunning);
}

function studioUpdate() {
  const total = Math.max(0, studioRange.end - studioRange.start);
  const done = Math.min(total, Math.max(0, studioStep - studioRange.start));
  const progress = total ? Math.round(done / total * 100) : 0;
  const bar = se('engine-progress');
  if (bar) bar.value = progress;
  const label = se('engine-progress-label');
  if (label) label.textContent = `${Math.min(done + (studioBlocked ? 1 : 0), total)} / ${total} pasos · ${progress}%`;
  const accuracy = se('engine-accuracy');
  if (accuracy) accuracy.textContent = (studioHits + studioMistakes)
    ? `${Math.round(studioHits / (studioHits + studioMistakes) * 100)}%` : '—';
  studioPaintKeys();
}

function studioReset(showMessage=true) {
  studioStartToken++;
  cancelAnimationFrame(studioRaf);
  if (se('engine-play')) se('engine-play').disabled = false;
  studioRunning = false;
  studioBlocked = false;
  if (studioDemo) { studioDemo = false; studioWaitMode = studioPrevWait; }
  studioHideResults();
  studioStep = studioRange.start;
  studioPausedAt = studioStartTime();
  if (se('engine-time')) se('engine-time').textContent = '00:00';
  studioBaseTime = studioPausedAt;
  studioHits = 0;
  studioMistakes = 0;
  studioExpected.clear();
  studioPressed.clear();
  studioAutoPlayedStep = -1;
  stopPianoSamples();
  if (se('engine-instruction')) se('engine-instruction').hidden = true;
  studioSetPlayButton();
  studioUpdate();
  studioDraw();
  if (showMessage && se('engine-feedback')) se('engine-feedback').textContent = 'Práctica reiniciada. Tocá reproducir para empezar de nuevo.';
}

function studioPause() {
  if (!studioRunning) return;
  studioPausedAt = studioSongTime();
  studioBaseTime = studioPausedAt;
  const pausedMinutes = Math.floor(studioPausedAt / 60);
  const pausedSeconds = Math.floor(studioPausedAt % 60);
  se('engine-time').textContent = `${String(pausedMinutes).padStart(2,'0')}:${String(pausedSeconds).padStart(2,'0')}`;
  studioRunning = false;
  cancelAnimationFrame(studioRaf);
  stopPianoSamples();
  studioSetPlayButton();
  studioDraw();
  se('engine-status').textContent = 'Pausado · posición conservada.';
}

function studioStartClock() {
  if (studioBlocked || !studioCurrent) return;
  if (studioStep >= studioRange.end) studioReset(false);
  studioBaseTime = studioPausedAt;
  studioStartedAt = performance.now();
  studioRunning = true;
  studioSetPlayButton();
  se('engine-status').textContent = 'Práctica activa · seguí las notas hasta la línea de impacto.';
  cancelAnimationFrame(studioRaf);
  studioRaf = requestAnimationFrame(studioFrame);
}

async function studioBegin() {
  if (!studioCurrent) return;
  if (studioRunning) { studioPause(); return; }
  if (studioBlocked) {
    se('engine-feedback').textContent = 'La canción está esperando tus notas. Tocá las teclas iluminadas para continuar.';
    return;
  }
  const token = ++studioStartToken;
  const selectedPiece = studioCurrent;
  let context;
  try {
    context = getAudio();
    if (context.state === 'suspended') await context.resume();
  } catch (error) {
    se('engine-status').textContent = 'Este navegador no pudo iniciar Web Audio.';
    se('engine-feedback').textContent = 'Probá con un navegador actualizado y habilitá el audio del sitio.';
    return;
  }
  se('engine-status').textContent = 'Preparando piano acústico…';
  se('engine-play').disabled = true;
  const loaded = await preloadStudioSamples(selectedPiece);
  if (token !== studioStartToken || selectedPiece !== studioCurrent || activeView !== 'studio') {
    se('engine-play').disabled = false;
    return;
  }
  se('engine-play').disabled = false;
  if (!loaded) {
    se('engine-status').textContent = 'No se pudo cargar el piano acústico.';
    se('engine-feedback').textContent = 'Conectate a internet o agregá las muestras MP3 en la carpeta audio/ para usar el piano sin conexión.';
    return;
  }
  if (pianoMasterGain) pianoMasterGain.gain.setTargetAtTime(Number(se('engine-volume').value), context.currentTime, .03);
  studioStartClock();
}

function studioCompleteWait() {
  if (!studioBlocked) return;
  const event = studioCurrent.events[studioStep];
  for (const midi of studioExpected) studioBurstKey(midi);
  studioHits++;
  studioStep++;
  studioExpected.clear();
  studioPressed.clear();
  studioBlocked = false;
  se('engine-instruction').hidden = true;
  studioUpdate();
  if (studioStep >= studioRange.end) {
    studioFinish();
    return;
  }
  studioBaseTime = studioPausedAt;
  studioStartedAt = performance.now();
  studioRunning = true;
  studioSetPlayButton();
  se('engine-feedback').textContent = '¡Correcto! Avanzamos al siguiente grupo de notas.';
  studioRaf = requestAnimationFrame(studioFrame);
}

function studioFinish() {
  studioRunning = false;
  studioBlocked = false;
  cancelAnimationFrame(studioRaf);
  studioSetPlayButton();
  se('engine-instruction').hidden = true;
  const fin = studioCurrent.events[studioRange.end - 1];
  const finalTime = fin ? fin.t + (fin.d || .3) : 0;
  se('engine-time').textContent = `${String(Math.floor(finalTime / 60)).padStart(2,'0')}:${String(Math.floor(finalTime % 60)).padStart(2,'0')}`;
  studioStep = studioRange.end;
  studioUpdate();
  if (studioDemo) { studioEndDemo(); return; }
  const whole = studioRange.start === 0 && studioRange.end === studioCurrent.events.length;
  const accuracy = Math.round(studioHits / Math.max(1, studioHits + studioMistakes) * 100);
  se('engine-status').textContent = whole ? 'Pieza completada.' : 'Sección completada.';
  const stars = studioStarsFor(accuracy);
  const secIdx = whole ? -1 : studioSections.findIndex(s => s.start === studioRange.start && s.end === studioRange.end);
  const twoHands = studioHasHand('right') && studioHasHand('left');
  const lessonPartial = studioLesson && twoHands && studioLesson.plan[studioLesson.idx].hand !== 'both';
  if (!lessonPartial) studioSaveStars(whole ? 'all' : secIdx, stars);
  const streak = studioStreakTouch();
  studioFillSections();
  se('engine-feedback').textContent = studioLesson
    ? `${'★'.repeat(stars)}${'☆'.repeat(3 - stars)} Precisión ${accuracy}%. Pasamos al siguiente paso…`
    : `${'★'.repeat(stars)}${'☆'.repeat(3 - stars)} Precisión ${accuracy}%.`;
  if (!studioLesson) studioShowResults(stars, accuracy, studioMistakes, secIdx, streak);
  if (whole) {
    try {
      const key = 'academiaStudioCompleted';
      const completed = JSON.parse(localStorage.getItem(key) || '[]');
      if (!completed.includes(studioCurrent.id)) completed.push(studioCurrent.id);
      localStorage.setItem(key, JSON.stringify(completed));
    } catch (error) {}
  }
  const token = studioStartToken;
  if (studioLesson) {
    window.setTimeout(() => { if (token === studioStartToken && studioLesson) studioLessonNext(); }, 1100);
  } else if (whole && studioLoop) {
    window.setTimeout(() => { if (token !== studioStartToken) return; studioReset(false); studioBegin(); }, 800);
  }
}

function studioFrame() {
  if (!studioRunning) return;
  const now = studioSongTime();
  const minutes = Math.floor(now / 60);
  const seconds = Math.floor(now % 60);
  se('engine-time').textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
  const events = studioCurrent.events;
  let safety = 0;
  while (studioStep < studioRange.end && events[studioStep].t <= now + .012 && safety++ < 100) {
    const event = events[studioStep];
    if (studioWaitMode) {
      const expected = studioExpectedNotes(event);
      const accompaniment = studioAutoNotes(event);
      accompaniment.forEach(note => playMidi(note.midi, (note.duration || event.d || .35) / studioSpeed, 0, note.velocity || .72));
      if (expected.length) {
        studioPausedAt = event.t;
        studioBaseTime = studioPausedAt;
        studioRunning = false;
        studioBlocked = true;
        studioExpected = new Set(expected.map(note => note.midi));
        studioPressed.clear();
        studioShowInstruction(event, expected);
        studioSetPlayButton();
        se('engine-status').textContent = 'Modo espera · la línea quedó congelada.';
        se('engine-feedback').textContent = 'Tocá las notas indicadas. La mano contraria está acompañando automáticamente.';
        studioUpdate();
        studioDraw();
        return;
      }
      // Si este evento no tiene notas de la mano elegida, suena la otra mano y continúa.
      studioStep++;
      studioUpdate();
    } else {
      const shown = studioDemo && studioHandMode !== 'both' ? event.notes.filter(note => note.hand === studioHandMode) : event.notes;
      shown.forEach(note => { playMidi(note.midi, (note.duration || event.d || .35) / studioSpeed, 0, note.velocity || .8); if (studioDemo) studioBurstKey(note.midi); });
      studioStep++;
    }
  }
  studioDraw();
  const last = events[studioRange.end - 1];
  if (studioStep >= studioRange.end && now >= last.t + (last.d || .3) + .35) {
    studioFinish();
    return;
  }
  studioRaf = requestAnimationFrame(studioFrame);
}

function studioKeyGeometry(midi, width) {
  const whites = [];
  for (let n = STUDIO_KEY_MIN; n <= STUDIO_KEY_MAX; n++) {
    if (![1,3,6,8,10].includes(n % 12)) whites.push(n);
  }
  const whiteWidth = width / whites.length;
  const black = [1,3,6,8,10].includes(midi % 12);
  if (black) {
    const before = whites.filter(n => n < midi).length;
    const w = whiteWidth * .68;
    return {x:before * whiteWidth - w / 2, w};
  }
  const index = whites.indexOf(midi);
  return {x:index * whiteWidth + whiteWidth * .12, w:whiteWidth * .76};
}

function studioDraw() {
  if (!studioCanvas || !studioCtx) return;
  const rect = studioCanvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  studioDpr = Math.min(window.devicePixelRatio || 1, 2);
  const pixelWidth = Math.round(rect.width * studioDpr);
  const pixelHeight = Math.round(rect.height * studioDpr);
  if (studioCanvas.width !== pixelWidth || studioCanvas.height !== pixelHeight) {
    studioCanvas.width = pixelWidth;
    studioCanvas.height = pixelHeight;
  }
  studioWidth = rect.width;
  studioHeight = rect.height;
  studioCtx.setTransform(studioDpr,0,0,studioDpr,0,0);
  const ctx = studioCtx;
  const w = studioWidth;
  const h = studioHeight;
  const impactY = h * STUDIO_IMPACT;
  const pxPerSecond = impactY / STUDIO_LEAD_SECONDS;
  const now = studioSongTime();
  ctx.clearRect(0,0,w,h);
  const bg = ctx.createLinearGradient(0,0,0,h);
  bg.addColorStop(0,'#0d192a');
  bg.addColorStop(1,'#07111e');
  ctx.fillStyle = bg;
  ctx.fillRect(0,0,w,h);

  const whiteKeys = [];
  for (let n = STUDIO_KEY_MIN; n <= STUDIO_KEY_MAX; n++) if (![1,3,6,8,10].includes(n%12)) whiteKeys.push(n);
  const whiteWidth = w / whiteKeys.length;
  for (let i=0;i<=whiteKeys.length;i++) {
    const x=i*whiteWidth;
    ctx.strokeStyle = i%7===0 ? 'rgba(148,170,203,.22)' : 'rgba(148,170,203,.09)';
    ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();
  }

  const events = studioCurrent?.events || [];
  for (let index=Math.max(0,studioStep-2); index<events.length; index++) {
    const event=events[index];
    if (event.t > now + STUDIO_LEAD_SECONDS + 1.1) break;
    for (const note of event.notes || []) {
      const geometry=studioKeyGeometry(note.midi,w);
      const y=impactY-(event.t-now)*pxPerSecond;
      const noteHeight=Math.max(19,Math.min(100,(note.duration || event.d || .28)*pxPerSecond*.88));
      if (y+noteHeight < 0 || y > h) continue;
      const right=note.hand==='right';
      const color=right?'#38d8ff':'#55e6a5';
      const glow=right?'#38d8ff':'#9d86ff';
      const current=studioBlocked && index===studioStep;
      ctx.save();
      const grad=ctx.createLinearGradient(0,y,0,y+noteHeight);
      grad.addColorStop(0,right?'#c9f7ff':'#d2ffe8');grad.addColorStop(.2,color);grad.addColorStop(1,right?'#1b9bc0':'#27a878');
      ctx.fillStyle=grad;
      ctx.shadowColor=glow;
      ctx.shadowBlur=current?24:13;
      ctx.globalAlpha=(index<studioStep?.48:1)*(studioHandMode!=='both'&&note.hand!==studioHandMode?.42:1);
      const tg=ctx.createLinearGradient(0,y-46,0,y);tg.addColorStop(0,'rgba(0,0,0,0)');tg.addColorStop(1,right?'rgba(56,216,255,.24)':'rgba(85,230,165,.22)');
      ctx.save();ctx.shadowBlur=0;ctx.fillStyle=tg;ctx.fillRect(geometry.x+3,y-46,Math.max(3,geometry.w-6),46);ctx.restore();
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(geometry.x+1,y,Math.max(5,geometry.w-2),noteHeight,5);
      else ctx.rect(geometry.x+1,y,Math.max(5,geometry.w-2),noteHeight);
      ctx.fill();
      ctx.shadowBlur=0;
      ctx.strokeStyle='rgba(255,255,255,.5)';ctx.lineWidth=1;ctx.stroke();
      if (y<=impactY && y+noteHeight>=impactY && index>=studioStep) {
        const fx=geometry.x+geometry.w/2, fg=ctx.createRadialGradient(fx,impactY,0,fx,impactY,28);
        fg.addColorStop(0,right?'rgba(120,235,255,.85)':'rgba(140,255,200,.85)');fg.addColorStop(1,'rgba(0,0,0,0)');
        ctx.fillStyle=fg;ctx.fillRect(fx-28,impactY-28,56,56);
      }
      ctx.fillStyle='#071827';
      ctx.font='700 10px system-ui, sans-serif';
      ctx.textAlign='center';
      if (noteHeight>20) {
        const cx=geometry.x+geometry.w/2;
        if (note.finger!=null) {
          ctx.font='900 12px system-ui, sans-serif';
          ctx.fillText(String(note.finger),cx,y+13);
          if (noteHeight>36) {
            ctx.font='800 8px system-ui, sans-serif';
            ctx.fillText(noteName(note.midi),cx,y+25);
          }
          if (noteHeight>52) {
            ctx.font='900 7px system-ui, sans-serif';
            ctx.fillText(right?'MD':'MI',cx,y+36);
          }
        } else {
          ctx.font='800 9px system-ui, sans-serif';
          ctx.fillText(noteName(note.midi),cx,y+13);
          if (noteHeight>38) {
            ctx.font='900 7px system-ui, sans-serif';
            ctx.fillText(right?'MD':'MI',cx,y+25);
          }
        }
      }
      ctx.restore();
    }
  }
  ctx.save();
  ctx.strokeStyle='#eafaff';
  ctx.shadowColor='#53e6ff';
  ctx.shadowBlur=18;
  ctx.lineWidth=3;
  ctx.beginPath();ctx.moveTo(0,impactY);ctx.lineTo(w,impactY);ctx.stroke();
  ctx.restore();
  studioScoreSync();
}

function studioResize() { studioDraw(); }

function studioSetSpeed(value) {
  if (studioRunning) {
    studioPausedAt = studioSongTime();
    studioBaseTime = studioPausedAt;
    studioStartedAt = performance.now();
  }
  studioSpeed = Number(value) || 1;
  if (se('engine-speed-value')) se('engine-speed-value').textContent = `${Math.round(studioSpeed*100)}%`;
}

async function studioConnectMidi() {
  if (!navigator.requestMIDIAccess) {
    se('engine-midi').textContent = 'MIDI no disponible en este navegador';
    return;
  }
  try {
    studioMidi = await navigator.requestMIDIAccess({sysex:false});
    studioBindMidi();
    studioMidi.onstatechange = studioBindMidi;
  } catch (error) {
    se('engine-midi').textContent = error.name === 'NotAllowedError' ? 'Permiso MIDI rechazado' : 'No se pudo conectar MIDI';
  }
}

function studioBindMidi() {
  if (!studioMidi) return;
  for (const input of studioMidi.inputs.values()) input.onmidimessage = null;
  studioMidiInputs = [...studioMidi.inputs.values()].filter(input => input.state === 'connected');
  for (const input of studioMidiInputs) {
    input.onmidimessage = event => {
      const [status, midi, velocity] = event.data;
      const command = status & 0xf0;
      if (command === 0x90 && velocity > 0) studioNoteOn(midi,'midi');
      else if (command === 0x80 || (command === 0x90 && velocity === 0)) studioNoteOff(midi);
    };
  }
  const connected = studioMidiInputs.length > 0;
  se('engine-midi').textContent = connected ? `MIDI conectado · ${studioMidiInputs.length} entrada(s)` : 'MIDI desconectado';
  se('engine-midi').classList.toggle('connected', connected);
}

function midiReadVarLength(bytes, cursor, end) {
  let value=0;
  let byte=0;
  do {
    if (cursor.i >= end) throw new Error('Archivo MIDI truncado.');
    byte=bytes[cursor.i++];
    value=(value<<7)|(byte&0x7f);
  } while (byte & 0x80);
  return value;
}

function parseStandardMidi(arrayBuffer, splitMidi=60) {
  const bytes=new Uint8Array(arrayBuffer);
  const view=new DataView(arrayBuffer);
  const readU32=offset=>view.getUint32(offset,false);
  const readU16=offset=>view.getUint16(offset,false);
  if (bytes.length<14 || String.fromCharCode(...bytes.slice(0,4))!=='MThd') throw new Error('El archivo no tiene una cabecera MIDI estándar.');
  const headerLength=readU32(4);
  const format=readU16(8);
  const trackCount=readU16(10);
  const division=readU16(12);
  if (division & 0x8000) throw new Error('El MIDI usa tiempo SMPTE; exportalo con pulsos por negra (PPQ).');
  const ppq=division;
  if (!ppq) throw new Error('La resolución PPQ del MIDI no es válida.');
  let offset=8+headerLength;
  const rawNotes=[];
  const tempos=[{tick:0,micros:500000}];

  for (let trackIndex=0; trackIndex<trackCount; trackIndex++) {
    if (offset+8>bytes.length || String.fromCharCode(...bytes.slice(offset,offset+4))!=='MTrk') throw new Error('No se pudo leer una pista MIDI.');
    const trackLength=readU32(offset+4);
    const start=offset+8;
    const end=Math.min(bytes.length,start+trackLength);
    const cursor={i:start};
    let tick=0;
    let runningStatus=0;
    const openNotes=new Map();

    while (cursor.i<end) {
      tick+=midiReadVarLength(bytes,cursor,end);
      if (cursor.i>=end) break;
      let status=bytes[cursor.i];
      if (status&0x80) {
        cursor.i++;
        if (status<0xf0) runningStatus=status;
        else runningStatus=0;
      } else {
        if (!runningStatus) throw new Error('El archivo MIDI contiene un evento sin estado previo.');
        status=runningStatus;
      }

      if (status===0xff) {
        if (cursor.i>=end) break;
        const metaType=bytes[cursor.i++];
        const length=midiReadVarLength(bytes,cursor,end);
        if (metaType===0x51 && length===3 && cursor.i+3<=end) {
          const micros=(bytes[cursor.i]<<16)|(bytes[cursor.i+1]<<8)|bytes[cursor.i+2];
          if (micros>0) tempos.push({tick,micros});
        }
        cursor.i+=length;
        continue;
      }
      if (status===0xf0 || status===0xf7) {
        const length=midiReadVarLength(bytes,cursor,end);
        cursor.i+=length;
        continue;
      }
      if (status>=0xf0) {
        const skip=(status===0xf1||status===0xf3)?1:(status===0xf2?2:0);
        cursor.i+=skip;
        continue;
      }

      const command=status&0xf0;
      const channel=status&0x0f;
      if (cursor.i>=end) break;
      const data1=bytes[cursor.i++];
      const oneDataByte=command===0xc0||command===0xd0;
      const data2=oneDataByte?0:(cursor.i<end?bytes[cursor.i++]:0);
      if (command===0x90 && data2>0) {
        const key=`${channel}:${data1}`;
        if (!openNotes.has(key)) openNotes.set(key,[]);
        openNotes.get(key).push({startTick:tick,midi:data1,velocity:data2/127,channel,track:trackIndex});
      } else if (command===0x80 || (command===0x90 && data2===0)) {
        const key=`${channel}:${data1}`;
        const queue=openNotes.get(key);
        if (queue?.length) {
          const note=queue.shift();
          rawNotes.push({...note,endTick:Math.max(tick,note.startTick+1)});
          if (!queue.length) openNotes.delete(key);
        }
      }
    }
    offset=start+trackLength;
  }

  if (!rawNotes.length) throw new Error('No se encontraron notas en el archivo MIDI.');
  tempos.sort((a,b)=>a.tick-b.tick);
  const tempoMap=[];
  for (const tempo of tempos) {
    if (tempoMap.length && tempoMap[tempoMap.length-1].tick===tempo.tick) tempoMap[tempoMap.length-1]=tempo;
    else tempoMap.push(tempo);
  }
  function secondsAt(tick) {
    let seconds=0;
    let lastTick=0;
    let micros=500000;
    for (const tempo of tempoMap) {
      if (tempo.tick>tick) break;
      if (tempo.tick>lastTick) seconds+=(tempo.tick-lastTick)*micros/1000000/ppq;
      lastTick=tempo.tick;
      micros=tempo.micros;
    }
    return seconds+(tick-lastTick)*micros/1000000/ppq;
  }

  const trackStats=new Map();
  for (const r of rawNotes){const s=trackStats.get(r.track)||{sum:0,n:0};s.sum+=r.midi;s.n++;trackStats.set(r.track,s)}
  let trackHands=null;
  if (trackStats.size===2){
    const [a,b]=[...trackStats.entries()].map(([k,s])=>({k,avg:s.sum/s.n}));
    if (Math.abs(a.avg-b.avg)>=9) trackHands=new Map([[a.avg>b.avg?a.k:b.k,'right'],[a.avg>b.avg?b.k:a.k,'left']]);
  }
  const handOf=raw=>trackHands?trackHands.get(raw.track):(raw.midi<splitMidi?'left':'right');
  const grouped=new Map();
  for (const raw of rawNotes) {
    if (!grouped.has(raw.startTick)) grouped.set(raw.startTick,[]);
    grouped.get(raw.startTick).push({
      midi:raw.midi,
      hand:handOf(raw),
      velocity:Math.max(.25,raw.velocity),
      duration:Math.max(.08,secondsAt(raw.endTick)-secondsAt(raw.startTick))
    });
  }
  const events=[...grouped.entries()].sort((a,b)=>a[0]-b[0]).map(([tick,notes])=>({
    t:secondsAt(tick),
    d:Math.max(...notes.map(note=>note.duration)),
    notes
  }));
  const firstTempo=tempoMap[0]?.micros || 500000;
  return {events,bpm:Math.round(60000000/firstTempo),format,tracks:trackCount,ppq};
}

async function studioImportMidi(event) {
  const file=event.target.files?.[0];
  if (!file) return;
  try {
    se('engine-status').textContent = `Leyendo ${file.name}…`;
    const buffer=await file.arrayBuffer();
    const parsed=parseStandardMidi(buffer,Number(se('handSplit').value)||60);
    const piece={
      id:`midi-${Date.now()}`,
      title:file.name.replace(/\.(mid|midi)$/i,'').replace(/[_-]+/g,' '),
      style:'Importado',
      level:'Importado',
      bpm:parsed.bpm,
      description:`Archivo MIDI · ${parsed.events.length} grupos · ${parsed.tracks} pista(s) · corte de manos ${noteName(Number(se('handSplit').value)||60)}`,
      imported:true,
      events:parsed.events
    };
    studioLibrary.unshift(piece);
    studioSelect(piece.id);
    const leftCount=piece.events.reduce((sum,item)=>sum+item.notes.filter(note=>note.hand==='left').length,0);
    const rightCount=piece.events.reduce((sum,item)=>sum+item.notes.filter(note=>note.hand==='right').length,0);
    se('engine-feedback').textContent = `MIDI importado: ${rightCount} notas de mano derecha y ${leftCount} de mano izquierda. Si la separación no coincide, cambiá el corte y volvé a importar.`;
    studioRenderList();
  } catch (error) {
    se('engine-status').textContent = 'No se pudo importar el MIDI.';
    se('engine-feedback').textContent = error.message || 'El archivo no parece ser un MIDI estándar válido.';
  } finally {
    event.target.value='';
  }
}

/* ============================================================
   v3.2 · MODO APRENDER (estilo Flowkey)
   - Digitación sugerida (1 = pulgar … 5 = meñique) por mano.
   - Partitura en doble pentagrama sincronizada con el paso actual.
   - Secciones/frases, demostración y lección guiada MD → MI → 2 manos.
   ============================================================ */
let studioRange = {start:0, end:0};
let studioSections = [];
let studioDemo = false;
let studioPrevWait = true;
let studioLesson = null;
let studioScoreKey = '';
let studioScoreStep = -1;
const STUDIO_WHITE_IDX = [0,0,1,1,2,3,3,4,4,5,5,6];
const STUDIO_BLACK_PC = [1,3,6,8,10];
const STUDIO_LEGEND = '<i class="dot r"></i>Derecha <i class="dot l"></i>Izquierda · el número es el dedo (1 = pulgar)';

function studioPos(m) {
  const black = STUDIO_BLACK_PC.includes(m % 12);
  return Math.floor(m / 12) * 7 + STUDIO_WHITE_IDX[m % 12] + (black ? .5 : 0);
}

function studioChordFingers(n, hand) {
  const table = {2:[1,5], 3:[1,3,5], 4:[1,2,3,5], 5:[1,2,3,4,5]};
  const rh = table[n] || Array.from({length:n}, (_, j) => Math.min(5, j + 1));
  return hand === 'right' ? rh : rh.slice().reverse().map(f => f);
}

/* Heurística de posición de mano: ventana de 5 dedos que se reubica cuando la melodía sale de ella. */
function studioAssignFingers(piece) {
  for (const hand of ['right', 'left']) {
    const seq = [];
    for (const ev of piece.events) {
      const ns = (ev.notes || []).filter(n => n.hand === hand).sort((a, b) => a.midi - b.midi);
      if (ns.length) seq.push(ns);
    }
    let anchor = null, prev = null;
    for (let i = 0; i < seq.length; i++) {
      const ns = seq[i];
      if (ns.length > 1) {
        const f = studioChordFingers(ns.length, hand);
        ns.forEach((n, j) => { if (n.finger == null) n.finger = f[Math.min(j, f.length - 1)]; });
        anchor = null; prev = null;
        continue;
      }
      const n = ns[0], pos = studioPos(n.midi);
      if (anchor === null || pos - anchor < -.01 || pos - anchor > 4.5) {
        const look = [];
        for (let j = i; j < seq.length && j < i + 8 && seq[j].length === 1; j++) look.push(studioPos(seq[j][0].midi));
        const lo = Math.min(...look), hi = Math.max(...look);
        if (hi - lo <= 4.5) anchor = lo;
        else {
          const asc = prev === null || pos >= prev;
          anchor = hand === 'right' ? (asc ? pos : pos - 4) : (asc ? pos - 4 : pos);
        }
      }
      const k = Math.round(pos - anchor);
      const finger = hand === 'right' ? 1 + k : 5 - k;
      if (n.finger == null) n.finger = Math.max(1, Math.min(5, finger));
      prev = pos;
    }
  }
}

function studioPrepare(piece) {
  if (piece._ready) return;
  studioAssignFingers(piece);
  const n = piece.events.length, size = n > 96 ? 24 : n > 40 ? 16 : 8, secs = [];
  for (let s = 0; s < n; s += size) secs.push({start:s, end:Math.min(n, s + size)});
  if (secs.length > 1 && secs[secs.length - 1].end - secs[secs.length - 1].start < 4) {
    const last = secs.pop();
    secs[secs.length - 1].end = last.end;
  }
  piece._sections = secs;
  piece._ready = true;
}

function studioStartTime() {
  const e = studioCurrent?.events[studioRange.start];
  return studioRange.start > 0 && e ? Math.max(0, e.t - 1.3) : 0;
}

function studioFillSections() {
  const sel = se('studio-section');
  if (!sel) return;
  sel.replaceChildren();
  const prevValue = sel.value;
  const starsMap = studioStarsAll();
  const starText = key => { const v = starsMap[`${studioCurrent?.id}#${key}`]; return v ? ' ' + '★'.repeat(v) : ''; };
  const all = document.createElement('option');
  all.value = 'all';
  all.textContent = 'Toda la canción' + starText('all');
  sel.append(all);
  if (studioSections.length > 1) studioSections.forEach((s, i) => {
    const o = document.createElement('option');
    o.value = String(i);
    o.textContent = `Sección ${i + 1} · pasos ${s.start + 1}–${s.end}${starText(i)}`;
    sel.append(o);
  });
  sel.value = [...sel.options].some(o => o.value === prevValue) ? prevValue : 'all';
}

function studioSetRange(start, end) {
  studioRange = {start, end};
  studioReset(false);
  const sel = se('studio-section');
  if (sel) {
    const idx = studioSections.findIndex(s => s.start === start && s.end === end);
    sel.value = (start === 0 && end === studioCurrent.events.length) || idx < 0 ? 'all' : String(idx);
  }
  studioScoreSync(true);
}

/* ---------- Partitura ---------- */
function studioScoreSvg(page, per) {
  const piece = studioCurrent, ev = piece.events, bpm = piece.bpm || 80, meter = piece.meter || 4, off = piece.pickup || 0;
  const end = Math.min(ev.length, page + per), W = 66 + per * 46 + 10;
  const bt = i => ev[i].t * bpm / 60;
  const b0 = bt(page), lastDur = Math.max(.5, (ev[end - 1].d || .5) * bpm / 60);
  const span = Math.max(2, bt(end - 1) - b0 + lastDur);
  const x0 = 66 + 14, x1 = W - 16;
  const xs = [];
  for (let i = page; i < end; i++) {
    let x = x0 + (bt(i) - b0) / span * (x1 - x0);
    if (i > page) x = Math.max(x, xs[xs.length - 1] + 26);
    xs.push(x);
  }
  const over = xs[xs.length - 1] - x1;
  if (over > 0 && xs.length > 1) { const f = (x1 - x0) / (xs[xs.length - 1] - x0); for (let k = 0; k < xs.length; k++) xs[k] = x0 + (xs[k] - x0) * f; }
  let s = `<svg viewBox="0 -22 ${W} 196" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Partitura de la sección actual">`;
  for (const base of [30, 90]) for (let k = 0; k < 5; k++) s += `<line class="sc-line" x1="28" x2="${W - 4}" y1="${base + k * 10}" y2="${base + k * 10}"/>`;
  s += `<line class="sc-line" x1="28" x2="28" y1="30" y2="130"/>`;
  s += `<text class="sc-clef" x="2" y="68" font-size="54">𝄞</text><text class="sc-clef" x="4" y="119" font-size="40">𝄢</text>`;
  /* líneas de compás */
  for (let i = page + 1; i < end; i++) {
    const prevBar = Math.floor((bt(i - 1) - off + .001) / meter), curBar = Math.floor((bt(i) - off + .001) / meter);
    if (curBar > prevBar) { const bx = xs[i - page] - 15; s += `<line class="sc-bar" x1="${bx}" x2="${bx}" y1="30" y2="130"/>`; }
  }
  for (let i = page; i < end; i++) {
    const x = xs[i - page], e = ev[i];
    s += `<g class="sc-ev" data-i="${i}"><rect class="sc-hl" x="${x - 20}" y="-20" width="40" height="190" rx="8"/>`;
    for (const note of e.notes || []) {
      const black = STUDIO_BLACK_PC.includes(note.midi % 12);
      const step = studioPos(note.midi) - (black ? .5 : 0) - 35, y = 80 - step * 5;
      const hand = note.hand === 'right' ? 'r' : 'l';
      const dim = studioHandMode !== 'both' && note.hand !== studioHandMode ? ' dim' : '';
      const beats = (note.duration || e.d || 0) * bpm / 60;
      const kind = beats >= 3.5 ? 'w' : beats >= 2.5 ? 'dh' : beats >= 1.75 ? 'h' : beats >= 1.25 ? 'dq' : beats >= .75 ? 'q' : beats >= .375 ? 'e' : 's';
      const hollow = kind === 'w' || kind === 'h' || kind === 'dh', dotted = kind === 'dh' || kind === 'dq';
      const ledgers = [];
      if (y <= 20) for (let ly = 20; ly >= y - .1; ly -= 10) ledgers.push(ly);
      if (y >= 140) for (let ly = 140; ly <= y + .1; ly += 10) ledgers.push(ly);
      if (y === 80) ledgers.push(80);
      s += `<g class="sc-n ${hand}${dim}">`;
      ledgers.forEach(ly => { s += `<line class="sc-line" x1="${x - 12}" x2="${x + 12}" y1="${ly}" y2="${ly}"/>`; });
      if (black) s += `<text class="sc-acc" x="${x - 19}" y="${y + 5}" font-size="15">♯</text>`;
      s += `<ellipse class="sc-head${hollow ? ' hollow' : ''}${kind === 'w' ? ' whole' : ''}" cx="${x}" cy="${y}" rx="${kind === 'w' ? 8 : 7}" ry="5" transform="rotate(-20 ${x} ${y})"/>`;
      if (kind !== 'w') {
        const up = note.hand === 'right', sx = up ? x + 6.5 : x - 6.5, ey = up ? y - 27 : y + 27, dir = up ? 1 : -1;
        s += `<line class="sc-stem" x1="${sx}" x2="${sx}" y1="${y}" y2="${ey}"/>`;
        if (kind === 'e' || kind === 's') s += `<path class="sc-flag" d="M${sx},${ey} q9,${dir * 4} 6,${dir * 14}"/>`;
        if (kind === 's') s += `<path class="sc-flag" d="M${sx},${ey + dir * 6} q9,${dir * 4} 6,${dir * 14}"/>`;
      }
      if (dotted) s += `<circle class="sc-dot" cx="${x + 12}" cy="${y - 2.5}" r="1.8"/>`;
      if (note.finger != null) s += `<text class="sc-fin" x="${x + (dotted ? 20 : 14)}" y="${y + 4}" font-size="11">${note.finger}</text>`;
      s += '</g>';
    }
    s += `<text class="sc-step" x="${x}" y="176" font-size="9">${i + 1}</text></g>`;
  }
  return s + '</svg>';
}

function studioScoreSync(force) {
  const host = se('studioScore');
  if (!host || host.hidden || !studioCurrent?.events.length) return;
  const per = 8, cur = Math.min(Math.max(studioStep, 0), studioCurrent.events.length - 1);
  const page = Math.floor(cur / per) * per;
  const key = `${studioCurrent.id}|${page}|${studioHandMode}`;
  if (force || key !== studioScoreKey) {
    studioScoreKey = key;
    studioScoreStep = -1;
    host.innerHTML = studioScoreSvg(page, per);
  }
  if (studioScoreStep === studioStep) return;
  studioScoreStep = studioStep;
  host.querySelectorAll('.sc-ev').forEach(g => {
    const i = Number(g.dataset.i);
    g.classList.toggle('cur', i === studioStep);
    g.classList.toggle('past', i < studioStep);
  });
}

/* ---------- Demostración y lección guiada ---------- */
function studioDemoStart() {
  if (!studioCurrent) return;
  studioReset(false);
  studioDemo = true;
  studioPrevWait = studioWaitMode;
  studioWaitMode = false;
  const who = studioHandMode === 'right' ? 'la mano derecha' : studioHandMode === 'left' ? 'la mano izquierda' : 'las dos manos';
  se('engine-feedback').textContent = `Mirá y escuchá cómo se toca con ${who}…`;
  studioBegin();
}

function studioEndDemo() {
  studioDemo = false;
  studioWaitMode = studioPrevWait;
  studioReset(false);
  se('engine-status').textContent = 'Ahora te toca a vos.';
  se('engine-feedback').textContent = 'Tocá ▶ y seguí las teclas iluminadas (el número es el dedo).';
  if (studioLesson) {
    const token = studioStartToken;
    window.setTimeout(() => { if (token === studioStartToken && studioLesson && !studioRunning && !studioBlocked) studioBegin(); }, 700);
  }
}

function studioLessonUI() {
  const txt = se('studio-lesson-text');
  if (!txt) return;
  const on = !!studioLesson;
  se('studio-lesson-skip').hidden = !on;
  se('studio-lesson-exit').hidden = !on;
  se('studio-lesson-btn').hidden = on;
  if (!on) { txt.innerHTML = STUDIO_LEGEND; return; }
  const st = studioLesson.plan[studioLesson.idx];
  const who = st.hand === 'right' ? 'mano derecha sola · teclas azules' : st.hand === 'left' ? 'mano izquierda sola · teclas verdes' : 'las dos manos juntas';
  txt.textContent = `Paso ${studioLesson.idx + 1}/${studioLesson.plan.length} · Sección ${st.sec + 1} · ${who}`;
}

function studioLessonApply() {
  const st = studioLesson.plan[studioLesson.idx];
  const sec = studioSections[st.sec];
  studioHandMode = st.hand;
  studioSyncHandButtons();
  studioSetRange(sec.start, sec.end);
  studioLessonUI();
  studioDemoStart();
}

function studioLessonStart() {
  if (!studioCurrent) return;
  const hasR = studioHasHand('right'), hasL = studioHasHand('left'), plan = [];
  studioSections.forEach((sec, i) => {
    if (hasR) plan.push({sec:i, hand:'right'});
    if (hasL) plan.push({sec:i, hand:'left'});
    if (hasR && hasL) plan.push({sec:i, hand:'both'});
  });
  if (!plan.length) return;
  studioWaitMode = true;
  se('engine-wait').checked = true;
  studioLesson = {plan, idx:0};
  studioLessonApply();
}

function studioLessonNext() {
  if (!studioLesson) return;
  studioLesson.idx++;
  if (studioLesson.idx >= studioLesson.plan.length) {
    studioLesson = null;
    studioLessonUI();
    studioHandMode = studioHasHand('right') && studioHasHand('left') ? 'both' : studioHandMode;
    studioSyncHandButtons();
    studioSetRange(0, studioCurrent.events.length);
    se('engine-status').textContent = '¡Lección completada!';
    se('engine-feedback').textContent = 'Ahora tocá toda la canción con las dos manos.';
    return;
  }
  studioLessonApply();
}

function studioLessonExit() {
  studioLesson = null;
  studioLessonUI();
  studioReset(false);
  se('engine-feedback').textContent = 'Lección cerrada. Podés elegir mano y sección manualmente.';
}

const STUDIO_STAR_KEY = 'academiaStudioStars';
const STUDIO_STREAK_KEY = 'academiaStudioStreak';
const studioDay = ms => new Date(ms).toLocaleDateString('sv');
function studioStarsAll() { try { return JSON.parse(localStorage.getItem(STUDIO_STAR_KEY) || '{}'); } catch (e) { return {}; } }
function studioStarsFor(acc) { return acc >= 95 ? 3 : acc >= 80 ? 2 : 1; }
function studioSaveStars(secKey, stars) {
  try {
    const all = studioStarsAll(), k = `${studioCurrent.id}#${secKey}`;
    if (!all[k] || all[k] < stars) all[k] = stars;
    localStorage.setItem(STUDIO_STAR_KEY, JSON.stringify(all));
  } catch (e) {}
}
function studioStreakRead() {
  try {
    const s = JSON.parse(localStorage.getItem(STUDIO_STREAK_KEY) || 'null');
    if (!s) return 0;
    const today = studioDay(Date.now()), yest = studioDay(Date.now() - 864e5);
    return s.last === today || s.last === yest ? s.count : 0;
  } catch (e) { return 0; }
}
function studioStreakTouch() {
  try {
    const today = studioDay(Date.now()), yest = studioDay(Date.now() - 864e5);
    const s = JSON.parse(localStorage.getItem(STUDIO_STREAK_KEY) || 'null') || {last:'', count:0};
    if (s.last !== today) { s.count = s.last === yest ? s.count + 1 : 1; s.last = today; }
    localStorage.setItem(STUDIO_STREAK_KEY, JSON.stringify(s));
  } catch (e) {}
  studioStreakShow();
  return studioStreakRead();
}
function studioStreakShow() {
  const el = se('studio-streak');
  if (!el) return;
  const n = studioStreakRead();
  el.textContent = n ? `🔥 ${n} ${n === 1 ? 'día' : 'días'}` : '';
  el.hidden = !n;
}
function studioHideResults() { const r = se('studio-results'); if (r) r.hidden = true; }
function studioShowResults(stars, acc, mistakes, secIdx, streak) {
  const box = se('studio-results');
  if (!box) return;
  const whole = secIdx < 0;
  const next = !whole && studioSections[secIdx + 1];
  box.replaceChildren();
  const card = document.createElement('div');
  card.className = 'res-card';
  const row = document.createElement('div');
  row.className = 'res-stars';
  for (let i = 0; i < 3; i++) {
    const st = document.createElement('span');
    st.textContent = '★';
    st.className = i < stars ? 'on' : 'off';
    st.style.animationDelay = `${i * .18}s`;
    row.append(st);
  }
  const title = document.createElement('strong');
  title.textContent = whole ? `¡${studioCurrent.title} completada!` : `Sección ${secIdx + 1} completada`;
  const info = document.createElement('span');
  info.className = 'res-info';
  info.textContent = `Precisión ${acc}% · ${mistakes} ${mistakes === 1 ? 'error' : 'errores'}${streak ? ` · 🔥 ${streak} ${streak === 1 ? 'día' : 'días'}` : ''}`;
  const actions = document.createElement('div');
  actions.className = 'res-actions';
  const mk = (label, fn, primary) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = label; if (primary) b.className = 'primary'; b.addEventListener('click', fn); actions.append(b); };
  mk('↻ Repetir', () => { studioHideResults(); studioReset(false); studioBegin(); });
  if (next) mk('Siguiente ›', () => { studioHideResults(); studioSetRange(next.start, next.end); studioBegin(); }, true);
  mk('Cerrar', studioHideResults);
  card.append(row, title, info, actions);
  box.append(card);
  box.hidden = false;
}

function studioLearnInit() {
  se('studio-lesson-btn').addEventListener('click', studioLessonStart);
  se('studio-lesson-skip').addEventListener('click', studioLessonNext);
  se('studio-lesson-exit').addEventListener('click', studioLessonExit);
  se('studio-demo-btn').addEventListener('click', () => { if (!studioDemo) studioDemoStart(); });
  se('studio-section').addEventListener('change', event => {
    if (studioLesson) { studioLesson = null; studioLessonUI(); }
    const v = event.target.value;
    if (v === 'all') studioSetRange(0, studioCurrent.events.length);
    else { const s = studioSections[Number(v)]; studioSetRange(s.start, s.end); }
  });
  const score = se('studioScore'), toggle = se('studio-score-btn');
  const setScore = on => { score.hidden = !on; toggle.setAttribute('aria-pressed', String(on)); if (on) studioScoreSync(true); studioResize(); };
  toggle.addEventListener('click', () => setScore(score.hidden));
  setScore(window.innerHeight >= 480);
  studioLessonUI();
  studioStreakShow();
}

function studioInit() {
  studioCanvas=se('fallingNotesCanvas');
  if (studioCanvas) studioCtx=studioCanvas.getContext('2d');
  studioBuildKeys();
  studioSelect('pd-prelude');
  se('studioSearch').addEventListener('input',studioRenderList);
  document.querySelectorAll('[data-studio-filter]').forEach(button => button.addEventListener('click',() => {
    studioFilter=button.dataset.studioFilter;
    document.querySelectorAll('[data-studio-filter]').forEach(item=>item.classList.toggle('selected',item===button));
    studioRenderList();
  }));
  document.querySelectorAll('[data-hand-mode]').forEach(button => button.addEventListener('click',() => {
    if (button.disabled) return;
    studioHandMode=button.dataset.handMode;
    studioReset(false);
    studioSyncHandButtons();
    studioScoreSync(true);
    se('engine-feedback').textContent = studioHandMode==='both'
      ? 'Vas a tocar las dos manos. Los acordes y notas simultáneas se esperan juntos.'
      : `Practicás ${studioHandMode==='right'?'mano derecha':'mano izquierda'}; la mano contraria sonará como acompañamiento.`;
  }));
  se('studio-exit').addEventListener('click',()=>go('home'));
  se('engine-play').addEventListener('click',studioBegin);
  se('engine-reset').addEventListener('click',()=>studioReset(true));
  se('engine-wait').addEventListener('change',event=>{
    studioWaitMode=event.target.checked;
    studioReset(false);
    se('engine-feedback').textContent=studioWaitMode?'Modo espera activado: la canción se detiene en cada grupo hasta que toques las notas correctas.':'Modo fluido: ambas manos se reproducen automáticamente.';
  });
  se('engine-speed').addEventListener('change',event=>studioSetSpeed(event.target.value));
  se('engine-volume').addEventListener('input',event=>{
    if (pianoMasterGain && audioCtx) pianoMasterGain.gain.setTargetAtTime(Number(event.target.value),audioCtx.currentTime,.03);
  });
  se('engine-midi-connect').addEventListener('click',studioConnectMidi);
  se('midiFileInput').addEventListener('change',studioImportMidi);
  se('engine-loop').addEventListener('change',event=>studioLoop=event.target.checked);
  studioLearnInit();
  studioSpeed=Number(se('engine-speed').value)||1;
  studioWaitMode=se('engine-wait').checked;
  studioLoop=se('engine-loop').checked;
  if ('ResizeObserver' in window) new ResizeObserver(studioResize).observe(studioCanvas);
  else window.addEventListener('resize',studioResize);
  window.addEventListener('orientationchange',()=>window.setTimeout(studioResize,120));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)studioPause()});
  studioResize();
}

if (se('fallingNotesCanvas')) studioInit();
