---
title: 'Condicionales'
description: 'if, elif, else, anidamiento, condiciones compuestas y ramas claras.'
course: python
unit: 'Control de flujo'
order: 13
---

# Condicionales

## La instrucción `if`: condiciones y ramas

Una **condición** es una expresión con valor de verdad. Una **rama** es un tramo de código que Python ejecuta solo cuando esa condición es `True`. La instrucción que las une es `if`, que se lee «si»:

```python
hecha1 = False
if hecha1:
    print('La tarea 1 ya está hecha')
print('Fin del programa')
```

Salida esperada:

```text
Fin del programa
```

La condición va seguida de **dos puntos** y el cuerpo se escribe en la línea siguiente, desplazado hacia la derecha. Ese desplazamiento se llama **indentación**: en Python no es un adorno, sino la forma de delimitar el bloque. La convención es usar cuatro espacios.

Como `hecha1` es `False`, el cuerpo del `if` no se ejecuta. La última línea no está indentada, así que queda fuera del bloque y siempre se imprime. Esa distinción es fundamental: la indentación decide qué instrucciones pertenecen a la rama.

Si `hecha1` vale `True`, se imprimen los dos mensajes: primero el del bloque y después `Fin del programa`. La condición no tiene que ser una bandera: puede ser cualquier expresión de la lección anterior. `if len(tarea1) > 10:` y `if not hecha1:` son condiciones válidas porque ambas producen `True` o `False`.

> **Consejo:** escribe siempre los dos puntos y la indentación antes de rellenar el cuerpo. Así evitas el error más frecuente de esta lección.

## `else`: la rama alternativa

Cuando quieres que ocurra una cosa si la condición se cumple y otra si no, añades `else` —«en otro caso»— después del bloque del `if`:

```python
edad = 17
if edad >= 18:
    print('Puedes entrar')
else:
    print('Necesitas acompañamiento')
```

Salida esperada:

```text
Necesitas acompañamiento
```

`else` no lleva condición: se ejecuta cuando el `if` de arriba resultó falso. En una cadena `if`/`else` siempre se ejecuta una de las dos ramas, nunca las dos ni ninguna. La palabra `else` se escribe a la misma altura que `if`, y su cuerpo vuelve a ir indentado. Con `edad = 18` aparece `Puedes entrar` y se salta el `else`.

## `elif`: varias alternativas en orden

`elif` es la forma abreviada de «else if» y permite encadenar condiciones. Python las comprueba de arriba abajo y ejecuta **la primera rama cuyo resultado sea `True`**; después ignora el resto de la cadena.

```python
nota = 7
if nota >= 9:
    print('Excelente')
elif nota >= 7:
    print('Aprobado')
elif nota >= 5:
    print('Suficiente')
else:
    print('No aprobado')
```

Salida esperada:

```text
Aprobado
```

Las condiciones se ordenan de más específica a más general: primero `>= 9`, después `>= 7`, luego `>= 5` y por último el `else`. Gracias a ese orden, `elif nota >= 7:` no necesita comprobar que `nota < 9`: si la nota fuera `9` o más, la primera rama ya se habría ejecutado y no llegaríamos hasta aquí.

Probando otros valores: con `nota = 9` sale `Excelente`; con `6`, `Suficiente`; con `4`, `No aprobado`. El `else` final recoge lo que no cumplieron las condiciones anteriores. `elif` no puede aparecer sin un `if` delante y va siempre antes del `else`; puedes encadenar todas las ramas que necesites, pero cada una debe responder a una pregunta distinta.

## Anidamiento de condicionales

Un condicional dentro de otro se llama **anidamiento**. La instrucción interior solo se evalúa cuando se cumple la condición exterior; por eso sirve para decidir dos cosas relacionadas en dos pasos.

```python
hecha1 = False
tarea1 = 'Comprar leche'
if not hecha1:
    if len(tarea1) > 10:
        print('Pendiente larga:', tarea1)
    else:
        print('Pendiente corta:', tarea1)
else:
    print('Ya hecha:', tarea1)
```

Salida esperada:

```text
Pendiente larga: Comprar leche
```

La lectura es esta: como `not hecha1` es `True`, entramos en la rama exterior; dentro, `'Comprar leche'` tiene trece caracteres, así que se cumple `len(tarea1) > 10` y se imprime `Pendiente larga: Comprar leche`. El `else` interior pertenece al `if` de la longitud y el `else` exterior pertenece al `if` de la bandera: la indentación indica cuál es cuál.

El anidamiento es legible mientras se mantenga en uno o dos niveles. Cuando solo te interesa un caso concreto, una condición compuesta dice lo mismo con menos líneas: `if not hecha1 and len(tarea1) > 10:`. Esa forma no sustituye al anidamiento si necesitas mensajes distintos para cada combinación.

## Condiciones compuestas

Una **condición compuesta** une dos o más comparaciones con `and`, `or` y `not`, los operadores de la lección anterior. Se usa cuando la decisión depende de más de un dato.

```python
hecha1 = False
hecha2 = False
hecha3 = False
if not hecha1 and not hecha2 and not hecha3:
    print('Las tres tareas siguen pendientes')
if hecha1 or hecha2 or hecha3:
    print('Al menos una tarea está hecha')
tarea1 = 'Comprar leche'
if tarea1:
    print('Hay título:', tarea1)
```

Salida esperada:

```text
Las tres tareas siguen pendientes
Hay título: Comprar leche
```

La segunda condición es falsa y su rama no se ejecuta. La tercera muestra otra posibilidad de la lección anterior: como `'Comprar leche'` es un texto con contenido, es verdadera y podemos escribir `if tarea1:` en lugar de `if len(tarea1) > 0:`.

El cortocircuito de `and` y `or` también actúa aquí. En `if not hecha1 and ...`, si la primera parte fuera `False`, Python no miraría el resto. Eso permite poner primero la comprobación segura, como hicimos con `len(texto) > 0 and texto[0] == 'P'`.

Cuando la condición es larga, agrupa con paréntesis —por ejemplo, `(not hecha1 and not hecha2) or hecha3`— para que el orden quede escrito en el código. Sin ellos, `and` se evalúa antes que `or` y hay que recordar la regla.

## Ramas redundantes y condiciones ambiguas

Dos errores frecuentes al escribir condicionales son repetir una comprobación y ordenar mal las ramas.

Como una condición ya es booleana, compararla con `True` o con `False` es redundante: `if hecha1 == False:` funciona, pero `if not hecha1:` dice lo mismo con menos palabras. Lo mismo pasa con `if hecha1 == True:`, donde basta con `if hecha1:`.

El orden de los `elif` puede dejar una rama inalcanzable. En este ejemplo, la nota `9` nunca llega a la segunda comprobación:

```python
nota = 9
if nota >= 5:
    print('Aprobado')
elif nota >= 9:
    print('Excelente')
```

Salida esperada:

```text
Aprobado
```

Toda nota mayor o igual que `9` también es mayor o igual que `5`, así que el `elif` jamás se ejecuta. Para corregirlo, intercambia el orden de las dos ramas: primero `>= 9` y después `>= 5`. Cuando escribas una cadena de decisiones, pregúntate si alguna condición posterior ya está incluida en una anterior.

Por último, evita ramas con el mismo cuerpo. Si `if` y `else` imprimen lo mismo, esa decisión no aporta nada y conviene borrarla o reformular la condición.

## Ejemplo guiado

**Problema:** mostrar el estado y la prioridad de una tarea del gestor, distinguiendo tres situaciones.

**Datos de entrada:** `tarea2 = 'Estudiar Python'`, `hecha2 = False` y `es_urgente = True`.

**Estrategia:** usar una cadena `if`/`elif`/`else` para el estado, y una condición compuesta para decidir la prioridad.

```python
tarea2 = 'Estudiar Python'
hecha2 = False
es_urgente = True

if hecha2:
    estado = 'terminada'
elif es_urgente:
    estado = 'pendiente y urgente'
else:
    estado = 'pendiente'

print(f'{tarea2}: {estado}')

if not hecha2 and es_urgente:
    print('Prioridad: hacer hoy')
elif not hecha2:
    print('Prioridad: hacer esta semana')
else:
    print('Prioridad: ninguna')
```

Salida esperada:

```text
Estudiar Python: pendiente y urgente
Prioridad: hacer hoy
```

**Lectura paso a paso:**

- `hecha2` es `False`, así que se descarta la primera rama; `es_urgente` es `True` y `estado` toma el valor `'pendiente y urgente'`.
- Guardar el estado en una variable evita repetir la misma cadena `if`/`elif`/`else` más adelante.
- `not hecha2 and es_urgente` es `True`, así que se imprime `Prioridad: hacer hoy` y el `elif` y el `else` se saltan.
- Las dos decisiones usan las mismas banderas, pero responden preguntas distintas: qué estado tiene la tarea y cuándo conviene hacerla.

**Modificación propuesta:** cambia `hecha2 = True` y predice las dos líneas: `Estudiar Python: terminada` y `Prioridad: ninguna`.

## Laboratorio práctico

**Objetivo:** escribir cadenas de decisiones, anidar un condicional y combinar banderas.

**Archivo:** `condiciones.py` en tu carpeta de proyecto.

**Pasos:**

1. Crea el archivo con la cadena de notas del apartado anterior:

   ```python
   nota = 7
   if nota >= 9:
       print('Excelente')
   elif nota >= 7:
       print('Aprobado')
   elif nota >= 5:
       print('Suficiente')
   else:
       print('No aprobado')
   ```

2. Ejecútalo y anota la salida. Cambia `nota` por `9`, `6` y `4`, una vez cada vez, y comprueba que aparece una sola rama por ejecución.
3. Añade este anidamiento sobre una tarea:

   ```python
   tarea1 = 'Comprar leche'
   hecha1 = False
   if not hecha1:
       if len(tarea1) > 10:
           print('Tarea pendiente larga')
       else:
           print('Tarea pendiente corta')
   else:
       print('Tarea ya hecha')
   ```

4. Añade `hecha2 = False` y `hecha3 = False`, y después:

   ```python
   if not hecha2 and not hecha3:
       print('Quedan las tareas 2 y 3')
   ```

5. Experimenta con errores controlados: quita los dos puntos de un `if` y ejecuta; aparece un `SyntaxError: expected ':'`. Restaura los dos puntos y desindenta una línea del cuerpo: aparece un `IndentationError` que señala la línea del `if`. Corrige el archivo y vuelve a ejecutarlo.

**Resultado esperado:** con `nota = 7` sale `Aprobado`; el anidamiento imprime `Tarea pendiente larga` porque `'Comprar leche'` mide trece caracteres; la condición compuesta imprime `Quedan las tareas 2 y 3`.

**Cómo comprobarlo:** con `nota = 4`, la cadena de notas debe imprimir solo `No aprobado`, sin mensajes de las ramas anteriores.

**Errores previsibles y pistas:**

- Si salen dos mensajes, revisa si escribiste dos `if` independientes donde querías una sola cadena con `elif`.
- Si el `else` parece no ejecutarse nunca, comprueba que esté a la misma altura que su `if`. Si aparece `IndentationError`, revisa que no mezcles tabuladores y espacios: usa cuatro espacios en todo el archivo.

## Errores frecuentes y depuración

| Síntoma                                           | Causa probable                          | Cómo localizarlo y corregirlo                                |
| ------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------ |
| `SyntaxError: expected ':'`                       | Falta el dos puntos tras la condición   | Escribe `if condicion:` antes del cuerpo indentado           |
| `IndentationError: expected an indented block`    | El cuerpo no está desplazado            | Añade cuatro espacios delante de cada instrucción del bloque |
| `SyntaxError: expected ':'` al escribir `else if` | Python no usa `else if`, usa `elif`     | Sustituye `else if` por `elif`                               |
| Se ejecuta una rama que no debería                | Orden incorrecto de los `elif`          | Ordena de la condición más específica a la más general       |
| El `else` nunca se ejecuta                        | Hay un `elif` que cubre todos los casos | Revisa la última condición o simplifica con `else`           |
| `if bandera == True:`                             | Comparación redundante con un booleano  | Escribe `if bandera:` o `if not bandera:`                    |

Cuando una rama no se comporta como esperas, muestra la condición con `print()` justo antes del `if`. Ver `True` o `False` en pantalla separa dos problemas distintos: la condición está mal calculada o la indentación no hace lo que creías.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** `if`, `elif` y `else` terminan en dos puntos; la indentación delimita el bloque y solo se ejecuta una rama de cada cadena.
- **Convención aceptada:** ordenar los `elif` de más específico a más general y dejar `else` para el resto de casos.
- **Preferencia de estilo:** `if bandera:` y `if not bandera:` antes que comparar con `True` o `False`; paréntesis en compuestas largas.
- **Decisión de contexto:** mantener el anidamiento en uno o dos niveles y usar `and` cuando solo interesa un caso.

Una rama con un nombre de bandera claro y una condición corta se entiende de un vistazo. Si necesitas tres líneas para explicar por qué se cumple una condición, probablemente sea hora de guardar parte de ella en una variable con nombre descriptivo.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Predice la salida de este fragmento con `tarea1 = 'Comprar leche'` y `hecha1 = False`:

```python
if hecha1:
    print('Hecha:', tarea1)
else:
    print('Pendiente:', tarea1)
print('Fin')
```

**Criterios de aceptación:** dos líneas exactas y una explicación de por qué `Fin` aparece siempre.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

```text
Pendiente: Comprar leche
Fin
```

Si `hecha1` se cambia a `True`, salen `Hecha: Comprar leche` y `Fin`.

#### Por qué funciona

`hecha1` es `False`, así que se ejecuta el cuerpo de `else`. La línea `print('Fin')` no está indentada: queda fuera de la cadena y se ejecuta en los dos casos.

#### Conceptos utilizados

- `if` y `else`.
- Indentación y bloques.

#### Errores habituales

- Indentar `print('Fin')` por accidente y hacer que aparezca solo cuando la bandera es `True`.
- Creer que `else` lleva una condición escrita.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Crea `acceso.py`. Pide la edad con `input('Edad: ')`, conviértela con `int()` y muestra `Acceso permitido` si es `18` o más, `Acceso con autorización` si es `16` o `17`, y `Acceso denegado` en los demás casos. Usa una sola cadena `if`/`elif`/`else`.

**Criterios de aceptación:** con la entrada `17` aparece `Acceso con autorización`; con `18`, `Acceso permitido`; con `15`, `Acceso denegado`.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
edad = int(input('Edad: '))
if edad >= 18:
    print('Acceso permitido')
elif edad >= 16:
    print('Acceso con autorización')
else:
    print('Acceso denegado')
```

Diálogo de consola con la entrada `17` —el `17` lo escribe el usuario—:

```text
Edad: 17
Acceso con autorización
```

#### Por qué funciona

`input()` devuelve texto y `int()` lo convierte antes de comparar. La condición `edad >= 18` se comprueba primero; como `17` no la cumple, se pasa al `elif`. El orden evita tener que escribir `edad >= 16 and edad < 18`.

#### Conceptos utilizados

- `input()` y conversión con `int()`.
- Cadena `if`/`elif`/`else`.
- Orden de las condiciones.

#### Errores habituales

- Comparar el texto devuelto por `input()` con un número sin convertirlo: da un `TypeError`.
- Escribir las condiciones en orden ascendente y dejar una rama inalcanzable.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Este programa imprime `Aprobado` cuando la nota es `9`, pero debería imprimir `Excelente`:

```python
nota = 9
if nota >= 5:
    print('Aprobado')
elif nota >= 9:
    print('Excelente')
```

Explica la causa y escribe la versión corregida.

**Criterios de aceptación:** se identifica la rama inalcanzable y la salida corregida es `Excelente` sin cambiar los umbrales.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

```python
nota = 9
if nota >= 9:
    print('Excelente')
elif nota >= 5:
    print('Aprobado')
```

Salida esperada:

```text
Excelente
```

#### Por qué funciona

Toda nota que cumple `>= 9` también cumple `>= 5`. Como la condición más general estaba primero, se ejecutaba esa rama y el `elif` nunca se alcanzaba. Al ordenar de más específica a más general, la nota `9` toma la rama correcta.

#### Conceptos utilizados

- Orden de evaluación de `elif`.
- Condiciones incluidas dentro de otras.

#### Errores habituales

- Añadir `and nota < 9` a la primera condición: funciona, pero es más frágil que ordenar bien las ramas.
- Cambiar los umbrales en lugar de cambiar el orden.

</details>

### Reto opcional

Con `hecha1 = False`, `hecha2 = False` y `hecha3 = False`, escribe un condicional con **un nivel de anidamiento** que imprima `Todas pendientes` si las tres banderas son falsas, `Falta la tercera` si solo lo es la tercera y `Hay avances en las dos primeras` en cualquier otro caso. Combina dos banderas con `and` en la condición exterior.

**Criterio de aceptación:** con esos valores iniciales, la salida es exactamente `Todas pendientes`.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

```python
hecha1 = False
hecha2 = False
hecha3 = False

if not hecha1 and not hecha2:
    if not hecha3:
        print('Todas pendientes')
    else:
        print('Falta la tercera')
else:
    print('Hay avances en las dos primeras')
```

Salida esperada:

```text
Todas pendientes
```

#### Por qué funciona

La condición exterior comprueba las dos primeras banderas con `and`. Como ambas son falsas, entramos en esa rama; dentro, `not hecha3` también es `True` y se imprime `Todas pendientes`. Si `hecha3` fuera `True`, el `else` interior daría `Falta la tercera`.

#### Conceptos utilizados

- Anidamiento de un nivel.
- Condición compuesta con `and`.
- `not` sobre banderas.

#### Errores habituales

- Usar tres niveles de anidamiento cuando dos banderas se pueden combinar con `and`.
- Olvidar el `else` exterior y dejar sin respuesta los casos con avances.

</details>

## Integración con el proyecto longitudinal

El gestor de tareas empieza a decidir. Con las mismas variables de la lección anterior —los títulos `'Comprar leche'`, `'Estudiar Python'` y `'Llamar a Ana'`, y las banderas `hecha1`, `hecha2` y `hecha3` a `False`— los condicionales permiten distinguir si no se ha hecho nada, si el trabajo está en curso o si ya está todo terminado. También permiten dar un mensaje distinto según la longitud de un título y avisar cuando quedan tareas por hacer, sin necesidad de listas.

## Resumen

Ideas clave:

- `if` ejecuta su bloque solo cuando la condición es `True`; `else` recoge el caso contrario.
- `elif` encadena condiciones: gana la primera verdadera y el resto se omite.
- La indentación delimita cada bloque; dos puntos y cuatro espacios son la convención. El anidamiento decide en dos pasos y conviene no pasar de dos niveles.
- Una condición compuesta usa `and`, `or` y `not`, y se beneficia del cortocircuito. Ordena las ramas de más específicas a más generales para no dejar ninguna inalcanzable.

Comprueba que puedes:

- Escribir una cadena `if`/`elif`/`else` con tres resultados distintos y detectar un `elif` inalcanzable.
- Explicar qué instrucciones pertenecen a cada rama por su indentación.
- Combinar banderas con `and` y `not` dentro de una condición.

## Mini-proyecto: semáforo del gestor de tareas

Crea `semaforo.py`. Define las tres tareas y las tres banderas del proyecto longitudinal con sus valores iniciales. El programa debe imprimir tres líneas: un estado general elegido entre «todas terminadas», «ninguna terminada» y «trabajo en curso»; un mensaje para la tarea 1 que distinga si está terminada, pendiente larga o pendiente corta; y un aviso sobre el estado de las tareas 2 y 3.

1. Define `tarea1`, `tarea2`, `tarea3` con los títulos acordados y las tres banderas a `False`.
2. Usa una cadena `if`/`elif`/`else` con condiciones compuestas para el estado general.
3. Anida un `if` dentro de `if not hecha1:` para distinguir los títulos largos de los cortos con `len(tarea1) > 10`.
4. Usa `if hecha2 or hecha3:` con su `else` para el último aviso.
5. Cambia `hecha1` y `hecha3` a `True`, vuelve a ejecutar y observa las tres líneas.

**Criterios de aceptación:** con las tres banderas en `False`, la salida es exactamente:

```text
Estado general: ninguna terminada
1. Comprar leche: pendiente larga
Las tareas 2 y 3 siguen pendientes
```

Con `hecha1 = True` y `hecha3 = True`, las líneas pasan a:

```text
Estado general: trabajo en curso
1. Comprar leche: terminada
Hay avances en las tareas 2 o 3
```

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

if hecha1 and hecha2 and hecha3:
    print('Estado general: todas terminadas')
elif not hecha1 and not hecha2 and not hecha3:
    print('Estado general: ninguna terminada')
else:
    print('Estado general: trabajo en curso')

if not hecha1:
    if len(tarea1) > 10:
        print(f'1. {tarea1}: pendiente larga')
    else:
        print(f'1. {tarea1}: pendiente corta')
else:
    print(f'1. {tarea1}: terminada')

if hecha2 or hecha3:
    print('Hay avances en las tareas 2 o 3')
else:
    print('Las tareas 2 y 3 siguen pendientes')
```

Salida esperada con los valores iniciales:

```text
Estado general: ninguna terminada
1. Comprar leche: pendiente larga
Las tareas 2 y 3 siguen pendientes
```

#### Por qué funciona

La primera cadena evalúa el caso más concreto —todas hechas— antes que el de ninguna, y deja el resto para el `else`. El anidamiento solo se evalúa si la tarea 1 sigue pendiente; dentro, `len(tarea1)` decide qué mensaje mostrar. La última cadena usa `or` porque basta con que una de las dos tareas esté hecha para hablar de avances.

#### Conceptos utilizados

- Cadenas `if`/`elif`/`else`.
- Condiciones compuestas con `and`, `or` y `not`.
- Anidamiento y longitud de cadenas.
- f-strings para componer mensajes.

#### Errores habituales

- Colocar la condición «ninguna terminada» antes que «todas terminadas»: con las tres banderas en `True` daría un mensaje imposible.
- Indentar el segundo bloque `if` dentro del `else` anterior: las decisiones son independientes y deben quedar al mismo nivel.
- Escribir `if hecha2 and hecha3:`: exigiría que ambas estuvieran hechas, no solo una.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `semaforo.py` y comprueba las tres líneas con las banderas iniciales.
2. Cambia `hecha1` y `hecha3` a `True`, vuelve a ejecutar y explica por qué cambia cada línea.
3. Compara tus respuestas con las soluciones ocultas.

Criterios de revisión: orden correcto de las ramas, indentación coherente, uso de condiciones compuestas y mensajes claros para cada situación.

**Estado:** lección «Condicionales», pendiente de autoevaluación. Siguiente lección: «Bucles `while`».

## Recursos

- [The if statement — Python Language Reference](https://docs.python.org/3/reference/compound_stmts.html#the-if-statement): sintaxis oficial de `if`, `elif` y `else`, incluida la regla de indentación.
- [More Control Flow Tools — if Statements](https://docs.python.org/3/tutorial/controlflow.html#if-statements): tutorial oficial con ejemplos progresivos de condicionales.
- [Truth value testing — The Python Standard Library](https://docs.python.org/3/library/stdtypes.html#truth-value-testing): qué valores se consideran verdaderos al escribir una condición.
- [Boolean operations — and, or, not](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not): orden de evaluación y cortocircuito en condiciones compuestas.
