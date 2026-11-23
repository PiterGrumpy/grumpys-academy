# ADR 0009 — Recursos visuales con MCP y salida SVG local

- Estado: aceptada
- Fecha: 2026-11-23

## Contexto

El proyecto quiere hacer más vistosas y amenas las lecciones ya publicadas sin convertir la web en una galería decorativa. El usuario pidió usar los MCP disponibles —Flowsimp y Comfy Cloud— con herramientas gratuitas, y dejar constancia en skills para no repetir instrucciones en futuras unidades.

Flowsimp es público y gratuito: crea diagramas a partir de Mermaid y devuelve enlaces de visor y editor, pero no entrega un archivo SVG para el build y no guarda el diagrama en una base de datos. Comfy Cloud permite descubrir catálogos y plantillas sin coste, pero cualquier generación consume créditos y exige suscripción y confirmación; sus plantillas vectoriales son de API de pago. El proyecto, además, solo sirve imágenes locales desde `public/images/`.

## Decisión

1. Usar **Flowsimp** para diseñar y validar esquemas de procesos, árboles de carpetas y comparaciones cuando un diagrama aclare una idea real de una lección. Se invoca con `tools.flowsimp.create_flowchart` desde Code Mode.
2. Convertir cada esquema aprobado en un **SVG local** en `public/images/`, usando los tokens de `src/styles/global.css` y las mismas convenciones que las ilustraciones ya existentes de R. El enlace de Flowsimp es una referencia de trabajo; el sitio no depende de él.
3. Usar **Comfy Cloud solo en modo discovery gratuito** (`get_catalog_overview`, `search_templates`, `search_models`, `search_nodes`, `estimate_credits`) para valorar si una imagen aporta algo que un SVG no resuelve. No generar con Comfy sin petición explícita y aprobación de gasto.
4. Codificar este flujo en una skill versionada, `recursos-visuales-mcp`, y reflejarlo en `docs/visual-design.md`, `AGENT.md` y `MEMORY.md`.
5. Mantener los criterios de accesibilidad y pedagogía: texto alternativo descriptivo, explicación escrita primero, una sola idea por imagen y coherencia entre los cursos de R y Python.

## Consecuencias

- Las lecciones ganan esquemas visuales sin añadir dependencias, JavaScript de cliente ni servicios externos al build.
- El coste se mantiene en cero: Flowsimp no requiere cuenta y Comfy solo se consulta sin generar.
- Los SVG son editables, ligeros y responden bien a tema claro y oscuro si se usan colores de la paleta con contraste suficiente.
- Si en el futuro se autoriza una generación de Comfy, hay que seguir el flujo completo de presupuesto, consentimiento, `prompt_id`, comprobación de estado y descarga antes de afirmar que el archivo existe.
- Cada imagen nueva exige revisar su texto alternativo y ejecutar las cuatro validaciones habituales.

## Alternativas consideradas

- **Insertar el enlace de Flowsimp directamente en la lección:** descartado porque introduces una dependencia externa en una web estática y el visor no se beneficia de los tokens del sitio.
- **Generar ilustraciones con Comfy Cloud desde el principio:** descartado por gasto de créditos y porque las plantillas vectoriales disponibles son de pago.
- **No añadir ningún recurso visual:** descartado porque el usuario pidió expresamente aprovechar los MCP para mejorar la presentación.
- **Dibujar SVG sin pasar por Flowsimp:** se usa como paso final de exportación, pero se conserva Flowsimp como herramienta de diseño gratuita y validación de la estructura del esquema.

## Referencias

`AGENT.md` §8 y §11, `docs/visual-design.md`, ADR 0004 y ADR 0008.
