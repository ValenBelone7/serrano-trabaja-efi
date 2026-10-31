# Reto 7 — Wireframe low-fi + prototipo en Figma

**Link al archivo de Figma:** [Serrano Trabaja — Prototipo EFI](https://www.figma.com/design/uOYgW0ScLaP8cp4Wmuth8n/Serrano-Trabaja---Prototipo-EFI?node-id=0-1&t=colHn7zReRDBS3I3-1)
**Link al modo presentación (prototipo navegable):** [Abrir el prototipo](https://www.figma.com/proto/uOYgW0ScLaP8cp4Wmuth8n/Serrano-Trabaja---Prototipo-EFI?node-id=31-10401&p=f&t=I8VNkGmGMSJHftfB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=31%3A10401&show-proto-sidebar=1)

## v2 — actual ([`v2-actual/`](v2-actual/))

Wireframe de baja fidelidad (grises, sin colores ni imágenes reales) con **21 pantallas**, actualizado con los resultados del Card Sorting:

- Barra inferior de 5 secciones: Buscar · Mis trabajos · Pagos · Mensajes · Mi perfil.
- Ingreso solo con celular + código SMS (sin Google ni contraseña) y la pregunta "¿Buscás a alguien o buscás changas?".
- Etiquetas del Card Sorting ("Pedir una changa", "Avisar de un problema", "Mis estrellas", "Vecinos que me recomiendan"…).
- Estados de error y alternativos: código incorrecto (`02-Error`), sin señal (`22-Sin-señal`), pago rechazado (`31-Rechazado`), cancelación con confirmación (`24-Cancelar`).

| Sección | Frames |
|---|---|
| Ingreso | 01-Crear-cuenta · 01-Entrar · 02-Confirmar-telefono · 02-Error · 03-Que-busco |
| Buscar | 10-Buscar · 11-Ficha-trabajador · 12-Changa-pedida |
| Mis trabajos | 20-Mis-trabajos · 21-Pedir-changa · 22-Sin-señal · 23-Trabajo · 24-Cancelar · 25-Opinion |
| Pagos | 30-Pagos · 31-Acordar-pago · 31-Rechazado |
| Mensajes | 40-Mensajes · 41-Conversacion |
| Mi perfil | 50-Mi-perfil · 51-Editar-perfil |

**Interacciones** (Clase 8): *On click → Navigate to* entre las pantallas del flujo; "← Volver" con la acción **Back**; cada pestaña de la barra inferior lleva a su pantalla.

## v1 — antes del Card Sorting ([`v1-antes-del-card-sorting/`](v1-antes-del-card-sorting/))

Primera versión: feed único, "Soy Empleador / Soy Trabajador", login con Google opcional, "Publicar" y "Notificaciones". Se conserva para mostrar la **iteración** del DCU: qué cambió y por qué (ver "Lo que cambió gracias a los usuarios" en el documento de investigación).
