# 3 · Presentación — Serrano Trabaja

**Presentación (diapositivas):** [COMPLETAR link]
**Duración máxima:** 20 minutos + defensa oral.

Este guion es para **estudiar antes de la clase**. En la defensa se muestran las diapositivas y, en vivo, las pantallas: la **Web SPA** para lo que ya está en código y el **wireframe de Figma** para el resto del flujo.

| Qué mostramos | Dónde está |
|---|---|
| Web SPA: Buscar, Ficha del trabajador, Pedir una changa, Mis trabajos | [`1-Prototipo-WebSPA/web-spa/`](../1-Prototipo-WebSPA/web-spa/) (publicada en [https://valenbelone7.github.io/serrano-trabaja-efi/](https://valenbelone7.github.io/serrano-trabaja-efi/)) |
| Figma: Ingreso, Trabajo, Cancelar, Opinión, Pagos, Mensajes, Mi perfil | [Wireframe de Figma (21 pantallas)](../2-Documento-Investigacion/Anexos/Reto7_Wireframes_Figma/) · [archivo](https://www.figma.com/design/uOYgW0ScLaP8cp4Wmuth8n/Serrano-Trabaja---Prototipo-EFI?node-id=0-1&t=colHn7zReRDBS3I3-1) · [prototipo](https://www.figma.com/proto/uOYgW0ScLaP8cp4Wmuth8n/Serrano-Trabaja---Prototipo-EFI?node-id=3-3&p=f&t=UXTqK97816BF5O1T-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A3) |
| Conceptos de cada clase y dónde se ven | [Matriz de conceptos](../2-Documento-Investigacion/EFI_Matriz_conceptos_Serrano_Trabaja.md) |

---

## Guion (≈ 18 min, deja margen para preguntas)

| # | Bloque | Min | Quién | Qué decir | Qué mostrar |
|---|---|---|---|---|---|
| 1 | El problema | 2 | [COMPLETAR] | En Serrano las changas circulan de boca en boca o en grupos de WhatsApp desordenados: los pedidos se pierden y no hay forma de saber si alguien es de confianza. | Diapositiva con una captura de un grupo (anonimizada) |
| 2 | La idea y la marca | 1,5 | | Qué hace la app en una frase. Ícono: pin (lo cercano) + check (confianza), azul con contraste 4.77:1. | Ícono y logo (`Marca/`) |
| 3 | El usuario límite | 1,5 | | Adulto mayor, baja visión, manos curtidas, usa el celular al sol y con poca señal. Él define todo el diseño (como los aliens de Rocket Pizza). | TP Usabilidad y A11y |
| 4 | Investigación: Card Sorting | 3 | | 5 vecinos, 24 tarjetas, matriz de acuerdo. **Lo que cambiamos gracias a ellos**: "Pedir una changa", "Avisar de un problema", "Mis estrellas", un solo perfil. | Tabla "Antes / Después" del documento §5 |
| 5 | Arquitectura y flujo | 2 | | Sitemap de 5 secciones = barra inferior. User Flow con camino feliz y caminos de error. | Sitemap, User Flow |
| 6 | Del wireframe al sistema de diseño | 2 | | Wireframe low-fi en Figma (v1 → v2 después del Card Sorting). El UI Kit es nuestro **sistema de diseño** (Clase 9): tokens de color con contraste verificado, escala 32/24/18/14 y componentes con sus 5 estados. | Figma v1 vs. v2 · UI Kit |
| 7 | **Demo en vivo** | 4 | | Ver "Recorrido de pantallas" abajo. | Web SPA + Figma |
| 8 | Valor agregado y comunidad | 1,5 | | Tabla "Hoy (gratis) vs. Serrano Trabaja" y modelo de ingresos. | Documento §3 y §4 |
| 9 | Cómo usamos IA | 1 | | La investigación, el wireframe y la especificación son nuestros. Con Antigravity (Seminario IA) generamos el código de la SPA a partir de eso y lo corregimos en una v2 con 20 puntos que encontramos al compararla con el wireframe. | `docs/insumos/04-correcciones-v2.md`, reporte de verificación |
| 10 | Equipo y cierre | 1 | | Fotos, roles, aprendizaje principal. | Documento §7 |

---

## Recorrido de pantallas (demo de 4 min)

**En la Web SPA** (celular a 360px y después escritorio):

1. **Buscar:** tocar "Albañilería" → el contador dice "1 persona". Sumar la zona "Sur" → **estado vacío** ("No encontramos trabajadores con esos filtros…" + "Ver todos los trabajadores"). Pasar a la pestaña **Changas**.
2. **Ficha de Carlos Heredia:** estrellas, "Teléfono confirmado", "Lo recomiendan 4 vecinos" y opiniones, todo **antes** del botón Contactar (confianza). Tocar **Contactar**.
3. **Pedir una changa:** arranca sin nada elegido y el botón dice "Falta: …". Ir completando y mostrar cómo cambia hasta "Todo listo para publicar." → publicar → aparece en **Mis trabajos**.
4. **Sin señal** (DevTools › Network › Offline): pedir otra changa → queda "Guardado · Falta publicar". Volver a conectar → "Tu pedido ya se publicó."
5. Cambiar a **escritorio** (barra arriba, 3 columnas) y al **modo oscuro**.
6. *(Si sobra tiempo)* Navegar solo con el teclado (Tab, Enter, Escape) o mostrar la pantalla en escala de grises: todo se entiende sin color.

**En Figma** (lo que la SPA todavía no tiene en código):

7. **Ingreso:** 01-Entrar → 02-Error (el código mal escrito no se borra) → 03-Que-busco ("¿Buscás a alguien o buscás changas?").
8. **Terminar un trabajo:** 23-Trabajo (paso a paso) → 25-Opinion (estrellas grandes, "Elegiste 4 de 5 estrellas").
9. **Pagos:** 31-Acordar-pago → 31-Rechazado (el acuerdo no se borra).
10. **Mi perfil:** 50-Mi-perfil ("Disponible hoy / Ocupado", "Mis estrellas", "Vecinos que me recomiendan").

---

## Conceptos para tener en la punta de la lengua

| Clase | Concepto | Ejemplo nuestro para decir |
|---|---|---|
| 2 | Accesibilidad / WCAG | 56px de área de toque, 18px de texto, contraste 4.5:1 verificado, nunca solo color |
| 3 | Affordance | Los botones tienen relieve y se hunden al tocarlos; los chips elegidos quedan hundidos con check |
| 4 | Gestalt (proximidad) | La card del trabajador agrupa todo lo necesario para decidir |
| 5 | 5 estados del botón | Disabled gris con "Falta: …" debajo |
| 6 | DCU | Iteramos: el Card Sorting cambió la navegación y 8 etiquetas |
| 7 | Arquitectura de información | 5 categorías del Card Sorting = 5 pestañas |
| 8 | Prototipo interactivo | Figma con On click → Navigate to y Back |
| 9 | Diseño atómico | Botón y chip (átomos) → card de trabajador (molécula) → catálogo "Trabajadores del pueblo" (organismo) |
| 9 | Microinteracciones | Botón que se hunde, chip con check, "Disponible hoy / Ocupado" como el toggle de la clase, "Falta: …" que se actualiza en vivo |
| 10 | UX Writing | Verbos concretos ("Pedir una changa", "Publicar pedido") y palabras de los vecinos ("Avisar de un problema") |
| 10 | Patrones avanzados | Onboarding de una pregunta, estado vacío con salida, confirmación antes de cancelar, errores que dicen cómo seguir |

---

## Preguntas probables en la defensa

- **¿Por qué no usar simplemente WhatsApp?** → La confianza visible (opiniones, recomendaciones, teléfono confirmado), la búsqueda por oficio y zona, los avisos y el registro de lo acordado.
- **¿Cómo validaron?** → Card Sorting abierto con 5 personas reales; cambios concretos que salieron de ahí (tabla "Antes / Después").
- **¿Por qué letra de 18px y botones de 56px, si la Clase 10 dice 16px y 44px?** → Esos son mínimos para un usuario promedio; nuestro usuario límite tiene baja visión, manos curtidas y usa el celular al sol.
- **¿Qué parte está en código y qué parte en Figma?** → La SPA tiene las 4 pantallas centrales (buscar, ficha, pedir, mis trabajos); el flujo completo, con ingreso, pagos, mensajes, opinión y perfil, está en el wireframe navegable de Figma.
- **¿Tienen un sistema de diseño?** → Sí: el UI Kit. Si se cambia un color en un solo lugar, cambia en toda la app; así funciona el modo oscuro.
- **¿Dónde aplicaron UX Writing?** → En todos los botones y avisos: "Falta: cuándo, dónde." en vez de "Formulario incompleto"; "No encontramos trabajadores con esos filtros. Probá…" en vez de "Sin resultados".
- **¿Qué hizo la IA y qué hicieron ustedes?** → La investigación, el Card Sorting, el wireframe y la especificación son nuestros. Antigravity generó el código de la SPA a partir de eso; lo revisamos contra el wireframe y la checklist y le pedimos 20 correcciones en la v2.
- **¿Cómo gana plata?** → Comisión solo en pagos digitales, "Aparecer primero", plan de trabajadores sugeridos y cursos.
