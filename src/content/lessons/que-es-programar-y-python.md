---
title: 'Qué es programar y qué es Python'
description: 'Programa, algoritmo, intérprete y ciclo editar–ejecutar–observar; diferencias entre Python, editor, terminal e IDE.'
course: python
unit: 'Antes de empezar'
order: 1
---

# Qué es programar y qué es Python

## Programa, algoritmo e instrucción

Una **instrucción** es una orden concreta que el ordenador puede ejecutar, como «muestra este texto en pantalla». Un **algoritmo** es la secuencia de pasos que resuelve un problema, pensada con independencia del lenguaje. Un **programa** es ese algoritmo escrito en un lenguaje concreto, con la sintaxis que el ordenador entiende.

Por ejemplo, para mostrar el estado de una tarea:

1. Tomar el título de la tarea.
2. Comprobar si está terminada.
3. Preparar un texto con esa información.
4. Mostrarlo en pantalla.

Esos cuatro pasos son el algoritmo. Cuando los escribimos en Python con su sintaxis, tenemos un programa.

## Lenguaje, sintaxis e intérprete

Un **lenguaje de programación** es un sistema de reglas para escribir instrucciones. La **sintaxis** es el conjunto de reglas que determina qué se puede escribir y cómo; por ejemplo, en Python una llamada a `print()` necesita paréntesis.

Un **intérprete** es el programa que lee nuestro código y lo ejecuta. Python es un lenguaje interpretado: no necesitamos un paso previo de compilación y enlazado para probar un script. El intérprete también puede usarse en modo interactivo, donde ejecuta lo que escribimos línea a línea; veremos ese modo en la lección «Primer programa y REPL».

Cuando escribimos `python --version`, el sistema localiza el intérprete y este responde con su versión. Esa respuesta depende de la instalación, no del código que escribamos.

> **Nota:** Python 3.14 y 3.15 son versiones estables de la rama 3. En este curso evitamos funciones experimentales y usamos una versión concreta como referencia para que los ejemplos sean reproducibles.

## Python, editor, terminal e IDE

Estos cuatro elementos se confunden al principio, pero hacen trabajos distintos:

| Herramienta  | Qué es                                                                 | Para qué sirve aquí                                  |
| ------------ | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| **Python**   | El lenguaje y su intérprete                                            | Entender nuestras instrucciones y ejecutarlas        |
| **Editor**   | Un programa para escribir y guardar texto plano                        | Crear y modificar archivos `.py`                     |
| **IDE**      | Un entorno de desarrollo que reúne editor, terminal y más herramientas | Escribir, ejecutar y depurar desde una sola interfaz |
| **Terminal** | Una interfaz de texto para dar órdenes al sistema                      | Navegar carpetas y lanzar el intérprete              |

Un IDE es, en esencia, un editor con herramientas añadidas. No es obligatorio: se puede aprender Python con un editor sencillo y una terminal. Lo importante al principio es saber qué herramienta está haciendo cada cosa.

## El ciclo editar → ejecutar → observar

Trabajar con código es repetir un ciclo corto:

1. **Editar:** escribir o cambiar instrucciones en un archivo.
2. **Ejecutar:** pedir al intérprete que las lea.
3. **Observar:** comparar lo que ha ocurrido con lo que esperábamos.

![Esquema del ciclo editar, ejecutar y observar: si la salida no coincide con lo esperado, se vuelve a editar con una idea más precisa](/images/ciclo-editar-ejecutar-observar.svg)

Si la salida no coincide, volvemos al paso 1 con una idea más precisa. Este ciclo —no la memorización— es la forma habitual de aprender y de trabajar con código.

## Cómo se aprende programación

Aprender programación no consiste en leer muchas páginas y recordarlas. Consiste en **experimentar**: escribir una instrucción pequeña, ejecutarla, equivocarse, leer el mensaje y probar una variante. El error no es un castigo; es la información que nos dice qué suponíamos mal.

La **práctica deliberada** es repetir ese ciclo con atención a un aspecto concreto, no plasmar líneas sin pensar. Por ejemplo, en esta lección no intentaremos escribir un programa grande: practicaremos predecir la salida de tres `print()`, cambiar una sola línea y comprobar el resultado. Cada repetición persigue un objetivo pequeño y observable.

Este enfoque explica el orden del curso: primero entenderemos qué ocurre al ejecutar un archivo; después introduciremos variables, condicionales y funciones, y solo más adelante reuniremos todo en el proyecto del gestor de tareas.

## Usos y límites razonables

Python sirve para automatizar tareas repetitivas, crear herramientas de consola, desarrollar servicios web, tratar datos y escribir pruebas. También es un lenguaje adecuado para primeros programas porque su sintaxis es legible y permite probar ideas con rapidez.

No es una herramienta universal: por sí solo no sustituye a una base de datos, no hace que un servidor sea seguro automáticamente y no elige por nosotros la solución correcta. Tampoco es el objetivo de este curso dominar administración de sistemas, ciencia de datos avanzada ni arquitecturas distribuidas; esos temas quedan fuera del itinerario junior.

## Ejemplo guiado

**Problema:** mostrar en pantalla el encabezado de un gestor de tareas y dos tareas iniciales.

**Datos de entrada:** tres textos escritos directamente en el código.

**Estrategia:** usar una instrucción `print()` por línea. No necesitamos variables todavía; aparecerán más adelante.

Archivo `tareas_iniciales.py` completo:

```python
print('Gestor de tareas')
print('1. Preparar la lección')
print('2. Revisar el código')
```

Salida esperada:

```text
Gestor de tareas
1. Preparar la lección
2. Revisar el código
```

**Lectura línea por línea:**

- `print('Gestor de tareas')` pide al intérprete que muestre el texto entre comillas. Los paréntesis son parte de la sintaxis de la función `print()`.
- Las dos líneas siguientes hacen lo mismo con otros textos.
- El orden de ejecución es de arriba abajo: el encabezado aparece primero porque su instrucción es la primera.
- Cada `print()` añade un salto de línea al terminar, por eso los tres textos ocupan tres líneas.

**Modificación propuesta:** cambia `'2. Revisar el código'` por `'2. Revisar las pruebas'` y vuelve a ejecutar el archivo. Predice la salida antes de lanzarlo; después compruébala. Si solo cambia la segunda tarea, habrás confirmado que cada instrucción es independiente.

> **Consejo:** guarda el archivo con codificación UTF-8. Python interpreta los archivos fuente como UTF-8 por defecto, pero tu editor debe guardarlos en ese formato para que los acentos se lean bien.

## Laboratorio práctico

**Objetivo:** crear un script propio, ejecutarlo desde la terminal y verificar la salida.

**Archivos:** una carpeta `python-curso` y, dentro, un archivo `hola.py`.

**Pasos:**

1. Crea una carpeta llamada `python-curso` en un lugar fácil de encontrar, por ejemplo tu carpeta de documentos.
2. Abre esa carpeta con tu editor y crea `hola.py`.
3. Escribe este contenido:

   ```python
   print('Hola desde Python')
   print('Estoy aprendiendo a programar')
   ```

4. Guarda el archivo.
5. Abre una terminal en la carpeta `python-curso`.
   - En Windows: entra en la carpeta con el Explorador, escribe `cmd` en la barra de direcciones y pulsa `Enter`.
   - En macOS o Linux: abre la terminal y usa `cd ruta/a/python-curso`.
6. Ejecuta el script:
   - En Windows: `python hola.py`
   - En macOS o Linux: `python3 hola.py` —en algunas instalaciones también funciona `python hola.py`—.
7. Observa la salida y compárala con el código: debe aparecer cada texto en una línea.

**Resultado esperado:**

```text
Hola desde Python
Estoy aprendiendo a programar
```

**Cómo comprobarlo:** la salida debe coincidir exactamente, incluido el orden. Si sale algo distinto, no borres el archivo: cambia una sola cosa, vuelve a guardar y vuelve a ejecutar.

**Errores previsibles y pistas:**

- Si la terminal responde que `python` no existe, el intérprete todavía no está disponible con ese nombre. Lo instalaremos en la lección «Instalación y comprobación del entorno»; mientras tanto, prueba `python3` o `py hola.py` en Windows.
- Si aparece un mensaje sobre `can't open file`, la terminal está en otra carpeta. Comprueba el directorio actual y entra en `python-curso`.
- Si el mensaje menciona una línea y `SyntaxError`, revisa esa línea: suele faltar una comilla o un paréntesis. No hace falta entender todo el mensaje para localizar la línea.

## Errores frecuentes y depuración

Los mensajes siguientes son **ejemplos ilustrativos**, no el resultado de ejecutar tu código:

| Síntoma                                               | Causa probable                                   | Cómo localizarlo y corregirlo                                                                      |
| ----------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| El intérprete muestra `Python 2.7`                    | Hay una instalación antigua en el equipo         | Anota la versión; la instalación de Python 3 se revisa en «Instalación y comprobación del entorno» |
| `can't open file 'hola.py'`                           | Estás en otra carpeta o el nombre difiere        | Comprueba la ruta actual y el nombre exacto del archivo                                            |
| `SyntaxError: unterminated string literal`            | Falta la comilla de cierre en un texto           | El mensaje señala la línea; compara las comillas de apertura y cierre                              |
| `SyntaxError: Missing parentheses in call to 'print'` | Se escribió `print 'Hola'`, sintaxis de Python 2 | En Python 3 se escribe `print('Hola')`                                                             |
| El texto aparece sin acentos                          | El editor guardó otra codificación               | Guarda el archivo como UTF-8 y vuelve a ejecutarlo                                                 |

La depuración empieza por leer el final del mensaje y señalar la línea indicada. Después se cambia **una sola cosa** y se vuelve a ejecutar. Así siempre sabes qué ha producido el cambio.

## Buenas prácticas y criterio profesional

Conviene distinguir tres tipos de reglas:

- **Reglas del lenguaje:** `print()` necesita paréntesis; el texto va entre comillas; las instrucciones se ejecutan en orden. No son preferencias: si no se cumplen, el programa no funciona.
- **Convenciones aceptadas:** nombres de archivo en minúsculas con guion bajo, como `tareas_iniciales.py`. Funcionan otros nombres, pero este estilo facilita la lectura y coincide con el resto del curso.
- **Decisiones de contexto:** usar un editor sencillo o un IDE depende de tu equipo y de tus preferencias. En esta lección no hay que instalar extensiones ni configurar atajos: solo escribir, guardar y ejecutar.

Para un proyecto junior, la prioridad es que otra persona pueda leer el archivo y entender qué hace sin preguntarte. Un script corto con nombres claros cumple ese objetivo mejor que uno ingenioso.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución. Las soluciones están ocultas y siguen el mismo formato que las del curso de R: resolución, explicación de por qué funciona, conceptos utilizados y errores habituales.

### Ejercicio 1. Nivel 1 — Comprensión

Clasifica cada elemento como _programa_, _algoritmo_, _intérprete_, _editor_, _IDE_ o _terminal_:

1. Un archivo `hola.py` con dos instrucciones `print()`.
2. La lista de pasos «leer tarea, comprobar estado, mostrar resultado», escrita en papel.
3. El programa que lee `hola.py` y ejecuta sus instrucciones.
4. La ventana donde escribes `python hola.py`.

**Criterios de aceptación:** cuatro clasificaciones correctas y una frase que explique la diferencia entre el elemento 1 y el elemento 2.

**Pista:** el elemento 2 no puede ejecutarse: describe la idea, no está escrito en un lenguaje.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

1. Programa.
2. Algoritmo.
3. Intérprete.
4. Terminal.

Diferencia entre 1 y 2: el elemento 1 es el algoritmo ya escrito en Python dentro de un archivo; el elemento 2 es la misma idea descrita en papel, sin sintaxis ni posibilidad de ejecución.

#### Por qué funciona

Un algoritmo existe aunque no esté escrito en un lenguaje; un programa necesita además la sintaxis de un lenguaje y un archivo que el intérprete pueda leer.

#### Conceptos utilizados

- Algoritmo frente a programa.
- Intérprete y terminal.

#### Errores habituales

- Llamar «programa» a la lista escrita en papel: todavía no puede ejecutarse.
- Confundir el intérprete con el editor: el intérprete ejecuta, el editor solo escribe texto.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Crea `mi_primer_programa.py` con tres instrucciones: la primera muestra tu nombre, la segunda una ciudad y la tercera una frase breve.

**Entradas y salida esperada:** no hay entrada de usuario; la salida son tres líneas de texto elegidas por ti.

**Restricciones:** usa solo `print()` con texto entre comillas; no uses variables ni otras instrucciones.

**Criterios de aceptación:** el archivo se ejecuta sin errores y muestra exactamente tres líneas en el orden previsto.

**Pista:** escribe una instrucción por línea y guarda el archivo antes de ejecutarlo.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

Archivo `mi_primer_programa.py`:

```python
print('Ana')
print('Valencia')
print('Hoy aprendo Python')
```

Salida esperada:

```text
Ana
Valencia
Hoy aprendo Python
```

#### Por qué funciona

Cada `print()` muestra su texto y añade un salto de línea. Al ejecutarse de arriba abajo, las tres líneas aparecen en el mismo orden en que están escritas.

#### Conceptos utilizados

- Instrucciones `print()`.
- Orden de ejecución.
- Archivos `.py`.

#### Errores habituales

- Olvidar los paréntesis: en Python 3 es `print('Ana')`, no `print 'Ana'`.
- Olvidar guardar el archivo antes de ejecutarlo: la terminal leerá la versión anterior.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Parte del ejemplo guiado del apartado anterior. Añade una cuarta línea que muestre un recordatorio, por ejemplo `'3. Entregar la práctica'`. Antes de ejecutarlo, escribe en una nota qué líneas cambiarán en la salida; después compruébalo.

**Criterios de aceptación:** la salida tiene cuatro líneas, las tres originales conservan su orden y tu predicción coincide con lo observado.

**Pista:** añadir una instrucción al final no modifica las anteriores.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

```python
print('Gestor de tareas')
print('1. Preparar la lección')
print('2. Revisar el código')
print('3. Entregar la práctica')
```

Salida esperada:

```text
Gestor de tareas
1. Preparar la lección
2. Revisar el código
3. Entregar la práctica
```

La predicción correcta es que las tres líneas originales conservan su posición y aparece una cuarta línea al final.

#### Por qué funciona

Añadir una instrucción al final del archivo no altera las anteriores: el intérprete sigue ejecutando de arriba abajo y la nueva instrucción se ejecuta después de las tres originales.

#### Conceptos utilizados

- Orden de ejecución.
- Modificación incremental de un script.

#### Errores habituales

- Insertar la línea nueva en medio del archivo: cambiará el orden de la salida.
- Crear un archivo nuevo en lugar de modificar `tareas_iniciales.py`: la comparación con la predicción perdería sentido.

</details>

### Reto opcional

Escribe un script que muestre los tres pasos de una rutina tuya —por ejemplo, preparar una mochila— y pide a otra persona que prediga la salida antes de ejecutarlo. Comparad después las predicciones con la pantalla.

**Criterio de aceptación:** la otra persona puede predecir la salida leyendo únicamente el archivo.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

Un ejemplo de rutina:

```python
print('Preparar la mochila')
print('Revisar el material')
print('Salir de casa')
```

Salida esperada: las tres frases, una por línea y en ese orden.

#### Por qué funciona

Cada `print()` produce una línea y el orden de ejecución coincide con el orden de escritura. Otra persona puede predecir la salida porque no hay variables, condicionales ni entradas externas: todo el comportamiento está a la vista.

#### Conceptos utilizados

- Predicción de salida.
- Código legible y autocontenido.

#### Errores habituales

- Usar frases ambiguas que dependan de interpretación externa: el programa solo muestra lo escrito.
- Añadir texto explicativo dentro del código sin `print()`: no aparecerá en la salida.

</details>

## Integración con el proyecto longitudinal

Todavía no corresponde. El gestor de tareas del curso empieza más adelante, cuando ya sepamos usar variables, condicionales y colecciones. En esta primera lección hemos usado un ejemplo independiente —`tareas_iniciales.py`— porque muestra el ciclo de trabajo sin introducir conceptos que aún no hemos estudiado.

La deuda técnica deliberada de este momento es mínima: los textos están escritos directamente en cada `print()`. Más adelante los guardaremos en variables y después en estructuras de datos, y explicaremos cada cambio cuando llegue el momento.

## Resumen

Ideas clave:

- Un algoritmo es la idea ordenada; un programa es esa idea escrita en un lenguaje.
- Python es el lenguaje y el intérprete ejecuta nuestras instrucciones.
- Editor, IDE y terminal son herramientas distintas del lenguaje.
- El ciclo de trabajo es editar, ejecutar y observar.
- `print('texto')` muestra texto en pantalla y termina la línea.

Comprueba que puedes:

- Explicar la diferencia entre algoritmo y programa sin mirar el texto.
- Identificar en tu equipo qué comando muestra la versión de Python.
- Ejecutar un archivo `.py` desde la terminal.
- Predecir la salida de tres llamadas a `print()`.

## Mini-proyecto: de la idea al script

Reúne en un solo archivo el ciclo completo de esta lección. En un papel escribe un algoritmo de tres pasos para preparar una mochila. Después conviértelo en un programa: cada paso será un `print()` y añadirás una última línea `Listo para salir`. Predice la salida antes de ejecutarlo y compárala después.

1. Escribe los tres pasos en papel, con verbos concretos.
2. Crea `mochila.py` con un `print()` por paso y el cierre.
3. Guarda el archivo, predice las cuatro líneas de salida y ejecútalo.
4. Compara la predicción con la pantalla y corrige el orden si hace falta.

**Criterios de aceptación:** el archivo tiene cuatro `print()`; los tres pasos del papel aparecen en el mismo orden; la última línea es `Listo para salir`.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

Algoritmo escrito en papel: preparar la mochila, revisar el material y salir de casa.

```python
print('Preparar la mochila')
print('Revisar el material')
print('Salir de casa')
print('Listo para salir')
```

Salida esperada:

```text
Preparar la mochila
Revisar el material
Salir de casa
Listo para salir
```

#### Por qué funciona

Cada `print()` convierte un paso del algoritmo en una instrucción que el intérprete puede ejecutar. Como el archivo se lee de arriba abajo, la salida conserva el orden del algoritmo.

#### Conceptos utilizados

- Algoritmo frente a programa.
- Instrucciones `print()`.
- Orden de ejecución y ciclo editar–ejecutar–observar.

#### Errores habituales

- Dejar los pasos solo en el papel: siguen siendo un algoritmo, no un programa.
- Cambiar el orden de las líneas al copiarlos al archivo.
- Olvidar guardar antes de ejecutar y comparar una versión anterior.

</details>

## Tu entrega o autoevaluación

Comprueba tu trabajo antes de seguir:

1. Ejecuta `hola.py` y confirma que la salida tiene dos líneas.
2. Compara tus respuestas a los ejercicios con las soluciones ocultas.
3. Explica con tus palabras la diferencia entre algoritmo y programa y qué hace cada una de las dos líneas de `hola.py`.

Criterios de revisión: corrección funcional, comprensión de los conceptos, legibilidad de los nombres y capacidad para explicar el ciclo editar–ejecutar–observar. No se exigirá perfección estilística en esta primera lección.

**Estado:** lección «Qué es programar y qué es Python», pendiente de autoevaluación. Siguiente lección: «Instalación y comprobación del entorno».

## Recursos

- [Descargas de Python](https://www.python.org/downloads/): fuente oficial para instalar Python 3. Consulta la sección correspondiente a tu sistema operativo.
- [El tutorial de Python, capítulo 1: Whetting Your Appetite](https://docs.python.org/3/tutorial/appetite.html): dónde y para qué se usa Python, con ejemplos de tareas automatizables.
- [El tutorial de Python, capítulo 2: Using the Python Interpreter](https://docs.python.org/3/tutorial/interpreter.html): cómo se lanza el intérprete y la diferencia entre ejecutar un archivo y usar el modo interactivo.
