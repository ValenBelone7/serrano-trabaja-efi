# Flujo de Trabajo — Serrano Trabaja (Web SPA)

> **Lectura rápida**: < 2 minutos · **Metodología**: DCU (Clase 6) + Spec-Driven Development (SDD)

---

## 1. Integración DCU + SDD Adaptativo

El proyecto combina el bucle de **Diseño Centrado en el Usuario** (*entender → definir → diseñar → evaluar → iterar*) con dos velocidades de desarrollo técnico:

```
[DCU: Insumos de usuarios] ➔ [Fast-Path (1 archivo)] OR [Ciclo SDD (>2 archivos / UI crítica)]
```

### Fast-Path (Fixes menores y 1 solo archivo)
Aplica para ajustes puntuales de texto, correcciones de CSS o refactors menores:
1. **Identificar**: Localizar el problema en código o reporte visual.
2. **Aplicar**: Modificar el archivo respectivo sin alterar contratos de componentes.
3. **Verificar**: Probar visualmente contraste, teclado y consola limpia.
4. **Registrar**: Commit convencional (`fix(css): corregir contraste...`).

### Ciclo SDD Completo (Tareas complejas o nuevos módulos)
Aplica para nuevas vistas, formularios, o cambios de interacción:
1. **Explore**: Consultar `docs/insumos/` y wireframes de Figma (`docs/insumos/imagenes/wireframes-figma/`).
2. **Propose**: Redactar propuesta técnica explicando el *Why* y el *How*.
3. **Tasks**: Descomponer la implementación en pasos atómicos y verificables.
4. **Apply**: Implementar respetando HTML5 semántico, Tailwind y los 5 estados.
5. **Verify**: Ejecutar el Checklist DoD (contraste, teclado, responsive, persistencia).

---

## 2. Checklist de Terminado (Definition of Done — DoD)

Un entregable está **100% LISTO (DONE)** cuando supera cada verificación:

- [ ] **Fidelidad Figma**: Cumple fielmente la disposición y componentes del wireframe de referencia.
- [ ] **Labeling Card Sorting**: Respeta estrictamente las etiquetas obligatorias (sin dev jargon).
- [ ] **Accesibilidad Táctil**: Todas las áreas interactivas miden **mínimo 56px**.
- [ ] **Tipografía Inter**: Tamaños restringidos a 32, 24, 18 y 14px (texto base en 18px).
- [ ] **Contraste WCAG AA**: Mínimo 4.5:1 verificado en modo claro y modo oscuro. Variantes oscuras aplicadas a textos verdes, naranjas y celestes.
- [ ] **5 Estados de Interacción**: Botones, chips e inputs exhiben Default, Hover, Active (hundimiento 2px), Focus (:focus-visible) y Disabled.
- [ ] **Prueba de la Mano Atada (Teclado)**:
  - 100% navegable con `Tab`, `Shift+Tab`, `Enter` y `Space`.
  - El modal atrapa el foco (*focus trap*), cierra con `Escape` y devuelve el foco al botón que lo abrió.
  - Al cambiar de vista hash, el foco va al `<h1>` y la pantalla resetea a `scrollTop = 0`.
- [ ] **Persistencia Local**: Los pedidos se guardan en `localStorage` y se recuperan tras recargar. Borrador continuo operativo.
- [ ] **Responsive sin Scroll**: Sin desborde horizontal en 360px (móvil) y 3 columnas ordenadas en 1280px (desktop).
- [ ] **Código Limpio**: Sin `console.log`, sin frameworks prohibidos, sin estilos inline y sin emojis.
