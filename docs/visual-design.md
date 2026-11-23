# Diseño visual

## Principios

Minimalismo con color. La interfaz sigue siendo limpia y legible, pero usa acentos cromáticos para orientar la navegación, agrupar cursos y hacer que el contenido resulte más cercano. La lectura prevalece sobre la decoración: no hay gradientes, sombras llamativas ni animaciones que distraigan.

Un elemento visual solo se añade si cumple una función: el grid organiza cursos reales, las tarjetas enlazan a ellos y las imágenes explican una idea de la lección.

## Tokens

Definidos en `src/styles/global.css` como custom properties. Los colores de acento se usan en cantidades pequeñas; el texto de lectura prolongada mantiene el contraste alto.

| Token                   | Claro     | Oscuro    | Uso                                    |
| ----------------------- | --------- | --------- | -------------------------------------- |
| `--color-bg`            | `#ffffff` | `#121821` | Fondo de página                        |
| `--color-surface`       | `#f6f8fb` | `#1a222d` | Fondo de tarjetas y bloques destacados |
| `--color-text`          | `#17212b` | `#e9eef5` | Texto principal                        |
| `--color-muted`         | `#475569` | `#b0bccb` | Texto secundario                       |
| `--color-accent`        | `#0f5c8c` | `#8ec5ff` | Enlaces y acento principal             |
| `--color-accent-soft`   | `#e6f1f8` | `#1b3143` | Fondo suave del acento principal       |
| `--color-accent-2`      | `#0f766e` | `#5eead4` | Acento secundario (teal)               |
| `--color-accent-2-soft` | `#e2f3f0` | `#12332f` | Fondo suave del acento secundario      |
| `--color-accent-3`      | `#6d28d9` | `#c4b5fd` | Acento terciario (violeta)             |
| `--color-accent-3-soft` | `#f0e9fc` | `#2b2142` | Fondo suave del acento terciario       |
| `--color-accent-4`      | `#a16207` | `#fbbf24` | Acento puntual (ámbar)                 |
| `--color-accent-4-soft` | `#fdf3d8` | `#3a2c12` | Fondo suave del acento ámbar           |
| `--color-border`        | `#d9e0e8` | `#303b48` | Separadores y bordes                   |
| `--color-focus`         | `#0b5cab` | `#8ec5ff` | Indicador de foco                      |
| `--color-code-bg`       | `#f2f5f9` | `#1b232e` | Bloques de código                      |

Los pares texto/fondo cumplen WCAG AA en ambos temas. Los acentos fuertes se reservan para títulos cortos, etiquetas y bordes; nunca para párrafos largos. Cualquier token nuevo debe revisarse con el mismo criterio.

## Tipografía

- Puerto tipográfico del sistema (`system-ui`, `-apple-system`, `Segoe UI`, sans-serif): legible, sin peticiones de red y consistente con el sistema operativo.
- Cuerpo: 1rem base, interlineado 1.7.
- Ancho de lectura: `--measure: 80ch`, centrado en las páginas de contenido.
- Encabezados: jerarquía `h1` → `h2` → `h3` sin saltos; escala discreta.
- Código: pila monoespaciada del sistema, bloques con `--color-code-bg` y borde sutil, sin sombras.
- Etiquetas de sección: versalitas con `letter-spacing`, color de acento y peso 700; siempre acompañadas de un encabezado real.

## Espaciado y layout

- Escala de espaciado en `rem` con valores pares y generosos entre párrafos.
- Contenedor estándar de 80ch para lectura; contenedor ancho de 72rem para el inicio y los índices que muestran el grid.
- La navegación de lecciones usa dos columnas: enlace anterior a la izquierda y enlace siguiente a la derecha, con alineación hacia el borde correspondiente y texto que se ajusta en pantallas estrechas.
- El grid de cursos usa `repeat(auto-fill, minmax(min(100%, 16rem), 16rem))`: pistas de ancho fijo que no se estiran. Con un solo curso queda una tarjeta pequeña y los huecos vacíos no se reparten; con más cursos se llenan nuevas columnas sin media queries frágiles.
- Todas las tarjetas comparten tamaño: la pista fija da la misma anchura, el `li` es flexible y la tarjeta tiene `min-height: 12rem` para igualar la altura de la fila. Decisión en [ADR 0011](decisions/0011-tamano-uniforme-de-tarjetas.md).
- Las tarjetas son enlaces completos con logo oficial de 2,5 rem de altura, título, número de lecciones y descripción completa. El acento se inyecta con `--card-accent`, de modo que añadir un curso no exige nuevo CSS.
- Logo, título y descripción se alinean entre tarjetas: la cabecera usa una columna fija de 3,5 rem para el logo, `object-fit: contain` y `align-items: start`; el título tiene `min-height: 2.6em` para que la descripción arranque a la misma altura. No se recorta texto: `min-width: 0` y `overflow-wrap: anywhere` evitan desbordes y la fila crece si hace falta. Decisión en [ADR 0014](decisions/0014-logos-oficiales-y-descripcion-completa.md).
- Cabecera discreta con el nombre del sitio, borde inferior y espacio suficiente; sin navegación inventada.
- La página de curso agrupa cada unidad declarada en el campo `unit` en un desplegable nativo bajo el encabezado «Lecciones». El `<summary>` muestra el nombre público de la unidad —«Antes de empezar» y «Primeros Pasos» en Python—, sin códigos internos. Usa `details`/`summary`, sin JavaScript, y toma los títulos de la colección `lessons`. Las lecciones sin unidad, como las del curso de R, aparecen en una lista plana. Decisión en [ADR 0015](decisions/0015-unidades-en-desplegables.md).
- Diseño fluido: móvil, tablet, portátil y escritorio sin perder legibilidad.

## Imágenes

- Se almacenan en `public/images/` y se sirven como SVG local; no se usan servicios externos.
- Ilustran una idea concreta: la consola de R, la diferencia entre vector y matriz o la estructura de un dataframe.
- Tienen texto alternativo que describe la idea representada; las puramente decorativas usarían `alt=""`.
- Se muestran con ancho máximo del contenedor, borde sutil y esquinas redondeadas; no flotan ni cubren texto.
- No sustituyen a la explicación escrita: el contenido sigue siendo comprensible sin verlas.
- Los logos de curso son los SVG oficiales: el de [R](https://www.r-project.org/logo/) —© The R Foundation, CC BY-SA 4.0— y el elemento «two snakes» de [Python](https://www.python.org/community/logos/) —© Python Software Foundation—. Se guardan en `public/images/r-logo.svg` y `public/images/python-logo.svg`, se escalan a la misma altura en la tarjeta y son decorativos (`alt=""`) con `<title>` y `<desc>` en español. Decisión en [ADR 0014](decisions/0014-logos-oficiales-y-descripcion-completa.md).
- El logo del sitio es la imagen aportada por el usuario, procesada como `public/images/grumpys-logo.png`: una composición ancha con el personaje y la marca «Grumpy's Academy». Se recortó el espacio sobrante y se eliminó el fondo blanco con ImageMagick mediante un relleno desde el borde y una erosión de 1 px que quita el halo antialias; conserva transparencia y todos sus colores originales. Se muestra dentro del `h1` del inicio con `alt="Grumpy's Academy"` y un fondo blanco propio para mantener el contraste en tema claro y oscuro. Es la única imagen raster del proyecto; el resto de recursos son SVG.
- Los esquemas de procesos y estructuras se diseñan con Flowsimp —gratuito y sin cuenta— y se exportan como SVG local con los colores de esta paleta. El enlace del visor es una referencia de trabajo; nunca se inserta en la lección.
- Comfy Cloud se usa solo para descubrir plantillas y estimar costes. Generar exige créditos y aprobación explícita; las plantillas vectoriales disponibles son de pago. Decisión en [ADR 0009](decisions/0009-recursos-visuales-con-mcp.md).

## Movimiento y foco

- Sin animaciones en la base; como único movedad, las tarjetas cambian de color de borde al pasar el foco o el puntero.
- `@media (prefers-reduced-motion: reduce)` neutraliza transiciones y desplazamiento suave.
- `:focus-visible` con contorno de 2 px y separación de 3 px en todos los elementos interactivos.
- Enlace de salto al contenido principal.

## Antipatrones

- Gradientes decorativos, sombras excesivas y tarjetas sin contenido real.
- Colores saturados en texto de lectura prolongada o texto gris claro sobre fondo claro.
- Usar el color como único indicador de agrupación o estado.
- Imágenes sin alternativa textual, con texto incrustado ilegible o servidas desde terceros.
- Bloques de código sin indicación de lenguaje o sin contraste suficiente.

## Estado implementado

Existen `BaseLayout`, `SiteHeader`, `CourseCard`, las rutas de cursos y lecciones, y estilos globales. El inicio muestra un bloque de bienvenida y un grid con los cursos publicados; el índice de cursos reutiliza el mismo grid, con tarjetas de anchura y altura uniformes. El resaltado de código de Shiki está desactivado: los bloques usan `--color-code-bg`. Hay estilos para párrafos, listas, código, blockquotes, tablas, imágenes y `<details>` porque las lecciones los usan. El ancho de lectura se amplió a 80ch y la navegación entre lecciones se alinea a izquierda y derecha. Hay diez ilustraciones locales: el logo del sitio, los logos oficiales de R y Python, consola, vectores/matrices, dataframe y cuatro esquemas —ciclo editar/ejecutar/observar, rutas relativas, lectura de errores y extracción de listas—. El inicio muestra el logo del sitio como encabezado `h1`. La página del curso de Python muestra dos desplegables: «Antes de empezar» con las cinco lecciones iniciales y «Primeros Pasos» con las seis de sintaxis, valores y variables. Decisiones: [ADR 0004](decisions/0004-direccion-visual-colorida.md), [ADR 0008](decisions/0008-ancho-miniproyecto-y-navegacion-de-lecciones.md), [ADR 0009](decisions/0009-recursos-visuales-con-mcp.md), [ADR 0011](decisions/0011-tamano-uniforme-de-tarjetas.md), [ADR 0013](decisions/0013-logo-de-python-en-las-tarjetas.md), [ADR 0014](decisions/0014-logos-oficiales-y-descripcion-completa.md) y [ADR 0015](decisions/0015-unidades-en-desplegables.md).
