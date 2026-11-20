---
title: 'Introducción a R y RStudio'
description: 'Instalar R y RStudio, usar la consola y dar los primeros pasos con operaciones, variables y tipos de datos.'
course: r
order: 1
---

# Introducción a R y RStudio

**R** es un lenguaje de programación pensado para trabajar con datos y estadística. **RStudio** es un entorno de desarrollo —un programa que reúne herramientas para escribir, ejecutar y revisar código— que se apoya en R para funcionar.

Una forma de recordar la diferencia: R es el motor y RStudio es el panel de control. Necesitas ambos y se instalan por separado.

## Instalar R y RStudio

1. Descarga **R** desde [CRAN](https://cloud.r-project.org/). Elige el instalador de tu sistema operativo y acepta las opciones por defecto.
2. Descarga **RStudio Desktop** desde [Posit](https://posit.co/downloads/). Instálalo después de R, porque RStudio lo necesita para ejecutar código.

> **Consejo:** instala primero R y comprueba que RStudio se abre sin errores. Si RStudio no encuentra R, reinicia el ordenador antes de buscar otras soluciones.

Al abrir RStudio verás varias zonas. Las que usaremos al principio son:

| Zona                  | Para qué sirve                                                         |
| --------------------- | ---------------------------------------------------------------------- |
| **Console**           | Ejecuta una expresión al pulsar `Enter` y muestra el resultado.        |
| **Environment**       | Lista los objetos —variables— que has creado y su valor.               |
| **History**           | Guarda las órdenes ejecutadas; haz doble clic en una para repetirla.   |
| **Editor de scripts** | Zona donde escribes y guardas archivos `.R` para volver a ejecutarlos. |
| **Files / Help**      | Explora archivos y consulta la documentación.                          |

Puedes escribir directamente en la consola para probar ideas, pero guarda el código importante en un **script**: un archivo de texto con instrucciones que puedes volver a ejecutar. Así tu trabajo es **reproducible**, es decir, otra persona —o tú dentro de un mes— puede obtener el mismo resultado.

Para limpiar la consola usa `Ctrl+L` (`Cmd+L` en macOS). Para escribir una nota en el código, usa `#`: R ignora todo lo que aparece detrás de la almohadilla en esa línea.

```r
# Esto es un comentario: R no lo ejecuta
print('Hola desde R')
```

```text
[1] "Hola desde R"
```

`print()` muestra un valor por pantalla. En la consola también puedes escribir solo el valor y pulsar `Enter`: R muestra el resultado automáticamente.

## La consola como calculadora

Antes de crear variables, conviene probar R como una calculadora. Los operadores básicos son `+` (suma), `-` (resta), `*` (multiplicación) y `/` (división). Los paréntesis agrupan operaciones y se resuelven primero.

```r
2 + 3
10 - 4
(2 + 3) * 4
7 / 2
```

```text
[1] 5
[1] 6
[1] 20
[1] 3.5
```

La división `/` devuelve un número con decimales, aunque el resultado sea entero.

También puedes usar la potencia `^` y el resto de una división entera `%%`:

```r
2 ^ 3    # 2 elevado a 3
7 %% 3   # resto de dividir 7 entre 3
7 %/% 3  # cuántas veces cabe el 3 en el 7
```

```text
[1] 8
[1] 1
[1] 2
```

> **Advertencia:** en R no existe el operador `**` para potencias. Usa siempre `^`.

## Variables

Una **variable** es un nombre que guarda un valor para usarlo después. En R se crea con el operador de asignación `<-`, que se lee como «recibe»:

```r
numero <- 10
numero
```

```text
[1] 10
```

Puedes asignar texto, números y resultados de operaciones:

```r
nombre <- 'Ana'
numero <- 10
suma <- 4 + 5
nombre
numero
suma
```

```text
[1] "Ana"
[1] 10
[1] 9
```

El signo `=` también asigna valores en R, pero la convención es usar `<-`. Así se distingue de los argumentos de las funciones, que sí se escriben con `=` y veremos en la siguiente lección.

Si asignas un valor nuevo a una variable que ya existía, su contenido cambia. El lado derecho se calcula antes de guardarse, así que puedes usar el valor anterior:

```r
numero <- 10
numero <- numero + 5
numero
```

```text
[1] 15
```

### Nombres de variables

Los nombres pueden usar letras, números, punto (`.`) y guion bajo (`_`), pero no empiezan por un número ni contienen espacios. Para nombres con varias palabras, usa guiones bajos o puntos en minúsculas; elige uno y mantén el mismo estilo. En este curso usaremos guion bajo:

```r
ventas_totales <- 1200
precio.unitario <- 15  # también es válido
```

> **Consejo:** un nombre descriptivo evita tener que recordar qué guarda una variable. `ventas_totales` es mejor que `x`.

## Tipos de datos

Todo valor en R tiene un **tipo**. La función `class()` indica el tipo de un objeto:

| Tipo     | Qué contiene                 | Ejemplo          | `class()`     |
| -------- | ---------------------------- | ---------------- | ------------- |
| Numérico | Números, con o sin decimales | `10`, `3.5`      | `"numeric"`   |
| Lógico   | Verdadero o falso            | `TRUE`, `FALSE`  | `"logical"`   |
| Carácter | Texto entre comillas         | `'Ana'`, `"Ana"` | `"character"` |

```r
class(10)
class(TRUE)
class('Ana')
```

```text
[1] "numeric"
[1] "logical"
[1] "character"
```

Los valores lógicos se escriben `TRUE` y `FALSE` —o `T` y `F` como abreviatura—. Usaremos las palabras completas: son más claras y no dependen de que recuerdes la abreviatura. Los valores lógicos son la base de las condiciones que veremos en la siguiente lección.

El texto puede ir entre comillas simples o dobles; ambas son equivalentes. Sí importa que haya comillas: sin ellas R buscaría un objeto con ese nombre.

> **Advertencia:** `'10'` y `10` no son lo mismo. El primero es texto y el segundo es un número; `class()` lo confirma.

## Resumen

- R es el lenguaje y RStudio el entorno donde escribimos y ejecutamos código.
- La consola ejecuta expresiones; un script `.R` permite guardarlas y repetirlas.
- `<-` asigna valores a variables y `#` introduce comentarios.
- `+`, `-`, `*`, `/`, `^`, `%%` y `%/%` realizan operaciones aritméticas.
- `class()` revela el tipo: numérico, lógico o carácter.

## Ejercicios

### Ejercicio 1. Predice el resultado (comprensión)

Sin ejecutarlos, escribe qué muestra cada expresión:

```r
(3 + 2) * 2
2 ^ 4
9 %% 4
```

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

Se resuelve primero lo que está entre paréntesis, después la potencia y por último el resto.

```r
(3 + 2) * 2  # 10
2 ^ 4        # 16
9 %% 4       # 1
```

#### Por qué funciona

`3 + 2` vale 5 y `5 * 2` vale 10. La potencia `2 ^ 4` es `2 * 2 * 2 * 2 = 16`. El operador `%%` devuelve el resto de la división entera: 4 cabe una vez en 9 y sobra 1.

#### Conceptos utilizados

- Precedencia de operadores y uso de paréntesis.
- Potencia y resto de división entera.

#### Errores habituales

- Escribir `2 ** 4`: en R no existe ese operador y produce un error de sintaxis.
- Confundir `%%` (resto) con `%/%` (cociente entero).

</details>

### Ejercicio 2. Crea tus primeras variables (aplicación)

Crea una variable `edad` con un número entero y otra `nombre` con tu nombre. Muestra ambas y comprueba sus tipos con `class()`.

**Pista:** guarda el texto entre comillas; el número, sin ellas.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```r
edad <- 30
nombre <- 'Ana'
edad
nombre
class(edad)
class(nombre)
```

```text
[1] 30
[1] "Ana"
[1] "numeric"
[1] "character"
```

#### Por qué funciona

`<-` guarda cada valor bajo su nombre. `class()` no modifica nada: solo devuelve el tipo del objeto que recibe. Como `30` se escribió sin comillas es numérico, y `'Ana'` es carácter.

#### Conceptos utilizados

- Asignación con `<-`.
- Diferencia entre texto y número.
- Función `class()`.

#### Errores habituales

- Escribir `nombre <- Ana`: R busca un objeto llamado `Ana` y avisa de que no existe.
- Escribir `edad <- '30'`: la edad sería texto y `class()` devolvería `"character"`.

</details>

### Ejercicio 3. Calcular un presupuesto (integración)

Un cuaderno cuesta 3.5 y necesitas 4. Además, el envío cuesta 2. Calcula el total con variables y comprueba que el resultado es 16.

**Criterios de éxito:** usar al menos tres variables y una sola expresión final que combine precio, cantidad y envío.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

```r
precio_cuaderno <- 3.5
cantidad <- 4
envio <- 2
total <- precio_cuaderno * cantidad + envio
total
```

```text
[1] 16
```

#### Por qué funciona

La multiplicación se resuelve antes que la suma, así que `3.5 * 4 = 14` y después `14 + 2 = 16`. Guardar cada dato en su propia variable hace que el cambio de uno de ellos —por ejemplo, otro precio— no obligue a reescribir toda la cuenta.

#### Conceptos utilizados

- Variables con nombres descriptivos.
- Precedencia de operadores.
- Reutilización de variables en una expresión.

#### Errores habituales

- Sumar antes de multiplicar escribiendo `precio_cuaderno * (cantidad + envio)`: el resultado sería 21.
- Repetir los números en la expresión final en lugar de usar las variables.

</details>

### Ejercicio 4. Actualizar un valor (resolución)

Una cuenta empieza con 50 unidades. Se retiran 12 y después se añade el doble de lo que queda. ¿Con cuántas unidades termina? Resuélvelo con variables, sin escribir el resultado final a mano.

<details>
<summary>Ver la solución del ejercicio 4</summary>

#### Resolución

```r
saldo <- 50
saldo <- saldo - 12
saldo <- saldo + saldo * 2
saldo
```

```text
[1] 114
```

#### Por qué funciona

Tras la retirada quedan `50 - 12 = 38`. En la última línea, el lado derecho se calcula con el valor actual: `38 + 38 * 2 = 38 + 76 = 114`. Solo después se guarda el resultado en `saldo`.

#### Conceptos utilizados

- Reasignación de variables.
- Evaluación del lado derecho antes de guardar.
- Precedencia de la multiplicación sobre la suma.

#### Errores habituales

- Calcular el doble del saldo inicial en vez del actual: daría 138.
- Crear una variable nueva en cada paso y perder la pista de cuál es el saldo vigente.

</details>
