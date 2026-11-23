---
title: 'Bucles `for`'
description: 'Iteración sobre cadenas y rangos, con range, enumerate y zip en situaciones sencillas.'
course: python
unit: 'Control de flujo'
order: 15
---

# Bucles `for`

## Recorrer un iterable

Un **iterable** es un valor que puede entregar sus elementos de uno en uno. Las cadenas son iterables: entregan sus caracteres en orden. Cada entrega es una **iteración** y la variable que aparece en la cabecera del bucle recibe el elemento correspondiente.

La sintaxis es `for`, una variable, `in`, el iterable, dos puntos y un bloque indentado con cuatro espacios:

```python
for caracter in 'Python':
    print(caracter)
```

Salida esperada:

```text
P
y
t
h
o
n
```

No hace falta contar los caracteres ni usar índices: el bucle se encarga de entregar cada uno. La variable `caracter` se llama **variable de recorrido** y existe dentro del bloque. En Python sigue existiendo después del bucle con el último valor asignado, pero conviene no apoyarse en ese detalle: si el iterable estuviera vacío, nunca se habría creado.

Este bucle difiere del `while` que acabas de estudiar. Con `while` tú controlas cuándo parar mediante una condición; con `for` el iterable marca de antemano cuántas entregas habrá. Por eso `for` es la elección natural cuando ya sabes qué elementos quieres recorrer.

## `range` para contar

`range` es un iterable que produce números enteros en orden. No hace falta crear una colección de números: `range` genera la secuencia mientras el bucle la consume. Con un solo argumento, `range(fin)` empieza en `0`; con dos, `range(inicio, fin)` empieza en `inicio`; con tres, `range(inicio, fin, paso)` salta `paso` unidades. Por ejemplo, `range(5)` entrega `0, 1, 2, 3, 4` y `range(2, 9, 2)` entrega `2, 4, 6, 8`.

El **fin siempre se excluye**: `range(1, 5)` entrega cuatro números, no cinco. El `paso` puede ser negativo para contar hacia atrás, como verás en el ejemplo guiado.

```python
for numero in range(5):
    print(numero)
print('---')
for numero in range(1, 5):
    print(numero)
print('---')
for numero in range(2, 9, 2):
    print(numero)
```

Salida esperada:

```text
0
1
2
3
4
---
1
2
3
4
---
2
4
6
8
```

Cuando lo único que necesitas es un número de orden, `range` es suficiente. Si además necesitas el elemento, la siguiente sección presenta una herramienta más clara que `range(len(cadena))`.

## `enumerate`: índice y valor

A veces necesitas al mismo tiempo la posición de cada carácter y el carácter. `enumerate` es un iterable que, en cada entrega, ofrece un **par** de valores: el índice y el elemento. Al escribir dos nombres a la izquierda de `in`, Python separa ese par en dos variables:

```python
for indice, caracter in enumerate('Python'):
    print(f'{indice}: {caracter}')
```

Salida esperada:

```text
0: P
1: y
2: t
3: h
4: o
5: n
```

Los índices empiezan en `0`, igual que en la lección de cadenas; si prefieres numerar desde `1`, `enumerate('Ana', 1)` entrega pares que empiezan en `1: A`.

La separación del par en dos variables es una comodidad de la sintaxis del `for`. Las tuplas —el tipo de dato que hay detrás de esos pares— se estudiarán en la unidad de colecciones; aquí basta con saber que `enumerate` entrega dos valores por iteración y que podemos escribir `for indice, valor in enumerate(...)`.

## `zip`: dos iterables a la vez

`zip` también entrega pares, pero formados por un elemento de cada iterable que se le pase. Es útil cuando dos secuencias van «en paralelo»: por ejemplo, una cadena de letras y un `range` con su número de orden.

```python
for caracter, numero in zip('Ana', range(1, 4)):
    print(f'{numero}. {caracter}')
```

Salida esperada:

```text
1. A
2. n
3. a
```

En la primera iteración, `zip` toma `'A'` de la cadena y `1` del `range`; los dos nombres de la cabecera reciben esos valores. En la segunda toma `'n'` y `2`, y así sucesivamente.

`zip` se detiene cuando **uno cualquiera** de los iterables se agota. Así, `zip('Ana', range(1, 3))` entrega solo dos pares, que se muestran como `1. A` y `2. n`: la tercera letra se queda fuera porque el `range` solo entrega `1` y `2`. Este comportamiento es una regla del lenguaje, no un error. Como las listas todavía no se han estudiado, usaremos cadenas y `range` como iterables de ejemplo; cuando lleguen las colecciones, `zip` permitirá emparejar tareas con estados.

## `break` y `continue` en bucles `for`

`break` y `continue` funcionan igual en un `for` que en un `while`: `break` sale del bucle y `continue` pasa a la siguiente iteración.

```python
for caracter in 'Python':
    if caracter == 't':
        continue
    if caracter == 'o':
        break
    print(caracter)
print('Fin del recorrido')
```

Salida esperada:

```text
P
y
h
Fin del recorrido
```

La `t` se omite por el `continue`. La primera `o` provoca el `break`, así que no se imprimen esa `o` ni la `n` posterior. A diferencia del `while`, aquí no hay que actualizar ninguna variable para avanzar: el iterable entrega el siguiente elemento automáticamente.

## Ejemplo guiado

**Problema:** preparar un informe breve de un mensaje: ver sus índices y numerar sus caracteres desde `1`.

**Datos de entrada:** el texto `'Hola'`.

**Estrategia:** `enumerate` para los índices y `zip` con un `range` para la numeración desde uno.

```python
mensaje = 'Hola'

print('Caracteres con índice:')
for indice, caracter in enumerate(mensaje):
    print(f'{indice} -> {caracter}')

print('Numeración desde 1:')
for caracter, numero in zip(mensaje, range(1, len(mensaje) + 1)):
    print(f'{numero}. {caracter}')
```

Salida esperada:

```text
Caracteres con índice:
0 -> H
1 -> o
2 -> l
3 -> a
Numeración desde 1:
1. H
2. o
3. l
4. a
```

**Lectura paso a paso:**

- `enumerate(mensaje)` entrega cuatro pares, uno por carácter. El primer valor del par se guarda en `indice` y el segundo en `caracter`.
- `len(mensaje)` es `4`, de modo que `range(1, len(mensaje) + 1)` es `range(1, 5)`: entrega `1, 2, 3, 4`. El `+ 1` es necesario porque el fin de `range` se excluye.
- `zip(mensaje, range(...))` empareja cada carácter con su número. En la cabecera escribimos primero `caracter` porque ese es el primer iterable de `zip`.

**Modificación propuesta:** cambia el mensaje por `'Sol'` y predice cuántas líneas tendrá cada bloque. Después cambia el `1` del `range` por `0` y comprueba la nueva salida.

## Laboratorio práctico

**Objetivo:** usar las cuatro herramientas del tema —recorrido directo, `range`, `enumerate` y `zip`— en un solo archivo.

**Archivo:** `recorridos.py` en tu carpeta de proyecto.

**Pasos:**

1. Crea el archivo con los cuatro bucles y ejecútalo:

   ```python
   for caracter in 'Python':
       print(caracter)

   for numero in range(1, 5):
       print(numero * 2)

   for indice, caracter in enumerate('Ana'):
       print(f'{indice}: {caracter}')

   for caracter, numero in zip('Ana', range(1, 4)):
       print(f'{numero} - {caracter}')
   ```

2. Identifica qué bloque imprime seis líneas, cuál cuatro y cuál tres.
3. Cambia el `range(1, 4)` del último bucle por `range(1, 3)` y observa qué ocurre con la última letra.

**Resultado esperado:** el primer bucle imprime seis caracteres; el segundo, `2`, `4`, `6` y `8`; el tercero, `0: A`, `1: n` y `2: a`; el cuarto, `1 - A`, `2 - n` y `3 - a`. Tras el cambio del paso 3, el último bucle imprime solo `1 - A` y `2 - n`.

**Cómo comprobarlo:** compara el número de líneas de cada bloque con la longitud del iterable correspondiente. En el último caso, la última `a` desaparece porque `zip` se detiene con el `range` más corto.

**Errores previsibles y pistas:**

- Si `range(1, 5)` parece «saltarse» el `5`, recuerda que el fin se excluye.
- Si aparece `ValueError` al usar dos nombres en un recorrido directo, falta `enumerate` o `zip`.
- Si el `zip` imprime menos parejas de las esperadas, revisa las longitudes de los dos iterables.

## Errores frecuentes y depuración

| Síntoma                                                              | Causa probable                                               | Cómo localizarlo y corregirlo                                     |
| -------------------------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------- |
| `ValueError: not enough values to unpack (expected 2, got 1)`        | Se escribió `for indice, caracter in 'Ana':` sin `enumerate` | Usa `for indice, caracter in enumerate('Ana'):`                   |
| `IndentationError: expected an indented block after 'for' statement` | Falta indentar el bloque del bucle                           | Añade cuatro espacios a la primera sentencia dentro del `for`     |
| El bucle entrega una iteración menos de lo esperado                  | Confusión con el fin excluido de `range`                     | Escribe `range(1, 5)` si quieres incluir el `4` como último valor |
| Cambiar la variable de recorrido no altera la secuencia              | Se piensa que `numero += 10` modifica el `range`             | Acepta que `range` entrega su propia secuencia en cada iteración  |
| `zip` imprime menos parejas de las previstas                         | Uno de los iterables es más corto                            | Revisa las longitudes y ajusta el `range` o la cadena             |

Para entender el cuarto caso, ejecuta este fragmento:

```python
for numero in range(3):
    numero += 10
    print(numero)
```

Salida esperada:

```text
10
11
12
```

Cada iteración vuelve a asignar `numero` con el valor siguiente que entrega `range`; la suma anterior no se conserva. Si necesitas un total que se acumule, usa otra variable fuera del bucle, como hiciste con el acumulador en la lección anterior.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** el iterable determina las iteraciones; el fin de `range` se excluye y `zip` para con el iterable más corto.
- **Convención aceptada:** recorrer directamente una cadena cuando solo importan los caracteres; reservar `enumerate` para cuando hace falta el índice.
- **Preferencia de estilo:** nombres que describan el elemento —`caracter`, `numero`, `letra`— en lugar de `i`, `x` o `n`.
- **Decisión de contexto:** `range(1, 4)` es adecuado para numerar tres elementos conocidos; cuando exista una colección real de tareas, se recorrerá directamente y `enumerate` dará la numeración. Es mejor evitar `for indice in range(len(cadena))` cuando basta con recorrer la cadena.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Predice la salida de estos dos bucles:

```python
for numero in range(2, 6):
    print(numero)
for numero in range(5, 0, -2):
    print(numero)
```

**Criterios de aceptación:** siete números en total y una frase que explique por qué el segundo bucle no imprime el `0`.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

Salida esperada:

```text
2
3
4
5
5
3
1
```

#### Por qué funciona

`range(2, 6)` entrega `2, 3, 4, 5`: empieza en `2` y se detiene antes del `6`. `range(5, 0, -2)` entrega `5, 3, 1`: baja de dos en dos y se detiene antes del `0`, que es el fin excluido.

#### Conceptos utilizados

- `range` con inicio, fin y paso.
- Fin excluido.
- Paso negativo.

#### Errores habituales

- Esperar que `range(2, 6)` incluya el `6`.
- Creer que un paso negativo incluye el fin.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Crea `tabla.py`. Con un `for` sobre `range(1, 6)`, imprime la tabla de multiplicar del `4` con este formato: `4 x 1 = 4`.

**Criterios de aceptación:** cinco líneas, desde `4 x 1 = 4` hasta `4 x 5 = 20`, calculadas con la multiplicación dentro de la f-string.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
for numero in range(1, 6):
    print(f'4 x {numero} = {4 * numero}')
```

Salida esperada:

```text
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
```

#### Por qué funciona

`range(1, 6)` entrega los multiplicadores del `1` al `5`. Dentro de la f-string, `4 * numero` se calcula antes de insertarse en el texto, así que no hace falta guardar el resultado en otra variable.

#### Conceptos utilizados

- `for` con `range`.
- f-strings con expresiones.
- Multiplicación.

#### Errores habituales

- Usar `range(1, 5)`: faltaría la línea del `5`.
- Escribir `'4 x {numero} = {4 * numero}'` sin la `f` delante: aparecerían las llaves en la salida.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Crea `posiciones.py`. Usa `enumerate` sobre la cadena `'ana'` para imprimir las posiciones de la letra `a`.

**Criterios de aceptación:** dos líneas, `Posición 0` y `Posición 2`, y ninguna para la letra `n`.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

```python
palabra = 'ana'
for indice, caracter in enumerate(palabra):
    if caracter == 'a':
        print(f'Posición {indice}')
```

Salida esperada:

```text
Posición 0
Posición 2
```

#### Por qué funciona

`enumerate` entrega `(0, 'a')`, `(1, 'n')` y `(2, 'a')`. La cabecera separa cada par en `indice` y `caracter`; el `if` filtra y solo se imprime el índice de las entregas que coinciden con `'a'`.

#### Conceptos utilizados

- `enumerate` sobre una cadena.
- Separación del par en dos variables.
- Condicional dentro de un bucle.

#### Errores habituales

- Recorrer la cadena sin `enumerate` y querer imprimir un índice que no existe.
- Comparar con `"A"` en mayúsculas: no coincidiría con las `a` de `'ana'`.

</details>

### Reto opcional

Dos palabras se comparan letra a letra con `zip`. Crea `coincidencias.py` para contar cuántas posiciones tienen la misma letra en `casa` y `copa`.

**Criterio de aceptación:** la salida exacta `Posiciones iguales: 2`.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

```python
palabra1 = 'casa'
palabra2 = 'copa'
iguales = 0
for letra1, letra2 in zip(palabra1, palabra2):
    if letra1 == letra2:
        iguales += 1
print(f'Posiciones iguales: {iguales}')
```

Salida esperada:

```text
Posiciones iguales: 2
```

#### Por qué funciona

`zip` entrega cuatro pares: `c-c`, `a-o`, `s-p` y `a-a`. Solo el primero y el último tienen letras iguales, así que el acumulador `iguales` termina en `2`.

#### Conceptos utilizados

- `zip` con dos cadenas.
- Acumulador.
- Comparación con `==`.

#### Errores habituales

- Sumar dentro de un `if` que compare las palabras completas en lugar de las letras del par.
- Olvidar inicializar `iguales` antes del bucle.

</details>

## Integración con el proyecto longitudinal

El gestor de tareas mantiene la convención de la unidad: tres tareas y tres banderas, sin listas todavía.

```python
tarea1 = 'Comprar leche'
tarea2 = 'Estudiar Python'
tarea3 = 'Llamar a Ana'
hecha1 = False
hecha2 = False
hecha3 = False
```

Con `range(1, 4)` podemos numerar exactamente esas tres tareas. Para cada número elegimos la tarea y su bandera con `if`, `elif` y `else`, y preparamos el texto del estado antes de imprimirlo:

```python
for numero in range(1, 4):
    if numero == 1:
        texto = tarea1
        hecha = hecha1
    elif numero == 2:
        texto = tarea2
        hecha = hecha2
    else:
        texto = tarea3
        hecha = hecha3

    if hecha:
        estado = 'hecha'
    else:
        estado = 'pendiente'

    print(f'{numero}. {texto} - {estado}')
```

Salida esperada:

```text
1. Comprar leche - pendiente
2. Estudiar Python - pendiente
3. Llamar a Ana - pendiente
```

Añadimos una demostración corta de las dos herramientas que entregan pares, esta vez sobre una cadena:

```python
for indice, caracter in enumerate('PAN'):
    print(f'{indice}: {caracter}')

for caracter, numero in zip('PAN', range(1, 4)):
    print(f'{numero}. {caracter}')
```

La salida muestra `0: P`, `1: A` y `2: N`, y después `1. P`, `2. A` y `3. N`. Son solo una demostración de la sintaxis con cadenas. Cuando se estudien las listas, la colección de tareas se podrá recorrer directamente con `for tarea in tareas` y `zip` servirá para emparejar cada tarea con su estado real, sin elegir `tarea1`, `tarea2` y `tarea3` a mano con `if`.

**Criterios de aceptación:** la lista muestra tres tareas numeradas del `1` al `3` con estado `pendiente`; las dos demostraciones imprimen tres parejas cada una; el programa no usa colecciones todavía no estudiadas.

## Resumen

Ideas clave:

- Un `for` recorre un iterable; no necesitas una condición de parada escrita a mano.
- `range(fin)` empieza en `0`; `range(inicio, fin, paso)` excluye siempre el `fin`.
- `enumerate` entrega pares índice-valor y separa el par al escribir dos nombres en la cabecera.
- `zip` entrega pares de dos o más iterables y se detiene cuando se agota el más corto.
- `break` y `continue` actúan en `for` igual que en `while`.
- Para numerar tareas conocidas, `range(1, 4)` es suficiente; con colecciones reales se recorrerán directamente.

Comprueba que puedes:

- Elegir entre `range`, `enumerate` y `zip` según lo que necesites en cada caso.
- Explicar por qué `range(1, 5)` entrega cuatro números.
- Predecir la salida de un `zip` con iterables de distinta longitud.
- Numerar las tres tareas del proyecto con un solo bucle.

## Mini-proyecto: control de asientos de un aula

Crea `asientos.py`. Tienes tres filas identificadas con las letras `A`, `B` y `C`, y el número de asientos ocupados en cada una guardado como texto en otra cadena. El programa debe mostrar las filas numeradas, sus índices, los ocupados por fila y un total.

1. Define `filas = 'ABC'` y `ocupadas = '241'`.
2. Con `for numero in range(1, 4)`, imprime `Fila 1`, `Fila 2` y `Fila 3`.
3. Con `enumerate(filas)`, imprime cada índice y su letra con el formato `0: A`.
4. Con `zip(filas, ocupadas)`, convierte cada carácter de `ocupadas` con `int()`, acumula el total e imprime `Fila A: 2 asientos ocupados` y las dos líneas siguientes.
5. Cierra con `Total ocupadas: 7`.

**Criterios de aceptación:** tres filas numeradas, tres índices, tres líneas de ocupación y el total `7` (la suma de `2`, `4` y `1`). La conversión con `int()` se hace dentro del bucle, sobre cada carácter entregado por `zip`.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

```python
filas = 'ABC'
ocupadas = '241'

for numero in range(1, 4):
    print(f'Fila {numero}')

for indice, letra in enumerate(filas):
    print(f'{indice}: {letra}')

total = 0
for letra, texto in zip(filas, ocupadas):
    cantidad = int(texto)
    total += cantidad
    print(f'Fila {letra}: {cantidad} asientos ocupados')
print(f'Total ocupadas: {total}')
```

Salida esperada:

```text
Fila 1
Fila 2
Fila 3
0: A
1: B
2: C
Fila A: 2 asientos ocupados
Fila B: 4 asientos ocupados
Fila C: 1 asientos ocupados
Total ocupadas: 7
```

#### Por qué funciona

El primer bucle usa `range` porque solo necesita contar hasta tres. El segundo usa `enumerate` para obtener índice y letra a la vez. El tercero usa `zip` para recibir la letra y su texto de ocupación en la misma iteración; `int(texto)` convierte cada carácter numérico y `total += cantidad` va construyendo la suma.

#### Conceptos utilizados

- Recorrido con `range`, `enumerate` y `zip`.
- Conversión con `int()`.
- Acumulador y f-strings.

#### Errores habituales

- Escribir `range(1, 3)` en el primer bucle: faltaría la fila 3.
- Convertir `ocupadas` completa con `int()`: cada iterable entrega un carácter, no la cadena entera.
- Invertir los nombres de `zip`: el primer nombre recibe siempre el elemento del primer iterable, que aquí es la letra.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `asientos.py` y comprueba los tres bloques y el total `7`.
2. Explica cuándo elegirías `enumerate` y cuándo `zip` en el gestor de tareas.
3. Compara tus respuestas de los ejercicios con las soluciones ocultas y revisa los mensajes de error que hayas provocado.

Criterios de revisión: elección correcta de `range`, `enumerate` y `zip`, comprensión del fin excluido y del iterable más corto, y uso de un acumulador para el total.

**Estado:** lección «Bucles `for`», pendiente de autoevaluación. Siguiente lección: «Patrones de control».

## Recursos

- [The for statement](https://docs.python.org/3/reference/compound_stmts.html#the-for-statement): sintaxis oficial del bucle `for` y de la variable de recorrido.
- [The range type](https://docs.python.org/3/library/stdtypes.html#range): reglas oficiales de `range`, incluidos el fin excluido y el paso negativo.
- [enumerate](https://docs.python.org/3/library/functions.html#enumerate): referencia de `enumerate` y de su argumento opcional de inicio.
- [zip](https://docs.python.org/3/library/functions.html#zip): referencia de `zip`, con el comportamiento del iterable más corto.
