# ADR 0014 — Logos oficiales y descripción completa en las tarjetas

- Estado: aceptada
- Fecha: 2026-11-23

## Contexto

Los logos de las tarjetas eran marcas dibujadas a mano con la paleta del proyecto (ADR 0013). El usuario pidió revisarlos y usar los logos oficiales de ambos lenguajes, alinear los tres elementos de cada tarjeta —logo, título y descripción— a la misma altura, y mostrar la descripción completa sin recortarla a tres líneas. ADR 0011 fijaba tamaño uniforme, pero el título seguía limitado a dos líneas y la descripción a tres con `-webkit-line-clamp`.

## Decisión

1. Sustituir `public/images/r-logo.svg` por el logotipo oficial publicado por The R Foundation en `https://www.r-project.org/logo/Rlogo.svg` (CC BY-SA 4.0) y `public/images/python-logo.svg` por el elemento oficial «two snakes» de Python publicado por la PSF en `https://www.python.org/community/logos/`. Se conserva la forma original; solo se añaden `<title>` y `<desc>` en español y un `viewBox` al SVG de Python para que escale correctamente como imagen.
2. Atribución documentada en los SVG y en `docs/visual-design.md`: © The R Foundation, CC BY-SA 4.0; © Python Software Foundation, uso nominativo del logotipo oficial. No se han alterado los trazos de ninguno de los dos logos.
3. `.course-card__header` pasa a una grilla con una columna fija de `3.5rem` para el logo y `minmax(0, 1fr)` para el texto, con `align-items: start`. `.course-card__logo` ocupa toda la columna y se escala a `2.5rem` de altura con `object-fit: contain`: los dos logos tienen la misma altura y el título empieza en el mismo punto.
4. `.course-card__title` pierde el recorte a dos líneas y gana `min-height: 2.6em` para que el título, la etiqueta de lecciones y la descripción arranquen a la misma altura en todas las tarjetas de la fila.
5. `.course-card__description` elimina `-webkit-box`, `overflow: hidden` y `-webkit-line-clamp: 3`. El texto completo es visible; si una descripción ocupa más líneas, crece la fila y todas las tarjetas se ajustan por el `flex: 1` de ADR 0011.

## Consecuencias

- Las tarjetas muestran las marcas oficiales de R y Python, con la misma altura de logo y alineación vertical de título y descripción.
- Las descripciones ya no se cortan: se lee el texto completo de cada curso.
- Se mantiene el ancho fijo de pista de 16 rem y la altura mínima de 12 rem; no se han introducido media queries ni JavaScript.
- Los logos siguen siendo SVG locales servidos desde `public/images/`, sin peticiones a servicios externos durante el build ni coste de generación.
- La atribución de R (CC BY-SA 4.0) y de Python (marca registrada) queda registrada en el repositorio.

## Alternativas consideradas

- **Mantener los logos dibujados:** descartado porque el usuario pidió expresamente los oficiales.
- **Servir los SVG desde los sitios oficiales en tiempo de ejecución:** descartado porque rompe la regla de recursos locales y añade dependencia de red.
- **Recortar la descripción con «leer más»:** descartado porque exige JavaScript o un control adicional y el usuario pidió el texto completo.
- **Altura fija para título y descripción:** descartado porque podría cortar textos más largos en el futuro; se prefiere `min-height` y crecimiento natural de la fila.

## Referencias

`AGENT.md` §8, `docs/visual-design.md`, `src/components/CourseCard.astro`, `src/styles/global.css`, ADR 0011, ADR 0013 y las páginas oficiales `https://www.r-project.org/logo/` y `https://www.python.org/community/logos/`.
