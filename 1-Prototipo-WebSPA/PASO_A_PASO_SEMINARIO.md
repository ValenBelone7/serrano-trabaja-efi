# Paso a paso — Web SPA con Antigravity (Seminario IA)

Combina las indicaciones del profesor con el manual del seminario (`_material-de-la-materia/seminario-ia.md`). **Esta guía es una sugerencia: los archivos de contexto, las reglas y la SPA los crean ustedes con Antigravity.**

> **Lo que dijo el profe:** (1) aplicar cada clase del año a la EFI en un documento; (2) pedirle a Antigravity que **analice ese documento y arme los documentos de contexto**; (3) con el wireframe low-fi de Figma, **o** usar **Google Stitch** para crear las pantallas, **o** pasarle a Antigravity la **captura de cada pantalla** para que genere las vistas.

## Qué ya está listo (insumos, en `web-spa/docs/insumos/`)

| Archivo | Para qué |
|---|---|
| `00-documento-investigacion.md` | **El documento del paso (1):** cada clase del año aplicada a Serrano Trabaja, más la matriz de conceptos. Es lo que Antigravity analiza en el paso (2). |
| `01-respuestas-entrevista-14P.md` | Respuestas para la entrevista de la Clase 4, alineadas con el wireframe. |
| `02-especificacion-serrano-trabaja.md` | Especificación completa de todas las pantallas. |
| `03-alcance-y-checklist.md` | Qué entra en la entrega del seminario y qué en la final, más la checklist de la rúbrica. |
| `imagenes/wireframes-figma/` | Las **21 pantallas** del wireframe low-fi actualizado (PNG 3x). |
| `imagenes/` | Sitemap y User Flow. |

## Antes de empezar

- En Antigravity, abrí como proyecto **solo `1-Prototipo-WebSPA/web-spa/`**. Así se activan las reglas de `.agents/` y el agente trabaja solo con los insumos de `docs/insumos/`.
- Modelo: el que indique el seminario (Gemini 3.7 Flash High).

## 1 · Preparar el agente (Clases 1 a 3)

| Clase | Qué hacer |
|---|---|
| 01 | Prompt "WOW Effect" en un proyecto aparte; es una práctica. |
| 02 | Auto-setup. El prompt es para Windows (winget); en Linux pedí: *"Verificá que Node.js y Git estén instalados y funcionen; mostrame un resumen."* |
| 03 | **PROMPT 2** (reglas globales `always_on`). Al final agregá: *"Sumá a las reglas: leer siempre `docs/insumos/` (Serrano Trabaja, diseñado con usuarios reales en los retos de la materia); usuario límite con baja visión y manos curtidas → áreas de toque de 56px, texto de 18px, nada solo por color; usar las etiquetas del Card Sorting tal cual; si un dato difiere entre documentos, manda el wireframe de Figma; sin emojis ni fotos de stock; preguntar antes de inventar pantallas."* |

## 2 · Contexto: analizar el documento (Clases 4 y 5, paso 2 del profe)

1. **PROMPT 3 (entrevista 14P):** respondé cada pregunta con `01-respuestas-entrevista-14P.md`. Si te deja responder todo junto: *"Las respuestas están en docs/insumos/01-respuestas-entrevista-14P.md."*
2. **PROMPT 4 (Master Context)**, agregando al final:
   > *"Antes de generar los 6 documentos, analizá a fondo `docs/insumos/00-documento-investigacion.md` (es el documento donde aplicamos cada clase del año a nuestra EFI), además de `02-especificacion-serrano-trabaja.md`, `03-alcance-y-checklist.md` y las capturas de `docs/insumos/imagenes/wireframes-figma/`. Usá esa información para que el contexto refleje a nuestros usuarios reales: personas, card sorting, labeling, usuario límite y decisiones de accesibilidad."*
3. Revisá que `decisiones.md` registre:
   - stack Vanilla + Tailwind CDN;
   - barra inferior en lugar de hamburguesa;
   - áreas de toque de 56px y texto de 18px;
   - modo claro por defecto (con modo oscuro);
   - un solo perfil para los dos roles;
   - disabled en gris plano, como dice el UI Kit.
4. Clase 06: **PROMPT 5** y **PROMPT 6** (skills) tal cual.

## 3 · Del wireframe a la SPA (Clase 7, paso 3 del profe): elegí una opción

### Opción A — Google Stitch → Antigravity

1. En [Stitch](https://stitch.withgoogle.com), creá un proyecto **web/mobile** y subí como imagen la captura del frame (empezá por `10-Buscar.png`).
2. Prompt sugerido en Stitch:
   > *"Convertí este wireframe low-fi en una pantalla de alta fidelidad para 'Serrano Trabaja', app de changas de un pueblo. Mantené exactamente la estructura, los textos y el orden. Estilo: fondo blanco, primario #1D6FE0, texto #111827, tipografía Inter, cuerpo de 18px, títulos de 32/24px, botones y chips de 56px de alto con borde grueso y sombra (que parezcan apretables), sin emojis, sin fotos de stock (avatares con iniciales), barra inferior de 5 pestañas con ícono y texto. Contraste WCAG AA."*
3. Repetí con `11-Ficha-trabajador`, `21-Pedir-changa` y `20-Mis-trabajos`, pidiéndole que mantenga el mismo estilo.
4. Pasalo a Antigravity, de una de estas dos formas:
   - **MCP:** en Stitch, Settings › creá una **API key**. En Antigravity: panel del agente › **MCP store** › agregá **Stitch** y pegá la key.
   - **Export:** exportá el código o las imágenes desde Stitch y adjuntalos en el chat.
5. En Antigravity, **PROMPT 7**, agregando: *"Usá las pantallas de Stitch como diseño visual y el wireframe de docs/insumos/imagenes/wireframes-figma/ como estructura. Respetá docs/contexto/. Alcance: Etapa 1 de docs/insumos/03-alcance-y-checklist.md."*

### Opción B — Capturas directo a Antigravity (más simple)

**PROMPT 7** adjuntando, de a una vista por vez, `10-Buscar.png`, `11-Ficha-trabajador.png`, `21-Pedir-changa.png` y `20-Mis-trabajos.png`. Agregá: *"Alcance: Etapa 1 de docs/insumos/03-alcance-y-checklist.md. El wireframe es low-fi: aplicá el sistema de diseño de docs/contexto/convenciones.md. Verificá con la checklist de ese archivo antes de cerrar con sdd-verify y sdd-archive."*

> Recomendación: **B para la entrega del seminario** (menos pasos, más fidelidad al wireframe); **A** si quieren mostrar Stitch en la presentación o mejorar el aspecto visual de la versión final.

## 4 · Después del seminario (versión final de la EFI)

Para cada sección de la **Etapa 2** de `03-alcance-y-checklist.md`, un ciclo SDD con sus capturas:

```
/sdd-explore Sumar la sección [Pagos] según docs/insumos/02-especificacion-serrano-trabaja.md §6 y los wireframes adjuntos (30-Pagos, 31-Acordar-pago, 31-Rechazado). Mantené el stack, las reglas y el Master Context. Registrá el ADR en decisiones.md.
```

Después: `/sdd-propose` → `/sdd-tasks` → `/sdd-apply` → `/sdd-verify`.

## 5 · Al terminar

1. **Publicar la SPA.**
   - GitHub Pages solo publica desde la raíz o desde `/docs`, así que pedile a Antigravity un workflow de GitHub Actions que publique `1-Prototipo-WebSPA/web-spa/`. En GitHub: Settings › Pages › Source: **GitHub Actions**.
   - Alternativa sin configurar nada: arrastrar `web-spa/` a [Netlify Drop](https://app.netlify.com/drop).
2. Anotar la URL en `1-Prototipo-WebSPA/README.md` y en el `README.md` raíz.
3. Grabar el video demo de 2 a 3 minutos: navegación, modal, teclado y cambio de tema.
4. Guardar capturas de Stitch y de los walkthroughs de Antigravity para la diapositiva "Cómo usamos IA".
5. Si cambia el documento de investigación, volver a copiarlo a `docs/insumos/00-documento-investigacion.md`.
