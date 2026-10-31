# Correcciones para la versión 2 de la Web SPA

La versión 1 la generó Antigravity siguiendo el Seminario IA y funciona: se puede buscar, ver la ficha, pedir una changa (con el modal) y ver el pedido en Mis trabajos. Pero al compararla con los wireframes, la checklist de `03-alcance-y-checklist.md` y las reglas del proyecto, encontramos **20 puntos para corregir**. Esta guía dice qué hacer, qué prompts pasarle a Antigravity y cómo comprobar que quedó bien.

> **Estado:** aplicado en v2.

---

## 0 · Preparación (lo hacés vos, sin Antigravity)

1. **Clonar y crear la rama de trabajo**

   ```bash
   git clone git@github.com:ValenBelone7/serrano-trabaja-efi.git
   cd serrano-trabaja-efi
   git checkout -b v2-correcciones
   ```

2. **Copiar el favicon** (Antigravity no ve la carpeta `2-Documento-Investigacion/`):

   ```bash
   cp 2-Documento-Investigacion/Marca/favicon.svg 1-Prototipo-WebSPA/web-spa/favicon.svg
   ```

3. **Abrir en Antigravity solo la carpeta `1-Prototipo-WebSPA/web-spa/`**, no el repo entero. Así se activan las reglas de `.agents/rules/antigravity_rules.md` y las skills de `.agents/skills/`.
4. **Modelo:** Gemini 3.7 Flash High.
5. **Engram:** la memoria de la v1 quedó en la compu de Valentín, no en el repo, así que vos arrancás sin ella. Si Engram no está instalado, hacé primero el auto-setup de la Clase 2 del manual `seminario-ia.md`. Para verificar en Linux: *"Verificá que Node.js, Git y Engram estén instalados y funcionen; mostrame un resumen."*
6. **Para probar la app**, levantá un servidor local desde `web-spa/`:

   ```bash
   cd 1-Prototipo-WebSPA/web-spa && python3 -m http.server 8000
   # abrir http://localhost:8000
   ```

---

## 1 · Lista de correcciones

La fuente de verdad, en este orden: **wireframe de Figma > `02-especificacion` > entrevista > investigación**.

### Bloque A · Gobernanza y documentos

| # | Problema en la v1 | Qué hay que hacer |
|---|---|---|
| A1 | En `decisiones.md` faltan 3 decisiones que pide la guía del seminario. | Agregar ADR con fecha para: **barra inferior de 5 pestañas en lugar de menú hamburguesa**, **modo claro por defecto (con modo oscuro opcional)** y **disabled en gris plano, como dice el UI Kit**. |
| A2 | Si el sistema está en modo oscuro, la app abre en oscuro (`app.js`, `inicializarTema`, usa `prefers-color-scheme`). | Sin un tema guardado en `serrano_tema`, abrir **siempre en claro**. El oscuro solo se activa con el botón y queda guardado. |
| A3 | `REPORTE_VERIFICACION_SDD.md` dice "100% aprobado" aunque varios puntos de esta lista fallan. | Rehacerlo al final con la verificación real de la v2 (sección 3 de esta guía). Guardar la v1 como historial dentro del mismo archivo, sin borrarla. |
| A4 | `errores-conocidos.md` no registra lo que aprendimos de la v1. | Sumar entradas para los gotchas de esta lista: tamaños fuera de la escala, emojis en los toasts, pestañas que no hacen nada y clases de Tailwind inexistentes. |

### Bloque B · Sistema visual y accesibilidad

| # | Problema en la v1 | Qué hay que hacer |
|---|---|---|
| B1 | Se usan **15 tamaños de letra** (11, 12, 13, 15, 16, 17, 19, 20, 22, 26, 28, 36…). La regla es usar solo **32 / 24 / 18 / 14**. | Equivalencias: 36 y 28 pasan a **32** (h1); 26, 22 y 20 pasan a **24** (h2) o a **18** si es texto de tarjeta; 19, 17 y 16 pasan a **18**; 15, 13, 12 y 11 pasan a **14**. El 14 queda solo para fechas, etiquetas de la barra inferior y "Foto". |
| B2 | El error "Contanos un poco más…" y el texto "Falta: …" están en 15–16px. | Todo error, ayuda e instrucción en **18px** como mínimo. |
| B3 | Hay un **emoji** en un aviso: `⚠️ Sin señal en el celular…` (`inicializarEventosRed`). | Reemplazarlo por el ícono SVG de advertencia, igual que en el modal. Revisar que no quede ningún emoji en `app.js` ni en `index.html`. |
| B4 | Quedó un `console.error` en `guardarPedidoLocalStorage`. | Sacarlo. Si falla el guardado, avisarle al usuario con un aviso en pantalla. |
| B5 | Hay botones más chicos que 56px: la "✕" del aviso sin señal (44px) y "Restablecer filtros" (44px). | Los dos de **56×56px como mínimo**. |
| B6 | La clase `.force-text-white` está definida en `style.css` pero **ningún botón la usa**. La rúbrica la pide de forma explícita. | Agregarla a todo botón o chip con fondo azul sólido: `.btn-primary`, chips elegidos y el link "Saltar al contenido". |
| B7 | El botón disabled usa texto `#4B5563` + `opacity: .85`. La especificación dice fondo `#D1D5DB`, texto `#6B7280`, plano y sin sombra. | Ajustar `style.css` a la especificación y quitar el `opacity`. |
| B8 | Se usan clases que **no existen en Tailwind v3**: `w-18`, `h-18`, `sm:h-18`. El avatar y el header quedan sin tamaño fijo. | Usar `w-20 h-20` o valores arbitrarios (`h-[72px]`). |
| B9 | Hay `onclick="…"` escritos dentro del HTML de las vistas. | Pasarlos a `addEventListener`, como el resto del código. |
| B10 | El sitio no tiene favicon (da error 404 en la consola). | Enlazar `favicon.svg` en el `<head>` (copiado en el paso 0.2). |

### Bloque C · Comportamiento y fidelidad al wireframe

| # | Problema en la v1 | Qué hay que hacer |
|---|---|---|
| C1 | **Pedir una changa valida un solo campo.** Los chips vienen preelegidos y solo se exige "Qué necesitás". La rúbrica pide **al menos 3 campos validados**. | Los chips **Tipo de trabajo, Oficio, Cuándo y Dónde arrancan sin elegir**. "Publicar pedido" queda deshabilitado con el texto **"Falta: cuándo, dónde"** (con lo que falte en cada momento) hasta completar los 5 campos. "Una referencia del lugar" sigue siendo opcional. |
| C2 | Las pestañas **"Changas"** (Buscar) y **"Lo que hago"** (Mis trabajos) solo muestran un aviso y no cambian nada. Además, `aria-selected` no se actualiza. | **Changas:** mostrar tarjetas de changas con el formato de "Arreglar un enchufe" (título, oficio · zona, "Buscan a alguien · Hoy", "Ver changa"), filtradas por los mismos chips, y el botón "Avisame si hay changas nuevas" (spec §6.7). **Lo que hago:** tarjetas de trabajos donde el usuario es el trabajador, con el mismo formato que "Lo que pedí". Que `aria-selected` y el ✓ cambien de pestaña. Para el detalle de cada tarjeta alcanza con el aviso de "versión final"; **no inventar pantallas nuevas**. |
| C3 | Si no hay señal, el pedido se guarda pero **nunca se publica** cuando vuelve la red, aunque ADR-007 dice que sí. | Sin señal, guardar el pedido con estado **"Guardado · Falta publicar"** (ícono "…", como en el wireframe 20). Con el evento `online`, pasar esos pedidos a **"Esperando que te escriban"**, guardarlos en localStorage y avisar "Tu pedido ya se publicó". |
| C4 | En Buscar, el contador dice "N disponibles" pero cuenta también a los que están Ocupados. | Cambiarlo a **"N personas"** (o "1 persona"). |
| C5 | En Mis trabajos, el texto "Acá ves cómo sigue cada pedido." aparece **antes** de las pestañas; en el wireframe va **después**. | Moverlo debajo de las pestañas "Lo que pedí / Lo que hago". |
| C6 | En la ficha, el botón dice "Contactar a Carlos"; el wireframe 11 dice **"Contactar"**. | Usar "Contactar". El texto de abajo ("Contactar abre la conversación con Carlos.") ya aclara a quién. |
| C7 | Los pedidos nuevos en Mis trabajos tienen títulos como "Limpieza: Cortar el pasto del pa…". | Usar como título la descripción cortada en la última palabra completa, sin el prefijo del oficio. Mostrar abajo "Oficio · Zona · Cuándo". |
| C8 | Los textos "Falta: …" y "Todo listo para publicar" empiezan con "✓" en texto plano. | Mostrar el estado con un ícono SVG y texto, en 18px. Nunca solo por color. |

---

## 2 · Prompts para Antigravity

Pegalos **de a uno** y esperá a que cada uno termine. Antes de pasar al siguiente, revisá el resultado en el navegador.

### Prompt 1 · Ponerse en contexto

```text
Antes de tocar nada: leé .agents/rules/antigravity_rules.md, los 6 documentos de docs/contexto/,
todo docs/insumos/ (especialmente 03-alcance-y-checklist.md y 04-correcciones-v2.md) y los wireframes
10-Buscar, 11-Ficha-trabajador, 20-Mis-trabajos y 21-Pedir-changa de docs/insumos/imagenes/wireframes-figma/.
Después leé index.html, style.css y app.js. Guardá con mem_save un resumen del proyecto y de las
20 correcciones de 04-correcciones-v2.md. No modifiques archivos todavía: mostrame el resumen.
```

### Prompt 2 · Bloque A (gobernanza)

```text
/sdd-explore Aplicá el Bloque A de docs/insumos/04-correcciones-v2.md (A1, A2 y A4; A3 se hace al final).
Registrá cada decisión como un ADR nuevo con fecha y hora en docs/contexto/decisiones.md, sin borrar
los ADR anteriores. Pedime aprobación antes de aplicar, como dice ADR-011.
```

Después: `/sdd-propose` → `/sdd-tasks` → `/sdd-apply` → `/sdd-verify`.

### Prompt 3 · Bloque B (sistema visual)

```text
/sdd-explore Aplicá el Bloque B completo (B1 a B10) de docs/insumos/04-correcciones-v2.md sobre
index.html, style.css y app.js. Escala tipográfica estricta 32/24/18/14, todo lo tocable de 56px o más,
.force-text-white en todo fondo azul sólido, cero emojis, cero console.*, cero onclick en el HTML.
Actualizá docs/contexto/convenciones.md si cambia algún token. Al terminar, listame todos los
text-[...] que quedan con su cantidad para comprobar la escala.
```

Después: `/sdd-propose` → `/sdd-tasks` → `/sdd-apply` → `/sdd-verify`.

### Prompt 4 · Bloque C (comportamiento y wireframe)

```text
/sdd-explore Aplicá el Bloque C completo (C1 a C8) de docs/insumos/04-correcciones-v2.md. Si un dato
difiere entre documentos, manda el wireframe de Figma. No inventes pantallas nuevas: el detalle de
cada changa o trabajo sigue mostrando el aviso "Esta sección se suma en la versión final de la EFI".
Registrá en decisiones.md un ADR por C1, C2 y C3.
```

Después: `/sdd-propose` → `/sdd-tasks` → `/sdd-apply` → `/sdd-verify`.

### Prompt 5 · Verificación final y reporte

```text
/sdd-verify Recorré TODA la checklist de docs/insumos/03-alcance-y-checklist.md y la sección 3 de
docs/insumos/04-correcciones-v2.md en el navegador, a 360px, 768px y 1280px, en modo claro y oscuro.
Rehacé REPORTE_VERIFICACION_SDD.md con una sección "Versión 2" que diga para cada punto APROBADO o
FALLA, con la evidencia. Si algo falla, poné FALLA: no lo marques aprobado. Mantené la sección de la v1
como historial. Después ejecutá sdd-archive y guardá el resumen de la sesión con mem_session_summary.
```

---

## 3 · Cómo comprobarlo vos (antes de subir)

Con la app abierta en `http://localhost:8000`, en Chrome:

**Flujo**
- [ ] La primera vez que abrís la app (o en una ventana de incógnito) arranca en **modo claro**, aunque tu sistema esté en oscuro.
- [ ] En Pedir una changa no hay ningún chip elegido y el botón dice "Falta: …" con lo que falta. Al completar los 5 campos se habilita.
- [ ] "Changas" y "Lo que hago" muestran tarjetas de verdad, y el ✓ cambia de pestaña.
- [ ] DevTools › Network › **Offline**: pedí una changa, aparece en Mis trabajos como "Guardado · Falta publicar". Volvé a **No throttling**: pasa a "Esperando que te escriban" y aparece el aviso.
- [ ] Recargás la página y el pedido y el tema elegido siguen ahí.

**Prueba de la mano atada (sin mouse)**
- [ ] Con Tab / Shift+Tab se recorre todo, siempre con el anillo celeste visible. Enter y Espacio activan.
- [ ] El modal atrapa el foco, se cierra con Escape y el foco vuelve al botón que lo abrió.

**Contraste y tamaños**
- [ ] DevTools › Lighthouse › Accesibilidad **≥ 95** en modo claro y en oscuro.
- [ ] DevTools › Rendering › Emulate vision deficiencies › **Achromatopsia**: se entiende Disponible / Ocupado, los chips elegidos y los errores.
- [ ] Con la vista de dispositivo a 360px no hay scroll horizontal; a 768px el catálogo tiene 2 columnas y a 1280px tiene 3, con la barra de navegación arriba.
- [ ] La consola no muestra errores en rojo (el aviso amarillo de Tailwind CDN es normal).

**Revisión rápida del código**, desde `1-Prototipo-WebSPA/web-spa/`:

```bash
# Tamaños usados: solo deberían aparecer 32, 24, 18 y 14
grep -oh 'text-\[[0-9]*px\]' app.js index.html | sort | uniq -c
# Ninguno de estos debería devolver resultados
grep -n 'console\.' app.js
grep -n 'onclick=' app.js index.html
grep -nP '[\x{1F300}-\x{1FAFF}\x{2610}-\x{26FF}]|\x{FE0F}' app.js index.html   # emojis (las ★ del wireframe no cuentan)
grep -n 'h-18\|w-18' app.js index.html
```

---

## 4 · Subir la versión 2

Escribí vos los mensajes de los commits. Antes de cada commit, revisá con `git status` que solo cambien archivos de `1-Prototipo-WebSPA/web-spa/`.

```bash
git status
git add 1-Prototipo-WebSPA/web-spa/
git commit -m "feat: versión 2 de la Web SPA con las correcciones de la v1"
git push -u origin v2-correcciones
```

Después, en GitHub, abrí un **Pull Request** de `v2-correcciones` a `main` para que Valentín lo revise antes de unirlo.

---

## 5 · Opcional: publicar la SPA con GitHub Pages

GitHub Pages solo publica desde la raíz o desde `/docs`, así que hace falta un workflow. Va en la **raíz del repo** y Antigravity no la ve, así que lo creás a mano: `.github/workflows/pages.yml`.

```yaml
name: Publicar Web SPA
on:
  push:
    branches: [main]
    paths: ['1-Prototipo-WebSPA/web-spa/**']
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: 1-Prototipo-WebSPA/web-spa
      - id: deployment
        uses: actions/deploy-pages@v4
```

Después, en GitHub: **Settings › Pages › Source: GitHub Actions**. La URL que aparezca (`https://valenbelone7.github.io/serrano-trabaja-efi/`) va en el `README.md` de la raíz, donde dice "Web SPA publicada: [COMPLETAR]".
