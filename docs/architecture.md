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
Interfaz        src/pages/         Rutas (actualmente solo index.astro)
                src/layouts/       Estructura HTML compartida
                src/components/    Piezas reutilizables
Contenido       src/content.config.ts   Definición de colecciones y esquemas
                src/content/courses/    Entradas Markdown reales (vacío)
Estilos         src/styles/global.css   Tokens y estilos base
Recursos        public/                Favicon y estáticos sin procesar
Configuración   astro.config.mjs, tsconfig.json, eslint.config.mjs,
                .prettierrc.json, opencode.jsonc
Documentación   AGENT.md, MEMORY.md, README.md, CONTRIBUTING.md, docs/
Instrucciones   .opencode/skills/       Skills versionadas del agente
```

Regla de oro: el contenido nunca importa componentes y los componentes nunca contienen texto de curso.

## Sistema de contenido

`src/content.config.ts` declara una colección `courses` con el loader `glob` sobre `src/content/courses` y un esquema mínimo:

- `title`: título del curso.
- `description`: descripción breve.

No hay entradas. El directorio se mantiene con un `.gitkeep` para que la ruta exista. Cuando se solicite un curso, se añadirán archivos Markdown y se ampliará el esquema con los metadatos que ese curso necesite (orden, módulos, navegación), no antes.

Convenciones de escritura: [content-conventions.md](content-conventions.md).

## Flujo de build

1. Astro lee `astro.config.mjs` (salida `static`).
2. Carga las colecciones declaradas y valida los esquemas.
3. Renderiza `src/pages/` a HTML en `dist/`.
4. Los estilos globales se procesan y se entregan como CSS estático.

No hay adapters, middleware, endpoints ni renderizado bajo demanda.

## Cómo incorporar un curso en el futuro

Solo tras una solicitud explícita:

1. Crear la entrada Markdown bajo `src/content/courses/` siguiendo las plantillas y convenciones.
2. Ampliar el esquema de la colección si hacen falta metadatos nuevos.
3. Crear la ruta que liste cursos y la ruta dinámica de curso/lección usando `getCollection()` y `getStaticPaths()`.
4. Añadir los componentes de contenido estrictamente necesarios.
5. Validar enlaces, accesibilidad, build y documentación.

## Puntos de extensión previstos (no implementados)

- Índice de cursos y páginas de curso.
- Índice de módulos y navegación entre lecciones.
- Componentes para ejemplos, avisos, tablas, diagramas y soluciones ocultas.
- Sitemap, robots y comprobación de enlaces.

No se crearán de forma anticipada.
