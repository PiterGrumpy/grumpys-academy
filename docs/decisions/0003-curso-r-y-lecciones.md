# ADR 0003 — Curso de R, colección de lecciones y rutas públicas

- **Estado:** aceptada
- **Fecha:** 2026-11-20

## Contexto

El usuario entregó tres PDF sobre R y pidió expresamente tres lecciones basadas en ellos y mejoradas. Hasta ese momento la colección `courses` estaba vacía y no existían rutas de contenido. Para que las lecciones sean útiles deben poder consultarse en la web, y su estructura debe permitir añadir más lecciones sin rehacer el sistema.

## Decisión

- Mantener `courses` para los datos del curso y añadir una colección `lessons` con `title`, `description`, `course` e `order`.
- Crear las entradas `r.md` y tres lecciones en `src/content/`. Los PDF originales permanecen en `src/cursos/R/` como material de referencia, fuera del build.
- Generar tres rutas con `getCollection()` y `getStaticPaths()`: índice de cursos, página de curso y página de lección. La navegación entre lecciones se calcula desde `order`.
- Resolver ejercicios, avisos, código y soluciones ocultas con Markdown y `<details>` nativo, sin componentes nuevos ni JavaScript.
- Desactivar el resaltado de Shiki para que los bloques de código usen los tokens de `global.css` y no estilos inline.

## Alternativas consideradas

- Guardar las lecciones dentro de la entrada del curso: dificulta la navegación y obliga a parsear Markdown manualmente.
- Crear colecciones de módulos y ejercicios desde ahora: añade abstracciones sin contenido que las justifique.
- Mantener solo los archivos Markdown sin rutas: las lecciones no serían consultables.
- Añadir un plugin de MDX o un componente de acordeón: dependencia y JavaScript innecesarios para `<details>`.

## Consecuencias

Positivas: contenido real y verificable, URLs estables, navegación derivada de metadatos, cero dependencias nuevas y coherencia visual con el resto del sitio.

Negativas: el esquema de `lessons` tendrá que ampliarse cuando aparezcan módulos o tabla de contenidos; los PDF fuente conviven con el contenido publicado en `src/`, aunque no se procesan.

## Revisión

Revisar al añadir módulos, al incorporar un segundo curso o cuando el resaltado de código suponga una mejora pedagógica real.
