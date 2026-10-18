# Errores Conocidos & Prevención — Serrano Trabaja (Web SPA)

> **Lectura rápida**: < 2 minutos · **Foco**: Gotchas críticos de UX, Accesibilidad y Maquetado

---

## 1. Soluciones de Contraste en Modo Claro

| Gotcha / Problema | Riesgo UX | Solución Técnica Obligatoria |
|---|---|---|
| **Texto verde sobre blanco** | `#16A34A` da ratio de 3.2:1 (falla WCAG AA) en pantallas al sol. | Usar la variante oscura **`#15803D`** (4.6:1) para todo texto de éxito. |
| **Texto naranja/ámbar sobre blanco** | `#D97706` da 3.3:1 en avisos y advertencias. | Usar la variante oscura **`#B45309`** (4.88:1) para textos de alerta. |
| **Texto celeste informativo** | `#0891B2` da 3.6:1 sobre blanco. | Usar la variante oscura **`#0E7490`** (4.55:1) para textos informativos. |
| **Botones con texto desteñido** | En modo oscuro o con herencia de estilos, el texto del botón azul puede volverse gris. | Aplicar siempre la clase **`.force-text-white`** (`color: #ffffff !important`). |

---

## 2. Accesibilidad de Foco y Teclado (Prueba de la Mano Atada)

| Gotcha / Problema | Riesgo UX | Solución Técnica Obligatoria |
|---|---|---|
| **Foco desorientado al navegar** | Al cambiar de ruta `#`, el foco queda atrapado en el botón anterior y la pantalla no sube. | Escuchar `hashchange`, ejecutar `window.scrollTo(0, 0)` y enfocar el título: `h1.focus()` con `tabindex="-1"`. |
| **Modal trampa (*focus trap*)** | El usuario presiona `Tab` dentro del modal y el foco escapa a elementos de fondo invisibles. | Atrapar el ciclo de `Tab` entre los controles del modal; cerrar con `Escape`, botón "Cerrar" o click exterior, devolviendo el foco al trigger. |
| **Controles sin foco nativo** | Usar `<div>` o `<span>` para chips o botones impide que reciban foco. | Usar siempre etiquetas `<button>` o `<a>` nativas con atributo `aria-pressed` en chips de selección. |

---

## 3. Ajustes de Responsive Móvil y Usabilidad

| Gotcha / Problema | Riesgo UX | Solución Técnica Obligatoria |
|---|---|---|
| **Scroll horizontal involuntario** | Filas de chips o títulos desbordan pantallas estrechas (360px). | Envolver la fila de chips en contenedor con `overflow-x-auto`; aplicar `overflow-x-hidden` al contenedor raíz del layout. |
| **Botón cubierto por la barra** | En móviles, la barra inferior fija de 72px puede tapar botones o contenidos al pie. | Aplicar `padding-bottom: 96px` (`pb-24`) al `<main>` para garantizar visibilidad y separación. |
| **Pérdida de datos por desconexión** | Si se corta la señal o se recarga la pestaña, el formulario se vacía. | Escuchar eventos `input` en el formulario y sincronizar inmediatamente con `localStorage.setItem('serrano_borrador', ...)`. |
| **Error que borra campos** | Al fallar una validación, el input se limpia forzando a escribir de nuevo. | El feedback de error agrega borde rojo e ícono, pero **nunca vacía el valor del input**. |
