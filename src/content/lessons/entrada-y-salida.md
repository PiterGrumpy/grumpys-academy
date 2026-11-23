---
title: 'Entrada y salida'
description: 'input(), print(), separadores y finales; conversión de entradas y validación elemental de datos introducidos.'
course: python
unit: 'Primeros Pasos'
order: 10
---

# Entrada y salida

## `input()`: leer desde la terminal

Hasta ahora, los datos de nuestros programas estaban escritos en el código. Con `input()` el programa puede preguntar al usuario y usar su respuesta.

```python
nombre = input('¿Cómo te llamas? ')
print('Hola', nombre)
```

Diálogo de consola —lo que escribes aparece después del signo de pregunta—:

```text
¿Cómo te llamas? Ana
Hola Ana
```

`input()` hace tres cosas: muestra el texto del paréntesis, espera a que escribas algo y pulses `Enter`, y devuelve lo escrito. Guardamos ese resultado en `nombre` y después lo usamos en `print()`.

El dato devuelto por `input()` es **siempre** texto (`str`), aunque escribas números. Esta comprobación lo confirma:

```python
edad = input('Edad: ')
print(edad, type(edad))
```

```text
Edad: 20
20 <class 'str'>
```

El `20` de la salida es texto, no un número.

## Convertir la entrada antes de operar

Si necesitas calcular con lo que ha escrito el usuario, convierte el texto con `int()` o `float()` antes de usarlo:

```python
edad = int(input('Edad: '))
print('El año que viene tendrás', edad + 1)
```

```text
Edad: 20
El año que viene tendrás 21
```

Si omitiéramos la conversión, `edad + 1` intentaría sumar texto y número y se detendría con:

```text
TypeError: can only concatenate str (not "int") to str
```

La conversión se hace justo al recibir el dato, no después de varios cálculos. Así el resto del programa trabaja con el tipo que espera.

```python
importe = float(input('Importe: '))
print('Doble:', importe * 2)
```

```text
Importe: 12.5
Doble: 25.0
```

> **Consejo:** usa `int()` para conteos y `float()` para importes o magnitudes. Recuerda que el separador decimal es el punto: `12.5`, no `12,5`.

## `print()`: separadores y finales

Ya sabes que `print()` admite varios argumentos y los separa con un espacio. Ese espacio se puede cambiar con el argumento `sep`:

```python
print('a', 'b', 'c', sep='-')
```

Salida esperada:

```text
a-b-c
```

Por defecto, `print()` termina con un salto de línea. El argumento `end` permite cambiar ese final:

```python
print('Cargando', end='...')
print('listo')
```

Salida esperada:

```text
Cargando...listo
```

La primera llamada no baja de línea y la segunda continúa justo donde terminó la anterior. En la lección de cadenas veremos cómo dar formato a los números dentro del texto.

## Validación elemental

`input()` acepta cualquier texto. Si pides una edad y te escriben `veinte`, la conversión falla:

```python
edad = int(input('Edad: '))
```

```text
Edad: veinte
ValueError: invalid literal for int() with base 10: 'veinte'
```

El programa se detiene y Python muestra el valor que no pudo convertir. Saber leer ese mensaje es la primera forma de **validación elemental**: detectar que el dato no sirve y entender por qué.

Todavía no podemos pedir otro valor automáticamente, porque eso exige una condición. En la siguiente unidad aprenderemos a comprobar la entrada y a repetir la pregunta cuando sea necesario. Por ahora, dos hábitos ayudan:

1. Convertir justo después de `input()` para que el fallo aparezca en el punto exacto.
2. Escribir mensajes claros en `input()` que digan qué formato se espera: `Edad (número entero): `.

## Ejemplo guiado

**Problema:** saludar a una persona usando su nombre y su edad, y mostrar después un resumen en una sola línea.

**Datos de entrada:** dos respuestas de la terminal.

**Estrategia:** pedir el texto, convertir la edad, imprimir un saludo y construir una línea con `sep`.

```python
nombre = input('Nombre: ')
edad = int(input('Edad (número entero): '))

print('Hola', nombre)
print('Dentro de cinco años tendrás', edad + 5)
print('Ficha:', nombre, '|', edad, sep=' ')
```

Diálogo de consola:

```text
Nombre: Ana
Edad (número entero): 20
Hola Ana
Dentro de cinco años tendrás 25
Ficha: Ana | 20
```

**Lectura paso a paso:**

- `nombre` guarda el texto devuelto por el primer `input()`.
- `edad` guarda un `int` porque convertimos la respuesta antes de guardarla.
- `edad + 5` es una operación aritmética válida.
- El último `print()` usa cuatro argumentos. Con `sep=' '` queda un espacio entre la barra y los valores, igual que con el separador por defecto.

**Modificación propuesta:** cambia `sep=' '` por `sep='-'` y observa cómo queda la última línea. Predice el resultado antes de ejecutar.

## Laboratorio práctico

**Objetivo:** combinar `input()`, conversión, `print()` y comprobación de tipos.

**Archivo:** `entrada.py` en tu carpeta de proyecto.

**Pasos:**

1. Crea el archivo con este contenido:

   ```python
   nombre = input('Nombre: ')
   ciudad = input('Ciudad: ')

   print('Nombre:', nombre)
   print('Ciudad:', ciudad)
   print(nombre, ciudad, sep=' - ')
   ```

2. Ejecútalo con tus propios datos y anota la salida.
3. Añade `numero = input('Un número: ')` y `print(type(numero))`. Comprueba que muestra `<class 'str'>` aunque escribas `7`.
4. Cambia la línea por `numero = int(input('Un número: '))` y vuelve a comprobar el tipo.
5. Añade `print(numero * 2)` y ejecuta una vez con `7` y otra con `siete`.
6. Lee el `ValueError` del segundo intento y corrige la entrada.

**Resultado esperado:** con `7`, la multiplicación muestra `14`. Con `siete`, el programa se detiene con:

```text
ValueError: invalid literal for int() with base 10: 'siete'
```

**Cómo comprobarlo:** el tipo debe ser `<class 'str'>` en el paso 3 y `<class 'int'>` en el paso 4.

**Errores previsibles y pistas:**

- Si la salida tiene dos espacios alrededor del guion, revisa los literales `' - '` frente a `'-'`.
- Si aparece `TypeError: can only concatenate str...`, te falta convertir antes de operar.
- Si el programa espera sin mostrar nada, revisa que el mensaje de `input()` esté entre comillas y dentro de los paréntesis.

## Errores frecuentes y depuración

| Síntoma                                                       | Causa probable                           | Cómo localizarlo y corregirlo                |
| ------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------- |
| `TypeError: can only concatenate str (not "int") to str`      | Falta convertir la entrada a número      | Usa `int()` o `float()` al recibir el dato   |
| `ValueError: invalid literal for int() with base 10: '3.5'`   | Se pidió un entero y llegó un decimal    | Usa `float()` o pide un entero en el mensaje |
| El programa parece no responder                               | `input()` está esperando una respuesta   | Escribe un valor y pulsa `Enter`             |
| `TypeError: print() got an unexpected keyword argument 'sep'` | El argumento se escribió con otro nombre | Escribe `sep=` con todas sus letras          |
| No aparece el salto de línea entre dos `print()`              | La primera llamada terminó con `end`     | Quita `end` o añade `'\n'` como final        |

Los diálogos de consola son una forma de prueba: escribe lo que el usuario pondría y compara la salida con la esperada. Cambia una entrada a propósito para ver cómo reacciona el programa.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** `input()` devuelve texto; `print()` separa argumentos con `sep` y termina con `end`.
- **Convención aceptada:** convertir el dato al recibirlo y dar mensajes que indiquen el formato esperado.
- **Preferencia de estilo:** frases cortas y concretas en `input()`, sin exigir datos innecesarios.
- **Decisión de contexto:** un fallo de conversión al escribir es esperable; un programa junior debe al menos explicar al usuario qué ocurrió.

Pedir datos con claro propósito y comprobar su tipo es más útil que acumular opciones. Más adelante, las condiciones permitirán convertir la detección del error en una corrección automática.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Responde a tres preguntas:

1. `input()` con la respuesta `7`, ¿devuelve `7` o `'7'`?
2. ¿Qué muestra `print('a', 'b', sep='+')`?
3. ¿Por qué `print('Cargando', end='...')` no baja de línea?

**Criterios de aceptación:** tres respuestas correctas y una mención al tipo `str` en la primera.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

1. Devuelve `'7'`, texto. El tipo es `str` aunque la respuesta parezca un número.
2. Muestra `a+b`.
3. Porque `end='...'` sustituye el salto de línea por esos tres puntos.

#### Por qué funciona

`input()` no interpreta lo que escribes: devuelve la línea como texto. `sep` controla el separador entre argumentos y `end` controla cómo termina la línea.

#### Conceptos utilizados

- Entrada como texto.
- Argumentos `sep` y `end` de `print()`.

#### Errores habituales

- Creer que `input()` decide el tipo según lo escrito.
- Confundir `sep` con el separador decimal.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Crea `dobles.py`: pide un número decimal, conviértelo con `float()`, muestra el doble y muestra el tipo de la variable convertida.

**Criterios de aceptación:** con `2.5`, la salida contiene `5.0` y `<class 'float'>`.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
numero = float(input('Número decimal: '))
doble = numero * 2

print('Doble:', doble)
print('Tipo:', type(numero))
```

Diálogo de consola:

```text
Número decimal: 2.5
Doble: 5.0
Tipo: <class 'float'>
```

#### Por qué funciona

La conversión a `float()` se hace antes de multiplicar. Como la entrada era texto, sin esa conversión la operación fallaría con `TypeError`.

#### Conceptos utilizados

- `input()` y conversión con `float()`.
- Comprobación con `type()`.

#### Errores habituales

- Escribir `2,5` como entrada: Python espera `2.5`.
- Convertir después de multiplicar.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Explica y corrige este programa:

```python
edad = input('Edad: ')
print('Dentro de diez años:', edad + 10)
```

**Criterios de aceptación:** se identifica el `TypeError`, se convierte la entrada y la salida con `30` muestra `40`.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

El error es:

```text
TypeError: can only concatenate str (not "int") to str
```

Corrección:

```python
edad = int(input('Edad: '))
print('Dentro de diez años:', edad + 10)
```

Diálogo de consola:

```text
Edad: 30
Dentro de diez años: 40
```

#### Por qué funciona

`int()` convierte la respuesta en número antes de la suma. El `print()` admite la etiqueta y el resultado como argumentos separados, así que no hace falta concatenar.

#### Conceptos utilizados

- Conversión de entrada.
- Diferencia entre texto y número.
- Argumentos de `print()`.

#### Errores habituales

- Poner `int()` solo alrededor de `edad + 10`: llegarías tarde, la suma ya habría fallado.
- Cambiar `+ 10` por `+ '10'`: concatenaría textos y daría `3010`.

</details>

### Reto opcional

Pide dos palabras y muéstralas en una sola línea separadas por `|`, sin usar `sep`.

**Criterio de aceptación:** con `casa` y `azul`, la salida es `casa | azul`.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

```python
primera = input('Primera palabra: ')
segunda = input('Segunda palabra: ')

print(primera + ' | ' + segunda)
```

Salida:

```text
casa | azul
```

#### Por qué funciona

Ambas variables son texto, así que `+` concatena sin problema. Es una alternativa a `print(primera, segunda, sep=' | ')`.

#### Conceptos utilizados

- Entrada como texto.
- Concatenación de cadenas.
- `sep` como alternativa.

#### Errores habituales

- Escribir espacios de más dentro del literal `' | '`.
- Intentar concatenar si alguna entrada se ha convertido a número.

</details>

## Integración con el proyecto longitudinal

Todavía no corresponde abrir el gestor de tareas: sus menús necesitan condicionales. Esta lección aporta la frontera de entrada del futuro programa: el título y la prioridad de una tarea llegarán por `input()` y se convertirán antes de guardarse.

## Resumen

Ideas clave:

- `input()` espera una respuesta y siempre devuelve texto.
- Convierte con `int()` o `float()` antes de calcular.
- `sep` cambia el separador de `print()` y `end`, su final de línea.
- Una conversión fallida produce un `ValueError` con el valor problemático.
- Los mensajes de `input()` deben indicar el formato esperado.

Comprueba que puedes:

- Pedir dos datos y mostrarlos con etiquetas.
- Convertir una entrada numérica y operar con ella.
- Explicar la diferencia entre `7` y `'7'` en la terminal.
- Leer un `ValueError` de conversión.

## Mini-proyecto: calculadora de propinas

Crea `propinas.py`. Debe pedir el importe de la cuenta y el porcentaje de propina, convertir ambos a `float`, calcular la propina y el total, y mostrar un pequeño resumen en tres líneas usando etiquetas.

1. Pide `Importe de la cuenta:` y guárdalo en una variable decimal.
2. Pide `Porcentaje de propina:` y guárdalo en otra variable decimal.
3. Calcula `propina = importe * porcentaje / 100` y `total = importe + propina`.
4. Muestra el importe, la propina y el total con `print()` y etiquetas.
5. Prueba con `80` y `10`; después prueba con una entrada no numérica y observa el error.

**Criterios de aceptación:** con `80` y `10`, la propina es `8.0` y el total `88.0`; la salida tiene tres líneas; el error de la última prueba se identifica como `ValueError`.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

```python
importe = float(input('Importe de la cuenta: '))
porcentaje = float(input('Porcentaje de propina: '))

propina = importe * porcentaje / 100
total = importe + propina

print('Importe:', importe)
print('Propina:', propina)
print('Total:', total)
```

Diálogo de consola:

```text
Importe de la cuenta: 80
Porcentaje de propina: 10
Importe: 80.0
Propina: 8.0
Total: 88.0
```

Si se escribe `diez` en el porcentaje, aparece:

```text
ValueError: could not convert string to float: 'diez'
```

#### Por qué funciona

Ambas entradas se convierten en cuanto llegan, así que `importe * porcentaje / 100` es una operación aritmética válida. La división `/` devuelve decimal, por lo que los importes se muestran con punto.

#### Conceptos utilizados

- `input()` y conversión con `float()`.
- Operadores aritméticos y precedencia.
- `print()` con etiquetas.
- Lectura de un `ValueError`.

#### Errores habituales

- Escribir `10%` en la entrada: `float()` no acepta el símbolo `%`.
- Dividir por `100` después de sumar: el orden correcto es `importe * porcentaje / 100`.
- Olvidar convertir y obtener un `TypeError` al calcular.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `propinas.py` con los datos de prueba y comprueba las tres líneas.
2. Provoca un error de conversión y copia el mensaje.
3. Compara tus respuestas con las soluciones ocultas.

Criterios de revisión: conversión en el momento de recibir el dato, cálculo correcto, mensajes claros y comprensión del error de conversión.

**Estado:** lección «Entrada y salida», pendiente de autoevaluación. Siguiente lección: «Cadenas de texto».

## Recursos

- [input() — Python Standard Library](https://docs.python.org/3/library/functions.html#input): referencia oficial de la función de entrada.
- [print() — Python Standard Library](https://docs.python.org/3/library/functions.html#print): referencia oficial de `sep`, `end` y los demás argumentos.
