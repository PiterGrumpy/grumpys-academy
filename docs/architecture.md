# Arquitectura

## Elección de tecnología

Se usa **Astro 5** con salida estática. Es la opción que mejor cumple los objetivos del proyecto:

- Genera HTML estático por defecto: rendimiento, SEO y simplicidad sin configuración adicional.
- Sus colecciones de contenido permiten Markdown/MDX con esquemas Zod: contenido desacoplado de la interfaz y validación en build.
- Casi todo el sitio se entrega sin JavaScript de cliente.
- Facilita añadir rutas generadas desde contenido cuando existan cursos reales.

Alternativas evaluadas:

| Alternativa            | Por qué se descartó                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------ |
| Vite + Markdown propio | Obliga a construir rutas, validación y consultas de contenido a mano.                |
| SvelteKit estático     | Añade una capa de framework reactivo innecesaria para contenido mayormente estático. |
| Astro 6/7              | Requieren Node ≥22; el entorno dispone de Node 20.20.0.                              |

Limitaciones: el ecosistema está fijado a la rama 5 de Astro mientras el entorno siga en Node 20; una futura migración a Node 22 permitiría revisar la versión.

## Capas

```text
Interfaz        src/pages/         Inicio, índice de cursos y rutas dinámicas
                src/pages/cursos/  Página de curso y de lección
                src/layouts/       Estructura HTML compartida
                src/components/    CourseCard y SiteHeader
Contenido       src/content.config.ts   Definición de colecciones y esquemas
                src/content/courses/    Entradas Markdown de R y Python
                src/content/lessons/    Lecciones Markdown de ambos cursos
                src/cursos/             Material de referencia no publicado (PDF de R, índice y progreso de Python)
Estilos         src/styles/global.css   Tokens y estilos base
Recursos        public/                Favicon, ilustraciones SVG y estáticos sin procesar
Configuración   astro.config.mjs, tsconfig.json, eslint.config.mjs,
                .prettierrc.json
Documentación   README.md, CONTRIBUTING.md, docs/
```

Regla de oro: el contenido nunca importa componentes y los componentes nunca contienen texto de curso.

## Sistema de contenido

`src/content.config.ts` declara dos colecciones con loader `glob`:

| Colección | Directorio             | Esquema                                                                     |
| --------- | ---------------------- | --------------------------------------------------------------------------- |
| `courses` | `src/content/courses/` | `title`, `description`, `image` (opcional)                                  |
| `lessons` | `src/content/lessons/` | `title`, `description`, `course` (id del curso), `order`, `unit` (opcional) |

Los cursos `r` y `python` son entradas reales: tres lecciones del primero y once lecciones del segundo. El orden de navegación se deriva de `order` y no de listas duplicadas a mano. El campo opcional `image` guarda la ruta del logo de la tarjeta; ambos cursos tienen el SVG oficial local (`r-logo.svg` y `python-logo.svg`, ADR 0014). El campo opcional `unit` guarda el nombre público de la unidad: la página de curso crea un `<details>` por unidad con ese nombre como `<summary>` (ADR 0015). Los nombres públicos de las lecciones son descriptivos y no incluyen los códigos internos del índice maestro de Python (ADR 0010), y el texto de las lecciones empieza directamente con el contenido (ADR 0012). Los metadatos siguen siendo mínimos: se ampliarán solo cuando un contenido real lo exija (por ejemplo, módulos).

El material de referencia vive en `src/cursos/` y no se publica ni se procesa en el build: los PDF originales de R están en `src/cursos/R/`, y el índice maestro, la skill de autoría y el registro de progreso de Python en `src/cursos/Python/`. Las ilustraciones SVG están en `public/images/` y se sirven tal cual; los esquemas se diseñan con Flowsimp y se exportan a SVG local siguiendo la skill `recursos-visuales-mcp`.

Convenciones de escritura: [content-conventions.md](content-conventions.md). Decisiones: [ADR 0003](decisions/0003-curso-r-y-lecciones.md), [ADR 0004](decisions/0004-direccion-visual-colorida.md), [ADR 0006](decisions/0006-curso-python-y-autoria-iterativa.md), [ADR 0007](decisions/0007-desarrollo-por-unidades-y-coherencia-con-r.md), [ADR 0008](decisions/0008-ancho-miniproyecto-y-navegacion-de-lecciones.md), [ADR 0009](decisions/0009-recursos-visuales-con-mcp.md), [ADR 0010](decisions/0010-nombres-de-lecciones-sin-codigos.md), [ADR 0011](decisions/0011-tamano-uniforme-de-tarjetas.md), [ADR 0012](decisions/0012-lecturas-directas-sin-bloques-de-presentacion.md), [ADR 0013](decisions/0013-logo-de-python-en-las-tarjetas.md), [ADR 0014](decisions/0014-logos-oficiales-y-descripcion-completa.md), [ADR 0015](decisions/0015-unidades-en-desplegables.md) y [ADR 0016](decisions/0016-resaltado-de-sintaxis-en-ejemplos.md).

## Flujo de build

1. Astro lee `astro.config.mjs` (salida `static` y resaltado de Shiki con paletas de alto contraste para tema claro y oscuro, ADR 0016).
2. Carga las colecciones declaradas y valida los esquemas.
3. Renderiza `src/pages/` a HTML en `dist/`. Las rutas dinámicas consultan las colecciones y renderizan cada entrada Markdown con `render()`.
4. Los estilos globales se procesan y se entregan como CSS estático; los SVG de `public/` se copian sin transformación.

No hay adapters, middleware, endpoints ni renderizado bajo demanda. Las soluciones ocultas usan `<details>` nativo y el grid de cursos es CSS puro: no hay JavaScript de cliente.

## Cómo incorporar contenido nuevo

Solo tras una solicitud explícita:

1. Crear la entrada del curso en `src/content/courses/` y las lecciones en `src/content/lessons/` siguiendo las plantillas y convenciones.
2. Asignar a cada lección un `course` existente y un `order` único dentro de ese curso; las rutas y la navegación se generan solas. Si pertenece a una unidad, dar a todas sus lecciones el mismo `unit` con un nombre representativo; la página del curso creará el desplegable sola (ADR 0015).
3. Ampliar los esquemas solo si el contenido real exige metadatos nuevos.
4. Añadir componentes o estilos estrictamente necesarios.
5. Validar enlaces, accesibilidad, build y documentación.

## Puntos de extensión previstos (no implementados)

- Índice de módulos y tabla de contenidos por lección.
- Componentes dedicados para diagramas y soluciones interactivas.
- Sitemap, robots y comprobación automatizada de enlaces.

No se crearán de forma anticipada.
