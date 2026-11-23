# ADR 0006 — Curso de Python y autoría iterativa

- **Estado:** aceptada
- **Fecha:** 2026-11-23

## Contexto

El usuario pidió expresamente un curso de Python que continuara el proyecto y entregó dos documentos de instrucción en `src/cursos/Python/`: un índice maestro con 26 unidades y una skill de autoría. El índice exige desarrollar una lección por iteración, empezar por `U0-L0.1`, esperar evidencia del alumno antes de pasar a la siguiente y mantener un registro de progreso. El sitio ya publicaba el curso de R con tres lecciones y un sistema de colecciones que permitía añadir otro curso sin cambiar rutas ni estilos.

## Decisión

- Publicar una entrada `python` en `courses` y la lección `U0-L0.1` en `lessons`, sin logo ni ilustraciones: no existe un recurso visual real que aporte información a esa lección.
- Mantener el índice maestro, la skill y el registro `PROGRESO.md` en `src/cursos/Python/`, fuera del build. El registro es la fuente visible del estado; la web no almacena progreso.
- Seguir el índice y la skill para el orden y el formato de cada lección: una lección por iteración, criterios de aceptación y espera de entrega antes de continuar.
- Fijar Python 3.14 como versión objetivo —comprobada con 3.14.7 en el entorno de desarrollo— y verificar las salidas mostradas antes de publicarlas.
- Conservar las convenciones del sitio: rutas en minúsculas, ID exacto en el título y en el registro, y nombre de archivo con el ID en minúsculas para cumplir las rutas limpias.
- No incluir soluciones completas en los ejercicios de entrada: se entregan pistas y se revisan las respuestas del alumno.

## Alternativas consideradas

- Publicar las 26 unidades de una vez: contradice el índice maestro, adelanta conceptos y llena el sitio de lecciones sin práctica verificada.
- Crear una colección de módulos para reflejar las unidades: no hay contenido suficiente que justifique la abstracción todavía.
- Convertir la skill entregada en una skill versionada de `.opencode/skills/`: duplicaría un documento que debe acompañar al índice maestro del curso.
- Añadir un logo decorativo y JavaScript para el progreso: el primero no aporta información y el segundo rompe el carácter estático del sitio.

## Consecuencias

Positivas: segundo curso real con una primera lección evaluable, reutilización de rutas y estilos, acento de tarjeta distinto sin CSS nuevo y estado del curso trazable sin backend.

Negativas: el registro de progreso hay que actualizarlo a mano en cada iteración; el título de la lección incluye el identificador del currículo, que es menos natural que un título puramente descriptivo.

## Decisiones posteriores

Esta decisión conserva el estado inicial del curso. La [ADR 0007](0007-desarrollo-por-unidades-y-coherencia-con-r.md) sustituyó la espera de evidencia por autoevaluación con soluciones ocultas en el modo de desarrollo completo; la [ADR 0009](0009-recursos-visuales-con-mcp.md) incorporó esquemas SVG locales; la [ADR 0010](0010-nombres-de-lecciones-sin-codigos.md) eliminó los códigos `U`/`L` de títulos, archivos y texto visible; y la [ADR 0014](0014-logos-oficiales-y-descripcion-completa.md) sustituyó el estado inicial «sin logo» por el logo oficial de Python en la tarjeta. Los códigos que aparecen arriba son referencias históricas al índice interno.

## Revisión

Revisar al publicar la siguiente lección, cuando el curso de Python necesite módulos propios o si se decide almacenar el progreso en el navegador.
