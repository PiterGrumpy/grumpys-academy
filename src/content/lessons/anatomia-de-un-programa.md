---
title: 'Anatomía de un programa'
description: 'Sentencias, expresiones, orden de ejecución, comentarios, bloques e indentación en un archivo Python.'
course: python
unit: 'Primeros Pasos'
order: 6
---

# Anatomía de un programa

## Sentencias y expresiones

Un programa es una secuencia de **sentencias**: instrucciones que el intérprete ejecuta para producir un efecto, como mostrar un texto o guardar un valor. Una **expresión** es una combinación de valores y operadores que _produce un valor_.

La diferencia se ve bien en el intérprete interactivo:

```text
>>> 2 + 3
5
>>> print(2 + 3)
5
```

Las dos líneas muestran `5`, pero por caminos distintos:

- `2 + 3` es una expresión. El intérprete la calcula y, en el REPL, muestra el resultado porque está en modo interactivo.
- `print(2 + 3)` es una sentencia. La expresión `2 + 3` se calcula primero y su resultado se pasa a `print()`, que es quien muestra el `5`.

En un archivo `.py` la diferencia importa: una expresión aislada se calcula, pero **no se muestra**. Este archivo no produce ninguna salida:

```python
2 + 3
```

Para ver el valor hay que pedirlo explícitamente:

```python
print(2 + 3)
```

Salida esperada:

```text
5
```

> **Consejo:** cuando quieras comprobar un cálculo, escríbelo primero en el REPL. Si funciona, copia la expresión dentro de un `print()` en tu archivo.

## Orden de ejecución

El intérprete lee un archivo de arriba abajo y ejecuta cada sentencia cuando llega a ella. No busca la «mejor» línea ni reorganiza el código: el orden que escribes es el orden que se ejecuta.

```python
print('Primero')
print('Segundo')
print('Tercero')
```

Salida esperada:

```text
Primero
Segundo
Tercero
```

Una sentencia por línea es la norma. Python permite separar varias con `;`:

```python
print('Uno'); print('Dos')
```

Salida esperada:

```text
Uno
Dos
```

Funciona, pero se evita en código legible: dificulta leer el programa y localizar errores. Las líneas en blanco no hacen nada y sirven para separar ideas.

## Comentarios

Un comentario empieza con `#` y el intérprete lo ignora por completo. Puede ocupar una línea entera o ir al final de una sentencia:

```python
# Encabezado del informe
print('Informe de la sesión')  # se muestra al ejecutar
```

Salida esperada:

```text
Informe de la sesión
```

Escribe comentarios para explicar **por qué** se hace algo o qué representa un dato que no es evidente, no para traducir el código. `print('Fin')  # muestra Fin` no aporta información nueva.

## Bloques e indentación

La **indentación** son los espacios al principio de una línea. Python la usa como parte de la sintaxis: las líneas que empiezan con la misma indentación forman un **bloque**, un grupo de sentencias que pertenecen a una misma estructura.

Los bloques aparecen en condicionales, bucles y funciones, que se estudiarán en unidades posteriores. En los programas de esta lección todas las sentencias empiezan en la primera columna; todavía no necesitamos ningún bloque.

**Adelanto opcional — no hace falta escribirlo ni entender la condición todavía.** Este fragmento solo ilustra dónde aparece un bloque:

```python
if True:
    print('Dentro del bloque')
print('Fuera del bloque')
```

Los cuatro espacios antes del primer `print()` indican que esa línea pertenece al bloque. La última línea vuelve a la primera columna y ya no pertenece a él. `True` y `if` se explicarán más adelante; aquí solo importa la idea de agrupar líneas por indentación.

Dos reglas del lenguaje:

1. Las líneas de un mismo bloque deben tener exactamente la misma indentación.
2. No se pueden mezclar tabuladores y espacios para indentar. La convención es usar cuatro espacios por nivel.

Si una línea empieza con espacios sin que haya abierto un bloque, Python se detiene antes de ejecutar nada:

```text
IndentationError: unexpected indent
```

## Ejemplo guiado

**Problema:** escribir un pequeño recibo con un encabezado, un cálculo y una línea de cierre.

**Datos de entrada:** dos cantidades fijas, escritas directamente en el programa.

**Estrategia:** comentar el propósito del archivo, calcular dentro de un `print()` y dejar una línea en blanco entre el encabezado y el detalle.

Archivo `recibo.py`:

```python
# Recibo sencillo de la sesión de práctica
print('Recibo')

print('Importe:', 12 + 3)
print('Total:', 15)
```

Salida esperada:

```text
Recibo
Importe: 15
Total: 15
```

**Lectura paso a paso:**

- La primera línea se ignora: es un comentario.
- `print('Recibo')` muestra el encabezado.
- La línea en blanco no produce salida, solo separa visualmente el código.
- En `print('Importe:', 12 + 3)`, Python calcula `12 + 3` antes de llamar a `print()` y recibe dos argumentos: el texto y el número. `print()` los separa con un espacio.
- Todas las sentencias empiezan en la primera columna, así que se ejecutan en orden.

**Modificación propuesta:** cambia `12 + 3` por `20 - 5` y ajusta el valor de `Total:`. Predice la salida, guarda y ejecuta para comprobarla.

## Laboratorio práctico

**Objetivo:** distinguir expresiones de sentencias y provocar y corregir un error de indentación.

**Archivo:** `anatomia.py` en tu carpeta de proyecto.

**Pasos:**

1. Crea `anatomia.py` con este contenido:

   ```python
   # Anatomía de un programa sencillo
   print('Inicio')

   7 * 6
   print('Resultado:', 7 * 6)
   print('Fin')
   ```

2. Guarda y ejecuta. Anota la salida: la línea con `7 * 6` no muestra nada y la de `print()` muestra `42`.
3. Añade un espacio delante de `print('Fin')`, guarda y ejecuta.
4. Lee el mensaje `IndentationError: unexpected indent` y localiza la línea señalada.
5. Quita el espacio, guarda y vuelve a ejecutar.
6. Sustituye las tres líneas de `print()` por una sola línea con `;`. Comprueba que la salida no cambia.

**Resultado esperado:** después del paso 2:

```text
Inicio
Resultado: 42
Fin
```

El paso 4 debe detenerse con `IndentationError` antes de mostrar ninguna salida; tras corregirlo, la salida vuelve a ser la anterior.

**Cómo comprobarlo:** la salida del paso 6 debe ser idéntica a la del paso 2, aunque el código esté escrito de otra forma.

**Errores previsibles y pistas:**

- Si el paso 2 muestra `42` dos veces, has añadido un `print()` a la expresión aislada.
- Si el mensaje de indentación señala otra línea, revisa también la anterior: puede tener un espacio de más.
- Si el editor inserta tabuladores al pulsar `Tab`, configúralo para usar cuatro espacios.

## Errores frecuentes y depuración

| Síntoma                                   | Causa probable                                  | Cómo localizarlo y corregirlo                          |
| ----------------------------------------- | ----------------------------------------------- | ------------------------------------------------------ |
| `IndentationError: unexpected indent`     | Una línea empieza con espacios sin abrir bloque | Quita los espacios iniciales de esa línea              |
| `TabError: inconsistent use of tabs...`   | Se mezclaron tabuladores y espacios             | Usa solo cuatro espacios en todas las líneas           |
| Un cálculo no aparece en la salida        | Es una expresión aislada en un archivo          | Envuelve la expresión en `print()`                     |
| La salida aparece en una sola línea       | Se escribió un texto con comas dentro           | Usa varios argumentos separados por comas en `print()` |
| El editor marca una línea como comentario | Tiene `#` delante                               | Quita el `#` si querías ejecutarla                     |

Un error de indentación se detecta antes de ejecutar el archivo: Python no puede agrupar las líneas y se detiene. Léelo como un problema de forma, no de lógica.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** las sentencias se ejecutan en orden; la indentación define bloques; un comentario se ignora.
- **Convención aceptada:** cuatro espacios por nivel de indentación, nunca tabuladores.
- **Preferencia de estilo:** una sentencia por línea y comentarios que expliquen intenciones.
- **Decisión de contexto:** el `;` es válido en el REPL para ahorrar espacio; en un archivo se prefiere una línea por sentencia.

Para un proyecto junior, un archivo fácil de leer en voz alta es más valioso que uno compacto. La claridad no es un adorno: reduce el tiempo que necesitas para encontrar un fallo.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Clasifica cada elemento como expresión, sentencia o comentario:

1. `3 * 4`
2. `print('Hola')`
3. `# Precio sin impuestos`

**Criterios de aceptación:** tres respuestas correctas y una frase que explique por qué una expresión aislada no muestra nada en un archivo.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

1. Expresión: produce el valor `12`.
2. Sentencia: llama a `print()` para mostrar un texto.
3. Comentario: el intérprete lo ignora.

En un archivo, una expresión aislada se calcula pero no se muestra; hace falta pasarla a `print()`.

#### Por qué funciona

Toda llamada a una función es una sentencia cuando se ejecuta por su efecto. Una expresión puede aparecer dentro de esa sentencia como argumento.

#### Conceptos utilizados

- Sentencias y expresiones.
- Comentarios con `#`.
- Diferencia entre REPL y archivo.

#### Errores habituales

- Creer que toda línea que contiene números debe mostrar algo.
- Confundir un comentario con una sentencia que «no funciona».

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Escribe `orden.py` con un comentario de encabezado y tres `print()`: el primero `Preparando`, el segundo el resultado de `6 * 7` y el tercero `Listo`. La línea del resultado debe calcular la multiplicación dentro de `print()`.

**Criterios de aceptación:** salida de tres líneas, con `42` en la segunda, y ninguna línea de cálculo aislada.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
# Orden de ejecución de la práctica
print('Preparando')
print(6 * 7)
print('Listo')
```

Salida esperada:

```text
Preparando
42
Listo
```

#### Por qué funciona

Las sentencias se ejecutan de arriba abajo. `6 * 7` se calcula antes de llamar a `print()`, y el resultado se muestra en la segunda línea.

#### Conceptos utilizados

- Orden de ejecución.
- Expresión usada como argumento.
- Comentarios.

#### Errores habituales

- Escribir `6 * 7` en una línea propia y esperar que aparezca `42`.
- Poner la multiplicación entre comillas, con lo que se mostraría el texto `6 * 7`.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Este archivo se detiene con un error. Localiza la línea, explica el motivo y corrígelo sin borrar las demás:

```python
print('Uno')
  print('Dos')
print('Tres')
```

**Criterios de aceptación:** el archivo muestra tres líneas y el mensaje de error queda explicado con tus palabras.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

El mensaje es `IndentationError: unexpected indent` y señala la segunda línea, que empieza con dos espacios sin que ninguna estructura haya abierto un bloque.

```python
print('Uno')
print('Dos')
print('Tres')
```

Salida esperada:

```text
Uno
Dos
Tres
```

#### Por qué funciona

Python solo permite indentar líneas dentro de un bloque.Como aquí no hay ninguno, las tres sentencias deben empezar en la primera columna.

#### Conceptos utilizados

- Indentación y bloques.
- Lectura de un `IndentationError`.

#### Errores habituales

- Añadir más espacios a las otras líneas para «igualar» la que falla.
- Borrar la línea señalada en lugar de quitarle los espacios.

</details>

### Reto opcional

Reescribe este archivo con una sentencia por línea, sin `;`:

```python
print('A'); print('B'); print('C')
```

**Criterio de aceptación:** la salida sigue siendo `A`, `B` y `C` en tres líneas.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

```python
print('A')
print('B')
print('C')
```

Salida esperada:

```text
A
B
C
```

#### Por qué funciona

Separar las sentencias en líneas distintas no cambia el orden de ejecución: el intérprete sigue leyendo de arriba abajo.

#### Conceptos utilizados

- Orden de ejecución.
- Una sentencia por línea.

#### Errores habituales

- Mantener las comas o los puntos y coma al pasar a líneas separadas.
- Cambiar el orden de las líneas al reescribir.

</details>

## Integración con el proyecto longitudinal

Todavía no corresponde. El gestor de tareas se construirá más adelante y usará estas mismas sentencias y añadirá bloques cuando aparezcan los condicionales. Por ahora, `recibo.py` y `anatomia.py` son ejemplos independientes que fijan el ciclo de trabajo.

## Resumen

Ideas clave:

- Una sentencia ejecuta una acción; una expresión produce un valor.
- En un archivo, una expresión aislada no se muestra: hay que pasarla a `print()`.
- El intérprete ejecuta las sentencias de arriba abajo.
- Los comentarios empiezan con `#` y no se ejecutan.
- La indentación agrupa sentencias en bloques y debe usar cuatro espacios.

Comprueba que puedes:

- Explicar la diferencia entre `2 + 3` y `print(2 + 3)` en un archivo.
- Escribir un programa con tres sentencias en orden.
- Reconocer y corregir un `IndentationError`.
- Decidir cuándo un comentario aporta información útil.

## Mini-proyecto: cartel de la sesión

Crea `cartel.py` con un encabezado comentado, un título, una línea que muestre el resultado de `9 * 4` calculado dentro de `print()`, una línea en blanco y una frase de cierre. Después provoca a propósito un error de indentación en la última línea, léelo y corrigelo.

1. Escribe el archivo con todas las sentencias en la primera columna.
2. Guarda y ejecuta; comprueba que la línea en blanco no aparece en la salida.
3. Añade dos espacios delante de la última `print()`, guarda y ejecuta.
4. Copia el mensaje de error, corrige la indentación y ejecuta una última vez.

**Criterios de aceptación:** la salida tiene tres líneas, la segunda muestra `36`, el comentario no aparece y el error se localiza y se corrige sin reescribir el archivo.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

```python
# Cartel de la sesión de práctica
print('Cartel de la sesión')
print(9 * 4)

print('Hasta la próxima')
```

Salida esperada:

```text
Cartel de la sesión
36
Hasta la próxima
```

Al indentar la última línea, Python muestra:

```text
IndentationError: unexpected indent
```

#### Por qué funciona

La expresión `9 * 4` se evalúa antes de llamar a `print()`. La línea en blanco no genera salida y el comentario se descarta al leer el archivo. Una línea indentada sin bloque abierto impide que Python agrupe las sentencias, por lo que se detiene antes de ejecutar.

#### Conceptos utilizados

- Sentencias, expresiones y argumentos de `print()`.
- Comentarios y líneas en blanco.
- Indentación y `IndentationError`.

#### Errores habituales

- Escribir `print('9 * 4')`: se mostraría el texto, no el resultado.
- Borrar la línea en blanco pensando que es un error.
- Corregir el error añadiendo espacios a las líneas que ya estaban bien.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `cartel.py` y comprueba la salida de tres líneas.
2. Provoca el `IndentationError`, copia el mensaje y explícalo con tus palabras.
3. Compara tus respuestas con las soluciones ocultas.

Criterios de revisión: distinción entre expresión y sentencia, orden de ejecución, uso correcto de comentarios y corrección de la indentación.

**Estado:** lección «Anatomía de un programa», pendiente de autoevaluación. Siguiente lección: «Variables y asignación».

## Recursos

- [Introduction — The Python Tutorial](https://docs.python.org/3/tutorial/introduction.html): ejemplos oficiales del intérprete, expresiones y comentarios.
- [Simple statements — Python Language Reference](https://docs.python.org/3/reference/simple_stmts.html): referencia oficial de las sentencias simples, incluida la asignación y la instrucción `pass`.
