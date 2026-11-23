---
title: 'Editor, depuración inicial y hábitos'
description: 'Indentación, resaltado y autocompletado del editor, lectura sistemática de errores y hábitos de guardado y nombres de archivo.'
course: python
unit: 'Antes de empezar'
order: 5
---

# Editor, depuración inicial y hábitos

## Indentación

La **indentación** son los espacios al principio de una línea. En Python delimitará bloques de código: las instrucciones dentro de un `if` o de un `for` irán indentadas. Eso se estudiará más adelante, pero conviene fijar desde ahora la convención: **cuatro espacios por nivel**, sin tabuladores.

Por ahora, nuestras instrucciones están en el nivel superior y no llevan espacios delante:

```python
print('Sin indentación')
```

Añadir espacios delante sin que exista un bloque abierto produce un error de indentación. El editor puede configurarse para insertar cuatro espacios cuando pulsas `Tab`; esa es la única configuración que necesitamos hoy.

## Resaltado y autocompletado

El **resaltado de sintaxis** colorea distintos elementos del código: cadenas, números, palabras reservadas. Ayuda a ver, por ejemplo, una comilla que no se cerró, porque el color se extiende más de lo esperado.

El **autocompletado** sugiere nombres a medida que escribes. Es una ayuda, no una garantía: aceptar una sugerencia sin leerla puede introducir un nombre que no existe en tu programa. Al principio escribiremos las instrucciones completas y usaremos el autocompletado solo como apoyo visual.

## Terminal integrada

Ya la usamos en «Instalación y comprobación del entorno» y «Terminal y sistema de archivos». Es la misma interfaz de texto de siempre, abierta dentro del editor. Su ventaja es tener el código y la salida cerca. Su riesgo es perder de vista la carpeta actual: el hábito de comprobar el directorio sigue siendo necesario.

## Leer mensajes de error sin pánico

Un mensaje de error tiene tres partes útiles. Léelas en este orden:

1. **La última línea:** describe el problema. `SyntaxError: '(' was never closed` dice qué regla se incumplió.
2. **El número de línea:** `line 1` indica dónde mirar.
3. **El punto señalado:** el símbolo `^` muestra la posición aproximada.

![Esquema para leer un error: última línea, número de línea y punto señalado; después se corrige una sola cosa y se vuelve a ejecutar](/images/lectura-errores.svg)

El resto del mensaje —la ruta del archivo, por ejemplo— es contexto. La ruta cambiará entre equipos y no suele ser la causa.

## Guardar versiones simples y nombrar archivos

Antes de usar Git, una forma sencilla de conservar el trabajo es guardar copias con un sufijo: `diario_v1.py`, `diario_v2.py`. Cuando una versión funciona, conviene preservarla antes de experimentar.

Los nombres descriptivos en minúsculas con guion bajo —`mi_primer_programa.py`, `comprobar_entorno.py`— facilitan encontrar archivos y escribir comandos sin errores de mayúsculas. Evita espacios y acentos en los nombres de archivo.

## Ejemplo guiado

**Problema:** corregir un archivo que no se ejecuta y conservar una copia de la versión correcta.

**Datos de entrada:** un archivo `habitos.py` con una comilla sin cerrar.

**Estrategia:** leer el error por partes, corregir una sola línea, guardar y copiar la versión buena.

Archivo con el error:

```python
print('Versión con error'
print('Segunda línea')
```

Al ejecutarlo en el entorno de desarrollo se obtuvo un mensaje de esta forma —la ruta cambiará en tu equipo—:

```text
  File "...", line 1
    print('Versión con error'
          ^
SyntaxError: '(' was never closed
```

**Lectura del mensaje:**

- Última línea: falta cerrar un paréntesis.
- Línea 1: el problema está en la primera instrucción.
- Punto señalado: cerca del inicio del texto, donde el intérprete dejó de entender la línea.

Archivo corregido:

```python
print('Versión corregida')
print('Segunda línea')
```

Salida esperada:

````text
Versión corregida
Segunda línea
**

**Modificación propuesta:** guarda una copia como `habitos_v1.py` antes de cambiar cualquier texto. Después modifica solo la primera línea de `habitos.py` y vuelve a ejecutar.

## Laboratorio práctico

**Objetivo:** practicar el método de lectura de errores y el guardado de versiones.

**Archivos:** `habitos.py` y `habitos_v1.py` en tu carpeta de proyecto.

**Pasos:**

1. Configura el editor para usar cuatro espacios como indentación. No cambies nada más.
2. Crea `habitos.py` con el contenido corregido del ejemplo guiado.
3. Ejecútalo y comprueba que muestra dos líneas.
4. Copia el archivo como `habitos_v1.py`. Esa es tu versión que funciona.
5. En `habitos.py`, deja la primera línea sin cerrar: `print('Versión con error'`.
6. Guarda y ejecuta. Copia en una nota la última línea del mensaje y el número de línea.
7. Corrige solo esa línea, guarda y ejecuta de nuevo.
8. Ejecuta también `habitos_v1.py` y compara: ambas versiones correctas deben mostrar dos líneas.

**Resultado esperado:** tras el paso 7:

```text
Versión corregida
Segunda línea
````

**Cómo comprobarlo:** las salidas de `habitos.py` y `habitos_v1.py` coinciden, y tu nota contiene `SyntaxError` y el número de línea correcto.

**Errores previsibles y pistas:**

- Si el error no aparece, comprueba que guardaste antes de ejecutar.
- Si aparece un `IndentationError`, revisa que no haya espacios delante de las instrucciones.
- Si no encuentras `habitos_v1.py`, mira el directorio actual desde la terminal.

## Errores frecuentes y depuración

| Síntoma                                         | Causa probable                             | Cómo localizarlo y corregirlo                         |
| ----------------------------------------------- | ------------------------------------------ | ----------------------------------------------------- |
| `IndentationError: unexpected indent`           | Hay espacios delante sin un bloque abierto | Quita los espacios iniciales de esa línea             |
| `SyntaxError: '(' was never closed`             | Falta un paréntesis                        | Cierra el paréntesis en la línea indicada             |
| `SyntaxError: unterminated string literal`      | Falta una comilla                          | Añade la comilla de cierre                            |
| El mensaje señala una línea que parece correcta | El error real está en la línea anterior    | Revisa también la línea inmediatamente superior       |
| El editor sugiere un nombre que no existe       | Autocompletado aceptado sin leer           | Escribe el nombre completo y ejecuta para comprobarlo |

La actitud es parte de la depuración: el mensaje describe un hecho concreto. No hace falta entenderlo todo de una vez; basta con localizar la línea y cambiar una cosa.

## Buenas prácticas y criterio profesional

- **Regla del lenguaje:** la indentación tendrá significado en Python; hoy fijamos cuatro espacios por nivel.
- **Convención aceptada:** nombres de archivo en minúsculas, con guion bajo y sin acentos ni espacios.
- **Preferencia de estilo:** el esquema de colores del editor es personal y no afecta al código.
- **Decisión de contexto:** guardar copias con sufijo es una solución temporal hasta aprender Git más adelante.

Un proyecto junior se beneficia de archivos fáciles de encontrar y de versiones que se pueden recuperar. No hace falta una herramienta sofisticada para empezar a ordenarse.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Ordena estos tres pasos para leer un error: localizar la línea, leer la última línea, cambiar una sola cosa.

**Criterios de aceptación:** orden correcto y una frase que explique por qué la última línea va primero.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

1. Leer la última línea.
2. Localizar la línea señalada.
3. Cambiar una sola cosa.

La última línea va primero porque resume qué regla se incumplió; sin esa información, mirar la línea no dice qué buscar.

#### Por qué funciona

La descripción final reduce el espacio de búsqueda. Después, el número de línea y el punto señalado permiten actuar sobre un lugar concreto.

#### Conceptos utilizados

- Estructura de un mensaje de error.
- Depuración incremental.

#### Errores habituales

- Empezar por la ruta del archivo, que suele ser irrelevante.
- Cambiar varias líneas a la vez y no saber cuál resolvió el problema.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Crea `practica_habitos.py` con dos `print()`, guárdalo y haz una copia `practica_habitos_v1.py`. Ejecuta ambos.

**Criterios de aceptación:** los dos archivos existen y producen la misma salida de dos líneas.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

`practica_habitos.py`:

```python
print('Hábitos de trabajo')
print('Versión guardada')
```

`practica_habitos_v1.py` contiene exactamente lo mismo.

Salida de ambos:

```text
Hábitos de trabajo
Versión guardada
```

#### Por qué funciona

Una copia byte a byte del archivo produce la misma salida. Conservarla permite volver atrás si la versión siguiente falla.

#### Conceptos utilizados

- Copias de seguridad simples.
- Nombres coherentes.

#### Errores habituales

- Copiar solo parte del archivo.
- Dar a la copia un nombre con mayúsculas o espacios.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Provoca un `IndentationError: unexpected indent` añadiendo espacios delante de una instrucción, léelo con el método de tres pasos y corrígelo sin tocar la otra línea.

**Criterios de aceptación:** puedes decir qué línea señalaba el error y por qué sobraban los espacios.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

Archivo con el error:

```python
print('Línea correcta')
    print('Línea con espacios de más')
```

Mensaje esperado, con forma similar a:

```text
  File "...", line 2
    print('Línea con espacios de más')
    ^
IndentationError: unexpected indent
```

Corrección: quitar los cuatro espacios delante de la segunda línea.

#### Por qué funciona

En Python la indentación solo es válida cuando abre un bloque —por ejemplo, después de un `if`—. Como todavía no hay bloques, cualquier espacio inicial es inesperado.

#### Conceptos utilizados

- Indentación.
- Lectura de errores.

#### Errores habituales

- Corregir la primera línea en lugar de la segunda.
- Pensar que el editor insertó los espacios «por su cuenta».

</details>

### Reto opcional

Explica con tres frases por qué guardar `habitos_v1.py` fue útil incluso para un archivo de dos líneas.

**Criterio de aceptación:** la explicación menciona volver atrás, comparar salidas y experimentar sin miedo.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

Una posible respuesta: «La copia me permitió volver a una versión que funcionaba después de provocar el error. También pude ejecutarla junto al archivo modificado y comparar las salidas. Eso me anima a experimentar porque sé que puedo recuperar el trabajo».

#### Por qué funciona

La copia actúa como punto de referencia. No sustituye a Git, pero cubre la necesidad inmediata al principio.

#### Conceptos utilizados

- Versiones simples.
- Experimentación segura.

#### Errores habituales

- Guardar la copia solo después de haber roto el archivo.
- Crear tantas copias que sea imposible saber cuál es la buena.

</details>

## Integración con el proyecto longitudinal

Todavía no corresponde. Los hábitos de esta lección se aplicarán más adelante, cuando el gestor de tareas empiece a crecer y convenga conservar versiones y nombres claros.

## Resumen

Ideas clave:

- Usar cuatro espacios por nivel de indentación y evitar tabuladores.
- El resaltado y el autocompletado ayudan, pero no sustituyen la lectura.
- Para leer un error: última línea, número de línea, punto señalado.
- Guardar una versión que funciona antes de experimentar.
- Nombres de archivo en minúsculas, sin espacios ni acentos.

Comprueba que puedes:

- Configurar la indentación básica del editor.
- Explicar los tres pasos para leer un error.
- Corregir un `IndentationError` sencillo.
- Conservar y ejecutar dos versiones de un mismo script.

## Mini-proyecto: kit de hábitos

Reúne los hábitos de esta lección en un solo archivo y una copia de seguridad. Crea `kit_habitos.py` con un comentario y tres `print()`, guárdalo como `kit_habitos_v1.py`, provoca un `IndentationError` en el original, léelo con los tres pasos y corrígelo.

1. Configura cuatro espacios por nivel en el editor.
2. Crea `kit_habitos.py` con el comentario y las tres instrucciones.
3. Copia el archivo como `kit_habitos_v1.py` y ejecútalo.
4. En `kit_habitos.py`, añade cuatro espacios delante de la segunda `print()`, guarda y ejecuta.
5. Copia el mensaje de error, corrige solo esa línea y vuelve a ejecutar ambos archivos.

**Criterios de aceptación:** el error aparece solo mientras sobran los espacios; tu nota incluye `IndentationError` y el número de línea; ambas versiones correctas muestran la misma salida de tres líneas.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

Versión correcta de `kit_habitos.py`:

```python
# Kit de hábitos
print('Cuatro espacios por nivel')
print('Leo la última línea del error')
print('Guardo una versión que funciona')
```

`kit_habitos_v1.py` contiene lo mismo. Salida de ambos:

```text
Cuatro espacios por nivel
Leo la última línea del error
Guardo una versión que funciona
```

Versión con el error, antes de corregir:

```python
print('Cuatro espacios por nivel')
    print('Leo la última línea del error')
print('Guardo una versión que funciona')
```

Mensaje esperado, con forma similar a:

```text
  File "...", line 2
    print('Leo la última línea del error')
    ^
IndentationError: unexpected indent
```

#### Por qué funciona

En Python la indentación solo es válida cuando abre un bloque, y todavía no hemos escrito ninguno. Los cuatro espacios delante de la segunda instrucción son inesperados. La copia `kit_habitos_v1.py` sirve como referencia para comparar salidas y recuperar el trabajo.

#### Conceptos utilizados

- Indentación de cuatro espacios.
- Lectura de errores: última línea, número de línea, punto señalado.
- Versiones simples con copias `_v1`.

#### Errores habituales

- Corregir la primera línea en lugar de la segunda.
- Guardar la copia después de haber roto el archivo original.
- Usar un tabulador en lugar de cuatro espacios.

</details>

## Tu entrega o autoevaluación

1. Muestra la salida de `habitos.py` y `habitos_v1.py`.
2. Copia un error real que hayas provocado y escribe cómo lo localizaste.
3. Compara tus respuestas con las soluciones ocultas.

Criterios de revisión: indentación correcta, interpretación del mensaje de error y existencia de una versión guardada que funcione.

**Estado:** lección «Editor, depuración inicial y hábitos», pendiente de autoevaluación. Siguiente lección: «Anatomía de un programa».

## Recursos

- [PEP 8 — Style Guide for Python Code](https://peps.python.org/pep-0008/): guía oficial de estilo; consulta la sección de indentación.
- [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html): documentación oficial sobre mensajes de error y su lectura.
