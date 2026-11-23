---
title: 'Variables y asignación'
description: 'Nombres válidos, snake_case, asignación y reasignación, referencias a valores y constantes por convención.'
course: python
unit: 'Primeros Pasos'
order: 7
---

# Variables y asignación

## Qué es una variable

Una **variable** es un nombre que usamos para referirnos a un valor. Se crea con una **asignación**: el nombre, un signo `=` y la expresión cuyo valor queremos guardar.

```python
titulo = 'Preparar la práctica'
print(titulo)
```

Salida esperada:

```text
Preparar la práctica
```

La asignación no muestra nada: su efecto es que, a partir de esa línea, `titulo` significa ese texto. No hace falta declarar el tipo ni reservar espacio antes; Python crea la variable al encontrar la primera asignación.

El signo `=` significa «guarda este valor en este nombre», no «comprueba si son iguales». La comparación se escribe `==` y aparecerá en la lección sobre operadores.

## Nombres válidos y convención `snake_case`

Un nombre de variable en Python debe cumplir estas reglas del lenguaje:

- Puede contener letras, números y guiones bajos `_`.
- No puede empezar por un número.
- No puede ser una palabra reservada del lenguaje, como `if`, `for` o `class`.
- Distingue mayúsculas de minúsculas: `edad` y `Edad` son nombres distintos.

```python
nombre_completo = 'Ana'   # válido
intentos_2 = 3            # válido
2intentos = 3             # inválido: empieza por número
nombre-completo = 'Ana'   # inválido: contiene un guion
class = 'A'               # inválido: palabra reservada
```

Además de las reglas, existe una **convención** muy extendida: usar `snake_case`, es decir, palabras en minúscula separadas por guiones bajos. Es una costumbre, no una obligación del intérprete, pero facilita la lectura.

Los nombres deben describir el dato. `t` es más corto, pero `tiempo_estimado` explica qué contiene.

## Asignar y reasignar

Una variable puede cambiar de valor las veces que haga falta. A eso se le llama **reasignar**:

```python
intentos = 1
print(intentos)

intentos = intentos + 1
print(intentos)
```

Salida esperada:

```text
1
2
```

En `intentos = intentos + 1`, Python evalúa primero el lado derecho con el valor actual (`1 + 1`, que da `2`) y después guarda el resultado en el mismo nombre. Por eso la segunda línea muestra `2`.

Este patrón —tomar el valor actual, calcular uno nuevo y volver a guardarlo— aparecerá muchas veces, por ejemplo para contar intentos o acumular una cantidad.

## Variables como nombres, no como cajas

Es cómodo imaginar una variable como una caja, pero la imagen engaña. Piensa mejor en una **etiqueta** pegada a un valor:

```python
a = 3
b = a
a = 5

print(a)
print(b)
```

Salida esperada:

```text
5
3
```

¿Por qué `b` sigue siendo `3`? Porque `b = a` copió la referencia al valor que tenía `a` en ese momento, que era `3`. La línea `a = 5` movió la etiqueta `a` a otro valor; no cambió el `3` ni la etiqueta `b`.

No hace falta dominar ahora cómo se guardan los valores en memoria. Basta con recordar dos ideas: una asignación evalúa el lado derecho antes de guardar, y reasignar un nombre no altera otros nombres.

## Constantes por convención

Hay valores que no queremos cambiar mientras el programa se ejecuta, como el número máximo de intentos de un formulario. Python no tiene una palabra para declarar constantes, así que se usa una convención: escribir el nombre en mayúsculas con guiones bajos.

```python
LIMITE_INTENTOS = 3
print('Intentos permitidos:', LIMITE_INTENTOS)
```

Salida esperada:

```text
Intentos permitidos: 3
```

Es una **promesa para quien lee el código**, no una restricción del intérprete: técnicamente podrías reasignar `LIMITE_INTENTOS`. La mayúscula avisa de que no conviene hacerlo.

## Ejemplo guiado

**Problema:** guardar los datos de una tarea en variables y mostrar una ficha breve.

**Datos de entrada:** un título, una prioridad en número y un estado terminado o pendiente.

**Estrategia:** usar un nombre descriptivo por dato y reutilizarlos en varios `print()`.

```python
titulo = 'Revisar el ejercicio'
prioridad = 2
terminada = False

print('Tarea:', titulo)
print('Prioridad:', prioridad)
print('Terminada:', terminada)
```

Salida esperada:

```text
Tarea: Revisar el ejercicio
Prioridad: 2
Terminada: False
```

`False` es un valor booleano que se estudiará en la lección de tipos. Aquí solo representa «no terminada».

**Lectura paso a paso:**

- Las tres primeras líneas crean las variables; no muestran nada.
- Cada `print()` recibe un texto y una variable. `print()` separa ambos argumentos con un espacio.
- El mismo `titulo` podría usarse en veinte líneas sin volver a escribir el texto.

**Modificación propuesta:** cambia `prioridad = 2` por `prioridad = 1` y añade una línea que muestre `prioridad + 1`. Predice la salida antes de ejecutar.

## Laboratorio práctico

**Objetivo:** crear variables, reasignarlas y comprobar que otras variables no cambian.

**Archivo:** `variables.py` en tu carpeta de proyecto.

**Pasos:**

1. Crea el archivo con este contenido:

   ```python
   nombre = 'Ana'
   ciudad = 'Valencia'

   print('Nombre:', nombre)
   print('Ciudad:', ciudad)

   nombre = 'Ana García'
   print('Nombre actualizado:', nombre)
   ```

2. Guarda y ejecuta. Anota la salida.
3. Añade dos líneas al final: `copia = nombre` y `nombre = 'Otro nombre'`.
4. Añade `print(copia)` y ejecuta de nuevo.
5. Provoca el error `NameError` usando una variable que no existe: `print(edad)`.
6. Corrige la línea creando `edad = 30` antes de usarla.

**Resultado esperado:** después del paso 4:

```text
Nombre: Ana
Ciudad: Valencia
Nombre actualizado: Ana García
Ana García
```

El paso 5 debe detenerse con `NameError: name 'edad' is not defined`.

**Cómo comprobarlo:** `copia` conserva `Ana García` aunque `nombre` cambie después, igual que en el ejemplo de las etiquetas.

**Errores previsibles y pistas:**

- Si `copia` cambia al reasignar `nombre`, revisa el orden de las líneas: `copia = nombre` debe ir antes.
- Si aparece `SyntaxError: invalid decimal literal`, un nombre empieza por número.
- Si aparece `NameError`, revisa la ortografía y que la variable se cree antes de usarse.

## Errores frecuentes y depuración

| Síntoma                                                     | Causa probable                                | Cómo localizarlo y corregirlo                           |
| ----------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------- |
| `NameError: name 'edad' is not defined`                     | Se usa un nombre que no se ha creado          | Crea la variable antes de usarla o revisa la ortografía |
| `SyntaxError: invalid decimal literal`                      | El nombre empieza por un número, como `2fase` | Empieza el nombre por una letra o un guion bajo         |
| `SyntaxError: cannot assign to expression here`             | Se usó un guion, como `mi-variable = 3`       | Sustituye el guion por un guion bajo                    |
| `TypeError: print() got an unexpected keyword argument 'x'` | Se escribió `print(x = 3)` queriendo asignar  | Asigna fuera: `x = 3` y después `print(x)`              |
| El valor no cambia al reasignar                             | Se guardó la asignación fuera del orden       | Revisa que la reasignación esté antes del `print()`     |

Los mensajes de error suelen señalar el nombre o la línea exacta. Cuando veas `NameError`, piensa en dos posibilidades: el nombre no existe todavía o está escrito de otra forma.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** `=` asigna, el lado derecho se evalúa primero y los nombres distinguen mayúsculas.
- **Convención aceptada:** `snake_case` para variables y MAYÚSCULAS para constantes.
- **Preferencia de estilo:** nombres descriptivos en lugar de abreviaturas crípticas.
- **Decisión de contexto:** reasignar es normal en un contador; si un valor no debe cambiar, se nombra en mayúsculas y se deja quieto.

En un proyecto junior, elegir bien los nombresevita muchos comentarios. Un nombre claro cuenta qué guarda; un comentario debe explicar por qué.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Di qué muestra cada fragmento y por qué:

1. `x = 4` seguido de `print(x)`.
2. `x = 4`, `y = x`, `x = 9`, `print(y)`.

**Criterios de aceptación:** dos salidas correctas y una frase que explique la de `y`.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

1. Muestra `4`: la asignación guarda el valor y `print()` lo lee.
2. Muestra `4`: `y` tomó el valor que tenía `x` en ese momento; la reasignación posterior no lo cambia.

#### Por qué funciona

Cada asignación evalúa su lado derecho con los valores vigentes en ese instante. Reasignar `x` mueve esa etiqueta, pero no modifica la etiqueta `y`.

#### Conceptos utilizados

- Asignación y reasignación.
- Variables como referencias a valores.

#### Errores habituales

- Esperar que `y` cambie cuando cambia `x`.
- Creer que `print(x)` vuelve a ejecutar la asignación anterior.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Crea `contador.py`: empieza con `intentos = 0`, reasigna dos veces usando `intentos = intentos + 1` y muestra el valor después de cada reasignación.

**Criterios de aceptación:** salida con los números `1` y `2`, y ninguna asignación dentro de `print()`.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```python
intentos = 0

intentos = intentos + 1
print(intentos)

intentos = intentos + 1
print(intentos)
```

Salida esperada:

```text
1
2
```

#### Por qué funciona

En cada reasignación se calcula el valor actual más uno y se guarda de nuevo en `intentos`. Los `print()` posteriores leen el valor ya actualizado.

#### Conceptos utilizados

- Reasignación.
- Expresión usada como lado derecho de una asignación.

#### Errores habituales

- Escribir `print(intentos = intentos + 1)`: `print()` no sirve para asignar.
- Olvidar la primera asignación y provocar un `NameError`.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Corrige estos tres nombres para que el archivo funcione y respeta `snake_case`:

```python
2intentos = 3
nombre-completo = 'Ana'
LIMITE = 5
print(2intentos, nombre-completo, LIMITE)
```

**Criterios de aceptación:** el archivo muestra `3 Ana 5` y los tres nombres cumplen las reglas.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

```python
intentos = 3
nombre_completo = 'Ana'
LIMITE = 5
print(intentos, nombre_completo, LIMITE)
```

Salida esperada:

```text
3 Ana 5
```

#### Por qué funciona

Los nombres ya no empiezan por número ni contienen guiones. `LIMITE` se mantiene en mayúsculas porque representa una constante por convención.

#### Conceptos utilizados

- Reglas de nombres.
- Convención `snake_case`.
- Constantes por convención.

#### Errores habituales

- Sustituir el guion medio por un espacio.
- Cambiar `LIMITE` a minúsculas creyendo que es obligatorio.

</details>

### Reto opcional

Crea una constante `TARIFA_POR_HORA = 18` y una variable `horas = 3`. Muestra `TARIFA_POR_HORA`, `horas` y el resultado de multiplicarlas, sin crear nuevas variables.

**Criterio de aceptación:** la última línea muestra `54`.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

```python
TARIFA_POR_HORA = 18
horas = 3

print('Tarifa:', TARIFA_POR_HORA)
print('Horas:', horas)
print('Total:', TARIFA_POR_HORA * horas)
```

La última línea muestra `Total: 54`.

#### Por qué funciona

La expresión `TARIFA_POR_HORA * horas` se calcula con los valores actuales y se pasa como argumento a `print()`. La constante no se reasigna en ningún momento.

#### Conceptos utilizados

- Constantes por convención.
- Expresiones como argumento.

#### Errores habituales

- Poner la constante entre comillas: se mostraría el texto `TARIFA_POR_HORA`.
- Reasignar la constante pensando que hace falta para calcular.

</details>

## Integración con el proyecto longitudinal

Todavía no corresponde abrir el gestor de tareas: sus operaciones principales necesitan condicionales, que se estudiarán en la siguiente unidad. Estas prácticas sí preparan el terreno: un título, una prioridad y un estado son exactamente el tipo de datos que guardará cada tarea.

## Resumen

Ideas clave:

- Una variable es un nombre que refiere a un valor; se crea con `nombre = valor`.
- `=` asigna; no confundir con la comparación `==`.
- El lado derecho se evalúa antes de guardarse.
- Reasignar un nombre no cambia otros nombres que apuntaban al mismo valor.
- `snake_case` es la convención para variables; MAYÚSCULAS, para constantes.

Comprueba que puedes:

- Crear una variable y usarla en un `print()`.
- Reasignar un contador usando su valor anterior.
- Explicar por qué `b` no cambia al reasignar `a`.
- Reconocer un nombre inválido y un `NameError`.

## Mini-proyecto: ficha de tarea

Crea `tarea.py` para guardar la ficha de una tarea con variables. Debe incluir un título, una prioridad numérica, un estado booleano y una constante `LIMITE_PRIORIDAD`. Muestra cada dato con una etiqueta, reasigna el título una vez y vuelve a mostrarlo.

1. Crea las cuatro variables con nombres descriptivos.
2. Muestra las tres primeras con `print()` y etiquetas.
3. Reasigna el título y muestra la ficha actualizada.
4. Muestra también `LIMITE_PRIORIDAD` y comprueba que no cambia.

**Criterios de aceptación:** la salida contiene el título antiguo y el nuevo, la prioridad, el estado y el límite; no hay nombres con guiones ni que empiecen por número.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

```python
LIMITE_PRIORIDAD = 3

titulo = 'Ordenar los apuntes'
prioridad = 2
terminada = False

print('Título:', titulo)
print('Prioridad:', prioridad)
print('Terminada:', terminada)
print('Límite:', LIMITE_PRIORIDAD)

titulo = 'Ordenar los apuntes de Python'
print('Título actualizado:', titulo)
```

Salida esperada:

```text
Título: Ordenar los apuntes
Prioridad: 2
Terminada: False
Límite: 3
Título actualizado: Ordenar los apuntes de Python
```

#### Por qué funciona

Cada dato vive en una variable y se reutiliza en los `print()`. La reasignación del título solo afecta a ese nombre; la constante permanece con su valor inicial porque nadie la reasigna.

#### Conceptos utilizados

- Variables y reasignación.
- Nombres `snake_case` y constantes por convención.
- Valores booleanos como dato (sin operar con ellos todavía).

#### Errores habituales

- Usar `terminada = 'False'` (texto) en lugar de `terminada = False` (valor booleano).
- Escribir `titulo = titulo + ' de Python'` para cambiar el texto: es válido, pero todavía no se ha estudiado la concatenación y la reasignación directa es más clara aquí.
- Dar el mismo nombre a la constante y a una variable.

</details>

## Tu entrega o autoevaluación

1. Ejecuta `tarea.py` y comprueba que el título aparece dos veces, antes y después de la reasignación.
2. Explica con tus palabras por qué `b` conserva su valor en el ejemplo de las etiquetas.
3. Compara tus respuestas con las soluciones ocultas.

Criterios de revisión: nombres válidos y descriptivos, uso correcto de `=`, comprensión de la reasignación y distinción entre variables y constantes.

**Estado:** lección «Variables y asignación», pendiente de autoevaluación. Siguiente lección: «Tipos primitivos».

## Recursos

- [Using Python as a calculator — The Python Tutorial](https://docs.python.org/3/tutorial/introduction.html#using-python-as-a-calculator): ejemplos oficiales de valores y asignación.
- [Naming conventions — PEP 8](https://peps.python.org/pep-0008/#naming-conventions): convenciones oficiales de estilo para nombres de variables y constantes.
