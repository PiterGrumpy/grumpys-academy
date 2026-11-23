# Grumpy's Academy

Plataforma estática de aprendizaje de programación en español.

**Estado actual:** curso «Introducción a R» publicado con tres lecciones —instalación y primeros pasos, vectores y matrices, y dataframes y listas— y curso «Python desde cero hasta nivel junior» con once lecciones publicadas. El inicio muestra los cursos en un grid de tarjetas del mismo tamaño, con los logos oficiales de R y Python servidos como SVG locales, bloques alineados y descripción completa; las lecciones empiezan directamente con el contenido e incluyen ilustraciones SVG locales, ejemplos, ejercicios con solución oculta y un mini-proyecto integrador final. El material original de R son tres PDF entregados por el usuario, que sirven de guía y no se publican. El itinerario y el progreso de Python están en `src/cursos/Python/`.

## Requisitos

- Node.js 20.3.0 o superior (probado con 20.20.0; Astro 6/7 requieren Node 22)
- npm 9.6.5 o superior

## Puesta en marcha

```sh
npm install
npm run dev
```

Abrir la URL local que muestra Astro (normalmente `http://localhost:4321`).

## Comandos

| Comando                | Finalidad                                      |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo                         |
| `npm run build`        | Build estático de producción en `dist/`        |
| `npm run preview`      | Vista previa local del build                   |
| `npm run lint`         | Revisión de estilo con ESLint                  |
| `npm run format`       | Formateo con Prettier                          |
| `npm run format:check` | Comprobación de formato sin modificar archivos |
| `npm run check`        | Comprobación de tipos y diagnósticos de Astro  |
| `npm run validate`     | Lint + formato + comprobación de tipos         |

## Estructura resumida

```text
src/
├── components/          CourseCard y SiteHeader
├── content/courses/     Entradas de cursos
├── content/lessons/     Entradas de lecciones
├── content.config.ts    Esquemas de contenido
├── cursos/R/            PDF originales (referencia, no publicados)
├── cursos/Python/       Índice, skill de autoría y progreso (no publicado)
├── layouts/             Estructura HTML compartida
├── pages/               Inicio y rutas de cursos
│   └── cursos/          Índice, página de curso y de lección
└── styles/              Tokens y estilos globales
```

Las ilustraciones se sirven desde `public/images/`. Las lecciones están disponibles en `/cursos/r/` y en `/cursos/python/`. El diseño visual y sus tokens están descritos en [diseño visual](docs/visual-design.md) (ADR 0004).

La documentación completa está en `docs/`:

- [Arquitectura](docs/architecture.md)
- [Diseño visual](docs/visual-design.md)
- [Metodología pedagógica](docs/pedagogical-methodology.md)
- [Convenciones de contenido](docs/content-conventions.md)
- [Decisiones arquitectónicas](docs/decisions/)
- [Plantillas](docs/templates/)

## Contribución

No añadir cursos ni contenido ficticio sin una petición explícita. El flujo está descrito en [CONTRIBUTING.md](CONTRIBUTING.md).
