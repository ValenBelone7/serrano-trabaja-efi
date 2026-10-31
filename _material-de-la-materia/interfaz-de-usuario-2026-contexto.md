# Interfaz de Usuario 2026 — Contexto completo de la materia

## Cómo leer este documento (para la IA)

Este archivo reúne todo el material trabajado durante el año en la materia **Interfaz de Usuario (UX/UI)**: la teoría de cada clase, los enunciados de los retos (trabajos prácticos) y el proyecto final (EFI). Fue armado a partir de 17 documentos DOCX originales.

Algunas aclaraciones sobre cómo está organizado:

- **Orden:** las clases aparecen en orden cronológico. Cada reto está ubicado inmediatamente después de la clase cuyos contenidos aplica. Esa relación clase–reto fue **inferida por el contenido** del enunciado (los archivos de retos tienen una numeración propia que no coincide con la de las clases), así que en cada reto se indica el archivo de origen.
- **Retos:** solo están los **enunciados**. El alumno ya realizó todos los retos, pero sus entregas no forman parte de este documento.
- **Proyecto transversal:** casi todos los retos de la primera mitad del año trabajan sobre un caso ficticio llamado **Rocket Pizza** (delivery de pizzas en la Luna, año 2045, con usuarios humanos y alienígenas). A partir del Reto 6 los retos pasan a aplicarse al proyecto real de la EFI.
- **EFI:** al final está el enunciado de la Evaluación Final Integradora y la **propuesta aceptada** del equipo del alumno: la app **"Serrano Trabaja"**.
- **Imágenes:** los DOCX originales tenían imágenes. Las que aportan información (diagramas, ejemplos, tablas) se describen en bloques marcados con 🖼️. Las puramente decorativas se omitieron.
- **Notas del compilador:** cuando hay algo para aclarar (un error evidente del original, una inconsistencia de numeración), aparece como *[Nota: …]*.

## Índice

1. Clase 1 — El Mindset del Desarrollador UX
2. Clase 2 — Usabilidad y Accesibilidad
   - Reto: Rocket Pizza (Edición Usabilidad y A11y)
3. Clase 3 — Modelos Mentales y Affordance
   - Reto: Affordance, Modelos Mentales y Mapeo de Rocket Pizza
4. Clase 4 — El Orden del Caos (Gestalt y Jerarquía Visual)
   - Reto: Maquetando Rocket Pizza
5. Clase 5 — Estética Funcional (Color, Tipografía y Componentes UI)
   - Reto 5: El UI Kit de Rocket Pizza
6. Clase 6 — Diseñar para Humanos (DCU, Personas y Journey Map)
7. Clase 7 — Organizar el Caos (Arquitectura de Información y Card Sorting)
   - Reto 6: Card Sorting (sobre la app de la EFI)
8. Clase 8 — Prototipado Interactivo en Figma
   - Reto 7: Prototipo en Figma de la EFI (baja calidad)
9. Clase 9 — Figma Avanzado: Buenas Prácticas ("Clase 8 ++")
10. EFI — Enunciado del Proyecto Final
11. EFI — Propuesta aceptada: "Serrano Trabaja"
12. Glosario rápido de conceptos del año

---

## Clase 1: El Mindset del Desarrollador UX

*Archivo de origen: `01-clase.docx`*

**Objetivo:** Entender que el código no vive en el vacío y que el éxito de un producto depende de quién lo usa.

### 1. ¿Qué es esto de UX y UI?

Para arrancar, bajemos los conceptos a tierra. Muchos piensan que el diseño es "hacer que se vea lindo", pero en el desarrollo de software eso es solo la punta del iceberg.

- **UX (User Experience):** Es el **sentimiento**. Es lo que le pasa a la persona cuando interactúa con lo que vos programaste. ¿Se frustró? ¿Lo resolvió rápido? ¿Sintió que la app era "inteligente"? Si el usuario no entiende cómo loguearse, no importa que tu código de backend sea una obra de arte; para el usuario, el sistema no funciona.
- **UI (User Interface):** Es el **medio**. Son los botones, los colores, la tipografía y el layout. Es la cara visible que permite que esa experiencia ocurra.

**💡 Analogía para devs:** El **UX** es la arquitectura del sistema y la lógica de negocio (el porqué y el cómo se mueve la data), mientras que el **UI** es el CSS y el frontend (la capa visual que el usuario toca).

> 🖼️ **Imagen: UI vs UX con frascos de ketchup.** A la izquierda, el clásico frasco de vidrio de ketchup y el frasco plástico "boca abajo". A la derecha, una grilla 2×2: arriba, la silueta de cada frasco rotulada "UI"; abajo, rotulado "UX", un muñeco frustrado golpeando el frasco de vidrio (que no larga el ketchup y salpica) y otro muñeco sonriente apretando el frasco plástico sin esfuerzo. Mensaje: dos productos pueden verse bien (UI), pero la experiencia de uso (UX) es lo que define si funcionan para la persona.

**Casos de estudio:**

**1. Un formulario de contacto en un sitio web**

- UX: ¿El formulario tiene demasiados campos? ¿Es fácil de llenar? ¿El usuario recibe una confirmación después de enviarlo?
- UI: ¿El formulario es visualmente claro y atractivo? ¿Los campos están bien alineados? ¿El botón de envío es visible y destacable?

**2. Vas a un lugar donde venden papas fritas porque te antojaste**

- **UX** — obtener una experiencia que desencadene en una acción, usando todas las herramientas posibles: el lugar donde venden las papas, las personas que se encuentran en el lugar, la persona que atiende, el sistema de compra, el empaque de las papas, las papas preparadas, detalles extras.
- **UI** — diseño de producto con el que se pretende obtener la experiencia de usuario: el empaque de las papas (colores, tamaños, símbolos, diseño de empaque, etc.) y las papas preparadas.

**Importancia del UX/UI en productos digitales:** Una buena UX/UI puede aumentar la satisfacción del usuario, lo que lleva a una mayor retención de clientes, más conversiones y una mejor reputación de marca. Por otro lado, una mala UX/UI puede frustrar a los usuarios, aumentar la tasa de abandono y dañar la imagen de la marca.

**Ejemplo del mundo real — Airbnb:** Su éxito se debe en gran parte a su enfoque en UX/UI. La plataforma es intuitiva, atractiva y fácil de usar, lo que facilita la búsqueda y reserva de alojamientos.

### 2. Los Pilares de la Experiencia (UX completo)

Para que una experiencia sea buena, nuestro software tiene que cumplir con estos puntos:

- **Usabilidad:** ¿Qué tan fácil es completar la tarea? (Ej: ¿es fácil comprar en este e-commerce?)
- **Accesibilidad:** ¿Lo puede usar una persona con visión reducida o que solo usa el teclado?
- **Utilidad:** ¿Sirve para algo o es una funcionalidad que nadie pidió?
- **Desempeño:** Si la app tarda 10 segundos en cargar, la UX muere, por más que sea hermosa.
- **Emoción:** ¿Transmite confianza o parece una estafa de los años 2000?

### 3. Actividad en clase: "El Duelo de Apps" 🥊

Comparar dos herramientas conocidas (ej: WhatsApp vs. Telegram, o Spotify vs. YouTube Music), enfocándose solo en la interacción:

- Abrir la app A y tratar de encontrar cómo cambiar el tamaño de la letra.
- Hacer lo mismo en la app B.
- **Debate:** ¿En cuál fue más intuitivo? ¿Cuántos clicks/taps hicieron? ¿La opción estaba donde esperaban?

### 4. ¿Por qué a un programador le tiene que importar la UX?

Si sos dev, saber UX te da "superpoderes":

- **Menos bugs de lógica:** si el flujo está bien diseñado desde el principio, vas a tener que refactorizar menos.
- **Menos tickets de soporte:** si el usuario entiende la interfaz, no pregunta.
- **Mejor sueldo:** un desarrollador que entiende el producto es mucho más valioso que uno que solo pica código sin preguntar para qué sirve.

### 5. Actividad práctica: "El Detector de Frustraciones" 🔍

Tarea para entregar:

- Buscar un sitio web o app que uses seguido y que te parezca **horrible** de usar.
- Capturar una pantalla y marcar con un círculo rojo el elemento que más te molesta.
- Escribir en una oración por qué está mal (ej: "El botón de borrar está pegado al de guardar y siempre me equivoco").
- Proponer una solución rápida desde tu visión de desarrollador.

### 6. Cierre

No diseñamos para nosotros, sino para otros humanos. La próxima clase: **Usabilidad y Accesibilidad**.

**Recurso adicional:** Capítulo 1 de *Experiencia de Usuario* de Yusef Hassan Montero.

---

## Clase 2: Usabilidad y Accesibilidad

*Archivo de origen: `02-clase.docx`*

**Objetivo:** Comprender que un software no es usable si no es accesible, y aprender a medir la efectividad de nuestras interfaces.

### 1. Usabilidad: no es "que sea fácil", es "que funcione para el usuario"

Muchas veces los devs decimos: *"Pero si el botón está ahí, es obvio"*. La usabilidad nos dice que **nada es obvio**.

La usabilidad tiene dos dimensiones:

- **Dimensión objetiva:** ¿El usuario pudo terminar la tarea? ¿Cuánto tardó? ¿Cuántos errores cometió? (Se mide con métricas.)
- **Dimensión subjetiva:** ¿Cómo se sintió el usuario? ¿Le pareció frustrante o fluido?

**⚠️ El mantra:** Usabilidad = **Eficacia** (lograr el objetivo) + **Eficiencia** (hacerlo rápido) + **Satisfacción** (no querer romper la compu).

### 2. Accesibilidad (A11y): el código que no se ve

Para un desarrollador, la accesibilidad no es un "extra", es una responsabilidad técnica. No diseñamos solo para gente joven, con buena vista y en una oficina iluminada.

**¿Por qué "A11y"?** Empieza con la A, tiene 11 letras en el medio (c-c-e-s-s-i-b-i-l-i-t) y termina con la y. Es el mismo caso que **i18n** para *Internationalization*.

**WCAG:** Si A11y es el nombre del concepto, WCAG es el manual de reglas para que ese concepto se cumpla. Significa *Web Content Accessibility Guidelines* (Pautas de Accesibilidad para el Contenido Web). Las publica la W3C (los mismos que definen los estándares de HTML y CSS), así que para un desarrollador es "la Biblia".

**Los 4 principios de la accesibilidad (WCAG):**

- **Perceptible:** que se pueda ver o escuchar (ej: contraste de colores, textos alternativos en imágenes).
- **Operable:** que se pueda navegar (ej: que alguien que no puede usar mouse pueda navegar todo con Tab).
- **Comprensible:** que el lenguaje y la interfaz no sean un jeroglífico.
- **Robusto:** que el código sea limpio para que los lectores de pantalla (tecnologías asistivas) lo entiendan.

### 3. Actividad en clase: "El Desafío de la Mano Atada" 🖐️🚫

Test de estrés de interfaces en tiempo real:

- Entrar a un sitio web de noticias.
- **Regla de oro:** soltar el mouse.
- Intentar llegar a una sección específica (ej: "Negocios" o "Deportes") usando **únicamente Tab y Enter**.
- **Debate:** ¿Sabían en qué parte de la pantalla estaban parados? ¿El foco del teclado era visible? Si no pudieron navegarlo, ese sitio falló en accesibilidad.

### 4. Relación Esfuerzo–Beneficio

El usuario es "económico" con su energía. Si el **esfuerzo** que le pedimos (completar 20 campos de un formulario) es mayor al **beneficio** que recibe (recibir novedades), el usuario se va.

**¿Cómo bajamos el esfuerzo desde el código?**

- Autocompletado de campos.
- Validaciones en tiempo real (no esperar a que toque "Enviar" para decirle que el mail está mal).
- Feedback inmediato (si hace click, que algo se mueva o cambie de color).

### 5. Actividad práctica: "Auditoría de Contraste" 🎨

- Elegir una web que uses en "Modo Oscuro" y otra en "Modo Claro".
- Usar una herramienta para medir el contraste entre el texto y el fondo de un botón importante (ej: la extensión de Chrome *Colour Contrast Checker*).
- **Análisis:** ¿Cumple con el ratio mínimo de **4.5:1**?
- Si no cumple, proponer el código hexadecimal (#HEX) del color que usarías para arreglarlo y que sea legible para una persona con daltonismo o visión reducida.

### 6. Cierre

La usabilidad es la estructura, pero el usuario no siempre se comporta de forma lógica. Próxima clase: **Modelos Mentales y Affordance** (¿por qué esperamos que un logo nos lleve al inicio? ¿por qué intentamos "cliquear" cosas que no son botones?).

**Recurso adicional:** sección "Accesibilidad" del libro *Experiencia de Usuario*.

---

### 🧪 Reto: Rocket Pizza (Edición Usabilidad y A11y)

*Archivo de origen: `01-retos.docx` · Aplica contenidos de la Clase 1 y la Clase 2 (el propio enunciado dice "problemas de la Clase 2").*

**Contexto:** Año 2045. La Luna ya no es solo de los humanos. Convive una sociedad compleja de colonos, turistas aliens y robots. La misión es que **Rocket Pizza** pueda recibir pedidos de todos, sin errores y sin discriminación técnica.

#### El desafío: Diseño Universal Extremo

El software tiene que ser robusto y operable para dos tipos de usuarios con necesidades radicalmente distintas. Si la interfaz solo la puede usar un humano con cinco dedos, se pierde mercado (y llega una queja de la Federación Intergaláctica).

#### 1. Definición de los actores (usuarios)

- **Humanos:** usan guantes espaciales (poca precisión) y pueden estar bajo efectos de baja gravedad (mareos, visión borrosa).
- **Aliens (Zogtonianos):** anatomías variadas. Algunos tienen 3 tentáculos gruesos en vez de dedos y otros ven en el espectro infrarrojo (el color rojo para ellos es invisible). Tienen un **descuento intergaláctico del 50%**.

#### Restricciones de accesibilidad (A11y 2.0)

**A. Operabilidad multiespecie (el "pifie" del tentáculo).** ¿Cómo hace un alien con tentáculos o un humano con guantes para no apretar tres botones a la vez? Consigna: diseñar una interfaz con **hit targets (áreas de toque) gigantes**. Nada de menús desplegables chiquitos. Si el usuario "pifia" el toque, el sistema no debería realizar una acción irreversible.

**B. Perceptibilidad no-humana (más allá del RGB).** Algunos aliens no ven los colores como nosotros. Consigna: **no usar solo el color para dar información**. Si hay un error, no basta con un borde rojo; hay que usar un ícono claro o un texto que diga "ERROR". La interfaz debe ser funcional incluso en blanco y negro (o infrarrojo).

**C. Eficiencia cognitiva (lenguaje universal).** Los aliens no entienden el sarcasmo ni las metáforas humanas. Consigna: el **microcopy debe ser literal**. En vez de un botón que diga "¡Mandale fruta!", usar "Confirmar Pedido". Evitar tecnicismos que confundan a turistas de otros sistemas solares.

#### Entregables

- **User Flow:** ¿Es el mismo camino para un Alien que para un Humano? Dibujarlo.
- **Bocetos de pantalla:**
  - Pantalla de Selección: ¿cómo eligen los gustos de pizza según su especie? (Ojo: los aliens piden rocas espaciales y bebidas con metano.)
  - Pantalla de Check-out: donde se vea el área de toque grande para los botones.
  - Mensaje de Error Universal: que se entienda aunque no se vea el color rojo.
- **Justificación técnica:** explicar en tres renglones cómo se logró que un Alien pueda usar la app sin ayuda.

Tener en cuenta: los **actores** que usan el producto (todos); la **información** requerida para realizar las **transacciones**; los **tipos** de transacciones; los **procesos**; el **contexto previo** (¿de dónde vienen los usuarios?, ¿qué usan?, ¿qué comen?, ¿cómo compran hoy?); las **opciones** que aparezcan en los procesos (ej: pagar el pedido); el inicio y el final del **flujo**.

El objetivo es conocer el panorama completo del producto: ventas, distribución, creación, pagos, etc.

> 🖼️ **Imagen: ejemplo de mapa/flujo de Rocket Pizza dibujado a mano.** Un diagrama con marcadores muestra el sistema completo: al centro un celular conectado a "Rocket Pizza" (que a su vez se vincula con Facebook). Desde el celular, una línea va a un **Repartidor** (que recibe "Orden" y "Dirección") y otra a la **Nave Nodriza Pizza** (que recibe la "Orden"). Hacia la derecha, el flujo del usuario: **Login con Facebook** → pantalla con datos del usuario (Nombre, Dirección, Teléfono, e-mail) → **Proceso de compra** (opciones: pizza común, jamón, sola, combo, extras) → **Método de pago**, que se divide en efectivo ($) con un cartel de duda "¿?" y tarjeta con un tilde verde de confirmación. Sirve como modelo de cómo representar actores, información, transacciones y opciones en un solo mapa.

---

## Clase 3: Modelos Mentales y Affordance

*Archivo de origen: `03-clase.docx`*

**Objetivo:** Comprender que un software no es usable si no es accesible, y aprender a medir la efectividad de nuestras interfaces.

*[Nota: este objetivo es idéntico al de la Clase 2, probablemente copiado por error en el original. Por el contenido, el objetivo real de la clase es entender affordance, modelos mentales y mapeo natural.]*

### 1. El desafío del "Botón que no parece Botón" (Affordance)

El **affordance** es la cualidad de un objeto que nos dice cómo usarlo (un picaporte "pide" ser tirado). En software, un botón tiene que "pedir" ser clickeado.

- **La mejora:** agregar una restricción visual.
- **La consigna:** "No pueden usar etiquetas de texto que digan 'Click aquí'. El usuario (humano, alien o robot) debe entender que un elemento es interactivo solo por su forma, sombra o relieve."
- **Objetivo:** jugar con sombras (`box-shadow`), bordes y estados (`hover`) para que la interactividad sea evidente.

> 🖼️ **Imagen: "Affordance — the ways someone can use an object"** (ilustración estilo sketch). Dos puertas: una con una **placa plana**, que solo permite empujar (la persona empuja sin dudar); otra con una **manija de barra** que tiene un cartel "PUSH", donde la persona tira de la manija y se confunde ("?!"). Mensaje: la forma del objeto comunica cómo usarlo; si la forma contradice la acción esperada, ni un cartel lo arregla.

### 2. El "Diccionario Universal de Íconos" (Modelos Mentales)

Un **modelo mental** es lo que el usuario cree que sabe. Nosotros sabemos que el ícono del disquete es "guardar", pero… ¿lo sabe un Alien de Júpiter? *(El original muestra como ejemplo un ícono de disquete.)*

- **La mejora:** cuestionar las convenciones.
- **La consigna:** "Diseñen tres íconos críticos: **Comprar**, **Cancelar** y **Mi Perfil**, entendibles para las diferentes especies. Si usan un 'carrito de supermercado', ¿un Alien sabe qué es eso?"
- **Objetivo:** entender que los íconos son convenciones culturales y que a veces hay que reforzarlos con texto o metáforas más universales.

### 3. El Configurador de Pizzas (Mapeo Natural)

El **mapeo** es la relación entre un control y su resultado (ej: la perilla derecha de la cocina prende la hornalla derecha).

- **La mejora:** diseñar el "Constructor de Pizzas".
- **La consigna:** diseñar la pantalla donde el usuario elige ingredientes (Salame, Palmitos, Algas de Júpiter o Rocas Marcianas). El control para agregar o quitar ingredientes tiene que estar pegado al dibujo de la pizza.
- **El giro:** si el usuario mueve un slider a la derecha, la pizza se agranda físicamente en el dibujo. Si cambia de lugar un ingrediente en la lista, se mueve en la pizza.
- **Objetivo:** que la disposición de los elementos en pantalla imite la lógica del mundo real.

---

### 🧪 Reto: Affordance, Modelos Mentales y Mapeo de Rocket Pizza

*Archivo de origen: `02-retos.docx` · Aplica contenidos de la Clase 3.*

Ya tenemos una app que es accesible y funciona en la Luna. Ahora hay que lograr que sea **intuitiva**: que el usuario no tenga que pensar.

**Tareas de diseño:**

- **Affordance visual (significantes):** revisar los botones. Si se les saca el texto, ¿se nota que se pueden apretar?
  - Tip para devs: pensar en capas y sombras. Lo que está "arriba" parece más clickeable que lo que está plano en el fondo.
- **Rompiendo el modelo mental:** el usuario Alien no entiende el concepto de "sabroso"; solo busca alimentarse. Su modelo mental es "necesito alimentar mis células".
  - Consigna: ajustar la pantalla principal para que el Alien vea el beneficio de la pizza (ej: "Recuperá X% de energía en X tiempo") mientras el Humano ve "Pizza Sabrosa".
- **Mapeo del pedido:**
  - Diseñar el selector de tamaño (Chica, Mediana, Grande, Familiar).
  - No usar solo un dropdown. Usar un control donde el tamaño del botón sea proporcional al tamaño de la pizza. ¡Eso es mapeo natural!
- **Feedback inmediato:** ¿qué pasa cuando el Alien toca un ingrediente prohibido para su especie? El sistema debe reaccionar al instante. Dibujar ese "momento de feedback".

**💡 Pregunta "picante":** "Si el Alien ve en infrarrojo y pusiste un botón verde sobre fondo gris, ¿él llega a ver el 'relieve' que le pusiste o para él es todo una mancha plana? ¿Cómo lo arreglan sin usar color?"

---

## Clase 4: El Orden del Caos (Gestalt y Jerarquía Visual)

*Archivo de origen: `04-clase.docx`*

**Objetivo:** Entender cómo el cerebro humano procesa la información visual para que nuestros sistemas sean "escaneables" y no un dolor de cabeza.

### 1. ¿Por qué vemos lo que vemos? (Leyes de Gestalt)

El cerebro de un usuario es "vago": siempre busca el camino más corto para entender una interfaz. Las **Leyes de Gestalt** explican cómo agrupamos elementos automáticamente.

#### Ley de Proximidad

Los elementos que están cerca se perciben como parte de un mismo grupo.

- *Para el dev:* esto se traduce en **margin y padding**. Si ponés el botón "Comprar" pegado al de "Cancelar", el usuario los va a asociar como acciones similares. ¡Ojo con el espacio en blanco!
- **Mal ejemplo (formularios):** ponés el nombre de un campo, mucho espacio, y el input abajo; después ponés el siguiente nombre pegado al input anterior. El usuario se marea y no sabe qué etiqueta corresponde a qué caja.
- **En Rocket Pizza:** en la lista de pizzas, el nombre ("Muzza Lunar"), el precio ("$500 Lunas") y el botón "Agregar" tienen que estar pegaditos. Si el botón "Agregar" está más cerca de la pizza de abajo, el usuario va a terminar comprando algo que no quería.

> 🖼️ **Imagen: logotipo de IBM (Paul Rand, 1972).** Las letras "IBM" están formadas por franjas horizontales separadas, pero el cerebro las agrupa y lee las tres letras completas. Texto de la imagen: la ley de proximidad dice que, si los objetos están cerca unos de otros, el cerebro los agrupa como si fueran parte de un todo.

#### Ley de Semejanza

Agrupamos cosas que se parecen (por color, forma o tamaño).

- *Para el dev:* es la base de los **componentes**. Si todos tus botones secundarios son grises, no pongas uno azul de la nada porque rompés el modelo mental.
- **En el código:** todos los botones de "Confirmar" o "Aceptar" deberían tener la misma clase CSS (ej: `.btn-primary`). Si uno es azul y el otro naranja sin motivo, rompés la semejanza y el usuario tiene que "reaprender" qué hace cada botón en cada pantalla.
- **En Rocket Pizza:** si el botón "Pedir Pizza" es un círculo verde, el de "Pedir Oxígeno" también debería serlo. Así el cerebro entiende: "círculo verde = pedir algo".

> 🖼️ **Imagen: catálogo de botones de una misma interfaz.** Varios estilos de botón (relleno azul, borde azul, deshabilitado en celeste pálido, con ícono como "Sign up"/"Sign in", circulares con flechas, "Likes", "Forward", paginador "Previous / Next", segmentado "Item 1 / 2 / 3", link de texto). Todos comparten la misma paleta azul, tipografía y radios, por lo que se perciben como una familia coherente de componentes.

#### Ley de Continuidad y Cierre

El ojo sigue un sendero suave y tiende a "completar" figuras que faltan.

- **Ejemplo — carruseles y listas (Netflix):** cuando la miniatura de una película queda "cortada" al borde de la pantalla, tu cerebro sabe que hay más contenido a la derecha y deslizás. Eso es continuidad aplicada para que sigas navegando.

> 🖼️ **Imagen: indicador de seguimiento de envío (continuidad).** "Llegada estimada: Martes — En hora", franja horaria "01:45 – 02:15" y debajo una barra de progreso en 4 segmentos (2 celestes completos, 2 grises pendientes). El ojo lee los segmentos como un único recorrido continuo.
>
> 🖼️ **Imagen: rostro de casco de soldado de ciencia ficción hecho solo con formas negras sueltas (cierre).** Hay una franja, dos formas de ojos, una curva, dos puntos y un rectángulo, sin contorno. Aun así, el cerebro "cierra" la figura y reconoce el casco completo.

### 2. Jerarquía Visual: ¿quién manda acá?

No todos los datos de una pantalla valen lo mismo. Si todo brilla, nada resalta. Como desarrolladores, controlamos la jerarquía a través de:

**Tamaño:** lo más grande es lo más importante.

- Ejemplo (app de delivery): **"Total: $2.500"** tiene que estar en un `<h1>` o `font-size: 24px`; la leyenda "Costo de envío: $200" puede ir en un `<span>` de 12px. Si los dos tienen el mismo tamaño, el usuario tarda más en procesar cuánto tiene que pagar.

> 🖼️ **Imagen: jerarquía por tamaño.** Dos ejemplos lado a lado. ❌ Tres círculos del mismo tamaño agrupados: ninguno destaca. ✅ Tres círculos de tamaño decreciente (grande, mediano, chico): el ojo va primero al más grande.

**Color y contraste:** los colores vibrantes gritan "¡Mirame!", los grises dicen "no soy tan urgente".

- **Ejemplo — GitHub:** el botón "Merge pull request" es verde (acción positiva, resalta). El botón "Delete repository" está escondido al final y suele ser texto rojo o un botón con borde rojo: el color dice "ojo con esto".
- **En Rocket Pizza:** el botón "LANZAR COHETE CON MI PIZZA" tiene que ser el elemento con más contraste de toda la pantalla. Si es gris como el fondo, el pedido no sale nunca.

> 🖼️ **Imagen: jerarquía por color.** ❌ Seis círculos todos del mismo color bordó: nada destaca. ✅ Seis círculos donde uno es gris oscuro y el resto bordó: el distinto atrae la mirada inmediatamente.

**Espacio en blanco (negativo):** es el aire de la app. Permite que el usuario respire y no se abrume.

- **💡 Regla de oro:** el usuario no lee, **escanea**. Si no encuentra lo que busca en 3 segundos, se frustra.
- **Ejemplo — Google Search:** la página más usada del mundo es casi toda blanca. Ese espacio vacío obliga a mirar una sola cosa: la caja de búsqueda.

> 🖼️ **Imagen: espacio en blanco.** Dos tarjetas con el mismo texto. ❌ "ESTO NO ES UN DISEÑO LIMPIO": letras enormes que llenan toda la tarjeta sin margen. ✅ "ESTO SÍ ES UN DISEÑO LIMPIO": texto más chico con márgenes generosos alrededor.

### 3. Patrones de lectura (F y Z)

**Patrón en F** — para páginas con mucho texto (blogs, términos y condiciones). El usuario lee la primera línea, baja un poco, lee la mitad y después sigue de largo.

- Ejemplo: la documentación de una API. El programador lee el título del método arriba, escanea los nombres de los parámetros a la izquierda y solo se detiene a leer en detalle cuando encuentra el fragmento de código que necesita.
- Tip: por eso los títulos y las palabras clave en negrita son vitales en blogs o secciones de ayuda.

> 🖼️ **Imágenes: "The F Layout".** Un blog de ejemplo (logo y menú arriba, titular, artículos con miniatura a la izquierda y título en negrita, barra lateral con banner y categorías). En la segunda versión se superpone el recorrido del ojo: (1) de izquierda a derecha por el menú hasta (2); baja por el margen izquierdo hasta (3) y recorre horizontalmente el primer título hasta (4); luego sigue bajando por la izquierda con recorridos horizontales cada vez más cortos. Forma una "F".

**Patrón en Z** — para landing pages o interfaces de apps (como el home de Rocket Pizza). El ojo va de esquina a esquina, buscando logos, botones de login y el llamado a la acción (CTA).

En Rocket Pizza (Home):

1. Arriba a la izquierda: **Logo de Rocket Pizza** (identidad).
2. Arriba a la derecha: **Botón "Login / Mi Perfil"** (acción secundaria).
3. Diagonal hacia abajo: **foto tentadora de una pizza flotando**.
4. Abajo a la izquierda/centro: **botón gigante "PEDIR AHORA"** (acción principal o CTA).

> 🖼️ **Imagen: wireframe con patrón en Z.** Una landing en grises con puntos numerados: (1) logo arriba a la izquierda → (2) botones "Login" y "Sign up for free" arriba a la derecha → diagonal a (3) el formulario con botón "Sign up" → horizontal a (4) → diagonal a (5) la fila de "Your daily deals". El recorrido zigzaguea formando Z sucesivas.

### 4. "El Test de Entrecerrar los Ojos"

**Consigna:**

- Mirar la pantalla y entrecerrar los ojos hasta que todo se vea borroso.
- **Pregunta:** ¿qué es lo único que se sigue viendo con claridad?
- Si lo que resalta es un banner de publicidad y no el botón de "Comprar", la jerarquía visual está mal diseñada.

> 🖼️ **Imágenes de ejemplo para el test.** (a) Tres pantallas de la app de Airbnb (sección Experiencias): fondo blanco, fotos grandes y un único botón rosa de alto contraste ("Ver fechas") abajo a la derecha, que es lo que sobrevive al desenfoque. (b) La portada del diario *El País* (edición Argentina): con los ojos entrecerrados destacan la foto principal y el titular grande de la noticia central, mientras que las noticias secundarias tienen fotos y títulos más chicos.

### 5. Cierre

Hoy aprendimos a organizar los elementos para que el ojo no trabaje de más. Próxima clase: **Teoría del Color, Tipografía y Componentes UI**, para elegir la paleta de la app y el sistema de diseño mínimo.

---

### 🧪 Reto: Maquetando Rocket Pizza

*Archivo de origen: `03-retos.docx` · Aplica contenidos de la Clase 4.*

Tomando como base el práctico de Rocket Pizza, rediseñar la **Pantalla de Menú de Pizzas** aplicando:

- **Proximidad:** agrupar la foto de la pizza, el nombre y el precio en una "Card" clara, que no se mezcle con la pizza de al lado.
- **Jerarquía:** el botón "Agregar al carrito" tiene que tener más peso visual (color o tamaño) que el de "Ver detalles".
- **Escaneabilidad:** ubicar los elementos clave siguiendo el **patrón en Z** (logo arriba a la izquierda, carrito arriba a la derecha, botón de compra abajo).

---

## Clase 5: Estética Funcional (Color, Tipografía y Componentes UI)

*Archivo de origen: `05-clase.docx`*

**Objetivo:** Comprender que la interfaz visual no es una decisión artística aleatoria, sino un sistema lógico de componentes, colores y fuentes que guían al usuario y responden a sus acciones.

### 1. El color: psicología y lógica de sistema

En el desarrollo de software, el color no se elige por gusto personal: se elige por su función técnica y por la reacción psicológica que genera. El cerebro procesa los colores de forma inconsciente y rapidísima, asociándolos a emociones o estados de alerta.

Para armar la paleta de la app combinamos psicología con categorías lógicas (igual que las variables de Tailwind o Bootstrap):

- **Color primario (identidad y confianza):** el color de la marca. Se usa para las acciones principales (ej: botón "Comprar").
  - Psicología: suele usarse azul o celeste porque transmiten seguridad, profesionalismo, calma y estabilidad (IBM, Facebook, Twitter, los bancos). Le dice al usuario: "tu plata y tus datos están seguros acá".
- **Color secundario (jerarquía y neutralidad):** para acciones de menor importancia (ej: "Ver más" o "Cancelar").
  - Psicología: tonos grises, oscuros o variantes sutiles del primario. No compiten por la atención.
- **Colores semánticos (disparan emociones inmediatas):**
  - 🟢 **Success / Éxito (verde):** confirmaciones, guardado correcto, "el cohete de pizza despegó". Transmite paz, aprobación, salud y "vía libre"; relaja y confirma que todo salió bien.
  - 🔴 **Danger / Error (rojo):** alertas críticas, datos inválidos o acciones destructivas (borrar la cuenta). Es el color del peligro; provoca una reacción biológica de alerta y grita "¡pará todo y mirá acá!". Ideal para frenar un error del usuario antes de que rompa algo en el backend.
  - 🟡 **Warning / Alerta (amarillo/naranja):** advertencias o estados intermedios ("te estás quedando sin oxígeno en el domo lunar", "tu sesión va a expirar"). Transmite precaución y urgencia moderada sin llegar al pánico del rojo.
  - 🔵 **Info (azul claro/cian):** consejos, novedades o textos informativos secundarios.

**⚠️ Tip de accesibilidad (Clase 2):** la psicología no sirve de nada si el usuario no puede ver el elemento. El contraste entre texto y fondo debe ser de al menos **4.5:1** según WCAG. Texto blanco sobre un botón amarillo no se lee, por más "alerta" que transmita.

**Para ampliar:** capítulo "Color" del libro *Experiencia de Usuario* (pág. 41). El docente también adjuntó un "libro del color".

### 2. Tipografía digital: escala y legibilidad

En pantallas, la tipografía tiene que leerse rápido, en movimiento y en tamaños muy distintos (desde un monitor de 27" hasta un reloj inteligente).

- **¿Serif o Sans-serif?** Para interfaces se usan casi exclusivamente fuentes **sans-serif** (sin "patitas", como Roboto, Inter o Helvetica): limpias, modernas y no cansan la vista en píxeles chicos.
- **Escala tipográfica (jerarquía en código):** no inventar tamaños sobre la marcha en el CSS. Definir una escala y respetarla:
  - `h1` (título principal): **32px** — nombre de la pantalla.
  - `h2` (subtítulo): **24px** — títulos de secciones.
  - `body` (texto común): **16px** — tamaño estándar para que cualquiera lea sin esforzarse.
  - `caption` (texto secundario): **12px** — aclaraciones, fechas o letra chica.

**Para ampliar:** capítulo "Legibilidad" del libro *Experiencia de Usuario* (pág. 80).

### 3. Anatomía de los componentes UI y sus estados

Un componente es un elemento reutilizable de la interfaz (botón, caja de texto, checkbox). Lo crucial para un programador es entender que los componentes están "vivos": cambian de aspecto según lo que haga el usuario.

Los **5 estados de un botón**:

- **Default (reposo):** el botón tal cual aparece en pantalla.
- **Hover (pasar el mouse):** cambia sutilmente (suele oscurecerse) para avisar: "si hacés click acá, algo va a pasar".
- **Active (presionado):** el momento exacto del click; da la sensación física de que el botón se hunde.
- **Focus (seleccionado):** clave para la accesibilidad. Al navegar con Tab, el botón muestra un borde resaltado para saber dónde está parado el usuario.
- **Disabled (deshabilitado):** gris y opaco. Dice: "hasta que no completes el formulario, no podés clickearme".

### 4. Cierre

Cada color y cada fuente tienen una razón de ser en nuestro sistema. Próxima clase: **Diseño Centrado en el Usuario (DCU), Empatía y User Journey Map**.

---

### 🧪 Reto 5: El UI Kit de Rocket Pizza

*Archivo de origen: `04-retos.docx` · Aplica contenidos de la Clase 5.*

*[Nota: el original titula este reto "Reto 5" aunque es el cuarto archivo de retos.]*

Crear la hoja de estilos visuales (el **UI Kit**) de la app. Definir y dibujar (en papel o Figma):

- **Paleta de colores:** código hexadecimal (#HEX) del color primario (la marca), secundario, y los semánticos *Success* (pedido recibido), *Danger* (error en las coordenadas), etc.
- **Escala de fuentes:** qué tamaños se usan para el título del menú, el nombre de la pizza, el precio, etc.
- **Estados del botón de compra:** cómo se ve el botón principal "PEDIR PIZZA" en estado *Default*, cómo cambia en *Hover* y cómo se ve en *Disabled* (por ejemplo, cuando el carrito está vacío).

---

## Clase 6: Diseñar para Humanos (DCU, Personas y Journey Map)

*Archivo de origen: `06-clases.docx`*

**Objetivo:** Comprender las fases del **Diseño Centrado en el Usuario (DCU)** y aprender a modelar las necesidades, dolores y flujos de los usuarios mediante **Arquetipos (Personas)** y **Mapas de Experiencia (User Journey)**.

### 1. El proceso del DCU: el software no es para el programador

El **DCU** es una filosofía de desarrollo en la que los **usuarios reales** influyen en el diseño desde el día uno. No se tira una sola línea de código sin entender a quién le va a resolver la vida.

Es un proceso **iterativo** (un bucle) con 4 fases:

1. **Entender el contexto:** investigar quién usa el sistema, dónde y cuándo.
2. **Especificar requisitos:** definir qué necesidades técnicas y de usuario hay que resolver.
3. **Producir soluciones de diseño:** desde bocetos en papel hasta prototipos funcionales.
4. **Evaluar:** probar con usuarios reales para ver si el código cumple su función o si hay que volver a empezar.

**💡 Regla de oro para devs: vos NO sos tu usuario.** Que a vos te parezca fácil configurar un parámetro por consola no significa que el cliente final (un contador, un médico o un astronauta) pueda hacerlo.

#### Ejemplo: las 4 fases del DCU en Rocket Pizza

El equipo quiere diseñar el **Módulo de Geolocalización y Envío** para recibir pizza en cualquier punto de la Luna.

**1. Entender el contexto (investigación).** Se analiza el entorno: los **Humanos** piden desde laboratorios con pantallas fijas, pero los **Aliens Zogtonianos** piden mientras recolectan helio-3 en la superficie, usando pantallas holográficas en sus trajes, bajo luz solar extrema y con guantes de tres tentáculos. Dato clave: la conexión satelital en el lado oscuro de la Luna se cae cada 5 minutos por tormentas solares.

**2. Especificar requisitos.**

- Requisito de UI: los botones de selección de coordenadas deben tener un área de toque de al menos **60px** (por los tentáculos) y contraste **AAA** (por el reflejo del sol).
- Requisito técnico: la app debe tener **almacenamiento local (IndexedDB)**. Si el Alien se queda sin señal, el pedido se encola localmente y se envía automáticamente al recuperar señal.

**3. Producir soluciones de diseño.** Se dibujan wireframes en papel y luego un prototipo interactivo. Solución: un botón gigante "Fijar mis Coordenadas Actuales vía GPS Lunar" y un indicador con ícono de satélite que cambia según la intensidad de la señal. No se usan menús desplegables para ingresar texto porque los Aliens no tienen teclado alfanumérico.

**4. Evaluar (baño de realidad).** Un Humano con traje y un Alien (o un alumno haciendo el rol) hacen un pedido simulado. Resultado: el Alien presionó el botón sin pifiarle, pero cuando se cortó la señal la pantalla quedó en blanco 4 segundos; el usuario entró en pánico, tocó el botón cinco veces y duplicó el pedido en el backend. **Iteración:** se vuelve a la Fase 3 para agregar un estado *Disabled* con spinner de carga apenas se hace el primer click, previniendo el error antes de mandar la data al servidor.

**💬 Para pensar:** si se saltea la Fase 4 y se manda el código a producción, el backend explota con cinco pedidos duplicados por cada alien hambriento. El DCU ahorra horas de refactorización y llamadas de soporte a las tres de la mañana.

### 2. Arquetipos de usuario: creando "Personas"

Una **Persona** es un arquetipo: un personaje ficticio basado en datos reales de la investigación que representa a un grupo de usuarios del sistema. Sirve para no diseñar para un ente abstracto llamado "el usuario".

**Los 5 puntos clave al crear una Persona:**

1. **Basarse en datos reales, no en suposiciones.** Las Personas nacen de investigar (encuestas, entrevistas, estadísticas). Si inventás una Persona ideal que nunca se equivoca y tiene la mejor conexión del mundo, tu software va a fallar en la realidad.
2. **Definir el contexto de uso (cuándo, dónde y cómo).** Los devs codean cómodos, con doble monitor y buen internet; el usuario no. ¿Usa la app en el colectivo? ¿Tiene las manos ocupadas? ¿La pantalla refleja el sol? En Rocket Pizza, el contexto de Kevin (guantes, conexión inestable) define que los botones sean gigantes y que haga falta caché offline.
3. **Encontrar sus puntos de dolor (frustraciones).** Es lo más valioso de la ficha. Si a tu Persona le frustra llenar 20 campos para una compra simple, tu misión es meter autocompletado, login social (ej: Google) y reducir pasos. **El código existe para matar dolores del usuario.**
4. **Objetivos y motivaciones.** El usuario no entra a la app para ver el diseño; entra para resolver algo. El objetivo de Kevin es comer rápido; el de un robot de servicio, optimizar su batería procesando un pedido en milisegundos. Si el camino tiene obstáculos, la interfaz falló.
5. **Con 2 a 4 Personas alcanza.** Buscar patrones comunes; 2 a 4 arquetipos bien diferenciados cubren al 90% del público. Mejor tres personajes bien detallados que una lista interminable que nadie recuerda.

**Importante:** crear una Persona es un ejercicio de **empatía técnica**. Así, en una discusión de equipo, la decisión no es "a mí me gusta más el botón acá", sino "si ponemos el botón ahí, a Xylar se le va a complicar apretarlo con sus tentáculos; busquemos otra forma".

#### Ejemplo práctico: ¿a quién le vendemos en Rocket Pizza?

**Persona 1: Kevin (el Humano Colonizador)**

- Perfil: 28 años, ingeniero de mantenimiento en el Domo A.
- Tecnología: tablet robusta con guantes espaciales. Conexión inestable.
- Frustración: viene de trabajar 12 horas seguidas, tiene hambre voraz y la app actual le hace dar 8 clicks para repetir su último pedido.

**Persona 2: Xylar (el Turista Alienígena)**

- Perfil: edad desconocida, comerciante de la galaxia de Andrómeda de visita en la Luna.
- Tecnología: dispositivo holográfico. No ve el espectro del color rojo.
- Frustración: no entiende las metáforas humanas (como el ícono del "carrito de compras") y le da pánico pedir algo con ingredientes venenosos para su biología.

> 🖼️ **Imagen: infografía "UX en la Luna: Diseñando para Humanos y Alienígenas".** Compara las dos Personas. A la izquierda, **Kevin**, "el usuario en condiciones de fatiga": su tablet tiene conectividad inestable y los guantes reducen la precisión táctil; su problema de fricción es tener que hacer ocho clics para repetir un pedido y perder el progreso por cortes de conexión. Soluciones: un botón "Reordenar" prominente, targets táctiles de al menos 12 mm y un sistema de caché offline. A la derecha, **Xylar**, "el usuario con barreras biológicas y culturales": le preocupa más la seguridad que el simbolismo (teme pedir alimentos tóxicos y se confunde con íconos como el carrito); prefiere la interacción multimodal (gestos y voz) con instrucciones literales y unidades de medida estandarizadas. Soluciones: filtros biológicos estrictos, etiquetas de texto claras en lugar de íconos metafóricos y redundancia visual (forma/sonido) que no dependa del rojo. Al centro, una tabla comparativa de requerimientos técnicos:
>
> | Característica | Diseño para Kevin (Humano) | Diseño para Xylar (Alienígena) |
> | --- | --- | --- |
> | Interfaz crítica | Modo guantes (targets ≥ 12 mm) | Iconografía literal y etiquetas de texto |
> | Navegación | Flujo rápido (1–2 pantallas) | Asistente guiado paso a paso |
> | Gestión de color | Alto contraste para visibilidad | Evitar dependencia del rojo (redundancia) |
> | Funcionalidad clave | Reordenar en 1 toque y caché offline | Filtro de ingredientes y desglose químico |
> | Feedback | Háptico y sonoro para guantes | Multimodal (voz, gestos, visual) |

### 3. User Journey Map: el viaje del usuario

El **User Journey Map** es un diagrama que muestra el paso a paso de un usuario al interactuar con el producto para cumplir un objetivo. No mide solo los clicks: mide **emociones, canales y dolores** en todo el proceso.

**El viaje de Kevin pidiendo una pizza:**

| Etapa | 1. Descubrimiento (tener hambre) | 2. Configuración (elegir la pizza) | 3. Espera (delivery espacial) | 4. Consumo (felicidad) |
| --- | --- | --- | --- | --- |
| Acción del usuario | Entra a la app muerto de hambre tras su turno. | Busca una pizza 4 quesos Lunar. | Espera que el cohete llegue al Domo A. | Recibe la pizza caliente y come. |
| Punto de contacto (canal) | App mobile (pantalla de inicio). | Formulario de selección de ingredientes. | Pantalla de tracking del cohete. | Puerta del Domo (físico). |
| Pensamientos / dudas | "¿Llegará rápido o el cohete se va a retrasar?" | "¿Tengo que cargar mis coordenadas de nuevo?" | "No sé si el cohete ya despegó o sigue en camino." | "¡Por fin! Valió la pena." |
| Emoción (curva de UX) | 😐 Neutral / ansioso | 😡 Frustrado (el formulario pide 10 datos) | 😰 Nervioso (no hay feedback de la nave) | 😁 Excelente / satisfecho |
| Oportunidad para el dev | Botón "Pedir lo mismo de siempre" en el Home. | Autocompletar coordenadas con el GPS del Domo. | Mapa interactivo con sockets en tiempo real. | Guardar el feedback positivo. |

### 4. Cierre

Detrás de cada pantalla hay una historia, una necesidad y un contexto de uso. No programamos para pantallas, programamos para seres (humanos o no). Próxima clase: **Arquitectura de Información, Card Sorting y Flujos de Usuario (User Flows)**, para definir caminos felices y caminos de error.

---

## Clase 7: Organizar el Caos (Arquitectura de Información y Card Sorting)

*Archivo de origen: `07-clases.docx`*

**Objetivo:** Comprender cómo clasificar, agrupar y etiquetar el contenido de un sistema para que cualquier usuario encuentre lo que busca sin perderse ni sobrecargar su cerebro.

### 1. ¿Qué es la Arquitectura de Información?

La **Arquitectura de Información (AI)** es la disciplina que organiza, estructura y etiqueta los elementos de un producto digital. Es el equivalente a diseñar el plano de un shopping o la señalética de un aeropuerto: si las indicaciones están mal puestas, la gente se pierde y se quiere ir.

**⚠️ El error más común:** organizar la pantalla o el menú según cómo están estructuradas las tablas de la base de datos o según el organigrama de la empresa. **Al usuario no le importa tu backend; le importa su objetivo.**

**Los 4 pilares de la Arquitectura de Información:**

- **Sistemas de organización:** cómo agrupamos la información (por categoría, frecuencia de uso, orden cronológico o tarea).
- **Sistemas de etiquetado (labeling):** qué nombres les ponemos a secciones y botones. Lenguaje humano, no nombres de variables.
- **Sistemas de navegación:** cómo se mueve el usuario (menús principales, barras laterales, pie de página, migas de pan / *breadcrumbs*, ej: `Inicio > Productos > Ropa > Remeras`).
- **Sistemas de búsqueda:** barras de búsqueda, filtros avanzados y autocompletado para cuando la navegación manual no alcanza.

### 2. Rotulado (labeling): nombrar las cosas como las piensa el usuario

El **rotulado** es la elección de las palabras exactas de menús, botones y títulos.

- **Mal rotulado (mindset dev):** un botón `Execute_User_Termination_Procedure`, o un menú "Módulo de Gestión de Transacciones Pasadas V2".
- **Buen rotulado (mindset UX):** "Eliminar mi cuenta" o "Historial de Compras".
- **En Rocket Pizza:** una categoría "Productos derivados de lácteos y grasas comestibles" no la entiende nadie; "Quesos y Extras" se entiende al instante.

### 3. Card Sorting: descubriendo el modelo mental

¿Cómo sabemos en qué categoría poner una función o un producto? No se adivina: se le pregunta al usuario con **Card Sorting** (clasificación de tarjetas). Se le dan al usuario tarjetas (físicas o digitales, en herramientas como Optimal Workshop o Figma) con contenidos o funciones del sistema y se le pide que las ordene.

**Tipos de Card Sorting:**

- **Abierto:** el usuario agrupa las tarjetas sueltas como le parece y **él mismo le pone nombre a cada categoría**. Se usa al principio del proyecto, para descubrir cómo piensa el usuario.
- **Cerrado:** se dan las tarjetas y **las categorías ya predefinidas**; el usuario solo ubica cada tarjeta. Se usa para validar si una estructura ya diseñada se entiende.
- **Híbrido:** categorías predefinidas, pero el usuario puede agregar nuevas si siente que algo no encaja.

> 🖼️ **Imagen: proceso de un Card Sorting en 6 pasos** (línea de tiempo): 1) Definir objetivos → 2) Preparar contenido → 3) Seleccionar usuarios → 4) Ejecutar el Card Sorting → 5) Evaluar resultados → 6) Informar conclusiones y propuestas de mejora.
>
> *(También hay una foto ilustrativa de una sesión real: post-its de colores escritos a mano distribuidos sobre una mesa, con una persona reordenándolos.)*

### 4. Actividad en clase: "El Supermercado Desordenado" 🛒

Ítems de una app de gestión educativa: Inscripción a finales; Cambiar contraseña; Descargar certificado de alumno regular; Ver notas del parcial; Pagar cuota / libre de deuda; Modo oscuro; Plan de estudios de la carrera.

- Si hubiera que armar un menú lateral con solo **3 categorías**, ¿cómo se agruparían estos 7 elementos?
- Debate: ¿"Ver notas" va en *Académico* o en *Trámites*? ¿Dónde va "Modo oscuro"?
- **Conclusión:** distintas personas los agrupan de formas diferentes. Por eso hace falta un Card Sorting con usuarios reales antes de definir el mapa del sitio (*sitemap*).

### 5. Cierre

Si el usuario no encuentra algo en tu app, para él **ese algo no existe**, por más que lo hayas programado a la perfección. Próxima clase: **Boceteado y Wireframing**, para bajar las ideas a papel y pantallas de baja fidelidad.

---

### 🧪 Reto 6: Card Sorting

*Archivo de origen: `05-retos.docx` · Aplica contenidos de la Clase 7. A partir de este reto se trabaja sobre la app propia de la EFI ("app con impacto local").*

Darle orden a los contenidos de la app. Tareas, sobre la app con impacto local:

- **Realizar un card sorting abierto** con al menos 5 personas reales. Tomar fotos de los resultados de cada una.
- **Analizar los resultados y describir los descubrimientos** en un Google Doc.
- **Crear un Sitemap (mapa del sitio):** un diagrama de árbol simple que muestre cómo se pasa desde la pantalla de Inicio (Home) a cada página secundaria, según las categorías definidas.

---

## Clase 8: Prototipado Interactivo en Figma (de un wireframe a un software vivo)

*Archivo de origen: `08-clases.docx`*

**Objetivo:** Aprender desde cero qué son los wireframes y usar Figma para transformar pantallas estáticas en un prototipo interactivo realista, aplicando navegación y microinteracciones sin escribir código.

### 1. ¿Qué es un wireframe de baja fidelidad?

- Es un boceto estructural de una pantalla o app.
- No tiene colores, imágenes reales ni tipografías definitivas.
- Su objetivo es mostrar la jerarquía de la información y los elementos funcionales: ¿qué va en cada lugar?

> 🖼️ **Imagen: wireframes de baja fidelidad en un editor de diseño.** Cuatro pantallas mobile de una app de entrenamiento, todas en grises: "Create an Account" (logo, campos y botón), "Profile Setup" (género, altura, nivel de fitness, tipos de entrenamiento con cajas grises como imágenes), "List of Workouts" (buscador, filtros y grilla de cajas) y "Workout Details" (imagen placeholder, título y botón). Se ve el panel de componentes a la izquierda y el inspector a la derecha.

**Comparación de niveles de fidelidad:**

| Nivel | Cómo se ve | Descripción |
| --- | --- | --- |
| 📝 Boceto en papel | Cajas con rótulos escritos a mano ("imagen", "botón") | 100% preliminar |
| 🔳 Wireframe de baja fidelidad | Figma con formas grises y texto simulado | Lo que se trabaja en esta clase |
| ✅ Prototipo | Pantalla navegable con interacciones, colores, fotos y UI real | Proyecto final |

**Elementos básicos de un wireframe:** encabezado / barra superior; menú o navegación; área principal de contenido; botones de acción; campos de entrada (inputs); etiquetas claras.

> 🖼️ **Imagen: kit de elementos web dibujados a mano ("Doodle Web Design Elements").** Muestra cómo se representan en boceto los elementos típicos: barra de navegación (Home, Categories, About, Social, Contact), caja de imagen con una X, slider con flechas, formulario de login (user/pass), paginador, reproductor de video, buscador, globos de diálogo, bloques de texto con líneas y campo de suscripción por email.

**Buenas prácticas para wireframes funcionales:**

- ✅ Pensar en el usuario, no en la estética.
- ✅ Usar rótulos simples: "imagen", "botón", "texto".
- ✅ Dejar espacio en blanco (aire visual).
- ✅ Repetir estructuras: consistencia.
- ✅ Prioridad de lectura: de arriba hacia abajo, de izquierda a derecha.
- ✅ ¡No enamorarse del primer diseño! Iterar.

### 2. ¿Qué es un prototipo interactivo y por qué Figma?

Un software no es una foto fija: es interacción constante. Un **prototipo interactivo** es una simulación funcional de la app donde los botones se pueden clickear y las pantallas cambian en tiempo real.

**Figma** es la herramienta estándar de la industria. Funciona en el navegador y permite diseñar interfaces y programar sus comportamientos de forma visual.

**💡 El valor para el dev:** un prototipo funcional permite validar el flujo completo con clientes o usuarios reales *antes* de armar los componentes en código. Evita tirar código a la basura por cambios de último momento.

### 3. Primeros pasos en Figma: anatomía de la interfaz

La interfaz se divide en 3 zonas:

- **Panel izquierdo (Capas / Layers):** el árbol del proyecto (como el HTML o el árbol de archivos en VS Code). Ahí viven pantallas, textos, botones e imágenes ordenados jerárquicamente.
- **Lienzo central (Canvas):** la mesa de trabajo infinita donde se dibujan las pantallas y se tiran las conexiones.
- **Panel derecho (Inspector):** con dos pestañas:
  - 🎨 **Design:** colores, fuentes, tamaños, bordes y alineación.
  - ⚡ **Prototype:** para que las cosas reaccionen al click.

**Vocabulario esencial:**

- **Frame (tecla F):** contenedor principal que simula la pantalla de un dispositivo (ej: iPhone 14, monitor desktop). Todo lo que se diseña debe vivir dentro de un Frame.
- **Componente (Ctrl + Alt + K / Cmd + Option + K):** elemento reutilizable (ej: un botón). Si se cambia el componente "padre", todas sus copias (*instances*) se actualizan automáticamente.

### 4. La pestaña "Prototype": conectando pantallas

Se conecta un elemento de una pantalla con una pantalla de destino arrastrando el circulito azul (+), creando flechas interactivas (*noodles*). Cada interacción tiene 3 parámetros:

- **Trigger (¿cuándo pasa?):** *On click* (click o toque); *While hovering* (mientras el cursor está encima, ideal para botones o menús); *On drag* (al deslizar, para carruseles).
- **Action (¿qué hace?):** *Navigate to / Maps to* (lleva a otra pantalla); *Open overlay* (abre un modal sobre la pantalla actual); *Scroll to* (salta a una sección de la misma página); *Back* (vuelve a la pantalla anterior).
- **Animation (¿cómo se mueve?):** *Instant* (cambio seco); *Dissolve* (fade-in suave); *Smart Animate* (Figma detecta qué elementos cambiaron entre dos pantallas y los anima automáticamente).

*[Nota: el original escribe la acción como "Maps to"; en la interfaz de Figma en inglés figura como "Navigate to".]*

### 5. Actividad en vivo: "Construyendo 2 pantallas de Rocket Pizza en Figma" 🚀

1. Crear 2 frames de celular (ej: iPhone 14/15) y renombrarlos `01-Home` y `02-Confirmacion`.
2. En `01-Home`: título "Pizzas Espaciales", una tarjeta de pizza y un botón rosa "PEDIR AHORA".
3. En `02-Confirmacion`: pantalla verde de éxito con el texto "¡Tu cohete está en camino!" y un botón "Volver al Inicio".
4. En la pestaña Prototype: conectar "PEDIR AHORA" → `02-Confirmacion` (On click → Navigate to → Smart Animate) y "Volver al Inicio" → `01-Home`.
5. Presionar Play (►) para abrir el modo presentación y probar el prototipo.

### 6. Cierre

Figma no es solo una herramienta de diseño: es el borrador interactivo del código frontend. La próxima clase profundiza en Figma.

---

### 🧪 Reto 7: Prototipo en Figma de la EFI (baja calidad)

*Archivo de origen: `06-retos.docx` · Aplica contenidos de la Clase 8, sobre el proyecto de la EFI.*

Crear un prototipo interactivo para el proyecto de la EFI. Requisitos del archivo de Figma:

- Crear **todas las pantallas del flujo principal** de la app, en **baja calidad** (baja fidelidad).
- Interacciones requeridas:
  - Navegación completa entre las 3 pantallas (On click → Navigate to).
  - Un botón "Volver" en las pantallas secundarias que regrese a la principal usando la acción **Back**.

*[Nota: el enunciado pide "todas las pantallas del flujo principal" y luego menciona "las 3 pantallas"; se interpreta como un mínimo de 3 pantallas conectadas.]*

---

## Clase 9: Figma Avanzado — Buenas Prácticas ("Clase 8 ++")

*Archivo de origen: `09-clases.docx` · El original se titula "Clase 8 ++ (Figma Avanzado)"; es la continuación directa de la Clase 8.*

**Objetivo:** aprender el manejo de **componentes, variantes, auto-layout y constraints** en Figma, aplicados a un ejemplo de **app de e-commerce minimalista**. Prepara la base para el prototipado interactivo y el diseño responsivo.

### 1. Preparar el proyecto

1. Abrir Figma → "Nuevo diseño". Nombrar el archivo "Clase 8 – E-Commerce App".
2. Frame principal **mobile-first**: herramienta Frame (F) → **iPhone 14 / 390×844**. Nombre: "Foundations". Fondo: `#FFFFFF`.

**Texto base:** con la herramienta Texto (T), crear tres textos: "Título", "Subtítulo" y "Cuerpo", con estas propiedades:

| Estilo | Fuente | Peso | Tamaño | Color |
| --- | --- | --- | --- | --- |
| Título | Inter | Bold | 24 | `#111827` |
| Subtítulo | Inter | Medium | 18 | `#374151` |
| Cuerpo | Inter | Regular | 16 | `#6B7280` |

**Crear un estilo de texto global:** con el texto seleccionado → panel derecho → sección Tipografía → ícono de estilos (cuatro puntos en cuadrícula) → "+" (Crear estilo). Nombrarlos "Título / Inter Bold 24", "Subtítulo / Inter Medium 18" y "Cuerpo / Inter Regular 16" → Crear.

**Aplicar el estilo global:** seleccionar cualquier caja de texto → panel derecho → Estilos → elegir el estilo guardado. Si se modifica el estilo, **todos los textos que lo usan se actualizan automáticamente**.

**Colores de la app:**

- Primario: `#3B82F6` (azul brillante).
- Secundario: `#10B981` (verde claro, para CTA — *Call To Action*).
- Neutros: `#F3F4F6` (fondo), `#E5E7EB` (cards), `#111827` (textos).

### 2. Componentes y variantes

**A. Botón principal (CTA "Comprar"):**

1. Rectángulo (R): 160 × 48 px, esquinas redondeadas 8 px, fondo `#10B981`.
2. Texto "Comprar": Inter Medium 16, `#FFFFFF`, centrado vertical y horizontal.
3. Seleccionar botón y texto → clic derecho → Crear componente (Ctrl+Alt+K). Nombre: "Botón / CTA".

**B. Variantes (hover, deshabilitado):**

1. Seleccionar el componente → panel derecho → Variantes → "+".
2. Crear 2 variantes: **Hover** → `#059669`; **Deshabilitado** → fondo `#D1FAE5`, texto gris `#9CA3AF`.
3. Renombrar la propiedad: **Estado** → Default / Hover / Disabled.
4. Interacción: seleccionar la variante Default → Prototipo → Interacciones → Activador "Al pasar el ratón" (While hovering) → Acción "Cambiar a" (Change to) → Hover.

### 3. Auto-layout: tarjeta de producto

1. Crear un frame "Pantalla Inicio" y dentro una tarjeta "Card Producto": 330 × 300 px, fondo `#F3F4F6`, bordes redondeados 12 px.
2. Contenido: imagen de producto (rectángulo superior 290 × 150 px); nombre del producto (estilo Cuerpo, `#111827`); precio (estilo Cuerpo, `#3B82F6`); botón "Comprar" (instancia del componente creado).
3. Seleccionar todos los elementos de la card → clic derecho → **Añadir Auto Layout (Shift+A)**: dirección vertical, espaciado entre objetos 8 px, padding interno 12 px, alineación superior/centro.

### 4. Constraints (restricciones para responsive)

- **Card Producto** → panel derecho → Posición: horizontal **Escala**, vertical **Superior**.
- **Botón dentro de la card** → horizontal **Escala**, vertical **Inferior**.

Esto permite que, si se duplica la card o se cambia el tamaño del frame, los elementos se adapten automáticamente.

> 🖼️ **Imagen: panel "Posición" de Figma (modo oscuro).** Muestra los botones de alineación, las coordenadas X/Y, los desplegables de constraints (en la captura: horizontal "Centro", vertical "Superior"), la rotación y el diagrama interactivo de anclajes donde se marca a qué bordes queda fijado el elemento.

### 5. Layout final de la pantalla de inicio

1. Frame "Pantalla Inicio" → Prototipo → Desbordamiento (Overflow) → **Vertical** (habilita scroll).
2. Colocar **3 cards de producto** en columna con auto-layout vertical, espaciado 16 px.
3. Encabezado "Bienvenido a E-Shop": Inter Bold 24, `#111827`, margen superior 24 px.
4. Barra de navegación inferior: frame 390 × 70 px, fondo blanco, sombra sutil `#E5E7EB` 0 0 6px; íconos minimalistas Home / Categorías / Carrito / Perfil; Prototipo → Posición → **Fijo** (queda fija al hacer scroll).

### 6. Actividad práctica (por equipo, sobre su proyecto)

- Crear una **card para su proyecto** y las variantes que consideren necesarias.
- Probar el **hover** en el prototipo.
- Usar **auto-layout y constraints** para agregar más productos sin romper el diseño.
- Guardar **componentes globales** para reutilizarlos en futuras pantallas.

---

## EFI — Proyecto Final de Interfaz de Usuario 2026 (enunciado)

*Archivo de origen: `01-claseEFI.docx`*

### 🎯 Objetivo

**Unificar todos los contenidos vistos durante el año en un proyecto real.** Se trabaja en equipos y hay que demostrar cómo se logra el diseño UX de una app completa. La presentación debe ser clara, técnica y durar **un máximo de 20 minutos por equipo**.

### 🔍 Parte 1: Investigación

Un documento que describa los siguientes temas del proyecto:

- Resumen de la idea.
- Datos de la empresa (real o ficticia): nombre; ícono para apps y tiendas; logo en los diferentes formatos.
- Valor agregado de la propuesta: ¿qué tiene la aplicación que el cliente no encuentra en opciones gratuitas y/o libres?
- ¿Cómo ayuda la app a su comunidad?
- Enumerar los **conceptos vistos durante el cursado** y detallar cómo se implementaron en el proyecto (se pueden usar capturas de pantalla además de una breve descripción).
- Equipo: a los clientes les gusta ver quién va a trabajar en su proyecto (transmite cercanía y transparencia). Para cada miembro: nombre, cargo, foto y una breve descripción.

### 🛠️ Parte 2: Producción

- Diseño y **prototipado UX funcional y navegable de la app completa**, por ejemplo en Figma o como una Web SPA (mobile / desktop).
- Una **presentación en Prezi**; quienes sepan pueden además crear un **video tipo demo**, con la respectiva **defensa oral** de los integrantes.

### 📁 Entrega final — estructura de carpetas

```
EFI-Equipo/
├── Prototipo / Web SPA
├── Documento con la investigación
└── Presentación
```

---

## EFI — Propuesta aceptada: "Serrano Trabaja"

*Archivo de origen: `idea-EFI.docx`*

**Integrantes:** Tiago Pescara y Valentín Belone.

**Nombre del proyecto:** **Serrano Trabaja**

### El problema local

En Serrano, un pueblo pequeño, las oportunidades laborales circulan principalmente de boca en boca o por grupos de WhatsApp desorganizados. Los empleadores que necesitan una changa, un servicio o un trabajador no tienen un lugar centralizado donde publicarlo, y los trabajadores tampoco tienen cómo mostrar quiénes son y qué saben hacer, por lo que quedan invisibles frente a quien los podría contratar.

### ¿Qué hace la app?

Dos tipos de usuarios:

- **Empleador** → publica una necesidad laboral (changa, trabajo fijo, servicio puntual).
- **Trabajador** → tiene un perfil con sus datos, habilidades y experiencia; ve las publicaciones y contacta al empleador si le interesa.

### Desafío de UX / optimización

- **Modelo mental del usuario:** el público es mixto — vecinos de pueblo que pueden no dominar la tecnología, adultos mayores que buscan un electricista de confianza, jóvenes que quieren un ingreso extra. La interfaz debe ser simple, directa y en lenguaje cotidiano. Nada de tecnicismos.
- **Confianza como pilar:** en un pueblo todos se conocen. El perfil del trabajador debe mostrar reputación, comentarios de vecinos y la zona donde trabaja. Eso vale más que cualquier diseño llamativo.
- **Acción rápida para el empleador:** publicar una necesidad debe tomar menos de un minuto: qué necesita, cuándo, dónde y cómo contactar. Sin formularios eternos.

### Características planeadas

- Registro de dos tipos de usuario: **Empleador** y **Trabajador**.
- Perfil del trabajador con nombre, foto, oficio, zona donde trabaja y experiencia.
- Sistema de **publicaciones** donde el empleador describe qué necesita, cuándo y dónde.
- Feed de publicaciones visible para todos los trabajadores registrados.
- Botón de **contacto directo** al empleador desde cada publicación.
- Sistema de **reputación** con comentarios y puntaje de vecinos.
- Filtro de publicaciones por **tipo de trabajo** (changa, trabajo fijo, servicio puntual).
- Interfaz simple con lenguaje cotidiano, sin tecnicismos, pensada para todo rango de edad.
- Sección de **oficios populares** destacados (gasista, electricista, albañil, limpieza, etc.).

### Encuadre dentro de la consigna

Se enmarca como una **variante propia de la "Opción 4: Economía Local y Empleo Barrial"** (una de las opciones de proyecto propuestas por la cátedra, pensada originalmente para barrios de Río Cuarto), adaptada al contexto real de Serrano. La problemática es equivalente y los desafíos de UX son los mismos o más ricos al tratarse de una comunidad rural/pequeña.

*[Nota: el listado completo de "opciones" de proyecto de la cátedra no está incluido en los archivos originales; solo se menciona la Opción 4.]*

---

## Glosario rápido de conceptos del año

Referencia condensada de los conceptos trabajados, útil para relacionarlos con el proyecto "Serrano Trabaja" (por ejemplo, en la sección de la EFI que pide "enumerar los conceptos vistos y cómo se implementaron").

| Concepto | Definición breve | Clase |
| --- | --- | --- |
| UX | La experiencia/sentimiento de la persona al usar el producto. | 1 |
| UI | El medio visual: botones, colores, tipografía, layout. | 1 |
| Pilares de la UX | Usabilidad, accesibilidad, utilidad, desempeño, emoción. | 1 |
| Usabilidad | Eficacia + eficiencia + satisfacción; dimensión objetiva y subjetiva. | 2 |
| Accesibilidad (A11y) | Que el software lo pueda usar cualquier persona; guiada por WCAG. | 2 |
| Principios WCAG | Perceptible, operable, comprensible, robusto. Contraste mínimo 4.5:1. | 2 |
| Esfuerzo–beneficio | Si el esfuerzo pedido supera al beneficio, el usuario abandona. | 2 |
| Affordance | Cualidad de un elemento que comunica cómo usarlo (forma, sombra, relieve). | 3 |
| Modelo mental | Lo que el usuario cree saber; los íconos son convenciones culturales. | 3 |
| Mapeo natural | Relación directa y lógica entre un control y su resultado. | 3 |
| Leyes de Gestalt | Proximidad, semejanza, continuidad y cierre. | 4 |
| Jerarquía visual | Tamaño, color/contraste y espacio en blanco definen qué importa más. | 4 |
| Patrones F y Z | F para contenido denso; Z para landings y pantallas de app. | 4 |
| Test de entrecerrar los ojos | Verifica qué elemento domina la jerarquía visual. | 4 |
| Paleta de colores | Primario, secundario y semánticos (success, danger, warning, info). | 5 |
| Escala tipográfica | h1 32px, h2 24px, body 16px, caption 12px; fuentes sans-serif. | 5 |
| Estados de componentes | Default, hover, active, focus, disabled. | 5 |
| DCU | Bucle: entender contexto → requisitos → diseñar → evaluar. | 6 |
| Personas | Arquetipos basados en datos reales: contexto, dolores, objetivos (2 a 4). | 6 |
| User Journey Map | Etapas, acciones, canales, pensamientos, emociones y oportunidades. | 6 |
| Arquitectura de Información | Organización, etiquetado, navegación y búsqueda. | 7 |
| Rotulado (labeling) | Nombres en lenguaje del usuario, no del backend. | 7 |
| Card Sorting | Abierto, cerrado o híbrido; revela cómo agrupa el usuario. | 7 |
| Sitemap | Árbol de navegación desde el Home a las páginas secundarias. | 7 |
| User Flow | Camino que recorre el usuario para completar una tarea (feliz y de error). | 1–2, 6 |
| Wireframe | Boceto estructural en baja fidelidad, sin estética final. | 8 |
| Prototipo interactivo | Simulación navegable (trigger, action, animation). | 8 |
| Frame / Componente / Instancia | Contenedor de pantalla / elemento reutilizable / copia enlazada. | 8 |
| Variantes | Estados de un componente agrupados (Default/Hover/Disabled). | 9 |
| Auto-layout | Distribución automática con dirección, espaciado y padding. | 9 |
| Constraints | Reglas de anclaje para que el diseño sea responsivo. | 9 |
| Estilos globales | Tipografías y colores reutilizables que se actualizan en todo el archivo. | 9 |
