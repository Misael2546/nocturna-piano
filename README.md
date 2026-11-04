# NOCTURNA — Paquete integrado para GitHub Pages

## Contenido
- `index.html`: explorador moderno, búsqueda y categorías (catálogo demostrativo).
- `styles.css`, `app.js`: presentación y filtros de la interfaz.
- `academia.html`: academia interactiva heredada, con módulos de teoría, piano virtual, entrenamiento auditivo y ejercicios.
- `estudio-midi.html`: estudio MIDI interactivo heredado de la versión 2.0.
- `tutoriales.html`: 12 lecciones originales con ejercicios, preguntas y registro de estudio.
- `sw.js`, `manifest.webmanifest`, iconos: instalación PWA y caché local.

## Instalación
Descomprimir el ZIP, subir **los archivos** a la raíz del repositorio, activar Settings > Pages > Deploy from a branch > main > /(root). Usar HTTPS.
Para MIDI USB, conectar un piano compatible y abrir `estudio-midi.html` en Chrome/Edge de escritorio. Autorizar acceso MIDI cuando el navegador lo solicite.

## Límites importantes
Las tres interfaces se integran por navegación; **todavía no constituyen un único motor de estado o un catálogo de partituras compartido**.
El catálogo de la portada es demostrativo: abrir "Practicar" en esa vista presenta un reproductor visual sin audio ni lectura MIDI. Para captura MIDI real usar **Estudio MIDI**.
No se incluyen libros PDF de terceros ni partituras protegidas. El motor MIDI y los ejercicios proceden del prototipo previo y no fueron probados con tu instrumento.
La compatibilidad de audio/MIDI varía por navegador y plataforma. El caché offline funciona tras la primera carga satisfactoria, pero ciertas funciones pueden depender de permisos del navegador.
