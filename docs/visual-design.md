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
- Ancho de lectura: `--measure: 68ch`, centrado en las páginas de contenido.
- Encabezados: jerarquía `h1` → `h2` → `h3` sin saltos; escala discreta.
- Código: pila monoespaciada del sistema, bloques con `--color-code-bg` y borde sutil, sin sombras.
- Etiquetas de sección: versalitas con `letter-spacing`, color de acento y peso 700; siempre acompañadas de un encabezado real.

## Espaciado y layout

- Escala de espaciado en `rem` con valores pares y generosos entre párrafos.
- Contenedor estándar de 68ch para lectura; contenedor ancho de 72rem para el inicio y los índices que muestran el grid.
- El grid de cursos usa `repeat(auto-fit, minmax(min(100%, 17rem), 1fr))`: una columna en móvil y varias sin media queries frágiles.
- Las tarjetas son enlaces completos con imagen opcional, metadato, título, descripción y acción final. El acento se inyecta con `--card-accent`, de modo que añadir un curso no exige nuevo CSS.
- Cabecera discreta con el nombre del sitio, borde inferior y espacio suficiente; sin navegación inventada.
- Diseño fluido: móvil, tablet, portátil y escritorio sin perder legibilidad.

## Imágenes

- Se almacenan en `public/images/` y se sirven como SVG local; no se usan servicios externos.
- Ilustran una idea concreta: la consola de R, la diferencia entre vector y matriz o la estructura de un dataframe.
- Tienen texto alternativo que describe la idea representada; las puramente decorativas usarían `alt=""`.
- Se muestran con ancho máximo del contenedor, borde sutil y esquinas redondeadas; no flotan ni cubren texto.
- No sustituyen a la explicación escrita: el contenido sigue siendo comprensible sin verlas.

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

Existen `BaseLayout`, `SiteHeader`, `CourseCard`, las rutas de cursos y lecciones, y estilos globales. El inicio muestra un bloque de bienvenida y un grid con los cursos publicados; el índice de cursos reutiliza el mismo grid. El resaltado de código de Shiki está desactivado: los bloques usan `--color-code-bg`. Hay estilos para párrafos, listas, código, blockquotes, tablas, imágenes y `<details>` porque las lecciones los usan. Decisión: [ADR 0004](decisions/0004-direccion-visual-colorida.md).
