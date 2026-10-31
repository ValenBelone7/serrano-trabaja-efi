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
| `#crear-cuenta` · `#entrar` | Ingreso solo con el número de celular | `01-Crear-cuenta.png` · `01-Entrar.png` |
| `#confirmar` | Código SMS de 4 números (con su error: el código no se borra) | `02-Confirmar-telefono.png` · `02-Error.png` |
| `#que-busco` | ¿Buscás a alguien o buscás changas? | `03-Que-busco.png` |
| `#buscar` | Catálogo, filtros, pestañas Trabajadores / Changas | `10-Buscar.png` |
| `#trabajador/:id` | Ficha con confianza, opiniones y Contactar | `11-Ficha-trabajador.png` |
| `#changa/:id` | Detalle de una changa pedida | `12-Changa-pedida.png` |
| `#pedir` | Pedir una changa (chips, "Falta: …") | `21-Pedir-changa.png` |
| `#sin-senal/:id` | Pedido guardado sin señal, se publica solo | `22-Sin-señal.png` |
| `#mis-trabajos` | Lo que pedí / Lo que hago | `20-Mis-trabajos.png` |
| `#trabajo/:id` | Detalle con paso a paso (empezar, terminar) | `23-Trabajo.png` |
| `#cancelar/:id` | Confirmación de cancelación | `24-Cancelar.png` |
| `#opinion/:id` | Estrellas y comentario → "Trabajo finalizado" | `25-Opinion.png` |
| `#pagos` | Resumen y acuerdos de pago | `30-Pagos.png` |
| `#acordar-pago/:id` | Seña o total, forma de pago, pago con Mercado Pago (simulado) | `31-Acordar-pago.png` |
| `#pago-rechazado/:id` | Pago rechazado: el acuerdo no se borra | `31-Rechazado.png` |
| `#mensajes` | Avisos de changas y conversaciones | `40-Mensajes.png` |
| `#conversacion/:id` | Mensajes con un vecino (pendientes sin señal) | `41-Conversacion.png` |
| `#mi-perfil` | Disponibilidad, estrellas, recomendaciones, Más | `50-Mi-perfil.png` |
| `#editar-perfil` | Foto, nombre, oficios, zona y experiencia | `51-Editar-perfil.png` |
| `#cambiar-telefono` | Confirmar mi teléfono (nuevo número) | `01-Entrar.png` (variante) |

*Sin sesión guardada, cualquier ruta lleva a `#crear-cuenta` (o a `#entrar` si ya hubo una cuenta en ese celular). Las rutas del ingreso ocultan la barra de navegación.*

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
