# ADR 0011 — Tamaño uniforme de las tarjetas de curso

- Estado: aceptada; el punto 4 sobre el recorte de título y descripción queda sustituido por [ADR 0014](0014-logos-oficiales-y-descripcion-completa.md).
- Fecha: 2026-11-23

## Contexto

El inicio y el índice de cursos muestran las entradas reales en una grilla con pistas de `16rem`. Todas las tarjetas compartían anchura de pista, pero el componente `CourseCard` se renderizaba dentro de un `li` que no estiraba al elemento `article`. Como cada curso tiene contenido distinto —el de R lleva logo y el de Python no—, las alturas podían diferir aunque estuvieran en la misma fila. El usuario pidió que todas las tarjetas de la página principal sean del mismo tamaño.

## Decisión

1. El `li` de `.course-grid` pasa a `display: flex` y la tarjeta usa `flex: 1`, de modo que el `article.course-card` ocupa toda la pista y se estira a la altura de la fila.
2. `.course-card` tiene `min-height: 12rem` para que una tarjeta con poco texto no quede más baja que las demás.
3. Se mantiene `grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 16rem))`: la anchura sigue siendo común y una sola tarjeta no se estira para ocupar todo el contenedor.
4. `course-card__link` conserva `height: 100%`; ahora sí resuelve contra la altura definida por el estiramiento de la fila. El recorte del título y la descripción se eliminó después en ADR 0014 para mostrar el texto completo y alinear los bloques.

## Consecuencias

- Las tarjetas comparten anchura y altura mínima, y las de una misma fila tienen exactamente la misma altura.
- No se añaden media queries ni JavaScript: la solución es CSS puro y se aplica también al índice de cursos porque reutiliza la misma grilla.
- Si una futura tarjeta necesitara más espacio, la fila crecerá y todas las tarjetas se ajustarán; el contenido no se recortará fuera de los límites ya definidos.
- La altura mínima es una decisión visual, no una medida de contenido: no implica añadir cursos ni relleno ficticio.

## Alternativas consideradas

- **Dar altura fija a `.course-card`:** descartado porque recortaría contenido real si un título o una descripción ocupan más líneas de lo previsto.
- **Repartir columnas con `auto-fit`:** descartado porque estiraría las pistas y una sola tarjeta ocuparía todo el ancho, rompiendo el criterio de tarjetas pequeñas de ADR 0004.
- **Ajustar altura caso por caso con CSS por curso:** descartado porque duplicaría reglas y obligaría a tocar estilos al añadir cursos.

## Referencias

`AGENT.md` §8, `docs/visual-design.md`, `src/styles/global.css`, ADR 0004.
