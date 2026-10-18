> **Copia para Antigravity.** El original está en `2-Documento-Investigacion/` (documento de investigación + matriz de conceptos de todas las clases del año aplicados a Serrano Trabaja). Si cambia el original, volver a copiarlo acá.
> Según la indicación del profesor, este es el documento que Antigravity tiene que analizar para armar los documentos de contexto (`docs/contexto/`).

# Serrano Trabaja — Documento de investigación

**EFI · Interfaz de Usuario 2026**
**Equipo:** Tiago Pescara y Valentín Belone

> Las partes marcadas con **[COMPLETAR]** son datos que solo puede poner el equipo.

---

## 1. Resumen de la idea

En Serrano, un pueblo chico de Córdoba, las changas y los trabajos circulan de boca en boca o por grupos de WhatsApp desordenados. Quien necesita un plomero, un changarín o alguien para limpiar no tiene un lugar donde buscar; y quien sabe hacer algo no tiene cómo mostrarse, así que queda invisible.

**Serrano Trabaja** es una app que junta las dos puntas en un solo lugar:

- **Quien busca a alguien** encuentra trabajadores del pueblo por oficio y por zona, y ve sus estrellas, las opiniones de otros vecinos y quiénes lo recomiendan antes de contactarlo. También puede **pedir una changa** en menos de un minuto.
- **Quien busca changas** se muestra con su oficio, marca si está **"Disponible hoy"** y recibe un aviso cuando alguien pide un trabajo de lo suyo.
- Los dos arreglan día y precio por mensaje, acuerdan una **seña o pago** (en efectivo, por transferencia o con Mercado Pago) y, al terminar, quien contrató **deja su opinión**, que se suma al perfil del trabajador.

Hay un solo perfil por persona: la misma cuenta sirve para contratar y para ofrecerse, porque en un pueblo muchas personas hacen las dos cosas.

## 2. Datos de la empresa

| | |
|---|---|
| **Nombre** | Serrano Trabaja |
| **Rubro** | Plataforma local de changas, oficios y servicios |
| **Alcance** | Serrano (Córdoba), con posibilidad de replicarse en pueblos vecinos |
| **Propuesta en una frase** | "Encontrá a alguien de confianza del pueblo, o conseguí trabajo cerca de tu casa." |

### Ícono para apps y tiendas

![Ícono](../../../../2-Documento-Investigacion/Marca/icono-app-512.png)

Pin de ubicación con un check, sobre azul. El pin habla de *lo cercano, del pueblo*; el check, de *confirmado y de confianza*. El azul `#1D6FE0` transmite seguridad (Clase 5) y con el blanco da un contraste de 4.77:1.

Archivos en [`Marca/`](../../../../2-Documento-Investigacion/Marca/): `icono-app.svg` (vectorial), `icono-app-1024.png` (App Store / Play Store), `icono-app-512.png`, `icono-app-192.png` (web/Android) y `favicon.svg`.

### Logo en sus formatos

| Formato | Uso | Archivo |
|---|---|---|
| Horizontal | Encabezados, web, documentos | ![](../../../../2-Documento-Investigacion/Marca/logo-horizontal.png) `logo-horizontal.svg / .png` |
| Vertical | Redes sociales, cartelería, afiches | `logo-vertical.svg / .png` |
| Negativo | Sobre fondo azul o fotos oscuras | `logo-horizontal-negativo.svg / .png` |
| Monocromo | Impresión en blanco y negro, sellos, fotocopias | `logo-monocromo.svg / .png` |

Tipografía de la marca: **Inter** (Bold para "Serrano", Semibold para "Trabaja").

## 3. Valor agregado

¿Qué tiene Serrano Trabaja que no se encuentra en las opciones gratuitas (grupos de WhatsApp, Facebook, clasificados)?

| Hoy (gratis) | Serrano Trabaja |
|---|---|
| Los pedidos se pierden entre cientos de mensajes del grupo | Búsqueda por **oficio** y por **zona del pueblo**; los pedidos no se pierden |
| No hay forma de saber si alguien es confiable: "¿conocés a alguien que…?" | **Estrellas, opiniones de vecinos, teléfono confirmado** y **vecinos que lo recomiendan**, a la vista antes de contactar |
| El trabajador depende de que alguien se acuerde de él | Perfil propio, botón **"Disponible hoy"** y **avisos** de changas nuevas de su oficio |
| Nada queda registrado: ni el precio ni lo acordado | **Acuerdo de seña o pago** anotado en la app (efectivo sin comisión, o Mercado Pago) e **historial** de trabajos |
| Las apps grandes no están pensadas para un adulto mayor ni para poca señal | Diseñada para el **usuario límite**: letra grande, botones grandes, lenguaje simple y **funciona con señal débil** |
| Si algo sale mal, no hay a quién avisar | **"Avisar de un problema"** desde cada ficha, revisado por una persona |

### Modelo de ingresos

- **Comisión chica** solo en pagos con Mercado Pago (el efectivo es gratis).
- **Aparecer primero** ($1.500/mes): el trabajador sale arriba en la búsqueda con la marca "Destacado".
- **Trabajadores sugeridos** ($2.500/mes): para comercios y campos que contratan seguido.
- **Cursos para aprender un oficio:** inscripción a cursos de instituciones del pueblo (algunos gratis).

## 4. Cómo ayuda a la comunidad

- **Hace visible a quien trabaja:** el changarín o la señora que limpia por horas pasan a tener un perfil con su historial y lo que dicen los vecinos, algo que antes solo vivía en la memoria del pueblo.
- **Más confianza para contratar:** en un pueblo "no le abrís la puerta a cualquiera". La reputación vecinal pasa de ser un rumor a ser información a la vista.
- **La plata queda en el pueblo:** facilita que los trabajos se resuelvan con gente de Serrano y no con empresas de afuera.
- **Inclusión digital:** al estar pensada para adultos mayores y celulares viejos, incorpora a gente que hoy queda afuera de las apps.
- **Aprender un oficio:** los cursos de la Escuela Técnica y del Centro de Jubilados le dan más herramientas a quien busca trabajo.
- **Primer paso hacia la formalización:** el historial y las opiniones funcionan como un "certificado de trabajo" informal.

## 5. Cómo lo diseñamos (proceso DCU)

Seguimos el bucle de Diseño Centrado en el Usuario de la Clase 6: **entender → definir requisitos → diseñar → evaluar → iterar**.

| Etapa | Qué hicimos | Evidencia |
|---|---|---|
| Entender el contexto | Actores, contexto previo (boca en boca, WhatsApp), dispositivos y conectividad de Serrano. Definimos al **usuario límite**. | [TP Usabilidad y A11y](../../../../2-Documento-Investigacion/Anexos/Reto1-2_Usabilidad_A11y/) |
| Requisitos | Hit targets grandes, nada solo por color, lenguaje literal, ingreso por SMS sin cámara, tolerancia a señal débil. | TP Usabilidad y A11y |
| Primeros bocetos | Selección de rol, perfil del trabajador y aviso de error (mobile y desktop). | [Bocetos](../../../../2-Documento-Investigacion/Anexos/Reto1-2_Usabilidad_A11y/bocetos/) |
| Organizar el contenido | **Card Sorting abierto** con 5 vecinos (21 al 26/09/2026): 24 tarjetas agrupadas en 6 categorías, con matriz de acuerdo. | [Card Sorting + Sitemap](../../../../2-Documento-Investigacion/Anexos/Reto6_Card_Sorting/) |
| Flujo | User Flow con el camino principal y los caminos de error. | [User Flow](../../../../2-Documento-Investigacion/Anexos/User_Flow/Serrano_Trabaja_UserFlow.png) |
| Sistema visual | **UI Kit:** paleta con contraste verificado, escala tipográfica y componentes con sus estados. | [UI Kit](../../../../2-Documento-Investigacion/Anexos/Reto5_UI_Kit/Reto5_UI_Kit_Serrano_Trabaja.md) |
| Wireframes y prototipo | Wireframe low-fi navegable en Figma; prototipo de alta fidelidad y Web SPA. | [Reto 7](../../../../2-Documento-Investigacion/Anexos/Reto7_Wireframes_Figma/) · [Prototipo](../../../../1-Prototipo-WebSPA/) |
| **Iterar** | Con el Card Sorting cambiamos la navegación (5 secciones), 8 etiquetas, el ingreso (un solo perfil) y corregimos colores que no llegaban a 4.5:1. | Este documento |

### Lo que cambió gracias a los usuarios

| Antes | Después | Por qué |
|---|---|---|
| "Soy Empleador / Soy Trabajador" | "¿Buscás a alguien o buscás changas?" (un solo perfil) | Varios participantes cumplen los dos roles; una empleadora preguntó si ella también tenía perfil |
| "Publicar una changa" | "Pedir una changa" | Los trabajadores entendían "publicarme yo" |
| "Denunciar perfil" | "Avisar de un problema" | "¿Denunciar a quién? ¿Esto va a la comisaría?" |
| "Reputación" | "Mis estrellas" | "¿Reputación y reseñas no es lo mismo?" |
| "Suscripción / destacado" | "Destacados" y "Aparecer primero" | La palabra "suscripción" tapaba la función |
| Feed único de publicaciones | Buscar trabajadores + filtros por oficio y zona | El grupo "Buscar" tuvo acuerdo 5/5 |

## 6. Conceptos del cursado y cómo se implementaron

El detalle completo, concepto por concepto y con la pantalla donde se ve cada uno, está en **[EFI_Matriz_conceptos_Serrano_Trabaja.md](../../../../2-Documento-Investigacion/EFI_Matriz_conceptos_Serrano_Trabaja.md)**. Resumen:

- **Clase 1 — UX/UI y pilares:** la UX es reemplazar el boca en boca por confianza visible; los pilares guían cada decisión.
- **Clase 2 — Usabilidad y A11y (WCAG):** 56px mínimos, contraste 4.5:1, estados con ícono + forma + texto, errores que no borran datos.
- **Clase 3 — Affordance y modelos mentales:** botones con relieve que se hunden, cards tocables vs. planas, etiquetas tomadas de las palabras de los usuarios.
- **Clase 4 — Gestalt y jerarquía:** cards agrupadas por proximidad, una sola acción principal por pantalla, patrón Z, continuidad en los pasos del trabajo.
- **Clase 5 — Color, tipografía y componentes:** UI Kit con paleta semántica, escala 32/24/18/14 y los 5 estados del botón.
- **Clase 6 — DCU y Personas:** proceso iterativo; los 5 participantes del Card Sorting como perfiles reales.
- **Clase 7 — Arquitectura de información:** Card Sorting abierto, sitemap de 5 secciones, rotulado en lenguaje cotidiano, búsqueda con filtros.
- **Clases 8 y 9 — Prototipado:** wireframe low-fi navegable en Figma, componentes con variantes, prototipo de alta fidelidad y Web SPA.

**[COMPLETAR]:** agregar capturas de pantalla del prototipo junto a cada concepto (la matriz indica cuál sacar).

## 7. Equipo

| Foto | Nombre | Cargo | Sobre mí |
|---|---|---|---|
| **[COMPLETAR: foto]** | **Tiago Pescara** | **[COMPLETAR: ej. Investigación UX y Arquitectura de información]** | **[COMPLETAR: 2 o 3 líneas: quién es, qué hizo en el proyecto, qué le interesa]** |
| **[COMPLETAR: foto]** | **Valentín Belone** | **[COMPLETAR: ej. Diseño UI y Desarrollo del prototipo]** | **[COMPLETAR]** |

## 8. Anexos

| Anexo | Contenido |
|---|---|
| [Reto1-2_Usabilidad_A11y/](../../../../2-Documento-Investigacion/Anexos/Reto1-2_Usabilidad_A11y/) | TP de Usabilidad y A11y + bocetos mobile/desktop |
| [Reto5_UI_Kit/](../../../../2-Documento-Investigacion/Anexos/Reto5_UI_Kit/) | UI Kit (versión visual: prototipo con `?kit`) |
| [Reto6_Card_Sorting/](../../../../2-Documento-Investigacion/Anexos/Reto6_Card_Sorting/) | Sesiones, análisis y sitemap |
| [Reto7_Wireframes_Figma/](../../../../2-Documento-Investigacion/Anexos/Reto7_Wireframes_Figma/) | Wireframe low-fi navegable en Figma |
| [User_Flow/](../../../../2-Documento-Investigacion/Anexos/User_Flow/) | User Flow (PNG + SVG editable) |
| [Marca/](../../../../2-Documento-Investigacion/Marca/) | Ícono y logos en todos los formatos |


---

# EFI — Conceptos del año aplicados en Serrano Trabaja

**Integrantes:** Tiago Pescara y Valentín Belone

La Parte 1 de la EFI pide *"enumerar los conceptos vistos durante el cursado y detallar cómo se implementaron en el proyecto"*. Cada fila indica dónde mirarlo en el prototipo, para sacar la captura de pantalla que acompaña la descripción.

---

## Clase 1 — El mindset UX

| Concepto | Cómo se aplicó | Dónde verlo |
|---|---|---|
| **UX vs. UI** | La UX es reemplazar el boca en boca y los grupos de WhatsApp por un lugar donde encontrar a alguien de confianza en menos de un minuto. La UI es el medio: botones con relieve, chips grandes, colores con contraste. | Todo el prototipo |
| **Pilar: Usabilidad** | Pedir una changa son 4 pasos con chips, casi sin escribir. | Mis trabajos › Pedir una changa |
| **Pilar: Accesibilidad** | Diseñado para el usuario límite: hit targets de 56px, texto de 18px y estados sin depender del color. | UI Kit (`?kit`) |
| **Pilar: Utilidad** | Cada función salió de una tarjeta del Card Sorting; no hay funciones que nadie pidió. | Sitemap |
| **Pilar: Desempeño** | Funciona con señal débil: lo escrito se guarda en el celular y se publica solo. | Pedir una changa › "probar sin señal" |
| **Pilar: Emoción (confianza)** | Estrellas, "Teléfono confirmado", vecinos que recomiendan y opiniones aparecen **antes** del botón Contactar. | Ficha del trabajador |

## Clase 2 — Usabilidad y accesibilidad

| Concepto | Cómo se aplicó | Dónde verlo |
|---|---|---|
| **Eficacia / eficiencia / satisfacción** | Eficacia: contratar de punta a punta (buscar → contactar → pagar → terminar). Eficiencia: pedir en menos de un minuto, mensajes ya armados, respuestas rápidas. Satisfacción: confirmaciones claras ("Trabajo finalizado"). | Flujo completo |
| **WCAG: Perceptible** | Contraste mínimo 4.5:1 en todos los textos (verificado par por par). Estados con ícono + forma + texto. | UI Kit › Paleta |
| **WCAG: Operable** | Todo lo tocable mide 56px o más, con foco visible para teclado y sin gestos finos. | Cualquier botón o chip |
| **WCAG: Comprensible** | Lenguaje literal en voseo: "Avisar de un problema" en vez de "Denunciar", "Mis estrellas" en vez de "Reputación". | Mi perfil, Ficha |
| **WCAG: Robusto** | Confirmación por SMS sin cámara; guardado local ante señal débil; etiquetas y roles para lectores de pantalla. | Ingreso, Sin señal |
| **Contraste 4.5:1** | Se detectó que el verde, el naranja y el celeste base daban 3.1–3.3:1 como texto y se crearon variantes oscuras (#15803D, #B45309, #0E7490). | UI Kit › Paleta |
| **Esfuerzo–beneficio** | Ingreso solo con el número; pedir con chips; mensaje inicial armado; validación en el momento ("Falta: cuándo, dónde"). | Pedir una changa |
| **Hit targets (Rocket Pizza)** | Equivalente a los guantes espaciales: manos curtidas → 56px mínimo, estrellas de calificación de 56px. | Terminar trabajo › estrellas |
| **No solo color (Rocket Pizza)** | Equivalente al alien que ve en infrarrojo: baja visión + sol. "Disponible hoy" = círculo lleno; "Ocupado" = círculo vacío. | Mi perfil › interruptor |
| **Error que no destruye** | El código mal escrito se mantiene; si Mercado Pago rechaza, el acuerdo no se borra. | Confirmá tu teléfono (0000), Acordar pago (999) |

## Clase 3 — Modelos mentales y affordance

| Concepto | Cómo se aplicó | Dónde verlo |
|---|---|---|
| **Affordance** | Botones con borde inferior grueso y sombra que se hunden al tocar; cards tocables elevadas vs. cards informativas planas; chips elevados que quedan hundidos al elegirlos. | UI Kit › Botones y Cards |
| **Modelo mental** | El Card Sorting mostró que "Publicar una changa" se entendía al revés según quién la leía, así que pasó a ser "Pedir una changa". "Denunciar" sonaba a comisaría, así que pasó a ser "Avisar de un problema". | Toda la navegación |
| **Íconos como convención cultural** | Contactar = mano abierta (no el tubo de teléfono); Pedir = "+" con texto; todos los íconos van acompañados de su etiqueta. | Ficha, Barra inferior |
| **Mapeo natural** | Chips en vez de desplegables; interruptor de disponibilidad en vez de calendario; los controles de la calificación están pegados a su resultado ("4 de 5 · Muy bien"). | Pedir una changa, Terminar trabajo |
| **Feedback inmediato** | Sacudida + caja de error; avisos de éxito al publicar, contactar y terminar; spinner "Publicando tu pedido…". | Ingreso, Sin señal |

## Clase 4 — Gestalt y jerarquía visual

| Concepto | Cómo se aplicó | Dónde verlo |
|---|---|---|
| **Proximidad** | La card de trabajador agrupa nombre, oficio, estrellas, disponibilidad y zona; cada card está separada de la siguiente. | Buscar |
| **Semejanza** | Todos los botones principales comparten clase y estilo (`.btn-primary`); todos los tags comparten forma. | UI Kit |
| **Continuidad** | Los chips de zona se cortan en el borde para insinuar que hay más; los pasos del trabajo forman una línea continua. | Buscar › Zona, Detalle de trabajo |
| **Cierre** | La cuarta opinión se corta con un degradé para invitar a ver todas. | Ficha › Lo que dicen los vecinos |
| **Jerarquía (tamaño, color, espacio)** | Una sola acción principal azul por pantalla; las secundarias en gris; "Avisar de un problema" como texto. | Ficha, Detalle de trabajo |
| **Patrón Z** | Logo arriba a la izquierda → título → contenido → botón de acción fijo abajo. | Buscar, Ficha |
| **Test de entrecerrar los ojos** | En cada pantalla, lo que sobrevive al desenfoque es el botón azul de la acción principal. | Ficha (Contactar), Pedir (Publicar) |

## Clase 5 — Color, tipografía y componentes

| Concepto | Cómo se aplicó | Dónde verlo |
|---|---|---|
| **Paleta: primario, secundario, semánticos** | Azul de confianza para lo principal, gris para lo secundario, y verde, rojo, naranja y celeste con variante para texto. | UI Kit › Paleta |
| **Escala tipográfica** | 4 tamaños: 32 / 24 / 18 / 14 (los de la cátedra, con Body y Caption subidos 2px por baja visión). | UI Kit › Tipografía |
| **5 estados del botón** | Default, hover, active (se hunde), focus (anillo celeste) y disabled (con "Falta: …"). | UI Kit › Botón principal |

## Clase 6 — DCU, Personas y Journey Map

| Concepto | Cómo se aplicó | Dónde verlo |
|---|---|---|
| **DCU (bucle)** | Entender (contexto de Serrano, usuario límite) → requisitos (TP de Usabilidad) → diseñar (wireframes, prototipo) → evaluar (Card Sorting con 5 vecinos) → **iterar**: el prototipo v1 se rehízo con los resultados del Card Sorting. | Este documento + prompt v2 |
| **Vos no sos tu usuario** | Los participantes menos digitalizados (56 y 58 años) tardaron 3 veces más y agruparon por "para qué me sirve"; las etiquetas se tomaron de sus palabras. | Card Sorting › 6.3 |
| **Personas** | Los 5 participantes del Card Sorting cubren los perfiles: trabajador manual poco digitalizado, joven digitalizada, empleadora mayor, empleador frecuente y trabajadora que cumple los dos roles. | Card Sorting › Las 5 personas |
| **Puntos de dolor → función** | "No le abro la puerta a cualquiera" → bloque de confianza en la ficha; "yo cobro en la mano" → efectivo sin comisión; "¿denunciar a quién?" → "Avisar de un problema". | Ficha, Pagos |

## Clase 7 — Arquitectura de información y Card Sorting

| Concepto | Cómo se aplicó | Dónde verlo |
|---|---|---|
| **Card Sorting abierto** | 24 tarjetas, 5 personas reales, del 21 al 26/09/2026, con una matriz de acuerdo. | Doc Reto 6 |
| **Sistema de organización** | Por tarea y por momento del trabajo (buscar → arreglar → pagar → terminar). | Barra inferior |
| **Rotulado (labeling)** | 8 etiquetas cambiadas a palabras de los participantes ("Mis estrellas", "Vecinos que me recomiendan", "Confirmar mi teléfono"…). | Mi perfil |
| **Sistema de navegación** | 5 pestañas = 5 categorías, "Más" dentro de Mi perfil, "← Volver" con la acción Back y miga de pan en la ficha ("Buscar › Electricista › Juan Pérez"). | Ficha del trabajador |
| **Sistema de búsqueda** | Filtros por oficio (oficios populares), por tipo de trabajo y por zona del pueblo; Destacados primero. | Buscar |
| **Sitemap** | Inicio → Buscar · Mis trabajos · Pagos · Mensajes · Mi perfil (› Más). | Sitemap PNG |
| **User Flow** | Camino feliz (pedir → contactar → pagar → terminar) y caminos de error (código mal, pago rechazado, sin señal, cancelar). | User Flow + prototipo |

## Clases 8 y 9 — Prototipado en Figma

| Concepto | Cómo se aplicó | Dónde verlo |
|---|---|---|
| **Wireframe de baja fidelidad** | Pantallas en grises: selección de rol, perfil del trabajador y aviso de error (mobile y desktop). | `Anexos/Reto1-2_Usabilidad_A11y/bocetos/` + Figma (Reto 7) |
| **Prototipo interactivo** | App navegable completa: 26 pantallas conectadas. | Prototipo (Figma Make / Web SPA) |
| **Trigger / Action / Back** | On click → Navigate to entre pantallas; "← Volver" usa Back (vuelve a la anterior del historial); la barra inferior lleva a la raíz de cada sección. | Toda la navegación |
| **Componentes e instancias** | Un único componente por elemento (botón, chip, card, aviso), reutilizado en todas las pantallas. | `referencia-figma-make/src/components/ui.tsx`, UI Kit |
| **Variantes** | Botón: Default / Hover / Active / Focus / Disabled; Chip: elegido / sin elegir; Aviso: success / danger / warning / info. | UI Kit |
| **Auto-layout** | Columnas con espaciado fijo (8 / 12 / 16 / 24px) y padding de 16px; las cards crecen con el contenido. | Cualquier pantalla |
| **Constraints / posición fija** | Botón de acción y barra inferior fijos abajo mientras el contenido scrollea. | Ficha (Contactar fijo) |
| **Estilos globales** | Tokens de color y tipografía definidos una vez (`:root` y `C`) y usados en toda la app. | `referencia-figma-make/src/index.css`, UI Kit |
