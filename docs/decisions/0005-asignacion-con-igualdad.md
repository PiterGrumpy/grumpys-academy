# ADR 0005 — Asignación con `=` en el curso de R

- **Estado:** aceptada
- **Fecha:** 2026-11-20

## Contexto

Las lecciones usaban `<-` para todas las asignaciones y explicaban que `=` era una alternativa menos recomendable. El usuario señaló que `=` resulta más cómodo para la mayoría de los estudiantes, especialmente quienes llegan de Python, JavaScript o C, donde el signo igual es la forma habitual de asignar.

En R, `x = 10` y `x <- 10` son equivalentes en una asignación simple. Existen dos matices reales: dentro de una llamada a función `=` nombra argumentos (`print(x = 'Hola')`), y `==` es el operador de comparación. Además, `<-` es la convención mayoritaria en la documentación y guías de estilo de la comunidad.

## Decisión

- Usar `=` en todos los ejemplos y soluciones de las tres lecciones del curso.
- Explicar una sola vez, en la lección 1, que `<-` es equivalente y tradicional, y que conviene reconocerlo al leer documentación de R.
- Añadir una advertencia junto a esa explicación: dentro de los paréntesis de una función `=` nombra un argumento, y para comparar se usa `==`.
- Revisar las advertencias existentes sobre `=` frente a `==` para que sigan siendo correctas con la nueva convención.
- Documentar la convención en `AGENT.md` y `docs/content-conventions.md`.

## Alternativas consideradas

- Mantener `<-` como forma principal: alineado con la comunidad, pero añade fricción innecesaria en las primeras lecciones.
- Usar `<-` solo en ejemplos avanzados: mezcla criterios y obliga a explicar el cambio más adelante.
- No mencionar `<-`: deja al estudiante sin herramientas para leer código real de R.
- Enseñar ambos de forma intercambiable sin regla clara: genera inconsistencia en los ejemplos.

## Consecuencias

Positivas: los ejemplos resultan más familiares y consistentes; se mantiene una nota breve sobre `<-` para leer documentación; se refuerza explícitamente la diferencia entre asignar, nombrar argumentos y comparar.

Negativas: el curso se aparta de la convención habitual de la comunidad R; quienes consulten documentación verán otro operador y necesitarán la nota de la lección 1. Las funciones de reemplazo (`names(x) = y`) funcionan, pero son menos habituales en ejemplos de R con `<-`.

## Revisión

Revisar si se añaden módulos avanzados con código de la comunidad o si los estudiantes muestran confusión entre argumentos nombrados y asignación.
