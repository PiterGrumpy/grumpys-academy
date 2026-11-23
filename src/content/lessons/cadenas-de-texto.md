---
title: 'Cadenas de texto'
description: 'Comillas, escapes, índices, slicing, inmutabilidad, métodos de cadenas, f-strings y formato de números.'
course: python
unit: 'Primeros Pasos'
order: 11
---

# Cadenas de texto

## Comillas y escapes

Una **cadena** es una secuencia de caracteres entre comillas. Se pueden usar comillas simples o dobles; este curso usa simples por coherencia. Si el texto contiene una comilla simple, hay que «escaparla» con una barra invertida:

```python
print('O\'Reilly')
print('Dijo "hola"')
```

Salida esperada:

```text
O'Reilly
Dijo "hola"
```

La barra invertida `\` introduce un **escape**: una combinación que representa un carácter especial. Los más habituales son `\n` —salto de línea—, `\t` —tabulador—, `\'` —comilla simple— y `\\` —barra invertida—.

```python
print('Línea 1\nLínea 2')
```

Salida esperada:

```text
Línea 1
Línea 2
```

El salto se produce al imprimir, no porque haya dos sentencias: es un solo texto con un carácter de control dentro.

## Concatenación y repetición

El operador `+` une cadenas y el operador `*` las repite:

```python
print('hola' + ' ' + 'mundo')
print('a' * 3)
print('-' * 5)
```

Salida esperada:

```text
hola mundo
aaa
-----
```

Con `+`, ambos operandos deben ser texto: `'Total:' + 25` falla con un `TypeError`, como vimos en la lección de tipos. Con `*`, un lado es la cadena y el otro un número entero que indica cuántas veces repetirla.

## Índices, longitud y slicing

Cada carácter de una cadena tiene una posición llamada **índice**. Los índices empiezan en `0` y también se pueden contar desde el final con números negativos:

```python
palabra = 'Python'

print(palabra[0])
print(palabra[-1])
print(len(palabra))
```

Salida esperada:

```text
P
n
6
```

`len()` devuelve la **longitud**, es decir, cuántos caracteres tiene la cadena. El último índice positivo es siempre `len(palabra) - 1`: en `Python`, el `n` está en la posición `5`.

Un **slice** extrae un trozo con la forma `[inicio:fin]`. El carácter de `inicio` se incluye y el de `fin` se excluye:

```python
palabra = 'Python'

print(palabra[0:2])
print(palabra[2:5])
print(palabra[:3])
print(palabra[3:])
```

Salida esperada:

```text
Py
tho
Pyt
hon
```

Si te pasas del último índice, Python se detiene:

```text
IndexError: string index out of range
```

> **Consejo:** para quedarte con las tres primeras letras, escribe `[:3]`. Es más corto y no depende de contar hasta el final.

## Inmutabilidad

Las cadenas son **inmutables**: una vez creadas, no se pueden cambiar sus caracteres. No puedes asignar directamente a una posición:

```python
palabra = 'hola'
palabra[0] = 'H'
```

Salida esperada —el programa se detiene—:

```text
TypeError: 'str' object does not support item assignment
```

Para «cambiar» una cadena hay que crear otra. Los métodos y las operaciones que veremos a continuación devuelven cadenas nuevas; la original sigue igual.

```python
palabra = 'hola'
nueva = 'H' + palabra[1:]
print(palabra)
print(nueva)
```

Salida esperada:

```text
hola
Hola
```

## Métodos frecuentes

Un **método** es una función que se llama sobre un valor usando un punto. Los métodos de cadena más usados son:

| Método          | Qué hace                                 | Ejemplo                            | Resultado         |
| --------------- | ---------------------------------------- | ---------------------------------- | ----------------- |
| `lower()`       | convierte a minúsculas                   | `'Ana'.lower()`                    | `'ana'`           |
| `upper()`       | convierte a mayúsculas                   | `'Ana'.upper()`                    | `'ANA'`           |
| `strip()`       | quita espacios del principio y del final | `'  hola  '.strip()`               | `'hola'`          |
| `replace(a, b)` | sustituye cada `a` por `b`               | `'hola lau'.replace('lau', 'Lua')` | `'hola Lua'`      |
| `split(sep)`    | divide por el separador                  | `'Ana,Luis'.split(',')`            | `['Ana', 'Luis']` |
| `join(partes)`  | une partes con el texto como separador   | `' y '.join(partes)`               | `'Ana y Luis'`    |

```python
partes = 'Ana,Luis'.split(',')

print(partes)
print(' y '.join(partes))
```

Salida esperada:

```text
['Ana', 'Luis']
Ana y Luis
```

`split()` devuelve una **lista**: una colección ordenada de valores. Las listas se estudiarán en una unidad posterior; aquí solo nos interesa que `join()` puede tomar ese resultado y volver a unirlo. Fíjate en que el separador se escribe antes del punto: `' y '.join(partes)`, no `partes.join(' y ')`.

Ninguno de estos métodos modifica la cadena original. `titulo.strip()` devuelve una cadena limpia; si no guardas el resultado, `titulo` sigue con sus espacios:

```python
titulo = '  hola  '
titulo.strip()
print(titulo)
```

Salida esperada:

```text
  hola
```

La solución es asignar: `titulo = titulo.strip()`.

## f-strings y formato de números

Una **f-string** es una cadena precedida de `f` que permite insertar valores entre llaves:

```python
nombre = 'Ana'
cantidad = 3

print(f'{nombre} tiene {cantidad} tareas')
```

Salida esperada:

```text
Ana tiene 3 tareas
```

Dentro de las llaves puedes escribir una expresión sencilla, como `cantidad + 1`. Para dar formato a un número, se añade `:` y una especificación. La más útil al empezar es `.2f`, que muestra dos decimales:

```python
total = 12.5
print(f'Total: {total:.2f}')
```

Salida esperada:

```text
Total: 12.50
```

Esto resuelve una molestia de la lección anterior: con `print('Total:', 12.5)` no puedes controlar los decimales, y con concatenación haría falta convertir. La f-string convierte y formatea en un paso.

## Ejemplo guiado

**Problema:** limpiar y presentar el título de una lección con un formato constante.

**Datos de entrada:** el texto `'  introduccion a PYTHON  '`.

**Estrategia:** quitar espacios, poner el texto en minúsculas, cambiar la palabra `python` y usar una f-string para el resultado.

```python
titulo = '  introduccion a PYTHON  '
limpio = titulo.strip().lower().replace('python', 'Python')

print('Título original:', repr(titulo))
print('Título limpio:', limpio)
print('Longitud:', len(limpio))
print(f'Vista previa: {limpio[:10]}...')
```

Salida esperada:

```text
Título original: '  introduccion a PYTHON  '
Título limpio: introduccion a Python
Longitud: 21
Vista previa: introducci...
```

**Lectura paso a paso:**

- `strip()` elimina los espacios de los extremos; `lower()` deja todo en minúsculas; `replace()` cambia `python` por `Python`.
- Los métodos se encadenan porque cada uno devuelve una cadena nueva sobre la que se aplica el siguiente.
- `repr(titulo)` muestra el texto entre comillas, de modo que se ven los espacios iniciales y finales.
- `limpio[:10]` toma los diez primeros caracteres: `introducci`.

**Modificación propuesta:** cambia `.lower()` por `.upper()` y observa cómo afecta a `replace('python', 'Python')`. Predice el resultado antes de ejecutar.

## Laboratorio práctico

**Objetivo:** recorrer una cadena, aplicar métodos y comprobar la inmutabilidad.

**Archivo:** `cadenas.py` en tu carpeta de proyecto.

**Pasos:**

1. Crea el archivo con este contenido:

   ```python
   frase = '  Python es claro  '
   limpia = frase.strip()

   print(frase)
   print(limpia)
   print(len(limpia))
   print(limpia[0], limpia[-1])
   print(limpia[0:6])
   ```

2. Guarda y ejecuta. Comprueba que `frase` conserva sus espacios y `limpia` no.
3. Añade `print(limpia.lower(), limpia.upper())`.
4. Añade `partes = limpia.split()` —sin argumento, divide por espacios— y `print(partes)`. Después escribe `print(' | '.join(partes))`.
5. Añade `nota = 8.5` y `print(f'Nota: {nota:.1f}')`.
6. Intenta `limpia[0] = 'p'`, guarda y ejecuta para ver el `TypeError`. Corrige la línea creando otra cadena.

**Resultado esperado:** la longitud de `limpia` es `15`; el primer carácter es `P` y el último `o`; el slice da `Python`; la nota se muestra como `8.5`.

**Cómo comprobarlo:** la salida del paso 4 debe ser `Python | es | claro`.

**Errores previsibles y pistas:**

- Si `frase` aparece sin espacios, has reasignado `frase` en lugar de crear `limpia`.
- Si `split()` devuelve una sola parte, comprueba que haya espacios entre las palabras.
- Si el error de inmutabilidad señala otra línea, revisa si hay más asignaciones a índices.

## Errores frecuentes y depuración

| Síntoma                                                    | Causa probable                            | Cómo localizarlo y corregirlo                          |
| ---------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------ |
| `TypeError: 'str' object does not support item assignment` | Se intentó cambiar un carácter por índice | Crea una cadena nueva con concatenación o `replace()`  |
| `IndexError: string index out of range`                    | El índice supera la longitud              | Revisa `len()` y usa índices desde `0` hasta `len - 1` |
| `TypeError: can only concatenate str (not "int") to str`   | Se concatenó texto con número             | Convierte con `str()` o usa una f-string               |
| El `strip()` no parece funcionar                           | No se guardó el resultado                 | Escribe `texto = texto.strip()`                        |
| La f-string muestra llaves en la salida                    | Falta la `f` delante de las comillas      | Escribe `f'...'`                                       |

Los métodos no «arreglan» la cadena original: devuelven una nueva. Si una operación no tiene efecto visible, comprueba si guardaste su resultado.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** las cadenas son inmutables; los índices empiezan en cero y `split()` devuelve una lista.
- **Convención aceptada:** `strip()` al recibir texto externo y `f'...'` para componer mensajes.
- **Preferencia de estilo:** encadenar pocos métodos; si la cadena se vuelve larga, guardar pasos intermedios.
- **Decisión de contexto:** `.2f` es adecuado para importes; para conteos, deja el entero sin formato.

Un único estilo de composición de mensajes —en este curso, las f-strings— evita mezclar concatenaciones, comas y formatos distintos en el mismo archivo.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Predice la salida de cada expresión sobre `palabra = 'Python'`:

1. `palabra[1]`
2. `palabra[-2]`
3. `palabra[:4]`
4. `len(palabra)`

**Criterios de aceptación:** cuatro resultados correctos y una frase que explique por qué `[-2]` no es la segunda letra.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

1. `'y'`.
2. `'o'`.
3. `'Pyth'`.
4. `6`.

Los índices negativos cuentan desde el final: `[-1]` es la última letra y `[-2]`, la penúltima.

#### Por qué funciona

Los índices positivos empiezan en `0`; los negativos, en `-1` para el último carácter. El slice `[:4]` toma desde el principio hasta el índice `3`, porque el `4` se excluye.

#### Conceptos utilizados

- Índices positivos y negativos.
- Slices y `len()`.

#### Errores habituales

- Creer que `[-2]` es la segunda letra: para eso es `[1]`.
- Incluir el carácter de `fin` en un slice.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Crea `limpieza.py`: define `texto = '  HOLA Python  '`, quita los espacios, convierte a minúsculas, cambia `python` por `Python` y muestra el resultado con una f-string que incluya su longitud.

**Criterios de aceptación:** la salida es `Resultado: hola Python (11 caracteres)`.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
texto = '  HOLA Python  '
limpio = texto.strip().lower().replace('python', 'Python')

print(f'Resultado: {limpio} ({len(limpio)} caracteres)')
```

Salida esperada:

```text
Resultado: hola Python (11 caracteres)
```

#### Por qué funciona

Cada método devuelve una cadena nueva, así que se pueden encadenar. La f-string inserta `limpio` y el resultado de `len(limpio)` directamente en el mensaje.

#### Conceptos utilizados

- `strip()`, `lower()` y `replace()`.
- Métodos encadenados.
- f-strings.

#### Errores habituales

- Escribir `texto = texto.strip()` y olvidar `lower()`.
- Cambiar `Python` por `python` en `replace()`: el resultado sería todo minúsculas.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Explica por qué falla este código y ofrece una versión que funcione:

```python
nombre = 'ana'
nombre[0] = 'A'
print(nombre)
```

**Criterios de aceptación:** se nombra el `TypeError`, se explica la inmutabilidad y la salida final es `Ana`.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

El error es:

```text
TypeError: 'str' object does not support item assignment
```

Las cadenas son inmutables: no se puede asignar un carácter a una posición. Una versión correcta:

```python
nombre = 'ana'
nombre = 'A' + nombre[1:]
print(nombre)
```

Salida esperada:

```text
Ana
```

#### Por qué funciona

`nombre[1:]` toma el resto de la cadena a partir del segundo carácter. Al concatenar `'A'` con ese trozo se crea una cadena nueva, que se guarda en la misma variable.

#### Conceptos utilizados

- Inmutabilidad de las cadenas.
- Slices y concatenación.

#### Errores habituales

- Usar `replace('a', 'A')`: cambiaría todas las `a`, no solo la primera.
- Creer que el error se corrige con `upper()`: daría `ANA`, no `Ana`.

</details>

### Reto opcional

Con `datos = 'Ana,Luis,Marta'`, consigue la salida `Ana / Luis / Marta` usando `split()` y `join()` en dos líneas.

**Criterio de aceptación:** la salida exacta, sin corchetes.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

```python
datos = 'Ana,Luis,Marta'
partes = datos.split(',')

print(' / '.join(partes))
```

Salida esperada:

```text
Ana / Luis / Marta
```

#### Por qué funciona

`split(',')` produce tres partes y `join()` las une con el separador `' / '`. El separador de `join()` se escribe antes del punto, sobre la cadena que actúa como pegamento.

#### Conceptos utilizados

- `split()` y `join()`.
- Listas como resultado intermedio (se estudiarán más adelante).

#### Errores habituales

- Escribir `partes.join(' / ')`: los argumentos van al revés.
- Imprimir `partes` directamente: mostraría `['Ana', 'Luis', 'Marta']`.

</details>

## Integración con el proyecto longitudinal

Todavía no corresponde. Cuando se abra el gestor de tareas, los títulos llegarán con espacios accidentales y habrá que normalizarlos con `strip()`; las etiquetas de estado usarán `lower()` y las fichas se compondrán con f-strings. Esta lección deja esas herramientas listas.

## Resumen

Ideas clave:

- Una cadena se indexa desde `0`; los índices negativos cuentan desde el final.
- `len()` da la longitud y `[inicio:fin]` extrae un trozo sin incluir `fin`.
- Las cadenas son inmutables: los métodos devuelven otras nuevas.
- `strip()`, `lower()`, `upper()`, `replace()`, `split()` y `join()` cubren las operaciones habituales.
- Las f-strings insertan valores y permiten formatear números con `:.2f`.

Comprueba que puedes:

- Extraer una palabra con un slice.
- Explicar por qué no se puede asignar a `texto[0]`.
- Normalizar un texto con métodos encadenados.
- Componer un mensaje con una f-string y dos decimales.

## Mini-proyecto: ficha de usuario

Crea `ficha.py`. Debe pedir nombre, apellido y correo; quitar espacios sobrantes; mostrar las iniciales en mayúscula; el correo en minúsculas; y una línea de resumen con una nota `8.5` formateada con un decimal.

1. Pide los tres datos con `input()` y guárdalos en variables.
2. Aplica `strip()` al guardar cada dato y `lower()` al correo.
3. Calcula las iniciales con `nombre[0] + apellido[0]` y ponlas en mayúsculas.
4. Muestra `Iniciales:`, `Correo:` y una f-string con el nombre completo y la nota.

**Criterios de aceptación:** con `ana`, `garcia` y `ANA@EJEMPLO.COM`, las iniciales son `AG`, el correo `ana@ejemplo.com` y la nota aparece como `8.5`. El programa no intenta modificar una cadena por índice.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

```python
nombre = input('Nombre: ').strip()
apellido = input('Apellido: ').strip()
correo = input('Correo: ').strip().lower()

iniciales = (nombre[0] + apellido[0]).upper()
nota = 8.5

print('Iniciales:', iniciales)
print('Correo:', correo)
print(f'{nombre} {apellido} — nota: {nota:.1f}')
```

Diálogo de consola:

```text
Nombre:  ana
Apellido:  garcia
Correo:  ANA@EJEMPLO.COM
Iniciales: AG
Correo: ana@ejemplo.com
ana garcia — nota: 8.5
```

#### Por qué funciona

`strip()` se aplica al resultado de `input()`, antes de guardarlo, así que las iniciales no salen con espacios. `lower()` deja el correo en minúsculas. La f-string inserta el nombre completo y formatea la nota con un decimal mediante `:.1f`.

#### Conceptos utilizados

- `input()`, conversión y limpieza de texto.
- `strip()`, `lower()` y `upper()`.
- Índices y concatenación.
- f-strings y formato de números.

#### Errores habituales

- Pedir el dato y aplicar `strip()` en un `print()` en lugar de al guardarlo.
- Escribir `nombre[0].upper() + apellido[0].upper()` y guardar las iniciales ya formateadas: también funciona, pero conviene elegir un solo estilo.
- Usar `:.2f` cuando el enunciado pide un decimal.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `ficha.py` con los datos de prueba y comprueba las tres líneas.
2. Explica por qué `strip()` se aplica al recibir el dato y no al imprimirlo.
3. Compara tus respuestas con las soluciones ocultas.

Criterios de revisión: uso correcto de índices y métodos, comprensión de la inmutabilidad, normalización del texto y formato de la f-string.

**Estado:** lección «Cadenas de texto», pendiente de autoevaluación. Siguiente lección: «Valores verdaderos y falsos».

## Recursos

- [Text Sequence Type — str](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str): referencia oficial de cadenas, índices y métodos.
- [Formatted string literals — Python Language Reference](https://docs.python.org/3/reference/lexical_analysis.html#f-strings): sintaxis oficial de las f-strings, incluido el formato de números.
