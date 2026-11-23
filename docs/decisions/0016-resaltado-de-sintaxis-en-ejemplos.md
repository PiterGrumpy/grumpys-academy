# ADR 0016 — Resaltado de sintaxis en los ejemplos de código

- Estado: aceptada
- Fecha: 2026-11-23

## Contexto

La decisión inicial de desactivar Shiki (ADR 0003) buscaba evitar estilos inline y mantener los bloques con los tokens de `global.css`. Con catorce lecciones publicadas y cientos de ejemplos de R y Python, el código sin color exige un esfuerzo innecesario para distinguir cadenas, números, palabras reservadas y comentarios. El usuario pidió expresamente que los ejemplos tengan color «como en un IDE» para facilitar la comprensión.

Astro 5 ya incluye Shiki como resaltador por defecto, así que activarlo no añade dependencias ni JavaScript de cliente. Las lecciones etiquetan sus bloques con `r`, `python` o `text`, información que basta para aplicar una paleta precisa.

## Decisión

1. Activar el resaltado de Astro en `astro.config.mjs` con las paletas `github-light-high-contrast` y `github-dark-high-contrast`.
2. Usar `defaultColor: false` para que Shiki emita las dos paletas como custom properties en el HTML generado.
3. Aplicar en `src/styles/global.css` el color de cada token según `prefers-color-scheme`, respetando el cambio de tema del sitio sin controles ni scripts adicionales.
4. Mantener los bloques `text` sin colorear: son salidas esperadas o transcripciones de terminal, no código.
5. No añadir números de línea ni copiar botones: el objetivo es distinguir elementos del lenguaje, no reproducir toda la interfaz de un editor.
6. Esta decisión sustituye el punto de la ADR 0003 que desactivaba Shiki. El resto de esa ADR sigue vigente.

## Consecuencias

- Las cadenas, palabras reservadas, números y comentarios se distinguen de un vistazo en ambos cursos.
- El resaltado sigue el tema claro u oscuro del sistema y no introduce JavaScript de cliente.
- Los ocho colores resultantes por tema cumplen WCAG AA sobre el fondo de cada tema; se verificó el contraste de todos los colores emitidos.
- El HTML publicado incluye estilos inline con custom properties por token. No dependen de service externos ni de fuentes remotas.
- El build tarda algo más porque Shiki procesa cada bloque, sin efectos en el sitio estático ya generado.
- Los bloques deben seguir declarando el lenguaje; sin etiqueta, Astro no puede elegir la gramática correcta.

## Alternativas consideradas

- **Mantener los bloques en texto plano:** descartado porque no cumple la petición y dificulta la lectura de ejemplos largos.
- **Usar Prism con una hoja de estilos propia:** descartado porque exige una dependencia y recursos adicionales cuando Astro ya trae Shiki.
- **Escribir un resaltador propio con CSS y expresiones regulares:** descartado porque es frágil y no cubre la gramática de R ni de Python.
- **Usar un único tema oscuro en toda la web:** descartado porque rompe la coherencia visual en tema claro.
- **Usar los temas `github-light` y `github-dark`:** descartados porque dos de sus colores quedaban por debajo de 4.5:1 sobre el fondo del bloque. Las versiones de alto contraste pasan la comprobación.

## Referencias

`astro.config.mjs`, `src/styles/global.css`, `docs/content-conventions.md`, `docs/visual-design.md`, `docs/architecture.md` y ADR 0003.
