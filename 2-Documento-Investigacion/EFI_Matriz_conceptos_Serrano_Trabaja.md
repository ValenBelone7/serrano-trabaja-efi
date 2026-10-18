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
