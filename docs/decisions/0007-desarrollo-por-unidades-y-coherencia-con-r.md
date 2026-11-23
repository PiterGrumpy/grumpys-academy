# ADR 0007 — Desarrollo del curso de Python por unidades y coherencia con el curso de R

- **Estado:** aceptada
- **Fecha:** 2026-11-23
- **Modifica parcialmente:** ADR 0006

## Contexto

El usuario pidió primero desarrollar el curso de Python completo y después precisó el ritmo: «una unidad a la vez y avísame cuando termines». También pidió unificar criterios con el curso de R para que la web tenga coherencia interna y autorizó modificar la skill de autoría del curso.

El índice maestro contiene 170 lecciones en 26 unidades. La skill original exigía esperar evidencia del alumno antes de redactar la siguiente lección y no incluir soluciones completas. Esa regla tiene sentido en la modalidad iterativa, pero impide cumplir un encargo explícito de desarrollo completo. Además, las lecciones de R ya usan soluciones ocultas con `<details>` y los subtítulos «Resolución», «Por qué funciona», «Conceptos utilizados» y «Errores habituales», mientras que la primera lección de Python no las tenía.

## Decisión

- Desarrollar el curso **por unidades completas**, una unidad por respuesta, avisando al terminar y esperando una nueva señal antes de la siguiente. Dentro de la unidad se respeta el orden del índice.
- Sustituir la entrega intermedia por **autoevaluación con soluciones ocultas** cuando se trabaje en este modo. La modalidad iterativa original sigue disponible si el alumno la solicita.
- Unificar el formato de ejercicios de Python con el de R: encabezados `## Ejercicios` y `## Resumen`, y cada ejercicio con `<details>`, `<summary>Ver la solución del ejercicio N</summary>` y los cuatro subtítulos que ya usa R. El estilo existente en `src/styles/global.css` cubre el control nativo, sin componentes ni JavaScript nuevos.
- Modificar `src/cursos/Python/SKILL_DESARROLLO_LECCIONES_PYTHON.md` para reflejar ambos modos, el formato obligatorio de soluciones y la comprobación de coherencia en el checklist.
- Mantener los identificadores `U?—L?.?` en títulos, nombres de archivo y `PROGRESO.md`, tal como exige el índice maestro. Esa diferencia respecto de R está documentada y es deliberada.

## Alternativas consideradas

- Publicar las 169 lecciones restantes en una sola respuesta: contradice el acuerdo de avisar por unidad y no permite verificar código ni salidas con el cuidado que exige la skill.
- Seguir esperando evidencia del alumno: el usuario pidió expresamente avanzar sin entregas intermedias.
- Mostrar las soluciones abiertas: rompería la práctica deliberada y la coherencia con R, donde van plegadas.
- Crear un componente Astro para soluciones: duplicaría el estilo nativo ya existente y añadiría complejidad sin beneficio.

## Consecuencias

Positivas: ritmo de entrega previsible, mismos controles de interacción en ambos cursos, alumno capaz de comprobar su trabajo sin esperar revisión y sin servicios externos.

Negativas: las soluciones reducen el espacio para una revisión personalizada del razonamiento; el registro `PROGRESO.md` debe actualizarse al cerrar cada bloque; la skill entregada por el usuario deja de ser literalmente la versión 1.0.

## Revisión

Revisar al terminar el bloque inicial de Python y antes del siguiente, para confirmar que el formato unificado funciona igual en ambos cursos y que no aparecen diferencias de estilo o navegación. La [ADR 0010](0010-nombres-de-lecciones-sin-codigos.md) ajustó después la convención de nombres públicos; los códigos `U`/`L` mencionados aquí son internos del índice maestro.
