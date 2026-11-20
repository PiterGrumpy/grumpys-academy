# Grumpy's Academy

Plataforma estática de aprendizaje de programación en español.

**Estado actual:** curso «Introducción a R» publicado con tres lecciones —instalación y primeros pasos, vectores y matrices, y dataframes y listas—. El inicio muestra los cursos en un grid de tarjetas con acentos de color y las lecciones incluyen ilustraciones SVG locales, ejemplos y ejercicios con solución oculta. El material original son tres PDF entregados por el usuario, que sirven de guía y no se publican.

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
├── layouts/             Estructura HTML compartida
├── pages/               Inicio y rutas de cursos
│   └── cursos/          Índice, página de curso y de lección
└── styles/              Tokens y estilos globales
```

Las ilustraciones se sirven desde `public/images/`. Las lecciones están disponibles en `/cursos/r/`. El diseño visual y sus tokens están descritos en [diseño visual](docs/visual-design.md) (ADR 0004).

La documentación completa está en `AGENT.md` (instrucciones), `MEMORY.md` (memoria) y `docs/`:

- [Arquitectura](docs/architecture.md)
- [Diseño visual](docs/visual-design.md)
- [Metodología pedagógica](docs/pedagogical-methodology.md)
- [Convenciones de contenido](docs/content-conventions.md)
- [Decisiones arquitectónicas](docs/decisions/)
- [Plantillas](docs/templates/)

## Contribución

Leer `AGENT.md` antes de cualquier cambio. No añadir cursos ni contenido ficticio sin una petición explícita. El flujo está descrito en [CONTRIBUTING.md](CONTRIBUTING.md).
