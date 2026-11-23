---
title: 'Tipos primitivos'
description: 'int, float, str, bool y None; type(), conversiones explícitas y diferencia entre dato y representación textual.'
course: python
unit: 'Primeros Pasos'
order: 8
---

# Tipos primitivos

## Qué es un tipo

El **tipo** de un valor determina qué es y qué operaciones admiten. No es lo mismo el número `42` que el texto `'42'`, aunque al imprimirlos parezcan iguales: con el primero puedes calcular, con el segundo no.

Python decide el tipo automáticamente al crear el valor. Para preguntar qué tipo tiene algo se usa la función `type()`:

```python
print(type(42))
```

Salida esperada:

```text
<class 'int'>
```

La palabra `class` dentro de la salida significa «clase» y es la forma en que Python nombra los tipos. No hace falta entender las clases todavía: lee `<class 'int'>` como «es un `int`».

## Los tipos de esta lección

Estos cinco tipos cubren los valores más habituales al empezar:

| Tipo    | Nombre completo | Ejemplos             | Salida de `type()`   |
| ------- | --------------- | -------------------- | -------------------- |
| `int`   | entero          | `42`, `-3`, `0`      | `<class 'int'>`      |
| `float` | decimal         | `3.5`, `-0.5`, `2.0` | `<class 'float'>`    |
| `str`   | cadena de texto | `'Ana'`, `'42'`      | `<class 'str'>`      |
| `bool`  | booleano        | `True`, `False`      | `<class 'bool'>`     |
| `None`  | ausencia        | `None`               | `<class 'NoneType'>` |

Un `float` se escribe con punto decimal, aunque la parte decimal sea cero: `2.0` es decimal y `2` es entero. Las cadenas van entre comillas simples o dobles; este curso usa simples por coherencia.

`True` y `False` son los dos únicos valores booleanos. Se escriben con mayúscula inicial. `None` no es texto ni cero: representa «no hay valor».

```python
print(type(42), type(3.5), type('Ana'), type(True), type(None))
```

Salida esperada:

```text
<class 'int'> <class 'float'> <class 'str'> <class 'bool'> <class 'NoneType'>
```

## Conversión explícita

A veces tenemos un dato en un tipo y necesitamos otro. La **conversión explícita** usa funciones que devuelven el valor convertido:

```python
print(int('42'))
print(float('3.5'))
print(str(7))
print(bool(0))
print(bool('hola'))
```

Salida esperada:

```text
42
3.5
7
False
True
```

- `int('42')` convierte un texto que representa un entero.
- `float('3.5')` hace lo mismo con un decimal. El separador decimal es el punto, no la coma.
- `str(7)` produce el texto `'7'`.
- `bool(...)` devuelve `True` o `False` según el valor. Los detalles de esa regla se verán cuando estudiemos los valores verdaderos y falsos.

La conversión solo funciona si el texto tiene el formato adecuado:

```python
print(int('3.5'))
```

Salida esperada —el programa se detiene con un error—:

```text
ValueError: invalid literal for int() with base 10: '3.5'
```

`int()` no acepta un texto con decimales, aunque el número sea entero en forma decimal. Hay que usar `float('3.5')` o cambiar el texto.

Tampoco conviene confundir conversión con redondeo. `int(3.9)` da `3`: recorta la parte decimal. El redondeo se verá más adelante.

## Dato y representación textual

Imprimir no revela el tipo. Estas dos líneas producen la misma salida:

```python
print(42)
print('42')
```

Salida esperada:

```text
42
42
```

La primera muestra un número; la segunda, un texto que se parece a un número. La diferencia aparece en cuanto intentamos operar:

```python
print('Número:', 42)      # válido: print() admite varios argumentos
print('Número:' + 42)     # error
```

La segunda línea se detiene con:

```text
TypeError: can only concatenate str (not "int") to str
```

La operación `+` entre textos se llama **concatenación** y exige que ambos operandos sean texto. El error no significa que `'Número:'` sea incorrecto, sino que falta convertir el número: `print('Número:' + str(42))` funciona. En la lección de cadenas veremos una forma aún más cómoda.

> **Consejo:** cuando un programa «no hace nada» con un dato que viene de `input()`, comprueba primero su tipo con `type()`. Casi siempre es texto.

## Ejemplo guiado

**Problema:** mostrar un resumen de una lectura usando un valor de cada tipo.

**Datos de entrada:** páginas leídas, horas dedicadas, título, ¿terminado? y una nota todavía pendiente.

**Estrategia:** crear una variable por dato, convertir el número escrito como texto y dejar `None` para la nota que no existe aún.

```python
titulo = 'Tipos de datos'
paginas = int('24')
horas = 1.5
terminado = False
nota = None

print('Título:', titulo)
print('Páginas:', paginas, type(paginas))
print('Horas:', horas, type(horas))
print('Terminado:', terminado)
print('Nota:', nota)
```

Salida esperada:

```text
Título: Tipos de datos
Páginas: 24 <class 'int'>
Horas: 1.5 <class 'float'>
Terminado: False
Nota: None
```

**Lectura paso a paso:**

- `int('24')` convierte el texto en entero antes de guardarlo.
- `type(paginas)` confirma que la conversión funcionó.
- `terminado` guarda `False`, no el texto `'False'`.
- `nota` guarda `None` para representar que todavía no hay nota.

**Modificación propuesta:** cambia `nota = None` por `nota = 'Sin nota todavía'` y observa cómo cambia la última línea, aunque la etiqueta siga siendo la misma.

## Laboratorio práctico

**Objetivo:** identificar tipos, convertir valores y provocar un error de conversión.

**Archivo:** `tipos.py` en tu carpeta de proyecto.

**Pasos:**

1. Crea cinco variables: `edad = 30`, `altura = 1.75`, `nombre = 'Ana'`, `activo = True` y `resultado = None`.
2. Muestra cada una con `print()` y su tipo con `type()`.
3. Añade `edad_texto = str(edad)` y muestra `type(edad_texto)`.
4. Añade `numero = int('42')` y muestra `numero + 1`.
5. Sustituye la línea anterior por `numero = int('42.0')`, guarda y ejecuta para ver el `ValueError`.
6. Corrige la línea usando `float('42.0')` y ejecuta una última vez.

**Resultado esperado:** en el paso 4, `numero + 1` muestra `43`. En el paso 5 aparece:

```text
ValueError: invalid literal for int() with base 10: '42.0'
```

Tras el paso 6, el programa vuelve a terminar sin errores.

**Cómo comprobarlo:** el tipo de `edad_texto` debe ser `<class 'str'>` aunque su contenido sea `30`.

**Errores previsibles y pistas:**

- Si `float('42.0')` muestra `42.0`, es correcto: los decimales se imprimen con punto.
- Si aparece `NameError`, revisa que la variable se haya creado antes de pasarla a `type()`.
- Si el error de conversión señala otra línea, busca otro `int()` con texto decimal.

## Errores frecuentes y depuración

| Síntoma                                                     | Causa probable                     | Cómo localizarlo y corregirlo                                        |
| ----------------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------- |
| `ValueError: invalid literal for int() with base 10: '3.5'` | Se pasó un texto decimal a `int()` | Usa `float()` o un texto sin decimales                               |
| `TypeError: can only concatenate str (not "int") to str`    | Se sumó texto y número con `+`     | Convierte el número con `str()` o usa varios argumentos en `print()` |
| `NameError: name 'None' is not defined`                     | Se escribió `none` en minúsculas   | Escribe `None` con mayúscula inicial                                 |
| Salida idéntica para un número y un texto                   | `print()` no muestra el tipo       | Añade `type(valor)` a la comprobación                                |
| `2.0` se muestra con decimal y `2` sin él                   | Uno es `float` y el otro, `int`    | Es correcto: el tipo se refleja en la salida                         |

Cuando una conversión falla, lee el valor entre comillas del mensaje: es exactamente el texto que Python intentó convertir.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** cada valor tiene un tipo; las conversiones devuelven valores nuevos.
- **Convención aceptada:** usar `float` para magnitudes con decimales y `int` para conteos.
- **Preferencia de estilo:** pasar varios argumentos a `print()` antes que concatenar textos y números.
- **Decisión de contexto:** `None` es una opción honrada para «todavía no hay dato»; no lo sustituyas por `0` o `''` si esos valores tienen significado.

Un error de tipo suele aparecer en la frontera entre datos externos —lo que escribes en la terminal— y datos internos —lo que tu programa calcula—. Conviene convertir una sola vez, justo al recibir el dato.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Escribe el tipo de cada valor y la salida de `type()`:

1. `7`
2. `7.0`
3. `'7'`
4. `False`
5. `None`

**Criterios de aceptación:** cinco tipos correctos y cinco salidas correctas.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

1. `int` → `<class 'int'>`.
2. `float` → `<class 'float'>`.
3. `str` → `<class 'str'>`.
4. `bool` → `<class 'bool'>`.
5. `NoneType` → `<class 'NoneType'>`.

#### Por qué funciona

El tipo se decide al crear el valor: las comillas hacen texto, el punto hace decimal, y `False` y `None` son valores especiales con sus propios tipos.

#### Conceptos utilizados

- Tipos primitivos.
- Función `type()`.

#### Errores habituales

- Creer que `7.0` es entero por «valer lo mismo» que `7`.
- Escribir `none` o `false` en minúsculas.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Crea `conversiones.py`: convierte el texto `'18'` a entero, el texto `'1.80'` a decimal y el número `7` a texto. Muestra cada resultado junto a su tipo.

**Criterios de aceptación:** tres conversiones correctas y tres líneas de salida con `type()`.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
edad = int('18')
altura = float('1.80')
numero_texto = str(7)

print('Edad:', edad, type(edad))
print('Altura:', altura, type(altura))
print('Como texto:', numero_texto, type(numero_texto))
```

Salida esperada:

```text
Edad: 18 <class 'int'>
Altura: 1.8 <class 'float'>
Como texto: 7 <class 'str'>
```

#### Por qué funciona

Cada función de conversión devuelve un valor nuevo del tipo pedido. `float('1.80')` muestra `1.8`: el valor es el mismo, la representación no conserva el cero final.

#### Conceptos utilizados

- `int()`, `float()` y `str()`.
- Dato frente a representación textual.

#### Errores habituales

- Usar `int('1.80')`, que provoca un `ValueError`.
- Esperar que `str(7)` añada comillas a la salida: las comillas delimitan el texto en el código, no se imprimen.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Esta línea se detiene con un error. Explica por qué y ofrece dos correcciones distintas:

```python
print('Total:' + 25)
```

**Criterios de aceptación:** error identificado como `TypeError` y dos correcciones que muestren `Total:25` o `Total: 25`.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

El error es:

```text
TypeError: can only concatenate str (not "int") to str
```

Dos correcciones:

```python
print('Total:' + str(25))
print('Total:', 25)
```

Salidas esperadas:

```text
Total:25
Total: 25
```

La segunda añade un espacio porque `print()` separa sus argumentos con un espacio.

#### Por qué funciona

`+` entre cadenas concatena y exige texto en ambos lados. En la primera corrección convertimos el número; en la segunda evitamos la concatenación y dejamos que `print()` formatee los argumentos.

#### Conceptos utilizados

- Concatenación de textos.
- Conversión con `str()`.
- Argumentos múltiples de `print()`.

#### Errores habituales

- Escribir `'Total:' + '25'` y creer que se ha calculado algo: es texto desde el principio.
- Cambiar las comillas por paréntesis sin convertir el número.

</details>

### Reto opcional

Comprueba en el REPL qué devuelven `bool(0)`, `bool(1)`, `bool('')` y `bool('hola')`. Anota los cuatro resultados y una regla que los explique.

**Criterio de aceptación:** cuatro resultados correctos y una regla que distinga 0 de 1 y texto vacío de texto con contenido.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

```text
False
True
False
True
```

Regla: el cero y el texto vacío se convierten en `False`; un número distinto de cero y un texto con contenido se convierten en `True`.

#### Por qué funciona

`bool()` clasifica los valores según tengan contenido o no. La regla general —los llamados valores verdaderos y falsos— se estudiará en la siguiente unidad.

#### Conceptos utilizados

- Conversión a `bool`.
- Valores booleanos.

#### Errores habituales

- Pensar que `bool('False')` es `False`: el texto `'False'` tiene contenido, así que da `True`.
- Generalizar la regla sin comprobar otros valores.

</details>

## Integración con el proyecto longitudinal

Todavía no corresponde. Cuando empiece el gestor de tareas, cada tarea guardará un título (`str`), una prioridad (`int`), un estado (`bool`) y, quizá, una fecha todavía no asignada (`None`). Esta lección fija esos cuatro tipos antes de escribir la aplicación.

## Resumen

Ideas clave:

- `int`, `float`, `str`, `bool` y `None` son los tipos básicos de esta parte del curso.
- `type()` revela el tipo de un valor.
- `int()`, `float()`, `str()` y `bool()` convierten explícitamente.
- Una conversión falla si el texto no tiene el formato esperado.
- Imprimir un dato no revela su tipo: `42` y `'42'` se ven igual.

Comprueba que puedes:

- Distinguir un entero de un decimal y de un texto numérico.
- Convertir un texto a número y explicar un `ValueError`.
- Evitar un `TypeError` al mezclar texto y número.
- Usar `None` para representar ausencia de dato.

## Mini-proyecto: ficha de lectura con tipos

Crea `lectura.py` con una ficha que use los cinco tipos. El título será texto, las páginas vendrán del texto `'120'` convertido a entero, las horas serán `2.5`, `terminada` será `False` y `resumen` valdrá `None`. Muestra cada dato con una etiqueta y su tipo cuando aporte claridad.

1. Crea las cinco variables con nombres descriptivos.
2. Convierte `'120'` con `int()` antes de guardarlo.
3. Muestra el título y las páginas con etiquetas.
4. Muestra las horas y su tipo, el estado y el resumen.
5. Cambia `resumen` por un texto corto y vuelve a ejecutar.

**Criterios de aceptación:** las páginas son `120` y su tipo `int`; las horas mantienen el punto decimal; `terminada` es `False` sin comillas; el programa termina sin errores antes y después del cambio del resumen.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

```python
titulo = 'Tipos de datos en Python'
paginas = int('120')
horas = 2.5
terminada = False
resumen = None

print('Título:', titulo)
print('Páginas:', paginas, type(paginas))
print('Horas:', horas, type(horas))
print('Terminada:', terminada)
print('Resumen:', resumen)

resumen = 'Tipos básicos y conversiones'
print('Resumen actualizado:', resumen)
```

Salida esperada:

```text
Título: Tipos de datos en Python
Páginas: 120 <class 'int'>
Horas: 2.5 <class 'float'>
Terminada: False
Resumen: None
Resumen actualizado: Tipos básicos y conversiones
```

#### Por qué funciona

La conversión a entero funciona porque `'120'` no tiene decimales. `None` representa que aún no hay resumen y se sustituye por un texto cuando existe. Cada `print()` admite varios argumentos, así que no hace falta concatenar.

#### Conceptos utilizados

- Los cinco tipos de la lección.
- Conversión explícita con `int()`.
- `type()` como comprobación.
- Ausencia de valor con `None`.

#### Errores habituales

- Escribir `paginas = int(120)`: ya es entero, la conversión es innecesaria.
- Escribir `horas = 2,5`: la coma no es separador decimal en Python.
- Poner `terminada = 'False'`: sería texto, no booleano.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `lectura.py` y comprueba la salida de seis líneas.
2. Cambia `'120'` por `'120.5'`, observa el `ValueError` y vuelve a corregirlo.
3. Compara tus respuestas con las soluciones ocultas.

Criterios de revisión: identificación de tipos, conversiones correctas, explicación del error de conversión y uso de `None`.

**Estado:** lección «Tipos primitivos», pendiente de autoevaluación. Siguiente lección: «Operadores».

## Recursos

- [Standard types — The Python Standard Library](https://docs.python.org/3/library/stdtypes.html): descripción oficial de los tipos numéricos, texto y `None`.
- [Built-in functions — type(), int(), float(), str(), bool()](https://docs.python.org/3/library/functions.html#type): referencia oficial de las funciones usadas en la lección.
