# ADR 0015 — Unidades en desplegables con nombre representativo

- Estado: aceptada
- Fecha: 2026-11-23

## Contexto

La página del curso de Python agrupaba solo las cinco primeras lecciones en un desplegable llamado «Primeros Pasos». El criterio estaba escrito en la ruta (`order <= 5`) y el nombre, en el componente, de modo que cada unidad nueva exigía tocar el código y elegir un nombre allí mismo. Con seis lecciones más publicadas, el usuario pidió renombrar el primer grupo a «Antes de empezar», crear «Primeros Pasos» para la unidad nueva y extender la convención a todas las unidades: cada una debe mostrarse en un desplegable con un nombre que la represente.

Los títulos y el orden de las lecciones ya viven en la colección `lessons` y no se duplican en listas manuales (ADR 0010). La navegación entre lecciones se deriva de `order` (ADR 0008). El índice maestro de Python usa códigos `U`/`L` que son internos y no se publican.

## Decisión

1. Añadir el campo opcional `unit` al esquema de la colección `lessons`: cadena con el **nombre público de la unidad**, sin códigos `U` ni `L`.
2. La página de curso lee `unit`, agrupa las lecciones en el orden que ya tienen por `order` y genera un `<details>` por unidad. El `<summary>` muestra literalmente el valor de `unit`.
3. Las lecciones que no declaran `unit` —las tres del curso de R, que no tienen unidades definidas— siguen apareciendo en una lista plana bajo «Lecciones».
4. Los nombres actuales de Python son «Antes de empezar» para las cinco lecciones iniciales y «Primeros Pasos» para las seis de sintaxis, valores y variables. Cada unidad futura recibirá un nombre representativo de su contenido en el momento de redactarse.
5. La skill de autoría de Python, la plantilla de lección y las convenciones de contenido exigen declarar `unit` en cada lección de Python. La documentación de arquitectura, interfaz y memoria reflejan la convención.

## Consecuencias

- Añadir una unidad consiste en publicar lecciones con el mismo valor `unit`; no hace falta modificar la ruta ni el componente.
- El nombre del desplegable se decide junto al contenido, en el frontmatter, y no se duplica en el código de la interfaz.
- Se mantiene el orden de navegación por `order` y la ausencia de listas duplicadas de títulos.
- El desplegable sigue siendo nativo (`details`/`summary`), accesible por teclado y sin JavaScript de cliente.
- El esquema de contenido gana un campo opcional; las entradas existentes de R siguen siendo válidas sin cambios.
- Las unidades se muestran en el orden en que aparece su primera lección según `order`. Si una unidad futura no fuera contigua, sus lecciones se reunirían en el primer desplegable de ese nombre.

## Alternativas consideradas

- **Seguir filtrando por `order <= 5` en la página:** descartado porque obliga a editar el componente cada vez que se publica una unidad y mezcla criterios de contenido con presentación.
- **Definir los rangos de cada unidad en el archivo de curso:** descartado porque duplica información que ya pueden llevar las propias lecciones.
- **Crear una colección `units` nueva:** descartado por prematuro; con un solo campo opcional basta y no añade una capa de contenido que mantener.
- **Mostrar todas las lecciones en lista plana:** descartado porque el usuario pidió agruparlas por unidad.

## Referencias

`AGENT.md` §§8 y 9, `docs/content-conventions.md`, `docs/visual-design.md`, `src/content.config.ts`, `src/pages/cursos/[course].astro`, `docs/templates/lesson.md`, `src/cursos/Python/SKILL_DESARROLLO_LECCIONES_PYTHON.md` y ADR 0008, 0010 y 0012.
