# Decisiones de Arquitectura y Diseño (ADRs) — Serrano Trabaja

> **Lectura rápida**: < 2 minutos · **Orden**: Numérico y cronológico estricto (`[ADR-XXX] · [YYYY-MM-DD HH:mm]`)

---

### [ADR-001] · [2026-10-18 12:55] — Arquitectura SPA Vanilla JS sin frameworks
- **Contexto**: Se necesita una interfaz web rápida, sin procesos de compilación ni dependencias que fallen en computadoras del aula.
- **Decisión**: Usar HTML5 semántico + JavaScript Vanilla con enrutamiento por hash (`#buscar`, `#trabajador/:id`, etc.). Se descarta Vite, React, Vue y TypeScript.
- **Consecuencia**: Portabilidad total (abrir `index.html` directo en el navegador); requiere disciplina manual en la estructura del código.

---

### [ADR-002] · [2026-10-18 12:57] — Estilos con Tailwind CSS v3 (CDN) y Relieve Mecánico
- **Contexto**: Se requiere maquetación rápida pero con componentes que simulen botones físicos para usuarios no nativos digitales.
- **Decisión**: Tailwind CSS v3 cargado vía CDN, extendido con tokens en `:root` y clases en `style.css` (`.btn`, `.chip`, `.card-tap`) con relieve de 5px y hundimiento de 2px al tacto.
- **Consecuencia**: Rápido desarrollo con consistencia visual; los estados complejos se concentran en CSS centralizado.

---

### [ADR-003] · [2026-10-18 13:00] — Accesibilidad Universal y Usuario Límite como Estándar
- **Contexto**: Cristian (56, albañil) tiene manos curtidas, celular viejo, baja visión y usa la app bajo el sol.
- **Decisión**: Establecer áreas de toque de **56px mínimo** en todos los controles y texto base de **18px**. La información nunca se transmite solo por color.
- **Consecuencia**: La interfaz es cómoda y accesible para cualquier vecino; los botones son amplios y legibles.

---

### [ADR-004] · [2026-10-18 13:03] — Modelo de Cuenta Única para Ambos Roles
- **Contexto**: En un pueblo chico muchas personas contratan y a la vez ofrecen changas. Perfiles separados confunden al vecino.
- **Decisión**: Un solo perfil por usuario. La app pregunta al iniciar *"¿Buscás a alguien o buscás changas?"* para filtrar la vista, pero la cuenta es la misma.
- **Consecuencia**: Eliminación de fricción en el registro y onboarding sin duplicidad de cuentas.

---

### [ADR-005] · [2026-10-18 13:05] — Supresión de `<select>` Nativos en Favor de Chips
- **Contexto**: Los menús desplegables fallan con dedos gruesos y presentan rendering dispar en móviles viejos.
- **Decisión**: Prohibir `<select>`. Toda opción se presenta en chips de 56px de alto con selección unívoca o múltiple y scroll horizontal en zonas.
- **Consecuencia**: Mayor área de impacto y claridad visual del estado seleccionado.

---

### [ADR-006] · [2026-10-18 13:07] — Iconografía Cultural: Mano Abierta para "Contactar"
- **Contexto**: El tubo telefónico se asocia a llamada de voz tradicional, pero la app inicia un chat de texto.
- **Decisión**: Utilizar el ícono de una **mano abierta** (saludo vecinal) acompañado del texto *"Contactar"*.
- **Consecuencia**: El usuario entiende que iniciará una conversación de mensajería sin temer una llamada invasiva.

---

### [ADR-007] · [2026-10-18 13:10] — Persistencia Resiliente con LocalStorage y Borrador Continuo
- **Contexto**: Las zonas rurales sufren cortes de señal. Perder lo escrito frustra y ahuyenta al usuario.
- **Decisión**: Persistir borradores en tiempo real bajo `serrano_borrador` y changas en `serrano_pedidos`. Si se pierde la señal, el pedido se encola y publica vía evento `online`.
- **Consecuencia**: Cero pérdida de datos ante recargas accidentales o desconexión.

---

### [ADR-008] · [2026-10-18 13:12] — Alcance en Dos Etapas de Entrega
- **Contexto**: El trabajo integrador requiere un MVP sólido antes de las 27 pantallas completas.
- **Decisión**: **Etapa 1 (Seminario)**: Flujo nuclear (`#buscar`, `#trabajador/:id`, `#pedir`, `#mis-trabajos`) 100% operativo; vistas secundarias con aviso explicativo. **Etapa 2 (EFI Final)**: Flujo de pagos, chat y perfiles completos.
- **Consecuencia**: Foco total en la excelencia del flujo de búsqueda y contratación.

---

### [ADR-009] · [2026-10-18 13:14] — Supresión de Emojis, Fotos de Stock y Pantallas Inventadas
- **Contexto**: Emojis rompen la seriedad y renderizan distinto; fotos de stock no representan a los vecinos; pantallas no validadas rompen el diseño testeado.
- **Decisión**: Usar únicamente SVG inline con trazo de 2px, avatares con iniciales y apego 100% a los wireframes de Figma.
- **Consecuencia**: Coherencia visual e identidad gráfica sobria y confiable.

---

### [ADR-010] · [2026-10-18 13:16] — Variantes de Color Oscuras Obligatorias para Texto
- **Contexto**: El verde, naranja y celeste estándar no cumplen el ratio 4.5:1 sobre blanco en modo claro.
- **Decisión**: Usar `#15803D` (éxito), `#B45309` (alerta) y `#0E7490` (info/foco) para textos. En botones sólidos, forzar texto blanco con `.force-text-white`.
- **Consecuencia**: 100% de cumplimiento con WCAG AA en modo claro y oscuro.

---

### [ADR-011] · [2026-10-18 13:18] — Protocolo Mandatorio de Cambios Mayores
- **Contexto**: Cambios en arquitectura, colores semánticos o frameworks impactan las reglas del proyecto.
- **Decisión**: **Antigravity debe pedir autorización explícita antes de ejecutar cualquier cambio estructural** y documentarlo de inmediato en este archivo.
- **Consecuencia**: Gobernanza y trazabilidad total del proyecto.

---

### [ADR-012] · [2026-10-18 13:45] — Poda Inteligente de Skills (.agents/skills/)
- **Contexto**: Se importó la biblioteca `agentic-awesome-skills` con más de 2.700 skills, la inmensa mayoría sobre tecnologías incompatibles o prohibidas (React, Vue, Angular, Node.js, Python, Docker, SQL, etc.).
- **Decisión**: Realizar una poda estricta conservando únicamente 23 skills esenciales enfocadas en Tailwind CSS, accesibilidad WCAG AA, diseño mobile-first, manipulación DOM/SPA y ciclo Spec-Driven Development (SDD), eliminando todo el repositorio superfluo.
- **Consecuencia**: Directorio `.agents/skills/` limpio (776 KB), sin ruido de frameworks prohibidos y con herramientas 100% pertinentes para el proyecto Serrano Trabaja.

---

### [ADR-013] · [2026-10-18 13:56] — Maquetación de Software Vivo (Etapa 1 - Seminario IA)
- **Contexto**: Se requería la implementación viva y navegable de los wireframes low-fi (`10-Buscar`, `11-Ficha-trabajador`, `21-Pedir-changa`, `20-Mis-trabajos`), respetando el sistema de diseño, los 5 estados, WCAG AA y la persistencia local.
- **Decisión**: Implementar la SPA mediante `index.html` (semántica HTML5 y estructura dual de navegación), `style.css` (tokens de relieve mecánico de 5px/2px, variantes de alto contraste y clases de utilidad) y `app.js` (router por hash, catálogo de 6 trabajadores, persistencia en `localStorage`, detección offline y modal con focus trap).
- **Consecuencia**: Aplicación 100% operativa en navegador, sin dependencias externas, navegable con teclado y fiel a las decisiones comunitarias de Serrano Trabaja.
