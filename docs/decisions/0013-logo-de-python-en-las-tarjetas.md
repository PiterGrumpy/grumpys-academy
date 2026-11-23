# ADR 0013 — Logo de Python en las tarjetas de curso

- Estado: aceptada; el contenido de los logos y el recorte de la descripción quedan sustituidos por [ADR 0014](0014-logos-oficiales-y-descripcion-completa.md).
- Fecha: 2026-11-23

## Contexto

La tarjeta de «Introducción a R» mostraba el SVG local `r-logo.svg`, mientras que la de Python no tenía logo y dejaba un hueco distinto en la cabecera. El usuario pidió poner el logo de ambos lenguajes en las tarjetas del inicio y permitió usar los MCP si hacía falta. El proyecto ya tiene una paleta definida y la regla de servir ilustraciones como SVG locales desde `public/images/`.

## Decisión

1. Añadir `public/images/python-logo.svg`: cuadrado redondeado en azul `#0f5c8c`, letras «Py» en blanco, tres barras en azul claro `#8ec5ff` y un punto ámbar `#fbbf24`, con la misma estructura que el logo de R.
2. Declarar `image: '/images/python-logo.svg'` en `src/content/courses/python.md`. `CourseCard.astro` sigue tratando el logo como decorativo (`alt=""`) porque el título del curso ya está en la tarjeta.
3. Añadir `<title>` y `<desc>` en español a ambos logos. No se ha usado generación en Comfy Cloud: el recurso es un SVG escrito a mano con la paleta del proyecto, sin créditos ni dependencias nuevas.
4. Flowsimp no se ha empleado porque el logo no es un diagrama: no describe un proceso ni una estructura de datos.

## Consecuencias

- Las dos tarjetas muestran un logo reconocible y mantienen la misma altura y anchura definidas en ADR 0011.
- El número de SVG locales pasa de ocho a nueve; todos siguen servidos desde `public/images/` sin servicios externos.
- No cambia el CSS ni el componente: basta el campo `image` opcional del frontmatter.
- No se han gastado créditos ni se ha añadido contenido ficticio.

## Alternativas consideradas

- **Generar el logo con Comfy Cloud:** descartado porque requeriría créditos y aprobación explícita, y un resultado raster o SVG complejo no aportaría claridad a una marca pequeña.
- **Usar un icono genérico de Python desde un CDN:** descartado por romper la regla de recursos locales y añadir una dependencia externa.
- **Dejar la tarjeta sin logo:** descartado porque era precisamente la desigualdad que señaló el usuario.

## Referencias

`AGENT.md` §8, `docs/visual-design.md`, `src/components/CourseCard.astro`, ADR 0004, ADR 0009 y ADR 0011.
