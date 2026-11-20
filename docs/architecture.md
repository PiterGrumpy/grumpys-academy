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
                src/content/courses/    Entrada Markdown del curso R
                src/content/lessons/    Tres lecciones Markdown del curso R
Estilos         src/styles/global.css   Tokens y estilos base
Recursos        public/                Favicon, ilustraciones SVG y estáticos sin procesar
Configuración   astro.config.mjs, tsconfig.json, eslint.config.mjs,
                .prettierrc.json
Documentación   README.md, CONTRIBUTING.md, docs/
```

Regla de oro: el contenido nunca importa componentes y los componentes nunca contienen texto de curso.

## Sistema de contenido

`src/content.config.ts` declara dos colecciones con loader `glob`:

| Colección | Directorio             | Esquema                                                  |
| --------- | ---------------------- | -------------------------------------------------------- |
| `courses` | `src/content/courses/` | `title`, `description`, `image` (opcional)               |
| `lessons` | `src/content/lessons/` | `title`, `description`, `course` (id del curso), `order` |

El curso `r` y sus tres lecciones son entradas reales. El orden de navegación se deriva de `order` y no de listas duplicadas a mano. El campo opcional `image` guarda la ruta del logo de la tarjeta. Los metadatos siguen siendo mínimos: se ampliarán solo cuando un contenido real lo exija (por ejemplo, módulos).

Los archivos fuente PDF están en `src/cursos/R/`. No se publican ni se procesan en el build: son el material de referencia entregado por el usuario. Las ilustraciones SVG están en `public/images/` y se sirven tal cual.

Convenciones de escritura: [content-conventions.md](content-conventions.md). Decisiones: [ADR 0003](decisions/0003-curso-r-y-lecciones.md) y [ADR 0004](decisions/0004-direccion-visual-colorida.md).

## Flujo de build

1. Astro lee `astro.config.mjs` (salida `static` y resaltado de código desactivado).
2. Carga las colecciones declaradas y valida los esquemas.
3. Renderiza `src/pages/` a HTML en `dist/`. Las rutas dinámicas consultan las colecciones y renderizan cada entrada Markdown con `render()`.
4. Los estilos globales se procesan y se entregan como CSS estático; los SVG de `public/` se copian sin transformación.

No hay adapters, middleware, endpoints ni renderizado bajo demanda. Las soluciones ocultas usan `<details>` nativo y el grid de cursos es CSS puro: no hay JavaScript de cliente.

## Cómo incorporar contenido nuevo

Solo tras una solicitud explícita:

1. Crear la entrada del curso en `src/content/courses/` y las lecciones en `src/content/lessons/` siguiendo las plantillas y convenciones.
2. Asignar a cada lección un `course` existente y un `order` único dentro de ese curso; las rutas y la navegación se generan solas.
3. Ampliar los esquemas solo si el contenido real exige metadatos nuevos.
4. Añadir componentes o estilos estrictamente necesarios.
5. Validar enlaces, accesibilidad, build y documentación.

## Puntos de extensión previstos (no implementados)

- Índice de módulos y tabla de contenidos por lección.
- Componentes dedicados para diagramas y soluciones interactivas.
- Sitemap, robots y comprobación automatizada de enlaces.

No se crearán de forma anticipada.
