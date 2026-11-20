# Diseño visual

## Principios

Minimalismo, jerarquía clara, legibilidad y coherencia. La interfaz no compite con el contenido: no hay tarjetas decorativas, gradientes, sombras llamativas ni animaciones que distraigan.

## Tokens

Definidos en `src/styles/global.css` como custom properties:

| Token            | Claro     | Oscuro    | Uso               |
| ---------------- | --------- | --------- | ----------------- |
| `--color-bg`     | `#ffffff` | `#12151a` | Fondo             |
| `--color-text`   | `#1a1d21` | `#e6e8eb` | Texto principal   |
| `--color-muted`  | `#4b5563` | `#aab1bb` | Texto secundario  |
| `--color-accent` | `#14507a` | `#8ec5ff` | Enlaces y acentos |
| `--color-border` | `#d8dce1` | `#2b323b` | Separadores       |
| `--color-focus`  | `#0b5cab` | `#8ec5ff` | Indicador de foco |

Los pares texto/fondo cumplen WCAG AA. Revisar el contraste de cualquier token nuevo antes de usarlo.

## Tipografía

- Puerto tipográfico del sistema (`system-ui`, `-apple-system`, `Segoe UI`, sans-serif): legible, sin peticiones de red y consistente con el sistema operativo.
- Cuerpo: 1rem base, interlineado 1.7.
- Ancho de lectura: `--measure: 68ch`, centrado.
- Encabezados: jerarquía `h1` → `h2` → `h3` sin saltos; escala discreta.
- Código (cuando se añada): pila monoespaciada del sistema y bloques con fondo y borde sutiles, nunca sombras.

## Espaciado y layout

- Escala de espaciado en `rem` con valores pares y generosos entre párrafos.
- Cabecera discreta con el nombre del sitio; sin navegación mientras solo exista una página.
- Contenido centrado con padding adaptable mediante `clamp()`.
- Diseño fluido: móvil, tablet, portátil y escritorio sin perder legibilidad.

## Movimiento y foco

- Sin animaciones en la base actual.
- `@media (prefers-reduced-motion: reduce)` neutraliza transiciones y desplazamiento suave.
- `:focus-visible` con contorno de 2 px y separación de 3 px en todos los elementos interactivos.
- Enlace de salto al contenido principal.

## Antipatrones

- Gradientes decorativos, sombras excesivas y tarjetas por todas partes.
- Colores muy saturados o texto gris claro sobre fondo claro.
- Elementos flotantes, autocontrol de reproducción y animaciones llamativas.
- Bloques de código sin indicación de lenguaje o sin contraste suficiente.

## Estado implementado

Solo existen `BaseLayout`, `SiteHeader`, estilos globales y la página neutra de inicio. Los estilos para code blocks, tablas, imágenes, diagramas y soluciones ocultas se definirán cuando esos elementos se soliciten y tengan un uso real.
