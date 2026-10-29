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

---

### [ADR-014] · [2026-10-29 11:18] — Barra inferior fija de 5 pestañas en lugar de menú hamburguesa
- **Contexto**: El usuario límite (adulto mayor, trabajador rural, sin hábito de exploración en interfaces complejas) no encuentra opciones ocultas en menús hamburguesa ("tres rayitas").
- **Decisión**: Utilizar en dispositivos móviles una barra inferior fija permanente de 72px de alto con 5 pestañas siempre visibles (`Buscar`, `Mis trabajos`, `Pagos`, `Mensajes`, `Mi perfil`), acompañadas de ícono SVG y texto descriptivo en 14px. En escritorio (≥ 1024px) se ubica en el header superior horizontal.
- **Consecuencia**: Reconocimiento visual directo sin carga cognitiva de memorización ni pasos ocultos; navegación accesible con una sola mano en pantallas táctiles.

---

### [ADR-015] · [2026-10-29 11:18] — Modo claro por defecto con modo oscuro persistente opcional
- **Contexto**: El uso primordial de la aplicación ocurre bajo sol pleno en zonas rurales serranas (obras, calles, quintas). Los modos oscuros sufren deslumbramiento y reflejos severos en pantallas de celulares bajo luz solar directa.
- **Decisión**: La aplicación iniciará **siempre en modo claro por defecto**, descartando `prefers-color-scheme` si el usuario no eligió explícitamente el modo oscuro. El modo oscuro solo se activará mediante el botón manual en el encabezado y persistirá bajo la clave `serrano_tema` en `localStorage`.
- **Consecuencia**: Máxima legibilidad inmediata para el usuario rural sin obligarlo a configurar nada; respeta la elección personal si la guarda voluntariamente.

---

### [ADR-016] · [2026-10-29 11:18] — Botón disabled en gris plano sin opacidad ni sombra
- **Contexto**: En la v1 el botón deshabilitado utilizaba `opacity: .85` con texto `#4B5563`, lo que generaba un contraste difuso y confuso con botones activos secundarios. El UI Kit especifica una convención clara de inactividad física.
- **Decisión**: El estado *disabled* se implementa con fondo gris sólido `#D1D5DB`, texto `#6B7280`, borde comprimido plano (2px), sin sombra (`box-shadow: none`), sin elevación, sin `opacity` y con cursor `not-allowed`, siempre acompañado de microcopy explicativo de faltantes en ≥ 18px.
- **Consecuencia**: Affordance mecánico inequívoco: el botón se percibe plano y desactivado, evitando pulsaciones frustrantes.

---

### [ADR-017] · [2026-10-29 16:10] — Validación multi-campo en formulario de changas sin preselección de chips
- **Contexto**: En la v1 los chips de selección venían preelegidos por defecto ("Changa", "Limpieza", "Hoy", "Zona Norte"), exigiendo únicamente completar el textarea. Esto impedía que el usuario hiciera elecciones reflexivas y vulneraba el requerimiento de validar al menos 3 campos explícitos.
- **Decisión**: Los cuatro grupos de chips (`tipoTrabajo`, `oficio`, `cuando`, `donde`) arrancan sin preselección (`''`). El botón "Publicar pedido" permanece deshabilitado hasta completar los 5 campos obligatorios (los 4 chips + descripción con mínimo 10 letras), exhibiendo un microcopy reactivo en 18px con ícono SVG que detalla con precisión los campos faltantes.
- **Consecuencia**: Alta calidad en los datos comunitarios publicados, prevención de errores por desatención y cumplimiento riguroso de la rúbrica de evaluación.

---

### [ADR-018] · [2026-10-29 16:10] — Activación funcional de pestañas secundarias "Changas" y "Lo que hago"
- **Contexto**: En la v1, hacer clic en "Changas" (Buscar) o "Lo que hago" (Mis trabajos) emitía un simple toast sin alternar el contenido ni actualizar los atributos `aria-selected` de accesibilidad.
- **Decisión**: Se implementa el renderizado completo de ambas vistas secundarias:
  1. En **Buscar › Changas**, se muestra el catálogo de changas vecinales filtradas por oficio y zona, con contador fidedigno ("N changas") y el bloque/botón accesible *"Avisame si hay changas nuevas"* (spec §6.7).
  2. En **Mis trabajos › Lo que hago**, se exhiben las tarjetas de trabajos en los que el usuario se postuló o fue asignado como trabajador, con estados visuales no cromáticos.
  Ambas vistas mantienen la consistencia de los wireframes 10 y 20 y resuelven el detalle de tarjeta mediante aviso accesible sin inventar pantallas fuera de alcance.
- **Consecuencia**: Experiencia simétrica y completa tanto para quien pide ayuda como para quien ofrece mano de obra en Serrano.

---

### [ADR-019] · [2026-10-29 16:10] — Sincronización y publicación reactiva de pedidos guardados sin señal al reconectar
- **Contexto**: En zonas rurales con conectividad intermitente, los pedidos guardados sin señal (`offline`) permanecían en estado pendiente indefinidamente en `localStorage`, requiriendo intervención manual o quedando estancados a pesar de lo estipulado en ADR-007.
- **Decisión**: Al guardar sin señal, el pedido se almacena con estado *"Guardado · Falta publicar"* (ícono "..."). Al dispararse el evento nativo `online` del navegador, el sistema procesa reactivamente los pedidos pendientes en `localStorage`, los promueve a *"Esperando que te escriban"*, emite un toast de confirmación (*"Tu pedido ya se publicó. Volvió la señal a Serrano."*) y re-renderiza la vista si el usuario se encuentra en `Mis trabajos`.
- **Consecuencia**: Continuidad operativa resiliente y transparente para el usuario en condiciones de baja conectividad.


