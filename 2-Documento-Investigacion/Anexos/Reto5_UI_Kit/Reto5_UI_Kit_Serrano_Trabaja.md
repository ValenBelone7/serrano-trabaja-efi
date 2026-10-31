# Reto 5 — UI Kit de Serrano Trabaja

**Integrantes:** Tiago Pescara y Valentín Belone
**Dónde se ve aplicado:** en la [Web SPA](../../../1-Prototipo-WebSPA/web-spa/) (los colores y estados están en `style.css`) y, en grises, en el [wireframe de Figma](../Reto7_Wireframes_Figma/).

---

## 0. Punto de partida: el usuario límite

El kit no se diseñó para un usuario promedio, sino para el que pone las condiciones más exigentes (definido en el TP de Usabilidad y A11y): un trabajador manual de edad avanzada, con **precisión táctil reducida** (manos curtidas, como operar con guantes), **baja visión**, que usa el celular **al sol** y con **señal débil**.

En la práctica, para él dos colores parecidos se vuelven iguales, igual que le pasaba al zogtoniano que veía en infrarrojo en Rocket Pizza. Por eso la regla que ordena todo el kit es:

> **La interactividad y los estados se comunican por forma, relieve, ícono y texto. Nunca solo por color.**
> Prueba: la app tiene que entenderse en escala de grises.

---

## 1. Paleta de colores

### Por qué estos colores (Clase 5: psicología + lógica de sistema)

- **Primario azul (#1D6FE0):** transmite confianza y seguridad, que es el pilar del proyecto ("en un pueblo todos se conocen"). Se usa solo en las acciones principales, para que el ojo sepa qué tocar.
- **Secundario gris (#4B5563):** acciones de menor importancia que no compiten por la atención.
- **Semánticos:** verde = salió bien / disponible; rojo = error o acción que no se puede deshacer; naranja = intermedio (en curso, pago rechazado); celeste = información y consejos.

### Tabla de colores y contraste (WCAG, mínimo 4.5:1 para texto)

| Rol | HEX | Uso | Contraste |
|---|---|---|---|
| Primario | `#1D6FE0` | Botón principal, links, pestaña activa | Blanco encima: **4.77:1** ✅ |
| Primario oscuro | `#1857B3` | Hover / presionado, borde de relieve | Blanco encima: 6.88:1 ✅ |
| Primario claro | `#EFF6FF` | Fondo de opción elegida | Texto #111827: 16.3:1 ✅ |
| Secundario / Texto 2 | `#4B5563` | Botón secundario, texto secundario | Sobre #F3F4F6: 6.87:1 ✅ |
| Success | `#16A34A` | **Solo** íconos, rellenos y bordes | Como texto: 3.30:1 ❌ |
| Success texto | `#15803D` | Texto verde ("Disponible hoy") | Sobre #F0FDF4: 4.79:1 ✅ |
| Danger | `#DC2626` | Íconos, bordes, botón destructivo | Blanco encima: 4.83:1 ✅ |
| Danger texto | `#991B1B` | Texto de error | Sobre #FEF2F2: 7.60:1 ✅ |
| Warning | `#D97706` | **Solo** íconos, estrellas y bordes | Como texto: 3.19:1 ❌ |
| Warning texto | `#B45309` | Texto de advertencia | Sobre #FFFBEB: 4.84:1 ✅ |
| Info | `#0891B2` | Íconos, bordes, **anillo de foco** | Como texto: 3.68:1 ❌ |
| Info texto | `#0E7490` | Texto informativo | Sobre #E0F2FE: 4.67:1 ✅ |
| Texto principal | `#111827` | Títulos y texto | Sobre blanco: 17.7:1 ✅ |
| Placeholder | `#6B7280` | Texto de ejemplo en campos | Sobre blanco: 4.83:1 ✅ |
| Superficie | `#F3F4F6` | Cards informativas (no tocables) | — |
| Bordes / Disabled | `#D1D5DB` | Bordes; fondo de botón deshabilitado | — |

**Corrección respecto de la primera versión:** el verde, el naranja y el celeste base se estaban usando también para texto ("Disponible hoy", avisos, "En curso") y daban entre **3.1 y 3.3:1**, por debajo del mínimo de la Clase 2. Justo esos textos son los que el usuario límite tiene que leer al sol. Se agregaron las variantes "texto" y se dejó la regla: *el tono base va en íconos y bordes; el tono oscuro va en las letras*. Además, el texto secundario pasó de `#6B7280` (4.39:1 sobre la superficie gris) a `#4B5563`.

---

## 2. Escala tipográfica

Fuente **Inter** (sans-serif, pensada para pantallas), pesos 400 / 600 / 700. **Solo 4 tamaños** en toda la app.

| Estilo | Clase 5 | Serrano Trabaja | Dónde se usa |
|---|---|---|---|
| H1 | 32px | **32px bold** | Nombre de la pantalla ("Pedir una changa", "Mis trabajos") |
| H2 | 24px | **24px bold** | Títulos de sección ("Oficios populares"), nombre de la persona en su ficha |
| Body | 16px | **18px** regular / semibold | Texto, botones, campos, etiquetas, avisos y errores |
| Caption | 12px | **14px** regular | Solo fechas y aclaraciones no críticas, etiquetas de la barra inferior y de los tags |

**Por qué se apartan Body y Caption de la escala de la cátedra:** el usuario límite tiene baja visión y lee al sol. Se mantuvieron los títulos y se subieron 2px los dos tamaños chicos, que son los que más sufre. **Regla:** nada crítico (errores, instrucciones, botones) puede ir en Caption.

---

## 3. Componentes y estados

### 3.1 Botón principal — los 5 estados (Clase 5)

| Estado | Cómo se ve | Para qué |
|---|---|---|
| **Default** | Fondo `#1D6FE0`, texto blanco 18px, borde 3px `#1857B3` con **borde inferior de 5px** + sombra. Alto mínimo 56px, ancho completo | El relieve "pide" ser tocado (affordance, Clase 3) |
| **Hover** | Fondo `#1857B3` | Avisa que algo va a pasar |
| **Active** | Se **hunde 2px**, pierde la sombra, el borde inferior pasa a 3px | Sensación de botón físico presionado, sin precisión fina |
| **Focus** | Anillo de 3px `#0891B2` separado 2px | Saber dónde está parado quien navega con teclado o lector |
| **Disabled** | Fondo `#D1D5DB`, texto `#6B7280`, plano, sin sombra. Debajo: "Falta: …" en texto | "Hasta que no completes, no podés tocarme", y dice qué falta |

Ejemplo con el botón principal de la app, **"Pedir una changa"**: está *Disabled* mientras falta completar el pedido y debajo dice qué falta ("Falta: cuándo, dónde.").

### 3.2 Variantes de botón

| Variante | Uso |
|---|---|
| Secundario (gris con borde) | "Reenviar código", "Avisame si hay changas nuevas", "No, volver" |
| Contactar | Siempre la **mano abierta** + "Contactar", con la aclaración debajo: "Contactar abre la conversación con Carlos.". No se usa el tubo de teléfono: el contacto es por mensaje y el ícono no depende de una referencia cultural |
| Peligro (rojo) | Solo para acciones que no se pueden deshacer: "Sí, cancelar este trabajo", "Sí, salir". Siempre después de una pantalla de confirmación |
| Acción de menor peso | Texto subrayado + ícono, con área de toque de 56px: "Avisar de un problema" |

### 3.3 Selección: chips en lugar de menús desplegables

| Estado | Cómo se ve |
|---|---|
| Sin elegir | Fondo blanco, borde 2px gris, sombra → **elevado** |
| Elegido | Fondo primario, texto blanco, borde 3px, sombra interna → **hundido + check** |

Alto mínimo 56px. Se usan para el tipo de trabajo, oficio, zona, cuándo, forma de pago y motivos. El check y el "hundido" hacen que el estado se lea sin color.

### 3.4 Interruptor "Disponible hoy / Ocupado"

| Estado | Forma | Texto |
|---|---|---|
| Disponible hoy | Círculo **lleno** verde con check, fondo verde claro, borde 3px | `#15803D` bold |
| Ocupado | Círculo **vacío** con contorno gris, fondo blanco, borde 2px | `#4B5563` bold |

### 3.5 Campos de texto

- Etiqueta siempre visible arriba (18px semibold). El placeholder es solo un ejemplo, nunca la etiqueta.
- Campo de 56px de alto, borde 2px gris; con foco, borde primario.
- **Error:** el campo se sacude, el borde pasa a rojo, y debajo aparece una caja con triángulo + texto literal en `#991B1B` (ej.: "No pudimos verificar tu número, revisá e intentá de nuevo."). **Lo que la persona escribió no se borra.**
- Código SMS: 4 cajas grandes que muestran los números (no puntos), para que el usuario límite vea qué escribió.

### 3.6 Cards (affordance: tocable vs. informativa)

| Tipo | Aspecto | Ejemplos |
|---|---|---|
| Tocable | Blanca, borde 2px, sombra; se hunde al tocar | Trabajador, changa pedida, trabajo propio, conversación |
| Informativa | Plana, fondo gris, sin borde ni sombra | Opiniones de vecinos, historial, pagos |

La card de trabajador agrupa todo lo que hace falta para decidir (Gestalt, proximidad): Destacado → foto y nombre → oficio → estrellas con número → disponibilidad y zona.

### 3.7 Estados y avisos

- **Tags:** ícono + texto en una pastilla con borde ("✓ Teléfono confirmado", "↑ Destacado", "⏱ En curso"). Nunca un punto de color solo.
- **Avisos:** 4 variantes (éxito, error, advertencia, info), cada una con su ícono de **forma distinta** (check, triángulo, triángulo, "i"), título en negrita y texto en su color oscuro.

### 3.8 Otros

- **Estrellas:** rellenas en naranja, vacías con contorno gris, **siempre con el número al lado** ("4,8"). Para calificar: 5 estrellas de 56px y debajo el texto de lo elegido ("4 de 5 · Muy bien").
- **Pasos del trabajo:** línea vertical con 4 pasos ("Pedido publicado → Arreglar día y precio → Se hace el trabajo → Terminado y con opinión"). Hecho = check + "Listo"; actual = número en azul + "Paso actual".
- **Barra inferior:** 5 pestañas (las 5 categorías del Card Sorting), 72px de alto, ícono 26px + texto 14px. La activa tiene una barra arriba, un ícono más grueso y el texto en negrita, no solo color.

---

## 4. Iconografía

SVG propio, trazo 2px, sin emojis ni fotos de stock (los emojis cambian según el celular y los lectores de pantalla los leen en voz alta).

| Ícono | Significado | Por qué |
|---|---|---|
| + | Pedir una changa | Convención casi universal de "agregar"; siempre con texto |
| Mano abierta | Contactar | Gesto de acercamiento; no ata a "llamar" |
| Check en círculo verde | Confirmado / listo | Forma + color |
| Triángulo con "!" | Advertencia o error | Se reconoce sin color |
| "i" en círculo | Información | Se distingue del triángulo por la forma |
| Lupa · portapapeles · billetera · globo · persona | Las 5 pestañas | Metáforas cotidianas, siempre con etiqueta |
| Rayo, gota, ladrillos, llama, destello, hoja, pincel, caja | Oficios | Ayudan a escanear la grilla de "Oficios populares" |
| Antena tachada | Sin señal | Estado de conexión débil |

---

## 5. Reglas del kit (checklist)

1. Todo lo tocable mide mínimo **56px**.
2. Texto con contraste mínimo **4.5:1**: los tonos base de Success, Warning e Info no van en letras.
3. Ningún estado depende solo del color: siempre **ícono + forma + texto**.
4. Solo 4 tamaños de letra: **32 / 24 / 18 / 14**.
5. Nada de menús desplegables: **chips**.
6. Las acciones que no se pueden deshacer **se confirman** y usan el botón de peligro.
7. Foco visible en todo lo interactivo.
8. Si se corta la señal, **lo escrito no se pierde**.
