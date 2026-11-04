// 1. Catálogo Completo de Canciones Multi-Dificultad y Estilos Modernos/Clásicos
const SONGS_DATABASE = [
    // Piano Clásico (Aprendizaje Progresivo)
    { id: "c1", title: "Para Elisa (Für Elise)", artist: "Ludwig van Beethoven", category: "clasico", difficulty: "principiante", bpm: 130 },
    { id: "c2", title: "Claro de Luna (Moonlight Sonata Mov. 1)", artist: "Ludwig van Beethoven", category: "clasico", difficulty: "intermedio", bpm: 60 },
    { id: "c3", title: "Marcha Turca", artist: "Wolfgang Amadeus Mozart", category: "clasico", difficulty: "avanzado", bpm: 125 },
    { id: "c4", title: "Estudio Op. 10, No. 3 (Sadness)", artist: "Frédéric Chopin", category: "clasico", difficulty: "intermedio", bpm: 72 },
    
    // Pop Moderno
    { id: "p1", title: "As It Was", artist: "Harry Styles", category: "pop", difficulty: "principiante", bpm: 174 },
    { id: "p2", title: "Flowers", artist: "Miley Cyrus", category: "pop", difficulty: "principiante", bpm: 118 },
    { id: "p3", title: "Blinding Lights", artist: "The Weeknd", category: "pop", difficulty: "intermedio", bpm: 171 },
    { id: "p4", title: "Someone Like You", artist: "Adele", category: "pop", difficulty: "principiante", bpm: 135 },

    // Jazz & Blues
    { id: "j1", title: "Fly Me to the Moon", artist: "Frank Sinatra", category: "jazz", difficulty: "intermedio", bpm: 120 },
    { id: "j2", title: "Take Five", artist: "Dave Brubeck", category: "jazz", difficulty: "avanzado", bpm: 174 },
    { id: "j3", title: "Summertime", artist: "George Gershwin", category: "jazz", difficulty: "principiante", bpm: 80 },

    // Bandas Sonoras (Soundtracks)
    { id: "s1", title: "Interstellar Theme", artist: "Hans Zimmer", category: "soundtracks", difficulty: "intermedio", bpm: 96 },
    { id: "s2", title: "Comptine d'un autre été", artist: "Yann Tiersen", category: "soundtracks", difficulty: "principiante", bpm: 100 },
    { id: "s3", title: "Pirates of the Caribbean", artist: "Hans Zimmer", category: "soundtracks", difficulty: "avanzado", bpm: 140 },

    // Anime & Videojuegos
    { id: "a1", title: "Gurenge (Demon Slayer)", artist: "LiSA", category: "anime", difficulty: "avanzado", bpm: 135 },
    { id: "a2", title: "Zelda's Lullaby", artist: "Koji Kondo", category: "anime", difficulty: "principiante", bpm: 90 }
];

// Lógica para el Dashboard Principal (index.html)
if (document.getElementById('songs-container')) {
    const container = document.getElementById('songs-container');
    const categoryButtons = document.querySelectorAll('.category-btn');

    function renderSongs(filterCategory = 'all') {
        container.innerHTML = '';
        const filtered = filterCategory === 'all' 
            ? SONGS_DATABASE 
            : SONGS_DATABASE.filter(song => song.category === filterCategory);

        filtered.forEach(song => {
            const card = document.createElement('div');
            card.className = 'song-card';
            card.innerHTML = `
                <div class="song-info">
                    <span class="difficulty-badge ${song.difficulty}">${song.difficulty}</span>
                    <h3>${song.title}</h3>
                    <p>${song.artist}</p>
                </div>
                <button class="btn-primary" onclick="launchPractice('${song.id}')">Practicar</button>
            `;
            container.appendChild(card);
        });
    }

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSongs(btn.dataset.category);
        });
    });

    window.launchPractice = function(songId) {
        localStorage.setItem('selectedSongId', songId);
        window.location.href = 'estudio-midi.html';
    };

    // Renderizado inicial
    renderSongs();
    initHardwareStatus('midi-indicator', 'mic-indicator');
}

// Lógica para la Sala de Ensayo (estudio-midi.html)
function initStudio() {
    const songId = localStorage.getItem('selectedSongId') || 'c1';
    const song = SONGS_DATABASE.find(s => s.id === songId) || SONGS_DATABASE[0];

    document.getElementById('studio-song-title').innerText = song.title;
    document.getElementById('studio-song-artist').innerText = song.artist;
    document.getElementById('bpm-value').innerText = song.bpm;
    document.getElementById('bpm-slider').value = song.bpm;

    initHardwareStatus('studio-midi-indicator', 'studio-mic-indicator');
    setupStudioCanvas();
    setupVirtualKeyboard();
    setupWebMIDI();
}

// Manejo Simulado/Real de Estados de Periféricos
function initHardwareStatus(midiId, micId) {
    const midiBadge = document.getElementById(midiId);
    const micBadge = document.getElementById(micId);

    // Simulación inteligente para UX: Intentar conectar MIDI nativo si está disponible
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(() => {
            if(midiBadge) {
                midiBadge.classList.remove('disconnected');
                midiBadge.classList.add('connected');
                midiBadge.innerText = 'MIDI: Listo';
            }
        }).catch(() => {});
    }

    // Activar micrófono placeholder
    if (micBadge) {
        micBadge.addEventListener('click', () => {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(() => {
                    micBadge.classList.remove('disconnected');
                    micBadge.classList.add('connected');
                    micBadge.innerText = 'Mic: Activo';
                });
        });
    }
}

// Configuración del canvas de caída de notas (Mock Interactividad Flowkey)
function setupStudioCanvas() {
    const canvas = document.getElementById('flowkey-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Loop de animación simulando notas interactivas cayendo/avanzando
    let xOffset = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#1e1b4b';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Dibujar barras guía de compás musicales
        ctx.strokeStyle = '#272a37';
        for (let i = 0; i < canvas.width; i += 120) {
            ctx.beginPath();
            ctx.moveTo(i - (xOffset % 120), 0);
            ctx.lineTo(i - (xOffset % 120), canvas.height);
            ctx.stroke();
        }

        // Bloques de Notas Interactivos (Estilo Cascada Horizontal/Vertical)
        ctx.fillStyle = '#6366f1';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#6366f1';
        
        // Bloque 1
        ctx.fillRect(400 - xOffset, 40, 150, 30);
        // Bloque 2
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.fillRect(600 - xOffset, 80, 100, 30);

        ctx.shadowBlur = 0; // reset
        
        // Si no está en "Wait Mode", avanza automáticamente
        if (!document.getElementById('wait-mode-toggle').classList.contains('active')) {
            xOffset += 1;
        }

        requestAnimationFrame(animate);
    }
    animate();

    // Toggle de Modo Espera
    const toggle = document.getElementById('wait-mode-toggle');
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        toggle.innerText = toggle.classList.contains('active') ? 'Modo Espera: ON' : 'Modo Espera: Off';
    });
}

// Dibujar Teclado Visual Básico
function setupVirtualKeyboard() {
    const keyboard = document.getElementById('piano-keyboard');
    if (!keyboard) return;
    keyboard.innerHTML = '';
    
    // Generar 24 teclas (2 octavas básicas de referencia)
    for (let i = 0; i < 24; i++) {
        const key = document.createElement('div');
        key.className = 'piano-key';
        key.dataset.note = 60 + i; // Middle C hacia arriba
        keyboard.appendChild(key);
    }
}

// Conexión Web MIDI Real
function setupWebMIDI() {
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(midiAccess => {
            for (let input of midiAccess.inputs.values()) {
                input.onmidimessage = (msg) => {
                    const [status, note, velocity] = msg.data;
                    if (status === 144 && velocity > 0) { // Note On
                        highlightKey(note, true);
                    } else if (status === 128 || (status === 144 && velocity === 0)) { // Note Off
                        highlightKey(note, false);
                    }
                };
            }
        });
    }
}

function highlightKey(note, active) {
    // Mapear nota midi al teclado visual (60 base)
    const index = note - 60;
    const keys = document.querySelectorAll('.piano-key');
    if (keys[index]) {
        if (active) keys[index].classList.add('active-key');
        else keys[index].classList.remove('active-key');
    }
}
