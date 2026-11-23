# ADR 0010 — Nombres de lecciones de Python sin códigos de unidad

- Estado: aceptada
- Fecha: 2026-11-23

## Contexto

El curso de R publica lecciones con títulos descriptivos y rutas derivadas del título: `Introducción a R y RStudio`, `Vectores y matrices`, `Dataframes y listas`. El curso de Python, en cambio, publicó sus cinco primeras lecciones con prefijos `U0-L0.1` a `U0-L0.5` en el título, en el nombre del archivo y en el texto visible. Esos códigos vienen del índice maestro de 26 unidades y 170 lecciones, pero no aportan información a quien lee la web y rompen la coherencia con el curso ya publicado.

El usuario pidió eliminar la nomenclatura de lecciones y unidades para que los nombres tengan sentido con el curso de R, y actualizar la skill de autoría para que las futuras lecciones sigan la misma convención sin necesidad de volver a indicarlo.

## Decisión

1. Los títulos públicos de las lecciones de Python son descriptivos y no contienen códigos `U`/`L`. El campo `title` y el `h1` contienen exactamente el mismo texto.
2. Los archivos de contenido usan `kebab-case` derivado del título, sin prefijos numéricos: `que-es-programar-y-python.md`, no `u0-l0.1-que-es-programar-y-python.md`. El orden sigue en el campo `order`.
3. La tabla de datos de cada lección no incluye la fila «Unidad». Los prerrequisitos se escriben con títulos de lecciones anteriores.
4. El texto de las lecciones y el registro `PROGRESO.md` sustituyen las referencias codificadas por títulos o por expresiones como «más adelante».
5. Los códigos `U`/`L` permanecen solo dentro de `CONTENIDO_CURSO_PYTHON.md` como índice interno de planificación. La skill de autoría y el índice lo declaran explícitamente.
6. La skill `SKILL_DESARROLLO_LECCIONES_PYTHON.md` pasa a la versión 1.2 y el índice maestro a la 1.1 para reflejar la convención.

## Consecuencias

- Las rutas de las cinco lecciones cambian; cualquier enlace externo antiguo dejará de apuntar a ellas. No hay enlaces internos rotos porque las rutas se generan desde la colección de contenido.
- La navegación anterior/siguiente sigue funcionando: se basa en `order`, no en el nombre del archivo.
- Los nombres de R y Python son ahora homogéneos y comprensibles sin conocer el currículo interno.
- El registro de progreso y los bloques portables usan títulos, así que se pueden retomar sin descifrar códigos.
- Las decisiones ADR 0006, 0007 y 0008 se conservan como histórico; esta decisión solo modifica la convención de nombres públicos.

## Alternativas consideradas

- **Mantener los códigos y añadir un título limpio solo en la web:** descartado porque dejaría rutas y archivos con nomenclatura opaca y obligaría a mantener dos nombres por lección.
- **Reescribir todo el índice maestro sin códigos:** descartado porque son 170 lecciones de planificación interna y el cambio no aporta valor al lector; basta con declarar que los códigos son internos.
- **Usar números secuenciales simples (`leccion-1`):** descartado porque sigue siendo una nomenclatura posicional y no describe el contenido, contra las convenciones de `docs/content-conventions.md`.

## Referencias

`AGENT.md` §6 y §9, `docs/content-conventions.md`, ADR 0004, ADR 0007 y ADR 0008.
