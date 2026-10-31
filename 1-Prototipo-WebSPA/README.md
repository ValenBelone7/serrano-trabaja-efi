# 1 · Prototipo / Web SPA — Serrano Trabaja

| | |
|---|---|
| **Web SPA publicada** | [https://valenbelone7.github.io/serrano-trabaja-efi/](https://valenbelone7.github.io/serrano-trabaja-efi/) |
| **Wireframe low-fi en Figma** | [Abrir el archivo](https://www.figma.com/design/uOYgW0ScLaP8cp4Wmuth8n/Serrano-Trabaja---Prototipo-EFI?node-id=0-1&t=colHn7zReRDBS3I3-1) |
| **Prototipo navegable en Figma** | [Abrir el modo presentación](https://www.figma.com/proto/uOYgW0ScLaP8cp4Wmuth8n/Serrano-Trabaja---Prototipo-EFI?node-id=3-3&p=f&t=UXTqK97816BF5O1T-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A3) |

## Contenido

| Carpeta / archivo | Qué es |
|---|---|
| [`web-spa/`](web-spa/) | **La Web SPA** (HTML5 + Tailwind + JavaScript Vanilla), construida con Antigravity en el Seminario IA. Es el workspace que se abre en Antigravity. |
| [`web-spa/docs/insumos/`](web-spa/docs/insumos/) | Lo que le damos al agente: [documento de investigación](web-spa/docs/insumos/00-documento-investigacion.md) (para armar el contexto), [respuestas a la entrevista de 14 preguntas](web-spa/docs/insumos/01-respuestas-entrevista-14P.md), [especificación completa](web-spa/docs/insumos/02-especificacion-serrano-trabaja.md), [alcance y checklist](web-spa/docs/insumos/03-alcance-y-checklist.md), sitemap, user flow y las 21 pantallas del wireframe de Figma. |
| `web-spa/docs/contexto/` · `web-spa/.agents/` · `REPORTE_VERIFICACION_SDD.md` | Los genera Antigravity durante el seminario. |
| [`PASO_A_PASO_SEMINARIO.md`](PASO_A_PASO_SEMINARIO.md) | Qué hacer en cada clase del seminario con nuestros insumos. |
| [Wireframe de Figma (Reto 7)](../2-Documento-Investigacion/Anexos/Reto7_Wireframes_Figma/) | Las 21 pantallas del flujo completo en baja fidelidad, navegables en Figma. Muestra las secciones que la SPA todavía no tiene en código (Ingreso, Pagos, Mensajes, Mi perfil, Opinión). |

## Probar la Web SPA en la compu

```bash
cd web-spa
python3 -m http.server 8000   # abrir http://localhost:8000
```
