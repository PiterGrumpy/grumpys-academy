---
title: 'Terminal y sistema de archivos'
description: 'Directorio actual, rutas absolutas y relativas, comandos básicos para moverse por carpetas y organizar un proyecto Python.'
course: python
unit: 'Antes de empezar'
order: 3
---

# Terminal y sistema de archivos

## Directorio actual

La terminal trabaja siempre sobre una carpeta, llamada **directorio actual** o _directorio de trabajo_. Los comandos relativos se resuelven desde ahí.

| Sistema                       | Cómo ver el directorio actual |
| ----------------------------- | ----------------------------- |
| Windows (Símbolo del sistema) | `cd` sin argumentos           |
| Windows (PowerShell)          | `Get-Location`                |
| macOS y Linux                 | `pwd`                         |

## Rutas absolutas y relativas

Una **ruta absoluta** describe la ubicación completa desde la raíz del sistema, por ejemplo `C:\Users\Ana\python-curso\hola.py` en Windows o `/home/ana/python-curso/hola.py` en macOS y Linux.

Una **ruta relativa** se interpreta desde el directorio actual. Si estás en `python-curso`, escribir `hola.py` se refiere a `python-curso\hola.py`. Dos atajos útiles:

- `.` es el directorio actual.
- `..` es el directorio padre, es decir, el nivel superior.

![Árbol de carpetas de python-curso con hola.py y una carpeta datos; al entrar en datos con cd datos, la ruta ../hola.py apunta al script de la carpeta superior](/images/rutas-relativas.svg)

## Comandos básicos

| Acción                | Windows (cmd)  | macOS y Linux  |
| --------------------- | -------------- | -------------- |
| Listar contenido      | `dir`          | `ls`           |
| Cambiar de carpeta    | `cd nombre`    | `cd nombre`    |
| Subir un nivel        | `cd ..`        | `cd ..`        |
| Crear carpeta         | `mkdir nombre` | `mkdir nombre` |
| Ver directorio actual | `cd`           | `pwd`          |

En Windows, las rutas con espacios van entre comillas: `cd "Mi carpeta"`. En macOS y Linux se usa la barra `/`; en Windows, la contrabarra `\`, aunque muchos comandos aceptan también `/`.

## Organización de un proyecto

Una carpeta de proyecto agrupa los archivos que pertenecen a un mismo programa. Por ahora usaremos nombres descriptivos en minúsculas con guion bajo, como `python-curso` para la carpeta y `hola.py` para el archivo.

Más adelante el gestor de tareas tendrá módulos, datos y pruebas. Crear esa estructura desde el principio —sin llenarla de archivos vacíos— evita tener que mover todo después.

## Ejemplo guiado

**Problema:** crear una carpeta de trabajo, entrar en ella y ejecutar un script desde ahí.

**Datos de entrada:** el archivo `hola.py` creado en «Qué es programar y qué es Python».

**Estrategia:** crear la carpeta, entrar, copiar el archivo y listar antes de ejecutar.

En Windows (Símbolo del sistema):

```text
mkdir proyecto-python
cd proyecto-python
copy ..\hola.py hola.py
dir
python hola.py
```

En macOS o Linux:

```text
mkdir proyecto-python
cd proyecto-python
cp ../hola.py hola.py
ls
python3 hola.py
```

Salida ilustrativa del listado —el formato exacto depende del sistema—:

```text
hola.py
```

Salida del script:

```text
Hola desde Python
Estoy aprendiendo a programar
```

**Lectura paso a paso:**

- `mkdir proyecto-python` crea la carpeta dentro del directorio actual.
- `cd proyecto-python` convierte esa carpeta nueva en el directorio actual.
- `..\hola.py` y `../hola.py` significan «el archivo `hola.py` del nivel superior».
- `dir` o `ls` confirman que el archivo está ahí antes de ejecutarlo.
- El último comando entrega una ruta relativa —`hola.py`— al intérprete, que la resuelve desde `proyecto-python`.

**Modificación propuesta:** sube un nivel con `cd ..` y ejecuta `python hola.py` —o `python3 hola.py`—. Predice el error antes de hacerlo y después compruébalo.

## Laboratorio práctico

**Objetivo:** organizar una carpeta de proyecto y moverse por ella con comandos de ruta relativa.

**Archivos:** una carpeta `mi-proyecto-python` con `hola.py` y `entorno.py`.

**Pasos:**

1. Abre una terminal en tu carpeta de documentos.
2. Crea `mi-proyecto-python` con `mkdir mi-proyecto-python`.
3. Entra con `cd mi-proyecto-python`.
4. Copia `hola.py` y `entorno.py` desde `python-curso` usando `..\` o `../` según tu sistema.
5. Lista el contenido con `dir` o `ls`: deben aparecer los dos archivos.
6. Ejecuta cada script con `python nombre.py` o `python3 nombre.py`.
7. Sube un nivel con `cd ..` y comprueba que el directorio actual volvió a ser documentos.
8. Vuelve a entrar con `cd mi-proyecto-python` y ejecuta `hola.py` otra vez.

**Resultado esperado:** los dos scripts muestran sus líneas sin mensajes de `can't open file`, y el último `hola.py` produce la misma salida que en el paso 6.

**Cómo comprobarlo:** el listado del paso 5 debe mostrar exactamente los dos nombres de archivo y las salidas deben coincidir antes y después de subir y volver a entrar.

**Errores previsibles y pistas:**

- Si `cd` falla, revisa el nombre de la carpeta y que estés en su nivel superior.
- Si el listado sale vacío, la copia se hizo en otra carpeta.
- Si `can't open file` aparece, mira el directorio actual antes de culpar al script.

## Errores frecuentes y depuración

Los mensajes siguientes son **ejemplos ilustrativos**, no el resultado de ejecutar tu código:

| Síntoma                                            | Causa probable                           | Cómo localizarlo y corregirlo                                   |
| -------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------- |
| `El sistema no encuentra la ruta especificada`     | La carpeta no existe o el nombre difiere | Lista el contenido y comprueba la ortografía                    |
| `can't open file 'hola.py'`                        | Estás en otra carpeta                    | Verifica el directorio actual y entra en la carpeta del archivo |
| `cd "Mi carpeta"` funciona pero `cd Mi carpeta` no | La ruta tiene espacios                   | Escribe la ruta entre comillas                                  |
| El listado muestra archivos inesperados            | Estás en documentos, no en el proyecto   | Usa `cd mi-proyecto-python` y vuelve a listar                   |
| `mkdir` responde que ya existe                     | La carpeta fue creada antes              | Entra en ella con `cd` en lugar de crearla de nuevo             |

No uses comandos de borrado en esta lección. Si necesitas limpiar algo, revisa primero qué archivos hay y pide ayuda antes de eliminarlos.

## Buenas prácticas y criterio profesional

- **Hecho del sistema:** los comandos `dir` y `ls` hacen lo mismo, pero pertenecen a sistemas distintos.
- **Convención aceptada:** nombres de carpetas y archivos en minúsculas, sin espacios y con guion bajo o guion medio.
- **Decisión de contexto:** usar la terminal integrada del editor o la del sistema es indiferente siempre que ambas estén en la carpeta correcta.
- **Seguridad:** no eliminar carpetas ni archivos sin revisar su contenido.

Una comprobación sencilla antes de ejecutar cualquier script —listar y confirmar el directorio actual— evita la mayor parte de los errores de ruta.

## Ejercicios

Intenta cada ejercicio antes de abrir su solución.

### Ejercicio 1. Nivel 1 — Comprensión

Clasifica cada ruta como absoluta o relativa:

1. `hola.py`
2. `C:\Users\Ana\python-curso\hola.py`
3. `../hola.py`
4. `/home/ana/python-curso/hola.py`

**Criterios de aceptación:** cuatro clasificaciones correctas y una frase que defina `..`.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

1. Relativa.
2. Absoluta.
3. Relativa.
4. Absoluta.

`..` significa el directorio padre, es decir, un nivel por encima del directorio actual.

#### Por qué funciona

Una ruta absoluta parte de la raíz del sistema; una relativa se interpreta desde el directorio actual. `..` es un componente especial de las rutas relativas.

#### Conceptos utilizados

- Ruta absoluta y relativa.
- Directorio padre.

#### Errores habituales

- Creer que `../hola.py` es absoluta por empezar con puntos.
- Confundir `.` —actual— con `..` —padre—.

</details>

### Ejercicio 2. Nivel 2 — Aplicación

Desde tu carpeta de documentos, crea `practica-rutas`, entra en ella y comprueba que el directorio actual cambió con el comando de tu sistema.

**Criterios de aceptación:** el comando de directorio actual muestra el nombre `practica-rutas` al final de la ruta.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

En Windows (cmd):

```text
mkdir practica-rutas
cd practica-rutas
cd
```

En macOS o Linux:

```text
mkdir practica-rutas
cd practica-rutas
pwd
```

#### Por qué funciona

`cd nombre` cambia el directorio actual y el comando de consulta muestra la nueva ubicación. La ruta termina en `practica-rutas`.

#### Conceptos utilizados

- Creación y cambio de carpeta.
- Directorio actual.

#### Errores habituales

- Crear la carpeta dentro de otra carpeta distinta de la prevista.
- No entrar con `cd` después de crearla.

</details>

### Ejercicio 3. Nivel 3 — Transferencia

Dentro de `practica-rutas`, ejecuta `hola.py` copiándolo desde `python-curso` con una ruta relativa. Después sube un nivel y comprueba que ya no puedes ejecutarlo sin indicar la ruta.

**Criterios de aceptación:** la primera ejecución muestra dos líneas; la segunda produce un error de archivo no encontrado que tú sabes explicar.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

Dentro de `practica-rutas`, en Windows:

```text
copy ..\python-curso\hola.py hola.py
python hola.py
```

En macOS o Linux:

```text
cp ../python-curso/hola.py hola.py
python3 hola.py
```

Después:

```text
cd ..
python hola.py
```

El segundo intento muestra un mensaje parecido a `can't open file 'hola.py'` porque ahora el directorio actual es documentos, que no contiene ese archivo.

#### Por qué funciona

El intérprete resuelve `hola.py` desde el directorio actual. Al subir un nivel, la ruta relativa ya no apunta al archivo copiado.

#### Conceptos utilizados

- Rutas relativas con `..`.
- Resolución de rutas desde el directorio actual.

#### Errores habituales

- Copiar desde `..\hola.py` en lugar de `..\python-curso\hola.py`.
- Pensar que el error indica un problema de Python en lugar de una ruta equivocada.

</details>

### Reto opcional

Crea una carpeta `datos` dentro de `practica-rutas` y ejecuta `hola.py` desde ella usando `../hola.py` como ruta del script.

**Criterio de aceptación:** el script se ejecuta y la salida sigue siendo de dos líneas.

<details>
<summary>Ver la solución del reto opcional</summary>

#### Resolución

```text
mkdir datos
cd datos
python ../hola.py
```

En macOS o Linux, `python3 ../hola.py`.

#### Por qué funciona

`../hola.py` apunta al archivo que está un nivel por encima del directorio actual. El intérprete acepta rutas relativas como argumento.

#### Conceptos utilizados

- Ruta relativa con `..`.
- Ejecución de scripts desde otra carpeta.

#### Errores habituales

- Escribir `./hola.py`: busca el archivo dentro de `datos`.
- Olvidar la barra entre `..` y el nombre del archivo.

</details>

## Integración con el proyecto longitudinal

Todavía no corresponde. La organización de carpetas del gestor de tareas llegará con los módulos y los archivos de datos. Por ahora solo necesitas una carpeta de trabajo y saber entrar en ella.

## Resumen

Ideas clave:

- La terminal siempre trabaja sobre un directorio actual.
- Una ruta absoluta parte de la raíz; una relativa parte del directorio actual.
- `..` significa el directorio padre y `.` el actual.
- `dir` lista en Windows; `ls` lista en macOS y Linux.
- Un error de archivo no encontrado suele ser un problema de ruta, no de Python.

Comprueba que puedes:

- Ver el directorio actual en tu sistema.
- Crear una carpeta y entrar en ella.
- Copiar un archivo usando una ruta relativa.
- Explicar por qué `hola.py` falla al subir un nivel.

## Mini-proyecto: mapa de mi carpeta

Construye una pequeña estructura de carpetas y demuestra que sabes moverte por ella. El proyecto debe contener una carpeta `mapa-rutas`, una subcarpeta `datos` y una copia de `hola.py`. Desde `datos` ejecutarás el script de arriba usando una ruta relativa.

1. Desde documentos, crea `mapa-rutas` y entra en ella.
2. Copia `hola.py` desde `python-curso` y crea la carpeta `datos`.
3. Dentro de `datos`, crea `ruta.py` con dos `print()` que digan dónde estás.
4. Ejecuta `hola.py` desde `mapa-rutas` y después ejecútalo desde `datos` con `../hola.py` —o `..\hola.py`—.
5. Ejecuta también `ruta.py` y anota el directorio actual de cada paso.

**Criterios de aceptación:** las tres ejecuciones funcionan; la ruta `../hola.py` apunta al archivo del nivel superior; puedes explicar por qué `hola.py` no funciona desde `datos`.

<details>
<summary>Ver una posible solución del mini-proyecto</summary>

#### Resolución

En Windows (Símbolo del sistema):

```text
mkdir mapa-rutas
cd mapa-rutas
mkdir datos
copy ..\python-curso\hola.py hola.py
cd datos
python ..\hola.py
python ruta.py
```

En macOS o Linux:

```text
mkdir mapa-rutas
cd mapa-rutas
mkdir datos
cp ../python-curso/hola.py hola.py
cd datos
python3 ../hola.py
python3 ruta.py
```

Archivo `datos/ruta.py`:

```python
print('Estoy dentro de datos')
print('El script de arriba se llama hola.py')
```

Salida de `../hola.py`:

```text
Hola desde Python
Estoy aprendiendo a programar
```

#### Por qué funciona

`cd` convierte cada carpeta en el directorio actual. Desde `datos`, `../hola.py` sube un nivel y encuentra el archivo copiado; si escribieras solo `hola.py`, el intérprete lo buscaría dentro de `datos` y no lo encontraría.

#### Conceptos utilizados

- Directorio actual.
- Rutas relativas con `..`.
- Comandos `mkdir`, `cd` y `dir`/`ls`.

#### Errores habituales

- Copiar `hola.py` en `datos` en lugar de en `mapa-rutas`.
- Escribir `..\hola.py` en macOS o Linux, donde la barra correcta es `/`.
- Ejecutar `ruta.py` desde `mapa-rutas` en lugar de desde `datos`.

</details>

## Tu entrega o autoevaluación

1. Muestra el comando que usaste para ver tu directorio actual y su salida.
2. Ejecuta `hola.py` desde dos carpetas distintas y explica la diferencia.
3. Compara tus respuestas con las soluciones ocultas.

Criterios de revisión: uso correcto de rutas relativas, capacidad de localizar el directorio actual y explicación del error de archivo no encontrado.

**Estado:** lección «Terminal y sistema de archivos», pendiente de autoevaluación. Siguiente lección: «Primer programa y REPL».

## Recursos

- [Using the Python Interpreter](https://docs.python.org/3/tutorial/interpreter.html): documentación oficial sobre cómo se invoca el intérprete y se le pasan argumentos.
- [Python en Windows](https://docs.python.org/3/using/windows.html): detalles oficiales sobre rutas, `PATH` y el lanzador `py`.
- [Python en Unix](https://docs.python.org/3/using/unix.html): documentación oficial para macOS, Linux y otros sistemas Unix-like.
