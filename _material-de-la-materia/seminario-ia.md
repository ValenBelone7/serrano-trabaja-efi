🎓 Manual Oficial del Estudiante · iTec
Interfaz de Usuario & Desarrollo de Software
Google Antigravity 2.0 & UX/UI
¡Bienvenido al Seminario! Aprendé a transformar tus diseños de experiencia de usuario creados en Figma en software vivo, accesible y responsivo utilizando Google Antigravity 2.0, memoria persistente Engram, reglas automáticas always_on, el protocolo Gentle-AI (Spec-Driven Development / SDD) y la biblioteca Agentic Awesome Skills.

🎨 Figma to Code
⚡ HTML5 + TailwindCSS
♿ Accesibilidad WCAG AA
🧠 Memoria Engram
🛡️ Always-On Rules
🏛️ iTec 2026
📺 Estructura del Seminario & Progresión de Badges
El seminario está estructurado en 7 clases dinámicas de corta duración (máx. 15 min cada una) diseñadas para articular la teoría de UX/UI con el desarrollo de software vivo:

Clase Duración Enunciado & Foco Pedagógico Concepto UX / Herramienta Insignia / Entregable
01 12 min El Mindset UX en Antigravity 2.0 Senior Product Engineer, interfaz multimodelo y primer maquetado en vivo. Práctica 1: Primer Componente UI en HTML/CSS
02 10 min Auto-Setup Transparente en Windows Instalación desatendida con winget (Node.js LTS, Git, PowerShell). 🎖️ Badge 1: Antigravity Pilot
03 14 min Sistema Operativo & Reglas Globales Constitución del agente con trigger: always_on, 5 estados y WCAG AA. 🛡️ Badge 2: Gentle-AI Knight
04 15 min Entrevista UX de 14 Preguntas Levantamiento de Personas, Journey Map y Arquitectura de Información. Práctica 4: Responder 14P
05 14 min Master Context Vivo (6 Documentos) Autogeneración en docs/contexto/ con ADRs fechados cronológicamente. 📚 Badge 3: Context Architect
06 12 min Skills Agenticas & Poda Inteligente Clonado de agentic-awesome-skills y poda según contexto frontend. ✂️ Badge 4: Skill Hunter
07 15 min El Puente Figma ➔ Software Vivo Ingesta multimodal de wireframes, SPA viva y Desafío Integrador EFI. 🏆 Boss: Full-Stack UX Engineer
🎬 CLASE 01 · 12 MIN
Clase 01: El Mindset del Desarrollador UX & Google Antigravity 2.0
🎯 Objetivo de Aprendizaje
Comprender la transición del rol tradicional de programador al de Senior Product Engineer y Director Técnico de la Inteligencia Artificial, aplicando las Leyes de Gestalt y la visión espacial multimodelo.

1.1. De Escribir Código a Orquestar Experiencias
❌ Desarrollo Tradicional Aislado
• Maquetar HTML/CSS línea a línea sin visión integral de producto.
• Olvidar la accesibilidad (A11y) y los 5 estados de los botones.
• Reescribir código constantemente por falta de claridad en el flujo UX.
⚡ Desarrollo Agentico con Antigravity
• El estudiante actúa como Director Técnico y Diseñador UX.
• Antigravity planifica y genera código semántico, responsivo y accesible.
• Supervisión de los 5 Pilares UX: Usabilidad, Accesibilidad, Utilidad, Rendimiento y Emoción.
1.2. Tour por la Interfaz de Antigravity 2.0
Elemento de Interfaz Ubicación Función en el Flujo UX
Barra Lateral (`Projects`) Extremo Izquierdo Historial de chats, proyectos y tareas en segundo plano.
Chat Central de Agentes Centro Diálogo directo con la IA y adjuntado de wireframes de Figma.
Selector Multimodelo Inferior Elección del motor de razonamiento (Gemini 3.7 Flash High).
Explorador del Workspace Panel Derecho Inspección de index.html, style.css, app.js y docs/contexto/ en vivo.
1.3. Demostración "WOW Effect": Maquetado en Vivo en 2 Minutos
Probá la velocidad de Antigravity 2.0 enviando este prompt para crear tu primer componente interactivo sin escribir una sola línea de código a mano:

PROMPT CLASE 1
WOW Effect — Maquetado en Vivo
📋 Copiar Prompt
Antigravity, genera un componente de tarjeta de presentación moderna en HTML5 semántico y CSS puro con diseño en tema oscuro, gradiente violeta y un botón hover.
🧪 Ejercicio Práctico Paso a Paso para Alumnos (Clase 1)

1. Abrí Google Antigravity 2.0 y seleccioná tu proyecto en la barra lateral.
2. Asegurate de tener seleccionado Gemini 3.7 Flash High en el selector multimodelo del panel inferior.
3. Enviá el prompt de maquetado en vivo en el chat para que el agente cree la tarjeta.
4. Abrí el archivo index.html generado en el explorador del workspace y visualizalo en tu navegador web.

🛠️ CLASE 02 · 10 MIN
Clase 02: Auto-Setup Transparente del Entorno en Windows
🎯 Objetivo de Aprendizaje & 🎖️ Badge 1: Antigravity Pilot
Configurar automáticamente el ambiente de desarrollo (Node.js LTS, Git y PowerShell) sin abrir páginas externas, sin configurar variables PATH a mano y sin tocar la consola del sistema.

2.1. El Dolor Tradicional vs Automatización con `winget`
En el desarrollo tradicional, los estudiantes pierden hasta una clase entera descargando instaladores .exe, lidiando con políticas bloqueadas de PowerShell y agregando rutas al PATH. Con Antigravity, el asistente ejecuta el comando del Administrador de Paquetes de Windows (winget) en segundo plano de manera 100% desatendida.

2.2. Prompt Maestro de Auto-Setup Transparente
PROMPT 1: AUTO-SETUP TRANSPARENTE · CLASE 2
📋 Copiar Prompt
Antigravity, por favor configurá mi ambiente de desarrollo en Windows de forma transparente:

1. Revisá si Node.js y Git están instalados. Si no lo están, usá winget para instalarlos en mi sistema.
2. Verificá que npm y git funcionen correctamente.
3. Habilitá la ejecución de scripts en PowerShell si está bloqueada.
4. Mostrá un resumen transparente de todo lo que verificaste e instalaste.
   2.3. Tabla de Verificación de Salud del Entorno
   Al finalizar la ejecución del prompt, Antigravity mostrará un reporte de confirmación:

Herramienta Comando de Prueba Estado Esperado
Node.js node -v v20.x.x (LTS) ✅
NPM Package Manager npm -v v10.x.x ✅
Git Version Control git --version git version 2.4x.x ✅
PowerShell Scripts Get-ExecutionPolicy RemoteSigned ✅
🛡️ CLASE 03 · 14 MIN
Clase 03: Sistema Operativo de Antigravity & Reglas Globales (Always-On)
🎯 Objetivo de Aprendizaje & 🛡️ Badge 2: Gentle-AI Knight
Inyectar una Constitución Operativa permanente en el agente para evitar alucinaciones, garantizar estándares de accesibilidad WCAG AA, los 5 estados UI y adoptar el protocolo Gentle-AI.

3.1. Los 6 Pilares del Antigravity Operating System
PILAR 1
Senior Product Engineer
Explicar el POR QUÉ (Why) antes del CÓMO (How). Pragmatismo, velocidad y UX sobresaliente.
PILAR 2
Tech Stack Defaults
SPA en HTML5 semántico + TailwindCSS + JavaScript Vanilla en cliente + persistencia en LocalStorage.
PILAR 3
Definition of Done (DoD)
Contraste WCAG AA (4.5:1), navegación operable por teclado (:focus-visible) y 5 estados UI.
PILAR 4
Guards de Negocio
Centralizados en docs/contexto/ (glosario y decisiones con confirmación previa del usuario).
PILAR 5
Master Context (6 Docs)
Estructura sagrada en docs/contexto/ sin dispersar archivos sueltos en la raíz.
PILAR 6
Flujo Adaptativo & SDD
Fast-Path directo para fixes de 1 archivo vs ciclo SDD estructurado para cambios de >2 archivos.
3.2. Prompt Maestro de Reglas Globales & Memoria Persistente
PROMPT 2: REGLAS GLOBALES · TRIGGER ALWAYS_ON · CLASE 3
📋 Copiar Prompt
[REGLAS GLOBALES DE ANTIGRAVITY - OPERATING SYSTEM & PROTOCOLO MANDATORIO]

Antigravity, por favor configurá e integrá el Sistema Operativo y Reglas Globales de este proyecto basados en Gentle-AI (https://github.com/Gentleman-Programming/gentle-ai):

1. GUARDÁ EN TU MEMORIA PERSISTENTE (mem_save):
   - Registrá el Operating System del proyecto con sus 6 secciones de ingeniería:
     1. Persona & Mentalidad: Senior Product Engineer (Explicar el Why antes del How, speed-to-market, pragmatismo y UX sobresaliente).
     2. Tech Stack & Defaults: SPA / Vite / TypeScript / HTML5 semántico + Tailwind CSS / 5 estados de componentes (Default, Hover, Active, Focus, Disabled) + IndexedDB/LocalStorage.
     3. Definition of Done (DoD): Justificación técnica (Why/How), pruebas/tipos, verificación visual de estados y contraste WCAG AA (4.5:1), código limpio sin basura.
     4. Guards de Reglas de Negocio & Telemetría: Centralizados en docs/contexto/ (glosario.md, decisiones.md y arquitectura.md sin dispersar archivos sueltos). Cambios requieren aprobación previa.
     5. Master Context: 6 documentos vivos en docs/contexto/ (arquitectura, convenciones, decisiones, glosario, flujo-de-trabajo, errores-conocidos).
     6. Flujo de Trabajo Adaptativo & SDD: Fast-Path directo para fixes de 1 archivo; ciclo SDD estructurado (explore ➔ propose ➔ tasks ➔ apply ➔ verify) para tareas complejas (>2 archivos); memoria Engram (mem_context, mem_save, mem_session_summary).

2. CREACIÓN AUTOMÁTICA DEL ARCHIVO DE REGLAS (ALWAYS ON):
   - Creá la carpeta .agents/rules/ si no existe.
   - Creá el archivo .agents/rules/antigravity_rules.md con encabezado YAML 'trigger: always_on' conteniendo estas 6 reglas completas para que queden activas de forma global y permanente en todas las sesiones.

3. CONFIRMACIÓN:
   - Confirmame el resumen de las reglas activadas, el guardado en memoria y los archivos creados.
     💬 CLASE 04 · 15 MIN
     Clase 04: Levantamiento de Contexto UX: Entrevista de 14 Preguntas
     🎯 Objetivo de Aprendizaje & Práctica 4
     Realizar una entrevista guiada en 5 bloques pedagógicos que articulan los conceptos de Personas, Journey Mapping, Card Sorting, Design Tokens y Límites Técnicos antes de escribir código.

4.1. El Principio de Claridad en UX
Un prompt vago como "haceme una página de pizzas" produce código genérico y desorganizado. La entrevista de 14 preguntas divide el problema en 5 bloques lógicos para alimentar automáticamente el Master Context.

🧭 Brújula Pedagógica: Conocé el Producto Final antes de Entrevistar
Para responder con precisión las 14 preguntas y no dejar decisiones críticas libradas al azar de la IA, tu equipo debe conocer de antemano cómo debe ser el producto a producir en el Desafío Integrador Final (100 Puntos). A continuación tenés el blueprint detallado del software y la matriz táctica de qué pedir en cada bloque de la entrevista.

🎯 4.2. ¿Cómo debe ser el Producto a Producir en el Desafío Final? (Blueprint para la Entrevista)
El producto a maquetar no es un sitio estático plano ni un backend sobrecargado: es una Single Page Application (SPA) viva, interactiva, responsiva y accesible que materializa el flujo principal del ejemplo de Rocket Pizza. Aquí están los 6 pilares innegociables que debés tener en mente al responder las preguntas:

PILAR 1 · ARQUITECTURA
🌐 SPA Fluida en Cliente Puro
Todo el código vive en index.html, style.css y app.js. Navegación instantánea entre secciones por desplazamiento suave (smooth scroll) o hash DOM, sin recargas de página ni servidores locales.
PILAR 2 · ALCANCE DEL FLUJO
🚀 2 a 3 Vistas/Secciones Clave

1. Hero con identidad, titular Gestalt y CTA primario. 2) Catálogo con 4 a 6 tarjetas con datos de muestra del proyecto EFI. 3) Formulario funcional que dispara un Modal de éxito.
   PILAR 3 · MICROINTERACCIONES
   🔘 Los 5 Estados Obligatorios
   Cada control (botones, tarjetas, inputs) debe implementar: Default, Hover, Active (efecto táctil), Focus (anillo :focus-visible para teclado) y Disabled (opacidad 50%).
   PILAR 4 · SISTEMA DE COLOR
   🌓 Dark/Light Mode & WCAG AA
   Selector de tema con contraste mínimo 4.5:1 verificado en ambos modos, persistencia en localStorage y clase de seguridad .force-text-white en botones de acento para evitar textos grises ilegibles.
   PILAR 5 · ACCESIBILIDAD
   ⌨️ Prueba de la Mano Atada
   Navegabilidad 100% operable por teclado con Tab, Shift+Tab, Enter y cierre de modales con Escape. Semántica HTML5 nativa y atributos alt descriptivos en imágenes.
   PILAR 6 · LÍMITES TÉCNICOS
   ⛔ Frontend Puro (Sin Backend)
   Tailwind CSS (CDN) + Vanilla JS. PROHIBIDO: Node.js, Express, Python, SQL, MongoDB, Firebase o frameworks pesados como React/Angular para este hito. Debe abrirse directo en el navegador.
   📋 4.3. Matriz Táctica: ¿Qué Pedirle a Antigravity en cada Bloque de la Entrevista?
   Utilizá esta matriz como guía de vuelo de tu equipo para responder las 14 preguntas de la Clase 4, conectando cada pregunta con los requisitos evaluados en la rúbrica del Desafío Final:

Bloque de Entrevista Preguntas Qué Debe Pedir el Alumno (Requisito del Producto Final) Ejemplo Concreto de Respuesta del Equipo
Bloque 1: Identidad, Usuarios y Glosario P1, P2, P3 • Nombre y propósito del proyecto de referencia: Rocket Pizza Lunar (pizzería espacial con entregas a domos y bases lunares en 15 min luz).
• 2 Arquetipos de usuario ("Personas"): Kevin (minero espacial fatigado con guantes en tablet industrial y conexión satelital lenta) y Xylar (marciano fotosintético con visión sensible).
• Glosario de rotulado (Labeling) en lenguaje natural humano: "Lanzar Pedido" vs Execute_Order, "Hangar de Pizzas" vs Catalog_Grid, "Historial de Vuelo" vs Order_History_Logs. "Se llamará 'Rocket Pizza Lunar' y servirá para que astronautas y colonizadores en la Luna configuren y pidan pizzas espaciales con entrega rápida. Persona 1: Kevin (minero espacial con guantes en tablet industrial, requiere botones táctiles grandes de al menos 48px y formularios cortos). Persona 2: Xylar (marciano con visión fotosensible, requiere modo oscuro con alto contraste). En labeling usaremos 'Lanzar Pedido', 'Hangar de Pizzas' e 'Historial de Vuelo'."
Bloque 2: Estructura, SPA y Figma P4, P5, P6 • Arquitectura SPA en un solo index.html con 3 secciones: Navbar fija (logo y toggle Espacio Profundo / Nebulosa Solar), Hero con CTA "Lanzar Pedido", Catálogo de 6 pizzas espaciales y Formulario de Teletransporte con Modal accesible.
• 6 tarjetas interactivas estructuradas según Gestalt con badges de especie consumidora, precios en Créditos Lunares (CL) y botón "Ver Ficha".
• Formulario interactivo con selector de domo y bio-ingredientes que al enviar abra un Modal Accesible de Bio-compatibilidad y confirmación sin recargar la página. "Estructura SPA: 1. Navbar fija con logo y toggle de tema, 2. Hero con CTA 'Ordenar Pizza Espacial', 3. Catálogo de 6 pizzas galácticas filtradas por especie (Astronautas, Marcianos, Cyborgs, Silicio) con precio en Créditos Lunares (CL) y botón 'Ver Ficha', 4. Formulario de teletransporte a domos lunares que al enviar abra un Modal accesible de bio-compatibilidad y confirmación sin recargar."
Bloque 3: Sistema de Diseño & A11y P7, P8, P9, P10 • Paleta semántica espacial: Morado Propulsión (#9333ea / #c084fc), Cyan Rayo Láser (#06b6d4), Créditos Lunares en Ámbar (#fbbf24), Éxito (#10b981) y Peligro Radiación (#ef4444).
• Selector Dark/Light: Fondo Dark Espacio Profundo (#020617) y Light Nebulosa Solar (#f8fafc) con ratio WCAG AA (4.5:1).
• Maquetado Mobile-First (1 columna táctil en tablet espacial; 3 columnas en desktop).
• Los 5 estados de interacción obligatorios en cada control con anillo :focus-visible de alto contraste para guantes espaciales. "Color primario Morado espacial (#9333ea), Acento Cyan (#06b6d4), Éxito Verde (#10b981) y Alerta Ámbar (#f59e0b). Fondo Dark Espacio Profundo (#020617) y Light (#f8fafc). Tipografía Outfit para títulos y Plus Jakarta Sans para interfaz. En móvil 1 columna táctil y en desktop 3 columnas. Botones con los 5 estados y anillo brillante :focus-visible para navegación por teclado."
Bloque 4: Decisiones Técnicas y Límites P11, P12 • Stack ligero: HTML5 semántico + Tailwind CSS v3 vía CDN + JavaScript Vanilla limpio.
• Límites y Prohibiciones Firmes: PROHIBIDO backend (Node, Express, Python), PROHIBIDO bases de datos complejas (SQL/Firebase) y PROHIBIDO frameworks pesados (React, Angular). Toda la interacción corre en cliente con localStorage (rocket_pizza_orders, rocket_pizza_cart) y cálculo reactivo en Créditos Lunares (CL). "Usaremos Tailwind CSS v3 vía CDN con paleta espacial extendida y Vanilla JS puro. PROHIBIDO crear backend con Node, bases de datos SQL y frameworks pesados como React. Toda la lógica del catálogo, carruseles, carrito en Créditos Lunares (CL) y cambio de tema corre en el navegador sin dependencias de servidor."
Bloque 5: Flujo de Trabajo, DoD y Gotchas P13, P14 • Definition of Done (DoD) alineado a la rúbrica de 100 puntos (Fidelidad a Figma, prueba de la mano atada por teclado, contraste verificado).
• Prevención de gotchas: overflow-x: hidden para evitar desbordes móviles, clase de seguridad .force-text-white en botones morados de acento y uso estricto de etiquetas semánticas <button>. "DoD: 1. Idéntico al wireframe de Figma, 2. Superar la Prueba de la Mano Atada (navegación 100% por teclado con Tab y Enter), 3. Conmutador de tema verificado con .force-text-white en botones morados, 4. Cero desborde horizontal (overflow-x: hidden), 5. Los 6 archivos en docs/contexto/ y reporte SDD verificado."
4.4. Prompt Entrevistador de Contexto UX (14 Preguntas Completas)
PROMPT 3: ENTREVISTA UX DE 14 PREGUNTAS · CLASE 4
📋 Copiar Prompt
Antigravity, quiero definir la idea y el contexto inicial de mi aplicación web basándome en los conceptos de UX/UI y en mi prototipo de Figma.

Por favor actúa como un Diseñador UX & Arquitecto Frontend paciente. Inicia una entrevista guiada haciéndome las siguientes 14 PREGUNTAS PEDAGÓGICAS Y CLARAS sobre mi proyecto (pensadas para estudiantes que articulan UX/UI con desarrollo web).

En cada pregunta, incluye su breve explicación (¿Para qué sirve?) y los ejemplos de respuesta para que sepa exactamente qué responder:

--- 🎯 BLOQUE 1: IDENTIDAD, USUARIOS Y GLOSARIO (Alimenta arquitectura.md y glosario.md) ---

1. 🎯 NOMBRE Y PROPÓSITO DEL SITIO WEB:
   - 💡 ¿Para qué sirve?: Define la identidad de tu producto y el problema real que resuelve para el usuario final.
   - 📌 Ejemplos de lo que podés responder:
     - Opción A (Gastronomía Espacial): "Se llamará 'Rocket Pizza Lunar' y servirá para que astronautas y colonizadores en la Luna configuren y pidan pizzas espaciales con entrega rápida."
     - Opción B (Eventos Culturales): "Se llamará 'CultivaRío 2026' y servirá para mostrar recitales, talleres culturales, mapa del predio y reservar entradas."
     - Opción C (Servicios / Mascotas): "Se llamará 'Huellitas Felices' y permitirá publicar mascotas rescatadas en adopción y recibir donaciones."

2. 👤 ARQUETIPOS DE USUARIO ("PERSONAS") Y PUNTOS DE DOLOR:
   - 💡 ¿Para qué sirve?: Diseñamos para humanos reales con limitaciones y contextos específicos (Clase 6 de UX: Kevin y Xylar).
   - 📌 Ejemplos de lo que podés responder:
     - "Persona 1: Kevin (trabajador fatigado, usa guantes en tablet industrial con conexión satelital inestable. Punto de dolor: formularios largos y botones chicos). Persona 2: Turista con visión reducida (necesita alto contraste y fuentes grandes)."

3. 📖 ROTULADO Y GLOSARIO ORIENTADO AL USUARIO (LABELING):
   - 💡 ¿Para qué sirve?: Evita jerga técnica de desarrollador y define etiquetas claras en lenguaje natural comprensible (Clase 7 de UX).
   - 📌 Ejemplos de lo que podés responder:
     - "Usar 'Historial de Pedidos' en vez de 'Transacciones_Log_V2', 'Pedir Ahora' en vez de 'Execute_Order', 'Lineup' para la grilla de artistas, 'Pase General' para las entradas."

--- 🧩 BLOQUE 2: ESTRUCTURA, ARQUITECTURA DE INFORMACIÓN Y FIGMA (Alimenta arquitectura.md y convenciones.md) ---

4. 🧱 SECCIONES PRINCIPALES Y FLUJO DE NAVEGACIÓN (SPA):
   - 💡 ¿Para qué sirve?: Es el esqueleto de tu página (Wireframe de Figma) organizado mediante Card Sorting para una navegación sin fricción.
   - 📌 Ejemplos de lo que podés responder:
     - "1. Barra superior fija con logo y cambio de tema, 2. Portada (Hero) con CTA llamativo 'Ver Menú', 3. Catálogo de Tarjetas con filtros por categoría, 4. Formulario de Reserva/Pedido con resumen interactivo, 5. Pie de página (Footer) con redes."

5. 🖼️ ANATOMÍA DE TARJETAS Y DATOS DE MUESTRA:
   - 💡 ¿Para qué sirve?: Aplica las leyes de Gestalt (proximidad y semejanza) para agrupar visualmente la información repetitiva.
   - 📌 Ejemplos de lo que podés responder:
     - Estructura de cada tarjeta: "Foto ilustrativa, Badge de categoría, Título en h3 (bold), Precio/Fecha destacado y botón de acción 'Ver Detalles'."
     - Datos de muestra (4 a 6 items): "6 pizzas lunares (ej: '4 Quesos Lunares', 'Pepperoni Meteoro', 'Veggie Galáctica', 'Suprema Domo A')."

6. 📝 FORMULARIO INTERACTIVO Y FEEDBACK VISUAL:
   - 💡 ¿Para qué sirve?: Optimiza la relación esfuerzo-beneficio del usuario (Clase 2 de UX) con validación inmediata y confirmación clara.
   - 📌 Ejemplos de lo que podés responder:
     - "Debe pedir: Nombre completo, Correo electrónico, Selección de producto en dropdown, Selector de cantidad con botones +/- y botón 'Confirmar Pedido'. Al enviar, mostrar un aviso o modal verde de éxito sin recargar la página."

--- 🎨 BLOQUE 3: SISTEMA DE DISEÑO, COLORES SEMÁNTICOS Y ACCESIBILIDAD (Alimenta convenciones.md y decisiones.md) ---

7. 🌈 PALETA DE COLOR SEMÁNTICA Y MODOS (DARK/LIGHT):
   - 💡 ¿Para qué sirve?: Comunica significado y emociones respetando el contraste WCAG AA/AAA (4.5:1) (Clases 2 y 5 de UX).
   - 📌 Ejemplos de lo que podés responder:
     - "Color Primario: Violeta espacial (#7c3aed), Color Secundario: Cyan (#06b6d4), Éxito: Verde (#10b981), Alerta/Error: Rojo (#ef4444). Fondo Dark: Slate-950 (#020617), Fondo Light: Slate-50 (#f8fafc) con botón para alternar."

8. 🔤 TIPOGRAFÍA Y ESCALA MODULAR:
   - 💡 ¿Para qué sirve?: Establece una jerarquía visual clara y legible en pantalla (h1: 32px, h2: 24px, body: 16px, caption: 12px).
   - 📌 Ejemplos de lo que podés responder:
     - "Títulos en fuente Sans-serif moderna ('Outfit' o 'Poppins' de Google Fonts en negrita) y textos explicativos en 'Plus Jakarta Sans' o 'Inter' (16px, interlineado cómodo)."

9. 📱 RESPONSIVE & MOBILE-FIRST:
   - 💡 ¿Para qué sirve?: Garantiza que la interfaz sea cómoda para navegar con una sola mano en celulares con botones de al menos 44px a 60px.
   - 📌 Ejemplos de lo que podés responder:
     - "En computadoras 3 columnas de tarjetas; en celulares 1 sola columna vertical. El menú superior debe colapsar en un botón hamburguesa táctil."

10. 🔘 LOS 5 ESTADOS DE INTERACCIÓN DE COMPONENTES:
    - 💡 ¿Para qué sirve?: Cumple con la anatomía completa de componentes UI (Default, Hover, Active, Focus, Disabled) para dar retroalimentación constante.
    - 📌 Ejemplos de lo que podés responder:
      - "Botones con sombra en Default, iluminación en Hover, efecto de hundimiento en Active, borde/anillo de foco :focus-visible de alto contraste para teclado, y opacidad 50% en Disabled."

--- 🛠️ BLOQUE 4: DECISIONES TÉCNICAS Y LÍMITES (Alimenta decisiones.md y arquitectura.md) ---

11. 🛠️ FRAMEWORK CSS ELEGIDO Y MOTIVOS:
    - 💡 ¿Para qué sirve?: Define el sistema de estilos para que el código sea limpio y coherente con las herramientas vistas en clase.
    - 📌 Ejemplos de lo que podés responder:
      - Opción A (Recomendado): "TailwindCSS v3 vía CDN con paleta extendida para maquetar rápido con clases de utilidad."
      - Opción B: "Bootstrap 5 vía CDN."
      - Opción C: "CSS3 Vanilla con archivo style.css y variables :root."

12. ⛔ LÍMITES TÉCNICOS Y TECNOLOGÍAS PROHIBIDAS (LO QUE NO EXISTE):
    - 💡 ¿Para qué sirve?: Frena a la IA para que no agregue frameworks complejos ni librerías pesadas no vistas en el curso.
    - 📌 Ejemplos de lo que podés responder:
      - "NO usar React, Vue ni Angular. NO crear backend con Node.js, Express ni Python. NO usar bases de datos SQL ni Firebase. NO usar estilos inline con style='...'. Mantener todo en un solo index.html con JavaScript limpio."

--- 📋 BLOQUE 5: FLUJO DE TRABAJO, ACCESIBILIDAD Y GOTCHAS (Alimenta flujo-de-trabajo.md y errores-conocidos.md) ---

13. 📋 PASOS DE TRABAJO Y CHECKLIST DE VERIFICACIÓN (DoD):
    - 💡 ¿Para qué sirve?: Criterios de calidad técnica y de experiencia de usuario antes de dar por terminada la entrega.
    - 📌 Ejemplos de lo que podés responder:
      - "Checklist: 1. Fiel al wireframe de Figma, 2. Probado en celular con F12 sin scroll horizontal, 3. Navegación operable al 100% con teclado (Tab + Enter), 4. Contraste de texto verificado WCAG AA."

14. ⚠️ ERRORES COMUNES A PREVENIR (GOTCHAS UX & MAQUETADO):
    - 💡 ¿Para qué sirve?: Blindar el código contra trampas comunes de diseño y desarrollo.
    - 📌 Ejemplos de lo que podés responder:
      - "1. Evitar desborde horizontal en celulares agregando overflow-x: hidden, 2. Usar siempre texto blanco con contraste en botones morados/rojos en modo claro (.force-text-white), 3. Poner siempre atributo alt descriptivo en imágenes, 4. Usar siempre etiquetas <button> reales para elementos interactivos."

============================================================
Una vez que te responda a estas 14 preguntas:
a) Guardá todas las respuestas en tu memoria activa (mem_save).
b) Generá automáticamente los 6 documentos de contexto en docs/contexto/ (arquitectura.md, convenciones.md, decisiones.md, glosario.md, flujo-de-trabajo.md, errores-conocidos.md).
c) Realizá la poda inteligente de skills en .agents/skills/ evaluando todo el contexto de nuestro proyecto, conservando las herramientas útiles para frontend/Tailwind, a11y, dinamismo DOM y SDD.
📚 CLASE 05 · 14 MIN
Clase 05: Master Context Vivo en 6 Documentos (`docs/contexto/`)
🎯 Objetivo de Aprendizaje & 📚 Badge 3: Context Architect
Autogenerar el repositorio documental de 6 archivos sagrados que mantienen la memoria técnica y de UX viva, eliminando la dispersión de archivos sueltos e implementando el registro cronológico de ADRs con Fecha/Hora.

5.1. Prompt Autogenerador de Master Context
PROMPT 4: AUTOGENERADOR MASTER CONTEXT · CLASE 5
📋 Copiar Prompt
Leé las respuestas de nuestra entrevista de contexto UX y la estructura de mi proyecto
y generá automáticamente los 6 documentos de contexto en docs/contexto/, uno por archivo:

1. arquitectura.md — stack de HTML5 y CSS/Frameworks, router SPA, relación con Frames de Figma, qué NO existe.
2. convenciones.md — sistema de colores semánticos, escala tipográfica modular, los 5 estados de componentes (Default, Hover, Active, Focus, Disabled), espaciado Gestalt y reglas WCAG AA.
3. decisiones.md — registro ordenado y cronológico de TODAS las decisiones tomadas con Fecha y Hora ([ADR-XXX] · [YYYY-MM-DD HH:mm]). Cada requerimiento o ajuste acordado debe registrarse aquí. Si se requiere un cambio importante o estructural, DEBÉS pedir autorización explícita antes de ejecutarlo.
4. glosario.md — términos del dominio, reglas de negocio nucleares y tabla de rotulado orientado al usuario (labeling en lenguaje natural vs dev jargon).
5. flujo-de-trabajo.md — integración del ciclo DCU con Spec-Driven Development adaptativo (Fast-Path vs SDD completo) y Checklist de Listo (DoD).
6. errores-conocidos.md — gotchas de usabilidad, soluciones de contraste en modo claro, problemas de foco en teclado y ajustes de responsive móvil.

Reglas:

- Basá las especificaciones en el contexto del producto y los wireframes de Figma.
- En decisiones.md, mantené un orden numérico y cronológico estricto con fecha y hora ([ADR-XXX] · [YYYY-MM-DD HH:mm]).
- Si una instrucción del usuario implica un cambio importante (arquitectura, paleta semántica, cambio de framework, borrado de archivos), solicitá confirmación antes de aplicarlo y después registralo.
- Asegurá que convenciones.md contemple los 5 estados de los componentes y accesibilidad WCAG.
- Sé concreto y directo: cada doc se debe leer en menos de 2 minutos.
  📄 5. Plantillas de Referencia del Master Context (`docs/contexto/`)
  A continuación podés consultar y copiar la estructura exacta de cada uno de los 6 documentos sagrados:

PLANTILLA 1: docs/contexto/arquitectura.md
📋 Copiar Plantilla

# Arquitectura del Proyecto (HTML5, CSS & Stack Frontend UX)

## En una frase

[Qué es el producto, a qué audiencia sirve y cuál es la solución de interfaz que provee (ej: SPA accesible en TailwindCSS para Rocket Pizza Lunar).]

## Stack Tecnológico & UI

- **Estructura Markup**: HTML5 Semántico (<header>, <nav>, <main>, <section>, <article>, <footer>, <button>)
- **Estilos & UI Framework**: [Ej: TailwindCSS v3 (CDN) / Bootstrap v5 / Vanilla CSS3 con Custom Properties]
- **Tipografías**: [Ej: Google Fonts - Outfit / Inter / Plus Jakarta Sans]
- **Lógica de Cliente**: JavaScript Vanilla ES6+ (Manipulación de DOM, Router SPA sin recarga, localStorage)
- **Entorno Agentico**: Google Antigravity 2.0 + Gentle-AI (SDD) + Memoria Persistente Engram

## Mapa de Carpetas y Módulos

- `index.html` → Estructura HTML5 de la aplicación SPA (secciones Hero, Catálogo, Formulario y Modales).
- `src/styles/` o `style.css` → Hojas de estilo, variables de color semántico y clases complementarias.
- `src/js/` o `app.js` → Lógica de interacción en cliente (conmutación de vistas, apertura de modales y cambio de tema).
- `docs/contexto/` → Master Context del proyecto (6 documentos Markdown).
- `.agents/rules/` → Sistema Operativo & Reglas Globales (`antigravity_rules.md` con `trigger: always_on`).
- `.agents/skills/` → Skills agenticas podadas (Tailwind, HTML5, a11y-debugging y SDD).

## Relación con el Prototipo de Figma

- Los Frames de baja fidelidad en Figma (`01-Home`, `02-Catalogo`, `03-Confirmacion`) definen el esqueleto espacial y la jerarquía de Gestalt.
- Antigravity consume las capturas y tokens de Figma para implementar el marcado y la navegación SPA interactiva.

## Lo que NO existe (y NO hay que crear)

- NO usar librerías JS pesadas como React, Vue, Angular o Svelte.
- NO mezclar frameworks CSS (ej: no usar clases de Bootstrap si estamos en TailwindCSS).
- NO usar estilos inline en las etiquetas HTML (`style='...'`).
- NO crear backends con Node.js/Express, Python ni bases de datos SQL/Firebase en este módulo frontend.
  PLANTILLA 2: docs/contexto/convenciones.md
  📋 Copiar Plantilla

# Convenciones de Diseño, UI Tokens y Código Accesible

## Sistema de Color Semántico

- **Color Primario (Brand/CTA)**: [Ej: Violeta #7c3aed / Azul #2563eb]
- **Color Secundario**: [Ej: Cyan #06b6d4 / Slate #475569]
- **Semántico Success (Éxito)**: Verde esmeralda (#10b981)
- **Semántico Danger (Peligro/Error)**: Rojo (#ef4444)
- **Semántico Warning (Alerta)**: Amarillo/Ámbar (#f59e0b)
- **Fondo Dark / Light**: Dark #020617 (slate-950) | Light #f8fafc (slate-50)

## Escala Tipográfica Modular

- `h1` (Título Principal / Hero): `32px` (`2rem`) - Negrita
- `h2` (Títulos de Sección): `24px` (`1.5rem`) - Seminegrita
- `h3` (Títulos de Tarjeta / Modal): `20px` (`1.25rem`)
- `body` (Cuerpo de Texto): `16px` (`1rem`) - Interlineado 1.6
- `caption` (Badges y Metadatos): `12px` (`0.75rem`)

## Anatomía de Componentes: Los 5 Estados Obligatorios

Todo control interactivo (<button>, enlaces, inputs) debe contemplar:

1. **Default**: Apariencia inicial en reposo.
2. **Hover**: Retroalimentación suave al posar el cursor (`brightness-110`, elevación o ligero cambio tonal).
3. **Active**: Hundimiento visual al presionar (`scale-95` o `translate-y-0.5`).
4. **Focus**: Anillo de foco de alto contraste (`:focus-visible`) para navegación por teclado (Desafío Mano Atada).
5. **Disabled**: Opacidad reducida (`opacity-50`) y `cursor-not-allowed`.

## Reglas de Accesibilidad Web (WCAG - POUR)

- **Ratio de Contraste**: Mínimo **4.5:1** (Norma AA/AAA) entre texto y fondo.
- **Clase `.force-text-white`**: Obligatoria en botones sólidos (morados/verdes/rojos) para asegurar texto blanco legible en Modo Claro.
- **Áreas Táctiles Mínimas**: Botones y enlaces táctiles de al menos `44px` a `60px` de alto/ancho en móviles.
- **Semántica & Atributos**: Imágenes con `alt` descriptivo, formularios con `<label>` asociados y botones con `<button>` nativo (nunca `<div>` o `<span>`).

## Patrones Prohibidos

- NUNCA usar `style="..."` inline en HTML.
- NUNCA eliminar el indicador de foco (`outline: none` sin reemplazo visible).
- NUNCA usar divs no semánticos como botones interactivos sin accesibilidad de teclado.
  PLANTILLA 3: docs/contexto/decisiones.md
  📋 Copiar Plantilla

# Registro de Decisiones de Arquitectura y UX (ADRs)

Este documento es una bitácora cronológica con Fecha y Hora de todas las decisiones técnicas y de experiencia de usuario acordadas para este proyecto.

> ✋ **Regla de Autorización Obligatoria**: Si una instrucción del usuario implica un cambio estructural en el diseño, la navegación SPA, la paleta semántica o el stack, el agente **debe solicitar autorización explícita antes de ejecutarlo** y luego registrar el ADR correspondiente.

---

## 📌 Formato de Registro de ADRs

### [ADR-001] · [2026-08-20 10:00] Elección del Framework CSS y Sistema de Diseño

- **Contexto**: Se requiere maquetar rápidamente una SPA responsiva y moderna sin generar hojas de estilo gigantes.
- **Decisión**: Utilizar TailwindCSS v3 vía CDN con configuración extendida de colores semánticos y tipografías Google Fonts.
- **Consecuencias / Descartado**: Se descartan frameworks JS pesados (React/Vue) y hojas de estilo CSS desorganizadas.

### [ADR-002] · [2026-08-20 10:30] Arquitectura SPA Multi-sección sin Recarga

- **Contexto**: El usuario necesita navegar fluidamente entre Inicio, Catálogo y Formulario de Pedido.
- **Decisión**: Implementar una arquitectura Single Page Application (SPA) en un solo archivo `index.html` gestionada mediante funciones de visualización en `app.js`.
- **Consecuencias**: Cero tiempo de recarga, mejor experiencia de usuario y persistencia de estado con `localStorage`.

### [ADR-003] · [2026-08-20 11:00] Soporte de Accesibilidad Universal (WCAG AA) y 5 Estados

- **Contexto**: Se necesita garantizar que personas con discapacidad visual o motora puedan navegar el prototipo.
- **Decisión**: Implementar ratio de contraste mínimo 4.5:1, navegación completa por teclado con `:focus-visible` y los 5 estados obligatorios en todos los componentes interactivos.
- **Consecuencias**: Cumplimiento de los principios POUR y evaluación exitosa en el Desafío de la Mano Atada.

---

_(Nuevas decisiones se agregan al final respetando la numeración y fecha/hora)_
PLANTILLA 4: docs/contexto/glosario.md
📋 Copiar Plantilla

# Glosario del Dominio y Rotulado UX (Labeling)

Este documento define el vocabulario del producto y los componentes de interfaz, asegurando un rotulado en lenguaje natural comprensible para el usuario final (Clase 7 de UX).

---

## 📖 Términos del Dominio del Producto

- **[Nombre del Producto / Entidad]**: [Definición simple del propósito y temática].
- **[Concepto de Negocio 1]**: [Ej: 'Pizzas Espaciales' / 'Lineup del Festival' / 'Pase General'].
- **[Concepto de Negocio 2]**: [Ej: 'Domo de Entrega' / 'Mascota Rescatada' / 'Taller de Cerámica'].

---

## 🏷️ Rotulado de Interfaz (UX Mindset vs Dev Mindset)

| Rotulado Erróneo (Dev Jargon) | Rotulado Correcto (UX Natural)     | Ubicación / Componente |
| :---------------------------- | :--------------------------------- | :--------------------- |
| `Execute_User_Order_V2`       | **Pedir Ahora / Confirmar Pedido** | Botón Principal (CTA)  |
| `Módulo_Transacciones_Log`    | **Historial de Pedidos**           | Barra de Navegación    |
| `User_Auth_Termination`       | **Cerrar Sesión**                  | Menú de Usuario        |
| `Item_Array_Grid_Render`      | **Nuestras Especialidades**        | Encabezado de Catálogo |

---

## 🧩 Componentes de Interfaz de Usuario

- **Hero Section**: Portada principal de impacto visual con propuesta de valor y CTA.
- **Navbar**: Barra superior fija con enlaces, botón hamburguesa responsive y cambio de tema.
- **Card (Tarjeta)**: Bloque visual que agrupa imagen, título, badge y acción secundaria aplicando Ley de Proximidad de Gestalt.
- **Modal**: Ventana emergente flotante con información detallada y botón accesible de cierre.
- **Feedback Toast / Alert**: Aviso visual de confirmación tras el envío exitoso de un formulario.
  PLANTILLA 5: docs/contexto/flujo-de-trabajo.md
  📋 Copiar Plantilla

# Flujo de Trabajo: Ciclo DCU & Spec-Driven Development (SDD)

Este documento describe el flujo metodológico para iterar, diseñar e implementar cambios en la aplicación web combinando el Diseño Centrado en el Usuario (DCU) con el protocolo Gentle-AI (SDD).

---

## 🔄 El Ciclo Metodológico DCU ➔ SDD

```
[ 1. Contexto & Requisitos UX ] ➔ [ 2. Wireframe Low-Fi Figma ] ➔ [ 3. SDD explore & propose ]
                                                                             |
[ 6. Software Vivo & DoD ] ⬅️ [ 5. SDD apply & verify ] ⬅️ [ 4. SDD tasks ] ⬅+
```

1. **Investigación & DCU**: Entender necesidades de Personas y puntos de dolor en el User Journey Map.
2. **Wireframing en Figma**: Definir la jerarquía visual de Gestalt y el flujo de navegación en baja fidelidad.
3. **`sdd-explore` & `sdd-propose`**: Antigravity analiza las capturas de Figma y formula la propuesta técnica.
4. **`sdd-tasks`**: Desglose atómico de tareas de maquetado, estilos y accesibilidad.
5. **`sdd-apply`**: Generación e iteración del código HTML5 + CSS/Tailwind + JS.
6. **`sdd-verify`**: Auditoría contra especificaciones, contraste WCAG y navegación por teclado.

---

## ✅ Criterio de Terminado (Definition of Done / DoD)

Antes de dar por finalizada cualquier funcionalidad o componente, se debe comprobar:

1. **Fidelidad Visual**: Coincide con la distribución y jerarquía del Wireframe de Figma.
2. **Responsive Mobile-First**: Verificado en emulador móvil (F12) sin desborde horizontal (`overflow-x`).
3. **Los 5 Estados Presentes**: Todo elemento interactivo posee Default, Hover, Active, Focus y Disabled.
4. **Navegación por Teclado**: 100% operable con `TAB`, `Shift+TAB` y `Enter` con indicador `:focus` visible.
5. **Contraste WCAG AA**: Ratio mínimo 4.5:1 verificado en Modo Claro y Modo Oscuro.
6. **Memoria Engram**: Decisión registrada en `docs/contexto/decisiones.md` y guardada con `mem_save`.
   PLANTILLA 6: docs/contexto/errores-conocidos.md
   📋 Copiar Plantilla

# Registro de Errores Conocidos, Gotchas de UX & Accesibilidad

Este documento recopila las trampas frecuentes de diseño y frontend resueltas para evitar regresiones o retrocesos durante el desarrollo agentico.

---

## 🐛 1. Trampa de Contraste en Modo Claro (Botones Ilegibles)

- **Problema**: Al alternar a Modo Claro, algunos botones con fondo de color sólido heredan color de texto oscuro o gris, volviéndose ilegibles y violando WCAG AA.
- **Solución**: Aplicar la clase utilitaria `.force-text-white { color: #ffffff !important; }` en botones con fondos oscuros o intensos.

---

## 📱 2. Desborde Horizontal en Pantallas Móviles

- **Problema**: Uso de márgenes rígidos (`width: 500px` o márgenes negativos) que generan scroll horizontal indeseado en celulares.
- **Solución**: Diseñar Mobile-First, utilizar anchos porcentuales o basados en grid (`w-full`, `max-w-md`), y aplicar `overflow-x: hidden` en el contenedor raíz si fuese necesario.

---

## ⌨️ 3. Pérdida del Indicador de Foco para Teclado

- **Problema**: Eliminar visualmente el contorno de foco con `outline: none` sin proveer un reemplazo, dejando la interfaz inoperable para usuarios sin mouse.
- **Solución**: Reemplazar siempre con clases de foco visibles y de alto contraste (ej: `focus:ring-2 focus:ring-purple-400 focus:outline-none`).

---

## 🚪 4. Cierre Inaccesible de Modales

- **Problema**: Ventanas modales que solo pueden cerrarse haciendo clic en una 'X' pequeña, atrapando a usuarios en celulares o teclado.
- **Solución**: Proveer botón visible de cierre de al menos `44px`, permitir cierre haciendo clic en el backdrop oscuro y escuchar la tecla `Escape` en JavaScript.
  🛡️ 6. Guía Práctica: Gentle-AI & Spec-Driven Development (SDD)
  gentle-ai es la arquitectura creada por Gentleman Programming para guiar a la IA bajo el estándar Spec-Driven Development (SDD).

🤔 ¿Por qué usar SDD en Proyectos UX/UI?
Cuando le pides a una IA "hazme un formulario o una tarjeta" sin especificación previa, la IA suele saltar a codificar sin respetar contrastes, sin los 5 estados y sin coherencia con Figma. SDD invierte el proceso: Primero se investiga y diseña (`explore`, `propose`, `spec`, `tasks`) y finalmente se implementa y verifica (`apply`, `verify`).

PASO 1
/sdd-explore
Investiga la idea o compara enfoques de maquetado en Tailwind sin tocar archivos de código.
PASO 2
/sdd-propose & /sdd-spec
Genera la propuesta técnica detallando estados de componentes, ratios WCAG y estructura SPA.
PASO 3
/sdd-tasks
Desglosa el cambio en una lista de tareas atómicas y medibles.
PASO 4
/sdd-apply
Antigravity escribe el código HTML5/CSS/JS marcando las tareas del checklist a medida que avanza.
PASO 5
/sdd-verify
Audita la implementación contra las especificaciones, contraste WCAG y navegación por teclado.
PASO 6
/sdd-archive
Consolida el cambio y genera el reporte oficial de entrega (REPORTE_VERIFICACION_SDD.md).
✂️ CLASE 06 · 12 MIN
Clase 06: Gestión de Skills Agenticas & Poda Inteligente
🎯 Objetivo de Aprendizaje & ✂️ Badge 4: Skill Hunter
Importar la biblioteca oficial de manuales de ingeniería Agentic Awesome Skills y realizar una poda contextual para evitar la saturación de contexto y especializar al agente en frontend accesible.

6.1. ¿Qué son las Skills y el Peligro de la Contaminación de Contexto?
Las Skills son manuales de instrucciones y patrones de código que Antigravity consulta bajo demanda dentro de la carpeta .agents/skills/. Sin embargo, descargar cientos de habilidades de backend, mobile o bases de datos satura la ventana de contexto de la IA, consume tokens innecesarios y puede provocar que el asistente sugiera tecnologías prohibidas. Por eso, la poda inteligente evalúa los 6 documentos de docs/contexto/ para conservar solo lo relevante.

6.2. Prompt 5: Importación de la Biblioteca de Skills
PROMPT 5: IMPORTACIÓN DE SKILLS · CLASE 6
📋 Copiar Prompt
Antigravity, por favor importa la biblioteca de skills para nuestro proyecto:

1. Crea el directorio .agents/skills/ en la raíz del proyecto.
2. Ejecuta un git clone o descarga del repositorio https://github.com/sickn33/agentic-awesome-skills dentro de .agents/skills/.
3. Muéstrame la lista de skills descargadas al finalizar.
   6.3. Prompt 6: Poda Inteligente Basada en Master Context
   PROMPT 6: PODA INTELIGENTE DE SKILLS · CLASE 6
   📋 Copiar Prompt
   Antigravity, por favor realiza una auditoría y PODA INTELIGENTE de las skills en .agents/skills/ teniendo en cuenta TODO EL CONTEXTO de nuestro proyecto (nuestras 14 respuestas de la entrevista UX y los archivos en docs/contexto/):

4. EVALUACIÓN INTEGRAL DEL CONTEXTO:
   - Stack y Arquitectura (docs/contexto/arquitectura.md): Framework CSS activo (ej. TailwindCSS), HTML5 semántico, JavaScript Vanilla en cliente.
   - Sistema de Diseño y Accesibilidad (docs/contexto/convenciones.md): 5 estados de componentes, contraste WCAG AA, accesibilidad web (a11y-debugging).
   - Interactividad y Dinamismo (docs/contexto/arquitectura.md y decisiones.md): Navegación SPA, modales accesibles, menú responsive y feedback visual.
   - Flujo de Trabajo y Verificación (docs/contexto/flujo-de-trabajo.md): Ciclo SDD (explore, apply, verify), checklist de entrega.
   - Tecnologías Prohibidas (docs/contexto/decisiones.md y arquitectura.md): Lo que NO debe existir en el proyecto.

5. CLASIFICACIÓN DE SKILLS:
   - 🟢 CONSERVAR (Skills útiles para todo el ciclo del proyecto):
     - Maquetado y clases de utilidad del framework activo (ej: TailwindCSS).
     - Buenas prácticas de HTML5 semántico y diseño responsive.
     - Accesibilidad web y auditoría WCAG (a11y-debugging, web-design-guidelines).
     - Patrones de maquetado interactivo y dinámica de interfaz (DOM, modales, navegación SPA).
     - Metodología Spec-Driven Development (Gentle-AI SDD).
   - 🔴 ELIMINAR / PODAR (Skills incompatibles o superfluas):
     - Frameworks CSS no utilizados (ej: Bootstrap, Bulma, Sass si usamos Tailwind).
     - Frameworks JS pesados prohibidos (ej: React, Vue, Angular, Svelte, Next.js).
     - Tecnologías de Backend / Base de Datos no utilizadas (ej: Node.js/Express, Python, Docker, SQL, MongoDB, Go, Rust, Java).
     - Desarrollo móvil nativo o desktop no aplicable (ej: Flutter, React Native, Swift, Kotlin, Electron).

6. ACCIÓN AUTOMÁTICA:
   - Elimina automáticamente de .agents/skills/ todas las carpetas clasificadas como superfluas o incompatibles.
   - Muéstrame el reporte final: lista de skills conservadas con su justificación según nuestro contexto, y lista de skills podadas.
     🌉 CLASE 07 · 15 MIN · BOSS FIGHT
     Clase 07: El Gran Salto: De Wireframe en Figma a Software Vivo
     🎯 Objetivo de Aprendizaje & 🏆 Boss: Full-Stack UX Engineer
     Realizar la ingesta visual multimodal de las capturas de wireframes de Figma en Antigravity 2.0, verificar los 5 estados de componentes, auditar el contraste WCAG AA, superar el Desafío de la Mano Atada y presentar las bases del Desafío Integrador Final.

7.1. El Puente Figma ➔ Antigravity en 5 Pasos Fluidos
7.2. Prompt 7: Ingesta Multimodal Figma-to-Code
PROMPT 7: INGESTA MULTIMODAL FIGMA-TO-CODE · CLASE 7
📋 Copiar Prompt
Antigravity, he adjuntado la captura de pantalla de mi Wireframe de baja fidelidad diseñado en Figma para este proyecto.

Por favor realiza la ingesta visual y maquetación de software vivo siguiendo estos pasos:

1. ANÁLISIS VISUAL & LEYES DE GESTALT:
   - Identifica la estructura general (Navbar, Hero, Grid de Tarjetas, Modales, Formularios y Footer).
   - Analiza los agrupamientos por proximidad y semejanza, los niveles de jerarquía tipográfica y las zonas de llamado a la acción (CTA).
   - Respeta el flujo de navegación planteado en las pantallas.

2. APLICACIÓN DE MASTER CONTEXT & DESIGN SYSTEM:
   - Consultá nuestros documentos en docs/contexto/ (arquitectura, convenciones de color semántico, tipografías y glosario).
   - Aplicá el Framework CSS activo (ej: TailwindCSS) replicando con precisión la distribución espacial del wireframe de Figma.

3. ESTADOS DE INTERACCIÓN & ACCESIBILIDAD (A11y):
   - Implementá los 5 estados en cada componente interactivo: Default, Hover, Active, Focus (:focus visible con alto contraste para navegación por teclado) y Disabled.
   - Asegurá que el contraste de texto cumpla con WCAG AA (4.5:1).
   - Utilizá etiquetas semánticas (<header>, <nav>, <main>, <article>, <button>, <section>).

4. EJECUCIÓN TRANSPARENTE SDD (Gentle-AI):
   - Ejecutá en segundo plano el ciclo explore ➔ propose ➔ tasks ➔ apply ➔ verify (https://github.com/Gentleman-Programming/gentle-ai).
   - Entregá el código completo funcionando en index.html, style.css y app.js sin requerir instalaciones pesadas.
     7.3. Auditoría de Accesibilidad & El Desafío de la Mano Atada
     ⌨️ La Prueba de la Mano Atada
     Soltá el mouse por completo. Presioná TAB y Shift+TAB para recorrer todos los enlaces, botones y campos del formulario. Cada elemento enfocado debe encender un anillo brillante (:focus-visible) y ejecutarse con Enter o Espacio.
     🌓 Conmutación de Temas sin Ilegibilidad
     Hacé clic en el botón de cambio de tema (☀️/🌙). Verificá que los botones primarios no hereden texto gris o ilegible aplicando siempre la clase de seguridad .force-text-white.
     💻 Proyecto de Referencia: Rocket Pizza Lunar
     En la carpeta demo_app/ vas a encontrar la aplicación intergaláctica terminada que cumple el 100% de la rúbrica:

VISTA SPA
demo_app/index.html
Hero lunar, catálogo de pizzas por especie (astronautas, marcianos, cyborgs), modales de bio-compatibilidad y checkout en Créditos Lunares.
LÓGICA CLIENTE
demo_app/app.js & style.css
Filtros reactivos por especie, carruseles táctiles, persistencia en localStorage y conmutador Dark/Light mode con contraste WCAG AA.
REGLAS & CONTEXTO
.agents/rules/ & docs/contexto/
Reglas globales always-on y los 6 documentos sagrados con registro de decisiones ADR-001 a ADR-004.
🏆 Desafío Integrador Final en Equipos EFI (100 Puntos)
Cada equipo maquetará el flujo interactivo de la característica principal de su Proyecto de EFI (Asincrónico en el hogar):

🎯 Alcance del Seminario & Continuidad Académica
Para la entrega del seminario solo es necesario maquetar e implementar el flujo principal de la característica más importante de la app (2 a 3 vistas/secciones clave en SPA viva). Este prototipo servirá como base arquitectónica que los equipos continuarán completando para su presentación final al terminar la cursada.

💬 ¿Cómo se Origina este Producto en el Ciclo Agéntico?
Este producto final no se improvisa al final del curso: se define desde el primer día en la Entrevista UX de 14 Preguntas de la Clase 4. En esa instancia, cada respuesta de tu equipo alimenta el Master Context que Antigravity usará para maquetar la SPA respetando los límites técnicos, la accesibilidad y los 5 estados de componentes.

📦 Especificación Detallada del Producto Final (Blueprint Técnico & UX)
Para obtener los 100 puntos de la rúbrica, el producto final entregado por el equipo debe cumplir rigurosamente con las siguientes especificaciones técnicas y de diseño:

INTERFAZ & SPA

1. Estructura Visual del Prototipo Vivo
   • Header / Navbar fija: Logo de marca, enlaces de salto suave a secciones y conmutador Dark/Light mode.
   • Hero Section: Título con jerarquía Gestalt, subtítulo con propuesta de valor y CTA primario llamativo.
   • Catálogo Dinámico: Grilla responsive con 4 a 6 tarjetas estructuradas (imagen/icono, badge de categoría, precio/fecha y botón de acción interactivo).
   • Formulario Interactivo: Mínimo 3 campos validados en cliente que disparan un Modal Emergente Accesible con confirmación de éxito.
   INTERACCIÓN & ACCESIBILIDAD
2. Estándares de Usabilidad & WCAG AA
   • Los 5 Estados Obligatorios: Default, Hover, Active, Focus (anillo :focus-visible de alto contraste) y Disabled en todos los controles.
   • Prueba de la Mano Atada: Navegabilidad 100% operable por teclado con Tab, Enter y cierre con Esc.
   • Contraste WCAG AA: Ratio mínimo de 4.5:1 en ambos modos y clase .force-text-white en botones de acento.
   • Semántica HTML5: Uso riguroso de <header>, <nav>, <main>, <button> y atributos alt.
   ARQUITECTURA DE CÓDIGO
3. Stack & Archivos Entregables
   • index.html: Estructura semántica completa de la SPA en un solo archivo.
   • style.css: Variables de tokens de diseño y clases utilitarias de soporte.
   • app.js: Lógica de cambio de tema, filtros/interactividad, apertura/cierre accesible de modales y persistencia en localStorage.
   • Límites: Tailwind CSS vía CDN, sin backend ni frameworks pesados.
   GOBERNANZA AGÉNTICA
4. Master Context & Ciclo SDD
   • docs/contexto/: Los 6 documentos sagrados completos (arquitectura, convenciones, decisiones ADR, glosario, flujo y errores).
   • .agents/rules/antigravity_rules.md: Reglas always-on del proyecto.
   • Memoria Engram: Contexto persistido con mem_save.
   • REPORTE_VERIFICACION_SDD.md: Bitácora del ciclo adaptativo de desarrollo.
   📊 Rúbrica de Evaluación del Desafío Integrador (100 Puntos)
   Criterio de Evaluación Aspectos a Evaluar Puntaje
   Fidelidad a Figma & UI Traducción fiel de layout, jerarquía de Gestalt, responsive mobile-first y selector Dark/Light mode con contraste limpio. 25 pts
   Interactividad, 5 Estados & UI Feedback Navegación SPA fluida, modales accesibles, menú móvil responsive y presencia de los 5 estados en botones y controles. 25 pts
   Accesibilidad Web WCAG (POUR) Contraste mínimo 4.5:1 (AA), navegación 100% operable por teclado (:focus-visible, Tab/Enter) y semántica HTML5. 20 pts
   Master Context & Reglas Always-On Completitud de los 6 archivos en docs/contexto/, antigravity_rules.md activo y memoria Engram. 15 pts
   Proceso Agentico SDD & Reporte Ejecución del ciclo adaptativo y entrega del reporte oficial REPORTE_VERIFICACION_SDD.md. 15 pts
   📦 Entregables del Equipo
5. Enlace o capturas del Wireframe en Figma.
6. Archivo ZIP o repositorio con index.html, style.css y app.js.
7. Carpeta docs/contexto/ completa.
8. Reporte REPORTE_VERIFICACION_SDD.md.
9. Video demo corto (2 a 3 minutos) demostrando navegación SPA, modal, prueba por teclado y cambio de tema.

🎓 Titulación de Honor
Full-Stack Agentic UX/UI Engineer

Interfaz de Usuario - Desarrollo de Software - iTec 2026
