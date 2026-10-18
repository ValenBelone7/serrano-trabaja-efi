# Arquitectura — Serrano Trabaja (Web SPA)

> **Lectura rápida**: < 2 minutos · **Fuente visual**: Figma Wireframes (`docs/insumos/imagenes/wireframes-figma/`)

---

## 1. Stack Tecnológico

| Capa | Definición | Justificación (Why) |
|---|---|---|
| **Arquitectura** | SPA (Single Page Application) sin recarga | Navegación instantánea en redes móviles lentas (3G rural). |
| **Archivos base** | `index.html` + `style.css` + `app.js` | Directo en navegador, sin tooling pesado ni build step. |
| **Lenguaje** | JavaScript Vanilla (ES6+) | Máxima compatibilidad, cero overhead de frameworks. |
| **Markup** | HTML5 Semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) | Accesibilidad nativa para lectores de pantalla y jerarquía DOM clara. |
| **Estilos** | Tailwind CSS v3 (CDN) + `style.css` custom | Maquetado rápido con utilidades; tokens en `:root` y clases de relieve físico. |
| **Persistencia** | `localStorage` | Sobrevive a cortes de señal y recargas accidentales. |
| **Iconografía** | SVG inline propio (trazo 2px) | Sin emojis ni librerías externas que fallen sin conexión. |

---

## 2. Router SPA por Hash

La aplicación conmuta vistas dinámicamente mediante el evento `hashchange` sin recargar la página.

| Ruta Hash | Vista / Función | Frame de Figma de Referencia |
|---|---|---|
| `#buscar` | Vista inicial · Catálogo, filtros y CTA | `10-Buscar.png` |
| `#trabajador/:id` | Ficha detallada con confianza y opiniones | `11-Ficha-trabajador.png` |
| `#pedir` | Formulario en chips + modal accesible | `21-Pedir-changa.png` |
| `#mis-trabajos` | Historial de changas pedidas en el celular | `20-Mis-trabajos.png` |
| `#pagos` | Resumen de seña y saldo (Etapa 1: Placeholder) | `30-Pagos.png` |
| `#mensajes` | Conversaciones y avisos (Etapa 1: Placeholder) | `40-Mensajes.png` |
| `#mi-perfil` | Disponibilidad y datos (Etapa 1: Placeholder) | `50-Mi-perfil.png` |

*Al cambiar de ruta: el foco viaja automáticamente al `<h1>` de la nueva vista y el scroll se reinicia al tope (`scrollTop = 0`).*

---

## 3. Disposición Responsive

- **Móvil (< 768px)**:
  - Header superior (Logo + botón de cambio de tema).
  - 1 sola columna vertical de tarjetas.
  - Barra inferior fija de navegación (72px de alto, 5 pestañas con ícono + texto).
  - Botón de acción principal (`Contactar`, `Pedir changa`) fijo abajo.
- **Tablet (768px – 1023px)**:
  - Catálogo en 2 columnas; barra inferior de pestañas.
- **Escritorio (≥ 1024px)**:
  - Barra de navegación superior fija (Logo a la izquierda, pestañas y tema a la derecha).
  - Catálogo en 3 columnas; filtros horizontales superiores.
  - Ficha de trabajador en 2 columnas (contenido a la izquierda, panel fijo de contacto a la derecha).

---

## 4. Qué NO Existe (Límites Estrictos de Implementación)

1. **NO frameworks JS**: Prohibido React, Vue, Angular o Svelte.
2. **NO compiladores ni bundlers**: Prohibido Vite, Webpack o TypeScript en tiempo de ejecución.
3. **NO backend ni servidores**: Prohibido Node.js, Express, Python o Firebase/Supabase.
4. **NO menús `<select>` nativos**: Toda selección es mediante chips táctiles.
5. **NO menú hamburguesa**: La barra de 5 pestañas siempre está visible (el usuario límite no encuentra menús ocultos).
6. **NO emojis ni fotos de stock**: Íconos SVG geométricos y avatares con iniciales.
7. **NO pantallas inventadas**: Solo se maquetan pantallas validadas en los wireframes de Figma.
