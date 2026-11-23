---
title: 'Patrones de control'
description: 'Validación repetida de entrada, menús, búsqueda lineal, centinelas y bucles controlados por eventos de consola.'
course: python
unit: 'Control de flujo'
order: 16
---

# Patrones de control

## Validación repetida de entrada

**Validar** un dato es comprobar que cumple una regla antes de usarlo. Un número de intentos debe estar entre 0 y 10; una respuesta debe ser `s` o `n`. Cuando el dato no cumple la regla, no basta con avisar: hay que volver a pedirlo. Eso se logra con un **bucle de reintento**, un `while` que repite la pregunta mientras la entrada siga siendo inválida.

```python
respuesta = input('¿Continuar? (s/n): ').strip().lower()
while respuesta != 's' and respuesta != 'n':
    print('Escribe s o n.')
    respuesta = input('¿Continuar? (s/n): ').strip().lower()

if respuesta == 's':
    print('Continuamos.')
else:
    print('Nos detenemos.')
```

Diálogo de consola:

```text
¿Continuar? (s/n): quizá
Escribe s o n.
¿Continuar? (s/n): S
Continuamos.
```

La primera `input()` se hace antes del bucle para que la condición ya tenga un valor que evaluar. Dentro del `while` se repite la pregunta: esa segunda lectura es la que permite salir, porque actualiza `respuesta`. Si faltara, el programa se quedaría repitiendo `Escribe s o n.` para siempre.

Fíjate en `strip().lower()`: quita espacios y pasa el texto a minúsculas al guardarlo. Así `S`, `s` y `s` se tratan igual. Sin esa normalización, una respuesta perfectamente razonable como `S` se consideraría inválida.

La condición usa `and` porque ambas comparaciones deben cumplirse para rechazar la entrada: no es `s` **y** no es `n`. Las comparaciones explícitas son más claras mientras se empieza.

> **Consejo:** en todo bucle de reintento, comprueba que la variable de la condición se actualice _dentro_ del bucle. Es la primera cosa que hay que mirar cuando un programa «se cuelga».

## Menús y centinelas

Un **menú** es una lista de opciones que el programa presenta al usuario. Un **centinela** es un valor especial que significa «he terminado»: no es una opción de trabajo, sino la señal para salir. En este curso usamos la palabra `fin` como centinela de los menús.

```python
opcion = ''
while opcion != 'fin':
    opcion = input('Escribe "fin" para salir, u otra cosa para seguir: ').strip().lower()
    if opcion == 'fin':
        print('Saliendo del bucle.')
    else:
        print(f'Siguiendo con: {opcion}')
```

Diálogo de consola:

```text
Escribe "fin" para salir, u otra cosa para seguir: seguir
Siguiendo con: seguir
Escribe "fin" para salir, u otra cosa para seguir: FIN
Saliendo del bucle.
```

`opcion = ''` antes del `while` es una **inicialización**: dar un valor inicial a una variable para poder usarla en la condición. Como `''` no es `fin`, el bucle entra al menos una vez. El centinela se compara después de normalizar, por eso `FIN` funciona igual que `fin`.

Un menú real añade más ramas con `elif` y una rama `else` para las opciones desconocidas. Esa rama `else` es, a la vez, la validación: si la opción no es reconocida, el bucle vuelve a mostrar el menú en lugar de terminar o de quedarse callado.

También puedes escribir el menú con `while True` y un `break` cuando aparezca el centinela: `break` sale del bucle más cercano. La versión de arriba pone la condición en el `while`, así que es más fácil de trazar; es la que usaremos en esta lección. Ambas son correctas.

## Búsqueda lineal sin listas

Una **búsqueda lineal** consiste en comparar el valor buscado con cada candidato, uno detrás de otro, hasta encontrarlo o agotar los candidatos. Es la idea más sencilla de búsqueda: no salta ni ordena, solo revisa en orden.

Todavía no hemos estudiado las listas, así que guardamos los tres títulos del proyecto en variables separadas y usamos una **bandera**: una variable booleana que recuerda si ocurrió algo. Aquí `encontrada` empieza en `False` y pasa a `True` si alguna comparación coincide.

```python
tarea1 = 'Comprar leche'
tarea2 = 'Estudiar Python'
tarea3 = 'Llamar a Ana'

objetivo = input('¿Qué tarea buscas? ').strip()
encontrada = False

if objetivo == tarea1:
    encontrada = True
elif objetivo == tarea2:
    encontrada = True
elif objetivo == tarea3:
    encontrada = True

if encontrada:
    print(f'Encontrada: {objetivo}')
else:
    print(f'No está en el tablero: {objetivo}')
```

Diálogo de consola:

```text
¿Qué tarea buscas? Llamar a Ana
Encontrada: Llamar a Ana
```

La cadena de `if`/`elif` recorre los candidatos en orden: primero `tarea1`, después `tarea2` y por último `tarea3`. Como las comparaciones son excluyentes, una sola rama puede levantar la bandera. El `if encontrada:` final decide el mensaje; usar una bandera evita repetir el `print()` en cada rama.

> **Atención:** la búsqueda compara texto con texto. Si el usuario escribe `llamar a ana` en minúsculas, no coincide con `Llamar a Ana`. Normaliza con `strip()` y aplica una comparación en minúsculas cuando quieras aceptar variaciones de caso.

## Bucles controlados por eventos de consola

Hasta ahora hemos usado sobre todo bucles controlados por un **contador**: sabemos cuántas vueltas queremos y un `for ... in range(...)` las cuenta. En un **bucle controlado por eventos**, en cambio, no sabemos de antemano cuántas iteraciones habrá: el número depende de lo que ocurra mientras se ejecuta.

Un **evento de consola** es algo que sucede durante la ejecución, por ejemplo que el usuario escriba la palabra centinela o que pulse Enter sin escribir nada. El bucle sigue hasta que ese evento aparece.

```python
linea = input('Escribe una línea (Enter para terminar): ')
while linea != '':
    print(f'Recibido: {linea}')
    linea = input('Escribe una línea (Enter para terminar): ')
print('Fin de la entrada.')
```

Diálogo de consola:

```text
Escribe una línea (Enter para terminar): Hola
Recibido: Hola
Escribe una línea (Enter para terminar):
Fin de la entrada.
```

Aquí el evento es la cadena vacía `''`, que aparece cuando el usuario pulsa Enter sin texto. No hay contador: si llegan tres líneas hay tres iteraciones, y si llega una, una. Esa es la diferencia esencial con `for numero in range(3)`.

Los tres patrones de esta lección se parecen en un punto: todos necesitan una condición que pueda volverse falsa. En la validación es «la entrada ya es válida»; en el menú es «apareció el centinela»; en la búsqueda es «encontré el valor o acabé de comparar».

## Ejemplo guiado

**Problema:** convertir el tablero de tareas del proyecto longitudinal en un programa interactivo que permita marcar tareas y buscar una por su nombre.

**Datos de entrada:** las tres tareas compartidas de la unidad y sus banderas `hecha1`, `hecha2` y `hecha3`, todas en `False`. La convención del proyecto usa tres variables para las tareas y tres banderas, sin listas todavía.

**Estrategia:** mostrar el tablero, leer una opción, validarla en la rama `else`, usar `fin` como centinela y hacer una búsqueda lineal cuando se elija la opción `4`.

```python
tarea1 = 'Comprar leche'
tarea2 = 'Estudiar Python'
tarea3 = 'Llamar a Ana'

hecha1 = False
hecha2 = False
hecha3 = False

opcion = ''
while opcion != 'fin':
    print('--- Tablero ---')
    print(f'1. {tarea1} — {hecha1}')
    print(f'2. {tarea2} — {hecha2}')
    print(f'3. {tarea3} — {hecha3}')
    print('4. Buscar una tarea')
    print('fin. Salir')
    opcion = input('Elige una opción: ').strip().lower()

    if opcion == '1':
        hecha1 = not hecha1
    elif opcion == '2':
        hecha2 = not hecha2
    elif opcion == '3':
        hecha3 = not hecha3
    elif opcion == '4':
        buscada = input('Tarea a buscar: ').strip()
        while buscada == '':
            buscada = input('Escribe el nombre de una tarea: ').strip()
        if buscada == tarea1:
            print(f'Encontrada en la posición 1: {tarea1}')
        elif buscada == tarea2:
            print(f'Encontrada en la posición 2: {tarea2}')
        elif buscada == tarea3:
            print(f'Encontrada en la posición 3: {tarea3}')
        else:
            print(f'No hay ninguna tarea llamada {buscada}')
    elif opcion == 'fin':
        print('Cerrando el tablero.')
    else:
        print('Opción no válida. Escribe 1, 2, 3, 4 o fin.')
```

Diálogo de consola con las opciones `4`, `Llamar a Ana` y `fin`:

```text
--- Tablero ---
1. Comprar leche — False
2. Estudiar Python — False
3. Llamar a Ana — False
4. Buscar una tarea
fin. Salir
Elige una opción: 4
Tarea a buscar: Llamar a Ana
Encontrada en la posición 3: Llamar a Ana
--- Tablero ---
1. Comprar leche — False
2. Estudiar Python — False
3. Llamar a Ana — False
4. Buscar una tarea
fin. Salir
Elige una opción: fin
Cerrando el tablero.
```

**Lectura paso a paso:**

- El menú se imprime al principio de cada iteración, así que el tablero siempre muestra el estado actual de las banderas.
- `not hecha2` invierte el valor booleano: de `False` a `True` y de `True` a `False`. Por eso la opción `2` permite marcar y desmarcar la tarea.
- El `while buscada == ''` es una validación anidada: no deja buscar una tarea con el nombre vacío.
- La cadena `if`/`elif` compara con `tarea1`, `tarea2` y `tarea3` en ese orden: es la búsqueda lineal del proyecto. `fin` hace falsa la condición del `while` y después se imprime `Cerrando el tablero.`
- La rama `else` avisa de la opción desconocida y, como no cambia `opcion` a `fin`, el bucle vuelve a empezar.

**Modificación propuesta:** cambia `hecha1 = not hecha1` por `hecha1 = True` y predice qué ocurre al elegir la opción `1` dos veces.

## Laboratorio práctico

**Objetivo:** practicar validación repetida, menú con centinela y mensaje para opciones desconocidas.

**Archivo:** `patrones.py` en tu carpeta de proyecto.

**Pasos:**

1. Crea el archivo con este contenido:

   ```python
   nombre = input('Nombre: ').strip()
   while nombre == '':
       nombre = input('Escribe un nombre: ').strip()

   accion = ''
   while accion != 'fin':
       print(f'{nombre}: 1. entrar | 2. salir | fin. terminar')
       accion = input('Acción: ').strip().lower()
       if accion == '1':
           print(f'{nombre} ha entrado.')
       elif accion == '2':
           print(f'{nombre} ha salido.')
       elif accion == 'fin':
           print('Registro cerrado.')
       else:
           print('Acción desconocida.')
   ```

2. Guarda y ejecuta con el nombre `Ana` y las acciones `1`, `3` y `fin`.

3. Comprueba esta salida:

   ```text
   Nombre: Ana
   Ana: 1. entrar | 2. salir | fin. terminar
   Acción: 1
   Ana ha entrado.
   Ana: 1. entrar | 2. salir | fin. terminar
   Acción: 3
   Acción desconocida.
   Ana: 1. entrar | 2. salir | fin. terminar
   Acción: fin
   Registro cerrado.
   ```

4. Vuelve a ejecutar y pulsa Enter sin nombre la primera vez. Debes ver el mensaje `Escribe un nombre: ` antes de continuar. Comprueba también que `FIN` cierra el menú igual que `fin`, porque la entrada se normaliza con `lower()`.

**Resultado esperado:** el nombre vacío se repite; la opción `3` desconocida del paso 3 produce `Acción desconocida.` y el menú vuelve a aparecer; `fin` cierra el registro.

**Errores previsibles y pistas:**

- Si el bucle del nombre no termina, revisa si la segunda `input()` está dentro del `while` y si asigna a `nombre`.
- Si `FIN` no cierra el menú, comprueba que `strip().lower()` se aplica al guardar `accion`.
- Si la opción desconocida no vuelve a mostrar el menú, revisa la indentación de la rama `else`: debe estar al mismo nivel que los `elif`.

## Errores frecuentes y depuración

| Síntoma                                            | Causa probable                                    | Cómo localizarlo y corregirlo                                       |
| -------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------- |
| El bucle repite la misma pregunta sin avanzar      | La variable de la condición no se actualiza       | Busca la `input()` dentro del bucle y asígnale el valor leído       |
| El centinela escrito en mayúsculas no funciona     | Se compara sin normalizar                         | Guarda con `strip().lower()` y compara con `fin`                    |
| La validación solo funciona la primera vez         | Se usó `if` donde hacía falta `while`             | Sustituye el `if` de la pregunta por un bucle de reintento          |
| La búsqueda siempre dice «no encontrada»           | Se compara con espacios o con la variable errónea | Imprime `repr(buscada)` de forma temporal y revisa los `elif`       |
| El `else` se ejecuta incluso con una opción válida | Está alineado con `while` en vez de con `if`      | Revisa la indentación: `else` del menú va con la cadena `if`/`elif` |
| El menú se cierra al primer intento                | La variable se inicializó con el centinela        | Empieza con `opcion = ''`, no con `opcion = 'fin'`                  |

Los fallos de este tema rara vez son de sintaxis: son de **flujo**, es decir, de qué instrucción se ejecuta y cuándo. Para localizarlos, sigue el valor de la variable de la condición iteración a iteración. La siguiente lección dedica todo su contenido a esa técnica.

> **Advertencia:** `int(input(...))` falla si el usuario escribe letras, porque `int()` solo convierte texto numérico. En esta lección validamos opciones de texto para no adelantar el tratamiento de errores, que se estudiará más adelante.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** `input()` siempre devuelve texto; un `while` necesita una condición que pueda cambiar dentro del bucle.
- **Convención aceptada:** normalizar la entrada con `strip().lower()` justo al guardarla y elegir un centinela explícito como `fin`.
- **Preferencia de estilo:** dar un mensaje concreto en la rama `else` en lugar de volver a preguntar en silencio.
- **Decisión de contexto:** usar `for` cuando el número de repeticiones se conoce de antemano y `while` cuando depende de la entrada.

En un proyecto junior, la claridad de la condición de salida importa más que la elegancia del código. Si otra persona puede leer el `while` y decir «esto termina cuando el usuario escribe `fin`», el patrón está bien elegido.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Predice la salida de este fragmento y explica por qué no aparece `Intento 3`:

```python
intentos = 0
while intentos < 2:
    print(f'Intento {intentos + 1}')
    intentos = intentos + 1
print('Fin')
```

**Criterios de aceptación:** tres líneas correctas y una frase que explique qué valor tiene `intentos` al salir del bucle.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

```text
Intento 1
Intento 2
Fin
```

Cuando `intentos` vale `2`, la condición `intentos < 2` es falsa y el bucle termina.

#### Por qué funciona

`intentos + 1` solo se usa para mostrar un mensaje amable que empieza en 1; la variable real cuenta desde 0. Las dos iteraciones corresponden a `intentos = 0` e `intentos = 1`. Después de la segunda, la actualización la deja en `2` y ya no entra.

#### Conceptos utilizados

- Bucle `while` con contador.
- Actualización de la variable de control.
- f-strings.

#### Errores habituales

- Creer que se imprimen tres líneas por el `< 2`: el límite no se incluye.
- Olvidar que `intentos + 1` no modifica `intentos`.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Escribe `turno.py`: pide un turno hasta que sea `manana`, `tarde` o `noche`. Acepta mayúsculas y espacios sobrantes. Muestra `Turno guardado: <valor>` al terminar.

**Criterios de aceptación:** con `nocheee` y después `manana`, el programa avisa una vez, reintenta y termina con `Turno guardado: manana`.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
turno = input('Turno (manana/tarde/noche): ').strip().lower()
while turno != 'manana' and turno != 'tarde' and turno != 'noche':
    print('Turno no reconocido.')
    turno = input('Turno (manana/tarde/noche): ').strip().lower()
print(f'Turno guardado: {turno}')
```

#### Por qué funciona

La condición del `while` se cumple mientras el turno no sea ninguna de las tres opciones, así que agrupamos las tres comparaciones con `and`. La segunda lectura, dentro del bucle, actualiza `turno` y permite salir.

#### Conceptos utilizados

- Validación repetida de entrada.
- `strip()` y `lower()` al guardar.
- Comparaciones con `and`.

#### Errores habituales

- Escribir `or` en lugar de `and`: con `or`, ningún valor sería aceptado.
- Normalizar solo en el `print()` en vez de al guardar.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Reutiliza las tres tareas del proyecto y marca como hecha la que escriba el usuario, sin listas. Si no existe, muestra `Tarea no encontrada`.

**Criterios de aceptación:** con `Estudiar Python` la salida es `False | True | False`; con `Estudiar pyt` aparece `Tarea no encontrada`.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

```python
tarea1 = 'Comprar leche'
tarea2 = 'Estudiar Python'
tarea3 = 'Llamar a Ana'

hecha1 = False
hecha2 = False
hecha3 = False

buscada = input('Tarea a marcar: ').strip()
if buscada == tarea1:
    hecha1 = True
elif buscada == tarea2:
    hecha2 = True
elif buscada == tarea3:
    hecha3 = True
else:
    print('Tarea no encontrada')

print(f'{hecha1} | {hecha2} | {hecha3}')
```

#### Por qué funciona

La cadena `if`/`elif` compara con cada tarea en orden. Solo la rama que coincide cambia su bandera. La rama `else` cubre el caso en que ninguna coincide y evita tener que comprobar las tres banderas para saber si hubo éxito.

#### Conceptos utilizados

- Búsqueda lineal desenrollada en variables.
- Banderas booleanas.
- `if`/`elif`/`else`.

#### Errores habituales

- Asignar `hecha2 = True` en todas las ramas.
- Comparar la entrada sin `strip()`, de modo que un espacio final impida la coincidencia.

</details>

### Reto opcional

Recorre dos cadenas del mismo largo con `zip` y muestra cada par en una línea con la forma `1 -> A`.

**Criterio de aceptación:** tres líneas, de `1 -> A` a `3 -> B`.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

```python
codigos = '123'
etiquetas = 'AMB'
for codigo, etiqueta in zip(codigos, etiquetas):
    print(f'{codigo} -> {etiqueta}')
```

#### Por qué funciona

`zip()` entrega un par en cada iteración: el primer carácter de `codigos` con el primero de `etiquetas`, y así sucesivamente. El `for` con dos nombres separa cada par. Ya usaste `zip` en la lección de bucles `for`; aquí sirve para recorrer dos secuencias en paralelo.

#### Conceptos utilizados

- `zip()` sobre cadenas.
- `for` con varias variables.
- f-strings.

#### Errores habituales

- Escribir `for codigo, etiqueta in codigos, etiquetas`: eso no empareja los caracteres.
- Olvidar que `zip` se detiene cuando se agota la secuencia más corta.

</details>

## Integración con el proyecto longitudinal

El gestor de tareas ya no es una lista de impresiones fijas: ahora tiene un menú. La convención compartida sigue siendo la misma y no se introducen listas:

```python
tarea1 = 'Comprar leche'
tarea2 = 'Estudiar Python'
tarea3 = 'Llamar a Ana'

hecha1 = False
hecha2 = False
hecha3 = False
```

Sobre esa base, el ejemplo guiado añade tres cosas: la opción `4` busca por nombre, las opciones `1` a `3` cambian banderas con `not` y `fin` cierra el programa. Para numerar las opciones sin listas basta un `for numero in range(1, 4)` con `if`/`elif`; cuando se abra la unidad de colecciones se sustituirá por un recorrido directo. Hoy cumple su función sin adelantar conceptos.

## Resumen

Ideas clave:

- Validar es comprobar una regla; un bucle de reintento vuelve a preguntar mientras el dato sea inválido.
- Un menú presenta opciones y un centinela es el valor que señala el final.
- La búsqueda lineal compara el valor buscado con cada candidato en orden.
- Una bandera booleana recuerda si la búsqueda encontró el valor.
- En un bucle controlado por eventos, el número de iteraciones depende de la consola, no de un contador.
- `break` sale del bucle; `continue` salta a la siguiente iteración.

Comprueba que puedes:

- Escribir un bucle que repita la pregunta hasta recibir una respuesta válida.
- Elegir un centinela y compararlo después de normalizar la entrada.
- Buscar una tarea entre tres variables con `if`/`elif` y explicar la diferencia con un bucle controlado por `range`.

## Mini-proyecto: registro de visitas con búsqueda

Crea `visitas.py`. Debe pedir un nombre no vacío, ofrecer un menú con la opción `1` para buscar y `fin` para terminar, y localizar a `Ana`, `Luis` o `Marta` sin usar listas.

1. Guarda el nombre con `strip()` y repite la pregunta mientras esté vacío.
2. Define `persona1 = 'Ana'`, `persona2 = 'Luis'` y `persona3 = 'Marta'`.
3. Monta el menú con `opcion = ''` y `while opcion != 'fin'`; las opciones desconocidas deben avisar y volver a mostrarlo.
4. En la opción `1`, valida que la búsqueda no esté vacía y compara con las tres variables.

**Criterios de aceptación:** con `Lucía`, `1`, `Luis` y `fin`, se muestra `Encontrada en la posición 2: Luis` y el programa termina con `Registro cerrado.`

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

```python
nombre = input('Tu nombre: ').strip()
while nombre == '':
    nombre = input('Escribe tu nombre: ').strip()

persona1 = 'Ana'
persona2 = 'Luis'
persona3 = 'Marta'

opcion = ''
while opcion != 'fin':
    print('1. Buscar persona')
    print('fin. Terminar')
    opcion = input('Elige una opción: ').strip().lower()

    if opcion == '1':
        buscada = input('Persona a buscar: ').strip()
        while buscada == '':
            buscada = input('Escribe un nombre: ').strip()
        if buscada == persona1:
            print(f'Encontrada en la posición 1: {persona1}')
        elif buscada == persona2:
            print(f'Encontrada en la posición 2: {persona2}')
        elif buscada == persona3:
            print(f'Encontrada en la posición 3: {persona3}')
        else:
            print(f'{nombre}, no está en el registro: {buscada}')
    elif opcion == 'fin':
        print('Registro cerrado.')
    else:
        print('Opción no válida. Usa 1 o fin.')
```

Diálogo de consola:

```text
Tu nombre: Lucía
1. Buscar persona
fin. Terminar
Elige una opción: 1
Persona a buscar: Luis
Encontrada en la posición 2: Luis
1. Buscar persona
fin. Terminar
Elige una opción: fin
Registro cerrado.
```

#### Por qué funciona

El primer `while` valida el nombre; el segundo sostiene el menú hasta que aparece el centinela `fin`. Dentro, la opción `1` contiene a la vez una validación anidada y una búsqueda lineal con tres comparaciones. El `else` final avisa de las opciones desconocidas sin cerrar el programa, y el nombre validado se usa en el mensaje de «no encontrada».

#### Conceptos utilizados

- Validación repetida de entrada.
- Menú con centinela y rama `else`.
- Búsqueda lineal sin listas.
- f-strings.

#### Errores habituales

- Inicializar `opcion` con `fin`: el menú no se mostraría nunca.
- Comparar la persona buscada sin antes quitarle los espacios.
- Olvidar actualizar `opcion` dentro del bucle: el menú no terminaría.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `visitas.py` con los datos de prueba y comprueba el diálogo completo.
2. Explica con tus palabras para qué sirve el centinela y por qué la búsqueda necesita una cadena de `if`/`elif`.
3. Compara tus respuestas con las soluciones ocultas y anota qué patrón te costó más.

Criterios de revisión: validación que se repite, menú que termina, búsqueda que compara las tres variables y mensajes claros para entradas inesperadas.

**Estado:** lección «Patrones de control», pendiente de autoevaluación. Siguiente lección: «Depuración del flujo».

## Recursos

- [The while statement](https://docs.python.org/3/reference/compound_stmts.html#the-while-statement): sintaxis oficial del bucle `while` y papel de `break` y `continue`.
- [break and continue Statements](https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements): ejemplos oficiales para salir de un bucle o saltar una iteración.
- [Looping Techniques](https://docs.python.org/3/tutorial/datastructures.html#looping-techniques): consulta `enumerate()` y `zip()` cuando quieras recorrer varias secuencias a la vez.
