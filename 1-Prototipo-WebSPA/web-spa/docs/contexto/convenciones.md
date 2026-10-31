# Convenciones — Serrano Trabaja (Web SPA)

> **Lectura rápida**: < 2 minutos · **Estándar**: WCAG AA (4.5:1 texto normal / 3:1 componentes)

---

## 1. Sistema de Colores Semánticos & Modos

### Modo Claro (Default por sol rural)
| Rol | Relleno / Fondo | Texto (Obligatorio) | Ratio WCAG | Uso |
|---|---|---|---|---|
| **Primario** | `#1D6FE0` | `#FFFFFF` (`.force-text-white`) | 4.77:1 | Acciones principales, header |
| **Primario Hover** | `#1857B3` | `#FFFFFF` | 6.42:1 | Estado activo/hover de botones |
| **Superficie** | `#FFFFFF` / `#F3F4F6` | `#111827` | 15.3:1 | Cards, fondos secundarios |
| **Éxito** | `#16A34A` | **`#15803D`** | 4.60:1 | "Disponible hoy", pedidos enviados |
| **Peligro** | `#DC2626` | **`#991B1B`** | 6.89:1 | Errores de validación, avisar problema |
| **Advertencia** | `#D97706` | **`#B45309`** | 4.88:1 | Estrellas de calificación, advertencias |
| **Info / Foco** | `#0891B2` | **`#0E7490`** | 4.55:1 | Anillo `:focus-visible`, mensajes |

> [!CAUTION]
> **Regla de oro de contraste**: Los tonos base verde (`#16A34A`), naranja (`#D97706`) y celeste (`#0891B2`) **NO** se usan en texto sobre blanco (dan < 3.7:1). Se usan exclusivamente sus variantes oscuras arriba detalladas.

### Modo Oscuro (Persistido en `localStorage` como `serrano_tema`)
- **Fondo / Superficie**: `#020617` / `#1E293B` (tarjetas `#0F172A`).
- **Texto Principal / Secundario**: `#F8FAFC` (19.3:1) / `#CBD5E1` (13.6:1).
- **Textos semánticos**: Éxito `#4ADE80` (11.6:1), Peligro `#F87171` (7.3:1), Advertencia `#FBBF24` (12.1:1), Info `#22D3EE` (11.2:1).

---

## 2. Escala Tipográfica Modular (Inter)

Solo se permiten **4 tamaños estrictos** con interlineado base de `1.5`:

| Nivel | Tamaño | Peso | Uso Específico |
|---|---|---|---|
| `h1` | **32px** (`2rem`) | 700 (Bold) | Título principal de la pantalla / Hero |
| `h2` | **24px** (`1.5rem`) | 700 (Bold) | Títulos de secciones intermedias |
| **body** | **18px** (`1.125rem`) | 400 / 600 (Bold) | **Texto base**: párrafos, inputs, botones, nombre de tarjetas, errores |
| **caption** | **14px** (`0.875rem`) | 400 (Regular) | Fechas, tags secundarios y etiquetas de la barra inferior |

*Prohibido usar texto menor a 18px para contenido crítico, instrucciones o mensajes de error.*

---

## 3. Los 5 Estados Obligatorios de Interacción

Todo componente interactivo (`<button>`, chips, inputs, tarjetas) debe responder visualmente:

1. **Default**: Relieve visual mediante borde inferior reforzado (5px) y sombra suave.
2. **Hover**: Oscurecimiento del fondo (ej. `#1857B3` en primario).
3. **Active**: **Hundimiento de 2px** (`translate-y-[2px]`), reducción del borde inferior a 3px y eliminación de sombra (simula presión física mecánica).
4. **Focus**: Anillo `:focus-visible` de 3px de alto contraste (`#0891B2` claro / `#22D3EE` oscuro), separado 2px del borde exterior.
5. **Disabled**: Plano, sin opacidad (1.0), fondo gris `#D1D5DB` y texto `#6B7280` (modo claro) / fondo `#334155` y texto `#94A3B8` (modo oscuro), borde de 2px, cursor `not-allowed`, sin sombra ni transform, acompañado de microcopy explicativo: *"Falta: cuándo, dónde"*.

---

## 4. Leyes de Gestalt y Espaciado

- **Proximidad**: La información de decisión del trabajador (foto, nombre, estrellas, disponibilidad, zona) se agrupa en una tarjeta blanca con padding de 16px y radio de 12px.
- **Semejanza**: Todos los botones de acción primaria comparten el mismo relieve azul (`#1D6FE0`); las acciones secundarias comparten borde gris.
- **Continuidad**: Filtros de chips con scroll horizontal (`overflow-x-auto`); línea de tiempo del trabajo en 4 hitos secuenciales.
- **Cierre**: Opiniones con degradé inferior suave indicando contenido expandible.
- **Jerarquía (Z-Pattern & Squint Test)**: Al entrecerrar los ojos, lo primero que destaca es el botón primario azul (`Pedir changa` o `Contactar`).

---

## 5. Reglas de Accesibilidad (WCAG AA & Universal)

1. **Hit Target Universal**: Todo elemento interactivo mide **mínimo 56px** en todas sus dimensiones (dedos gruesos y manos curtidas).
2. **Nunca solo por color**:
   - *Disponible hoy*: Círculo verde sólido + check icon + texto literal "Disponible hoy".
   - *Ocupado*: Círculo gris vacío + texto literal "Ocupado".
   - *Errores*: Borde rojo + ícono de triángulo + mensaje textual.
3. **Prueba de la mano atada**: Navegación 100% posible mediante teclado (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`). Modales con foco atrapado (*focus trap*).
