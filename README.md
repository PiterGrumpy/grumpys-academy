# Grumpy's Academy

Base estática para una futura plataforma de aprendizaje de programación en español.

**Estado actual:** proyecto de cimentación. No hay cursos, módulos, lecciones ni ejercicios publicados. La página de inicio es deliberadamente neutra y no simula un catálogo.

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
├── components/          Componentes reutilizables
├── content/courses/     Contenido real futuro (vacío ahora)
├── content.config.ts    Esquemas de contenido
├── layouts/             Estructura HTML compartida
├── pages/               Rutas
└── styles/              Tokens y estilos globales
```

La documentación completa está en `AGENT.md` (instrucciones), `MEMORY.md` (memoria) y `docs/`:

- [Arquitectura](docs/architecture.md)
- [Diseño visual](docs/visual-design.md)
- [Metodología pedagógica](docs/pedagogical-methodology.md)
- [Convenciones de contenido](docs/content-conventions.md)
- [Decisiones arquitectónicas](docs/decisions/)
- [Plantillas](docs/templates/)

## Contribución

Leer `AGENT.md` antes de cualquier cambio. No añadir cursos ni contenido ficticio sin una petición explícita. El flujo está descrito en [CONTRIBUTING.md](CONTRIBUTING.md).
