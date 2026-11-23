---
title: 'Operadores'
description: 'Aritméticos, comparación, lógicos y asignación compuesta; precedencia, paréntesis, división entera y módulo.'
course: python
unit: 'Primeros Pasos'
order: 9
---

# Operadores

## Operadores aritméticos

Un **operador** es un símbolo que combina valores —los **operandos**— para producir un resultado. Los aritméticos son los que ya has usado en el REPL para calcular:

| Operador | Nombre          | Ejemplo  | Resultado |
| -------- | --------------- | -------- | --------- |
| `+`      | suma            | `2 + 3`  | `5`       |
| `-`      | resta           | `7 - 2`  | `5`       |
| `*`      | multiplicación  | `3 * 4`  | `12`      |
| `/`      | división        | `8 / 2`  | `4.0`     |
| `//`     | división entera | `7 // 2` | `3`       |
| `%`      | módulo o resto  | `7 % 2`  | `1`       |
| `**`     | potenciación    | `2 ** 3` | `8`       |

Todos funcionan con números. La división `/` siempre devuelve un `float`, incluso cuando el resultado es entero: `8 / 2` da `4.0`. Cuando necesitas un entero, usas `//`.

```python
print('División:', 8 / 2)
print('División entera:', 7 // 2)
print('Resto:', 7 % 2)
print('Potencia:', 2 ** 3)
```

Salida esperada:

```text
División: 4.0
División entera: 3
Resto: 1
Potencia: 8
```

## División entera y módulo en la práctica

`//` y `%` Responden a dos preguntas distintas:

- `total // tamano`: «¿cuántos grupos completos caben?».
- `total % tamano`: «¿qué sobra después de formar esos grupos?».

Si tienes `23` bolígrafos y caben `5` por caja:

```python
boligrafos = 23
por_caja = 5

cajas = boligrafos // por_caja
sueltos = boligrafos % por_caja

print('Cajas llenas:', cajas)
print('Bolígrafos sueltos:', sueltos)
```

Salida esperada:

```text
Cajas llenas: 4
Bolígrafos sueltos: 3
```

Cuatro cajas completas contienen `20` bolígrafos y quedan `3`. La división entera descarta la parte fraccionaria; el módulo recoge justo esa parte multiplicada por el tamaño del grupo.

> **Consejo:** para comprobar un módulo, vuelve a montar el total: `cajas * por_caja + sueltos` debe dar `23`.

## Precedencia y paréntesis

Cuando una expresión tiene varios operadores, Python no los aplica en el orden en que aparecen, sino según unas reglas de **precedencia**. La multiplicación y la división van antes que la suma y la resta:

```python
print(2 + 3 * 4)
print((2 + 3) * 4)
```

Salida esperada:

```text
14
20
```

En la primera línea se calcula `3 * 4` y después se suma `2`. En la segunda, los paréntesis obligan a sumar primero. Los paréntesis no cambian el tipo de resultado: solo agrupan.

Los operadores del mismo nivel se aplican de izquierda a derecha, salvo la potenciación. Si hay duda, añade paréntesis: hacer explícito el orden es más legible que memorizar la tabla completa.

## Operadores de comparación

Los operadores de comparación responden «sí» o «no» devolviendo un valor booleano:

| Operador | Significado   | Ejemplo  | Resultado |
| -------- | ------------- | -------- | --------- |
| `==`     | igual         | `3 == 3` | `True`    |
| `!=`     | distinto      | `3 != 4` | `True`    |
| `<`      | menor que     | `2 < 5`  | `True`    |
| `>`      | mayor que     | `2 > 5`  | `False`   |
| `<=`     | menor o igual | `3 <= 3` | `True`    |
| `>=`     | mayor o igual | `4 >= 5` | `False`   |

```python
print('Igualdad:', 3 == 3)
print('Desigualdad:', 3 != 4)
print('Comparación:', 2 > 5)
```

Salida esperada:

```text
Igualdad: True
Desigualdad: True
Comparación: False
```

Aquí vuelve la distinción importante de la lección de variables: `x = 3` guarda un valor, mientras que `x == 3` comprueba si el valor es `3`. Una asignación dentro de `print()` —`print(x = 3)`— no compara ni asigna la variable: Python lo interpreta como un argumento con nombre y se detiene con un `TypeError`.

## Operadores lógicos

Los operadores lógicos combinan valores booleanos:

| Operador | Nombre | Ejemplo          | Resultado |
| -------- | ------ | ---------------- | --------- |
| `and`    | y      | `True and False` | `False`   |
| `or`     | o      | `True or False`  | `True`    |
| `not`    | no     | `not False`      | `True`    |

```python
muchas_paginas = True
sin_errores = True

print(muchas_paginas and sin_errores)
print(muchas_paginas or sin_errores)
print(not sin_errores)
```

Salida esperada:

```text
True
True
False
```

`and` solo da `True` si ambas partes lo son; `or` da `True` si al menos una lo es; `not` invierte el valor. Estos operadores se usan mucho en condiciones, que llegarán en la siguiente unidad.

> **Nota opcional:** con valores que no son booleanos, `and` y `or` devuelven uno de los operandos en lugar de `True` o `False`. Esa regla depende de los valores verdaderos y falsos y se verá más adelante; por ahora, usa estos operadores solo con booleanos.

## Asignación compuesta

Ya sabes incrementar un contador con `intentos = intentos + 1`. La **asignación compuesta** es la forma corta de escribirlo:

```python
intentos = 0
intentos += 1
print(intentos)
```

Salida esperada:

```text
1
```

`intentos += 1` significa «toma el valor de `intentos`, súmale `1` y guarda el resultado en `intentos`». Equivale a la forma larga. Las demás operaciones aritméticas tienen su versión:

| Forma larga  | Forma corta |
| ------------ | ----------- |
| `x = x + 1`  | `x += 1`    |
| `x = x - 1`  | `x -= 1`    |
| `x = x * 2`  | `x *= 2`    |
| `x = x / 2`  | `x /= 2`    |
| `x = x // 2` | `x //= 2`   |
| `x = x % 2`  | `x %= 2`    |

La forma corta no cambia el resultado; solo evita escribir dos veces el nombre de la variable.

## Ejemplo guiado

**Problema:** repartir material en cajas y calcular cuántas faltan para guardarlo todo.

**Datos de entrada:** `23` bolígrafos y cajas de `5`.

**Estrategia:** calcular cajas llenas y suelto con `//` y `%`, y decidir si hace falta una caja más con una comparación.

```python
boligrafos = 23
por_caja = 5

cajas_llenas = boligrafos // por_caja
sueltos = boligrafos % por_caja
necesita_otra_caja = sueltos > 0

print('Cajas llenas:', cajas_llenas)
print('Suelto:', sueltos)
print('¿Otra caja?', necesita_otra_caja)
print('Comprobación:', cajas_llenas * por_caja + sueltos)
```

Salida esperada:

```text
Cajas llenas: 4
Suelto: 3
¿Otra caja? True
Comprobación: 23
```

**Lectura paso a paso:**

- `boligrafos // por_caja` da `4` porque caben cuatro grupos completos.
- `boligrafos % por_caja` da `3`, que es lo que sobra.
- `sueltos > 0` es una comparación: devuelve `True` porque quedan tres.
- La última línea reconstruye el total con `*` y `+` y confirma el reparto.

**Modificación propuesta:** cambia `boligrafos` por `20`. Predice los tres primeros valores antes de ejecutar: con `0` sueltos, la comparación debe dar `False`.

## Laboratorio práctico

**Objetivo:** practicar precedencia, división entera, módulo y asignación compuesta.

**Archivo:** `operadores.py` en tu carpeta de proyecto.

**Pasos:**

1. Crea el archivo con este contenido:

   ```python
   print('Precedencia:', 2 + 3 * 4)
   print('Con paréntesis:', (2 + 3) * 4)
   print('División:', 8 / 2)
   print('Entera:', 7 // 2)
   print('Resto:', 7 % 2)

   minutos = 10
   minutos += 5
   print('Minutos:', minutos)
   ```

2. Guarda y ejecuta. Compara cada línea con tu predicción.
3. Añade `total = 17`, `por_grupo = 4` y muestra `total // por_grupo` y `total % por_grupo`.
4. Añade `print(total == 17, total != 17, not (total == 17))`.
5. Cambia `minutos += 5` por `minutos = minutos + 5` y comprueba que la salida no cambia.

**Resultado esperado:** los cinco primeros valores son `14`, `20`, `4.0`, `3` y `1`; en el paso 3, `4` y `1`; en el paso 4, `True False False`.

**Cómo comprobarlo:** la comprobación del reparto del paso 3 debe cumplir `4 * 4 + 1 == 17`.

**Errores previsibles y pistas:**

- Si `8 / 2` muestra `4` sin decimal, estás usando `//` en lugar de `/`.
- Si el resultado de `2 + 3 * 4` es `20`, falta respetar la precedencia o sobran paréntesis.
- Si aparece `TypeError` al usar `and`, comprueba que ambos operandos son booleanos.

## Errores frecuentes y depuración

| Síntoma                                                 | Causa probable                           | Cómo localizarlo y corregirlo                     |
| ------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------- |
| `4` donde esperabas `4.0`                               | Se usó `//` en lugar de `/`              | Cambia el operador si necesitas decimales         |
| `20` donde esperabas `14`                               | Los paréntesis cambiaron el orden        | Revisa si quieres `(2 + 3) * 4` o `2 + 3 * 4`     |
| `TypeError: print() got an unexpected keyword argument` | Se escribió `print(x = 3)` para comparar | Usa `x == 3` dentro de `print()`                  |
| `TypeError: unsupported operand type(s)`                | Se mezclaron texto y números con `+`     | Convierte el texto o usa `print()` con argumentos |
| El módulo no es el esperado                             | Se confundió `//` con `%`                | `//` cuenta grupos; `%` muestra lo que sobra      |

Cuando una expresión dé un valor inesperado, divídela en partes y muestra cada una con `print()`. Ver los resultados intermedios suele bastar para encontrar el operador equivocado.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** los operadores tienen precedencia, `/` devuelve decimal y las comparaciones devuelven booleanos.
- **Convención aceptada:** usar paréntesis cuando el orden no sea evidente de un vistazo.
- **Preferencia de estilo:** `contador += 1` en lugar de `contador = contador + 1`.
- **Decisión de contexto:** `//` y `%` son útiles para repartir, agrupar y convertir unidades; no para redondear importes.

Escribir `2 + 3 * 4` está bien porque las reglas son estables, pero escribir `(2 + 3) * 4` cuando eso es lo que quieres decir evita que otra persona —incluido tú dentro de una semana— tenga que dudar.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Predice el valor de cada expresión:

1. `9 / 2`
2. `9 // 2`
3. `9 % 2`
4. `2 + 3 * 2`
5. `(2 + 3) * 2`

**Criterios de aceptación:** cinco resultados correctos, con el punto decimal donde corresponda.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

1. `4.5`
2. `4`
3. `1`
4. `8`
5. `10`

#### Por qué funciona

`/` conserva la parte decimal, `//` se queda con la parte entera y `%` devuelve el resto. En la cuarta expresión, la multiplicación va antes que la suma; en la quinta, los paréntesis invierten el orden.

#### Conceptos utilizados

- Operadores aritméticos.
- División entera y módulo.
- Precedencia.

#### Errores habituales

- Escribir `4` en el primer resultado.
- Aplicar `2 + 3` antes que `3 * 2` en el cuarto.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Crea `reparto.py`: con `total = 29` y `por_fila = 6`, calcula cuántas filas completas se forman y cuántos elementos quedan sueltos. Muestra también la comprobación que reconstruye el total.

**Criterios de aceptación:** `4` filas, `5` sueltos y comprobación `29`.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
total = 29
por_fila = 6

filas = total // por_fila
sueltos = total % por_fila

print('Filas:', filas)
print('Sueltos:', sueltos)
print('Comprobación:', filas * por_fila + sueltos)
```

Salida esperada:

```text
Filas: 4
Sueltos: 5
Comprobación: 29
```

#### Por qué funciona

`//` da el número de grupos completos y `%` el resto. Multiplicar las filas por el tamaño y sumar el resto recupera el total original.

#### Conceptos utilizados

- División entera y módulo.
- Comprobación de un cálculo con la operación inversa.

#### Errores habituales

- Usar `/` en lugar de `//` y obtener `4.833333333333333`.
- Sumar en lugar de multiplicar en la comprobación.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Corrige el error de estas dos líneas sin cambiar lo que pretenden comprobar:

```python
edad = 20
print(edad = 21)
```

**Criterios de aceptación:** el programa muestra `False` y después `21`, usando una comparación y una reasignación separadas.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

```python
edad = 20
print(edad == 21)

edad = 21
print(edad)
```

Salida esperada:

```text
False
21
```

#### Por qué funciona

`==` compara y devuelve `False`; `=` asigna y no muestra nada. Separan dos intenciones distintas: preguntar y guardar.

#### Conceptos utilizados

- Asignación frente a comparación.
- Reasignación.

#### Errores habituales

- Escribir `print(edad = 21)`: Python lo toma como argumento con nombre y falla con `TypeError`.
- Creer que `==` cambia el valor de `edad`.

</details>

### Reto opcional

Usando solo asignación compuesta, lleva `cantidad` de `1` a `8` en tres líneas como máximo, sin escribir el número `8` directamente.

**Criterio de aceptación:** la última línea muestra `8`.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

```python
cantidad = 1
cantidad += 3
cantidad *= 2
print(cantidad)
```

Salida esperada:

```text
8
```

#### Por qué funciona

`1 + 3` da `4` y `4 * 2` da `8`. Cada asignación compuesta toma el valor anterior y guarda el resultado.

#### Conceptos utilizados

- Asignación compuesta.
- Precedencia de las operaciones en pasos separados.

#### Errores habituales

- Escribir `cantidad = cantidad + 3 * 2`: la precedencia daría `7`, no `8`.
- Olvidar actualizar la variable entre operaciones.

</details>

## Integración con el proyecto longitudinal

Todavía no corresponde. Los operadores preparan dos piezas del futuro gestor de tareas: contar tasks con `+= 1` y comparar prioridades con `<` o `>`. Las condiciones que usarán esas comparaciones se estudian en la siguiente unidad.

## Resumen

Ideas clave:

- `/` da decimal; `//` da entero; `%` da el resto.
- La multiplicación va antes que la suma; los paréntesis fuerzan el orden.
- `==` compara y devuelve booleano; `=` asigna.
- `and`, `or` y `not` combinan booleanos.
- `x += 1` es la forma corta de `x = x + 1`.

Comprueba que puedes:

- Calcular grupos completos y resto con `//` y `%`.
- Predecir el resultado de una expresión con precedencia.
- Distinguir `=` de `==` en un `print()`.
- Incrementar un contador con asignación compuesta.

## Mini-proyecto: conversor de unidades

Crea `conversiones.py` con dos conversiones usando datos fijos.Primero, convierte `135` minutos en horas y minutos. Después, convierte `25` grados Celsius a Fahrenheit con la fórmula `grados_c * 9 / 5 + 32`. Muestra cada resultado con una etiqueta.

1. Define `minutos_totales = 135` y calcula horas con `// 60` y minutos con `% 60`.
2. Define `grados_c = 25` y calcula `grados_f` con la fórmula indicada.
3. Muestra ambos resultados con `print()` y etiquetas.
4. Cambia `minutos_totales` por `120` y comprueba que los minutos sueltos pasan a `0`.

**Criterios de aceptación:** `135` minutos dan `2` horas y `15` minutos; `25` Celsius dan `77.0` Fahrenheit; el programa sigue funcionando tras el cambio a `120`.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

```python
minutos_totales = 135
horas = minutos_totales // 60
minutos = minutos_totales % 60

grados_c = 25
grados_f = grados_c * 9 / 5 + 32

print('Horas:', horas)
print('Minutos:', minutos)
print('Grados Celsius:', grados_c)
print('Grados Fahrenheit:', grados_f)
```

Salida esperada:

```text
Horas: 2
Minutos: 15
Grados Celsius: 25
Grados Fahrenheit: 77.0
```

Con `minutos_totales = 120`, las dos primeras líneas muestran `2` y `0`.

#### Por qué funciona

`// 60` cuenta los grupos completos de sesenta minutos y `% 60` recoge el resto. En la fórmula de temperatura, la multiplicación y la división se aplican antes que la suma, y `/` produce un `float`.

#### Conceptos utilizados

- División entera y módulo.
- Precedencia y división con decimales.
- Variables y `print()` con etiquetas.

#### Errores habituales

- Usar `/ 60` para las horas: daría `2.25`.
- Escribir `grados_c * 9 / (5 + 32)`: los paréntesis cambian por completo la fórmula.
- Esperar `77` en lugar de `77.0`: la división `/` siempre da decimal.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `conversiones.py` y comprueba los cuatro valores.
2. Explica por qué `//` y `%` responden a preguntas distintas.
3. Compara tus respuestas con las soluciones ocultas.

Criterios de revisión: uso correcto de los operadores, precedencia, comprensión de la comparación y claridad en las etiquetas de salida.

**Estado:** lección «Operadores», pendiente de autoevaluación. Siguiente lección: «Entrada y salida».

## Recursos

- [Operator precedence — Python Language Reference](https://docs.python.org/3/reference/expressions.html#operator-precedence): tabla oficial de precedencia de operadores.
- [Using Python as a calculator — The Python Tutorial](https://docs.python.org/3/tutorial/introduction.html#using-python-as-a-calculator): ejemplos oficiales de números, división y potencias.
