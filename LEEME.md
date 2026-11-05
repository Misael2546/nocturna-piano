# Academia de Piano · Versión completa 3.5

Proyecto PWA estático en español. Incluye la academia, el contenido educativo y el estudio de piano guiado por canciones.

## Archivos incluidos

- `index.html`: entrada principal para Render y GitHub Pages.
- `estudio-midi.html`: acceso alternativo a la misma academia completa.
- `app.js`: contenido, lógica de navegación, curso, repertorio, piano, MIDI y práctica guiada.
- `styles.css`: interfaz completa, diseño adaptable y sala de práctica horizontal.
- `manifest.webmanifest`: configuración instalable de la PWA.
- `sw.js`: caché local y soporte offline del shell de la aplicación.
- `icon.svg`, `icon-192.png`, `icon-512.png`: íconos de la aplicación.
- `audio/README.md`: instrucciones para agregar muestras de piano locales.

## Contenido de la academia

- Inicio y recorrido de aprendizaje.
- Curso de teoría musical de 12 módulos.
- Laboratorio de piano con teclado virtual y desafíos de lectura.
- Laboratorio rítmico y metrónomo.
- Entrenamiento auditivo.
- Técnica, escalas, acordes y patrones de acompañamiento.
- Biblioteca de repertorio y prácticas.
- Seguimiento de progreso, exportación e importación de respaldo.
- Estudio interactivo con notas descendentes, línea de impacto, práctica por mano, modo espera, velocidad, volumen, teclado virtual y entrada MIDI.
- Importación de canciones MIDI (`.mid` / `.midi`) y separación inicial de manos por registro.

## Publicar en Render

1. Descomprimí todo el ZIP.
2. Subí el contenido completo de esta carpeta a un repositorio GitHub.
3. En Render creá un **Static Site** conectado al repositorio.
4. Usá `.` como directorio de publicación (Publish Directory).
5. No necesitás comando de build.
6. Esperá el deploy y abrí la URL HTTPS.

También se incluye `render.yaml` como configuración de referencia.

## Publicar en GitHub Pages

1. Subí todos los archivos a la raíz del repositorio.
2. Abrí **Settings → Pages**.
3. Seleccioná la rama principal y la carpeta `/ (root)`.
4. Guardá y esperá la publicación.

## Cómo practicar una canción

1. Abrí **Estudio interactivo**.
2. Elegí una pieza de la biblioteca o importá un MIDI.
3. Seleccioná `MD`, `MI` o `2 manos`.
4. Dejá activado `Esperar` para que el reproductor se detenga en cada grupo de notas.
5. Tocá las notas correctas con el teclado virtual o con un piano MIDI compatible.

En el modo MD, la mano izquierda se reproduce como acompañamiento; en el modo MI, se reproduce la derecha. En `2 manos`, se esperan ambas partes.

## Audio y conectividad

El motor usa Web Audio API y muestras acústicas Salamander. Primero busca archivos en `./audio/` y, si no están, intenta descargarlos desde Tone.js. Por eso, el primer uso de audio requiere conexión. Para uso sin conexión, colocá en `audio/` las muestras indicadas en `audio/README.md`.

La app shell queda disponible offline después de la primera carga HTTPS y de que el service worker complete su caché. El audio remoto no queda garantizado offline.

## MIDI

La entrada Web MIDI depende del navegador, el sistema operativo y el contexto seguro HTTPS. Safari en iPhone/iPad no ofrece Web MIDI de forma nativa; en ese dispositivo se puede practicar con el teclado virtual. La separación automática de manos en un MIDI se basa inicialmente en un umbral de altura, que puede ajustarse desde la interfaz.

## Notas técnicas

- Proyecto sin frameworks ni proceso de compilación.
- Los datos de progreso se guardan localmente en el navegador.
- El contenido de repertorio es didáctico; no es un catálogo comercial de Flowkey ni incluye grabaciones o partituras licenciadas de terceros.
- El modo horizontal se aplica al entrar al estudio; el navegador puede no permitir bloquear físicamente la orientación desde una PWA en todos los dispositivos.


## Novedades 3.2 · Modo aprender (estilo Flowkey)

- **Lección guiada**: recorre cada sección de la canción con *mano derecha sola → mano izquierda sola → las dos juntas*. Antes de cada paso muestra una demostración (botón **Escuchar**) y después te espera en modo espera.
- **Digitación sugerida**: número de dedo (1 = pulgar … 5 = meñique) sobre las notas que caen, en el teclado y en la partitura. Es una sugerencia automática; las piezas pueden definir su propia digitación con `finger` en cada nota.
- **Partitura sincronizada** (doble pentagrama, botón **Partitura**): resalta el paso actual y cambia de página sola. Derecha en azul, izquierda en verde.
- **Secciones**: selector para practicar una frase en bucle (tocá ▶ para repetirla).
- La mano que no practicás se atenúa y suena como acompañamiento.
- Importación MIDI: si el archivo tiene dos pistas con registros claramente distintos, las manos se separan por pista; si no, por altura.
- Dos arreglos nuevos: *Cumpleaños feliz* y *Canon en Re*.


## Novedades 3.3 · Ritmo, puntuación y pulido visual

- **Partitura con ritmo real:** figuras según la duración (redonda, blanca, negra, corchea, semicorchea y puntillos), líneas de compás y espaciado proporcional al tiempo. Es una notación aproximada a partir de las duraciones de cada pieza; no incluye silencios ni ligaduras.
- **Puntuación con estrellas:** al terminar una sección o una pieza aparece una pantalla de resultados (1–3 estrellas según la precisión, errores y acciones *Repetir* / *Siguiente*). Se guarda la mejor marca de cada sección y de cada canción.
- **Racha diaria:** cuenta los días seguidos que completás una práctica.
- **Visual:** teclado con profundidad y pulsación animada, notas que caen con degradado, estela y destello en la línea de impacto.


## Novedades 3.4 · Metrónomo, manos, micrófono y motor de piezas

- **Metrónomo con cuenta regresiva** (🥁): al tocar ▶ hay una cuenta de un compás con número en pantalla y clic acentuado; después el clic acompaña el tempo (respeta velocidad y modo espera).
- **Manos animadas** (🖐): dos manos sobre el teclado (derecha azul, izquierda verde) que se desplazan a las notas del paso actual; el dedo que toca baja. Usan la digitación de cada pieza.
- **Micrófono** (🎤): escucha tu piano real y avanza el modo espera cuando oye las notas esperadas (también acordes). Limitaciones: silencia el audio de la app mientras está activo, funciona mejor desde Do3 hacia arriba, necesita HTTPS y permiso del navegador, y solo detecta las notas correctas (no marca errores).
- **Armar pieza**: panel en la barra lateral del estudio. Melodía `E4/1 G4/1 r/2` (nota/duración en tiempos) + acordes por compás `C | F G7 | Am` + patrón de mano izquierda (bloque, arpegio, Alberti, vals, jazz caminante). También disponible como `buildPiece({...})`.
- **Repertorio nuevo (9 piezas):** tradicionales y clásicas de dominio público (Greensleeves, Sublime gracia, Cuando los santos, Minueto en Sol) y piezas **originales** en estilo de los 80, 90, actual, jazz y blues. No se incluyen melodías de canciones comerciales.


## Novedades 3.5 · Consolidación y estabilidad

Esta actualización conserva el contenido y las funciones de la 3.4 y agrega:
- Versionado de recursos `3.5.0` para reducir problemas de caché después de publicar.
- El service worker incluye ahora `extras.js` en el shell offline (antes podía quedar fuera de la caché inicial).
- Foco visible de teclado para controles, enlaces y campos.
- Mejoras de interacción táctil para reducir dobles toques y retrasos de respuesta en móviles.
- Respeto global por la preferencia del sistema de movimiento reducido.
- Ajustes de densidad visual en pantallas horizontales de poca altura.
- Documentación actualizada para desplegar y diagnosticar la app.

## Pruebas de entrega

- Sintaxis JavaScript validada con Node.js para `app.js` y `extras.js`.
- JSON del manifiesto validado.
- Se verificó que `index.html` carga ambos scripts y la hoja de estilos con versión 3.5.
- Se verificó que el service worker lista `extras.js` dentro del shell.
- El audio acústico remoto sigue requiriendo internet en el primer uso; el paquete no incorpora archivos de muestras con licencia de terceros.
- Web MIDI y micrófono dependen del navegador, permisos y HTTPS. En Safari para iOS se mantiene el teclado virtual como alternativa.


## Versión 3.6 · Digitación visible por mano

Se conserva el contenido y las funciones de la 3.5 y se añade:
- Guía fija de colores: MD azul y MI verde.
- Leyenda de digitación: 1 pulgar, 2 índice, 3 medio, 4 anular y 5 meñique.
- Cada nota descendente puede mostrar su número de dedo, nombre de nota y abreviatura MD/MI.
- Las instrucciones del modo espera identifican la mano, la nota y el nombre del dedo.
- Las teclas esperadas exponen mano y digitación también en su etiqueta accesible.
- La asignación de dedos es una sugerencia automática por registro/contorno, no una digitación editorial validada para toda obra. En pasajes complejos conviene corregirla con digitación docente.

Prueba técnica: validar `app.js` y `extras.js` con `node --check` antes de publicar. El motor requiere pruebas reales de ejecución con un MIDI y teclado físico.


## Versión 3.7 · Corrección visual para iPhone

- Corregido el aviso de orientación: ahora permanece oculto en Inicio, Curso y demás secciones.
- Solo aparece al entrar al estudio interactivo en pantalla completa y con el teléfono en vertical.
- Se presenta como una capa fija a pantalla completa, sin empujar ni superponer el contenido de la academia.
- Mejoras de navegación horizontal móvil y ocultación de barras de desplazamiento decorativas.
- Actualizados los identificadores de caché y versiones de recursos a 3.7.0.

Después de publicar, recargá la web. Si seguís viendo la versión anterior en iPhone, cerrá la pestaña y volvé a abrir el sitio; el service worker actualizará los recursos.


## Versión 3.8 · Corrección definitiva del aviso vertical

- El aviso de orientación inicia oculto mediante el atributo HTML `hidden`.
- La navegación JavaScript lo muestra únicamente al entrar en Estudio interactivo desde un móvil en vertical.
- Al volver a Inicio, Curso u otra sección, el aviso se oculta explícitamente.
- Se usa el selector `#orientation-gate[hidden]` con prioridad para evitar que reglas CSS anteriores lo vuelvan a mostrar.
- Se actualizan los recursos y la caché a 3.8.0.

Validación: sintaxis de `app.js` y `extras.js` comprobada. Debe publicarse el ZIP completo y probarse en Safari tras cerrar pestañas anteriores.
