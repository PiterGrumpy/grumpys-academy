# ADR 0004 — Dirección visual: minimalismo con color, grid de cursos e ilustraciones

- **Estado:** aceptada
- **Fecha:** 2026-11-20

## Contexto

El sitio cumplía sus objetivos de claridad y accesibilidad, pero la página de inicio era demasiado austera: un título, un párrafo y un enlace. Con un curso real publicado, esa homepage no ayudaba a ver de un vistazo qué existe ni invitaba a entrar. El usuario pidió mantener la filosofía minimalista, pero hacer el proyecto «algo más vistoso y un poco colorido», con un grid de cursos en la página principal e imágenes de ejemplo en el contenido.

La restricción sigue siendo la misma: sitio estático, sin servicios externos, sin dependencias nuevas y sin contenido ficticio.

## Decisión

- Ampliar la filosofía de diseño de `AGENT.md`: el color se usa para orientar y agrupar, nunca como adorno; las tarjetas y las imágenes son válidas cuando organizan o explican contenido real.
- Definir una paleta de acentos (azul, teal, violeta y ámbar) con fondos suaves, documentada en `docs/visual-design.md` y verificada en tema claro y oscuro.
- Mostrar los cursos en un grid de tarjetas en `/` y reutilizarlo en `/cursos/`. Cada tarjeta es un enlace con título, descripción y número de lecciones; el acento se aplica mediante la custom property `--card-accent`.
- Crear `CourseCard.astro`: tiene dos usos reales, props tipadas y ningún JavaScript.
- Añadir un campo opcional `image` al esquema `courses` para el logo de cada tarjeta.
- Incluir ilustraciones SVG locales en `public/images/` —logo de R, consola de R, vectores frente a matrices y estructura de un dataframe— y referenciarlas desde las lecciones y las tarjetas con texto alternativo cuando aporte.
- Mantener el ancho de lectura estrecho en las lecciones; solo el inicio y los índices usan el contenedor ancho.

## Alternativas consideradas

- Página de inicio con una lista de enlaces: más sobria, pero no cumplía la petición de un grid ni facilitaba la exploración visual.
- Usar un framework de UI o iconos externos: añade dependencias y peticiones de red sin aportar al contenido estático.
- Generar las ilustraciones con un servicio online: introduces servicios externos y pérdida de control sobre el texto y el contraste.
- Duplicar CSS por curso: obligaría a tocar estilos al añadir cada curso; la custom property evita ese acoplamiento.
- Poner color de fondo fuerte en todo el sitio: reduce la legibilidad de las lecciones y contradice el minimalismo.

## Consecuencias

Positivas: el inicio comunica de un vistazo qué cursos existen, la navegación es más acogedora, el contenido gana ejemplos visuales y el sistema sigue siendo estático y accesible. Añadir un curso solo requiere una entrada Markdown, una imagen opcional y nada de CSS nuevo.

Negativas: hay que revisar el contraste de los nuevos acentos en ambos temas; el campo `image` y los SVG amplían ligeramente el esquema y el repositorio. El grid debe comprobarse en móvil para que no aparezcan tarjetas demasiado estrechas.

## Revisión

Revisar cuando se añada un segundo curso —para confirmar que la rotación de acentos funciona— o cuando las necesidades de accesibilidad exijan ajustar la paleta.
