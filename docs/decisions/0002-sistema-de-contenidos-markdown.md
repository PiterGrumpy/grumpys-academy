# ADR 0002 — Contenido en Markdown con colección mínima

- **Estado:** aceptada
- **Fecha:** 2026-11-20

## Contexto

El contenido educativo debe estar separado de los componentes visuales, ser fácil de escribir y poder crecer sin rehacer la aplicación. Además, la fase actual prohíbe crear cursos reales.

## Decisión

Declarar en `src/content.config.ts` una única colección `courses` con loader `glob` sobre `src/content/courses` y un esquema Zod mínimo (`title`, `description`). Mantener el directorio vacío con un `.gitkeep`. Las plantillas y convenciones viven en `docs/`, fuera del árbol de contenido cargado.

## Alternativas consideradas

- Crear colecciones para cursos, módulos, lecciones y ejercicios desde ahora: añade esquemas y rutas sin contenido que los justifique.
- Guardar contenido en JSON dentro de los componentes: acopla datos e interfaz.
- Usar MDX desde el inicio: sin contenido real, no hay una necesidad de componentes interactivos que lo justifique.

## Consecuencias

Positivas: base técnica verificable, validación de metadatos desde el primer archivo real y cero contenido inventado.

Negativas: cuando se solicite el primer curso habrá que ampliar el esquema y crear las rutas correspondientes; ese trabajo está documentado en `docs/architecture.md`.

## Revisión

Revisar al incorporar el primer curso o cuando se necesite MDX para un componente pedagógico concreto.
