---
title: 'Depuración del flujo'
description: 'Trazar valores paso a paso, tablas de seguimiento y localizar errores de condición y de bucles.'
course: python
unit: 'Control de flujo'
order: 17
---

# Depuración del flujo

## Trazar un programa

**Trazar** un programa es seguir su ejecución paso a paso, anotando qué valor tiene cada variable en cada momento. No se trata de adivinar: se reproduce mentalmente lo que hace Python, instrucción por instrucción, y se compara ese recorrido con lo que queríamos que hiciera.

La **depuración** es el proceso de encontrar y corregir errores. Cuando el fallo está en el flujo —en qué ramas se ejecutan y cuántas veces—, la herramienta más útil no es mirar el código fijamente, sino seguir los valores. Un error de flujo típico es que un bucle haga una iteración de más, o que una comparación nunca sea cierta porque la variable tiene otro valor del esperado.

Observa este programa pequeño:

```python
contador = 0
total = 0
while contador < 4:
    contador = contador + 1
    if contador % 2 == 0:
        total = total + contador
print(f'Total: {total}')
```

El operador `%` da el resto de la división; ya lo vimos en la lección de operadores. `contador % 2 == 0` es cierto cuando `contador` es par. La salida es:

```text
Total: 6
```

A primera vista, `6` puede parecer bastante: cuatro vueltas y solo dos números sumados. La traza explica por qué.

## Tablas de seguimiento

Una **tabla de seguimiento** es una tabla con una fila por iteración y una columna por cada variable que queremos vigilar. También suele incluir el valor de la condición del bucle. Es la forma escrita de una traza.

Para el programa anterior, la tabla queda así:

| Iteración | `contador` al entrar | `contador < 4` | `contador` tras sumar 1 | `contador % 2 == 0` | `total` |
| --------- | -------------------- | -------------- | ----------------------- | ------------------- | ------- |
| 1         | 0                    | cierta         | 1                       | falsa               | 0       |
| 2         | 1                    | cierta         | 2                       | cierta              | 2       |
| 3         | 2                    | cierta         | 3                       | falsa               | 2       |
| 4         | 3                    | cierta         | 4                       | cierta              | 6       |
| salida    | 4                    | falsa          | —                       | —                   | 6       |

La última fila no es una iteración: es la comprobación final de la condición que permite salir. Las columnas siguen el orden real de las instrucciones: primero se evalúa `contador < 4`, después se incrementa `contador` y por último se decide si se suma al total.

Tres ideas hacen útil esta tabla: una fila por iteración —contar filas es contar vueltas—, valores anotados en lugar de intenciones y la condición escrita como `cierta` o `falsa`.

> **Consejo:** usa los mismos nombres en la tabla y en el código. Si en el código se llama `intentos`, no lo llames `i` en la tabla: la correspondencia es parte de la depuración.

## Errores de condición

Un **error de condición** aparece cuando la expresión del `if` o del `while` no describe lo que queremos. El más frecuente al empezar es el **error de una iteración**, también llamado _off-by-one_: la comparación incluye o excluye un valor por un lado de más.

```python
intentos = 1
while intentos < 3:
    print(f'Intento {intentos}')
    intentos = intentos + 1
```

Queremos tres intentos, pero la salida se queda en `Intento 1` e `Intento 2`. La tabla lo deja claro:

| Iteración | `intentos` al entrar | `intentos < 3` | `intentos` al salir |
| --------- | -------------------- | -------------- | ------------------- |
| 1         | 1                    | cierta         | 2                   |
| 2         | 2                    | cierta         | 3                   |
| salida    | 3                    | falsa          | 3                   |

El valor `3` nunca se imprime porque la condición se comprueba antes de entrar. La corrección es `while intentos <= 3:`. Recuerda la regla ya vista: `range(3)` genera `0, 1, 2` y un `while` con `< 3` desde `0` hace lo mismo.

Otro error de condición es confundir asignación y comparación. `=` asigna; `==` compara. Si escribes esto:

```python
intentos = 0
if intentos = 3:
    print('Tres intentos')
```

Python no llega a ejecutarlo: es un error de sintaxis. En 3.14.7 el mensaje termina con `SyntaxError: invalid syntax. Maybe you meant '==' or ':=' instead of '='?`. Una tercera fuente de fallos es comparar texto sin normalizar. `' HOLA '` no es igual a `'hola'`: tiene dos espacios y distinto caso. Si una rama `if` nunca se ejecuta, imprime de forma temporal `repr(variable)` para ver los espacios, y aplica `strip().lower()` al guardar la entrada.

## Errores de bucle

Un **error de bucle** es un fallo en la repetición: no se detiene, se detiene antes o salta instrucciones que debería ejecutar. La causa casi siempre está en la variable de control.

**La variable no avanza.** Si la condición depende de `intentos` y nunca se incrementa, el bucle no termina. Vigila especialmente las ramas donde hay `continue`.

```python
intentos = 0
while intentos < 3:
    linea = input('Escribe algo: ').strip()
    if linea == '':
        continue
    print(f'Recibido: {linea}')
    intentos = intentos + 1
```

`continue` salta al final de la iteración y vuelve a evaluar la condición. Si el usuario pulsa Enter sin escribir, `intentos` no cambia:

```text
Escribe algo:
Escribe algo: Ana
Recibido: Ana
```

El bucle no se cuelga para siempre si en algún momento llega texto, pero sí se queda «atascado» mientras lleguen líneas vacías. La tabla lo muestra:

| Iteración | `linea` | `linea == ''` | `intentos` al entrar | `intentos` al volver a la condición |
| --------- | ------- | ------------- | -------------------- | ----------------------------------- |
| 1         | `''`    | cierta        | 0                    | 0                                   |
| 2         | `'Ana'` | falsa         | 0                    | 1                                   |

La corrección es actualizar el contador antes del `continue`, o mover `intentos = intentos + 1` justo después de leer la línea. La regla general es: **toda rama que vuelva a la condición debe dejar la variable lista para avanzar**.

**`break` en el lugar equivocado.** `break` sale del bucle entero, no solo del `if` que lo contiene. Si está mal indentado, el programa termina después de la primera iteración. Antes de moverlo, pregunta: «¿quiero salir del bucle o solo saltar esta vuelta?». Para saltar, usa `continue`.

**Actualización en la rama incorrecta.** Si `intentos = intentos + 1` queda dentro de un `if`, las iteraciones que no entran en esa rama no cuentan. La tabla lo detecta en cuanto una columna se repite dos veces seguidas.

## Confirmar la traza con `print()`

La traza mental es imprescindible, pero a veces queremos comprobarla. La forma más sencilla es añadir `print()` temporales con una etiqueta reconocible:

```python
intentos = 1
while intentos < 3:
    print(f'DEBUG intentos={intentos}')
    print(f'Intento {intentos}')
    intentos = intentos + 1
```

La salida alterna `DEBUG intentos=1`, `Intento 1`, `DEBUG intentos=2` e `Intento 2`. Esto se llama **instrumentar** el código: insertar observaciones para ver lo que ocurre por dentro. El prefijo `DEBUG` permite encontrar y borrar después todas las líneas añadidas. Los `print()` de depuración no forman parte del resultado final: déjalos fuera del programa entregado.

Para comparar texto, la instrumentación más útil es `print(repr(linea))`: `repr()` muestra el valor entre comillas y hace visibles los espacios que de otro modo pasan desapercibidos.

## Ejemplo guiado

**Problema:** al marcar la primera tarea del tablero, sigue apareciendo como pendiente. Hay que trazar el programa, localizar la causa y corregirla.

**Datos de entrada:** las tres tareas de la convención compartida, `hecha1`, `hecha2` y `hecha3` en `False`, y las opciones `1`, `2` y `fin`.

**Programa con el fallo:**

```python
tarea1 = 'Comprar leche'
tarea2 = 'Estudiar Python'
tarea3 = 'Llamar a Ana'

hecha1 = False
hecha2 = False
hecha3 = False

opcion = input('Opción: ').strip()
while opcion != 'fin':
    if opcion == '1':
        hecha1 = False
    elif opcion == '2':
        hecha2 = True
    elif opcion == '3':
        hecha3 = True
    print(f'{hecha1} | {hecha2} | {hecha3}')
    opcion = input('Opción: ').strip()
print('Fin del registro.')
```

Diálogo de consola:

```text
Opción: 1
False | False | False
Opción: 2
False | True | False
Opción: fin
Fin del registro.
```

**Tabla de seguimiento:**

| Iteración | `opción` al entrar | rama elegida | `hecha1` | `hecha2` | `hecha3` | impresión                 |
| --------- | ------------------ | ------------ | -------- | -------- | -------- | ------------------------- |
| 1         | `'1'`              | `if`         | `False`  | `False`  | `False`  | `False \| False \| False` |
| 2         | `'2'`              | `elif`       | `False`  | `True`   | `False`  | `False \| True \| False`  |
| salida    | `'fin'`            | ninguna      | `False`  | `True`   | `False`  | `Fin del registro.`       |

**Lectura paso a paso:**

- En la iteración 1 se elige la rama del `if`. La instrucción `hecha1 = False` asigna el mismo valor que ya tenía: la bandera no cambia. En la iteración 2 funciona el `elif` de la opción `2`, así que el fallo queda aislado en la primera rama.
- Al llegar `fin`, la condición del `while` es falsa y el programa imprime el cierre.

**Corrección:** cambiar `hecha1 = False` por `hecha1 = True`. Con las mismas entradas, las dos impresiones pasan a ser `True | False | False` y `True | True | False`.

## Laboratorio práctico

**Objetivo:** construir una tabla de seguimiento, predecir una salida y comprobarla con Python.

**Archivo:** `traza.py` en tu carpeta de proyecto.

**Pasos:**

1. Crea el archivo con este contenido:

   ```python
   intentos = 0
   while intentos < 3:
       intentos = intentos + 1
       if intentos == 2:
           continue
       print(f'Intento registrado: {intentos}')
   print(f'Total de intentos: {intentos}')
   ```

2. Antes de ejecutarlo, rellena una tabla con las columnas `iteración`, `intentos al entrar`, `intentos tras sumar 1`, `¿continue?` e `impresión`. Debe tener tres filas de iteración.

3. Predice la salida y ejecútala:

   ```text
   Intento registrado: 1
   Intento registrado: 3
   Total de intentos: 3
   ```

4. Cambia `continue` por `break`. Predice antes de ejecutar: solo aparece `Intento registrado: 1` y el total es `2`. Explica la diferencia con una frase: `continue` salta el `print()` de esa vuelta pero el bucle sigue; `break` termina el bucle en ese momento.

**Resultado esperado:** tu tabla de tres filas debe mostrar que en la segunda iteración no hay impresión y que `intentos` acaba en `3`. Compara tu predicción del paso 4 con la salida real para comprobar que has trazado bien las dos palabras clave.

**Errores previsibles y pistas:**

- Si tu tabla tiene solo dos filas, has confundido «iteración» con «línea impresa».
- Si crees que `continue` detiene el bucle, vuelve a leer la condición del `while` al final de esa iteración.
- Si la salida con `break` muestra `Total de intentos: 3`, revisa que `intentos` se incrementa antes de la comparación.

## Errores frecuentes y depuración

| Síntoma                                            | Causa probable                             | Cómo localizarlo y corregirlo                                   |
| -------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| El bucle hace una iteración menos de la esperada   | `<` donde hacía falta `<=`                 | Escribe la condición en la tabla y comprueba el último valor    |
| El bucle no avanza cuando llega una entrada vacía  | `continue` antes de actualizar el contador | Mueve la actualización por encima del `continue`                |
| Una rama `if` nunca se ejecuta                     | Texto sin normalizar                       | Usa `print(repr(variable))` y luego `strip().lower()`           |
| `SyntaxError: invalid syntax. Maybe you meant...`  | Se escribió `=` en una condición           | Cambia `=` por `==` cuando compares valores                     |
| El `else` se ejecuta al terminar el bucle          | Está alineado con `while`, no con `if`     | Comprueba la indentación: `while ... else` es una cláusula real |
| Los `print()` de depuración aparecen en la entrega | Quedaron instrumentos temporales           | Busca el prefijo `DEBUG` y elimina esas líneas                  |

> **Advertencia:** un bucle que no avanza puede bloquear la terminal. Si sospechas que ocurre, interrumpe la ejecución con Ctrl+C en la terminal antes de seguir depurando. No hace falta reiniciar el editor.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** `break` termina el bucle; `continue` pasa a la siguiente iteración; la condición del `while` se evalúa antes de cada vuelta.
- **Convención aceptada:** una fila de tabla por iteración y nombres de variable idénticos a los del código.
- **Preferencia de estilo:** etiquetar los `print()` temporales con `DEBUG` para poder borrarlos de un vistazo.
- **Decisión de contexto:** para programas cortos basta la tabla manual; cuando el código crezca, el depurador del editor —que vimos en la lección de hábitos— permite pausar y observar valores sin modificar el archivo.

Depurar no es probar cambios al azar hasta que la salida «parezca bien». Es formar una hipótesis —«creo que `intentos` vale 2 aquí»— y comprobarla con una traza. Ese hábito ahorra mucho tiempo cuando el programa deja de ser pequeño.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Traza este fragmento y escribe su salida. Indica cuántas iteraciones hace el bucle:

```python
numero = 1
while numero <= 3:
    print(f'Número: {numero}')
    numero = numero + 1
```

**Criterios de aceptación:** tres líneas correctas y una frase que explique por qué aparece el `3`.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

```text
Número: 1
Número: 2
Número: 3
```

El bucle hace tres iteraciones.

#### Por qué funciona

`numero` empieza en `1` y la condición usa `<=`, así que el valor `3` también se imprime. Después de esa tercera iteración, `numero` pasa a `4`, la condición es falsa y el bucle termina.

#### Conceptos utilizados

- Bucle `while` con contador.
- Comparación `<=`.
- f-strings.

#### Errores habituales

- Escribir `< 3`: reduciría la salida a los números `1` y `2`.
- Creer que la actualización de `numero` ocurre antes del `print()`.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Explica por qué este código imprime `No coincide` y ofrece una versión que imprima `Coincide` sin cambiar el valor de `mensaje`:

```python
mensaje = ' HOLA '
if mensaje == 'hola':
    print('Coincide')
else:
    print('No coincide')
```

**Criterios de aceptación:** se mencionan los espacios y el caso, y la corrección normaliza antes de comparar.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
mensaje = ' HOLA '
if mensaje.strip().lower() == 'hola':
    print('Coincide')
else:
    print('No coincide')
```

Salida esperada:

```text
Coincide
```

#### Por qué funciona

`strip()` elimina los espacios de los extremos y `lower()` convierte `HOLA` en `hola`. La cadena original sigue igual porque los métodos devuelven un valor nuevo; solo se usa ese valor en la comparación.

#### Conceptos utilizados

- Comparación de cadenas.
- `strip()` y `lower()`.
- Inmutabilidad de las cadenas.

#### Errores habituales

- Asignar `mensaje.strip().lower()` dentro del `if` con `=`.
- Usar `upper()` en el lado derecho y comparar con `'hola'`.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Este bucle debería imprimir tres intentos, pero imprime dos. Traza los valores, señala la línea responsable y corrígela:

```python
intentos = 1
while intentos < 3:
    print(f'Intento {intentos}')
    intentos = intentos + 1
```

**Criterios de aceptación:** salida con `Intento 1`, `Intento 2` y `Intento 3`, más una explicación basada en la tabla.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

La línea responsable es la condición. La corrección es:

```python
intentos = 1
while intentos <= 3:
    print(f'Intento {intentos}')
    intentos = intentos + 1
```

La salida es `Intento 1`, `Intento 2` e `Intento 3`.

#### Por qué funciona

Con `< 3`, la condición se vuelve falsa cuando `intentos` llega a `3`, justo antes de la iteración que queríamos. Con `<= 3`, esa misma comprobación sigue siendo cierta y se imprime el tercer intento.

#### Conceptos utilizados

- Error de una iteración.
- Condición de parada.
- Tabla de seguimiento.

#### Errores habituales

- Cambiar el incremento a `intentos + 2`, que saltaría valores.
- Inicializar `intentos = 0` sin ajustar la condición: volvería a salir `Intento 3`.

</details>

### Reto opcional

Predice la salida de este programa y después determina qué cambia al sustituir `continue` por `break`:

```python
numero = 0
while numero < 4:
    numero = numero + 1
    if numero == 2:
        continue
    print(f'Valor: {numero}')
```

**Criterio de aceptación:** dos salidas correctas, cada una con sus líneas y su explicación de una frase.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

Con `continue`:

```text
Valor: 1
Valor: 3
Valor: 4
```

Con `break` en lugar de `continue`:

```text
Valor: 1
```

#### Por qué funciona

`continue` salta solo el `print()` de la iteración en que `numero` vale `2`; el contador ya se incrementó, así que las vueltas restantes se ejecutan con `3` y `4`. `break`, en cambio, termina el bucle en ese punto y no se imprimen más valores.

#### Conceptos utilizados

- Diferencia entre `continue` y `break`.
- Actualización previa del contador.
- Trazas con ramas condicionales.

#### Errores habituales

- Creer que `continue` reinicia `numero` a `0`.
- Colocar el incremento después del `if`, lo que dejaría el contador atascado en `1` al usar `continue`.

</details>

## Integración con el proyecto longitudinal

El tablero comparte tres tareas y tres banderas. Supón que al marcar «Estudiar Python» la bandera sigue en `False`:

```python
tarea1 = 'Comprar leche'
tarea2 = 'Estudiar Python'
tarea3 = 'Llamar a Ana'

hecha1 = False
hecha2 = False
hecha3 = False

entrada = input('Tarea a marcar: ')
if entrada == tarea2:
    hecha2 = True
print(f'{hecha1} | {hecha2} | {hecha3}')
```

Con la entrada `Estudiar Python` (un espacio a cada lado), la salida es `False | False | False`. La traza es corta: `entrada` vale `' Estudiar Python '`, `tarea2` vale `'Estudiar Python'` y la comparación es falsa por los espacios. La rama del `if` nunca se ejecuta. La corrección queda en el momento de guardar:

```python
entrada = input('Tarea a marcar: ').strip().lower()
if entrada == tarea2.lower():
    hecha2 = True
```

Ahora la misma entrada produce `False | True | False`. Este es el tipo de fallo que una tabla de seguimiento resuelve en dos filas: valor esperado, valor real.

## Resumen

Ideas clave:

- Trazar es seguir las instrucciones y anotar el valor de cada variable.
- Una tabla de seguimiento tiene una fila por iteración y muestra también la condición del bucle.
- Los errores de condición incluyen el error de una iteración y el uso de `=` en lugar de `==`.
- `continue` vuelve a la condición; `break` sale del bucle.
- Toda rama que use `continue` debe dejar avanzar la variable de control.
- Los `print()` con prefijo `DEBUG` son una forma temporal de confirmar una traza.

Comprueba que puedes:

- Rellenar una tabla de seguimiento de tres iteraciones sin saltarte la comprobación final.
- Explicar por qué `while intentos < 3` desde `1` produce dos intentos.
- Distinguir `continue` de `break` en un ejemplo concreto.
- Localizar una comparación fallida de texto usando `repr()`.

## Mini-proyecto: localizar y corregir un fallo en el tablero

No se trata de escribir un programa nuevo, sino de depurar uno existente. El siguiente `tablero.py` tiene un error de flujo: marcar la opción `2` no marca la tarea correcta.

```python
tarea1 = 'Comprar leche'
tarea2 = 'Estudiar Python'
tarea3 = 'Llamar a Ana'

hecha1 = False
hecha2 = False
hecha3 = False

opcion = input('Opción (1, 2, 3 o fin): ').strip()
while opcion != 'fin':
    if opcion == '1':
        hecha1 = True
    elif opcion == '2':
        hecha1 = True
    elif opcion == '3':
        hecha3 = True
    print(f'{tarea1}: {hecha1} | {tarea2}: {hecha2} | {tarea3}: {hecha3}')
    opcion = input('Opción (1, 2, 3 o fin): ').strip()
print('Cierre del tablero.')
```

1. Ejecútalo con las opciones `2`, `3` y `fin` y guarda la salida.
2. Construye una tabla de seguimiento con `opción`, rama elegida, `hecha1`, `hecha2` y `hecha3` para las dos iteraciones.
3. Señala la instrucción que produce el valor incorrecto y explica por qué la tabla la delata.
4. Corrige **una sola línea** y vuelve a ejecutar con las mismas entradas.

**Criterios de aceptación:** antes de corregir, la opción `2` deja `Comprar leche: True` y `Estudiar Python: False`; después, la opción `2` deja `Comprar leche: False` y `Estudiar Python: True`. La opción `3` sigue marcando `Llamar a Ana` en ambos casos.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

La instrucción incorrecta es `hecha1 = True`, dentro de la rama de la opción `2`; debe ser `hecha2 = True`. Con ese cambio, la salida con `2`, `3` y `fin` es:

```text
Opción (1, 2, 3 o fin): 2
Comprar leche: False | Estudiar Python: True | Llamar a Ana: False
Opción (1, 2, 3 o fin): 3
Comprar leche: False | Estudiar Python: True | Llamar a Ana: True
Opción (1, 2, 3 o fin): fin
Cierre del tablero.
```

#### Por qué funciona

La tabla muestra que en la iteración de la opción `2` cambia `hecha1`, aunque la rama elegida es el `elif` correcto. Eso indica que el error está en el cuerpo de la rama, no en la condición ni en la indentación: se asigna la bandera equivocada. Cambiar `hecha1` por `hecha2` hace que cada opción modifique su propia tarea.

#### Conceptos utilizados

- Tabla de seguimiento de variables booleanas.
- Ramas `if`/`elif` y indentación.
- Bucle `while` con centinela `fin`.

#### Errores habituales

- Cambiar `hecha3 = True` por otra bandera: la opción `3` funcionaba y no debe tocarse.
- Sustituir el `elif` por `if`: con la opción `1` se ejecutarían dos ramas.
- Añadir un `break` para «arreglar» la salida: eso ocultaría el error y dejaría de procesar la opción `3`.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `tablero.py`, rellena la tabla de seguimiento y escribe qué fila revela el error.
2. Aplica la corrección de una línea y comprueba las dos salidas de los criterios de aceptación.
3. Compara tu tabla y tu explicación con la solución oculta.

Criterios de revisión: una fila por iteración, identificación de la instrucción causal, corrección mínima y verificación con las mismas entradas.

**Estado:** lección «Depuración del flujo», pendiente de autoevaluación. Bloque de control de flujo completado. Siguiente lección: «Listas».

## Recursos

- [The while statement](https://docs.python.org/3/reference/compound_stmts.html#the-while-statement): referencia oficial de la condición del bucle y del comportamiento de `break` y `continue`.
- [break and continue Statements](https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements): ejemplos oficiales para distinguir salir del bucle de saltar una iteración.
- [else Clauses on Loops](https://docs.python.org/3/tutorial/controlflow.html#else-clauses-on-loops): consulta por qué un `else` alineado con `while` no pertenece al `if` interior.
