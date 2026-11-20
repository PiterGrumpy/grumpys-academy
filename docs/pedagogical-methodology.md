# Metodología pedagógica

Este documento describe cómo se escribirán los cursos cuando se soliciten. No contiene cursos reales.

## Estructura

Curso → Módulos → Lecciones → Apartados → Ejemplos y ejercicios.

El número de módulos y lecciones depende de la materia. No se fuerza una plantilla rígida: se usa la estructura mínima que permita aprender el tema con claridad.

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

## Coherencia de dificultad

La dificultad depende de los conceptos explicados, la complejidad del código, los prerrequisitos, la autonomía esperada y la cantidad de conceptos que se combinan. No se introduce un ejercicio que exija conocimientos de lecciones posteriores. Un ejercicio breve puede ser exigente; uno largo puede ser sencillo.
