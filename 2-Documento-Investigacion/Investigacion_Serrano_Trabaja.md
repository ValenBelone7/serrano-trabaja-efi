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

![Ícono](Marca/icono-app-512.png)

Pin de ubicación con un check, sobre azul. El pin habla de *lo cercano, del pueblo*; el check, de *confirmado y de confianza*. El azul `#1D6FE0` transmite seguridad (Clase 5) y con el blanco da un contraste de 4.77:1.

Archivos en [`Marca/`](Marca/): `icono-app.svg` (vectorial), `icono-app-1024.png` (App Store / Play Store), `icono-app-512.png`, `icono-app-192.png` (web/Android) y `favicon.svg`.

### Logo en sus formatos

| Formato | Uso | Archivo |
|---|---|---|
| Horizontal | Encabezados, web, documentos | ![](Marca/logo-horizontal.png) `logo-horizontal.svg / .png` |
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
| Entender el contexto | Actores, contexto previo (boca en boca, WhatsApp), dispositivos y conectividad de Serrano. Definimos al **usuario límite**. | [TP Usabilidad y A11y](Anexos/Reto1-2_Usabilidad_A11y/) |
| Requisitos | Hit targets grandes, nada solo por color, lenguaje literal, ingreso por SMS sin cámara, tolerancia a señal débil. | TP Usabilidad y A11y |
| Primeros bocetos | Selección de rol, perfil del trabajador y aviso de error (mobile y desktop). | [Bocetos](Anexos/Reto1-2_Usabilidad_A11y/bocetos/) |
| Organizar el contenido | **Card Sorting abierto** con 5 vecinos (21 al 26/09/2026): 24 tarjetas agrupadas en 6 categorías, con matriz de acuerdo. | [Card Sorting + Sitemap](Anexos/Reto6_Card_Sorting/) |
| Flujo | User Flow con el camino principal y los caminos de error. | [User Flow](Anexos/User_Flow/Serrano_Trabaja_UserFlow.png) |
| Sistema visual | **UI Kit:** paleta con contraste verificado, escala tipográfica y componentes con sus estados. | [UI Kit](Anexos/Reto5_UI_Kit/Reto5_UI_Kit_Serrano_Trabaja.md) |
| Wireframes y prototipo | Wireframe low-fi navegable en Figma; prototipo de alta fidelidad y Web SPA. | [Reto 7](Anexos/Reto7_Wireframes_Figma/) · [Prototipo](../1-Prototipo-WebSPA/) |
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

El detalle completo, concepto por concepto y con la pantalla donde se ve cada uno, está en **[EFI_Matriz_conceptos_Serrano_Trabaja.md](EFI_Matriz_conceptos_Serrano_Trabaja.md)**. Resumen:

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
| [Reto1-2_Usabilidad_A11y/](Anexos/Reto1-2_Usabilidad_A11y/) | TP de Usabilidad y A11y + bocetos mobile/desktop |
| [Reto5_UI_Kit/](Anexos/Reto5_UI_Kit/) | UI Kit (versión visual: prototipo con `?kit`) |
| [Reto6_Card_Sorting/](Anexos/Reto6_Card_Sorting/) | Sesiones, análisis y sitemap |
| [Reto7_Wireframes_Figma/](Anexos/Reto7_Wireframes_Figma/) | Wireframe low-fi navegable en Figma |
| [User_Flow/](Anexos/User_Flow/) | User Flow (PNG + SVG editable) |
| [Marca/](Marca/) | Ícono y logos en todos los formatos |
