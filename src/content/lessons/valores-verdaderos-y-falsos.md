---
title: 'Valores verdaderos y falsos'
description: 'Truthiness, comparaciones, operadores lógicos y condiciones claras.'
course: python
unit: 'Control de flujo'
order: 12
---

# Valores verdaderos y falsos

## El valor de verdad de una expresión

Toda expresión de Python produce un valor. Una comparación produce un valor **booleano**, del tipo `bool`, que solo puede ser `True` o `False`. Ya lo vimos al usar `==` en la lección de operadores; ahora vamos a mirar con más atención ese resultado.

```python
print(5 > 3)
print(5 == 3)
print(type(5 > 3))
print(bool(5 > 3))
```

Salida esperada:

```text
True
False
<class 'bool'>
True
```

`type(5 > 3)` confirma que la comparación devuelve un `bool`, no un texto ni un número. La función `bool()`, que ya apareció en la lección de tipos, convierte cualquier valor a `True` o `False`.

La forma en que Python decide si un valor se comporta como verdadero o falso se llama **truthiness**, que podríamos traducir como «condición de verdad». Decimos que un valor es **verdadero** —_truthy_, en inglés— si `bool(valor)` da `True`, y **falso** —_falsy_— si da `False`. No es un tipo nuevo: es una forma de clasificar los valores que ya conoces.

> **Consejo:** cuando dudes sobre un valor, pregúntalo directamente con `bool(valor)` en el REPL. Es más fiable que recordar la regla de memoria.

## Los cinco valores falsos

La regla es corta: en Python son falsos `False`, `0`, `0.0`, el texto vacío `''` y `None`. Cualquier otro valor es verdadero.

```python
print(bool(False), bool(True))
print(bool(0), bool(7), bool(-3))
print(bool(0.0), bool(2.5))
print(bool(''), bool(' '), bool('0'))
print(bool(None))
```

Salida esperada:

```text
False True
False True True
False True
False True True
False
```

La primera línea confirma que los dos valores booleanos se convierten en sí mismos. En la segunda, solo el cero es falso: `7` y `-3` tienen contenido numérico, aunque uno sea negativo. En la tercera ocurre lo mismo con `0.0` frente a `2.5`.

La cuarta línea es la que suele sorprender. `''` no tiene caracteres y es falso; `' '` contiene un espacio y es verdadero; `'0'` contiene el carácter `0`, así que también es verdadero. `bool()` mira si hay contenido, no lo que el texto _signifique_. Por la misma razón, `bool('False')` da `True`: es una cadena con seis caracteres.

`None` —el valor que usamos para representar «todavía no hay dato»— es falso. Recuerda que no es lo mismo que cero: `0` es un número y `None` es ausencia de valor.

| Valor   | `bool(valor)` | Motivo                        |
| ------- | ------------- | ----------------------------- |
| `False` | `False`       | Es el booleano falso          |
| `0`     | `False`       | Es el cero entero             |
| `0.0`   | `False`       | Es el cero decimal            |
| `''`    | `False`       | No contiene caracteres        |
| `None`  | `False`       | Representa ausencia de valor  |
| `' '`   | `True`        | Contiene un espacio           |
| `'0'`   | `True`        | Contiene un carácter          |
| `-3`    | `True`        | Es un número distinto de cero |

> **Advertencia:** un texto con espacios no está vacío. Si recibes datos con `input()` y quieres comprobar que el usuario escribió algo, aplica `strip()` antes de mirar su valor de verdad.

## Comparaciones claras y encadenadas

Las comparaciones `==`, `!=`, `<`, `>`, `<=` y `>=` devuelven siempre un booleano. Con texto, `==` compara carácter por carácter y distingue mayúsculas de minúsculas:

```python
edad = 24
print(edad >= 18)
print(18 <= edad <= 65)
print('Ana' == 'ana')
print('Ana' != 'ana')
```

Salida esperada:

```text
True
True
False
True
```

`18 <= edad <= 65` es un **encadenamiento de comparaciones**: Python lo entiende como «18 es menor o igual que `edad` _y_ `edad` es menor o igual que 65». Equivale a escribir `18 <= edad and edad <= 65`, pero con una ventaja: `edad` se evalúa una sola vez. Es una forma de expresar intervalos que conviene conocer porque se lee como se escribe.

Las cadenas se comparan según su contenido exacto. `'Ana' == 'ana'` es `False` porque la primera letra no coincide; si quieres comparar sin distinguir mayúsculas, normaliza antes con `lower()`, que ya estudiaste en la lección de cadenas.

Con `==` y `!=` puedes comparar valores de tipos distintos y obtener `False` o `True`. Con `<` o `>`, en cambio, comparar un número y un texto provoca un `TypeError`: Python no sabe si `1` va antes o después de `'uno'`.

## `and`, `or` y `not` con valores cualquiera

En la lección de operadores usamos `and`, `or` y `not` solo con booleanos. Con valores de otros tipos hay una regla adicional que conviene conocer: `and` y `or` **devuelven uno de sus operandos**, no necesariamente `True` o `False`. `not`, en cambio, siempre devuelve un booleano.

```python
print(repr('hola' and 5))
print(repr('' and 5))
print(repr('hola' or 'mundo'))
print(repr('' or 'mundo'))
print(not '', not 'hola')
```

Salida esperada:

```text
5
''
'hola'
'mundo'
True False
```

Usamos `repr()` para que se vea el texto vacío entre comillas; si imprimiéramos `'' and 5` directamente, la salida sería una línea en blanco y podrías pensar que no pasó nada.

Las reglas se resumen así:

| Expresión | Si el primer operando es verdadero | Si el primer operando es falso |
| --------- | ---------------------------------- | ------------------------------ |
| `a and b` | Devuelve `b`                       | Devuelve `a`                   |
| `a or b`  | Devuelve `a`                       | Devuelve `b`                   |

Así, `'hola' and 5` da `5` porque `'hola'` es verdadero y `and` pasa al segundo operando. `'' and 5` da `''` porque el primero ya es falso y no hace falta mirar el segundo. Con `or` ocurre lo contrario: `'hola' or 'mundo'` se queda con `'hola'`, mientras que `'' or 'mundo'` toma `'mundo'`.

Cuando ambos operandos son booleanos, estas reglas producen exactamente el `True` o `False` de la tabla de la lección de operadores. Por eso no tuvimos que cambiar nada entonces.

## Cortocircuito

Python evalúa `and` y `or` de izquierda a derecha y se detiene en cuanto el resultado está decidido. A esa conducta se la llama **cortocircuito**: el programa «corta» el camino y no evalúa lo que viene después.

```python
texto = ''
print(bool(texto and texto[0]))
print(len(texto) > 0 and texto[0] == 'P')
```

Salida esperada:

```text
False
False
```

Fíjate en que `texto[0]` no provoca un error. En la primera expresión, `texto` es falso: `and` devuelve `''` sin mirar `texto[0]`, y `bool('')` es `False`. En la segunda, `len(texto) > 0` es `False`, así que tampoco se evalúa la comparación con `texto[0]`.

El cortocircuito no es solo una curiosidad: permite proteger operaciones que solo tienen sentido cuando hay datos. Escribir `len(texto) > 0 and texto[0] == 'P'` es una forma segura de preguntar por la primera letra de un texto que podría estar vacío. Lo mismo ocurre con `or`: en `not texto or texto[0] == 'A'`, si `not texto` es `True`, la segunda parte no se toca.

> **Consejo:** coloca primero la comprobación barata y segura. Así la parte que puede fallar solo se ejecuta cuando ya sabes que los datos existen.

## Condiciones claras

Una **condición** es una expresión con valor de verdad que se usa para decidir. Ya sabemos construirlas; en esta lección solo las calculamos y las mostramos. En la siguiente las usaremos para elegir entre ramas con condicionales.

Como una condición ya es `True` o `False`, no hace falta compararla con `True` o con `False`:

```python
edad = 20
hecha1 = True
print(hecha1 == True)
print(hecha1)
print(not (edad == 18), edad != 18)
```

Salida esperada:

```text
True
True
True True
```

Las dos primeras líneas dan lo mismo, pero `print(hecha1)` dice exactamente lo que quieres decir. En la tercera, `not (edad == 18)` y `edad != 18` también coinciden; la segunda forma es más directa. Escribir `hecha1 == True` funciona, pero añade ruido y delata que todavía no confiamos en el valor booleano.

Conviene, además, que el nombre de una bandera se lea como una afirmación: `hecha1`, `es_valido`, `tiene_descuento`. Entonces `not hecha1` se lee «no está hecha» y el significado de la condición queda claro sin esfuerzo.

## Ejemplo guiado

**Problema:** preparar un resumen del estado de tres tareas usando solo expresiones booleanas.

**Datos de entrada:** tres títulos y tres banderas, todas inicializadas a `False`.

**Estrategia:** calcular varias condiciones con `and`, `or` y `not`, guardarlas en variables con nombres descriptivos y mostrarlas con `print()`.

```python
tarea1 = 'Comprar leche'
tarea2 = 'Estudiar Python'
tarea3 = 'Llamar a Ana'

hecha1 = False
hecha2 = False
hecha3 = False

todas_hechas = hecha1 and hecha2 and hecha3
hay_pendientes = not hecha1 or not hecha2 or not hecha3
pendientes_1_y_3 = not hecha1 and not hecha3
al_menos_una_hecha = hecha1 or hecha2 or hecha3
titulo_largo2 = len(tarea2) > 10

print('Todas hechas:', todas_hechas)
print('Hay pendientes:', hay_pendientes)
print('Pendientes 1 y 3:', pendientes_1_y_3)
print('Al menos una hecha:', al_menos_una_hecha)
print('Título 2 largo:', titulo_largo2)
print(f'{tarea1}: {hecha1}, {tarea2}: {hecha2}, {tarea3}: {hecha3}')
```

Salida esperada:

```text
Todas hechas: False
Hay pendientes: True
Pendientes 1 y 3: True
Al menos una hecha: False
Título 2 largo: True
Comprar leche: False, Estudiar Python: False, Llamar a Ana: False
```

**Lectura paso a paso:**

- `hecha1 and hecha2 and hecha3` es `False`: con tres banderas falsas, la primera ya decide el resultado.
- `not hecha1 or not hecha2 or not hecha3` es `True`: basta con que una tarea esté pendiente.
- `not hecha1 and not hecha3` también es `True`, porque las dos primeras tareas siguen sin hacerse.
- `len(tarea2) > 10` da `True`: `'Estudiar Python'` tiene quince caracteres.
- La f-string inserta los tres títulos y sus banderas tal cual, sin convertir nada.

**Modificación propuesta:** cambia las tres banderas a `True` y predice las cinco primeras líneas antes de ejecutar. El resultado es `True False False True True`: cuando todas están hechas, desaparecen los pendientes.

## Laboratorio práctico

**Objetivo:** explorar `bool()`, el cortocircuito y las comparaciones con valores ya conocidos.

**Archivo:** `verdad.py` en tu carpeta de proyecto.

**Pasos:**

1. Crea el archivo con este contenido:

   ```python
   print(bool(0), bool(1), bool(-2))
   print(bool(0.0), bool(1.5))
   print(bool(''), bool(' '), bool('0'))
   print(bool(None))
   ```

2. Guarda y ejecuta. Comprueba que solo el cero, el cero decimal, el texto vacío y `None` dan `False`.
3. Añade este bloque para ver el cortocircuito con un texto vacío:

   ```python
   texto = ''
   print(repr(texto and texto[0]))
   print(len(texto) > 0 and texto[0] == 'P')
   ```

4. Cambia `texto = ''` por `texto = 'Python'`. La primera línea muestra `'P'` y la segunda, `True`.
5. Añade `edad = 18` y `print(edad >= 18, 18 <= edad <= 65)`. El resultado es `True True`.
6. Añade `bandera = False` y `print(bandera == False, not bandera)`. Ambas son `True`; ya sabes cuál de las dos formas preferir.

**Resultado esperado:** las cuatro primeras líneas son `False True True`, `False True`, `False True True` y `False`. Con el texto vacío aparecen `''` y `False`; con `'Python'`, `'P'` y `True`.

**Cómo comprobarlo:** si quitas el `bool()` de la primera línea del paso 3, la salida es una línea en blanco. Ese es el texto vacío; `repr()` lo hace visible.

**Errores previsibles y pistas:**

- Si `bool(' ')` da `True`, es correcto: el espacio cuenta como contenido.
- Si aparece `IndexError` al probar `texto[0]`, abre el paréntesis de la derecha: la intención era `texto and texto[0]` o `len(texto) > 0 and texto[0] == 'P'`.
- Si `18 <= edad <= 65` no da `True` con `edad = 18`, comprueba que escribiste `<=` en los dos lados.

## Errores frecuentes y depuración

| Síntoma                                                             | Causa probable                             | Cómo localizarlo y corregirlo                                 |
| ------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------- |
| `bool('False')` da `True`                                           | Se confunde el texto con el booleano       | `'False'` tiene caracteres; usa `False` sin comillas          |
| `bool(' ')` da `True`                                               | El texto contiene un espacio               | Aplica `strip()` antes de comprobar si hay contenido          |
| `IndexError: string index out of range`                             | Se accede a `texto[0]` sin comprobar antes | Antepón `len(texto) > 0 and` para aprovechar el cortocircuito |
| `TypeError: '<' not supported between instances of 'int' and 'str'` | Se comparó un número y un texto con `<`    | Compara valores del mismo tipo o convierte uno de ellos       |
| `NameError: name 'true' is not defined`                             | Se escribió `true` en minúsculas           | Los booleanos se escriben `True` y `False`, con mayúscula     |
| Una compuesta da el valor contrario                                 | Se mezcló `and` con `or` sin paréntesis    | Agrupa con paréntesis lo que debe evaluarse primero           |

Cuando una condición no dé lo que esperas, muestra cada parte por separado con `print()`. Ver `bool(a)`, `bool(b)` y el resultado de `a and b` en tres líneas suele revelar el problema en segundos.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** solo cinco valores son falsos; `and` y `or` devuelven operandos, y `not` siempre devuelve un booleano.
- **Convención aceptada:** nombrar las banderas como afirmaciones (`hecha1`, `es_valido`) para leer `not bandera` con naturalidad.
- **Preferencia de estilo:** evitar `bandera == True` y `bandera == False`; escribir `bandera` y `not bandera`.
- **Decisión de contexto:** ante una operación que puede fallar, poner primero la comprobación de seguridad y apoyarse en el cortocircuito.

Estas distinciones —regla del lenguaje, convención, estilo y decisión— aparecerán a menudo en programación. Solo la primera es obligatoria para que Python haga lo que pides; las demás existen para que otra persona —o tú dentro de un mes— entienda el código sin esforzarse.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Predice el valor de cada expresión:

1. `bool(0)`
2. `bool('')`
3. `bool('0')`
4. `bool(None)`
5. `bool(-1)`

**Criterios de aceptación:** cinco resultados correctos y una frase que explique por qué `'0'` y `-1` son verdaderos.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

1. `False`.
2. `False`.
3. `True`.
4. `False`.
5. `True`.

#### Por qué funciona

`0`, `''` y `None` están en la lista de valores falsos. `'0'` es un texto con un carácter y `-1` es un número distinto de cero; los dos son verdaderos aunque su contenido «parezca» vacío o negativo.

#### Conceptos utilizados

- Valores verdaderos y falsos.
- Conversión con `bool()`.

#### Errores habituales

- Creer que `bool('-1')` es falso por el signo: es texto con dos caracteres.
- Aplicar la regla del texto al número y esperar que `bool(0)` sea `True`.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Crea `filtros.py` con `usuario = '  '`, `intentos = 0` y `activo = False`. Sin usar condicionales, muestra en tres líneas: el valor de verdad de `usuario` antes y después de `strip()`; si `intentos == 0` y su valor de verdad; y `not activo` junto a `activo or intentos > 0`.

**Criterios de aceptación:** seis valores en tres líneas: `True False`, `True False` y `True False`.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
usuario = '  '
intentos = 0
activo = False

print(bool(usuario), bool(usuario.strip()))
print(intentos == 0, bool(intentos))
print(not activo, activo or intentos > 0)
```

Salida esperada:

```text
True False
True False
True False
```

#### Por qué funciona

`'  '` contiene dos espacios y es verdadero, pero `strip()` lo deja en `''`, que es falso. `intentos == 0` es `True` mientras que `bool(0)` es `False`: comparar y convertir son operaciones distintas. En la última línea, `not activo` es `True` y `activo or intentos > 0` es `False` porque ambas partes son falsas.

#### Conceptos utilizados

- `strip()` sobre texto recibido.
- Comparaciones y `bool()`.
- `not` y `or` con booleanos.

#### Errores habituales

- Asignar `usuario = usuario.strip()` sin guardar antes el valor original y perder la primera comprobación.
- Escribir `intentos = 0.0`: también sería falso, pero el enunciado pide cero entero.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Con `texto = ''`, este código se detiene con un `IndexError`:

```python
print(texto[0] == 'A')
```

Reescríbelo con dos expresiones que no fallen: una usando `len(texto) > 0 and` y otra usando `not texto or`. Indica qué valor da cada una y por qué no se llega a `texto[0]`.

**Criterios de aceptación:** sin errores, dos líneas con `False` y `True` respectivamente, y una explicación que nombre el cortocircuito.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

```python
texto = ''
print(len(texto) > 0 and texto[0] == 'A')
print(not texto or texto[0] == 'A')
```

Salida esperada:

```text
False
True
```

El error original es `IndexError: string index out of range`, porque `''` no tiene posición `0`.

#### Por qué funciona

En la primera expresión, `len(texto) > 0` es `False` y `and` se detiene: nunca evalúa `texto[0]`. En la segunda, `not texto` es `True` y `or` se detiene: tampoco llega a `texto[0]`. El resultado de la segunda es `True` porque la respuesta «no hay texto» ya está contestada por la primera parte.

#### Conceptos utilizados

- Longitud y comprobación de contenido.
- Cortocircuito de `and` y `or`.
- Índices de cadenas.

#### Errores habituales

- Escribir `texto[0] == 'A' and len(texto) > 0`: el índice se evalúa primero y sigue fallando.
- Creer que `not texto` es `False` porque la variable «existe»: lo que importa es su valor, no la variable.

</details>

### Reto opcional

Con `a = ''` y `b = 'Python'`, consigue exactamente `Python` en la primera línea y `''` en la segunda, usando una sola expresión `or` y una sola `and`. No escribas condicionales.

**Criterio de aceptación:** las dos líneas indicadas, con el texto vacío entre comillas en la segunda.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

```python
a = ''
b = 'Python'

print(a or b)
print(repr(a and b))
```

Salida esperada:

```text
Python
''
```

#### Por qué funciona

`or` devuelve el primer operando verdadero; como `a` es falso, toma `b`. `and` devuelve el primer operando falso; como `a` ya lo es, se queda con `''`. `repr()` hace visible ese texto vacío en la salida.

#### Conceptos utilizados

- Valores devueltos por `and` y `or`.
- `repr()` para inspeccionar cadenas.

#### Errores habituales

- Escribir `b or a`: daría `Python` en las dos líneas.
- Olvidar `repr()` y no ver la segunda línea: no es un fallo, es un texto vacío impreso.

</details>

## Integración con el proyecto longitudinal

Aquí empieza el gestor de tareas. Por ahora son solo tres títulos y tres banderas en un archivo, sin listas: las tres tareas son `'Comprar leche'`, `'Estudiar Python'` y `'Llamar a Ana'`, y `hecha1`, `hecha2` y `hecha3` valen `False` al empezar. Esta lección calcula con `and`, `or` y `not` si están todas hechas, si queda alguna pendiente y qué tareas siguen sin hacerse. En la siguiente, esas mismas expresiones decidirán qué mensaje mostrar.

## Resumen

Ideas clave:

- Solo `False`, `0`, `0.0`, `''` y `None` son falsos; todo lo demás es verdadero.
- `' '` y `'0'` son textos con contenido, así que son verdaderos.
- Las comparaciones devuelven booleanos y se pueden encadenar: `18 <= edad <= 65`.
- `and` y `or` devuelven operandos; `not` devuelve siempre un booleano.
- El cortocircuito evita evaluar lo que ya no puede cambiar el resultado.

Comprueba que puedes:

- Predecir `bool()` de un número, un texto y `None`.
- Explicar por qué `'False'` no es falso.
- Usar `and`, `or` y `not` para describir el estado de varias banderas.
- Proteger un acceso por índice con `len(texto) > 0 and`.

## Mini-proyecto: panel de estado del gestor de tareas

Crea `panel.py`. Define las tres tareas y las tres banderas del proyecto longitudinal con sus valores iniciales. Después calcula cuatro estados —todas hechas, hay pendientes, al menos una hecha y pendientes 1 y 3— y determina si el título de la segunda tarea supera los diez caracteres. Muestra una ficha con las tres tareas y un resumen con los cinco resultados.

1. Define `tarea1`, `tarea2`, `tarea3` con los títulos acordados.
2. Define `hecha1`, `hecha2` y `hecha3` a `False`.
3. Calcula los cinco estados con comparaciones, `and`, `or`, `not` y `len()`.
4. Muestra cada tarea con su bandera en una f-string y, a continuación, los cinco estados con etiquetas.
5. Cambia `hecha2` a `True` y comprueba qué estados cambian.

**Criterios de aceptación:** con las tres banderas en `False`, la ficha tiene tres líneas de tareas y cinco de resumen; «Hay pendientes», «Pendientes 1 y 3» y «Título 2 largo» son `True`, y los otros dos estados son `False`. Tras el cambio, «Al menos una hecha» pasa a `True` y «Pendientes 1 y 3» sigue en `True`.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

```python
tarea1 = 'Comprar leche'
tarea2 = 'Estudiar Python'
tarea3 = 'Llamar a Ana'

hecha1 = False
hecha2 = False
hecha3 = False

todas_hechas = hecha1 and hecha2 and hecha3
hay_pendientes = not hecha1 or not hecha2 or not hecha3
al_menos_una_hecha = hecha1 or hecha2 or hecha3
pendientes_1_y_3 = not hecha1 and not hecha3
titulo_largo2 = len(tarea2) > 10

print(f'1. {tarea1} — hecha: {hecha1}')
print(f'2. {tarea2} — hecha: {hecha2}')
print(f'3. {tarea3} — hecha: {hecha3}')
print('Todas hechas:', todas_hechas)
print('Hay pendientes:', hay_pendientes)
print('Al menos una hecha:', al_menos_una_hecha)
print('Pendientes 1 y 3:', pendientes_1_y_3)
print('Título 2 largo:', titulo_largo2)
```

Salida esperada:

```text
1. Comprar leche — hecha: False
2. Estudiar Python — hecha: False
3. Llamar a Ana — hecha: False
Todas hechas: False
Hay pendientes: True
Al menos una hecha: False
Pendientes 1 y 3: True
Título 2 largo: True
```

Con `hecha2 = True`, «Al menos una hecha» pasa a `True`; «Todas hechas» sigue en `False` y «Hay pendientes» en `True`.

#### Por qué funciona

Cada estado se guarda en una variable con un nombre que describe lo que pregunta. Las banderas son booleanas, así que `and` y `or` producen directamente el valor que queremos mostrar. `len(tarea2) > 10` añade una comparación sobre una cadena, sin salir de lo ya estudiado.

#### Conceptos utilizados

- Valores booleanos y truthiness.
- Comparaciones y `len()`.
- `and`, `or` y `not` con banderas.
- f-strings y `print()` con etiquetas.

#### Errores habituales

- Escribir `hecha1 == True` en las compuestas: funciona, pero añade ruido.
- Cambiar `or` por `and` en «Hay pendientes»: daría `False` mientras quede una tarea sin hacer.
- Olvidar actualizar las variables de estado después de cambiar `hecha2` y volver a ejecutar.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `panel.py` y comprueba las ocho líneas con los valores iniciales.
2. Cambia `hecha2` a `True`, vuelve a ejecutar y explica qué estados cambian y por cuál de las expresiones.
3. Compara tus respuestas con las soluciones ocultas.

Criterios de revisión: clasificación correcta de los valores falsos, uso de `and`, `or` y `not`, comprensión del cortocircuito y claridad de las etiquetas de salida.

**Estado:** lección «Valores verdaderos y falsos», pendiente de autoevaluación. Siguiente lección: «Condicionales».

## Recursos

- [Truth value testing — The Python Standard Library](https://docs.python.org/3/library/stdtypes.html#truth-value-testing): lista oficial de los valores falsos y reglas para usarlos en condiciones.
- [Comparisons](https://docs.python.org/3/library/stdtypes.html#comparisons): referencia de los operadores de comparación y del encadenamiento de comparaciones.
- [Boolean operations — and, or, not](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not): orden de evaluación, cortocircuito y valores devueltos por cada operador.
- [bool() — Built-in Functions](https://docs.python.org/3/library/functions.html#bool): documentación de la conversión a booleano.
