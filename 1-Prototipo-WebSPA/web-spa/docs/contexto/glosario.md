# Glosario & Rotulado — Serrano Trabaja (Web SPA)

> **Lectura rápida**: < 2 minutos · **Fuente**: Card Sorting abierto con 5 vecinos de Serrano (Acuerdo 5/5)

---

## 1. Tabla de Rotulado: Lenguaje Natural vs. Dev Jargon

Las palabras fueron elegidas por los propios usuarios en los talleres. **Se prohíbe renombrarlas o usar sinónimos técnicos.**

| ❌ Dev Jargon / Término Prohibido | ✅ Labeling Obligatorio en la UI | Justificación de UX (Why) |
|---|---|---|
| Publicar / Crear publicación | **Pedir una changa** | Los trabajadores creían que "publicar" era ofrecerse ellos mismos. |
| Reputación / Rating / Scoring | **Mis estrellas** | En los tests preguntaron: *"¿Reputación y reseñas no es lo mismo?"* |
| Avales / Endorsements | **Vecinos que lo recomiendan** | El aval suena bancario o legal; la recomendación vecinal es cotidiana. |
| Verificado / Badge oficial | **Teléfono confirmado** | Aclara exactamente qué se validó (el SMS) sin promesas falsas. |
| Denunciar perfil / Report | **Avisar de un problema** | Al escuchar "denunciar", los vecinos dijeron: *"¿Esto va a la comisaría?"* |
| Suscripción / Plan Premium | **Destacado** (marca) · **Aparecer primero** (botón) | La palabra "suscripción" ocultaba el beneficio real. |
| Notificaciones / Push Alerts | **Avisame si hay changas nuevas** | Explica claramente el valor de la notificación sin tecnicismos. |
| Feed / Catálogo / Directorio | **Buscar** | Verbo de acción simple y directo que obtuvo acuerdo 5/5. |
| Historial / Orders / Logs | **Mis trabajos** | Lenguaje propio de quien realiza o encarga tareas. |
| Empleador vs. Trabajador | **"Busco a alguien" / "Busco changas"** | Elimina etiquetas rígidas para usuarios que desempeñan ambos roles. |
| Reviews / Testimonios | **Lo que dicen los vecinos** (o Opiniones) | Refuerza la confianza basada en la cercanía comunitaria. |

---

## 2. Términos Nucleares del Dominio

- **Changa**: Tarea puntual, informal o arreglo acordado entre vecinos (ej. cortar pasto, arreglar un enchufe, pintar un living).
- **Trabajador del pueblo**: Vecino de Serrano que ofrece su oficio con ficha pública y teléfono confirmado.
- **Ficha del trabajador**: Pantalla de detalle con estrellas, cantidad de trabajos realizados, lista de opiniones y quiénes lo recomiendan.
- **Disponible hoy**: Estado activo del trabajador que indica disponibilidad inmediata (círculo verde + check + texto).
- **Ocupado**: Estado del trabajador cuando no puede tomar nuevos compromisos (círculo gris + texto).
- **Acordar seña o pago**: Flujo para registrar el monto acordado (efectivo libre de comisión, transferencia o Mercado Pago).
- **Borrador de pedido**: Almacenamiento local del formulario para evitar pérdidas si se interrumpe la conexión.

---

## 3. Reglas de Negocio Nucleares

1. **Un solo perfil por persona**: La misma cuenta permite buscar servicios o postularse a changas.
2. **La confianza es previa al contacto**: La ficha muestra teléfono confirmado, estrellas y opiniones **antes** de abrir el botón "Contactar".
3. **El efectivo es gratuito**: Serrano Trabaja no cobra comisión sobre pagos acordados en mano; solo monetiza pagos con Mercado Pago y suscripciones de visibilidad ("Aparecer primero").
4. **Los errores nunca destruyen datos**: Si falla una validación o se corta la señal, el texto ingresado jamás se borra del formulario.
5. **Avisar de un problema siempre a la vista**: Cada ficha cuenta con un enlace accesible para alertar irregularidades con moderación humana.
