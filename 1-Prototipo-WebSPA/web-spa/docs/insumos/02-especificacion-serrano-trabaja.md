# Especificación funcional y visual — Serrano Trabaja

> **Para qué sirve este archivo:** es la especificación completa de la app que salió de los retos del año (TP de Usabilidad y A11y, Card Sorting con 5 vecinos, UI Kit). Describe **todas** las pantallas de la app.
>
> **Importante para la SPA:**
> - El **stack** es el del seminario (HTML5 + Tailwind CDN + JavaScript Vanilla). Donde este documento hable de componentes, se implementan en HTML/CSS/JS.
> - El **alcance** de la entrega del seminario es el flujo principal (ver `03-alcance-y-checklist.md`). El resto de las pantallas se suman después, para la presentación final de la EFI.
> - **Si un dato, texto o nombre difiere del wireframe de Figma (`imagenes/wireframes-figma/`), manda el wireframe.** Acá los ejemplos usan otros nombres (Juan Pérez, barrios), que vienen del prototipo de referencia.
> - Lo que sumó el seminario y no está acá (**modo oscuro**, **modal accesible**) está en `01-respuestas-entrevista-14P.md`.

---

## 1. Qué es la app

Serrano Trabaja es una app de changas y servicios locales para Serrano, un pueblo pequeño de Córdoba, Argentina. Reemplaza el boca en boca y los grupos de WhatsApp desorganizados que hoy usan los vecinos para conseguir o encontrar trabajo.

Hay **un solo perfil** por persona: la misma cuenta sirve para contratar y para ofrecer un oficio (en el Card Sorting, quienes contratan preguntaban "¿yo también tengo perfil?" y varios participantes cumplen los dos roles). Al entrar por primera vez la app pregunta **"¿Buscás a alguien o buscás changas?"** y con la respuesta ordena la pantalla Buscar; no limita lo que la persona puede hacer.

La confianza es el pilar del producto: en un pueblo todos se conocen, así que las estrellas, las opiniones de vecinos, el teléfono confirmado y las recomendaciones de vecinos pesan más que cualquier estética. Pedir una changa debe tomar menos de un minuto.

## 2. Actores y usuario límite (define los requisitos de diseño)

- **Quien contrata**: vecino que necesita una changa, un trabajo fijo o un servicio puntual (desde una señora mayor que busca un plomero de confianza hasta el dueño de un corralón que necesita changarines). Ingresa con su teléfono confirmado por SMS, sin redes sociales. Paga en efectivo, transferencia o Mercado Pago.
- **Quien ofrece un oficio**: electricista, albañil, gasista, limpieza, etc. Tiene estrellas, historial y disponibilidad ("Disponible hoy" / "Ocupado").
- **Usuario límite (el que manda en las decisiones de diseño)**: trabajador manual de edad avanzada, con precisión táctil reducida (manos curtidas, equivalente a operar con guantes), baja visión, que usa el celular bajo luz solar directa, con conexión de datos débil o inestable. No puede depender de gestos finos, texto chico, conexión constante ni verificación por cámara.
- **Plataforma**: confirma teléfonos por SMS, avisa changas nuevas por oficio y zona, suma las opiniones al perfil cuando un trabajo se marca como terminado.
- **Sistema de pago (Mercado Pago)**: procesa seña o pago total; ante un rechazo hay que dar aviso inmediato sin borrar el acuerdo ya conversado.

## 3. Sistema de diseño (usar exactamente estos valores)

### 3.1 Color

| Rol | Hex | Uso |
|---|---|---|
| Primario | #1D6FE0 | Acciones principales: Pedir una changa, Contactar, Confirmar. Texto blanco encima: 4.77:1 |
| Primario oscuro | #1857B3 | Hover / presionado y borde inferior de botones |
| Primario claro | #EFF6FF | Fondo de opción elegida grande |
| Secundario | #4B5563 | Botones secundarios y **todo el texto secundario** (6.87:1 sobre superficie) |
| Success | #16A34A | Solo íconos, rellenos y bordes (check, "Disponible hoy") |
| Success texto | #15803D | Texto verde (4.79:1 sobre #F0FDF4) |
| Danger | #DC2626 | Íconos, bordes y botón de acción destructiva |
| Danger texto | #991B1B | Texto de error (7.6:1 sobre #FEF2F2) |
| Warning | #D97706 | Solo íconos, estrellas y bordes |
| Warning texto | #B45309 | Texto de advertencia (4.84:1 sobre #FFFBEB) |
| Info | #0891B2 | Íconos, bordes y **anillo de foco** |
| Info texto | #0E7490 | Texto informativo (4.67:1 sobre #E0F2FE) |
| Fondos tenues | #F0FDF4 · #FEF2F2 · #FFFBEB · #E0F2FE | Fondo de avisos success / danger / warning / info |
| Fondo | #FFFFFF | — |
| Superficie | #F3F4F6 | Cards informativas (no tocables) |
| Texto principal | #111827 | — |
| Bordes | #D1D5DB | — |
| Placeholder | #6B7280 | 4.83:1 sobre blanco |
| Deshabilitado | fondo #D1D5DB / texto #6B7280 | Botones disabled |

**Regla:** los tonos base de Success, Warning e Info **no se usan para texto** (no llegan a 4.5:1); para texto se usa su variante "texto".

### 3.2 Tipografía

Fuente **Inter**, pesos 400 / 600 / 700. **Solo 4 tamaños** en toda la app:

| Estilo | Tamaño | Uso |
|---|---|---|
| H1 | 32px bold | Nombre de la pantalla |
| H2 | 24px bold | Título de sección, nombre de persona |
| Body | 18px regular / semibold | Texto general, botones, campos, avisos, etiquetas de campo |
| Caption | 14px regular | **Solo** fechas y aclaraciones no críticas, etiquetas de la barra inferior y de los tags. Nunca para errores ni instrucciones |

(Se mantienen los títulos de la escala de la cátedra —32/24— y se suben Body y Caption 2px —de 16/12 a 18/14— por el usuario límite.)

### 3.3 Principio rector

La interactividad se comunica por **FORMA y RELIEVE, nunca solo por color**. Todo estado (error, éxito, disponible/ocupado, confirmado, nuevo) combina **ícono + forma + texto literal**. La app tiene que entenderse en escala de grises.

### 3.4 Componentes

**Botones — 5 estados**
- Default: fondo #1D6FE0, texto blanco 18px semibold, borde 3px #1857B3 con borde inferior de 5px, sombra (0 4px 10px rgba(29,111,224,0.35)), esquinas 12px, alto mínimo 56px, ancho completo.
- Hover: fondo #1857B3.
- Active (presionado): se hunde 2px, pierde la sombra, borde inferior pasa a 3px.
- Focus: anillo de 3px #0891B2 con 2px de separación.
- Disabled: fondo #D1D5DB, texto #6B7280, plano, sin sombra.
- Secundario: fondo #F3F4F6, texto #4B5563, borde 2px #D1D5DB (inferior 4px).
- Peligro: igual al primario en #DC2626 / #991B1B. Solo para "Sí, cancelar este trabajo" y "Sí, salir".
- Acción de menor peso (texto): subrayado, 18px, con ícono, área de toque de 56px (ej.: "Avisar de un problema").

**Chips** (reemplazan a los menús desplegables)
- Alto mínimo 56px, texto 18px.
- Sin seleccionar: fondo blanco, borde 2px #D1D5DB, sombra sutil (elevado).
- Seleccionado: fondo #1D6FE0, texto blanco, borde 3px #1857B3, sombra interna (hundido) + ícono de check.

**Selector de dos opciones** (ej. "Trabajadores / Changas"): contenedor #F3F4F6; opción elegida en blanco con borde 2px primario.

**Interruptor de disponibilidad**: fila de 64px. "Disponible hoy" = círculo verde relleno con check + texto #15803D + fondo #F0FDF4 + borde 3px verde. "Ocupado" = círculo vacío con contorno gris + texto #4B5563 + fondo blanco.

**Campos de texto**: etiqueta arriba 18px semibold; campo de 56px, borde 2px gris; foco con borde primario. Error: sacudida horizontal, borde 2px Danger y debajo una caja de error (fondo #FEF2F2, borde 2px Danger, ícono triángulo, texto #991B1B 18px literal). Los datos cargados nunca se borran.

**Código SMS**: 4 cajas de 68×72px que muestran los números (no puntos).

**Cards**
- Tocable (trabajador, changa, trabajo propio, conversación): fondo blanco, borde 2px #D1D5DB, sombra, esquinas 12px; se hunde al tocar.
- Informativa (opiniones, historial, pagos): plana, fondo #F3F4F6, sin borde ni sombra.
- Card de trabajador: tag "Destacado" (si corresponde), avatar con iniciales, nombre, oficio con ícono, estrellas + número + cantidad, "Disponible hoy"/"Ocupado", zona.
- Opiniones en lista vertical; la cuarta se corta con degradé + botón "Ver las N opiniones".

**Avisos (Notice)**: caja con ícono grande + título en negrita + texto, en las 4 variantes semánticas (fondo tenue + borde 2px + texto en su variante oscura).

**Tags de estado**: ícono + texto 14px semibold dentro de una pastilla con borde (nunca un punto de color solo).

**Pasos del trabajo**: línea vertical con 4 pasos: "Pedido publicado → Arreglar día y precio → Se hace el trabajo → Terminado y con opinión". Paso hecho = check verde + "Listo"; actual = número en círculo primario + "Paso actual"; pendiente = número gris.

**Barra inferior**: 5 pestañas de 72px de alto, ícono 26px + etiqueta 14px. Activa: barra de 4px arriba + ícono más grueso + texto en negrita y color primario. Badge numérico en Mensajes.

### 3.5 Iconografía (SVG de trazo 2px, nunca emojis ni stock)

- **Pedir una changa**: "+" siempre con el texto.
- **Contactar**: mano abierta, siempre con el texto "Contactar…" (nunca el tubo de teléfono).
- **Confirmado / éxito**: check blanco en círculo verde.
- **Advertencia / error**: triángulo con "!" (Warning o Danger).
- **Información**: "i" en círculo Info.
- **Estrella**: rellena #D97706, vacía con contorno gris, siempre con el número al lado.
- **Oficios**: rayo (electricista), gota (plomero), ladrillos (albañil), llama (gasista), destello (limpieza), hoja (jardinería), pincel (pintura), caja (carga y descarga).
- **Tipos de trabajo**: llave (Changa), maletín (Trabajo fijo), calendario (Servicio puntual).
- **Barra inferior**: lupa, portapapeles, billetera, globo de diálogo, persona.
- **Sin señal**: antena tachada.

## 4. Reglas de accesibilidad transversales (obligatorias)

1. Todo lo tocable mide **mínimo 56px** de alto (botones, chips, campos, filas, estrellas de calificación).
2. Contraste de texto **mínimo 4.5:1** (ver 3.1).
3. Ningún estado se comunica solo por color: siempre forma/relieve + ícono + texto literal.
4. Toda acción irreversible (cancelar un trabajo, salir de la cuenta) pide confirmación.
5. La app tolera conexión débil: lo escrito se guarda en el celular; si no hay señal, se avisa y se publica sola al volver.
6. Microcopy directo y literal, sin tecnicismos ni metáforas (nunca "sincronizando", "reputación", "denunciar", "suscripción").
7. Foco visible en todo lo interactivo.
8. Mobile primero (360px) y adaptación a escritorio según `01-respuestas-entrevista-14P.md` (P9).

## 5. Arquitectura de información (sitemap del Card Sorting)

Barra inferior con **5 pestañas** = 5 categorías del Card Sorting; "Más" vive dentro de Mi perfil.

| Pestaña | Contiene | Respaldo |
|---|---|---|
| **Buscar** | Buscar trabajadores, oficios populares, filtro por tipo de trabajo, filtro por zona del pueblo, Destacados, ficha del trabajador (con opiniones de vecinos) | 5/5 |
| **Mis trabajos** | Pedir una changa, trabajos en marcha, cancelar, marcar como terminado (→ dejar opinión), historial | 5/5 |
| **Pagos** | Acordar seña o pago, Mercado Pago, efectivo | 5/5 |
| **Mensajes** | Conversaciones (Contactar) + "Avisame si hay changas nuevas" | resuelve las 2 tarjetas más dispersas |
| **Mi perfil** | Editar mi perfil, Disponible hoy / Ocupado, Mis estrellas, Vecinos que me recomiendan, Confirmar mi teléfono, Aparecer primero | 5/5 núcleo |
| ↳ **Más** | Cursos para aprender un oficio, Trabajadores sugeridos, Avisar de un problema, Salir | 4/5 las dejaron aparte |

**Etiquetas obligatorias (salen de las palabras de los participantes):**

| No usar | Usar |
|---|---|
| Publicar una changa | **Pedir una changa** |
| Reputación / calificación | **Mis estrellas** |
| Avales | **Vecinos que me recomiendan** |
| Verificar teléfono | **Confirmar mi teléfono** |
| Denunciar perfil | **Avisar de un problema** |
| Perfil destacado / suscripción | **Destacados** (tag) y **Aparecer primero** (pantalla) |
| Notificaciones | **Avisame si hay changas nuevas** |
| Capacitaciones | **Cursos para aprender un oficio** |
| Reseña | **Opinión** / "Lo que dicen los vecinos" |
| Empleador / Trabajador | "Busco a alguien" / "Busco changas" |

## 6. Pantallas (generar TODAS)

### A. Ingreso
1. **Crear cuenta** — logo, "Creá tu cuenta", campo "Tu número de celular" (+54, ayuda "Sin el 0 y sin el 15. No hace falta Facebook ni Google."), botón fijo abajo "Mandarme el código", link "Ya tengo cuenta: entrar".
2. **Entrar** — igual, "Entrá a tu cuenta", botón "Entrar".
3. **Confirmá tu teléfono** — 4 cajas de código, aviso info sobre reenvío, botones "Confirmar mi teléfono" y "Reenviar código".
4. **Confirmá tu teléfono · error** — misma pantalla con las cajas en rojo, caja de error "No pudimos verificar tu número, revisá e intentá de nuevo.", el código escrito se mantiene.
5. **¿Buscás a alguien o buscás changas?** — dos opciones grandes (104px) de igual jerarquía: "Busco a alguien" (lupa, "Para un arreglo, una changa o un trabajo") y "Busco changas" (llave, "Quiero que los vecinos me llamen para trabajar"); aviso info "Es una sola cuenta: podés hacer las dos cosas…"; "Continuar" deshabilitado hasta elegir.

### B. Buscar
6. **Buscar · Trabajadores** — encabezado (logo arriba a la izquierda + H1 "Buscar"), selector "Trabajadores / Changas", botón "Pedir una changa", "Oficios populares" (grilla 2×3 de chips con ícono), "Zona del pueblo" (chips con scroll horizontal: Todo el pueblo, Centro, Barrio Norte, Las Quintas, Zona rural), cantidad de resultados y cards de trabajador (Destacados primero).
7. **Buscar · Changas** — (orden por defecto si eligió "Busco changas") interruptor "Disponible hoy" arriba, chips de tipo de trabajo, chips de zona, cards de changa, botón "Avisame si hay changas nuevas" (o aviso de éxito si ya está activo).
8. **Ficha del trabajador** — miga de pan "Buscar › Electricista › Juan Pérez", avatar, nombre, oficio, zona; bloque de confianza (estrellas + número, "23 trabajos hechos con la app", tags "Teléfono confirmado" y "Destacado", disponibilidad); fila "Lo recomiendan 4 vecinos"; "Lo que dicen los vecinos" (4ª opinión cortada + "Ver las N opiniones"); "Trabajos que hizo"; acción de texto "Avisar de un problema"; **botón fijo abajo "Contactar a Juan"**.
9. **Changa pedida (detalle)** — tag de tipo, H1, filas con ícono: Qué necesita / Cuándo / Dónde / Quién lo pide; "Teléfono confirmado"; botón fijo "Contactar a quien la pidió".
10. **Vecinos que lo recomiendan** — "4 de 5 recomendaciones" + barra de progreso + aclaración "Con 5 recomendaciones aparece la marca 'Recomendado por vecinos'"; aviso info "Se arma con el tiempo. No hace falta tenerlas para usar la app desde el primer día."; lista de vecinos. En la versión propia: botón "Pedirle a un vecino que me recomiende".

### C. Mis trabajos
11. **Mis trabajos** — selector "Lo que pedí / Lo que hago"; botón "Pedir una changa"; secciones "En marcha" y "Terminados" con cards que tienen tag de estado (Esperando que te escriban / Día y precio arreglados / En curso / Terminado).
12. **Pedir una changa** — H1 "¿Qué necesitás?" + "Son 4 cosas…"; 1. Tipo de trabajo (3 chips a lo ancho); 2. Qué hay que hacer (campo libre); 3. ¿Cuándo? (chips Hoy / Mañana / Esta semana / Cuando se pueda); 4. ¿Dónde? (chips de zona); aviso "Te escriben por Mensajes de la app. Tu número no se muestra."; botón fijo "Publicar mi pedido" (deshabilitado + "Falta: …" mientras esté incompleto).
13. **Sin señal** — ícono de antena tachada en círculo warning, H1 "Sin señal", "Tu pedido se guardó en el celular. Se publica solo cuando vuelva la señal.", card del pedido con tag "Esperando señal", botones "Reintentar ahora" (con spinner "Publicando tu pedido…") e "Ir a Mis trabajos".
14. **Detalle de un trabajo** — tag de estado, H1, card tocable del trabajador, pasos del trabajo, Cuándo / Pago acordado. Acciones según estado: arreglado → "Hablar con Juan", "Acordar o pagar seña", "Cancelar el trabajo"; en curso → "Marcar como terminado", "Hablar con Pedro" + aviso warning "El trabajo ya empezó: ya no se puede cancelar desde la app" + "Avisar de un problema".
15. **¿Cancelar este trabajo?** — aviso danger "Solo antes de que empiece…", resumen, "Qué pasa si cancelás" (3 ítems), botones "Sí, cancelar este trabajo" (peligro) y "No, volver". Resultado: "Trabajo cancelado".
16. **Terminar trabajo + opinión** — check + "¡Listo el trabajo!", card del trabajador, "¿Cómo trabajó Pedro?" con 5 estrellas de 56px y texto de lo elegido ("4 de 5 · Muy bien"), chips rápidos (Llegó a horario, Trabajo prolijo, Cobró lo acordado, Lo recomiendo), campo opcional, botón "Publicar mi opinión", acción "Opinar más tarde". Resultado: **"Trabajo finalizado"** + "Tu opinión ya está en el perfil de Pedro…".

### D. Pagos
17. **Pagos** — botón "Acordar seña o pago", aviso "En efectivo se paga en mano. La app solo anota lo que acordaron, sin cobrar nada.", secciones "Por pagar" y "Pagados" (cards planas con tag, método con ícono y monto).
18. **Acordar seña o pago** — card de la persona, "¿Qué van a pagar?" (Una seña / El total), "¿Cómo?" (Efectivo / Mercado Pago / Transferencia, chips a lo ancho con ícono), "¿Cuánto? (en pesos)". Botón: "Guardar el acuerdo" o "Pagar $ X con Mercado Pago".
19. **Acordar seña o pago · rechazado** — aviso warning "Mercado Pago rechazó el pago. El acuerdo con Juan no se borró…" con botón "Pagar en efectivo"; los datos siguen cargados.

### E. Mensajes
20. **Mensajes** — "Conversaciones" (cards con avatar, último mensaje, hora, tag "Nuevo") y "Avisos de changas" con el interruptor "Avisame si hay changas nuevas" (Sí/No escrito) y la lista de avisos.
21. **Conversación** — aviso de éxito "Le mandamos tu mensaje a Juan" (cuando se acaba de contactar), mensaje inicial ya armado, burbujas 18px, respuestas rápidas en chips ("¿Cuándo podés venir?", "¿Cuánto cobrás?", "Te paso mi dirección"), campo + botón enviar de 56px, acceso "Acordar seña o pago".

### F. Mi perfil y Más
22. **Mi perfil** — avatar, nombre, oficio y zona; interruptor de disponibilidad; lista: Editar mi perfil, Mis estrellas, Vecinos que me recomiendan, Aparecer primero; fila plana "Confirmar mi teléfono · Listo"; "Lo que busco" (cambiar entre Busco a alguien / Busco changas); sección **Más**: Cursos para aprender un oficio, Trabajadores sugeridos, Avisar de un problema, Salir de mi cuenta (con confirmación).
23. **Editar mi perfil** — avatar + "Cambiar foto" (botón de 56px), nombre, "¿Qué oficio ofrecés?" (chips con ícono + "No ofrezco ningún oficio"), "¿En qué zona?", "Contá tu experiencia"; "Guardar cambios" → aviso "Cambios guardados".
24. **Aparecer primero** — "Que te vean primero", vista previa de la propia card con el tag Destacado, 3 beneficios con check, aviso "Se paga una vez por mes…", botón "Aparecer primero · $1.500 por mes".
25. **Trabajadores sugeridos** (para quien contrata seguido) — explicación, ejemplo de cards sugeridas, botón "Quiero el plan · $2.500 por mes".
26. **Cursos para aprender un oficio** — cards planas con título, institución del pueblo, días, lugar, cupos y precio, botón "Anotarme"; al anotarse, aviso "Ya estás anotado".
27. **Avisar de un problema** — "¿Qué pasó?", sobre quién, motivos en chips a lo ancho (No vino o no cumplió / Me cobró de más / Me trató mal / Sus datos son falsos / Otra cosa), campo opcional, aviso "Nadie se entera de que avisaste vos", aviso danger "Si es una emergencia, llamá al 911…", botón "Enviar aviso".

## 7. Flujos (para conectar la navegación)

- **Ingreso:** Crear cuenta → Confirmá tu teléfono (→ error si falla) → ¿Buscás a alguien o buscás changas? → Buscar. Entrar → Confirmá tu teléfono → Buscar.
- **Contratar:** Buscar → Oficio → Ficha del trabajador → Contactar → Conversación → Acordar seña o pago → Mis trabajos › Detalle → Marcar como terminado → Opinión → "Trabajo finalizado".
- **Pedir:** Mis trabajos (o Buscar) → Pedir una changa → Mis trabajos con aviso "Tu pedido ya está publicado" (o → Sin señal → Reintentar).
- **Conseguir changas:** Buscar · Changas (o Mensajes › aviso) → Changa pedida → Contactar a quien la pidió → Conversación → Mis trabajos › Lo que hago.
- **Confianza:** Ficha → Vecinos que lo recomiendan · Ficha → Avisar de un problema.
- **Cancelar:** Detalle de un trabajo (solo si no empezó) → ¿Cancelar? → Trabajo cancelado.

Las pantallas secundarias llevan **"← Volver"** con la acción **Back** (vuelve a la pantalla anterior del historial). Tocar una pestaña de la barra inferior lleva a la raíz de esa sección.

## 8. Tono y microcopy

Lenguaje cotidiano y literal, en voseo, pensado para todo rango de edad y alfabetización digital. Frases que hay que respetar tal cual: "No pudimos verificar tu número, revisá e intentá de nuevo.", "Trabajo finalizado", "Pedir una changa", "Avisame si hay changas nuevas", "Avisar de un problema".

## 9. Qué NO hacer

- No usar login con redes sociales (Facebook, Google) ni verificación por cámara.
- No usar menús desplegables donde el kit define chips.
- No comunicar ningún estado solo con color.
- No usar los tonos base de Success / Warning / Info para texto.
- No usar emojis ni fotos de stock (avatares con iniciales).
- No usar tamaños de letra fuera de 32 / 24 / 18 / 14.
- No usar las etiquetas viejas de la tabla de la sección 5.
- No agregar pantallas o funciones que no estén en la sección 6.
