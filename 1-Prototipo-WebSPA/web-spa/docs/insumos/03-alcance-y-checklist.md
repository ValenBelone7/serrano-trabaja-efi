# Alcance y checklist — Web SPA de Serrano Trabaja

## Etapa 1 · Entrega del Seminario IA (Desafío Integrador, 100 pts)

**Característica principal:** encontrar a alguien de confianza y pedir una changa.

| Vista | Ruta | Wireframe de Figma | Requisito de la rúbrica que cubre |
|---|---|---|---|
| Buscar (inicio) | `#buscar` | `10-Buscar` | Hero + CTA, catálogo de 6 tarjetas con filtros |
| Ficha del trabajador | `#trabajador/:id` | `11-Ficha-trabajador` | Gestalt, jerarquía, confianza |
| Pedir una changa | `#pedir` | `21-Pedir-changa` | Formulario de 4 campos validados + modal accesible |
| Mis trabajos | `#mis-trabajos` | `20-Mis-trabajos` | Persistencia en localStorage |
| Pagos · Mensajes · Mi perfil | `#pagos` … | — | Aviso "Esta sección se suma en la versión final de la EFI" |

Además: navbar fija / barra inferior de 5 pestañas y botón de modo claro/oscuro.

## Etapa 2 · Versión final de la EFI (después del seminario)

Sobre la misma base (mismo stack, mismo Master Context, ciclo SDD), sumar el resto de las pantallas de `02-especificacion-serrano-trabaja.md` §6:

1. **Ingreso:** crear cuenta / entrar con celular, confirmar teléfono por SMS (código `0000` = error) y "¿Buscás a alguien o buscás changas?".
2. **Buscar › Changas** (vista para quien busca trabajo), "Disponible hoy", "Avisame si hay changas nuevas", detalle de una changa pedida y "Vecinos que lo recomiendan".
3. **Mis trabajos:** detalle con los 4 pasos, Cancelar (solo si no empezó, con confirmación), Marcar como terminado → opinión con estrellas → "Trabajo finalizado"; estado "Sin señal".
4. **Pagos:** Acordar seña o pago (efectivo / Mercado Pago / transferencia; monto `999` = rechazo que no borra el acuerdo).
5. **Mensajes:** conversaciones con mensaje ya armado y respuestas rápidas; avisos de changas.
6. **Mi perfil** y **Más:** editar, Mis estrellas, Vecinos que me recomiendan, Confirmar mi teléfono, Aparecer primero, Cursos, Trabajadores sugeridos, Avisar de un problema, Salir.

Cada sección nueva es un cambio de más de 2 archivos, así que va con un ciclo SDD completo y su ADR en `decisiones.md`.

## Checklist de verificación (usar en `sdd-verify`)

### Flujo
- [ ] Buscar: el hero tiene el CTA "Pedir una changa"; los chips de oficio y de zona filtran el catálogo; el contador dice cuántas personas hay.
- [ ] Ver ficha → vuelve con "← Volver" y con el botón atrás del navegador.
- [ ] Pedir una changa: el botón está deshabilitado con "Falta: …" hasta completar; al enviar se abre el modal de éxito.
- [ ] El pedido aparece en Mis trabajos y sigue ahí después de recargar.
- [ ] Sin red (DevTools › Offline), el modal dice "Sin señal…"; al volver la red se publica.
- [ ] El borrador del formulario se recupera después de recargar.

### Prueba de la mano atada
- [ ] Todo se recorre con Tab / Shift+Tab y se activa con Enter / Espacio, con el foco siempre visible.
- [ ] El modal atrapa el foco, se cierra con Escape, con Cerrar y con el fondo; al cerrar, el foco vuelve al botón que lo abrió.
- [ ] Al cambiar de vista, el foco va al `h1`.

### Contraste y color
- [ ] ≥ 4.5:1 en todo el texto, en modo claro y en modo oscuro (Lighthouse › Accesibilidad ≥ 95 en los dos).
- [ ] Los botones con fondo sólido tienen texto blanco en los dos modos (`.force-text-white`).
- [ ] En escala de grises (DevTools › Rendering › Achromatopsia) se entiende todo: Disponible / Ocupado, chips elegidos, errores.
- [ ] El tema elegido sobrevive a la recarga.

### Tamaños y responsive
- [ ] Todo lo tocable ≥ 56px; solo los tamaños de letra 32/24/18/14.
- [ ] 360px: 1 columna, barra inferior, sin scroll horizontal. 768px: 2 columnas. 1280px: 3 columnas y navbar superior.

### Contenido
- [ ] Etiquetas del Card Sorting textuales; ninguna etiqueta prohibida (ver P3).
- [ ] Sin emojis, sin fotos de stock, sin `style="…"`, sin `<select>`.

### Gobernanza (rúbrica)
- [ ] `.agents/rules/antigravity_rules.md` con `trigger: always_on`.
- [ ] `docs/contexto/` con los 6 documentos y `decisiones.md` con ADR fechados.
- [ ] `REPORTE_VERIFICACION_SDD.md`.
- [ ] Video demo de 2 a 3 minutos: navegación, modal, teclado y cambio de tema.
