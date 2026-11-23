# ADR 0008 — Contenido más ancho, mini-proyecto final y navegación izquierda/derecha

- **Estado:** aceptada
- **Fecha:** 2026-11-23
- **Modifica parcialmente:** ADR 0004
- **Complementa:** ADR 0007

## Contexto

El usuario pidió tres cambios transversales: «todo el contenido un poco más ancho», sustituir las preguntas del final de cada lección por «un mini-proyecto/ejercicio único» que obligue a aplicar lo explicado, y colocar el enlace a la lección anterior a la izquierda y el de la siguiente a la derecha. También pidió actualizar las skills para que estos criterios se respeten en el futuro.

Hasta ahora, `--measure` era `68ch`, las lecciones de Python cerraban con tres preguntas de recuperación dentro de `## Resumen`, las lecciones de R no tenían ninguna actividad de cierre diferenciada y la navegación usaba `flex-wrap`, que podía apilar los enlaces en pantallas estrechas.

## Decisión

- Ampliar `--measure` de `68ch` a `80ch`. El contenedor ancho del inicio y los índices se mantiene en `72rem`.
- Cerrar **cada lección** con un único apartado `## Mini-proyecto`: un enunciado integrador, pasos o acciones del alumno, criterios de aceptación y una solución oculta con `<details>` y los cuatro subtítulos ya usados por los ejercicios. No se incluyen listas de preguntas de recuperación ni varios proyectos alternativos.
- Mantener el mismo formato en los cursos de R y Python. En Python el mini-proyecto se sitúa después de `## Resumen` y antes de `## Tu entrega o autoevaluación`; en R, después de los ejercicios.
- Convertir `.lesson-nav` en una grilla de dos columnas con `lesson-nav__prev` y `lesson-nav__next`: anterior a la izquierda, siguiente a la derecha, con `overflow-wrap: anywhere` y etiquetas `aria-label` descriptivas. No se añade JavaScript ni componentes nuevos.
- Actualizar las seis skills versionadas que afectan a contenido, ejercicios, diseño, arquitectura y validación, además de la skill de autoría de Python, para que futuras lecciones cumplan estas reglas sin recordatorios adicionales.

## Alternativas consideradas

- Incrementar solo el contenedor ancho: no habría mejorado la lectura de lecciones, que es donde más tablas y bloques de código aparecen.
- Mantener las preguntas y añadir un proyecto: duplicaría el cierre y dispersaría la práctica; el usuario pidió sustituirlas.
- Dejar el mini-proyecto sin solución: rompería la coherencia con el resto de ejercicios y con las autoevaluaciones de Python.
- Conservar `flex-wrap` en la navegación: en móvil los enlaces podían apilarse y perder la posición izquierda/derecha solicitada.
- Crear un componente `LessonNav`: añadiría una abstracción para un único uso que ya resuelven el HTML y el CSS globales.

## Consecuencias

Positivas: más espacio para tablas y código sin perder un límite de lectura, una única actividad final que exige aplicar la lección completa, y navegación predecible en cualquier ancho de pantalla.

Negativas: hay que redactar y mantener un mini-proyecto por lección; el ancho de 80ch puede requerir una nueva revisión en pantallas pequeñas. Ambas cosas quedan cubiertas por las comprobaciones de las skills de calidad y accesibilidad.

## Revisión

Revisar al iniciar el siguiente bloque de lecciones de Python para confirmar que el mini-proyecto único se integra sin fricción con la autoevaluación y que la navegación conserva su posición en móvil, tablet y escritorio. La [ADR 0010](0010-nombres-de-lecciones-sin-codigos.md) ajustó después la convención de nombres públicos; los códigos `U`/`L` son internos del índice maestro.
