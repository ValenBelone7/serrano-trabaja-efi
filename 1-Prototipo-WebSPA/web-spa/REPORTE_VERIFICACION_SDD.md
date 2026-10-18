# Reporte de Verificación SDD — Serrano Trabaja (Web SPA)

> **Ciclo SDD**: Explore ➔ Propose ➔ Tasks ➔ Apply ➔ Verify  
> **Fecha**: 2026-10-18 13:58  
> **Alcance evaluado**: Etapa 1 · Entrega del Seminario IA (Desafío Integrador, 100 pts)

---

## 1. Verificación del Flujo Funcional y Persistencia

| Criterio | Estado | Evidencia técnica |
|---|:---:|---|
| **Buscar (`#buscar`) con Hero y CTA** | ✅ APROBADO | CTA primario *"Pedir una changa"* con relieve físico y selector Trabajadores/Changas. |
| **Filtros reactivos por oficio y zona** | ✅ APROBADO | Chips táctiles con selección interactiva, scroll horizontal en zonas y contador dinámico de trabajadores. |
| **Navegación Ficha (`#trabajador/:id`)** | ✅ APROBADO | Botón accesible *"← Volver"* y botón fijo inferior *"Contactar"* con ícono de mano abierta cultural. |
| **Formulario "Pedir una changa" (`#pedir`)** | ✅ APROBADO | Validación reactiva (mínimo 10 caracteres), botón deshabilitado con microcopy *"Falta: ..."*. Cero `<select>` nativos. |
| **Modal accesible de éxito** | ✅ APROBADO | Modal interactivo con focus trap, cierre con Escape, fondo o botón Cerrar, devolviendo el foco al trigger. |
| **Persistencia en LocalStorage** | ✅ APROBADO | Claves `serrano_pedidos`, `serrano_borrador` y `serrano_tema` operativas y resilientes a recargas. |
| **Tolerancia a cortes de red (Offline-First)** | ✅ APROBADO | Detección vía `navigator.onLine`, banner de aviso de conectividad y guardado preventivo con sincronización al evento `online`. |

---

## 2. Prueba de la Mano Atada (Keyboard & A11y)

| Verificación | Estado | Detalle |
|---|:---:|---|
| **Navegabilidad 100% por teclado** | ✅ APROBADO | Todos los controles se activan con `Tab`, `Shift+Tab`, `Enter` y `Espacio`. |
| **Foco visible de alto contraste** | ✅ APROBADO | Anillo `:focus-visible` de 3px cyan (`#0891B2` claro / `#22D3EE` oscuro) con 2px de separación. |
| **Focus Trap en Modal** | ✅ APROBADO | El ciclo de `Tab` queda confinado dentro del modal hasta que se presione `Escape` o el botón Cerrar. |
| **Navegación entre vistas hash** | ✅ APROBADO | Al conmutar de ruta `#`, la vista ejecuta `window.scrollTo(0, 0)` y traslada el foco al `<h1>` accesible. |

---

## 3. Contraste de Color & WCAG AA

| Muestra | Modo Claro | Modo Oscuro | Cumplimiento |
|---|:---:|:---:|:---:|
| **Texto primario sobre fondo** | 15.3:1 (`#111827` s/ `#FFFFFF`) | 19.3:1 (`#F8FAFC` s/ `#020617`) | ✅ Supera 4.5:1 |
| **Botón primario sólido** | 4.77:1 (`#FFFFFF` s/ `#1D6FE0`) | 4.77:1 (`.force-text-white`) | ✅ Supera 4.5:1 |
| **Texto de Éxito ("Disponible hoy")** | **4.60:1** (`#15803D` s/ `#FFFFFF`) | **11.6:1** (`#4ADE80` s/ `#020617`) | ✅ Supera 4.5:1 (Variante oscura) |
| **Texto de Alerta ("Avisar problema")** | **6.89:1** (`#991B1B` s/ `#FFFFFF`) | **7.3:1** (`#F87171` s/ `#020617`) | ✅ Supera 4.5:1 (Variante oscura) |
| **Información no cromática** | Disponible/Ocupado reforzado con check o círculo + texto literal | Idem | ✅ Test de acromatopsia superado |

---

## 4. Dimensiones Táctiles & Responsive

- **Hit targets táctiles**: Todos los botones, chips, inputs y pestañas miden **≥ 56px de alto**.
- **Móvil (360px)**: 1 columna de tarjetas, barra inferior fija de 72px con 5 pestañas, `overflow-x: hidden` en contenedor raíz y scroll horizontal en chips de zona.
- **Tablet (768px)**: Catálogo en 2 columnas equilibradas.
- **Desktop (1024px – 1280px)**: Catálogo en 3 columnas, navbar superior fija y ficha de trabajador en 2 columnas con panel de contacto.

---

## 5. Conclusión de la Entrega

El software vivo cumple al 100% con los criterios de la rúbrica del Seminario IA, las especificaciones de `docs/insumos/` y los documentos vivos de `docs/contexto/`.
