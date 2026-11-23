# ADR 0012 — Lecciones directas sin bloques de presentación

- Estado: aceptada
- Fecha: 2026-11-23

## Contexto

Las lecciones de R empiezan con el `h1` y continúan directamente con apartados `##` que explican el contenido. Las cinco lecciones publicadas de Python añadían antes del texto una tabla de metadatos, un párrafo «Versión objetivo del curso», un apartado «Qué aprenderás», otro «Contexto y motivación» y un encabezado contenedor «Explicación conceptual». Esos bloques repetían información ya presente en el frontmatter, en la documentación interna o en los propios apartados, y rompían la coherencia con el curso de R. El usuario pidió eliminarlos y fijar el nuevo formato en las skills.

## Decisión

1. El `h1` de cada lección va seguido directamente del primer `##` de contenido. No se publican la tabla `| Dato | Valor |`, la línea «Versión objetivo del curso», «Qué aprenderás», «Contexto y motivación» ni el título «Explicación conceptual».
2. Los antiguos subapartados `###` bajo «Explicación conceptual» pasan a ser apartados `##`, con títulos descriptivos. Así se mantiene la jerarquía de encabezados sin saltos y se iguala la forma de las lecciones de R.
3. La información eliminada no se traslada a un nuevo bloque: las definiciones, los ejemplos y las motivaciones útiles ya están integradas en los apartados de concepto o en «Ejemplo guiado». La versión objetivo sigue documentada en `PROGRESO.md`, `README.md` y en la comprobación interna de la skill, pero no en el cuerpo de la lección.
4. La skill de autoría `SKILL_DESARROLLO_LECCIONES_PYTHON.md` pasa a la versión 1.3 y su plantilla empieza con «5.1 Inicio directo». La convención de nombres de ADR 0010 se mantiene.

## Consecuencias

- Las lecciones de Python son más cortas, empiezan a explicar desde la primera línea y tienen la misma forma que las de R.
- Los bloques eliminados no contenían ejercicios ni soluciones; la autoevaluación, el mini-proyecto único y las soluciones ocultas de ADR 0007 y ADR 0008 permanecen intactos.
- No se ha añadido contenido nuevo: solo se han suprimido repeticiones y se han promovido encabezados ya existentes.
- Las referencias internas a códigos de unidad detectadas durante la limpieza («U2», «U4», «U6») se han sustituido por expresiones sin códigos, coherentes con ADR 0010.

## Alternativas consideradas

- **Conservar los bloques pero plegarlos con `<details>`:** descartado porque seguiría mostrando una barrera antes del contenido y ocultaría información que no es imprescindible.
- **Quitar solo la tabla de metadatos:** descartado porque el usuario pidió también eliminar los otros cuatro elementos y la duplicación continuaría.
- **Convertir «Qué aprenderás» en un resumen al final:** descartado porque «Resumen» ya cumple esa función y ADR 0008 fija un cierre con mini-proyecto.

## Referencias

`AGENT.md` §9–10, `docs/content-conventions.md`, `docs/pedagogical-methodology.md`, ADR 0007, ADR 0008 y ADR 0010.
