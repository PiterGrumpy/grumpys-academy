---
title: 'Primer programa y REPL'
description: 'Modo interactivo, archivos .py, print(), comentarios y errores de sintaxis iniciales en el ciclo guardar–ejecutar–cambiar.'
course: python
unit: 'Antes de empezar'
order: 4
---

# Primer programa y REPL

## El intérprete interactivo (REPL)

**REPL** son las siglas de _read–eval–print loop_, es decir, «leer, evaluar, imprimir, repetir». Al escribir `python` —o `python3`— sin argumentos, el intérprete muestra un aviso `>>>` y espera instrucciones. Cada línea se ejecuta en cuanto pulsas `Enter`.

Para salir, escribe `exit()` y pulsa `Enter`.

Diálogo ilustrativo —lo que escribes aparece detrás de `>>>`—:

```text
>>> print('Hola desde el intérprete')
Hola desde el intérprete
>>> print('uno', 'dos')
uno dos
>>> exit()
```

El contenido que aparece sin `>>>` es la respuesta del intérprete, no texto que hayas escrito.

## Archivos `.py`

Un archivo con extensión `.py` contiene instrucciones guardadas. Al ejecutarlo, el intérprete las lee de arriba abajo y las ejecuta todas, sin esperar confirmación entre líneas.

La diferencia práctica es importante: en el REPL una instrucción se ejecuta al escribirla; en un archivo, solo cuando ejecutas el archivo. Guardar antes de ejecutar evita probar una versión antigua del código.

## `print()` y sus argumentos

`print()` es una **función**: un nombre seguido de paréntesis que realiza una acción. Lo que va dentro de los paréntesis son **argumentos**, los datos que la función usa.

- `print('Hola')` muestra un texto. El texto va entre comillas porque es un valor de tipo cadena.
- `print('uno', 'dos')` muestra los dos valores separados por un espacio. En el entorno de desarrollo se ha ejecutado y produce `uno dos`.
- Cada `print()` termina con un salto de línea.

## Comentarios

Un comentario empieza con `#`. El intérprete lo ignora por completo: no se ejecuta ni aparece en la salida.

```python
# Mostramos el encabezado del diario
print('Diario de aprendizaje')
```

Los comentarios sirven para explicar **por qué** se hace algo, no para repetir lo que el código ya dice. `print('Diario')  # muestra diario` aporta poco; `print('Diario')  # encabezado del informe` explica una intención.

## Errores de sintaxis

La **sintaxis** son las reglas de escritura del lenguaje. Si falta un paréntesis o una comilla, el intérprete no puede entender el archivo y muestra un `SyntaxError` antes de ejecutarlo.

Al ejecutar un archivo con `print('Hola'` —sin cerrar el paréntesis—, el entorno de desarrollo produjo:

```text
  File "C:\Users\legac\AppData\Local\Temp\opencode_syntax_error.py", line 1
    print('Hola'
         ^
SyntaxError: '(' was never closed
```

Tres pistas en ese mensaje:

1. `line 1` indica la línea problemática.
2. El símbolo `^` señala el punto aproximado donde el intérprete detectó el fallo.
3. La última línea describe el problema: el paréntesis `(` nunca se cerró.

La ruta entre comillas cambiará en tu equipo. Lo estable es la línea, el acento circunflejo y la descripción final.

## Ejemplo guiado

**Problema:** probar una frase en el REPL y después guardarla en un archivo.

**Datos de entrada:** dos textos cortos.

**Estrategia:** probar primero en modo interactivo y copiar la versión correcta al archivo.

En el REPL:

```text
>>> print('Hoy aprendo sobre el intérprete')
Hoy aprendo sobre el intérprete
>>> print('Segunda línea', 'sin problema')
Segunda línea sin problema
>>> exit()
```

Archivo `diario.py`:

```python
# El encabezado se muestra antes que el detalle
print('Hoy aprendo sobre el intérprete')
print('Segunda línea', 'sin problema')
```

Salida esperada:

```text
Hoy aprendo sobre el intérprete
Segunda línea sin problema
```

**Lectura paso a paso:**

- En el REPL, cada `print()` se ejecuta al pulsar `Enter`.
- En el archivo, el comentario se ignora y las dos instrucciones se ejecutan en orden.
- La salida coincide porque el código es el mismo; solo cambia el modo de entrega.

**Modificación propuesta:** añade una tercera línea con `print('Fin')` en el archivo. Predice la salida, guarda y ejecuta. Después prueba la misma línea en el REPL y compara.

## Laboratorio práctico

**Objetivo:** completar un ciclo guardar → ejecutar → cambiar → volver a ejecutar, incluida una corrección de sintaxis.

**Archivos:** `diario.py` dentro de tu carpeta de proyecto.

**Pasos:**

1. Abre el REPL con `python` o `python3` y ejecuta `print('Prueba en el intérprete')`.
2. Sal con `exit()`.
3. Crea `diario.py` con este contenido:

   ```python
   # Registro breve de la sesión
   print('Aprendiendo Python')
   print('Lección de Python')
   ```

4. Guarda y ejecuta el archivo desde la terminal.
5. Cambia `'Lección de Python'` por `'Sesión completada'`, guarda y vuelve a ejecutar.
6. Ahora escribe la primera línea sin cerrar el paréntesis: `print('Aprendiendo Python'`.
7. Guarda y ejecuta. Localiza la línea y el mensaje `SyntaxError`.
8. Corrige el paréntesis, guarda y ejecuta una última vez.

**Resultado esperado:** después del paso 5:

```text
Aprendiendo Python
Sesión completada
```

El paso 7 debe mostrar un `SyntaxError: '(' was never closed`. Tras corregirlo, la salida vuelve a ser la anterior.

**Cómo comprobarlo:** comparar la salida antes y después del cambio, y verificar que el error apareció solo mientras faltaba el paréntesis.

**Errores previsibles y pistas:**

- Si no aparece el error del paso 7, comprueba que guardaste el archivo antes de ejecutarlo.
- Si el mensaje señala otra línea, revisa también esa línea: puede quedar una comilla sin cerrar arriba.
- Si el REPL no responde, escribe `exit()` para cerrarlo y vuelve a la terminal.

## Errores frecuentes y depuración

| Síntoma                                               | Causa probable                   | Cómo localizarlo y corregirlo                                  |
| ----------------------------------------------------- | -------------------------------- | -------------------------------------------------------------- |
| `SyntaxError: '(' was never closed`                   | Falta un paréntesis de cierre    | Ve a la línea indicada y cierra el paréntesis                  |
| `SyntaxError: unterminated string literal`            | Falta la comilla de cierre       | Compara las comillas de apertura y cierre en la línea señalada |
| `SyntaxError: Missing parentheses in call to 'print'` | Se escribió sintaxis de Python 2 | Usa `print('texto')`                                           |
| El cambio no aparece al ejecutar                      | El archivo no se guardó          | Guarda y vuelve a ejecutar                                     |
| El texto del comentario aparece en pantalla           | Falta el `#` inicial             | Añade `#` al principio de la línea                             |

El mensaje de error es una pista, no una descalificación. Léelo de abajo arriba: primero la descripción, después la línea y el punto señalado.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** `print()` necesita paréntesis; el texto va entre comillas; las instrucciones se ejecutan en orden.
- **Convención aceptada:** los comentarios empiezan con `#` y explican intenciones, no obviedades.
- **Preferencia de estilo:** usar comillas simples o dobles es indiferente mientras sean coherentes; este curso usa simples.
- **Decisión de contexto:** el REPL para probar ideas, el archivo para conservarlas.

Para un proyecto junior, guardar versiones legibles y saber interpretar un error simple vale más que escribir código ingenioso.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Decide qué ocurre en cada caso y por qué:

1. Una línea que empieza por `#`.
2. `print('uno', 'dos')`.
3. Un archivo con `print('Hola'` sin cerrar.

**Criterios de aceptación:** tres respuestas correctas y una frase que defina `SyntaxError`.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

1. El intérprete la ignora: es un comentario.
2. Muestra `uno dos`, con un espacio entre los valores.
3. El archivo no se ejecuta y muestra un `SyntaxError`.

Un `SyntaxError` indica que el código no cumple las reglas de escritura del lenguaje, así que el intérprete no puede analizarlo.

#### Por qué funciona

Los comentarios se descartan al leer el archivo; `print()` separa sus argumentos con un espacio; un paréntesis sin cerrar impide entender la instrucción.

#### Conceptos utilizados

- Comentarios.
- Argumentos de `print()`.
- Errores de sintaxis.

#### Errores habituales

- Pensar que un comentario se muestra en la salida.
- Confundir un error de sintaxis con un error al ejecutar una instrucción válida.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Crea `saludo.py` con un comentario y tres `print()`: el primero tu nombre, el segundo tu ciudad y el tercero la frase `Fin de la práctica`.

**Criterios de aceptación:** la salida tiene tres líneas y el comentario no aparece.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
# Datos personales de ejemplo
print('Ana')
print('Valencia')
print('Fin de la práctica')
```

Salida esperada:

```text
Ana
Valencia
Fin de la práctica
```

#### Por qué funciona

El intérprete ignora la línea de comentario y ejecuta los tres `print()` en orden, cada uno con su salto de línea.

#### Conceptos utilizados

- Comentarios con `#`.
- Varias instrucciones en un archivo.

#### Errores habituales

- Escribir el comentario sin `#`.
- Olvidar las comillas en los textos.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Provoca a propósito un `SyntaxError: '(' was never closed` en `saludo.py`, cópialo en tu cuaderno y corrígelo sin borrar el resto del archivo.

**Criterios de aceptación:** el mensaje copiado incluye `line` y `SyntaxError`, y el archivo vuelve a funcionar.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

Si se deja la primera línea así:

```python
print('Ana'
```

El mensaje incluye:

```text
  File "...", line 1
    print('Ana'
         ^
SyntaxError: '(' was never closed
```

La corrección es `print('Ana')`.

#### Por qué funciona

La línea y el símbolo `^` localizan el punto del fallo. La descripción final indica qué regla de sintaxis se incumplió.

#### Conceptos utilizados

- Lectura de mensajes de error.
- Sintaxis de `print()`.

#### Errores habituales

- Borrar todo el archivo en lugar de corregir una sola línea.
- Mirar solo la primera línea del mensaje y no la descripción final.

</details>

### Reto opcional

En el REPL, ejecuta `print('uno', 'dos', 'tres')` y anota la salida. Después consigue el mismo resultado en un archivo con una sola instrucción.

**Criterio de aceptación:** ambas salidas son idénticas.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

Salida:

```text
uno dos tres
```

Archivo `tres_valores.py`:

```python
print('uno', 'dos', 'tres')
```

#### Por qué funciona

`print()` acepta varios argumentos separados por comas y los muestra en orden, separados por un espacio. El modo de entrega —REPL o archivo— no cambia el resultado.

#### Conceptos utilizados

- Argumentos múltiples de `print()`.
- Equivalencia entre REPL y archivo.

#### Errores habituales

- Escribir una sola cadena con comas dentro: `'uno, dos, tres'` mostraría las comas.
- Crear tres `print()` en lugar de uno: la salida ocuparía tres líneas.

</details>

## Integración con el proyecto longitudinal

Todavía no corresponde. `diario.py` es un ejemplo independiente que sirve para practicar el ciclo de trabajo; el gestor de tareas aparecerá más adelante.

## Resumen

Ideas clave:

- El REPL ejecuta instrucciones línea a línea; un archivo `.py` las ejecuta completas.
- `print()` muestra sus argumentos separados por espacios y termina la línea.
- Un comentario empieza con `#` y no se ejecuta.
- Un `SyntaxError` impide que el archivo se ejecute y señala una línea.
- Guardar antes de ejecutar es parte del ciclo de trabajo.

Comprueba que puedes:

- Entrar y salir del intérprete interactivo.
- Escribir un archivo con tres `print()` y un comentario.
- Explicar la diferencia entre REPL y archivo.
- Corregir un paréntesis sin cerrar usando el mensaje de error.

## Mini-proyecto: cartelera de la sesión

Prepara una cartelera en un archivo y comprueba los dos modos de ejecución. Debe tener un comentario de encabezado y tres `print()`: un título, una línea con dos argumentos y una frase de cierre. Prueba en el REPL la línea de dos argumentos antes de guardarla.

1. Abre el REPL y ejecuta `print('Taller:', 'Python')`.
2. Crea `cartelera.py` con el comentario y los tres `print()`.
3. Guarda, ejecuta y compara la salida con la del REPL.
4. Cambia la frase de cierre, vuelve a ejecutar y después provoca un paréntesis sin cerrar en la primera línea.
5. Localiza el `SyntaxError`, corrígelo y ejecuta una última vez.

**Criterios de aceptación:** el comentario no aparece en la salida; la línea con dos argumentos muestra un espacio entre ambos valores; el error se localiza y se corrige sin reescribir el archivo.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

```python
# Cartelera de la sesión de hoy
print('Cartelera')
print('Taller:', 'Python')
print('Sesión completada')
```

Salida esperada:

```text
Cartelera
Taller: Python
Sesión completada
```

La línea probada en el REPL es `print('Taller:', 'Python')` y produce `Taller: Python`.

Si se deja la primera instrucción como `print('Cartelera'`, el mensaje incluye:

```text
  File "...", line 1
    print('Cartelera'
         ^
SyntaxError: '(' was never closed
```

#### Por qué funciona

Los dos argumentos de `print()` se separan con un espacio; el comentario se ignora al leer el archivo. Un paréntesis sin cerrar impide que el intérprete entienda la instrucción, y el mensaje señala la línea donde empezó el problema.

#### Conceptos utilizados

- Comentarios con `#`.
- Argumentos múltiples de `print()`.
- REPL frente a archivo y lectura de un `SyntaxError`.

#### Errores habituales

- Escribir `'Taller: Python'` como una sola cadena: la salida conservaría la coma dentro del texto.
- Olvidar guardar tras cambiar la frase de cierre.
- Borrar todo el archivo en lugar de cerrar el paréntesis de una línea.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `saludo.py` y comprueba que la salida tiene tres líneas.
2. Copia un `SyntaxError` real de tu equipo y escribe cómo lo corregiste.
3. Compara tus respuestas con las soluciones ocultas.

Criterios de revisión: uso correcto de `print()` y comentarios, interpretación del mensaje de error y capacidad de completar el ciclo guardar–ejecutar–cambiar.

**Estado:** lección «Primer programa y REPL», pendiente de autoevaluación. Siguiente lección: «Editor, depuración inicial y hábitos».

## Recursos

- [Using the Python Interpreter](https://docs.python.org/3/tutorial/interpreter.html): documentación oficial sobre el modo interactivo, los archivos y los argumentos al invocar Python.
- [An informal introduction to Python](https://docs.python.org/3/tutorial/introduction.html): ejemplos oficiales de sintaxis básica con el intérprete.
