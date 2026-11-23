---
title: 'Bucles `while`'
description: 'Condición de parada, contadores, acumuladores, bucles infinitos, break y continue.'
course: python
unit: 'Control de flujo'
order: 14
---

# Bucles `while`

## Repetir mientras se cumpla una condición

Un **bucle** es una estructura que repite un bloque de sentencias. Cada repetición se llama **iteración**. El bucle `while` —«mientras»— comprueba una condición antes de cada iteración y sigue ejecutando el bloque mientras la condición sea verdadera.

La condición es la misma clase de expresión que usaste en los condicionales: una comparación, una negación o una combinación con `and` y `or`. La sintaxis es `while`, la condición, dos puntos y un bloque indentado con cuatro espacios:

```python
intentos = 1
while intentos <= 3:
    print(f'Intento {intentos}')
    intentos += 1
print('Fin')
```

Salida esperada:

```text
Intento 1
Intento 2
Intento 3
Fin
```

La expresión `intentos <= 3` es la **condición de parada**: mientras sea verdadera, el bucle continúa; en cuanto sea falsa, el programa sigue por la sentencia que está después del bloque. Fíjate en que `intentos += 1` está dentro del bucle: sin esa actualización la condición nunca cambiaría. La variable toma los valores `1`, `2` y `3` en las tres iteraciones; en la siguiente comprobación vale `4`, la condición es falsa y se imprime `Fin`.

Si la condición ya es falsa la primera vez, el bloque no se ejecuta ni una sola vez. Esto es distinto de los condicionales: allí una rama se ejecuta como mucho una vez; aquí puede ejecutarse muchas.

> **Consejo:** antes de ejecutar, escribe a mano los valores de la variable en la primera y en la última iteración. Si no ves cómo la condición pasa a ser falsa, el bucle está mal planteado.

## Contadores y acumuladores

Dos patrones aparecen una y otra vez:

- Un **contador** registra cuántas iteraciones se han realizado. Empieza normalmente en `0` y se incrementa con `contador += 1`.
- Un **acumulador** guarda un resultado que se va construyendo: una suma, un total de caracteres o un número de elementos válidos. Empieza con el valor neutro adecuado —`0` para una suma— y se actualiza en cada iteración.

```python
contador = 1
suma = 0
while contador <= 4:
    suma += contador
    contador += 1
print(f'Suma de 1 a 4: {suma}')
print(f'Iteraciones: {contador - 1}')
```

Salida esperada:

```text
Suma de 1 a 4: 10
Iteraciones: 4
```

`suma += contador` es la forma corta de `suma = suma + contador`, que ya viste en la lección de operadores. El orden de las dos actualizaciones importa: primero se añade el valor actual a `suma` y después se avanza `contador`. Si las intercambias, sumarás `2, 3, 4, 5` en lugar de `1, 2, 3, 4`.

Después del bucle, `contador` vale `5`: es el primer valor que hizo falsa la condición. Por eso el número de iteraciones es `contador - 1`, no `contador`. Este detalle explica muchos errores de uno de más.

## Condición de parada y bucles infinitos

Un **bucle infinito** es un bucle cuya condición nunca llega a ser falsa. El programa sigue ejecutando el bloque y no avanza a las sentencias posteriores.

Este fragmento es **ilustrativo: no lo ejecutes**. La variable no se modifica, así que la condición se mantiene verdadera para siempre:

```python
# Fragmento ILUSTRATIVO: no ejecutar; contador no cambia nunca.
contador = 0
while contador < 3:
    print('Sigo repitiendo')
```

Si un bucle así se queda colgado en la terminal, pulsa `Ctrl + C` para interrumpirlo. En un editor, detén la ejecución con el botón de parada. En cuanto aparezca un bucle que no termina, revisa la variable de la condición: ¿se inicializa?, ¿se actualiza dentro del bloque?, ¿puede alcanzar el valor que hace falsa la condición?

También existe la forma `while True`, en la que la condición es literalmente verdadera. Solo es adecuada si dentro del bloque hay un `break` que permita salir; de lo contrario es un bucle infinito. Más adelante verás un menú que combina esa idea con un centinela de texto.

Un valor especial que indica «ya basta» se llama **centinela**. Puede ser un número, como un `0` que significa «fin de la entrada», o una palabra, como `fin` o `salir`. Cuando el centinela es texto conviene normalizar la entrada con `input(...).strip().lower()` para que `FIN`, `fin ` y `fin` se traten igual.

## `break` y `continue`

Dos sentencias permiten alterar el recorrido normal:

- `break` sale del bucle de inmediato. No se comprueba de nuevo la condición ni se ejecuta lo que queda de la iteración.
- `continue` salta al final de la iteración actual. Python vuelve a comprobar la condición y, si sigue siendo verdadera, empieza la siguiente iteración.

```python
numero = 0
while numero < 6:
    numero += 1
    if numero == 3:
        continue
    if numero == 5:
        break
    print(numero)
print('Bucle terminado')
```

Salida esperada:

```text
1
2
4
Bucle terminado
```

El `3` no aparece porque `continue` impide llegar al `print()`. El `5` no aparece porque `break` cierra el bucle antes de imprimir. Después de `break`, el programa continúa por `print('Bucle terminado')`.

Fíjate en que `numero += 1` está **antes** de los dos `if`. Si lo dejaras al final, la iteración del `3` saltaría la actualización y el bucle se repetiría siempre con `numero == 3`. Regla práctica: en un `while`, actualiza la variable de control antes de cualquier `continue`.

## Ejemplo guiado

**Problema:** pedir palabras una a una y mostrar cuántas se han registrado y cuántos caracteres suman, hasta que se escriba `fin`.

**Datos de entrada:** `Python`, `es`, `claro` y la palabra centinela `fin`.

**Estrategia:** inicializar un contador y un acumulador a `0`; leer la primera palabra; repetir mientras la palabra normalizada no sea `fin`; actualizar el contador y el acumulador dentro del bucle; volver a pedir una palabra al final de cada iteración.

```python
total_caracteres = 0
registros = 0
palabra = input('Palabra (o fin para terminar): ').strip().lower()

while palabra != 'fin':
    registros += 1
    total_caracteres += len(palabra)
    print(f'Registros: {registros}; caracteres acumulados: {total_caracteres}')
    palabra = input('Palabra (o fin para terminar): ').strip().lower()

print(f'Total final: {registros} registros, {total_caracteres} caracteres')
```

Diálogo de consola:

```text
Palabra (o fin para terminar): Python
Registros: 1; caracteres acumulados: 6
Palabra (o fin para terminar): es
Registros: 2; caracteres acumulados: 8
Palabra (o fin para terminar): claro
Registros: 3; caracteres acumulados: 13
Palabra (o fin para terminar): fin
Total final: 3 registros, 13 caracteres
```

**Lectura paso a paso:**

- La primera `input()` va antes del bucle: hace falta un valor para comprobar la condición por primera vez.
- `len(palabra)` mide la longitud de cada palabra; `total_caracteres += len(palabra)` va sumando `6 + 2 + 5`.
- La última `input()` del bloque lee la palabra siguiente. Sin esa línea, la condición se repetiría siempre con la misma palabra.
- El centinela `fin` no se cuenta: se comprueba antes de entrar al bloque, no dentro.

**Modificación propuesta:** escribe `FIN` con mayúsculas y con un espacio delante. Gracias a `.strip().lower()` el programa sigue terminando. Predice qué ocurriría si quitaras esa normalización.

## Laboratorio práctico

**Objetivo:** practicar contadores, `continue` y `break` en un mismo bucle.

**Archivo:** `impares.py` en tu carpeta de proyecto.

**Pasos:**

1. Crea el archivo con este contenido y ejecútalo:

   ```python
   numero = 1
   while numero <= 5:
       print(f'Numero: {numero}')
       numero += 1
   ```

2. Comprueba que aparecen cinco líneas, de `Numero: 1` a `Numero: 5`.
3. Sustituye el bucle por esta versión: empieza en `0`, avanza la variable antes de decidir, descarta los pares con `continue` y muestra los impares. Ejecútala y anota la salida.
4. Añade este `if` justo después de `numero += 1`, y fuera del bucle la línea `print(f'Ultimo numero visitado: {numero}')`:

   ```python
       if numero == 4:
           break
   ```

5. Predice el valor final de `numero` antes de ejecutar el paso 4.

**Resultado esperado:** el paso 1 imprime los cinco números; el paso 3 imprime `Impar: 1`, `Impar: 3` e `Impar: 5`; el paso 4 imprime `Impar: 1`, `Impar: 3` y `Ultimo numero visitado: 4`.

**Cómo comprobarlo:** el `5` ya no aparece porque `break` detiene el bucle en el `4`; la última línea confirma que la variable vale `4` al salir.

**Errores previsibles y pistas:**

- Si el programa no termina, busca el `numero += 1`: debe estar antes de cualquier `continue`.
- Si aparece el `4` en el paso 4, revisa que el `break` esté indentado dentro del `while`, no fuera.
- Si el paso 3 imprime también pares, comprueba que la condición sea `numero % 2 == 0` y que el `continue` esté antes del `print()`.

## Errores frecuentes y depuración

| Síntoma                                                                     | Causa probable                                                | Cómo localizarlo y corregirlo                                        |
| --------------------------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------- |
| `IndentationError: expected an indented block after 'while' statement`      | Falta el bloque indentado después de los dos puntos           | Indenta con cuatro espacios la primera sentencia del bucle           |
| `SyntaxError: invalid syntax. Maybe you meant '==' or ':=' instead of '='?` | Se escribió `while contador = 3:` en lugar de una comparación | Usa `while contador == 3:` o `while contador < 3:`                   |
| `NameError: name 'fin' is not defined`                                      | El centinela de texto se escribió sin comillas                | Escribe `while palabra != 'fin':`                                    |
| El bucle nunca termina                                                      | La variable de la condición no se actualiza                   | Añade la actualización dentro del bloque e interrumpe con `Ctrl + C` |
| Se ejecuta una iteración de más o de menos                                  | Confusión entre `<` y `<=` en la condición                    | Traza los valores en una tabla: cuenta cuántas veces es verdadera    |

Los mensajes de error se han comprobado con Python 3.14.7. La última columna de la tabla de `NameError` puede incluir una sugerencia adicional según la versión, pero el nombre no definido es el mismo.

Cuando un bucle no hace lo esperado, añade temporalmente `print()` con las variables de la condición al principio del bloque. Ver su evolución paso a paso suele bastar para encontrar el fallo; después quita esas líneas.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** la condición se evalúa antes de cada iteración; el bloque debe modificar algo que pueda hacerla falsa, salvo que exista un `break` claro.
- **Convención aceptada:** inicializar contadores y acumuladores antes del bucle y usar asignación compuesta para actualizarlos.
- **Preferencia de estilo:** condiciones cortas y nombradas con claridad; `while True` solo cuando la salida se decide dentro del bloque y se ve de un vistazo.
- **Decisión de contexto:** `while` conviene cuando no sabes de antemano cuántas iteraciones habrá —por ejemplo, hasta que se escriba `fin`—. Si el número está fijado, la siguiente lección presenta `for`, que lo expresa mejor.

Un bucle legible deja tres respuestas a la vista: qué se repite, cuándo se detiene y qué variable cambia en cada pasada. Si alguna no se ve en el primer vistazo, conviene reescribirlo.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Predice la salida de este fragmento:

```python
numero = 1
while numero < 4:
    if numero == 2:
        numero += 1
        continue
    print(numero)
    numero += 1
```

**Criterios de aceptación:** indicar los números que se imprimen y explicar por qué no aparece el `2`.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

Salida esperada:

```text
1
3
```

#### Por qué funciona

Con `numero == 2` se incrementa la variable y se ejecuta `continue`, de modo que se salta el `print()` de esa iteración. En las iteraciones del `1` y del `3` se imprime el valor y después se incrementa. Al llegar a `4`, la condición `numero < 4` es falsa y el bucle termina.

#### Conceptos utilizados

- Condición de parada.
- `continue` y actualización antes de saltar.
- Trazación de variables.

#### Errores habituales

- Olvidar el `numero += 1` dentro del `if`: el bucle se quedaría repitiendo con el valor `2`.
- Creer que `continue` sale del bucle: eso hace `break`.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Crea `pares.py`: con un `while`, suma los números pares del `1` al `6` usando `continue` para descartar los impares. Muestra `Suma de pares: 12`.

**Criterios de aceptación:** la salida exacta indicada, un solo bucle y la variable de control actualizada antes de cualquier `continue`.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
numero = 1
suma = 0
while numero <= 6:
    if numero % 2 != 0:
        numero += 1
        continue
    suma += numero
    numero += 1
print(f'Suma de pares: {suma}')
```

Salida esperada:

```text
Suma de pares: 12
```

#### Por qué funciona

`numero % 2 != 0` detecta los impares. En ese caso se avanza la variable y se salta el resto de la iteración. Los pares `2`, `4` y `6` llegan al acumulador, así que `suma` termina en `12`.

#### Conceptos utilizados

- Bucle `while` con acumulador.
- Módulo `%` para detectar paridad.
- `continue`.

#### Errores habituales

- Actualizar `numero` solo al final del bucle: el `continue` se saltaría esa actualización.
- Escribir `numero % 2 == 0` en el `if`: así se descartan justo los pares.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Escribe `pedidos.py`. Debe pedir nombres de pedidos hasta que se escriba `salir`. Los nombres con más de cuatro caracteres se descartan con un mensaje; los demás cuentan y suman su longitud al total. Normaliza la entrada con `.strip().lower()`.

**Criterios de aceptación:** con `cafe`, `teclado`, `te` y `salir`, la salida final es `Pedidos: 2; caracteres: 6` y el pedido `teclado` aparece como descartado.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

```python
cantidad = 0
total = 0
pedido = input('Pedido (salir para terminar): ').strip().lower()

while pedido != 'salir':
    if len(pedido) > 4:
        print('Pedido demasiado largo; descartado')
    else:
        cantidad += 1
        total += len(pedido)
    pedido = input('Pedido (salir para terminar): ').strip().lower()

print(f'Pedidos: {cantidad}; caracteres: {total}')
```

Diálogo de consola:

```text
Pedido (salir para terminar): cafe
Pedido (salir para terminar): teclado
Pedido demasiado largo; descartado
Pedido (salir para terminar): te
Pedido (salir para terminar): salir
Pedidos: 2; caracteres: 6
```

#### Por qué funciona

La primera `input()` se lee antes del bucle para poder evaluar el centinela. Cada iteración decide si el pedido cuenta; al final se lee el siguiente. `cafe` aporta cuatro caracteres y `te`, dos; `teclado` se descarta y `salir` no entra en el bloque.

#### Conceptos utilizados

- Centinela de texto y normalización de entradas.
- Contador y acumulador.
- Bucle con `if` y `else`.

#### Errores habituales

- Pedir el dato solo antes del bucle: la condición se repetiría siempre con el primer pedido.
- Olvidar `.lower()`: un `SALIR` en mayúsculas no detendría el bucle.
- Contar el centinela fuera del bucle: `salir` no debe sumarse.

</details>

### Reto opcional

Crea `piramide.py`. Con un `while` y la repetición de cadenas que viste en la lección de cadenas, imprime cuatro filas de asteriscos: la primera con uno, la segunda con dos, la tercera con tres y la cuarta con cuatro.

**Criterio de aceptación:** cuatro líneas, de `*` a `****`, sin espacios delante.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

```python
altura = 4
fila = 1
while fila <= altura:
    print('*' * fila)
    fila += 1
```

Salida esperada:

```text
*
**
***
****
```

#### Por qué funciona

`'*' * fila` repite el carácter tantas veces como indique `fila`. La variable empieza en `1`, se incrementa en cada iteración y la condición `fila <= altura` permite exactamente cuatro pasadas.

#### Conceptos utilizados

- Bucle `while` con contador.
- Repetición de cadenas con `*`.
- Condición con límite inclusive.

#### Errores habituales

- Iniciar `fila` en `0`: la primera línea quedaría vacía.
- Usar `fila < altura`: solo se imprimirían tres filas.

</details>

## Integración con el proyecto longitudinal

Llega el momento de abrir el gestor de tareas. La convención de esta unidad son tres tareas y tres banderas booleanas, sin listas todavía:

```python
tarea1 = 'Comprar leche'
tarea2 = 'Estudiar Python'
tarea3 = 'Llamar a Ana'
hecha1 = False
hecha2 = False
hecha3 = False
```

Añadimos un menú que sigue aceptando opciones hasta que se escriba `fin`. El contador `revisadas` mide las opciones válidas procesadas y el acumulador `marcadas` cuenta cuántas tareas se marcan por primera vez. `break` cierra el menú y `continue` descarta las opciones no reconocidas.

```python
opcion = ''
revisadas = 0
marcadas = 0

while opcion != 'fin':
    print('Opciones: 1, 2, 3, estado, fin')
    opcion = input('Elige una opción: ').strip().lower()

    if opcion == 'fin':
        break

    if opcion != '1' and opcion != '2' and opcion != '3' and opcion != 'estado':
        print('Opción no reconocida; prueba otra vez')
        continue

    revisadas += 1

    if opcion == '1':
        if hecha1:
            print(f'{tarea1}: ya está hecha')
        else:
            hecha1 = True
            marcadas += 1
            print(f'Marcada: {tarea1}')
    elif opcion == '2':
        if hecha2:
            print(f'{tarea2}: ya está hecha')
        else:
            hecha2 = True
            marcadas += 1
            print(f'Marcada: {tarea2}')
    elif opcion == '3':
        if hecha3:
            print(f'{tarea3}: ya está hecha')
        else:
            hecha3 = True
            marcadas += 1
            print(f'Marcada: {tarea3}')
    else:
        print(f'Hechas: {marcadas}; revisiones: {revisadas}')

print(f'Resumen: marcadas {marcadas}; revisiones {revisadas}')
```

Con las opciones `1`, `1`, `estado` y `fin`, la salida final es `Resumen: marcadas 1; revisiones 3`. El segundo `1` muestra `Comprar leche: ya está hecha` y no incrementa `marcadas`; `estado` muestra `Hechas: 1; revisiones: 3`.

La comprobación de opción usa varias comparaciones con `and` porque las colecciones que permiten escribir algo parecido a `in` con grupos de valores se estudiarán en la unidad siguiente. Con lo que ya conoces, esta forma es correcta y legible.

**Criterios de aceptación:** marcar la tarea 1 dos veces no incrementa `marcadas` la segunda; una opción como `x` no cuenta como revisión; escribir `fin` termina el programa y muestra el resumen.

## Resumen

Ideas clave:

- Un bucle `while` repite un bloque mientras su condición sea verdadera.
- La condición se comprueba antes de cada iteración; si ya es falsa, el bloque no se ejecuta.
- Un contador cuenta pasadas y un acumulador construye un total; ambos se inicializan antes del bucle.
- Toda condición de parada debe poder volverse falsa, salvo que haya un `break` explícito.
- `break` sale del bucle; `continue` salta a la siguiente iteración.
- Un centinela de texto se normaliza con `.strip().lower()` antes de compararlo.

Comprueba que puedes:

- Explicar por qué `contador += 1` debe estar dentro del bucle.
- Predecir la salida de un `while` con `continue` y `break`.
- Escribir un bucle que termine con una palabra centinela.
- Distinguir un contador de un acumulador en el menú de tareas.

## Mini-proyecto: registro de minutos de estudio

Crea `sesion.py`. Debe pedir minutos de estudio hasta que se escriba `fin`, descartar los valores negativos, acumular los válidos y avanzar cuando se alcancen `60` minutos.

1. Inicializa `total_minutos` y `registros` a `0`.
2. Lee la primera entrada con `input(...).strip().lower()` y abre un `while` con el centinela `fin`.
3. Convierte la entrada con `int()`. Si el número es negativo, muestra `Minuto negativo: registro descartado`, vuelve a pedir la entrada y usa `continue`.
4. Suma el número a `total_minutos`, incrementa `registros` y muestra `Registros: X; minutos: Y` con una f-string.
5. Si `total_minutos >= 60`, muestra `Objetivo de 60 minutos alcanzado` y usa `break`. Si no, pide la entrada siguiente. Cierra con una f-string `Resumen: {total_minutos} minutos en {registros} registros`.

**Criterios de aceptación:** con `25`, `-5`, `20` y `fin`, el resumen es `Resumen: 45 minutos en 2 registros` y el negativo aparece como descartado; con `25`, `-5` y `40`, el programa termina por `break` antes de pedir más datos y el resumen es `Resumen: 65 minutos en 2 registros`.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

```python
total_minutos = 0
registros = 0

entrada = input('Minutos (fin para terminar): ').strip().lower()
while entrada != 'fin':
    minutos = int(entrada)
    if minutos < 0:
        print('Minuto negativo: registro descartado')
        entrada = input('Minutos (fin para terminar): ').strip().lower()
        continue
    registros += 1
    total_minutos += minutos
    print(f'Registros: {registros}; minutos: {total_minutos}')
    if total_minutos >= 60:
        print('Objetivo de 60 minutos alcanzado')
        break
    entrada = input('Minutos (fin para terminar): ').strip().lower()

print(f'Resumen: {total_minutos} minutos en {registros} registros')
```

Diálogo de consola para `25`, `-5`, `20` y `fin`:

```text
Minutos (fin para terminar): 25
Registros: 1; minutos: 25
Minutos (fin para terminar): -5
Minuto negativo: registro descartado
Minutos (fin para terminar): 20
Registros: 2; minutos: 45
Minutos (fin para terminar): fin
Resumen: 45 minutos en 2 registros
```

#### Por qué funciona

La primera lectura se hace antes del bucle para evaluar la condición. Cada valor negativo provoca una nueva lectura seguida de `continue`, de modo que nunca llega al acumulador. Los valores válidos actualizan contador y total; la condición `>= 60` permite terminar por `break`, y el centinela `fin` permite terminar sin alcanzar el objetivo. En ambos casos se ejecuta el `print()` final.

#### Conceptos utilizados

- Bucle `while` con centinela de texto.
- Contador y acumulador.
- `input()`, conversión con `int()` y f-strings.
- `break` y `continue`.

#### Errores habituales

- Hacer `int(entrada)` antes de comprobar `entrada != 'fin'`: `int('fin')` no es una conversión válida.
- Olvidar la nueva `input()` antes del `continue`: el bucle se repetiría con el mismo número negativo.
- Colocar el `break` fuera del `if` del objetivo: el programa terminaría después del primer registro válido.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `sesion.py` con las dos secuencias de prueba y comprueba los diálogos y los resúmenes.
2. Explica con tus palabras la diferencia entre terminar por centinela y terminar por `break`.
3. Compara tus respuestas de los ejercicios con las soluciones ocultas y anota qué error te costó más.

Criterios de revisión: condición de parada bien planteada, contador y acumulador actualizados, uso correcto de `break` y `continue`, y entradas normalizadas antes de compararlas con el centinela.

**Estado:** lección «Bucles `while`», pendiente de autoevaluación. Siguiente lección: «Bucles `for`».

## Recursos

- [The while statement](https://docs.python.org/3/reference/compound_stmts.html#the-while-statement): sintaxis oficial del bucle `while` y del bloque indentado.
- [The break statement](https://docs.python.org/3/reference/simple_stmts.html#the-break-statement): referencia de `break` para salir anticipadamente de un bucle.
- [The continue statement](https://docs.python.org/3/reference/simple_stmts.html#the-continue-statement): referencia de `continue` para pasar a la siguiente iteración.
