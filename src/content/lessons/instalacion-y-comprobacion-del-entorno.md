---
title: 'Instalación y comprobación del entorno'
description: 'Instalar Python 3 desde una fuente oficial, comprobar la versión con el comando de cada sistema y configurar un editor sin convertirlo en el centro del curso.'
course: python
unit: 'Antes de empezar'
order: 2
---

# Instalación y comprobación del entorno

## Fuente oficial y versiones estables

Python se distribuye desde `python.org`. La página de descargas ofrece instaladores para Windows, macOS y fuentes para otros sistemas. Conviene usar esa fuente y no enlaces de terceros: evita versiones modificadas o instaladores con software añadido.

Dentro de una versión mayor —Python 3— hay versiones menores como 3.13, 3.14 o 3.15. Una **versión estable** es una publicación terminada y probada; una versión preliminar —_beta_ o _release candidate_— puede cambiar. Este curso fija 3.14 como referencia para que las salidas y las explicaciones sean reproducibles.

## Comprobar la versión

El comando depende del sistema y de cómo esté instalado el intérprete:

| Sistema | Comando             | Cuándo usar otro                                           |
| ------- | ------------------- | ---------------------------------------------------------- |
| Windows | `python --version`  | `py --version` si el primero no se reconoce                |
| macOS   | `python3 --version` | `python --version` puede apuntar a una instalación antigua |
| Linux   | `python3 --version` | Algunas distribuciones permiten también `python`           |

En el entorno de desarrollo de este curso, `python --version` produce:

```text
Python 3.14.7
```

Esa salida tiene tres partes: el lenguaje, la versión mayor y menor, y el número de revisión. Si en tu equipo aparece, por ejemplo, `Python 3.13.2`, los ejemplos de esta lección siguen siendo válidos.

## Diferencias prácticas entre sistemas

En Windows, el instalador oficial pregunta si se debe añadir `python.exe` a la variable `PATH`. Aceptarlo permite escribir `python` desde cualquier carpeta de la terminal. Si no se acepta, el comando `py` suele seguir disponible.

En macOS y en la mayoría de distribuciones Linux, el intérprete del sistema se llama `python3`. El nombre `python` puede no existir o pertenecer a Python 2 en equipos antiguos. Esto no cambia el lenguaje: solo cambia el nombre del ejecutable.

## Editor y terminal integrada

En la lección «Qué es programar y qué es Python» distinguimos editor, IDE y terminal. Un editor como Visual Studio Code permite abrir una carpeta, ver sus archivos y ejecutar comandos en una terminal integrada. Esa terminal es la misma interfaz de texto de siempre; cambia el lugar desde el que la abrimos.

La configuración del editor es una decisión personal. Aquí solo necesitamos tres cosas: crear archivos `.py`, guardarlos y ejecutarlos. Extensiones, atajos y temas visuales pueden esperar.

## Ejemplo guiado

**Problema:** confirmar que el intérprete funciona y que el script de la lección anterior sigue ejecutándose.

**Datos de entrada:** la versión del intérprete y el archivo `hola.py` creado en «Qué es programar y qué es Python».

**Estrategia:** comprobar primero la versión y después ejecutar el archivo desde la misma carpeta.

En Windows:

```text
python --version
python hola.py
```

En macOS o Linux:

```text
python3 --version
python3 hola.py
```

Salida esperada en el entorno de desarrollo para la versión:

```text
Python 3.14.7
```

Y para `hola.py`, el contenido que escribiste en la lección anterior:

```text
Hola desde Python
Estoy aprendiendo a programar
```

**Lectura paso a paso:**

- El primer comando pregunta al intérprete por su versión; no lee ningún archivo.
- El segundo entrega `hola.py` al intérprete, que ejecuta sus dos instrucciones.
- Si la versión aparece pero el archivo no, el problema está en la ruta o en el nombre del archivo, no en la instalación.

**Modificación propuesta:** cambia una de las frases de `hola.py`, guarda y vuelve a ejecutar. Predice la salida antes de lanzarlo.

## Laboratorio práctico

**Objetivo:** dejar un entorno comprobado y listo para las siguientes lecciones.

**Archivos:** la carpeta `python-curso` de «Qué es programar y qué es Python» y un archivo nuevo `entorno.py`.

**Pasos:**

1. Abre `https://www.python.org/downloads/` y descarga el instalador correspondiente a tu sistema.
2. Ejecuta el instalador. En Windows, acepta la opción de añadir Python a `PATH`; en macOS y Linux sigue las instrucciones de la página para tu distribución.
3. Abre una terminal y comprueba la versión con el comando de la tabla anterior. Anota la salida exacta.
4. Instala un editor, por ejemplo Visual Studio Code, desde su sitio oficial.
5. Abre con el editor la carpeta `python-curso` que creaste en «Qué es programar y qué es Python».
6. Crea `entorno.py` con este contenido:

   ```python
   print('Entorno comprobado')
   print('Ya puedo ejecutar scripts')
   ```

7. Guarda el archivo y ejecútalo desde la terminal integrada del editor: `python entorno.py` en Windows o `python3 entorno.py` en macOS/Linux.

**Resultado esperado:**

```text
Entorno comprobado
Ya puedo ejecutar scripts
```

**Cómo comprobarlo:** la versión anotada en el paso 3 debe corresponder a una rama 3 estable, y las dos líneas del paso 7 deben aparecer en orden.

**Errores previsibles y pistas:**

- Si el comando de versión no se reconoce, prueba el alternativo de la tabla antes de reinstalar.
- Si la terminal integrada del editor está en otra carpeta, abre la terminal en la carpeta `python-curso` o usa `cd` para entrar.
- Si el editor muestra un avatar de Python distinto del que comprobaste, selecciona el intérprete correcto en la configuración del editor; lo veremos con más detalle más adelante.

## Errores frecuentes y depuración

Los mensajes siguientes son **ejemplos ilustrativos**, no el resultado de ejecutar tu código:

| Síntoma                                       | Causa probable                           | Cómo localizarlo y corregirlo                                                      |
| --------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------- |
| `'python' no se reconoce como comando`        | Python no está en `PATH` o se llama `py` | Prueba `py --version`; si funciona, úsalo o reinstala marcando la opción de `PATH` |
| `python --version` muestra `Python 2.7`       | Hay una instalación antigua              | Usa `python3` o `py -3` y anota la versión nueva                                   |
| El editor no encuentra el intérprete          | Extensión sin configurar                 | Selecciona el intérprete instalado desde la paleta de comandos                     |
| El instalador procede de un sitio desconocido | Enlace de terceros                       | Desinstálalo e instala desde `python.org`                                          |
| `can't open file 'entorno.py'`                | La terminal está en otra carpeta         | Comprueba el directorio actual y entra en `python-curso`                           |

La regla de depuración sigue siendo la misma: leer el mensaje, identificar qué herramienta falla —intérprete, terminal o editor— y cambiar una sola cosa.

## Buenas prácticas y criterio profesional

- **Hecho del entorno:** el nombre del comando depende del sistema y de la instalación, no del código que escribamos.
- **Convención aceptada:** anotar la versión exacta al empezar un curso o proyecto facilita reproducir los ejemplos.
- **Decisión de contexto:** usar un editor u otro es una preferencia personal; lo importante es poder guardar y ejecutar.
- **Seguridad:** descargar el intérprete solo desde el sitio oficial del proyecto.

Para un proyecto junior, basta con saber qué versión se usa y cómo se lanza un script. No hace falta dominar la configuración del editor en esta lección.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Empareja cada situación con el comando probable:

1. Windows con Python instalado y añadido a `PATH`.
2. macOS con el intérprete del sistema.
3. Windows donde `python` no se reconoce pero existe el lanzador oficial.

Comandos: `python3 --version`, `python --version`, `py --version`.

**Criterios de aceptación:** tres emparejamientos correctos y una frase que explique por qué cambia el comando.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

1. `python --version`.
2. `python3 --version`.
3. `py --version`.

#### Por qué funciona

El comando nombra al ejecutable que el sistema encuentra. Windows usa `python` o el lanzador `py`; en macOS y Linux el intérprete de la rama 3 suele llamarse `python3`.

#### Conceptos utilizados

- Intérprete y ejecutable.
- Diferencias entre sistemas.

#### Errores habituales

- Probar varios comandos al azar sin leer el mensaje de error.
- Suponer que el nombre del comando cambia el lenguaje.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Comprueba la versión de Python en tu equipo y anótala. Después escribe una frase indicando si sirve para este curso.

**Criterios de aceptación:** la salida copiada incluye `Python 3.` y la frase identifica la rama 3.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

En el entorno de desarrollo:

```text
Python 3.14.7
```

Frase: «Es una versión estable de la rama 3, por lo tanto sirve para seguir el curso».

#### Por qué funciona

Todos los ejemplos de esta lección usan sintaxis de Python 3 estable. La revisión concreta —`.7`— no cambia las instrucciones empleadas.

#### Conceptos utilizados

- Comprobación de versión.
- Versiones estables.

#### Errores habituales

- Anotar la versión del editor en lugar de la del intérprete.
- Copiar la versión de la documentación en lugar de la salida real del equipo.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Abre `python-curso` con tu editor, ejecuta `hola.py` desde la terminal integrada y compara la salida con la que obtuviste en «Qué es programar y qué es Python» desde la terminal del sistema.

**Criterios de aceptación:** ambas salidas coinciden y puedes explicar por qué.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

Las dos salidas deben ser idénticas:

```text
Hola desde Python
Estoy aprendiendo a programar
```

#### Por qué funciona

La terminal integrada y la terminal del sistema lanzan el mismo intérprete sobre el mismo archivo. Cambia el lugar desde el que se escribe el comando, no el programa ni su resultado.

#### Conceptos utilizados

- Terminal integrada.
- Reproducibilidad.

#### Errores habituales

- Ejecutar el archivo desde otra carpeta.
- Comparar contra una versión anterior del archivo sin guardar los cambios.

</details>

### Reto opcional

Crea `version_como_texto.py` con dos `print()`: el primero debe mostrar la versión que anotaste y el segundo tu nombre. No uses variables todavía.

**Criterio de aceptación:** la salida tiene dos líneas y la primera contiene la versión real del intérprete.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

Con la versión del entorno de desarrollo:

```python
print('Python 3.14.7')
print('Ana')
```

#### Por qué funciona

La versión se escribe como texto entre comillas: es un dato que copiamos de la comprobación, no un comando que el intérprete ejecuta.

#### Conceptos utilizados

- `print()` con texto.
- Diferencia entre comando y dato de texto.

#### Errores habituales

- Escribir `print(Python 3.14.7)` sin comillas: el intérprete no entendería el texto.
- Copiar la versión con un salto de línea dentro de las comillas.

</details>

## Integración con el proyecto longitudinal

Todavía no corresponde. Esta lección prepara las herramientas; el gestor de tareas empieza más adelante, cuando sepamos usar variables, condicionales y colecciones. El archivo `hola.py` sigue siendo un ejemplo independiente.

## Resumen

Ideas clave:

- Descargar Python desde el sitio oficial y usar una versión estable de la rama 3.
- `python --version`, `python3 --version` y `py --version` comprueban el intérprete según el sistema.
- El editor y la terminal son herramientas distintas del lenguaje.
- Anotar la versión ayuda a reproducir los ejemplos.
- La terminal integrada de un editor ejecuta los mismos comandos que una terminal del sistema.

Comprueba que puedes:

- Instalar Python 3 desde una fuente oficial.
- Obtener la versión instalada sin mirar la documentación.
- Explicar por qué en macOS se usa normalmente `python3`.
- Ejecutar un script desde la terminal integrada del editor.

## Mini-proyecto: informe de entorno

Crea un único archivo que deje constancia de tu entorno de trabajo. Debe incluir tres `print()`: la versión exacta que copiaste del comando de comprobación, el comando que usaste y el nombre del editor. Después ejecútalo desde la terminal del sistema y desde la terminal integrada.

1. Ejecuta `python --version`, `python3 --version` o `py --version` y copia la salida.
2. Crea `informe_entorno.py` con los tres `print()`.
3. Guárdalo y ejecútalo desde la terminal del sistema.
4. Vuelve a ejecutarlo desde la terminal integrada del editor y compara.

**Criterios de aceptación:** las tres líneas aparecen en orden; la versión coincide con la salida real del comando; ambas terminales producen la misma salida.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

Con los datos del entorno de desarrollo:

```python
print('Python 3.14.7')
print('python --version')
print('Visual Studio Code')
```

Salida esperada:

```text
Python 3.14.7
python --version
Visual Studio Code
```

#### Por qué funciona

La versión y el comando son datos de texto, por lo que van entre comillas. El intérprete solo muestra lo que cada `print()` recibe; la terminal cambia el lugar desde el que se lanza el archivo, no su contenido.

#### Conceptos utilizados

- Comprobación de versión.
- `print()` con texto.
- Terminal del sistema frente a terminal integrada.

#### Errores habituales

- Escribir la versión sin comillas: el intérprete intentaría interpretarla como código.
- Copiar la versión de la documentación en lugar de la salida del equipo.
- Ejecutar el archivo desde otra carpeta.

</details>

## Tu entrega o autoevaluación

1. Anota la salida exacta del comando de versión de tu equipo.
2. Ejecuta `entorno.py` y `hola.py` y comprueba sus salidas.
3. Compara tus respuestas con las soluciones ocultas de los ejercicios.

Criterios de revisión: instalación desde fuente oficial, versión de la rama 3 correctamente identificada y capacidad para ejecutar un script desde dos terminales distintas.

**Estado:** lección «Instalación y comprobación del entorno», pendiente de autoevaluación. Siguiente lección: «Terminal y sistema de archivos».

## Recursos

- [Descargas de Python](https://www.python.org/downloads/): instaladores oficiales e instrucciones por sistema.
- [Using Python](https://docs.python.org/3/using/index.html): documentación oficial sobre la instalación y el uso del intérprete en cada plataforma.
- [Python en Visual Studio Code](https://code.visualstudio.com/docs/python/python-tutorial): guía oficial del editor para crear y ejecutar un primer script.
