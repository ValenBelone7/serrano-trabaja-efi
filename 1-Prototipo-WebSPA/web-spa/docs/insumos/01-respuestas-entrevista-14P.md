# Respuestas a la Entrevista UX de 14 preguntas (Clase 4) — Serrano Trabaja

> Cuando Antigravity haga cada pregunta, copiá la respuesta correspondiente. Todo sale de los retos del año (TP de Usabilidad y A11y, Card Sorting, UI Kit, wireframe low-fi de Figma). La especificación completa está en `02-especificacion-serrano-trabaja.md`.

---

## BLOQUE 1 · Identidad, usuarios y glosario

### P1 · Nombre y propósito

Se llama **"Serrano Trabaja"** y sirve para que los vecinos de Serrano, un pueblo chico de Córdoba (Argentina), encuentren a alguien de confianza para una changa, un arreglo o un trabajo, y para que quienes saben un oficio consigan trabajo cerca de su casa. Reemplaza el boca en boca y los grupos de WhatsApp desordenados. Es un solo perfil por persona: la misma cuenta sirve para contratar y para ofrecerse. El pilar del producto es la **confianza**: estrellas, opiniones de vecinos y teléfono confirmado a la vista antes de contactar.

### P2 · Personas y puntos de dolor

Salen del Card Sorting que hicimos con 5 vecinos reales.

- **Persona 1 · Cristian, 56, albañil y changarín (usuario límite).** Celular Android viejo, solo usa WhatsApp. Tiene las manos curtidas (poca precisión al tocar, como si usara guantes), usa anteojos para leer, trabaja al sol y vive en una zona con señal débil. *Dolores:* letra y botones chicos, palabras técnicas ("verificar", "reputación", "denunciar" le sonaron a comisaría), perder lo que escribió si se corta la señal, desconfía de "pagar por internet". **Requisitos:** áreas de toque de **56px mínimo**, texto de **18px**, nada que dependa solo del color, lenguaje cotidiano y guardado local de lo que escribe.
- **Persona 2 · Susana, 58, empleadora.** Usa WhatsApp con los nietos y Facebook. Necesita jardinero, plomero o alguien para la canaleta, y su prioridad es la confianza: "no le abro la puerta a cualquiera". *Dolores:* no sabe a quién llamar, formularios largos, no entiende si ella "tiene perfil". **Requisitos:** ver estrellas, opiniones y "Teléfono confirmado" antes de contactar; pedir una changa en menos de un minuto; botón principal claro.

### P3 · Rotulado (labeling)

Las etiquetas salen de las palabras de los participantes del Card Sorting. Hay que usarlas **tal cual**:

| No usar | Usar |
|---|---|
| Publicar / Crear publicación | **Pedir una changa** |
| Reputación / Rating | **Mis estrellas** |
| Avales | **Vecinos que lo recomiendan** |
| Verificado | **Teléfono confirmado** |
| Denunciar perfil | **Avisar de un problema** |
| Premium / Suscripción | **Destacado** (marca) · **Aparecer primero** (función) |
| Notificaciones | **Avisame si hay changas nuevas** |
| Feed / Catálogo | **Buscar** |
| Historial / Orders | **Mis trabajos** |
| Empleador / Trabajador | **"Busco a alguien" / "Busco changas"** |
| Reviews | **Lo que dicen los vecinos** (opiniones) |

Las 5 secciones de la app (sitemap del Card Sorting): **Buscar · Mis trabajos · Pagos · Mensajes · Mi perfil**.

---

## BLOQUE 2 · Estructura, arquitectura de información y Figma

### P4 · Secciones y flujo de navegación (SPA)

SPA con router por hash (sin recargar). Para esta entrega se implementa el **flujo principal**: *buscar a alguien de confianza → ver su ficha → pedir una changa*.

1. **Barra de navegación fija** con las 5 secciones del sitemap. En escritorio va arriba, con el logo a la izquierda, los enlaces y el botón de tema a la derecha. En celular es una **barra inferior fija de 5 pestañas** (no hamburguesa: el usuario límite no encuentra menús escondidos), con el logo y el botón de tema en un encabezado arriba.
2. **`#buscar` (inicio)**
   - Encabezado con el H1 "Buscar", el subtítulo "Trabajo y ayuda entre vecinos de Serrano." y el CTA primario **"Pedir una changa"** (como en el wireframe). Selector "Trabajadores / Changas".
   - "Oficios populares" (chips con ícono), filtro por **Zona** (chips) y el catálogo "Trabajadores del pueblo", con **6 trabajadores**; al final, "También hay changas".
3. **`#trabajador/:id` (ficha del trabajador)**: estrellas, "Teléfono confirmado", "Lo recomiendan N vecinos", "Lo que dicen los vecinos" (opiniones), trabajos que hizo, enlace "Avisar de un problema" y el botón **"Contactar a [nombre]"**, fijo abajo en celular.
4. **`#pedir` (formulario "Pedir una changa")**: al enviar, abre un **modal accesible** de éxito.
5. **`#mis-trabajos`**: lista de los pedidos guardados en localStorage, con estado ("Esperando que te escriban").
6. **`#pagos`, `#mensajes`, `#mi-perfil`**: en esta entrega muestran una pantalla simple con el título de la sección y el texto "Esta sección se suma en la versión final de la EFI", más un botón "Volver a Buscar".

Los frames de Figma de referencia son `10-Buscar`, `11-Ficha-trabajador`, `21-Pedir-changa` y `20-Mis-trabajos`; las capturas están en `docs/insumos/imagenes/wireframes-figma/`.

### P5 · Anatomía de las tarjetas y datos de muestra

**Tarjeta de trabajador** (proximidad: todo lo que hace falta para decidir, junto; tarjeta blanca con borde, sombra y radio de 12px, que se hunde al tocarla):

- Arriba, la marca **"Destacado"** (ícono de flecha + texto), si corresponde.
- **Avatar con iniciales** (sin fotos de stock).
- Nombre en `h3` bold de 18px.
- Oficio con ícono SVG.
- Estrellas + número ("4,8") + cantidad de trabajos.
- **"Disponible hoy"** (círculo lleno con check, verde) u **"Ocupado"** (círculo vacío, gris), siempre con texto.
- Zona con ícono de ubicación.
- Botón secundario **"Ver ficha"**.

**Datos de muestra:** los textos y datos salen del wireframe de Figma (`10-Buscar`, `11-Ficha-trabajador`). Los 3 primeros están en el wireframe; los otros 3 siguen el mismo patrón para llegar a 6 tarjetas.

| Nombre | Oficio | Zona | Estrellas · trabajos | Estado | Extra |
|---|---|---|---|---|---|
| Carlos Heredia | Albañil y pintor | Zona Norte | 4 · 47 trabajos | Disponible hoy | Destacado, teléfono confirmado, lo recomiendan 4 vecinos |
| Elena Gómez | Limpieza | Zona Sur | 5 · 18 trabajos | Disponible hoy | Teléfono confirmado, 6 vecinos |
| Raúl Díaz | Electricidad | Zona Norte | 4 · 23 trabajos | Disponible hoy | Teléfono confirmado, 3 vecinos |
| Marta Benítez | Limpieza | Zona Norte | 5 · 31 trabajos | Ocupado | Teléfono confirmado, 9 vecinos |
| Luis Gómez | Electricidad | Zona Sur | 4 · 9 trabajos | Disponible hoy | Todavía no confirmó su teléfono, 1 vecino |
| Rosa Paz | Pintura | Zona Sur | 5 · 14 trabajos | Ocupado | Teléfono confirmado, 5 vecinos |

**Ficha de Carlos Heredia** (wireframe `11-Ficha-trabajador`):
- *Sobre su trabajo:* "Hace arreglos de albañilería y pintura. Acordá con Carlos el día, los materiales y el precio antes de empezar."
- *Opiniones:* María L. (5) "Excelente prolijidad y puntualidad, muy recomendable." · Jorge P. (4) "Muy buen pintor, cuidó mucho los detalles del living." · Estela M. (5) "Rápido y prolijo con los arreglos de albañilería."

**"También hay changas"** (al final de Buscar): "Arreglar un enchufe" · Electricidad · Zona Norte · "Buscan a alguien · Hoy" · botón "Ver changa".

**Oficios populares (chips):** Limpieza, Albañilería, Electricidad, Pintura.
**Zona (chips):** Todas, Norte, Sur.
**Persona que usa la app (Mi perfil):** Ana Ríos · Limpieza · Zona Norte.

### P6 · Formulario interactivo y feedback

**"Pedir una changa"** (wireframe `21-Pedir-changa`; tiene que tomar menos de un minuto y no lleva desplegables, todo con chips):

1. **Tipo de trabajo:** chips de selección única: Changa / Trabajo fijo / Servicio puntual.
2. **Oficio:** chips Limpieza / Albañilería / Electricidad.
3. **Qué necesitás:** `textarea` con `label` visible; ayuda debajo: "Ejemplo: limpiar un patio chico." Mínimo 10 caracteres.
4. **Cuándo:** chips Hoy / Mañana / Esta semana / A convenir.
5. **Dónde:** chips Zona Norte / Zona Sur.
6. **Una referencia del lugar:** input (ej. "Cerca de la plaza, en Serrano."); ayuda debajo: "La dirección exacta la pasás por mensaje."
7. Texto fijo antes del botón: "El precio se acuerda por mensaje antes de empezar." Botón: **"Publicar pedido"**.

Feedback:

- **Validación en el momento:** el botón "Publicar pedido" queda deshabilitado y debajo dice qué falta ("Falta: cuándo, dónde."). Un error se muestra con borde rojo, un ícono de triángulo y un texto literal, y nunca borra lo escrito.
- **Al enviar:** se guarda en localStorage y se abre un **modal accesible** con un check, el título "Tu pedido ya está publicado" y el texto "Te avisamos en Mensajes cuando alguien te escriba", más los botones "Ver Mis trabajos" (primario) y "Cerrar" (secundario).
- **Sin señal:** si `navigator.onLine` es falso, el modal dice "Sin señal: tu pedido se guardó en el celular y se publica solo cuando vuelva la señal", y se publica con el evento `online`.
- Lo que se escribe se guarda como **borrador** en localStorage mientras se completa.

---

## BLOQUE 3 · Sistema de diseño, colores y accesibilidad

### P7 · Paleta semántica y modos (claro / oscuro)

**Modo claro (por defecto, porque el usuario límite usa el celular al sol):**

| Rol | Color | Uso |
|---|---|---|
| Primario | `#1D6FE0` (hover/active `#1857B3`) | Botones principales, con texto blanco 4.77:1 |
| Secundario | `#4B5563` | Botones secundarios y texto secundario |
| Fondo / Superficie / Bordes | `#FFFFFF` / `#F3F4F6` / `#D1D5DB` | — |
| Texto | `#111827` | — |
| Éxito | relleno `#16A34A` · texto `#15803D` | Disponible hoy, confirmaciones |
| Peligro | relleno `#DC2626` · texto `#991B1B` | Errores, "Avisar de un problema" |
| Advertencia | relleno `#D97706` · texto `#B45309` | Estrellas (relleno), estados intermedios |
| Info | relleno `#0891B2` · texto `#0E7490` | Avisos informativos, **anillo de foco** |

Regla: el verde, el naranja y el celeste base **no van en texto** (dan 3.2–3.7:1); para texto se usa su variante oscura.

**Modo oscuro** (toggle con ícono SVG + texto "Modo oscuro" / "Modo claro", persistido en `localStorage` como `serrano_tema`):

| Rol | Color | Contraste |
|---|---|---|
| Fondo | `#020617` | — |
| Superficie / Tarjetas | `#1E293B` / `#0F172A` | — |
| Texto / Texto 2 | `#F8FAFC` / `#CBD5E1` | 19.3:1 / 13.6:1 |
| Primario (botones) | `#1D6FE0` con texto blanco (`.force-text-white`) | 4.77:1 |
| Primario como texto / enlaces | `#60A5FA` | 7.9:1 |
| Éxito / Peligro / Advertencia / Info (texto) | `#4ADE80` / `#F87171` / `#FBBF24` / `#22D3EE` | 11.6 / 7.3 / 12.1 / 11.2:1 |
| Bordes | `#64748B` | 4.2:1 (no es texto) |

### P8 · Tipografía y escala

**Inter** (Google Fonts) en 400, 600 y 700, para títulos y para texto. Usamos **4 tamaños**: los títulos de la escala de la cátedra y +2px en el texto común y en el chico, por el usuario límite (baja visión y uso al sol).

- `h1` **32px** bold: título de la vista / hero.
- `h2` **24px** bold: títulos de sección.
- body **18px**: texto, botones, campos, avisos y errores (también el nombre en las tarjetas, en bold).
- caption **14px**: solo fechas y aclaraciones no críticas, tags y etiquetas de la barra inferior.
- Interlineado de 1.5. Nada crítico (errores, instrucciones, botones) en 14px.

### P9 · Responsive y mobile-first

- **Celular (< 768px):** catálogo en 1 columna, márgenes de 16px, barra inferior fija de 5 pestañas (72px de alto, ícono + texto 14px) y botón principal de la ficha fijo abajo. Sin scroll horizontal.
- **Tablet (768–1023px):** catálogo en 2 columnas.
- **Escritorio (≥ 1024px):** navbar superior fija, catálogo en 3 columnas, filtros arriba del catálogo; ficha en 2 columnas, con datos y opiniones a la izquierda y un panel fijo con estrellas y "Contactar" a la derecha.
- Todo lo tocable mide **56px de alto como mínimo** (chips, botones, campos, pestañas).

### P10 · Los 5 estados

Los botones se ven como botones físicos (affordance):

- **Default:** fondo `#1D6FE0`, borde de 3px `#1857B3` con borde inferior de 5px y sombra.
- **Hover:** el fondo pasa a `#1857B3`.
- **Active:** se **hunde 2px**, pierde la sombra y el borde inferior baja a 3px.
- **Focus:** anillo `:focus-visible` de 3px `#0891B2` (en oscuro `#22D3EE`), separado 2px.
- **Disabled:** plano, fondo `#D1D5DB` y texto `#6B7280` (en oscuro `#334155` / `#94A3B8`), sin sombra y con `cursor-not-allowed`, más el texto "Falta: …" debajo.

Los mismos 5 estados aplican a botones secundarios, chips, tarjetas e inputs:

- **Chips:** sin elegir se ven elevados; elegidos, **hundidos**, con fondo primario y un check.
- **Inputs:** con el foco, el borde pasa a primario; con error, borde rojo y mensaje.

---

## BLOQUE 4 · Decisiones técnicas y límites

### P11 · Framework CSS

**Tailwind CSS v3 por CDN**, con `tailwind.config` extendido con los colores de la paleta (claro y oscuro con `darkMode: 'class'`) y la fuente Inter. En `style.css` van las variables `:root` / `.dark` de los tokens, las clases de botón con sus 5 estados (`.btn`, `.btn-primary`, `.btn-secondary`), `.chip`, `.card-tap`, `.force-text-white` y la animación de error, con `prefers-reduced-motion`. Los íconos son **SVG inline** propios, con trazo de 2px.

### P12 · Límites y tecnologías prohibidas

- **NO** usar React, Vue, Angular ni otro framework JS. Hay un prototipo de referencia hecho en React fuera de este workspace, pero solo sirve como referencia visual y **no se copia**.
- **NO** crear backend (Node, Express, Python) ni bases de datos (SQL, Firebase). Todo corre en el navegador con `localStorage`, con las claves `serrano_pedidos`, `serrano_borrador`, `serrano_tema` y `serrano_filtros`.
- **NO** usar estilos inline (`style="…"`) ni menús desplegables (`<select>`): siempre chips.
- **NO** usar emojis como íconos (tampoco ☀️/🌙 en el botón de tema) ni fotos de stock.
- **NO** usar login con Google/Facebook ni contraseñas, ni las etiquetas viejas de la tabla de P3.
- **NO** agregar pantallas ni funciones que no estén en la especificación.
- Archivos: `index.html`, `style.css` y `app.js`, que se abren directo en el navegador.

---

## BLOQUE 5 · Flujo de trabajo, DoD y gotchas

### P13 · Checklist de terminado (DoD)

1. Fiel a los wireframes de Figma (`10-Buscar`, `11-Ficha-trabajador`, `21-Pedir-changa`, `20-Mis-trabajos`) y a las etiquetas del Card Sorting.
2. Flujo completo funcionando: Buscar → filtrar por oficio y zona → Ver ficha → Pedir una changa → modal de éxito → aparece en Mis trabajos (y sigue ahí después de recargar).
3. **Prueba de la mano atada:** 100% operable con Tab, Shift+Tab, Enter y Espacio. El modal atrapa el foco, se cierra con **Escape**, con el botón Cerrar o tocando el fondo, y al cerrar el foco vuelve al botón que lo abrió.
4. Contraste ≥ 4.5:1 verificado en **los dos modos**; nada comunicado solo con color (probar en escala de grises).
5. Todo lo tocable ≥ 56px; solo los tamaños 32/24/18/14.
6. 360px sin scroll horizontal; 1280px con 3 columnas.
7. Los 5 estados visibles en botones, chips, tarjetas e inputs.
8. `docs/contexto/` completo, `decisiones.md` con los ADR y `REPORTE_VERIFICACION_SDD.md`.

### P14 · Errores comunes a prevenir

1. **Texto verde, naranja o celeste ilegible:** usar las variantes de texto (`#15803D`, `#B45309`, `#0E7490`; en oscuro `#4ADE80`, `#FBBF24`, `#22D3EE`).
2. **Botones primarios con texto gris en algún modo:** usar `.force-text-white` en todo botón con fondo sólido.
3. **Scroll horizontal en celular:** los chips de zona van en una fila con scroll horizontal propio (`overflow-x-auto`); el contenedor raíz lleva `overflow-x: hidden`.
4. **Elementos tocables con `<div>`:** siempre `<button>` o `<a>` reales. Chips con `aria-pressed`, pestaña activa con `aria-current="page"`, campos con `<label>` y errores con `role="alert"`.
5. **Foco perdido** al cambiar de vista: llevar el foco al `h1` de la vista nueva y el scroll arriba.
6. **El modal que atrapa al usuario:** botón Cerrar de 56px, cierre con Escape y con el fondo, y foco atrapado mientras está abierto.
7. **Iconos sin texto:** todo ícono va acompañado de su texto ("Contactar" con la mano abierta, nunca el tubo de teléfono).
8. **Perder lo escrito** si se corta la señal o se recarga: borrador en `localStorage`.
