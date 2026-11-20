# Plantillas de contenido

Estas plantillas son **guías de escritura**, no contenido de la plataforma. Ningún archivo de esta carpeta se carga como curso, módulo o lección.

## Uso

1. Solo cuando se solicite expresamente un curso, copiar la plantilla necesaria a `src/content/courses/` (o a la ruta que defina la convención vigente).
2. Sustituir todos los marcadores `{{...}}`.
3. Eliminar las notas de guía entre comentarios.
4. Comprobar `docs/content-conventions.md`, `docs/pedagogical-methodology.md` y el esquema de `src/content.config.ts`.
5. No conservar texto de relleno: si una sección no aporta información, eliminarla.

## Plantillas

| Archivo                            | Para qué sirve                               |
| ---------------------------------- | -------------------------------------------- |
| [course.md](course.md)             | Metadatos y presentación de un curso         |
| [module.md](module.md)             | Agrupación de lecciones de un módulo         |
| [lesson.md](lesson.md)             | Explicación, ejemplo y cierre de una lección |
| [exercise.md](exercise.md)         | Enunciado, pistas y criterios de éxito       |
| [solution.md](solution.md)         | Resolución oculta y explicación pedagógica   |
| [code-example.md](code-example.md) | Ejemplo de código con propósito y resultado  |

Las plantillas son flexibles: pueden omitirse secciones vacías y añadirse otras si el tema lo requiere. Lo importante es la coherencia pedagógica, no repetir exactamente la misma forma.
