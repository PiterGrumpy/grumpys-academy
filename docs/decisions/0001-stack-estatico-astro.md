# ADR 0001 — Stack estático basado en Astro 5

- **Estado:** aceptada
- **Fecha:** 2026-11-20

## Contexto

Se necesita una web estática centrada en contenido educativo, con rendimiento, SEO, accesibilidad y facilidad para añadir cursos en el futuro. El entorno dispone de Node 20.20.0 y npm 10.8.2.

## Decisión

Usar Astro 5 con salida `static`, sin adapters ni frameworks de interfaz. Mantener JavaScript de cliente al mínimo y usar colecciones de contenido con Markdown/MDX.

## Alternativas consideradas

- **Vite + Markdown propio:** requiere implementar rutas, esquemas y consultas manualmente.
- **SvelteKit en modo estático:** añade un modelo reactivo innecesario para este proyecto.
- **Astro 6/7:** incompatibles con Node 20 del entorno.

## Consecuencias

Positivas: HTML estático, SEO básico resuelto, contenido validable en build, baja complejidad y claro punto de extensión para futuras rutas.

Negativas: la versión queda fijada a Astro 5 mientras no se actualice Node; algunas funcionalidades futuras (por ejemplo, soluciones interactivas avanzadas) requerirán JavaScript explícito o componentes adicionales.

## Revisión

Revisar al migrar el entorno a Node 22 o cuando aparezca un requisito que Astro 5 no pueda cubrir sin soluciones artificiales.
