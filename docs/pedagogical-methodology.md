# Metodología pedagógica

Este documento describe cómo se escriben los cursos. Las tres lecciones del curso de R y las once lecciones de Python se han redactado siguiendo estas reglas; aquí no se reproduce su contenido. El curso de Python añade su propio índice maestro y skill de autoría en `src/cursos/Python/`. Desde la decisión [ADR 0007](decisions/0007-desarrollo-por-unidades-y-coherencia-con-r.md), sus ejercicios usan las mismas soluciones ocultas con `<details>` que el curso de R. La decisión [ADR 0008](decisions/0008-ancho-miniproyecto-y-navegacion-de-lecciones.md) añade un mini-proyecto final obligatorio en todas las lecciones, la [ADR 0010](decisions/0010-nombres-de-lecciones-sin-codigos.md) fija títulos descriptivos sin códigos de unidad ni de lección, la [ADR 0012](decisions/0012-lecturas-directas-sin-bloques-de-presentacion.md) suprime las tablas y los bloques de presentación para que el texto empiece directamente con el contenido, y la [ADR 0015](decisions/0015-unidades-en-desplegables.md) agrupa las lecciones de cada unidad en un desplegable con un nombre representativo declarado en `unit`.

## Estructura

Curso → Módulos → Lecciones → Apartados → Ejemplos y ejercicios.

El número de módulos y lecciones depende de la materia. No se fuerza una plantilla rígida: se usa la estructura mínima que permita aprender el tema con claridad. Cuando un curso organiza sus lecciones en unidades, cada lección declara en `unit` el nombre público y representativo de su unidad para que la página del curso muestre un desplegable por unidad; no se publican códigos internos (ADR 0015).

## Explicaciones

- Claras, directas, progresivas, precisas y naturales.
- Sin tecnicismos innecesarios; cuando aparezca uno, se define en el momento.
- No se da por supuesto ningún conocimiento que no se haya explicado antes en el curso.
- Si un concepto depende de algo externo al curso, se indica expresamente.
- Ni resúmenes que obliguen a buscar información externa ni textos artificialmente largos.
- Cada apartado aporta información relevante.

## Orden de aprendizaje

Antes de presentar un concepto se comprueba que sus prerrequisitos ya han sido explicados. No se usan herramientas, funciones ni patrones no presentados, salvo que se expliquen como contenido adicional explícitamente señalado.

## Ejemplos

- Funcionales, claros y relacionados con la explicación.
- Con un propósito didáctico y nombres descriptivos.
- Sin complejidad innecesaria y siguiendo las convenciones del lenguaje.
- Se muestra el resultado esperado cuando ayude a comprender.
- La complejidad crece de forma gradual.

## Ejercicios

Cuando la materia lo permita, cada lección incluirá ejercicios. Progresión de dificultad:

1. **Comprensión:** reconocer o interpretar conceptos.
2. **Aplicación:** usar directamente lo explicado.
3. **Integración:** combinar varios conceptos ya aprendidos.
4. **Resolución:** resolver pequeños problemas de forma autónoma.
5. **Desafío:** aplicar lo aprendido en situaciones menos guiadas.

No es obligatorio incluir todas las categorías en cada lección. La progresión debe sentirse natural.

## Soluciones ocultas

Toda solución empieza oculta y se despliega mediante un control accesible (`details`/`summary` o botón). No debe aparecer al abrir la lección. Cada solución contiene:

1. Una posible resolución.
2. El código correspondiente, cuando proceda.
3. La explicación de por qué funciona.
4. Los conceptos utilizados.
5. Los errores habituales, si resulta relevante.

No basta con mostrar el resultado final. Al ser una web estática, ocultar visualmente la solución no la hace secreta: el contenido viaja en los archivos descargados.

## Mini-proyecto final

Cada lección termina con **un único** apartado `## Mini-proyecto`. Sustituye las listas de preguntas de recuperación: en lugar de responder preguntas aisladas, el alumno realiza una tarea concreta que obliga a aplicar juntos los conceptos explicados en esa lección.

El mini-proyecto incluye:

1. Un enunciado con una situación o producto pequeño y reconocible.
2. Pasos numerados o acciones que el alumno debe ejecutar.
3. Criterios de aceptación comprobables.
4. Una posible solución oculta con `<details>` y los mismos subtítulos que los ejercicios: _Resolución_, _Por qué funciona_, _Conceptos utilizados_ y _Errores habituales_.

No se añaden varios proyectos alternativos ni preguntas sueltas después del mini-proyecto. No puede exigir conocimientos de lecciones posteriores. Decisión en [ADR 0008](decisions/0008-ancho-miniproyecto-y-navegacion-de-lecciones.md).

## Coherencia de dificultad

La dificultad depende de los conceptos explicados, la complejidad del código, los prerrequisitos, la autonomía esperada y la cantidad de conceptos que se combinan. No se introduce un ejercicio que exija conocimientos de lecciones posteriores. Un ejercicio breve puede ser exigente; uno largo puede ser sencillo.
